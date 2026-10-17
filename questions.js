/* Alternativa Energetika question bank.

   Edit this file, save it, and refresh the app.
   The app does not use the internet.

   id             stable number, 1 through 71. Do not renumber.
   topic          Latvian group name. The app filters by this text.
   topicEn        English group name.
   prompt         the question in Latvian. Keep the existing wording.
   promptEn       the question in English.
   choices        [] for these open questions. Fill this only for a real multiple-choice item.
   answer         null for these open questions. "A" to "D", or 0 to 3, if choices exist.
   explanation    Latvian model answer, shown after the learner asks to see it.
   explanationEn  English model answer.

   The model answers are study samples, not an official exam key.
*/

window.QUESTIONS = [
  {
    id: 1,
    topic: "Saule",
    topicEn: "Solar",
    prompt: "Raksturo saules baterijas darbības principu?",
    promptEn: "Describe the operating principle of a solar cell.",
    choices: [],
    answer: null,
    explanation: "Saules baterija šajā jautājumā ir fotoelements, nevis akumulators. Pusvadītājā, parasti kristāliskajā silīcijā, ir aizliegtā zona. Fotons ar pietiekamu enerģiju paceļ elektronu no valences zonas uz vadītspējas zonu un atstāj caurumu. p–n pārejas iebūvētais elektriskais lauks atdala šos lādiņus, tāpēc ārējā ķēdē plūst līdzstrāva, kamēr elements ir apgaismots.\n\nViens elements dod aptuveni 0,5–0,6 V. Elementus saslēdz virknē, lai paceltu spriegumu, un paralēli, lai palielinātu strāvu. Tā veidojas panelis. Lietderību ierobežo spektrs, rekombinācija un temperatūra: silīcijam jauda krītas, kad elements sakarst. Tipisks komerciāls panelis pārvērš elektrībā aptuveni 15–22 % krītošā starojuma. Nakts un stiprs noēnojums ražošanu aptur, jo nav fotonu, kas radītu lādiņus.",
    explanationEn: "In this question a solar cell is a photovoltaic cell, not a storage battery. A semiconductor, usually crystalline silicon, has a band gap. A photon with enough energy lifts an electron from the valence band to the conduction band and leaves a hole. The built-in electric field of the p–n junction separates those charges, so direct current flows in the external circuit while the cell is illuminated.\n\nOne cell produces about 0.5–0.6 V. Cells are connected in series to raise the voltage and in parallel to raise the current, forming a panel. Efficiency is limited by the spectrum, recombination, and temperature: silicon power falls as the cell heats up. A typical commercial panel converts about 15–22% of the incident radiation into electricity. At night, or under heavy shade, generation stops because there are no photons to create the charges."
  },
  {
    id: 2,
    topic: "Saule",
    topicEn: "Solar",
    prompt: "Ar ko atšķiras saules kolektors no saules paneļa?",
    promptEn: "How does a solar collector differ from a solar panel?",
    choices: [],
    answer: null,
    explanation: "Saules kolektors un saules panelis izmanto to pašu starojumu, bet pārvērš to citā enerģijas veidā. Kolektorā absorbers pārvērš starojumu siltumā. Stiklojums samazina zudumus, un šķidrums vai gaiss aiznes siltumu uz ūdens tvertni vai apkuri. Tā ir termiska iekārta. Tai nav pusvadītāja pārejas un tā neražo elektrību.\n\nFotoelektriskais panelis ražo līdzstrāvu, kā aprakstīts fotoelementa principā. Siltums panelī ir drīzāk zudums, jo karstumā jauda krītas. Tāpēc kolektoru izvēlas, ja vajag siltumu, bet paneli, ja vajag elektrību. Ir arī kombinētais PVT kolektors, kas dara abus: elementi priekšpusē, siltuma novadīšana aiz tiem. Izvēli nosaka patēriņš, nevis tikai jumta laukums.",
    explanationEn: "A solar collector and a solar panel use the same radiation but convert it into different forms of energy. In a collector, an absorber turns radiation into heat. Glazing reduces the losses, and a liquid or air carries the heat to a water tank or a heating system. It is a thermal device. It has no semiconductor junction and it does not produce electricity.\n\nA photovoltaic panel produces direct current by the solar-cell principle. Heat in a panel is mainly a loss, because power falls as the cells get hotter. A collector is chosen when heat is needed, and a panel when electricity is needed. A combined PVT collector does both, with cells at the front and heat removal behind them. The choice follows the load, not only the roof area."
  },
  {
    id: 3,
    topic: "Saule",
    topicEn: "Solar",
    prompt: "Lai uzstādītu saules paneļu sistēmu, kādas iekārtas ir nepieciešamas?",
    promptEn: "What equipment is needed to install a solar-panel system?",
    choices: [],
    answer: null,
    explanation: "Minimālā tīklam pieslēgtā sistēmā ir paneļi, stiprinājumi, līdzstrāvas kabeļi, invertors, aizsardzība, zemējums un skaitītājs. Paneļi ražo līdzstrāvu. Invertors to pārvērš maiņstrāvā un sinhronizējas ar tīklu. Tam parasti ir arī maksimālās jaudas punkta sekotājs, jo paneļa optimālais spriegums mainās līdz ar starojumu un temperatūru. Drošinātāji, pārsprieguma aizsardzība un atslēgšana vajadzīga apkopei un bojājuma gadījumam.\n\nJa virknes ir noēnotas atšķirīgi, lieto jaudas optimizatorus vai mikroinvertorus, lai viena paneļa ēna nenovilktu pārējos. Autonomijai vai elektrības uzkrāšanai pievieno akumulatoru, uzlādes kontrolieri vai hibrīdinvertoru un bateriju pārvaldību. Pirms būves jāpārbauda jumta nestspēja, sniega un vēja slodze, invertora vieta un pieslēguma atļautā jauda. Invertors nedrīkst ilgstoši dot tīklā vairāk, nekā pieslēgums atļauj.",
    explanationEn: "A minimum grid-connected system needs panels, mounts, DC cables, an inverter, protection, earthing, and a meter. The panels produce direct current. The inverter turns it into alternating current and synchronizes with the grid. It usually also has maximum-power-point tracking, because the panel’s best voltage changes with irradiance and temperature. Fuses, surge protection, and a means of isolation are needed for maintenance and faults.\n\nIf strings are shaded differently, power optimizers or microinverters are used so that shade on one panel does not pull down the others. For autonomy or storage, a battery, a charge controller or hybrid inverter, and battery management are added. Before installation, roof strength, snow and wind load, the inverter location, and the allowed connection capacity have to be checked. The inverter must not feed the grid more than the connection permits for a sustained period."
  },
  {
    id: 4,
    topic: "Saule",
    topicEn: "Solar",
    prompt: "Kas ir kombinētais saules kolektors? Kāda ir tā uzbūve?",
    promptEn: "What is a combined solar collector, and how is it built?",
    choices: [],
    answer: null,
    explanation: "Kombinētais saules kolektors, jeb PVT, vienā ierīcē ražo elektrību un siltumu. Priekšpusē ir fotoelementi. Aiz tiem ir absorbers un kanāli, pa kuriem tek šķidrums, dažreiz gaiss. Starojums, ko elements nepārvērš elektrībā, kļūst par siltumu. Šķidrums šo siltumu aiznes uz boileru vai apkuri un vienlaikus dzesē elementus.\n\nDzesēšana ir svarīga, jo silīcija jauda krītas aptuveni par 0,3–0,5 % uz katru grādu virs standarta temperatūras. Atdzesēts elements dod vairāk elektrības, un iegūtais siltums nav zudums. Uzbūvē jābūt arī siltumizolācijai aizmugurē, pieslēgumiem šķidrumam un elektriskajiem izvadiem. Kompromiss ir tāds, ka elektrības un siltuma optimumi nesakrīt: karstāks šķidrums dod lietderīgāku siltumu, bet sliktāku elementa jaudu.",
    explanationEn: "A combined solar collector, or PVT unit, produces electricity and heat in one device. Photovoltaic cells are at the front. Behind them is an absorber with channels carrying a liquid, sometimes air. Radiation that the cell does not convert into electricity becomes heat. The fluid carries that heat to a hot-water tank or a heating system and cools the cells at the same time.\n\nCooling matters because silicon power falls by roughly 0.3–0.5% for each degree above the standard temperature. A cooler cell produces more electricity, and the captured heat is not wasted. The construction also needs insulation at the back, fluid connections, and electrical outputs. The compromise is that the best points for electricity and heat do not coincide: a hotter fluid gives more useful heat but lower cell power."
  },
  {
    id: 5,
    topic: "Saule",
    topicEn: "Solar",
    prompt: "Iedomājies, ka tu plāno uzstādīt saules paneļus savā mājā. Ko ņemsi vērā?",
    promptEn: "Imagine you plan to install solar panels on your house. What will you take into account?",
    choices: [],
    answer: null,
    explanation: "Vispirms jāskatās resurss un ēka. Latvijā visvairāk dod orientācija uz dienvidiem un slīpums tuvu ģeogrāfiskajam platumam, bet arī austrumu un rietumu virzieni der, ja patēriņš ir no rīta vai vakarā. Jānovērtē ēnojums no kokiem, skursteņiem un blakus ēkām visā gadā, ne tikai saulainā dienā. Jumtam jānes paneļu, sniega un vēja slodze, un jumta segumam jābūt pietiekami labā stāvoklī, lai to nevajadzētu mainīt tūlīt pēc montāžas.\n\nPēc tam jāskatās elektriskā puse un nauda. Jāsalīdzina gada un dienas patēriņš ar sagaidāmo ražošanu: vasarā būs pārpalikums, ziemā panelis nosegs maz. Jāpārbauda pieslēguma jauda, invertora vieta, kabeļu ceļš un tas, vai vajag akumulatoru. Jānoskaidro atļaujas, uzskaites kārtība un iespēja nodot pārpalikumu tīklā. Beigās salīdzina investīciju, prognozēto ietaupījumu un atmaksāšanos, ieskaitot invertora nomaiņu ekspluatācijas laikā.",
    explanationEn: "Start with the resource and the building. In Latvia a south orientation and a tilt near the latitude give the most energy, but east and west also make sense when consumption is in the morning or evening. Shade from trees, chimneys, and neighbouring buildings has to be judged over the whole year, not on one sunny day. The roof must carry the panels plus snow and wind load, and the covering should be sound enough that it will not need replacement immediately after installation.\n\nThen look at the electrical side and the money. Compare yearly and daily consumption with the expected generation: there will be a surplus in summer and little cover in winter. Check the connection capacity, inverter location, cable route, and whether a battery is needed. Find out the permits, the metering arrangement, and whether surplus can be exported. Finally compare the investment, the expected saving, and the payback, including replacement of the inverter during the system’s life."
  },
  {
    id: 6,
    topic: "Saule",
    topicEn: "Solar",
    prompt: "Kādu ietekmi plaša saules enerģijas izmantošana varētu atstāt uz vidi un ekonomiku?",
    promptEn: "What effect could widespread use of solar energy have on the environment and the economy?",
    choices: [],
    answer: null,
    explanation: "Darbības laikā saules elektrībai gandrīz nav tiešo emisiju, un tā izspiež kurināmo, kas citādi tiktu dedzināts. Ietekme uz vidi tomēr nav nulle. Paneļu, stikla, alumīnija un invertoru ražošana patērē enerģiju un materiālus, un dzīves cikla emisijas ir jāattiecina uz saražotajām kilovatstundām. Pēc 25–30 gadiem paneļi un invertori jāsagrupē un jāpārstrādā. Lieli parki aizņem zemi un var mainīt ainavu un biotopus, lai gan zemi dažreiz var turpināt izmantot, piemēram, ganībām.\n\nEkonomiski ražošanas mainīgās izmaksas ir mazas, tāpēc ilgtermiņā elektrības cena krītas, kad saules jauda kļūst liela. Tas pats rada dienas vidus pārpalikumu un cenu kritumu saulainās stundās, bet vakarā un ziemā jaudas var trūkt. Tīklam vajag elastību: hidroakumulāciju, baterijas, patēriņa pārbīdi, starpsavienojumus un atlikušo regulējamo jaudu. Bez tā saules elektrība ir lēta brīdī, kad tās ir par daudz, un sistēma paliek dārga brīdī, kad tās nav.",
    explanationEn: "While solar electricity is being generated it has almost no direct emissions, and it displaces fuel that would otherwise be burned. The environmental effect is not zero. Making panels, glass, aluminium, and inverters uses energy and materials, and those lifecycle emissions have to be assigned to the kilowatt-hours produced. After 25–30 years the panels and inverters have to be collected and recycled. Large parks take land and can change the landscape and habitats, although the land can sometimes still be used, for example as pasture.\n\nEconomically, the variable cost of generation is low, so a large solar capacity reduces the long-run price of electricity. The same effect creates a midday surplus and a price drop in sunny hours, while power can be short in the evening and in winter. The grid needs flexibility: pumped storage, batteries, demand shifting, interconnectors, and remaining dispatchable capacity. Without that, solar electricity is cheap at the moment there is too much of it, and the system stays expensive at the moment there is none."
  },
  {
    id: 7,
    topic: "Saule",
    topicEn: "Solar",
    prompt: "Kādi faktori ietekmē saules paneļu saražotās elektroenerģijas daudzumu?",
    promptEn: "What factors affect how much electricity solar panels produce?",
    choices: [],
    answer: null,
    explanation: "Saražoto enerģiju nosaka tas, cik starojuma sasniedz elementu un cik no tā panelis un pārējā sistēma spēj pārvērst. Starojums mainās ar gadalaiku, dienas laiku, mākoņiem un gaisa dzidrumu. Uz paneļa nonākušais daudzums vēl atkarīgs no orientācijas, slīpuma un krišanas leņķa. Noēnojums, pat uz daļas virknes, var samazināt strāvu visā virknē, ja nav optimizatoru. Sniegs un netīrumi aizsedz virsmu.\n\nPaša paneļa jauda krītas temperatūrā, lai gan starojums tad var būt liels. Vasaras karstā pusdienā jauda ir mazāka nekā tā paša starojuma apstākļos vēsā dienā. Tālāk rodas zudumi invertorā, kabeļos un, ja ir, akumulatorā. Ja invertora nomināls ir mazāks par paneļu maksimumu, pīķa stundās jauda tiek nogriezta. Gadu gaitā paneļi arī degradējas, aptuveni par dažām desmitdaļām procenta gadā, tāpēc divdesmitajā gadā ražošana ir manāmi mazāka nekā pirmajā.",
    explanationEn: "The energy produced depends on how much radiation reaches the cell and how much of it the panel and the rest of the system can convert. Irradiance changes with season, time of day, cloud, and air clarity. The amount on the panel also depends on orientation, tilt, and the angle of incidence. Shade, even on part of a string, can reduce the current of the whole string if there are no optimizers. Snow and dirt cover the surface.\n\nThe panel’s own power falls with temperature, even when irradiance is high. On a hot summer noon the power is lower than at the same irradiance on a cool day. Further losses occur in the inverter, the cables, and the battery if there is one. If the inverter rating is below the panel peak, power is clipped in the peak hours. Over the years the panels also degrade, by roughly a few tenths of a percent per year, so output in year twenty is noticeably below year one."
  },
  {
    id: 8,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Kā rodas vējš?",
    promptEn: "How does wind arise?",
    choices: [],
    answer: null,
    explanation: "Vējš ir gaisa horizontāla kustība, ko uztur spiediena starpība. Saule Zemi silda nevienmērīgi: tropi saņem vairāk starojuma uz laukuma vienību nekā poli, un arī sauszeme un jūra sakarst atšķirīgi. Siltais gaiss izplešas un ceļas, pie zemes veidojas zemāks spiediens, un vēsāks gaiss ieplūst tā vietā. Spiediena gradienta spēks dzen gaisu no augstāka spiediena uz zemāku.\n\nJa Zeme negrieztos, vējš pūstu gandrīz tieši pāri izobārām. Griešanās rada Koriolisa paātrinājumu, kas plūsmu novirza, ziemeļu puslodē pa labi. Lielā augstumā vējš tuvojas ģeostrofiskajam līdzsvaram starp gradientu un Koriolisa spēku. Pie zemes berze vēju palēnina un pagriež. Vietēji vēju vēl maina reljefs, krasta brīze un atmosfēras stabilitāte. Tāpēc turbīnai svarīgs ir nevis vidējais planētas vējš, bet vēja sadalījums konkrētā augstumā un vietā.",
    explanationEn: "Wind is the horizontal movement of air driven by a pressure difference. The Sun heats the Earth unevenly: the tropics receive more radiation per unit area than the poles, and land and sea also heat differently. Warm air expands and rises, surface pressure falls, and cooler air flows in to replace it. The pressure-gradient force drives air from higher pressure toward lower pressure.\n\nIf the Earth did not rotate, the wind would blow nearly straight across the isobars. Rotation produces the Coriolis acceleration, which deflects the flow, to the right in the northern hemisphere. At altitude the wind approaches geostrophic balance between the gradient and the Coriolis force. Near the surface, friction slows and turns the wind. Locally, terrain, the sea breeze, and atmospheric stability change it further. A turbine therefore depends not on a planetary average wind but on the wind distribution at a particular height and site."
  },
  {
    id: 9,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Kā vēja enerģiju pārvērš elektriskajā enerģijā?",
    promptEn: "How is wind energy converted into electrical energy?",
    choices: [],
    answer: null,
    explanation: "Turbīna paņem daļu vēja kinētiskās enerģijas. Lāpstiņa ir spārns: plūsma ap to rada cēlējspēku un nelielu pretestību, un to summa dod griezes momentu uz rotoru. Rotors griež vārpstu. Ātrumkārba paceļ vārpstas apgriezienus līdz ģeneratoram ērtam ātrumam, vai arī lieto tiešo piedziņu ar daudzpolu ģeneratoru. Ģenerators pārvērš mehānisko jaudu elektrībā.\n\nElektrība vēl nav gatava tīklam. Jaudas elektronika vai ģeneratora veids notur mainīgu rotora ātrumu un dod stabilu frekvenci, bet transformators paceļ spriegumu. Vadība regulē lāpstiņu leņķi un notur jaudu pie nomināla, kad vējš ir stiprāks par aprēķina vēju. Zem ieslēgšanās ātruma enerģijas ir par maz. Virs atslēgšanās ātruma turbīnu aptur, lai nenoslogotu konstrukciju. Tātad ķēde ir kinētiskā enerģija, mehāniskais darbs, elektrība un pēc tam tīkla spriegums.",
    explanationEn: "A turbine takes part of the wind’s kinetic energy. A blade is an aerofoil: flow around it creates lift and a smaller drag, and their resultant produces torque on the rotor. The rotor turns a shaft. A gearbox raises the shaft speed to a speed convenient for the generator, or a direct drive with a multipole generator is used. The generator converts mechanical power into electricity.\n\nThat electricity is not yet ready for the grid. Power electronics, or the generator type, allow a variable rotor speed and a stable frequency, and a transformer raises the voltage. The controller adjusts the blade pitch and holds power at the rating when the wind exceeds the design wind. Below cut-in there is too little energy. Above cut-out the turbine is stopped so that the structure is not overloaded. The chain is therefore kinetic energy, mechanical work, electricity, and then grid voltage."
  },
  {
    id: 10,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Kādi ir galvenie vēja turbīnu veidi?",
    promptEn: "What are the main types of wind turbines?",
    choices: [],
    answer: null,
    explanation: "Pēc rotora ass galvenie veidi ir horizontālās ass turbīnas un vertikālās ass turbīnas. Horizontālās ass mašīnai rotors ir vēja virzienā, tā jāpagriež pret vēju, un mūsdienu lielās turbīnas gandrīz visas ir šādas, parasti ar trim lāpstiņām. Vertikālās ass mašīnai rotors ir perpendikulārs zemei. Darjē rotors izmanto cēlējspēku, Savonius rotors galvenokārt pretestību. Vertikālā ass pieņem vēju no jebkuras puses, bet tās lietderība un mērogošana parasti ir sliktāka.\n\nPēc vietas ir sauszemes un jūras turbīnas. Jūrā vējš ir stiprāks un vienmērīgāks, tāpēc rotors un pamats ir lielāki, bet būve, jūras kabelis un apkope ir dārgāka. Pēc jaudas ir mikro un mazās turbīnas ēkām vai autonomai slodzei un vairāku megavatu mašīnas parkiem. Šie iedalījumi pārklājas: liela jūras turbīna gandrīz vienmēr ir horizontālās ass mašīna.",
    explanationEn: "By rotor axis, the main types are horizontal-axis and vertical-axis turbines. On a horizontal-axis machine the rotor faces the wind, it has to be yawed into the wind, and nearly all modern large turbines are of this type, usually with three blades. On a vertical-axis machine the rotor is perpendicular to the ground. A Darrieus rotor uses lift, and a Savonius rotor uses mainly drag. A vertical axis accepts wind from any direction, but its efficiency and its ability to scale are usually poorer.\n\nBy site there are onshore and offshore turbines. Offshore the wind is stronger and steadier, so the rotor and foundation are larger, but construction, the subsea cable, and maintenance cost more. By power there are micro and small turbines for buildings or an autonomous load, and multi-megawatt machines for farms. These classifications overlap: a large offshore turbine is almost always a horizontal-axis machine."
  },
  {
    id: 11,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Kurās situācijās būtu piemērotāk izmantot vertikālās ass turbīnu?",
    promptEn: "In which situations is a vertical-axis turbine more suitable?",
    choices: [],
    answer: null,
    explanation: "Vertikālās ass turbīna ir piemērotāka tur, kur vēja virziens strauji un bieži mainās un pagriešanas mehānisms nespētu sekot. Tāpat tā der turbulentā pilsētas plūsmā pie jumtiem, kur horizontālās ass mašīna ciestu no slīpas un mainīgas plūsmas. Ģeneratoru un ātrumkārbu var novietot pie zemes, tāpēc apkope ir vieglāka un tornim nav jānes gondolas svars. Zemāks troksnis, mazāks rotora augstums un citāds izskats dažreiz ir izšķiroši blīvi apbūvētā vietā.\n\nPar šīm ērtībām maksā ar lietderību. Daļa rotora vienmēr iet pret plūsmu vai aiz otras lāpstiņas, un lielas vertikālās ass mašīnas nav sasniegušas horizontālās ass parku enerģijas atdevi un izmaksu līmeni. Atklātā, vienmērīgā vējā, kur var uzbūvēt augstu torni, horizontālās ass turbīna parasti dod vairāk enerģijas uz ieguldīto naudu. Vertikālo asi izvēlas vietas ierobežojumu dēļ, nevis tāpēc, ka tā būtu labāka vēja pārveidotāja.",
    explanationEn: "A vertical-axis turbine suits a site where the wind direction changes sharply and often, faster than a yaw drive could follow. It also suits turbulent urban flow around roofs, where a horizontal-axis machine would suffer from skewed and unsteady flow. The generator and gearbox can sit near the ground, so maintenance is easier and the tower does not have to carry the nacelle weight. Lower noise, a lower rotor, and a different appearance can decide the choice in a built-up place.\n\nThose conveniences are paid for in efficiency. Part of the rotor is always moving against the flow or in the wake of another blade, and large vertical-axis machines have not reached the energy return and cost of horizontal-axis farms. In open, steady wind, where a tall tower is possible, a horizontal-axis turbine usually gives more energy per money invested. The vertical axis is chosen because of site limits, not because it is the better wind converter."
  },
  {
    id: 12,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Kādas ir galvenās vēja turbīnas sastāvdaļas?",
    promptEn: "What are the main components of a wind turbine?",
    choices: [],
    answer: null,
    explanation: "Rotors ir lāpstiņas un rumba. Lāpstiņas ņem enerģiju no vēja, rumba tās satur un griežas līdzi vārpstai. Gondolā ir vārpsta, gultņi, ātrumkārba vai tiešā piedziņa, ģenerators, bremzes un pagriešanas piedziņa. Bremzes aptur rotoru apkopes vai vētras laikā. Pagriešanas mehānisms tur rotoru pret vēju. Gondolā ir arī vadības skapis un, daudzām mašīnām, lāpstiņu soļa piedziņa.\n\nTornis paceļ rotoru augstumā, kur vējš ir stiprāks un vienmērīgāks. Pamats pārnes slodzes zemē vai, jūrā, gultnē. Transformators paceļ spriegumu parka kabelim. Parka līmenī ir vēl apakšstacija un vadība, kas saskaņo daudzas turbīnas ar tīklu. Eksāmena atbildē pietiek skaidri nodalīt rotoru, gondolu, torni, pamatu un elektrisko izvadu, un katrai daļai pateikt funkciju, nevis tikai nosaukumu.",
    explanationEn: "The rotor is the blades and the hub. The blades extract energy from the wind, and the hub holds them and turns with the shaft. The nacelle contains the shaft, bearings, gearbox or direct drive, generator, brakes, and yaw drive. The brakes stop the rotor for maintenance or a storm. The yaw drive keeps the rotor facing the wind. The nacelle also contains the control cabinet and, on many machines, the blade-pitch drives.\n\nThe tower lifts the rotor to a height where the wind is stronger and steadier. The foundation carries the loads into the ground or, offshore, into the seabed. A transformer raises the voltage for the farm cable. At farm level there is also a substation and a controller that coordinates many turbines with the grid. An exam answer should separate the rotor, nacelle, tower, foundation, and electrical output, and give each part its function rather than only its name."
  },
  {
    id: 13,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Kādi materiāli tiek izmantoti vēja turbīnu lāpstiņu izgatavošanai un kāpēc?",
    promptEn: "What materials are used to make wind-turbine blades, and why?",
    choices: [],
    answer: null,
    explanation: "Lāpstiņas gatavo no kompozītiem: stikla šķiedras un epoksīdsveķu, garākām lāpstiņām arī oglekļa šķiedras, bieži ar putuplasta vai balzas serdi. Šāds materiāls dod lielu stiprību un stingumu uz masas vienību. Tas ir svarīgi, jo lāpstiņa ir gara svira, un liekā masa palielina slodzi uz rumbu, torni un pamatu. Kompozītu var izlikt tā, lai šķiedras ietu slodzes virzienā, un formai var dot precīzu aerodinamisko profilu.\n\nMetāls būtu smagāks un sliktāk panestu miljoniem noguruma ciklu, ko rada rotācija un brāzmas. Kompozīts arī mazāk cieš no korozijas. Tomēr priekšējā mala jāaizsargā pret lietus eroziju, un bojāta lāpstiņa jālabo, pirms plaisa izaug. Dzīves beigās termoreaktīvo sveķu pārstrāde ir grūta. To eksāmenā var minēt kā materiāla izvēles robežu, nevis kā iemeslu atgriezties pie metāla.",
    explanationEn: "Blades are made from composites: glass fibre and epoxy, and carbon fibre on longer blades, often with a foam or balsa core. This gives high strength and stiffness per unit of mass. That matters because a blade is a long lever, and extra mass increases the load on the hub, tower, and foundation. The composite can be laid so that the fibres follow the load, and the shape can be an accurate aerofoil.\n\nMetal would be heavier and would endure less well the millions of fatigue cycles caused by rotation and gusts. A composite also suffers less from corrosion. The leading edge still has to be protected against rain erosion, and a damaged blade has to be repaired before a crack grows. At end of life, recycling a thermoset resin is difficult. In an exam that can be mentioned as a limit of the material choice, not as a reason to return to metal."
  },
  {
    id: 14,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Turbīnas nominālā jauda ir 5 MW, bet gada laikā tā vidēji darbojas ar 35 % no nominālās jaudas. Cik daudz elektroenerģijas tā saražo gadā?",
    promptEn: "A turbine’s rated power is 5 MW, but over the year it runs at an average of 35% of rated power. How much electricity does it produce in a year?",
    choices: [],
    answer: null,
    explanation: "Jauda, ar kādu turbīna vidēji ražo, ir nominālā jauda reiz jaudas izmantojuma koeficients. Gada enerģija ir šī vidējā jauda reiz stundu skaits gadā.\n\nE = P × k × t\nP = 5 MW\nk = 35 % = 0,35\nt = 365 × 24 = 8760 h\n\nE = 5 × 0,35 × 8760 = 1,75 × 8760 = 15 330 MWh = 15,33 GWh gadā.\n\nKoeficients 0,35 nozīmē, ka turbīna visa gada laikā saražo tikpat, cik saražotu, ja 35 % laika strādātu ar pilniem 5 MW un pārējo laiku stāvētu. Īstenībā tā daļu laika strādā ar daļēju jaudu. 8760 h ir parastā gada pieņēmums bez garā gada dienas. Rezultāts nav konkrēta gada mērījums: citā vēja gadā k būs citāds, un dīkstāve vai apledojums to samazina.",
    explanationEn: "The average power is the rated power times the capacity factor. Annual energy is that average power times the number of hours in a year.\n\nE = P × k × t\nP = 5 MW\nk = 35% = 0.35\nt = 365 × 24 = 8760 h\n\nE = 5 × 0.35 × 8760 = 1.75 × 8760 = 15 330 MWh = 15.33 GWh per year.\n\nA factor of 0.35 means that over the year the turbine produces as much as it would if it ran at the full 5 MW for 35% of the time and stood still otherwise. In reality it spends part of the time at partial power. The 8760 h is the ordinary-year assumption, without the leap-year day. The result is not a measurement of one particular year: in another wind year k will differ, and downtime or icing reduces it."
  },
  {
    id: 15,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Kāpēc vēja turbīna nevar izmantot 100% no vēja kinētiskās enerģijas?",
    promptEn: "Why can a wind turbine not use 100% of the wind’s kinetic energy?",
    choices: [],
    answer: null,
    explanation: "Turbīna palēnina gaisu, bet nedrīkst to apturēt. Masas plūsma caur rotoru ir atkarīga no ātruma. Ja gaiss aiz rotora apstātos, tas aizsprostotu plūsmu un jauna gaisa cauri rotoram vairs nenāktu, tāpēc jauda būtu nulle. Arī ja rotors gaisu gandrīz nebremzē, paņemtais enerģijas daudzums ir mazs. Starp šiem galējiem gadījumiem ir optimums.\n\nBeca teorija ideālai, brīvai turbīnai dod maksimālo jaudas koeficientu Cp = 16/27 ≈ 0,593, tas ir, aptuveni 59,3 % vēja kinētiskās jaudas. Tas atbilst gadījumam, kad ātrums tālu aiz rotora ir aptuveni trešdaļa no ātruma tālu pirms tā. Reāla turbīna sasniedz mazāk, bieži Cp ap 0,45–0,50, jo ir gala virpuļi, lāpstiņas pretestība, mehāniskie un elektriskie zudumi. 100 % būtu pretrunā ar plūsmas nepārtrauktību, nevis tikai ar nepilnīgu konstrukciju.",
    explanationEn: "A turbine slows the air, but it must not stop the air. The mass flow through the rotor depends on the speed. If the air behind the rotor stopped, it would block the flow, no new air would pass the rotor, and the power would be zero. If the rotor barely slows the air, the energy extracted is also small. There is an optimum between those extremes.\n\nBetz’s theory for an ideal turbine in free flow gives a maximum power coefficient Cp = 16/27 ≈ 0.593, about 59.3% of the kinetic power in the wind. That corresponds to a speed far downstream of about one third of the speed far upstream. A real turbine reaches less, often a Cp of about 0.45–0.50, because of tip vortices, blade drag, and mechanical and electrical losses. Taking 100% would contradict continuity of the flow, not merely an imperfect design."
  },
  {
    id: 16,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Tev jāizvēlas starp divām turbīnām: viena ar lielāku rotora diametru, otra ar lielāku nominālo jaudu. Kādus parametrus Tu salīdzinātu?",
    promptEn: "You have to choose between two turbines: one with a larger rotor diameter and one with a higher rated power. Which parameters would you compare?",
    choices: [],
    answer: null,
    explanation: "Nominālā jauda viena pati nepateiks, kura turbīna vietā saražos vairāk. Jāsalīdzina rotora diametrs un tā laukums, jo jauda ir proporcionāla laukumam. Jāskata jaudas līkne: kāda jauda ir pie katra vēja ātruma, kur ir ieslēgšanās ātrums, nomināla sasniegšana un atslēgšanās. Lielāks rotors parasti agrāk sasniedz lietderīgu jaudu un vājā vējā uzvar. Lielāka nominālā jauda uzvar tikai tajās stundās, kad vējš ir pietiekami stiprs, lai to noslogotu.\n\nJāzina arī rumbas augstums, jo vējš augstumā ir stiprāks, un vietas vēja sadalījums, bieži Veibula sadalījums. Gada enerģiju iegūst, jaudas līkni sareizinot ar stundu skaitu katrā ātruma klasē. Papildus salīdzina troksni, attālumu līdz mājām, pamata un ceļa izmaksas, cenu, garantiju un apkopi. Izvēle ir lielākā gada enerģija uz izmaksu un ierobežojumu kopu, nevis lielākais skaitlis uz datu plāksnītes.",
    explanationEn: "Rated power alone does not say which turbine will produce more at a site. Compare rotor diameter and swept area, because power is proportional to area. Look at the power curve: the power at each wind speed, and the cut-in, the point where rating is reached, and the cut-out. A larger rotor usually reaches useful power sooner and wins in light wind. A higher rating wins only in the hours when the wind is strong enough to load it.\n\nHub height also matters, because the wind is stronger aloft, as does the site’s wind distribution, often described by a Weibull distribution. Annual energy is found by combining the power curve with the number of hours in each speed bin. Also compare noise, distance to houses, foundation and road cost, price, warranty, and maintenance. The choice is the larger annual energy for the set of costs and constraints, not the larger number on the nameplate."
  },
  {
    id: 17,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Ja vēja ātrums palielinās no 5 m/s līdz 10 m/s, kā teorētiski mainās vēja pieejamā jauda?",
    promptEn: "If the wind speed increases from 5 m/s to 10 m/s, how does the available wind power change in theory?",
    choices: [],
    answer: null,
    explanation: "Brīvas plūsmas kinētiskā jauda caur laukumu A ir\n\nP = ½ ρ A v³.\n\nJa blīvums ρ un laukums A nemainās, jaudu attiecība ir ātrumu attiecības kubs.\n\nv2 / v1 = 10 / 5 = 2\nP2 / P1 = 2³ = 8\n\nPieejamā jauda teorētiski pieaug 8 reizes. Tas ir vēja plūsmas jaudas pieaugums, nevis automātiski turbīnas elektriskās jaudas pieaugums. Īsta turbīna paņem tikai daļu, ko ierobežo Beca robeža un tās paša Cp. Kad vējš jau ir virs nominālā ātruma, vadība jaudu vairs neļauj kāpināt un kuba sakarība elektriskajai jaudai beidzas. No 5 uz 10 m/s daudzas turbīnas vēl ir daļējas jaudas zonā, tāpēc elektriskā jauda pieaug stipri, bet tieši astoņas reizes tā pieaugtu tikai tad, ja Cp un laukums paliktu nemainīgi un nomināls vēl nebūtu sasniegts.",
    explanationEn: "The kinetic power of a free stream through an area A is\n\nP = ½ ρ A v³.\n\nIf the density ρ and the area A stay the same, the power ratio is the cube of the speed ratio.\n\nv2 / v1 = 10 / 5 = 2\nP2 / P1 = 2³ = 8\n\nThe available power increases 8 times in theory. That is the increase in the power of the wind stream, not automatically the increase in the turbine’s electric power. A real turbine takes only a fraction, limited by the Betz limit and by its own Cp. Once the wind is above rated speed, the controller stops power from rising further and the cube relation ends for electric power. From 5 to 10 m/s many turbines are still in the partial-power region, so electric power rises strongly, but it would rise by exactly eight times only if Cp and area stayed constant and the rating had not yet been reached."
  },
  {
    id: 18,
    topic: "HES",
    topicEn: "Hydropower",
    prompt: "Nosauc un raksturo HES veidus.",
    promptEn: "Name and describe the types of hydropower plants.",
    choices: [],
    answer: null,
    explanation: "Pēc ūdens režīma ir trīs galvenie veidi. Caurplūdes HES izmanto upes tecējumu gandrīz bez krātuves, tāpēc jauda seko caurplūdumam un upi izmaina mazāk. Akumulējošai HES ir aizsprosts un ūdenskrātuve. Ūdeni var paturēt un laist caur turbīnām tad, kad elektrība vajadzīga, arī maksimuma stundās. Hidroakumulācijas stacija sūknē ūdeni augšējā baseinā, kad elektrība ir lēta vai ir vēja un saules pārpalikums, un ražo, kad tās trūkst. Tā uzkrāj enerģiju, bet pati nav primārs avots. Apiešanas lietderība bieži ir aptuveni 70–80 %.\n\nPēc krituma ir zema, vidēja un augsta krituma stacijas, un no tā izriet turbīnas tips. Pēc jaudas ir mazās HES un lielās stacijas. Iedalījumi ir jāsaista: maza caurplūdes stacija un liela krātuves stacija atšķiras gan ar režīmu, gan ar ietekmi uz upi, gan ar spēju regulēt tīklu.",
    explanationEn: "By water regime there are three main types. A run-of-river plant uses the river flow with almost no storage, so power follows the discharge and the river is changed less. A storage plant has a dam and a reservoir. Water can be held and released through the turbines when electricity is needed, including peak hours. A pumped-storage plant pumps water into an upper basin when electricity is cheap or when there is surplus wind and solar, and it generates when electricity is short. It stores energy, but it is not itself a primary source. Round-trip efficiency is often about 70–80%.\n\nBy head there are low-, medium-, and high-head plants, and the head determines the turbine type. By power there are small plants and large stations. The classifications should be connected: a small run-of-river plant and a large reservoir plant differ in regime, in the effect on the river, and in the ability to regulate the grid."
  },
  {
    id: 19,
    topic: "HES",
    topicEn: "Hydropower",
    prompt: "Uzzīmējiet vienkāršotu HES shēmu un norādiet ūdens plūsmas virzienu.",
    promptEn: "Draw a simplified diagram of a hydropower plant and indicate the direction of the water flow.",
    choices: [],
    answer: null,
    explanation: "Pilnā eksāmena atbildē ir zīmējums ar bultiņu plūsmas virzienā un apzīmētu kritumu. Tekstā shēma ir šāda. Ūdens ir augšējā bjefā, ūdenskrātuvē vai upes līmenī. Tas ieiet ūdens ņemšanas būvē ar restēm, kas aiztur sanešus. Tālāk pa atklātu kanālu vai slēgtu spiedvadu tas nonāk līdz turbīnai. Turbīna ir savienota ar ģeneratoru. Pēc turbīnas ūdens izplūst atsūces caurulē un lejas bjefā.\n\nBultiņa iet no augšas uz leju, no augšējā līmeņa uz lejas līmeni. Kritums H ir šo līmeņu starpība, nevis tikai aizsprosta sienas augstums. Shēmā vēl lietderīgi uzrādīt aizvarus, ar ko plūsmu var aizvērt, un transformatoru aiz ģeneratora. Zaudēta shēma vai apgriezta bultiņa eksāmenā nozīmē, ka enerģijas pārvēršanas virziens nav saprasts.",
    explanationEn: "A full exam answer includes a sketch with an arrow in the flow direction and the head marked. In words the scheme is as follows. Water is in the upper pool, a reservoir or the river level. It enters an intake with screens that stop debris. It then passes along an open canal or a closed penstock to the turbine. The turbine is coupled to the generator. After the turbine the water leaves through the draft tube into the tailrace.\n\nThe arrow runs downward, from the upper level to the lower level. The head H is the difference between those levels, not merely the height of the dam wall. It is also useful to show the gates that can shut off the flow, and the transformer after the generator. A missing sketch, or an arrow drawn backwards, means in an exam that the direction of the energy conversion has not been understood."
  },
  {
    id: 20,
    topic: "HES",
    topicEn: "Hydropower",
    prompt: "Izskaidro HES darbības principu no ūdens ieplūdes līdz elektroenerģijas nodošanai tīklā.",
    promptEn: "Explain how a hydropower plant works, from the water intake to the delivery of electricity to the grid.",
    choices: [],
    answer: null,
    explanation: "Ūdens potenciālā enerģija ir augšējā un lejas līmeņa starpībā. No ūdens ņemšanas tas pa spiedvadu vai kanālu plūst uz turbīnu. Spiedvads pārvērš daļu krituma ātrumā un spiedienā pie turbīnas. Turbīnā ūdens atdod enerģiju rotoram. Impulsturbīnā to dara strūklas trieciens, reakcijas turbīnā spiediena krišana un plūsmas novirze. Rotors griež ģeneratoru, un ģeneratorā elektromagnētiskā indukcija pārvērš mehānisko jaudu elektrībā.\n\nĢeneratora spriegums parasti nav pārvades spriegums, tāpēc transformators to paceļ. Elektrība caur slēgiekārtu nonāk tīklā. Ūdens pēc turbīnas aiziet uz lejas bjefu ar pēc iespējas mazāku atlikušo enerģiju. Atsūces caurule zem spiediena turbīnām ļauj izmantot arī kritumu zem turbīnas. Pa ceļam ir hidrauliskie, mehāniskie un elektriskie zudumi, tāpēc pārdotā elektrība ir mazāka par ρ g Q H.",
    explanationEn: "The potential energy of the water is in the difference between the upper and lower levels. From the intake it flows through a penstock or canal to the turbine. The penstock converts part of the head into velocity and pressure at the turbine. In the turbine the water gives energy to the rotor: by the impact of a jet in an impulse turbine, and by a pressure drop and a change of flow direction in a reaction turbine. The rotor turns the generator, and electromagnetic induction in the generator converts mechanical power into electricity.\n\nThe generator voltage is usually not the transmission voltage, so a transformer raises it. The electricity passes through switchgear to the grid. After the turbine the water leaves to the tailrace with as little remaining energy as possible. On a reaction turbine the draft tube lets the head below the turbine be used as well. Along the path there are hydraulic, mechanical, and electrical losses, so the electricity sold is less than ρ g Q H."
  },
  {
    id: 21,
    topic: "HES",
    topicEn: "Hydropower",
    prompt: "Kāpēc HES nepieciešams kritums?",
    promptEn: "Why does a hydropower plant need a head?",
    choices: [],
    answer: null,
    explanation: "Kritums ir augstuma starpība, no kuras rodas ūdens potenciālā enerģija. Masa m augstumā H satur enerģiju m g H. Tilpuma plūsmai Q masas plūsma ir ρ Q, tāpēc teorētiskā jauda ir\n\nP = ρ g Q H.\n\nJa H = 0, reizinājums ir nulle, lai arī ūdens tek. Upei bez līmeņu starpības ir kinētiskā enerģija, bet parastā HES to neizmanto. Tā izmanto tieši kritumu. Tāpēc lēzenā upē vai nu ceļ aizsprostu, lai radītu H, vai arī atzīst, ka pieejamā hidrojauda ir maza.\n\nPraksē lietojamais kritums ir nedaudz mazāks par ģeometrisko, jo restēs, kanālā un spiedvadā ir zudumi. Tas nemaina secinājumu: bez krituma nav locekļa, kas ūdens svaru pārvērstu jaudā. Brīvas straumes turbīna ir cits princips, tuvāks vēja turbīnai, un šajā jautājumā ar to HES neaizstāj.",
    explanationEn: "Head is the height difference that gives the water its potential energy. A mass m at a height H contains energy m g H. For a volume flow Q the mass flow is ρ Q, so the theoretical power is\n\nP = ρ g Q H.\n\nIf H = 0, the product is zero even though water is flowing. A river with no difference in level has kinetic energy, but a conventional hydropower plant does not use that. It uses the head. On a very flat river one either builds a dam to create H, or one accepts that the available hydropower is small.\n\nIn practice the usable head is a little smaller than the geometric head because of losses at the screens, in the canal, and in the penstock. That does not change the conclusion: without head there is no term that turns the weight of the water into power. A free-stream turbine is a different principle, closer to a wind turbine, and it does not replace the head in this question."
  },
  {
    id: 22,
    topic: "HES",
    topicEn: "Hydropower",
    prompt: "Kāda ir atšķirība starp caurplūdes HES un akumulējošo HES?",
    promptEn: "What is the difference between a run-of-river plant and a storage hydropower plant?",
    choices: [],
    answer: null,
    explanation: "Caurplūdes HES strādā ar ūdeni, kas upē ir tajā brīdī. Krātuve ir maza vai tās nav, tāpēc ūdens līmenis un jauda seko sezonas un dienas caurplūdumam. Pavasara palos jaudas ir daudz, mazūdens periodā maz. Ietekme uz applūdinātu platību un zivju migrāciju parasti ir mazāka nekā lielam aizsprostam, lai gan arī mazā stacijā vajag zivju ceļu un sanitāro caurplūdumu. Regulēt tīklu tā var tikai šaurās robežās.\n\nAkumulējošā HES ar aizsprostu uzkrāj palu ūdeni un var to laist cauri vēlāk, arī ziemā vai vakara maksimumā. Tā dod regulējamu jaudu un var piedalīties frekvences noturēšanā. Maksa ir applūdināta zeme, izmainīts upes režīms, sanešu aizture, metāna emisijas no dažām krātuvēm un šķērslis zivīm. Eksāmenā atšķirība jāpasaka gan enerģētikas valodā, gan ietekmes valodā: viena seko upei, otra upi pārvērš par krātuvi.",
    explanationEn: "A run-of-river plant works with the water that is in the river at that moment. The storage is small or absent, so the level and the power follow the seasonal and daily discharge. There is abundant power in the spring flood and little in the low-flow season. The effect on flooded land and on fish migration is usually smaller than that of a large dam, although a small plant still needs a fish pass and an environmental flow. It can regulate the grid only within narrow limits.\n\nA storage plant with a dam keeps flood water and can release it later, including in winter or at the evening peak. It provides dispatchable power and can help hold the frequency. The cost is flooded land, a changed river regime, trapped sediment, methane from some reservoirs, and a barrier to fish. In an exam the difference should be stated both in energy terms and in impact terms: one follows the river, the other turns the river into a reservoir."
  },
  {
    id: 23,
    topic: "HES",
    topicEn: "Hydropower",
    prompt: "Nosauc un raksturo vismaz 4 turbīnu veidus.",
    promptEn: "Name and describe at least four types of turbines.",
    choices: [],
    answer: null,
    explanation: "Turbīnu izvēlas pēc krituma un caurplūduma. Peltona turbīna ir impulsturbīna augstam kritumam un salīdzinoši mazam caurplūdumam. Ūdens no sprauslas kā strūkla triecas pret kausiem, spiediens uz rotora ir atmosfēras spiediens, un enerģiju atdod ātruma izmaiņa.\n\nFrensisa turbīna ir reakcijas turbīna vidējam kritumam. Ūdens ieplūst radiāli un izplūst aksiāli. Spiediens uz lāpstiņām krītas, tāpēc rotors ir slēgtā kamerā. Kaplāna turbīna ir aksiāla reakcijas turbīna zemam kritumam un lielam caurplūdumam. Tās lāpstiņu soli var mainīt, tāpēc lietderība paliek augsta arī pie mainīga caurplūduma. Propellera turbīnai lāpstiņas ir fiksētas.\n\nBanki–Mišela turbīna ir šķērsplūsmas turbīna. Ūdens šķērso rotoru divreiz. Tā ir vienkārša un der mazām HES ar vidēju vai zemu kritumu. Papildus var minēt Turgo turbīnu, kas ir impulsturbīna mazākam kritumam nekā klasiskā Peltona turbīna. Eksāmenā katram tipam jābūt saistītam ar kritumu, nevis tikai ar nosaukumu.",
    explanationEn: "The turbine is chosen from the head and the discharge. A Pelton turbine is an impulse turbine for a high head and a comparatively small discharge. Water from a nozzle strikes buckets as a jet, the pressure on the rotor is atmospheric, and the energy is given up by the change of velocity.\n\nA Francis turbine is a reaction turbine for a medium head. Water enters radially and leaves axially. Pressure falls across the blades, so the rotor is in a closed casing. A Kaplan turbine is an axial reaction turbine for a low head and a large discharge. Its blade pitch can be changed, so efficiency stays high as the discharge varies. A propeller turbine has fixed blades.\n\nA Banki–Michell turbine is a cross-flow turbine. The water crosses the rotor twice. It is simple and suits small plants with a medium or low head. A Turgo turbine can also be mentioned: an impulse turbine for a lower head than a classical Pelton. In an exam each type should be tied to a head, not only to a name."
  },
  {
    id: 24,
    topic: "HES",
    topicEn: "Hydropower",
    prompt: "Kā aprēķina lietderības koeficients η?",
    promptEn: "How is the efficiency η calculated?",
    choices: [],
    answer: null,
    explanation: "Lietderības koeficients ir attiecība starp jaudu, ko iekārta atdod lietderīgi, un jaudu, ko tā saņem. Tas ir bezdimensionāls. Reizēm to raksta kā daļu, reizēm procentos.\n\nη = P_lietderīgā / P_pievadītā.\n\nHES pievadītā jauda ir ūdens teorētiskā hidrauliskā jauda ρ g Q H, bet lietderīgā jauda ir ģeneratora elektriskā jauda uz spailēm. Tāpēc\n\nη = P_elektriskā / (ρ g Q H).\n\nŠis kopējais η ietver turbīnas hidraulisko lietderību, tilpuma zudumus, mehānisko berzi, ģeneratora lietderību un pārvada zudumus. Ja katra posma lietderība ir ηt, ηģ un ηp, tad η = ηt × ηģ × ηp. Reizinājums nevar būt lielāks par 1. Lielā HES kopējā lietderība bieži ir aptuveni 0,85–0,90, mazā stacijā zemāka. Jautājumā vārds ir „koeficients”, bet aprēķinā dala jaudas, nevis saskaita tās.",
    explanationEn: "Efficiency is the ratio of the power a machine delivers as useful output to the power it receives. It is dimensionless. It is sometimes written as a fraction and sometimes as a percent.\n\nη = P_useful / P_supplied.\n\nFor a hydropower plant the supplied power is the theoretical hydraulic power of the water, ρ g Q H, and the useful power is the electric power at the generator terminals. Therefore\n\nη = P_electric / (ρ g Q H).\n\nThis overall η includes the hydraulic efficiency of the turbine, volumetric leakage, mechanical friction, the generator efficiency, and drive losses. If the stage efficiencies are ηt, ηg, and ηd, then η = ηt × ηg × ηd. The product cannot exceed 1. A large plant often has an overall efficiency of about 0.85–0.90, and a small plant less. The question uses the word “coefficient”, but the calculation divides powers. It does not add them."
  },
  {
    id: 25,
    topic: "HES",
    topicEn: "Hydropower",
    prompt: "HES ir Q = 120 m³/s un H = 15 m. Aprēķiniet teorētiski pieejamo hidrojaudu.",
    promptEn: "A hydropower plant has Q = 120 m³/s and H = 15 m. Calculate the theoretically available hydropower.",
    choices: [],
    answer: null,
    explanation: "Teorētiski pieejamā hidrojauda ir ūdens potenciālās enerģijas plūsma bez zudumiem:\n\nP = ρ g Q H.\n\nρ ir ūdens blīvums, g brīvās krišanas paātrinājums, Q tilpuma caurplūdums un H kritums. Vienības sakrīt: kg/m³ × m/s² × m³/s × m = W.\n\nρ = 1000 kg/m³\ng = 9,81 m/s²\nQ = 120 m³/s\nH = 15 m\n\nP = 1000 × 9,81 × 120 × 15 = 17 658 000 W = 17,658 MW ≈ 17,7 MW.\n\nJa mācību grāmatā g = 10 m/s², tad P = 1000 × 10 × 120 × 15 = 18 000 000 W = 18,0 MW. Tas ir teorētiskais griests. Elektriskā jauda ir P × η. Ja η = 0,90, pie g = 9,81 iegūst aptuveni 15,9 MW. Atbildē jābūt formulai, ievietotiem skaitļiem, rezultātam megavatos un piezīmei, ka tā vēl nav pārdodamā elektrība.",
    explanationEn: "The theoretically available hydropower is the flow of potential energy in the water, before losses:\n\nP = ρ g Q H.\n\nρ is the density of water, g the gravitational acceleration, Q the volume discharge, and H the head. The units agree: kg/m³ × m/s² × m³/s × m = W.\n\nρ = 1000 kg/m³\ng = 9.81 m/s²\nQ = 120 m³/s\nH = 15 m\n\nP = 1000 × 9.81 × 120 × 15 = 17 658 000 W = 17.658 MW ≈ 17.7 MW.\n\nIf a textbook uses g = 10 m/s², then P = 1000 × 10 × 120 × 15 = 18 000 000 W = 18.0 MW. That is the theoretical ceiling. Electric power is P × η. At η = 0.90 and g = 9.81 the result is about 15.9 MW. The answer needs the formula, the numbers substituted, the result in megawatts, and the remark that this is not yet the electricity sold."
  },
  {
    id: 26,
    topic: "Plūdmaiņas",
    topicEn: "Tides",
    prompt: "Kas ir plūdmaiņas, un kādi galvenie dabas spēki tās izraisa?",
    promptEn: "What are tides, and which main natural forces cause them?",
    choices: [],
    answer: null,
    explanation: "Plūdmaiņas ir periodiska jūras līmeņa celšanās un krišanās. Galvenais cēlonis ir Mēness gravitācija, bet nevis vienāds spēks uz visu Zemi. Zeme un ūdens Mēnesim tuvākajā pusē tiek vilkti stiprāk nekā Zemes centrs, bet tālākajā pusē vājāk. Šī starpība izveido divus ūdens pacēlumus. Zemei griežoties, krasts iziet cauri abiem, tāpēc daudzviet diennaktī ir divi paisumi un divi bēgumi. Mēness orbītas dēļ periods ir aptuveni 12,4 stundas, nevis tieši 12.\n\nSaule dara to pašu vājāk, jo ir tālāk, lai gan tās masa ir lielāka. Kad Saule, Mēness un Zeme ir aptuveni vienā līnijā, spēki saskaitās un ir sizigiju plūdmaiņas ar lielāku amplitūdu. Kad tie ir taisnā leņķī, ir kvadratūras plūdmaiņas ar mazāku amplitūdu. Krasta forma, līča rezonanse un jūras dziļums vietējo amplitūdu var palielināt vai samazināt. Enerģētikai svarīga ir tieši šī līmeņa svārstība un straume, kas to pavada.",
    explanationEn: "Tides are the periodic rise and fall of sea level. The main cause is the Moon’s gravity, but not a uniform pull on the whole Earth. The Earth and the water on the near side are pulled more strongly than the Earth’s centre, and the far side more weakly. That difference creates two bulges of water. As the Earth rotates, a coast passes through both, so many places have two high tides and two low tides a day. Because of the Moon’s orbit the period is about 12.4 hours, not exactly 12.\n\nThe Sun does the same thing more weakly, because it is farther away, even though its mass is larger. When the Sun, Moon, and Earth are roughly in line, the forces add and spring tides have a larger range. When they are at right angles, neap tides have a smaller range. The shape of the coast, resonance of a bay, and the depth of the sea can raise or lower the local range. What matters for energy is this change of level and the current that goes with it."
  },
  {
    id: 27,
    topic: "Plūdmaiņas",
    topicEn: "Tides",
    prompt: "Kādi ir galvenie plūdmaiņu elektrostacijas tehniskie elementi?",
    promptEn: "What are the main technical elements of a tidal power plant?",
    choices: [],
    answer: null,
    explanation: "Aizsprosta vai lagūnas shēmā jūra tiek atdalīta no baseina ar dambi. Dambī ir ūdens ceļi ar vārtiem, turbīnas un ģeneratori. Vārti laiž baseinu piepildīties vai iztukšoties, kad līmeņu starpība ir pietiekama. Turbīnas bieži ir divvirzienu, jo ražot var gan paisumā, gan bēgumā. Ģeneratori un transformators nodod elektrību tīklam. Vadība izvēlas, kad turēt ūdeni un kad laist cauri, jo pārāk agra izlaišana samazina kritumu.\n\nVajag arī slūžas kuģiem un zivju ceļu vai vismaz risinājumu migrācijai, citādi līcis tiek slēgts. Brīvās straumes izkārtojumā liela dambja nav. Turbīna stāv plūdmaiņu straumē uz pāļa vai pamata, un galvenie elementi ir rotors, zemūdens gondola, pamats, kabelis un krasta pārveidotājs. Abos gadījumos jābūt aizsardzībai pret koroziju, sanešiem un bioloģisko apaugumu.",
    explanationEn: "In a barrage or lagoon the sea is separated from a basin by a dam. The dam contains water passages with gates, turbines, and generators. The gates let the basin fill or empty when the level difference is large enough. The turbines are often two-way, because generation is possible on both the flood and the ebb. The generators and a transformer deliver electricity to the grid. The control system chooses when to hold the water and when to let it through, because releasing it too early reduces the head.\n\nLocks for ships and a fish pass, or at least a migration solution, are also needed, otherwise the bay is closed. In a free-stream layout there is no large dam. The turbine stands in the tidal current on a pile or foundation, and the main elements are the rotor, the underwater nacelle, the foundation, the cable, and the onshore converter. In both cases there must be protection against corrosion, debris, and biological fouling."
  },
  {
    id: 28,
    topic: "Plūdmaiņas",
    topicEn: "Tides",
    prompt: "Kāpēc lielāka ūdens līmeņu starpība parasti nozīmē lielāku pieejamo enerģiju?",
    promptEn: "Why does a larger difference in water level usually mean more available energy?",
    choices: [],
    answer: null,
    explanation: "Pie vienāda caurplūduma jauda ir proporcionāla kritumam, jo P = ρ g Q H. Lielāka līmeņu starpība nozīmē, ka katrs kubikmetrs nes lielāku potenciālo enerģiju ρ g H. Tāpēc tā pati turbīna pie lielāka H dod lielāku jaudu, kamēr caurplūdums un lietderība nemainās.\n\nPlūdmaiņu baseinam sakarība ir vēl stiprāka. Baseina laukums A, amplitūda R. Ielaistā ūdens tilpums ir aptuveni A × R, bet vidējais kritums izlaišanas laikā ir aptuveni R/2. Enerģija vienā ciklā ir\n\nE ≈ ρ g A R × (R / 2) = ρ g A R² / 2.\n\nTā aug ar amplitūdas kvadrātu. Divreiz lielāka līmeņu starpība dod aptuveni četras reizes lielāku enerģiju vienā paisumā, ja baseina laukums ir tāds pats. Tāpēc plūdmaiņu stacijas meklē līčos ar lielu amplitūdu, nevis jebkurā krastā, kur ūdens vienkārši kustas.",
    explanationEn: "At the same discharge, power is proportional to head, because P = ρ g Q H. A larger difference in level means that each cubic metre carries more potential energy, ρ g H. The same turbine therefore gives more power at a larger H, as long as the discharge and the efficiency stay the same.\n\nFor a tidal basin the relation is stronger. The basin area is A and the range is R. The volume admitted is about A × R, and the average head during release is about R/2. The energy in one cycle is\n\nE ≈ ρ g A R × (R / 2) = ρ g A R² / 2.\n\nIt grows with the square of the range. Twice the difference in level gives about four times the energy per tide if the basin area is the same. Tidal plants are therefore looked for in bays with a large range, not on every coast where the water merely moves."
  },
  {
    id: 29,
    topic: "Plūdmaiņas",
    topicEn: "Tides",
    prompt: "Ar ko atšķiras horizontālās un vertikālās ass turbīnas?",
    promptEn: "How do horizontal-axis and vertical-axis turbines differ?",
    choices: [],
    answer: null,
    explanation: "Horizontālās ass turbīnai rotora ass ir paralēla plūsmai, līdzīgi vēja turbīnai. Lāpstiņas darbojas kā spārni un rada cēlējspēku. Rotoram jābūt vērstam pret straumi. Plūdmaiņu straumē virziens divas reizes dienā apgriežas, tāpēc mašīna vai nu pagriežas, vai lāpstiņas maina soli un var griezties pretējā plūsmā. Šis tips virzītā straumē parasti ir lietderīgāks, un lielākās izmēģinājumu mašīnas ir šādas.\n\nVertikālās ass turbīnai ass ir vertikāla. Tai mazāk jāpagriežas, kad straume maina virzienu, un ģeneratoru var novietot virs ūdens. Daļa rotora tomēr kustas pret plūsmu vai tā pavadā, tāpēc lietderība ir zemāka. Ūdenī plūsma ir blīvāka nekā vējā un parasti labi virzīta, nevis haotiska, tāpēc horizontālās ass priekšrocība ir lielāka nekā pilsētas vējā. Izvēli vēl ietekmē dziļums, kuģu ceļš, saneši un apkope.",
    explanationEn: "On a horizontal-axis turbine the rotor axis is parallel to the flow, as on a wind turbine. The blades act as aerofoils and create lift. The rotor has to face the current. In a tidal stream the direction reverses twice a day, so the machine either yaws or the blades change pitch and can work in the opposite flow. This type is usually more efficient in a directional current, and the larger trial machines are of this kind.\n\nOn a vertical-axis turbine the axis is vertical. It needs less yawing when the current reverses, and the generator can sit above the water. Part of the rotor nevertheless moves against the flow or in its wake, so the efficiency is lower. Water is denser than wind and the flow is usually well directed rather than chaotic, so the advantage of the horizontal axis is greater than it is in urban wind. Depth, the navigation channel, debris, and maintenance also affect the choice."
  },
  {
    id: 30,
    topic: "Plūdmaiņas",
    topicEn: "Tides",
    prompt: "Kā darbojas horizontālās ass plūdmaiņu turbīna?",
    promptEn: "How does a horizontal-axis tidal turbine work?",
    choices: [],
    answer: null,
    explanation: "Horizontālās ass plūdmaiņu turbīna darbojas kā zem ūdens novietota vēja turbīna, bet plūsma ir ūdens, nevis gaiss. Ūdens ap lāpstiņas profilu rada cēlējspēku un griezes momentu. Rotors griežas lēni, jo ūdens ir blīvs un ātrumi ir tikai daži metri sekundē. Ātrumkārba vai tiešā piedziņa griež ģeneratoru gondolā, kas ir zem ūdens vai uz pāļa. Kabelis aiznes elektrību uz krastu, kur spriegumu un frekvenci pielāgo tīklam.\n\nKad plūdmaiņa apgriežas, enerģiju joprojām var ņemt. Mašīna pagriež gondolu pret jauno virzienu, vai arī lāpstiņas maina leņķi un rotors paliek pretēji vērsts. Starp paisumu un bēgumu ir stāvošs ūdens, kurā jauda ir nulle. Konstrukcijai jāiztur korozija, bioloģiskais apaugums un saneši. Tāpēc ekspluatācija ir grūtāka nekā vēja turbīnai, lai gan princips ir tas pats: cēlējspēks, rotors, ģenerators.",
    explanationEn: "A horizontal-axis tidal turbine works like a wind turbine placed underwater, but the flow is water rather than air. Water around the blade profile creates lift and torque. The rotor turns slowly, because water is dense and the speeds are only a few metres per second. A gearbox or a direct drive turns a generator in a nacelle that is underwater or on a pile. A cable takes the electricity ashore, where the voltage and frequency are matched to the grid.\n\nWhen the tide reverses, energy can still be taken. The machine yaws the nacelle into the new direction, or the blades change pitch and the rotor works while facing the other way. Between flood and ebb there is slack water, when the power is zero. The structure has to resist corrosion, biological fouling, and debris. Operation is therefore harder than for a wind turbine, although the principle is the same: lift, a rotor, and a generator."
  },
  {
    id: 31,
    topic: "Plūdmaiņas",
    topicEn: "Tides",
    prompt: "Kāda ir atšķirība starp plūdmaiņu aizsprostu un zemūdens plūdmaiņu turbīnu?",
    promptEn: "What is the difference between a tidal barrage and an underwater tidal turbine?",
    choices: [],
    answer: null,
    explanation: "Plūdmaiņu aizsprosts izmanto potenciālo enerģiju. Dambis noslēdz līci, izveido baseinu un ražo no līmeņu starpības, kad paisuma vai bēguma ūdens laiž caur turbīnām. Jauda var būt simtiem megavatu, un grafiks ir paredzams. Ietekme ir liela: mainās līcis, saneši, sāļums, putnu un zivju barošanās vietas, un kuģiem vajag slūžas. Būve ir līdzīga lielai HES, tikai ūdens ir sāļš un līmenis svārstās abos virzienos.\n\nZemūdens turbīna dambi nebūvē. Tā stāv brīvā straumē un ņem kinētisko enerģiju, tāpat kā vēja turbīna. Krasts un līcis paliek atvērti, tāpēc ietekme uz vidi ir mazāka, lai gan rotors var skart zivis un jūras zīdītājus un aizņemt kuģu ceļu. Vienas mašīnas jauda ir daudz mazāka, jo kinetiskā plūsma nav sakoncentrēta baseinā. Aizsprosts ir retas, ļoti labas vietas liela būve. Turbīna ir modulis, ko var likt pa vienam tur, kur ir ātra straume.",
    explanationEn: "A tidal barrage uses potential energy. A dam closes a bay, forms a basin, and generates from the difference in level as flood or ebb water passes through turbines. The power can be hundreds of megawatts, and the timetable is predictable. The impact is large: the bay, the sediment, the salinity, and the feeding grounds of birds and fish change, and ships need locks. The construction is similar to a large hydropower plant, except that the water is salty and the level moves both ways.\n\nAn underwater turbine does not build that dam. It stands in the free current and takes kinetic energy, as a wind turbine does. The coast and the bay stay open, so the environmental effect is smaller, although the rotor can affect fish and marine mammals and can occupy a navigation channel. The power of one machine is much smaller, because the kinetic stream is not concentrated in a basin. A barrage is a large structure for a rare, very good site. A turbine is a module that can be added one by one where the current is fast."
  },
  {
    id: 32,
    topic: "Plūdmaiņas",
    topicEn: "Tides",
    prompt: "Nosauc trīs galvenās plūdmaiņu enerģijas priekšrocības un trūkumus.",
    promptEn: "Name three main advantages and three main drawbacks of tidal energy.",
    choices: [],
    answer: null,
    explanation: "Trīs būtiskas priekšrocības. Pirmkārt, grafiks ir paredzams gadiem uz priekšu, jo to nosaka Mēness un Saules kustība, nevis laika prognoze. Otrkārt, ražošana nav atkarīga no mākoņiem, sausuma vai vēja ātruma. Treškārt, nav degvielas un darbības laikā nav tiešo dūmgāzu, tāpēc tas ir atjaunojams avots ar augstu paredzamību, kādas saulei un vējam nav.\n\nTrīs būtiski trūkumi. Piemērotu vietu ir maz: vajag lielu amplitūdu vai ātru straumi, un tādu krastu nav daudz. Būve, īpaši aizsprosts, ir dārga un ilga. Aizsprosts maina ekosistēmu līcī. Papildus jauda ir cikliska. Ap stāvošu ūdeni ražošana apstājas, un maksimums nesakrīt ar elektrības patēriņa maksimumu, ja vien nav baseina, ko aizturēt. Tāpēc plūdmaiņas ir vērtīgas kā paredzama niša, nevis kā vienīgā jauda sistēmā.",
    explanationEn: "Three substantial advantages. First, the timetable can be predicted years ahead, because it is set by the motion of the Moon and the Sun, not by a weather forecast. Second, output does not depend on cloud, drought, or wind speed. Third, there is no fuel and no direct flue gas during operation, so it is a renewable source with a predictability that solar and wind do not have.\n\nThree substantial drawbacks. Suitable sites are few: a large range or a fast current is needed, and few coasts have either. Construction, especially a barrage, is expensive and slow. A barrage changes the ecosystem of the bay. Output is also cyclic. Around slack water generation stops, and the peak does not coincide with the demand peak unless a basin can be held back. Tides are therefore valuable as a predictable niche, not as the only power in a system."
  },
  {
    id: 33,
    topic: "Ģeotermālā",
    topicEn: "Geothermal",
    prompt: "Kas ir ģeotermālā enerģija, un kāds ir tās galvenais avots Zemes dzīlēs?",
    promptEn: "What is geothermal energy, and what is its main source deep in the Earth?",
    choices: [],
    answer: null,
    explanation: "Ģeotermālā enerģija ir siltums Zemes iekšienē, ko var izmantot apkurei vai elektrībai. Galvenais avots ir radioaktīvo izotopu, galvenokārt urāna, torija un kālija-40, sabrukšana garozā un mantijā. Otrs avots ir atlikušais siltums no Zemes veidošanās, kas vēl nav aizvadīts. Vidējais temperatūras gradients ir aptuveni 25–30 K uz kilometru, bet vulkāniskos un plātņu robežu apgabalos tas ir daudz lielāks.\n\nSiltums ceļas ar vadīšanu caur iežiem un ar konvekciju, kad karsts ūdens vai magma pārvietojas. Ekspluatācijai svarīgs ir nevis Zemes kodols pats par sevi, bet sasniedzamais karstais iezis vai ūdens nesējslānis. Ja ir karsts ūdens un caurlaidīgs iezis, iegūst hidrotermālu resursu. Ja iezis ir karsts, bet sauss, siltumu var iegūt tikai caur urbumiem un siltumnesēju. Avots ir Zemes iekšējais siltums, nevis Saule.",
    explanationEn: "Geothermal energy is heat inside the Earth that can be used for heating or electricity. Its main source is the decay of radioactive isotopes, chiefly uranium, thorium, and potassium-40, in the crust and mantle. The second source is residual heat from the formation of the Earth that has not yet been conducted away. The average temperature gradient is about 25–30 K per kilometre, but it is much larger in volcanic regions and near plate boundaries.\n\nThe heat rises by conduction through rock and by convection when hot water or magma moves. What matters for use is not the Earth’s core by itself, but hot rock or an aquifer that can be reached. If there is hot water and permeable rock, the resource is hydrothermal. If the rock is hot but dry, the heat can be taken only through boreholes and a heat-carrier fluid. The source is the Earth’s internal heat, not the Sun."
  },
  {
    id: 34,
    topic: "Ģeotermālā",
    topicEn: "Geothermal",
    prompt: "Kāpēc ģeotermālo enerģiju uzskata par samērā stabilu un no laikapstākļiem maz atkarīgu enerģijas avotu?",
    promptEn: "Why is geothermal energy considered fairly stable and little dependent on the weather?",
    choices: [],
    answer: null,
    explanation: "Saules un vēja jauda mainās stundas un sezonas laikā, jo to avots ir atmosfērā. Ģeotermālais siltums nāk no Zemes iekšienes. Tā plūsma konkrētā vietā gandrīz nemainās ne dienas, ne gada laikā, un to neietekmē mākoņi, vējš vai gaisa temperatūra. Dziļa stacija tāpēc var strādāt kā bāzes jauda ar augstu izmantojuma koeficientu, kamēr urbums un siltumnesēja kontūrs ir kārtībā.\n\nSekla zemes siltumsūkņa kontūra augšējo metru temperatūra nedaudz seko sezonai, bet jau dažu desmitu metru dziļumā svārstība ir maza. Tas joprojām nav tas pats, kas saules kolektors ziemā. Stabilitātei ir robeža. Ja siltumu ņem ātrāk, nekā iezis vai ūdens nesējslānis to atjauno, temperatūra ap urbumu gadu gaitā krītas. Avots ir stabils ģeoloģiskā laikā, bet konkrēts projekts var resursu lokāli izsmelt. Laikapstākļi to nenosaka. Nosaka ieguves un atjaunošanās līdzsvars.",
    explanationEn: "Solar and wind power change by the hour and the season because their source is in the atmosphere. Geothermal heat comes from inside the Earth. At a given place its flow barely changes through the day or the year, and cloud, wind, and air temperature do not affect it. A deep plant can therefore run as baseload with a high capacity factor, as long as the well and the fluid circuit are in order.\n\nOn a shallow ground-source heat pump the temperature of the upper metres follows the season a little, but at a depth of a few tens of metres the variation is small. That is still not the same thing as a solar collector in winter. Stability has a limit. If heat is taken faster than the rock or the aquifer replaces it, the temperature around the borehole falls over the years. The source is stable on a geological timescale, but a particular project can deplete the resource locally. The weather does not decide that. The balance of extraction and recharge does."
  },
  {
    id: 35,
    topic: "Ģeotermālā",
    topicEn: "Geothermal",
    prompt: "Kāda ir atšķirība starp seklās ģeotermālās enerģijas izmantošanu ar siltumsūkņiem un dziļās ģeotermālās enerģijas ieguvi?",
    promptEn: "What is the difference between using shallow geothermal energy with heat pumps and extracting deep geothermal energy?",
    choices: [],
    answer: null,
    explanation: "Seklā ģeotermija izmanto grunti dažu desmitu līdz dažu simtu metru dziļumā, kur temperatūra ir tikai aptuveni 5–15 °C. Ar to māju tieši neapsilda. Siltumsūknis paceļ šo temperatūru līdz apkures līmenim un patērē elektrību. Atdotais siltums ir vairākas reizes lielāks par patērēto elektrību, bet elektrība joprojām ir vajadzīga. Šāds resurss ir gandrīz visur, arī Latvijā, kur nav vulkāniska siltuma.\n\nDziļā ieguve sniedzas kilometru dziļumā līdz karstam ūdenim, tvaikam vai karstam iezim. Pietiekami karstu plūsmu var lietot tieši siltumtīklā vai, ja temperatūra ir augsta, elektrības ražošanai tvaika vai binārajā ciklā. Tam vajag īpašu ģeoloģiju: paaugstinātu gradientu, ūdens nesējslāni vai sasadrumstalotu karstu iezi. Urbums ir dārgs, un risks ir neatradīt pietiekamu caurplūdumu. Seklā sistēma ir siltumsūknis ar nelielu elektrības patēriņu. Dziļā sistēma ir ģeoloģisks siltuma avots, kas nav pieejams katrā pagastā.",
    explanationEn: "Shallow geothermal energy uses the ground from a few tens of metres to a few hundred metres, where the temperature is only about 5–15 °C. A house cannot be heated by that directly. A heat pump raises the temperature to the heating level and consumes electricity. The heat delivered is several times the electricity consumed, but electricity is still required. This resource exists almost everywhere, including Latvia, which has no volcanic heat.\n\nDeep extraction goes down kilometres to hot water, steam, or hot rock. A flow that is hot enough can be used directly in a district-heating network or, if the temperature is high, to generate electricity in a steam or binary cycle. That needs particular geology: an elevated gradient, an aquifer, or fractured hot rock. The borehole is expensive, and the risk is that the discharge will not be enough. A shallow system is a heat pump with a modest electricity use. A deep system is a geological heat source, and it is not available in every district."
  },
  {
    id: 36,
    topic: "Ģeotermālā",
    topicEn: "Geothermal",
    prompt: "Kā darbojas zemes siltumsūknis, un kādas ir tā galvenās sastāvdaļas?",
    promptEn: "How does a ground-source heat pump work, and what are its main components?",
    choices: [],
    answer: null,
    explanation: "Zemes siltumsūknis nepārvērš elektrību siltumā viens pret viens. Tas pārsūknē siltumu no vēsākas grunts uz siltāku ēku. Slēgtā kontūrā vai urbumos cirkulē šķidrums un savāc grunts siltumu. Iztvaikotājā aukstumaģents uzņem šo siltumu un iztvaiko. Kompresors saspiež tvaiku, paaugstina tā spiedienu un temperatūru un patērē elektrību. Kondensatorā karstais tvaiks atdod siltumu mājas apkures kontūram un kondensējas. Izplešanās vārsts pazemina spiedienu, un cikls atkārtojas.\n\nGalvenās daļas ir zemes kontūrs vai urbumi, cirkulācijas sūknis, iztvaikotājs, kompresors, kondensators, izplešanās vārsts, aukstumaģents un mājas apkures kontūrs. Lietderību raksturo siltuma koeficients COP = atdotais siltums / kompresora elektrība. COP ir lielāks par 1, bieži aptuveni 3–5, jo lielākā siltuma daļa ir paņemta no grunts, nevis radīta ar elektrību. Jo mazāka starpība starp grunti un turpgaitas temperatūru, jo COP ir lielāks. Tāpēc šāds sūknis labi sader ar siltajām grīdām.",
    explanationEn: "A ground-source heat pump does not turn electricity into heat one for one. It pumps heat from cooler ground into a warmer building. A fluid circulates in a closed loop or in boreholes and collects ground heat. In the evaporator the refrigerant takes up that heat and evaporates. The compressor raises the vapour pressure and temperature and consumes electricity. In the condenser the hot vapour gives heat to the building circuit and condenses. The expansion valve lowers the pressure, and the cycle repeats.\n\nThe main parts are the ground loop or boreholes, a circulation pump, the evaporator, the compressor, the condenser, the expansion valve, the refrigerant, and the building heating circuit. Performance is described by COP = heat delivered / compressor electricity. COP is greater than 1, often about 3–5, because most of the heat was taken from the ground rather than created with electricity. The smaller the gap between the ground and the supply temperature, the higher the COP. This is why the pump suits underfloor heating."
  },
  {
    id: 37,
    topic: "Augu eļļa",
    topicEn: "Plant oil",
    prompt: "Kādas augu eļļas iespējams izmantot enerģijas ieguvei un transportā?",
    promptEn: "Which plant oils can be used for energy and transport?",
    choices: [],
    answer: null,
    explanation: "Enerģijai der augu eļļas, kas sastāv galvenokārt no triglicerīdiem. Praksē tās ir rapšu, saulespuķu, sojas, palmu un linsēklu eļļa, kā arī citas pārtikas eļļas. Latvijas apstākļos nozīmīgākā lauka kultūra ir rapsis. Eļļu var sadedzināt katlā siltumam vai, pēc pārstrādes, lietot dīzeļdzinējā. Tiešai lietošanai dzinējā der tikai pielāgota iekārta, jo tīra eļļa ir daudz viskozāka par dīzeļdegvielu.\n\nParastais ceļš uz transportu ir pāresterificēšana līdz biodīzeļdegvielai. Tad degviela ir tuvāka dīzeļdegvielas viskozitātei un standartam. Lietota cepameļļa un dzīvnieku tauki arī ir izejviela biodīzeļdegvielai, bet tie nav laukā iegūta augu eļļa. Eksāmenā šī atšķirība jāpasaka, jo atkritumu eļļa un rapšu lauks nav viens un tas pats resurss ne pēc izcelsmes, ne pēc ilgtspējas. Kokaugu eļļas un aļģu eļļa ir iespējamas, bet pašreizējā praksē dominē lauka kultūras un atkritumu tauki.",
    explanationEn: "Oils used for energy are those made mainly of triglycerides. In practice they are rapeseed, sunflower, soy, palm, and linseed oil, and other food oils. Under Latvian conditions the important field crop is rapeseed. The oil can be burned in a boiler for heat or, after processing, used in a diesel engine. Only an adapted engine can use it directly, because straight oil is much more viscous than diesel fuel.\n\nThe usual route into transport is transesterification to biodiesel. The fuel is then closer to diesel in viscosity and in its standard. Used cooking oil and animal fats are also feedstocks for biodiesel, but they are not plant oil from a field. An exam answer should say that, because waste oil and a rapeseed field are not the same resource either in origin or in sustainability. Tree oils and algal oil are possible, but current practice is dominated by field crops and waste fats."
  },
  {
    id: 38,
    topic: "Augu eļļa",
    topicEn: "Plant oil",
    prompt: "Kā iegūst augu eļļu no eļļas augiem, piemēram, rapša?",
    promptEn: "How is plant oil obtained from oil crops, for example rapeseed?",
    choices: [],
    answer: null,
    explanation: "No rapša vai citas eļļas sēklas eļļu atdala mehāniski un, rūpnīcā, bieži arī ar šķīdinātāju. Sēklas vispirms attīra no piemaisījumiem un kondicionē: sasmalcina un iesilda, lai šūnas atvērtos un eļļa vieglāk iztecētu. Presē iegūst jēleļļu un spraukumus. Spraukumi ir olbaltumvielām bagāts atlikums, ko var izmantot lopbarībā. Aukstā prese dod mazāku iznākumu, bet maigāku eļļu. Karstā prese dod lielāku iznākumu.\n\nJēleļļu filtrē, atdala ūdeni, gļotas un brīvās taukskābes, ja eļļa jāuzglabā vai jāpārstrādā tālāk. Rūpniecībā pēc preses atlikumu vēl skalo ar šķīdinātāju, parasti heksānu, un šķīdinātāju atdestilē un izmanto atkārtoti. Pārtikas eļļai seko vēl balināšana un dezodorēšana. Degvielas izejvielai svarīgākais ir mitrums, piemaisījumi un brīvās taukskābes, jo tās traucē vēlāko pāresterificēšanu ar bāzisku katalizatoru.",
    explanationEn: "Oil is separated from rapeseed or another oilseed mechanically and, in a factory, often with a solvent as well. The seeds are first cleaned and conditioned: they are crushed and heated so that the cells open and the oil flows more easily. Pressing produces crude oil and cake. The cake is a protein-rich residue that can be used as animal feed. A cold press gives a lower yield but a milder oil. A hot press gives a higher yield.\n\nThe crude oil is filtered, and water, gums, and free fatty acids are removed if the oil is to be stored or processed further. In industry the residue after the press is washed with a solvent, usually hexane, and the solvent is distilled off and reused. Food oil then goes through bleaching and deodorizing. For a fuel feedstock the important points are moisture, impurities, and free fatty acids, because those interfere with later base-catalysed transesterification."
  },
  {
    id: 39,
    topic: "Augu eļļa",
    topicEn: "Plant oil",
    prompt: "Kāda ir atšķirība starp tīru augu eļļu un biodīzeļdegvielu?",
    promptEn: "What is the difference between straight vegetable oil and biodiesel?",
    choices: [],
    answer: null,
    explanation: "Tīra augu eļļa ir triglicerīdu maisījums, kāds tas ir pēc preses un attīrīšanas. Molekula ir liela, tāpēc eļļa 40 °C temperatūrā ir daudz viskozāka par dīzeļdegvielu, aptuveni desmit reižu, un tai ir augsta uzliesmošanas temperatūra. Tā nav degviela standarta EN 590 izpratnē. To var lietot tikai pielāgotā dzinējā vai pēc uzsildīšanas.\n\nBiodīzeļdegviela rodas, kad triglicerīdu pāresterificē ar metanolu vai etanolu. Triglicerīda vietā ir trīs mazākas taukskābju estera molekulas, un atdalās glicerīns. Esteri ir šķidrāki, tuvāk dīzeļdegvielas viskozitātei, un tos specificē standarts EN 14214. Ķīmiski tātad atšķiras molekulas izmērs un klase: triglicerīds pret metil- vai etilesteri. Fiziski atšķiras viskozitāte, izsmidzināšana, aukstuma īpašības un piemērotība parastam dīzeļdzinējam. Abas nāk no eļļas, bet dzinējā tās nav savstarpēji aizstājamas bez nosacījumiem.",
    explanationEn: "Straight vegetable oil is the mixture of triglycerides left after pressing and cleaning. The molecule is large, so at 40 °C the oil is much more viscous than diesel, by about a factor of ten, and it has a high flash point. It is not a fuel in the sense of EN 590. It can be used only in an adapted engine or after heating.\n\nBiodiesel is produced when the triglyceride is transesterified with methanol or ethanol. The triglyceride is replaced by three smaller fatty-acid ester molecules, and glycerol separates. The esters are thinner, closer to diesel in viscosity, and they are specified by EN 14214. Chemically, the size and class of the molecule differ: a triglyceride against a methyl or ethyl ester. Physically, viscosity, atomization, cold-flow properties, and suitability for an ordinary diesel engine differ. Both come from oil, but they are not interchangeable in an engine without conditions."
  },
  {
    id: 40,
    topic: "Augu eļļa",
    topicEn: "Plant oil",
    prompt: "Kāpēc parastu augu eļļu nevar izmantot jebkurā dīzeļdzinējā?",
    promptEn: "Why can ordinary plant oil not be used in just any diesel engine?",
    choices: [],
    answer: null,
    explanation: "Parasta augu eļļa neatbilst dīzeļdegvielas viskozitātei, pēc kuras ir projektētas sūkņa, sprauslu un sadegšanas kameras. Auksta eļļa izsmidzinās lielos pilienos, slikti sajaucas ar gaisu un sadeg nepilnīgi. Uz sprauslām un virzuļa veidojas koksa un lakas nogulsnes. Eļļa var sabiezēt filtrā, īpaši ziemā, un bojāt augstspiediena sūkni. Ilgākā laikā tā arī bojā blīvējumus, kas nav paredzēti augu eļļai, un atšķaida eļļošanas eļļu, ja nonāk karterī.\n\nTāpēc to nevar liet parastā dīzeļdzinējā tāpat kā dīzeļdegvielu. Ir divi pareizi ceļi. Eļļu pāresterificē par biodīzeļdegvielu, kas atbilst EN 14214 un der parastam dzinējam maisījumā, kādu ražotājs atļauj. Vai arī dzinēju pielāgo: eļļu silda, iedarbina un noslāpē ar dīzeļdegvielu un nomaina nesaderīgās detaļas. Bez viena no šiem soļiem augstā viskozitāte un nogulsnes padara ekspluatāciju neuzticamu.",
    explanationEn: "Ordinary plant oil does not have the viscosity for which the pump, injectors, and combustion chamber of a diesel engine were designed. Cold oil atomizes into large droplets, mixes poorly with air, and burns incompletely. Coke and varnish deposits form on the injectors and the piston. The oil can thicken in the filter, especially in winter, and damage the high-pressure pump. Over a longer time it also attacks seals that were not made for vegetable oil, and it dilutes the lubricating oil if it reaches the crankcase.\n\nIt therefore cannot be poured into an ordinary diesel engine as if it were diesel fuel. There are two sound routes. The oil is transesterified to biodiesel, which meets EN 14214 and is suitable for an ordinary engine in the blend the manufacturer allows. Or the engine is adapted: the oil is heated, the engine is started and stopped on diesel, and incompatible parts are replaced. Without one of those steps, the high viscosity and the deposits make operation unreliable."
  },
  {
    id: 41,
    topic: "Augu eļļa",
    topicEn: "Plant oil",
    prompt: "Kādas izmaiņas dzinējā vai degvielas sistēmā var būt nepieciešamas, izmantojot tīru augu eļļu?",
    promptEn: "What changes to the engine or the fuel system may be needed when using straight vegetable oil?",
    choices: [],
    answer: null,
    explanation: "Tīrai augu eļļai viskozitāte jāsamazina, pirms tā sasniedz sprauslu. To dara ar dzesēšanas šķidruma vai elektrisko priekšsildītāju. Bieži eļļu silda līdz aptuveni 70 °C, lai izsmidzināšana tuvotos dīzeļdegvielai. Vajag divu tvertņu sistēmu. Aukstu dzinēju iedarbina ar dīzeļdegvielu. Kad tas ir silts, pārslēdzas uz augu eļļu. Pirms noslāpēšanas atkal kādu laiku jābrauc ar dīzeļdegvielu, lai sprauslās un caurulēs nepaliktu eļļa, kas atdzisīs un aizsērēs.\n\nJānomaina blīvējumi un lokanās caurules pret materiālu, kas neuzbriest augu eļļā. Filtram jābūt smalkākam un jāparedz, ka tas aizas ātrāk. Sūknim un sprauslām jābūt piemērotām lielākai viskozitātei, dažreiz ar lielāku sprauslas caurumu. Jāuzrauga eļļas mitrums, nogulsnes un skābes skaitlis, jo sliktas eļļas karsēšana problēmu nepalabo. Šīs ir degvielas sistēmas izmaiņas. Tās nepārvērš eļļu par biodīzeļdegvielu, bet padara tās lietošanu iespējamu.",
    explanationEn: "The viscosity of straight vegetable oil has to be reduced before it reaches the injector. That is done with a coolant-heated or electric preheater. The oil is often heated to about 70 °C so that atomization approaches that of diesel. A two-tank system is needed. A cold engine is started on diesel. Once it is warm, it is switched to vegetable oil. Before shutdown the engine has to run on diesel again for a while, so that oil does not remain in the injectors and lines, cool, and block them.\n\nSeals and flexible hoses have to be replaced with a material that does not swell in vegetable oil. The filter should be finer, and it will clog sooner. The pump and injectors have to tolerate the higher viscosity, sometimes with a larger nozzle opening. Moisture, sediment, and the acid number of the oil have to be watched, because heating a poor oil does not cure it. These are changes to the fuel system. They do not turn the oil into biodiesel, but they make its use possible."
  },
  {
    id: 42,
    topic: "Bioetanols",
    topicEn: "Bioethanol",
    prompt: "Kas ir bioetanols, un no kādām izejvielām to ražo?",
    promptEn: "What is bioethanol, and from which feedstocks is it produced?",
    choices: [],
    answer: null,
    explanation: "Bioetanols ir etilspirts, C₂H₅OH, ko iegūst no biomasas un lieto kā degvielu vai benzīna piedevu. Pirmās paaudzes izejvielas satur cukuru vai cieti, ko var samērā viegli pārvērst fermentējamos cukuros. Cukuru dod cukurniedres un cukurbietes. Cieti dod kukurūza, kvieši, rudzi un kartupeļi. Latvijā reālistiskākās ir graudaugu un, mazāk, biešu plūsmas, nevis cukurniedres.\n\nOtrās paaudzes izejviela ir lignoceluloze: salmi, koksnes atlikumi, makulatūras šķiedra un enerģētiskās zāles. Tur cukuri ir celulozē un hemicelulozē, ko sedz lignīns, tāpēc vajag grūtu priekšapstrādi. Trešās paaudzes avots būtu aļģes, bet tas vēl nav parastā rūpnieciskā prakse. Eksāmenā pietiek skaidri nodalīt cukuru, cieti un celulozi un pateikt, ka etanols ir spirts, nevis eļļa. To jauc ar benzīnu, nevis ar dīzeļdegvielu.",
    explanationEn: "Bioethanol is ethyl alcohol, C₂H₅OH, obtained from biomass and used as a fuel or as a petrol additive. First-generation feedstocks contain sugar or starch that can be turned fairly easily into fermentable sugars. Sugar comes from cane and sugar beet. Starch comes from maize, wheat, rye, and potato. In Latvia the realistic flows are cereals and, to a smaller extent, beet, not sugar cane.\n\nA second-generation feedstock is lignocellulose: straw, wood residues, waste fibre, and energy grasses. There the sugars are in cellulose and hemicellulose, covered by lignin, so a difficult pretreatment is needed. A third-generation source would be algae, but that is not yet ordinary industrial practice. An exam answer should separate sugar, starch, and cellulose clearly, and say that ethanol is an alcohol, not an oil. It is blended with petrol, not with diesel."
  },
  {
    id: 43,
    topic: "Bioetanols",
    topicEn: "Bioethanol",
    prompt: "Kādi ir galvenie bioetanola ražošanas procesa posmi?",
    promptEn: "What are the main stages of bioethanol production?",
    choices: [],
    answer: null,
    explanation: "Process sākas ar izejvielas sagatavošanu: tīrīšanu, malšanu un, cietei, iesala vai enzīmu hidrolīzi līdz glikozei. Cukurbietei un niedrei šis hidrolīzes posms nav vajadzīgs, jo cukurs jau ir brīvs. Pēc tam misu raudzē ar raugu bez skābekļa. No cukura rodas etanols un CO₂. Fermentācija apstājas, kad spirta daļa kļūst raugam toksiska vai cukurs beidzas. Tipiskā brāgā etanola ir tikai aptuveni 10–15 %.\n\nTālāk seko destilācija. Etanols un ūdens veido azeotropu aptuveni 95,6 % spirtam, tāpēc ar parasto destilāciju vien degvielas kvalitāti nesasniedz. Atlikuši ūdeni atdala ar molekulārajiem sietiem vai citu atūdeņošanu, līdz etanols ir gandrīz bezūdens. Degvielai to denaturē, lai nebūtu dzerams. Šķiede, rauga masa un graudu atlikums var iet lopbarībā vai biogāzē. Katrs posms ir vajadzīgs cita iemesla dēļ: hidrolīze dod cukuru, raudzēšana dod spirtu, destilācija un žāvēšana dod degvielas tīrību.",
    explanationEn: "The process starts by preparing the feedstock: cleaning, milling, and, for starch, hydrolysis with malt or enzymes to glucose. Beet and cane do not need that hydrolysis, because the sugar is already free. The mash is then fermented with yeast in the absence of oxygen. Sugar becomes ethanol and CO₂. Fermentation stops when the alcohol content becomes toxic to the yeast or the sugar is used up. A typical broth contains only about 10–15% ethanol.\n\nDistillation follows. Ethanol and water form an azeotrope at about 95.6% alcohol, so ordinary distillation alone does not reach fuel grade. The remaining water is removed with molecular sieves or another dehydration step until the ethanol is nearly anhydrous. For fuel it is denatured so that it cannot be drunk. Stillage, yeast mass, and grain residue can go to animal feed or biogas. Each stage is needed for a different reason: hydrolysis makes sugar, fermentation makes alcohol, and distillation and drying make fuel purity."
  },
  {
    id: 44,
    topic: "Bioetanols",
    topicEn: "Bioethanol",
    prompt: "Kāda nozīme bioetanola ražošanā ir fermentācijai?",
    promptEn: "What is the role of fermentation in bioethanol production?",
    choices: [],
    answer: null,
    explanation: "Fermentācija ir posms, kurā rodas pats etanols. Raugs, parasti Saccharomyces cerevisiae, bezskābekļa apstākļos noārda cukuru. Glikozes summārā reakcija ir\n\nC₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂.\n\nUz katru glikozes molu teorētiski rodas divi etanola moli. Bez šī bioloģiskā posma malšana un destilācija nedod spirtu, jo destilēt var tikai to, kas šķidrumā jau ir. Ciete vispirms jāhidrolizē līdz cukuram, citādi raugs to neizmanto.\n\nFermentācija arī ierobežo iznākumu. Daļa cukura aiziet rauga augšanai un blakusproduktiem, un raugs apstājas, kad etanola koncentrācija kļūst par lielu. Temperatūra, pH un infekcija ar baktērijām maina iznākumu. CO₂ ir jānovada. Enerģētikas bilancē šis CO₂ ir īsciklisks, ja biomasa ir ataugusi, bet destilācijai pēc tam vajag siltumu, un tas bieži ir lielākais procesa enerģijas patēriņš.",
    explanationEn: "Fermentation is the stage in which the ethanol itself is produced. Yeast, usually Saccharomyces cerevisiae, breaks down sugar without oxygen. The overall reaction for glucose is\n\nC₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂.\n\nIn theory, two moles of ethanol form for each mole of glucose. Without this biological stage, milling and distillation produce no alcohol, because distillation can recover only what is already in the liquid. Starch has to be hydrolyzed to sugar first, or the yeast cannot use it.\n\nFermentation also limits the yield. Part of the sugar goes into yeast growth and by-products, and the yeast stops when the ethanol concentration becomes too high. Temperature, pH, and infection by bacteria change the yield. The CO₂ has to be removed. In the energy balance this CO₂ is short-cycle carbon if the biomass has regrown, but distillation afterwards needs heat, and that is often the largest energy use in the process."
  },
  {
    id: 45,
    topic: "Bioetanols",
    topicEn: "Bioethanol",
    prompt: "Kāda ir pirmās un otrās paaudzes bioetanola atšķirība?",
    promptEn: "What is the difference between first-generation and second-generation bioethanol?",
    choices: [],
    answer: null,
    explanation: "Pirmās paaudzes bioetanolu ražo no pārtikas kultūrām: cukurniedrēm, bietēm, kukurūzas un labības. Cukurs vai ciete ir viegli pieejama, tehnoloģija ir nobriedusi, un iznākums ir paredzams. Maksa ir konkurence ar pārtiku un barību, aizņemta aramzeme, mēslojums un, ja meža vai pļavas vietā ierīko lauku, zemes izmantošanas maiņas emisijas. Klimata ieguvums tad var būt daudz mazāks, nekā rāda tikai izpūtējs.\n\nOtrās paaudzes etanolu ražo no nepārtikas biomasas un atlikumiem, galvenokārt celulozes. Tas mazāk konkurē ar pārtiku. Grūtība ir priekšapstrāde. Lignīns un kristāliska celuloze jāatver ar tvaiku, skābi, sārmu vai mehāniski, un pēc tam enzīmi sadala celulozi līdz cukuriem, kurus raugs var raudzēt. Šis posms patērē enerģiju un enzīmus un sadārdzina degvielu. Pirmā paaudze ir vienkāršāka un jau rūpnieciska. Otrā ir ilgtspējīgāka pēc izejvielas, bet tehnoloģiski grūtāka.",
    explanationEn: "First-generation bioethanol is made from food crops: cane, beet, maize, and grain. The sugar or starch is easy to reach, the technology is mature, and the yield is predictable. The cost is competition with food and feed, occupied cropland, fertilizer, and, if a field replaces forest or grassland, emissions from land-use change. The climate benefit can then be much smaller than the exhaust pipe alone suggests.\n\nSecond-generation ethanol is made from non-food biomass and residues, chiefly cellulose. It competes less with food. The difficulty is pretreatment. Lignin and crystalline cellulose have to be opened with steam, acid, alkali, or mechanically, and enzymes then break the cellulose down to sugars the yeast can ferment. That stage uses energy and enzymes and makes the fuel more expensive. The first generation is simpler and already industrial. The second is more sustainable in its feedstock, but technically harder."
  },
  {
    id: 46,
    topic: "Bioetanols",
    topicEn: "Bioethanol",
    prompt: "Kā bioetanola pievienošana benzīnam ietekmē degvielas īpašības un dzinēja darbību?",
    promptEn: "How does adding bioethanol to petrol affect fuel properties and engine operation?",
    choices: [],
    answer: null,
    explanation: "Etanols ir skābekli saturoša sastāvdaļa ar augstu oktānskaitli, tāpēc tas mazina detonāciju un ļauj dzinējam strādāt ar lielāku saspiešanu. Sadegšanā tas var samazināt CO un dažu nesadegušo ogļūdeņražu daudzumu. Vienlaikus tā tilpuma enerģijas blīvums ir mazāks nekā benzīnam, aptuveni 21 MJ/L pret aptuveni 32 MJ/L. Lai iegūtu to pašu darbu, litru patēriņš pieaug. E10 pieaugums ir neliels. E85 ir jau manāms, un dzinējam jābūt tam paredzētam.\n\nEtanols jaucas ar ūdeni un var pārvilkt mitrumu tvertnē. Lielā ūdens daudzumā benzīna un etanola fāzes var sadalīties. Vecas gumijas un dažas plastmasas uzbriest, un alumīnija vai tērauda detaļas var korodēt, ja sistēma nav piemērota. Aukstā iedarbināšana ir grūtāka, jo etanols sliktāk iztvaiko. Parasts Eiropas benzīna dzinējs parasti panes E5 un E10. Lielāks saturs prasa elastīgās degvielas dzinēju, citu maisījuma regulējumu un pārbaudītus materiālus.",
    explanationEn: "Ethanol is an oxygenated component with a high octane number, so it reduces knock and allows an engine to run at a higher compression ratio. In combustion it can reduce CO and some unburned hydrocarbons. At the same time its volumetric energy density is lower than that of petrol, about 21 MJ/L against about 32 MJ/L. More litres are needed for the same work. The increase at E10 is small. At E85 it is already noticeable, and the engine has to be designed for it.\n\nEthanol mixes with water and can draw moisture into the tank. With enough water the petrol and ethanol phases can separate. Old rubber and some plastics swell, and aluminium or steel parts can corrode if the system is not compatible. Cold starting is harder because ethanol evaporates less readily. An ordinary European petrol engine usually tolerates E5 and E10. A higher share needs a flexible-fuel engine, a different mixture control, and materials that have been shown to be compatible."
  },
  {
    id: 47,
    topic: "Biodīzelis",
    topicEn: "Biodiesel",
    prompt: "Kas ir biodīzeļdegviela, un no kādām izejvielām to var ražot?",
    promptEn: "What is biodiesel, and from which feedstocks can it be produced?",
    choices: [],
    answer: null,
    explanation: "Biodīzeļdegviela ir taukskābju metilesteri vai etilesteri, ko iegūst no augu eļļām, dzīvnieku taukiem vai lietotas cepameļļas. Izejvielas molekula ir triglicerīds. To pāresterificē ar metanolu vai etanolu katalizatora klātienē. Rodas trīs estera molekulas, kas ir pati degviela, un glicerīns kā blakusprodukts. Glicerīns jāatdala, jāattīra un jāatrod tam izmantojums, citādi procesa bilance un ekonomika ir nepilnīga.\n\nRapšu eļļa ir tipiska Eiropas izejviela un dod labākas aukstuma īpašības nekā palmu eļļa. Sojas un saulespuķu eļļa arī der. Atkritumu eļļas un tauki der tad, ja no tiem atdala ūdeni un brīvās taukskābes vai izvēlas piemērotu katalizatoru. Gatavo degvielu raksturo EN 14214. Tā nav tīra augu eļļa un nav arī naftas dīzeļdegviela. Maisījumus apzīmē ar B un skaitli, piemēram, B7 nozīmē aptuveni 7 % biodīzeļdegvielas dīzeļdegvielā.",
    explanationEn: "Biodiesel is the methyl or ethyl esters of fatty acids, made from plant oils, animal fats, or used cooking oil. The feedstock molecule is a triglyceride. It is transesterified with methanol or ethanol in the presence of a catalyst. Three ester molecules, which are the fuel, and glycerol as a by-product are formed. The glycerol has to be separated, cleaned, and given a use, or the mass balance and the economics of the process are incomplete.\n\nRapeseed oil is a typical European feedstock and gives better cold-flow properties than palm oil. Soy and sunflower oil are also suitable. Waste oils and fats are suitable if water and free fatty acids are removed, or if a suitable catalyst is chosen. The finished fuel is specified by EN 14214. It is not straight vegetable oil, and it is not petroleum diesel. Blends are marked with B and a number: B7 means about 7% biodiesel in diesel fuel."
  },
  {
    id: 48,
    topic: "Biodīzelis",
    topicEn: "Biodiesel",
    prompt: "Kā darbojas eļļu un tauku pāresterificēšanas process?",
    promptEn: "How does the transesterification of oils and fats work?",
    choices: [],
    answer: null,
    explanation: "Pāresterificēšanā triglicerīds reaģē ar spirtu. Ar metanolu summārā reakcija ir\n\ntriglicerīds + 3 CH₃OH ⇌ 3 taukskābju metilesteri + glicerīns.\n\nTaukskābju ķēdes atdalās no glicerīna un izveido esterus. Tie ir biodīzeļdegviela. Reakcija ir līdzsvarā, tāpēc metanolu liek pārākumā un glicerīnu atdala, lai līdzsvars virzītos uz esteru pusi. Temperatūra metanolam parasti ir aptuveni 50–60 °C, zem spirta vārīšanās, maisot un bieži paaugstinātā spiedienā rūpnieciskā reaktorā.\n\nBāzisks katalizators, NaOH vai KOH, reakciju paātrina, bet prasa sausu eļļu ar maz brīvo taukskābju. Ūdens un brīvās skābes ar sārmu dod ziepes. Ziepes veido emulsiju, traucē atdalīt glicerīnu un samazina iznākumu. Taukainiem atkritumiem vispirms skābes katalizatorā esterificē brīvās taukskābes vai lieto skābi visam procesam. Enzīms, lipāze, darbojas maigāk, bet ir dārgāks. Pēc reakcijas esteri mazgā, žāvē un pārbauda pret EN 14214.",
    explanationEn: "In transesterification a triglyceride reacts with an alcohol. With methanol the overall reaction is\n\ntriglyceride + 3 CH₃OH ⇌ 3 fatty-acid methyl esters + glycerol.\n\nThe fatty-acid chains leave the glycerol and form esters. Those esters are the biodiesel. The reaction is an equilibrium, so methanol is used in excess and glycerol is removed to push the equilibrium toward the esters. For methanol the temperature is usually about 50–60 °C, below the boiling point of the alcohol, with stirring and often at elevated pressure in an industrial reactor.\n\nA base catalyst, NaOH or KOH, speeds the reaction, but it needs dry oil with few free fatty acids. Water and free acids form soap with the alkali. Soap makes an emulsion, hinders the separation of glycerol, and lowers the yield. For fatty wastes the free fatty acids are first esterified with an acid catalyst, or an acid is used for the whole process. An enzyme, lipase, works under milder conditions but costs more. After the reaction the esters are washed, dried, and checked against EN 14214."
  },
  {
    id: 49,
    topic: "Biodīzelis",
    topicEn: "Biodiesel",
    prompt: "Kāda ir metanola vai etanola un katalizatora nozīme biodīzeļdegvielas ražošanā?",
    promptEn: "What is the role of methanol or ethanol, and of the catalyst, in biodiesel production?",
    choices: [],
    answer: null,
    explanation: "Metanols vai etanols šajā reakcijā nav šķīdinātājs. Tas ir reaģents. Triglicerīdam ir trīs taukskābju atlikumi, tāpēc stehiometriski vajag trīs spirta molekulas uz vienu eļļas molekulu. Praksē spirta liek vairāk, jo reakcija ir līdzsvarā un pārākums nobīda to uz biodīzeļdegvielas un glicerīna pusi. Metanols ir lētāks un reaģē ātrāk, tāpēc rūpniecībā dominē metilesteri. Etanolu var iegūt no biomasas, un tad estera oglekļa izcelsme ir konsekventāka, bet reakcija ir lēnāka un atdalīšana grūtāka.\n\nKatalizators pazemina aktivācijas enerģiju, tāpēc reakcija norit aptuveni 60 °C temperatūrā, nevis pie daudz augstākas temperatūras, kas eļļu bojātu. Ideālā gadījumā katalizators netiek patērēts. NaOH un KOH ir lēti bāziski katalizatori, bet ar brīvajām taukskābēm tie veido ziepes un ar ūdeni zaudē aktivitāti. Skābes katalizators panes netīrāku eļļu, taču ir lēnāks. Lipāze ir selektīva un jūtīga pret spirtu mazāk, bet dārga. Pēc reakcijas katalizatora atlikums, ziepes un glicerīns no degvielas jāizmazgā.",
    explanationEn: "Methanol or ethanol is not a solvent in this reaction. It is a reactant. A triglyceride has three fatty-acid residues, so the stoichiometry requires three alcohol molecules for one oil molecule. In practice more alcohol is used, because the reaction is an equilibrium and the excess pushes it toward biodiesel and glycerol. Methanol is cheaper and reacts faster, so industry uses mainly methyl esters. Ethanol can be made from biomass, and then the origin of the carbon in the ester is more consistent, but the reaction is slower and the separation is harder.\n\nA catalyst lowers the activation energy, so the reaction proceeds at about 60 °C rather than at a much higher temperature that would damage the oil. Ideally the catalyst is not consumed. NaOH and KOH are cheap base catalysts, but with free fatty acids they form soap and with water they lose activity. An acid catalyst tolerates a dirtier oil, but it is slower. Lipase is selective and less sensitive to the alcohol, but it is expensive. After the reaction, residual catalyst, soap, and glycerol have to be washed out of the fuel."
  },
  {
    id: 50,
    topic: "Biodīzelis",
    topicEn: "Biodiesel",
    prompt: "Kādas ir galvenās atšķirības starp biodīzeļdegvielu un fosilo dīzeļdegvielu?",
    promptEn: "What are the main differences between biodiesel and fossil diesel?",
    choices: [],
    answer: null,
    explanation: "Fosilā dīzeļdegviela ir naftas ogļūdeņražu frakcija. Biodīzeļdegviela ir skābekli saturošs taukskābju esteris no biomasas. Abas var darbināt dīzeļdzinēju, bet to ķīmija un īpašības nesakrīt. Biodīzeļdegvielā sēra gandrīz nav, tāpēc sēra oksīdu emisija ir maza, un tai ir labāka eļļošanas spēja, kas vecākiem sūkņiem ir priekšrocība. Uzliesmošanas temperatūra ir augstāka, tāpēc glabāšana ir drošāka. Cetānskaitlis bieži ir augsts, un sadegšana sākas labi.\n\nTrūkumi ir otrā pusē. Enerģijas blīvums ir aptuveni 37 MJ/kg pret aptuveni 43 MJ/kg dīzeļdegvielai, tāpēc litru patēriņš pieaug. Viskozitāte ir lielāka, aukstumā piesātinātie esteri kristalizējas, un degviela oksidējas noliktavā ātrāk nekā naftas dīzeļdegviela. Tā šķīdina dažas vecas blīves un var uzvesties kā šķīdinātājs pret veciem nosēdumiem tvertnē. Standarts ir EN 14214, nevis EN 590. Maisījums B7 ir parasts kompromiss starp šīm īpašībām un esošo autoparku.",
    explanationEn: "Fossil diesel is a hydrocarbon fraction of petroleum. Biodiesel is an oxygen-containing fatty-acid ester from biomass. Both can run a diesel engine, but their chemistry and properties do not coincide. Biodiesel contains almost no sulfur, so sulfur-oxide emissions are small, and it lubricates better, which is an advantage for older pumps. Its flash point is higher, so storage is safer. The cetane number is often high, and combustion starts well.\n\nThe drawbacks are on the other side. The energy density is about 37 MJ/kg against about 43 MJ/kg for diesel, so the litres consumed increase. The viscosity is higher, saturated esters crystallize in the cold, and the fuel oxidizes in storage faster than petroleum diesel. It dissolves some old seals and can act as a solvent on old deposits in a tank. The standard is EN 14214, not EN 590. A B7 blend is the usual compromise between these properties and the existing vehicle fleet."
  },
  {
    id: 51,
    topic: "Biodīzelis",
    topicEn: "Biodiesel",
    prompt: "Kā biodīzeļdegvielas izmantošana ietekmē dzinēja emisijas un degvielas patēriņu?",
    promptEn: "How does the use of biodiesel affect engine emissions and fuel consumption?",
    choices: [],
    answer: null,
    explanation: "Skābeklis esterī padara sadegšanu pilnīgāku. Salīdzinājumā ar tīru dīzeļdegvielu parasti samazinās cietās daļiņas, oglekļa monoksīds un nesadegušie ogļūdeņraži. Sēra emisija ir maza, jo pašā degvielā sēra gandrīz nav. Slāpekļa oksīdi bieži nedaudz pieaug. Iemesls ir augstāka sadegšanas temperatūra, skābeklis liesmā un dzinēja regulējums, kas nav pārbūvēts biodīzeļdegvielai. Mūsdienu dzinējā ar izplūdes pēcapstrādi starpība ir mazāka nekā vecā dzinējā bez tās.\n\nPatēriņš litri uz 100 km pieaug, jo kilograma enerģija ir mazāka. Tīrai biodīzeļdegvielai pieaugums bieži ir vairāki procenti, nevis desmiti. B7 starpība ir maza un praksē iegrimst braukšanas stilā. Precīzs efekts atkarīgs no maisījuma, dzinēja, slodzes un tā, vai vadība mēra degvielu pēc tilpuma. Eksāmenā jāsaka virziens un iemesls, nevis viens universāls procents: daļiņas un CO krītas skābekļa dēļ, NOx var augt, litru patēriņš aug zemāka enerģijas blīvuma dēļ.",
    explanationEn: "The oxygen in the ester makes combustion more complete. Compared with straight diesel, particulates, carbon monoxide, and unburned hydrocarbons usually fall. Sulfur emissions are small because the fuel itself contains almost no sulfur. Nitrogen oxides often rise a little. The reasons are a higher combustion temperature, oxygen in the flame, and an engine calibration that was not rebuilt for biodiesel. In a modern engine with exhaust aftertreatment the difference is smaller than in an old engine without it.\n\nConsumption in litres per 100 km rises because the energy per kilogram is lower. For neat biodiesel the increase is often several percent, not tens of percent. At B7 the difference is small and in practice disappears into driving style. The exact effect depends on the blend, the engine, the load, and whether the control system meters fuel by volume. An exam answer should give the direction and the reason, not one universal percentage: particulates and CO fall because of the oxygen, NOx can rise, and litres consumed rise because the energy density is lower."
  },
  {
    id: 52,
    topic: "Biodīzelis",
    topicEn: "Biodiesel",
    prompt: "Kādas problēmas biodīzeļdegvielas izmantošanā var rasties zemā temperatūrā?",
    promptEn: "What problems can arise when biodiesel is used at low temperature?",
    choices: [],
    answer: null,
    explanation: "Aukstumā biodīzeļdegvielā sāk izkrist piesātināto taukskābju esteru kristāli. Vispirms degviela saduļķojas. Šo temperatūru sauc par duļķošanās punktu. Zemāk kristāli aug un aizturas filtrā. To raksturo aukstā filtra nosprostošanās punkts. Tad dzinējs nesaņem degvielu, lai gan tvertnē tās vēl ir. Palmu eļļas esteri ir piesātinātāki, tāpēc sacietē agrāk. Rapšu esteri ir nepiesātinātāki un ziemā ir labāki, bet arī tie nav ziemas dīzeļdegviela bez pasākumiem.\n\nRisinājumi ir maisījums ar ziemas dīzeļdegvielu, piedevas, kas kavē kristālu augšanu, un apsildāms filtrs vai maģistrāle. Degviela jāglabā tā, lai tvertnē neuzkrātos ūdens, jo ledus un esteru kristāli kopā filtru aizver ātrāk. Oksidēšanās nogulsnes ir cita problēma, bet zemā temperatūrā izšķirošā ir plūstamība. Eksāmenā jāzina abi punkti, atšķirība starp rapšu un palmu esteriem un tas, ka B100 ziemā Latvijā bez pasākumiem nav drošs.",
    explanationEn: "In the cold, crystals of the saturated fatty-acid esters begin to precipitate from biodiesel. The fuel first becomes cloudy. That temperature is the cloud point. Lower down, the crystals grow and are caught in the filter. That is described by the cold filter plugging point. The engine then receives no fuel even though fuel remains in the tank. Palm-oil esters are more saturated, so they solidify sooner. Rapeseed esters are more unsaturated and are better in winter, but even they are not a winter diesel without measures.\n\nThe remedies are a blend with winter diesel, additives that slow crystal growth, and a heated filter or fuel line. The fuel has to be stored so that water does not collect in the tank, because ice and ester crystals together block a filter faster. Oxidation deposits are a different problem, but at low temperature the decisive property is flow. An exam answer should know both points, the difference between rapeseed and palm esters, and the fact that neat biodiesel is not safe in a Latvian winter without measures."
  },
  {
    id: 53,
    topic: "Biodīzelis",
    topicEn: "Biodiesel",
    prompt: "Kāpēc lietotu pārtikas eļļu un atkritumu tauku izmantošana var būt ilgtspējīgāka nekā īpaši degvielas ražošanai audzētu kultūraugu izmantošana?",
    promptEn: "Why can the use of used cooking oil and waste fats be more sustainable than the use of crops grown specifically for fuel?",
    choices: [],
    answer: null,
    explanation: "Īpaši degvielai audzēts rapsis vai palma aizņem zemi, prasa mēslojumu, dīzeļdegvielu traktoram un var izspiest pārtiku vai dabisku ekosistēmu. Ja šīs netiešās zemes izmantošanas emisijas pieskaita, pirmās paaudzes degvielas klimata ieguvums sarūk. Eļļa ir jauns produkts, ko saražo tikai degvielas dēļ.\n\nLietota cepameļļa un atkritumu tauki jau ir radušies pārtikas ķēdē. To savākšana neprasa jaunu lauku un tieši nekonkurē ar pārtiku. Ogleklis tajās jau bija pārtikas kultūrā, un degviela ir otrais izmantojums pirms sadalīšanās. Tāpēc dzīves cikla emisijas uz megadžoulu parasti ir mazākas. Ilgtspēja nav automātiska. Eļļa jāsavāc, jāattīra no ūdens un pārtikas atliekām, un brīvās taukskābes jāapstrādā pirms pāresterificēšanas. Piedāvājums ir ierobežots: atkritumu nepietiek visam autoparkam. Ja pieprasījums pārsniedz īsto atkritumu daudzumu, sistēmā ieplūst svaiga eļļa, kas tiek uzdota par atkritumu. Ilgtspējīgāka ir izsekojama atkritumu plūsma, nevis jebkurš kilograms ar atkritumu nosaukumu.",
    explanationEn: "Rapeseed or palm grown specifically for fuel occupies land, needs fertilizer and tractor diesel, and can displace food or a natural ecosystem. If the emissions from that indirect land-use change are counted, the climate benefit of a first-generation fuel shrinks. The oil is a new product made only for the fuel.\n\nUsed cooking oil and waste fats have already arisen in the food chain. Collecting them needs no new field, and they do not compete directly with food. The carbon in them was already in a food crop, and the fuel is a second use before the material decays. Lifecycle emissions per megajoule are therefore usually lower. Sustainability is not automatic. The oil has to be collected, cleaned of water and food residues, and the free fatty acids have to be treated before transesterification. The supply is limited: the waste is not enough for a whole vehicle fleet. If demand exceeds the real amount of waste, fresh oil enters the system and is presented as waste. What is more sustainable is a traceable waste flow, not every kilogram that carries the name of a waste."
  },
  {
    id: 54,
    topic: "Biogāze",
    topicEn: "Biogas",
    prompt: "Kas ir biogāze, un kādas ir tās galvenās sastāvdaļas?",
    promptEn: "What is biogas, and what are its main components?",
    choices: [],
    answer: null,
    explanation: "Biogāze rodas, kad organiska viela sadalās bez skābekļa. Tā nav viena tīra gāze. Tilpuma pamatmasu veido metāns CH₄, bieži aptuveni 50–70 %, un oglekļa dioksīds CO₂, aptuveni 30–50 %. Metāns ir enerģijas nesējs. CO₂ enerģiju nenes, tāpēc biogāzes siltumspēja ir zemāka nekā dabasgāzei ar tādu pašu tilpumu. Uz kubikmetru tā bieži ir aptuveni 20–25 MJ, atkarībā no metāna daļas.\n\nPārējās sastāvdaļas ir mazas pēc tilpuma, bet svarīgas pēc ietekmes. Ūdens tvaiks kondensējas caurulēs. Sērūdeņradis H₂S ir indīgs un kopā ar mitrumu korodē motoru un katlu. Ir arī slāpeklis, skābeklis, ja procesā ieplūst gaiss, un neliels amonjaka un siloksānu daudzums no atkritumiem. Pirms motora vai tīkla gāze jāžāvē un H₂S jāatdala. Eksāmenā galvenais pāris ir CH₄ un CO₂, un trešais, ko nedrīkst aizmirst, ir H₂S.",
    explanationEn: "Biogas forms when organic matter decomposes without oxygen. It is not one pure gas. Most of the volume is methane, CH₄, often about 50–70%, and carbon dioxide, CO₂, about 30–50%. Methane is the energy carrier. CO₂ carries no energy, so the heating value of biogas is lower than that of natural gas at the same volume. Per cubic metre it is often about 20–25 MJ, depending on the methane share.\n\nThe other components are small by volume but important in their effect. Water vapour condenses in pipes. Hydrogen sulfide, H₂S, is poisonous and, together with moisture, corrodes an engine or a boiler. There is also nitrogen, oxygen if air leaks into the process, and small amounts of ammonia and siloxanes from waste. Before an engine or the gas grid, the gas has to be dried and the H₂S removed. In an exam the main pair is CH₄ and CO₂, and the third component that must not be forgotten is H₂S."
  },
  {
    id: 55,
    topic: "Biogāze",
    topicEn: "Biogas",
    prompt: "Kā notiek anaerobā fermentācija, un kāda ir mikroorganismu loma šajā procesā?",
    promptEn: "How does anaerobic fermentation proceed, and what is the role of the microorganisms?",
    choices: [],
    answer: null,
    explanation: "Anaerobā fermentācija ir mikroorganismu secība bez skābekļa. Vispirms hidrolītiskās baktērijas sašķeļ olbaltumvielas, taukus un ogļhidrātus līdz aminoskābēm, taukskābēm un cukuriem. Acidogēni no tiem veido gaistošās taukskābes, spirtus, ūdeņradi un CO₂. Acetogēni pārvērš šos produktus acetātā, ūdeņradī un CO₂. Metanogēni, kas ir arheji, no acetāta vai no H₂ un CO₂ veido metānu. Ja kāds posms kļūst ātrāks par nākamo, skābes uzkrājas un pH krītas.\n\nMetanogēni ir jutīgākais posms. Tiem patīk aptuveni neitrāls pH, pietiekams mitrums un stabila temperatūra. Mezofils režīms ir aptuveni 35–40 °C, termofils aptuveni 50–55 °C. Skābeklis tos aptur. Amonjaks, smagie metāli, antibiotikas un pārāk liela organiskā slodze var procesu apgāzt. Operatora uzdevums ir noturēt šo barības ķēdi līdzsvarā, nevis tikai piepildīt reaktoru. Bez metanogēniem ir tikai skāba misa, nevis kurināma gāze.",
    explanationEn: "Anaerobic fermentation is a sequence of microorganisms working without oxygen. First, hydrolytic bacteria split proteins, fats, and carbohydrates into amino acids, fatty acids, and sugars. Acidogens turn those into volatile fatty acids, alcohols, hydrogen, and CO₂. Acetogens convert these products into acetate, hydrogen, and CO₂. Methanogens, which are archaea, make methane from acetate or from H₂ and CO₂. If one stage runs faster than the next, acids accumulate and the pH falls.\n\nThe methanogens are the most sensitive stage. They prefer a roughly neutral pH, enough moisture, and a stable temperature. The mesophilic range is about 35–40 °C, and the thermophilic range about 50–55 °C. Oxygen stops them. Ammonia, heavy metals, antibiotics, and too high an organic load can overturn the process. The operator’s task is to keep this food chain in balance, not merely to fill the reactor. Without the methanogens there is only a sour mash, not a combustible gas."
  },
  {
    id: 56,
    topic: "Biogāze",
    topicEn: "Biogas",
    prompt: "Kādas izejvielas iespējams izmantot biogāzes ražošanai?",
    promptEn: "Which feedstocks can be used to produce biogas?",
    choices: [],
    answer: null,
    explanation: "Der gandrīz jebkura mitra, bioloģiski noārdāma organika, ko mikroorganismi var hidrolizēt. Lauksaimniecībā tās ir kūtsmēsli, virca, enerģētisko augu skābbarība un augu atlikumi. Atkritumu pusē ir pārtikas atkritumi, pārtikas rūpniecības atlikumi, kautuves atkritumi un notekūdeņu dūņas. Šķidras un cietas izejvielas parasti jauc. Kofermentācija uzlabo oglekļa un slāpekļa attiecību un izlīdzina sezonas.\n\nSlikti der sauss, lignīna bagāts materiāls: koksne, zari un biezs salms. Lignīns anaerobos apstākļos gandrīz nesadalās un aizsedz celulozi. Tādu masu vispirms vajadzētu smalki smalcināt vai lietot citā tehnoloģijā. Traucē arī smiltis, plastmasa un vielas, kas saindē metanogēnus. Izejvielas izvēle nosaka gāzes iznākumu uz tonnu, sērūdeņraža daudzumu un digestāta kvalitāti. Mēsli dod stabilu, bet ne visai bagātu gāzi. Tauki un pārtikas atkritumi dod daudz gāzes, bet procesu ir vieglāk pārslogot.",
    explanationEn: "Almost any wet, biodegradable organic material that microorganisms can hydrolyze is suitable. In agriculture that means manure, slurry, energy-crop silage, and crop residues. On the waste side it means food waste, residues from the food industry, slaughterhouse waste, and sewage sludge. Liquid and solid feedstocks are usually mixed. Co-digestion improves the carbon-to-nitrogen ratio and smooths the seasons.\n\nDry, lignin-rich material is a poor feedstock: wood, branches, and thick straw. Lignin barely decomposes under anaerobic conditions and covers the cellulose. Such material would first have to be finely ground, or used in another technology. Sand, plastic, and substances that poison the methanogens also interfere. The choice of feedstock sets the gas yield per tonne, the amount of hydrogen sulfide, and the quality of the digestate. Manure gives a stable but not very rich gas. Fats and food waste give a lot of gas, but the process is easier to overload."
  },
  {
    id: 57,
    topic: "Biogāze",
    topicEn: "Biogas",
    prompt: "Kāda ir atšķirība starp biogāzi un biometānu?",
    promptEn: "What is the difference between biogas and biomethane?",
    choices: [],
    answer: null,
    explanation: "Biogāze ir jēlgāze no reaktora. Tajā metāns parasti ir 50–70 %, pārējais galvenokārt CO₂, un ir mitrums un H₂S. Tā der katlam un speciāli sagatavotam gāzes motoram uz vietas. Tīklā vai parastā dabasgāzes automašīnā to nelaiž, jo siltumspēja un kvalitāte ir pārāk zema un svārstīga.\n\nBiometāns ir tā pati gāze pēc attīrīšanas. CO₂, ūdeni un sērūdeņradi atdala ar ūdens vai amīnu skruberi, membrānām vai spiediena svārstību adsorbciju. Metāna daļu paceļ līdz dabasgāzes līmenim, parasti virs 95 %, un pielāgo Vobbes skaitlim, dažreiz piejaucot propānu. Tad to var iesūknēt tīklā vai saspiest kā transporta degvielu, CBG, kas lietošanā atbilst CNG. Atšķirība nav citā ražošanas bioloģijā. Atšķirība ir attīrīšanā un tātad tajā, kur gāzi drīkst lietot. Attīrīšana patērē elektrību un maksā, tāpēc to dara tad, kad gāze jāaizved prom no stacijas.",
    explanationEn: "Biogas is the raw gas from the reactor. Methane is usually 50–70% of it, most of the rest is CO₂, and there is moisture and H₂S. It suits a boiler and a specially prepared gas engine on the site. It is not admitted to the grid or to an ordinary natural-gas vehicle, because the heating value and the quality are too low and too variable.\n\nBiomethane is the same gas after upgrading. CO₂, water, and hydrogen sulfide are removed with a water or amine scrubber, membranes, or pressure-swing adsorption. The methane share is raised to natural-gas level, usually above 95%, and it is matched to the Wobbe index, sometimes by adding propane. It can then be injected into the grid or compressed as a transport fuel, CBG, which in use corresponds to CNG. The difference is not a different production biology. The difference is the upgrading, and therefore where the gas may be used. Upgrading uses electricity and costs money, so it is done when the gas has to leave the plant."
  },
  {
    id: 58,
    topic: "Biogāze",
    topicEn: "Biogas",
    prompt: "Kā biogāzi izmanto elektroenerģijas, siltuma un transporta degvielas ražošanai?",
    promptEn: "How is biogas used to produce electricity, heat, and transport fuel?",
    choices: [],
    answer: null,
    explanation: "Elektroenerģijai biogāzi sadedzina gāzes motorā vai, retāk, mazā turbīnā. Ģenerators ražo elektrību ar lietderību bieži aptuveni 35–40 %. Motora dzesēšanas ūdens un izplūdes gāzes vēl nes siltumu. Ja šo siltumu izmanto fermai, siltumnīcai vai ciema tīklam, tā ir koģenerācija un kopējā enerģijas izmantošana var pārsniegt 80 %. Ja siltumu izmet, lielākā daļa enerģijas ir zaudēta un projekts ir vājš.\n\nTikai siltumam biogāzi dedzina katlā. Lietderība ir augsta, bet nav elektrības. Transportam jēlgāze neder. To attīra līdz biometānam, saspiež un uzpilda automašīnās vai ievada gāzes tīklā, no kura to paņem citur. Saspiešana patērē daļu enerģijas. Izvēle atkarīga no tā, vai blakus ir siltuma patērētājs. Bez siltuma patērētāja koģenerācijas priekšrocība zūd, un biometāns var būt jēdzīgāks, jo gāzi var aizvest tur, kur patēriņš ir.",
    explanationEn: "For electricity, biogas is burned in a gas engine or, less often, a small turbine. The generator produces electricity at an efficiency often around 35–40%. The engine’s cooling water and exhaust still carry heat. If that heat serves a farm, a greenhouse, or a village network, the plant is combined heat and power, and the total energy use can exceed 80%. If the heat is thrown away, most of the energy is lost and the project is weak.\n\nFor heat only, biogas is burned in a boiler. The efficiency is high, but there is no electricity. Raw biogas is not suitable for transport. It is upgraded to biomethane, compressed, and used to refuel vehicles, or it is injected into the gas grid and taken out somewhere else. Compression consumes part of the energy. The choice depends on whether there is a heat user nearby. Without a heat user, the advantage of combined heat and power disappears, and biomethane can make more sense because the gas can be taken to where the demand is."
  },
  {
    id: 59,
    topic: "Biogāze",
    topicEn: "Biogas",
    prompt: "Kādas ir biogāzes staciju priekšrocības lauksaimniecībā un organisko atkritumu apsaimniekošanā?",
    promptEn: "What are the advantages of biogas plants in agriculture and in the management of organic waste?",
    choices: [],
    answer: null,
    explanation: "Saimniecībā kūtsmēsli un virca tāpat rodas katru dienu. Atklātā krātuvē no tiem izdalās metāns un amonjaks, un smaka traucē apkārtnei. Reaktorā šo sadalīšanos vada. Metānu savāc kā enerģiju, smaka samazinās, un iznāk digestāts. Slāpeklis, fosfors un kālijs sadalīšanā nepazūd, tāpēc digestātu var izkliedēt kā mēslojumu. Augi to bieži uzņem paredzamāk nekā svaigus mēslus, un nezāļu sēklas un daļa patogēnu reaktorā iet bojā. Saudzīgi vākta kūtsmēslu gāze aizstāj fosilo kurināmo un samazina kūtsmēslu krātuves emisijas.\n\nAtkritumu apsaimniekošanā atdalīta organika nenonāk poligonā. Poligonā tā gadiem ražotu metānu, ko uztver tikai daļēji. Stacijā šo metānu savāc uzreiz un pārvērš elektrībā, siltumā vai biometānā. Papildus samazinās poligona slodze un smaka. Ierobežojums ir loģistika. Slapja masa tālu jāved, un piemaisījumi bojā iekārtu. Ieguvums ir tad, ja savākšana ir tīra un enerģija tiešām aizstāj citu kurināmo.",
    explanationEn: "On a farm, manure and slurry arise every day anyway. In an open store they release methane and ammonia, and the smell affects the neighbourhood. In a reactor that decomposition is controlled. The methane is collected as energy, the smell falls, and the output is digestate. Nitrogen, phosphorus, and potassium are not destroyed by the decomposition, so the digestate can be spread as fertilizer. Plants often take it up more predictably than fresh manure, and weed seeds and some pathogens die in the reactor. Carefully collected manure gas replaces fossil fuel and reduces the emissions of the manure store.\n\nIn waste management, separated organic material does not go to a landfill. In a landfill it would produce methane for years, and only part of that methane is captured. At the plant the methane is collected at once and turned into electricity, heat, or biomethane. The load and the smell of the landfill also fall. The limit is logistics. Wet material has to be hauled a long way, and contaminants damage the equipment. The benefit exists when the collection is clean and the energy really replaces another fuel."
  },
  {
    id: 60,
    topic: "Biogāze",
    topicEn: "Biogas",
    prompt: "Kā metāna noplūdes un digestāta apsaimniekošana ietekmē biogāzes ražošanas ilgtspēju?",
    promptEn: "How do methane leaks and digestate management affect the sustainability of biogas production?",
    choices: [],
    answer: null,
    explanation: "Biogāzes klimata ieguvums pastāv tikai tad, ja metāns tiek sadedzināts, nevis izlaists. Metāna siltumnīcas efekts simt gados ir aptuveni 27–30 reizes lielāks nekā CO₂ uz masas vienību. Dažu procentu noplūde no reaktora, gāzes vadam, nehermētiska krātuves vai nepietiekami nodedzinātas lāpas var apēst ieguvumu, ko dod kūtsmēslu metāna savākšana un fosilā kurināmā aizstāšana. Tāpēc ilgtspēju nenosaka tikai uzraksts „atjaunojamā enerģija”. To nosaka izmērītas noplūdes.\n\nDigestāts saglabā augu barības vielas, bet tās kļūst par piesārņojumu, ja krātuve ir vaļēja un amonjaks izgaro vai ja digestātu izkliedē uz sasalušas vai pārmitras augsnes. Tad slāpeklis nonāk ūdenī, un vēlāk var rasties papildu N₂O. Slēgta krātuve, izkliede augu uzņemšanas laikā un iestrāde augsnē šos zudumus mazina. Labi vadīta stacija emisijas samazina. Slikti vadīta stacija, ar noplūdēm un paviršu digestātu, var emitēt vairāk nekā saimniecība bez reaktora.",
    explanationEn: "The climate benefit of biogas exists only if the methane is burned rather than released. Over a hundred years the greenhouse effect of methane is about 27–30 times that of CO₂ per unit of mass. A leak of a few percent from the reactor, the gas pipe, a leaking store, or a flare that does not burn completely can consume the benefit gained by collecting manure methane and replacing fossil fuel. Sustainability is therefore not decided by the label “renewable energy”. It is decided by measured leaks.\n\nDigestate keeps the plant nutrients, but they become pollution if the store is open and ammonia evaporates, or if the digestate is spread on frozen or waterlogged soil. Nitrogen then reaches the water, and additional N₂O can form later. A closed store, spreading when plants can take up the nutrients, and incorporation into the soil reduce those losses. A well-run plant reduces emissions. A poorly run plant, with leaks and careless digestate, can emit more than a farm without a reactor."
  },
  {
    id: 61,
    topic: "Atomelektrostacija",
    topicEn: "Nuclear",
    prompt: "Kā darbojas atomelektrostacija, un kāda ir kodola skaldīšanas nozīme elektroenerģijas ražošanā?",
    promptEn: "How does a nuclear power plant work, and what is the role of nuclear fission in generating electricity?",
    choices: [],
    answer: null,
    explanation: "Atomelektrostacija ir siltuma elektrostacija, kurā katla vietā ir kodolreaktors. Degvielā, parasti urānā-235, kodols uztver neitronu un skaldās divos vieglākos kodolos. Šķelšanā atbrīvojas arī jauni neitroni un liela enerģija, aptuveni 200 MeV uz vienu skaldīšanu. Lielākā daļa šīs enerģijas parādās kā šķembu kinētiskā enerģija un ātri kļūst par siltumu degvielā. Ja vidēji viens no jaunajiem neitroniem izraisa nākamo skaldīšanu, reakcija ir pašuzturoša. Vadības stieņi un palēninātājs notur šo ķēdi līdzsvarā. Tā nav sprādziena ķēde.\n\nSiltumu aiznes siltumnesējs. Tas tieši vai caur tvaika ģeneratoru rada tvaiku. Tvaiks griež turbīnu, turbīna griež ģeneratoru, un ģenerators ražo elektrību. Skaldīšana tātad nedod elektrību tieši. Tā dod siltumu, un tālāk darbojas parastais Rankina cikls. Bez kontrolētas skaldīšanas nebūtu siltuma avota. Bez turbīnas un ģeneratora šis siltums paliktu siltums.",
    explanationEn: "A nuclear power plant is a thermal power station in which a nuclear reactor takes the place of the boiler. In the fuel, usually uranium-235, a nucleus absorbs a neutron and splits into two lighter nuclei. The fission also releases new neutrons and a large amount of energy, about 200 MeV for one fission. Most of that energy appears as kinetic energy of the fragments and quickly becomes heat in the fuel. If on average one of the new neutrons causes the next fission, the reaction is self-sustaining. Control rods and a moderator keep that chain in balance. It is not an explosive chain.\n\nA coolant carries the heat away. Directly, or through a steam generator, it produces steam. The steam turns a turbine, the turbine turns a generator, and the generator produces electricity. Fission therefore does not produce electricity directly. It produces heat, and an ordinary Rankine cycle does the rest. Without controlled fission there would be no heat source. Without the turbine and the generator that heat would remain heat."
  },
  {
    id: 62,
    topic: "Atomelektrostacija",
    topicEn: "Nuclear",
    prompt: "Kāda ir kodolreaktora, tvaika turbīnas un ģeneratora funkcija?",
    promptEn: "What is the function of the nuclear reactor, the steam turbine, and the generator?",
    choices: [],
    answer: null,
    explanation: "Kodolreaktora uzdevums ir uzturēt vadāmu skaldīšanas ķēdi un nodot tās siltumu siltumnesējam. Tajā ir degviela, palēninātājs, ja reaktors nav ātro neitronu reaktors, vadības stieņi, siltumnesējs un drošības sistēmas. Reaktors neražo tīkla elektrību. Tas ražo siltumu noteiktā jaudā un nedrīkst ļaut ķēdei aiziet paātrinājumā.\n\nTvaika turbīna saņem augsta spiediena tvaiku un ļauj tam izplesties. Tvaika siltumenerģija kļūst par rotora griešanu. Tā ir tā pati funkcija, kāda turbīnai ir ogļu vai biomasas stacijā. Kondensators pēc turbīnas atdzesē tvaiku, lai cikls varētu turpināties, un tāpēc stacijai vajag lielu dzesēšanas ūdens daudzumu.\n\nĢenerators ir uz kopējas vārpstas ar turbīnu. Rotējošs magnētiskais lauks tinumos inducē spriegumu. Mehāniskā jauda kļūst par elektrisko. Trīs mašīnas tātad sadala trīs pārvērtības: kodolsiltums, mehāniskais darbs un elektrība. Ja vienu no tām izņem, ķēde apraujas.",
    explanationEn: "The job of the nuclear reactor is to hold a controlled fission chain and deliver its heat to the coolant. It contains the fuel, a moderator if it is not a fast reactor, control rods, the coolant, and the safety systems. The reactor does not produce grid electricity. It produces heat at a set power, and it must not let the chain run away.\n\nThe steam turbine receives high-pressure steam and lets it expand. The thermal energy of the steam becomes rotation of the rotor. That is the same function a turbine has in a coal or biomass plant. The condenser after the turbine cools the steam so that the cycle can continue, which is why the plant needs a large amount of cooling water.\n\nThe generator is on a common shaft with the turbine. A rotating magnetic field induces a voltage in the windings. Mechanical power becomes electric power. The three machines therefore divide three conversions: nuclear heat, mechanical work, and electricity. Remove one of them and the chain is broken."
  },
  {
    id: 63,
    topic: "Atomelektrostacija",
    topicEn: "Nuclear",
    prompt: "Kāpēc atomelektrostacijas elektroenerģijas ražošanā rada salīdzinoši maz siltumnīcefekta gāzu emisiju?",
    promptEn: "Why does a nuclear power plant produce comparatively little greenhouse-gas emission while generating electricity?",
    choices: [],
    answer: null,
    explanation: "Ogļu un gāzes stacijā siltumu dod oglekļa kurināmā sadegšana, un dūmgāzēs ir CO₂. Atomelektrostacijā siltumu dod kodolu skaldīšana. Reakcijā ogleklis netiek dedzināts, tāpēc skurstenī nav sadegšanas CO₂. Dzesēšanas tornis izlaiž ūdens tvaiku, nevis kurināmā dūmgāzi. Uz saražoto kilovatstundu tiešā emisija darbības laikā ir tuvu nullei.\n\nDzīves ciklā emisijas tomēr ir. Tās rodas būvniecībā, urāna ieguvē un pārstrādē, degvielas sagatavošanā, transportā un vēlāk demontāžā. Publicētos dzīves cikla novērtējumos kodolenerģija parasti ir desmitu gramu CO₂ uz kilovatstundu, dabasgāze vairāku simtu gramu un ogles aptuveni 800 g. Precīzs skaitlis atkarīgs no metodes un urāna rūdas. Secinājums eksāmenam ir salīdzinājums, nevis viens oficiāls grams: darbības emisija ir maza tāpēc, ka nav degšanas, un pilnais cikls joprojām ir daudz zemāk par oglēm un gāzi.",
    explanationEn: "In a coal or gas plant the heat comes from burning a carbon fuel, and the flue gas contains CO₂. In a nuclear plant the heat comes from fission. The reaction does not burn carbon, so there is no combustion CO₂ in a stack. A cooling tower releases water vapour, not fuel flue gas. Per kilowatt-hour generated, the direct emission during operation is close to zero.\n\nThere are still emissions over the life cycle. They arise in construction, uranium mining and processing, fuel preparation, transport, and later decommissioning. Published lifecycle assessments usually put nuclear power at some tens of grams of CO₂ per kilowatt-hour, natural gas at several hundred grams, and coal near 800 g. The exact number depends on the method and on the uranium ore. The exam conclusion is the comparison, not one official gram: the operating emission is small because there is no combustion, and the full cycle is still far below coal and gas."
  },
  {
    id: 64,
    topic: "Atomelektrostacija",
    topicEn: "Nuclear",
    prompt: "Kādi ir atomelektrostaciju galvenie ieguvumi un riski?",
    promptEn: "What are the main benefits and risks of nuclear power plants?",
    choices: [],
    answer: null,
    explanation: "Ieguvumi izriet no degvielas blīvuma un no tā, ka stacija nav atkarīga no laikapstākļiem. Daži desmiti tonnu degvielas gadā dod simtiem megavatu nepārtraukti. Izmantojuma koeficients ir augsts, tāpēc stacija der bāzes jaudai un mazina importa gāzes vai ogļu daudzumu. Darbības siltumnīcefekta gāzu emisija ir maza. Kurināmā loģistika ir niecīga salīdzinājumā ar ogļu staciju.\n\nRiski ir cita mēroga. Smagas avārijas varbūtība ir maza, bet sekas ir lielas: radioaktīvs izlaidums, teritorijas piesārņojums un ilgstoša neuzticēšanās. Izlietotā degviela un demontāžas atkritumi paliek radioaktīvi gadsimtiem un tūkstošiem gadu, un tiem vajag glabātuvi. Būve ir dārga, ilga un bieži pārsniedz sākotnējo tāmi. Jākontrolē kodolmateriāls, lai tas nenonāktu ārpus uzskaites. Stacijai vajag dzesēšanas ūdeni, un tā silda upi vai jūru. Sabiedrības piekrišana nav tehniska detaļa. Bez tās projekts nevirzās, pat ja enerģētikas bilance ir labvēlīga.",
    explanationEn: "The benefits follow from the density of the fuel and from the fact that the plant does not depend on the weather. A few tens of tonnes of fuel a year can supply hundreds of megawatts continuously. The capacity factor is high, so the plant suits baseload and reduces the amount of imported gas or coal. The operating greenhouse-gas emission is small. Fuel logistics are tiny compared with a coal plant.\n\nThe risks have a different scale. The probability of a severe accident is small, but the consequences are large: a radioactive release, contamination of land, and a long loss of trust. Spent fuel and decommissioning waste remain radioactive for centuries and millennia, and they need a repository. Construction is expensive, slow, and often exceeds the original estimate. The nuclear material has to be controlled so that it does not leave the accounting system. The plant needs cooling water, and it warms a river or the sea. Public consent is not a technical detail. Without it a project does not move, even if the energy balance is favourable."
  },
  {
    id: 65,
    topic: "Atomelektrostacija",
    topicEn: "Nuclear",
    prompt: "Kādi faktori būtu jāizvērtē, lemjot par atomelektrostacijas būvniecību Latvijā vai Baltijas reģionā?",
    promptEn: "What factors should be weighed when deciding whether to build a nuclear power plant in Latvia or the Baltic region?",
    choices: [],
    answer: null,
    explanation: "Latvijā atomelektrostacijas nav, un lēmums skartu visu Baltijas tīklu, nevis vienu pilsētu. Vispirms jāsalīdzina pieprasījums un jau esošā jauda: Daugavas HES, vēja un saules pieaugums, gāzes stacijas un starpsavienojumi ar Ziemeļvalstīm un Poliju. Ja trūkst ziemas jaudas, jāprasa, vai to lētāk sedz stacija, jauni savienojumi vai patēriņa samazinājums. Kodolstacija dod lielu pastāvīgu bloku. Tā slikti seko saules stundu svārstībām un prasa, lai tīkls šo bloku spēj uzņemt arī tad, kad vēja ir daudz.\n\nTālāk ir vieta un drošība. Vajag dzesēšanas ūdeni, zemas seismiskās prasības Latvijā ir priekšrocība, bet jāvērtē plūdi, avārijas zona un evakuācijas ceļi. Jāzina, kur glabās izlietoto degvielu un kas par to maksās. Būve ilgst desmit gadus un vairāk, finansējums ir liels, un vajag operatoru, kodoluzraudzību un speciālistus, kuru Latvijā tagad nav. Degviela un tehnoloģija tiktu importēta. Juridiski projekts ir Eiropas un starptautisko kodoldrošības noteikumu jautājums, un politiski tas prasa ilgstošu piekrišanu. Eksāmenā nav jāpasaka „būvēt” vai „nebūvēt”. Jāpasaka, pēc kādiem kritērijiem šo izvēli salīdzina ar vēju, sauli, gāzi un tīkla savienojumiem.",
    explanationEn: "Latvia has no nuclear power plant, and a decision would affect the whole Baltic grid, not one city. First compare demand with the capacity that already exists: the Daugava hydropower plants, the growth of wind and solar, the gas plants, and the interconnectors with the Nordic countries and Poland. If winter power is short, the question is whether a plant, new connections, or lower demand covers it more cheaply. A nuclear plant provides a large, steady block. It follows the hourly swings of solar poorly, and the grid has to be able to accept that block even when there is a lot of wind.\n\nThen come the site and safety. Cooling water is needed. Latvia’s low seismic requirement is an advantage, but floods, the emergency zone, and evacuation routes have to be assessed. It has to be known where the spent fuel would be stored and who would pay. Construction takes ten years or more, the financing is large, and an operator, a nuclear regulator, and specialists are needed, which Latvia does not now have. The fuel and the technology would be imported. Legally the project is a matter of European and international nuclear-safety rules, and politically it needs consent that lasts. An exam answer does not have to say “build” or “do not build”. It has to say by which criteria this choice is compared with wind, solar, gas, and grid connections."
  },
  {
    id: 66,
    topic: "Ūdeņradis",
    topicEn: "Hydrogen",
    prompt: "Kā iegūst ūdeņradi, izmantojot elektrolīzi?",
    promptEn: "How is hydrogen obtained by electrolysis?",
    choices: [],
    answer: null,
    explanation: "Elektrolīzē līdzstrāva sašķeļ ūdeni. Summārā reakcija ir\n\n2 H₂O → 2 H₂ + O₂.\n\nKatodā rodas ūdeņradis, anodā skābeklis. Vajag elektrolizeri, tīru ūdeni, elektrolītu vai membrānu, kas laiž jonus, bet neatļauj gāzēm sajaukties, un elektrības avotu. Sārmainajā elektrolizerī jonus vada šķidrs sārms. PEM elektrolizerī to dara cieta membrāna, un iekārta labāk seko mainīgai vēja vai saules jaudai. Augstas temperatūras elektrolīze daļu enerģijas saņem kā siltumu un tāpēc patērē mazāk elektrības uz kilogramu.\n\nTeorētiski uz kilogramu ūdeņraža vajag aptuveni 39 kWh pēc augstākās siltumspējas. Reāli, pārsprieguma un zudumu dēļ, bieži vajag aptuveni 50–55 kWh. Ja šī elektrība ir no atjaunojama pārpalikuma, ūdeņradi sauc par zaļo. Procesā rodas arī tīrs skābeklis, ko var izmantot, ja blakus ir patērētājs. Elektrolīze nedod enerģiju. Tā pārvērš elektrību ķīmiskajā degvielā un daļu zaudē kā siltumu.",
    explanationEn: "In electrolysis, direct current splits water. The overall reaction is\n\n2 H₂O → 2 H₂ + O₂.\n\nHydrogen forms at the cathode and oxygen at the anode. An electrolyzer, clean water, an electrolyte or a membrane that lets ions through but does not let the gases mix, and a source of electricity are needed. In an alkaline electrolyzer a liquid alkali carries the ions. In a PEM electrolyzer a solid membrane does it, and the unit follows variable wind or solar power better. High-temperature electrolysis receives part of the energy as heat and therefore uses less electricity per kilogram.\n\nIn theory, about 39 kWh are needed per kilogram of hydrogen on the higher heating value. In practice, because of overpotential and losses, about 50–55 kWh are often needed. If that electricity comes from a renewable surplus, the hydrogen is called green. The process also produces pure oxygen, which can be used if there is a consumer nearby. Electrolysis does not create energy. It turns electricity into a chemical fuel and loses part of it as heat."
  },
  {
    id: 67,
    topic: "Ūdeņradis",
    topicEn: "Hydrogen",
    prompt: "Kāda ir atšķirība starp zaļo, pelēko un zilo ūdeņradi?",
    promptEn: "What is the difference between green, grey, and blue hydrogen?",
    choices: [],
    answer: null,
    explanation: "Ūdeņraža molekula visos trīs gadījumos ir tā pati. Atšķiras oglekļa bilance ražošanā. Zaļo ūdeņradi iegūst elektrolīzē ar elektrību no vēja, saules vai citas atjaunojamas jaudas, kam nav tiešās degšanas emisijas. Klimata ieguvums ir liels tikai tad, ja šī elektrība ir pārpalikums vai papildu jauda. Ja elektrolīze paņem elektrību, kuras vietā tad jādarbina ogļu stacija, ieguvums zūd.\n\nPelēko ūdeņradi iegūst galvenokārt no dabasgāzes tvaika reformingā. Metāns reaģē ar tvaiku, rodas ūdeņradis un CO₂, un CO₂ izlaiž atmosfērā. Tas šodien ir lētākais un izplatītākais ceļš, bet tas ir emisiju avots. Zilais ūdeņradis ir tas pats fosilais ceļš, tikai CO₂ uztver un noglabā. Ieguvums ir atkarīgs no tā, cik pilnīga ir uztveršana un cik metāna noplūst gāzes ieguvē un transportā. Neliela metāna noplūde var sagraut aprēķināto labumu. Krāsu nosaukumi ir izcelsmes etiķetes, nevis trīs dažādas ķīmiskas vielas.",
    explanationEn: "The hydrogen molecule is the same in all three cases. The carbon balance of production differs. Green hydrogen is made by electrolysis with electricity from wind, solar, or another renewable source that has no direct combustion emission. The climate benefit is large only if that electricity is surplus or additional capacity. If the electrolyzer takes electricity that is then replaced by a coal plant, the benefit disappears.\n\nGrey hydrogen is made mainly by steam reforming of natural gas. Methane reacts with steam, hydrogen and CO₂ are produced, and the CO₂ is released. That is the cheapest and most common route today, but it is an emission source. Blue hydrogen is the same fossil route, except that the CO₂ is captured and stored. The benefit depends on how complete the capture is and how much methane leaks during gas production and transport. A small methane leak can destroy the calculated benefit. The colour names are labels of origin, not three different chemical substances."
  },
  {
    id: 68,
    topic: "Ūdeņradis",
    topicEn: "Hydrogen",
    prompt: "Kā ūdeņradi iespējams izmantot kurināmā elementos un elektroenerģijas ražošanā?",
    promptEn: "How can hydrogen be used in fuel cells and in electricity generation?",
    choices: [],
    answer: null,
    explanation: "Kurināmā elementā ūdeņradis un skābeklis reaģē bez liesmas. Protonu apmaiņas elementā ūdeņradis pie anoda sadalās protonos un elektronos. Protoni iet caur membrānu, elektroni iet pa ārējo ķēdi un dara darbu, un katodā tie satiekas ar skābekli un veido ūdeni. Produkti ir elektrība, siltums un ūdens. Elektrisko lietderību transporta elementam bieži rēķina aptuveni 40–60 %, augstāku nekā iekšdedzes motoram, un siltumu vēl var izmantot.\n\nElektroenerģiju var arī iegūt, ūdeņradi sadedzinot gāzes turbīnā vai motorā un griežot ģeneratoru. Tas der lielai jaudai un esošai turbīnu tehnikai, bet lietderība ir zemāka un, ja degšana notiek gaisā, var rasties slāpekļa oksīdi. Kurināmā elements labāk der transportam, ēkai un vietai, kur vajag klusu elektrību un siltumu. Turbīna labāk der lielai stacijai. Abos gadījumos ūdeņradis ir enerģijas nesējs, kas elektrību atdod atpakaļ ar zudumiem. Tas nav primārais avots, ja vien nav iegūts no cita avota.",
    explanationEn: "In a fuel cell, hydrogen and oxygen react without a flame. In a proton-exchange cell the hydrogen at the anode splits into protons and electrons. The protons pass through the membrane, the electrons pass through the external circuit and do work, and at the cathode they meet oxygen and form water. The products are electricity, heat, and water. The electric efficiency of a transport cell is often taken as about 40–60%, higher than an internal-combustion engine, and the heat can still be used.\n\nElectricity can also be made by burning hydrogen in a gas turbine or an engine and turning a generator. That suits a large power output and existing turbine technology, but the efficiency is lower and, if combustion is in air, nitrogen oxides can form. A fuel cell is the better fit for transport, a building, and a place that needs quiet electricity and heat. A turbine is the better fit for a large plant. In both cases hydrogen is an energy carrier that returns electricity with losses. It is not a primary source unless it was obtained from another source."
  },
  {
    id: 69,
    topic: "Ūdeņradis",
    topicEn: "Hydrogen",
    prompt: "Kādas ir ūdeņraža izmantošanas priekšrocības un trūkumi salīdzinājumā ar akumulatoriem?",
    promptEn: "What are the advantages and drawbacks of using hydrogen compared with batteries?",
    choices: [],
    answer: null,
    explanation: "Ūdeņradim ir liela enerģija uz kilogramu, aptuveni 120 MJ/kg pēc zemākās siltumspējas, vairākas reizes vairāk nekā dīzeļdegvielai un daudz vairāk nekā litija baterijai. Tvertni var uzpildīt minūtēs, nevis stundās. Tas der smagajam transportam, tāliem reisiem, autobusiem un vietām, kur baterijas masa apēstu kravnesību. Kurināmā elementa izplūdē ir ūdens. Ilgā stāvēšanā ūdeņradis nezaudē lādiņu tā, kā baterija pašizlādējas.\n\nTrūkumi sākas ar tilpumu. Pat 700 bāru spiedienā ūdeņradis aizņem daudz vietas, un tvertne ir smaga un dārga. Ķēdes lietderība elektrība–ūdeņradis–elektrība bieži ir tikai aptuveni 30 %, kamēr baterija atdod atpakaļ aptuveni 85–90 %. Vieglajam auto īsā maršrutā baterija tāpēc patērē mazāk vēja elektrības uz kilometru. Vajag arī reta un dārga uzpildes tīkla, un jāievēro noplūdes un ugunsdrošības noteikumi. Ūdeņradis uzvar tur, kur baterija kļūst par smagu vai kur ūdeņradis vajadzīgs kā izejviela. Tas neaizstāj bateriju vieglajā auto.",
    explanationEn: "Hydrogen has a high energy per kilogram, about 120 MJ/kg on the lower heating value, several times diesel and far more than a lithium battery. A tank can be filled in minutes rather than hours. That suits heavy transport, long routes, buses, and places where the mass of a battery would consume the payload. The exhaust of a fuel cell is water. In long storage, hydrogen does not lose charge the way a battery self-discharges.\n\nThe drawbacks begin with volume. Even at 700 bar, hydrogen takes a lot of space, and the tank is heavy and expensive. The electricity–hydrogen–electricity chain is often only about 30% efficient, while a battery returns about 85–90%. For a light car on a short route, a battery therefore uses less wind electricity per kilometre. A rare and expensive refuelling network is also needed, and leak and fire rules have to be followed. Hydrogen wins where a battery becomes too heavy or where hydrogen is needed as a feedstock. It does not replace the battery in a light car."
  },
  {
    id: 70,
    topic: "Ūdeņradis",
    topicEn: "Hydrogen",
    prompt: "Kādas problēmas rada ūdeņraža uzglabāšana, transportēšana un uzpildes infrastruktūras izveide?",
    promptEn: "What problems do hydrogen storage, transport, and refuelling infrastructure create?",
    choices: [],
    answer: null,
    explanation: "Ūdeņradis ir vieglākā gāze. Normālā spiedienā kilograms aizņem aptuveni 11 m³, tāpēc enerģija uz litru ir maza. Lai to vestu, gāzi saspiež līdz 350 vai 700 bāriem vai atdzesē tuvu −253 °C līdz šķidrumam. Saspiešana un jo īpaši sašķidrināšana patērē manāmu daļu ūdeņraža enerģijas. Saspiestai gāzei vajag biezsienu kompozīta tvertnes. Šķidrumam vajag kriogēnu tvertni, un daļa tāpat iztvaiko, ja auto stāv.\n\nMazā molekula difundē caur materiāliem un var padarīt tēraudu trauslu. Caurulēm, vārstiem un kompresoriem jābūt tam paredzētiem. Esošais dabasgāzes tīkls ūdeņradi uzņem tikai ierobežotā piejaukumā bez pārbūves. Uzpildes stacija ir kompresors, noliktava un drošības sistēma, nevis parasta sūkņa kolonna, un tādu staciju ir maz. Gaisā ūdeņradis veido ļoti plašu degtspējīgu maisījumu un viegli aizdegas, tāpēc noplūdes jāatklāj un telpas jāvēdina. Infrastruktūras izmaksas un enerģijas zudumi ir iemesls, kāpēc ūdeņradi sāk lietot nišās, nevis visur uzreiz.",
    explanationEn: "Hydrogen is the lightest gas. At ordinary pressure a kilogram occupies about 11 m³, so the energy per litre is small. To carry it, the gas is compressed to 350 or 700 bar or cooled near −253 °C until it is liquid. Compression, and especially liquefaction, consumes a noticeable share of the energy in the hydrogen. Compressed gas needs thick-walled composite tanks. The liquid needs a cryogenic tank, and some of it still boils off if a vehicle stands.\n\nThe small molecule diffuses through materials and can embrittle steel. Pipes, valves, and compressors have to be designed for that. The existing natural-gas network accepts hydrogen only as a limited blend unless it is rebuilt. A filling station is a compressor, a store, and a safety system, not an ordinary pump dispenser, and there are few such stations. In air, hydrogen forms a very wide flammable mixture and ignites easily, so leaks have to be detected and rooms ventilated. The cost of the infrastructure and the energy losses are why hydrogen is introduced in niches rather than everywhere at once."
  },
  {
    id: 71,
    topic: "Ūdeņradis",
    topicEn: "Hydrogen",
    prompt: "Kurās nozarēs ūdeņradis varētu būt īpaši noderīgs Latvijas enerģētikā un rūpniecībā?",
    promptEn: "In which sectors could hydrogen be especially useful in Latvia’s energy system and industry?",
    choices: [],
    answer: null,
    explanation: "Latvijā ūdeņradis nav vajadzīgs vieglā auto vietā, kur baterija ir lietderīgāka. Tas var būt noderīgs tur, kur elektrību tieši lietot ir grūti. Smagajā transportā, ostu tehnikā, prāmjos un daļā dzelzceļa baterija kļūst smaga, bet ūdeņraža uzpilde ir ātra. Rīgas, Ventspils un Liepājas ostas ir loģiskas pirmās vietas, jo tur ir gan tehnika, gan iespēja būvēt vienu staciju vairākiem lietotājiem.\n\nRūpniecībā ūdeņradis ir izejviela vai reducētājs, nevis tikai degviela: amonjaka un metanola ķīmijā un, ja tāda ražošana rastos, tērauda reducēšanā. Enerģētikā Daugavas HES jau uzkrāj enerģiju dienu mērogā. Ūdeņradis kļūst interesants tad, kad vēja un saules pārpalikums ir lielāks, nekā krātuves un eksports spēj uzņemt, vai kad gāze vajadzīga ziemas siltumam un koģenerācijai. Sākt vajag ar vienu patērētāju, kam ūdeņradis aizstāj dārgāku vai netīrāku izejvielu, nevis ar tīklu visām vieglajām automašīnām. Bez patērētāja elektrolizeris ražo gāzi, kuru nav kur likt.",
    explanationEn: "In Latvia, hydrogen is not needed in place of the light car, where a battery is more efficient. It can be useful where electricity is difficult to use directly. In heavy transport, port machinery, ferries, and part of the railway a battery becomes heavy, while hydrogen refuelling is fast. The ports of Riga, Ventspils, and Liepāja are logical first places, because the machinery is there and one station can serve several users.\n\nIn industry, hydrogen is a feedstock or a reductant, not only a fuel: in ammonia and methanol chemistry and, if such production existed, in the reduction of iron. In the energy system the Daugava hydropower plants already store energy on a scale of days. Hydrogen becomes interesting when the surplus of wind and solar is larger than storage and exports can absorb, or when gas is needed for winter heat and combined heat and power. The start should be one consumer for whom hydrogen replaces a more expensive or dirtier feedstock, not a network for every light car. Without a consumer, an electrolyzer produces a gas that has nowhere to go."
  }
];
