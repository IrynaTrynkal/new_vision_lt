import { ServiceKey } from "./menu";

export type StickyCardType = {
    images: string[];
    data: {
        lt: { title: string; text: string };
        en: { title: string; text: string };
        ru: { title: string; text: string };
    };
};

export const stickyList: StickyCardType[] = [
    {
        images: [
            "/images/safety1.jpg",
            "/images/safety2.jpg",
            "/images/safety3.jpg",
            "/images/safety4.jpg",
            "/images/safety5.jpg",
            "/images/safety6.jpg",
        ],
        data: {
            lt: {
                title: "saugumas",
                text: "Reguliariai atliekame patalpų dezinfekciją, imame mėginius dėl bakterijų ir virusų kontrolės, vykdome oro valymo sistemų keitimą bei profilaktinę priežiūrą ir taikome daug kitų priemonių, kad maksimaliai sumažintume rizikas bei žmogiškojo faktoriaus įtaką per operacijas ir užtikrintume pacientų saugumą.",
            },
            en: {
                title: "safety",
                text: "We regularly disinfect our facilities, collect samples to monitor the presence of bacteria and viruses, replace and service air purification systems, and implement many other measures to minimize risks and reduce the impact of the human factor during surgical procedures, ensuring the safety of our patients.",
            },
            ru: {
                title: "безопасность",
                text: "Мы регулярно проводим обеззараживание помещений, берём пробы на присутствие бактерий и вирусов, выполняем замену и профилактические работы систем очищения воздуха и применяем множество других мер, чтобы полностью исключить риск и человеческий фактор при проведении операций и гарантировать безопасность наших пациентов.",
            },
        },
    },
    {
        images: [
            "/images/equipment1.jpg",
            "/images/equipment2.jpg",
            "/images/equipment3.jpg",
            "/images/equipment4.jpg",
            "/images/equipment5.jpg",
            "/images/equipment6.jpg",
        ],
        data: {
            lt: {
                title: "įranga",
                text: "Visuose padaliniuose naudojamos pažangios diagnostikos ir chirurginio gydymo technologijos. Mūsų medicinos centro Vilniuje naudojamos įrangos lygis yra pavyzdys daugeliui Europos akių ligų gydymo centrų.",
            },
            en: {
                title: "equipment",
                text: "All departments use advanced diagnostic and surgical technologies. The level of equipment at our medical center in Vilnius (Lithuania) serves as a benchmark for leading European eye disease treatment centers.",
            },
            ru: {
                title: "оборудование",
                text: "Во всех подразделениях используются передовые технологии диагностики и хирургии. Уровень оснащённости нашего медицинского центра в Вильнюсе (Литва) является ориентиром для ведущих европейских центров лечения заболеваний глаза.",
            },
        },
    },
    {
        images: [
            "/images/facilities1.jpg",
            "/images/facilities2.jpg",
            "/images/facilities3.jpg",
            "/images/facilities4.jpg",
            "/images/facilities5.jpg",
            "/images/facilities6.jpg",
        ],
        data: {
            lt: {
                title: "kambariai",
                text: "Pastatai ir kabinetai įrengti atsižvelgiant į šiuolaikinius griežtus europinius reikalavimus, reglamentuojančius medicinos įstaigų veiklą.",
            },
            en: {
                title: "facilities",
                text: "Our buildings and consultation rooms are arranged in accordance with modern, stringent European standards governing medical facilities.",
            },
            ru: {
                title: "помещения",
                text: "Наши здания и кабинеты обустроены в соответствии с современными и строгими европейскими нормами, регламентирующими работу медицинских учреждений.",
            },
        },
    },
];

export type AchievementsType = {
    lt: { up: string; down: string };
    en: { up: string; down: string };
    ru: { up: string; down: string };
};

export const achievementsList: AchievementsType[] = [
    {
        lt: { up: "19", down: "metų patirtis" },
        en: { up: "19", down: "years of experience" },
        ru: { up: "19", down: "лет опыта" },
    },
    {
        lt: { up: "5 mln.", down: "atliktų konsultacijų" },
        en: { up: "5 m", down: "consultations held" },
        ru: { up: "5 млн", down: "консультаций проведено" },
    },
    {
        lt: { up: "1,5 mln.", down: "atliktų operacijų" },
        en: { up: "1.5 m", down: "operations carried out" },
        ru: { up: "1.5 млн", down: "операций проведено" },
    },
    {
        lt: { up: "1 mln.", down: "patenkintų klientų" },
        en: { up: "1 m", down: "satisfied customers" },
        ru: { up: "1 млн", down: "довольных клиентов" },
    },
];

export type AboutServicesType = {
    key: ServiceKey;
    link: string;
    data: {
        lt: { title: string; text: string };
        en: { title: string; text: string };
        ru: { title: string; text: string };
    };
};

export const aboutServicesList: AboutServicesType[] = [
    {
        key: "lazerine-akiu-korekcija",
        link: "/paslaugos/lazerine-akiu-korekcija",
        data: {
            lt: {
                title: "Akių korekcija lazeriu",
                text: "Greitas ir tikslus regėjimo korekcijos metodas, mažinantis priklausomybę nuo akinių ar kontaktinių lęšių",
            },
            en: {
                title: "Laser Vision Correction",
                text: "A complex combined surgical method for treating retinal and vitreous body disorders",
            },
            ru: {
                title: "Лазерная коррекция зрения",
                text: "Быстрый и точный метод коррекции зрения, уменьшающий зависимость от очков или контактных линз",
            },
        },
    },
    {
        key: "kataraktos-operacija",
        link: "/paslaugos/kataraktos-operacija",

        data: {
            lt: {
                title: "Kataraktos operacija",
                text: "Mikrochirurginis drumsto lęšiuko pašalinimas implantuojant intraokulinį lęšį ir atkuriant ryškų regėjimą",
            },
            en: {
                title: "Cataract Removal",
                text: "Microsurgical removal of the clouded lens with intraocular lens implantation to restore clear vision",
            },
            ru: {
                title: "Удаление катаракты",
                text: "Микрохирургическое удаление помутневшего хрусталика с имплантацией интраокулярной линзы для восстановления чёткого зрения",
            },
        },
    },
    {
        key: "skaidraus-lesio-operacija",
        link: "/paslaugos/skaidraus-lesio-operacija",
        data: {
            lt: {
                title: "Regos korekcijos lazeriu RLE alternatyva",
                text: "Kai problemos neįmanoma išspręsti konservatyviais metodais",
            },
            en: {
                title: "Alternative to Laser Vision Correction — RLE",
                text: "When the problem cannot be corrected by conservative methods.",
            },
            ru: {
                title: "Альтернатива лазерной коррекции зрения RLE",
                text: "Когда проблему невозможно устранить консервативными методами.",
            },
        },
    },
];
