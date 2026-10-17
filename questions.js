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
    explanation: "Saules baterija šajā jautājumā ir fotoelements, nevis akumulators. Tā pārvērš gaismu elektrībā. Fotoni, krītot uz pusvadītāju, parasti silīciju, rada elektronu un caurumu pārus. p–n pārejas elektriskais lauks atdala lādiņus, un ārējā ķēdē plūst līdzstrāva. Vairāki elementi virknē un paralēli veido paneli.",
    explanationEn: "In this question a solar cell is a photovoltaic cell, not a storage battery. It converts light into electricity. Photons striking a semiconductor, usually silicon, create electron–hole pairs. The electric field of the p–n junction separates the charges, and direct current flows in the external circuit. Cells connected in series and parallel form a panel."
  },
  {
    id: 2,
    topic: "Saule",
    topicEn: "Solar",
    prompt: "Ar ko atšķiras saules kolektors no saules paneļa?",
    promptEn: "How does a solar collector differ from a solar panel?",
    choices: [],
    answer: null,
    explanation: "Saules kolektors uztver siltumu: starojums sasilda šķidrumu vai gaisu, ko izmanto ūdens vai telpu sildīšanai. Saules panelis ražo elektroenerģiju. Kolektors dod siltumu, panelis dod elektrību. Ir arī kombinētie kolektori, kas dara abus.",
    explanationEn: "A solar collector captures heat: radiation warms a fluid or air used for hot water or space heating. A solar panel produces electricity. The collector supplies heat, and the panel supplies electricity. Combined collectors do both."
  },
  {
    id: 3,
    topic: "Saule",
    topicEn: "Solar",
    prompt: "Lai uzstādītu saules paneļu sistēmu, kādas iekārtas ir nepieciešamas?",
    promptEn: "What equipment is needed to install a solar-panel system?",
    choices: [],
    answer: null,
    explanation: "Vajag paneļus un stiprinājumus, līdzstrāvas kabeļus, invertoru (tīkla vai hibrīda), aizsardzību, zemējumu un skaitītāju. Bieži lieto optimizatorus vai mikroinvertorus. Ja vajag autonomiju, pievieno akumulatoru un uzlādes kontrolieri. Jāparedz arī jumta nestspēja un pieslēguma jauda.",
    explanationEn: "Panels and mounts, DC cables, an inverter (grid-tied or hybrid), protection, earthing, and a meter are needed. Optimizers or microinverters are often used. A battery and charge controller are added if the system should keep running without the grid. Roof strength and the connection capacity also have to be allowed for."
  },
  {
    id: 4,
    topic: "Saule",
    topicEn: "Solar",
    prompt: "Kas ir kombinētais saules kolektors? Kāda ir tā uzbūve?",
    promptEn: "What is a combined solar collector, and how is it built?",
    choices: [],
    answer: null,
    explanation: "Kombinētais saules kolektors (PVT) vienlaikus ražo elektrību un siltumu. Priekšpusē ir fotoelementi, aiz tiem ir siltuma uztvērējs un kanāli ar šķidrumu. Šķidrums atdzesē elementus, tāpēc to lietderība pieaug, un iegūto siltumu var izmantot ūdens vai telpu sildīšanai.",
    explanationEn: "A combined solar collector (PVT) produces electricity and heat at the same time. Photovoltaic cells are at the front, with a heat absorber and fluid channels behind them. The fluid cools the cells, so their efficiency rises, and the captured heat can serve hot water or space heating."
  },
  {
    id: 5,
    topic: "Saule",
    topicEn: "Solar",
    prompt: "Iedomājies, ka tu plāno uzstādīt saules paneļus savā mājā. Ko ņemsi vērā?",
    promptEn: "Imagine you plan to install solar panels on your house. What will you take into account?",
    choices: [],
    answer: null,
    explanation: "Jāizvērtē jumta orientācija un slīpums, noēnojums, jumta nestspēja un stāvoklis, gada patēriņa profils, pieslēguma jauda, invertora vieta, sniega un vēja slodze, atļaujas, izmaksas un atmaksāšanās, kā arī tas, vai vajag akumulatoru.",
    explanationEn: "Roof orientation and tilt, shading, roof strength and condition, the yearly load profile, connection capacity, inverter location, snow and wind load, permits, cost and payback, and whether a battery is needed."
  },
  {
    id: 6,
    topic: "Saule",
    topicEn: "Solar",
    prompt: "Kādu ietekmi plaša saules enerģijas izmantošana varētu atstāt uz vidi un ekonomiku?",
    promptEn: "What effect could widespread use of solar energy have on the environment and the economy?",
    choices: [],
    answer: null,
    explanation: "Darbības laikā emisijas ir mazas, bet ražošana un pārstrāde patērē materiālus un enerģiju, un lieli parki aizņem zemi. Elektrības ilgtermiņa izmaksas krītas, taču dienas vidū rodas pārpalikums un cenu svārstības, tāpēc tīklam vajag elastību un uzkrāšanu.",
    explanationEn: "Operating emissions are low, but manufacturing and recycling use materials and energy, and large parks take land. The long-run cost of electricity falls, yet midday surplus and price swings appear, so the grid needs flexibility and storage."
  },
  {
    id: 7,
    topic: "Saule",
    topicEn: "Solar",
    prompt: "Kādi faktori ietekmē saules paneļu saražotās elektroenerģijas daudzumu?",
    promptEn: "What factors affect how much electricity solar panels produce?",
    choices: [],
    answer: null,
    explanation: "Saules starojums un mākoņi, Saules leņķis, paneļu orientācija un slīpums, noēnojums, temperatūra (karstumā jauda krītas), netīrumi un sniegs, invertora un kabeļu zudumi, kā arī paneļu novecošana.",
    explanationEn: "Irradiance and clouds, the sun’s angle, panel orientation and tilt, shading, temperature (power falls when the cells are hot), dirt and snow, inverter and cable losses, and panel degradation."
  },
  {
    id: 8,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Kā rodas vējš?",
    promptEn: "How does wind arise?",
    choices: [],
    answer: null,
    explanation: "Vējš rodas tāpēc, ka Saule Zemi silda nevienmērīgi. Siltais gaiss ceļas, veidojas spiediena starpības, un gaiss plūst no augstāka spiediena uz zemāku. Zemes griešanās (Koriolisa efekts) šo plūsmu novirza.",
    explanationEn: "Wind arises because the Sun heats the Earth unevenly. Warm air rises, pressure differences form, and air flows from higher pressure toward lower pressure. Earth’s rotation (the Coriolis effect) deflects that flow."
  },
  {
    id: 9,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Kā vēja enerģiju pārvērš elektriskajā enerģijā?",
    promptEn: "How is wind energy converted into electrical energy?",
    choices: [],
    answer: null,
    explanation: "Vējš griež lāpstiņas. Vārpsta un parasti arī ātrumkārba griež ģeneratoru, kas ražo elektroenerģiju. Kontrolieris un transformators pielāgo spriegumu un frekvenci tīklam. Ja vēja ātrums ir pārāk mazs vai pārāk liels, turbīna neieslēdzas vai apstājas.",
    explanationEn: "The wind turns the blades. The shaft, and usually a gearbox, turns a generator that produces electricity. A controller and a transformer match the voltage and frequency to the grid. If the wind is too weak or too strong, the turbine stays offline or shuts down."
  },
  {
    id: 10,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Kādi ir galvenie vēja turbīnu veidi?",
    promptEn: "What are the main types of wind turbines?",
    choices: [],
    answer: null,
    explanation: "Galvenie veidi ir horizontālās ass turbīnas un vertikālās ass turbīnas, piemēram, Darjē un Savonius. Pēc novietojuma ir sauszemes un jūras turbīnas. Pēc izmēra ir gan mazas iekārtas, gan vairāku megavatu turbīnas.",
    explanationEn: "The main types are horizontal-axis turbines and vertical-axis turbines, such as Darrieus and Savonius. By site they are onshore or offshore. By size they range from small machines to multi-megawatt turbines."
  },
  {
    id: 11,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Kurās situācijās būtu piemērotāk izmantot vertikālās ass turbīnu?",
    promptEn: "In which situations is a vertical-axis turbine more suitable?",
    choices: [],
    answer: null,
    explanation: "Vertikālās ass turbīna der, ja vēja virziens bieži mainās, vietā ir turbulents pilsētas vējš, ģeneratoru vēlams turēt tuvu zemei vai ja svarīgs ir troksnis un izskats. Tās lietderība parasti ir zemāka nekā lielai horizontālās ass turbīnai.",
    explanationEn: "A vertical-axis turbine suits sites where the wind direction changes often, turbulent urban wind, places where the generator should stay near the ground, or where noise and appearance matter. Its efficiency is usually lower than that of a large horizontal-axis turbine."
  },
  {
    id: 12,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Kādas ir galvenās vēja turbīnas sastāvdaļas?",
    promptEn: "What are the main components of a wind turbine?",
    choices: [],
    answer: null,
    explanation: "Rotors (lāpstiņas un rumba), gondola (vārpsta, ātrumkārba vai tiešā piedziņa, ģenerators, bremzes un pagriešanas mehānisms), tornis, pamats, vadība un transformators.",
    explanationEn: "The rotor (blades and hub), the nacelle (shaft, gearbox or direct drive, generator, brakes, and yaw drive), the tower, the foundation, the controls, and the transformer."
  },
  {
    id: 13,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Kādi materiāli tiek izmantoti vēja turbīnu lāpstiņu izgatavošanai un kāpēc?",
    promptEn: "What materials are used to make wind-turbine blades, and why?",
    choices: [],
    answer: null,
    explanation: "Lāpstiņas gatavo no stikla vai oglekļa šķiedras kompozītiem ar epoksīdsveķiem, dažreiz ar koka vai putuplasta serdi. Tie ir viegli, stingri un izturīgi pret nogurumu un laikapstākļiem. Metāls būtu smagāks.",
    explanationEn: "Blades are made from glass-fibre or carbon-fibre composites with epoxy, sometimes with a wood or foam core. They are light, stiff, and resistant to fatigue and weather. Metal would be heavier."
  },
  {
    id: 14,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Turbīnas nominālā jauda ir 5 MW, bet gada laikā tā vidēji darbojas ar 35 % no nominālās jaudas. Cik daudz elektroenerģijas tā saražo gadā?",
    promptEn: "A turbine’s rated power is 5 MW, but over the year it runs at an average of 35% of rated power. How much electricity does it produce in a year?",
    choices: [],
    answer: null,
    explanation: "Gada enerģija E = P × k × t.\nP = 5 MW, k = 0,35, t = 8760 h (365 × 24).\nE = 5 × 0,35 × 8760 = 15 330 MWh = 15,33 GWh gadā.\nTas ir aprēķins ar vidējo jaudu, nevis konkrēta gada izmērītais vējš.",
    explanationEn: "Annual energy E = P × k × t.\nP = 5 MW, k = 0.35, t = 8760 h (365 × 24).\nE = 5 × 0.35 × 8760 = 15 330 MWh = 15.33 GWh per year.\nThis uses the average power. It is not the measured wind of one particular year."
  },
  {
    id: 15,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Kāpēc vēja turbīna nevar izmantot 100% no vēja kinētiskās enerģijas?",
    promptEn: "Why can a wind turbine not use 100% of the wind’s kinetic energy?",
    choices: [],
    answer: null,
    explanation: "Beca robeža ir 16/27 ≈ 59,3 %. Ja turbīna paņemtu visu kinētisko enerģiju, gaiss aiz rotora apstātos un plūsma nevarētu turpināties. Reālas turbīnas paņem mazāk arī zudumu dēļ.",
    explanationEn: "The Betz limit is 16/27 ≈ 59.3%. If a turbine took 100% of the kinetic energy, the air behind the rotor would stop and the flow could not continue. Real turbines take less than the limit because of losses as well."
  },
  {
    id: 16,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Tev jāizvēlas starp divām turbīnām: viena ar lielāku rotora diametru, otra ar lielāku nominālo jaudu. Kādus parametrus Tu salīdzinātu?",
    promptEn: "You have to choose between two turbines: one with a larger rotor diameter and one with a higher rated power. Which parameters would you compare?",
    choices: [],
    answer: null,
    explanation: "Jāsalīdzina rotora diametrs un laukums, nominālā jauda, jaudas līkne, ieslēgšanās un atslēgšanās ātrums, rumbas augstums, lietderība, gada enerģija konkrētās vietas vēja sadalījumā, troksnis, cena un apkope. Lielāks rotors bieži dod vairāk vājā vējā, lielāka nominālā jauda dod vairāk stiprā vējā.",
    explanationEn: "Compare rotor diameter and area, rated power, the power curve, cut-in and cut-out speed, hub height, efficiency, annual energy in that site’s wind distribution, noise, cost, and maintenance. A larger rotor often yields more in light wind. A higher rated power yields more in strong wind."
  },
  {
    id: 17,
    topic: "Vējš",
    topicEn: "Wind",
    prompt: "Ja vēja ātrums palielinās no 5 m/s līdz 10 m/s, kā teorētiski mainās vēja pieejamā jauda?",
    promptEn: "If the wind speed increases from 5 m/s to 10 m/s, how does the available wind power change in theory?",
    choices: [],
    answer: null,
    explanation: "Vēja jauda ir proporcionāla ātruma kubam: P ∝ v³. Ātrums pieaug 2 reizes, un 2³ = 8. Ja gaisa blīvums un laukums nemainās, pieejamā jauda teorētiski pieaug 8 reizes.",
    explanationEn: "Wind power is proportional to the cube of speed: P ∝ v³. The speed doubles, and 2³ = 8. If air density and area stay the same, the available power increases 8 times in theory."
  },
  {
    id: 18,
    topic: "HES",
    topicEn: "Hydropower",
    prompt: "Nosauc un raksturo HES veidus.",
    promptEn: "Name and describe the types of hydropower plants.",
    choices: [],
    answer: null,
    explanation: "Pēc režīma ir caurplūdes HES, akumulējošās HES ar ūdenskrātuvi un hidroakumulācijas stacijas. Pēc krituma ir zema, vidēja un augsta krituma stacijas. Pēc jaudas ir mazās un lielās. Caurplūdes HES izmanto upes tecējumu. Akumulējošā uzkrāj ūdeni un ražo pēc vajadzības. Hidroakumulācija sūknē ūdeni augšā, kad elektrība ir lēta, un ražo, kad tā ir vajadzīga.",
    explanationEn: "By operating mode: run-of-river, reservoir (storage), and pumped storage. By head: low, medium, and high. By size: small and large. A run-of-river plant uses the river flow. A reservoir plant stores water and generates when needed. Pumped storage pumps water uphill when electricity is cheap and generates when it is needed."
  },
  {
    id: 19,
    topic: "HES",
    topicEn: "Hydropower",
    prompt: "Uzzīmējiet vienkāršotu HES shēmu un norādiet ūdens plūsmas virzienu.",
    promptEn: "Draw a simplified diagram of a hydropower plant and indicate the direction of the water flow.",
    choices: [],
    answer: null,
    explanation: "Pilnā eksāmena atbildē ir arī zīmējums. Shēma tekstā: ūdenskrātuve vai upe → ūdens ņemšana → spiedvads vai kanāls → turbīna → ģenerators → lejas bjefs. Ūdens plūst no augšas uz leju. Jāatzīmē kritums H starp augšējo un lejas ūdens līmeni.",
    explanationEn: "A full exam answer includes a sketch. In words: reservoir or river → intake → penstock or canal → turbine → generator → tailrace. Water flows downward. Mark the head H between the upper and lower water levels."
  },
  {
    id: 20,
    topic: "HES",
    topicEn: "Hydropower",
    prompt: "Izskaidro HES darbības principu no ūdens ieplūdes līdz elektroenerģijas nodošanai tīklā.",
    promptEn: "Explain how a hydropower plant works, from the water intake to the delivery of electricity to the grid.",
    choices: [],
    answer: null,
    explanation: "Ūdens no augšējā līmeņa pa vadu nonāk turbīnā. Kritums un caurplūdums dod hidraulisko jaudu. Turbīna griež ģeneratoru. Transformators paaugstina spriegumu nodošanai tīklā. Ūdens aizplūst uz lejas bjefu.",
    explanationEn: "Water from the upper level passes through the conduit to the turbine. Head and flow provide the hydraulic power. The turbine turns the generator. A transformer steps the voltage up for the grid. The water leaves into the tailrace."
  },
  {
    id: 21,
    topic: "HES",
    topicEn: "Hydropower",
    prompt: "Kāpēc HES nepieciešams kritums?",
    promptEn: "Why does a hydropower plant need a head?",
    choices: [],
    answer: null,
    explanation: "Bez krituma nav potenciālās enerģijas, ko pārvērst. Teorētiskā jauda ir P = ρ g Q H. Ja H = 0, jauda ir nulle, pat ja ūdens tek.",
    explanationEn: "Without a head there is no potential energy to convert. Theoretical power is P = ρ g Q H. If H = 0, the power is zero even when water is flowing."
  },
  {
    id: 22,
    topic: "HES",
    topicEn: "Hydropower",
    prompt: "Kāda ir atšķirība starp caurplūdes HES un akumulējošo HES?",
    promptEn: "What is the difference between a run-of-river plant and a storage hydropower plant?",
    choices: [],
    answer: null,
    explanation: "Caurplūdes HES izmanto esošo tecējumu, uzkrāj maz, mazāk izmaina upi, un ražošana seko caurplūdumam. Akumulējošā HES uzkrāj ūdeni un var ražot tad, kad vajag, bet aizsprosts izmaina upi un applūdina zemi.",
    explanationEn: "A run-of-river plant uses the current flow, stores little, changes the river less, and its output follows the flow. A storage plant holds water and can generate when needed, but the dam changes the river and floods land."
  },
  {
    id: 23,
    topic: "HES",
    topicEn: "Hydropower",
    prompt: "Nosauc un raksturo vismaz 4 turbīnu veidus.",
    promptEn: "Name and describe at least four types of turbines.",
    choices: [],
    answer: null,
    explanation: "Peltona turbīna der augstam kritumam: ūdens strūkla triecas pret kausiem. Frensisa turbīna der vidējam kritumam un ir radiāli aksiāla. Kaplāna jeb propelleru turbīna der zemam kritumam un lielam caurplūdumam, un tās lāpstiņas ir regulējamas. Banki–Mišela turbīna ir šķērsplūsmas turbīna un der mazām HES. Mazām jaudām lieto arī Turgo turbīnu.",
    explanationEn: "A Pelton turbine suits a high head: a water jet strikes buckets. A Francis turbine suits a medium head and is a radial-axial machine. A Kaplan, or propeller, turbine suits a low head and a large flow, and its blades are adjustable. A Banki–Michell turbine is a cross-flow machine used in small plants. A Turgo turbine is also used for small plants."
  },
  {
    id: 24,
    topic: "HES",
    topicEn: "Hydropower",
    prompt: "Kā aprēķina lietderības koeficients η?",
    promptEn: "How is the efficiency η calculated?",
    choices: [],
    answer: null,
    explanation: "Lietderības koeficientu η aprēķina kā lietderīgo jaudu dalītu ar pievadīto jaudu. HES tas ir η = P_elektriskā / (ρ g Q H). Koeficients ir bezdimensionāls, un bieži to izsaka procentos. Kopējais η ir turbīnas, ģeneratora un pārvada lietderību reizinājums.",
    explanationEn: "Efficiency η is useful power divided by supplied power. For a hydropower plant, η = P_electric / (ρ g Q H). It is dimensionless and is often given as a percent. The overall η is the product of the turbine, generator, and drive efficiencies."
  },
  {
    id: 25,
    topic: "HES",
    topicEn: "Hydropower",
    prompt: "HES ir Q = 120 m³/s un H = 15 m. Aprēķiniet teorētiski pieejamo hidrojaudu.",
    promptEn: "A hydropower plant has Q = 120 m³/s and H = 15 m. Calculate the theoretically available hydropower.",
    choices: [],
    answer: null,
    explanation: "P = ρ g Q H.\nAr ρ = 1000 kg/m³, g = 9,81 m/s², Q = 120 m³/s un H = 15 m:\nP = 1000 × 9,81 × 120 × 15 = 17 658 000 W ≈ 17,7 MW.\nJa g = 10, rezultāts ir 18,0 MW. Reālā elektriskā jauda ir mazāka, jo η ir mazāks par 1.",
    explanationEn: "P = ρ g Q H.\nWith ρ = 1000 kg/m³, g = 9.81 m/s², Q = 120 m³/s and H = 15 m:\nP = 1000 × 9.81 × 120 × 15 = 17 658 000 W ≈ 17.7 MW.\nIf g = 10, the result is 18.0 MW. Real electric output is lower because η is less than 1."
  },
  {
    id: 26,
    topic: "Plūdmaiņas",
    topicEn: "Tides",
    prompt: "Kas ir plūdmaiņas, un kādi galvenie dabas spēki tās izraisa?",
    promptEn: "What are tides, and which main natural forces cause them?",
    choices: [],
    answer: null,
    explanation: "Plūdmaiņas ir periodiska jūras līmeņa celšanās un krišanās. Galvenokārt tās izraisa Mēness gravitācija, mazāk Saules gravitācija, kā arī Zemes griešanās. Kad Saule, Mēness un Zeme ir vienā līnijā, ir sizigiju plūdmaiņas ar lielāku amplitūdu.",
    explanationEn: "Tides are the periodic rise and fall of sea level. They are caused mainly by the Moon’s gravity, less by the Sun’s gravity, and by Earth’s rotation. When the Sun, Moon, and Earth line up, spring tides have a larger range."
  },
  {
    id: 27,
    topic: "Plūdmaiņas",
    topicEn: "Tides",
    prompt: "Kādi ir galvenie plūdmaiņu elektrostacijas tehniskie elementi?",
    promptEn: "What are the main technical elements of a tidal power plant?",
    choices: [],
    answer: null,
    explanation: "Aizsprosta vai lagūnas shēmā ir vārti, baseins, turbīnas (bieži divvirzienu), ģeneratori, slūžas kuģiem un zivīm, dambis, vadība un pieslēgums tīklam. Brīvās straumes izkārtojumā turbīnas stāv straumē bez liela aizsprosta.",
    explanationEn: "A barrage or lagoon has gates, a basin, turbines (often two-way), generators, locks for ships and fish, a dam, controls, and a grid connection. In a free-stream layout the turbines sit in the current without a large barrage."
  },
  {
    id: 28,
    topic: "Plūdmaiņas",
    topicEn: "Tides",
    prompt: "Kāpēc lielāka ūdens līmeņu starpība parasti nozīmē lielāku pieejamo enerģiju?",
    promptEn: "Why does a larger difference in water level usually mean more available energy?",
    choices: [],
    answer: null,
    explanation: "Enerģija ir saistīta ar līmeņu starpību. Lielāks kritums nozīmē vairāk potenciālās enerģijas uz tilpuma vienību un lielāku jaudu pie tā paša caurplūduma, jo jauda ir proporcionāla kritumam H.",
    explanationEn: "The energy depends on the difference in level. A larger head means more potential energy per unit of volume and more power at the same flow, because power is proportional to the head H."
  },
  {
    id: 29,
    topic: "Plūdmaiņas",
    topicEn: "Tides",
    prompt: "Ar ko atšķiras horizontālās un vertikālās ass turbīnas?",
    promptEn: "How do horizontal-axis and vertical-axis turbines differ?",
    choices: [],
    answer: null,
    explanation: "Horizontālās ass rotors ir paralēli plūsmai, līdzīgi vēja turbīnai, un tam jāvēršas pret straumi. Vertikālās ass rotoram virziens jāmaina mazāk. Ūdenī biežāk lieto horizontālo asi, jo virzītas straumes apstākļos tā ir lietderīgāka.",
    explanationEn: "A horizontal-axis rotor is parallel to the flow, like a wind turbine, and it has to face the current. A vertical-axis rotor needs less yawing. Horizontal-axis machines are more common in water because they are more efficient in a directional current."
  },
  {
    id: 30,
    topic: "Plūdmaiņas",
    topicEn: "Tides",
    prompt: "Kā darbojas horizontālās ass plūdmaiņu turbīna?",
    promptEn: "How does a horizontal-axis tidal turbine work?",
    choices: [],
    answer: null,
    explanation: "Plūsma ap lāpstiņām rada cēlējspēku un griezes momentu. Rotors griežas uz horizontālas ass plūsmas virzienā un piedzen ģeneratoru. Gondola ir zem ūdens vai uz pāļa. Kad plūdmaiņa maina virzienu, iekārta pagriežas vai lāpstiņas maina leņķi.",
    explanationEn: "Flow over the blades creates lift and torque. The rotor spins on a horizontal axis aligned with the flow and drives the generator. The nacelle is underwater or on a pile. When the tide reverses, the machine yaws or the blades change pitch."
  },
  {
    id: 31,
    topic: "Plūdmaiņas",
    topicEn: "Tides",
    prompt: "Kāda ir atšķirība starp plūdmaiņu aizsprostu un zemūdens plūdmaiņu turbīnu?",
    promptEn: "What is the difference between a tidal barrage and an underwater tidal turbine?",
    choices: [],
    answer: null,
    explanation: "Aizsprosts noslēdz līci, uzkrāj ūdeni un ražo no krituma: jauda ir liela, un ietekme uz vidi arī ir liela. Zemūdens turbīna stāv brīvā straumē, izmanto kinētisko enerģiju, krastu maina mazāk, bet jauda ir mazāka un iekārta ir zem ūdens.",
    explanationEn: "A barrage closes a bay, stores water, and generates from a head: the power is large, and so is the environmental effect. An underwater turbine sits in the free current, uses kinetic energy, and changes the coast less, but the power is smaller and the machine is underwater."
  },
  {
    id: 32,
    topic: "Plūdmaiņas",
    topicEn: "Tides",
    prompt: "Nosauc trīs galvenās plūdmaiņu enerģijas priekšrocības un trūkumus.",
    promptEn: "Name three main advantages and three main drawbacks of tidal energy.",
    choices: [],
    answer: null,
    explanation: "Priekšrocības: grafiks ir paredzams, ražošana nav atkarīga no laikapstākļiem, un nav degvielas un tiešo emisiju. Trūkumi: der tikai noteiktas vietas, būve ir dārga, un aizsprosts ietekmē ekosistēmas. Ražošana ir arī cikliska, ar pauzēm stāvošā ūdenī.",
    explanationEn: "Advantages: the timetable is predictable, output does not depend on the weather, and there is no fuel and no direct emissions. Drawbacks: only certain sites are suitable, construction is expensive, and a barrage affects ecosystems. Output is also cyclic, with pauses at slack water."
  },
  {
    id: 33,
    topic: "Ģeotermālā",
    topicEn: "Geothermal",
    prompt: "Kas ir ģeotermālā enerģija, un kāds ir tās galvenais avots Zemes dzīlēs?",
    promptEn: "What is geothermal energy, and what is its main source deep in the Earth?",
    choices: [],
    answer: null,
    explanation: "Ģeotermālā enerģija ir Zemes iekšējais siltums. Galvenais avots ir radioaktīvā sabrukšana garozā un mantijā, kā arī atlikušais siltums no Zemes veidošanās. Siltumu uz augšu nes vadīšana un konvekcija.",
    explanationEn: "Geothermal energy is the Earth’s internal heat. Its main source is radioactive decay in the crust and mantle, together with residual heat from the Earth’s formation. Conduction and convection carry the heat upward."
  },
  {
    id: 34,
    topic: "Ģeotermālā",
    topicEn: "Geothermal",
    prompt: "Kāpēc ģeotermālo enerģiju uzskata par samērā stabilu un no laikapstākļiem maz atkarīgu enerģijas avotu?",
    promptEn: "Why is geothermal energy considered fairly stable and little dependent on the weather?",
    choices: [],
    answer: null,
    explanation: "Dziļā siltuma plūsma gandrīz nemainās dienas un gada laikā un nav atkarīga no Saules, vēja vai mākoņiem, tāpēc stacija var strādāt kā bāzes jauda. Seklās sistēmas laikapstākļi ietekmē maz. Dziļās gandrīz nemaz, kamēr resursu neizsmeļ.",
    explanationEn: "Deep heat flow barely changes through the day or the year and does not depend on the sun, wind, or clouds, so a plant can run as baseload. Weather affects shallow systems only a little. It barely affects deep systems until the resource is overdrawn."
  },
  {
    id: 35,
    topic: "Ģeotermālā",
    topicEn: "Geothermal",
    prompt: "Kāda ir atšķirība starp seklās ģeotermālās enerģijas izmantošanu ar siltumsūkņiem un dziļās ģeotermālās enerģijas ieguvi?",
    promptEn: "What is the difference between using shallow geothermal energy with heat pumps and extracting deep geothermal energy?",
    choices: [],
    answer: null,
    explanation: "Seklā ģeotermija, desmiti līdz daži simti metru, ar siltumsūkni paceļ zemo grunts temperatūru līdz apkures līmenim un patērē elektrību. Dziļā ieguve, kilometru dziļumā, sasniedz karstu ūdeni vai tvaiku tiešam siltumam vai elektrībai. Seklā ir plaši pieejama. Dziļajai vajag īpašu ģeoloģiju.",
    explanationEn: "Shallow geothermal energy, from tens of metres to a few hundred metres, uses a heat pump to raise a low ground temperature to a heating temperature and consumes electricity. Deep extraction, at kilometre depth, reaches hot water or steam for direct heat or electricity. Shallow heat is widely available. Deep heat needs particular geology."
  },
  {
    id: 36,
    topic: "Ģeotermālā",
    topicEn: "Geothermal",
    prompt: "Kā darbojas zemes siltumsūknis, un kādas ir tā galvenās sastāvdaļas?",
    promptEn: "How does a ground-source heat pump work, and what are its main components?",
    choices: [],
    answer: null,
    explanation: "Zemes siltumsūknis pārnes siltumu no grunts uz ēku. Galvenās daļas ir zemes kontūrs vai urbumi, iztvaikotājs, kompresors, kondensators, izplešanās vārsts, aukstumaģents, cirkulācijas sūkņi un apkures kontūrs. Atdotais siltums ir lielāks par kompresora patērēto elektrību.",
    explanationEn: "A ground-source heat pump moves heat from the ground into the building. The main parts are the ground loop or boreholes, evaporator, compressor, condenser, expansion valve, refrigerant, circulation pumps, and the heating circuit. The heat delivered is greater than the electricity the compressor uses."
  },
  {
    id: 37,
    topic: "Augu eļļa",
    topicEn: "Plant oil",
    prompt: "Kādas augu eļļas iespējams izmantot enerģijas ieguvei un transportā?",
    promptEn: "Which plant oils can be used for energy and transport?",
    choices: [],
    answer: null,
    explanation: "Rapšu, saulespuķu, sojas, linsēklu un citas augu eļļas. Tīru augu eļļu var lietot tikai pielāgotā dīzeļdzinējā. Parasti eļļu pārstrādā biodīzeļdegvielā. Lietota cepameļļa ir izejviela, bet tā nav laukā iegūta augu eļļa.",
    explanationEn: "Rapeseed, sunflower, soy, linseed, and other plant oils. Straight vegetable oil can be used only in an adapted diesel engine. The oil is usually turned into biodiesel. Used cooking oil is a feedstock, but it is not oil from a field crop."
  },
  {
    id: 38,
    topic: "Augu eļļa",
    topicEn: "Plant oil",
    prompt: "Kā iegūst augu eļļu no eļļas augiem, piemēram, rapša?",
    promptEn: "How is plant oil obtained from oil crops, for example rapeseed?",
    choices: [],
    answer: null,
    explanation: "Sēklas attīra, kondicionē un presē auksti vai karsti. Rodas jēleļļa un spraukumi. Eļļu filtrē un atdala ūdeni un piemaisījumus. Rūpniecībā eļļu var arī ekstrahēt ar šķīdinātāju un šķīdinātāju pēc tam atdestilēt.",
    explanationEn: "The seeds are cleaned, conditioned, and pressed cold or hot. This produces crude oil and cake. The oil is filtered, and water and impurities are removed. Industry may also extract the oil with a solvent and then distill the solvent off."
  },
  {
    id: 39,
    topic: "Augu eļļa",
    topicEn: "Plant oil",
    prompt: "Kāda ir atšķirība starp tīru augu eļļu un biodīzeļdegvielu?",
    promptEn: "What is the difference between straight vegetable oil and biodiesel?",
    choices: [],
    answer: null,
    explanation: "Tīra augu eļļa ir triglicerīdi: tā ir viskozāka un ar augstāku uzliesmošanas temperatūru. Biodīzeļdegviela ir metil- vai etilesteri pēc pāresterificēšanas: tā ir šķidrāka, tuvāka dīzeļdegvielai, un tai ir standarts, piemēram, EN 14214.",
    explanationEn: "Straight vegetable oil is triglycerides: it is more viscous and has a higher flash point. Biodiesel is methyl or ethyl esters after transesterification: it is thinner, closer to diesel, and specified by a standard such as EN 14214."
  },
  {
    id: 40,
    topic: "Augu eļļa",
    topicEn: "Plant oil",
    prompt: "Kāpēc parastu augu eļļu nevar izmantot jebkurā dīzeļdzinējā?",
    promptEn: "Why can ordinary plant oil not be used in just any diesel engine?",
    choices: [],
    answer: null,
    explanation: "Parasta augu eļļa ir daudz viskozāka, slikti izsmidzinās, var koksnēt sprauslas, atstāt nogulsnes un aizsērēt filtrus, īpaši aukstumā. Parastā dīzeļdzinējā bez sildīšanas un degvielas sistēmas izmaiņām tā neder. To pārveido biodīzeļdegvielā vai lieto pielāgotā dzinējā.",
    explanationEn: "Ordinary plant oil is much more viscous. It atomizes poorly and can coke injectors, leave deposits, and clog filters, especially when cold. It is not suitable in an ordinary diesel engine without heating and fuel-system changes. It is converted to biodiesel, or it is used in an adapted engine."
  },
  {
    id: 41,
    topic: "Augu eļļa",
    topicEn: "Plant oil",
    prompt: "Kādas izmaiņas dzinējā vai degvielas sistēmā var būt nepieciešamas, izmantojot tīru augu eļļu?",
    promptEn: "What changes to the engine or the fuel system may be needed when using straight vegetable oil?",
    choices: [],
    answer: null,
    explanation: "Vajadzīga eļļas priekšsildīšana, divu tvertņu sistēma (iedarbināšana un apstādināšana ar dīzeļdegvielu), citas sprauslas un sūknis, izturīgi blīvējumi, filtri un dažreiz citas maģistrāles. Jāuzrauga eļļas kvalitāte un viskozitāte.",
    explanationEn: "Oil preheating, a two-tank system (start and stop on diesel), different injectors and a different pump, resistant seals, filters, and sometimes different lines. Oil quality and viscosity have to be watched."
  },
  {
    id: 42,
    topic: "Bioetanols",
    topicEn: "Bioethanol",
    prompt: "Kas ir bioetanols, un no kādām izejvielām to ražo?",
    promptEn: "What is bioethanol, and from which feedstocks is it produced?",
    choices: [],
    answer: null,
    explanation: "Bioetanols ir etilspirts no biomasas. To piejauc benzīnam vai lieto kā degvielu. Izejvielas ir cukuri (cukurniedres, cukurbietes), ciete (kukurūza, kvieši, kartupeļi) un otrās paaudzes celuloze jeb lignoceluloze (salmi, koksnes atlikumi).",
    explanationEn: "Bioethanol is ethyl alcohol from biomass. It is blended with petrol or used as a fuel. Feedstocks are sugars (cane, beet), starch (maize, wheat, potato), and second-generation cellulose or lignocellulose (straw, wood residues)."
  },
  {
    id: 43,
    topic: "Bioetanols",
    topicEn: "Bioethanol",
    prompt: "Kādi ir galvenie bioetanola ražošanas procesa posmi?",
    promptEn: "What are the main stages of bioethanol production?",
    choices: [],
    answer: null,
    explanation: "Izejvielas sagatavo, cieti, ja vajag, hidrolizē līdz cukuriem, raugs veic fermentāciju, seko destilācija, atūdeņošana līdz degvielas kvalitātei un denaturēšana. Atlikumus var izmantot lopbarībā vai biogāzē.",
    explanationEn: "The feedstock is prepared, starch is hydrolyzed to sugars if needed, yeast carries out fermentation, then distillation, dehydration to fuel grade, and denaturing. Residues can go to animal feed or biogas."
  },
  {
    id: 44,
    topic: "Bioetanols",
    topicEn: "Bioethanol",
    prompt: "Kāda nozīme bioetanola ražošanā ir fermentācijai?",
    promptEn: "What is the role of fermentation in bioethanol production?",
    choices: [],
    answer: null,
    explanation: "Fermentācijā raugs bezskābekļa apstākļos pārvērš cukurus etanolā un CO₂. Bez šī posma spirta nav. Cieti vispirms hidrolizē līdz cukuriem.",
    explanationEn: "In fermentation, yeast turns sugars into ethanol and CO₂ without oxygen. Without that step there is no alcohol. Starch is hydrolyzed to sugars first."
  },
  {
    id: 45,
    topic: "Bioetanols",
    topicEn: "Bioethanol",
    prompt: "Kāda ir pirmās un otrās paaudzes bioetanola atšķirība?",
    promptEn: "What is the difference between first-generation and second-generation bioethanol?",
    choices: [],
    answer: null,
    explanation: "Pirmā paaudze izmanto pārtikas kultūras, cukuru un cieti. Otrā paaudze izmanto nepārtikas biomasu, celulozi un atlikumus. Tā mazāk konkurē ar pārtiku, bet vajag grūtāku priekšapstrādi, lai iegūtu fermentējamus cukurus.",
    explanationEn: "First-generation ethanol uses food crops, sugar and starch. Second-generation ethanol uses non-food biomass, cellulose, and residues. It competes less with food, but it needs harder pretreatment to make fermentable sugars."
  },
  {
    id: 46,
    topic: "Bioetanols",
    topicEn: "Bioethanol",
    prompt: "Kā bioetanola pievienošana benzīnam ietekmē degvielas īpašības un dzinēja darbību?",
    promptEn: "How does adding bioethanol to petrol affect fuel properties and engine operation?",
    choices: [],
    answer: null,
    explanation: "Etanols paaugstina oktānskaitli un var samazināt daļu emisiju, bet tā enerģijas blīvums ir mazāks, tāpēc lielos maisījumos pieaug litru patēriņš. Tas uzsūc ūdeni, var ietekmēt vecus blīvējumus un degvielas sistēmu, un aukstā iedarbināšana ir grūtāka. Mazos maisījumos, E5 un E10, parastie benzīna dzinēji to parasti panes.",
    explanationEn: "Ethanol raises the octane number and can cut some emissions, but its energy density is lower, so high blends increase the litres consumed. It absorbs water, can affect old seals and fuel systems, and cold starts are harder. Ordinary petrol engines usually tolerate small blends such as E5 and E10."
  },
  {
    id: 47,
    topic: "Biodīzelis",
    topicEn: "Biodiesel",
    prompt: "Kas ir biodīzeļdegviela, un no kādām izejvielām to var ražot?",
    promptEn: "What is biodiesel, and from which feedstocks can it be produced?",
    choices: [],
    answer: null,
    explanation: "Biodīzeļdegviela ir taukskābju metil- vai etilesteri no augu eļļām, dzīvnieku taukiem vai lietotas cepameļļas. To iegūst, pāresterificējot triglicerīdus ar spirtu un katalizatoru. Blakusprodukts ir glicerīns.",
    explanationEn: "Biodiesel is fatty-acid methyl or ethyl esters from plant oils, animal fats, or used cooking oil. It is made by transesterifying triglycerides with an alcohol and a catalyst. The by-product is glycerol."
  },
  {
    id: 48,
    topic: "Biodīzelis",
    topicEn: "Biodiesel",
    prompt: "Kā darbojas eļļu un tauku pāresterificēšanas process?",
    promptEn: "How does the transesterification of oils and fats work?",
    choices: [],
    answer: null,
    explanation: "Triglicerīds reaģē ar metanolu vai etanolu. Taukskābju grupas atdalās no glicerīna un veido esterus, tas ir, biodīzeļdegvielu. Vajag katalizatoru, temperatūru un spirta pārākumu. Ja lieto bāzisku katalizatoru, eļļai jābūt sausai un ar maz brīvo taukskābju, citādi veidojas ziepes. Šis process ir pāresterificēšana.",
    explanationEn: "A triglyceride reacts with methanol or ethanol. The fatty-acid groups leave the glycerol and form esters, which are the biodiesel. The reaction needs a catalyst, a temperature, and excess alcohol. If a base catalyst is used, the oil must be dry and low in free fatty acids, or soaps form. This process is transesterification."
  },
  {
    id: 49,
    topic: "Biodīzelis",
    topicEn: "Biodiesel",
    prompt: "Kāda ir metanola vai etanola un katalizatora nozīme biodīzeļdegvielas ražošanā?",
    promptEn: "What is the role of methanol or ethanol, and of the catalyst, in biodiesel production?",
    choices: [],
    answer: null,
    explanation: "Spirts ieņem glicerīna vietu esterī, tāpēc bez metanola vai etanola biodīzeļdegvielas nav. Katalizators, bieži NaOH vai KOH, dažreiz skābe vai enzīms, paātrina reakciju mērenā temperatūrā. Bāziskam katalizatoram vajag tīru un sausu eļļu.",
    explanationEn: "The alcohol takes glycerol’s place in the ester, so without methanol or ethanol there is no biodiesel. A catalyst, often NaOH or KOH, sometimes an acid or an enzyme, speeds the reaction at a moderate temperature. A base catalyst needs clean, dry oil."
  },
  {
    id: 50,
    topic: "Biodīzelis",
    topicEn: "Biodiesel",
    prompt: "Kādas ir galvenās atšķirības starp biodīzeļdegvielu un fosilo dīzeļdegvielu?",
    promptEn: "What are the main differences between biodiesel and fossil diesel?",
    choices: [],
    answer: null,
    explanation: "Biodīzeļdegviela nāk no biomasas, fosilā dīzeļdegviela nāk no naftas. Biodīzeļdegvielai parasti ir mazāk sēra, labāka eļļošana un augstāka uzliesmošanas temperatūra, bet lielāka viskozitāte, sliktākas aukstuma īpašības un nedaudz mazāks enerģijas blīvums. Tā ir skābekli saturošs esteris, nevis ogļūdeņradis.",
    explanationEn: "Biodiesel comes from biomass, and fossil diesel comes from petroleum. Biodiesel usually has less sulfur, better lubricity, and a higher flash point, but higher viscosity, poorer cold-flow properties, and a slightly lower energy density. It is an oxygenated ester, not a hydrocarbon."
  },
  {
    id: 51,
    topic: "Biodīzelis",
    topicEn: "Biodiesel",
    prompt: "Kā biodīzeļdegvielas izmantošana ietekmē dzinēja emisijas un degvielas patēriņu?",
    promptEn: "How does the use of biodiesel affect engine emissions and fuel consumption?",
    choices: [],
    answer: null,
    explanation: "Cietās daļiņas, CO un ogļūdeņraži parasti samazinās. NOx var nedaudz pieaugt. Sēra emisijas ir mazas. Litru patēriņš var pieaugt, jo enerģijas blīvums ir mazāks. Ietekme ir atkarīga no maisījuma un dzinēja.",
    explanationEn: "Particulates, CO, and hydrocarbons usually fall. NOx can rise slightly. Sulfur emissions are low. Litres consumed can rise because the energy density is lower. The effect depends on the blend and the engine."
  },
  {
    id: 52,
    topic: "Biodīzelis",
    topicEn: "Biodiesel",
    prompt: "Kādas problēmas biodīzeļdegvielas izmantošanā var rasties zemā temperatūrā?",
    promptEn: "What problems can arise when biodiesel is used at low temperature?",
    choices: [],
    answer: null,
    explanation: "Aukstumā biodīzeļdegviela saduļķojas, kristalizējas un var aizsprostot filtrus un maģistrāles. To raksturo duļķošanās punkts un aukstā filtra nosprostošanās punkts. Ziemā to jauc ar ziemas dīzeļdegvielu, lieto piedevas vai izvēlas esterus ar labāku aukstuma plūsmu. Rapšu esteri ir labāki par palmu esteriem.",
    explanationEn: "In the cold, biodiesel clouds, crystallizes, and can block filters and lines. This is described by the cloud point and the cold filter plugging point. In winter it is blended with winter diesel, additives are used, or esters with better cold flow are chosen. Rapeseed esters are better than palm esters."
  },
  {
    id: 53,
    topic: "Biodīzelis",
    topicEn: "Biodiesel",
    prompt: "Kāpēc lietotu pārtikas eļļu un atkritumu tauku izmantošana var būt ilgtspējīgāka nekā īpaši degvielas ražošanai audzētu kultūraugu izmantošana?",
    promptEn: "Why can the use of used cooking oil and waste fats be more sustainable than the use of crops grown specifically for fuel?",
    choices: [],
    answer: null,
    explanation: "Lietota eļļa un atkritumu tauki jau pastāv kā atkritumi. To izmantošanai nevajag jaunu zemi un mēslojumu, un tie tieši nekonkurē ar pārtiku. Degvielas kultūras aizņem zemi un rada audzēšanas emisijas. Atkritumu izejviela parasti ir ilgtspējīgāka, ja savākšana un attīrīšana ir sakārtota.",
    explanationEn: "Used oil and waste fats already exist as waste. Using them needs no new land or fertilizer, and they do not compete directly with food. Fuel crops occupy land and cause emissions from cultivation. A waste feedstock is usually more sustainable if collection and cleanup are managed."
  },
  {
    id: 54,
    topic: "Biogāze",
    topicEn: "Biogas",
    prompt: "Kas ir biogāze, un kādas ir tās galvenās sastāvdaļas?",
    promptEn: "What is biogas, and what are its main components?",
    choices: [],
    answer: null,
    explanation: "Biogāze ir gāze, kas rodas, organiskajai vielai sadaloties bez skābekļa. Galvenokārt tā ir metāns CH₄ (ap 50–70 %) un CO₂ (ap 30–50 %), kā arī ūdens tvaiks un nelieli H₂S, slāpekļa un citu gāzu daudzumi.",
    explanationEn: "Biogas is the gas produced when organic matter breaks down without oxygen. It is mainly methane, CH₄ (about 50–70%), and CO₂ (about 30–50%), plus water vapour and small amounts of H₂S, nitrogen, and other gases."
  },
  {
    id: 55,
    topic: "Biogāze",
    topicEn: "Biogas",
    prompt: "Kā notiek anaerobā fermentācija, un kāda ir mikroorganismu loma šajā procesā?",
    promptEn: "How does anaerobic fermentation proceed, and what is the role of the microorganisms?",
    choices: [],
    answer: null,
    explanation: "Anaerobā fermentācija ir mikroorganismu ķēde bez skābekļa. Baktērijas hidrolizē polimērus, tad veido organiskās skābes un ūdeņradi, un metanogēni ražo metānu no acetāta vai no H₂ un CO₂. Svarīga ir temperatūra, pH, mitrums un barības vielu līdzsvars.",
    explanationEn: "Anaerobic fermentation is a chain of microorganisms working without oxygen. Bacteria hydrolyze polymers, then produce organic acids and hydrogen, and methanogens make methane from acetate or from H₂ and CO₂. Temperature, pH, moisture, and nutrient balance matter."
  },
  {
    id: 56,
    topic: "Biogāze",
    topicEn: "Biogas",
    prompt: "Kādas izejvielas iespējams izmantot biogāzes ražošanai?",
    promptEn: "Which feedstocks can be used to produce biogas?",
    choices: [],
    answer: null,
    explanation: "Kūtsmēsli, virca, enerģētiskie augi un skābbarība, pārtikas atkritumi, notekūdeņu dūņas, kautuves atkritumi un augu atlikumi. Koksnains, lignīnu bagāts materiāls sadalās slikti. Izejvielas parasti jauc.",
    explanationEn: "Manure, slurry, energy crops and silage, food waste, sewage sludge, slaughter waste, and crop residues. Woody, lignin-rich material digests poorly. Feedstocks are usually mixed."
  },
  {
    id: 57,
    topic: "Biogāze",
    topicEn: "Biogas",
    prompt: "Kāda ir atšķirība starp biogāzi un biometānu?",
    promptEn: "What is the difference between biogas and biomethane?",
    choices: [],
    answer: null,
    explanation: "Biogāze ir jēlgāze ar lielu CO₂ daļu. Biometāns ir attīrīta biogāze, kurā metāna daļa ir pacelta līdz dabasgāzes līmenim, parasti virs 95 %. To var padot tīklā vai lietot kā transporta degvielu (CNG).",
    explanationEn: "Biogas is the raw gas, with a large share of CO₂. Biomethane is upgraded biogas in which the methane share is raised to natural-gas level, usually above 95%. It can enter the grid or be used as a transport fuel (CNG)."
  },
  {
    id: 58,
    topic: "Biogāze",
    topicEn: "Biogas",
    prompt: "Kā biogāzi izmanto elektroenerģijas, siltuma un transporta degvielas ražošanai?",
    promptEn: "How is biogas used to produce electricity, heat, and transport fuel?",
    choices: [],
    answer: null,
    explanation: "Koģenerācijā biogāzi sadedzina dzinējā vai turbīnā: ģenerators ražo elektrību, un dzesēšanas un izplūdes siltumu izmanto apkurei. Transportam biogāzi attīra līdz biometānam, saspiež un uzpilda. To var arī dedzināt katlā tikai siltumam.",
    explanationEn: "In combined heat and power, biogas is burned in an engine or turbine: the generator makes electricity, and cooling and exhaust heat serve heating. For transport it is upgraded to biomethane, compressed, and used for refuelling. It can also be burned in a boiler for heat only."
  },
  {
    id: 59,
    topic: "Biogāze",
    topicEn: "Biogas",
    prompt: "Kādas ir biogāzes staciju priekšrocības lauksaimniecībā un organisko atkritumu apsaimniekošanā?",
    promptEn: "What are the advantages of biogas plants in agriculture and in the management of organic waste?",
    choices: [],
    answer: null,
    explanation: "Saimniecībā kūtsmēsli kļūst par enerģiju, smaka un atklātā krātuvē izdalītais metāns samazinās, un digestātu var lietot kā mēslojumu. Atkritumu apsaimniekošanā organika nenonāk poligonā, kur metāns izdalītos nekontrolēti, un enerģiju atgūst.",
    explanationEn: "On a farm, manure becomes energy, smell and methane from open storage fall, and the digestate can be used as fertilizer. In waste management, organic material avoids a landfill where methane would be released uncontrolled, and the energy is recovered."
  },
  {
    id: 60,
    topic: "Biogāze",
    topicEn: "Biogas",
    prompt: "Kā metāna noplūdes un digestāta apsaimniekošana ietekmē biogāzes ražošanas ilgtspēju?",
    promptEn: "How do methane leaks and digestate management affect the sustainability of biogas production?",
    choices: [],
    answer: null,
    explanation: "Metāna noplūdes ir spēcīga siltumnīcefekta gāze. Lielas noplūdes izdzēš klimata ieguvumu. Digestāts jāuzglabā slēgti un jāizkliedē pareizi, citādi emisijas un barības vielu notece grauj ilgtspēju. Labi vadīta stacija emisijas samazina. Slikti vadīta stacija tās var palielināt.",
    explanationEn: "Methane leaks are a strong greenhouse gas. Large leaks erase the climate benefit. Digestate has to be stored closed and spread correctly, or emissions and nutrient runoff undermine sustainability. A well-run plant cuts emissions. A poorly run plant can increase them."
  },
  {
    id: 61,
    topic: "Atomelektrostacija",
    topicEn: "Nuclear",
    prompt: "Kā darbojas atomelektrostacija, un kāda ir kodola skaldīšanas nozīme elektroenerģijas ražošanā?",
    promptEn: "How does a nuclear power plant work, and what is the role of nuclear fission in generating electricity?",
    choices: [],
    answer: null,
    explanation: "Reaktorā smags kodols, parasti urāns-235, pēc neitrona uztveršanas skaldās. Rodas vieglāki kodoli, neitroni un daudz enerģijas. Siltums sasilda siltumnesēju, tvaiks griež turbīnu un ģeneratoru. Skaldīšana ir siltuma avots, nevis tiešs elektrības avots.",
    explanationEn: "In the reactor a heavy nucleus, usually uranium-235, splits after it absorbs a neutron. Lighter nuclei, neutrons, and a large amount of energy are produced. The heat warms the coolant, and steam turns a turbine and a generator. Fission is the heat source. It is not a direct source of electricity."
  },
  {
    id: 62,
    topic: "Atomelektrostacija",
    topicEn: "Nuclear",
    prompt: "Kāda ir kodolreaktora, tvaika turbīnas un ģeneratora funkcija?",
    promptEn: "What is the function of the nuclear reactor, the steam turbine, and the generator?",
    choices: [],
    answer: null,
    explanation: "Reaktors uztur vadāmu ķēdes reakciju un nodod siltumu siltumnesējam. Tvaika turbīna pārvērš siltumu griešanā. Ģenerators pārvērš griešanu elektrībā. Tā ir siltuma mašīna, kurā katla vietā ir reaktors.",
    explanationEn: "The reactor holds a controlled chain reaction and delivers heat to the coolant. The steam turbine turns that heat into rotation. The generator turns rotation into electricity. It is a heat engine in which a reactor takes the place of a boiler."
  },
  {
    id: 63,
    topic: "Atomelektrostacija",
    topicEn: "Nuclear",
    prompt: "Kāpēc atomelektrostacijas elektroenerģijas ražošanā rada salīdzinoši maz siltumnīcefekta gāzu emisiju?",
    promptEn: "Why does a nuclear power plant produce comparatively little greenhouse-gas emission while generating electricity?",
    choices: [],
    answer: null,
    explanation: "Darbības laikā reakcija nededzina oglekļa degvielu, tāpēc tiešo dūmgāzu CO₂ gandrīz nav. Emisijas paliek būvniecībā, urāna ieguvē, bagātināšanā un demontāžā. Uz vienu kilovatstundu tās ir mazas salīdzinājumā ar oglēm vai gāzi.",
    explanationEn: "While the plant runs, the reaction does not burn a carbon fuel, so there is almost no direct stack CO₂. Emissions remain in construction, uranium mining, enrichment, and decommissioning. Per kilowatt-hour they are small compared with coal or gas."
  },
  {
    id: 64,
    topic: "Atomelektrostacija",
    topicEn: "Nuclear",
    prompt: "Kādi ir atomelektrostaciju galvenie ieguvumi un riski?",
    promptEn: "What are the main benefits and risks of nuclear power plants?",
    choices: [],
    answer: null,
    explanation: "Ieguvumi: liela un vienmērīga jauda, mazas ekspluatācijas siltumnīcefekta gāzu emisijas, mazs degvielas tilpums un nav atkarības no laikapstākļiem. Riski: smagas avārijas iespēja, ilgi radioaktīvie atkritumi, augstas būves izmaksas un ilgs būves laiks, kodolmateriālu kontrole, dzesēšanas ūdens un sabiedrības uzticība.",
    explanationEn: "Benefits: large, steady output, low operating greenhouse-gas emissions, a small fuel volume, and no dependence on the weather. Risks: the possibility of a severe accident, long-lived radioactive waste, high construction cost and a long build time, control of nuclear material, cooling water, and public trust."
  },
  {
    id: 65,
    topic: "Atomelektrostacija",
    topicEn: "Nuclear",
    prompt: "Kādi faktori būtu jāizvērtē, lemjot par atomelektrostacijas būvniecību Latvijā vai Baltijas reģionā?",
    promptEn: "What factors should be weighed when deciding whether to build a nuclear power plant in Latvia or the Baltic region?",
    choices: [],
    answer: null,
    explanation: "Jāvērtē pieprasījums un vieta tīklā, izmaksas un finansējums, būves laiks, seismika un dzesēšanas ūdens, atkritumu glabāšana, avārijas plāns un sabiedrības drošība, speciālisti, importa atkarība, salīdzinājums ar vēju, sauli, gāzi un starpsavienojumiem, kā arī politiskā un juridiskā pieņemamība. Latvijā atomelektrostacijas nav. Šāds lēmums būtu reģionāls, ne tikai vietējs.",
    explanationEn: "Demand and the place in the grid, cost and finance, construction time, seismicity and cooling water, waste storage, the emergency plan and public safety, specialists, import dependence, a comparison with wind, solar, gas, and interconnectors, and political and legal acceptance. Latvia has no nuclear power plant. A decision of this kind would be regional, not only local."
  },
  {
    id: 66,
    topic: "Ūdeņradis",
    topicEn: "Hydrogen",
    prompt: "Kā iegūst ūdeņradi, izmantojot elektrolīzi?",
    promptEn: "How is hydrogen obtained by electrolysis?",
    choices: [],
    answer: null,
    explanation: "Elektrolīzē ūdeni sadala ar līdzstrāvu: 2 H₂O → 2 H₂ + O₂. Skābeklis rodas pie anoda, ūdeņradis pie katoda. Vajag elektrolizeri, tīru ūdeni, elektrolītu vai membrānu un elektrību. Ja elektrība ir no atjaunojamiem avotiem, ūdeņradi sauc par zaļo.",
    explanationEn: "Electrolysis splits water with direct current: 2 H₂O → 2 H₂ + O₂. Oxygen forms at the anode and hydrogen at the cathode. An electrolyzer, clean water, an electrolyte or a membrane, and electricity are needed. If the electricity is renewable, the hydrogen is called green."
  },
  {
    id: 67,
    topic: "Ūdeņradis",
    topicEn: "Hydrogen",
    prompt: "Kāda ir atšķirība starp zaļo, pelēko un zilo ūdeņradi?",
    promptEn: "What is the difference between green, grey, and blue hydrogen?",
    choices: [],
    answer: null,
    explanation: "Zaļais ūdeņradis ir elektrolīze ar atjaunojamo elektrību. Pelēkais rodas no dabasgāzes tvaika reformingā, un CO₂ izlaiž atmosfērā. Zilais arī rodas no dabasgāzes, bet CO₂ uztver un noglabā. Zaļajam ir lielākais klimata ieguvums. Zilais ir atkarīgs no tā, cik pilnīga ir uztveršana. Pelēkais ir emisiju avots.",
    explanationEn: "Green hydrogen is electrolysis powered by renewable electricity. Grey hydrogen comes from steam reforming of natural gas, and the CO₂ is released. Blue hydrogen also comes from natural gas, but the CO₂ is captured and stored. Green hydrogen has the largest climate benefit. Blue hydrogen depends on how complete the capture is. Grey hydrogen is an emission source."
  },
  {
    id: 68,
    topic: "Ūdeņradis",
    topicEn: "Hydrogen",
    prompt: "Kā ūdeņradi iespējams izmantot kurināmā elementos un elektroenerģijas ražošanā?",
    promptEn: "How can hydrogen be used in fuel cells and in electricity generation?",
    choices: [],
    answer: null,
    explanation: "Kurināmā elementā ūdeņradis un skābeklis reaģē līdz elektrībai, ūdenim un siltumam, bez liesmas. Elektrību var lietot uzreiz vai nodot tīklā. Ūdeņradi var arī sadedzināt turbīnā vai dzinējā, kas griež ģeneratoru, bet mazākā mērogā kurināmā elements ir lietderīgāks.",
    explanationEn: "In a fuel cell, hydrogen and oxygen react to electricity, water, and heat, without a flame. The electricity can be used directly or sent to the grid. Hydrogen can also be burned in a turbine or an engine that turns a generator, but at smaller scale a fuel cell is more efficient."
  },
  {
    id: 69,
    topic: "Ūdeņradis",
    topicEn: "Hydrogen",
    prompt: "Kādas ir ūdeņraža izmantošanas priekšrocības un trūkumi salīdzinājumā ar akumulatoriem?",
    promptEn: "What are the advantages and drawbacks of using hydrogen compared with batteries?",
    choices: [],
    answer: null,
    explanation: "Priekšrocības pret akumulatoriem: ātra uzpilde, liela enerģija uz kilogramu, piemērotība smagajam transportam un garam darbam, un izplūdē ir ūdens. Trūkumi: mazs tilpuma blīvums, gāze jāsaspiež vai jāsašķidrina, zemāka ķēdes lietderība (elektrība → ūdeņradis → elektrība), dārgāka infrastruktūra un drošības noteikumi. Vieglajam transportam un īsiem braucieniem akumulators ir lietderīgāks.",
    explanationEn: "Advantages over batteries: fast refuelling, high energy per kilogram, suitability for heavy transport and long duty, and water as the exhaust. Drawbacks: low energy per volume, the gas must be compressed or liquefied, lower chain efficiency (electricity → hydrogen → electricity), costlier infrastructure, and safety rules. A battery is more efficient for light vehicles and short trips."
  },
  {
    id: 70,
    topic: "Ūdeņradis",
    topicEn: "Hydrogen",
    prompt: "Kādas problēmas rada ūdeņraža uzglabāšana, transportēšana un uzpildes infrastruktūras izveide?",
    promptEn: "What problems do hydrogen storage, transport, and refuelling infrastructure create?",
    choices: [],
    answer: null,
    explanation: "Ūdeņradis ir viegls. Mazās molekulas difundē caur materiāliem un padara tēraudu trauslu. Saspiešana līdz simtiem bāru vai sašķidrināšana tuvu −253 °C patērē enerģiju. Vajag īpašas tvertnes, caurules, kompresorus un uzpildes stacijas. Tīkls ir rets un dārgs, un jānovērš noplūdes un sprādziena risks.",
    explanationEn: "Hydrogen is light. The small molecules diffuse through materials and embrittle steel. Compression to hundreds of bar, or liquefaction near −253 °C, costs energy. Special tanks, pipes, compressors, and filling stations are required. The network is rare and expensive, and leaks and explosion risk have to be prevented."
  },
  {
    id: 71,
    topic: "Ūdeņradis",
    topicEn: "Hydrogen",
    prompt: "Kurās nozarēs ūdeņradis varētu būt īpaši noderīgs Latvijas enerģētikā un rūpniecībā?",
    promptEn: "In which sectors could hydrogen be especially useful in Latvia’s energy system and industry?",
    choices: [],
    answer: null,
    explanation: "Smagais transports, autobusi, ostas un dzelzceļš, kur akumulators ir smags. Rūpniecībā amonjaks, metanols un tērauds, kur ūdeņradis ir izejviela vai reducētājs. Enerģētikā vēja un saules pārpalikuma ilgtermiņa uzkrāšana un koģenerācija. Latvijā saprātīgi sākt ar rūpniecības un transporta nišām un ar pārpalikuma elektrības uzkrāšanu, nevis ar akumulatoru aizstāšanu vieglajos automobiļos.",
    explanationEn: "Heavy transport, buses, ports, and rail, where a battery is heavy. In industry, ammonia, methanol, and steel, where hydrogen is a feedstock or a reductant. In the energy system, long-term storage of surplus wind and solar, and combined heat and power. In Latvia it is sensible to start with industry and transport niches and with storing surplus electricity, rather than with replacing batteries in light cars."
  }
];
