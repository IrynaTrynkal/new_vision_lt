import { LocaleType } from "@/types/LocaleType";
export type LocalizedRouteKey = keyof typeof localizedRoutes;

export type LocalizedRoutes = {
    [key: string]: Record<LocaleType, string>;
};

export const localizedRoutes: LocalizedRoutes = {
    "/blog": { lt: "/blog", en: "/blog", ru: "/blog" },
    "/blog/[slug]": {
        lt: "/blog/[slug]",
        en: "/blog/[slug]",
        ru: "/blog/[slug]",
    },
    "/posluhy": { lt: "/posluhy", en: "/services", ru: "/uslugi" },
    "/posluhy/lazerna-korekcziya-zoru": {
        lt: "/posluhy/lazerna-korekcziya-zoru",
        en: "/services/laser-vision-correction",
        ru: "/uslugi/lazernaya-korrekciya-zreniya",
    },
    "/posluhy/perevirka-zoru": {
        lt: "/posluhy/perevirka-zoru",
        en: "/services/eye-exam",
        ru: "/uslugi/proverka-zreniya",
    },
    "/posluhy/likuvannya-katarakti": {
        lt: "/posluhy/likuvannya-katarakti",
        en: "/services/cataract-treatment",
        ru: "/uslugi/lechenie-katarakty",
    },
    "/posluhy/syndrom-sukhoho-oka": {
        lt: "/posluhy/syndrom-sukhoho-oka",
        en: "/services/dry-eye-syndrome",
        ru: "/uslugi/lechenie-sindroma-suhogo-glaza",
    },
    "/posluhy/dityache-viddilennya": {
        lt: "/posluhy/dityache-viddilennya",
        en: "/services/children-department",
        ru: "/uslugi/detskoye-otdeleniye",
    },
    "/posluhy/likuvannya-keratokonusa": {
        lt: "/posluhy/likuvannya-keratokonusa",
        en: "/services/keratoconus-treatment",
        ru: "/uslugi/lecheniye-keratokonusa",
    },
    "/posluhy/lazerne-likuvannya-zahvoryuvan-oka": {
        lt: "/posluhy/lazerne-likuvannya-zahvoryuvan-oka",
        en: "/services/laser-treatment-of-eye-diseases",
        ru: "/uslugi/lazernoye-lecheniye-zabolevaniy-glaza",
    },
    "/posluhy/refrakczijna-lensektomiya": {
        lt: "/posluhy/refrakczijna-lensektomiya",
        en: "/services/refractive-lensectomy",
        ru: "/uslugi/intraokuliarnaya-korrekciya",
    },
    "/posluhy/vitreoretinalna-hirurgiya": {
        lt: "/posluhy/vitreoretinalna-hirurgiya",
        en: "/services/vitreoretinal-surgery",
        ru: "/uslugi/vitreoretinalnaya-khirurgiya",
    },
    "/posluhy/intravitrealni-inekczii": {
        lt: "/posluhy/intravitrealni-inekczii",
        en: "/services/intravitreal-injections",
        ru: "/uslugi/intravitrealnyye-inyektsii",
    },
    "/posluhy/hirurgichne-likuvannya-glaukomi": {
        lt: "/posluhy/hirurgichne-likuvannya-glaukomi",
        en: "/services/surgical-glaucoma-treatment",
        ru: "/uslugi/khirurgicheskoye-lecheniye-glaukomy",
    },
    "/posluhy/likuvannya-kosookosti": {
        lt: "/posluhy/likuvannya-kosookosti",
        en: "/services/strabismus-treatment",
        ru: "/uslugi/lecheniye-kosoglaziya",
    },
    "/posluhy/hirurgiya-povik-i-konyunktivi": {
        lt: "/posluhy/hirurgiya-povik-i-konyunktivi",
        en: "/services/eyelid-and-conjunctival-surgery",
        ru: "/uslugi/khirurgiya-vek-i-konyunktivy",
    },
    "/posluhy/anesteziologichnij-posibnik": {
        lt: "/posluhy/anesteziologichnij-posibnik",
        en: "/services/anesthesia-benefit",
        ru: "/uslugi/anesteziologicheskoye-posobiye",
    },
    "/posluhy/ksenonoterapiya": {
        lt: "/posluhy/ksenonoterapiya",
        en: "/services/xenon-therapy",
        ru: "/uslugi/ksenonoterapiya",
    },
    "/posluhy/lazerna-korekcziya-zoru/sportlife-lasik": {
        lt: "/posluhy/lazerna-korekcziya-zoru/sportlife-lasik",
        en: "/services/laser-vision-correction/sportlife-lasik",
        ru: "/uslugi/lazernaya-korrekciya-zreniya/sportlife-lasik",
    },
    "/posluhy/lazerna-korekcziya-zoru/iq-lasik-oxygen-3d": {
        lt: "/posluhy/lazerna-korekcziya-zoru/iq-lasik-oxygen-3d",
        en: "/services/laser-vision-correction/iq-lasik-oxygen-3d",
        ru: "/uslugi/lazernaya-korrekciya-zreniya/iq-lasik-oxygen-3d",
    },
    "/posluhy/likuvannya-katarakti/iq-5-minutes": {
        lt: "/posluhy/likuvannya-katarakti/iq-5-minutes",
        en: "/services/cataract-treatment/iq-5-minutes",
        ru: "/uslugi/lechenie-katarakty/iq-5-minutes",
    },
    "/posluhy/likuvannya-katarakti/iq-life-3d": {
        lt: "/posluhy/likuvannya-katarakti/iq-life-3d",
        en: "/services/cataract-treatment/iq-life-3d-live-vision",
        ru: "/uslugi/lechenie-katarakty/iq-life-3d-zhivoye-zreniye",
    },
    "/aktsiyi": { lt: "/aktsiyi", en: "/offers", ru: "/akcii" },
    "/akiu-ligos": {
        lt: "/akiu-ligos",
        en: "/eye-diseases",
        ru: "/glaznye-bolezni",
    },
    "/tsiny": { lt: "/tsiny", en: "/service-prices", ru: "/ceny" },
    "/informatsiya-dlya-patsiyentiv": {
        lt: "/informatsiya-dlya-patsiyentiv",
        en: "/patient-information",
        ru: "/informatsiya-dlya-patsiyentov",
    },
    "/apie-klinika": {
        lt: "/apie-klinika",
        en: "/about-clinic",
        ru: "/o-klinike",
    },
    "/vidhuky": { lt: "/vidhuky", en: "/reviews", ru: "/otzyvy" },
    "/kontaktai": { lt: "/kontakty", en: "/contacts", ru: "/kontakty" },
    "/rayner-galaxy-lt": {
        lt: "/rayner-galaxy-lt",
        en: "/rayner-galaxy-a-new-level-of-vision-is-now-available-at-our-clinic",
        ru: "/rayner-galaxy-novoe-izmerenie-zreniya-uzhe-v-nashej-klinike",
    },
    "/gydytojai": {
        lt: "/gydytojai",
        en: "/ophthalmologists",
        ru: "/oftalmologi",
    },
    "/gydytojai/[slug]": {
        lt: "/gydytojai/[slug]",
        en: "/ophthalmologists/[slug]",
        ru: "/oftalmologi/[slug]",
    },
    "/informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam": {
        lt: "/informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam",
        en: "/information-for-patients-prior-to-microsurgery",
        ru: "/informatsiya-dlya-patsiyentov-pered-mikrokhirurgicheskim-vmeshatelstvom",
    },
    "/dovanu-kupono": {
        lt: "/dovanu-kupono",
        en: "/dovanu-kupono",
        ru: "/dovanu-kupono",
    },
    "/instruktsiyi-pislya-lazernoyi-korektsiyi-zoru": {
        lt: "/instruktsiyi-pislya-lazernoyi-korektsiyi-zoru",
        en: "/instructions-after-laser-vision-correction",
        ru: "/instruktsii-posle-korrektsii-zreniya",
    },
    "/pamyatka-patsiyenta-pered-vitreoretynalnoyu-khirurhiyeyu": {
        lt: "/pamyatka-patsiyenta-pered-vitreoretynalnoyu-khirurhiyeyu",
        en: "/patient-reminder-before-vitreoretinal-surgery",
        ru: "/pamyatki-patsiyentu-pered-vitreoretinalnoy-khirurgiyey",
    },
    "/pamyatka-patsiyenta-pislya-khirurhiyi-katarakty": {
        lt: "/pamyatka-patsiyenta-pislya-khirurhiyi-katarakty",
        en: "/pamyatka-patsiyenta-pislya-khirurhiyi-katarakty",
        ru: "/pamyatki-paczienta-posle-hirurgii-katarakty",
    },
    "/akiu-ligos/glaukoma": {
        lt: "/akiu-ligos/glaukoma",
        en: "/eye-diseases/glaucoma",
        ru: "/glaznye-bolezni/glaukoma",
    },
    "/akiu-ligos/presbiopiya": {
        lt: "/akiu-ligos/presbiopiya",
        en: "/eye-diseases/presbyopia",
        ru: "/glaznye-bolezni/presbiopiya",
    },
    "/akiu-ligos/dalekozorist": {
        lt: "/akiu-ligos/dalekozorist",
        en: "/eye-diseases/farsightedness",
        ru: "/glaznye-bolezni/dalnozorkost",
    },
    "/akiu-ligos/katarakta": {
        lt: "/akiu-ligos/katarakta",
        en: "/eye-diseases/cataract",
        ru: "/glaznye-bolezni/katarakta",
    },
    "/akiu-ligos/simptomi-zahvoryuvannya-ochej": {
        lt: "/akiu-ligos/simptomi-zahvoryuvannya-ochej",
        en: "/eye-diseases/symptoms-of-eye-disease",
        ru: "/glaznye-bolezni/simptomy-zabolevaniya-glaz",
    },
    "/akiu-ligos/kosookist": {
        lt: "/akiu-ligos/kosookist",
        en: "/eye-diseases/strabismus",
        ru: "/glaznye-bolezni/kosoglazie",
    },
    "/akiu-ligos/korotkozorist-miopiya": {
        lt: "/akiu-ligos/korotkozorist-miopiya",
        en: "/eye-diseases/nearsightedness-myopia",
        ru: "/glaznye-bolezni/blizorukost-miopiya",
    },
    "/akiu-ligos/astigmatizm": {
        lt: "/akiu-ligos/astigmatizm",
        en: "/eye-diseases/astigmatism",
        ru: "/glaznye-bolezni/astigmatizm",
    },
    "/politika-konfidenczijnosti": {
        lt: "/politika-konfidenczijnosti",
        en: "/privacy-policy",
        ru: "/privacy-policy",
    },
};
