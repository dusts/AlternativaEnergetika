(function () {
  var STORAGE_KEY = "ae-progress-v1";
  var THEME_KEY = "ae-theme";
  var app = document.getElementById("app");

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function letter(index) {
    return String.fromCharCode(65 + index);
  }

  function normalizeQuestion(raw, index) {
    var choices = Array.isArray(raw && raw.choices) ? raw.choices.map(function (choice) {
      return String(choice);
    }) : [];
    var answer = null;
    var warning = "";
    var given = raw ? raw.answer : null;

    if (given !== null && given !== undefined && given !== "") {
      if (typeof given === "string" && /^[a-h]$/i.test(given.trim())) {
        answer = given.trim().toUpperCase().charCodeAt(0) - 65;
      } else if (Number.isInteger(Number(given)) && String(given).trim() !== "") {
        answer = Number(given);
      } else {
        answer = -1;
      }

      if (answer < 0 || answer >= choices.length) {
        warning = "Question " + (raw && raw.id != null ? raw.id : index + 1) +
          " has an answer the choices do not include, so it is not scored.";
        answer = null;
      }
    }

    var prompt = raw && raw.prompt != null ? String(raw.prompt).trim() : "";
    return {
      warning: warning,
      question: {
        id: raw && raw.id != null ? raw.id : index + 1,
        topic: raw && raw.topic ? String(raw.topic).trim() : "",
        prompt: prompt || ("Question " + (index + 1)),
        choices: choices,
        answer: answer,
        explanation: raw && raw.explanation ? String(raw.explanation).trim() : ""
      }
    };
  }

  function scoreQuestions(questions, picks) {
    var correct = 0;
    var wrong = 0;
    var blank = 0;
    var unkeyed = 0;
    questions.forEach(function (question) {
      if (question.answer === null) {
        unkeyed += 1;
        return;
      }
      var pick = picks[question.id];
      if (pick == null || pick === "") blank += 1;
      else if (Number(pick) === question.answer) correct += 1;
      else wrong += 1;
    });
    return {
      total: questions.length,
      keyed: questions.length - unkeyed,
      correct: correct,
      wrong: wrong,
      blank: blank,
      unkeyed: unkeyed
    };
  }

  function feedbackModel(question, pick, mode) {
    if (mode === "test") {
      if (pick == null) return { kind: "empty", title: "Choose an answer." };
      return { kind: "pending", title: "Saved. The result waits until the test ends." };
    }
    if (pick == null) return { kind: "empty", title: "Choose an answer." };
    if (question.answer === null) {
      return {
        kind: "unkeyed",
        title: "No answer key yet.",
        detail: "This choice stays on this device. It is scored after you set answer in questions.js."
      };
    }
    if (Number(pick) === question.answer) {
      return { kind: "correct", title: "Correct.", detail: question.explanation };
    }
    var detail = "The answer is " + letter(question.answer) + ".";
    if (question.explanation) detail += "\n" + question.explanation;
    return { kind: "wrong", title: "Not this one.", detail: detail };
  }

  function choiceClass(question, index, pick, mode) {
    var selected = pick != null && Number(pick) === index;
    if (mode === "test" || question.answer === null || pick == null) {
      return selected ? "is-selected" : "";
    }
    if (index === question.answer) return "is-correct";
    if (selected) return "is-wrong";
    return "";
  }

  var prepared = (Array.isArray(window.QUESTIONS) ? window.QUESTIONS : []).map(normalizeQuestion);
  var bank = prepared.map(function (item) { return item.question; });
  var warnings = prepared.map(function (item) { return item.warning; }).filter(Boolean);
  var topics = [];
  bank.forEach(function (question) {
    if (question.topic && topics.indexOf(question.topic) === -1) topics.push(question.topic);
  });

  var progress = loadProgress();
  var state = {
    view: "home",
    mode: "practice",
    topic: "",
    query: "",
    ids: [],
    index: 0,
    sheet: false
  };
  var scrollKey = "";

  function loadProgress() {
    try {
      var raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!raw || typeof raw !== "object") return { picks: {}, flags: {} };
      return {
        picks: raw.picks && typeof raw.picks === "object" ? raw.picks : {},
        flags: raw.flags && typeof raw.flags === "object" ? raw.flags : {}
      };
    } catch (error) {
      return { picks: {}, flags: {} };
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {}
  }

  function currentTheme() {
    try {
      var saved = localStorage.getItem(THEME_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch (error) {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function getPick(id) {
    var value = progress.picks[id];
    return value == null || value === "" ? null : Number(value);
  }

  function questionById(id) {
    for (var i = 0; i < bank.length; i += 1) {
      if (String(bank[i].id) === String(id)) return bank[i];
    }
    return null;
  }

  function matchesTopic(question) {
    return !state.topic || question.topic === state.topic;
  }

  function statusOf(question) {
    if (progress.flags[question.id]) {
      /* flag is separate from answer status */
    }
    var pick = getPick(question.id);
    if (pick == null) return "open";
    if (question.answer === null) return "saved";
    return pick === question.answer ? "correct" : "wrong";
  }

  function filteredBank() {
    var query = state.query.trim().toLowerCase();
    return bank.filter(function (question) {
      if (!matchesTopic(question)) return false;
      if (!query) return true;
      var haystack = (question.prompt + " " + question.topic + " " + question.choices.join(" ")).toLowerCase();
      return haystack.indexOf(query) !== -1 || String(question.id) === query;
    });
  }

  function idsFor(filter) {
    return bank.filter(function (question) {
      if (!matchesTopic(question)) return false;
      var pick = getPick(question.id);
      if (filter === "unanswered") return pick == null;
      if (filter === "missed") return pick != null && question.answer !== null && pick !== question.answer;
      if (filter === "flagged") return !!progress.flags[question.id];
      return true;
    }).map(function (question) { return question.id; });
  }

  function bankScore() {
    return scoreQuestions(bank.filter(matchesTopic), progress.picks);
  }

  function sessionQuestions() {
    return state.ids.map(questionById).filter(Boolean);
  }

  function choiceButtons(question, pick, mode) {
    if (!question.choices.length) {
      return "<p class=\"empty\">This question has no choices yet. Add them in questions.js.</p>";
    }
    return "<div class=\"choices\">" + question.choices.map(function (choice, index) {
      var cls = choiceClass(question, index, pick, mode);
      var pressed = pick != null && Number(pick) === index ? "true" : "false";
      return "<button type=\"button\" class=\"choice " + cls + "\" data-action=\"pick\" data-index=\"" + index +
        "\" aria-pressed=\"" + pressed + "\"><span class=\"letter\">" + letter(index) +
        "</span><span class=\"choice-text\">" + esc(choice) + "</span></button>";
    }).join("") + "</div>";
  }

  function feedbackHtml(question, pick, mode) {
    var model = feedbackModel(question, pick, mode);
    if (model.kind === "empty") return "";
    return "<div class=\"feedback " + model.kind + "\"><h2>" + esc(model.title) + "</h2>" +
      (model.detail ? "<p>" + esc(model.detail) + "</p>" : "") + "</div>";
  }

  function questionCard(question, pick, mode) {
    var topic = question.topic ? " · " + esc(question.topic) : "";
    return "<article class=\"card\"><p class=\"meta\">Question " + esc(question.id) + topic + "</p>" +
      "<h1 class=\"prompt\">" + esc(question.prompt) + "</h1>" +
      choiceButtons(question, pick, mode) +
      feedbackHtml(question, pick, mode) +
      "<p class=\"keys\"><kbd>1</kbd>-<kbd>4</kbd> answer · <kbd>←</kbd><kbd>→</kbd> move · <kbd>F</kbd> flag</p></article>";
  }

  function bubbleGrid(questions, currentId) {
    return "<div class=\"bubbles\">" + questions.map(function (question) {
      var status = statusOf(question);
      var classes = "bubble status-" + status +
        (progress.flags[question.id] ? " flagged" : "") +
        (String(question.id) === String(currentId) ? " current" : "");
      return "<button type=\"button\" class=\"" + classes + "\" data-action=\"jump-to\" data-id=\"" +
        esc(question.id) + "\">" + esc(question.id) + "</button>";
    }).join("") + "</div>";
  }

  function statusLabel(question) {
    var status = statusOf(question);
    var label = {
      open: "Not answered",
      saved: "Choice saved",
      correct: "Correct",
      wrong: "Not correct"
    }[status];
    if (progress.flags[question.id]) label += " · Flagged";
    if (question.topic) label = question.topic + " · " + label;
    return label;
  }

  function listHtml(questions) {
    if (!questions.length) return "<p class=\"empty\">No question matches that.</p>";
    return questions.map(function (question) {
      return "<button type=\"button\" class=\"q-row status-" + statusOf(question) + "\" data-action=\"open\" data-id=\"" +
        esc(question.id) + "\"><span class=\"num\">" + esc(question.id) + "</span><span><span class=\"row-title\">" +
        esc(question.prompt) + "</span><span class=\"row-meta\">" + esc(statusLabel(question)) + "</span></span></button>";
    }).join("");
  }

  function topicChips() {
    if (!topics.length) return "";
    var chips = ["<button type=\"button\" class=\"chip\" data-action=\"topic\" data-topic=\"\" aria-pressed=\"" +
      (state.topic === "" ? "true" : "false") + "\">All topics</button>"];
    topics.forEach(function (topic) {
      chips.push("<button type=\"button\" class=\"chip\" data-action=\"topic\" data-topic=\"" + esc(topic) +
        "\" aria-pressed=\"" + (state.topic === topic ? "true" : "false") + "\">" + esc(topic) + "</button>");
    });
    return "<div class=\"topics\">" + chips.join("") + "</div>";
  }

  function homeHtml() {
    var score = bankScore();
    var missed = idsFor("missed").length;
    var unanswered = idsFor("unanswered").length;
    var flagged = idsFor("flagged").length;
    var mastered = score.keyed ? (score.correct + " of " + score.keyed) : "—";
    var banner = "";
    if (!bank.length) {
      banner = "<p class=\"banner\">questions.js did not load, or it has no questions. Keep it in the same folder as this file.</p>";
    } else if (score.keyed === 0) {
      banner = "<p class=\"banner\">No answer keys yet. You can still read every question and save a choice. Scoring starts when <code>answer</code> is set.</p>";
    } else if (score.unkeyed) {
      banner = "<p class=\"banner\">" + score.unkeyed + " " + (score.unkeyed === 1 ? "question has" : "questions have") +
        " no answer key and " + (score.unkeyed === 1 ? "is" : "are") + " left out of the score.</p>";
    }
    var warningHtml = warnings.length ? "<ul class=\"warnings\">" + warnings.map(function (warning) {
      return "<li>" + esc(warning) + "</li>";
    }).join("") + "</ul>" : "";

    return "<div class=\"wrap\"><div class=\"home\"><section class=\"home-side\"><div class=\"topbar\"><div class=\"brand\"><span class=\"mark\" aria-hidden=\"true\">AE</span><div><p class=\"eyebrow\">On this device</p><h1>Alternativa Energetika</h1></div></div></div>" +
      "<p class=\"stats\"><span><strong>" + bank.length + "</strong> questions</span><span><strong>" + score.keyed +
      "</strong> answers filled in</span><span><strong>" + mastered + "</strong> mastered</span></p>" +
      banner + warningHtml +
      "<div class=\"actions stack\" style=\"margin-top:16px\">" +
      "<button type=\"button\" class=\"btn primary\" data-action=\"start\" data-mode=\"practice\" data-filter=\"all\">Practice<span class=\"btn-note\">See the answer as soon as you choose</span></button>" +
      "<button type=\"button\" class=\"btn\" data-action=\"start\" data-mode=\"test\" data-filter=\"all\">Test<span class=\"btn-note\">Score at the end</span></button>" +
      "<button type=\"button\" class=\"btn\" data-action=\"start\" data-mode=\"practice\" data-filter=\"unanswered\"" + (unanswered ? "" : " disabled") + ">Unanswered (" + unanswered + ")</button>" +
      "<button type=\"button\" class=\"btn\" data-action=\"start\" data-mode=\"practice\" data-filter=\"missed\"" + (missed ? "" : " disabled") + ">Missed (" + missed + ")</button>" +
      "<button type=\"button\" class=\"btn\" data-action=\"start\" data-mode=\"practice\" data-filter=\"flagged\"" + (flagged ? "" : " disabled") + ">Flagged (" + flagged + ")</button>" +
      "</div><details class=\"help\"><summary>How to add questions and answers</summary>" +
      "<p>Open <code>questions.js</code> in this folder with any text editor. Replace the prompt and choices. When you know the answer, set <code>answer</code> to <code>\"A\"</code>, <code>\"B\"</code>, <code>\"C\"</code>, or <code>\"D\"</code>. Leave <code>null</code> until then. Save the file and refresh this window.</p>" +
      "<p>Copy the whole folder onto a phone and open <code>index.html</code>. The app never connects to the internet. Choices and flags stay in this browser.</p></details>" +
      "<div class=\"actions\" style=\"margin-top:16px\"><button type=\"button\" class=\"text-btn\" data-action=\"theme\">" +
      (currentTheme() === "dark" ? "Light mode" : "Dark mode") +
      "</button><button type=\"button\" class=\"text-btn\" data-action=\"reset\">Clear saved choices</button></div></section>" +
      "<section class=\"panel\"><div class=\"panel-head\"><h2>Questions</h2><input class=\"search\" id=\"search\" type=\"search\" placeholder=\"Search\" value=\"" +
      esc(state.query) + "\" autocomplete=\"off\" spellcheck=\"false\"></div>" + topicChips() +
      "<div class=\"q-list\">" + listHtml(filteredBank()) + "</div></section></div></div>";
  }

  function sessionHtml() {
    var questions = sessionQuestions();
    var question = questions[state.index];
    if (!question) return homeHtml();
    var pick = getPick(question.id);
    var width = questions.length ? Math.round(((state.index + 1) / questions.length) * 100) : 0;
    var sheet = state.sheet ? "<div class=\"sheet\"><div class=\"topbar\"><strong>Jump to a question</strong><button type=\"button\" class=\"text-btn spacer\" data-action=\"close-sheet\">Close</button></div>" +
      bubbleGrid(questions, question.id) + "</div>" : "";
    return "<div class=\"wrap\"><div class=\"session\"><aside class=\"rail\"><h2>" +
      (state.mode === "test" ? "Test" : "Practice") + "</h2>" + bubbleGrid(questions, question.id) +
      "</aside><div><div class=\"session-head\"><button type=\"button\" class=\"text-btn\" data-action=\"home\">Close</button>" +
      "<span class=\"pos\">" + (state.index + 1) + " / " + questions.length + "</span><span class=\"spacer\"></span>" +
      "<button type=\"button\" class=\"icon-btn jump\" data-action=\"open-sheet\">Jump</button>" +
      "<button type=\"button\" class=\"icon-btn\" data-action=\"flag\" aria-pressed=\"" +
      (progress.flags[question.id] ? "true" : "false") + "\">" + (progress.flags[question.id] ? "Flagged" : "Flag") +
      "</button></div><div class=\"progress\" aria-hidden=\"true\"><span style=\"width:" + width + "%\"></span></div>" +
      "<div style=\"height:14px\"></div>" + questionCard(question, pick, state.mode) +
      "<div class=\"session-nav\"><button type=\"button\" class=\"btn\" data-action=\"prev\"" +
      (state.index === 0 ? " disabled" : "") + ">Back</button><button type=\"button\" class=\"btn primary\" data-action=\"next\">" +
      (state.index === questions.length - 1 ? "Finish" : "Next") + "</button></div></div></div>" + sheet + "</div>";
  }

  function summaryHtml() {
    var questions = sessionQuestions();
    var score = scoreQuestions(questions, progress.picks);
    var missed = questions.filter(function (question) {
      var pick = getPick(question.id);
      return pick != null && question.answer !== null && pick !== question.answer;
    });
    var fraction = score.keyed ? (score.correct + "<small>of " + score.keyed + "</small>") : "—";
    var missedHtml = missed.length ? "<ul class=\"miss-list\">" + missed.map(function (question) {
      return "<li>" + esc(question.id) + ". " + esc(question.prompt) + "</li>";
    }).join("") + "</ul>" : "<p class=\"stats\">No missed questions in this set.</p>";
    return "<div class=\"wrap\"><p class=\"eyebrow\">" + (state.mode === "test" ? "Test finished" : "Practice finished") +
      "</p><h1 class=\"score-big\">" + fraction + "</h1><p class=\"stats\">Counted only where an answer key exists. Nothing left this device.</p>" +
      "<div class=\"breakdown\"><div><strong>" + score.correct + "</strong><span>Correct</span></div><div><strong>" +
      score.wrong + "</strong><span>Not correct</span></div><div><strong>" + score.blank +
      "</strong><span>Not answered</span></div><div><strong>" + score.unkeyed +
      "</strong><span>No answer key</span></div></div>" + missedHtml +
      "<div class=\"summary-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"review-missed\"" +
      (missed.length ? "" : " disabled") + ">Review missed</button><button type=\"button\" class=\"btn\" data-action=\"home\">Back to start</button></div></div>";
  }

  function render() {
    if (!app) return;
    var key = state.view + ":" + state.index + ":" + state.mode;
    var html = state.view === "session" ? sessionHtml() : state.view === "summary" ? summaryHtml() : homeHtml();
    app.innerHTML = html;
    if (state.view === "session" && key !== scrollKey) window.scrollTo(0, 0);
    scrollKey = key;
    if (state.query && document.activeElement && document.activeElement.id !== "search") {
      var search = document.getElementById("search");
      if (search && document.activeElement === document.body) {
        search.focus();
      }
    }
  }

  function start(mode, filter) {
    var ids = idsFor(filter);
    if (!ids.length) return;
    state.view = "session";
    state.mode = mode;
    state.ids = ids;
    state.index = 0;
    state.sheet = false;
    render();
  }

  function openQuestion(id) {
    var visible = filteredBank();
    var ids = visible.map(function (question) { return question.id; });
    var index = -1;
    for (var i = 0; i < ids.length; i += 1) {
      if (String(ids[i]) === String(id)) index = i;
    }
    if (index < 0) return;
    state.view = "session";
    state.mode = "practice";
    state.ids = ids;
    state.index = index;
    state.sheet = false;
    render();
  }

  function pick(index) {
    var question = sessionQuestions()[state.index];
    if (!question || index < 0 || index >= question.choices.length) return;
    progress.picks[question.id] = index;
    saveProgress();
    render();
  }

  function restoreSearchFocus() {
    var search = document.getElementById("search");
    if (!search) return;
    search.focus();
    var end = search.value.length;
    search.setSelectionRange(end, end);
  }

  if (app) {
    app.addEventListener("click", function (event) {
      var target = event.target.closest("[data-action]");
      if (!target || target.disabled) return;
      var action = target.getAttribute("data-action");

      if (action === "start") start(target.getAttribute("data-mode"), target.getAttribute("data-filter"));
      else if (action === "open") openQuestion(target.getAttribute("data-id"));
      else if (action === "home") {
        state.view = "home";
        state.sheet = false;
        render();
      } else if (action === "next") {
        if (state.index >= state.ids.length - 1) {
          state.view = "summary";
          state.sheet = false;
          render();
        } else {
          state.index += 1;
          render();
        }
      } else if (action === "prev") {
        if (state.index > 0) {
          state.index -= 1;
          render();
        }
      } else if (action === "pick") pick(Number(target.getAttribute("data-index")));
      else if (action === "flag") {
        var current = sessionQuestions()[state.index];
        if (!current) return;
        if (progress.flags[current.id]) delete progress.flags[current.id];
        else progress.flags[current.id] = true;
        saveProgress();
        render();
      } else if (action === "open-sheet") {
        state.sheet = true;
        render();
      } else if (action === "close-sheet") {
        state.sheet = false;
        render();
      } else if (action === "jump-to") {
        var id = target.getAttribute("data-id");
        for (var i = 0; i < state.ids.length; i += 1) {
          if (String(state.ids[i]) === String(id)) state.index = i;
        }
        state.sheet = false;
        render();
      } else if (action === "topic") {
        state.topic = target.getAttribute("data-topic") || "";
        render();
        restoreSearchFocus();
      } else if (action === "theme") {
        var next = currentTheme() === "dark" ? "light" : "dark";
        try { localStorage.setItem(THEME_KEY, next); } catch (error) {}
        document.documentElement.setAttribute("data-theme", next);
        render();
      } else if (action === "reset") {
        if (window.confirm("Clear saved choices and flags on this device?")) {
          progress = { picks: {}, flags: {} };
          saveProgress();
          render();
        }
      } else if (action === "review-missed") {
        var ids = sessionQuestions().filter(function (question) {
          var chosen = getPick(question.id);
          return chosen != null && question.answer !== null && chosen !== question.answer;
        }).map(function (question) { return question.id; });
        if (!ids.length) return;
        state.view = "session";
        state.mode = "practice";
        state.ids = ids;
        state.index = 0;
        render();
      }
    });

    app.addEventListener("input", function (event) {
      if (event.target.id !== "search") return;
      state.query = event.target.value;
      render();
      restoreSearchFocus();
    });
  }

  document.addEventListener("keydown", function (event) {
    if (state.view !== "session") return;
    if (event.target && (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA")) return;
    if (event.key >= "1" && event.key <= "9") {
      pick(Number(event.key) - 1);
    } else if (event.key === "ArrowRight") {
      if (state.index >= state.ids.length - 1) {
        state.view = "summary";
        render();
      } else {
        state.index += 1;
        render();
      }
    } else if (event.key === "ArrowLeft" && state.index > 0) {
      state.index -= 1;
      render();
    } else if (event.key === "f" || event.key === "F") {
      var current = sessionQuestions()[state.index];
      if (!current) return;
      if (progress.flags[current.id]) delete progress.flags[current.id];
      else progress.flags[current.id] = true;
      saveProgress();
      render();
    } else if (event.key === "Escape") {
      if (state.sheet) {
        state.sheet = false;
        render();
      } else {
        state.view = "home";
        render();
      }
    }
  });

  function renderSelfTest() {
    var lines = [];
    function ok(name, condition) {
      lines.push((condition ? "PASS" : "FAIL") + " " + name);
    }

    ok("bank count", bank.length === 71);
    ok("all unkeyed", bank.every(function (question) { return question.answer === null && question.choices.length === 4; }));

    var parsed = normalizeQuestion({
      id: 9,
      prompt: "Hi <b>",
      choices: ["one", "two", "three", "four"],
      answer: "C",
      explanation: "Because"
    }, 0);
    ok("letter C is index 2", parsed.question.answer === 2);
    ok("escape", esc("Hi <b>") === "Hi &lt;b&gt;");

    var invalid = normalizeQuestion({ id: 4, prompt: "Q", choices: ["a", "b"], answer: 5 }, 0);
    ok("invalid answer dropped", invalid.question.answer === null && !!invalid.warning);

    var numeric = normalizeQuestion({ id: 5, prompt: "Q", choices: ["a", "b", "c"], answer: 0 }, 0);
    ok("zero is choice A", numeric.question.answer === 0);

    var scored = scoreQuestions([
      { id: 1, answer: 1 },
      { id: 2, answer: 0 },
      { id: 3, answer: null }
    ], { 1: 1, 2: 3 });
    ok("one correct", scored.correct === 1);
    ok("one wrong", scored.wrong === 1);
    ok("one unkeyed", scored.unkeyed === 1 && scored.keyed === 2);

    ok("unkeyed feedback", feedbackModel({ answer: null, explanation: "" }, 0, "practice").kind === "unkeyed");
    ok("test hides result", feedbackModel({ answer: 0, explanation: "" }, 1, "test").kind === "pending");
    ok("wrong names the key", feedbackModel({ answer: 1, explanation: "See the diagram." }, 0, "practice").detail.indexOf("The answer is B.") === 0);
    ok("selected class", choiceClass({ answer: null }, 1, 1, "practice") === "is-selected");
    ok("correct class", choiceClass({ answer: 1 }, 1, 0, "practice") === "is-correct");
    ok("wrong class", choiceClass({ answer: 1 }, 0, 0, "practice") === "is-wrong");

    var samples = [
      { title: "Practice, correct", question: { id: 1, topic: "Solar", prompt: "Which choice is right?", choices: ["North", "South", "East", "West"], answer: 1, explanation: "South is the keyed choice." }, pick: 1, mode: "practice" },
      { title: "Practice, wrong", question: { id: 2, topic: "", prompt: "A longer question that wraps onto more than one line so the card can be checked on a narrow screen.", choices: ["Alpha", "Beta", "Gamma", "Delta"], answer: 2, explanation: "" }, pick: 0, mode: "practice" },
      { title: "Practice, no key yet", question: { id: 3, topic: "", prompt: "Question with no answer filled in.", choices: ["Choice A", "Choice B", "Choice C", "Choice D"], answer: null, explanation: "" }, pick: 0, mode: "practice" },
      { title: "Test, choice saved", question: { id: 4, topic: "", prompt: "Test mode keeps the result hidden.", choices: ["One", "Two", "Three", "Four"], answer: 3, explanation: "Hidden until the end." }, pick: 3, mode: "test" }
    ];

    var passed = lines.every(function (line) { return line.indexOf("PASS") === 0; });
    app.innerHTML = "<div class=\"wrap\"><div class=\"samples\">" + samples.map(function (sample) {
      return "<section><h2>" + sample.title + "</h2>" + questionCard(sample.question, sample.pick, sample.mode) + "</section>";
    }).join("") + "<pre id=\"selftest\">" + (passed ? "ALL PASS\n" : "HAS FAIL\n") + lines.join("\n") + "</pre></div></div>";
  }

  if (new URLSearchParams(location.search).get("selftest") === "1") renderSelfTest();
  else render();
})();
