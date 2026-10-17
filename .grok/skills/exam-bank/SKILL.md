---
name: exam-bank
description: >
  Maintain the Alternativa Energetika exam question bank in questions.js.
  Use when editing questions, comparing a pasted or photographed question list,
  updating the README after a bank change, or pushing this repo to GitHub.
  Triggers: "update questions", "check the list", "update md", "update github",
  and /exam-bank.
---

# Exam bank

`questions.js` is the only source of question wording. The README describes the bank. It does not copy the 71 prompts.

## Bank rules

- Keep ids `1` through `71`. Do not renumber them.
- The prompts are open questions in Latvian.
- Leave `choices` as the current placeholders until the user supplies real options.
- Leave `answer` as `null` until the user supplies a key. `"A"`–`"D"` and `0`–`3` are the same positions.
- Leave `topic` and `explanation` empty unless the user sets them.
- When the bank changes, update `README.md` so it still matches: real prompts, no answer keys yet, placeholder choices.

## Comparing a list

Compare prompts after `window.QUESTIONS`, in id order. Skip the example in the file comment.

Report only the mismatches. Do not edit `questions.js` unless the user says that other list is the one to keep.

Ids 24, 40, and 48 were checked against a pasted list, and the text already in `questions.js` was confirmed correct. Do not replace those prompts to match a list that differs only there.

## GitHub

The remote is the private repository `dusts/AlternativaEnergetika`, branch `main`. Commit and push only when the user asks to update GitHub.
