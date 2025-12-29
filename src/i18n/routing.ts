import { defineRouting } from "next-intl/routing";

export const locales = ["lt", "en", "ru"] as const;

export const routing = defineRouting({
    // A list of all locales that are supported
    locales,
    localePrefix: "as-needed",
    localeDetection: false,
    // Used when no locale matches
    defaultLocale: "lt",
    pathnames: {
        "/paslaugos": {
            en: "/services",
            ru: "/uslugi",
        },
        "/paslaugos/[slug]": {
            en: "/services/[slug]",
            ru: "/uslugi/[slug]",
        },
        "/paslaugos/lazerine-akiu-korekcija": {
            en: "/services/laser-eye-surgery",
            ru: "/uslugi/lazernaya-korrekciya-zreniya",
        },
        "/paslaugos/lazerine-akiu-korekcija/[subpage]": {
            en: "/services/laser-eye-surgery/[subpage]",
            ru: "/uslugi/lazernaya-korrekciya-zreniya/[subpage]",
        },
        "/paslaugos/kataraktos-operacija": {
            en: "/services/cataract-surgery",
            ru: "/uslugi/udaleniye-katarakty",
        },
        "/paslaugos/kataraktos-operacija/[subpage]": {
            en: "/services/cataract-surgery/[subpage]",
            ru: "/uslugi/udaleniye-katarakty/[subpage]",
        },
        "/paslaugos/kataraktos-operacija/iq-life-3d": {
            en: "/services/cataract-surgery/iq-life-3d-live-vision",
            ru: "/uslugi/udaleniye-katarakty/iq-life-3d-zhivoye-zreniye",
        },
        "/akcijos": {
            en: "/offers",
            ru: "/akcii",
        },
        "/akiu-ligos": {
            en: "/eye-diseases",
            ru: "/glaznye-zabolevaniya",
        },
        "/kainos": {
            en: "/price-list",
            ru: "/ceny-na-uslugi",
        },
        "/informacija-pacientams": {
            en: "/patient-information",
            ru: "/informatsiya-dlya-patsiyentov",
        },
        "/apie-klinika": {
            en: "/our-clinic",
            ru: "/o-klinike",
        },
        "/atsiliepimai": {
            en: "/testimonials",
            ru: "/otzyvy",
        },
        "/kontaktai": {
            en: "/contacts",
            ru: "/kontakty",
        },
        "/rayner-galaxy-lt": {
            en: "/rayner-galaxy-a-new-dimension-of-vision-is-now-available-at-our-clinic",
            ru: "/rayner-galaxy-novoe-izmerenie-zreniya-uzhe-v-nashej-klinike",
        },
        "/gydytojai": {
            en: "/doctors",
            ru: "/vrachi",
        },
        "/gydytojai/[slug]": {
            en: "/doctors/[slug]",
            ru: "/vrachi/[slug]",
        },
        "/instructions-before-surgery": {
            en: "/instructions-before-surgery",
            ru: "/instructions-before-surgery",
        },
        "/instructions-after-laser-vision-correction": {
            en: "/instructions-after-laser-vision-correction",
            ru: "/instructions-after-laser-vision-correction",
        },
        "/akiu-ligos/glaukoma": {
            en: "/eye-diseases/glaucoma",
            ru: "/glaznye-zabolevaniya/glaukoma",
        },
        "/akiu-ligos/presbiopija": {
            en: "/eye-diseases/presbyopia",
            ru: "/glaznye-zabolevaniya/pryesbiopiya",
        },
        "/akiu-ligos/toliaregyste": {
            en: "/eye-diseases/farsightedness",
            ru: "/glaznye-zabolevaniya/dalnozorkost",
        },
        "/akiu-ligos/katarakta": {
            en: "/eye-diseases/cataract",
            ru: "/glaznye-zabolevaniya/katarakta",
        },
        "/akiu-ligos/akiu-ligu-simptomai": {
            en: "/eye-diseases/symptoms-of-eye-disease",
            ru: "/glaznye-zabolevaniya/simptomy-zabolevaniya-glaz",
        },
        "/akiu-ligos/zvairumas": {
            en: "/eye-diseases/strabismus",
            ru: "/glaznye-zabolevaniya/kosoglazie",
        },
        "/akiu-ligos/trumparegyste-miopija": {
            en: "/eye-diseases/nearsightedness-myopia",
            ru: "/glaznye-zabolevaniya/blizorukost-miopiya",
        },
        "/akiu-ligos/astigmatizmas": {
            en: "/eye-diseases/astigmatism",
            ru: "/glaznye-zabolevaniya/astigmatizm",
        },
        "/privatumo-politika": {
            en: "/privacy-policy",
            ru: "/politika-konfidenczialnosti",
        },
    },
});
