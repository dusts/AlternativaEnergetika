# Alternativa Energetika

Offline exam practice. The app is a folder of files. It does not use the internet, an account, or a server.

`questions.js` holds 71 open exam questions. Each question has the Latvian prompt, an English prompt, and a model answer in both languages. The model answers are study samples, not an official exam key.

Open it on a computer or copy the folder to a phone. Marks, flags, language, and the theme stay in that browser.

## Open on Windows

Double-click `Start Alternativa Energetika.bat`. The app opens in its own window.

You can also open `index.html` in Edge or Chrome.

## Open on a phone

Copy this whole folder to the phone, then open `index.html` in the browser. Android Chrome runs it with the connection off.

An iPhone often will not run a local HTML file. Use Android or the computer for this version.

## Language

Use **LV** or **EN** on the start screen or on a question. The choice is remembered on this device. Questions, model answers, and the buttons follow that language. Topic filters stay on the same group when the language changes.

## Practice and test

**Practice** shows the question first. **Rādīt atbildi** / **Show answer** opens the model answer. Then mark **Zinu** / **Knew it** or **Jāatkārto** / **Review again**.

**Test** hides the model answers. Mark the question yourself. The score at the end counts those marks. **Pārskatīt jāatkārto** / **Review marked again** opens the model answers for the ones you marked to review.

From the start screen you can also open questions you have not marked, questions to review, and flagged questions. Search finds a question by its text, in either language, or by its number.

On a computer, the arrow keys move and `F` flags the question. If a question has choices, keys `1`–`4` select one.

## Answers

Edit `questions.js`, save, and refresh the app. Keep the file in the same folder as `index.html`.

Keep each `id` stable so saved marks still match after you edit the text. Leave `choices` empty and `answer` as `null` for these open questions. `topic` is the Latvian group name the filter uses. `topicEn` is the English name.

```javascript
{
  id: 1,
  topic: "Saule",
  topicEn: "Solar",
  prompt: "Raksturo saules baterijas darbības principu?",
  promptEn: "Describe the operating principle of a solar cell.",
  choices: [],
  answer: null,
  explanation: "Latvian model answer.",
  explanationEn: "English model answer."
}
```

A question can still be multiple choice. Fill `choices` and set `answer` to `"A"`, `"B"`, `"C"`, or `"D"` (or `0`–`3`). The app then scores the picked letter instead of the self-mark.

Questions with no model answer can still be read. They are left out of the score.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The app page |
| `questions.js` | Question bank |
| `app.js` | Practice, test, language, and saved progress |
| `styles.css` | Layout for phone and desktop |
| `Start Alternativa Energetika.bat` | Opens a desktop window |
| `launch.ps1` | Used by the Start file |
