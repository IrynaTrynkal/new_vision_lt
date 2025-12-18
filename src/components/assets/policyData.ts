import { TextType } from "./servicesData";

export type PolicyDataType = {
    lt: { content: TextType[] };
    en: { content: TextType[] };
    ru: { content: TextType[] };
};

export const policyData: PolicyDataType = {
    lt: {
        content: [
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        value: "Akių klinika „Naujas regėjimas“",
                    },
                    {
                        value: ", juridinio asmens kodas: 306081994, adresas: Savičiaus g. 3A-42, LT-01127 Vilnius (toliau – mes), saugo savo klientų (toliau – Jūs, Jūsų) asmens duomenis, taikydama aukščiausius techninius ir teisinius apsaugos standartus pagal Europos Sąjungos Bendrąjį duomenų apsaugos reglamentą Nr. 2016/679 bei kitus teisės aktų reikalavimus.",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "1. Kokius asmens duomenis mes renkame, saugome ir naudojame?",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Asmens duomenys leidžia identifikuoti Jūsų asmenį. Tai gali būti:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "vardas, pavardė,",
                    "asmens kodas,",
                    "gyvenamosios vietos adresas,",
                    "telefono numeris, elektroninio pašto adresas,",
                    "banko debetinės arba kreditinės kortelės numeris,",
                    "socialinio draudimo numeris,",
                    "darbovietė,",
                    "sveikatos duomenys,",
                    "bet kokia kita Jūsų pateikta informacija.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Taip pat galime rinkti, saugoti ir naudoti informaciją apie Jūsų apsilankymus mūsų interneto svetainėje (ir/ar mobiliojoje aplikacijoje) bei naudojimąsi ja (įskaitant Jūsų IP adresą, geografinę vietą, naršyklės tipą, nukreipimo šaltinį, lankymosi trukmę ir peržiūrėtų puslapių skaičių).",
            },
            {
                type: "text",
                gap: true,
                text: "Jeigu pateikiate mums kito asmens duomenis, laikome, kad gavote iš jo tinkamą sutikimą dėl tokių duomenų perdavimo.",
            },
            {
                type: "text",
                gap: true,
                text: "Jūsų asmens duomenys gali būti prieinami tik ribotam mūsų klinikos darbuotojų bei IT, marketingo ir teisines paslaugas teikiančių subjektų ratui, ir tik tiek, kiek tai būtina tinkamam Jūsų asmens duomenų tvarkymui. Visiems šiems asmenims galioja griežti konfidencialumo įsipareigojimai.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "2. Kokiu būdu mums tampa prieinami Jūsų asmens duomenys?",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Jūsų asmens duomenys mums tampa prieinami, kai Jūs juos pateikiate:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "mūsų klinikose arba interneto svetainėje užpildydami registracijos formą, pirkdami paslaugas ar prekes, užsakydami konsultaciją,",
                    "susisiekdami su mumis elektroniniu paštu, telefonu, palikdami komentarą ar kitu būdu,",
                    "Jūsų susitikimo metu duomenis taip pat gali pateikti draudimo bendrovės.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "3. Slapukai",
                    },
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.1. Slapukai, signalai ir panašios technologijos",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Šioje Privatumo politikoje terminu „slapukai“ apibūdiname slapukus ir kitas panašias technologijas, pavyzdžiui, pikselių žymas („Pixel Tags“), žiniatinklio indikatorius („Web Beacon“), tinklo duomenų rinkėjus („clear GIF“).",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.2. Slapukų naudojimas",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Lankantis mūsų svetainėje siekiame pateikti turinį ir funkcijas, pritaikytas būtent Jūsų poreikiams. Tam reikalingi slapukai („cookies“). Jie išsaugomi Jūsų naršyklėje ir padeda:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "atpažinti Jus kaip ankstesnį lankytoją,",
                    "išsaugoti Jūsų lankymosi istoriją ir pagal ją pritaikyti turinį,",
                    "užtikrinti sklandų svetainės veikimą,",
                    "stebėti apsilankymų trukmę, dažnumą, rinkti statistinę informaciją.",
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.3. Slapukų tipai",
                    },
                ],
            },
            {
                type: "list",
                gap: true,
                list: [
                    [
                        { bold: true, value: "Būtini slapukai " },
                        {
                            value: "– užtikrina svetainės pagrindines funkcijas ir saugių sričių prieigą.",
                        },
                    ],
                    [
                        { bold: true, value: "Veiklos slapukai " },
                        {
                            value: "– renka anoniminę informaciją apie tai, kaip naudojamasi svetaine (aplankytos sritys, praleistas laikas, klaidų pranešimai).",
                        },
                    ],
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.4. Slapukų pagalba renkami duomenys",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Administruodami svetainę bei diagnozuodami sutrikimus serveriuose, galime naudoti lankytojų IP adresus. IP adresas – tai unikalus kompiuterio kodas tinkluose, leidžiantis identifikuoti lankytoją bei rinkti demografinę informaciją.",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.5. Kaip valdyti slapukus",
                    },
                ],
            },
            {
                type: "text",
                text: "Naudodami naršyklę galite pasirinkti priimti visus slapukus, atmesti visus arba gauti pranešimą, kai slapukas siunčiamas. Jei nenorite, kad jie būtų renkami, daugelyje naršyklių galite atlikti paprastą procedūrą ir jų atsisakyti.",
            },
            {
                type: "text",
                gap: true,
                text: "Daugiau informacijos: www.allaboutcookies.org/manage-cookies.",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.6. Trečiųjų šalių slapukai",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Mūsų svetainėje trečiosioms šalims leidžiama nustatyti slapukus Jūsų kompiuteryje. Tokiu atveju galioja jų privatumo politika.",
            },
            {
                type: "text",
                gap: true,
                text: "Pastaba: klinikos „Facebook“ paskyroms taikoma „Facebook“ slapukų politika.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        value: "3.7. Naudojami slapukai",
                    },
                ],
            },
            {
                type: "table",
                gap: true,
                headers: [
                    "Slapuko pavadinimas",
                    "Tikslas",
                    "Sukūrimo momentas",
                    "Galiojimo laikas",
                    "Duomenys",
                ],
                rows: [
                    [
                        "PHPSESSID",
                        "Vartotojo sesijos ID",
                        "Įeinant į puslapį",
                        "Sesijos metu",
                        "Unikalus raktas",
                    ],
                    [
                        "viewed_cookie_policy	",
                        "Saugoti vartotojo sutikimą su privatumo politika",
                        "Patvirtinus",
                        "365 dienos",
                        "Reikšmė „yes“",
                    ],
                    [
                        "notification",
                        "Žymi, ar pranešimas/forma jau buvo uždaryta",
                        "Užpildžius formą",
                        "7 dienos",
                        "Reikšmė «closed»",
                    ],
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.8. Partnerių sąrašas",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Google, Facebook, Cloudflare, AdTarget, AdnetMedia, Delfi, Hotjar, LiveChat (nuorodos pateiktos svetainėje).",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "4. Jūsų asmens duomenų naudojimo tikslai",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Jūsų duomenys naudojami:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "suteikiant užsakytą paslaugą,",
                    "teikiant konsultaciją (mokamą ar nemokamą),",
                    "tiesioginei rinkodarai (tik Jūsų sutikimu),",
                    "užklausų administravimui,",
                    "vizitų registracijai.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "5. Saugojimo terminas",
                    },
                ],
            },
            {
                type: "text",
                text: [
                    { value: "Asmens duomenis saugome " },
                    { bold: true, value: "10 metų nuo paskutinio apsilankymo" },
                    { value: " klinikoje „Naujas regėjimas“." },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        value: "Vizitų registravimo ir užklausų administravimo tikslu – ",
                    },
                    { bold: true, value: "1 metus" },
                    { value: "." },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "6. Jūsų teisės",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Jūs turite teisę:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "gauti informaciją apie duomenų tvarkymą,",
                    "susipažinti su savo duomenimis,",
                    "reikalauti ištaisyti ar ištrinti duomenis,",
                    "nesutikti su duomenų tvarkymu (įskaitant tiesioginę rinkodarą),",
                    "pasinaudoti teise būti pamirštam,",
                    "prašyti duomenų perkėlimo,",
                    "pateikti skundą Valstybinei duomenų apsaugos inspekcijai.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "7. Kur kreiptis?",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        value: "Kilus klausimams rašykite: ",
                    },
                    { bold: true, value: "registratura@eyes.lt" },
                    { value: "." },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "8. Politikos pakeitimai",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        value: "Klinika „Naujas regėjimas“ pasilieka teisę iš dalies ar visiškai keisti privatumo politiką, apie tai paskelbdama svetainėje ",
                    },
                    { bold: true, value: "www.eyes.lt" },
                    { value: "." },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Tolesnis svetainės naudojimas reiškia Jūsų sutikimą su politika. Ginčai sprendžiami derybų būdu, o nepavykus susitarti – pagal Lietuvos Respublikos įstatymus.",
            },
        ],
    },
    en: {
        content: [
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        value: "The Eye Clinic “Naujas regėjimas”",
                    },
                    {
                        value: ", legal entity code: 306081994, address: Savičiaus g. 3A-42, LT-01127 Vilnius (hereinafter – we), protects the personal data of its clients (hereinafter – you, your), applying the highest technical and legal protection standards in accordance with the European Union General Data Protection Regulation No. 2016/679 (GDPR) and other applicable legal requirements.",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "1. What personal data do we collect, store and use?",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Personal data makes it possible to identify you as an individual. This may include:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "first name, surname,",
                    "personal identification number,",
                    "residential address,",
                    "telephone number, email address,",
                    "debit or credit card number,",
                    "social security number,",
                    "place of employment,",
                    "health data,",
                    "any other information you provide.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: "We may also collect, store and use information about your visits to our website (and/or mobile application) and your use of it (including your IP address, geographic location, browser type, referral source, duration of visits, and number of page views).",
            },
            {
                type: "text",
                gap: true,
                text: "If you provide us with another person’s data, we assume that you have obtained their proper consent for the transfer of such data.",
            },
            {
                type: "text",
                gap: true,
                text: "Your personal data may only be accessible to a limited group of our clinic’s employees, as well as IT, marketing, and legal service providers, and only to the extent necessary for the proper processing of your data. All such persons are bound by strict confidentiality obligations.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "2. How do we gain access to your personal data?",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Your personal data becomes accessible to us when you:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "fill in registration forms on our website or at our clinic, purchase services/products, or request a consultation,",
                    "contact us via email, telephone, by leaving a comment, or in any other way,",
                    "during your appointment, data may also be provided by insurance companies.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "3. Cookies",
                    },
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.1. Cookies, signals and similar technologies",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "In this Privacy Policy, the term “cookies” also refers to similar technologies such as pixel tags, web beacons, and clear GIFs.",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.2. Use of cookies",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "When you visit our website, we aim to provide content and features tailored to your needs. For this purpose, cookies are required. They are stored in your browser and help to:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "recognize you as a returning visitor,",
                    "save your browsing history and adapt content accordingly,",
                    "ensure the smooth operation of the website,",
                    "track visit duration, frequency, and gather statistical information.",
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.3. Types of cookies",
                    },
                ],
            },
            {
                type: "list",
                gap: true,
                list: [
                    [
                        { bold: true, value: "Necessary cookies " },
                        {
                            value: "– strictly required to enable basic website functions and access to secure areas.",
                        },
                    ],
                    [
                        { bold: true, value: "Performance cookies " },
                        {
                            value: "– collect anonymous information about how visitors use the site (visited sections, time spent, error messages).",
                        },
                    ],
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.4. Data collected with cookies",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "For administration and server diagnostics, we may use visitors’ IP addresses. An IP address is a unique code identifying a computer in networks, allowing user identification and the collection of demographic information.",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.5. Managing cookies",
                    },
                ],
            },
            {
                type: "text",
                text: "You can configure your browser to accept all cookies, reject all cookies, or notify you when a cookie is sent. If you do not wish cookies to be collected, most browsers allow you to opt out.",
            },
            {
                type: "text",
                gap: true,
                text: "For more information: www.allaboutcookies.org/manage-cookies.",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.6. Third-party cookies",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Our website allows certain third parties to set cookies on your device. In such cases, third-party privacy policies apply.",
            },
            {
                type: "text",
                gap: true,
                text: "Note: our clinic’s Facebook pages are subject to Facebook’s cookie policy.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        value: "3.7. Cookies used on our website",
                    },
                ],
            },
            {
                type: "table",
                gap: true,
                headers: [
                    "Cookie name",
                    "Purpose",
                    "Time of creation",
                    "Validity",
                    "Data used",
                ],
                rows: [
                    [
                        "PHPSESSID",
                        "User session ID",
                        "On entering the site",
                        "During session",
                        "Unique key",
                    ],
                    [
                        "viewed_cookie_policy	",
                        "Stores user’s consent to privacy policy",
                        "Upon confirmation",
                        "365 days",
                        "Value «yes»",
                    ],
                    [
                        "notification",
                        "Marks if a form/notification has been closed",
                        "After form submission",
                        "7 days",
                        "Value «closed»",
                    ],
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.8. Partners",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Google, Facebook, Cloudflare, AdTarget, AdnetMedia, Delfi, Hotjar, LiveChat (links provided on the website).",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "4. Purposes of personal data use",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Your data will be used for the following purposes:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "providing the service you have ordered,",
                    "providing a consultation (paid or free),",
                    "direct marketing (only with your consent),",
                    "administration of inquiries,",
                    "registration of visits.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "5. Data retention period",
                    },
                ],
            },
            {
                type: "text",
                text: [
                    { value: "We store your personal data for " },
                    {
                        bold: true,
                        value: "10 years from the date of your last visit",
                    },
                    { value: " to the clinic “Naujas regėjimas”." },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        value: "For visit registration and inquiry administration – ",
                    },
                    { bold: true, value: "1 year" },
                    { value: "." },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "6. Your rights",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "You have the right to:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "be informed about the processing of your data,",
                    "access your data,",
                    "request correction or deletion of your data,",
                    "object to the processing of your data (including for direct marketing),",
                    "exercise the “right to be forgotten”,",
                    "request data portability (in a commonly used, machine-readable format),",
                    "lodge a complaint with the State Data Protection Inspectorate.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "7. Contact information",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        value: "For any inquiries regarding the processing of personal data, please write to: ",
                    },
                    { bold: true, value: "registratura@eyes.lt" },
                    { value: "." },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "8. Policy changes",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        value: "The clinic “Naujas regėjimas” reserves the right to partially or fully amend this Privacy Policy by publishing updates on the website ",
                    },
                    { bold: true, value: "www.eyes.lt" },
                    { value: "." },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Continued use of the website constitutes acceptance of this policy. Any disputes shall be resolved through negotiations, and failing that – in accordance with the laws of the Republic of Lithuania.",
            },
        ],
    },
    ru: {
        content: [
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        value: "Глазная клиника «Naujas regėjimas»",
                    },
                    {
                        value: ", код юридического лица: 306081994, адрес: Savičiaus g. 3A-42, LT-01127 Вильнюс (далее – мы), защищает персональные данные своих клиентов (далее – Вы, Ваши), применяя высочайшие технические и правовые стандарты защиты в соответствии с Общим регламентом Европейского Союза по защите данных № 2016/679 (GDPR) и другими требованиями законодательства.",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "1. Какие персональные данные мы собираем, храним и используем?",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Персональные данные позволяют идентифицировать Вас как личность. Это могут быть:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "имя, фамилия,",
                    "персональный код,",
                    "адрес проживания,",
                    "номер телефона, адрес электронной почты,",
                    "номер дебетовой или кредитной карты,",
                    "номер социального страхования,",
                    "место работы,",
                    "данные о здоровье,",
                    "любая другая предоставленная Вами информация.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Также мы можем собирать, хранить и использовать информацию о Ваших посещениях нашего сайта (и/или мобильного приложения) и его использовании (включая IP-адрес, географическое местоположение, тип браузера, источник перехода, продолжительность визита и количество просмотренных страниц).",
            },
            {
                type: "text",
                gap: true,
                text: "Если Вы предоставляете нам данные другого лица, мы считаем, что Вы получили от него надлежащее согласие на их передачу.",
            },
            {
                type: "text",
                gap: true,
                text: "Ваши персональные данные могут быть доступны только ограниченному кругу сотрудников нашей клиники, а также ИТ-специалистам, субъектам, оказывающим маркетинговые и юридические услуги, и только в объёме, необходимом для правильной обработки Ваших данных. Все эти лица связаны строгими обязательствами по сохранению конфиденциальности.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "2. Каким образом нам становятся доступны Ваши персональные данные?",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Ваши персональные данные становятся нам доступны, когда Вы:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "заполняете регистрационную форму на нашем сайте или в клинике, приобретаете услуги/товары, заказываете консультацию,",
                    "обращаетесь к нам по электронной почте, телефону, оставляете комментарий или связываетесь иным способом,",
                    "во время Вашего визита данные также могут быть предоставлены страховыми компаниями.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "3. Файлы cookie",
                    },
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.1. Cookie, сигналы и аналогичные технологии",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "В настоящей Политике под термином «cookie» мы понимаем файлы cookie и аналогичные технологии, такие как пиксельные метки («Pixel Tags»), веб-маяки («Web Beacon»), сетевые сборщики данных («clear GIF»).",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.2. Использование cookie",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "При посещении нашего сайта мы стремимся предоставить Вам контент и функции, максимально соответствующие Вашим потребностям. Для этого необходимы cookie («cookies»). Они сохраняются в Вашем браузере и помогают:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "распознать Вас как предыдущего посетителя,",
                    "сохранить историю посещений и на её основе адаптировать контент,",
                    "обеспечить бесперебойную работу сайта,",
                    "отслеживать продолжительность и частоту посещений, собирать статистику.",
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.3. Виды cookie",
                    },
                ],
            },
            {
                type: "list",
                gap: true,
                list: [
                    [
                        { bold: true, value: "Необходимые cookie " },
                        {
                            value: "– обеспечивают базовые функции сайта и доступ к защищённым разделам.",
                        },
                    ],
                    [
                        { bold: true, value: "Функциональные cookie " },
                        {
                            value: "– собирают анонимную информацию о том, как используется сайт (посещённые разделы, время пребывания, сообщения об ошибках).",
                        },
                    ],
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.4. Данные, собираемые с помощью cookie",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "При администрировании сайта и диагностике сбоев серверов мы можем использовать IP-адреса посетителей. IP-адрес – это уникальный код компьютера в сети, позволяющий идентифицировать пользователя и собирать демографическую информацию",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.5. Управление cookie",
                    },
                ],
            },
            {
                type: "text",
                text: "Вы можете настроить браузер так, чтобы он принимал все cookie, отклонял их или уведомлял о получении. Если Вы не хотите, чтобы cookie собирались, большинство браузеров позволяет легко отказаться от них.",
            },
            {
                type: "text",
                gap: true,
                text: "Подробнее: www.allaboutcookies.org/manage-cookies.",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.6. Cookie третьих лиц",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "На нашем сайте третьим лицам разрешено устанавливать cookie на Вашем устройстве. В таком случае применяются их правила конфиденциальности.",
            },
            {
                type: "text",
                gap: true,
                text: "Примечание: для страниц клиники в «Facebook» действует политика cookie компании Facebook.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        value: "3.7. Используемые cookie",
                    },
                ],
            },
            {
                type: "table",
                gap: true,
                headers: [
                    "Название cookie",
                    "Цель обработки",
                    "Момент создания",
                    "Срок действия",
                    "Данные",
                ],
                rows: [
                    [
                        "PHPSESSID",
                        "ID пользовательской сессии",
                        "При входе на сайт",
                        "В течение сессии",
                        "Уникальный ключ",
                    ],
                    [
                        "viewed_cookie_policy	",
                        "Хранит согласие пользователя с политикой конфиденциальности",
                        "После подтверждения",
                        "365 дней",
                        "Значение «yes»",
                    ],
                    [
                        "notification",
                        "Отмечает, была ли форма/уведомление закрыта",
                        "После отправки формы",
                        "7 дней",
                        "Значение «closed»",
                    ],
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "3.8. Партнёры",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Google, Facebook, Cloudflare, AdTarget, AdnetMedia, Delfi, Hotjar, LiveChat (ссылки доступны на сайте).",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "4. Цели использования персональных данных",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Ваши данные используются для:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "оказания заказанной услуги,",
                    "предоставления консультации (платной или бесплатной),",
                    "прямого маркетинга (только при Вашем согласии),",
                    "администрирования запросов,",
                    "регистрации визитов.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "5. Срок хранения",
                    },
                ],
            },
            {
                type: "text",
                text: [
                    { value: "Мы храним персональные данные " },
                    { bold: true, value: "10 лет с момента последнего визита" },
                    { value: " в клинику «Naujas regėjimas»." },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        value: "Для регистрации визитов и администрирования запросов – ",
                    },
                    { bold: true, value: "1 год" },
                    { value: "." },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "6. Ваши права",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Вы имеете право:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "знать о том, как обрабатываются Ваши данные,",
                    "ознакомиться со своими данными,",
                    "требовать исправления или удаления данных,",
                    "возражать против их обработки (включая маркетинг),",
                    "воспользоваться «правом быть забытым»,",
                    "запросить перенос данных (в машиночитаемом формате),",
                    "подать жалобу в Государственную инспекцию по защите данных.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "7. Куда обращаться?",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        value: "По любым вопросам, связанным с обработкой персональных данных, пишите на ",
                    },
                    { bold: true, value: "registratura@eyes.lt" },
                    { value: "." },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "8. Изменения политики конфиденциальности",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        value: "Клиника «Naujas regėjimas» оставляет за собой право частично или полностью изменять настоящую политику конфиденциальности, размещая информацию на сайте ",
                    },
                    { bold: true, value: "www.eyes.lt" },
                    { value: "." },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Дальнейшее использование сайта означает Ваше согласие с политикой. Споры решаются путём переговоров, а при недостижении согласия – в соответствии с законодательством Литовской Республики.",
            },
        ],
    },
};

export const cookiesData: PolicyDataType = {
    lt: {
        content: [
            {
                type: "text",
                gap: true,
                text: "Įsigaliojimo data: 2025 m. spalio 11 d.",
            },
            {
                type: "text",
                gap: true,
                text: "Paskutinį kartą atnaujinta: 2025 m. spalio 11 d.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "Kas yra slapukai?",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Šioje Slapukų politikoje paaiškinama, kas yra slapukai, kaip mes juos naudojame, kokių tipų slapukus naudojame (t. y. kokią informaciją renkame naudodami slapukus ir kaip ši informacija naudojama) bei kaip galite valdyti slapukų nustatymus.",
            },
            {
                type: "text",
                gap: true,
                text: "Slapukai – tai maži tekstiniai failai, skirti saugoti nedidelius informacijos kiekius. Jie išsaugomi jūsų įrenginyje, kai svetainė įkeliama jūsų naršyklėje. Šie slapukai padeda užtikrinti tinkamą svetainės veikimą, padidina saugumą, pagerina naudotojo patirtį ir leidžia analizuoti veikimą, siekiant nustatyti, kas veikia gerai ir kur reikalingi patobulinimai.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "2. Kaip mes naudojame slapukus?",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Kaip ir dauguma internetinių paslaugų, mūsų svetainė naudoja tiek pirmosios, tiek trečiosios šalies slapukus įvairiais tikslais. Pirmosios šalies slapukai daugiausia yra būtini tinkamam svetainės veikimui ir nerenka jokios asmenį identifikuojančios informacijos.",
            },
            {
                type: "text",
                gap: true,
                text: "Trečiųjų šalių slapukai, naudojami mūsų svetainėje, daugiausia padeda suprasti, kaip veikia svetainė, stebėti jūsų sąveiką su ja, užtikrinti mūsų paslaugų saugumą, pateikti aktualią reklamą ir pagerinti bendrą naudotojo patirtį bei būsimų sąveikų su svetaine greitį.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "Naudojamų slapukų tipai",
                    },
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "Būtini",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Būtini slapukai reikalingi pagrindinėms svetainės funkcijoms užtikrinti, pavyzdžiui, saugiam prisijungimui ar jūsų sutikimo nuostatų išsaugojimui. Šie slapukai nesaugo jokios asmenį identifikuojančios informacijos.",
            },
            {
                type: "table",
                gap: true,
                headers: ["Slapukas", "Galiojimo trukmė", "Aprašymas"],
                rows: [
                    [
                        "elementor",
                        "Niekada nesibaigia",
                        "Svetainės „WordPress“ tema naudoja šį slapuką. Jis leidžia svetainės savininkui realiuoju laiku įgyvendinti arba keisti svetainės turinį.",
                    ],
                    [
                        "rc::a",
                        "Niekada nesibaigia",
                        "Šį slapuką nustato „Google reCAPTCHA“ paslauga, siekiant atpažinti robotus ir apsaugoti svetainę nuo kenkėjiškų šlamšto atakų.",
                    ],
                    [
                        "rc::c",
                        "Sesija",
                        "Šį slapuką nustato „Google reCAPTCHA“ paslauga, siekiant atpažinti robotus ir apsaugoti svetainę nuo kenkėjiškų šlamšto atakų.",
                    ],
                    [
                        "cookieyes-consent",
                        "1 metai",
                        "„CookieYes“ nustato šį slapuką, kad išsaugotų naudotojų sutikimo nuostatas ir užtikrintų jų laikymąsi per vėlesnius apsilankymus svetainėje. Jis nerenka ir nesaugo jokios asmeninės informacijos.",
                    ],
                    [
                        "ep201",
                        "1 valanda",
                        "Šį slapuką nustato „Wufoo“ apkrovos balansavimui, svetainės srauto analizei ir piktnaudžiavimo prevencijai.",
                    ],
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "Analitiniai",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Analitiniai slapukai naudojami siekiant suprasti, kaip lankytojai sąveikauja su svetaine. Šie slapukai teikia informaciją apie tokius rodiklius kaip lankytojų skaičius, atmetimo rodiklis, srauto šaltinis ir kt.",
            },
            {
                type: "table",
                gap: true,
                headers: ["Slapukas", "Galiojimo trukmė", "Aprašymas"],
                rows: [
                    [
                        "_ga_*",
                        "1 metai 1 mėnuo 4 dienos",
                        "„Google Analytics“ nustato šį slapuką puslapių peržiūrų saugojimui ir skaičiavimui.",
                    ],
                    [
                        "_ga",
                        "1 metai 1 mėnuo 4 dienos",
                        "„Google Analytics“ nustato šį slapuką lankytojų, sesijų ir kampanijų duomenims skaičiuoti bei svetainės naudojimui stebėti. Slapukas saugo informaciją anonimiškai ir priskiria atsitiktinai sugeneruotą numerį unikaliems lankytojams atpažinti.",
                    ],
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "Reklaminiai",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Reklaminiai slapukai naudojami lankytojams pateikti suasmenintą reklamą, pagrįstą anksčiau aplankytais puslapiais, ir analizuoti reklaminių kampanijų efektyvumą.",
            },
            {
                type: "table",
                gap: true,
                headers: ["Slapukas", "Galiojimo trukmė", "Aprašymas"],
                rows: [
                    [
                        "_gcl_au",
                        "3 mėnesiai",
                        "„Google Tag Manager“ nustato šį slapuką reklamos efektyvumui vertinti svetainėse, naudojančiose jų paslaugas.",
                    ],
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "Slapukų nuostatų valdymas",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Sutikimo nuostatos",
            },
            {
                type: "text",
                gap: true,
                text: "Bet kuriuo metu galite keisti slapukų nustatymus paspaudę aukščiau esantį mygtuką „Sutikimo nuostatos“. Tai leis jums iš naujo peržiūrėti slapukų sutikimo juostą ir atnaujinti savo nuostatas arba nedelsiant atšaukti sutikimą.",
            },
            {
                type: "text",
                gap: true,
                text: "Be to, skirtingos naršyklės siūlo įvairius būdus blokuoti ir ištrinti svetainių naudojamus slapukus. Galite pakeisti naršyklės nustatymus, kad blokuotumėte arba ištrintumėte slapukus. Žemiau pateikiamos nuorodos į pagrindinių naršyklių pagalbos dokumentus, kuriuose aprašoma, kaip valdyti ir ištrinti slapukus.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    { bold: true, value: "Chrome: " },
                    {
                        link: "https://support.google.com/chrome/answer/95647?hl=en",
                        value: "https://support.google.com/chrome/answer/95647?hl=en",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    { bold: true, value: "Safari: " },
                    {
                        link: "https://support.apple.com/en-in/guide/safari/sfri11471/mac",
                        value: "https://support.apple.com/en-in/guide/safari/sfri11471/mac",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    { bold: true, value: "Firefox: " },
                    {
                        link: "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US",
                        value: "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    { bold: true, value: "Internet Explorer: " },
                    {
                        link: "https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc",
                        value: "https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Jeigu naudojate kitą interneto naršyklę, prašome kreiptis į jos oficialią pagalbos dokumentaciją.",
            },
            {
                type: "text",
                gap: true,
                text: "Slapukų politika sugeneruota naudojant CookieYes – Cookie Policy Generator",
            },
        ],
    },
    en: {
        content: [
            {
                type: "text",
                gap: true,
                text: "Effective date: October 11, 2025",
            },
            {
                type: "text",
                gap: true,
                text: "Last updated: October 11, 2025",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "What are cookies?",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "This Cookie Policy explains what cookies are, how we use them, the types of cookies we use (i.e., the information we collect using cookies and how that information is used), and how to manage your cookie settings.",
            },
            {
                type: "text",
                gap: true,
                text: "Cookies are small text files used to store small pieces of information. They are stored on your device when a website loads in your browser. These cookies help ensure that the website functions properly, enhance security, provide a better user experience, and analyse performance to identify what works and where improvements are needed.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "2. How do we use cookies?",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Like most online services, our website uses both first-party and third-party cookies for various purposes. First-party cookies are primarily necessary for the website to function properly and do not collect any personally identifiable data.",
            },
            {
                type: "text",
                gap: true,
                text: "The third-party cookies used on our website primarily help us understand how the website performs, track how you interact with it, keep our services secure, deliver relevant advertisements, and enhance your overall user experience while improving the speed of your future interactions with our website.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "Types of cookies we use",
                    },
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "Necessary",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.",
            },
            {
                type: "table",
                gap: true,
                headers: ["Cookie", "Duration", "Description"],
                rows: [
                    [
                        "elementor",
                        "Never Expires",
                        "The website’s WordPress theme uses this cookie. It allows the website owner to implement or change the website’s content in real-time.",
                    ],
                    [
                        "rc::a",
                        "Never Expires",
                        "This cookie is set by the Google recaptcha service to identify bots to protect the website against malicious spam attacks.",
                    ],
                    [
                        "rc::c",
                        "session",
                        "This cookie is set by the Google recaptcha service to identify bots to protect the website against malicious spam attacks.",
                    ],
                    [
                        "cookieyes-consent",
                        "1 year",
                        "CookieYes sets this cookie to remember users’ consent preferences so that their preferences are respected on subsequent visits to this site. It does not collect or store any personal information about the site visitors.",
                    ],
                    [
                        "ep201",
                        "1 hour",
                        "This cookie is set by Wufoo for load balancing, site traffic and preventing site abuse.",
                    ],
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "Analytics",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.",
            },
            {
                type: "table",
                gap: true,
                headers: ["Cookie", "Duration", "Description"],
                rows: [
                    [
                        "_ga_*",
                        "1 year 1 month 4 days",
                        "Google Analytics sets this cookie to store and count page views.",
                    ],
                    [
                        "_ga",
                        "1 year 1 month 4 days",
                        "Google Analytics sets this cookie to calculate visitor, session and campaign data and track site usage for the site’s analytics report. The cookie stores information anonymously and assigns a randomly generated number to recognise unique visitors.",
                    ],
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "Advertisement",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Advertisement cookies are used to provide visitors with customized advertisements based on the pages you visited previously and to analyze the effectiveness of the ad campaigns.",
            },
            {
                type: "table",
                gap: true,
                headers: ["Cookie", "Duration", "Description"],
                rows: [
                    [
                        "_gcl_au",
                        "3 months",
                        "Google Tag Manager sets this cookie to experiment advertisement efficiency of websites using their services.",
                    ],
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "Manage cookie preferences",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Consent Preferences",
            },
            {
                type: "text",
                gap: true,
                text: "You can modify your cookie settings anytime by clicking the ‘Consent Preferences’ button above. This will allow you to revisit the cookie consent banner and update your preferences or withdraw your consent immediately.",
            },
            {
                type: "text",
                gap: true,
                text: "Additionally, different browsers offer various methods to block and delete cookies used by websites. You can adjust your browser settings to block or delete cookies. Below are links to support documents on how to manage and delete cookies in major web browsers.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    { bold: true, value: "Chrome: " },
                    {
                        link: "https://support.google.com/chrome/answer/95647?hl=en",
                        value: "https://support.google.com/chrome/answer/95647?hl=en",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    { bold: true, value: "Safari: " },
                    {
                        link: "https://support.apple.com/en-in/guide/safari/sfri11471/mac",
                        value: "https://support.apple.com/en-in/guide/safari/sfri11471/mac",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    { bold: true, value: "Firefox: " },
                    {
                        link: "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US",
                        value: "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    { bold: true, value: "Internet Explorer: " },
                    {
                        link: "https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc",
                        value: "https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "If you are using a different web browser, please refer to its official support documentation.",
            },
            {
                type: "text",
                gap: true,
                text: "Cookie Policy generated by CookieYes – Cookie Policy Generator",
            },
        ],
    },
    ru: {
        content: [
            {
                type: "text",
                gap: true,
                text: "Дата вступления в силу: 11 октября 2025 г.",
            },
            {
                type: "text",
                gap: true,
                text: "Последнее обновление: 11 октября 2025 г.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "Что такое файлы cookie?",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Настоящая Политика использования файлов cookie объясняет, что такое файлы cookie, как мы их используем, какие типы файлов cookie мы применяем (то есть какую информацию мы собираем с их помощью и как она используется), а также как вы можете управлять настройками cookie.",
            },
            {
                type: "text",
                gap: true,
                text: "Файлы cookie — это небольшие текстовые файлы, предназначенные для хранения небольших объёмов информации. Они сохраняются на вашем устройстве при загрузке веб-сайта в браузере. Эти файлы cookie помогают обеспечить корректную работу сайта, повысить безопасность, улучшить пользовательский опыт и проанализировать производительность для выявления областей, требующих улучшения.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "2. Как мы используем файлы cookie?",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Как и большинство онлайн-сервисов, наш сайт использует как собственные, так и сторонние файлы cookie для различных целей. Собственные файлы cookie в основном необходимы для корректной работы сайта и не собирают персональные данные.",
            },
            {
                type: "text",
                gap: true,
                text: "Сторонние файлы cookie, используемые на нашем сайте, помогают нам понимать, как работает сайт, отслеживать ваше взаимодействие с ним, обеспечивать безопасность наших сервисов, показывать релевантную рекламу и улучшать общий пользовательский опыт, а также ускорять последующие взаимодействия с сайтом.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "Типы используемых файлов cookie",
                    },
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "Необходимые",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Необходимые файлы cookie требуются для обеспечения базовых функций сайта, таких как безопасный вход или сохранение ваших предпочтений согласия. Эти файлы cookie не хранят персональные данные.",
            },
            {
                type: "table",
                gap: true,
                lowrcaseHeaders: true,
                headers: ["Cookie", "Срок действия", "Описание"],
                rows: [
                    [
                        "elementor",
                        "Никогда не истекает",
                        "Тема WordPress сайта использует этот файл cookie. Он позволяет владельцу сайта в реальном времени внедрять или изменять контент сайта.",
                    ],
                    [
                        "rc::a",
                        "Никогда не истекает",
                        "Этот файл cookie устанавливается сервисом Google reCAPTCHA для выявления ботов и защиты сайта от вредоносных спам-атак.",
                    ],
                    [
                        "rc::c",
                        "Сессия",
                        "Этот файл cookie устанавливается сервисом Google reCAPTCHA для выявления ботов и защиты сайта от вредоносных спам-атак.",
                    ],
                    [
                        "cookieyes-consent",
                        "1 год",
                        "CookieYes устанавливает этот файл cookie для запоминания предпочтений согласия пользователей, чтобы они соблюдались при последующих посещениях сайта. Он не собирает и не хранит персональные данные.",
                    ],
                    [
                        "ep201",
                        "1 час",
                        "Этот файл cookie устанавливается Wufoo для балансировки нагрузки, анализа трафика сайта и предотвращения злоупотреблений.",
                    ],
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "Аналитические",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Аналитические файлы cookie используются для понимания того, как посетители взаимодействуют с сайтом. Эти файлы cookie помогают получать информацию о таких показателях, как количество посетителей, показатель отказов, источник трафика и т.д.",
            },
            {
                type: "table",
                gap: true,
                lowrcaseHeaders: true,
                headers: ["Cookie", "Срок действия", "Описание"],
                rows: [
                    [
                        "_ga_*",
                        "1 год 1 месяц 4 дня",
                        "Google Analytics устанавливает этот файл cookie для хранения и подсчёта просмотров страниц.",
                    ],
                    [
                        "_ga",
                        "1 год 1 месяц 4 дня",
                        "Google Analytics устанавливает этот файл cookie для расчёта данных о посетителях, сессиях и кампаниях, а также для отслеживания использования сайта. Файл cookie хранит информацию анонимно и присваивает случайно сгенерированный номер для распознавания уникальных посетителей.",
                    ],
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "Рекламные",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Рекламные файлы cookie используются для показа пользователям персонализированной рекламы на основе ранее посещённых страниц и для анализа эффективности рекламных кампаний.",
            },
            {
                type: "table",
                gap: true,
                lowrcaseHeaders: true,
                headers: ["Cookie", "Срок действия", "Описание"],
                rows: [
                    [
                        "_gcl_au",
                        "3 месяца",
                        "Google Tag Manager устанавливает этот файл cookie для оценки эффективности рекламы на сайтах, использующих их сервисы.",
                    ],
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "Управление настройками cookie",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Настройки согласия",
            },
            {
                type: "text",
                gap: true,
                text: "Вы можете изменить настройки файлов cookie в любое время, нажав кнопку «Настройки согласия» выше. Это позволит вам снова открыть баннер согласия на использование cookie и обновить свои предпочтения или немедленно отозвать согласие.",
            },
            {
                type: "text",
                gap: true,
                text: "Кроме того, разные браузеры предлагают различные способы блокировки и удаления файлов cookie, используемых веб-сайтами. Вы можете изменить настройки браузера для блокировки или удаления файлов cookie. Ниже приведены ссылки на справочные материалы по управлению и удалению файлов cookie в популярных браузерах.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    { bold: true, value: "Chrome: " },
                    {
                        link: "https://support.google.com/chrome/answer/95647?hl=en",
                        value: "https://support.google.com/chrome/answer/95647?hl=en",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    { bold: true, value: "Safari: " },
                    {
                        link: "https://support.apple.com/en-in/guide/safari/sfri11471/mac",
                        value: "https://support.apple.com/en-in/guide/safari/sfri11471/mac",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    { bold: true, value: "Firefox: " },
                    {
                        link: "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US",
                        value: "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    { bold: true, value: "Internet Explorer: " },
                    {
                        link: "https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc",
                        value: "https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Если вы используете другой веб-браузер, пожалуйста, обратитесь к его официальной документации поддержки.",
            },
            {
                type: "text",
                gap: true,
                text: "Политика использования файлов cookie создана с помощью CookieYes – Cookie Policy Generator",
            },
        ],
    },
};

export const partPayData: PolicyDataType = {
    lt: {
        content: [
            {
                type: "text",
                gap: true,
                text: [
                    {
                        subtitle: true,
                        value: "„GENERAL FINANCING“ BANKO „MEDLIZINGAS“",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Planuotoms ir neplanuotoms medicininėms išlaidoms, medicininėms priemonėms ar sveikatinimo procedūroms.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "Pasirinkę MEDLIZINGO paslaugą, galėsite:",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "✔️ pasiskolinti iki 25 000 €;",
            },
            {
                type: "text",
                gap: true,
                text: "✔️ pirmą įmoką atidėti iki 3 mėn.;",
            },
            {
                type: "text",
                gap: true,
                text: "✔️ išskaidyti įmokas 7 metų laikotarpiui;",
            },
            {
                type: "text",
                gap: true,
                text: "✔️ išskaidyti įmokas 7 metų laikotarpiui;",
            },
            {
                type: "text",
                gap: true,
                text: "✔️ papildomai pasirinkti kredito gavėjų sveikatos ir gyvybės draudimą.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "MEDLIZINGO sutartis – greitai ir patogiai!",
                    },
                ],
            },
            {
                type: "text",

                text: [
                    { bold: true, subtitle: true, value: "1. " },
                    {
                        value: "Kreipkitės į klinikos darbuotoją – jis užpildys reikalingus duomenis.",
                    },
                ],
            },
            {
                type: "text",

                text: [
                    { bold: true, subtitle: true, value: "2. " },
                    {
                        value: "Su Jumis telefonu susisieks banko „GENERAL FINANCING“ darbuotojas, kuris atliks Jūsų kreditingumo įvertinimą.",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    { bold: true, subtitle: true, value: "3. " },
                    {
                        value: "Sudarius sutartį, bankas atliks pinigų pervedimą į klinikos sąskaitą.",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "Paslauga gali pasinaudoti asmenys:",
                    },
                ],
            },
            {
                type: "list",
                gap: true,
                list: [
                    "dirbantys pagal darbo sutartį;",
                    "dirbantys pagal terminuotą darbo sutartį;",
                    "statutiniai valstybės tarnautojai;",
                    "statutiniai valstybės tarnautojai, šiuo metu išėję į pensiją;",
                    "statutiniai valstybės tarnautojai, esantys vaiko priežiūros atostogose;",
                    "tolimųjų reisų vairuotojai;",
                    "dirbantys pagal individualią veiklą ar verslo liudijimą;",
                    "individualių įmonių savininkai;",
                    "ūkininkai;",
                    "gaunantys „Sodros“ mokamas nuolatines išmokas (pensijas, pašalpas ir pan.);",
                    "gaunantys savivaldybės mokamas socialines išmokas;",
                    "gaunantys doktorantūros stipendijas;",
                    "dirbantys užsienyje.",
                ],
            },
        ],
    },
    en: {
        content: [
            {
                type: "text",
                gap: true,
                text: [
                    {
                        subtitle: true,
                        value: "„GENERAL FINANCING“ BANK „MEDLIZINGAS“",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "For planned and unplanned medical expenses, medical devices, or wellness procedures.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "By choosing the MEDLIZINGAS service, you can:",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "✔️ borrow up to €25,000;",
            },
            {
                type: "text",
                gap: true,
                text: "✔️ defer the first installment for up to 3 months;",
            },
            {
                type: "text",
                gap: true,
                text: "✔️ spread payments over a period of up to 7 years;",
            },
            {
                type: "text",
                gap: true,
                text: "✔️ spread payments over a period of up to 7 years;",
            },
            {
                type: "text",
                gap: true,
                text: "✔️ additionally choose health and life insurance for the borrower.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "MEDLIZINGAS agreement – fast and convenient!",
                    },
                ],
            },
            {
                type: "text",
                text: [
                    { bold: true, subtitle: true, value: "1. " },
                    {
                        value: "Contact a clinic staff member — they will fill in the required information.",
                    },
                ],
            },
            {
                type: "text",
                text: [
                    { bold: true, subtitle: true, value: "2. " },
                    {
                        value: "A representative of the “GENERAL FINANCING” bank will contact you by phone to assess your creditworthiness.",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    { bold: true, subtitle: true, value: "3. " },
                    {
                        value: "Once the agreement is signed, the bank will transfer the funds to the clinic’s account.",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "The service is available to the following persons:",
                    },
                ],
            },
            {
                type: "list",
                gap: true,
                list: [
                    "employees working under an employment contract;",
                    "employees working under a fixed-term employment contract;",
                    "statutory civil servants;",
                    "retired statutory civil servants;",
                    "statutory civil servants on parental leave;",
                    "long-haul drivers;",
                    "self-employed persons or those working under a business certificate;",
                    "owners of individual enterprises;",
                    "farmers;",
                    "persons receiving regular benefits from “Sodra” (pensions, allowances, etc.);",
                    "persons receiving social benefits paid by municipalities;",
                    "doctoral scholarship recipients;",
                    "persons working abroad.",
                ],
            },
        ],
    },
    ru: {
        content: [
            {
                type: "text",
                gap: true,
                text: [
                    {
                        subtitle: true,
                        value: "БАНК «GENERAL FINANCING» — «MEDLIZINGAS»",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Для плановых и внеплановых медицинских расходов, медицинских изделий или оздоровительных процедур.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "Выбрав услугу MEDLIZINGAS, вы сможете:",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "✔️ получить кредит до 25 000 €;",
            },
            {
                type: "text",
                gap: true,
                text: "✔️ отложить первый платёж до 3 месяцев;",
            },
            {
                type: "text",
                gap: true,
                text: "✔️ распределить выплаты на срок до 7 лет;",
            },
            {
                type: "text",
                gap: true,
                text: "✔️ распределить выплаты на срок до 7 лет;",
            },
            {
                type: "text",
                gap: true,
                text: "✔️ дополнительно оформить страхование здоровья и жизни заёмщика.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "Договор MEDLIZINGAS — быстро и удобно!",
                    },
                ],
            },
            {
                type: "text",
                text: [
                    { bold: true, subtitle: true, value: "1. " },
                    {
                        value: "Обратитесь к сотруднику клиники — он заполнит необходимые данные.",
                    },
                ],
            },
            {
                type: "text",
                text: [
                    { bold: true, subtitle: true, value: "2. " },
                    {
                        value: "С вами по телефону свяжется сотрудник банка «GENERAL FINANCING», который проведёт оценку вашей кредитоспособности.",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    { bold: true, subtitle: true, value: "3. " },
                    {
                        value: "После заключения договора банк перечислит средства на счёт клиники.",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "Услугой могут воспользоваться лица:",
                    },
                ],
            },
            {
                type: "list",
                gap: true,
                list: [
                    "работающие по трудовому договору;",
                    "работающие по срочному трудовому договору;",
                    "статутные государственные служащие;",
                    "статутные государственные служащие, вышедшие на пенсию;",
                    "статутные государственные служащие, находящиеся в отпуске по уходу за ребёнком;",
                    "водители международных рейсов;",
                    "работающие по индивидуальной деятельности или по бизнес-лицензии;",
                    "владельцы индивидуальных предприятий;",
                    "фермеры;",
                    "получающие регулярные выплаты от «Sodra» (пенсии, пособия и т. д.);",
                    "получающие социальные выплаты от муниципалитетов;",
                    "получатели докторских стипендий;",
                    "работающие за границей.",
                ],
            },
        ],
    },
};
