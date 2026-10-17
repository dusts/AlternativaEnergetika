# Alternativa Energetika

[Latviski](#latviski)

Offline exam practice. The app is a folder of files. It does not use the internet, an account, or a server.

`questions.js` holds 71 open exam questions. Each question has the Latvian prompt, an English prompt, and a model answer in both languages. The model answers are study samples, not an official exam key. They are written at bachelor’s-exam depth: the principle, the reasoning, and the formula and result when the question asks for a calculation.

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

## Latviski

[English](#alternativa-energetika)

Bezsaistes treniņš eksāmenam. Lietotne ir failu mape. Tā neizmanto internetu, kontu vai serveri.

`questions.js` ir 71 atvērti eksāmena jautājumi. Katram ir uzdevums latviski, uzdevums angliski un paraugatbilde abās valodās. Paraugatbildes ir mācību paraugi, nevis oficiāla eksāmena atslēga. Tās ir bakalaura eksāmena dziļumā: princips, pamatojums un, ja jautājums prasa aprēķinu, formula un rezultāts.

Atver datorā vai nokopē mapi uz tālruni. Atzīmes, karodziņi, valoda un gaišais vai tumšais režīms paliek šajā pārlūkā.

### Atvēršana operētājsistēmā Windows

Ar dubultklikšķi atver `Start Alternativa Energetika.bat`. Lietotne atveras atsevišķā logā.

`index.html` var atvērt arī pārlūkā Edge vai Chrome.

### Atvēršana tālrunī

Nokopē visu mapi uz tālruni un atver `index.html` pārlūkā. Android Chrome to palaiž arī bez interneta.

iPhone bieži nepalaiž vietēju HTML failu. Šai versijai izmanto Android vai datoru.

### Valoda

Sākuma ekrānā vai pie jautājuma spied **LV** vai **EN**. Izvēle saglabājas šajā ierīcē. Jautājumi, paraugatbildes un pogas ir izvēlētajā valodā. Mainot valodu, tēmas filtrs paliek tai pašai grupai.

### Prakse un tests

**Praksē** vispirms redzi jautājumu. **Rādīt atbildi** / **Show answer** atver paraugatbildi. Pēc tam atzīmē **Zinu** / **Knew it** vai **Jāatkārto** / **Review again**.

**Testā** paraugatbildes ir paslēptas. Atzīmē pats. Beigu rezultāts skaita šīs atzīmes. **Pārskatīt jāatkārto** / **Review marked again** atver paraugatbildes tiem jautājumiem, kurus atzīmēji atkārtošanai.

No sākuma ekrāna var atvērt arī neatzīmētos jautājumus, jāatkārto jautājumus un jautājumus ar karodziņu. Meklēšana atrod jautājumu pēc teksta latviski vai angliski, vai pēc numura.

Datorā bultiņas pārvieto un `F` liek karodziņu. Ja jautājumam ir atbilžu varianti, taustiņi `1`–`4` izvēlas vienu.

### Atbildes

Labo `questions.js`, saglabā un atsvaidzini logu. Failam jāatrodas vienā mapē ar `index.html`.

Nemaini `id`, lai saglabātās atzīmes pēc labojuma joprojām sakristu ar tiem pašiem jautājumiem. Šiem atvērtajiem jautājumiem `choices` atstāj tukšu un `answer` atstāj `null`. `topic` ir latviešu tēmas nosaukums, pēc kura filtrē. `topicEn` ir angliskais nosaukums.

```javascript
{
  id: 1,
  topic: "Saule",
  topicEn: "Solar",
  prompt: "Raksturo saules baterijas darbības principu?",
  promptEn: "Describe the operating principle of a solar cell.",
  choices: [],
  answer: null,
  explanation: "Paraugatbilde latviski.",
  explanationEn: "Paraugatbilde angliski."
}
```

Jautājums joprojām var būt ar atbilžu variantiem. Aizpildi `choices` un iestati `answer` uz `"A"`, `"B"`, `"C"` vai `"D"` (vai `0`–`3`). Tad lietotne skaita izvēlēto burtu, nevis pašatzīmi.

Jautājumus bez paraugatbildes joprojām var lasīt. Tos neskaita rezultātā.

### Faili

| Fails | Nolūks |
| --- | --- |
| `index.html` | Lietotnes lapa |
| `questions.js` | Jautājumu banka |
| `app.js` | Prakse, tests, valoda un saglabātais progress |
| `styles.css` | Izkārtojums tālrunim un datoram |
| `Start Alternativa Energetika.bat` | Atver darbvirsmas logu |
| `launch.ps1` | To izmanto Start fails |
