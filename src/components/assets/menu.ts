export const menuList = [
    { key: "paslaugos" },
    { key: "rayner-galaxy-lt" },
    { key: "kainos" },
    { key: "akcijos" },
    { key: "gydytojai" },
    { key: "apie-klinika" },
    // { key: "informatsiya-dlya-patsiyentiv" },
    { key: "atsiliepimai" },
    { key: "kontaktai" },
];

export type ServicesKeyType =
    | "lazerine-akiu-korekcija"
    | "akiu-patikrinimas"
    | "kataraktos-operacija"
    | "vaiku-akiu-patikra"
    | "skaidraus-lesio-operacija"
    | "lazerinis-akiu-ligu-gydymas"
    | "glaukomos-gydymas"
    | "syndrom-sukhoho-oka"
    | "all";

export type ServicesListProps = {
    key: ServicesKeyType;
    image?: string;
    icon?: boolean;
    slug: { lt: string; ru: string; en: string };
};

export const servicesList: ServicesListProps[] = [
    {
        key: "akiu-patikrinimas",
        image: "perevirka-zoru.jpg",
        slug: {
            lt: "akiu-patikrinimas",
            en: "eye-examination",
            ru: "diagnostika-zreniya",
        },
    },
    {
        key: "lazerine-akiu-korekcija",
        image: "lazerna-korekcziya-zoru.jpg",
        slug: {
            lt: "lazerine-akiu-korekcija",
            en: "laser-eye-surgery",
            ru: "lazernaya-korrekciya-zreniya",
        },
    },

    {
        key: "kataraktos-operacija",
        image: "likuvannya-katarakti.jpg",
        slug: {
            lt: "kataraktos-operacija",
            en: "cataract-surgery",
            ru: "udaleniye-katarakty",
        },
    },
    {
        key: "syndrom-sukhoho-oka",
        image: "syndrom-sukhoho-oka.jpg",
        slug: {
            lt: "syndrom-sukhoho-oka",
            en: "dry-eye-syndrome",
            ru: "lechenie-sindroma-suhogo-glaza",
        },
    },
    {
        key: "vaiku-akiu-patikra",
        icon: true,
        slug: {
            lt: "vaiku-akiu-patikra",
            en: "pediatric-eye-examination",
            ru: "detskoye-otdeleniye",
        },
    },
    {
        key: "lazerinis-akiu-ligu-gydymas",
        icon: true,
        slug: {
            lt: "lazerinis-akiu-ligu-gydymas",
            en: "laser-treatment-of-eye-diseases",
            ru: "lazernoye-lecheniye-zabolevaniy-glaza",
        },
    },
    {
        key: "skaidraus-lesio-operacija",
        icon: true,
        slug: {
            lt: "skaidraus-lesio-operacija",
            en: "refractive-lens-exchange",
            ru: "khirurgiia-prozrachnogo-khrustalika",
        },
    },

    // {
    //     key: "vitreoretinalna-hirurgiya",
    //     icon: true,
    //     slug: {
    //         lt: "vitreoretinalna-hirurgiya",
    //         en: "vitreoretinal-surgery",
    //         ru: "vitreoretinalnaya-khirurgiya",
    //     },
    // },
    // {
    //     key: "intravitrealni-inekczii",
    //     icon: true,
    //     slug: {
    //         lt: "intravitrealni-inekczii",
    //         en: "intravitreal-injections",
    //         ru: "intravitrealnyye-inyektsii",
    //     },
    // },
    {
        key: "glaukomos-gydymas",
        icon: true,
        slug: {
            lt: "glaukomos-gydymas",
            en: "surgical-glaucoma-treatment",
            ru: "khirurgicheskoye-lecheniye-glaukomy",
        },
    },
    // {
    //     key: "likuvannya-kosookosti",
    //     icon: true,
    //     slug: {
    //         lt: "likuvannya-kosookosti",
    //         en: "strabismus-treatment",
    //         ru: "lecheniye-kosoglaziya",
    //     },
    // },
    // {
    //     key: "hirurgiya-povik-i-konyunktivi",
    //     icon: true,
    //     slug: {
    //         lt: "hirurgiya-povik-i-konyunktivi",
    //         en: "eyelid-and-conjunctival-surgery",
    //         ru: "khirurgiya-vek-i-konyunktivy",
    //     },
    // },
    // {
    //     key: "anesteziologichnij-posibnik",
    //     icon: true,
    //     slug: {
    //         lt: "anesteziologichnij-posibnik",
    //         en: "anesthesia-benefit",
    //         ru: "anesteziologicheskoye-posobiye",
    //     },
    // },
    // {
    //     key: "ksenonoterapiya",
    //     icon: true,
    //     slug: {
    //         lt: "ksenonoterapiya",
    //         en: "xenon-therapy",
    //         ru: "ksenonoterapiya",
    //     },
    // },
];
export type PatientsListProps = {
    key: string;
    slug: { lt: string; ru: string; en: string };
};

export const patientsList: PatientsListProps[] = [
    {
        key: "informatsiya-dlya-inohorodnikh-patsiyentiv",
        slug: {
            lt: "informatsiya-dlya-inohorodnikh-patsiyentiv",
            en: "information-for-nonresident-patients",
            ru: "inogorodnim-patsiyentam",
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
    {
        key: "akiu-ligos",
        slug: {
            lt: "akiu-ligos",
            en: "eye-diseases",
            ru: "glaznye-zabolevaniya",
        },
    },
];

export const footerMainMenu = [
    { key: "main" },
    { key: "rayner-galaxy-lt" },
    { key: "kainos" },
    { key: "akcijos" },
    { key: "gydytojai" },
    { key: "apie-klinika" },
    { key: "informatsiya-dlya-patsiyentiv" },
    { key: "atsiliepimai" },
    { key: "blog" },
    { key: "kontaktai" },
];
export type ServiceKey = keyof typeof serviceSlugs;
export const serviceSlugs = {
    "vaiku-akiu-patikra": {
        lt: "vaiku-akiu-patikra",
        en: "pediatric-eye-examination",
        ru: "detskoye-otdeleniye",
    },
    "akiu-patikrinimas": {
        lt: "akiu-patikrinimas",
        en: "eye-examination",
        ru: "diagnostika-zreniya",
    },
    "lazerine-akiu-korekcija": {
        lt: "lazerine-akiu-korekcija",
        en: "laser-eye-surgery",
        ru: "lazernaya-korrekciya-zreniya",
    },
    "kataraktos-operacija": {
        lt: "kataraktos-operacija",
        en: "cataract-surgery",
        ru: "udaleniye-katarakty",
    },
    "syndrom-sukhoho-oka": {
        lt: "syndrom-sukhoho-oka",
        en: "dry-eye-syndrome",
        ru: "lechenie-sindroma-suhogo-glaza",
    },
    "skaidraus-lesio-operacija": {
        lt: "skaidraus-lesio-operacija",
        en: "refractive-lens-exchange",
        ru: "khirurgiia-prozrachnogo-khrustalika",
    },
    "likuvannya-kosookosti": {
        lt: "likuvannya-kosookosti",
        en: "strabismus-treatment",
        ru: "lecheniye-kosoglaziya",
    },
    "keratokonuso-gydymas": {
        lt: "keratokonuso-gydymas",
        en: "keratoconus-treatment",
        ru: "lecheniye-keratokonusa",
    },
    "vitreoretinalna-hirurgiya": {
        lt: "vitreoretinalna-hirurgiya",
        en: "vitreoretinal-surgery",
        ru: "vitreoretinalnaya-khirurgiya",
    },
    "intravitrealni-inekczii": {
        lt: "intravitrealni-inekczii",
        en: "intravitreal-injections",
        ru: "intravitrealnyye-inyektsii",
    },
    "lazerinis-akiu-ligu-gydymas": {
        lt: "lazerinis-akiu-ligu-gydymas",
        en: "laser-treatment-of-eye-diseases",
        ru: "lazernoye-lecheniye-zabolevaniy-glaza",
    },
    "glaukomos-gydymas": {
        lt: "glaukomos-gydymas",
        en: "surgical-glaucoma-treatment",
        ru: "khirurgicheskoye-lecheniye-glaukomy",
    },
    "hirurgiya-povik-i-konyunktivi": {
        lt: "hirurgiya-povik-i-konyunktivi",
        en: "eyelid-and-conjunctival-surgery",
        ru: "khirurgiya-vek-i-konyunktivy",
    },
    "anesteziologichnij-posibnik": {
        lt: "anesteziologichnij-posibnik",
        en: "anesthesia-benefit",
        ru: "anesteziologicheskoye-posobiye",
    },
    ksenonoterapiya: {
        lt: "ksenonoterapiya",
        en: "xenon-therapy",
        ru: "ksenonoterapiya",
    },
} as const;
