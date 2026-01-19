import { AstigmatismTable } from "../shared/AstigmatismTable";
import { FarsightednessTable } from "../shared/FarsightednessTable";
import { TextType } from "./servicesData";

export type InstructionsSulgType =
    | "instructions-before-surgery"
    | "information-for-out-of-town-patients"
    | "dovanu-kupono"
    | "instructions-after-laser-vision-correction"
    | "akiu-ligos"
    | "reminders-and-instructions-for-patients";

export type EyeDiseaseSlugType =
    | "glaukoma"
    | "presbiopija"
    | "toliaregyste"
    | "katarakta"
    | "akiu-ligu-simptomai"
    | "zvairumas"
    | "trumparegyste-miopija"
    | "astigmatizmas";

export const eyeDiseases: EyeDiseaseSlugType[] = [
    "glaukoma",
    "presbiopija",
    "toliaregyste",
    "katarakta",
    "akiu-ligu-simptomai",
    "zvairumas",
    "trumparegyste-miopija",
    "astigmatizmas",
];

export type KeySlugPatientsType = {
    key: InstructionsSulgType | EyeDiseaseSlugType;
    slug: { lt: string; en: string; ru: string };
};

export type ContentType = {
    title?: string;
    text: TextType[];
    btn?: { name: string; link: string; secondary?: boolean };
};

export type LocaleInstructionContent = {
    title: string;
    content: ContentType[];
};
export type LocaleDiseaseContent = {
    titleSEO: string;
    descriptionSEO: string;
    title: string;
    content: ContentType[];
};

export type PationtsInstructionType = {
    name: KeySlugPatientsType;
    lt: LocaleInstructionContent;
    en: LocaleInstructionContent;
    ru: LocaleInstructionContent;
};

export type EyeDiseaseType = {
    name: KeySlugPatientsType;
    lt: LocaleDiseaseContent;
    en: LocaleDiseaseContent;
    ru: LocaleDiseaseContent;
};

export const keyEyeDisease: KeySlugPatientsType[] = [
    {
        key: "glaukoma",
        slug: { lt: "glaukoma", en: "glaucoma", ru: "glaukoma" },
    },
    {
        key: "presbiopija",
        slug: { lt: "presbiopija", en: "presbyopia", ru: "pryesbiopiya" },
    },
    {
        key: "toliaregyste",
        slug: { lt: "toliaregyste", en: "farsightedness", ru: "dalnozorkost" },
    },
    {
        key: "katarakta",
        slug: { lt: "katarakta", en: "cataract", ru: "katarakta" },
    },
    {
        key: "akiu-ligu-simptomai",
        slug: {
            lt: "akiu-ligu-simptomai",
            en: "symptoms-of-eye-disease",
            ru: "simptomy-zabolevaniya-glaz",
        },
    },
    {
        key: "zvairumas",
        slug: { lt: "zvairumas", en: "strabismus", ru: "kosoglazie" },
    },
    {
        key: "trumparegyste-miopija",
        slug: {
            lt: "trumparegyste-miopija",
            en: "nearsightedness-myopia",
            ru: "blizorukost-miopiya",
        },
    },
    {
        key: "astigmatizmas",
        slug: { lt: "astigmatizmas", en: "astigmatism", ru: "astigmatizm" },
    },
];

export const keySlugPatientsInstruction: KeySlugPatientsType[] = [
    {
        key: "information-for-out-of-town-patients",
        slug: {
            lt: "information-for-out-of-town-patients",
            en: "information-for-out-of-town-patients",
            ru: "information-for-out-of-town-patients",
        },
    },
    {
        key: "dovanu-kupono",
        slug: {
            lt: "dovanu-kupono",
            en: "idovanu-kupono",
            ru: "dovanu-kupono",
        },
    },
    {
        key: "instructions-before-surgery",
        slug: {
            lt: "instructions-before-surgery",
            en: "instructions-before-surgery",
            ru: "instructions-before-surgery",
        },
    },
    {
        key: "instructions-after-laser-vision-correction",
        slug: {
            lt: "instructions-after-laser-vision-correction",
            en: "instructions-after-laser-vision-correction",
            ru: "instructions-after-laser-vision-correction",
        },
    },
    {
        key: "reminders-and-instructions-for-patients",
        slug: {
            lt: "reminders-and-instructions-for-patients",
            en: "reminders-and-instructions-for-patients",
            ru: "reminders-and-instructions-for-patients",
        },
    },
];

export const pationtsInstructionsData: PationtsInstructionType[] = [
    {
        name: keySlugPatientsInstruction.find(
            k => k.key === "information-for-out-of-town-patients"
        )!,
        lt: {
            title: "Informacija pacientams iš kitų miestų",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Gydymas klinikoje „Naujas regėjimas“ Vilniuje organizuojamas vadinamuoju vienos dienos formatu. Šiuolaikinių akių mikrochirurgijos technologijų taikymas leidžia paspartinti regėjimo atkūrimą, sutrumpinti bendrą gydymo trukmę, išvengti hospitalizacijos ir dažniausiai grįžti į namus po procedūros ar operacijos praėjus 1–2 valandoms.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Jums reikės būti Vilniuje:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "dėl regėjimo korekcijos lazeriu – 1 dieną; 2 dieną, paciento pageidavimu, atliekamas kontrolinis patikrinimas;",
                                "dėl kataraktos operacijos – ne trumpiau kaip 1–2 dienas;",
                                "dėl glaukomos gydymo lazeriu – apie 2 dienas;",
                                "dėl tinklainės procedūrų lazeriu – 1 dieną;",
                                "dėl konservatyvaus arba aparatinio gydymo kursų – atsižvelgiant į gydytojo paskyrimą.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Per nurodytą laiką Jums bus atlikta išsami regėjimo diagnostika, būsite parengti intervencijai, apskaičiuota korekcijos programa arba parinkti dirbtinio lęšiuko parametrai, paskirtas priešoperacinis ištyrimas (jei reikalingi laboratoriniai tyrimai, pacientas gali juos atlikti savo gyvenamojoje vietoje), atlikta pati procedūra ar operacija, taip pat privalomi kontroliniai patikrinimai. Tolesnį stebėjimo grafiką gydytojas nustato individualiai, atsižvelgdamas į klinikinę situaciją ir gijimo po operacijos dinamiką.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Medicininės informacijos ir registracijos tarnybos darbuotojai pacientams iš kitų miestų padės parinkti ir rezervuoti viešbutį, taip pat suteiks informacijos dėl organizacinių klausimų, kad Jūsų vizitas į kliniką ir buvimas mieste būtų kuo patogesnis.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Siekdami, kad būtų paprasčiau rasti apgyvendinimo vietą viešnagės Vilniuje ir gydymo klinikoje „Naujas regėjimas“ laikotarpiu, siūlome keletą viešbučių, esančių netoli klinikos. Pacientai kambarį gali rezervuoti savarankiškai iš anksto, kad nereikėtų rūpintis atvykimo dieną.",
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Information for Out-of-Town Patients",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Treatment at the “Naujas regėjimas” clinic (Vilnius, Lithuania) is organized in a “one-day” format. The use of modern ophthalmic microsurgery technologies helps speed up visual recovery, reduce the overall duration of treatment, avoid hospitalization, and, as a rule, return to your place of residence within 1–2 hours after the procedure or surgery.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "You will need to stay in Vilnius for:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "vision laser correction: 1 day; on the second day, a follow-up examination is available upon the patient’s request;",
                                "cataract surgery: at least 1–2 days;",
                                "laser glaucoma treatment: approximately 2 days;",
                                "laser retinal procedures: 1 day;",
                                "a course of conservative (non-surgical) or device-based treatment: as prescribed by the physician.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Within the timeframes indicated above, you will undergo a comprehensive eye examination, pre-procedure preparation, calculation of the correction plan or selection of intraocular lens parameters, and a pre-operative assessment (if laboratory tests are required, the patient may complete them at their place of residence). The procedure or surgery itself will then be performed, followed by mandatory follow-up examinations. The subsequent schedule of observation is determined individually by the physician, taking into account the clinical situation and the dynamics of recovery.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "For out-of-town patients, our Medical Information and Appointment Service will help you choose and book a hotel and will also advise you on organizational matters to ensure that your visit to the clinic and your stay in the city are as comfortable as possible.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "To make it easier to find accommodation for the period of your stay in Vilnius and treatment at the “Naujas regėjimas” clinic, we can suggest several hotel options located near the clinic. If you wish, you may also book a room independently in advance so that you do not need to address this matter on the day of arrival.",
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Информация для иногородних пациентов",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Лечение в клинике «Новое зрение» (Вильнюс, Литва) организовано в формате «одного дня». Использование современных технологий офтальмологической микрохирургии позволяет ускорить восстановление зрения, сократить общий срок лечения, избежать необходимости госпитализации и, как правило, вернуться к месту проживания уже через 1–2 часа после процедуры или операции.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Вам потребуется пребывание в Вильнюсе:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "для проведения лазерной коррекции зрения – 1 день, второй день — контрольный осмотр по желанию пациента;",
                                "для удаления катаракты – не менее 1–2 дней;",
                                "для лазерного лечения глаукомы – около 2 дней;",
                                "для лазерных процедур на сетчатке – 1 день;",
                                "для прохождения курса консервативного или аппаратного лечения – в зависимости от назначения врача.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "В течение указанных сроков вам будет выполнена комплексная диагностика зрения, проведена подготовка к вмешательству, выполнен расчет программы коррекции или параметров искусственного хрусталика, организовано предоперационное обследование (если требуются лабораторные анализы, пациент может пройти их по месту жительства), проведена сама процедура или операция, а также обязательные контрольные осмотры. Дальнейший график наблюдения врач определяет индивидуально — с учетом клинической ситуации и динамики восстановления.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Для иногородних пациентов сотрудники службы медицинской информации и записи помогут подобрать и забронировать отель, а также сориентируют по организационным вопросам, чтобы ваше пребывание в клинике и в городе было максимально удобным.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Чтобы упростить поиск жилья на период пребывания в Вильнюсе и лечения в клинике «Новое зрение», мы предлагаем несколько вариантов отелей, расположенных недалеко от клиники. При желании вы можете самостоятельно забронировать номер заранее, чтобы не возвращаться к этому вопросу в день приезда.",
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keySlugPatientsInstruction.find(k => k.key === "dovanu-kupono")!,
        lt: {
            title: "Akių klinikos UAB „Naujas regėjimas“ dovanų kupono naudojimo taisyklės",
            content: [],
        },
        en: {
            title: "Rules for the use of the gift voucher from the Eye Clinic „New Vision“",
            content: [],
        },
        ru: {
            title: "Правила использования подарочного сертификата от глазной клиники «Новое зрение»",
            content: [],
        },
    },
    {
        name: keySlugPatientsInstruction.find(
            k => k.key === "instructions-before-surgery"
        )!,
        lt: {
            title: "Informacija pacientui prieš operaciją",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Į priešoperacinę konsultaciją pas gydytojus oftalmologą-chirurgą ir anesteziologą būtina užsiregistruoti iš anksto (pageidautina likus savaitei). Į apžiūrą rekomenduojama atsinešti ankstesnių tyrimų ir operacijų išrašus.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "OPERACIJOS DIENĄ",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Suvalgykite lengvus pusryčius, venkite aštraus kvapo produktų (svogūnų, česnakų).",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Būtinai išgerkite visus vaistus, kuriuos vartojate reguliariai. Vaistų vartojimo režimas operacijos dieną ir pooperaciniu laikotarpiu nesikeičia.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Po operacijos akis užklijuojama tvarsčiu, kad būtų apsaugota nuo atsitiktinio užteršimo. Tvarstį galite nuimti grįžę namo.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Vokus (bet ne pačią akį) galima nuvalyti sterilia vata, sudrėkinta 0,02 proc. furacilino vandeniniu tirpalu arba 0,25 proc. levomicetino tirpalu (galite įsigyti vaistinėse).",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Nuo pirmos dienos po operacijos nuolat laikyti akies užklijuotos nereikia.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "REABILITACIJOS LAIKOTARPIS",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Toliau pateiktos rekomendacijos yra bendro pobūdžio ir tinka daugumai pacientų. Atskirais atvejais gydytojas gali paskirti individualią gydymo schemą ir vizitų grafiką. Rekomendacijas tikslinkitės per kiekvieną vizitą.",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                [
                                    { bold: true, value: "Režimas. " },
                                    {
                                        value: "Pooperacinio režimo laikymasis turi gydomąją reikšmę. Chirurgas arba gydantis gydytojas paaiškins, kaip elgtis pirmąsias 24 valandas po operacijos. Vėliau pooperacinio režimo ypatumus tikslinkite su savo gydytoju.",
                                    },
                                ],
                                [
                                    { bold: true, value: "Higiena. " },
                                    {
                                        value: "Prausdamiesi stenkitės, kad į akį nepatektų muilo ar vandens. Plaudami galvą, ją atloškite atgal, o ne lenkite į priekį. Jei vandens pateko į operuotą akį, praplaukite ją 0,02 proc. furacilino vandeniniu tirpalu arba 0,25 proc. levomicetino tirpalu (galite įsigyti vaistinėse).                                        ",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Būtinai apsilankykite pas gydytoją paskirtą dieną!",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Akių lašai padeda greičiau gyti ir profilaktiškai saugo nuo komplikacijų kilus infekcijai. ",
                                    },
                                    {
                                        value: "Paprastai chirurgas skiria kelis preparatus: lašus su antibiotikais, priešuždegiminius arba kombinuotus vaistus.",
                                    },
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
                                    value: "REGOS AŠTRUMAS POOPERACINIU LAIKOTARPIU",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Regėjimas susitvarko palaipsniui. Pirmosiomis dienomis po operacijos jis gali būti prastesnis dėl nedidelio ragenos paburkimo arba išplėsto vyzdžio (dažniausiai praeina per savaitę). Operuotos akies regėjimas susitvarko maždaug per mėnesį, todėl parinkti akinius (esant monofokaliniam IOL) rekomenduojama praėjus šiam laikotarpiui. Akinius galima parinkti pagal gyvenamąją vietą arba mūsų medicinos centre.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "vaistų LAŠINIMO TAISYKLĖS",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            numeric: true,
                            list: [
                                "Kruopščiai nusiplaukite rankas.",
                                "Atidarykite buteliuką.",
                                "Atloškite galvą arba atsigulkite ant nugaros ir žiūrėkite į viršų.",
                                "Laikykite apverstą buteliuką virš akies, neliesdami akies ir blakstienų.",
                                "Švelniai patraukite apatinį voką žemyn.",
                                "Žiūrėdami į viršų, lengvai spustelėkite buteliuką, kad lašas patektų į tarpą tarp akies obuolio ir apatinio voko.",
                                "Užsimerkite.",
                                "Siekdami padidinti veiksmingumą ir sumažinti sisteminį poveikį, švelniai prispauskite vidinį akies kampą pirštu (per sterilią servetėlę).",
                                "Jei paskirti kelių rūšių lašai, tarp lašinimų darykite maždaug 5 minučių pertrauką.",
                                "Uždarykite buteliuką ir laikykite jį pagal instrukciją.",
                            ],
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Patient information before surgery",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "An appointment for a pre-operative consultation with an ophthalmic surgeon and an anaesthesiologist must be scheduled in advance (preferably one week beforehand). Please bring any discharge summaries or reports from previous examinations and surgeries to the consultation.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ON THE DAY OF SURGERY",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Have a light breakfast, avoiding foods with a strong smell (onions, garlic).",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Make sure to take all medications that you take regularly. Your medication regimen on the day of surgery and during the post-operative period remains unchanged.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "After surgery, the eye will be covered with a dressing to protect it from accidental contamination. You may remove the dressing when you arrive home.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "The eyelids may be gently cleansed (but not the eye itself) with sterile cotton moistened with an aqueous solution of furacilin 0.02% or chloramphenicol 0.25% (available at pharmacies).",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Starting from the first day after surgery, it is not necessary to keep the eye continuously covered.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "REHABILITATION PERIOD",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "The following recommendations are general and intended for most patients. In some cases, your doctor may prescribe an individual treatment plan and a schedule of follow-up visits. Please confirm the recommendations at each appointment with your doctor.",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                [
                                    { bold: true, value: "Regimen. " },
                                    {
                                        value: "Adhering to the post-operative regimen has therapeutic value. The surgeon or your attending physician will advise you on how to behave during the first 24 hours after surgery. Afterwards, please confirm the specifics of the post-operative regimen with your doctor.",
                                    },
                                ],
                                [
                                    { bold: true, value: "Hygiene. " },
                                    {
                                        value: "When washing your face, avoid getting soap or water into the eye. When washing your hair, tilt your head back, not forward. If water gets into the operated eye, rinse it with an aqueous solution of furacilin 0.02% or chloramphenicol 0.25% (available at pharmacies).",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Be sure to visit your doctor on the appointed day.",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Eye drops are necessary for faster healing and for the prevention of infectious complications. ",
                                    },
                                    {
                                        value: "Typically, the surgeon prescribes several medications: antibiotic drops, anti-inflammatory drops, or combination products.",
                                    },
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
                                    value: "VISUAL ACUITY IN THE POST-OPERATIVE PERIOD",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Vision recovers gradually. During the first days after surgery, vision may be reduced due to mild corneal swelling or a dilated pupil (this usually resolves within a week). Final recovery of vision in the operated eye typically occurs in about one month; therefore, eyeglass fitting (with a monofocal intraocular lens) is recommended after this period. Glasses can be prescribed locally or at our medical centre.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "RULES FOR INSTILLING EYE DROPS",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            numeric: true,
                            list: [
                                "Wash your hands thoroughly.",
                                "Open the bottle.",
                                "Tilt your head back or lie on your back and look upward.",
                                "Hold the bottle upside down above the eye without touching the eye or eyelashes.",
                                "Gently pull the lower eyelid downward.",
                                "Look upward and gently squeeze the bottle so that a drop falls into the space between the eyeball and the lower eyelid.",
                                "Close your eyes.",
                                "To increase effectiveness and reduce systemic absorption, gently press the inner corner of the eye with a finger (through a sterile tissue).",
                                "If more than one type of drops is prescribed, wait about 5 minutes between instillations.",
                                "Close the bottle and store it according to the instructions.",
                            ],
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Памятки пациенту перед операцией",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Записаться на предоперационный приём к офтальмохирургу и анестезиологу необходимо заранее (желательно за неделю). На осмотр желательно принести выписки из предыдущих обследований и операций.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "В ДЕНЬ ОПЕРАЦИИ",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Съешьте лёгкий завтрак, исключая продукты с резким запахом (лук, чеснок).",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Обязательно примите все препараты, которые вы принимаете регулярно. Режим приёма лекарств в день операции и в послеоперационный период остаётся без изменений.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "После операции глаз заклеивают повязкой, чтобы защитить его от случайного загрязнения. Повязку можно снять, когда приедете домой.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Веки можно обработать (но не сам глаз) стерильной ватой, смоченной водным раствором фурацилина 0.02% или левомицетина 0.25% (продаются в аптеке).",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Начиная с первого дня после операции, постоянно держать глаз заклеенным не нужно.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПЕРИОД РЕАБИЛИТАЦИИ",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Следующие рекомендации являются общими и предназначены для большинства пациентов. В отдельных случаях врач может назначить индивидуальную схему лечения и график визитов. Уточняйте рекомендации на каждом приёме у врача.",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                [
                                    { bold: true, value: "Режим. " },
                                    {
                                        value: "Соблюдение режима после операции имеет лечебное значение. Хирург или ваш лечащий врач дадут рекомендации, как вести себя в первые сутки после операции. В дальнейшем уточняйте особенности послеоперационного режима у своего врача.",
                                    },
                                ],
                                [
                                    { bold: true, value: "Гигиена. " },
                                    {
                                        value: "Во время умывания избегайте попадания мыла и воды в глаз. При мытье головы наклоняйте голову назад, а не вперёд. Если вода попала в прооперированный глаз, промойте его водным раствором фурацилина 0.02% или левомицетина 0.25% (продаются в аптеке).",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Обязательно посещайте врача в назначенный день!",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Глазные капли необходимы для быстрого заживления и профилактики инфекционных осложнений. ",
                                    },
                                    {
                                        value: "Обычно хирург назначает несколько препаратов: капли с антибиотиком, противовоспалительные или комбинированные средства.",
                                    },
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
                                    value: "ОСТРОТА ЗРЕНИЯ В ПОСЛЕОПЕРАЦИОННЫЙ ПЕРИОД",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Восстановление зрения происходит постепенно. В первые дни после операции зрение может быть снижено из-за небольшого отёка роговицы или расширенного зрачка (обычно проходит в течение недели). Окончательное восстановление зрения прооперированного глаза наступает примерно через месяц, поэтому подбор очков (при монофокальной ИОЛ) рекомендуется после этого срока. Подобрать очки можно по месту жительства или в нашем медицинском центре.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПРАВИЛА ЗАКАПЫВАНИЯ КАПЕЛЬ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            numeric: true,
                            list: [
                                "Тщательно вымойте руки.",
                                "Откройте флакон.",
                                "Запрокиньте голову или лягте на спину и смотрите вверх.",
                                "Держите флакон вверх дном над глазом, не касаясь глаза и ресниц.",
                                "Аккуратно оттяните нижнее веко вниз.",
                                "Посмотрите вверх и слегка сожмите флакон, чтобы капля попала в пространство между глазным яблоком и нижним веком.",
                                "Закройте глаза.",
                                "Чтобы повысить эффективность и снизить системное воздействие, аккуратно прижмите внутренний угол глаза (через стерильную салфетку) пальцем.",
                                "Если назначено несколько видов капель, делайте перерыв около 5 минут между закапываниями.",
                                "Закройте флакон и храните его в соответствии с инструкцией.",
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keySlugPatientsInstruction.find(
            k => k.key === "instructions-after-laser-vision-correction"
        )!,
        lt: {
            title: "Instrukcijos po regos korekcijos lazeriu",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Paciento priežiūra klinikoje „Naujas regėjimas“ Vilniuje nesibaigia Jums pasijutus geriau. Mes užtikriname pooperacinę priežiūrą, kontrolinius vizitus ir atkuriamąjį gydymą tiek laiko, kiek to reikia atsižvelgiant į gydytojo rekomendacijas, taip pat ir pacientą išrašius. Tai netaikoma fiziologiniams akių pokyčiams (būklės pablogėjimui) ar kitoms komplikacijoms bei ligoms, nesusijusioms su regos korekcija lazeriu.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Operacijos atlikimo instrukcija",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Pasiruošimas operacijai:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "atidžiai susipažinkite su sutikimo forma dėl regos korekcijos lazeriu;",
                                "valgykite ir gerkite kaip įprastai (alkoholio nevartokite 24 valandas iki operacijos);",
                                "vilkėkite laisvus, nepūkuotus, ilgomis rankovėmis drabužius, su kuriais jaučiatės patogiai;",
                                "nenaudokite makiažo, kvepalų ir losjono po skutimosi;",
                                "pasiimkite akinius nuo saulės.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Po operacijos Jums bus įteikta:",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "vaistų receptas;",
                                "vaistinių preparatų vartojimo instrukcijos;",
                                "skubiosios pagalbos kontaktinis telefono numeris (pirmajai nakčiai po operacijos);",
                                "kvietimas į pooperacinę konsultaciją.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    bold: true,
                                    value: "Grįžimas namo",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "Neišeikite iš klinikos be palydos, nes grįžtant namo gali prireikti pagalbos. Geriausia, jei operacijos dieną Jus palydės artimas žmogus. Jei tai neįmanoma, rekomenduojame iš anksto pasirūpinti transportu. Skrydžiai po regos korekcijos lazeriu ar kataraktos operacijos nėra draudžiami, tačiau nerekomenduojame skristi iškart po operacijos. Regėjimas gali būti kiek neryškus, o jautrumas šviesai – padidėjęs. Taip pat patariame atvykus į pooperacines konsultacijas su gydytoju aptarti visas keliones, planuojamas per pirmąjį mėnesį po operacijos.",
                        },
                        {
                            type: "text",
                            text: "Rekomendacijos pooperaciniu laikotarpiu",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "Pirmąją dieną (kitą dieną po operacijos):",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "stenkitės išlikti ramūs;",
                                "kuo mažiau judinkite akis;",
                                "stenkitės jų nesumerkti;",
                                "NETRINKITE akių;",
                                "venkite veiklų, reikalaujančių regos koncentracijos (televizoriaus žiūrėjimo, darbo kompiuteriu).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Jei turite mažų vaikų, rekomenduojame iš anksto paprašyti artimųjų ar draugų pagalbos pirmosioms 2 dienoms, ypač po regos korekcijos lazeriu. Pirmąsias 2–3 dienas kuo labiau ribokite alkoholio vartojimą, nes jis gali sąveikauti su vaistais ir didinti akių sausumą. Daugiau ilsėkitės ir venkite papildomos akių įtampos.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Vaistiniai preparatai",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Jums bus išrašytas receptas pooperacinei priežiūrai skirtiems vaistams. Jų kaina nėra įtraukta į gydymo kainą. Naudokite preparatus griežtai atsižvelgdami į chirurgo nurodymus ir laikykite juos vėsioje, sausoje vietoje.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Kaip tinkamai lašinti akių lašus:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "prieš naudodami akių lašus visada nusiplaukite rankas;",
                                "atloškite galvą atgal ir žiūrėkite į lubas;",
                                "įlašinkite vaisto tiesiai ant akies obuolio. NETRAUKITE VOKO;",
                                "stenkitės neliesti akies ar voko buteliuko antgaliu.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Atminkite, kad įsilašinus lašų ar pasitepus tepalu regėjimas gali laikinai tapti neryškus. Laikykitės preparatų vartojimo instrukcijų, atsižvelkite į tai, kuriuos lašus rinktis pirmiausia ir kokiais intervalais. Jei praleidote vaisto vartojimą, nevartokite dviejų ar trijų dozių iš karto. Gali būti patogiau, jei pirmomis dienomis artimieji padės įsilašinti lašų, kol akys atsistatys.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Papildomos atsargumo priemonės:",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            list: [
                                "neleiskite kitiems žmonėms naudoti Jūsų akių lašų;",
                                "nelieskite buteliuko kakleliu akies ar kito paviršiaus;",
                                "iškart po naudojimo užsukite buteliuką ar tūbelę dangteliu;",
                                "laikykite sandariai uždarytą buteliuką vertikalioje padėtyje;",
                                "pasibaigus gydymo kursui, išmeskite visus lašus ir tepalus.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "NEVIRŠYKITE REKOMENDUOJAMOS DOZĖS.",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Akių priežiūra",
                                },
                            ],
                        },
                        {
                            type: "text",
                            text: "Po operacijos gali pasireikšti šie simptomai:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "ašarojimas;",
                                "šviesos baimė (eidami į lauką nešiokite akinius nuo saulės);",
                                "svetimkūnio pojūtis akyje;",
                                "akių sudirginimas, sunkumas jas atmerkti;",
                                "išsiplėtę vyzdžiai;",
                                "patinę ir (arba) nusileidę vokai;",
                                "„muselės“ ir dėmės regėjimo lauke.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Paprastai tai yra laikini, normalūs pooperaciniai reiškiniai.",
                        },
                        {
                            type: "text",
                            text: [
                                { bold: true, value: "Praktiniai patarimai:" },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Jei jaučiate poreikį nuvalyti akių sritį, naudokite marlę, sudrėkintą atvėsintu virintu vandeniu, ir stenkitės neliesti akies paviršiaus.",
                                "Nenaudokite komercinių akių plovimo skysčių. Jei atsiranda svetimkūnio, sausumo ar spaudimo pojūtis akyje (-se), naudokite konservantų neturinčius dirbtinių ašarų lašus. Jų galima įsigyti bet kurioje vaistinėje be recepto.",
                                "Vokai patinti, atsirasti niežėjimas ir akių paraudimas (net praėjus kelioms dienoms po operacijos) gali dėl reakcijos į vaistus. Kreipkitės į kliniką dėl alternatyvaus gydymo rekomendacijų.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "Diskomforto pojūtis akyse",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Dėl vietinių anestetikų (lašų nuo skausmo) operacija atliekama be skausmo. Diskomfortas praėjus maždaug valandai po operacijos yra normalus reiškinys, nes vaistų poveikis silpnėja. Jis gali priminti svetimkūnio pojūtį ir tęstis 24–38 valandas. Regos korekcija lazeriu dažniausiai būna beveik neskausminga, tačiau po operacijos gali pasireikšti gana ryškus nepatogumas – jį sumažinti padeda vaistai ir bandomieji (tvarstomieji) kontaktiniai lęšiai.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "Pavojus esant stipriam skausmui",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Jei po 24 valandų išlieka stiprus skausmas, kreipkitės į akių kliniką ir užsiregistruokite pooperacinei apžiūrai. Jei klinika nedirba arba konsultacijos reikia savaitgalį, skambinkite nurodytu numeriu. Vienas iš mūsų darbuotojų susisieks su Jūsų chirurgu ir suderins, kad jis Jums perskambintų.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Mažai tikėtina, kad greitosios medicinos pagalbos gydytojai yra susipažinę su komplikacijomis po operacijų lazeriu. Atsiradus komplikacijų, kuo greičiau kreipkitės į kliniką.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Pooperacinė priežiūra",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Būtinai atvykite į paskirtas kontrolines konsultacijas pagal gydytojo rekomendacijas. Vienas arba du vizitai po operacijos yra privalomi. Pooperacinė priežiūra klinikoje „Naujas regėjimas“ atliekama atsižvelgiant į nustatytą stebėjimo planą.",
                        },
                        {
                            type: "table",
                            gap: true,
                            headers: [
                                "Gydymas",
                                "Pirmas vizitas",
                                "Antras vizitas",
                                "Trečias vizitas",
                            ],
                            rows: [
                                [
                                    "LASIK",
                                    "3-4 dienos*",
                                    "7–14 dienų ir išrašymas, jei viskas gerai",
                                    "1 mėnuo",
                                ],
                                [
                                    "LASEK",
                                    "3-4 dienos*",
                                    "1 mėnuo ir išrašymas, jei viskas gerai",
                                    "",
                                ],
                                [
                                    "Катаракта",
                                    "1 diena",
                                    "1 savaitė ir išrašymas, jei viskas gerai",
                                    "nereikia",
                                ],
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "* Jei reikia išimti tvarstomuosius lęšius, apsilankyti mūsų centre būtina po 3–4 dienų arba 7–14 dieną.",
                        },
                        {
                            type: "text",
                            text: "Vizitą galima atšaukti likus 3 dienoms; tai padarius vėliau, gali būti taikomas 50 proc. paslaugos kainos mokestis. Jei į vizitą vėluojate 20 ar daugiau minučių, reikės registruotis kitam laikui.",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "Kai kuriais atvejais chirurgas gali paskirti papildomų akių lašų. Jų galima įsigyti vaistinėje pagal receptą.",
                        },
                        {
                            type: "text",
                            text: "Jei Jums patogiau, galite atlikti pooperacinę apžiūrą viename iš optinės korekcijos centrų Jūsų mieste – už šias paslaugas sumokėsite savarankiškai. Šis sprendimas gali būti ekonomiškesnis už kelionę į kliniką. Apžiūros rezultatai bus išsiųsti į mūsų kliniką ir įtraukti į Jūsų medicininę dokumentaciją. Tokiu atveju paprašykite pooperacinės apžiūros ataskaitos kopijos.",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Grįžimas į kasdienį gyvenimą",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "Naudingos rekomendacijos",
                        },
                        {
                            type: "list",
                            list: [
                                "Jei dirbate dulkėtomis sąlygomis (pvz., statybvietėje), akis saugokite apsauginiais „kaukės“ tipo akiniais mažiausiai mėnesį.",
                                "Dirbdami prie ekranų kas 45 minutes darykite 15 minučių pertraukas, kad pirmąsias 2–3 savaites sumažintumėte akių nuovargį.",
                                "Pirmąsias kelias savaites rekomenduojama lauke nešioti akinius nuo saulės – jie apsaugos akis nuo dulkių ir sumažins laikiną jautrumą šviesai.",
                                "Po kataraktos operacijos rekomenduojama vengti kelti sunkius daiktus pirmąsias 4 savaites.",
                                "Per pooperacines konsultacijas gydytojas įvertins, ar Jūsų regėjimas atitinka reikiamus standartus.",
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "NEVAIRUOKITE, KOL GYDYTOJAS NEPATVIRTINS, KAD TAI SAUGU.",
                        },
                        {
                            type: "text",
                            text: "Atsižvelgiant į vairavimo standartus, turite gebėti perskaityti automobilio numerio ženklą iš 20,5 metro atstumo. Jei operacija atlikta tik vienai akiai, vairuodami būkite itin atsargūs, nes Jūsų binokulinis (stereoskopinis) regėjimas laikinai gali būti sutrikęs, o atstumo suvokimas – pasunkėjęs.",
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Sportas",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Venkite intensyvaus fizinio krūvio, kol akys visiškai atsistatys (tai paprastai trunka apie mėnesį). Žemiau pateiktoje lentelėje nurodomi orientaciniai grįžimo prie pagrindinių veiklų terminai. Gydytojas gali pateikti kitokias rekomendacijas, atsižvelgdamas į individualią situaciją. Jei profesionaliai užsiimate kuria nors iš išvardytų sporto šakų arba turite klausimų dėl kitų, būtinai pasitarkite su gydytoju.",
                        },
                        {
                            type: "table",
                            gap: true,
                            headers: [
                                "Veiklos rūšis",
                                "iQ LASIK Oxygen",
                                "SportLine LASEK",
                            ],
                            rows: [
                                [
                                    "Sveikatinamasis bėgimas",
                                    "2 savaitės",
                                    "2 savaitės",
                                ],
                                ["Aerobika", "1 savaitė", "1 savaitė"],
                                ["Joga / pilatesas", "1 savaitė", "1 savaitė"],
                                [
                                    "Svarmenų kilnojimas",
                                    "2 savaitės",
                                    "2 savaitės",
                                ],
                                [
                                    "Sauna ir garinė pirtis",
                                    "1 mėnuo",
                                    "1 mėnuo",
                                ],
                                ["Plaukimas", "1 mėnuo", "1 mėnuo"],
                                [
                                    "Futbolas ir nekontaktiniai kovos menai",
                                    "1 mėnuo",
                                    "1 mėnuo",
                                ],
                                [
                                    "Slidinėjimas / snieglentė, tenisas, skvošas, kriketas",
                                    "1 mėnuo",
                                    "1 mėnuo",
                                ],
                                [
                                    "Regbis, kontaktiniai kovos menai",
                                    "3 mėnesiai",
                                    "6 savaitės",
                                ],
                                [
                                    "Nardymas (giliau nei 30 pėdų, apie 9 m)",
                                    "3 mėnesiai",
                                    "3 mėnesiai",
                                ],
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Sportuodami mažiausiai 2 savaites saugokite akis nuo prakaito – dėvėkite galvos juostą.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Bendros rekomendacijos",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Dušas ir vonia",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Pirmąsias 7 dienas po operacijos stenkitės, kad į akis nepatektų vandens.",
                                "Duše stovėkite šiek tiek toliau nei įprastai, kad į akis nepatektų vandens.",
                                "Plaudami galvą atloškite ją atgal, kad į akis nepatektų šampūno.",
                                "Jei šampūno, muilo ar kitos priemonės pateko į akis – NETRINKITE! Naudokite drėkinamuosius lašus, kad nuplautumėte ir sumažintumėte deginimą.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Makiažas",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Pirmąsias 2 savaites po operacijos makiažo naudoti negalima.",
                                "Veido kosmetiką (kremą, makiažo pagrindą, skaistalus ir pan.) galite naudoti vėliau, tačiau netepkite per arti akių.",
                                "Vandeniui atsparaus tušo nenaudokite mažiausiai mėnesį – jį sunkiau pašalinti.",
                                "Mėnesį po operacijos stenkitės, kad makiažo ar demakiažo priemonių nepatektų į akis. Jei taip nutiko, praplaukite akis lašais ir JOKIU BŪDU NETRINKITE.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Atostogos",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Nerekomenduojama vykti į užsienį pirmąją savaitę po operacijos, kad galėtumėte atvykti į pirmuosius du pooperacinius patikrinimus.",
                                "Keliaudami į karštas šalis, nešiokite kokybiškus akinius nuo saulės su stipria UVA ir UVB apsauga. Mėnesį po operacijos venkite degintis.",
                                "Užsiimdami žiemos sportu nešiokite kokybiškus akinius arba kaukę su stipria UVA ir UVB apsauga.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Skaitymas",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Priklausomai nuo korekcijos apimties, smulkiu šriftu parašytą tekstą skaityti kelias savaites gali būti sudėtingiau – tai normalu.",
                                "Vyresniems nei 45 metų pacientams gali prireikti akinių darbui iš arti. Tai natūralus su amžiumi susijęs procesas ir gali būti naudingas veikloms, reikalaujančioms gero regėjimo iš arti (skaitymui, siuvimui, mezgimui ir pan.).",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Soliariumas",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Venkite soliariumo mėnesį po akių korekcijos lazeriu ir 3 mėnesius po kataraktos gydymo.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Rūkymas",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Jei įmanoma, venkite rūkyti ir būti dūmų gausiose patalpose savaitę.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    bold: true,
                                    value: "Papildomos rekomendacijos",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "iQ LASIK Oxygen",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Tvarstomieji kontaktiniai lęšiai",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Tvarstomieji lęšiai dažniausiai naudojami po LASEK operacijos, siekiant apsaugoti epitelį (išorinį sluoksnį) ir sumažinti diskomfortą. Po 3–4 dienų būtina grįžti į kliniką, kad jie būtų išimti. Kartais pacientai lęšių netoleruoja, tuomet jie išimami anksčiau. Nešiojant ar išimant lęšius gali pasireikšti diskomfortas ar skausmas; paprastai jie praeina per 6–24 valandas. Ilsėkitės ir, jei reikia, vartokite skausmą malšinančius vaistus, tačiau NIEKADA NEVIRŠYKITE DOZĖS IR NEIŠIMKITE LĘŠIŲ PATYS.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Jei lęšis iškrito, gali atsirasti diskomfortas. Nebandykite jo įsidėti atgal. Toliau naudokite lašus taip, kaip paskyrė gydytojas, ir atvykite į kontrolinius vizitus.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Atsistatymo efektas (drumstumas)",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Per 3–4 savaites po LASEK operacijos gali būti stebimas lengvas ragenos drumstumas. Tai normalus procesas.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Dažniausiai drumstumas būna silpnas ir beveik nepastebimas, tačiau retais atvejais gali išlikti 6–12 mėnesių. Rizika didėja vartojant kai kuriuos vaistus – gydytojas įspės, jei tai aktualu Jums. Kartais regėjimas gali prastėti, tuomet reikalingas gydymas. Gali būti paskirti steroidiniai lašai ar kiti gydymo metodai.",
                        },
                        {
                            type: "text",
                            text: "Mūsų specialistai padarys viską, kad Jūsų regėjimas grįžtų kuo geriau. Tūkstančiai pacientų, susigrąžinusių gerą regėjimą, – geriausias to įrodymas.",
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Post-Laser Vision Correction Instructions",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Patient care at “Naujas regėjimas” Clinic (Vilnius, Lithuania) does not end once you begin to feel better. We provide postoperative follow-up and recovery support for the required period in accordance with your doctor’s recommendations, including visits after discharge. This does not apply to physiological changes (deterioration of the condition) of the eyes or to complications and diseases not related to the performed laser vision correction.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Surgical Procedure Instructions",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Preparing for surgery:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "carefully read your informed consent form for laser vision correction;",
                                "eat and drink as usual (do not consume alcohol for 24 hours prior to surgery);",
                                "wear loose, lint-free clothing with long sleeves that is comfortable for you;",
                                "do not use makeup, perfume, or aftershave lotion;",
                                "bring sunglasses with you.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "After surgery you will receive:",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "a prescription for medication;",
                                "instructions for the medical use of the prescribed products;",
                                "an emergency contact phone number (for the night after surgery);",
                                "an invitation for a postoperative consultation.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    bold: true,
                                    value: "Returning home",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "Do not leave the clinic without an escort, as you may need assistance on your way home. Ideally, a friend or relative should accompany you on the day of surgery. If this is not possible, we recommend arranging transportation in advance. Air travel after laser vision correction or cataract surgery is not prohibited; however, we do not recommend flying immediately after the procedure. Your vision may remain slightly blurred and light sensitivity may be increased. We also advise discussing any trips planned within the first month after surgery during your postoperative consultations",
                        },
                        {
                            type: "text",
                            text: "Recommendations for the postoperative period",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "On the first day (the day after surgery):",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "remain calm and avoid stress;",
                                "if possible, limit eye movements;",
                                "try not to squeeze your eyes shut;",
                                "DO NOT RUB your eyes;",
                                "avoid activities that require sustained visual focus (watching TV, working at a computer).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "If you have small children, we recommend arranging help from family or friends for the first two days, especially after laser vision correction. Minimize alcohol intake during the first 2–3 days, as it may interact with medications and increase eye dryness. Rest more and avoid unnecessary eye strain.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Medications",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "You will receive a prescription for postoperative care medications. Their cost is not included in the treatment price. Use the medicines strictly as prescribed by the surgeon and store them in a cool, dry place.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "How to instill eye drops correctly:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "always wash your hands before using eye drops;",
                                "tilt your head back and look at the ceiling;",
                                "instill the medication directly onto the eyeball. DO NOT PULL DOWN THE EYELID;",
                                "avoid touching the eye or eyelid with the bottle tip.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Please remember that your vision may become blurred immediately after applying drops or ointments. Follow the instructions regarding which drops to use first and the required intervals. If you miss a dose, do not use two or three doses at once. During the recovery phase, it may be more convenient if someone helps you instill drops until your eyes have healed.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Additional precautions:",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            list: [
                                "do not allow other people to use your eye drops;",
                                "do not touch the bottle neck to the eye or any surface;",
                                "close the bottle or tube immediately after use;",
                                "keep the bottle tightly closed and in an upright position;",
                                "discard all drops and ointments after completing the course of treatment.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "DO NOT EXCEED THE RECOMMENDED DOSE.",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Eye care",
                                },
                            ],
                        },
                        {
                            type: "text",
                            text: "After surgery you may experience:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "tearing;",
                                "light sensitivity (wear sunglasses outdoors);",
                                "a foreign body sensation / “gritty” feeling;",
                                "eye irritation and heaviness when opening the eyes;",
                                "dilated pupils;",
                                "swollen and/or drooping eyelids;",
                                "“floaters” and spots in your field of vision.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "In most cases, these are normal temporary effects of the procedure.",
                        },
                        {
                            type: "text",
                            text: [{ bold: true, value: "Practical tips:" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "If you need to clean the area around the eyes, use gauze moistened with cooled boiled water and try not to touch the eye surface.",
                                "Do not use commercial eye-wash solutions. If you feel a foreign body sensation, dryness, or pressure in one or both eyes, use preservative-free artificial tears. They are available at any pharmacy without a prescription.",
                                "If your eyelids swell and you develop itching or redness (even several days after surgery), this may be a reaction to medications. Please contact the clinic for advice on alternative management.",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ bold: true, value: "Eye discomfort" }],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Thanks to local anesthetic drops, the procedure is painless. Discomfort about an hour after surgery is normal as the anesthesia wears off. The sensation may resemble a foreign body feeling and can last 24–38 hours. Laser vision correction is generally well tolerated; however, some patients may experience significant discomfort after surgery, which can be relieved with prescribed medications and bandage contact lenses.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "Danger in case of severe pain",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "If severe pain persists after 24 hours, contact “Naujas regėjimas” Clinic (Vilnius, Lithuania) during working hours to schedule a postoperative appointment. If the clinic is closed or you need advice on a weekend, call the number provided—our staff will contact your surgeon and arrange a call back.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "It is unlikely that emergency physicians are familiar with the specifics of complications after laser procedures. If signs of complications occur (which is rare), contact the clinic as soon as possible.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Postoperative follow-up",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Please attend all scheduled follow-up visits as recommended by your doctor. One or two visits after surgery are mandatory. Postoperative follow-up at “Naujas regėjimas” Clinic is provided in accordance with the established monitoring plan.",
                        },
                        {
                            type: "table",
                            gap: true,
                            headers: [
                                "Treatment",
                                "First visit",
                                "Second visit",
                                "Third visit",
                            ],
                            rows: [
                                [
                                    "LASIK",
                                    "3–4 days*",
                                    "7–14 days and discharge if all is well",
                                    "1 month",
                                ],
                                [
                                    "LASEK",
                                    "3–4 days*",
                                    "1 month and discharge if all is fine",
                                    "",
                                ],
                                [
                                    "Cataract",
                                    "1 day",
                                    "1 week and discharge if all is fine",
                                    "no required",
                                ],
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "* If bandage lenses need to be removed, a visit to our center is required after 3–4 days or on days 7–14.",
                        },
                        {
                            type: "text",
                            text: "You can cancel an appointment at least 3 days in advance; cancellations made later may be charged at 50% of the service price. If you are 20 minutes or more late, you will need to reschedule for another time.",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "In some cases, the surgeon may prescribe additional eye drops. Prescribed medicines can be purchased at a pharmacy with a prescription.",
                        },
                        {
                            type: "text",
                            text: "If it is more convenient, we can refer you for a postoperative check-up to an optical correction center in your city; the cost of those services is paid by you directly. This may be more economical than traveling to the clinic. The examination results will be sent to the clinic and added to your medical record. In this case, please request a copy of the postoperative report.",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Returning to everyday life",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "Helpful recommendations",
                        },
                        {
                            type: "list",
                            list: [
                                "If you work in dusty environments (e.g., construction sites), protect your eyes with “mask-style” safety goggles for at least one month.",
                                "When working with screens, take a 15-minute break every 45 minutes to reduce eye fatigue during the first 2–3 weeks.",
                                "For the first few weeks, wearing sunglasses outdoors is recommended—this protects your eyes from dust and reduces temporary light sensitivity.",
                                "Patients after cataract surgery should avoid heavy lifting during the first 4 weeks.",
                                "During postoperative consultations, the doctor will determine whether your vision meets the required standards.",
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "DO NOT DRIVE UNTIL YOUR DOCTOR CONFIRMS IT IS SAFE.",
                        },
                        {
                            type: "text",
                            text: "According to driving standards, you must be able to read a vehicle license plate from a distance of 20.5 meters. If surgery was performed on only one eye, exercise extra caution when driving, as binocular (stereoscopic) vision may be temporarily affected and distance perception can be more difficult.",
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Sports",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Avoid intense physical activity until your eyes have fully recovered (typically about one month). The table below provides general guidance on return-to-activity timelines. Your doctor may advise differently depending on your individual circumstances. If you participate in sports professionally or have questions about other activities, please consult your doctor.",
                        },
                        {
                            type: "table",
                            gap: true,
                            headers: [
                                "Activity type",
                                "iQ LASIK Oxygen",
                                "SportLine LASEK",
                            ],
                            rows: [
                                ["Recreational running", "2 weeks", "2 weeks"],
                                ["Aerobics", "1 week", "1 week"],
                                ["Yoga / Pilates", "1 week", "1 week"],
                                ["Weight lifting", "2 weeks", "2 weeks"],
                                ["Sauna and steam room", "1 month", "1 month"],
                                ["Swimming", "1 month", "1 month"],
                                [
                                    "Football and non-contact martial arts",
                                    "1 month",
                                    "1 month",
                                ],
                                [
                                    "Skiing / Snowboarding, Tennis, Squash, Cricket",
                                    "1 month",
                                    "1 month",
                                ],
                                [
                                    "Rugby, Contact martial arts",
                                    "3 months",
                                    "6 weeks",
                                ],
                                [
                                    "Diving (deeper than 30 feet / about 9 m)",
                                    "3 months",
                                    "3 months",
                                ],
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "During sports activities, protect your eyes from sweat for at least two weeks by wearing a headband.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "General recommendations",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Shower and bath",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Avoid getting water in your eyes during the first seven days after surgery.",
                                "When showering, stand a step farther back than usual so water does not get into your eyes.",
                                "When washing your hair, tilt your head back so shampoo does not run into your eyes.",
                                "If shampoo, soap, or any product gets into your eyes—DO NOT RUB THEM. Use lubricating drops to rinse and relieve burning.",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Makeup" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Do not wear eye makeup for the first two weeks after surgery.",
                                "Facial cosmetics (cream, foundation, blush, etc.) can be used later, but do not apply them too close to the eyes.",
                                "Do not use waterproof mascara for at least one month, as it is harder to remove.",
                                "For one month after surgery, avoid getting makeup or makeup-remover products into your eyes. If this happens, rinse your eyes with drops and DO NOT RUB THEM.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                { subtitle: true, value: "Vacation / travel" },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Traveling abroad is not recommended during the first week after surgery so you can attend the first two postoperative check-ups.",
                                "When traveling to hot countries, wear high-quality sunglasses with full UVA and UVB protection. Avoid sunbathing for one month after surgery.",
                                "During winter sports, wear quality sunglasses or a mask with full UVA and UVB protection.",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Reading" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Depending on the extent of correction, reading small print may be difficult for several weeks—this is normal.",
                                "Patients over 45 may need reading glasses. This is a natural age-related process and can be helpful for near-vision tasks (reading, sewing, knitting, etc.).",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Tanning bed" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Avoid tanning beds for one month after laser correction and for three months after cataract treatment.",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Smoking" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "If possible, avoid smoking and staying in smoky environments for one week.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    bold: true,
                                    value: "Additional recommendations",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { subtitle: true, value: "iQ LASIK Oxygen" },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Bandage contact lenses",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Bandage lenses are most commonly used after LASEK to protect the epithelium (outer layer) and reduce discomfort. You must return to the clinic after 3–4 days for removal. Some patients do not tolerate lenses—then they are removed earlier. Discomfort and/or pain may occur while wearing or removing the lens; it usually resolves within 6–24 hours. Rest and take pain relief if needed, but NEVER EXCEED THE DOSE AND NEVER REMOVE THE LENSES YOURSELF.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "If a lens falls out and discomfort occurs, do not try to put it back in. Continue using the prescribed drops and attend your follow-up visits.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Healing effect (haze)",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Mild corneal haze may occur within 3–4 weeks after LASEK. This is a normal part of the healing process.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Haze is usually minimal and unnoticeable, but in rare cases it may persist for 6–12 months. The risk may increase with certain medications—your doctor will advise if this applies to you. In severe cases, vision may worsen and treatment may be required. Steroid drops or other therapies can be prescribed.",
                        },
                        {
                            type: "text",
                            text: "Our specialists will do everything possible to protect and improve your vision. Thousands of patients who have regained comfortable vision are the best confirmation of modern technology and proper postoperative support.",
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Инструкции после лазерной коррекции зрения",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Уход за пациентом в клинике «Новое зрение» (Вильнюс, Литва) не заканчивается после того, как вы почувствовали улучшение. Мы обеспечиваем послеоперационное наблюдение и восстановительное сопровождение в течение необходимого периода согласно рекомендациям врача, включая визиты после выписки. Это не распространяется на физиологические изменения (ухудшение состояния) глаз или на осложнения и заболевания, не связанные с проведённой лазерной коррекцией зрения.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Инструкция по проведению операции",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Для подготовки к операции:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "внимательно ознакомьтесь с вашей формой согласия на проведение лазерной коррекции зрения;",
                                "ешьте и пейте как обычно (алкоголь нельзя употреблять за сутки до операции);",
                                "наденьте свободную, неворсистую одежду с длинными рукавами, в которой вам будет комфортно;",
                                "не используйте макияж, парфюм и лосьон после бритья;",
                                "возьмите с собой солнцезащитные очки.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "После операции вы получите:",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "рецепт на лекарства;",
                                "инструкции по медицинскому применению препаратов;",
                                "экстренный контактный номер телефона (для ночи после операции);",
                                "приглашение на послеоперационную консультацию.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    bold: true,
                                    value: "Возвращение домой",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "Не покидайте клинику без сопровождения, поскольку при возвращении домой вам может потребоваться помощь. Оптимально, если в день операции вас проводит друг или родственник. Если такой возможности нет, рекомендуем заранее организовать транспорт. После лазерной коррекции зрения или лечения катаракты перелёты не запрещены, однако мы не советуем планировать полёт сразу после вмешательства. В этот период зрение может оставаться слегка размытым, а чувствительность к свету — повышенной. Также желательно обсудить с врачом на послеоперационных консультациях любые поездки, запланированные в течение первого месяца после операции.",
                        },
                        {
                            type: "text",
                            text: "Рекомендации на послеоперационный период",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "В первый день (на следующий после операции):",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "старайтесь сохранять спокойствие;",
                                "по возможности меньше двигайте глазами;",
                                "постарайтесь не зажмуривать глаза;",
                                "НЕ ТРИТЕ глаза;",
                                "избегайте занятий, требующих зрительной концентрации (просмотр телевизора, работа за компьютером).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Если у вас есть маленькие дети, рекомендуем заранее организовать помощь родственников или друзей на первые два дня, особенно после лазерной коррекции. Сведите к минимуму употребление алкоголя в течение первых 2–3 дней, так как он может взаимодействовать с лекарствами и усиливать сухость глаз. Больше отдыхайте и не перегружайте глаза.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Лекарственные средства",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Вы получите рецепт на препараты для послеоперационного ухода. Их стоимость не входит в стоимость лечения. Применяйте лекарства строго по схеме, назначенной хирургом, и храните их в прохладном сухом месте.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Как правильно закапывать глазные капли:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "всегда мойте руки перед использованием глазных капель;",
                                "Запрокиньте голову назад и смотрите в потолок;",
                                "Капните лекарство прямо на глазное яблоко. НЕ ОТТЯГИВАЙТЕ ВЕКО;",
                                "Старайтесь не касаться глаза и века кончиком флакона.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Помните: сразу после применения капель и мазей зрение может временно становиться размытым. Соблюдайте инструкцию, в каком порядке использовать препараты и какой интервал выдерживать. Если вы пропустили приём, не закапывайте две или три дозы подряд. На этапе восстановления может быть удобнее, если кто-то поможет вам с закапыванием.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Дополнительные меры предосторожности:",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            list: [
                                "не допускайте, чтобы другие люди пользовались вашими глазными каплями;",
                                "не прикасайтесь горлышком флакона к глазу или любой поверхности;",
                                "сразу после применения закрывайте флакон с каплями или мазью крышкой;",
                                "держите плотно закрытый флакон в вертикальном положении;",
                                "выбросьте все капли и мази после завершения курса лечения.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "НЕ ПРЕВЫШАЙТЕ РЕКОМЕНДОВАННУЮ ДОЗУ.",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Уход за глазами",
                                },
                            ],
                        },
                        {
                            type: "text",
                            text: "После операции могут наблюдаться:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "слезотечение;",
                                "светочувствительность (при выходе на улицу носите солнцезащитные очки);",
                                "ощущение «песка» / инородного тела;",
                                "воспаление глаз, тяжесть при открывании;",
                                "расширенные зрачки;",
                                "отёчные и/или опущенные веки;",
                                "«мушки» и пятна перед глазами.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Как правило, это нормальные временные последствия вмешательства.",
                        },
                        {
                            type: "text",
                            text: [
                                { bold: true, value: "Практические советы:" },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Если нужно очистить область вокруг глаз, используйте марлю, смоченную в охлаждённой кипячёной воде, и старайтесь не касаться поверхности глаза.",
                                "Не применяйте коммерческие растворы для промывания глаз. При ощущении инородного тела, сухости или давления в глазу(-ах) используйте «искусственную слезу» без консервантов — такие капли доступны в аптеке без рецепта.",
                                "Если веки отекли, появился зуд и покраснение глаз (в том числе через несколько дней после операции), это может быть реакцией на лекарственные средства. Обратитесь в клинику за рекомендациями по альтернативной схеме.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "Ощущение дискомфорта в глазах",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Благодаря местным анестезирующим каплям операция проходит без боли. Дискомфорт через час после вмешательства — обычная ситуация, поскольку действие анестезии заканчивается. Ощущения могут напоминать «песок» или инородное тело и сохраняться 24–38 часов. Лазерная коррекция зрения обычно переносится легко, однако после операции возможно выраженное чувство дискомфорта — с ним помогают справиться назначенные препараты и бандажные контактные линзы.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "Опасность при сильной боли",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Если сильная боль сохраняется спустя 24 часа, обратитесь в клинику «Новое зрение» (Вильнюс, Литва) в рабочие часы, чтобы записаться на послеоперационный приём. Если клиника закрыта или вам нужна консультация в выходной день, позвоните по указанному номеру — сотрудник свяжется с вашим хирургом и организует обратный звонок.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Маловероятно, что врачи скорой помощи знакомы со спецификой осложнений после лазерных процедур. При появлении признаков осложнений (что встречается редко) как можно быстрее обращайтесь в клинику.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Послеоперационный уход",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Обязательно приходите на назначенные контрольные визиты в соответствии с рекомендациями врача. Один или два визита после операции являются обязательными. Послеоперационное сопровождение в клинике «Новое зрение» проводится в рамках установленного плана наблюдения.",
                        },
                        {
                            type: "table",
                            gap: true,
                            headers: [
                                "Лечение",
                                "Первый визит",
                                "Второй визит",
                                "Третий визит",
                            ],
                            rows: [
                                [
                                    "LASIK",
                                    "3–4 дня*",
                                    "7–14 дней и выписка, если всё хорошо",
                                    "1 месяц",
                                ],
                                [
                                    "LASEK",
                                    "3–4 дня*",
                                    "1 месяц и выписка, если всё хорошо",
                                    "",
                                ],
                                [
                                    "Катаракта",
                                    "1 день",
                                    "1 неделя и выписка, если всё хорошо",
                                    "нет необходимости",
                                ],
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "* Если необходимо снять бандажные линзы, визит в наш центр обязателен через 3–4 дня или на 7–14-й день.",
                        },
                        {
                            type: "text",
                            text: "Отменить приём можно за 3 дня; при более поздней отмене может взиматься плата в размере 50% стоимости услуги. Если вы опаздываете на приём на двадцать и более минут, вам потребуется записаться на другое время.",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "В отдельных случаях хирург может назначить дополнительные глазные капли. Назначенные препараты приобретаются в аптеке по рецепту.",
                        },
                        {
                            type: "text",
                            text: "Если вам удобнее, мы можем направить вас на послеоперационный осмотр в один из центров оптической коррекции в вашем городе — услуги такого центра оплачиваются вами самостоятельно. Иногда это экономичнее, чем поездка в клинику. Результаты осмотра будут направлены в клинику и внесены в вашу медицинскую карту. В таком случае обязательно попросите копию отчёта послеоперационного осмотра.",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Возвращение к повседневной жизни",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "Полезные рекомендации",
                        },
                        {
                            type: "list",
                            list: [
                                "Если вы работаете в пыльной среде (например, на стройплощадках), защищайте глаза очками типа «маска» как минимум в течение одного месяца.",
                                "При работе за дисплеями каждые 45 минут делайте 15-минутные перерывы, чтобы снизить усталость глаз в первые 2–3 недели.",
                                "В первые несколько недель рекомендуется носить солнцезащитные очки на улице — это защитит глаза от пыли и уменьшит временную светочувствительность.",
                                "Пациентам после операции по удалению катаракты следует избегать подъёма тяжестей в течение первых 4 недель.",
                                "На послеоперационных консультациях врач определит, соответствует ли ваше зрение необходимым стандартам.",
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "НЕ САДИТЕСЬ ЗА РУЛЬ, ПОКА ВРАЧ НЕ ПОДТВЕРДИТ, ЧТО ЭТО БЕЗОПАСНО.",
                        },
                        {
                            type: "text",
                            text: "Согласно стандартам вождения, вы должны быть способны прочитать номерной знак автомобиля с расстояния 20,5 метра. Если операция выполнена только на одном глазу, будьте особенно осторожны при вождении: бинокулярное (стереоскопическое) зрение временно меняется, и оценка расстояния может быть затруднена.",
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Спорт",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Избегайте интенсивных физических нагрузок до полного восстановления (обычно около месяца). Таблица ниже содержит ориентировочные сроки возвращения к базовым видам активности. Врач может дать иные рекомендации с учётом ваших индивидуальных особенностей. Если вы профессионально занимаетесь спортом или у вас есть вопросы по другим нагрузкам, обязательно обсудите это с врачом.",
                        },
                        {
                            type: "table",
                            gap: true,
                            headers: [
                                "Вид деятельности",
                                "iQ LASIK Oxygen",
                                "SportLine LASEK",
                            ],
                            rows: [
                                ["Оздоровительный бег", "2 недели", "2 недели"],
                                ["Аэробика", "1 неделя", "1 неделя"],
                                ["Йога / Пилатес", "1 неделя", "1 неделя"],
                                ["Поднятие тяжестей", "2 недели", "2 недели"],
                                ["Сауна и парная", "1 месяц", "1 месяц"],
                                ["Плавание", "1 месяц", "1 месяц"],
                                [
                                    "Футбол и неконтактные боевые искусства",
                                    "1 месяц",
                                    "1 месяц",
                                ],
                                [
                                    "Лыжи / Сноуборд, Теннис, Сквош, Крикет",
                                    "1 месяц",
                                    "1 месяц",
                                ],
                                [
                                    "Регби, Контактные боевые искусства",
                                    "3 месяца",
                                    "6 недель",
                                ],
                                [
                                    "Дайвинг (глубже 30 футов)",
                                    "3 месяца",
                                    "3 месяца",
                                ],
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Во время занятий спортом как минимум две недели защищайте глаза от попадания пота, используя повязку на голову.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Общие рекомендации",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Душ и ванна" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Избегайте попадания воды в глаза в течение первых семи дней после операции.",
                                "Во время душа стойте на шаг дальше, чем обычно, чтобы вода не попадала в глаза.",
                                "При мытье головы запрокидывайте ее назад, чтобы шампунь не попадал в глаза.",
                                "Если шампунь, мыло или другой продукт попал в глаза — НЕ ТРИТЕ ИХ! Используйте увлажняющие капли, чтобы промыть глаза и уменьшить жжение.",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Макияж" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "В течение первых двух недель после операции макияж наносить нельзя.",
                                "Косметикой для лица (крем, тональный крем, румяна и т.п.) можно пользоваться позже, но не наносите слишком близко к глазам.",
                                "Не используйте водостойкую тушь как минимум месяц — её сложнее удалять.",
                                "В течение месяца после операции избегайте попадания средств макияжа и демакияжа в глаза. Если это произошло, промойте глаза каплями и НИ В КОЕМ СЛУЧАЕ НЕ ТРИТЕ ИХ.",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Отпуск" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Не рекомендуется выезжать за границу в течение недели после операции, чтобы иметь возможность прийти на первые два послеоперационных осмотра.",
                                "При поездках в жаркие страны используйте качественные солнцезащитные очки с полной защитой от УФ-излучения спектров A и B. В течение месяца после операции избегайте загара.",
                                "Во время занятий зимними видами спорта носите очки или маску с полной защитой от УФ-излучения спектров A и B.",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Чтение" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "В зависимости от объёма коррекции чтение мелкого шрифта может быть затруднено несколько недель — это нормально.",
                                "Пациентам старше 45 лет могут понадобиться очки для близи. Это естественный возрастной процесс и может быть полезен для занятий, требующих хорошего зрения вблизи (чтение, шитьё, вязание и т.д.).",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Солярий" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Избегайте солярия в течение месяца после лазерной коррекции и трех месяцев после лечения катаракты.",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Курение" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Если есть возможность, избегайте курения и пребывания в задымлённых помещениях в течение недели.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    bold: true,
                                    value: "Дополнительные рекомендации",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { subtitle: true, value: "iQ LASIK Oxygen" },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Бандажные контактные линзы",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Бандажные линзы чаще применяются после операции LASEK — для защиты эпителия (наружного слоя) и уменьшения дискомфорта. Через 3–4 дня необходимо прийти в клинику, чтобы их сняли. Иногда линзы переносятся плохо — тогда их снимают раньше. Во время ношения или снятия возможны дискомфорт и/или боль; обычно они проходят в течение 6–24 часов. Отдыхайте и при необходимости принимайте обезболивающее, но НИКОГДА НЕ ПРЕВЫШАЙТЕ ДОЗУ И НЕ СНИМАЙТЕ ЛИНЗЫ САМОСТОЯТЕЛЬНО.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Если линза выпала и появился дискомфорт, не пытайтесь установить её обратно. Продолжайте использовать капли по назначению и обязательно приходите на контрольные осмотры.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Эффект восстановления (помутнение)",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "В течение 3–4 недель после операции LASEK возможно лёгкое помутнение роговицы — это естественная часть процесса восстановления.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Обычно помутнение минимальное и почти незаметное, но в редких случаях может сохраняться 6–12 месяцев. Риск повышается при использовании некоторых препаратов — врач предупредит, если это относится к вашей ситуации. При выраженных проявлениях зрение может снижаться, и тогда потребуется лечение. Могут быть назначены стероидные капли или другие методы терапии.",
                        },
                        {
                            type: "text",
                            text: "Наши специалисты сделают всё возможное для сохранения и улучшения вашего зрения. Тысячи пациентов клиники «Новое зрение», вернувших себе комфортное зрение, — лучшее подтверждение эффективности современных технологий и правильного послеоперационного сопровождения.",
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keySlugPatientsInstruction.find(
            k => k.key === "reminders-and-instructions-for-patients"
        )!,
        lt: {
            title: "Priminimai ir instrukcijos pacientams",
            content: [],
        },
        en: { title: "Reminders and instructions for patients", content: [] },
        ru: { title: "Памятки и инструкции для пациентов", content: [] },
    },
];

export const eyeDiseaseData: EyeDiseaseType[] = [
    {
        name: keyEyeDisease.find(d => d.key === "glaukoma")!,
        lt: {
            titleSEO:
                "Glaukoma – simptomai, priežastys ir gydymas | Naujas Regėjimas",
            descriptionSEO:
                "Glaukoma: pagrindiniai atsiradimo veiksniai ir šiuolaikiniai veiksmingo gydymo metodai ✴️ Akių ligų centras Nr. 1 Lietuvoje. ✅ Šiuolaikinė diagnostika ir veiksmingas gydymas. 👍 Laiko patikrinta reputacija",
            title: "Glaukoma",
            content: [
                {
                    title: "Kas yra glaukoma?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "GGlaukoma yra bendrinis pavadinimas, apibūdinantis gausybę sutrikimų, kurie pažeidžia regos nervą ir lemia apakimą. Paprastai, susirgus šia liga, neišvengiamai gresia prarasti regėjimą, tačiau, nustačius anksti, glaukomą galima gydyti. Deja, net 10 proc. tinkamai gydytų žmonių vis tiek apanka. Dažnai glaukomos nelydi jokie akivaizdūs požymiai ar simptomai ir ji nustatoma tik tuomet, kai ima silpti rega. Geriausias apsisaugojimo būdas – reguliariai tikrintis akis.",
                        },
                    ],
                },
                {
                    title: "Glaukomos priežastys",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Dažniausiai glaukomos žalą regos nervui sukelia padidėjęs akispūdis, kurį savo ruožtu sukelia daug įvairių faktorių, priklausomai nuo glaukomos tipo. Vis dėlto, išsivysčius normalaus akispūdžio glaukomai, žalos regos nervui priežastis ne visuomet yra žinoma.",
                        },
                    ],
                },
                {
                    title: "Glaukomos rizikos faktoriai",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Glaukoma yra antra pagal paplitimą regos netekimo priežastis pasaulyje. Kadangi šios ligos simptomų paprastai būna labai nedaug, ji vadinama tyliu regos vagimi. Rekomenduojama reguliariai tikrintis akis, ypač jei nustatomas vienas ar daugiau glaukomos rizikos faktorių.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Šie faktoriai skiriasi priklausomai nuo glaukomos tipo.",
                        },
                    ],
                },
                {
                    title: "Atvirojo kampo glaukoma",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Atvirojo kampo glaukoma, kartais dar vadinama pirmine atvirojo kampo glaukoma, siekiant ją atskirti nuo antrinės, yra labiausiai paplitęs glaukomos tipas. Jos rizikos faktoriai yra:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "rasė: penkis kartus dažniau pasitaiko tarp afroamerikiečių nei baltaodžių ir paprastai išsivysto anksčiau;",
                                "amžius: glaukomos išsivystymo tikimybė yra šešis kartus didesnė vyresniems nei 60 metų žmonėms;",
                                "šeimos istorija: jei kiti šeimos nariai serga glaukoma, jos rizika asmeniui išauga 4–9 kartus;",
                                "vaistai: steroidų vartojimas padidina atvirojo kampo glaukomos riziką iki 40 proc.;",
                                "ligos: aukštas kraujo spaudimas padidina atvirojo kampo glaukomos riziką.",
                            ],
                        },
                    ],
                },
                {
                    title: "Uždarojo kampo glaukoma",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Uždarojo kampo glaukoma, kartais dar vadinama ūmine arba siaurojo kampo glaukoma, išsivysto labai greitai ir baigiasi staigiu apakimu. Jos rizikos faktoriai yra:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "prastas regėjimas: jei esate toliaregis, glaukomos rizika yra didesnė;",
                                "amžius: senstant uždarojo kampo glaukomos rizika auga;",
                                "rasė: azijiečiai ir eskimų palikuonys patenka į didesnės rizikos grupę;",
                                "lytis: baltaodės moterys glaukoma serga dažniau.",
                            ],
                        },
                    ],
                },
                {
                    title: "Antrinė glaukoma",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Antrinė glaukoma – tai glaukoma, kurią lemia kitas sutrikimas. Ji gali būti tiek atvirojo, tiek uždarojo kampo. Dažnos antrinės glaukomos priežastys yra:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "akies trauma;",
                                "ligos: cukrinis diabetas ir katarakta didina tam tikrų antrinių glaukomos formų riziką;",
                                "rasė: skandinavų palikuonys dažniau serga vieno tipo antrine glaukoma, baltaodžiai – kito;",
                                "lytis: baltaodės moterys dažniau serga specifinio tipo antrine glaukoma;",
                                "vaistai: kai kurie vaistai didina tiek atvirojo, tiek uždarojo kampo antrinės glaukomos riziką.",
                            ],
                        },
                    ],
                },
                {
                    title: "Regos saugojimas",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Glaukomos rizikos faktorių yra daug, tačiau net jei Jums netaikomas nė vienas iš anksčiau minėtų veiksnių, vis tiek galite susirgti. Rekomenduojama reguliariai tikrinantis akis įtraukti ir patikrinimą dėl glaukomos, ypač senstant.",
                        },
                    ],
                },
                {
                    title: "Glaukomos diagnozavimas",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Anksti aptikti glaukomą per reguliarius akių patikrinimus itin svarbu – ją bus lengviau gydyti ir apsisaugoti nuo regos netekimo. Per įprastinę akių patikrą turėtumėte pasitikrinti ir dėl glaukomos:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "kas 2–4 metus, jei Jums mažiau nei 40 metų;",
                                "kas 1–3 metus, jei Jums nuo 40 iki 54 metų;",
                                "kas 1–2 metus, jei Jums nuo 55 iki 64 metų;",
                                "kasmet, jei Jums 65 ar daugiau metų.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Jei patenkate į aukštos rizikos grupę, turėtumėte pradėti tikrintis akis dėl šios ligos nuo 35-erių ir daryti tai kas 1–2 metus.",
                        },
                    ],
                },
                {
                    title: "Glaukomos tipai",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Glaukomos tipų yra daug ir įvairių. Dauguma jų siejami su padidėjusiu akispūdžiu, kai skysčio spaudimas akyje padidėja, todėl spaudžiamas ir pažeidžiamas regos nervas. Akispūdis didėja, kai akyje susikaupęs skystis negali pasišalinti per įprastinį kanalą, vadinamą atviruoju kampu, tarp rainelės ir ragenos. Šiuo metu žinomos glaukomos formos yra:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                [
                                    {
                                        bold: true,
                                        value: "Pirminė atvirojo kampo glaukoma",
                                    },
                                    {
                                        value: ", kai laikui bėgant atvirasis kampas užsikemša. Tai labiausiai paplitusi glaukomos forma.",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Uždarojo kampo glaukoma",
                                    },
                                    {
                                        value: ". Labiausiai paplitęs jos tipas yra įgimta glaukoma, kai vaikas gimsta jau su padidėjusiu akispūdžiu (įgimta būklė). Šia glaukoma serga maždaug 1 iš 10 000 kūdikių.",
                                    },
                                ],
                                [
                                    { bold: true, value: "Antrinė glaukoma" },
                                    {
                                        value: ", kai atvirasis kampas užsikemša dėl akies traumos, uždegimo, akies auglio, kataraktos ar diabeto.",
                                    },
                                ],
                                [
                                    { bold: true, value: "Vaikų glaukoma " },
                                    {
                                        value: "– labiausiai paplitęs jos tipas yra įgimta glaukoma, kai vaikas gimsta jau su padidėjusiu akispūdžiu (įgimta būklė). Šia glaukoma serga maždaug 1 iš 10 000 kūdikių.",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Normalaus akispūdžio glaukoma ",
                                    },
                                    {
                                        value: " išsivysto nepadidėjus akispūdžiui.",
                                    },
                                ],
                            ],
                        },
                    ],
                },
                {
                    title: "Glaukomos gydymas",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Glaukomos gydymas gali apsaugoti nuo regos netekimo, jei sutrikimas aptinkamas anksti. Ji gydoma:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "akių lašiukais;",
                                "chirurginiu būdu;",
                                "pasitelkus selektyvųjį gydymą lazeriu.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Glaukoma neišgydoma. Ją galima tik kontroliuoti ir stebėti visą gyvenimą. Jei Jums buvo paskirti vaistai nuo šios ligos, privalote juos vartoti, kaip nurodė gydytojas. Ligą galima diagnozuoti dar prieš pastebint simptomų. Juos pacientai vertina subjektyviai ir gydytojui jie ne visada gali būti aiškūs. Kita vertus, kartais požymiai būna objektyvūs ir aiškūs gydytojui, tačiau pacientas gali jų nepastebėti.",
                        },
                    ],
                },
            ],
        },
        en: {
            titleSEO:
                "Glaucoma – Symptoms, Causes, and Treatment | New Vision Clinic",
            descriptionSEO:
                "Glaucoma: main causes and modern approaches to effective treatment ✴️ The No. 1 Eye Disease Center in Lithuania. ✅ Modern diagnostics and effective treatment. 👍 A reputation proven over time",
            title: "Glaucoma",
            content: [
                {
                    title: "What is glaucoma?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Glaucoma is a collective term describing a group of disorders that damage the optic nerve and can lead to blindness. Once the disease develops, there is a significant risk of vision loss; however, when detected early, glaucoma can be treated. Unfortunately, even about 10% of properly treated patients still lose their sight. Glaucoma often has no obvious signs or symptoms and is only detected once vision begins to deteriorate. The best prevention is regular eye examinations for glaucoma.",
                        },
                    ],
                },
                {
                    title: "Causes of glaucoma",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "In most cases, optic nerve damage in glaucoma is caused by increased intraocular pressure, which may result from various factors depending on the type of glaucoma. However, in normal-tension glaucoma, the cause of optic nerve damage is not always known.",
                        },
                    ],
                },
                {
                    title: "Risk factors for glaucoma",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Glaucoma is the second leading cause of vision loss worldwide. Because signs and symptoms are often minimal, it is referred to as the “silent thief of sight.” Regular eye examinations are recommended, especially if one or more risk factors are present.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "These risk factors vary depending on the type of glaucoma.",
                        },
                    ],
                },
                {
                    title: "Open-angle glaucoma",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Open-angle glaucoma, also known as primary open-angle glaucoma to distinguish it from secondary forms, is the most common type of glaucoma. Risk factors include:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "race: five times more common among African Americans than Caucasians and often develops earlier;",
                                "age: the risk is six times higher in people over 60 years old;",
                                "family history: the risk increases 4–9 times if close relatives have glaucoma;",
                                "medications: steroid use increases the risk of open-angle glaucoma by up to 40%;",
                                "medical conditions: high blood pressure increases the risk of open-angle glaucoma.",
                            ],
                        },
                    ],
                },
                {
                    title: "Angle-closure glaucoma",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Angle-closure glaucoma, also called acute or narrow-angle glaucoma, develops rapidly and can result in sudden blindness. Risk factors include:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "refractive error: farsighted individuals have a higher risk;",
                                "age: the risk increases with age;",
                                "race: people of Asian descent and Inuit ancestry are at higher risk;",
                                "gender: among Caucasians, women are affected more often.",
                            ],
                        },
                    ],
                },
                {
                    title: "Secondary glaucoma",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Secondary glaucoma develops as a result of another condition and may be either open-angle or angle-closure. Common causes include:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "eye injury: trauma caused by blunt or sharp objects;",
                                "diseases: diabetes and cataracts increase the risk of certain secondary glaucomas;",
                                "race: specific types are more common among people of Scandinavian descent or Caucasians;",
                                "gender: certain types occur more frequently in Caucasian women;",
                                "medications: some drugs increase the risk of both open-angle and angle-closure secondary glaucoma.",
                            ],
                        },
                    ],
                },
                {
                    title: "Protecting your vision",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "There are many risk factors for glaucoma, but even without them, the disease may still develop. Regular glaucoma screening should be part of routine eye examinations, especially as you age. Contact your local ophthalmologist who performs glaucoma testing to protect yourself from irreversible blindness.",
                        },
                    ],
                },
                {
                    title: "Diagnosing glaucoma",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Early detection of glaucoma through regular eye exams plays a crucial role in treatment and prevention of vision loss. Recommended screening intervals are:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "every 2–4 years if under 40;",
                                "every 1–3 years between ages 40–54;",
                                "every 1–2 years between ages 55–64;",
                                "annually if 65 or older.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Individuals at high risk should begin glaucoma screening at age 35 and repeat it every 1–2 years.",
                        },
                    ],
                },
                {
                    title: "Types of glaucoma",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "There are many different types of glaucoma. Most are associated with increased intraocular pressure that damages the optic nerve.",
                        },
                    ],
                },
                {
                    title: "Glaucoma treatment",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Glaucoma treatment can prevent vision loss if the condition is detected early. Treatment options include:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "eye drops;",
                                "surgical treatment;",
                                "selective laser therapy.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Glaucoma is incurable. It can only be controlled and monitored throughout life. If you have been prescribed medication for this condition, you must take it exactly as directed by your doctor. Signs of glaucoma DO exist. The disease can be diagnosed even before symptoms become noticeable. Patients often perceive symptoms subjectively, and they may not always be clear to the doctor. Conversely, some signs may be objective and evident to the doctor, but unnoticed by the patient.",
                        },
                    ],
                },
            ],
        },
        ru: {
            titleSEO:
                "Глаукома - симптомы, причины и лечение | Клиника Новое Зрение",
            descriptionSEO:
                "Глаукома: основные факторы возникновения и современные подходы к эффективному лечению ✴️ Центр глазных болезней № 1 в Литве. ✅ Современная диагностика и эффективное лечение. 👍 Репутация, проверенная временем",
            title: "Глаукома",
            content: [
                {
                    title: "Что такое глаукома?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Глаукома — это общее название группы заболеваний, которые поражают зрительный нерв и приводят к слепоте. Как правило, при развитии этого заболевания существует высокий риск потери зрения, однако при раннем выявлении глаукому можно лечить. К сожалению, даже около 10 % пациентов, получающих надлежащее лечение, всё равно теряют зрение. Часто глаукома не сопровождается явными признаками или симптомами и выявляется только тогда, когда начинает ухудшаться зрение. Лучший способ защиты — регулярные обследования глаз на наличие глаукомы.",
                        },
                    ],
                },
                {
                    title: "Причины глаукомы",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Чаще всего повреждение зрительного нерва при глаукоме вызывается повышенным внутриглазным давлением, которое, в свою очередь, может быть обусловлено множеством факторов в зависимости от типа глаукомы. Однако при глаукоме нормального давления причина повреждения зрительного нерва не всегда известна.",
                        },
                    ],
                },
                {
                    title: "Факторы риска глаукомы",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Глаукома является второй по распространённости причиной потери зрения в мире. Поскольку признаки и симптомы заболевания часто выражены слабо, её называют «тихим вором зрения». Рекомендуется регулярно проходить обследование глаз, особенно при наличии одного или нескольких факторов риска глаукомы.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Эти факторы различаются в зависимости от типа глаукомы.",
                        },
                    ],
                },
                {
                    title: "Открытоугольная глаукома",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Открытоугольная глаукома, также называемая первичной открытоугольной глаукомой для отличия от вторичной, является наиболее распространённым типом глаукомы. К факторам риска относятся:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "раса: встречается в пять раз чаще у афроамериканцев, чем у европеоидов, и развивается раньше;",
                                "возраст: риск развития глаукомы в шесть раз выше у людей старше 60 лет;",
                                "семейный анамнез: при наличии глаукомы у родственников риск увеличивается в 4–9 раз;",
                                "лекарственные препараты: приём стероидов повышает риск открытоугольной глаукомы до 40 %;",
                                "заболевания: артериальная гипертензия увеличивает риск открытоугольной глаукомы.",
                            ],
                        },
                    ],
                },
                {
                    title: "Закрытоугольная глаукома",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Закрытоугольная глаукома, также называемая острой или узкоугольной, развивается очень быстро и может привести к внезапной слепоте. Факторы риска включают:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "нарушение рефракции: при дальнозоркости риск глаукомы выше;",
                                "возраст: с возрастом риск закрытоугольной глаукомы увеличивается;",
                                "раса: азиаты и потомки эскимосов относятся к группе повышенного риска;",
                                "пол: среди европеоидов женщины болеют чаще.",
                            ],
                        },
                    ],
                },
                {
                    title: "Вторичная глаукома",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Вторичная глаукома — это глаукома, развивающаяся вследствие другого заболевания. Она может быть как открытоугольной, так и закрытоугольной. Частые причины вторичной глаукомы:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "травма глаза: повреждения тупыми или острыми предметами;",
                                "заболевания: сахарный диабет и катаракта повышают риск некоторых форм вторичной глаукомы;",
                                "раса: у потомков скандинавов чаще встречается один тип, у европеоидов — другой;",
                                "пол: у европеоидных женщин чаще встречается определённый тип вторичной глаукомы;",
                                "лекарственные препараты: некоторые медикаменты повышают риск как открытоугольной, так и закрытоугольной вторичной глаукомы.",
                            ],
                        },
                    ],
                },
                {
                    title: "Сохранение зрения",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Факторов риска глаукомы существует множество, однако даже при их отсутствии заболевание может развиться. Рекомендуется регулярно включать проверку на глаукому в план обследования глаз, особенно с возрастом. Обратитесь к офтальмологу, проводящему диагностику глаукомы, чтобы защитить себя от необратимой слепоты.",
                        },
                    ],
                },
                {
                    title: "Диагностика глаукомы",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Раннее выявление глаукомы при регулярных осмотрах глаз играет ключевую роль в лечении и предотвращении потери зрения. Рекомендуемые интервалы обследований:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "каждые 2–4 года — до 40 лет;",
                                "каждые 1–3 года — в возрасте 40–54 лет;",
                                "каждые 1–2 года — в возрасте 55–64 лет;",
                                "ежегодно — с 65 лет.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "При высоком риске обследования на глаукому рекомендуется начинать с 35 лет и проходить их каждые 1–2 года.",
                        },
                    ],
                },
                {
                    title: "Типы глаукомы",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Существует множество форм глаукомы. Большинство из них связано с повышенным внутриглазным давлением, которое приводит к повреждению зрительного нерва.",
                        },
                    ],
                },
                {
                    title: "Лечение глаукомы",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Лечение глаукомы может предотвратить потерю зрения при раннем выявлении заболевания. Основные методы лечения:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "глазные капли;",
                                "хирургическое вмешательство;",
                                "селективное лазерное лечение.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Глаукома неизлечима. Её можно только контролировать и наблюдать на протяжении всей жизни. Если вам назначены препараты для лечения этого заболевания, вы обязаны принимать их строго по назначению врача. Признаки глаукомы СУЩЕСТВУЮТ. Заболевание можно диагностировать ещё до появления заметных симптомов. Пациенты воспринимают симптомы субъективно, и врачу они не всегда бывают очевидны. В то же время признаки могут быть объективными и понятными врачу, но оставаться незамеченными пациентом.",
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keyEyeDisease.find(d => d.key === "astigmatizmas")!,
        lt: {
            titleSEO:
                "Astigmatizmas – simptomai, priežastys ir gydymas | Naujas Regėjimas",
            descriptionSEO:
                "Astigmatizmas: pagrindiniai atsiradimo veiksniai ir šiuolaikiniai veiksmingo gydymo metodai ✴️ Akių ligų centras Nr. 1 Lietuvoje. ✅ Šiuolaikinė diagnostika ir veiksmingas gydymas. 👍 Laiko patikrinta reputacija",
            title: "Astigmatizmas",
            content: [
                {
                    title: "Astigmatizmas – kas tai?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Astigmatizmas – refrakcijos yda, nulemianti iškraipytą ar miglotą matymą įvairiais atstumais. Tai lemia pakitusi ragenos forma, kuri tampa panaši į regbio kamuolį, o ragenos paviršius darosi asimetriškas. Dėl tokio gaubtumo susidaro laužiamosios šviesos spindulių gebos skirtumas, todėl žmogaus regėjimas, nepriklausomai nuo atstumo, yra neryškus. Pavyzdžiui, vienu kampu daikto kontūrai gali atrodyti ryškesni negu žiūrint kitu kampu.",
                        },
                    ],
                },
                {
                    title: "Astigmatizmo gydymas",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Peržvelgę šias lenteles galite numanyti, kokia operacija tiktų būtent Jums.",
                        },
                        {
                            type: "component",
                            gap: true,
                            component: <AstigmatismTable />,
                        },
                    ],
                },
                {
                    title: "Regos korekcija Lazeriu",
                    text: [
                        {
                            type: "text",
                            text: "Nors akiniai ir kontaktiniai lęšiai padeda koreguoti tam tikrus regėjimo sutrikimus, jie panašesni į tvarsčius ir ramentus, kurie tėra laikina pagalba, nepašalinanti problemos priežasties taip, kaip tą padarytų operacija.",
                        },
                    ],
                    btn: {
                        name: "daugiau detalių",
                        link: "/paslaugos/lazerine-akiu-korekcija",
                    },
                },
                {
                    title: "Intraokulinė korekcija",
                    text: [
                        {
                            type: "text",
                            text: "Intraokulinė korekcija atliekama koreguojant didelio laipsnio astigmatizmą. Jeigu buvo nustatyta, kad Jums negalima atlikti regėjimo korekcijos lazeriu, nenuleiskite rankų, nes yra kitų būdų susigrąžinti gerą regėjimą. Akių klinika „Naujas regėjimas“ siūlo operacijas, galinčias Jums padėti. Per konsultaciją nustatysime, ar galime Jus operuoti, ir kokia operacija Jums tinkamiausia.",
                        },
                    ],
                    btn: {
                        name: "daugiau detalių",
                        link: "/paslaugos/skaidraus-lesio-operacija/",
                    },
                },
            ],
        },
        en: {
            titleSEO:
                "Astigmatism – Symptoms, Causes, and Treatment | New Vision Clinic",
            descriptionSEO:
                "Astigmatism: main causes and modern approaches to effective treatment ✴️ The No. 1 Eye Disease Center in Lithuania. ✅ Modern diagnostics and effective treatment. 👍 A reputation proven over time",
            title: "Astigmatism",
            content: [
                {
                    title: "Astigmatism – what is it?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Astigmatism is a refractive error that causes distorted or blurred vision at various distances. It is caused by an altered shape of the cornea, which becomes similar to a rugby ball, making the corneal surface asymmetrical. Due to this curvature, differences in the refractive power of light rays occur, resulting in blurred vision regardless of distance. For example, the contours of an object may appear sharper from one angle than from another.",
                        },
                    ],
                },
                {
                    title: "Astigmatism treatment",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "By reviewing these tables, you can estimate which type of surgery may be suitable for you.",
                        },
                        {
                            type: "component",
                            gap: true,
                            component: <AstigmatismTable />,
                        },
                    ],
                },
                {
                    title: "Laser vision correction",
                    text: [
                        {
                            type: "text",
                            text: "Although glasses and contact lenses help correct certain visual impairments, they are more like bandages and crutches — a temporary aid that does not eliminate the underlying cause of the problem as surgery can.",
                        },
                    ],
                    btn: {
                        name: "more details",
                        link: "/paslaugos/lazerine-akiu-korekcija",
                    },
                },
                {
                    title: "Intraocular correction",
                    text: [
                        {
                            type: "text",
                            text: "Intraocular correction is performed to treat high-degree astigmatism. If it has been determined that laser vision correction is not suitable for you, do not lose hope — there are other ways to restore good vision. The eye clinic “New Vision” offers surgical procedures that may help you. During the consultation, we will determine whether surgery is possible for you and which procedure is most appropriate.",
                        },
                    ],
                    btn: {
                        name: "more details",
                        link: "/services/refractive-lens-exchange",
                    },
                },
            ],
        },
        ru: {
            titleSEO:
                "Астигматизм - симптомы, причины и лечение | Клиника Новое Зрение",
            descriptionSEO:
                "Астигматизм: основные факторы возникновения и современные подходы к эффективному лечению ✴️ Центр глазных болезней № 1 в Литве. ✅ Современная диагностика и эффективное лечение. 👍 Репутация, проверенная временем",
            title: "Астигматизм",
            content: [
                {
                    title: "Астигматизм — что это?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Астигматизм — это рефракционная ошибка, приводящая к искажённому или размытомy зрению на разных расстояниях. Причиной является изменённая форма роговицы, которая становится похожей на мяч для регби, из-за чего поверхность роговицы становится асимметричной. В результате такой кривизны возникает разница в преломляющей способности световых лучей, и зрение становится нечётким независимо от расстояния. Например, контуры предмета могут выглядеть более чёткими под одним углом, чем под другим.",
                        },
                    ],
                },
                {
                    title: "Лечение астигматизма",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Изучив эти таблицы, вы сможете предположить, какой вид операции может подойти именно вам.",
                        },
                        {
                            type: "component",
                            gap: true,
                            component: <AstigmatismTable />,
                        },
                    ],
                },
                {
                    title: "Лазерная коррекция зрения",
                    text: [
                        {
                            type: "text",
                            text: "Хотя очки и контактные линзы помогают корректировать некоторые нарушения зрения, они больше похожи на повязки и костыли — временную помощь, которая не устраняет причину проблемы так, как это делает операция.",
                        },
                    ],
                    btn: {
                        name: "подробнее",
                        link: "/paslaugos/lazerine-akiu-korekcija",
                    },
                },
                {
                    title: "Интраокулярная коррекция",
                    text: [
                        {
                            type: "text",
                            text: "Интраокулярная коррекция применяется при астигматизме высокой степени. Если установлено, что лазерная коррекция зрения вам не показана, не отчаивайтесь — существуют другие способы вернуть хорошее зрение. Глазная клиника «Новое зрение» предлагает операции, которые могут вам помочь. Во время консультации мы определим, возможна ли операция в вашем случае и какой метод будет наиболее подходящим.",
                        },
                    ],
                    btn: {
                        name: "подробнее",
                        link: "/uslugi/khirurgiia-prozrachnogo-khrustalika",
                    },
                },
            ],
        },
    },
    {
        name: keyEyeDisease.find(d => d.key === "toliaregyste")!,
        lt: {
            titleSEO:
                "Toliaregystė – simptomai, priežastys ir gydymas | Naujas Regėjimas",
            descriptionSEO:
                "Toliaregystė: pagrindiniai atsiradimo veiksniai ir šiuolaikiniai veiksmingo gydymo metodai ✴️ Akių ligų centras Nr. 1 Lietuvoje. ✅ Šiuolaikinė diagnostika ir veiksmingas gydymas. 👍 Laiko patikrinta reputacija",
            title: "Toliaregystė",
            content: [
                {
                    title: "Toliaregystės simptomai ir priežastys",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Toliaregystė, arba hipermetropija, – tai akomodacijos sutrikimas, sumažinantis galimybę ryškiai matyti daiktus, esančius arti. Dažniausiai toliaregystė pasitaiko vyresnio amžiaus žmonėms.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Jei esate toliaregis, arti esantys vaizdai atrodo miglotesni nei tolimi. Pavyzdžiui, jei sėdėtumėte restorano vasaros terasoje, meniu atrodytų neryškus, o aplinkinis kraštovaizdis būtų matomas sufokusuotas. Tačiau klaidinga nuomonė, kad toliaregiai visada gerai mato į tolį. Sunkūs toliaregystės atvejai gali paveikti ir toli esančių objektų matymą.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Toliaregystė susiformuoja, kai ragena yra per daug plokščia arba akis yra per trumpa. Šios sąlygos neleidžia šviesos spinduliams, kurie patenka į Jūsų akis, reikiamai lūžti ir fokusuotis tinklainėje. Vietoje to matomi vaizdai fokusuojami už tinklainės.",
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/farsightedness.jpg",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Jei esate toliaregis (-ė), matomi vaizdai fokusuojami už tinklainės, o ne joje.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Maždaug 11,8 mln. Jungtinių Valstijų gyventojų (arba apie 10 proc. populiacijos) turi tam tikro laipsnio toliaregystę. Ji išsivysto žymiai rečiau nei trumparegystė, o jos paplitimas dažnėja su pacientų amžiumi.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Ištyręs Jūsų akis, akių gydytojas išrašo receptą, kuriame nurodomas refrakcijos ydos laipsnis. Toliaregystės receptuose paprastai prieš pirmąjį skaičių būna pliuso ženklas.",
                        },
                    ],
                },
                {
                    title: "Toliaregystės gydymo būdai",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Toliaregystės korekcija priklauso nuo keleto faktorių, pvz., amžiaus, veiklos ir profesijos, bet paprastai ji koreguojama kontaktiniais lęšiais arba akiniais, pakeičiančiais šviesos spindulių kryptį akyje. Pacientams akinius ar kontaktinius lęšius tenka nešioti visą laiką arba tik skaitant, dirbant kompiuteriu ar užsiimant kitomis veiklomis, reikalaujančiomis gero regėjimo iš arti. Peržiūrėkite skiltį „Akių patikrinimas“, norėdami gauti daugiau informacijos apie tai, kaip gauti korekcinių akinių ar lęšių receptą, o skiltį „Pratimai akims“ – norėdami sužinoti, kaip išvengti regėjimo bėdų atliekant akių stiprinimo pratimus.",
                        },
                        {
                            type: "component",
                            gap: true,
                            component: <FarsightednessTable />,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Jei esate pasirengę atsisakyti korekcinių akinių ar kontaktinių lęšių visam laikui, peržiūrėkite šias regos korekcijos galimybes.",
                        },
                    ],
                },
                {
                    title: "Regos korekcija lazeriu",
                    text: [
                        {
                            type: "text",
                            text: "Nors akiniai ir kontaktiniai lęšiai padeda koreguoti tam tikrus regėjimo sutrikimus, jie panašesni į tvarsčius ir ramentus, kurie tėra laikina pagalba, nepašalinanti problemos priežasties taip, kaip tą padarytų operacija.",
                        },
                    ],
                    btn: {
                        name: "daugiau detalių",
                        link: "/paslaugos/lazerine-akiu-korekcija",
                    },
                },
                {
                    title: "Intraokulinė korekcija",
                    text: [
                        {
                            type: "text",
                            text: "Intraokulinė korekcija atliekama koreguojant didelio laipsnio hiperopiją. Jeigu buvo nustatyta, kad Jums negalima atlikti regėjimo korekcijos lazeriu, nenuleiskite rankų, nes yra kitų būdų susigrąžinti gerą regėjimą. Akių klinika „Naujas regėjimas“ siūlo operacijas, galinčias Jums padėti. Per konsultaciją nustatysime, ar Jus galima operuoti, ir kokia operacija tinkamiausia.",
                        },
                    ],
                    btn: {
                        name: "daugiau detalių",
                        link: "/paslaugos/skaidraus-lesio-operacija/",
                    },
                },
            ],
        },
        en: {
            titleSEO:
                "Farsightedness – Symptoms, Causes, and Treatment | New Vision Clinic",
            descriptionSEO:
                "Farsightedness: main causes and modern approaches to effective treatment ✴️ The No. 1 Eye Disease Center in Lithuania. ✅ Modern diagnostics and effective treatment. 👍 A reputation proven over time",
            title: "Farsightedness",
            content: [
                {
                    title: "Symptoms and causes of farsightedness",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Farsightedness, or hypermetropia, is an accommodation disorder in which the ability to see objects clearly at close distances is reduced. Farsightedness most commonly occurs in older people.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "If you are farsighted, objects that are close appear more blurred than those that are far away. For example, if you were sitting on a restaurant’s summer terrace, the menu would look blurry, while the surrounding landscape would appear in focus. However, it is a misconception that farsighted people always see well at a distance. Severe cases of farsightedness can also affect the vision of distant objects.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Farsightedness develops when the cornea is too flat or the eye is too short. These conditions prevent light rays entering the eye from bending properly and focusing on the retina. Instead, images are focused behind the retina.",
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/farsightedness.jpg",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "If you are farsighted, images are focused behind the retina rather than on the retina.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Approximately 11.8 million people in the United States (or about 10 percent of the population) have some degree of farsightedness. Farsightedness develops much less frequently than nearsightedness, and its prevalence increases with age.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "When an eye doctor examines your eyes, they issue a prescription that indicates the degree of refractive error. Prescriptions for farsightedness usually have a plus sign before the first number.",
                        },
                    ],
                },
                {
                    title: "Treatment options for farsightedness",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Correction of farsightedness depends on several factors, such as age, activities, and profession, but it is usually corrected with contact lenses or glasses that change the direction of light rays in the eye. Patients may need to wear glasses or contact lenses all the time or only for reading, computer work, or other tasks that require good near vision. Review the “Eye Examination” section to learn more about how to obtain a prescription for corrective glasses or lenses, and the “Eye Exercises” section to learn how to prevent vision problems by performing eye-strengthening exercises.",
                        },
                        {
                            type: "component",
                            gap: true,
                            component: <FarsightednessTable />,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "If you want and are ready to permanently give up corrective glasses or contact lenses, review the following vision correction options:",
                        },
                    ],
                },
                {
                    title: "Laser vision correction",
                    text: [
                        {
                            type: "text",
                            text: "Although glasses and contact lenses help correct certain visual impairments, they are more like bandages and crutches — a temporary aid that does not eliminate the underlying cause of the problem as surgery can.",
                        },
                    ],
                    btn: {
                        name: "more details",
                        link: "/paslaugos/lazerine-akiu-korekcija",
                    },
                },
                {
                    title: "Intraocular correction",
                    text: [
                        {
                            type: "text",
                            text: "Intraocular correction is performed to treat high-degree astigmatism. If it has been determined that laser vision correction is not suitable for you, do not lose hope — there are other ways to restore good vision. The eye clinic “New Vision” offers surgical procedures that may help you. During the consultation, we will determine whether surgery is possible for you and which procedure is most appropriate.",
                        },
                    ],
                    btn: {
                        name: "more details",
                        link: "/services/refractive-lens-exchange",
                    },
                },
            ],
        },
        ru: {
            titleSEO:
                "Дальнозоркость - симптомы, причины и лечение | Клиника Новое Зрение",
            descriptionSEO:
                "Дальнозоркость: основные факторы возникновения и современные подходы к эффективному лечению ✴️ Центр глазных болезней № 1 в Литве. ✅ Современная диагностика и эффективное лечение. 👍 Репутация, проверенная временем",
            title: "Дальнозоркость",
            content: [
                {
                    title: "Симптомы и причины дальнозоркости",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Дальнозоркость, или гиперметропия, — это нарушение аккомодации, при котором снижается способность чётко видеть предметы, находящиеся на близком расстоянии. Чаще всего дальнозоркость встречается у людей старшего возраста.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Если у вас дальнозоркость, объекты, расположенные близко, выглядят более размытыми, чем удалённые. Например, если бы вы сидели на летней террасе ресторана, меню выглядело бы нечетким, а окружающий пейзаж был бы в фокусе. Однако ошибочно полагать, что дальнозоркие люди всегда хорошо видят вдаль. Тяжёлые случаи дальнозоркости могут также влиять на зрение вдали.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Дальнозоркость формируется, когда роговица слишком плоская или глазное яблоко слишком короткое. Эти условия не позволяют световым лучам, попадающим в глаз, правильно преломляться и фокусироваться на сетчатке. Вместо этого изображение фокусируется за сетчаткой.",
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/farsightedness.jpg",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Если у вас дальнозоркость, изображение фокусируется за сетчаткой, а не на ней.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Около 11,8 миллиона жителей Соединённых Штатов (или примерно 10 процентов населения) имеют ту или иную степень дальнозоркости. Дальнозоркость развивается значительно реже, чем близорукость, и её распространённость увеличивается с возрастом пациентов.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Когда офтальмолог осматривает ваши глаза, он выписывает рецепт, в котором указывается степень рефракционного нарушения. В рецептах при дальнозоркости обычно перед первым числом стоит знак «плюс».",
                        },
                    ],
                },
                {
                    title: "Методы лечения дальнозоркости",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Коррекция дальнозоркости зависит от нескольких факторов, таких как возраст, вид деятельности и профессия, но чаще всего она осуществляется с помощью контактных линз или очков, изменяющих направление световых лучей в глазу. Пациентам может потребоваться носить очки или контактные линзы постоянно или только для чтения, работы за компьютером или выполнения других задач, требующих хорошего зрения вблизи. Ознакомьтесь с разделом «Проверка зрения», чтобы узнать больше о том, как получить рецепт на корректирующие очки или линзы, а также с разделом «Упражнения для глаз», чтобы получить информацию о профилактике проблем со зрением с помощью укрепляющих упражнений для глаз.",
                        },
                        {
                            type: "component",
                            gap: true,
                            component: <FarsightednessTable />,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Если вы хотите и готовы навсегда отказаться от корректирующих очков или контактных линз, ознакомьтесь со следующими возможностями коррекции зрения:",
                        },
                    ],
                },
                {
                    title: "Лазерная коррекция зрения",
                    text: [
                        {
                            type: "text",
                            text: "Хотя очки и контактные линзы помогают корректировать некоторые нарушения зрения, они больше похожи на повязки и костыли — временную помощь, которая не устраняет причину проблемы так, как это делает операция.",
                        },
                    ],
                    btn: {
                        name: "подробнее",
                        link: "/paslaugos/lazerine-akiu-korekcija",
                    },
                },
                {
                    title: "Интраокулярная коррекция",
                    text: [
                        {
                            type: "text",
                            text: "Интраокулярная коррекция применяется при астигматизме высокой степени. Если установлено, что лазерная коррекция зрения вам не показана, не отчаивайтесь — существуют другие способы вернуть хорошее зрение. Глазная клиника «Новое зрение» предлагает операции, которые могут вам помочь. Во время консультации мы определим, возможна ли операция в вашем случае и какой метод будет наиболее подходящим.",
                        },
                    ],
                    btn: {
                        name: "подробнее",
                        link: "/uslugi/khirurgiia-prozrachnogo-khrustalika",
                    },
                },
            ],
        },
    },
    {
        name: keyEyeDisease.find(d => d.key === "katarakta")!,
        lt: {
            titleSEO:
                "Каtarakta – simptomai, priežastys ir gydymas | Naujas Regėjimas",
            descriptionSEO:
                "Каtarakta: pagrindiniai atsiradimo veiksniai ir šiuolaikiniai veiksmingo gydymo metodai ✴️ Akių ligų centras Nr. 1 Lietuvoje. ✅ Šiuolaikinė diagnostika ir veiksmingas gydymas. 👍 Laiko patikrinta reputacija",
            title: "Каtarakta",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { bold: true, value: "Katarakta" },
                                {
                                    value: " – tai akies lęšiuko drumstis, dėl kurios žmogaus regėjimas tampa neryškus. Dar vienas kataraktos simptomas – blogas matymas esant ryškiai šviesai. Jeigu liga negydoma, regėjimas vis blogėja, tampa miglotas ir neryškus, spalvos atrodo pritemdytos (su geltonu arba rudu atspalviu). Skaityti ar vairuoti mažai apšviestoje aplinkoje tampa sudėtinga, nes suprastėja regėjimas naktį, o aplink žibintus kartais matomi ratilai. Pasitaiko, kad pacientai jaučia akių skausmą būdami ryškioje saulės šviesoje ar matydami stiprų akinantį atspindį nuo paviršių, pvz., priekinių automobilių stiklų. Šia liga dažniausiai serga 60–70 metų žmonės, nors pasitaiko atvejų, kai ji pasireiškia ir žymiai jaunesniems asmenims.",
                                },
                            ],
                        },
                    ],
                },

                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Pradinėje stadijoje kataraktos neįmanoma aptikti be oftalmologinio tyrimo. Ankstyvoje stadijoje apskritai nėra matomų ligos simptomų. Vystantis ligai, regėjimas pablogėja: pacientas pradeda neaiškiai matyti daiktus, tarsi jie būtų rūke, padidėja akių jautrumas žiūrint į ryškią šviesą, blogėja naktinis matymas, silpnėja spalvų suvokimas.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Nepaisant to, kad katarakta paprastai išsivysto dėl su amžiumi susijusių akių pokyčių, liga vis dažniau nustatoma sulaukusiems 40–50 metų ar dar jaunesniems pacientams. Vyresnių nei 80 metų asmenų kataraktos aptikimo rodiklis yra beveik 100 proc.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Daugumai senatvine (su amžiumi susijusia) katarakta sergančių žmonių liga daugelį metų vystosi labai lėtai ir neskausmingai, dažnai pradinė diagnozė nustatoma per įprastą gydytojo oftalmologo apžiūrą.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    value: "Gera žinia – katarakta gali būti sėkmingai gydoma. Mūsų klinikoje „Naujas regėjimas“ taikomas revoliucinis metodas „iQ-5 minutes“ – kataraktos šalinimas vandeniu.",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Kataraktos operacija atliekama netaikant narkozės ir yra neskausminga (pakanka vietinės anestezijos, įlašinus specialių anestetinių lašų). Per operaciją kataraktos paveiktas lęšis pašalinamas, o jo vietoje implantuojamas dirbtinis intraokulinis lęšis (IOL). Iš karto po operacijos regėjimas sugrįžta ir viską matote puikiai.",
                        },
                    ],
                },
            ],
        },
        en: {
            titleSEO:
                "Cataract – Symptoms, Causes, and Treatment | New Vision Clinic",
            descriptionSEO:
                "Cataract: main causes and modern approaches to effective treatment ✴️ The No. 1 Eye Disease Center in Lithuania. ✅ Modern diagnostics and effective treatment. 👍 A reputation proven over time",
            title: "Cataract",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { bold: true, value: "Cataract" },
                                {
                                    value: " is a clouding of the eye’s natural lens that causes blurred vision. Another symptom of cataracts is poor vision in bright light. If left untreated, vision gradually worsens, becoming hazy and unclear, and colors appear dull (with a yellow or brown tint). Reading or driving in low-light conditions becomes difficult due to deteriorating night vision, and halos may sometimes be seen around lights. In some cases, patients experience eye pain when exposed to bright sunlight or strong glare from reflective surfaces, such as car windshields. This condition most commonly affects people aged 60–70, although there are cases when it develops at a much younger age.",
                                },
                            ],
                        },
                    ],
                },

                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "In the early stages, cataracts cannot be detected without an ophthalmological examination. At this stage, there are generally no visible symptoms of the disease. As the condition progresses, vision deteriorates: patients begin to see objects unclearly, as if through fog, sensitivity to bright light increases, night vision worsens, and color perception weakens.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Although cataracts most often develop due to age-related changes in the eyes, the condition is increasingly diagnosed in patients aged 40–50 or even younger. In patients over the age of 80, the detection rate of cataracts is almost 100%.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "For most people with senile (age-related) cataracts, the disease develops very slowly and painlessly over many years, and the initial diagnosis is often made during a routine ophthalmologist’s examination.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    value: "However, the good news is that cataracts can be successfully treated. At our “Naujas regėjimas” clinic, we use the revolutionary “iQ-5 minutes” method – cataract removal using “water”.",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Cataract surgery is performed without general anesthesia and without pain (using local anesthesia with special anesthetic eye drops). During the procedure, the lens affected by cataracts is removed and replaced with an artificial intraocular lens (IOL). Immediately after the surgery, your vision returns and you can see clearly.",
                        },
                    ],
                },
            ],
        },
        ru: {
            titleSEO:
                "Катаракта - симптомы, причины и лечение | Клиника Новое Зрение",
            descriptionSEO:
                "Катаракта: основные факторы возникновения и современные подходы к эффективному лечению ✴️ Центр глазных болезней № 1 в Литве. ✅ Современная диагностика и эффективное лечение. 👍 Репутация, проверенная временем",
            title: "Катаракта",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { bold: true, value: "Катаракта" },
                                {
                                    value: " — это помутнение естественного хрусталика глаза, из-за которого зрение становится нечетким. Еще один симптом катаракты — ухудшение зрения при ярком освещении. Если заболевание не лечить, зрение постепенно ухудшается, становится туманным и размытым, а цвета выглядят приглушенными (с желтым или коричневым оттенком). Чтение или вождение в условиях слабого освещения становится затруднительным из-за ухудшения ночного зрения, а вокруг источников света иногда появляются ореолы. В некоторых случаях пациенты испытывают боль в глазах при ярком солнечном свете или при виде сильных бликов от отражающих поверхностей, например лобовых стекол автомобилей. Чаще всего этим заболеванием страдают люди в возрасте 60–70 лет, однако встречаются случаи его развития и в значительно более молодом возрасте.",
                                },
                            ],
                        },
                    ],
                },

                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "На начальной стадии катаракту невозможно выявить без офтальмологического обследования. На раннем этапе, как правило, отсутствуют видимые симптомы заболевания. По мере развития болезни зрение ухудшается: пациент начинает видеть предметы нечетко, словно в тумане, повышается чувствительность глаз к яркому свету, ухудшается ночное зрение, ослабевает восприятие цветов.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Несмотря на то что катаракта чаще всего развивается из-за возрастных изменений глаз, заболевание все чаще диагностируется у пациентов в возрасте 40–50 лет или даже моложе. У пациентов старше 80 лет показатель выявления катаракты составляет почти 100%.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "У большинства людей с возрастной катарактой заболевание развивается очень медленно и безболезненно в течение многих лет, и первоначальный диагноз часто ставится во время планового осмотра у офтальмолога.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    value: "Однако хорошая новость заключается в том, что катаракта успешно поддается лечению. В нашей клинике «Naujas regėjimas» применяется революционный метод «iQ-5 minutes» — удаление катаракты с помощью «воды».",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Операция по удалению катаракты проводится без общего наркоза и без боли (с применением местной анестезии — закапываются специальные анестезирующие капли). Во время операции пораженный катарактой хрусталик удаляется и на его место имплантируется искусственный интраокулярный хрусталик (IOL). Сразу после операции зрение возвращается, и вы начинаете видеть четко.",
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keyEyeDisease.find(d => d.key === "trumparegyste-miopija")!,
        lt: {
            titleSEO:
                "Trumparegystė – simptomai, priežastys ir gydymas | Naujas Regėjimas",
            descriptionSEO:
                "Trumparegystė: pagrindiniai atsiradimo veiksniai ir šiuolaikiniai veiksmingo gydymo metodai ✴️ Akių ligų centras Nr. 1 Lietuvoje. ✅ Šiuolaikinė diagnostika ir veiksmingas gydymas. 👍 Laiko patikrinta reputacija",
            title: "Trumparegystė",
            content: [
                {
                    title: "Trumparegystės (arba miopijos) simptomai ir priežastys",
                    text: [
                        {
                            type: "image",
                            image: "/images/myopia800.webp",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Jei esate trumparegis, toli esantys vaizdai atrodo migloti. Prisimerkus jie tampa ryškesni. Pavyzdžiui, trumparegiai studentai gali skaityti knygas ir matyti arti esančius studentus, bet dėstytojas ir lenta atrodo miglotai. Trumparegystė (dar vadinama miopija) susiformuoja, kai į akį patenkantys spinduliai laužiami per daug, todėl sufokusuojami taške priešais tinklainę. Akys su trumparegyste taip pat gali būti ilgesnės nei įprasta arba jų ragena gali būti per daug išlinkusi, dėl to matomi vaizdai nefokusuojami tinklainėje.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Kai esate trumparegis, matomi vaizdai fokusuojami ne akies galinėje dalyje, o priešais tinklainę. Trumparegystė paprastai susiformuoja vaikystėje ir pirmą kartą nustatoma, kai tėvai sužino, kad vaikas mokykloje negali perskaityti ant lentos rašomo teksto. Trumparegystė pablogėja paauglystės laikotarpiu ir stabilizuojasi ankstyvajame pilnametystės etape. Kai kurie ekspertai mano, kad trumparegystė yra paveldima. Ji gali susiformuoti kartu su arba be astigmatizmo. Tipinis trumparegystės nurodymas akinių recepte yra minusas prieš pirmąjį skaičių.",
                        },
                    ],
                },
                {
                    title: "Trumparegystės gydymo būdai",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Trumparegystės korekcija priklauso nuo įvairių faktorių: amžiaus, veiklos ir profesijos, bet paprastai ji koreguojama kontaktiniais lęšiais arba akiniais. Jie pagerina regėjimą nekeisdami akies anatomijos, tad, juos nuėmus, blogas regėjimas vėl sugrįžta. Peržiūrėkite skiltį „Akių patikrinimas“, norėdami gauti daugiau informacijos apie tai, kaip gauti korekcinių akinių ar kontaktinių lęšių receptą, o skiltį „Pratimai akims“ – norėdami sužinoti, kaip išvengti regėjimo problemų, atliekant akių stiprinimo pratimus. Jei esate pasirengę atsisakyti korekcinių akinių ar kontaktinių lęšių, peržvelkite šias regos korekcijos galimybes:",
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/blizorukost.webp",
                        },
                    ],
                },
                {
                    title: "Lazerinė regos korekcija",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Nors akiniai ir kontaktiniai lęšiai padeda koreguoti tam tikrus regėjimo sutrikimus, jie panašesni į tvarsčius ir ramentus, kurie tėra laikina pagalba, nepašalinanti problemos priežasties taip, kaip tą padarytų operacija. Susipažinkite su dažniausiai taikomais lazerinės regos korekcijos metodais:",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "„LASIK“ regėjimo korekcija",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "LASIK (lazeriu atliekama vidinė keratomaliacija) yra dažniausiai atliekama akių operacijos lazeriu forma nuo 1991 metų, kai buvo atlikti JAV klinikiniai tyrimai. Atliekant operaciją pakeičiama ragenos forma ir panaikinama arba sumažinama būtinybė nešioti akinius ar kontaktinius lęšius. Tai chirurginė procedūra, kelianti tam tikrų rizikų.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Regėjimo korekcija lazeriu „iQ-LASIK“",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "LASIK gali padėti sumažinti būtinybę nešioti akinius arba kontaktinius lęšius, o metodas „iQ-LASIK“ sujungia pažangiausias šiuolaikines chirurgijos technologijas į vieną procedūrą. Rezultatas – funkcionalesnė ir efektyvesnė regos korekcijos lazeriu operacija. Praeityje kiekvienam pacientui buvo atliekama pagrindinė LASIK procedūra, neatsižvelgiant į unikalias akies savybes. „iQ-LASIK“ metodas išsiskiria individualiu požiūriu. Tik ši technologija leidžia chirurgui sudaryti personalizuotą gydymo planą, pritaikytą Jūsų regėjimo poreikiams, siekiant užtikrinti geriausius regėjimo rezultatus. Jūsų akys nusipelno ypatingo gydymo. Atvykite į individualią konsultaciją pas mūsų profesionalius gydytojus oftalmologus, kad galėtume nustatyti, koks gydymas būtų tinkamiausias būtent Jums.",
                        },
                    ],
                    btn: {
                        name: "daugiau detalių",
                        link: "/paslaugos/lazerine-akiu-korekcija",
                    },
                },
                {
                    title: "Intraokulinė korekcija",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Intraokulinė korekcija atliekama koreguojant didelio laipsnio toliaregystę. Jeigu buvo nustatyta, kad Jums negalima atlikti regėjimo korekcijos lazeriu, nenuleiskite rankų, nes yra kitų būdų susigrąžinti gerą regėjimą. Akių klinika „Naujas regėjimas“ siūlo operacijas, galinčias Jums padėti. Per konsultaciją nustatysime, ar Jus galima operuoti, ir kokia operacija tinkamiausia.",
                        },
                    ],
                    btn: {
                        name: "daugiau detalių",
                        link: "/paslaugos/skaidraus-lesio-operacija/",
                    },
                },
            ],
        },
        en: {
            titleSEO:
                "Myopia – Symptoms, Causes, and Treatment | New Vision Clinic",
            descriptionSEO:
                "Myopia: main causes and modern approaches to effective treatment ✴️ The No. 1 Eye Disease Center in Lithuania. ✅ Modern diagnostics and effective treatment. 👍 A reputation proven over time",
            title: "Nearsightedness, myopia",
            content: [
                {
                    title: "Symptoms and causes of myopia",
                    text: [
                        {
                            type: "image",
                            image: "/images/myopia800.webp",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "If you are nearsighted, distant objects appear blurry. Squinting can make these objects appear clearer. For example, nearsighted students can read books and see classmates nearby, but the teacher and the board look blurred. Myopia (also known as nearsightedness) develops when light rays entering the eye are refracted too strongly and are focused at a point in front of the retina. Eyes with myopia may also be longer than normal or have an overly curved cornea, causing images not to focus on the retina.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "When you are nearsighted, images are focused not at the back of the eye but in front of the retina. Myopia usually develops in childhood and is first detected when parents learn that a child cannot read text written on the board at school. Myopia worsens during adolescence and stabilizes in early adulthood. Some experts believe that myopia is hereditary. It may develop with or without astigmatism. A typical indication of myopia in an eyeglass prescription is a minus sign before the first number.",
                        },
                    ],
                },
                {
                    title: "Treatment options for myopia",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Correction of myopia depends on various factors, such as age, activities, and profession, but it is usually corrected with contact lenses or glasses. They improve vision without changing the anatomy of the eye, so once they are removed, poor vision immediately returns. See the “Eye examination” section for more information on how to obtain a prescription for corrective glasses or contact lenses, and the “Eye exercises” section to learn how to avoid vision problems by performing eye-strengthening exercises. If you are ready to give up corrective glasses or contact lenses, explore the following vision correction options:",
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/blizorukost.webp",
                        },
                    ],
                },
                {
                    title: "Laser Vision Correction",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Although glasses and contact lenses help manage myopia, they can be compared to a cast or crutches — temporary solutions that help you cope but do not address the root cause, which can be corrected surgically.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "LASIK vision correction",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "LASIK (laser-assisted in situ keratomileusis) is the most commonly performed form of laser eye surgery since 1991, when clinical trials were conducted in the United States. During the procedure, the shape of the cornea is altered, eliminating or reducing the need to wear glasses or contact lenses. It is a surgical procedure that involves certain risks.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Laser vision correction – “iQ-LASIK”",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "LASIK can help reduce the need to wear glasses or contact lenses, and the “iQ-LASIK” method combines the most advanced modern surgical technologies into a single procedure. The result is a more functional and effective laser vision correction surgery. In the past, the same basic LASIK procedure was performed for every patient, regardless of the unique characteristics of the patient’s eyes. The “iQ-LASIK” method is different. Only “iQ-LASIK” enables surgeons to create a treatment plan with individualized options, taking your visual needs into account to ensure the best possible visual outcomes. Your eyes deserve special care. Visit our professional ophthalmologists for a personalized consultation so that we can determine which treatment is best suited for you.",
                        },
                    ],
                    btn: {
                        name: "learn more",
                        link: "/paslaugos/lazerine-akiu-korekcija",
                    },
                },
                {
                    title: "Intraocular Correction",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Intraocular lenses are designed to correct a high degree of astigmatism. If laser correction is not suitable for you, don’t worry — there are other ways to achieve the desired result. The 'British Ophthalmological Center' offers several surgical options that can help you. During a consultation, we can determine whether surgery is contraindicated for you and choose the best procedure option.",
                        },
                    ],
                    btn: {
                        name: "learn more",
                        link: "/services/refractive-lens-exchange",
                    },
                },
            ],
        },
        ru: {
            titleSEO:
                "Близорукость, миопия - симптомы, причины и лечение | Клиника Новое Зрение",
            descriptionSEO:
                "Близорукость, миопия: основные факторы возникновения и современные подходы к эффективному лечению ✴️ Центр глазных болезней № 1 в Литве. ✅ Современная диагностика и эффективное лечение. 👍 Репутация, проверенная временем",
            title: "Короткозорість, міопія",
            content: [
                {
                    title: "Симптомы и причины близорукости (миопии)",
                    text: [
                        {
                            type: "image",
                            image: "/images/myopia800.webp",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Если вы близоруки, удалённые объекты кажутся размытыми. При прищуривании эти объекты становятся более чёткими. Например, близорукие студенты могут читать книги и видеть находящихся рядом однокурсников, но преподаватель и доска выглядят размытыми. Близорукость (также называемая миопией) формируется, когда лучи света, попадающие в глаз, преломляются слишком сильно и фокусируются в точке перед сетчаткой. Глаза при близорукости также могут быть длиннее нормы или иметь чрезмерно изогнутую роговицу, из-за чего изображения не фокусируются на сетчатке.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "При близорукости изображения фокусируются не в задней части глаза, а перед сетчаткой. Близорукость обычно формируется в детстве и впервые выявляется, когда родители узнают, что ребёнок не может прочитать текст, написанный на доске в школе. В подростковом возрасте близорукость прогрессирует и стабилизируется в раннем взрослом возрасте. Некоторые специалисты считают, что близорукость является наследственной. Она может развиваться как с астигматизмом, так и без него. Типичным признаком близорукости в рецепте на очки является знак минус перед первым числом.",
                        },
                    ],
                },
                {
                    title: "Методы лечения близорукости",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Коррекция близорукости зависит от различных факторов, таких как возраст, образ жизни и профессия, но обычно осуществляется с помощью контактных линз или очков. Они улучшают зрение, не изменяя анатомию глаза, поэтому после их снятия плохое зрение сразу возвращается. Ознакомьтесь с разделом «Проверка зрения», чтобы получить больше информации о том, как получить рецепт на корректирующие очки или контактные линзы, а также с разделом «Упражнения для глаз», чтобы узнать, как избежать проблем со зрением, выполняя упражнения для укрепления глаз. Если вы готовы навсегда отказаться от корректирующих очков или контактных линз, ознакомьтесь со следующими возможностями коррекции зрения:",
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/blizorukost.webp",
                        },
                    ],
                },
                {
                    title: "Лазерная коррекция зрения",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Хотя очки и контактные линзы помогают справиться с близорукостью, их можно сравнить с гипсом или костылями — это временное решение, которое облегчает жизнь, но не устраняет причину проблемы, как это делает хирургическое вмешательство.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Лазерная коррекция зрения LASIK",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "LASIK (лазерный кератомилёз in situ) является наиболее распространённой формой лазерной хирургии глаза с 1991 года, когда в США были проведены клинические исследования. Во время операции изменяется форма роговицы, что позволяет устранить или уменьшить необходимость ношения очков или контактных линз. Это хирургическая процедура, связанная с определёнными рисками.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Лазерная коррекция зрения — «iQ-LASIK»",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "LASIK помогает снизить необходимость ношения очков или контактных линз, а метод «iQ-LASIK» объединяет самые передовые современные хирургические технологии в одну процедуру. Результат — более функциональная и эффективная операция лазерной коррекции зрения. В прошлом всем пациентам выполнялась одна и та же базовая процедура LASIK без учёта индивидуальных особенностей глаз. Метод «iQ-LASIK» отличается иным подходом. Только «iQ-LASIK» позволяет хирургам создать индивидуальный план лечения с учётом ваших зрительных потребностей, чтобы обеспечить наилучшие результаты зрения. Ваши глаза заслуживают особого внимания. Приходите на индивидуальную консультацию к нашим профессиональным врачам-офтальмологам, чтобы мы могли определить, какое лечение подходит именно вам.",
                        },
                    ],
                    btn: {
                        name: "подробнее",
                        link: "/paslaugos/lazerine-akiu-korekcija",
                    },
                },
                {
                    title: "Интраокулярная коррекция",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Интраокулярные линзы предназначены для коррекции высокой степени астигматизма. Если лазерная коррекция вам не подходит — не отчаивайтесь, есть и другие способы достичь желаемого результата. Клиника Новое Зрение предлагает ряд операций, которые могут помочь вам. Во время консультации врач определит, нет ли противопоказаний, и подберёт лучший вариант операции.",
                        },
                    ],
                    btn: {
                        name: "подробнее",
                        link: "/uslugi/khirurgiia-prozrachnogo-khrustalika",
                    },
                },
            ],
        },
    },
    {
        name: keyEyeDisease.find(d => d.key === "zvairumas")!,
        lt: {
            titleSEO:
                "Žvairumas – simptomai, priežastys ir gydymas | Naujas Regėjimas",
            descriptionSEO:
                "Žvairumas: pagrindiniai atsiradimo veiksniai ir šiuolaikiniai veiksmingo gydymo metodai ✴️ Akių ligų centras Nr. 1 Lietuvoje. ✅ Šiuolaikinė diagnostika ir veiksmingas gydymas. 👍 Laiko patikrinta reputacija",
            title: "Žvairumas",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { bold: true, value: "Žvairumas" },
                                {
                                    value: " – tai nuolatinis ar periodinis vienos akies nukrypimas nuo bendro fiksacijos taško, kai yra sutrikęs abiejų akių fiksacijos į vieną tašką mechanizmas. Viena akis gali žvelgti tiesiai, o kita būti nukrypusi į išorę, vidų, žemyn arba į viršų. Žvairumas yra gana dažnas reiškinys, pasireiškiantis maždaug 3–4 proc. vaikų, tačiau gali atsirasti ir suaugusiems asmenims. Ši būklė gali būti ir paveldima.",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Dėl didelio regėjimo aštrumo ir tolygios akių padėties asmuo nuo pat vaikystės formuoja harmoningą ir tinkamą aplinkinio pasaulio suvokimą. Matomas vaizdas būna aiškus ir platus. Tačiau neretai akys nukrypsta nuo lygiagrečios regos ašių padėties ir atsiranda žvairumas. Tai kosmetinė ir funkcinė problema, susijusi su okulomotorinių (akį judinančių) raumenų disbalansu.",
                        },
                    ],
                },
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Žvairumas gali būti vidinis – kai akys susieina ties nosimi, išorinis – kai jos išsiskiria į šalis, vertikalus – kai viena akis nukrypsta į viršų ar į apačią, vienpusis – kai tik viena akis žiūri netaisyklingai, pakaitinis – kai akys pakaitomis nukrypsta nuo regos ašies, ir paralyžinis – kai yra riboti akies judesiai pažeisto raumens link. Esant žvairumui, paauglys ar suaugęs asmuo patiria diskomfortą, skundžiasi greitu akių nuovargiu, galvos svaigimu, vaizdo dvejinimusi. Visa tai labai pablogina gyvenimo kokybę.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Kuo anksčiau pastebimas akių nuokrypis, tinkamai diagnozuojamos žvairumo priežastys ir pradedamas gydymas, tuo didesnė tikimybė ištaisyti kosmetinį defektą ir išgauti aukštą abiejų akių regėjimą.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Be abejo, žvairumą reikia pradėti gydyti vaikystėje, vos jį nustačius. Laiku parinkti akiniai gali sumažinti akies nuokrypio laipsnį ar net visiškai pašalinti žvairumą. Akių ligų gydytojas paskiria tinkamus akinukus, gydomųjų pratimų kompleksą, švitinimą įvairiais aparatais. Šių taikomų priemonių tikslas ne tik priversti akių raumenis dirbti taisyklingai, bet ir pagerinti regėjimą. Akinukus vaikai gali pradėti nešioti nuo 6 mėnesių. Kartais mažylio geriau matanti akis gali būti uždengiama, kad žvairuojanti akytė po truputį stiprėtų ir pradėtų žiūrėti taisyklingai. Gydyti reikia nuolat, nes, nenešiojant akinukų nors 2 savaites, visas darbas gali nueiti veltui. Jei neužtenka gydymo akiniais, gydoma chirurginiu būdu – operuojami akį judinantys raumenys. Jie pailginami arba sutrumpinami. Kartais gali prireikti ir kelių operacijų.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Šiuolaikiniai akių ligų korekcijos metodai leidžia pašalinti žvairumą net ir pacientams, turintiems silpną regėjimo aštrumą. Akių klinikoje „Naujas regėjimas“ galime suteikti visapusišką žvairumu sergančių pacientų priežiūrą. Tiksli diagnostika, tinkama gydymo taktika, kruopštus proceso dinamikos stebėjimas ir patikimas gydymo rezultato užtvirtinimas – visi šie etapai visiškai įgyvendinami mūsų klinikoje.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "Žvairumą galima nugalėti bet kuriame amžiuje. Leiskite Jums padėti!",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        en: {
            titleSEO:
                "Strabismus – Symptoms, Causes, and Treatment | New Vision Clinic",
            descriptionSEO:
                "Strabismus: main causes and modern approaches to effective treatment ✴️ The No. 1 Eye Disease Center in Lithuania. ✅ Modern diagnostics and effective treatment. 👍 A reputation proven over time",
            title: "Strabismus",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { bold: true, value: "Strabismus" },
                                {
                                    value: " is a constant or intermittent deviation of one eye from the common fixation point, caused by a disruption in the mechanism that allows both eyes to fixate on the same point. One eye may look straight ahead while the other deviates outward, inward, upward, or downward. Strabismus is a fairly common condition, occurring in approximately 3–4% of children, but it can also develop in adults. Strabismus may be hereditary.",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Thanks to good visual acuity and proper eye alignment, a person forms a harmonious and accurate perception of the surrounding world from early childhood. The visual image is clear and wide. However, quite often the eyes deviate from their parallel visual axis alignment, resulting in strabismus. This is both a cosmetic and functional problem associated with an imbalance of the extraocular (eye-moving) muscles.",
                        },
                    ],
                },
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Strabismus can be convergent (when the eyes turn toward the nose), divergent (when they turn outward), vertical (when one eye deviates upward or downward), unilateral (when only one eye deviates), alternating (when the eyes alternately deviate from the visual axis), or paralytic (when eye movements are limited toward the affected muscle). In cases of strabismus, adolescents or adults experience discomfort, complain of rapid eye fatigue, dizziness, and double vision, which significantly worsens quality of life.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "The earlier eye deviation is detected, the causes of strabismus are correctly diagnosed, and treatment is started, the greater the likelihood of correcting the cosmetic defect and achieving good vision in both eyes.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Of course, strabismus should be treated in childhood as soon as it is detected. Properly selected glasses can reduce the degree of eye deviation or even completely eliminate strabismus. An ophthalmologist prescribes appropriate glasses, therapeutic eye exercises, and treatment using various devices. The goal of these measures is not only to make the eye muscles work correctly but also to improve vision. Children can start wearing glasses as early as 6 months of age. Sometimes the better-seeing eye is temporarily covered so that the squinting eye gradually strengthens and begins to fixate properly. Treatment must be continuous, because even a two-week break from wearing glasses can negate all progress. If optical treatment is insufficient, surgical treatment is performed—eye-moving muscles are operated on by shortening or lengthening them. In some cases, more than one surgery may be required.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Modern methods of eye disease correction allow us to eliminate strabismus even in patients with low visual acuity. At the “Naujas regėjimas” Eye Clinic, we provide comprehensive care for patients with strabismus. Accurate diagnostics, correct treatment strategy, careful monitoring of progress, and reliable consolidation of treatment results—all these stages are fully implemented in our clinic.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "Strabismus can be successfully treated at any age. Let us help you!",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        ru: {
            titleSEO:
                "Косоглазие - симптомы, причины и лечение | Клиника Новое Зрение",
            descriptionSEO:
                "Косоглазие: основные факторы возникновения и современные подходы к эффективному лечению ✴️ Центр глазных болезней № 1 в Литве. ✅ Современная диагностика и эффективное лечение. 👍 Репутация, проверенная временем",
            title: "Косоглазие",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { bold: true, value: "Косоглазие" },
                                {
                                    value: " — это постоянное или периодическое отклонение одного глаза от общего фиксационного пункта, возникающее при нарушении механизма совместной фиксации обоих глаз на одной точке. Один глаз может смотреть прямо, а другой — отклоняться наружу, внутрь, вверх или вниз. Косоглазие является достаточно распространённым состоянием и встречается примерно у 3–4% детей, однако может развиваться и у взрослых. Косоглазие также может быть наследственным.",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Благодаря высокой остроте зрения и правильному положению глаз человек с раннего детства формирует гармоничное и правильное восприятие окружающего мира. Видимое изображение является чётким и широким. Однако нередко глаза отклоняются от параллельного положения зрительных осей, и возникает косоглазие. Это косметическая и функциональная проблема, связанная с дисбалансом глазодвигательных мышц.",
                        },
                    ],
                },
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Косоглазие может быть сходящимся (когда глаза сходятся к носу), расходящимся (когда они расходятся в стороны), вертикальным (когда один глаз отклоняется вверх или вниз), односторонним (когда неправильно смотрит только один глаз), альтернирующим (когда глаза попеременно отклоняются от зрительной оси) и паралитическим (когда движения глаза ограничены в сторону поражённой мышцы). При косоглазии подростки и взрослые испытывают дискомфорт, жалуются на быструю утомляемость глаз, головокружение и двоение изображения, что значительно ухудшает качество жизни.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Чем раньше выявлено отклонение глаз, правильно диагностированы причины косоглазия и начато лечение, тем выше вероятность устранения косметического дефекта и достижения высокой остроты зрения обоих глаз.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Безусловно, лечение косоглазия необходимо начинать в детском возрасте, сразу после его выявления. Правильно подобранные очки могут уменьшить степень отклонения глаза или даже полностью устранить косоглазие. Офтальмолог назначает подходящие очки, комплекс лечебных упражнений и аппаратное лечение. Цель этих методов — не только заставить глазные мышцы работать правильно, но и улучшить зрение. Дети могут начинать носить очки уже с 6-месячного возраста. Иногда лучше видящий глаз временно закрывают, чтобы косящий глаз постепенно укреплялся и начинал правильно фиксировать взгляд. Лечение должно быть непрерывным, так как даже двухнедельный перерыв в ношении очков может свести на нет все усилия. Если оптического лечения недостаточно, применяется хирургическое лечение — операция на глазодвигательных мышцах с их укорочением или удлинением. В некоторых случаях может потребоваться несколько операций.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Современные методы коррекции глазных заболеваний позволяют устранить косоглазие даже у пациентов с низкой остротой зрения. В глазной клинике «Naujas regėjimas» мы обеспечиваем комплексный уход за пациентами с косоглазием. Точная диагностика, правильная тактика лечения, тщательный контроль динамики процесса и надёжное закрепление результата лечения — все эти этапы полностью реализуются в нашей клинике.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "Косоглазие можно успешно лечить в любом возрасте. Позвольте нам вам помочь!",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keyEyeDisease.find(d => d.key === "presbiopija")!,
        lt: {
            titleSEO:
                "Presbiopija – simptomai, priežastys ir gydymas | Naujas Regėjimas",
            descriptionSEO:
                "Presbiopija: pagrindiniai atsiradimo veiksniai ir šiuolaikiniai veiksmingo gydymo metodai ✴️ Akių ligų centras Nr. 1 Lietuvoje. ✅ Šiuolaikinė diagnostika ir veiksmingas gydymas. 👍 Laiko patikrinta reputacija",
            title: "Presbiopija",
            content: [
                {
                    title: "Presbiopija – kas tai?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Senstant akies lęšis netenka elastingumo, todėl darosi sunkiau matyti artimus daiktus. Sulaukęs 40–45 metų iki tol gerai matęs žmogus negali skaityti ar dirbti smulkių darbų iš įprasto atstumo. Ši būklė vadinama senatvine toliaregyste (presbiopija).",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Ar Jums reikia skaitymo akinių? Jei taip, tikriausiai kamuoja presbiopija, dėl kurios akys praranda galimybę fokusuoti. Tai paprastai įvyksta dėl natūralaus senėjimo proceso, kurį patiria kiekvienas. Pirmieji simptomai dažnai pastebimi sulaukus 40 metų, todėl tiek daug vidutinio amžiaus žmonių prireikia skaitymo arba dvižidinių akinių.",
                        },
                    ],
                },
                {
                    title: "Presbiopijos priežastys",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Presbiopijos priežastys vis dar tiriamos, tačiau dažniausiai manoma, kad skaidulos aplink natūralų akies lęšiuką sutvirtėja ir praranda elastingumą, taip sumažindamos akies galimybę keisti lęšio formą. Akies lęšiukui tampant mažiau elastingam, darosi sunkiau sufokusuoti artimus objektus. Trauma, gyvenimo būdas ir profesija, pvz., ilgas sėdėjimas priešais kompiuterį, taip pat gali būti presbiopijos priežastis.",
                        },
                    ],
                },
                {
                    title: "Presbiopija – natūralus procesas, o ne liga",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Šis sutrikimas paprastai pasireiškia 40–50 metų sulaukusiems žmonėms. Presbiopija susiformuoja, kai natūralus akies lęšiukas sensta, todėl tampa kietesnis ir netenka lankstumo, dėl to prarandamas geras artimų objektų matymas ir prireikia skaitymo akinių.",
                        },
                    ],
                },
                {
                    title: "Kaip apsisaugoti nuo presbiopijos?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Deja, presbiopija atsiranda natūraliai senstant. Kol kas medikai nežino, kaip išvengti šios regėjimo degradacijos. Praktiškai visiems, sulaukusiems 40-ies metų, asmenims pasireikš presbiopijos simptomų, netgi jeigu anksčiau ir neturėjote jokių regėjimo problemų. Visgi svarbu žinoti, kad regėjimu reikia rūpintis visuomet. Štai keli būdai, padėsiantys apsaugoti akis nuo ligų:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Reguliariai tikrinkite regėjimą.",
                                "Šviečiant ryškiai saulei, nešiokite tamsius apsauginius akinius. Tai padės apsaugoti akis nuo žalingo UV spindulių poveikio.",
                                "Dažniau tikrinkite akis, jeigu esate rizikos grupėje, – sergate diabetu ar hipotireoze.",
                                "Būtinai nešiokite apsauginius akinius, jeigu dirbate pavojingus darbus, nes net menkiausia akių trauma gali turėti įtakos sunkiai išgydomoms ligoms atsirasti.",
                                "Sveikai maitinkitės. Sveikas maistas – tai garantas, kad gausite pakankamai antioksidantų ir vitaminų. Tyrimai parodė, jog maistinės medžiagos, esančios vaisiuose, daržovėse ir žuvyje, gali sulėtinti natūralų akių senėjimo procesą.",
                                "Atkreipkite dėmesį į tokius simptomus kaip galvos skausmas, stiprus akių nuovargis ar miglotas vaizdas.",
                            ],
                        },
                    ],
                },
                {
                    title: "Ar jaučiate presbiopijos simptomų?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Presbiopija vystosi palaipsniui. Daugumai žmonių pirmų jos požymių pasireiškia sulaukus 40 metų. Štai keli simptomai:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "miglotas vaizdas esant normaliam skaitymo atstumui, įskaitant atvejus, kai dėvite korekcinius akinius ar kontaktinius lęšius;",
                                "galvos skausmas;",
                                "nuovargis atliekant darbus, reikalaujančius aiškaus mažų detalių matymo, pvz., siuvant.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Jeigu pajutote kuriuos nors iš šių išvardintų simptomų, rekomenduojame užsiregistruoti į akių gydytojo konsultaciją.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    value: "Presbiopijos operacija",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Jei dėl vienokių ar kitokių priežasčių nenorite nešioti akinių ar kontaktinių lęšių su amžiumi išsivysčiusiai senatvinei (amžinei) toliaregystei koreguoti, Jums padėti gali chirurginis gydymas. Jis gali būti atliekamas regos korekcijos lazeriu metodais LASIK ir PRK. Jeigu nustatoma, kad pacientui negalima atlikti regėjimo korekcijos lazeriu, galimas kitas chirurginis presbiopijos gydymo metodas – natūralaus lęšio pakeitimas dirbtiniu (intraokuliniu lęšiu).",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Kviečiame atvykti į akių kliniką „Naujas regėjimas“, kur konsultacijos metu atliksime išsamius tyrimus ir nustatysime, ar Jums galima atlikti presbiopijos operaciją, kokia operacija Jums tinkamiausia ir kokių regos korekcijos rezultatų galima tikėtis.",
                        },
                    ],
                },
            ],
        },
        en: {
            titleSEO:
                "Presbyopia – Symptoms, Causes, and Treatment | New Vision Clinic",
            descriptionSEO:
                "Presbyopia: main causes and modern approaches to effective treatment ✴️ The No. 1 Eye Disease Center in Lithuania. ✅ Modern diagnostics and effective treatment. 👍 A reputation proven over time",
            title: "Presbyopia",
            content: [
                {
                    title: "Presbyopia – what is it?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "As the eye ages, the lens loses elasticity, making it more difficult to see objects up close. At the age of 40–45, a person who previously had good vision may no longer be able to read or perform fine work at a normal distance. This condition is called age-related farsightedness (presbyopia).",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Do you need reading glasses? If so, you most likely have presbyopia, a condition in which the eye loses its ability to focus. This usually occurs due to the natural aging process that everyone experiences. The first symptoms are often noticed around the age of forty, which is why so many middle-aged people need reading or bifocal glasses.",
                        },
                    ],
                },
                {
                    title: "Causes of presbyopia",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "The causes of presbyopia are still being studied, but it is most commonly believed that the fibers surrounding the natural eye lens become firmer and lose elasticity, thereby reducing the eye’s ability to change the shape of the lens. As the lens becomes less elastic, it becomes harder to focus on nearby objects. Trauma, lifestyle, and occupation, such as prolonged work at a computer, may also contribute to presbyopia.",
                        },
                    ],
                },
                {
                    title: "Presbyopia is a natural process, not a disease",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "This condition usually begins between the ages of 40 and 50. Presbyopia develops as the natural lens of the eye ages, becoming harder and less flexible, which typically results in the loss of clear near vision and the need for reading glasses.",
                        },
                    ],
                },
                {
                    title: "How to protect yourself from presbyopia?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Unfortunately, presbyopia occurs naturally as we age. So far, doctors do not know how to prevent this vision deterioration. Practically everyone will experience symptoms of presbyopia by the age of 40, even if they previously had no vision problems. However, it is important to know that you should always take care of your eyes. Here are some ways to protect your eyes from any diseases:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Regularly check your vision.",
                                "Wear dark protective glasses in bright sunlight to protect your eyes from harmful UV exposure.",
                                "Check your eyes more frequently if you are in a risk group – e.g., if you have diabetes or hypothyroidism.",
                                "Always wear protective glasses when doing hazardous work, as even minor eye injuries can contribute to serious eye conditions.",
                                "Eat a healthy diet. Healthy food ensures you get enough antioxidants and vitamins. Studies have shown that nutrients in fruits, vegetables, and fish can slow down the natural aging process of the eyes.",
                                "Pay attention to symptoms such as headaches, severe eye fatigue, or blurred vision.",
                            ],
                        },
                    ],
                },
                {
                    title: "Do you notice presbyopia symptoms?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Presbyopia develops gradually, with most people noticing the first symptoms around the age of 40. Here are some symptoms that indicate early signs of presbyopia:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Blurred vision at normal reading distance, including when wearing corrective glasses or contact lenses",
                                "Headaches",
                                "Fatigue when performing tasks requiring clear near vision, e.g., sewing",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "If you experience any of these symptoms, we recommend scheduling a consultation with an eye doctor.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    value: "Presbyopia surgery",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "If, for some reason, you do not want to wear glasses or contact lenses to correct age-related presbyopia, surgical treatment may help. This can be done using LASIK or PRK laser vision correction methods. If laser correction is not suitable for the patient, another surgical presbyopia treatment option is replacing the natural lens with an artificial intraocular lens (IOL).",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "We invite you to the “New Vision” Eye Clinic, where during a consultation we will perform a comprehensive examination to determine whether presbyopia surgery is suitable for you, which operation is most appropriate, and what vision correction results can be expected.",
                        },
                    ],
                },
            ],
        },
        ru: {
            titleSEO:
                "Пресбиопия - симптомы, причины и лечение | Клиника Новое Зрение",
            descriptionSEO:
                "Пресбиопия: основные факторы возникновения и современные подходы к эффективному лечению ✴️ Центр глазных болезней № 1 в Литве. ✅ Современная диагностика и эффективное лечение. 👍 Репутация, проверенная временем",
            title: "Пресбиопия",
            content: [
                {
                    title: "Пресбиопия — что это?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "С возрастом хрусталик глаза теряет эластичность, из-за чего становится труднее видеть предметы на близком расстоянии. В возрасте 40–45 лет человек, ранее хорошо видевший, уже не может читать или выполнять мелкую работу с привычного расстояния. Это состояние называется возрастной дальнозоркостью (пресбиопией).",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Нужны ли вам очки для чтения? Если да, скорее всего, у вас пресбиопия, при которой глаз утрачивает способность к фокусировке. Обычно это происходит вследствие естественного процесса старения, через который проходит каждый человек. Первые симптомы часто появляются около сорока лет, поэтому так многим людям среднего возраста требуются очки для чтения или бифокальные очки.",
                        },
                    ],
                },
                {
                    title: "Причины пресбиопии",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Причины пресбиопии продолжают изучаться, однако чаще всего считается, что волокна вокруг естественного хрусталика глаза уплотняются и теряют эластичность, тем самым снижая способность глаза изменять форму хрусталика. По мере того как хрусталик становится менее эластичным, становится сложнее фокусироваться на близких объектах. Травмы, образ жизни и профессия, например длительная работа за компьютером, также могут способствовать развитию пресбиопии.",
                        },
                    ],
                },
                {
                    title: "Пресбиопия — это естественный процесс, а не заболевание",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Это состояние обычно начинается в возрасте от 40 до 50 лет. Пресбиопия развивается по мере старения естественного хрусталика глаза, который становится более жёстким и менее гибким, что, как правило, приводит к ухудшению зрения вблизи и необходимости использования очков для чтения.",
                        },
                    ],
                },
                {
                    title: "Как защитить себя от пресбиопии?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "К сожалению, пресбиопия возникает естественным образом с возрастом. Пока что врачи не знают, как предотвратить это ухудшение зрения. Практически у всех после 40 лет проявляются симптомы пресбиопии, даже если ранее у них не было проблем со зрением. Однако важно всегда заботиться о своих глазах. Вот несколько способов защитить глаза от любых заболеваний:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Регулярно проверяйте зрение.",
                                "Носите тёмные защитные очки на ярком солнце, чтобы защитить глаза от вредного воздействия ультрафиолета.",
                                "Чаще проверяйте глаза, если вы находитесь в группе риска – например, при диабете или гипотиреозе.",
                                "Обязательно носите защитные очки при работе с опасными инструментами, так как даже незначительная травма глаза может привести к серьезным заболеваниям.",
                                "Питайтесь правильно. Здоровая пища обеспечивает достаточное количество антиоксидантов и витаминов. Исследования показывают, что питательные вещества в фруктах, овощах и рыбе могут замедлить естественный процесс старения глаз.",
                                "Обращайте внимание на такие симптомы, как головная боль, сильная усталость глаз или размытое зрение.",
                            ],
                        },
                    ],
                },
                {
                    title: "Чувствуете симптомы пресбиопии?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Пресбиопия развивается постепенно, большинство людей замечают первые симптомы примерно в 40 лет. Вот несколько признаков, указывающих на ранние проявления пресбиопии:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Размытое зрение на обычном расстоянии для чтения, в том числе при ношении корректирующих очков или контактных линз",
                                "Головная боль",
                                "Усталость при выполнении задач, требующих чёткого зрения на близком расстоянии, например, шитьё",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Если вы заметили какие-либо из этих симптомов, рекомендуем записаться на консультацию к офтальмологу.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    value: "Операция при пресбиопии",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Если по каким-либо причинам вы не хотите носить очки или контактные линзы для коррекции возрастной пресбиопии, может помочь хирургическое лечение. Оно может выполняться методами лазерной коррекции зрения LASIK и PRK. Если лазерная коррекция невозможна, возможен другой хирургический метод лечения пресбиопии — замена естественного хрусталика на искусственный (интраокулярный) линз.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Приглашаем вас в офтальмологическую клинику «Новый взгляд», где во время консультации мы проведём полное обследование и определим, можно ли вам выполнить операцию при пресбиопии, какая операция наиболее подходит и каких результатов коррекции зрения можно ожидать.",
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keyEyeDisease.find(d => d.key === "akiu-ligu-simptomai")!,
        lt: {
            titleSEO:
                "Akių ligų simptomai – priežastys ir gydymas | Naujas Regėjimas",
            descriptionSEO:
                "Akių ligų simptomai: pagrindiniai atsiradimo veiksniai ir šiuolaikiniai veiksmingo gydymo metodai ✴️ Akių ligų centras Nr. 1 Lietuvoje. ✅ Šiuolaikinė diagnostika ir veiksmingas gydymas. 👍 Laiko patikrinta reputacija",
            title: "Akių ligų simptomai",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Jei skaitote šį tekstą, tikriausiai akių ligos jums pažįstamos: greičiausiai metų metus nešiojate  kontaktinius lęšius ar akinius ir žinote viską apie jų trūkumus. Taigi kodėl suprastėja mūsų regėjimas?",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Šviesos spinduliams pereinant iš vienos medžiagos į kitą, pvz., iš oro į vandenį, jie lūžta. Tai vadinama refrakcija. Kai šie spinduliai patenka į ragenos ir lęšio audinius, jie taip pat laužiami taip, kad būtų sufokusuojami tinklainėje. Akys nebegali fokusuoti šviesos ant tinklainės paprastai dėl to, kad akies forma ne visiškai taisyklinga. Tai vadinama refrakcijos yda.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Pateikiame glaustą tipiškiausių refrakcijos sutrikimų ir akių problemų, kurios susiformuoja dėl senėjimo bei akies lęšiuko sukietėjimo arba drumstumo, apžvalgą. Norėdami sužinoti daugiau, spustelėkite kiekvieno regos sutrikimo pavadinimą.",
                        },
                    ],
                },
                {
                    title: "Akių ligos:",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Trumparegystė",
                                },
                            ],
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/blizorukost.webp",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Trumparegystė, dar vadinama miopija (miglotas toli esančių objektų matymas), yra dažniausia refrakcijos yda. Paprastai susiformuoja, kai akis yra per ilga arba ragena per daug išlenkta. Dėl šio papildomo ilgio tolimi objektai fokusuojami priešais tinklainę, todėl šviesa išsisklaido ir teikia smegenims nesufokusuotą vaizdą. Trumparegystė – tai refrakcijos yda, dėl kurios akis nebemato toli esančių objektų. Ši būklė koreguojama akiniais, kontaktiniais lęšiais arba refrakcijos operacija.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Toliaregystė",
                                },
                            ],
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/farsightedness.jpg",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Toliaregystė yra arti esančių objektų nematymas, kurį sukelia per trumpa akis arba per daug plokščia ragena. Dėl nepakankamo akies ilgio ragena ir lęšiukas neturi užtektinai vietos šviesos spinduliams sufokusuoti tinklainės židinio taške, todėl vaizdas fokusuojamas už tinklainės ir smegenys gauna netikslius signalus.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Astigmatizmas",
                                },
                            ],
                        },
                        {
                            type: "image",
                            maxH: "max-h-[260px]",
                            image: "/images/astigmatism.jpg",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Kitas terminas prastam akių išlinkiui apibūdinti yra astigmatizmas, kuris susiformuoja, kai ragena nėra apvali, o regbio kamuolio formos, dėl to akis nebegali sufokusuoti šviesos iš bet kokio atstumo. Negydomas astigmatizmas gali sukelti žvairumą ir staigų regėjimo prastėjimą. Nekoreguojamas astigmatizmas gali sukelti galvos ir akių skausmus.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Presbiopija",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Presbiopija yra su amžiumi susijusi hiperopija, kurią sukelia natūralus žmogaus senėjimas. Tai yra akies refrakcijos anomalija, kai žmogus negali matyti smulkaus šrifto ar smulkių daiktų iš arti. Šis sutrikimas paprastai pasireiškia 40–50 metų asmenims. Presbiopija susiformuoja, kai natūralus akių lęšiukas sensta, todėl tampa kietesnis ir praranda lankstumą, dėl to paprastai nematoma artimų objektų ir reikia skaitymo akinių.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Katarakta",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Priešingai nei įprasta manyti, katarakta nėra sluoksnis, kuris susiformuoja ant akies paviršiaus, o akies viduje esančio lęšiuko skaidrumo pokytis, neleidžiantis pro jį prasiskverbti šviesos spinduliams. Dėl šio laipsniškai didėjančio miglotumo ilgainiui regėjimas gali tapti nebe toks aštrus. Šviesa, patenkanti į tinklainę, yra išskaidoma, todėl regėjimas tampa neryškus.",
                        },
                    ],
                },
            ],
        },
        en: {
            titleSEO:
                "Eye Disease Symptoms – Causes and Treatment | New Vision Clinic",
            descriptionSEO:
                "Eye disease symptoms: main causes and modern approaches to effective treatment ✴️ The No. 1 Eye Disease Center in Lithuania. ✅ Modern diagnostics and effective treatment. 👍 A reputation proven over time",
            title: "Symptoms of eye disease",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "If you are reading this text, you are probably familiar with eye diseases: most likely you have been wearing contact lenses or glasses for years and know all about their drawbacks. So why does our vision deteriorate?",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "When light rays pass from one medium to another, e.g., from air to water, they bend. This is called refraction. When these rays enter the cornea and lens tissues, they are also refracted to focus on the retina. If the eyes can no longer focus light on the retina, usually because the shape of the eye is not perfectly regular, this is called a refractive error.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Here is a brief overview of the most common refractive errors and eye problems that develop due to aging and the hardening or clouding of the eye lens. To learn more, click on the name of each vision disorder.",
                        },
                    ],
                },
                {
                    title: "Eye diseases:",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Myopia",
                                },
                            ],
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/blizorukost.webp",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Myopia, also called nearsightedness (blurred vision of distant objects), is the most common refractive error. It usually occurs when the eye is too long or the cornea is too curved. Due to this extra length, distant objects are focused in front of the retina, causing light to scatter and the brain to receive an unfocused image. Myopia is a refractive error that prevents the eye from seeing distant objects. It can be corrected with glasses, contact lenses, or refractive surgery.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Hyperopia",
                                },
                            ],
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/farsightedness.jpg",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Hyperopia is the inability to see nearby objects caused by a too-short eye or a too-flat cornea. Due to insufficient eye length, the cornea and lens do not have enough space to focus light on the retinal focal point, so the image is focused behind the retina and the brain receives inaccurate signals.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Astigmatism",
                                },
                            ],
                        },
                        {
                            type: "image",
                            maxH: "max-h-[260px]",
                            image: "/images/astigmatism.jpg",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Another term for poor corneal curvature is astigmatism, which occurs when the cornea is not round but shaped like a rugby ball, preventing the eye from focusing light from any distance. Untreated astigmatism can cause strabismus and sudden vision deterioration. Without correction, astigmatism may also cause headaches and eye pain.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Presbyopia",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Presbyopia is age-related hyperopia caused by natural human aging. It is a refractive anomaly in which a person cannot see small print or nearby objects clearly. This condition typically appears in people between 40 and 50 years of age. Presbyopia develops as the natural lens of the eye ages, becomes harder, and loses elasticity, usually resulting in the need for reading glasses.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Cataract",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Contrary to common belief, a cataract is not a layer forming on the surface of the eye but a change in the transparency of the lens inside the eye, which prevents light rays from passing through it. Due to this gradually increasing cloudiness, vision can become less sharp over time. Light entering the retina is scattered, resulting in blurred vision.",
                        },
                    ],
                },
            ],
        },
        ru: {
            titleSEO:
                "Симптомы заболевания глаз - причины и лечение | Клиника Новое Зрение",
            descriptionSEO:
                "Симптомы заболевания глаз: основные факторы возникновения и современные подходы к эффективному лечению ✴️ Центр глазных болезней № 1 в Литве. ✅ Современная диагностика и эффективное лечение. 👍 Репутация, проверенная временем",
            title: "Симптоми захворювання очей",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Если вы читаете этот текст, вы, вероятно, знакомы с заболеваниями глаз: скорее всего, вы много лет носите контактные линзы или очки и знаете обо всех их недостатках. Так почему же ухудшается наше зрение?",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Когда световые лучи переходят из одной среды в другую, например из воздуха в воду, они преломляются. Это называется рефракцией. Когда эти лучи попадают в ткани роговицы и хрусталика, они также преломляются так, чтобы сфокусироваться на сетчатке. Если глаза больше не могут сфокусировать свет на сетчатке, обычно из-за того, что форма глаза не совсем правильная, это называется рефракционной аномалией.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Представляем краткий обзор наиболее типичных рефракционных нарушений и проблем с глазами, которые развиваются из-за старения и затвердевания или помутнения хрусталика. Чтобы узнать больше, нажмите на название каждого нарушения зрения.",
                        },
                    ],
                },
                {
                    title: "Заболевания глаз:",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Близорукость",
                                },
                            ],
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/blizorukost.webp",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Близорукость, также называемая миопией (размытое видение дальних объектов), является наиболее распространенной рефракционной аномалией. Обычно возникает, когда глаз слишком длинный или роговица слишком изогнута. Из-за этой дополнительной длины дальние объекты фокусируются перед сетчаткой, что приводит к рассеиванию света и формированию нечеткого изображения в мозге. Близорукость – это рефракционная аномалия, из-за которой глаз не видит дальние объекты. Она корректируется очками, контактными линзами или рефракционной операцией.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Дальнозоркость",
                                },
                            ],
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/farsightedness.jpg",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Дальнозоркость – это неспособность видеть близкие объекты, вызванная слишком коротким глазом или слишком плоской роговицей. Из-за недостаточной длины глаза роговица и хрусталик не имеют достаточного пространства для фокусировки света на точке сетчатки, поэтому изображение фокусируется за сетчаткой и мозг получает неточные сигналы.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Астигматизм",
                                },
                            ],
                        },
                        {
                            type: "image",
                            maxH: "max-h-[260px]",
                            image: "/images/astigmatism.jpg",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Другой термин для описания неправильной кривизны глаза – астигматизм, который возникает, когда роговица не круглая, а в форме регбийного мяча, из-за чего глаз не может сфокусировать свет с любого расстояния. Нелеченный астигматизм может вызвать косоглазие и резкое ухудшение зрения. Без коррекции астигматизм может также вызывать головные боли и боль в глазах.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Пресбиопия",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Пресбиопия – возрастная дальнозоркость, вызванная естественным старением человека. Это рефракционная аномалия, при которой человек не может видеть мелкий шрифт или мелкие предметы вблизи. Это состояние обычно проявляется у людей в возрасте от 40 до 50 лет. Пресбиопия развивается, когда естественный хрусталик глаза стареет, становится тверже и теряет эластичность, из-за чего обычно теряется зрение на близком расстоянии и требуется ношение очков для чтения.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Катаракта",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Вопреки распространенному мнению, катаракта – это не слой, который формируется на поверхности глаза, а изменение прозрачности хрусталика внутри глаза, не позволяющее световым лучам проходить через него. Из-за постепенно увеличивающейся мутности со временем зрение может становиться менее четким. Свет, попадающий на сетчатку, рассеивается, в результате чего зрение становится размытым.",
                        },
                    ],
                },
            ],
        },
    },
];

export type DataPatientsPageType = {
    key: InstructionsSulgType | EyeDiseaseSlugType;
    data?: { listTitle?: string; list: KeySlugPatientsType[] }[];
};

export const dataPatientsPage: DataPatientsPageType[] = [
    {
        key: "information-for-out-of-town-patients",
    },
    {
        key: "dovanu-kupono",
    },
    {
        key: "reminders-and-instructions-for-patients",
        data: [
            {
                listTitle: "before",
                list: [
                    keySlugPatientsInstruction.find(
                        i => i.key === "instructions-before-surgery"
                    )!,
                ],
            },
            {
                listTitle: "after",
                list: [
                    keySlugPatientsInstruction.find(
                        i =>
                            i.key ===
                            "instructions-after-laser-vision-correction"
                    )!,
                ],
            },
        ],
    },
    { key: "akiu-ligos", data: [{ list: keyEyeDisease }] },
];
export type DepartType = {
    title: string;
    listLab: { title: string; list: string[] };
    listResult: { title: string; list: string[] };
};

export type BeforeSurgeryInstructionType = {
    firstText: string;
    analysisCard: string;
    attentionCardTitle: string;
    attentionCard: string;
    secondTitle: string;
    secondText: string;
    greenText: string;
    adultDepart: DepartType;
    childDepart: DepartType;
};

export const beforeSurgeryInstruction: {
    lt: BeforeSurgeryInstructionType;
    en: BeforeSurgeryInstructionType;
    ru: BeforeSurgeryInstructionType;
} = {
    lt: {
        firstText:
            "Перед мікрохірургічним втручанням необхідний перелік лабораторних аналізів та додаткових обстежень вирішує лікар-анестезіолог за наявними супутніми патологіями (прохання мати з собою амбулаторну картку, попередні обстеження, епікризи, виписки)",
        analysisCard:
            "Аналізи при проведенні лазерної корекції зору, лазерної коагуляції і кросслінкінг не потрібні!",
        attentionCardTitle: "до уваги",
        attentionCard:
            "Обов'язковий огляд лікаря-анестезіолога і оцінка результатів обстеження не пізніше, ніж за 12 годин до операції.",
        secondTitle: "Список необхідних аналізів для операції",
        secondText:
            "При самостійній підготовці до операції на момент передопераційної консультації при хірургічному лікуванні: катаракти (факоемульсифікація, рефракційна заміна кришталика), глаукоми, виправлення косоокості, вітреоретінальні і інші мікрохірургічні операції при собі необхідно мати:",
        greenText:
            "Клінічні аналізи крові і сечі дійсні протягом 14 днів від моменту дослідження, за умови, що не було гострих інфекційних захворювань в цей період. ЕКГ і висновок терапевта – 1 місяць, флюорографія або рентгенографія, КТ, МРТ органів грудної клітки – на протязі року.",
        adultDepart: {
            title: "доросле відділення",
            listLab: {
                title: "Лабораторні та інструментальні дослідження:",
                list: [
                    "клінічний аналіз крові;",
                    "аналіз крові на глюкозу (цукор);",
                    "аналіз крові на RW;",
                    "Гепатит В (HBsAg) і гепатит С (HCV IgM)",
                    "клінічний аналіз сечі;",
                    "електрокардіограма (ЕКГ);",
                    "флюорографія або рентгенографія, КТ, МРТ органів грудної клітки;",
                ],
            },
            listResult: {
                title: "Висновки фахівців:",
                list: [
                    "огляд терапевта або сімейного лікаря з висновком про наявність супутньої патології та допуск до операції;",
                    "консультація ЛОР (при наявності патології);",
                    "консультація стоматолога (при наявності патології);",
                ],
            },
        },
        childDepart: {
            title: "дитяче відділення",
            listLab: {
                title: "Лабораторні та інструментальні дослідження:",
                list: [
                    "клінічний аналіз крові;",
                    "аналіз крові на глюкозу (цукор);",
                    "клінічний аналіз сечі;",
                    "електрокардіограма (ЕКГ) і УЗД серця (Ехо КС);",
                    "флюорографія або рентгенографія, КТ, МРТ органів грудної клітки (при наявності патології);",
                ],
            },
            listResult: {
                title: "Висновки фахівців:",
                list: [
                    "огляд педіатра з висновком про наявність супутньої патології та допуск до операції;",
                    "консультація ЛОР (при наявності патології);",
                    "консультація стоматолога (при наявності патології);",
                ],
            },
        },
    },
    en: {
        firstText:
            "Before microsurgical intervention, the list of required laboratory tests and additional examinations is determined by the anesthesiologist, depending on existing comorbidities (please bring your outpatient card, previous test results, medical reports, and discharge summaries).",
        analysisCard:
            "No tests are required for laser vision correction, laser coagulation, or cross-linking procedures!",
        attentionCardTitle: "attention",
        attentionCard:
            "A mandatory anesthesiologist examination and evaluation of test results must be performed no later than 12 hours before surgery.",
        secondTitle: "List of necessary tests before surgery",
        secondText:
            "If you are preparing for surgery on your own, at the time of the preoperative consultation for surgical treatments such as cataract surgery (phacoemulsification, refractive lens exchange), glaucoma, strabismus correction, vitreoretinal and other microsurgical procedures, you must have with you:",
        greenText:
            "Clinical blood and urine tests are valid for 14 days from the date of the test, provided there were no acute infectious diseases during this period. ECG and therapist’s report – valid for 1 month. Fluorography, chest X-ray, CT, or MRI – valid for 1 year.",
        adultDepart: {
            title: "adult department",
            listLab: {
                title: "Laboratory and instrumental examinations:",
                list: [
                    "complete blood count;",
                    "blood glucose test;",
                    "RW (syphilis) blood test;",
                    "Hepatitis B (HBsAg) and Hepatitis C (HCV IgM);",
                    "urinalysis;",
                    "electrocardiogram (ECG);",
                    "fluorography or chest X-ray, CT, MRI;",
                ],
            },
            listResult: {
                title: "Specialist conclusions:",
                list: [
                    "examination by a therapist or family doctor with a report on comorbidities and fitness for surgery;",
                    "ENT consultation (if pathology is present);",
                    "dentist consultation (if pathology is present);",
                ],
            },
        },
        childDepart: {
            title: "children’s department",
            listLab: {
                title: "Laboratory and instrumental examinations:",
                list: [
                    "complete blood count;",
                    "blood glucose test;",
                    "urinalysis;",
                    "electrocardiogram (ECG) and heart ultrasound (EchoCG);",
                    "fluorography or chest X-ray, CT, MRI (if pathology is present);",
                ],
            },
            listResult: {
                title: "Specialist conclusions:",
                list: [
                    "examination by a pediatrician with a report on comorbidities and fitness for surgery;",
                    "ENT consultation (if pathology is present);",
                    "dentist consultation (if pathology is present);",
                ],
            },
        },
    },
    ru: {
        firstText:
            "Перед микрохирургическим вмешательством необходимый перечень лабораторных анализов и дополнительных обследований определяет врач-анестезиолог с учетом имеющихся сопутствующих заболеваний (просим иметь при себе амбулаторную карту, предыдущие обследования, эпикризы, выписки).",
        analysisCard:
            "Анализы при проведении лазерной коррекции зрения, лазерной коагуляции и кросслинкинга не требуются!",
        attentionCardTitle: "внимание",
        attentionCard:
            "Обязателен осмотр врача-анестезиолога и оценка результатов обследований не позднее чем за 12 часов до операции.",
        secondTitle: "Список необходимых анализов для операции",
        secondText:
            "При самостоятельной подготовке к операции на момент предоперационной консультации при хирургическом лечении: катаракты (факоэмульсификация, рефракционная замена хрусталика), глаукомы, исправления косоглазия, витреоретинальных и других микрохирургических операций необходимо иметь при себе:",
        greenText:
            "Клинические анализы крови и мочи действительны в течение 14 дней с момента исследования, при условии отсутствия острых инфекционных заболеваний в этот период. ЭКГ и заключение терапевта – 1 месяц, флюорография или рентгенография, КТ, МРТ органов грудной клетки – в течение года.",
        adultDepart: {
            title: "взрослое отделение",
            listLab: {
                title: "Лабораторные и инструментальные исследования:",
                list: [
                    "клинический анализ крови;",
                    "анализ крови на глюкозу (сахар);",
                    "анализ крови на RW;",
                    "гепатит B (HBsAg) и гепатит C (HCV IgM);",
                    "клинический анализ мочи;",
                    "электрокардиограмма (ЭКГ);",
                    "флюорография или рентгенография, КТ, МРТ органов грудной клетки;",
                ],
            },
            listResult: {
                title: "Заключения специалистов:",
                list: [
                    "осмотр терапевта или семейного врача с заключением о сопутствующих заболеваниях и допуском к операции;",
                    "консультация ЛОР (при наличии патологии);",
                    "консультация стоматолога (при наличии патологии);",
                ],
            },
        },
        childDepart: {
            title: "детское отделение",
            listLab: {
                title: "Лабораторные и инструментальные исследования:",
                list: [
                    "клинический анализ крови;",
                    "анализ крови на глюкозу (сахар);",
                    "клинический анализ мочи;",
                    "электрокардиограмма (ЭКГ) и УЗИ сердца (ЭхоКГ);",
                    "флюорография или рентгенография, КТ, МРТ органов грудной клетки (при наличии патологии);",
                ],
            },
            listResult: {
                title: "Заключения специалистов:",
                list: [
                    "осмотр педиатра с заключением о сопутствующих заболеваниях и допуском к операции;",
                    "консультация ЛОР (при наличии патологии);",
                    "консультация стоматолога (при наличии патологии);",
                ],
            },
        },
    },
};
