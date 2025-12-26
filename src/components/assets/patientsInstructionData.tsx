import { AstigmatismTable } from "../shared/AstigmatismTable";
import { FarsightednessTable } from "../shared/FarsightednessTable";
import { TextType } from "./servicesData";

export type InstructionsSulgType =
    | "informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam"
    | "information-for-out-of-town-patients"
    | "dovanu-kupono"
    | "instruktsiyi-pislya-lazernoyi-korektsiyi-zoru"
    | "pamyatka-patsiyenta-pered-vitreoretynalnoyu-khirurhiyeyu"
    | "pamyatka-patsiyenta-pislya-khirurhiyi-katarakty"
    | "reminder-before-a-comprehensive-pediatric-examination"
    | "preparation-for-surgery-for-strabismus"
    | "patient-information-before-IPL-therapy"
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
        key: "informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam",
        slug: {
            lt: "informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam",
            en: "information-for-patients-prior-to-microsurgery",
            ru: "informatsiya-dlya-patsiyentov-pered-mikrokhirurgicheskim-vmeshatelstvom",
        },
    },
    {
        key: "instruktsiyi-pislya-lazernoyi-korektsiyi-zoru",
        slug: {
            lt: "instruktsiyi-pislya-lazernoyi-korektsiyi-zoru",
            en: "instructions-after-laser-vision-correction",
            ru: "instruktsii-posle-korrektsii-zreniya",
        },
    },
    {
        key: "pamyatka-patsiyenta-pered-vitreoretynalnoyu-khirurhiyeyu",
        slug: {
            lt: "pamyatka-patsiyenta-pered-vitreoretynalnoyu-khirurhiyeyu",
            en: "patient-reminder-before-vitreoretinal-surgery",
            ru: "pamyatki-patsiyentu-pered-vitreoretinalnoy-khirurgiyey",
        },
    },
    {
        key: "pamyatka-patsiyenta-pislya-khirurhiyi-katarakty",
        slug: {
            lt: "pamyatka-patsiyenta-pislya-khirurhiyi-katarakty",
            en: "pamyatka-patsiyenta-pislya-khirurhiyi-katarakty",
            ru: "pamyatki-paczienta-posle-hirurgii-katarakty",
        },
    },
    {
        key: "patient-information-before-IPL-therapy",
        slug: {
            lt: "patient-information-before-IPL-therapy",
            en: "patient-information-before-IPL-therapy",
            ru: "patient-information-before-IPL-therapy",
        },
    },
    {
        key: "preparation-for-surgery-for-strabismus",
        slug: {
            lt: "preparation-for-surgery-for-strabismus",
            en: "preparation-for-surgery-for-strabismus",
            ru: "preparation-for-surgery-for-strabismus",
        },
    },
    {
        key: "reminder-before-a-comprehensive-pediatric-examination",
        slug: {
            lt: "reminder-before-a-comprehensive-pediatric-examination",
            en: "reminder-before-a-comprehensive-pediatric-examination",
            ru: "reminder-before-a-comprehensive-pediatric-examination",
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
                            text: "Gydymas klinikoje „Naujas regėjimas“ (Vilnius, Lietuva) organizuojamas „vienos dienos“ formatu. Šiuolaikinių akių mikrochirurgijos technologijų taikymas leidžia paspartinti regėjimo atsistatymą, sutrumpinti bendrą gydymo trukmę, išvengti hospitalizacijos ir dažniausiai grįžti į gyvenamąją vietą jau po 1–2 valandų po procedūros ar operacijos.",
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
                                "regėjimo lazerinei korekcijai – 1 dieną; antrą dieną, paciento pageidavimu, atliekamas kontrolinis patikrinimas;",
                                "kataraktos operacijai – ne trumpiau kaip 1–2 dienas;",
                                "glaukomos lazeriniam gydymui – apie 2 dienas;",
                                "tinklainės lazerinėms procedūroms – 1 dieną;",
                                "konservatyvaus arba aparatūrinio gydymo kursui – pagal gydytojo paskyrimą.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Per nurodytą laiką Jums bus atlikta išsami regėjimo diagnostika, parengta intervencijai, apskaičiuota korekcijos programa arba parinkti dirbtinio lęšiuko parametrai, suorganizuotas priešoperacinis ištyrimas (jei reikalingi laboratoriniai tyrimai, pacientas gali juos atlikti savo gyvenamojoje vietoje), atlikta pati procedūra ar operacija, taip pat privalomi kontroliniai patikrinimai. Tolesnį stebėjimo grafiką gydytojas nustato individualiai, atsižvelgdamas į klinikinę situaciją ir atsistatymo dinamiką.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Pacientams iš kitų miestų medicininės informacijos ir registracijos tarnybos darbuotojai padės parinkti ir rezervuoti viešbutį, taip pat suteiks informaciją organizaciniais klausimais, kad Jūsų vizitas į kliniką ir buvimas mieste būtų kuo patogesnis.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Kad būtų paprasčiau rasti apgyvendinimą viešnagės Vilniuje ir gydymo klinikoje „Naujas regėjimas“ laikotarpiu, siūlome keletą viešbučių variantų, esančių netoli klinikos. Pageidaujant, numerį galite rezervuoti savarankiškai iš anksto, kad atvykimo dieną nereikėtų spręsti šio klausimo.",
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
            k =>
                k.key ===
                "informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam"
        )!,
        lt: {
            title: "Інформація для пацієнтів перед мікрохірургічним втручанням",
            content: [],
        },
        en: {
            title: "Information for patients prior to microsurgery",
            content: [],
        },
        ru: {
            title: "Информация для пациентов перед микрохирургическим вмешательством",
            content: [],
        },
    },
    {
        name: keySlugPatientsInstruction.find(
            k => k.key === "preparation-for-surgery-for-strabismus"
        )!,
        lt: {
            title: "Підготовка до операціїї з приводу косоокості",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Перед операцією ви маєте пройти повне обстеження у офтальмолога. На огляді у лікаря бажано мати виписки після попередніх обстежень та попередніх хірургічних втручань. Перед можливим хірургічним втручанням лікар проводить корекцію та лікування всіх наявних очних захворювань та може призначити вам дообстеження у інших медичних спеціалістів.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Коли необхідний підготовчий період пройдено, ви разом з лікарем створюєте індивідуальний комфортний план лікування, проходите передопераційні обстеження, вам призначають день оперативного втручання. Разом з анестезіологом під час передопераційного огляду обирається комфортний метод знеболення та обговорюються нюанси передопераційної підготовки.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Після операції око може бути закрите пов’язкою. Пов’язка на оці залишається до контрольного огляду наступного дня. Ви узгоджуєте з операційною медсестрою час прибуття на контрольний огляд. ",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Наступного дня ви приїжджаєте в «Німецьку очну клініку» для першого контрольного огляду в призначений час. Вас супроводять в хірургічне відділення, на контрольному огляді лікар-хірург оцінить стан Вашого ока та призначить дату наступного огляду.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Після операції необхідно дотримуватись наступних правил:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            numeric: true,
                            list: [
                                "Післяопераційний захист ока: перші 3 тижні не можна торкатися очей руками (чесати, терти, натискати тощо), в приміщенні можна знаходитись без пов’язки та сонцезахисних окулярів; місяць після операції, виходячи на вулицю в будь-яку погоду, необхідні сонцезахисні окуляри.",
                                "Особиста гігієна: в післяопераційному періоді протягом 1 тижня після операції бажано не мити голову та не вмивати обличчя, попереджуючи потрапляння мильного розчину в опероване око. Душ можна приймати одразу, але не вище підборіддя. Відвідування лазні, сауни, басейну, купання у відкритих водоймах протягом місяця після операції заборонено.",
                                "Обмеження фізичних навантажень: протягом місяця після операції виключити тривалі нахили тулуба та голови (миття підлоги без швабри, ручне прання, робота на городі тощо), заняття силовими та ігровими видами спорту, підняття важких речей більше 10 кг для чоловіків та 5 кг для жінок.",
                            ],
                        },
                        {
                            type: "text",
                            text: "Після закінчення лікування Вам буде видано епікриз з термінами лікування, назвою операції, даними контрольних оглядів, рекомендаціями по лікуванню в післяопераційному періоді, в тому числі рекомендації щодо тривалості непрацездатності.",
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Preparing for strabismus surgery",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Before surgery, you must undergo a full ophthalmological examination. It is recommended to bring previous medical records and reports of any earlier surgical procedures to your doctor’s appointment. Before any potential surgery, your doctor will treat and correct any existing eye conditions and may refer you to other medical specialists for additional tests.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Once the necessary preparation period is complete, you and your doctor will create an individual and comfortable treatment plan, undergo preoperative tests, and schedule the date of surgery. During the preoperative consultation with the anesthesiologist, the most suitable method of anesthesia will be chosen and the details of preoperative preparation will be discussed.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "After surgery, your eye may be covered with a bandage. The bandage remains on the eye until the follow-up examination the next day. You will arrange the time of this check-up with the operating nurse.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "The next day, you will come to the 'German Eye Clinic' for your first follow-up examination at the scheduled time. You will be accompanied to the surgical department, where the surgeon will assess the condition of your eye and schedule the next follow-up visit.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "After surgery, it is necessary to follow these rules:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            numeric: true,
                            list: [
                                "Postoperative eye protection: for the first 3 weeks, do not touch your eyes (no scratching, rubbing, or pressing). Indoors, you may be without a bandage or sunglasses; for one month after surgery, you must wear sunglasses outdoors in any weather.",
                                "Personal hygiene: during the first week after surgery, avoid washing your head and face to prevent soap from entering the operated eye. You may take a shower immediately, but only up to chin level. Visiting baths, saunas, swimming pools, or open water is prohibited for one month after surgery.",
                                "Physical activity restrictions: for one month after surgery, avoid prolonged bending of your body and head (such as washing floors without a mop, hand washing clothes, or gardening), strength or contact sports, and lifting objects heavier than 10 kg for men and 5 kg for women.",
                            ],
                        },
                        {
                            type: "text",
                            text: "After completing the treatment, you will receive a discharge summary containing the treatment duration, name of the operation, results of control examinations, and postoperative treatment recommendations, including the duration of temporary disability if applicable.",
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Подготовка к операции по поводу косоглазия",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Перед операцией необходимо пройти полное обследование у офтальмолога. На приём желательно принести выписки из предыдущих обследований и информацию о ранее проведённых хирургических вмешательствах. Перед возможной операцией врач проводит коррекцию и лечение всех имеющихся глазных заболеваний и может направить вас на дополнительные обследования к другим специалистам.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "После завершения подготовительного периода вы вместе с врачом составляете индивидуальный и комфортный план лечения, проходите предоперационные обследования, вам назначается день операции. Во время предоперационного осмотра с анестезиологом выбирается подходящий метод обезболивания и обсуждаются детали предоперационной подготовки.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "После операции глаз может быть закрыт повязкой. Повязка остаётся на глазу до контрольного осмотра на следующий день. Время осмотра согласовывается с операционной медсестрой.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "На следующий день вы приезжаете в «Немецкую глазную клинику» на первый контрольный осмотр в назначенное время. Вас проводят в хирургическое отделение, где врач-хирург оценит состояние вашего глаза и назначит дату следующего осмотра.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "После операции необходимо соблюдать следующие правила:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            numeric: true,
                            list: [
                                "Послеоперационная защита глаза: первые 3 недели нельзя трогать глаза руками (чесать, тереть, нажимать и т.д.), в помещении можно находиться без повязки и солнцезащитных очков; в течение месяца после операции при выходе на улицу в любую погоду необходимо носить солнцезащитные очки.",
                                "Личная гигиена: в течение первой недели после операции желательно не мыть голову и не умывать лицо, чтобы избежать попадания мыльного раствора в прооперированный глаз. Душ можно принимать сразу, но не выше уровня подбородка. Посещение бани, сауны, бассейна и купание в открытых водоёмах запрещено в течение месяца после операции.",
                                "Ограничения физических нагрузок: в течение месяца после операции следует избегать длительных наклонов туловища и головы (мытьё полов без швабры, ручная стирка, работа в огороде и т.п.), занятий силовыми и игровыми видами спорта, подъёма тяжестей более 10 кг для мужчин и 5 кг для женщин.",
                            ],
                        },
                        {
                            type: "text",
                            text: "После завершения лечения вам выдадут эпикриз с указанием сроков лечения, названия операции, данных контрольных осмотров и рекомендаций по послеоперационному периоду, включая длительность временной нетрудоспособности.",
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keySlugPatientsInstruction.find(
            k =>
                k.key ===
                "reminder-before-a-comprehensive-pediatric-examination"
        )!,
        lt: {
            title: "Памʼятка перед дитячим комплексним оглядом",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "При зверненні в Дитячу клініку «Злата» з метою обстеження дитини профілактично  або при наявності скарг слідуйте, будь ласка, наступним рекомендаціям:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Оберіть час відвідування, який не співпадає зі сном або годуванням дитини.",
                                "Поясніть дитині, що лікар оглядає очі, щоб допомогти їм  залишатися здоровими ",
                                "Якщо дитина носить окуляри, візьміть їх з собою.",
                                "При наявності рецептів для корекції окулярами або контактними лінзами, медичної документації про попередні обстеження, оперативні втручання, лікуваннями, візьміть її з собою.",
                                "Уникайте тривалого зорового навантаження перед прийомом лікаря.",
                                "При наявності гострих скарг (біль, почервоніння, закисання, свербіж очей) під час запису на прийом повідомте про це реєстратора.",
                                "Якщо дитина напередодні або в день звернення була обстежена в інших клініках і ще триває ефект широкої зіниці, це не дасть можливість оцінити всі зорові функції і провести повне первинне обстеження.",
                                "Перед початком обстеження повідомте які очні краплі, інші ліки застосовує дитина.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Обстеження проводиться з індивідуальним підходом, в закладі є ігрова дитяча кімната з іграшками та розмальовками. Ми робимо Ваше перебування в клініці комфортним. ",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "Після прийому дотримуйтесь рекомендацій лікаря.",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Reminder before a comprehensive pediatric examination",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "When visiting the Children's Clinic «Zlata» for your child's examination, either for preventive purposes or due to complaints, please follow these recommendations:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Choose a visit time that does not coincide with your child’s sleep or feeding.",
                                "Explain to your child that the doctor examines their eyes to help keep them healthy.",
                                "If your child wears glasses, bring them with you.",
                                "If you have prescriptions for glasses or contact lenses, medical records of previous examinations, surgeries, or treatments, please bring them with you.",
                                "Avoid prolonged visual strain before seeing the doctor.",
                                "If there are acute complaints (pain, redness, discharge, itching of the eyes), inform the receptionist when making an appointment.",
                                "If your child was examined in another clinic the day before or on the same day, and the effect of dilated pupils is still present, it will not be possible to fully assess all visual functions and conduct a complete initial examination.",
                                "Before starting the examination, inform the doctor about any eye drops or other medications your child is currently using.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "The examination is conducted with an individual approach. The clinic has a playroom with toys and coloring books. We make your stay in the clinic comfortable.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "After the appointment, follow the doctor’s recommendations.",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Памятка перед детским комплексным осмотром",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "При обращении в Детскую клинику «Злата» с целью обследования ребёнка профилактически или при наличии жалоб, пожалуйста, следуйте следующим рекомендациям:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Выберите время посещения, которое не совпадает со сном или кормлением ребёнка.",
                                "Объясните ребёнку, что врач осматривает глаза, чтобы помочь им оставаться здоровыми.",
                                "Если ребёнок носит очки, возьмите их с собой.",
                                "При наличии рецептов на очки или контактные линзы, медицинской документации о предыдущих обследованиях, операциях, лечении — возьмите её с собой.",
                                "Избегайте длительной зрительной нагрузки перед приёмом у врача.",
                                "При наличии острых жалоб (боль, покраснение, закисание, зуд глаз) сообщите об этом регистратору при записи на приём.",
                                "Если ребёнок накануне или в день обращения проходил обследование в других клиниках и эффект широкого зрачка ещё сохраняется, это не позволит оценить все зрительные функции и провести полное первичное обследование.",
                                "Перед началом обследования сообщите, какие глазные капли или другие лекарства применяет ребёнок.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Обследование проводится с индивидуальным подходом. В клинике есть игровая комната с игрушками и раскрасками. Мы делаем ваше пребывание в клинике комфортным.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "После приёма соблюдайте рекомендации врача.",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keySlugPatientsInstruction.find(
            k => k.key === "patient-information-before-IPL-therapy"
        )!,
        lt: {
            title: "Памʼятка пацієнта перед IPL-терапією",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "У нашому центрі процедура виконується на IPL-xenon апараті останнього покоління OPTICLEAR XL-DRY EYE MANAGEMENT, який був затверджений для цієї процедури в офтальмології в Україні.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Увага! ",
                                },
                                {
                                    bold: true,
                                    value: "З собою необхідно мати темні окуляри.",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "За 7–14 днів до процедури:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Уникати сонячного опромінення або солярію, щоб не було засмаги (високий ризик пігментації після IPL).",
                                "Не використовувати ретиноїди, кислотні пілінги, відбілювальні креми в зоні навколо очей.",
                                "Не проводити косметологічні процедури в ділянці обличчя (лазер, хімічні пілінги тощо).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { subtitle: true, value: "У день процедури:" },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Очистити шкіру обличчя (без макіяжу, кремів чи олій).",
                                "Уникати використання контактних лінз перед процедурою.",
                                "Можна попередньо прийняти антигістамінний засіб, якщо є схильність до алергічних реакцій (за рекомендацією лікаря).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Одразу після процедури:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Може бути легке почервоніння або набряк — це нормально і проходить за кілька годин.",
                                "За потреби можна прикласти прохолодний компрес (але не лід напряму на шкіру!).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Протягом 24–48 годин:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Не наносити макіяж на зону навколо очей.",
                                "Уникати активного тертя повік або використання агресивних засобів.",
                                "Не використовувати контактні лінзи, якщо повіки подразнені.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [{ subtitle: true, value: "Захист шкіри:" }],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Обов'язково наносити сонцезахисний крем SPF 30+ на обличчя, навіть якщо процедура була тільки на повіках (УФ-промені можуть спровокувати пігментацію).",
                                "Уникати сонця та солярію протягом 1–2 тижнів.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Зволоження та відновлення:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "За рекомендацією лікаря можна використовувати заспокійливий крем (наприклад, з пантенолом).",
                                "Можуть бути призначені краплі чи інші засоби для підтримки очної поверхні.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Уникати теплового навантаження:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Протягом кількох днів — не відвідувати сауну, лазню, гарячі ванни.",
                            ],
                        },
                        {
                            type: "text",

                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Увага! ",
                                },
                                {
                                    bold: true,
                                    value: "IPL-терапія протипоказана під час вагітності, годування груддю, при активній шкірній інфекції, епілепсії, загальних захворювань у стадії декомпенсації.",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Patient information before IPL therapy",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "In our center, the procedure is performed using the latest-generation IPL-xenon device OPTICLEAR XL-DRY EYE MANAGEMENT, which has been approved for this ophthalmological procedure in Ukraine.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Attention! ",
                                },
                                {
                                    bold: true,
                                    value: "You must bring dark sunglasses with you.",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "7–14 days before the procedure:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Avoid sun exposure or tanning beds to prevent tanning (there is a high risk of pigmentation after IPL).",
                                "Do not use retinoids, acid peels, or whitening creams in the eye area.",
                                "Do not undergo cosmetic facial procedures (laser, chemical peels, etc.).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "On the day of the procedure:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Clean your facial skin (no makeup, creams, or oils).",
                                "Avoid wearing contact lenses before the procedure.",
                                "You may take an antihistamine in advance if you are prone to allergic reactions (as recommended by your doctor).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Immediately after the procedure:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Mild redness or swelling may occur — this is normal and should subside within a few hours.",
                                "If necessary, you can apply a cool compress (but do not apply ice directly to the skin!).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Within 24–48 hours:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Do not apply makeup around the eyes.",
                                "Avoid rubbing your eyelids or using harsh skincare products.",
                                "Do not wear contact lenses if your eyelids are irritated.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { subtitle: true, value: "Skin protection:" },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Always apply SPF 30+ sunscreen to your face, even if the procedure was performed only on the eyelids (UV rays may cause pigmentation).",
                                "Avoid sun exposure and tanning beds for 1–2 weeks.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Moisturizing and recovery:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "As recommended by your doctor, you may use a soothing cream (for example, with panthenol).",
                                "Eye drops or other products to support the ocular surface may be prescribed.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Avoid heat exposure:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "For several days, avoid saunas, steam baths, and hot baths.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Attention! ",
                                },
                                {
                                    bold: true,
                                    value: "IPL therapy is contraindicated during pregnancy, breastfeeding, in cases of active skin infection, epilepsy, or general diseases in the decompensation stage.",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Памятка пациента перед IPL-терапией",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "В нашем центре процедура выполняется на IPL-ксеноновом аппарате последнего поколения OPTICLEAR XL-DRY EYE MANAGEMENT, который был одобрен для проведения данной процедуры в офтальмологии в Украине.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Внимание! ",
                                },
                                {
                                    bold: true,
                                    value: "Необходимо иметь с собой тёмные солнцезащитные очки.",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "За 7–14 дней до процедуры:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Избегать солнечного излучения и солярия, чтобы не было загара (высокий риск пигментации после IPL).",
                                "Не использовать ретиноиды, кислотные пилинги, отбеливающие кремы в области вокруг глаз.",
                                "Не проводить косметологические процедуры в области лица (лазер, химические пилинги и т.п.).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { subtitle: true, value: "В день процедуры:" },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Очистить кожу лица (без макияжа, кремов или масел).",
                                "Избегать использования контактных линз перед процедурой.",
                                "При склонности к аллергическим реакциям можно заранее принять антигистаминный препарат (по рекомендации врача).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Сразу после процедуры:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Возможно лёгкое покраснение или отёк — это нормально и проходит через несколько часов.",
                                "При необходимости можно приложить прохладный компресс (но не лёд напрямую на кожу!).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "В течение 24–48 часов:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Не наносить макияж на область вокруг глаз.",
                                "Избегать активного трения век и использования агрессивных средств.",
                                "Не использовать контактные линзы, если веки раздражены.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [{ subtitle: true, value: "Защита кожи:" }],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Обязательно наносить солнцезащитный крем SPF 30+ на лицо, даже если процедура проводилась только на веках (УФ-лучи могут вызвать пигментацию).",
                                "Избегать солнца и солярия в течение 1–2 недель.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Увлажнение и восстановление:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "По рекомендации врача можно использовать успокаивающий крем (например, с пантенолом).",
                                "Могут быть назначены капли или другие средства для поддержания поверхности глаза.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Избегать тепловой нагрузки:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "В течение нескольких дней не посещать сауну, баню, не принимать горячие ванны.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Внимание! ",
                                },
                                {
                                    bold: true,
                                    value: "IPL-терапия противопоказана во время беременности, кормления грудью, при активных кожных инфекциях, эпилепсии и общих заболеваниях в стадии декомпенсации.",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keySlugPatientsInstruction.find(
            k => k.key === "instruktsiyi-pislya-lazernoyi-korektsiyi-zoru"
        )!,
        lt: {
            title: "Інструкції після лазерної корекції зору",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Догляд за пацієнтом в «Британський офтальмологічний центр» не припиняється після його відновлення. Ми безплатно надаємо все необхідне післяопераційне обслуговування та відновне лікування протягом необхідного періоду, навіть після виписки. Це не стосується фізіологічних змін (погіршення стану) очей або інших ускладнень й захворювань, не пов’язаних з лазерною корекцією зору.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Інструкція з проведення операції",
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
                                    value: "Для підготовки до операції:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "добре ознайомтеся зі своєю заявою про згоду на проведення лазерної корекції зору;",
                                "їжте і пийте як завжди (алкоголь не можна вживати за добу перед операцією);",
                                "одягніть неволокнистий одяг з довгими рукавами, що не облягає та в якому ви почуваєтеся комфортно;",
                                "не використовуйте макіяж, парфуми та лосьйон після гоління;",
                                "візьміть із собою протисонцеві окуляри.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Після проведення операції ви отримаєте:",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "рецепт на ліки;",
                                "інструкції для медичного застосування лікарських засобів;",
                                "екстрений контактний номер телефону (для наступної після операції ночі);",
                                "запрошення на післяопераційну консультацію.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    bold: true,
                                    value: "Повернення додому",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "Не залишайте клініку без супроводу, тому що вам може знадобитися допомога при поверненні додому. Буде добре, якщо в день операції вас супроводжуватиме друг чи родич. Якщо це неможливо, рекомендуємо заздалегідь домовитися про транспорт додому. Після операцій з лазерної корекції зору чи лікування катаракти користуватися повітряним транспортом не забороняється. Однак ми не рекомендуємо здійснювати польоти відразу після операції. Ваш зір може залишатися трохи розпливчастим з підвищеною чутливістю до світла. Також рекомендується порадитися з лікарем на післяопераційних консультаціях щодо планування будь-яких самостійних поїздок протягом першого місяця після операції.",
                        },
                        {
                            type: "text",
                            text: "Поради на післяопераційний період",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "У перший день (наступний після операції):",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "намагайтеся перебувати в розслабленому стані;",
                                "якомога менше рухайте очима;",
                                "намагайтеся не заплющувати очі;",
                                "НЕ ТРІТЬ очі;",
                                "уникайте діяльності, що потребує візуальної концентрації (перегляд телевізора, використання комп’ютера).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Якщо у вас є маленькі діти, рекомендуємо заздалегідь організувати допомогу з боку родичів або друзів на перші два дні, особливо після операцій з лазерної корекції. Зведіть до мінімуму вживання алкоголю протягом перших 2–3 днів, оскільки він може вступити у взаємодію з лікарськими засобами та спричинити сухість очей. Якомога більше відпочивайте й уникайте непотрібної напруги очей.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Лікарські засоби",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Ви отримаєте рецепт на ліки з післяопераційного догляду. Їхня вартість не входить у вартість лікування. Використовуйте призначені лікарські засоби відповідно до інструкцій хірурга та зберігайте всі ліки у прохолодному, сухому місці.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Як правильно застосовувати очні краплі:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Завжди мийте руки перед застосуванням очних крапель;",
                                "Закиньте голову назад і дивіться в стелю;",
                                "Капніть ліки точно на очне яблуко. НЕ РОЗТЯГУЙТЕ ПОВІКУ;",
                                "Постарайтеся не торкатися ока та повіки піпеткою флакона.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Пам’ятайте, що ваш зір може бути розпливчатим одразу після застосування очних крапель та мазей. Дотримуйтесь інструкцій лікарського засобу щодо того, які очні краплі повинні застосовуватися в першу чергу і з яким інтервалом. Якщо ви пропустили прийняття ліків, не приймайте дві або три дози за раз. Можливо, вам буде комфортніше, якщо хтось допомагатиме вам із застосуванням очних крапель, поки ваші очі не відновляться.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Додаткові запобіжні заходи:",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            list: [
                                "не давайте іншим людям використовувати ваші краплі для очей;",
                                "не торкайтеся шийкою флакона до ока чи іншої поверхні;",
                                "відразу після застосування накривайте флакон з очними краплями або маззю кришкою;",
                                "тримайте герметично закритий флакон у вертикальному положенні;",
                                "викиньте всі краплі та мазі після закінчення курсу лікування.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "НЕ ПЕРЕВИЩУЙТЕ РЕКОМЕНДОВАНУ ДОЗУ.",
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
                                    value: "Догляд за очима",
                                },
                            ],
                        },
                        {
                            type: "text",
                            text: "Після проведення операції у вас можуть з’явитися такі симптоми:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "сльозливість очей;",
                                "світлочутливість (одягайте протисонцеві окуляри при виході на вулицю);",
                                "відчуття смітинки в оці;",
                                "запалення очей, важкість при їх відкритті;",
                                "розширені зіниці;",
                                "набряклі та/або відвислі повіки;",
                                "мушки та плями перед очима.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Немає причин хвилюватися, оскільки це нормальні тимчасові наслідки операції.",
                        },
                        {
                            type: "text",
                            text: [{ bold: true, value: "Практичні поради:" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Якщо ви відчуваєте необхідність очистити область очей, використовуйте марлю, змочену в охолодженій кип’яченій воді, та намагайтеся не торкатися очей.",
                                "Не користуйтеся комерційними рідинами для миття очей. Якщо у вас з’явилося відчуття смітинки в оці, сухості або здавленості в оці(-аx), скористайтеся краплями «штучна сльоза» без консервантів. Їх можна придбати в будь-якій аптеці без рецепта.",
                                "Якщо ваші повіки набряклі, з’явився свербіж і почервоніння очей (навіть через кілька днів після операції), це може бути реакція на лікарські засоби. Зверніться до клініки за порадою щодо альтернативного засобу лікування.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "Відчуття дискомфорту в очах",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Завдяки місцевому застосуванню крапель-анестетиків вся операція проходить безболісно. Відчуття дискомфорту через годину після операції – нормальне явище, оскільки анестезія перестає діяти. Дискомфорт може бути схожим на відчуття смітинки в оці й триватиме 24–38 годин. Лазерна корекція зору зазвичай практично безболісна, але після операції може з’явитися досить сильне відчуття дискомфорту, з яким допоможуть впоратися лікарські засоби та бандажні контактні лінзи.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "Небезпека при сильному болю",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Якщо після 24 годин відчувається сильний біль, зверніться в очну клініку (з вівторка по суботу) для запису на післяопераційний прийом. Якщо клініка не працює або вам потрібна консультація у неділю, зателефонуйте за номером. Один з наших працівників зв’яжеться з вашим хірургом і домовиться з ним про те, щоб він передзвонив вам.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Малоймовірно, що лікарі швидкої допомоги знайомі з ускладненнями після лазерних операцій. У разі ускладнення (що малоймовірно) якнайшвидше звертайтеся до клініки.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Післяопераційне обслуговування",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Обов’язково приходьте на призначені вам консультації відповідно до рекомендації лікаря. Один або два прийоми після операції є обов’язковими. Все післяопераційне обслуговування в «Британський офтальмологічний центр» включено у вартість операції й проводиться абсолютно безплатно.",
                        },
                        {
                            type: "table",
                            gap: true,
                            headers: [
                                "Лікування",
                                "Перший візит",
                                "Другий візит",
                                "Третій візит",
                            ],
                            rows: [
                                [
                                    "LASIK",
                                    "3-4 дні*",
                                    "7-14 днів та виписка, якщо все гаразд",
                                    "1 місяць",
                                ],
                                [
                                    "LASEK",
                                    "3-4 дні*",
                                    "1 місяць та виписка, якщо все гаразд",
                                    "",
                                ],
                                [
                                    "Катаракта",
                                    "1 день",
                                    "1 тиждень та виписка, якщо все гаразд",
                                    "нема потреби",
                                ],
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "* Якщо необхідно зняти бандажні лінзи, то візит до нашого центру є обов’язковим через 3–4 дні або на 7–14 день.",
                        },
                        {
                            type: "text",
                            text: "Скасувати прийом дозволяється за 3 дні, якщо пізніше — стягується плата у розмірі 50% вартості послуги. Якщо ви спізнюєтеся на прийом на двадцять і більше хвилин, вам доведеться записатися на інший час.",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "У деяких випадках хірург може призначити додаткові очні краплі. За виписаним рецептом призначений лікарський засіб можна придбати в аптеці.",
                        },
                        {
                            type: "text",
                            text: "Якщо вам зручніше, ми можемо направити вас на післяопераційний огляд до одного з центрів оптичної корекції у вашому місті, послуги якого ви сплачуєте самі. Такий варіант може бути економнішим, ніж поїздка до клініки. Результати огляду буде надіслано до клініки та внесено у вашу медичну карту. У цьому випадку просіть копію післяопераційного огляду на руки.",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Повернення до повсякденного життя",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "Корисні рекомендації",
                        },
                        {
                            type: "list",
                            list: [
                                "Якщо ви працюєте в умовах пилу (наприклад, на будівельних майданчиках), захищайте очі за допомогою захисних окулярів типу «маска» принаймні протягом одного місяця.",
                                "Працюючи з дисплеями, регулярно кожні 45 хвилин робіть 15-хвилинні перерви, щоб уникнути втоми очей у перші 2–3 тижні.",
                                "Рекомендується надягати протисонцеві окуляри при виході надвір протягом перших кількох тижнів — це захистить очі від пилу та зменшить тимчасову чутливість до світла.",
                                "Пацієнтам після операції з видалення катаракти слід уникати підйому тяжкості протягом перших 4-х тижнів.",
                                "Під час післяопераційних консультацій лікар визначить, чи відповідає ваш зір необхідним стандартам.",
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "НЕ СІДАЙТЕ ЗА КЕРМО, ДОКИ ЛІКАР НЕ ПІДТВЕРДИТЬ, ЩО ЦЕ БЕЗПЕЧНО.",
                        },
                        {
                            type: "text",
                            text: "За стандартами водіння ви маєте бути здатними читати номерний знак автомобіля на відстані 20,5 м. Якщо вам було прооперовано одне око, проявляйте особливу уважність під час водіння, адже ваш бінокулярний (стереоскопічний) зір тимчасово порушено й визначення відстаней може бути ускладнено.",
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
                            text: "Уникайте інтенсивних фізичних навантажень, поки ваші очі повністю не відновляться (зазвичай це займає близько місяця). Наведена нижче таблиця дає рекомендації щодо термінів відновлення для основних видів діяльності. Лікар може дати інші поради залежно від ваших індивідуальних обставин. Якщо ви професійно займаєтеся будь-яким із зазначених видів спорту або маєте питання щодо інших, обов’язково проконсультуйтеся зі своїм лікарем.",
                        },
                        {
                            type: "table",
                            gap: true,
                            headers: [
                                "Вид діяльності",
                                "iQ LASIK Oxygen",
                                "SportLine LASEK",
                            ],
                            rows: [
                                ["Оздоровчий біг", "2 тижні", "2 тижні"],
                                ["Вправи з аеробіки", "1 тиждень", "1 тиждень"],
                                ["Йога / пілатес", "1 тиждень", "1 тиждень"],
                                ["Підняття ваги", "2 тижні", "2 тижні"],
                                ["Сауна та парна", "1 місяць", "1 місяць"],
                                ["Плавання", "1 місяць", "1 місяць"],
                                [
                                    "Футбол та безконтактні бойові мистецтва",
                                    "1 місяць",
                                    "1 місяць",
                                ],
                                [
                                    "Лижний спорт / сноубординг, теніс, сквош, крикет",
                                    "1 місяць",
                                    "1 місяць",
                                ],
                                [
                                    "Регбі, контактні бойові мистецтва",
                                    "3 місяці",
                                    "6 тижнів",
                                ],
                                [
                                    "Підводне плавання з аквалангом (30 футів і глибше)",
                                    "3 місяці",
                                    "3 місяці",
                                ],
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Під час спортивних занять протягом як мінімум двох тижнів захищайте свої очі від попадання поту, надягаючи головну пов’язку.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Загальні рекомендації",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Прийняття душу та ванни",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Протягом перших семи днів після операції уникайте потрапляння води у вічі.",
                                "Під час прийняття душу стійте спиною до душу на один крок далі, ніж зазвичай, щоб уникнути попадання води в очі.",
                                "Під час миття голови закидайте її назад, щоб уникати потрапляння шампуню в очі.",
                                "Якщо у вічі випадково потрапить шампунь, мило чи інший продукт — НЕ ТРІТЬ ОЧІ! Можна скористатися відсвіжувальними краплями, щоб вимити продукт з очей та послабити печіння.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Макіяж",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Протягом перших двох тижнів після операції макіяж наносити не можна.",
                                "Косметичними продуктами для обличчя (крем, тональний засіб, рум’яна тощо) можна користуватися пізніше, але не наносити їх надто близько до очей.",
                                "Щонайменше місяць після операції не використовуйте водостійку туш, оскільки вона складніше знімається.",
                                "Протягом місяця з дня проведення операції уникайте попадання будь-якого засобу макіяжу або продуктів для зняття макіяжу в очі. Якщо це сталося, вимийте продукт з очей за допомогою відсвіжувальних крапель і в жодному разі не тріть очі.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Відпустка",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Не рекомендується виїжджати за кордон протягом тижня з дня проведення операції, адже ви маєте бути поблизу, щоб прийти на перші два післяопераційні огляди.",
                                "Подорожуючи країною зі спекотним кліматом, носіть якісні протисонцеві окуляри з повним захистом від ультрафіолетових променів спектру А та В. Протягом одного місяця після операції не рекомендується засмагати.",
                                "Під час занять зимовими видами спорту носіть якісні протисонцеві окуляри або окуляри типу «маска» з повним захистом від ультрафіолетових променів спектру А та В.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Читання",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Залежно від рівня корекції, читання тексту дрібним шрифтом може бути ускладнено. Це нормально і триватиме лише декілька тижнів.",
                                "Пацієнтам старше 45 років можуть знадобитися пресбіопічні окуляри. Це природний віковий процес для очей і може стати в пригоді тільки для видів діяльності, що вимагають гарного зору поблизу (таких як читання, шиття, в’язання тощо).",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Солярії",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Протягом місяця після лазерної корекції та трьох місяців після процедур лікування катаракти не користуйтеся послугами соляріїв.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Куріння",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Якщо це можливо, протягом одного тижня уникайте куріння або перебування в задимлених місцях.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    bold: true,
                                    value: "Додаткові рекомендації",
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
                            text: "Бандажні контактні лінзи",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Бандажні контактні лінзи переважно використовуються після операції LASEK з метою захисту епітелію (зовнішньої покривної тканини) та зменшення відчуття дискомфорту. Щоб їх зняти, через 3-4 дні вам знадобиться повернутися до клініки. Іноді пацієнти не переносять бандажні лінзи, в такому випадку їх доведеться зняти раніше. Під час використання та зняття бандажних лінз може з’явитися певний дискомфорт чи біль, який зазвичай зникає протягом 6-24 годин. Більше відпочивайте і приймайте знеболювальні засоби, але НІ В ЯКОМУ РАЗІ НЕ ПЕРЕВИЩУЙТЕ РЕКОМЕНДОВАНУ ДОЗУ І НІКОЛИ НЕ ЗНІМАЙТЕ КОНТАКТНІ ЛІНЗИ САМОСТІЙНО.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "У разі випадіння бандажної лінзи може з’явитися певний дискомфорт. В такому випадку не намагайтеся вставити її назад в око. Продовжуйте використовувати лікарські краплі відповідно до рекомендацій та прийдіть на призначені вам післяопераційні консультації.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Ефект відновлення (помутніння)",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Протягом 3-4 тижнів після операції LASEK пацієнти можуть мати легке помутніння рогівки ока. Для прооперованої області це нормальна реакція відновлення.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Помутніння рогівки ока найчастіше слабо виражене, і більшість пацієнтів його не помічають. У поодиноких випадках воно проходить через 6-12 місяців. Ризик помутніння зростає у разі збільшення доз ліків, і ваш лікар дасть рекомендацію, якщо така ймовірність існує. У разі важкої форми помутніння зір може порушитись, в такому разі вам знадобиться обговорити курс лікування з вашим лікарем. У деяких випадках лікар призначає стероїдні краплі, які можна придбати в будь-якій аптеці, або інші методи лікування.",
                        },
                        {
                            type: "text",
                            text: "Наші спеціалісти зроблять все можливе для вашого зору.І тисячі наших пацієнтів, які повернули собі добрий зір, яскраве тому підтвердження.",
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Instructions after laser vision correction",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Patient care at «British Ophthalmology Center» does not end after recovery. We provide all necessary postoperative care and rehabilitation treatment free of charge for the required period, even after discharge. This does not apply to physiological changes (deterioration) of the eyes or other complications and diseases not related to laser vision correction.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Surgery instructions",
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
                                    value: "To prepare for the surgery:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Familiarize yourself with your consent form for laser vision correction;",
                                "Eat and drink as usual (do not consume alcohol 24 hours before surgery);",
                                "Wear non-fibrous, loose-fitting long-sleeve clothing in which you feel comfortable;",
                                "Do not use makeup, perfume, or aftershave lotion;",
                                "Bring sunglasses with you.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "After the surgery, you will receive:",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "a prescription for medication;",
                                "instructions for the medical use of the prescribed drugs;",
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
                            text: "Do not leave the clinic unaccompanied, as you may need assistance getting home. Ideally, a friend or family member should accompany you on the day of surgery. If this is not possible, we recommend arranging transportation home in advance. Air travel after laser vision correction or cataract treatment is not prohibited, but we do not recommend flying immediately after the procedure. Your vision may remain slightly blurry, and light sensitivity may increase. It is also advisable to consult your doctor during postoperative visits regarding any independent travel plans within the first month after surgery.",
                        },
                        {
                            type: "text",
                            text: "Postoperative care advice",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "On the first day (following the surgery):",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Try to stay relaxed;",
                                "Move your eyes as little as possible;",
                                "Try not to squeeze your eyes shut;",
                                "Do NOT rub your eyes;",
                                "Avoid activities that require visual focus (watching TV, using a computer).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "If you have small children, we recommend arranging help from family or friends for the first two days, especially after laser correction surgery. Minimize alcohol consumption during the first 2–3 days, as it may interact with medications and cause dry eyes. Get as much rest as possible and avoid unnecessary eye strain.",
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
                            text: "You will receive a prescription for postoperative medication. Their cost is not included in the treatment price. Use all prescribed medicines according to your surgeon’s instructions and store them in a cool, dry place.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "How to properly use eye drops:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Always wash your hands before applying eye drops;",
                                "Tilt your head back and look up at the ceiling;",
                                "Apply the drop directly to the eyeball. Do NOT pull on your eyelid;",
                                "Try not to touch your eye or eyelid with the bottle tip.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Remember that your vision may be blurry immediately after using eye drops and ointments. Follow the instructions for the medication regarding which eye drops should be applied first and at what intervals. If you miss a dose, do not take two or three doses at once. It may be more comfortable for you if someone helps you apply the eye drops until your eyes recover.",
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
                                "do not let other people use your eye drops;",
                                "do not touch the tip of the bottle to your eye or any other surface;",
                                "immediately after applying, close the bottle of eye drops or ointment with its cap;",
                                "keep the tightly closed bottle in an upright position;",
                                "discard all drops and ointments after completing the treatment course.",
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
                            text: "After the surgery, you may experience the following symptoms:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "watery eyes;",
                                "light sensitivity (wear sunglasses when going outside);",
                                "a sensation of a foreign body in the eye;",
                                "eye inflammation, heaviness when opening them;",
                                "dilated pupils;",
                                "swollen and/or drooping eyelids;",
                                "floaters and spots before the eyes.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "There is no reason to worry, as these are normal temporary consequences of the surgery.",
                        },
                        {
                            type: "text",
                            text: [{ bold: true, value: "Practical advice:" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "If you feel the need to clean the eye area, use gauze soaked in cooled boiled water and try not to touch your eyes.",
                                "Do not use commercial eye-washing liquids. If you feel a foreign body, dryness, or pressure in your eye(s), use preservative-free ‘artificial tear’ drops. They can be purchased at any pharmacy without a prescription.",
                                "If your eyelids are swollen, itchy, and red (even several days after surgery), this may be a reaction to medication. Contact the clinic for advice on an alternative treatment.",
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
                            text: "Due to the local use of anesthetic drops, the entire operation is painless. Discomfort an hour after the surgery is normal, as the anesthesia wears off. The discomfort may feel like a foreign body in the eye and will last 24–38 hours. Laser vision correction is usually almost painless, but after the operation you may experience considerable discomfort, which can be relieved with medications and bandage contact lenses.",
                        },
                        {
                            type: "text",
                            text: [
                                { bold: true, value: "Severe pain warning" },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "If you experience severe pain after 24 hours, contact the eye clinic (Tuesday to Saturday) to schedule a postoperative appointment. If the clinic is closed or you need consultation on Sunday, call the provided number. One of our staff members will contact your surgeon and arrange for them to call you back.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "It is unlikely that emergency doctors are familiar with complications after laser surgeries. In the unlikely event of a complication, contact the clinic as soon as possible.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Postoperative care",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Be sure to attend your scheduled follow-up appointments as recommended by your doctor. One or two postoperative visits are mandatory. All postoperative care at the “British Ophthalmology Center” is included in the cost of the surgery and is provided completely free of charge.",
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
                                    "7–14 days and discharge if everything is fine",
                                    "1 month",
                                ],
                                [
                                    "LASEK",
                                    "3–4 days*",
                                    "1 month and discharge if everything is fine",
                                    "",
                                ],
                                [
                                    "Cataract",
                                    "1 day",
                                    "1 week and discharge if everything is fine",
                                    "no need",
                                ],
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "* If it is necessary to remove the bandage lenses, a visit to our center is required after 3–4 days or on day 7–14.",
                        },
                        {
                            type: "text",
                            text: "You may cancel your appointment up to 3 days in advance; if later, a 50% service fee will be charged. If you are 20 minutes or more late, you will need to schedule a new appointment.",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "In some cases, the surgeon may prescribe additional eye drops. The prescribed medication can be purchased at a pharmacy with a prescription.",
                        },
                        {
                            type: "text",
                            text: "If it is more convenient for you, we can refer you for a postoperative examination to one of the optical correction centers in your city, which you will pay for yourself. This option may be more economical than traveling to the clinic. The examination results will be sent to the clinic and added to your medical record. In this case, please request a copy of the postoperative report.",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Returning to daily life",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "Useful recommendations",
                        },
                        {
                            type: "list",
                            list: [
                                "If you work in dusty environments (for example, on construction sites), protect your eyes with safety goggles of the “mask” type for at least one month.",
                                "When working with screens, take a 15-minute break every 45 minutes to avoid eye fatigue during the first 2–3 weeks.",
                                "It is recommended to wear sunglasses outdoors during the first few weeks — this will protect your eyes from dust and reduce temporary light sensitivity.",
                                "Patients after cataract removal surgery should avoid heavy lifting for the first 4 weeks.",
                                "During postoperative consultations, your doctor will determine whether your vision meets the necessary standards.",
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "DO NOT DRIVE UNTIL YOUR DOCTOR CONFIRMS THAT IT IS SAFE.",
                        },
                        {
                            type: "text",
                            text: "According to driving standards, you must be able to read a car’s license plate from a distance of 20.5 meters. If only one eye was operated on, be especially cautious when driving, as your binocular (stereoscopic) vision is temporarily affected and distance perception may be impaired.",
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
                            text: "Avoid intense physical activity until your eyes have fully recovered (this usually takes about a month). The table below provides recommendations on recovery times for major activities. Your doctor may offer different advice depending on your individual circumstances. If you are a professional athlete or have questions about other types of sports, be sure to consult your doctor.",
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
                                ["Jogging", "2 weeks", "2 weeks"],
                                ["Aerobics", "1 week", "1 week"],
                                ["Yoga / Pilates", "1 week", "1 week"],
                                ["Weight lifting", "2 weeks", "2 weeks"],
                                ["Sauna and steam bath", "1 month", "1 month"],
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
                                    "Scuba diving (30 feet and deeper)",
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
                                    value: "Showering and bathing",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Avoid getting water in your eyes during the first seven days after surgery.",
                                "When showering, stand one step further back from the shower than usual to prevent water from entering your eyes.",
                                "When washing your hair, tilt your head back to avoid shampoo getting into your eyes.",
                                "If shampoo, soap, or any other product accidentally gets into your eyes — DO NOT RUB THEM! Use refreshing drops to rinse the product out and relieve the burning sensation.",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Make-up" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Do not apply make-up during the first two weeks after surgery.",
                                "Facial cosmetics (cream, foundation, blush, etc.) can be used later, but avoid applying them too close to your eyes.",
                                "Avoid using waterproof mascara for at least one month, as it is harder to remove.",
                                "Avoid getting any make-up or make-up remover products into your eyes for one month after surgery. If this happens, rinse them out with refreshing drops and DO NOT RUB YOUR EYES.",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Vacation" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "It is not recommended to travel abroad within a week after surgery, as you should be nearby for your first two postoperative check-ups.",
                                "When traveling to hot climates, wear high-quality sunglasses with full UVA and UVB protection. Avoid sunbathing for one month after surgery.",
                                "When engaging in winter sports, wear high-quality sunglasses or ski goggles with full UVA and UVB protection.",
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
                                "Depending on the correction level, reading small print may be difficult for a few weeks — this is normal.",
                                "Patients over 45 may need presbyopic glasses. This is a natural age-related process and may be useful for activities that require clear near vision (reading, sewing, knitting, etc.).",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Tanning beds" }],
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
                                "If possible, avoid smoking or staying in smoky environments for one week.",
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
                            text: "Bandage contact lenses are mainly used after LASEK surgery to protect the epithelium (the outer tissue layer) and reduce discomfort. You’ll need to return to the clinic in 3–4 days to remove them. Some patients cannot tolerate these lenses — in such cases, they are removed earlier. Some discomfort or pain may occur during use or removal, usually resolving within 6–24 hours. Rest more and take painkillers, but NEVER EXCEED THE RECOMMENDED DOSE AND NEVER REMOVE CONTACT LENSES YOURSELF.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "If a bandage lens falls out, you may feel some discomfort. Do not try to reinsert it. Continue using your prescribed eye drops and attend your scheduled follow-up consultations.",
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
                            text: "For 3–4 weeks after LASEK surgery, patients may experience slight corneal haze. This is a normal part of the healing process.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Corneal haze is usually mild and unnoticeable, but in rare cases may last up to 6–12 months. The risk increases with certain medications — your doctor will advise you if that applies. In severe cases, vision may be affected, requiring further treatment. Steroid drops or other therapies may be prescribed.",
                        },
                        {
                            type: "text",
                            text: "Our specialists will do everything possible to ensure the best results for your vision. Thousands of our patients who have regained clear sight are living proof of this.",
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
                            text: "Уход за пациентом в «Британском офтальмологическом центре» не прекращается после его восстановления. Мы бесплатно предоставляем всё необходимое послеоперационное обслуживание и восстановительное лечение в течение требуемого периода, даже после выписки. Это не относится к физиологическим изменениям (ухудшению состояния) глаз или другим осложнениям и заболеваниям, не связанным с лазерной коррекцией зрения.",
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
                                "наденьте неворсистую свободную одежду с длинными рукавами, в которой вам будет удобно;",
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
                            text: "Не покидайте клинику без сопровождения, так как вам может понадобиться помощь при возвращении домой. Лучше, если в день операции вас сопроводит друг или родственник. Если это невозможно, рекомендуем заранее договориться о транспорте. После операций по лазерной коррекции зрения или лечению катаракты перелёты не запрещены, однако мы не рекомендуем летать сразу после операции. Зрение может оставаться немного размытым, а чувствительность к свету — повышенной. Также желательно обсудить с врачом на послеоперационных консультациях любые поездки, запланированные в течение первого месяца после операции.",
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
                                "старайтесь оставаться в спокойном состоянии;",
                                "по возможности не двигайте глазами;",
                                "постарайтесь не зажмуривать глаза;",
                                "НЕ ТРИТЕ глаза;",
                                "избегайте занятий, требующих зрительной концентрации (просмотр телевизора, работа за компьютером).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Если у вас есть маленькие дети, рекомендуем заранее организовать помощь родственников или друзей на первые два дня, особенно после лазерной коррекции. Минимизируйте употребление алкоголя в течение первых 2–3 дней, так как он может взаимодействовать с лекарствами и вызывать сухость глаз. Больше отдыхайте и избегайте лишнего напряжения глаз.",
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
                            text: "Вы получите рецепт на лекарства для послеоперационного ухода. Их стоимость не входит в стоимость лечения. Используйте препараты строго в соответствии с инструкциями хирурга и храните их в прохладном, сухом месте.",
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
                                "Всегда мойте руки перед использованием глазных капель;",
                                "Запрокиньте голову назад и смотрите в потолок;",
                                "Капните лекарство прямо на глазное яблоко. НЕ ОТТЯГИВАЙТЕ ВЕКО;",
                                "Старайтесь не касаться глаза и века кончиком флакона.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Помните, что ваше зрение может быть размытым сразу после применения глазных капель и мазей. Соблюдайте инструкции к препарату о том, какие капли следует применять первыми и с каким интервалом. Если вы пропустили прием лекарства, не применяйте две или три дозы сразу. Возможно, вам будет удобнее, если кто-то поможет вам закапывать капли, пока ваши глаза не восстановятся.",
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
                                "не позволяйте другим людям использовать ваши глазные капли;",
                                "не прикасайтесь горлышком флакона к глазу или другой поверхности;",
                                "сразу после применения закрывайте флакон с каплями или мазью крышкой;",
                                "держите плотно закрытый флакон в вертикальном положении;",
                                "выбросьте все капли и мази после окончания курса лечения.",
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
                            text: "После операции у вас могут появиться следующие симптомы:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "слезотечение;",
                                "светочувствительность (носите солнцезащитные очки при выходе на улицу);",
                                "ощущение инородного тела в глазу;",
                                "воспаление глаз, тяжесть при открывании;",
                                "расширенные зрачки;",
                                "отёчные и/или опущенные веки;",
                                "«мушки» и пятна перед глазами.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Нет причин для беспокойства, так как это нормальные временные последствия операции.",
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
                                "Если вы чувствуете необходимость очистить область глаз, используйте марлю, смоченную в охлаждённой кипячёной воде, и постарайтесь не касаться глаз.",
                                "Не используйте коммерческие жидкости для промывания глаз. Если у вас появилось ощущение инородного тела, сухости или давления в глазу(-ах), используйте капли «искусственная слеза» без консервантов. Их можно купить в любой аптеке без рецепта.",
                                "Если ваши веки опухли, появился зуд и покраснение глаз (даже через несколько дней после операции), это может быть реакцией на лекарственные средства. Обратитесь в клинику за советом по альтернативному лечению.",
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
                            text: "Благодаря местному применению капель-анестетиков операция проходит безболезненно. Дискомфорт через час после операции — нормальное явление, так как действие анестезии заканчивается. Дискомфорт может напоминать ощущение инородного тела и длиться 24–38 часов. Лазерная коррекция зрения обычно практически безболезненна, но после операции может возникнуть довольно сильное ощущение дискомфорта, с которым помогут справиться лекарственные препараты и бандажные контактные линзы.",
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
                            text: "Если после 24 часов сохраняется сильная боль, обратитесь в глазную клинику (со вторника по субботу), чтобы записаться на послеоперационный приём. Если клиника закрыта или вам нужна консультация в воскресенье, позвоните по указанному номеру. Один из наших сотрудников свяжется с вашим хирургом и договорится, чтобы он вам перезвонил.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Маловероятно, что врачи скорой помощи знакомы с осложнениями после лазерных операций. В случае осложнений (что маловероятно) как можно скорее обращайтесь в клинику.",
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
                            text: "Обязательно приходите на назначенные консультации в соответствии с рекомендациями врача. Один или два приёма после операции обязательны. Всё послеоперационное обслуживание в «Британском офтальмологическом центре» включено в стоимость операции и проводится абсолютно бесплатно.",
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
                            text: "Отменить приём можно за 3 дня; если позже — взимается плата в размере 50% стоимости услуги. Если вы опаздываете на приём на двадцать и более минут, вам потребуется записаться на другое время.",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "В некоторых случаях хирург может назначить дополнительные глазные капли. Назначенное лекарство можно приобрести в аптеке по рецепту.",
                        },
                        {
                            type: "text",
                            text: "Если вам удобнее, мы можем направить вас на послеоперационный осмотр в один из центров оптической коррекции в вашем городе, услуги которого оплачиваются вами самостоятельно. Этот вариант может быть экономичнее, чем поездка в клинику. Результаты осмотра будут отправлены в клинику и внесены в вашу медицинскую карту. В этом случае попросите копию отчёта послеоперационного осмотра.",
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
                                "Если вы работаете в пыльных условиях (например, на строительных площадках), защищайте глаза защитными очками типа «маска» как минимум в течение одного месяца.",
                                "При работе с дисплеями каждые 45 минут делайте 15-минутные перерывы, чтобы избежать усталости глаз в первые 2–3 недели.",
                                "Рекомендуется носить солнцезащитные очки при выходе на улицу в течение первых нескольких недель — это защитит глаза от пыли и уменьшит временную светочувствительность.",
                                "Пациентам после операции по удалению катаракты следует избегать подъёма тяжестей в течение первых 4 недель.",
                                "Во время послеоперационных консультаций врач определит, соответствует ли ваше зрение необходимым стандартам.",
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
                            text: "Согласно стандартам вождения, вы должны быть способны прочитать номерной знак автомобиля с расстояния 20,5 метра. Если операция была проведена только на одном глазу, проявляйте особую осторожность при вождении, так как ваше бинокулярное (стереоскопическое) зрение временно нарушено, и восприятие расстояния может быть затруднено.",
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
                            text: "Избегайте интенсивных физических нагрузок, пока ваши глаза полностью не восстановятся (обычно это занимает около месяца). Приведённая ниже таблица содержит рекомендации по срокам восстановления для основных видов деятельности. Врач может дать иные рекомендации в зависимости от ваших индивидуальных обстоятельств. Если вы профессионально занимаетесь каким-либо из указанных видов спорта или у вас есть вопросы по другим, обязательно проконсультируйтесь со своим врачом.",
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
                            text: "Во время занятий спортом в течение как минимум двух недель защищайте глаза от пота, надевая повязку на голову.",
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
                                "Если шампунь, мыло или другой продукт попал в глаза — НЕ ТРИТЕ ИХ! Используйте освежающие капли, чтобы промыть глаза и снять жжение.",
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
                                "Не используйте водостойкую тушь как минимум месяц — она сложнее снимается.",
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
                                "Путешествуя в жаркие страны, носите качественные солнцезащитные очки с полной защитой от ультрафиолета спектров A и B. В течение месяца после операции избегайте загара.",
                                "Во время занятий зимними видами спорта носите качественные солнцезащитные очки или маску с полной защитой от ультрафиолета спектров A и B.",
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
                                "В зависимости от уровня коррекции чтение мелкого шрифта может быть затруднено несколько недель — это нормально.",
                                "Пациентам старше 45 лет могут понадобиться очки для близи. Это естественный возрастной процесс и может быть полезен для занятий, требующих хорошего зрения вблизи (чтение, шитье, вязание и т.д.).",
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
                                "Если возможно, избегайте курения или нахождения в задымленных помещениях в течение недели.",
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
                            text: "Бандажные линзы обычно используются после операции LASEK для защиты эпителия (наружного слоя) и снижения дискомфорта. Через 3–4 дня необходимо вернуться в клинику, чтобы их снять. Иногда пациенты не переносят линзы — тогда их снимают раньше. Возможен дискомфорт или боль во время ношения или снятия, обычно проходящие через 6–24 часа. Отдыхайте и принимайте обезболивающее, но НИКОГДА НЕ ПРЕВЫШАЙТЕ ДОЗУ И НЕ СНЯТИЕ ЛИНЗЫ САМИ.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Если линза выпала, может появиться дискомфорт. Не пытайтесь вставить её обратно. Продолжайте использовать капли по назначению и приходите на контрольные осмотры.",
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
                            text: "В течение 3–4 недель после операции LASEK может наблюдаться легкое помутнение роговицы. Это нормальный процесс восстановления.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Помутнение обычно слабое и незаметное, но в редких случаях может сохраняться до 6–12 месяцев. Риск повышается при применении некоторых препаратов — врач предупредит, если это ваш случай. В тяжелых формах зрение может ухудшаться, тогда потребуется лечение. Могут быть назначены стероидные капли или другие методы терапии.",
                        },
                        {
                            type: "text",
                            text: "Наши специалисты сделают всё возможное для вашего зрения. Тысячи наших пациентов, вернувших себе хорошее зрение, — лучшее тому доказательство.",
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keySlugPatientsInstruction.find(
            k =>
                k.key ===
                "pamyatka-patsiyenta-pered-vitreoretynalnoyu-khirurhiyeyu"
        )!,
        lt: {
            title: "Пам’ятка пацієнта перед вітреоретинальною хірургією",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Після операції ваше око заклеюють пов’язкою для того, щоб захистити його від випадкового забруднення. Пов’язку слід зняти як прибудете додому. Обробити повіки можна (не саме око) стерильною ватою, змоченою водним розчином фурациліну 0.02% або водним розчином левоміцетину 0.25% (продаються в аптеці). Починаючи з першого дня після операції, не слід постійно заклеювати опероване око пов’язкою, під якою око не може вільно моргати і рухатися.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "В день операції і в період реабілітації можуть виникнути больові відчуття в оперованому оці або в області навколо очей (надбрів’я, скроню). При больовому синдромі доцільно приймати таблетки «Кетанов», «Кеторол», «Анальгін» (згідно з інструкціями до цих препаратів) і звернутися до свого лікаря.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПЕРІОД РЕАБІЛІТАЦІЇ",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Запропоновані рекомендації є загальними, тобто розроблені для більшості пацієнтів. У випадках індивідуального перебігу післяопераційного періоду лікар може запропонувати індивідуальну схему лікування і графік оглядів пацієнта. Уточнюйте, будь ласка, рекомендації при кожному відвідуванні лікаря!",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                [
                                    { bold: true, value: "Режим. " },
                                    {
                                        value: "Після проведеної операції дотримання режиму може мати певне лікувальне значення. Після операції, хірург або ваш лікуючий лікар дадуть рекомендації, як поводитися в першу добу після операції. Надалі вам слід уточнити особливості післяопераційного режиму у вашого лікуючого лікаря.",
                                    },
                                ],
                                [
                                    { bold: true, value: "Гігієна. " },
                                    {
                                        value: "Під час вмивання уникайте попадання мила і води в око. При митті голови нахиляйте голову назад, а не вперед. Якщо вода потрапила в опероване око, промийте його водним розчином фурациліну 0.02% або водним розчином левоміцетину 0.25% (продаються в аптеці).",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Обов’язково відвідуйте лікаря в призначений день!",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Очні краплі потрібні для більш швидкого загоєння і профілактики інфекційних ускладнень. ",
                                    },
                                    {
                                        value: "Як правило, після проведеної операції хірург призначає закапування кількох препаратів: краплі з антибіотиком (наприклад, «Флоксал», «Офтаквікс», «Тобрекс» і ін.), Протизапальні краплі (наприклад, «Неванак», «Індоколлір» і ін.) Або комбіновані препарати ( «Макситрол», «Тобрадекс» і ін.).",
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
                                    value: "Гострота ЗОРУ в післяопераційному періоді",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Поліпшення зору після операції відбувається поступово протягом перших 2 – 3 місяців. У деяких пацієнтів підвищення гостроти зору спостерігається протягом півроку. Як правило, повільніше цей процес протікає у пацієнтів з короткозорістю, цукровим діабетом,загальними захворюванням та  оперованим відшаруванням сітківки,розривами сітківки, мембрани на сітківці і у літніх людей.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "У період загоєння і реабілітації ваші очі можуть бути «різними». Вам можуть знадобитися тимчасові окуляри або контактні лінзи, щоб виправити цю ситуацію. Остаточну очкову корекцію доцільно проводити через 2-3 місяці після операції, хоча терміни підбору окулярів вирішуються індивідуально, якщо, наприклад, опероване єдине око.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "У міру відновлення зору у деяких пацієнтів можуть виникнути спотворення ліній і предметів, з’явитися двоїння. Як правило, ці симптоми слабшають поступово протягом декількох тижнів або місяців.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПОДАЛЬШИЙ ДОГЛЯД І РЕКОМЕНДАЦІЇ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Поступово обмеження, що накладаються в післяопераційному періоді, будуть зняті. Ми пропонуємо вам кілька корисних рекомендацій, які сприятимуть збереженню зору:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Не сідайте за кермо, поки око повністю не відновиться.",
                                "Не тріть очей і не тисніть на опероване око.",
                                "При перегляді телевізора чи читання частіше робіть перерви.",
                                "По можливості носіть сонцезахисні окуляри для захисту очей від ультрафіолетового випромінювання.",
                                "Дотримуйтесь встановленого графіка відвідування лікаря.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ДОДАТКОВА ІНФОРМАЦІЯ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { bold: true, value: "ГАЗ. " },
                                {
                                    value: "Якщо на заключному етапі операції в око введений газ, післяопераційний період має ряд особливостей. У перші дні після операції гострота зору вкрай низька, так як газ не пропускає світло до сітківки. По мірі розсмоктування газу ( орієнтовно 10-15 днів) верхня частина поля зору починає світлішати, і пацієнт може помітити «рівень поділу середовищ», який змінює положення в залежності від руху голови. Через 7 – 10 днів після операції, коли газу залишається в оці менше третини обсягу склоподібного тіла, єдиний пухирець в оці може роздрібнитися на кілька дрібних. При індивідуальному перебігу процесу у деяких пацієнтів при розширенні газу (до 3 діб після операції) може підніматися внутрішньоочний тиск. Як правило, цей процес супроводжується болями і почервонінням ока. У таких випадках слід негайно звернутися до лікаря!",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { bold: true, value: "СИЛІКОН. " },
                                {
                                    value: "Якщо на заключному етапі операції в око введений рідкий силікон, при підборі окулярів важливо пам’ятати, що в період знаходження силікону в оці гострота зору коригується окулярами (зазвичай від +4,0 до +6,0 дптр). Видалення силікону з порожнини склоподібного тіла, як правило, проводиться не раніше ніж через 3 місяці після операції. Вам слід знати, що наявність силікону в оці може призводити до прискорення процесу помутніння кришталика ока (розвиток катаракти) і провокувати підвищення внутрішньоочного тиску, особливо в ранньому післяопераційному періоді. Виведення силікону з ока є окремою операцією і оплачується окремо.",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    value: "ДЛЯ ПАЦІЄНТІВ З ЦУКРОВИМ ДІАБЕТОМ. ",
                                },
                                {
                                    value: "На завершальному етапі операції і в післяопераційному періоді біля ока вводиться розчин протизапального препарату ( «Дексаметазон», «Дипроспан», «Кеналог»). Незважаючи на невелику дозу (не більше 0,5 мл), у ряду пацієнтів з цукровим діабетом спостерігається підвищення рівня глюкози крові протягом 1 – 2 діб після ін’єкції. Будьте уважні!",
                                },
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПРАВИЛА ЗАКАПУВАННЯ КРАПЕЛЬ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            numeric: true,
                            list: [
                                "Ретельно вимийте руки.",
                                "Відкрийте флакон.",
                                "Закиньте голову або приляжте на спину і дивіться вгору.",
                                "Розмістіть перевернутий догори флакон над оком, не торкайтеся до ока і вій.",
                                "Обережно захопивши пальцями нижню повіку, злегка відтягніть його вниз.",
                                "Заведіть очі вгору і злегка стисніть флакон, щоб крапля потрапила в простір, що утворився між очним яблуком і витягнутою нижньою повікою.",
                                "Закрийте очі.",
                                "Для посилення ефективності впливу і зведення до мінімуму системних побічних ефектів очних крапель притисніть вказівним пальцем (через стерильну серветку) внутрішній кут очної щілини.",
                                "При призначенні декількох крапель проміжок між закапуванням повинен складати близько 5 хвилин. Останніми закапуються краплі, що знижують внутрішньоочний тиск.",
                                "Закрийте флакон і зберігайте його у відповідності з приписом.",
                            ],
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Patient reminder before vitreoretinal surgery",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "After surgery, your eye will be covered with a bandage to protect it from accidental contamination. The bandage should be removed once you arrive home. You may clean your eyelids (not the eye itself) with sterile cotton moistened with a 0.02% furacilin solution or a 0.25% levomycetin solution (available at pharmacies). Starting from the first day after surgery, the operated eye should not remain constantly covered with a bandage, as this prevents free blinking and movement.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "On the day of surgery and during the rehabilitation period, you may experience pain in the operated eye or the surrounding area (eyebrow, temple). In case of pain, it is advisable to take tablets such as “Ketanov”, “Ketorol”, or “Analgin” (according to the instructions for these medications) and contact your doctor.",
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
                            text: "The recommendations provided are general and developed for most patients. In case of individual postoperative specifics, your doctor may suggest a personalized treatment plan and follow-up schedule. Please clarify the recommendations at each visit!",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                [
                                    { bold: true, value: "Regimen. " },
                                    {
                                        value: "Following surgery, adhering to the prescribed regimen may have therapeutic value. After the operation, your surgeon or attending physician will provide instructions for the first 24 hours. Later, you should confirm the specific postoperative regimen with your doctor.",
                                    },
                                ],
                                [
                                    { bold: true, value: "Hygiene. " },
                                    {
                                        value: "Avoid getting soap and water into your eye when washing your face. When washing your hair, tilt your head back, not forward. If water gets into the operated eye, rinse it with a 0.02% furacilin solution or a 0.25% levomycetin solution (available at pharmacies).",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Be sure to visit your doctor on the appointed day!",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Eye drops are necessary for faster healing and to prevent infections. ",
                                    },
                                    {
                                        value: "Typically, after surgery, your surgeon will prescribe several drops: antibiotic drops (e.g., “Floxal”, “Oftaquix”, “Tobrex”), anti-inflammatory drops (e.g., “Nevanac”, “Indocollyre”), or combined medications (“Maxitrol”, “Tobradex”, etc.).",
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
                                    value: "VISUAL ACUITY DURING THE POSTOPERATIVE PERIOD",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Vision improvement occurs gradually over the first 2–3 months after surgery. In some patients, visual acuity continues to improve for up to six months. This process may be slower in patients with myopia, diabetes, systemic diseases, retinal detachment, retinal tears, epiretinal membranes, or in elderly patients.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "During healing and rehabilitation, your eyes may differ in vision. You may need temporary glasses or contact lenses to compensate for this. Final correction with glasses is usually recommended 2–3 months after surgery, although this may vary individually, especially if the operated eye is your only seeing eye.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "As vision recovers, some patients may experience distortions of lines and objects or double vision. These symptoms usually diminish gradually over several weeks or months.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "FURTHER CARE AND RECOMMENDATIONS",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Postoperative restrictions will gradually be lifted. We offer several useful recommendations that will help preserve your vision:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Do not drive until your vision has fully recovered.",
                                "Do not rub or press on the operated eye.",
                                "Take regular breaks while reading or watching TV.",
                                "Whenever possible, wear sunglasses to protect your eyes from ultraviolet radiation.",
                                "Follow your scheduled follow-up visits with your doctor.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ADDITIONAL INFORMATION",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { bold: true, value: "GAS. " },
                                {
                                    value: "If gas was introduced into your eye during the final stage of surgery, the postoperative period will have certain specifics. During the first few days, your visual acuity will be very low, as gas prevents light from reaching the retina. As the gas is absorbed (approximately 10–15 days), the upper part of your field of vision will begin to clear, and you may notice a visible “fluid level,” which changes with head movement. Around 7–10 days after surgery, when less than one-third of the gas remains, the single bubble may split into several smaller ones. In some patients, gas expansion (up to 3 days post-surgery) may cause an increase in intraocular pressure, accompanied by pain and redness. In such cases, contact your doctor immediately!",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { bold: true, value: "SILICONE. " },
                                {
                                    value: "If liquid silicone was introduced into the eye, keep in mind that while it remains inside, your vision may require correction with glasses (usually from +4.0 to +6.0 diopters). Silicone removal is typically performed no earlier than 3 months after surgery. Please note that silicone may accelerate cataract formation and increase intraocular pressure, especially in the early postoperative period. Silicone removal is a separate procedure and is billed separately.",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    value: "FOR PATIENTS WITH DIABETES. ",
                                },
                                {
                                    value: "At the final stage of surgery or during the postoperative period, an anti-inflammatory drug solution (“Dexamethasone”, “Diprospan”, “Kenalog”) may be injected near the eye. Despite the small dose (no more than 0.5 ml), some diabetic patients may experience a temporary increase in blood glucose levels for 1–2 days after the injection. Please be cautious!",
                                },
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "RULES FOR APPLYING EYE DROPS",
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
                                "Tilt your head back or lie down and look upward.",
                                "Hold the bottle upside down above your eye without touching the eye or lashes.",
                                "Gently pull down your lower eyelid.",
                                "Look upward and squeeze the bottle slightly so that a drop falls into the space between the eye and the lower eyelid.",
                                "Close your eyes.",
                                "To increase absorption and reduce systemic side effects, press the inner corner of the eye with your index finger (through a sterile tissue).",
                                "If multiple drops are prescribed, wait about 5 minutes between applications. Pressure-lowering drops should be applied last.",
                                "Close the bottle and store it as directed.",
                            ],
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Памятки пациенту перед витреоретинальной хирургией",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "После операции ваш глаз заклеивают повязкой, чтобы защитить его от случайного загрязнения. Повязку следует снять, когда вы вернётесь домой. Веки (не сам глаз) можно обработать стерильной ватой, смоченной водным раствором фурацилина 0.02% или левомицетина 0.25% (продаются в аптеке). Начиная с первого дня после операции, не следует постоянно держать глаз под повязкой, так как это мешает свободному морганию и движению глаза.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "В день операции и в период реабилитации могут возникать болевые ощущения в оперированном глазу или в области вокруг глаз (надбровье, висок). При болевом синдроме рекомендуется принимать таблетки «Кетанов», «Кеторол» или «Анальгин» (согласно инструкции) и обратиться к своему врачу.",
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
                            text: "Предложенные рекомендации являются общими и разработаны для большинства пациентов. В случае индивидуального течения послеоперационного периода врач может предложить персональную схему лечения и график осмотров. Уточняйте, пожалуйста, рекомендации при каждом посещении врача!",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                [
                                    { bold: true, value: "Режим. " },
                                    {
                                        value: "После проведённой операции соблюдение режима имеет лечебное значение. После операции хирург или ваш лечащий врач дадут рекомендации, как вести себя в первые сутки. В дальнейшем уточняйте особенности послеоперационного режима у своего врача.",
                                    },
                                ],
                                [
                                    { bold: true, value: "Гигиена. " },
                                    {
                                        value: "Во время умывания избегайте попадания мыла и воды в глаз. При мытье головы наклоняйте голову назад, а не вперёд. Если вода попала в глаз, промойте его водным раствором фурацилина 0.02% или левомицетина 0.25% (продаются в аптеке).",
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
                                        value: "Глазные капли необходимы для ускорения заживления и профилактики инфекционных осложнений. ",
                                    },
                                    {
                                        value: "Как правило, после операции назначаются капли с антибиотиком («Флоксал», «Офтавикс», «Тобрекс»), противовоспалительные капли («Неванак», «Индоколлир») или комбинированные препараты («Макситрол», «Тобрадекс» и др.).",
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
                            text: "Улучшение зрения происходит постепенно в течение первых 2–3 месяцев после операции. У некоторых пациентов повышение остроты зрения продолжается до полугода. Как правило, этот процесс медленнее у пациентов с близорукостью, сахарным диабетом, общими заболеваниями, отслоением сетчатки, разрывами сетчатки, мембраной на сетчатке и у пожилых людей.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "В период заживления глаза могут различаться по зрению. Для временной коррекции могут потребоваться очки или контактные линзы. Окончательную коррекцию очками обычно проводят через 2–3 месяца, но сроки подбираются индивидуально, особенно если оперирован единственный глаз.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "В процессе восстановления зрения возможны искажения линий и предметов, двоение. Эти симптомы обычно ослабевают в течение нескольких недель или месяцев.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ДАЛЬНЕЙШИЙ УХОД И РЕКОМЕНДАЦИИ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Постепенно ограничения после операции будут сняты. Мы предлагаем несколько полезных рекомендаций, которые помогут сохранить зрение:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Не садитесь за руль, пока зрение полностью не восстановится.",
                                "Не трите и не нажимайте на оперированный глаз.",
                                "При чтении или просмотре телевизора делайте перерывы.",
                                "По возможности носите солнцезащитные очки для защиты глаз от ультрафиолета.",
                                "Соблюдайте график посещения врача.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { bold: true, value: "ГАЗ. " },
                                {
                                    value: "Если во время операции в глаз был введён газ, послеоперационный период имеет особенности. В первые дни острота зрения будет очень низкой, так как газ не пропускает свет к сетчатке. По мере рассасывания газа (примерно 10–15 дней) верхняя часть поля зрения начнёт светлеть, и пациент может заметить «уровень раздела сред», который меняет положение в зависимости от движения головы. Через 7–10 дней, когда газа останется меньше трети, пузырь может раздробиться на несколько мелких. У некоторых пациентов при расширении газа (в течение 3 суток после операции) может повышаться внутриглазное давление, сопровождающееся болью и покраснением глаза. В таких случаях необходимо немедленно обратиться к врачу!",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { bold: true, value: "СИЛИКОН. " },
                                {
                                    value: "Если в глаз введён жидкий силикон, при подборе очков учитывайте, что во время его нахождения в глазу острота зрения корректируется очками (обычно от +4,0 до +6,0 дптр). Удаление силикона проводится, как правило, не ранее чем через 3 месяца. Наличие силикона может ускорять развитие катаракты и повышать внутриглазное давление, особенно в ранний послеоперационный период. Удаление силикона — отдельная операция, оплачивается отдельно.",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    value: "ДЛЯ ПАЦИЕНТОВ С САХАРНЫМ ДИАБЕТОМ. ",
                                },
                                {
                                    value: "На заключительном этапе операции или после неё под глаз вводится раствор противовоспалительного препарата («Дексаметазон», «Дипроспан», «Кеналог»). Несмотря на малую дозу (до 0,5 мл), у некоторых пациентов с диабетом наблюдается повышение уровня глюкозы в крови в течение 1–2 суток после инъекции. Будьте внимательны!",
                                },
                            ],
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
                                "Запрокиньте голову или лягте и смотрите вверх.",
                                "Держите флакон перевёрнутым над глазом, не касаясь глаза и ресниц.",
                                "Осторожно оттяните нижнее веко.",
                                "Посмотрите вверх и слегка сожмите флакон, чтобы капля попала между глазным яблоком и нижним веком.",
                                "Закройте глаза.",
                                "Для усиления эффекта и уменьшения системных побочных действий прижмите внутренний угол глаза указательным пальцем (через стерильную салфетку).",
                                "Если назначено несколько капель, делайте перерыв около 5 минут. Последними закапываются капли, снижающие внутриглазное давление.",
                                "Закройте флакон и храните согласно инструкции.",
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keySlugPatientsInstruction.find(
            k => k.key === "pamyatka-patsiyenta-pislya-khirurhiyi-katarakty"
        )!,
        lt: {
            title: "Пам’ятка пацієнта після хірургії катаракти",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПЕРЕД ОПЕРАЦІЄЮ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Записатися на передопераційний прийом до офтальмохірурга і анестезіолога потрібно заздалегідь (краще за тиждень). На огляді у лікаря бажано мати виписки після попередніх обстежень та попередніх хірургічних втручань.",
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "В ДЕНЬ ОПЕРАЦІЇ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "З’їжте легкий сніданок, виключаючи продукти з різким ароматом (цибуля, часник).",
                                "Обов’язково прийміть всі препарати, які Ви приймаєте регулярно. Режим прийому лікарських препаратів в день операції і в післяопераційний період залишається незмінним.",
                                "Після операції ваше око заклеюють пов’язкою для того, щоб захистити його від випадкового забруднення. Пов’язку слід зняти як прибудете додому.",
                                "Обробити повіки можна (не саме око) стерильною ватою, змоченою водним розчином фурациліну 0.02% або водним розчином левоміцетину 0.25% (продаються в аптеці).",
                                "Починаючи з першого дня після операції постійно заклеювати опероване око пов’язкою не потрібно.",
                            ],
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПЕРІОД РЕАБІЛІТАЦІЇ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Запропоновані рекомендації є загальними, тобто розроблені для більшості пацієнтів. У випадках індивідуального перебігу післяопераційного періоду лікар може запропонувати індивідуальну схему лікування і графік оглядів пацієнта. Уточнюйте, будь ласка, рекомендації при кожному відвідуванні лікаря!",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                [
                                    { bold: true, value: "Режим. " },
                                    {
                                        value: "Після проведеної операції дотримання режиму може мати певне лікувальне значення. Після операції, хірург або ваш лікуючий лікар дадуть рекомендації, як поводитися в першу добу після операції. Надалі вам слід уточнити особливості післяопераційного режиму у вашого лікуючого лікаря.",
                                    },
                                ],
                                [
                                    { bold: true, value: "Гігієна. " },
                                    {
                                        value: "Під час вмивання уникайте попадання мила і води в око. При митті голови нахиляйте голову назад, а не вперед. Якщо вода потрапила в опероване око, промийте його водним розчином фурациліну 0.02% або водним розчином левоміцетину 0.25% (продаються в аптеці).",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Обов’язково відвідуйте лікаря в призначений день!",
                                    },
                                ],

                                "Очні краплі потрібні для швидкого загоєння і профілактики інфекційних ускладнень. Як правило, після проведеної операції хірург призначає закапування кількох препаратів: краплі з антибіотиком, протизапальні краплі, або комбіновані препарати.",
                            ],
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ГОСТРОТА ЗОРУ В ПІСЛЯОПЕРАЦІЙНОМУ ПЕРІОДІ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Відновлення зору відбуватиметься поступово. В перші дні після операції зір може бути низьким за рахунок невеликого набряку рогівки, широкої зіниці (зазвичай проходить через тиждень). Остаточно зір прооперованого ока відновлюється через 1 місяць після операції, тому підбір окулярів (при монофокальній ІОЛ) доцільний по закінченню цього терміну. Ви можете підібрати собі окуляри за місцем проживання або в нашому медичному центрі.",
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПРАВИЛА ЗАКАПУВАННЯ КРАПЕЛЬ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            numeric: true,
                            list: [
                                "Ретельно вимийте руки.",
                                "Відкрийте флакон.",
                                "Закиньте голову або приляжте на спину і дивіться вгору.",
                                "Розмістіть перевернутий догори флакон над оком, не торкайтеся до ока і вій.",
                                "Обережно захопивши пальцями нижню повіку, злегка відтягніть його вниз.",
                                "Підніміть очі вгору і злегка стисніть флакон, щоб крапля потрапила в простір, що утворився між очним яблуком і витягнутою нижньою повікою.",
                                "Закрийте очі.",
                                "Для посилення ефективності впливу і зведення до мінімуму системних побічних ефектів очних крапель притисніть вказівним пальцем (через стерильну серветку) внутрішній кут очної щілини.",
                                "При призначенні декількох крапель проміжок між закапуванням повинен складати близько 5 хвилин.",
                                "Закрийте флакон і зберігайте його у відповідності з приписом.",
                            ],
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Patient note after cataract surgery",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "BEFORE THE SURGERY",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "You should schedule a preoperative appointment with an ophthalmic surgeon and an anesthesiologist in advance (preferably a week before). It is advisable to bring medical reports from previous examinations or surgeries to the consultation.",
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ON THE DAY OF SURGERY",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Have a light breakfast, avoiding foods with strong odors (such as onions or garlic).",
                                "Be sure to take all medications you take regularly. The medication regimen remains unchanged on the day of surgery and during the postoperative period.",
                                "After the surgery, your eye will be covered with a protective patch to prevent accidental contamination. You may remove the patch once you arrive home.",
                                "You may clean your eyelids (but not the eye itself) with sterile cotton soaked in a 0.02% aqueous solution of furacilin or a 0.25% aqueous solution of chloramphenicol (available at pharmacies).",
                                "Starting from the first day after surgery, there is no need to keep the eye covered with a patch continuously.",
                            ],
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "REHABILITATION PERIOD",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "The following recommendations are general and designed for most patients. In specific cases, your doctor may suggest an individualized treatment plan and follow-up schedule. Please clarify the recommendations during each appointment.",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                [
                                    { bold: true, value: "Regimen. " },
                                    {
                                        value: "Following the recommended regimen after surgery can have a therapeutic effect. Your surgeon or attending physician will advise you on what to do on the first day after surgery. Later, clarify any postoperative restrictions with your doctor.",
                                    },
                                ],
                                [
                                    { bold: true, value: "Hygiene. " },
                                    {
                                        value: "When washing your face, avoid getting soap or water into your eye. When washing your hair, tilt your head backward, not forward. If water gets into the operated eye, rinse it with a 0.02% furacilin solution or a 0.25% chloramphenicol solution (available at pharmacies).",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Be sure to visit your doctor on the scheduled day!",
                                    },
                                ],
                                "Eye drops are needed for faster healing and to prevent infections. Typically, the surgeon will prescribe several types of drops — antibiotic drops, anti-inflammatory drops, or combination preparations.",
                            ],
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "VISUAL ACUITY IN THE POSTOPERATIVE PERIOD",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Vision recovery occurs gradually. In the first few days after surgery, vision may be blurry due to mild corneal swelling or pupil dilation (which usually resolves within a week). The operated eye’s vision is usually fully restored within one month, so selecting glasses (for monofocal IOL) is recommended after this period. You may have your glasses prescribed locally or at our medical center.",
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "RULES FOR USING EYE DROPS",
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
                                "Tilt your head back or lie down and look upward.",
                                "Hold the bottle upside down above the eye, without touching the eye or eyelashes.",
                                "Gently pull down your lower eyelid with your fingers.",
                                "Look upward and squeeze the bottle slightly to release one drop into the space between the eyeball and the lower eyelid.",
                                "Close your eyes.",
                                "To enhance absorption and minimize systemic side effects, gently press the inner corner of your eye (through a sterile tissue) with your finger.",
                                "If you are using multiple drops, wait about 5 minutes between each application.",
                                "Close the bottle and store it as directed.",
                            ],
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Памятки пациента после хирургии катаракты",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПЕРЕД ОПЕРАЦИЕЙ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Записаться на предоперационный приём к офтальмохирургу и анестезиологу необходимо заранее (желательно за неделю). На осмотр желательно принести выписки из предыдущих обследований и операций.",
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "В ДЕНЬ ОПЕРАЦИИ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Съешьте лёгкий завтрак, исключая продукты с резким запахом (лук, чеснок).",
                                "Обязательно примите все препараты, которые вы принимаете регулярно. Режим приёма лекарств в день операции и в послеоперационный период остаётся без изменений.",
                                "После операции глаз заклеивают повязкой, чтобы защитить его от случайного загрязнения. Повязку можно снять, когда приедете домой.",
                                "Веки можно обработать (но не сам глаз) стерильной ватой, смоченной водным раствором фурацилина 0.02% или левомицетина 0.25% (продаются в аптеке).",
                                "Начиная с первого дня после операции, постоянно держать глаз заклеенным не нужно.",
                            ],
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПЕРИОД РЕАБИЛИТАЦИИ",
                                },
                            ],
                            gap: true,
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
                                        value: "Обязательно посетите врача в назначенный день!",
                                    },
                                ],
                                "Глазные капли необходимы для быстрого заживления и профилактики инфекционных осложнений. Обычно хирург назначает несколько препаратов: капли с антибиотиком, противовоспалительные или комбинированные средства.",
                            ],
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ОСТРОТА ЗРЕНИЯ В ПОСЛЕОПЕРАЦИОННЫЙ ПЕРИОД",
                                },
                            ],
                            gap: true,
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
            k => k.key === "reminders-and-instructions-for-patients"
        )!,
        lt: {
            title: "Пам’ятки та інструкції для пацієнтів",
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
                "Глаукома - симптоми, причини та лікування | Британський офтальмологічний центр | EYES",
            descriptionSEO:
                "➔ Глаукома: основні фактори виникнення та сучасні підходи до ефективного лікування ✅ Інформація від провідних офтальмологів Києва ✅ Сучасна діагностика та ефективне лікування 👍 Перевірений досвід і бездоганна репутація ☎️ 0 800 507 077",
            title: "Glaukoma",
            content: [
                {
                    title: "Kas yra glaukoma?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Glaukoma yra bendrinis pavadinimas, apibūdinantis gausybę sutrikimų, kurie pažeidžia regos nervą ir lemia apakimą. Paprastai susirgus šia liga, neišvengiamai gresia prarasti regėjimą, tačiau nustačius  anksti, glaukomą galima gydyti. Deja, net 10 % tinkamai gydytų žmonių vis tiek apanka. Dažnai glaukomos nelydi jokie akivaizdūs požymiai ar simptomai ir ji nustatoma tik tuomet, kai ima silpnėti rega. Geriausias apsisaugojimo būdas – reguliariai tikrintis akis dėl glaukomos.",
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
                            text: "Glaukoma yra antra pagal paplitimą regos netekimo priežastis pasaulyje. Kadangi šios ligos požymių ir simptomų paprastai būna labai nedaug, ji vadinama „tyliu regos vagimi“. Rekomenduojama reguliariai tikrintis akis, ypač jei nustatomas vienas ar daugiau glaukomos rizikos faktorių.",
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
                                "rasė: penkis kartus dažnesnė tarp afroamerikiečių nei baltaodžių ir dažnai išsivysto anksčiau;",
                                "amžius: glaukomos išsivystymo tikimybė yra šešis kartus didesnė žmonėms, vyresniems nei 60 metų amžiaus;",
                                "šeimos istorija: jei kiti šeimos nariai serga glaukoma, jos rizika asmeniui išauga 4–9 kartus;",
                                "vaistai: steroidų vartojimas padidina atvirojo kampo glaukomos riziką iki 40 %;",
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
                                "amžius: senstant uždarojo kampo glaukomos rizika didėja;",
                                "rasė: azijiečiai ir eskimų palikuonys patenka į didesnės rizikos grupę;",
                                "lytis: tarp baltaodžių moterys glaukoma serga dažniau.",
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
                            text: "Antrinė glaukoma – tai glaukoma, kurią lemia kitas sutrikimas. Antrinė glaukoma gali būti tiek atvirojo, tiek uždarojo kampo. Dažnos antrinės glaukomos priežastys yra:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "akies trauma: tiek buku, tiek aštriu daiktu padaryta akies trauma gali būti antrinės glaukomos priežastis;",
                                "ligos: cukrinis diabetas ir katarakta didina tam tikrų antrinių glaukomos formų riziką;",
                                "rasė: skandinavų palikuonys dažniau serga vieno tipo antrine glaukoma, baltaodžiai – kito tipo;",
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
                            text: "Glaukomos rizikos faktorių yra daug, tačiau net jei Jums netaikomas nė vienas iš anksčiau minėtų veiksnių, vis tiek galite susirgti glaukoma. Rekomenduojama reguliariai tikrinantis akis įtraukti ir patikrinimą dėl glaukomos, ypač senstant. Susisiekite su savo apylinkės oftalmologu, kuris atlieka glaukomos tyrimus, ir apsisaugokite nuo neišgydomo apakimo.",
                        },
                    ],
                },
                {
                    title: "Glaukomos diagnozavimas",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Ankstyvas glaukomos aptikimas per reguliarius akių patikrinimus vaidina esminį vaidmenį ją gydant ir užkertant kelią regos netekimui. Per įprastinius akių patikrinimus turėtumėte pasitikrinti ir dėl glaukomos:",
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
                            text: "Jei patenkate į didelės rizikos grupę, turėtumėte pradėti tikrintis akis dėl glaukomos nuo 35 metų ir daryti tai kas 1–2 metus.",
                        },
                    ],
                },
                {
                    title: "Glaukomos tipai",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Glaukomos tipų yra daug ir įvairių. Dauguma jų siejami su padidėjusiu akispūdžiu, kada skysčio spaudimas akyje padidėja, todėl spaudžiamas ir pažeidžiamas regos nervas. Akispūdis didėja, kai akyje susikaupęs skystis negali pasišalinti per įprastinį kanalą, vadinamą atviruoju kampu, tarp rainelės ir ragenos. Skystis kaupiasi akyje, todėl akispūdis didėja. Šiuo metu žinomos glaukomos formos yra:",
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
                                        value: ", kitaip dar vadinama ūmine. Ji išsivysto, kai rainelė prisispaudžia prie kampo, užkimšdama ištekėjimo kanalus. Ši glaukoma gali sukelti staigų ir pavojingą akispūdžio padidėjimą.",
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
                                        value: "– tai glaukoma, kuri išsivysto be akispūdžio padidėjimo.",
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
                            text: "Glaukomos gydymas gali užkirsti kelią regos netekimui, jei sutrikimas aptinkamas anksti. Glaukomos gydymo būdai yra:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "akių lašiukai;",
                                "chirurginė operacija;",
                                "selektyvusis lazerinis gydymas.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Glaukoma neišgydoma. Ją galima tik kontroliuoti ir stebėti visą gyvenimą. Jei Jums buvo paskirti vaistai nuo šios ligos, privalote juos vartoti, kaip nurodė gydytojas. Glaukomos požymių YRA. Ligą galima diagnozuoti dar prieš pastebint simptomus. Juos pacientai vertina subjektyviai ir gydytojui jie ne visada gali būti aiškūs. Arba požymiai yra objektyvūs ir aiškūs gydytojui, tačiau pacientas gali jų nepastebėti.",
                        },
                    ],
                },
            ],
        },
        en: {
            titleSEO:
                "Glaucoma – Symptoms, Causes, and Treatment | British Ophthalmology Center | EYES",
            descriptionSEO:
                "➔ Glaucoma: main causes and modern approaches to effective treatment ✅ Information from leading ophthalmologists in Kyiv ✅ Modern diagnostics and effective treatment 👍 Proven experience and impeccable reputation ☎️ 0 800 507 077",
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
                "Глаукома - симптомы, причины и лечение | Британский офтальмологический центр | EYES",
            descriptionSEO:
                "➔ Глаукома: основные факторы возникновения и современные подходы к эффективному лечению ✅ Информация от ведущих офтальмологов Киева ✅ Современная диагностика и эффективное лечение 👍 Проверенный опыт и безупречная репутация ☎️ 0 800 507 077",
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
                "Астигматизм - симптоми, причини та лікування | Британський офтальмологічний центр | EYES",
            descriptionSEO:
                "➔ Астигматизм: основні фактори виникнення та сучасні підходи до ефективного лікування ✅ Інформація від провідних офтальмологів Києва ✅ Сучасна діагностика та ефективне лікування 👍 Перевірений досвід і бездоганна репутація ☎️ 0 800 507 077",
            title: "Astigmatizmas",
            content: [
                {
                    title: "Astigmatizmas – kas tai?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Astigmatizmas – refrakcijos yda, nulemianti iškraipytą ar miglotą matymą įvairiais atstumais. Tai lemia pakitusi ragenos forma, kuri tampa panaši į regbio kamuolį, o ragenos paviršius darosi asimetriškas. Dėl tokio gaubtumo susidaro laužiamosios šviesos spindulių gebos skirtumas, todėl žmogaus regėjimas, nepriklausomai nuo atstumo, yra neryškus. Pavyzdžiui, vienu kampu daikto kontūrai gali atrodyti ryškesni, negu žiūrint kitu kampu.",
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
                    title: "Lazerinė regos korekcija",
                    text: [
                        {
                            type: "text",
                            text: "Nors akiniai ir kontaktiniai lęšiai padeda koreguoti tam tikrus regėjimo sutrikimus, tačiau jie labiau panašūs į tvarsčius ir ramentus, kurie tėra laikina pagalba, nepašalinanti problemos priežasties taip, kaip tą padarytų operacija.",
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
                            text: "Intraokulinė korekcija atliekama koreguojant didelio laipsnio astigmatizmą. Jeigu buvo nustatyta, kad Jums negalima atlikti lazerinės regėjimo korekcijos, nenuleiskite rankų, nes yra kitų būdų susigrąžinti gerą regėjimą. Akių klinika „Naujas regėjimas” siūlo operacijas, galinčias Jums padėti. Konsultacijos metu mes nustatysime, ar galime Jus operuoti ir kokia operacija Jums tinkamiausia.",
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
                "Astigmatism – Symptoms, Causes, and Treatment | British Ophthalmology Center | EYES",
            descriptionSEO:
                "➔ Astigmatism: main causes and modern approaches to effective treatment ✅ Information from leading ophthalmologists in Kyiv ✅ Modern diagnostics and effective treatment 👍 Proven experience and impeccable reputation ☎️ 0 800 507 077",
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
                "Астигматизм - симптомы, причины и лечение | Британский офтальмологический центр | EYES",
            descriptionSEO:
                "➔ Астигматизм: основные факторы возникновения и современные подходы к эффективному лечению ✅ Информация от ведущих офтальмологов Киева ✅ Современная диагностика и эффективное лечение 👍 Проверенный опыт и безупречная репутация ☎️ 0 800 507 077",
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
                "Далекозорість - симптоми, причини та лікування | Британський офтальмологічний центр | EYES",
            descriptionSEO:
                "➔ Далекозорість: основні фактори виникнення та сучасні підходи до ефективного лікування ✅ Інформація від провідних офтальмологів Києва ✅ Сучасна діагностика та ефективне лікування 👍 Перевірений досвід і бездоганна репутація ☎️ 0 800 507 077",
            title: "Toliaregystė",
            content: [
                {
                    title: "Toliaregystės simptomai ir priežastys",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Toliaregystė arba hipermetropija – tai akomodacijos sutrikimas, kurio metu sumažėja galimybė ryškiai matyti daiktus, esančius arti. Dažniausiai toliaregystė pasitaiko vyresnio amžiaus žmonėms.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Jei esate toliaregis, arti esantys vaizdai atrodo labiau migloti nei tolimi. Pavyzdžiui, jei sėdėtumėte restorano vasaros terasoje, meniu atrodytų neryškus, o aplinkinis kraštovaizdis būtų matomas sufokusuotas. Tačiau klaidinga nuomonė, kad toliaregiai visada gerai mato į tolį. Sunkūs toliaregystės atvejai gali paveikti ir toli esančių objektų matymą.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Toliaregystė susiformuoja, kai ragena yra per daug plokščia arba akis yra per trumpa. Šios sąlygos neleidžia šviesos spinduliams, kurie patenka į Jūsų akis, reikiamai užlūžti ir fokusuotis tinklainėje. Vietoje to matomi vaizdai fokusuojami už tinklainės.",
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/farsightedness.jpg",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Jei esate toliaregis (-ė), matomi vaizdai fokusuojami už tinklainės, o ne tinklainėje.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Maždaug 11,8 milijonų Jungtinių Valstijų gyventojų (arba maždaug 10 procentų populiacijos) turi tam tikro laipsnio toliaregystę. Toliaregystė išsivysto žymiai rečiau nei trumparegystė, o jos paplitimas dažnėja su pacientų amžiumi.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Kai akių gydytojas ištiria Jūsų akis, jis išrašo receptą, kuriame nurodomas refrakcijos ydos laipsnis. Toliaregystės receptuose paprastai prieš pirmąjį skaičių būna pliuso ženklas.",
                        },
                    ],
                },
                {
                    title: "Toliaregystės gydymo būdai",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Toliaregystės korekcija priklauso nuo keleto faktorių, pvz., amžiaus, veiklos ir profesijos, bet paprastai ji koreguojama kontaktiniais lęšiais arba akiniais, pakeičiančiais šviesos spindulių kryptį akyje. Pacientams akinius ar kontaktinius lęšius tenka nešioti visą laiką arba tik skaitymui, darbui kompiuteriu ar dirbant kitus darbus, reikalaujančius gero regėjimo iš arti. Peržiūrėkite skiltį „Akių patikrinimas“, norėdami gauti daugiau informacijos apie tai, kaip gauti korekcinių akinių ar lęšių receptą, o skiltį „Pratimai akims“ – norėdami gauti informacijos, kaip išvengti regėjimo problemų, atliekant akių stiprinimo pratimus.",
                        },
                        {
                            type: "component",
                            gap: true,
                            component: <FarsightednessTable />,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Jei norite ir esate pasirengę atsisakyti korekcinių akinių ar kontaktinių lęšių visam laikui, peržiūrėkite šias regos korekcijos galimybes:",
                        },
                    ],
                },
                {
                    title: "Lazerinė regos korekcija",
                    text: [
                        {
                            type: "text",
                            text: "Nors akiniai ir kontaktiniai lęšiai padeda koreguoti tam tikrus regėjimo sutrikimus, tačiau jie labiau panašūs į tvarsčius ir ramentus, kurie tėra laikina pagalba, nepašalinanti problemos priežasties taip, kaip tą padarytų operacija.",
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
                            text: "Intraokulinė korekcija atliekama koreguojant didelio laipsnio hiperopiją. Jeigu buvo nustatyta, kad Jums negalima atlikti lazerinės regėjimo korekcijos, nenuleiskite rankų, nes yra kitų būdų susigrąžinti gerą regėjimą. Akių klinika „Naujas regėjimas” siūlo operacijas, galinčias Jums padėti. Konsultacijos metu mes nustatysime, ar Jus galima operuoti ir kokia operacija Jums tinkamiausia.",
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
                "Farsightedness – Symptoms, Causes, and Treatment | British Ophthalmology Center | EYES",
            descriptionSEO:
                "➔ Farsightedness: main causes and modern approaches to effective treatment ✅ Information from leading ophthalmologists in Kyiv ✅ Modern diagnostics and effective treatment 👍 Proven experience and impeccable reputation ☎️ 0 800 507 077",
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
                "Дальнозоркость - симптомы, причины и лечение | Британский офтальмологический центр | EYES",
            descriptionSEO:
                "➔ Дальнозоркость: основные факторы возникновения и современные подходы к эффективному лечению ✅ Информация от ведущих офтальмологов Киева ✅ Современная диагностика и эффективное лечение 👍 Проверенный опыт и безупречная репутация ☎️ 0 800 507 077",
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
                "Катаракта - симптоми, причини та лікування | Британський офтальмологічний центр | EYES",
            descriptionSEO:
                "➔ Катаракта: основні фактори виникнення та сучасні підходи до ефективного лікування ✅ Інформація від провідних офтальмологів Києва ✅ Сучасна діагностика та ефективне лікування 👍 Перевірений досвід і бездоганна репутація ☎️ 0 800 507 077",
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
                                    value: " – tai akies lęšiuko drumstis, dėl kurios žmogaus regėjimas tampa neryškus. Dar vienas kataraktos simptomas – blogas matymas, esant ryškiai šviesai. Jeigu liga negydoma, regėjimas vis blogėja, tampa miglotas ir neryškus, spalvos atrodo pritemdytos (su geltonu arba rudu atspalviu). Skaityti ar vairuoti mažai apšviestoje aplinkoje tampa sudėtinga, nes suprastėja regėjimas naktį, o aplink žibintus kartais matomi ratilai. Kartais pacientai jaučia akių skausmą būdami ryškioje saulės šviesoje ar matydami stiprų akinantį atspindį nuo paviršių, pvz., priekinių automobilių stiklų.  Šia liga dažniausiai serga 60–70 metų žmonės, nors pasitaiko atvejų, kai liga pasireiškia ir žymiai jaunesniame amžiuje.",
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
                            text: "Nepaisant to, kad katarakta dažniausiai išsivysto dėl su amžiumi susijusių akių pokyčių, liga vis dažniau nustatoma sulaukus 40–50 metų ar dar jaunesniems pacientams. Vyresnių nei 80 metų pacientų kataraktos aptikimo rodiklis yra beveik 100 %.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Daugumai senatvine (su amžiumi susijusia) katarakta sergančių žmonių liga daugelį metų vystosi labai lėtai ir neskausmingai, dažnai pradinė diagnozė nustatoma įprastos oftalmologo apžiūros metu.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    value: "Tačiau gera žinia ta, kad katarakta gali būti sėkmingai gydoma. Mūsų klinikoje „Naujas regėjimas“ taikomas revoliucinis metodas „iQ-5 minutes“ – kataraktos šalinimas „vandeniu“.",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Kataraktos operacija atliekama be narkozės ir skausmo (su vietine anestezija, įlašinus specialių anestetinių lašų). Operacijos metu kataraktos paveiktas lęšis pašalinamas, o jo vietoje implantuojamas dirbtinis intraokulinis lęšis (IOL). Iš karto po operacijos Jūsų regėjimas sugrįžta ir Jūs viską matote puikiai.",
                        },
                    ],
                },
            ],
        },
        en: {
            titleSEO:
                "Cataract – Symptoms, Causes, and Treatment | British Ophthalmology Center | EYES",
            descriptionSEO:
                "➔ Cataract: main causes and modern approaches to effective treatment ✅ Information from leading ophthalmologists in Kyiv ✅ Modern diagnostics and effective treatment 👍 Proven experience and impeccable reputation ☎️ 0 800 507 077",
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
                "Катаракта - симптомы, причины и лечение | Британский офтальмологический центр | EYES",
            descriptionSEO:
                "➔ Катаракта: основные факторы возникновения и современные подходы к эффективному лечению ✅ Информация от ведущих офтальмологов Киева ✅ Современная диагностика и эффективное лечение 👍 Проверенный опыт и безупречная репутация ☎️ 0 800 507 077",
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
                "Короткозорість, міопія - симптоми, причини та лікування | Британський офтальмологічний центр | EYES",
            descriptionSEO:
                "➔ Короткозорість, міопія: основні фактори виникнення та сучасні підходи до ефективного лікування ✅ Інформація від провідних офтальмологів Києва ✅ Сучасна діагностика та ефективне лікування 👍 Перевірений досвід і бездоганна репутація ☎️ 0 800 507 077",
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
                            text: "Jei esate trumparegis, toli esantys vaizdai atrodo migloti. Prisimerkus šie vaizdai tampa ryškesni. Pavyzdžiui, trumparegiai studentai gali skaityti knygas ir matyti arti esančius studentus, bet dėstytojas ir lenta atrodo miglotai. Trumparegystė (dar vadinama miopija) susiformuoja, kai į akį patenkantys spinduliai laužiami per daug, todėl sufokusuojami taške priešais tinklainę. Akys su trumparegyste taip pat gali būti ilgesnės nei įprasta arba jų ragena gali būti per daug išlinkusi, dėl to matomi vaizdai nefokusuojami tinklainėje.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Kai esate trumparegis, matomi vaizdai fokusuojami ne akies galinėje dalyje, o  priešais tinklainę. Trumparegystė paprastai susiformuoja vaikystėje ir pirmą kartą nustatoma, kai tėvai sužino, jog vaikas mokykloje negali perskaityti ant lentos rašomo teksto. Trumparegystė pablogėja paauglystės laikotarpiu ir stabilizuojasi ankstyvajame pilnametystės etape. Kai kurie ekspertai mano, kad trumparegystė yra paveldima. Ji gali susiformuoti kartu su arba be astigmatizmo. Tipinis trumparegystės nurodymas akinių recepte yra minusas prieš pirmąjį skaičių.",
                        },
                    ],
                },
                {
                    title: "Trumparegystės gydymo būdai",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Trumparegystės korekcija priklauso nuo įvairių faktorių, pvz., amžiaus, veiklos ir profesijos, bet paprastai ji koreguojama kontaktiniais lęšiais arba akiniais. Jie pagerina regėjimą nekeisdami akies anatomijos, tad juos nuėmus, blogas regėjimas vėl iškart sugrįžta. Peržiūrėkite skiltį „Akių patikrinimas“, norėdami gauti daugiau informacijos apie tai, kaip gauti korekcinių akinių ar kontaktinių lęšių receptą, o skiltį „Pratimai akims“ – norėdami gauti informacijos, kaip išvengti regėjimo problemų, atliekant akių stiprinimo pratimus. Jei esate pasirengę atsisakyti korekcinių akinių ar kontaktinių lęšių, peržiūrėkite šias regos korekcijos galimybes:",
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
                            text: "Nors akiniai ir kontaktiniai lęšiai padeda koreguoti tam tikrus regėjimo sutrikimus, tačiau jie labiau panašūs į tvarsčius ir ramentus, kurie tėra laikina pagalba, nepašalinanti problemos priežasties taip, kaip tą padarytų operacija. Susipažinkite su dažniausiai taikomais lazerinės regos korekcijos metodais:",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "LASIK regėjimo korekcija",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "LASIK (lazeriu atliekama vidinė keratomaliacija) yra dažniausiai atliekama akių operacijos lazeriu forma nuo 1991 metų, kai buvo atlikti JAV klinikiniai tyrimai. Operacijos metu pakeičiama ragenos forma ir panaikinama arba sumažinama būtinybė nešioti akinius ar kontaktinius lęšius. Tai yra chirurginė procedūra, turinti tam tikrų rizikų.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Regėjimo korekcija lazeriu – „iQ-LASIK“",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "LASIK gali padėti sumažinti būtinybę nešioti akinius arba kontaktinius lęšius, o metodas „iQ-LASIK“ sujungia pažangiausias šiuolaikines chirurgijos technologijas į vieną procedūrą. Rezultatas – funkcionalesnė ir efektyvesnė lazerinės regos korekcijos operacija. Praeityje kiekvienam pacientui buvo atliekama ta pati pagrindinė LASIK procedūra, neatsižvelgiant į unikalias paciento akies savybes. Metodas „iQ-LASIK“ yra kitoks. Tik „iQ-LASIK“ įgalina chirurgus sukurti gydymo planą su individualiomis parinktimis, atsižvelgus į Jūsų regėjimo poreikius, kad būtų užtikrinti geriausi regėjimo rezultatai. Jūsų akys nusipelno ypatingo gydymo. Atvykite individualiai konsultacijai pas mūsų profesionalius gydytojus oftalmologus, kad galėtume nustatyti, koks gydymas būtų tinkamiausias būtent Jums.",
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
                            text: "Intraokulinė korekcija atliekama koreguojant didelio laipsnio toliaregystę. Jeigu buvo nustatyta, kad Jums negalima atlikti lazerinės regėjimo korekcijos, nenuleiskite rankų, nes yra kitų būdų susigrąžinti gerą regėjimą. Akių klinika „Naujas regėjimas” siūlo operacijas, galinčias Jums padėti. Konsultacijos metu nustatysime, ar Jus galima operuoti ir kokia operacija Jums tinkamiausia.",
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
                "Myopia – Symptoms, Causes, and Treatment | British Ophthalmology Center | EYES",
            descriptionSEO:
                "➔ Myopia: main causes and modern approaches to effective treatment ✅ Information from leading ophthalmologists in Kyiv ✅ Modern diagnostics and effective treatment 👍 Proven experience and impeccable reputation ☎️ 0 800 507 077",
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
                "Близорукость, миопия - симптомы, причины и лечение | Британский офтальмологический центр | EYES",
            descriptionSEO:
                "➔ Близорукость, миопия: основные факторы возникновения и современные подходы к эффективному лечению ✅ Информация от ведущих офтальмологов Киева ✅ Современная диагностика и эффективное лечение 👍 Проверенный опыт и безупречная репутация ☎️ 0 800 507 077",
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
                            text: "Интраокулярные линзы предназначены для коррекции высокой степени астигматизма. Если лазерная коррекция вам не подходит — не отчаивайтесь, есть и другие способы достичь желаемого результата. «Британский офтальмологический центр» предлагает ряд операций, которые могут помочь вам. Во время консультации врач определит, нет ли противопоказаний, и подберёт лучший вариант операции.",
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
                "Косоокість - симптоми, причини та лікування | Британський офтальмологічний центр | EYES",
            descriptionSEO:
                "➔ Косоокість: основні фактори виникнення та сучасні підходи до ефективного лікування ✅ Інформація від провідних офтальмологів Києва ✅ Сучасна діагностика та ефективне лікування 👍 Перевірений досвід і бездоганна репутація ☎️ 0 800 507 077",
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
                                    value: " – tai nuolatinis ar periodinis vienos akies nukrypimas nuo bendro fiksacijos taško, kai yra sutrikęs abiejų akių fiksacijos į vieną tašką mechanizmas. Viena akis gali žvelgti tiesiai, o kita būti nukrypusi į išorę, į vidų, žemyn arba į viršų. Žvairumas yra gana dažnas reiškinys, pasireiškiantis maždaug 3-4% vaikų, tačiau gali atsirasti ir suaugusiems. Žvairumas gali būti ir paveldimas.",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Dėka didelio regėjimo aštrumo ir tolygios akių padėties asmuo nuo pat vaikystės formuoja harmoningą ir teisingą aplinkinio pasaulio suvokimą. Matomas vaizdas būna aiškus ir platus. Tačiau neretai akys nukrypsta nuo lygiagrečios regos ašių padėties ir atsiranda žvairumas. Tai yra kosmetinė ir funkcinė problema, susijusi su okulomotorinių (akį judinančių) raumenų disbalansu.",
                        },
                    ],
                },
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Žvairumas gali būti vidinis – kai akys susieina ties nosimi, išorinis – kai jos išsiskiria į šalis, vertikalus – kai viena akis nukrypsta į viršų ar į apačią, vienpusis – kai tik viena akis žiūri netaisyklingai, pakaitinis – kai akys pakaitomis nukrypsta nuo regos ašies, ir paralyžinis – kai yra riboti akies judesiai pažeisto raumens link. Esant žvairumui, paauglys ar suaugęs žmogus patiria diskomfortą, skundžiasi greitu akių nuovargiu, galvos svaigimu, vaizdo dvejinimusi, kas labai pablogina gyvenimo kokybę.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Kuo anksčiau pastebimas akių nuokrypis, teisingai diagnozuojamos žvairumo priežastys ir pradedamas gydymas – tuo didesnė tikimybė ištaisyti kosmetinį defektą ir pasiekti aukštą abiejų akių regėjimą.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Be abejo, žvairumą reikia pradėti gydyti vaikystėje, vos jį nustačius. Laiku parinkti akiniai gali sumažinti akies nuokrypio laipsnį ar net visiškai pašalinti žvairumą. Okulistas paskiria tinkamus akinukus, gydomųjų pratimų kompleksą, švitinimą įvairiais aparatais. Šių taikomų priemonių tikslas ne tik priversti akių raumenis dirbti taisyklingai, bet ir pagerinti regėjimą. Akinukus vaikai gali pradėti nešioti ir nuo 6 mėnesių. Kartais mažylio geriau matanti akis gali būti uždengiama, kad žvairuojanti akytė po truputį stiprėtų ir pradėtų žiūrėti taisyklingai. Gydyti reikia nuolat, nes nenešiojant akinukų nors dvi savaites, visas darbas gali nueiti veltui. Jei neužtenka gydymo akiniais, gydoma chirurginiu būdu – operuojami akį judinantys raumenys. Jie pailginami arba sutrumpinami. Kartais gali prireikti ir kelių operacijų.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Šiuolaikiniai akių ligų korekcijos metodai leidžia mums pašalinti žvairumą net ir pacientams, turintiems silpną regėjimo aštrumą. Akių klinikoje „Naujas regėjimas“ galime suteikti visapusišką žvairumu sergančių pacientų priežiūrą. Tiksli diagnostika, teisinga gydymo taktika, kruopštus proceso dinamikos stebėjimas ir patikimas gydymo rezultato užtvirtinimas – visi šie etapai pilnai įgyvendinami mūsų klinikoje.",
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
                "Strabismus – Symptoms, Causes, and Treatment | British Ophthalmology Center | EYES",
            descriptionSEO:
                "➔ Strabismus: main causes and modern approaches to effective treatment ✅ Information from leading ophthalmologists in Kyiv ✅ Modern diagnostics and effective treatment 👍 Proven experience and impeccable reputation ☎️ 0 800 507 077",
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
                "Косоглазие - симптомы, причины и лечение | Британский офтальмологический центр | EYES",
            descriptionSEO:
                "➔ Косоглазие: основные факторы возникновения и современные подходы к эффективному лечению ✅ Информация от ведущих офтальмологов Киева ✅ Современная диагностика и эффективное лечение 👍 Проверенный опыт и безупречная репутация ☎️ 0 800 507 077",
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
                "Пресбіопія - симптоми, причини та лікування | Британський офтальмологічний центр | EYES",
            descriptionSEO:
                "➔ Пресбіопія: основні фактори виникнення та сучасні підходи до ефективного лікування ✅ Інформація від провідних офтальмологів Києва ✅ Сучасна діагностика та ефективне лікування 👍 Перевірений досвід і бездоганна репутація ☎️ 0 800 507 077",
            title: "Presbiopija",
            content: [
                {
                    title: "Presbiopija – kas tai?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Senstant akies lęšis netenka elastingumo, todėl darosi sunkiau matyti artimus daiktus. Sulaukęs 40–45 metų iki tol gerai matęs žmogus negali skaityti ar dirbti smulkių darbų iš įprasto atstumo. Tai vadinama senatvine toliaregyste (presbiopija).",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Ar Jums reikia skaitymo akinių? Jei taip, tikriausiai Jums presbiopija, dėl kurios akis praranda galimybę fokusuoti. Tai paprastai įvyksta dėl natūralaus senėjimo proceso, kurį patiria kiekvienas. Pirmieji simptomai dažnai pastebimi sulaukus keturiasdešimties metų amžiaus, todėl tiek daug vidutinio amžiaus žmonių prireikia skaitymo arba dvižidinių akinių.",
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
                    title: "Presbiopija – tai natūralus procesas, o ne liga",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Šis sutrikimas paprastai prasideda žmonėms nuo 40 iki 50 metų amžiaus. Presbiopija susiformuoja, kai natūralus akies lęšiukas sensta, todėl tampa kietesnis ir praranda lankstumą, dėl to paprastai prarandamas geras artimų objektų regėjimas ir reikia skaitymo akinių.",
                        },
                    ],
                },
                {
                    title: "Kaip apsisaugoti nuo presbiopijos?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Deja, presbiopija atsiranda mums natūraliai senstant. Kol kas medikai nežino, kaip išvengti šios regėjimo degradacijos. Praktiškai visiems sulaukus 40-ties metų pasireikš presbiopijos simptomai, netgi jeigu jie ir neturėjo jokių regėjimo problemų. Tačiau svarbu žinoti, jog regėjimu reikia rūpintis visuomet, štai keli būdai apsaugoti Jūsų akis nuo bet kokių ligų:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Reguliariai tikrinkite regėjimą.",
                                "Šviečiant ryškiai saulei, dėvėkite tamsius apsauginius akinius, tai padės apsaugoti akis nuo žalingo UV poveikio.",
                                "Dažniau tikrinkite akis, jeigu esate rizikos grupėje – sergate diabetu ar hipotireoze.",
                                "Būtinai dėvėkite apsauginius akinius, jeigu dirbate pavojingus darbus, nes net menkiausia akių trauma gali turėti įtakos sunkiai išgydomų ligų atsiradimui.",
                                "Sveikai maitinkitės. Sveikas maistas – tai garantas, kad gausite pakankamai antioksidantų ir vitaminų. Tyrimai parodė, kad maistinės medžiagos, esančios vaisiuose, daržovėse ir žuvyje, gali sulėtinti natūralų akių senėjimo procesą.",
                                "Atkreipkite dėmesį į tokius simptomus kaip galvos skausmas, stiprus akių nuovargis ar miglotas vaizdas.",
                            ],
                        },
                    ],
                },
                {
                    title: "Ar jaučiate presbiopijos simptomus?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Presbiopija vystosi palaipsniui, daugumai žmonių pirmi simptomai pasireiškia sulaukus 40-ties metų. Štai keli simptomai, kurie byloja apie pirmus presbiopijos požymius:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Miglotas vaizdas esant normaliam skaitymo atstumui, įskaitant atvejus, kai dėvite korekcinius akinius ar kontaktinius lęšius",
                                "Galvos skausmas",
                                "Nuovargis atliekant darbus, reikalaujančius aiškaus mažų detalių matymo, pvz., siuvimas",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Jeigu pajutote kuriuos nors iš šių išvardintų simptomų, rekomenduojame užsiregistruoti akių gydytojo konsultacijai.",
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
                            text: "Jei dėl vienokių ar kitokių priežasčių nenorite nešioti akinių ar kontaktinių lęšių su amžiumi išsivysčiusiai senatvinei (amžinei) toliaregystei koreguoti, tuomet Jums padėti gali chirurginis gydymas. Jis gali būti atliekamas lazerinės regos korekcijos metodais LASIK ir PRK. Jeigu nustatoma, kad pacientui negalima atlikti lazerinės regėjimo korekcijos, galimas kitas chirurginis presbiopijos gydymo metodas – natūralaus lęšio pakeitimas dirbtiniu (intraokuliniu lęšiu).",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Kviečiame atvykti į akių kliniką „Naujas regėjimas”, kur konsultacijos metu atliksime išsamius tyrimus ir nustatysime, ar Jums galima atlikti presbiopijos operaciją, kokia operacija Jums tinkamiausia ir kokių regos korekcijos rezultatų galima tikėtis.",
                        },
                    ],
                },
            ],
        },
        en: {
            titleSEO:
                "Presbyopia – Symptoms, Causes, and Treatment | British Ophthalmology Center | EYES",
            descriptionSEO:
                "➔ Presbyopia: main causes and modern approaches to effective treatment ✅ Information from leading ophthalmologists in Kyiv ✅ Modern diagnostics and effective treatment 👍 Proven experience and impeccable reputation ☎️ 0 800 507 077",
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
                "Пресбиопия - симптомы, причины и лечение | Британский офтальмологический центр | EYES",
            descriptionSEO:
                "➔ Пресбиопия: основные факторы возникновения и современные подходы к эффективному лечению ✅ Информация от ведущих офтальмологов Киева ✅ Современная диагностика и эффективное лечение 👍 Проверенный опыт и безупречная репутация ☎️ 0 800 507 077",
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
                "Симптоми захворювання очей - причини та лікування | Британський офтальмологічний центр | EYES",
            descriptionSEO:
                "➔ Симптоми захворювання очей: основні фактори виникнення та сучасні підходи до ефективного лікування ✅ Інформація від провідних офтальмологів Києва ✅ Сучасна діагностика та ефективне лікування 👍 Перевірений досвід і бездоганна репутація ☎️ 0 800 507 077",
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
                            text: "Šviesos spinduliams pereinant iš vienos medžiagos į kitą, pvz., iš oro į vandenį, jie lūžta. Tai vadinama refrakcija. Kai šie spinduliai patenka į ragenos ir lęšio audinius, jie taip pat laužiami taip, kad būtų sufokusuojami tinklainėje. Jei akys nebegali fokusuoti šviesos ant tinklainės, paprastai dėl to, kad akies forma nevisiškai taisyklinga, tai vadinama refrakcijos yda.",
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
                            text: "Trumparegystė, dar vadinama miopija (miglotas toli esančių objektų matymas), yra dažniausia refrakcijos yda. Paprastai susiformuoja, kai akis yra per ilga arba ragena per daug išlenkta. Dėl šio papildomo ilgio tolimi objektai fokusuojami priešais tinklainę, todėl šviesa išsisklaido ir teikia smegenims nesufokusuotą vaizdą. Trumparegystė – tai refrakcijos yda, dėl kurios akis nebemato toli esančių objektų. Trumparegystė koreguojama akiniais, kontaktiniais lęšiais arba refrakcijos operacija.",
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
                            text: "Toliaregystė yra arti esančių objektų nematymas, kurį sukelia per trumpa akis arba per daug plokščia ragena. Dėl nepakankamo akies ilgio ragena ir lęšiukas neturi pakankamai vietos šviesos spinduliams sufokusuoti tinklainės židinio taške, todėl vaizdas fokusuojamas už tinklainės ir smegenys gauna netikslius signalus.",
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
                            text: "Kitas terminas prastam akių išlinkiui apibūdinti yra astigmatizmas, kuris susiformuoja, kai ragena nėra apvali, o regbio kamuolio formos, dėl to akis nebegali sufokusuoti šviesos iš bet kokio atstumo. Negydomas astigmatizmas gali sukelti žvairumą ir staigų regėjimo prastėjimą. Be korekcijos astigmatizmas gali sukelti galvos ir akių skausmus.",
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
                            text: "Presbiopija yra su amžiumi susijusi hiperopija, kurią sukelia natūralus žmogaus senėjimas. Tai yra akies refrakcijos anomalija, kai žmogus negali matyti smulkių šriftų ar smulkių daiktų iš arti. Šis sutrikimas paprastai pasireiškia žmonėms nuo 40 iki 50 metų amžiaus. Presbiopija susiformuoja, kai natūralus akių lęšiukas sensta, todėl tampa kietesnis ir praranda lankstumą, dėl to paprastai prarandamas artimų objektų regėjimas ir reikia skaitymo akinių.",
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
                            text: "Priešingai nei įprasta manyti, katarakta nėra sluoksnis, kuris susiformuoja ant akies paviršiaus, o yra akies viduje esančio lęšiuko skaidrumo pokytis, neleidžiantis pro jį prasiskverbti šviesos spinduliams. Dėl šio laipsniškai didėjančio miglotumo, laikui bėgant, regėjimas gali tapti nebe toks aštrus. Šviesa, kuri patenka į tinklainę, yra išskaidoma, todėl regėjimas tampa neryškus.",
                        },
                    ],
                },
            ],
        },
        en: {
            titleSEO:
                "Eye Disease Symptoms – Causes and Treatment | British Ophthalmology Center | EYES",
            descriptionSEO:
                "➔ Eye disease symptoms: main causes and modern approaches to effective treatment ✅ Information from leading ophthalmologists in Kyiv ✅ Modern diagnostics and effective treatment 👍 Proven experience and impeccable reputation ☎️ 0 800 507 077",
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
                "Симптомы заболевания глаз - причины и лечение | Британский офтальмологический центр | EYES",
            descriptionSEO:
                "➔ Симптомы заболевания глаз: основные факторы возникновения и современные подходы к эффективному лечению ✅ Информация от ведущих офтальмологов Киева ✅ Современная диагностика и эффективное лечение 👍 Проверенный опыт и безупречная репутация ☎️ 0 800 507 077",
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
                listTitle: "after",
                list: [
                    keySlugPatientsInstruction.find(
                        i =>
                            i.key ===
                            "instruktsiyi-pislya-lazernoyi-korektsiyi-zoru"
                    )!,
                    keySlugPatientsInstruction.find(
                        i =>
                            i.key ===
                            "pamyatka-patsiyenta-pislya-khirurhiyi-katarakty"
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
