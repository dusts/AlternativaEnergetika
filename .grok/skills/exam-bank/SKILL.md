---
name: exam-bank
description: >
  Maintain the Alternativa Energetika exam question bank in questions.js.
  Use when editing questions, model answers, or the LV/EN wording, comparing a
  pasted or photographed question list, updating the README after a bank change,
  or pushing this repo to GitHub. Triggers: "update questions", "check the list",
  "update md", "update github", and /exam-bank.
---

# Exam bank

`questions.js` is the only source of question wording. The README describes the bank. It does not copy the 71 prompts.

## Bank rules

- Keep ids `1` through `71`. Do not renumber them.
- `prompt` stays the existing Latvian question. `promptEn` is the English question.
- `explanation` is the Latvian model answer. `explanationEn` is the English model answer. Both are study samples, not an official exam key.
- Leave `choices` as `[]` and `answer` as `null` unless the user supplies real options. `"A"`–`"D"` and `0`–`3` are the same positions.
- `topic` is the Latvian group name and the filter key. `topicEn` is the English group name.
- When the bank changes, update `README.md` so it still matches: bilingual prompts, model answers in both languages, empty choices, `answer` null, and self-marked open questions.

## Comparing a list

Compare `prompt` values after `window.QUESTIONS`, in id order. Skip the example in the file comment.

Report only the mismatches. Do not edit `questions.js` unless the user says that other list is the one to keep.

Ids 24, 40, and 48 were checked against a pasted list, and the text already in `questions.js` was confirmed correct. Do not replace those prompts to match a list that differs only there.

## GitHub

The remote is the private repository `dusts/AlternativaEnergetika`, branch `main`. Commit and push only when the user asks to update GitHub.
