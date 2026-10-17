(function () {
  var STORAGE_KEY = "ae-progress-v1";
  var THEME_KEY = "ae-theme";
  var LANG_KEY = "ae-lang";
  var app = document.getElementById("app");

  var I18N = {
    lv: {
      onDevice: "Šajā ierīcē",
      statQuestions: "jautājumi",
      statModels: "paraugatbildes",
      statMastered: "apgūti",
      modelNote: "Paraugatbildes ir mācību paraugi, nevis oficiāla eksāmena atslēga. Praksē atver atbildi un atzīmē, vai to zināji.",
      noQuestions: "questions.js neielādējās vai tajā nav jautājumu. Turiet to vienā mapē ar šo failu.",
      noneKeyed: "Paraugatbilžu vēl nav. Jautājumus var lasīt. Skaitīšana sākas, kad ir aizpildīts explanation.",
      leftOut: "Bez paraugatbildes, tāpēc ārpus rezultāta: {n}",
      badAnswer: "Jautājumam {id} ir atbilde, kas nav starp variantiem, tāpēc to neskaita.",
      practice: "Prakse",
      practiceNote: "Atver paraugatbildi un atzīmē, vai zināji",
      test: "Tests",
      testNote: "Atbildes slēptas līdz beigām",
      unanswered: "Neatzīmētie",
      missed: "Jāatkārto",
      flagged: "Ar karodziņu",
      howTo: "Kā labot jautājumus un atbildes",
      howToBody1: "Atver questions.js šajā mapē. Katram jautājumam ir prompt latviski un promptEn angliski, kā arī explanation un explanationEn. Tās ir paraugatbildes. choices atstāj tukšu un answer atstāj null, kamēr nav īstu atbilžu variantu. Saglabā failu un atsvaidzini logu.",
      howToBody2: "Nokopē visu mapi uz tālruni un atver index.html. Lietotne nesavienojas ar internetu. Atzīmes, karodziņi, valoda un režīms paliek šajā pārlūkā.",
      lightMode: "Gaišais režīms",
      darkMode: "Tumšais režīms",
      clearSaved: "Dzēst saglabāto",
      questionsHeading: "Jautājumi",
      search: "Meklēt",
      allTopics: "Visas tēmas",
      noMatch: "Nekas neatbilst.",
      close: "Aizvērt",
      jump: "Pāriet",
      jumpTitle: "Pāriet uz jautājumu",
      flag: "Karodziņš",
      flaggedState: "Ar karodziņu",
      back: "Atpakaļ",
      next: "Tālāk",
      finish: "Beigt",
      showAnswer: "Rādīt atbildi",
      modelAnswer: "Paraugatbilde",
      know: "Zinu",
      again: "Jāatkārto",
      testMarkHint: "Testā atbildi neredzi. Atzīmē pats. Pārskatā redzēsi paraugatbildi.",
      noChoices: "Šim jautājumam vēl nav atbilžu variantu. Pievieno tos questions.js.",
      questionWord: "Jautājums",
      keysAnswer: "atbilde",
      keysMove: "pārvietoties",
      keysFlag: "karodziņš",
      chooseAnswer: "Izvēlies atbildi.",
      savedUntilEnd: "Saglabāts. Rezultāts būs testa beigās.",
      noKeyYet: "Atslēgas vēl nav.",
      noKeyDetail: "Šī izvēle paliek šajā ierīcē. To skaita pēc tam, kad questions.js ir iestatīts answer.",
      correctMc: "Pareizi.",
      wrongMc: "Nav pareizi.",
      answerIs: "Atbilde ir",
      notAnswered: "Nav atzīmēts",
      choiceSaved: "Izvēle saglabāta",
      correctStatus: "Pareizi",
      wrongStatus: "Nav pareizi",
      statusFlag: " · karodziņš",
      testFinished: "Tests pabeigts",
      practiceFinished: "Prakse pabeigta",
      summaryNote: "Skaitītas ir tavas atzīmes. Paraugatbildes paliek šajā ierīcē.",
      summaryTest: "Testa laikā paraugatbildes bija paslēptas.",
      notMarked: "Bez atzīmes",
      noModel: "Nav parauga",
      noMissed: "Šajā komplektā nav jautājumu, kurus atzīmēji kā jāatkārto.",
      reviewMissed: "Pārskatīt jāatkārto",
      backToStart: "Uz sākumu",
      resetConfirm: "Dzēst šajā ierīcē saglabātās atzīmes un karodziņus?",
      langLabel: "Valoda"
    },
    en: {
      onDevice: "On this device",
      statQuestions: "questions",
      statModels: "model answers",
      statMastered: "mastered",
      modelNote: "Model answers are study samples, not an official exam key. In practice, open the answer and mark whether you knew it.",
      noQuestions: "questions.js did not load, or it has no questions. Keep it in the same folder as this file.",
      noneKeyed: "No model answers yet. You can still read every question. Scoring starts when explanation is set.",
      leftOut: "Left out of the score because there is no model answer: {n}",
      badAnswer: "Question {id} has an answer the choices do not include, so it is not scored.",
      practice: "Practice",
      practiceNote: "Open the model answer, then mark whether you knew it",
      test: "Test",
      testNote: "Answers stay hidden until the end",
      unanswered: "Not marked",
      missed: "Review again",
      flagged: "Flagged",
      howTo: "How to edit questions and answers",
      howToBody1: "Open questions.js in this folder. Each question has prompt in Latvian and promptEn in English, plus explanation and explanationEn. Those are the model answers. Leave choices empty and answer as null until there are real options. Save the file and refresh this window.",
      howToBody2: "Copy the whole folder onto a phone and open index.html. The app never connects to the internet. Marks, flags, language, and theme stay in this browser.",
      lightMode: "Light mode",
      darkMode: "Dark mode",
      clearSaved: "Clear saved marks",
      questionsHeading: "Questions",
      search: "Search",
      allTopics: "All topics",
      noMatch: "Nothing matches.",
      close: "Close",
      jump: "Jump",
      jumpTitle: "Jump to a question",
      flag: "Flag",
      flaggedState: "Flagged",
      back: "Back",
      next: "Next",
      finish: "Finish",
      showAnswer: "Show answer",
      modelAnswer: "Model answer",
      know: "Knew it",
      again: "Review again",
      testMarkHint: "The test does not show the answer. Mark it yourself. Review shows the model answer.",
      noChoices: "This question has no choices yet. Add them in questions.js.",
      questionWord: "Question",
      keysAnswer: "answer",
      keysMove: "move",
      keysFlag: "flag",
      chooseAnswer: "Choose an answer.",
      savedUntilEnd: "Saved. The result waits until the test ends.",
      noKeyYet: "No answer key yet.",
      noKeyDetail: "This choice stays on this device. It is scored after you set answer in questions.js.",
      correctMc: "Correct.",
      wrongMc: "Not this one.",
      answerIs: "The answer is",
      notAnswered: "Not marked",
      choiceSaved: "Choice saved",
      correctStatus: "Correct",
      wrongStatus: "Not correct",
      statusFlag: " · Flagged",
      testFinished: "Test finished",
      practiceFinished: "Practice finished",
      summaryNote: "Your own marks are counted. Model answers stay on this device.",
      summaryTest: "Model answers stayed hidden during the test.",
      notMarked: "Not marked",
      noModel: "No model answer",
      noMissed: "No questions in this set were marked for review.",
      reviewMissed: "Review marked again",
      backToStart: "Back to start",
      resetConfirm: "Clear saved marks and flags on this device?",
      langLabel: "Language"
    }
  };

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

  function currentLang() {
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved === "en" || saved === "lv") return saved;
    } catch (error) {}
    return "lv";
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === "en" ? "en" : "lv";
  }

  function t(key) {
    var pack = I18N[currentLang()] || I18N.lv;
    if (pack[key] != null) return pack[key];
    return I18N.lv[key] != null ? I18N.lv[key] : key;
  }

  function textIn(question, field, lang) {
    var local = question && question[field] ? String(question[field]) : "";
    var other = question && question[field + "En"] ? String(question[field + "En"]) : "";
    if (lang === "en" && other) return other;
    return local || other;
  }

  function qText(question, field) {
    return textIn(question, field, currentLang());
  }

  function fieldText(raw, name) {
    return raw && raw[name] != null ? String(raw[name]).trim() : "";
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
        warning = String(raw && raw.id != null ? raw.id : index + 1);
        answer = null;
      }
    }

    var prompt = fieldText(raw, "prompt");
    return {
      warning: warning,
      question: {
        id: raw && raw.id != null ? raw.id : index + 1,
        topic: fieldText(raw, "topic"),
        topicEn: fieldText(raw, "topicEn"),
        prompt: prompt || ("Question " + (index + 1)),
        promptEn: fieldText(raw, "promptEn"),
        choices: choices,
        answer: answer,
        explanation: fieldText(raw, "explanation"),
        explanationEn: fieldText(raw, "explanationEn")
      }
    };
  }

  function hasModel(question) {
    return !!(question && (question.explanation || question.explanationEn));
  }

  function isOpen(question) {
    if (!question || (question.choices && question.choices.length)) return false;
    return hasModel(question);
  }

  function scoreQuestions(questions, picks, marks) {
    var correct = 0;
    var wrong = 0;
    var blank = 0;
    var unkeyed = 0;
    marks = marks || {};
    questions.forEach(function (question) {
      if (question.answer !== null && question.answer !== undefined) {
        var pick = picks[question.id];
        if (pick == null || pick === "") blank += 1;
        else if (Number(pick) === question.answer) correct += 1;
        else wrong += 1;
        return;
      }
      if (isOpen(question)) {
        var mark = marks[question.id];
        if (mark === "know") correct += 1;
        else if (mark === "again") wrong += 1;
        else blank += 1;
        return;
      }
      unkeyed += 1;
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
      if (pick == null) return { kind: "empty", title: t("chooseAnswer") };
      return { kind: "pending", title: t("savedUntilEnd") };
    }
    if (pick == null) return { kind: "empty", title: t("chooseAnswer") };
    if (question.answer === null) {
      return { kind: "unkeyed", title: t("noKeyYet"), detail: t("noKeyDetail") };
    }
    if (Number(pick) === question.answer) {
      return { kind: "correct", title: t("correctMc"), detail: qText(question, "explanation") };
    }
    var detail = t("answerIs") + " " + letter(question.answer) + ".";
    var extra = qText(question, "explanation");
    if (extra) detail += "\n" + extra;
    return { kind: "wrong", title: t("wrongMc"), detail: detail };
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
    sheet: false,
    revealed: {}
  };
  var scrollKey = "";

  function cleanMarks(raw) {
    var marks = {};
    if (!raw || typeof raw !== "object") return marks;
    Object.keys(raw).forEach(function (key) {
      if (raw[key] === "know" || raw[key] === "again") marks[key] = raw[key];
    });
    return marks;
  }

  function loadProgress() {
    try {
      var raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!raw || typeof raw !== "object") return { picks: {}, flags: {}, marks: {} };
      return {
        picks: raw.picks && typeof raw.picks === "object" ? raw.picks : {},
        flags: raw.flags && typeof raw.flags === "object" ? raw.flags : {},
        marks: cleanMarks(raw.marks)
      };
    } catch (error) {
      return { picks: {}, flags: {}, marks: {} };
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

  function getMark(id) {
    var value = progress.marks[id];
    return value === "know" || value === "again" ? value : null;
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

  function topicLabel(topic) {
    if (!topic) return t("allTopics");
    if (currentLang() !== "en") return topic;
    for (var i = 0; i < bank.length; i += 1) {
      if (bank[i].topic === topic && bank[i].topicEn) return bank[i].topicEn;
    }
    return topic;
  }

  function statusOf(question) {
    if (question.answer !== null && question.answer !== undefined) {
      var pick = getPick(question.id);
      if (pick == null) return "open";
      return pick === question.answer ? "correct" : "wrong";
    }
    if (isOpen(question)) {
      var mark = getMark(question.id);
      if (mark === "know") return "correct";
      if (mark === "again") return "wrong";
      return "open";
    }
    return getPick(question.id) == null ? "open" : "saved";
  }

  function isMissed(question) {
    if (question.answer !== null && question.answer !== undefined) {
      var pick = getPick(question.id);
      return pick != null && pick !== question.answer;
    }
    return isOpen(question) && getMark(question.id) === "again";
  }

  function filteredBank() {
    var query = state.query.trim().toLowerCase();
    return bank.filter(function (question) {
      if (!matchesTopic(question)) return false;
      if (!query) return true;
      var haystack = [
        question.prompt, question.promptEn, question.topic, question.topicEn,
        question.explanation, question.explanationEn
      ].join(" ").toLowerCase();
      return haystack.indexOf(query) !== -1 || String(question.id) === query;
    });
  }

  function idsFor(filter) {
    return bank.filter(function (question) {
      if (!matchesTopic(question)) return false;
      if (filter === "unanswered") return statusOf(question) === "open";
      if (filter === "missed") return isMissed(question);
      if (filter === "flagged") return !!progress.flags[question.id];
      return true;
    }).map(function (question) { return question.id; });
  }

  function bankScore() {
    return scoreQuestions(bank.filter(matchesTopic), progress.picks, progress.marks);
  }

  function sessionQuestions() {
    return state.ids.map(questionById).filter(Boolean);
  }

  function masteredText(score) {
    if (!score.keyed) return "—";
    return currentLang() === "en"
      ? (score.correct + " of " + score.keyed)
      : (score.correct + " no " + score.keyed);
  }

  function langSwitch() {
    var lang = currentLang();
    return "<div class=\"lang\" role=\"group\" aria-label=\"" + esc(t("langLabel")) + "\">" +
      "<button type=\"button\" class=\"chip\" data-action=\"lang\" data-lang=\"lv\" aria-pressed=\"" +
      (lang === "lv" ? "true" : "false") + "\">LV</button>" +
      "<button type=\"button\" class=\"chip\" data-action=\"lang\" data-lang=\"en\" aria-pressed=\"" +
      (lang === "en" ? "true" : "false") + "\">EN</button></div>";
  }

  function choiceButtons(question, pick, mode) {
    if (!question.choices.length) {
      return "<p class=\"empty\">" + esc(t("noChoices")) + "</p>";
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

  function markButtons(question) {
    var mark = getMark(question.id);
    return "<div class=\"answer-actions\">" +
      "<button type=\"button\" class=\"btn" + (mark === "know" ? " primary" : "") +
      "\" data-action=\"mark\" data-mark=\"know\" aria-pressed=\"" + (mark === "know" ? "true" : "false") +
      "\">" + esc(t("know")) + "</button>" +
      "<button type=\"button\" class=\"btn" + (mark === "again" ? " is-again" : "") +
      "\" data-action=\"mark\" data-mark=\"again\" aria-pressed=\"" + (mark === "again" ? "true" : "false") +
      "\">" + esc(t("again")) + "</button></div>";
  }

  function openAnswerHtml(question, mode) {
    var revealed = mode !== "test" && !!state.revealed[question.id];
    var html = "";
    if (!revealed && mode !== "test") {
      html += "<div class=\"answer-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"reveal\">" +
        esc(t("showAnswer")) + "</button></div>";
    }
    if (revealed) {
      html += "<div class=\"feedback model\"><h2>" + esc(t("modelAnswer")) + "</h2><p>" +
        esc(qText(question, "explanation")) + "</p></div>";
    }
    if (revealed || mode === "test") html += markButtons(question);
    if (mode === "test") html += "<p class=\"hint\">" + esc(t("testMarkHint")) + "</p>";
    return html;
  }

  function keysHtml(question) {
    var move = "<kbd>←</kbd><kbd>→</kbd> " + esc(t("keysMove"));
    var flag = "<kbd>F</kbd> " + esc(t("keysFlag"));
    if (question.choices.length) {
      return "<kbd>1</kbd>-<kbd>4</kbd> " + esc(t("keysAnswer")) + " · " + move + " · " + flag;
    }
    return move + " · " + flag;
  }

  function questionCard(question, pick, mode) {
    var topic = qText(question, "topic");
    var topicBit = topic ? " · " + esc(topic) : "";
    var body;
    if (question.choices.length) body = choiceButtons(question, pick, mode) + feedbackHtml(question, pick, mode);
    else if (isOpen(question)) body = openAnswerHtml(question, mode);
    else body = "<p class=\"empty\">" + esc(t("noChoices")) + "</p>";
    return "<article class=\"card\"><p class=\"meta\">" + esc(t("questionWord")) + " " + esc(question.id) + topicBit +
      "</p><h1 class=\"prompt\">" + esc(qText(question, "prompt")) + "</h1>" + body +
      "<p class=\"keys\">" + keysHtml(question) + "</p></article>";
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
    var openLabels = isOpen(question);
    var label = {
      open: t("notAnswered"),
      saved: t("choiceSaved"),
      correct: openLabels ? t("know") : t("correctStatus"),
      wrong: openLabels ? t("again") : t("wrongStatus")
    }[status];
    if (progress.flags[question.id]) label += t("statusFlag");
    var topic = qText(question, "topic");
    if (topic) label = topic + " · " + label;
    return label;
  }

  function listHtml(questions) {
    if (!questions.length) return "<p class=\"empty\">" + esc(t("noMatch")) + "</p>";
    return questions.map(function (question) {
      return "<button type=\"button\" class=\"q-row status-" + statusOf(question) + "\" data-action=\"open\" data-id=\"" +
        esc(question.id) + "\"><span class=\"num\">" + esc(question.id) + "</span><span><span class=\"row-title\">" +
        esc(qText(question, "prompt")) + "</span><span class=\"row-meta\">" + esc(statusLabel(question)) +
        "</span></span></button>";
    }).join("");
  }

  function topicChips() {
    if (!topics.length) return "";
    var chips = ["<button type=\"button\" class=\"chip\" data-action=\"topic\" data-topic=\"\" aria-pressed=\"" +
      (state.topic === "" ? "true" : "false") + "\">" + esc(t("allTopics")) + "</button>"];
    topics.forEach(function (topic) {
      chips.push("<button type=\"button\" class=\"chip\" data-action=\"topic\" data-topic=\"" + esc(topic) +
        "\" aria-pressed=\"" + (state.topic === topic ? "true" : "false") + "\">" + esc(topicLabel(topic)) + "</button>");
    });
    return "<div class=\"topics\">" + chips.join("") + "</div>";
  }

  function homeHtml() {
    var score = bankScore();
    var missed = idsFor("missed").length;
    var unanswered = idsFor("unanswered").length;
    var flagged = idsFor("flagged").length;
    var banner = "";
    if (!bank.length) banner = "<p class=\"banner\">" + esc(t("noQuestions")) + "</p>";
    else if (score.keyed === 0) banner = "<p class=\"banner\">" + esc(t("noneKeyed")) + "</p>";
    else banner = "<p class=\"banner\">" + esc(t("modelNote")) + "</p>";
    if (score.unkeyed) {
      banner += "<p class=\"banner\">" + esc(t("leftOut").replace("{n}", score.unkeyed)) + "</p>";
    }
    var warningHtml = warnings.length ? "<ul class=\"warnings\">" + warnings.map(function (warning) {
      return "<li>" + esc(t("badAnswer").replace("{id}", warning)) + "</li>";
    }).join("") + "</ul>" : "";

    return "<div class=\"wrap\"><div class=\"home\"><section class=\"home-side\"><div class=\"topbar\"><div class=\"brand\"><span class=\"mark\" aria-hidden=\"true\">AE</span><div><p class=\"eyebrow\">" +
      esc(t("onDevice")) + "</p><h1>Alternativa Energetika</h1></div></div>" + langSwitch() + "</div>" +
      "<p class=\"stats\"><span><strong>" + bank.length + "</strong> " + esc(t("statQuestions")) +
      "</span><span><strong>" + score.keyed + "</strong> " + esc(t("statModels")) +
      "</span><span><strong>" + esc(masteredText(score)) + "</strong> " + esc(t("statMastered")) + "</span></p>" +
      banner + warningHtml +
      "<div class=\"actions stack\" style=\"margin-top:16px\">" +
      "<button type=\"button\" class=\"btn primary\" data-action=\"start\" data-mode=\"practice\" data-filter=\"all\">" +
      esc(t("practice")) + "<span class=\"btn-note\">" + esc(t("practiceNote")) + "</span></button>" +
      "<button type=\"button\" class=\"btn\" data-action=\"start\" data-mode=\"test\" data-filter=\"all\">" +
      esc(t("test")) + "<span class=\"btn-note\">" + esc(t("testNote")) + "</span></button>" +
      "<button type=\"button\" class=\"btn\" data-action=\"start\" data-mode=\"practice\" data-filter=\"unanswered\"" +
      (unanswered ? "" : " disabled") + ">" + esc(t("unanswered")) + " (" + unanswered + ")</button>" +
      "<button type=\"button\" class=\"btn\" data-action=\"start\" data-mode=\"practice\" data-filter=\"missed\"" +
      (missed ? "" : " disabled") + ">" + esc(t("missed")) + " (" + missed + ")</button>" +
      "<button type=\"button\" class=\"btn\" data-action=\"start\" data-mode=\"practice\" data-filter=\"flagged\"" +
      (flagged ? "" : " disabled") + ">" + esc(t("flagged")) + " (" + flagged + ")</button>" +
      "</div><details class=\"help\"><summary>" + esc(t("howTo")) + "</summary>" +
      "<p>" + esc(t("howToBody1")) + "</p><p>" + esc(t("howToBody2")) + "</p></details>" +
      "<div class=\"actions\" style=\"margin-top:16px\"><button type=\"button\" class=\"text-btn\" data-action=\"theme\">" +
      esc(currentTheme() === "dark" ? t("lightMode") : t("darkMode")) +
      "</button><button type=\"button\" class=\"text-btn\" data-action=\"reset\">" + esc(t("clearSaved")) +
      "</button></div></section>" +
      "<section class=\"panel\"><div class=\"panel-head\"><h2>" + esc(t("questionsHeading")) +
      "</h2><input class=\"search\" id=\"search\" type=\"search\" placeholder=\"" + esc(t("search")) +
      "\" value=\"" + esc(state.query) + "\" autocomplete=\"off\" spellcheck=\"false\"></div>" + topicChips() +
      "<div class=\"q-list\">" + listHtml(filteredBank()) + "</div></section></div></div>";
  }

  function sessionHtml() {
    var questions = sessionQuestions();
    var question = questions[state.index];
    if (!question) return homeHtml();
    var pick = getPick(question.id);
    var width = questions.length ? Math.round(((state.index + 1) / questions.length) * 100) : 0;
    var sheet = state.sheet ? "<div class=\"sheet\"><div class=\"topbar\"><strong>" + esc(t("jumpTitle")) +
      "</strong><button type=\"button\" class=\"text-btn spacer\" data-action=\"close-sheet\">" + esc(t("close")) +
      "</button></div>" + bubbleGrid(questions, question.id) + "</div>" : "";
    return "<div class=\"wrap\"><div class=\"session\"><aside class=\"rail\"><h2>" +
      esc(state.mode === "test" ? t("test") : t("practice")) + "</h2>" + bubbleGrid(questions, question.id) +
      "</aside><div><div class=\"session-head\"><button type=\"button\" class=\"text-btn\" data-action=\"home\">" +
      esc(t("close")) + "</button><span class=\"pos\">" + (state.index + 1) + " / " + questions.length +
      "</span><span class=\"spacer\"></span>" + langSwitch() +
      "<button type=\"button\" class=\"icon-btn jump\" data-action=\"open-sheet\">" + esc(t("jump")) + "</button>" +
      "<button type=\"button\" class=\"icon-btn\" data-action=\"flag\" aria-pressed=\"" +
      (progress.flags[question.id] ? "true" : "false") + "\">" +
      esc(progress.flags[question.id] ? t("flaggedState") : t("flag")) +
      "</button></div><div class=\"progress\" aria-hidden=\"true\"><span style=\"width:" + width + "%\"></span></div>" +
      "<div style=\"height:14px\"></div>" + questionCard(question, pick, state.mode) +
      "<div class=\"session-nav\"><button type=\"button\" class=\"btn\" data-action=\"prev\"" +
      (state.index === 0 ? " disabled" : "") + ">" + esc(t("back")) +
      "</button><button type=\"button\" class=\"btn primary\" data-action=\"next\">" +
      esc(state.index === questions.length - 1 ? t("finish") : t("next")) +
      "</button></div></div></div>" + sheet + "</div>";
  }

  function summaryLabels(questions) {
    var openSet = questions.every(function (question) { return isOpen(question); });
    if (openSet) return [t("know"), t("again"), t("notMarked"), t("noModel")];
    return [t("correctStatus"), t("wrongStatus"), t("notAnswered"), t("noModel")];
  }

  function summaryHtml() {
    var questions = sessionQuestions();
    var score = scoreQuestions(questions, progress.picks, progress.marks);
    var missed = questions.filter(isMissed);
    var fraction = score.keyed ? (score.correct + "<small>" + (currentLang() === "en" ? "of " : "no ") + score.keyed + "</small>") : "—";
    var labels = summaryLabels(questions);
    var missedHtml = missed.length ? "<ul class=\"miss-list\">" + missed.map(function (question) {
      return "<li>" + esc(question.id) + ". " + esc(qText(question, "prompt")) + "</li>";
    }).join("") + "</ul>" : "<p class=\"stats\">" + esc(t("noMissed")) + "</p>";
    var testNote = state.mode === "test" ? " " + esc(t("summaryTest")) : "";
    return "<div class=\"wrap\"><p class=\"eyebrow\">" + esc(state.mode === "test" ? t("testFinished") : t("practiceFinished")) +
      "</p><h1 class=\"score-big\">" + fraction + "</h1><p class=\"stats\">" + esc(t("summaryNote")) + testNote + "</p>" +
      "<div class=\"breakdown\"><div><strong>" + score.correct + "</strong><span>" + esc(labels[0]) +
      "</span></div><div><strong>" + score.wrong + "</strong><span>" + esc(labels[1]) +
      "</span></div><div><strong>" + score.blank + "</strong><span>" + esc(labels[2]) +
      "</span></div><div><strong>" + score.unkeyed + "</strong><span>" + esc(labels[3]) +
      "</span></div></div>" + missedHtml +
      "<div class=\"summary-actions\"><button type=\"button\" class=\"btn primary\" data-action=\"review-missed\"" +
      (missed.length ? "" : " disabled") + ">" + esc(t("reviewMissed")) +
      "</button><button type=\"button\" class=\"btn\" data-action=\"home\">" + esc(t("backToStart")) +
      "</button></div></div>";
  }

  function render() {
    if (!app) return;
    var key = state.view + ":" + state.index + ":" + state.mode;
    var html = state.view === "session" ? sessionHtml() : state.view === "summary" ? summaryHtml() : homeHtml();
    app.innerHTML = html;
    if (state.view === "session" && key !== scrollKey) window.scrollTo(0, 0);
    scrollKey = key;
  }

  function start(mode, filter) {
    var ids = idsFor(filter);
    if (!ids.length) return;
    state.view = "session";
    state.mode = mode;
    state.ids = ids;
    state.index = 0;
    state.sheet = false;
    state.revealed = {};
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
    state.revealed = {};
    render();
  }

  function pick(index) {
    var question = sessionQuestions()[state.index];
    if (!question || index < 0 || index >= question.choices.length) return;
    progress.picks[question.id] = index;
    saveProgress();
    render();
  }

  function setMark(mark) {
    var question = sessionQuestions()[state.index];
    if (!question || !isOpen(question)) return;
    if (mark !== "know" && mark !== "again") return;
    if (progress.marks[question.id] === mark) delete progress.marks[question.id];
    else progress.marks[question.id] = mark;
    saveProgress();
    render();
  }

  function restoreSearchFocus() {
    var search = document.getElementById("search");
    if (!search) return;
    search.focus();
    var end = search.value.length;
    if (search.setSelectionRange) search.setSelectionRange(end, end);
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
      else if (action === "reveal") {
        var shown = sessionQuestions()[state.index];
        if (!shown) return;
        state.revealed[shown.id] = true;
        render();
      } else if (action === "mark") setMark(target.getAttribute("data-mark"));
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
      } else if (action === "lang") {
        var nextLang = target.getAttribute("data-lang");
        if (nextLang !== "lv" && nextLang !== "en") return;
        try { localStorage.setItem(LANG_KEY, nextLang); } catch (error) {}
        applyLang(nextLang);
        render();
      } else if (action === "theme") {
        var next = currentTheme() === "dark" ? "light" : "dark";
        try { localStorage.setItem(THEME_KEY, next); } catch (error) {}
        document.documentElement.setAttribute("data-theme", next);
        render();
      } else if (action === "reset") {
        if (window.confirm(t("resetConfirm"))) {
          progress = { picks: {}, flags: {}, marks: {} };
          saveProgress();
          render();
        }
      } else if (action === "review-missed") {
        var ids = sessionQuestions().filter(isMissed).map(function (question) { return question.id; });
        if (!ids.length) return;
        state.view = "session";
        state.mode = "practice";
        state.ids = ids;
        state.index = 0;
        state.sheet = false;
        state.revealed = {};
        ids.forEach(function (missedId) { state.revealed[missedId] = true; });
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
    ok("open bilingual bank", bank.every(function (question) {
      return question.answer === null && question.choices.length === 0 &&
        question.prompt && question.promptEn && question.explanation && question.explanationEn &&
        question.topic && question.topicEn;
    }));
    ok("prompt 24", bank[23] && bank[23].prompt === "Kā aprēķina lietderības koeficients η?");
    ok("prompt 40", bank[39] && bank[39].prompt === "Kāpēc parastu augu eļļu nevar izmantot jebkurā dīzeļdzinējā?");
    ok("prompt 48", bank[47] && bank[47].prompt === "Kā darbojas eļļu un tauku pāresterificēšanas process?");
    ok("topic ends", bank[0].topic === "Saule" && bank[70].topic === "Ūdeņradis");

    var bilingual = { prompt: "LV", promptEn: "EN", explanation: "ALV", explanationEn: "AEN" };
    ok("lv text", textIn(bilingual, "prompt", "lv") === "LV" && textIn(bilingual, "explanation", "lv") === "ALV");
    ok("en text", textIn(bilingual, "prompt", "en") === "EN" && textIn(bilingual, "explanation", "en") === "AEN");

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
    ok("invalid answer dropped", invalid.question.answer === null && invalid.warning === "4");

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

    var openScore = scoreQuestions([
      { id: 1, answer: null, choices: [], explanation: "a", explanationEn: "b" },
      { id: 2, answer: null, choices: [], explanation: "a", explanationEn: "b" },
      { id: 3, answer: null, choices: [], explanation: "", explanationEn: "" }
    ], {}, { 1: "know", 2: "again" });
    ok("open know", openScore.correct === 1);
    ok("open again", openScore.wrong === 1);
    ok("open unkeyed", openScore.unkeyed === 1 && openScore.blank === 0 && openScore.keyed === 2);

    ok("unkeyed feedback", feedbackModel({ answer: null, explanation: "" }, 0, "practice").kind === "unkeyed");
    ok("test hides result", feedbackModel({ answer: 0, explanation: "" }, 1, "test").kind === "pending");
    var wrongDetail = feedbackModel({ answer: 1, explanation: "See the diagram." }, 0, "practice").detail;
    ok("wrong names the key", wrongDetail.indexOf(letter(1) + ".") !== -1);

    ok("selected class", choiceClass({ answer: null }, 1, 1, "practice") === "is-selected");
    ok("correct class", choiceClass({ answer: 1 }, 1, 0, "practice") === "is-correct");
    ok("wrong class", choiceClass({ answer: 1 }, 0, 0, "practice") === "is-wrong");

    var openQ = {
      id: 8,
      topic: "Vējš",
      topicEn: "Wind",
      prompt: "LVQ",
      promptEn: "ENQ",
      choices: [],
      answer: null,
      explanation: "SECRET_LV",
      explanationEn: "SECRET_EN"
    };
    var hidden = questionCard(openQ, null, "test");
    ok("test hides model", hidden.indexOf("SECRET_LV") === -1 && hidden.indexOf("SECRET_EN") === -1 && hidden.indexOf("data-action=\"mark\"") !== -1);
    var closed = questionCard(openQ, null, "practice");
    ok("practice starts closed", closed.indexOf("data-action=\"reveal\"") !== -1 && closed.indexOf("SECRET_LV") === -1 && closed.indexOf("SECRET_EN") === -1);
    state.revealed[8] = true;
    var shown = questionCard(openQ, null, "practice");
    ok("practice shows model", shown.indexOf(textIn(openQ, "explanation", currentLang())) !== -1);

    var samples = [
      { title: "Practice, correct", question: { id: 1, topic: "Solar", topicEn: "Saule", prompt: "Which choice is right?", promptEn: "Which choice is right?", choices: ["North", "South", "East", "West"], answer: 1, explanation: "South is the keyed choice.", explanationEn: "South is the keyed choice." }, pick: 1, mode: "practice" },
      { title: "Practice, wrong", question: { id: 2, topic: "", topicEn: "", prompt: "A longer question that wraps onto more than one line so the card can be checked on a narrow screen.", promptEn: "", choices: ["Alpha", "Beta", "Gamma", "Delta"], answer: 2, explanation: "", explanationEn: "" }, pick: 0, mode: "practice" },
      { title: "Practice, model answer", question: openQ, pick: null, mode: "practice" },
      { title: "Test, self mark", question: openQ, pick: null, mode: "test" }
    ];

    var passed = lines.every(function (line) { return line.indexOf("PASS") === 0; });
    app.innerHTML = "<div class=\"wrap\"><div class=\"samples\">" + samples.map(function (sample) {
      return "<section><h2>" + sample.title + "</h2>" + questionCard(sample.question, sample.pick, sample.mode) + "</section>";
    }).join("") + "<pre id=\"selftest\">" + (passed ? "ALL PASS\n" : "HAS FAIL\n") + lines.join("\n") + "</pre></div></div>";
  }

  applyLang(currentLang());
  if (new URLSearchParams(location.search).get("selftest") === "1") renderSelfTest();
  else render();
})();
