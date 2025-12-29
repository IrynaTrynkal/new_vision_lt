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
    "/paslaugos": { lt: "/paslaugos", en: "/services", ru: "/uslugi" },
    "/paslaugos/lazerine-akiu-korekcija": {
        lt: "/paslaugos/lazerine-akiu-korekcija",
        en: "/services/laser-eye-surgery",
        ru: "/uslugi/lazernaya-korrekciya-zreniya",
    },
    "/paslaugos/akiu-patikrinimas": {
        lt: "/paslaugos/akiu-patikrinimas",
        en: "/services/eye-examination",
        ru: "/uslugi/diagnostika-zreniya",
    },
    "/paslaugos/kataraktos-operacija": {
        lt: "/paslaugos/kataraktos-operacija",
        en: "/services/cataract-surgery",
        ru: "/uslugi/udaleniye-katarakty",
    },
    "/paslaugos/dry-eye-syndrome-treatment": {
        lt: "/paslaugos/dry-eye-syndrome-treatment",
        en: "/services/dry-eye-syndrome-treatment",
        ru: "/uslugi/dry-eye-syndrome-treatment",
    },
    "/paslaugos/vaiku-akiu-patikra": {
        lt: "/paslaugos/vaiku-akiu-patikra",
        en: "/services/pediatric-eye-examination",
        ru: "/uslugi/detskoye-otdeleniye",
    },
    "/paslaugos/lazerinis-akiu-ligu-gydymas": {
        lt: "/paslaugos/lazerinis-akiu-ligu-gydymas",
        en: "/services/laser-treatment-of-eye-diseases",
        ru: "/uslugi/lazernoye-lecheniye-zabolevaniy-glaza",
    },
    "/paslaugos/skaidraus-lesio-operacija": {
        lt: "/paslaugos/skaidraus-lesio-operacija",
        en: "/services/refractive-lens-exchange",
        ru: "/uslugi/khirurgiia-prozrachnogo-khrustalika",
    },
    "/paslaugos/glaukomos-gydymas": {
        lt: "/paslaugos/glaukomos-gydymas",
        en: "/services/glaukomos-gydymas",
        ru: "/uslugi/glaukomos-gydymas",
    },
    "/paslaugos/lazerine-akiu-korekcija/sportlife-lasik": {
        lt: "/paslaugos/lazerine-akiu-korekcija/sportlife-lasik",
        en: "/services/laser-eye-surgery/sportlife-lasik",
        ru: "/uslugi/lazernaya-korrekciya-zreniya/sportlife-lasik",
    },
    "/paslaugos/lazerine-akiu-korekcija/iq-lasik-oxygen-3d": {
        lt: "/paslaugos/lazerine-akiu-korekcija/iq-lasik-oxygen-3d",
        en: "/services/laser-eye-surgery/iq-lasik-oxygen-3d",
        ru: "/uslugi/lazernaya-korrekciya-zreniya/iq-lasik-oxygen-3d",
    },
    "/paslaugos/kataraktos-operacija/iq-5-minutes": {
        lt: "/paslaugos/kataraktos-operacija/iq-5-minutes",
        en: "/services/cataract-surgery/iq-5-minutes",
        ru: "/uslugi/udaleniye-katarakty/iq-5-minutes",
    },
    "/paslaugos/kataraktos-operacija/iq-life-3d": {
        lt: "/paslaugos/kataraktos-operacija/iq-life-3d",
        en: "/services/cataract-surgery/iq-life-3d-live-vision",
        ru: "/uslugi/udaleniye-katarakty/iq-life-3d-zhivoye-zreniye",
    },
    "/akcijos": { lt: "/akcijos", en: "/offers", ru: "/akcii" },
    "/akiu-ligos": {
        lt: "/akiu-ligos",
        en: "/eye-diseases",
        ru: "/glaznye-zabolevaniya",
    },
    "/kainos": { lt: "/kainos", en: "/price-list", ru: "/ceny-na-uslugi" },
    "/informacija-pacientams": {
        lt: "/informacija-pacientams",
        en: "/patient-information",
        ru: "/informatsiya-dlya-patsiyentov",
    },
    "/apie-klinika": {
        lt: "/apie-klinika",
        en: "/our-clinic",
        ru: "/o-klinike",
    },
    "/atsiliepimai": {
        lt: "/atsiliepimai",
        en: "/testimonials",
        ru: "/otzyvy",
    },
    "/kontaktai": { lt: "/kontaktai", en: "/contacts", ru: "/kontakty" },
    "/rayner-galaxy-lt": {
        lt: "/rayner-galaxy-lt",
        en: "/rayner-galaxy-a-new-dimension-of-vision-is-now-available-at-our-clinic",
        ru: "/rayner-galaxy-novoe-izmerenie-zreniya-uzhe-v-nashej-klinike",
    },
    "/gydytojai": {
        lt: "/gydytojai",
        en: "/doctors",
        ru: "/vrachi",
    },
    "/gydytojai/[slug]": {
        lt: "/gydytojai/[slug]",
        en: "/doctors/[slug]",
        ru: "/vrachi/[slug]",
    },
    "/instructions-before-surgery": {
        lt: "/instructions-before-surgery",
        en: "/instructions-before-surgery",
        ru: "/instructions-before-surgery",
    },
    "/information-for-out-of-town-patients": {
        lt: "/information-for-out-of-town-patients",
        en: "/information-for-out-of-town-patients",
        ru: "/information-for-out-of-town-patients",
    },
    "/dovanu-kupono": {
        lt: "/dovanu-kupono",
        en: "/dovanu-kupono",
        ru: "/dovanu-kupono",
    },
    "/instructions-after-laser-vision-correction": {
        lt: "/instructions-after-laser-vision-correction",
        en: "/instructions-after-laser-vision-correction",
        ru: "/instructions-after-laser-vision-correction",
    },
    "/akiu-ligos/glaukoma": {
        lt: "/akiu-ligos/glaukoma",
        en: "/eye-diseases/glaucoma",
        ru: "/glaznye-zabolevaniya/glaukoma",
    },
    "/akiu-ligos/presbiopiya": {
        lt: "/akiu-ligos/presbiopiya",
        en: "/eye-diseases/presbyopia",
        ru: "/glaznye-zabolevaniya/presbiopiya",
    },
    "/akiu-ligos/dalekozorist": {
        lt: "/akiu-ligos/dalekozorist",
        en: "/eye-diseases/farsightedness",
        ru: "/glaznye-zabolevaniya/dalnozorkost",
    },
    "/akiu-ligos/katarakta": {
        lt: "/akiu-ligos/katarakta",
        en: "/eye-diseases/cataract",
        ru: "/glaznye-zabolevaniya/katarakta",
    },
    "/akiu-ligos/simptomi-zahvoryuvannya-ochej": {
        lt: "/akiu-ligos/simptomi-zahvoryuvannya-ochej",
        en: "/eye-diseases/symptoms-of-eye-disease",
        ru: "/glaznye-zabolevaniya/simptomy-zabolevaniya-glaz",
    },
    "/akiu-ligos/kosookist": {
        lt: "/akiu-ligos/kosookist",
        en: "/eye-diseases/strabismus",
        ru: "/glaznye-zabolevaniya/kosoglazie",
    },
    "/akiu-ligos/korotkozorist-miopiya": {
        lt: "/akiu-ligos/korotkozorist-miopiya",
        en: "/eye-diseases/nearsightedness-myopia",
        ru: "/glaznye-zabolevaniya/blizorukost-miopiya",
    },
    "/akiu-ligos/astigmatizm": {
        lt: "/akiu-ligos/astigmatizm",
        en: "/eye-diseases/astigmatism",
        ru: "/glaznye-zabolevaniya/astigmatizm",
    },
    "/privatumo-politika": {
        lt: "/privatumo-politika",
        en: "/privacy-policy",
        ru: "/politika-konfidenczialnosti",
    },
    "/cookie-policy-eu": {
        lt: "/cookie-policy-eu",
        en: "/cookie-policy-eu",
        ru: "/cookie-policy-eu",
    },
};
