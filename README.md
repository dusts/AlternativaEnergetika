# Alternativa Energetika

Offline exam practice. The app is a folder of files. It does not use the internet, an account, or a server.

`questions.js` holds 71 exam questions in Latvian. Answer keys are not filled in yet. Each question still has placeholder choices, because the source list has no options.

Open it on a computer or copy the folder to a phone. Choices, flags, and the score stay in that browser.

## Open on Windows

Double-click `Start Alternativa Energetika.bat`. The app opens in its own window.

You can also open `index.html` in Edge or Chrome.

## Open on a phone

Copy this whole folder to the phone, then open `index.html` in the browser. Android Chrome runs it with the connection off.

An iPhone often will not run a local HTML file. Use Android or the computer for this version.

## Answers and choices

Edit `questions.js`, save, and refresh the app. Keep the file in the same folder as `index.html`.

The prompts are already the exam questions. Leave `answer` as `null` until you know it. Then set it to `"A"`, `"B"`, `"C"`, or `"D"`. You can also use `0`, `1`, `2`, or `3` for those same choices. Replace `Choice A` through `Choice D` when you have real options. `topic` and `explanation` can stay empty.

```javascript
{
  id: 1,
  topic: "Solar",
  prompt: "What does a photovoltaic panel produce?",
  choices: ["Heat", "Electricity", "Gas", "Water"],
  answer: "B",
  explanation: "Photovoltaic panels produce electricity."
}
```

Keep each `id` stable so saved choices still match after you edit the text.

Questions with no answer key can still be read and marked. They are left out of the score.

## Practice and test

**Practice** shows whether the choice is correct as soon as you pick one, when an answer key exists.

**Test** hides the result until you finish the set.

From the start screen you can also open unanswered questions, missed questions, and flagged questions. Search finds a question by its text or number.

On a computer, keys `1`–`4` choose an answer, the arrow keys move, and `F` flags the question.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The app page |
| `questions.js` | Question bank |
| `app.js` | Practice, test, and saved progress |
| `styles.css` | Layout for phone and desktop |
| `Start Alternativa Energetika.bat` | Opens a desktop window |
| `launch.ps1` | Used by the Start file |
