import { CataractGreenSection } from "../someServiceComponents/individualComponents/CataractGreenSection";
import { LansectomyGreenSection } from "../someServiceComponents/individualComponents/LansectomyGreenSection";
import { servicesList, ServicesListProps } from "./menu";

export type SectionType =
    | { type: "preview"; data: PreviewProps }
    | { type: "roundImageAndTextSection"; data: RoundBlock }
    | { type: "numberListSection"; data: NumberListProps }
    | { type: "methodsSection"; data: MethodsSectionProps }
    | { type: "greenSliderSection"; data: GreenSliderSectionProps }
    | { type: "advantages"; data: AdvantageServiceSectionProps }
    | { type: "cta"; data?: GreenCardType }
    | { type: "priceSection"; data: PriceSectionProps }
    | { type: "doctors" }
    | { type: "giftCTA" }
    | { type: "hero"; data: HeroSomeServiceProps }
    | { type: "faq"; data: FAQServiceSectionType }
    | { type: "textsColumns"; data: TextsColumnsSectionType }
    | { type: "global" }
    | { type: "individual"; data: React.ReactNode }
    | { type: "greenCard"; data: GreenCardType }
    | { type: "meta"; data: MetaType };

export type ServicesLocaleProps = {
    textMain?: string;
    sections?: SectionType[];
};

export type ServicesProps = {
    name: ServicesListProps;
    additionalIcon?: string;
    lt: ServicesLocaleProps;
    en: ServicesLocaleProps;
    ru: ServicesLocaleProps;
};

export type MetaType = {
    titleSEO: string;
    descriptionSEO: string;
};

export type PreviewProps = {
    fractionUp?: boolean;
    title: string;
    text?: string[];
    textUp?: string;
    textDown?: string;
    image?: string;
    cta?: boolean;
};

export type MethodCardProps = {
    image: string;
    link: string;
    title: string;
    text: string;
};
export type MethodsSectionProps = {
    title: string;
    text?: string;
    greenText?: string;
    list: MethodCardProps[];
};

export type RoundTextType = {
    greenText?: string;
    content?: TextType[];
};
export type BtnType = {
    btnName: string;
    btnLink: string;
    btnSecondary?: boolean;
};
export type RoundImageAndTextProps = {
    title: string;
    image?: string;
    cta?: boolean;
    logo?: boolean;
    imagePosition?: "object-left" | "object-right";
    text: RoundTextType[];
    btn?: BtnType[];
};

export type RoundBlock = {
    firstImageLeft?: boolean;
    paddingTop?: boolean;
    paddingBottom?: boolean;
    data: RoundImageAndTextProps[];
};

export type NumberListItemType = {
    itemTitle: string;
    itemText: string[];
    list?: boolean;
};
export type PDFType = {
    title: string;
    description?: string;
    link: string;
    btnName: string;
    downloadingName: string;
};

export type NumberListProps = {
    paddingTop?: boolean;
    paddingBottom?: boolean;
    image?: string;
    title?: string;
    text?: string[];
    listTitle: string;
    list: NumberListItemType[];
    pdfCard?: PDFType;
};
export type TitleTextType = { title: string; text: string };

export type GreenSliderSectionProps = {
    paddingTop?: boolean;
    paddingBottom?: boolean;
    title: string;
    text: string;
    btn?: BtnType;
    slider: TitleTextType[];
};

export type AdvantageServiceCardProps =
    | {
          title: string;
          text: string;
          bgTransparent?: boolean;
          imageOnly?: never;
          videoOnly?: never;
      }
    | {
          imageOnly: string;
          title?: never;
          text?: never;
          bgTransparent?: never;
          videoOnly?: never;
      }
    | {
          videoOnly: string;
          title?: never;
          text?: never;
          bgTransparent?: never;
          imageOnly?: never;
      };

export type AdvantageServiceSectionProps = {
    paddingTop?: boolean;
    paddingBottom?: boolean;
    title: string;
    text: string;
    list: AdvantageServiceCardProps[];
};

export type PriceSectionProps = {
    title: string;
};

export type HeroSomeServiceProps = {
    title: string;
    text?: string;
    videoSmallScreens?: string;
    videoBigScreens?: string;
    image?: string;
    adress?: boolean;
    adressDarkBG?: boolean;
    imgPositionMobile?: string; // наприклад: "calc(50% - 80px) top"
    imgPositionDesktop?: string;
    cataract?: string[];
    lazer?: { listTitle: string; list: string[] };
};

export type ParagraphContent = {
    type: "text";
    text: string | TextSegment[];
    gap?: boolean;
};

export type ListContent = {
    type: "list";
    list: (string | TextSegment[])[];
    gap?: boolean;
    numeric?: boolean;
};

export type ImageContent = {
    type: "image";
    gap?: boolean;
    maxH?: string;
    image: string;
};

export type ComponentContent = {
    type: "component";
    component: React.ReactNode;
    gap?: boolean;
};

export type TableContent = {
    type: "table";
    lowrcaseHeaders?: boolean;
    gap?: boolean;
    headers: string[];
    rows: string[][];
};

export type TextType =
    | ParagraphContent
    | ListContent
    | ImageContent
    | ComponentContent
    | TableContent;

export type TextSegment = {
    value: string;
    bold?: boolean;
    link?: string;
    subtitle?: boolean;
};

export type BlockType = {
    title: string;
    text: TextType[];
};

export type TextsColumnsSectionType = {
    title: string;
    text?: string;
    paddingTop?: boolean;
    blocks: BlockType[];
};

export type FAQServiceListType = {
    question: string;
    answer: TextType[];
};

export type FAQServiceSectionType = {
    title: string;
    content: FAQServiceListType[];
};

export type GreenCardType = {
    title: string;
    text: string;
    bigText?: boolean;
    paddingTop?: boolean;
    paddingBottom?: boolean;
};

export const servicesData: ServicesProps[] = [
    {
        name: servicesList.find(s => s.key === "akiu-patikrinimas")!,
        lt: {
            textMain:
                "Комплексне обстеження та перевірка зору з використанням сучасного обладнання.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Akių tikrinimas (akių patikra) – regėjimo patikrinimas Vilniuje, kompiuterinė regos diagnostika | Naujas Regėjimas",
                        descriptionSEO:
                            "Pasitikrinkite regėjimą Vilniuje – regos sutrikimų nustatymas su modernia diagnostika. ✅ Kompiuterinė akių patikra suaugusiems už palankią kainą. 👍 Laiko patikrinta reputacija",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "Regėjimo diagnostika",
                        text: "Mūsų klinikoje Vilniuje regėjimo patikrinimas apima išplėstinę akių patikrą: papildomai atliekama kompiuterinė regėjimo diagnostika, lazerinis akių tyrimas ir taikomi tradiciniai regos vertinimo metodai.",
                        image: "/images/perevirka-zoru-hero.jpg",
                        imgPositionDesktop: "right -200px top -140px",
                    },
                },
                {
                    type: "preview",
                    data: {
                        fractionUp: true,
                        title: "Šiuolaikinis regėjimo ištyrimas pagal ES standartus",
                        text: [
                            "Šiuolaikinė akių diagnostika mūsų centre atliekama naudojant didelio tikslumo skaitmeninę įrangą, atitinkančią Europos Sąjungos reikalavimus ir klinikinius protokolus. Tokia kompiuterinė regėjimo patikra leidžia gauti objektyvius duomenis apie regos sistemą, atlikti išsamią diagnostinę akių apžiūrą ir parinkti veiksmingiausią gydymą – tiek chirurginį, tiek konservatyvų.",
                            "Tyrimų rezultatų interpretaciją atlieka aukščiausios kvalifikacijos gydytojas oftalmologas. Konsultacijos metu specialistas aiškiai paaiškina išvadas, galimus apribojimus, galimas nepageidaujamas reakcijas ir skirtingų gydymo variantų privalumus, kad pacientas tiksliai suprastų diagnozę, regos sutrikimų nustatymo metodus ir kokie korekcijos sprendimai jam bus optimaliausi.",
                        ],
                        image: "/images/perevirka-zoru-preview.jpg",
                        textUp: "5 mln",
                        textDown: "konsultacijų \natlikta",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: false,
                        paddingBottom: false,
                        data: [
                            {
                                title: "Išsami regėjimo diagnostika apima",
                                image: "/images/perevirka-round.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Išsami regėjimo diagnostika – tai kompleksiniai akių sveikatos tyrimai, kurių metu ne tik įvertiname regėjimo aštrumą, bet ir detaliai įvertiname visų akies struktūrų būklę. Kompiuterinė regėjimo diagnostika apima:",
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Akių parametrų matavimą skaitmeniniais prietaisais. Toks kompiuterinis akių ištyrimas leidžia įvertinti refrakciją, ragenos kreivumą, akies ilgį ir kitus svarbius rodiklius.",
                                                    "Medicininės dokumentacijos analizę. Gydytojas atidžiai peržiūri ankstesnių apžiūrų ir gydymo duomenis, kad įvertintų regėjimo būklės pokyčius dinamikoje.",
                                                    "Specializuotus diagnostinius testus kiekvienai akiai atskirai ir kombinuotu režimu. Toks diagnostinis akių tyrimas padeda nustatyti net ir paslėptus sutrikimus.",
                                                    "Mikroskopinį akies anatominių struktūrų įvertinimą. Naudojamas didelis didinimas kruopščiam ragenos, lęšiuko, rainelės ir kitų struktūrų įvertinimui.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                text: "Visas ištyrimo procesas vyksta tausojančiu, pacientui komfortišku režimu, dažniausiai bekontakčiu būdu, todėl tinka tiek suaugusiesiems, tiek vaikams. Remiantis pacientų atsiliepimais, tokia kompiuterinė akių patikra yra vienas geriausių būdų greitai ir neskausmingai patikrinti regėjimą.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Reguliarus regėjimo patikrinimas – ligų profilaktikos pagrindas",
                                image: "/images/perevirka1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Reguliarus akių patikrinimas – tai ne tik galimybė pasitikrinti akis, bet ir svarbi daugelio ligų profilaktikos dalis. Apžiūros metu gydytojas oftalmologas gali pastebėti tinklainės kraujagyslių pokyčius, kurie atspindi širdies ir kraujagyslių sistemos būklę, nustatyti ankstyvus diabeto, hipertenzijos ir kitų sisteminių patologijų požymius. Todėl periodinė regėjimo patikra svarbi net ir nesant nusiskundimų.",
                                            },
                                            {
                                                type: "text",
                                                text: "Daugelis sutrikimų vystosi nepastebimai, be simptomų, ir tik kompleksinis regėjimo patikrinimas leidžia laiku diagnozuoti patologiją.",
                                            },
                                        ],
                                    },
                                    {
                                        greenText:
                                            "Optimali apsilankymo pas akių ligų gydytojus dažnis – kartą per metus. Ši taisyklė aktuali net tiems, kurie nejaučia regėjimo problemų. Profilaktika visada veiksmingesnė už gydymą – ypač kalbant apie akis.",
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: true,
                        paddingBottom: true,
                        image: "/images/choice.jpg",
                        title: "Kompiuterinė regėjimo diagnostika: kam ji reikalinga ir kaip atliekama",
                        text: [
                            "Prieš pasirenkant korekcijos metodą – akinius, kontaktinius lęšius ar lazerinį gydymą – svarbu atlikti išsamų kompiuterinį akių ištyrimą.",
                            "Kompiuterinė regėjimo diagnostika – tai šiuolaikinis, tausojantis ir itin informatyvus regėjimo tikrinimas, leidžiantis tiksliai nustatyti akies parametrus be skausmo ir diskomforto.",
                        ],
                        listTitle:
                            "Kaip atliekama kompiuterinė regėjimo diagnostika",
                        list: [
                            {
                                itemTitle:
                                    "Registracija ir pasiruošimas diagnostikai",
                                itemText: [
                                    "Užsiregistruoti regėjimo patikrinimui galima telefonu arba internetu – tai užtrunka vos kelias minutes. Jei nešiojate minkštuosius kontaktinius lęšius, rekomenduojama juos išsiimti likus 12 valandų iki tyrimo. Atsineškite akinius, ankstesnes išvadas ir tyrimų rezultatus, kad gydytojas galėtų įvertinti pokyčius dinamikoje. Pageidautina neplanuoti vairavimo, nes po lašų, plečiančių vyzdžius, gali pasireikšti trumpalaikis regėjimo diskomfortas.",
                                ],
                            },
                            {
                                itemTitle: "Kompiuterinė regėjimo diagnostika",
                                itemText: [
                                    "Pats ištyrimas atliekamas naujausiais prietaisais ir apima kompleksinę akių patikrą: akispūdžio matavimą, ragenos analizę, refrakcijos įvertinimą ir akių dugno būklės įvertinimą. Visos apžiūros trukmė vidutiniškai siekia 2–2,5 val. Vienas svarbiausių etapų – regėjimo aštrumo patikrinimas pagal lenteles, leidžiantis tiksliai parinkti optiką.",
                                    "Jei reikia, gydytojas naudoja vyzdžius plečiančius lašus, kad detaliai įvertintų akių dugną ir atmestų paslėptas ligas. Toks kompleksinis regėjimo patikrinimas ir lazerinis akių tyrimas, taikant šiuolaikines vizualizacijos sistemas, užtikrina maksimalų diagnostikos tikslumą.",
                                ],
                            },
                            {
                                itemTitle: "Išvada pagal tyrimų rezultatus",
                                itemText: [
                                    "Po akių patikros pacientas gauna oficialų protokolą su rezultatais: regėjimo parametrais, akispūdžio duomenimis, ragenos ir akių dugno būkle. Konsultacijos metu gydytojas oftalmologas išsamiai paaiškina rezultatus ir pateikia rekomendacijas dėl gydymo, profilaktikos ar pasiruošimo operacijai.",
                                    "Aptariami kiekvieno metodo privalumai ir trūkumai, kontraindikacijos bei galimos nepageidaujamos reakcijos, kad galėtumėte priimti pagrįstą sprendimą.",
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Kompleksinė akių patikra: kokie \ntestai atliekami",
                        text: "Išsamios akių diagnostikos metu taikomi įvairūs regėjimo patikrinimo metodai ir kompiuterinė diagnostika:",
                        btn: {
                            btnName: "susitarti dėl susitikimo",
                            btnLink: "#booking",
                        },
                        slider: [
                            {
                                title: "Viziometrija",
                                text: "Regėjimo aštrumo patikrinimas į tolį ir iš arti pagal specialias lenteles. Tai bazinis regėjimo tikrinimas, nuo kurio pradedamas bet koks ištyrimas.",
                            },
                            {
                                title: "Tonometria",
                                text: "Akispūdžio matavimas ankstyvam glaukomos nustatymui.",
                            },
                            {
                                title: "Refraktometrija",
                                text: "Automatinis akies lūžio galios nustatymas, padedantis tiksliai įvertinti trumparegystę, toliaregystę ir astigmatizmą.",
                            },
                            {
                                title: "Biometrija",
                                text: "Bekontaktis kompiuterinis akių ištyrimas, matuojant akies obuolio ilgį, priekinės kameros gylį ir lęšiuko storį – ypač svarbu prieš operacijas ir parenkant intraokulinį lęšį.",
                            },
                            {
                                title: "Pachimetrija",
                                text: "Ragenos storio nustatymas šviesiniu arba ultragarsiniu metodu; būtina prieš lazerinį akių tyrimą ir refrakcinę chirurgiją.",
                            },
                            {
                                title: "Keratotopografija",
                                text: "Ragenos formos ir kreivumo įvertinimas, padedantis diagnozuoti keratokonusą ir kitas patologijas.",
                            },
                            {
                                title: "Kinetinė perimetrija",
                                text: "Regėjimo lauko tyrimas, reikalingas sergant glaukoma, esant regos nervo pažeidimams ar tinklainės patologijoms.",
                            },
                            {
                                title: "Biomikroskopija",
                                text: "Priekinio akies segmento apžiūra plyšine lempa, naudojant didelį didinimą.",
                            },
                            {
                                title: "Akių dugno apžiūra su funduso lęšiu",
                                text: "Išsamus tinklainės, geltonosios dėmės ir kraujagyslių įvertinimas.",
                            },
                            {
                                title: "Dioptrimetrija",
                                text: "Jau naudojamų akinių parametrų nustatymas, siekiant patikrinti, ar jie parinkti teisingai.",
                            },
                        ],
                    },
                },
                {
                    type: "advantages",
                    data: {
                        title: "Kompiuterinio akių ištyrimo privalumai",
                        text: "Mūsų oftalmologijos klinikoje Vilniuje regėjimo diagnostika atliekama taikant pažangias technologijas ir ES standartus atitinkančią, sertifikuotą įrangą.",
                        list: [
                            {
                                title: "Tikslus diagnozės nustatymas",
                                text: "Skaitmeniniai metodai sumažina paklaidų tikimybę ir leidžia įvertinti visus pagrindinius akies parametrus.",
                            },
                            {
                                title: "Kompleksinis požiūris",
                                text: "Kompiuterinė regėjimo patikra apjungia klasikinius testus ir, prireikus, lazerinį akių tyrimą.",
                            },
                            { videoOnly: "/videos/about-advant.mp4" },
                            {
                                title: "Individualus gydymo planas",
                                text: "Remiantis išsamios akių diagnostikos rezultatais, gydytojas parenka optimalų gydymo planą – nuo konservatyvių metodų iki lazerinės korekcijos ar chirurginio gydymo.",
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Konsultacijos ir regos diagnostikos kainos Vilniuje",
                    },
                },
                { type: "giftCTA" },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Dažniausiai užduodami klausimai apie regėjimo patikrinimą",
                        content: [
                            {
                                question:
                                    "Kaip suprasti, kad man reikalingas regėjimo patikrinimas?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Reguliarus akių patikrinimas rekomenduojamas net ir nesant nusiskundimų. Jei jaučiate akių nuovargį, neryškų matymą, „rūką“, ašarojimą, galvos skausmus ar daug dirbate kompiuteriu, verta užsiregistruoti kompleksinei akių patikrai. Mūsų klinikoje regėjimo patikrinimas apima regėjimo aštrumo įvertinimą, kompiuterinę diagnostiką ir akių dugno apžiūrą, kad pokyčiai būtų nustatyti laiku ir parinktas tinkamas gydymas.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kas įeina į kompleksinę regėjimo patikrą ir išsamią akių diagnostiką?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Kompleksinė regėjimo patikra ir išsami akių diagnostika apima viziometriją (regėjimo aštrumo patikrinimą), tonometriją, refraktometriją, kompiuterinį akių ištyrimą, akių dugno apžiūrą ir biomikroskopiją. Toks diagnostinis akių tyrimas leidžia ne tik patikrinti regėjimą, bet ir nustatyti paslėptas ligas bei parinkti veiksmingiausią gydymo metodą.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kuo skiriasi kompiuterinė regėjimo patikra nuo įprasto patikrinimo pagal lentelę?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Patikrinimas pagal lentelę parodo, kaip gerai matote į tolį ar iš arti. Kompiuterinė regėjimo patikra ir akių diagnostika pateikia tikslius skaitmeninius duomenis apie refrakciją, ragenos kreivumą ir kitus parametrus. Tai padeda tiksliau parinkti akinius ar lęšius ir įvertinti, ar reikalinga lazerinė diagnostika arba chirurginis gydymas.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Ar akių patikra yra skausminga? Ar būna šalutinių poveikių?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Kompleksinė akių patikra ir kompiuterinė regėjimo diagnostika atliekamos neskausmingai ir dažniausiai bekontakčiu būdu. Kartais naudojami vyzdžius plečiantys lašai – trumpam gali suprastėti matymas iš arti, tačiau tai normali reakcija. Rimti nepageidaujami poveikiai pasitaiko itin retai; kontraindikacijas konsultacijos metu įvertina gydytojas. Regėjimo patikrinimas mūsų klinikoje atitinka europinius saugumo standartus.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kiek kainuoja regėjimo patikrinimas?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Regėjimo tikrinimo kaina priklauso nuo apžiūros apimties: bazinė patikra, kompleksinis akių ištyrimas ar išplėstinė kompiuterinė diagnostika. Kainodara yra skaidri – detalią informaciją galite sužinoti registratūroje arba registruojantis internetu. Periodiškai gali būti taikomos akcijos, o kai kurios atrankinės patikros ar konsultacijos – teikiamos pagal specialius pasiūlymus.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Ar po akių diagnostikos galima iš karto pradėti gydymą?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Taip. Baigus akių diagnostiką ir įvertinus rezultatus, gausite rekomendacijas ir gydymo planą. Prireikus bus pasiūlytas konservatyvus gydymas, korekcija akiniais ar lęšiais, lazerinė diagnostika prieš operaciją arba chirurginis gydymas. Konsultacijos metu gydytojas paaiškins kiekvieno metodo privalumus ir galimus trūkumus, kad sprendimą priimtumėte sąmoningai.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kur geriau tikrintis regėjimą: optikoje ar oftalmologijos klinikoje?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Jei reikia tik atnaujinti akinių stiprumą, bazinį regėjimo aštrumo patikrinimą galima atlikti optikoje. Tačiau išsamesnei akių diagnostikai, kompiuteriniam akių ištyrimui, akių dugno apžiūrai ir gydymo parinkimui saugiau kreiptis į specializuotą kliniką. Mūsų centre yra visa reikalinga įranga kompleksinei diagnostikai, o pacientų atsiliepimai patvirtina paslaugų kokybę.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Ar kompiuterinė regėjimo diagnostika tinka visiems? Ar yra kontraindikacijų?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Kompiuterinė regėjimo diagnostika tinka daugumai pacientų: suaugusiesiems, paaugliams, asmenims po operacijų. Gydytojas įvertina gretutines ligas, nėštumą, vartojamus vaistus ir galimas kontraindikacijas lazerinei diagnostikai ar chirurgijai. Jei yra apribojimų, specialistas pasiūlys alternatyvius regos patikros metodus ir saugų gydymą. Todėl svarbu ne tik atlikti regėjimo patikrinimą, bet ir gauti profesionalią akių ligų gydytojo konsultaciją, įskaitant situacijas, kai įtariama trumparegystė vaikui.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        en: {
            textMain:
                "Comprehensive examination and vision test using modern equipment.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Computerized Vision Diagnostics in Vilnius. Eye Examination and Diagnostics | Vision Testing Center – New Vision Clinic",
                        descriptionSEO:
                            "Vision diagnostics center. Comprehensive eye examination at New Vision Clinic. ✅ Modern and complete vision diagnostics with effective treatment. 👍 A reputation proven over time",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "Vision Diagnostics",
                        text: "At our clinic in Vilnius, a vision check includes an expanded eye examination, including computer-based vision diagnostics, laser eye assessment, and traditional methods of evaluating visual function.",
                        image: "/images/perevirka-zoru-hero.jpg",
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "Modern vision examination according to EU standards",
                        text: [
                            "Modern eye diagnostics at our centre are performed using high-precision digital equipment that complies with the requirements and clinical protocols of the European Union. This computer-based vision assessment provides objective data on the visual system, enables a comprehensive diagnostic eye examination, and supports the selection of the most effective treatment plan—both surgical and conservative.",
                            "The interpretation of results is provided by a highly qualified ophthalmologist. During the consultation, the specialist explains the findings, potential limitations, possible adverse reactions, and the advantages of different therapeutic options in a clear manner so that the patient fully understands the diagnosis, the methods used for identifying visual disturbances, and which correction options are most appropriate in their specific case.",
                        ],
                        image: "/images/perevirka-zoru-preview.jpg",
                        textUp: "5 m",
                        textDown: "consultations \nheld",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: false,
                        paddingBottom: false,
                        data: [
                            {
                                title: "Comprehensive vision diagnostics include",
                                image: "/images/perevirka-round.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Comprehensive vision diagnostics are a set of eye health examinations in which we not only assess visual acuity but also carefully evaluate the condition of all ocular structures. Computer-based vision diagnostics include:",
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Measurement of ocular parameters using digital instruments. This computer-based eye examination allows assessment of refraction, corneal curvature, axial length, and other key indicators.",
                                                    "Review of medical documentation. The physician carefully analyses previous examinations and treatments to evaluate changes in vision over time.",
                                                    "Specialised diagnostic tests for each eye separately and in combined mode. This diagnostic eye assessment helps identify even subtle or hidden disorders.",
                                                    "Microscopic evaluation of anatomical ocular structures. High magnification is used for a thorough assessment of the cornea, lens, iris, and other structures.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                text: "The entire examination is conducted in a gentle, patient-friendly manner, predominantly non-contact, and is suitable for both adults and children. According to patient feedback, such computer-based vision diagnostics are among the best ways to check vision quickly and without pain.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Regular vision checks are the basis of disease prevention",
                                image: "/images/perevirka1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Regular eye checks are not only an opportunity to test vision, but an important part of preventing many conditions. During the examination, an ophthalmologist may detect changes in retinal vessels that reflect cardiovascular health, identify early signs of diabetes, hypertension, and other systemic conditions. Therefore, periodic eye diagnostics are important even in the absence of complaints.",
                                            },
                                            {
                                                type: "text",
                                                text: "Many disorders develop imperceptibly, without symptoms, and only a comprehensive vision examination enables timely identification of pathology.",
                                            },
                                        ],
                                    },
                                    {
                                        greenText:
                                            "The optimal frequency of an ophthalmology visit is once per year. This rule applies even to those who do not experience vision problems. Prevention is always more effective than treatment—especially when it comes to the eyes.",
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: true,
                        paddingBottom: true,
                        image: "/images/choice.jpg",
                        title: "Computer-based vision diagnostics: why it is performed and how the procedure is carried out",
                        text: [
                            "Before choosing a correction method—glasses, contact lenses, or laser treatment—it is important to undergo a detailed computer-based eye examination.",
                            "Computer-based vision diagnostics is a modern, gentle, and highly informative way to check vision, allowing precise assessment of ocular parameters without pain or discomfort.",
                        ],
                        listTitle:
                            "How computer-based vision diagnostics is performed",
                        list: [
                            {
                                itemTitle:
                                    "Appointment booking and preparation",
                                itemText: [
                                    "You can book a vision check by phone or online in just a few minutes. If you wear soft contact lenses, it is recommended to remove them 12 hours before the examination. Please bring your glasses, previous conclusions, and test results so that the physician can assess changes over time. It is advisable not to drive, as eye drops used to dilate pupils may cause temporary visual discomfort.",
                                ],
                            },
                            {
                                itemTitle: "Computer-based vision diagnostics",
                                itemText: [
                                    "The examination is performed using the latest devices and includes a comprehensive vision assessment: measurement of intraocular pressure, corneal analysis, refraction assessment, and evaluation of the ocular fundus. The full examination typically takes 2–2.5 hours. One of the key stages is checking visual acuity using charts, which helps accurately prescribe optical correction.",
                                    "If necessary, the physician uses pupil-dilating drops to thoroughly evaluate the ocular fundus and rule out hidden conditions. This comprehensive vision check and laser eye assessment using modern visualisation systems ensure maximum diagnostic accuracy.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Clinical conclusion based on examination results",
                                itemText: [
                                    "After the eye examination, the patient receives an official report with results: vision parameters, intraocular pressure data, and the condition of the cornea and ocular fundus. During the consultation, the ophthalmologist explains the results in detail and provides recommendations regarding treatment, prevention, or preparation for surgery.",
                                    "The advantages and disadvantages of each method, contraindications, and potential adverse effects are discussed so that you can make an informed decision.",
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Comprehensive vision examination: which \ntests are performed",
                        text: "During a full eye assessment, various vision-check methods and computer-based diagnostics are used:",
                        btn: {
                            btnName: "book an appointment",
                            btnLink: "#booking",
                        },
                        slider: [
                            {
                                title: "Visiometry",
                                text: "Assessment of distance and near visual acuity using standard charts. This is the basic vision check that starts any examination.",
                            },
                            {
                                title: "Tonometry",
                                text: "Measurement of intraocular pressure for early detection of glaucoma.",
                            },
                            {
                                title: "Refractometry",
                                text: "Automated determination of the eye’s refractive power, enabling accurate assessment of myopia, hyperopia, and astigmatism.",
                            },
                            {
                                title: "Biometry",
                                text: "Non-contact computer-based eye assessment measuring axial length, anterior chamber depth, and lens thickness—particularly important before surgery and when selecting an intraocular lens.",
                            },
                            {
                                title: "Pachymetry",
                                text: "Measurement of corneal thickness using optical or ultrasound methods; required before laser eye assessment and refractive surgery.",
                            },
                            {
                                title: "Corneal topography",
                                text: "Assessment of corneal shape and curvature, supporting the diagnosis of keratoconus and other conditions.",
                            },
                            {
                                title: "Kinetic perimetry",
                                text: "Visual field testing required for glaucoma, optic nerve damage, and retinal pathologies.",
                            },
                            {
                                title: "Biomicroscopy",
                                text: "Examination of the anterior segment using a slit lamp with high magnification.",
                            },
                            {
                                title: "Fundus examination with a fundus lens",
                                text: "Detailed assessment of the retina, macula, and vessels.",
                            },
                            {
                                title: "Lensmeter (dioptometry)",
                                text: "Assessment of the parameters of glasses already used by the patient to confirm they are prescribed correctly.",
                            },
                        ],
                    },
                },
                {
                    type: "advantages",
                    data: {
                        title: "Advantages of computer-based eye examinations",
                        text: "At our ophthalmology clinic in Vilnius, diagnostics are performed using advanced technologies and EU-certified equipment.",
                        list: [
                            {
                                title: "accurate diagnosis",
                                text: "Digital methods minimise the likelihood of errors and allow assessment of all key ocular parameters.",
                            },
                            {
                                title: "comprehensive approach",
                                text: "Computer-based vision checks combine classical tests and, when necessary, laser eye assessment.",
                            },
                            { videoOnly: "/videos/about-advant.mp4" },
                            {
                                title: "Individualised treatment",
                                text: "Based on comprehensive eye diagnostics, the physician proposes an optimal treatment plan—from conservative methods to laser correction or surgery.",
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for consultation and vision diagnostics in Vilnius",
                    },
                },
                { type: "giftCTA" },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about vision checks",
                        content: [
                            {
                                question:
                                    "How do I know I need a vision check?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Regular vision checks are recommended even without complaints. If you experience eye fatigue, blurred vision, “fog”, tearing, headaches, or spend significant time at a computer, it is advisable to book a comprehensive eye examination. At our clinic, vision checks include visual acuity assessment, computer-based diagnostics, and fundus examination to identify changes in time and select appropriate treatment.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What is included in a comprehensive vision check and full eye diagnostics?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "A comprehensive vision check and full eye diagnostics include visiometry (visual acuity assessment), tonometry, refractometry, computer-based eye examination, fundus assessment, and biomicroscopy. Such a comprehensive examination not only checks vision but also identifies hidden conditions and determines the most effective treatment approach.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How does a computer-based vision check differ from a standard chart test?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "A chart test shows how well you see at distance or near. Computer-based vision checks and diagnostics provide precise digital data about refraction, corneal curvature, and other parameters. This helps prescribe glasses or lenses more accurately and assess whether laser diagnostics or surgical treatment may be appropriate.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Is an eye examination painful? Are there any side effects?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Comprehensive eye examinations and computer-based diagnostics are painless and predominantly non-contact. In some cases, pupil-dilating drops are used; near vision may temporarily worsen, which is a normal reaction. Serious adverse effects are extremely rare; contraindications are assessed by the physician during consultation. Vision checks at our clinic comply with European safety standards.",
                                    },
                                ],
                            },
                            {
                                question: "How much does a vision check cost?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The cost of a vision check depends on the scope of examination: basic testing, a comprehensive eye examination, or expanded computer-based diagnostics. Pricing is transparent—details can be clarified at reception or during online booking. From time to time, promotions may be available, and some screening checks or consultations may be provided under special offers.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Can I start treatment immediately after eye diagnostics?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes. After the examination and interpretation of results, you will receive recommendations and a treatment plan. If necessary, conservative treatment, correction with glasses or lenses, laser diagnostics before surgery, or surgical intervention may be proposed. During consultation, the physician explains the benefits and potential disadvantages of each option so that you can make an informed decision.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Where is it better to check vision: at an optician or at an ophthalmology clinic?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "If you simply need to update glasses, a basic visual acuity check can be performed at an optician. However, for full eye diagnostics, computer-based examination, fundus assessment, and treatment selection, it is safer to consult a specialised clinic. Our centre has all the necessary equipment for comprehensive diagnostics, and patient feedback confirms the quality of our services.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Can everyone undergo a computer-based eye examination? Are there any contraindications?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Computer-based diagnostics are suitable for most patients: adults, adolescents, and individuals after surgery. The physician considers comorbidities, pregnancy, medications, and possible contraindications to laser diagnostics or surgery. If limitations exist, the specialist will propose alternative methods and safe treatment. Therefore, it is important not only to check vision, but also to receive professional consultation—including cases where myopia is suspected in a child.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        ru: {
            textMain:
                "Комплексное обследование и проверка зрения с использованием современного оборудования.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Компьютерная диагностика зрения в Вильнюсе. Обследование и диагностика глаз | Центр проверки зрения - Клиника Новое Зрение",
                        descriptionSEO:
                            "Центр диагностики зрения. Комплексное обследование глаз в клинике - Новое Зрение. ✅ Современная и полная диагностика зрения и эффективное лечение. 👍 Репутация, проверенная временем",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "диагностика зрения",
                        text: "В нашей клинике в Вильнюсе проверка зрения включает расширенное обследование, дополнительно компьютерную диагностику зрения, лазерное исследование глаз и традиционные методы оценки зрения.",
                        image: "/images/perevirka-zoru-hero.jpg",
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "Современное обследование зрения по стандартам ЕС",
                        text: [
                            "Современное обследование зрения в нашем центре выполняется на высокоточном цифровом оборудовании, которое соответствует требованиям и клиническим протоколам Европейского Союза. Такая компьютерная проверка зрения помогает получить объективные данные о состоянии зрительной системы, провести полную диагностику глаз и подобрать наиболее результативное лечение — как хирургическое, так и консервативное.",
                            "Интерпретацией результатов занимается врач-офтальмолог высшей квалификационной категории. Во время консультации специалиста все выводы, ограничения, возможные побочные реакции и преимущества разных вариантов терапии объясняются доступно, чтобы пациент чётко понимал диагноз, методы проверки зрения и какие способы коррекции будут оптимальными именно в его случае.",
                        ],
                        image: "/images/perevirka-zoru-preview.jpg",
                        textUp: "5 млн",
                        textDown: "консультаций \nпроведено",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: false,
                        paddingBottom: false,
                        data: [
                            {
                                title: "Полная диагностика зрения включает",
                                image: "/images/perevirka-round.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Полная диагностика зрения — это комплексное обследование, при котором мы не только проверяем остроту зрения, но и детально оцениваем состояние всех структур глаза. Компьютерная диагностика зрения включает:",
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Измерение параметров глаза на цифровых приборах. Такое компьютерное обследование позволяет оценить рефракцию, кривизну роговицы, длину глаза и другие важные показатели.",
                                                    "Анализ медицинской документации. Врач внимательно изучает предыдущие осмотры и лечение, чтобы сравнить состояние зрения в динамике.",
                                                    "Специализированные диагностические тесты для каждого глаза отдельно и в комбинированном режиме. Такое комплексное обследование помогает выявить даже скрытые нарушения.",
                                                    "Микроскопический осмотр анатомических структур глаза. Используется выраженное увеличение для тщательного исследования роговицы, хрусталика, радужки и других структур.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                text: "Весь процесс обследования проходит в щадящем, комфортном режиме, в основном бесконтактно, подходит как взрослым, так и детям. По отзывам пациентов, такая компьютерная диагностика зрения является одним из лучших способов быстро и безболезненно проверить зрение.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Регулярная проверка зрения — основа профилактики заболеваний",
                                image: "/images/perevirka1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Регулярная проверка зрения — это не просто возможность проверить глаза, а важная часть профилактики многих заболеваний. Во время обследования офтальмолог может заметить изменения в сосудах сетчатки, которые отражают состояние сердечно-сосудистой системы, выявить ранние признаки диабета, гипертонии и других системных патологий. Поэтому периодическая диагностика глаз важна даже при отсутствии жалоб.",
                                            },
                                            {
                                                type: "text",
                                                text: "Многие нарушения развиваются незаметно, без симптомов, и только комплексная проверка зрения позволяет вовремя диагностировать патологию.",
                                            },
                                        ],
                                    },
                                    {
                                        greenText:
                                            "Оптимальная частота посещения офтальмолога — один раз в год. Это правило актуально даже для тех, у кого нет проблем со зрением. Профилактика всегда эффективнее лечения — особенно когда речь идёт о глазах.",
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: true,
                        paddingBottom: true,
                        image: "/images/choice.jpg",
                        title: "Компьютерная диагностика зрения: зачем проводится и как проходит процедура",
                        text: [
                            "Перед выбором метода коррекции — очки, линзы или лазерное лечение — важно пройти детальное компьютерное обследование глаз.",
                            "Компьютерная диагностика зрения — это современный, щадящий и очень информативный способ проверки зрения, позволяющий уточнить все параметры глаза без боли и дискомфорта.",
                        ],
                        listTitle:
                            "Как проходит компьютерная диагностика зрения",
                        list: [
                            {
                                itemTitle:
                                    "Запись на прием и подготовка к диагностике",
                                itemText: [
                                    "Записаться на диагностику зрения можно по телефону или онлайн — это занимает несколько минут. Если вы носите мягкие контактные линзы, рекомендуется снять их за 12 часов до обследования. Возьмите с собой очки, предыдущие заключения и результаты обследований, чтобы врач мог оценить динамику. Желательно не управлять автомобилем, так как после закапывания капель для расширения зрачков возможен кратковременный дискомфорт зрения.",
                                ],
                            },
                            {
                                itemTitle: "Компьютерная диагностика зрения",
                                itemText: [
                                    "Само обследование проводится на новейших приборах и включает комплексное обследование зрения: измерение внутриглазного давления, анализ роговицы, рефракции и состояния глазного дна. Продолжительность полного обследования в среднем составляет 2–2,5 часа. Одним из ключевых этапов является проверка остроты зрения по таблицам, что позволяет точно подобрать оптику.",
                                    "При необходимости врач использует капли для расширения зрачков, чтобы детально проверить глазное дно и исключить скрытые заболевания. Такая комплексная проверка зрения и лазерное обследование глаз с применением современных систем визуализации обеспечивает максимальную точность диагностики.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Заключение по результатам обследования",
                                itemText: [
                                    "После обследования глаз пациент получает официальный протокол с результатами: параметры зрения, данные о внутриглазном давлении, состояние роговицы и глазного дна. На консультации врач-офтальмолог подробно объясняет результаты и даёт рекомендации по лечению, профилактике или подготовке к операции.",
                                    "Обсуждаются возможные преимущества и недостатки каждого метода, противопоказания и потенциальные побочные эффекты, чтобы вы могли принять взвешенное решение.",
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Комплексное обследование зрения: какие \nтесты проводят",
                        text: "Во время полной диагностики глаз применяются различные способы проверки зрения и компьютерная диагностика зрения:",
                        btn: {
                            btnName: "записаться на прием",
                            btnLink: "#booking",
                        },
                        slider: [
                            {
                                title: "Визиометрия",
                                text: "Проверка остроты зрения вдаль и вблизи с использованием специальных таблиц. Это базовая проверка зрения, с которой начинается любое обследование.",
                            },
                            {
                                title: "Тонометрия",
                                text: "Измерение внутриглазного давления для раннего выявления глаукомы.",
                            },
                            {
                                title: "Рефрактометрия",
                                text: "Автоматическое определение преломляющей силы глаза, позволяющее точно определить миопию, гиперметропию и астигматизм.",
                            },
                            {
                                title: "Биометрия",
                                text: "Бесконтактное компьютерное обследование глаз с измерением длины глазного яблока, глубины передней камеры и толщины хрусталика — особенно важно перед операциями и подбором интраокулярной линзы.",
                            },
                            {
                                title: "Пахиметрия",
                                text: "Определение толщины роговицы световым или ультразвуковым методом, обязательно перед лазерным обследованием глаз и рефракционной хирургией.",
                            },
                            {
                                title: "Кератотопография",
                                text: "Оценка формы и кривизны роговицы, что помогает диагностировать кератоконус и другие патологии.",
                            },
                            {
                                title: "Кинетическая периметрия",
                                text: "Исследование поля зрения, необходимое при глаукоме, поражении зрительного нерва и патологиях сетчатки.",
                            },
                            {
                                title: "Биомикроскопия",
                                text: "Осмотр переднего отдела глаза с помощью щелевой лампы с большим увеличением.",
                            },
                            {
                                title: "Осмотр глазного дна фундус-линзой",
                                text: "Детальное обследование сетчатки, макулы и сосудов.",
                            },
                            {
                                title: "Диоптриметрия",
                                text: "Определение параметров очков, которые уже использует пациент, чтобы убедиться в правильности их подбора.",
                            },
                        ],
                    },
                },
                {
                    type: "advantages",
                    data: {
                        title: "Преимущества компьютерного обследования глаз",
                        text: "В нашей офтальмологической клинике в Вильнюсе диагностика проводится с применением передовых технологий и оборудования, сертифицированного по стандартам ЕС.",
                        list: [
                            {
                                title: "точный диагноз",
                                text: "Цифровые методы минимизируют вероятность ошибок и позволяют определить все ключевые параметры глаза.",
                            },
                            {
                                title: "комплексный подход",
                                text: "Компьютерная проверка зрения объединяет классические тесты и, при необходимости, лазерное обследование глаз.",
                            },
                            { videoOnly: "/videos/about-advant.mp4" },
                            {
                                title: "индивидуальное лечение",
                                text: "На основе результатов полной диагностики глаз врач предлагает оптимальный план лечения — от консервативных методов до лазерной коррекции или хирургии.",
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на консультацию и диагностику зрения в Вильнюсе",
                    },
                },
                { type: "giftCTA" },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Частые вопросы о проверке зрения",
                        content: [
                            {
                                question:
                                    "Как понять, что мне нужна проверка зрения?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Регулярная проверка зрения нужна даже при отсутствии жалоб. Если вы чувствуете усталость глаз, размытое зрение, «туман», слезотечение, головные боли или работаете за компьютером, стоит записаться на комплексное обследование глаз. В нашей клинике проверка зрения включает проверку остроты зрения, компьютерную диагностику и осмотр глазного дна, чтобы вовремя выявить изменения и подобрать лечение.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Что входит в комплексную проверку зрения и полную диагностику глаз?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Комплексная проверка зрения и полная диагностика глаз включают визометрию (проверку остроты зрения), тонометрию, рефрактометрию, компьютерное обследование глаз, осмотр глазного дна и биомикроскопию. Такое комплексное обследование позволяет не только проверить зрение, но и выявить скрытые заболевания и определить наиболее эффективный метод лечения.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чем отличается компьютерная проверка зрения от обычной проверки по таблице?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Обычная проверка по таблице показывает, насколько хорошо вы видите вдаль или вблизи. Компьютерная проверка зрения и диагностика дают точные цифровые данные о рефракции, кривизне роговицы и других параметрах. Такое обследование помогает точнее подобрать очки или линзы и оценить, подходит ли вам лазерная диагностика или хирургическое лечение.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Больно ли проходить обследование глаз? Есть ли побочные эффекты?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Комплексное обследование глаз и компьютерная диагностика проводятся безболезненно и преимущественно бесконтактно. Иногда применяются капли для расширения зрачков — временно ухудшается зрение вблизи, но это нормальная реакция. Серьёзные побочные эффекты крайне редки, противопоказания оценивает врач на консультации. Проверка зрения в нашей клинике соответствует европейским стандартам безопасности.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько стоит проверить зрение? Какова стоимость диагностики?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Стоимость проверки зрения и диагностики зависит от объёма обследования: базовая проверка, комплексное обследование или расширенная компьютерная диагностика. Цены всегда прозрачны — уточнить детали можно на ресепшене или при онлайн-записи. Периодически действуют акции и скидки, а некоторые скрининговые осмотры или консультации могут проводиться бесплатно в рамках спецпредложений.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Можно ли сразу получить лечение после диагностики глаз?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да, после завершения обследования и интерпретации результатов вы получите рекомендации и план лечения. При необходимости будет предложено консервативное лечение, компьютерная коррекция, лазерная диагностика перед операцией или хирургическое вмешательство. На консультации врач объяснит преимущества и возможные недостатки каждого метода, чтобы вы могли принять осознанное решение.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Где лучше проверять зрение: в оптике или в офтальмологической клинике?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Если нужно просто обновить очки, базовую проверку остроты зрения можно пройти в оптике. Но для полной диагностики глаз, компьютерного обследования, осмотра глазного дна и подбора лечения безопаснее обратиться в профильную клинику. В нашем центре есть всё необходимое оборудование для комплексной диагностики, а отзывы пациентов подтверждают качество услуг.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Всем ли можно проходить компьютерное обследование глаз? Есть ли противопоказания?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Компьютерная диагностика подходит большинству пациентов: взрослым, подросткам, людям после операций. Врач учитывает сопутствующие заболевания, беременность, приём лекарств и возможные противопоказания к лазерной диагностике или хирургии. Если ограничения есть, специалист предложит альтернативные методы проверки и безопасное лечение. Поэтому важно не только проверить зрение, но и получить профессиональную консультацию врача.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        name: servicesList.find(s => s.key === "kataraktos-operacija")!,
        additionalIcon: "/icons/iq-life.svg",
        lt: {
            textMain:
                "Хірургічне лікування катаракти, косоокості, кератоконуса та інших офтальмологічних патологій.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Kataraktos operacija – kataraktos gydymas ir šalinimas lazeriu Vilniuje | Naujas Regėjimas",
                        descriptionSEO:
                            "Chirurginis kataraktos pašalinimas. Patikėkite kataraktos operaciją - Naujas Regėjimas klinikos profesionalams Vilniuje. ✅ Kataraktos šalinimas angliška vandens srove iQ – vos per 5 min. ✴️ Gydome sudėtingiausius atvejus.👍 Laiko patikrinta reputacija",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "Kataraktos gydymas",
                        image: "/images/cataract-hero.jpg",
                        imgPositionMobile: "right 20% center",
                        adress: true,
                        adressDarkBG: true,
                        cataract: [
                            "trauminė katarakta",
                            "koreguojame nesėkmingų operacijų kitose klinikose pasekmes",
                            "imamės iš tiesų sudėtingų klinikinių atvejų",
                        ],
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "Kataraktos gydymas mūsų centre Vilniuje pagal protokolą „AquaStream iQ-5 minutes",
                        text: [
                            "Kataraktos operacija mūsų centre atliekama pagal protokolą „AquaStream iQ-5 minutes“. Tai šiuolaikinė kataraktos fakoemulsifikacijos (kataraktos šalinimo) metodika, tarptautinėje praktikoje laikoma „auksiniu standartu“. Intervencija atliekama per mikroįpjovą, be siūlių, taikant vietinę lašinę nejautrą, vadovaujantis Europos klinikiniais protokolais, su tikslia navigacija ir nuolatine parametrų kontrole. Toks požiūris leidžia procedūrą atlikti greitai, prognozuojamai ir pacientui maksimaliai komfortiškai, o į įprastą ritmą dažniausiai galima grįžti per kelias dienas.",
                            "Naudojame aktualias kataraktos chirurgijos technologijas ir kiekvienam pacientui individualiai parenkame intraokulinį lęšį (IOL), atsižvelgdami į ragenos ir tinklainės būklę, kataraktos tipą (amžinę, trauminę, komplikuotą) bei regos ypatumus. Kataraktos gydymas mūsų klinikoje Lietuvoje – tai ne tik drumsto natūralaus lęšiuko pašalinimas, bet ir maksimaliai įmanomos regos kokybės atkūrimas arti, vidutiniu ir tolimu atstumu, atliekant lęšiuko implantavimą (dirbtinio lęšio įdėjimą).",
                        ],
                        image: "/images/cataract-preview.jpg",
                        textUp: "500 tūkst.+",
                        textDown: "sėkmingų \nkataraktos operacijų",
                    },
                },
                {
                    type: "methodsSection",
                    data: {
                        title: "Inovatyvios kataraktos gydymo technologijos – mūsų klinikoje",
                        text: "Taikome modernią kataraktos fakoemulsifikacijos metodiką „AquaStream“, plačiai pripažįstamą praktinėje oftalmologijoje.",
                        list: [
                            {
                                image: "/images/iq-5-minute.jpg",
                                link: "kataraktos-operacija/iq-5-minutes",
                                title: "iq-5-minutes",
                                text: "Це безшовне видалення в складних випадках і обов’язкова імплантація інтраокулярної лінзи.",
                            },
                            {
                                image: "/images/live.jpg",
                                link: "kataraktos-operacija/iq-life-3d",
                                title: "iQ-Life 3D «водний потік»",
                                text: "Це «золотий стандарт» в сучасній офтальмології.",
                            },
                        ],
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: false,
                        data: [
                            {
                                title: "Kas yra katarakta?",
                                image: "/images/cataract1.jpg",
                                imagePosition: "object-left",
                                text: [
                                    {
                                        content: [
                                            {
                                                gap: true,
                                                type: "text",
                                                text: "Katarakta – tai liga, kai natūralus akies lęšiukas praranda skaidrumą, tampa drumstas ir tankesnis. Įprastai lęšiukas praleidžia šviesą ir sufokusuoja ją į tinklainę, užtikrindamas ryškų vaizdą.",
                                            },
                                            {
                                                gap: true,
                                                type: "text",
                                                text: "Sergant katarakta šis mechanizmas sutrinka: regėjimas tampa neryškus, gali atsirasti „rūko“ ar „dūmelio“ pojūtis prieš akis, pablogėja regos kokybė ryškioje šviesoje ir prieblandoje, pakinta spalvų suvokimas.",
                                            },
                                            {
                                                type: "text",
                                                text: "Efektyvus kataraktos gydymo metodas yra chirurginis – drumsto lęšiuko pašalinimas ir dirbtinio lęšio implantavimas, t. y. akių lęšių keitimo operacija (taip pat vartojama: akies lęšiuko keitimas, akių lęšiuko keitimas, lęšiuko keitimas).",
                                            },
                                        ],
                                    },
                                ],
                                btn: [
                                    {
                                        btnName: "skaitykite apie kataraktą",
                                        btnLink: "/akiu-ligos/katarakta",
                                        btnSecondary: true,
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "individual", data: <CataractGreenSection /> },
                {
                    type: "priceSection",
                    data: {
                        title: "Kataraktos gydymo kainos Vilniuje",
                    },
                },
                {
                    type: "advantages",
                    data: {
                        paddingTop: false,
                        title: "Kataraktos gydymo Vilniuje privalumai mūsų oftalmologijos centre",
                        text: "Galite būti tikri paslaugų kokybe, nes patikite regėjimą šiuolaikinei klinikai",
                        list: [
                            {
                                title: "Aukštas saugumo lygis ir komfortas",
                                text: "Procedūra paprastai atliekama be skausmo, be injekcijų ir be siūlių. Tai greitas, saugus ir pacientui komfortiškas metodas, padedantis per trumpą laiką grįžti prie kasdienės veiklos.",
                            },
                            {
                                title: "Patyrę chirurgai",
                                text: "Kataraktos šalinimą atlieka sertifikuoti chirurgai, turintys tarptautinės praktikos patirtį ir daugiau kaip 50 000 sėkmingų operacijų.",
                            },
                            { videoOnly: "/videos/about-advant.mp4" },
                            {
                                title: "Pacientai įvairaus amžiaus",
                                text: "Priimame pacientus nuo kūdikystės iki vyresnio amžiaus.",
                            },
                        ],
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Dažniausiai užduodami klausimai apie kataraktą",
                        content: [
                            {
                                question:
                                    "Kas yra katarakta ir kodėl ji atsiranda?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Katarakta – tai natūralaus akies lęšiuko drumstėjimas, lemiantis laipsnišką regėjimo aštrumo mažėjimą. Dažniausiai ji susijusi su amžiniais pokyčiais, medžiagų apykaitos sutrikimais, lėtinėmis ligomis (pvz., cukriniu diabetu, hipertenzija), akių traumomis arba komplikacijomis po kitų intervencijų. Taip pat pasitaiko trauminė katarakta, kai lęšiukas pažeidžiamas po smūgio ar prasiskverbiančios žaizdos. Negydant regėjimas gali toliau blogėti iki reikšmingo funkcinio regėjimo praradimo.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kokie simptomai gali rodyti kataraktos vystymąsi?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Pirmieji požymiai – neryškus, „užtemęs“ regėjimas, lyg žiūrėtumėte pro matinį stiklą ar dūmelį. Gali atsirasti skaitymo sunkumų, poreikis dažniau keisti akinius, prastesnis matymas prieblandoje ar ryškioje šviesoje, šviesos ratilai (halai), akinimas nuo automobilių žibintų ir gatvių apšvietimo. Kai kurie pacientai pastebi kontrasto sumažėjimą ir spalvų iškraipymą. Esant šiems simptomams svarbu atlikti diagnostiką ir su oftalmologu aptarti gydymo taktiką.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Ar galima išgydyti kataraktą be operacijos – lašais ar tabletėmis?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Deja, kataraktos išgydyti be operacijos neįmanoma. Lašai, vitaminai ar kiti preparatai negali sugrąžinti skaidrumo jau sudrumstėjusiam lęšiukui. Jie gali tik laikinai sulėtinti progresavimą, tačiau nepašalina regėjimo blogėjimo priežasties. Efektyvus gydymas yra chirurginis – drumsto lęšiuko pašalinimas ir lęšiuko implantavimas (IOL), t. y. lęšiuko keitimas.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kada reikia atlikti kataraktos operaciją?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Indikacijas nustato oftalmologas po išsamaus ištyrimo. Operacija rekomenduojama, kai katarakta pradeda pastebimai trukdyti darbui, vairavimui, skaitymui, kasdienei veiklai arba kai didėja komplikacijų rizika. Nebūtina laukti, kol katarakta visiškai „subręs“: šiuolaikinės technologijos leidžia operuoti ir ankstyvesnėse stadijose, kai lęšiukas mažiau tankus, o atsistatymas dažnai būna greitesnis ir komfortiškesnis.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kaip atliekama „AquaStream iQ-5 minutes“ procedūra?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Kataraktos gydymas atliekamas ambulatoriškai, per mikropjūvį, be siūlių, o pati procedūra paprastai trunka kelias minutes. Pagal protokolą „AquaStream iQ-5 minutes“ į akį naudojamas subalansuotas tirpalas, padedantis švelniai fragmentuoti sudrumstėjusį lęšiuką. Tuomet fragmentai pašalinami, o į jų vietą implantuojamas skaidrus intraokulinis lęšis. Taikoma vietinė lašinė nejautra, todėl procedūra paprastai yra neskausminga, o pacientas tą pačią dieną grįžta namo.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kiek trunka atsistatymas po kataraktos gydymo ir kokie apribojimai taikomi?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Pirmuosius regėjimo pagerėjimus pacientai dažnai pajunta tą pačią arba kitą dieną. Visiška regėjimo stabilizacija gali užtrukti nuo kelių dienų iki kelių savaičių – priklausomai nuo individualių ypatumų. Po operacijos svarbu laikytis gydytojo rekomendacijų: netrinti akies, nekelti sunkių daiktų, saugotis dulkių ir nešvarumų, teisingai vartoti paskirtus lašus. Tai padeda mažinti rizikas ir pasiekti geriausią rezultatą.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Ar po kataraktos operacijos reikės akinių?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Rezultatas priklauso nuo implantuoto intraokulinio lęšio tipo. Monofokalinis lęšis užtikrina gerą regėjimą vienu atstumu (dažniausiai į tolį), todėl skaitymui gali prireikti akinių. Galima rinktis multifokalinį ar trifokalinį lęšį, padedantį geriau matyti skirtingais atstumais ir sumažinti priklausomybę nuo akinių. Lęšio parinkimas atliekamas individualiai diagnostikos ir konsultacijos su chirurgu metu.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        en: {
            textMain:
                "Surgical treatment of cataracts, strabismus, keratoconus and other ophthalmological pathologies.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Cataract Removal in Vilnius. Cataract Surgery (Lens Replacement) | New Vision Clinic",
                        descriptionSEO:
                            "Entrust cataract removal surgery (clouding of the eye lens) to the professionals at New Vision Clinic in Vilnius. ✅ Cataract surgery using the British fluid-flow technology iQ-5 minutes. ✴️ We treat cataracts even in the most complex cases. ✅ Advanced diagnostics and effective treatment. 👍 A reputation proven over time",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "cataract treatment",
                        image: "/images/cataract-hero.jpg",
                        imgPositionMobile: "right 20% center",
                        adress: true,
                        adressDarkBG: true,
                        cataract: [
                            "traumatic cataract",
                            "we manage truly complex clinical cases, including the correction of outcomes after unsuccessful",
                            "procedures performed in other clinics",
                        ],
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "Cataract surgery at our centre in Vilnius under the “AquaStream iQ-5 minutes” protocol",
                        text: [
                            "Cataract treatment at our centre is performed under the “AquaStream iQ-5 minutes” protocol. This is a modern cataract phacoemulsification approach widely regarded as the “gold standard” in contemporary ophthalmology. Cataract surgery is carried out through a micro-incision, without sutures, using topical (drop) anaesthesia, in line with European clinical protocols, with precise navigation and continuous monitoring of key parameters. This approach allows the procedure to be performed efficiently and predictably, with a high level of comfort for the patient, and many people are able to return to their usual routine within a few days.",
                            "We use up-to-date cataract surgery technologies and select an intraocular lens (IOL) individually for each patient, taking into account the condition of the cornea and retina, the cataract type (age-related, traumatic, complicated) and the patient’s visual needs. Cataract treatment at our clinic in Lithuania is not merely the removal of a clouded natural lens; it is a strategy aimed at restoring the highest achievable quality of vision at near, intermediate and distance ranges through IOL implantation.",
                        ],
                        image: "/images/cataract-preview.jpg",
                        textUp: "500 k+",
                        textDown: "successful \ncataract removals",
                    },
                },
                {
                    type: "methodsSection",
                    data: {
                        title: "Innovative cataract treatment technologies — at our clinic",
                        text: "We apply a contemporary phacoemulsification technique, “AquaStream”, which is widely recognised in practical ophthalmology.",
                        list: [
                            {
                                image: "/images/iq-5-minute.jpg",
                                link: "kataraktos-operacija/iq-5-minutes",
                                title: "iq-5-minutes",
                                text: "This is sutureless removal in complex cases with mandatory intraocular lens implantation.",
                            },
                            {
                                image: "/images/live.jpg",
                                link: "kataraktos-operacija/iq-life-3d",
                                title: "iQ-Life 3D «Water Flow»",
                                text: "This is the «gold standard» in modern ophthalmology.",
                            },
                        ],
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: false,
                        data: [
                            {
                                title: "What is cataract?",
                                image: "/images/cataract1.jpg",
                                imagePosition: "object-left",
                                text: [
                                    {
                                        content: [
                                            {
                                                gap: true,
                                                type: "text",
                                                text: "A cataract is a condition in which the eye’s natural crystalline lens loses its transparency, becomes cloudy and often denser. Under normal conditions, the lens transmits and focuses light onto the retina to produce a clear image.",
                                            },
                                            {
                                                gap: true,
                                                type: "text",
                                                text: "When a cataract develops, this mechanism is disrupted: vision becomes blurred, a “mist” or “haze” may appear in front of the eyes, visual quality can deteriorate in bright light and at dusk, and colour perception may change.",
                                            },
                                            {
                                                type: "text",
                                                text: "The effective treatment for cataract is surgical: removal of the clouded lens with implantation of an artificial intraocular lens — i.e., intraocular lens replacement (lens replacement surgery).",
                                            },
                                        ],
                                    },
                                ],
                                btn: [
                                    {
                                        btnName: "read about cataract",
                                        btnLink: "/akiu-ligos/katarakta",
                                        btnSecondary: true,
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "individual", data: <CataractGreenSection /> },
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for cataract treatment in Vilnius",
                    },
                },
                {
                    type: "advantages",
                    data: {
                        paddingTop: false,
                        title: "Benefits of cataract treatment in Vilnius at our ophthalmology centre",
                        text: "You can be confident in the quality of care, as you entrust your vision to a modern clinic.",
                        list: [
                            {
                                title: "High level of safety and comfort",
                                text: "The procedure is typically performed without injections and without sutures, using topical anaesthesia. It is a fast and comfortable approach that helps many patients return to everyday life within a few days.",
                            },
                            {
                                title: "Experienced surgeons",
                                text: "Cataract removal is performed by certified surgeons with international clinical experience and more than 50,000 successful operations.",
                            },
                            { videoOnly: "/videos/about-advant.mp4" },
                            {
                                title: "No age restrictions",
                                text: "We see patients from infancy through to older age.",
                            },
                        ],
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about cataract",
                        content: [
                            {
                                question:
                                    "What is cataract and why does it develop?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "A cataract is a clouding of the eye’s natural crystalline lens, leading to a gradual reduction in visual acuity. Most commonly, cataract is associated with age-related changes, metabolic disturbances, chronic conditions (such as diabetes and hypertension), eye injuries, or complications following other interventions. Traumatic cataract may develop when the lens is damaged after a blunt impact or a penetrating injury. Without treatment, vision can continue to worsen up to a significant loss of functional vision.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What symptoms may indicate cataract progression?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Early signs include blurred or “foggy” vision, as if looking through frosted glass or a haze. You may notice difficulty reading, a need to change spectacles more often, reduced vision in low light or in bright light, halos and glare from car headlights and street lights. Some patients report reduced contrast sensitivity and colour distortion. If such symptoms occur, it is important to undergo a diagnostic assessment and discuss cataract treatment with an ophthalmologist.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Can cataract be treated without surgery — with drops or tablets?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Unfortunately, cataract cannot be cured without surgery. Drops, vitamins or other medications cannot restore transparency to a lens that has already become cloudy. They may only temporarily slow progression, but they do not address the underlying cause of vision deterioration. The effective treatment is surgical removal of the lens with implantation of an intraocular lens (IOL). Only surgery can restore vision and improve day-to-day comfort.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "When should cataract surgery be performed?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The indication is determined by an ophthalmologist after a comprehensive examination. Surgery is typically recommended when cataract begins to interfere noticeably with work, driving, reading or daily activities, or when there is an increased risk of complications. There is no need to wait until the cataract fully “matures”: modern technology allows surgery at earlier stages, when the lens is less dense and recovery is often faster and more comfortable.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How is the “AquaStream iQ-5 minutes” procedure performed?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Cataract surgery is usually performed on an outpatient basis through a micro-incision, without sutures, and commonly takes only a few minutes. Under the “AquaStream iQ-5 minutes” protocol, a balanced solution is used to assist gentle fragmentation of the clouded lens. The fragments are then removed, and a clear intraocular lens is implanted. Anaesthesia is topical (drops), so the procedure is generally painless, and the patient returns home the same day.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How long is recovery after cataract treatment and what restrictions apply?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Many patients notice an improvement in vision on the same day or the following day. Full visual stabilisation may take from several days to several weeks, depending on individual factors. During the postoperative period, it is important to follow the doctor’s instructions: avoid rubbing the eye, avoid heavy lifting, protect the eye from dust and contamination, and use prescribed drops correctly. Compliance helps reduce risks and achieve the best possible outcome.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Will I need glasses after cataract surgery?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The outcome depends on the type of implanted intraocular lens. A monofocal lens provides good vision at one distance (typically distance vision), so reading glasses may be needed. If desired, a multifocal or trifocal lens can be selected to provide vision at different distances and reduce dependence on glasses. Lens selection is individual and is discussed during diagnostics and a consultation with the surgeon.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Do you treat cataracts in children and complex cases?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes, our center treats cataracts in children, including traumatic cataracts, and performs correction of unsuccessful previous cataract surgeries performed elsewhere. We handle complex cases involving scar tissue, accompanying retinal pathologies, glaucoma, or situations where earlier treatment did not produce the expected results. Each clinical case is evaluated individually, with detailed diagnostics and surgical planning. Our goal is to restore vision and improve the patient’s quality of life, regardless of the complexity of the condition.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        ru: {
            textMain:
                "Хирургическое лечение катаракты, косоглазия, кератоконуса и других офтальмологических патологий.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Удаление катаракты в Вильнюсе. Операция по удалению катаракты (замена хрусталика) | Клиника Новое Зрение",
                        descriptionSEO:
                            "Операцию по удалению катаракты (помутнение хрусталика глаза) доверьте профессионалам клиники - Новое Зрение в Вильнюсе. ✅ Хирургия катаракты английским водным потоком iQ-5 minutes. ✴️ Мы лечим катаракту в самых сложных случаях✅ Современная диагностика и эффективное лечение. 👍 Репутация, проверенная временем",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "Лечение катаракты",
                        image: "/images/cataract-hero.jpg",
                        imgPositionMobile: "right 20% center",
                        adress: true,
                        adressDarkBG: true,
                        cataract: [
                            "травматическая катаракта",
                            "корректируем последствия неудачных операций в других клиниках",
                            "берёмся за действительно сложные случаи",
                        ],
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "Катаракта в нашем центре в Вильнюсе лечится по протоколу «AquaStream iQ-5 minutes»",
                        text: [
                            "Это современный формат факоэмульсификации катаракты, признанный «золотым стандартом» в мировой офтальмологии. Операция катаракты выполняется через микроразрез, без швов, под местной анестезией в виде капель. по европейским клиническим протоколам, с точной навигацией и постоянным контролем параметров. Такой подход делает вмешательство быстрым, предсказуемым и максимально комфортным для пациента, а возвращение к привычному ритму возможно уже через несколько дней.",
                            "Мы используем актуальные технологии хирургии катаракты и индивидуально подбираем интраокулярную линзу каждому пациенту, учитывая состояние роговицы, сетчатки, тип катаракты (возрастная, травматическая, осложнённая) и особенности зрения. Лечение катаракты в нашей клинике в Литве — это не просто удаление помутневшего хрусталика, а восстановление максимально достижимого качества зрения на близком, среднем и дальнем расстоянии.",
                        ],
                        image: "/images/cataract-preview.jpg",
                        textUp: "500 тыс+",
                        textDown: "успешных \nудалений катаракты",
                    },
                },
                {
                    type: "methodsSection",
                    data: {
                        title: "Инновационные технологии лечения катаракты — в нашей клинике",
                        text: "Мы применяем современную методику факоэмульсификации катаракты — «AquaStream», которая считается «золотым стандартом» в практической офтальмологии.",
                        list: [
                            {
                                image: "/images/iq-5-minute.jpg",
                                link: "kataraktos-operacija/iq-5-minutes",
                                title: "iq-5-minutes",
                                text: "Это бесшовное удаление в сложных случаях и обязательная имплантация интраокулярной линзы.",
                            },
                            {
                                image: "/images/live.jpg",
                                link: "kataraktos-operacija/iq-life-3d",
                                title: "iQ-Life 3D «водный поток»",
                                text: "Это «золотой стандарт» в современной офтальмологии.",
                            },
                        ],
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: false,
                        data: [
                            {
                                title: "Что такое катаракта?",
                                image: "/images/cataract1.jpg",
                                imagePosition: "object-left",
                                text: [
                                    {
                                        content: [
                                            {
                                                gap: true,
                                                type: "text",
                                                text: "Катаракта — это заболевание, при котором естественный хрусталик глаза теряет прозрачность, становится мутным и более плотным. В норме хрусталик пропускает свет и фокусирует его на сетчатке, обеспечивая чёткое изображение.",
                                            },
                                            {
                                                gap: true,
                                                type: "text",
                                                text: "При катаракте этот механизм нарушается: зрение становится размытым, появляется ощущение «тумана» или «дымки» перед глазами, ухудшается качество зрения при ярком свете и в сумерках, меняется восприятие цветов.",
                                            },
                                            {
                                                type: "text",
                                                text: "Единственный эффективный метод лечения катаракты — хирургическое удаление помутневшего хрусталика с имплантацией искусственной линзы.",
                                            },
                                        ],
                                    },
                                ],
                                btn: [
                                    {
                                        btnName: "читать о катаракте",
                                        btnLink: "/akiu-ligos/katarakta",
                                        btnSecondary: true,
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "individual", data: <CataractGreenSection /> },
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на лечение катаракты в Вильнюсе",
                    },
                },
                {
                    type: "advantages",
                    data: {
                        paddingTop: false,
                        title: "Преимущества лечения катаракты в Вильнюсе в нашем офтальмологическом центре",
                        text: "Вы можете быть уверены в качестве услуг, ведь доверяете своё зрение современной клинике.",
                        list: [
                            {
                                title: "100% безопасность",
                                text: "Процедура проходит без боли, без уколов и без швов. Это быстрый, безопасный и комфортный метод, который помогает пациентам вернуться к привычной жизни уже через несколько дней.",
                            },
                            {
                                title: "Опытные хирурги",
                                text: "Удаление катаракты выполняют сертифицированные хирурги с международной практикой и более чем 50 000 успешных операций.",
                            },
                            { videoOnly: "/videos/about-advant.mp4" },
                            {
                                title: "Без ограничений по возрасту",
                                text: "Мы принимаем пациентов от рождения и до пожилого возраста.",
                            },
                        ],
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часто задаваемые вопросы о катаракте",
                        content: [
                            {
                                question:
                                    "Что такое катаракта и почему она появляется?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Катаракта — это помутнение природного хрусталика глаза, приводящее к постепенному снижению остроты зрения. Чаще всего катаракта связана с возрастными изменениями, нарушением обмена веществ, хроническими заболеваниями (сахарный диабет, гипертония), травмами глаза или осложнениями после других вмешательств. Существует также травматическая катаракта, когда хрусталик повреждается после удара или проникающей раны. Без лечения зрение продолжает ухудшаться вплоть до существенной потери функционального зрения.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Какие симптомы могут указывать на развитие катаракты?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Первые признаки катаракты — это нечеткое, «затуманенное» зрение, ощущение, будто вы смотрите через матовое стекло или дымку. Могут появляться трудности при чтении, необходимость чаще менять очки, ухудшение зрения в сумерках или при ярком свете, ореолы и ослепление от фар автомобилей и фонарей. Иногда пациенты отмечают снижение контрастности и искажение цветов. При появлении таких симптомов важно пройти диагностику и обсудить лечение катаракты с офтальмологом.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Можно ли вылечить катаракту без операции — каплями или таблетками?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "К сожалению, вылечить катаракту без операции невозможно. Капли, витамины или другие препараты не способны вернуть прозрачность помутневшему хрусталику. Они лишь временно могут замедлить прогрессирование, но не устраняют причину ухудшения зрения. Единственный метод лечения катаракты — хирургическое удаление хрусталика с имплантацией интраокулярной линзы. Только операция позволяет восстановить зрение и вернуть комфорт в повседневную жизнь.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Когда нужно делать операцию по лечению катаракты?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Показания к операции определяет офтальмолог после полного обследования. Операция рекомендуется, когда катаракта начинает заметно мешать работе, вождению, чтению, бытовой активности или когда появляется риск осложнений. Не стоит ждать, пока катаракта полностью «созреет»: современные технологии позволяют выполнять операцию на ранних этапах, когда хрусталик менее плотный, а восстановление проходит быстрее и комфортнее.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Как проходит операция «AquaStream iQ-5 minutes»?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Операция по лечению катаракты проводится амбулаторно, через микропрокол, без швов и обычно занимает всего несколько минут. По протоколу «AquaStream iQ-5 minutes» в глаз вводится сбалансированный раствор, который помогает мягко фрагментировать помутневший хрусталик. Затем фрагменты удаляются, а на их место имплантируется прозрачная интраокулярная линза. Анестезия местная, в виде капель, поэтому процедура проходит безболезненно, и пациент возвращается домой в тот же день.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько длится восстановление после лечения катаракты и какие есть ограничения?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "После операции первые улучшения зрения пациенты ощущают в тот же или на следующий день. Полная стабилизация зрения обычно занимает от нескольких дней до нескольких недель, в зависимости от индивидуальных особенностей. В послеоперационный период важно соблюдать рекомендации врача: не тереть глаз, не поднимать тяжести, избегать пыли и грязи, правильно закапывать назначенные капли. Соблюдение этих правил помогает снизить риски и достичь наилучшего результата лечения.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Нужны ли очки после удаления катаракты?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Результат после операции зависит от типа установленной интраокулярной линзы. Монофокальная линза обеспечивает хорошее зрение на одной дистанции (обычно вдаль), поэтому для чтения могут понадобиться очки. По желанию можно выбрать мультифокальную или трифокальную линзу, которая обеспечивает зрение на разных расстояниях и уменьшает зависимость от очков. Подбор линзы проводится индивидуально во время диагностики и консультации с хирургом.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        name: servicesList.find(s => s.key === "lazerine-akiu-korekcija")!,
        additionalIcon: "/icons/iq-lasik.svg",
        lt: {
            textMain:
                "Сучасні методи виправлення рефракційних порушень відновлення чіткості зору.",

            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Lazerine akiu korekcija Vilnius - Akių korekcijos operacija kaina. Lazerine akiu klinika - Naujas Regėjimas",
                        descriptionSEO:
                            "✅ Naujosios regėjimo korekcijos lazeriu technologijos. Lazerinė oftalmologinė klinika - Naujas Regėjimas klinikoje.  Palanki regėjimo korekcijos operacijos kaina Vilniuje ✴️ naudojant iQ-LASIK Oxygen metodą 👍 Laiko patikrinta reputacija",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "Lazerinė \nregos korekcija",
                        text: "Šis metodas padeda žmonėms, turintiems regėjimo sutrikimų, sugrįžti prie įprasto aktyvaus gyvenimo ir nebepriklausyti nuo nuolatinio akinių ar kontaktinių lęšių nešiojimo.",
                        adress: true,
                        videoSmallScreens: "/videos/lazer-hero-tab.mp4",
                        videoBigScreens: "/videos/lazer-desk-hero.mp4",
                        lazer: {
                            listTitle: "rekomenduojama esant:",
                            list: [
                                "astigmatizmui",
                                "trumparegystei",
                                "miopijai",
                                "toliaregystei",
                            ],
                        },
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "Lazerinė regos korekcija privačioje klinikoje Vilniuje",
                        text: [
                            "Lazerinė regos korekcija – tai šiuolaikinis regėjimo korekcijos lazeriu metodas, leidžiantis reikšmingai sumažinti akinių ir kontaktinių lęšių poreikį. Jei ieškote, kaip atkurti regėjimą, pagerinti jo aštrumą ar gyventi be akinių, po išsamios akių diagnostikos oftalmologas gali pasiūlyti regėjimo korekciją lazeriu kaip vieną iš galimų sprendimų. Konsultacijos metu įvertiname regėjimo sutrikimo tipą ir nustatome, ar lazerinis akių gydymas šiuo metu yra optimalus sprendimas.",
                            "Mūsų klinika Vilniuje – privati akių ligų klinika ir regos centras, kuriame atliekama kompleksinė akių patikra ir teikiama detali gydytojo oftalmologo konsultacija. Mes aiškiai ir skaidriai paaiškiname realius lazerinės regos korekcijos privalumus, galimas rizikas ir apribojimus, paaiškiname, kaip vyksta atsigavimas po lazerinės regos korekcijos ir kokių taisyklių būtina laikytis po procedūros. Jūs gaunate aiškų gydymo planą ir suprantamus atsakymus į visus rūpimus klausimus.",
                        ],
                        image: "/images/lazer-preview.jpg",
                        textUp: "1 mln",
                        textDown: "atlikta \nlazerinių korekcijų",
                    },
                },
                {
                    type: "methodsSection",
                    data: {
                        title: "Unikali „šaltos“ lazerinės regos korekcijos technologija – tik mūsų klinikoje",
                        text: "Tik mūsų lazerinė akių klinika Vilniuje taiko modernų „šaltos“ lazerinės regos korekcijos metodą, kuris užtikrina maksimaliai švelnų poveikį akies audiniams ir padidina procedūros saugumą. Toks akių gydymas lazeriu padeda pasiekti stabilų ir prognozuojamą rezultatą, išsaugant aukštus saugumo standartus.",
                        greenText:
                            "Tiems, kurie renkasi geriausią ir nėra pasirengę kompromisams",
                        list: [
                            {
                                image: "/images/eagle.jpg",
                                link: "lazerine-akiu-korekcija/iq-lasik-oxygen-3d",
                                title: "iQ-LASIK Oxygen 3D",
                                text: "Сучасна і безпечна методика поліпшення зору рефракційним лазером.",
                            },
                            {
                                image: "/images/lasek.png",
                                link: "lazerine-akiu-korekcija/sportlife-lasik",
                                title: "SportLine LASEK",
                                text: "Для тих, хто веде активний спосіб життя, професійних спортсменів. Рішення є.",
                            },
                        ],
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: false,
                        data: [
                            {
                                title: "Kam tinka lazerinė regos korekcija",
                                image: "/images/lazer1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Lazerinė regos korekcija paprastai svarstoma tais atvejais, kai žmogus nori ne tik „šiek tiek geriau matyti“, bet ir iš esmės pagerinti gyvenimo kokybę: patogiai dirbti kompiuteriu be nuolatinės akių įtampos, užsiimti sportu, laisvai keliauti be atsarginių lęšių ir kelių akinių porų.",
                                            },
                                            {
                                                type: "text",
                                                text: "Ši procedūra gali būti tinkama pacientams, turintiems:",
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "trumparegystę (miopiją);",
                                                    "toliaregystę (hipermetropiją);",
                                                    "astigmatizmą.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                text: "Konsultacijos metu oftalmologas atsako į pagrindinius klausimus: kaip pagerinti regėjimą, ar jūsų atveju įmanomas dalinis regėjimo pagerėjimas be operacijos ir ar tikrai būtina chirurginė akių regėjimo korekcija lazeriu. Kai kuriems pacientams rekomenduojame dinaminį stebėjimą, gretutinių akių ligų gydymą, regos krūvio režimo korekciją ar kitus metodus – detaliai paaiškindami, kodėl lazerinės regos korekcijos šiuo metu atlikti dar anksti arba ji nėra tikslinga.",
                                            },
                                            {
                                                type: "text",
                                                text: "Todėl sprendimas dėl lazerinės regos korekcijos priimamas ne remiantis reklama, o pagal realią akių būklę, pacientų atsiliepimus ir rekomendacijas, medicinines indikacijas, jūsų lūkesčius ir gyvenimo būdą.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Kiek kainuoja lazerinė regos korekcija",
                                image: "/images/lazer2.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Vienas dažniausių pacientų klausimų – kiek kainuoja lazerinė regos korekcija Vilniuje, kaip formuojama lazerinės regėjimo korekcijos kaina ir kiek konkrečiai atsieis lazerinė akių korekcija mūsų klinikoje. Galutinė kaina priklauso nuo pasirinktos technologijos, klinikinės situacijos sudėtingumo, ragenos būklės ir tolesnio stebėjimo apimties.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Diagnostikos ir konsultacijos metu jūs gaunate aiškų paaiškinimą, kas tiksliai įskaičiuota į regėjimo korekcijos lazeriu kainą ir regos atkūrimo lazeriu sąnaudas: išsami akių diagnostika, pati procedūra, kontroliniai apsilankymai ir pooperacinė priežiūra.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Tiksliausią atsakymą į klausimą „kiek kainuos regėjimo atkūrimas lazeriu būtent mano atveju?“ suteikia gydytojas po tiesioginio akių ištyrimo: įvertinama akių būklė, paaiškinama galima nauda, galimos rizikos ir apribojimai, taip pat pateikiama sąžininga rekomendacija, ar verta lazerinę regos korekciją atlikti dabar ir koks gydymo variantas jums būtų tinkamiausias.",
                                            },
                                        ],
                                        greenText:
                                            "Papildomai informuojame apie galiojančias akcijas, nuolaidas ir specialius pasiūlymus, kad galėtumėte pasirinkti optimalų gydymo variantą pagal kainą ir sąlygas Lietuvoje.",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: false,
                        paddingBottom: false,
                        listTitle: "Kaip vyksta lazerinė regos korekcija?",
                        list: [
                            {
                                itemTitle: "Regos diagnostika",
                                itemText: [
                                    "Bet kuri lazerinė regos korekcija prasideda nuo išsamios instrumentinės diagnostikos ir oftalmologo konsultacijos. Pirmiausia atliekamas kompleksinis akių patikrinimas: įvertinama regėjimo aštrumas, atliekama ragenos topografija, matuojamas jos storis ir kreivumas, gydytojas apžiūri akių dugną ir bendrai įvertina akių būklę.",
                                    "Remdamasis gautais duomenimis specialistas paaiškina, kaip jūsų atveju galima pagerinti regėjimą, ar jums tinka akių regėjimo korekcija lazeriu, kokie yra jos privalumai, galimi trūkumai ir kontraindikacijos, taip pat pateikia preliminarias rekomendacijas, kaip pasirengti procedūrai.",
                                ],
                            },
                            {
                                itemTitle: "Lazerinė regos korekcija",
                                itemText: [
                                    "Šiame etape atliekama pati lazerinė regos korekcija. Prieš pradžią į akis sulašinami vietinio poveikio nuskausminantys lašai, kad procedūra būtų komfortiška ir neskausminga. Tuomet chirurgas pagal individualiai apskaičiuotus parametrus lazeriu koreguoja ragenos formą, kad šviesos spinduliai tinkamai fokusuotųsi tinklainėje. Lazerio darbas trunka vos kelias minutes, o dauguma pacientų jaučia tik lengvą spaudimą ar neįprastą pojūtį, bet ne ryškų skausmą.",
                                    "Iškart po procedūros atliekamas trumpas patikrinimas, gydytojas įvertina akių būklę ir paaiškina, kaip elgtis pirmosiomis valandomis po intervencijos.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Kontrolinis patikrinimas ir atsigavimas",
                                itemText: [
                                    "Toliau seka atsigavimo po lazerinės regos korekcijos laikotarpis ir rekomendacijų laikymasis. Pacientui pateikiamos išsamios rašytinės instrukcijos: kaip taisyklingai lašinti akių lašus, kiek laiko skirti poilsiui, kokie apribojimai galioja po lazerinės korekcijos artimiausiomis dienomis ir savaitėmis.",
                                    "Gydytojas paaiškina, kada galima sugrįžti prie darbo kompiuteriu, aktyvių treniruočių, baseino ar pirties, taip pat paaiškina, kokie pojūčiai yra normalūs gijimo laikotarpiu ir kokiais atvejais būtina skubi pagalba bei nedelsiant kreiptis į kliniką. Reguliarūs kontroliniai vizitai leidžia stebėti gijimo eigą, įtvirtinti rezultatą ir ilgalaikiai pagerinti regėjimo kokybę.",
                                ],
                            },
                        ],
                        pdfCard: {
                            title: "відновлення та догляд за очима після лазерної корекції зору",
                            description: "інструкція",
                            link: "/files/ELK.pdf",
                            btnName: "завантажити",
                            downloadingName:
                                "Відновлення_та_догляд_за_очима_після_лазерної_корекції_зору.pdf",
                        },
                    },
                },
                {
                    type: "advantages",
                    data: {
                        paddingBottom: false,
                        title: "Lazerinės regos korekcijos privalumai mūsų klinikoje Vilniuje",
                        text: "Galite būti tikri dėl teikiamų paslaugų kokybės, nes patikite savo regėjimą moderniai oftalmologijos ir akių ligų klinikai Lietuvoje",
                        list: [
                            {
                                title: "Patyrę chirurgai ir komanda",
                                text: "Operacijas atlieka oftalmologai–chirurgai, kurie specializuojasi lazerinėje regos korekcijoje ir ragenos ligų chirurginiame gydyme. Nuolatinis dalyvavimas tarptautiniuose kongresuose, seminaruose ir mokymuose užtikrina šiuolaikinių metodikų taikymą ir aukštą saugumo lygį.",
                            },
                            {
                                title: "Pacientų atsiliepimai ir rekomendacijos",
                                text: "Realūs pacientų atsiliepimai, istorijos, komentarai, taip pat vaizdo ir teksto rekomendacijos padeda pamatyti ne tik medicininį rezultatą, bet ir tai, kaip pasikeičia žmonių gyvenimas po to, kai jie pasirenka lazerinę regos korekciją Vilniuje.",
                            },
                            { imageOnly: "/images/safety3.jpg" },
                            {
                                title: "Pilnas gydymo ciklas: nuo diagnostikos iki atsigavimo",
                                text: "Mūsų pacientai visas paslaugas gauna vienoje vietoje: kompleksinį akių patikrinimą, oftalmologo konsultaciją, lazerinę operaciją, detalų atsigavimo po lazerinės regos korekcijos planą ir ilgalaikį stebėjimą. Jums nereikia atskirai ieškoti, kur atlikti diagnostiką ir kur kreiptis dėl rekomendacijų – visa reikalinga pagalba teikiama mūsų regos klinikoje.",
                            },
                        ],
                    },
                },
                {
                    type: "greenCard",
                    data: {
                        title: "Procedūra praktiškai neskausminga ir trunka ne ilgiau kaip 7 minutes",
                        text: "Naudojame aukštos raiškos lazerinę įrangą ir pažangias diagnostikos sistemas, leidžiančias maksimaliai individualizuoti lazerinę regos korekciją, sumažinti rizikas ir užtikrinti prognozuojamą rezultatą.",
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Ціна лазерної корекції зору у Києві",
                    },
                },
                { type: "global" },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Dažniausiai užduodami klausimai apie lazerinę regos korekciją",
                        content: [
                            {
                                question:
                                    "Kas yra lazerinė regos korekcija ir kuo ji skiriasi nuo „įprasto gydymo“?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Lazerinė regos korekcija – tai regos atkūrimo lazeriu metodas, kurio metu pakeičiama ragenos forma taip, kad šviesa tinkamai fokusuotųsi tinklainėje. Tai nėra lašų kursas ar akių mankšta, o chirurginė technologija tiems, kurie nori reikšmingai sumažinti priklausomybę nuo akinių ir kontaktinių lęšių ir siekia stabilesnės regėjimo kokybės.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kiek kainuoja lazerinė regos korekcija?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Lazerinės regos korekcijos kaina, kaip ir regos atkūrimo lazeriu sąnaudos, priklauso nuo taikomo metodo, klinikinio atvejo sudėtingumo ir tolesnio stebėjimo apimties. Konkrečią gydymo kainą mūsų klinikoje Vilniuje sužinosite po pilnos diagnostikos ir išsamios oftalmologo konsultacijos. Administratorius papildomai informuos apie galiojančias akcijas, nuolaidas ir galimus sutaupymo būdus.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Ar galima atkurti regėjimą be operacijos?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Kai kuriais atvejais regėjimą iš dalies pagerinti be operacijos tikrai įmanoma – parinkus tinkamus akinius ar kontaktinius lęšius, gydant gretutines akių ligas ir koreguojant regos krūvio įpročius. Tačiau jei siekiate kuo labiau sumažinti priklausomybę nuo optikos ir gauti stabilesnį rezultatą, gydytojas gali rekomenduoti lazerinę regos korekciją kaip efektyviausią regos atkūrimo metodą.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kokios yra lazerinės regos korekcijos kontraindikacijos?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yra situacijų, kai lazerinė regos korekcija nerekomenduojama: ryškiai suplonėjusi ragena, aktyvūs uždegiminiai procesai akyse, tam tikros sisteminės ligos, nėštumas ir žindymo laikotarpis, nestabilus regėjimas ir kitos būklės. Oftalmologas detaliai paaiškins kontraindikacijas būtent jūsų atveju ir pasiūlys alternatyvius gydymo būdus, jei lazerinė operacija laikinai ar visam laikui jums netinka.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kokie apribojimai taikomi po lazerinės regos korekcijos?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Pirmosiomis dienomis po procedūros ypač svarbu griežtai laikytis apribojimų: netrinti akių, vengti baseino, pirties, intensyvios fizinės veiklos, dulkių ir kitų teršalų patekimo į akis. Jums bus pateiktos rašytinės rekomendacijos dėl atsigavimo, akių lašų vartojimo schemos ir individualus kontrolinių vizitų grafikas mūsų klinikoje Vilniuje.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kokie galimi šalutiniai reiškiniai ir kada būtina skubi pagalba?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Gijimo laikotarpiu normalūs pojūčiai yra laikinas akių sausumas, lengvas perštėjimas, „smėlio“ pojūtis akyse ir padidėjęs jautrumas šviesai. Tačiau jei atsiranda staigus skausmas, netikėtas regėjimo pablogėjimas, „pataamsėjimas“ ar ryškus tinimas, tai yra priežastis nedelsiant kreiptis dėl skubios pagalbos į kliniką.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Ar skauda atliekant lazerinę regos korekciją?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Procedūra atliekama taikant vietinę lašinę nejautrą. Dauguma pacientų mini tik lengvą spaudimą ar neįprastą diskomfortą, tačiau ne ryškų skausmą. Daugybėje atsiliepimų žmonės pažymi, kad lazerinė regos korekcija realybėje toleruojama daug lengviau, nei jie tikėjosi prieš operaciją.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kaip išsirinkti kliniką lazerinei regos korekcijai?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Rinkdamiesi kliniką lazerinei regos korekcijai atkreipkite dėmesį į oftalmologų–chirurgų patirtį, naudojamą įrangą, kainodaros skaidrumą, realius pacientų atsiliepimus ir rekomendacijas. Jei dar nesate apsisprendę, kur kreiptis Vilniuje, galite registruotis konsultacijai mūsų klinikoje: atliksime profesionalų akių patikrinimą, sąžiningai įvertinsime jūsų akių būklę ir atsakysime į klausimą, ar lazerinė regos korekcija jums tinkama dabar ir koks gydymo variantas būtų geriausias būtent jums.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        en: {
            textMain:
                "Modern methods of correcting refractive errors and restoring visual acuity.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Laser Vision Correction in Vilnius. Laser Vision Restoration | New Vision Clinic",
                        descriptionSEO:
                            "Laser vision restoration — advanced laser vision correction technologies at New Vision Clinic. ✴️ iQ-LASIK Oxygen technique. ✅ Advanced diagnostics and effective treatment. 👍 A reputation proven over time",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "Laser \nVision Correction",
                        text: "This method helps people with visual disorders return to their usual active lifestyle without constantly depending on glasses or contact lenses.",
                        adress: true,
                        videoSmallScreens: "/videos/lazer-hero-tab.mp4",
                        videoBigScreens: "/videos/lazer-desk-hero.mp4",
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "Laser vision correction at a private clinic in Vilnius",
                        text: [
                            "Laser vision correction is a modern method of correcting vision with a laser, allowing you to significantly reduce the need for glasses and contact lenses. If you are looking for a way to restore your vision, improve its sharpness or live without glasses, an ophthalmologist may recommend laser vision correction as one of the options after a comprehensive eye examination. During the consultation, we assess the type of refractive error and determine whether laser eye treatment is currently the optimal solution.",
                            "Our clinic in Vilnius is a private eye clinic and vision centre where you undergo comprehensive eye diagnostics and receive a detailed consultation with an ophthalmologist. We clearly and transparently explain the real benefits of laser vision correction, possible risks and limitations, and describe how recovery after laser correction proceeds and which rules are important to follow after the procedure. You receive a clear treatment plan and straightforward answers to all your questions.",
                        ],
                        image: "/images/lazer-preview.jpg",
                        textUp: "1 m",
                        textDown: "laser corrections \nperformed",
                    },
                },
                {
                    type: "methodsSection",
                    data: {
                        title: "Unique “cold” laser vision correction technology – only in our clinic",
                        text: "Only our laser eye clinic in Vilnius uses a modern “cold” laser vision correction method, which ensures an exceptionally gentle effect on the eye tissues and increases the safety of the procedure. This type of laser eye treatment helps achieve a stable and predictable result while maintaining high safety standards.",
                        greenText:
                            "For those who choose the best and accept no compromise",

                        list: [
                            {
                                image: "/images/eagle.jpg",
                                link: "lazerine-akiu-korekcija/iq-lasik-oxygen-3d",
                                title: "iQ-LASIK Oxygen 3D",
                                text: "A modern and safe method of improving vision using a refractive laser.",
                            },
                            {
                                image: "/images/lasek.png",
                                link: "lazerine-akiu-korekcija/sportlife-lasik",
                                title: "SportLine LASEK",
                                text: "For those who lead an active lifestyle, professional athletes. There is a solution.",
                            },
                        ],
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: false,
                        data: [
                            {
                                title: "Who is laser vision correction suitable for?",
                                image: "/images/lazer1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Laser vision correction is usually considered in cases where a person wants not just to “see a bit better”, but to substantially improve their quality of life: to work comfortably at a computer without constant eye strain, to play sports, to travel freely without spare lenses and several pairs of glasses.",
                                            },
                                            {
                                                type: "text",
                                                text: "The procedure may be suitable for patients with:",
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "myopia (short-sightedness);",
                                                    "hyperopia (long-sightedness);",
                                                    "astigmatism.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                text: "During the consultation, the ophthalmologist answers key questions: how your vision can be improved, whether partial improvement is possible in your case without surgery, and whether surgical laser vision correction is truly necessary. For some patients, we recommend dynamic monitoring, treatment of concomitant eye conditions, adjustment of visual load, or other methods – explaining in detail why it may be too early or not reasonable to perform laser correction at this time.",
                                            },
                                            {
                                                type: "text",
                                                text: "Therefore, the decision about laser vision correction is made not on the basis of advertising, but according to the real condition of your eyes, patient feedback and recommendations, medical indications, and your expectations and lifestyle.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "How Much Laser Vision Correction Costs",
                                image: "/images/lazer2.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "One of the most common questions patients ask is: how much does laser vision correction in Vilnius cost, how is the price of laser vision correction determined, and what will laser eye correction cost specifically at our clinic? The final price depends on the chosen technology, the complexity of the clinical situation, the condition of the cornea, and the scope of further follow-up.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "During diagnostics and consultation, you receive a clear explanation of what exactly is included in the price of laser vision correction and laser vision restoration: comprehensive eye diagnostics, the procedure itself, follow-up visits and postoperative care.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "The most accurate answer to the question “how much will laser vision restoration cost in my case?” is given by the doctor after a face-to-face examination: the condition of your eyes is assessed, potential benefits, risks and limitations are explained, and an honest recommendation is provided as to whether it is worth performing laser correction now and which treatment option would be the most suitable for you.",
                                            },
                                        ],
                                        greenText:
                                            "We additionally inform you about current promotions, discounts and special offers so that you can choose the optimal treatment option in terms of price and conditions in Lithuania.",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: false,
                        paddingBottom: true,
                        listTitle: "How is laser vision correction performed?",
                        list: [
                            {
                                itemTitle: "Vision diagnostics",
                                itemText: [
                                    "Any laser vision correction begins with comprehensive instrumental diagnostics and an ophthalmologist’s consultation. First, a full eye examination is carried out: visual acuity is assessed, corneal topography is performed, its thickness and curvature are measured, the fundus is examined and the overall condition of the eyes is evaluated.",
                                    "Based on these data, the specialist explains how your vision can be improved in your specific case, whether laser vision correction is suitable for you, what its advantages, possible drawbacks and contraindications are, and provides preliminary recommendations on how to prepare for the procedure.",
                                ],
                            },
                            {
                                itemTitle: "Laser vision correction",
                                itemText: [
                                    "At this stage, the laser vision correction procedure itself is performed. Before the procedure, local anaesthetic eye drops are instilled to ensure comfort and eliminate pain. The surgeon then reshapes the cornea with a laser according to individually calculated parameters so that light rays are properly focused on the retina. The laser work itself takes only a few minutes, and most patients report only mild pressure or an unusual sensation, but not marked pain.",
                                    "Immediately after the procedure, a short examination is performed, the doctor evaluates the condition of the eyes and explains how to behave during the first hours after the intervention.",
                                ],
                            },
                            {
                                itemTitle: "Follow-up visit and recovery",
                                itemText: [
                                    "The next phase is the recovery period after laser vision correction and adherence to the given recommendations. The patient receives detailed written instructions: how to apply eye drops correctly, how much time to allocate for rest, and which restrictions apply in the first days and weeks after laser correction.",
                                    "The doctor explains when it is possible to return to computer work, active training, using the swimming pool or sauna, and also clarifies which sensations are normal during healing and in which situations urgent medical attention is required. Regular follow-up visits make it possible to monitor the healing process, consolidate the result and improve the quality of vision over the long term.",
                                ],
                            },
                        ],
                        pdfCard: {
                            title: "eye recovery and care after laser vision correction",
                            description: "instruction",
                            link: "/files/ELK_ENG.pdf",
                            btnName: "download",
                            downloadingName:
                                "Eye_recovery_and_care_after_laser_vision_correction.pdf",
                        },
                    },
                },
                {
                    type: "advantages",
                    data: {
                        paddingBottom: false,
                        title: "Advantages of laser vision correction at our clinic in Vilnius",
                        text: "You can be confident in the quality of the care you receive, as you entrust your vision to a modern ophthalmology and eye disease clinic in Lithuania.",
                        list: [
                            {
                                title: "Experienced surgeons and team",
                                text: "Procedures are performed by ophthalmic surgeons who specialise in laser vision correction and surgical treatment of corneal diseases. Their ongoing participation in international congresses, seminars and training programmes ensures the use of up-to-date techniques and a high level of safety.",
                            },
                            {
                                title: "Patient feedback and recommendations",
                                text: "Real patient reviews, personal stories, comments, as well as video and written testimonials help you see not only the medical outcome, but also how people’s lives change after they choose laser vision correction in Vilnius.",
                            },
                            { imageOnly: "/images/safety3.jpg" },
                            {
                                title: "Full treatment cycle: from diagnostics to recovery",
                                text: "Our patients receive all stages of care in one place: comprehensive eye examination, ophthalmologist consultation, laser surgery, a detailed recovery plan after laser vision correction and long-term follow-up. You do not need to separately look for where to undergo diagnostics or where to get recommendations – all the necessary assistance is provided in our vision clinic.",
                            },
                        ],
                    },
                },
                {
                    type: "greenCard",
                    data: {
                        title: "The procedure is virtually painless and takes no longer than 7 minutes",
                        text: "We use high-precision laser equipment and advanced diagnostic systems, which allow us to maximise the individualisation of laser vision correction, reduce risks and ensure a predictable outcome.",
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Price of laser vision correction in Kyiv",
                    },
                },
                { type: "global" },

                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about laser vision correction",
                        content: [
                            {
                                question:
                                    "What is laser vision correction and how does it differ from “usual treatment”?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Laser vision correction is a method of restoring vision with a laser, in which the shape of the cornea is changed so that light is properly focused on the retina. It is not a course of eye drops or eye exercises, but a surgical technology for those who want to significantly reduce their dependence on glasses and contact lenses and achieve more stable visual quality.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How much does laser vision correction cost?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The cost of laser vision correction, as well as the cost of laser vision restoration, depends on the technique used, the complexity of the clinical case, and the scope of further follow-up. You will learn the exact price of treatment at our clinic in Vilnius after a full examination and a detailed consultation with an ophthalmologist. Our administrator will additionally inform you about current promotions, discounts and possible ways to save.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Can vision be restored without surgery?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "In some cases, it is indeed possible to partially improve vision without surgery – by selecting appropriate glasses or contact lenses, treating concomitant eye diseases and changing visual habits. However, if you wish to minimise your dependence on optical aids and achieve a more stable result, your doctor may recommend laser vision correction as the most effective method of restoring vision.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What are the contraindications for laser vision correction?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "There are situations in which laser vision correction is not recommended: a significantly thinned cornea, active inflammatory processes in the eyes, certain systemic diseases, pregnancy and breastfeeding, unstable vision, and a number of other conditions. The ophthalmologist will explain in detail the contraindications in your specific case and offer alternative treatment options if laser surgery is temporarily or permanently unsuitable for you.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What restrictions apply after laser vision correction?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "In the first days after the procedure, it is particularly important to strictly follow the restrictions: do not rub your eyes, avoid swimming pools, saunas, intense physical activity, dust and contaminants entering the eyes. You will receive written recommendations for recovery, an eye-drop regimen and an individual schedule of follow-up visits at our clinic in Vilnius.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What possible side effects may occur and when is urgent help needed?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "During the healing period, temporary eye dryness, mild burning, a sensation of “grit” in the eyes and increased sensitivity to light are considered normal. However, if you experience sudden pain, a rapid deterioration in vision, “darkening” of the image or pronounced swelling, this is a reason to seek urgent ophthalmic care at the clinic without delay.",
                                    },
                                ],
                            },
                            {
                                question: "Is laser vision correction painful?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The procedure is performed under local topical anaesthesia. Most patients report only a feeling of mild pressure or unusual discomfort, but not marked pain. Many reviews note that laser vision correction in reality is tolerated much more easily than patients expected before surgery.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How to choose a clinic for laser vision correction?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "When choosing a clinic for laser vision correction, pay attention to the experience of the ophthalmic surgeons, the level of equipment, price transparency, and the availability of real patient reviews and recommendations. If you have not yet decided where to go in Vilnius, you can book a consultation at our clinic: we will carry out a professional eye examination, honestly assess the condition of your eyes and answer whether laser vision correction is suitable for you now and which treatment option will be the most reasonable in your situation.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        ru: {
            textMain:
                "Современные методы устранения рефракционных нарушений восстановления четкости зрения.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Лазерная коррекция зрения в Вильнюсе. Восстановление зрения лазером | Клиника Новое Зрение",
                        descriptionSEO:
                            "Лазерное восстановление зрения - Новые технологии лазерной коррекции зрения в клинике Новое Зрение ✴️ Методика iQ-LASIK Oxygen. ✅ Современная диагностика и эффективное лечение. 👍 Репутация, проверенная временем",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "Лазерная \nкоррекция зрения",
                        text: "Этот метод помогает людям с нарушениями зрения вернуться к привычной активной жизни без постоянной зависимости от очков и контактных линз.",
                        adress: true,
                        videoSmallScreens: "/videos/lazer-hero-tab.mp4",
                        videoBigScreens: "/videos/lazer-desk-hero.mp4",
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "Лазерная коррекция зрения в частной клинике в Вильнюсе",
                        text: [
                            "Лазерная коррекция зрения — это современный метод лазерного улучшения зрения, который позволяет значительно снизить необходимость в очках и контактных линзах. Если вы ищете способ, как восстановить зрение, повысить его остроту или жить без очков, после полноценного обследования офтальмолог может предложить лазерную коррекцию как один из вариантов. На консультации мы оцениваем тип нарушения зрения и определяем, действительно ли лазерное лечение зрения сейчас является оптимальным решением.",
                            "Наша клиника в Вильнюсе — частный офтальмологический центр, где вы проходите комплексную диагностику и получаете подробную консультацию врача. Мы прозрачно рассказываем о реальных преимуществах, возможных рисках и ограничениях, объясняем, как проходит восстановление после лазерной коррекции и какие правила важно соблюдать после процедуры. Вы получаете чёткий план лечения и ясные ответы на все ваши вопросы.",
                        ],
                        image: "/images/lazer-preview.jpg",
                        textUp: "1 млн",
                        textDown: "проведено \nлазерных коррекций",
                    },
                },
                {
                    type: "methodsSection",
                    data: {
                        title: "Уникальная технология холодной лазерной коррекции – только в нашей клинике",
                        text: "Только в нашей клинике в Вильнюсе используется современный «холодный» метод лазерной коррекции зрения, который обеспечивает максимально бережное воздействие на ткани глаза и повышает безопасность процедуры.",
                        greenText:
                            "Для тех, кто выбирает лучшее и не готов к компромиссам",
                        list: [
                            {
                                image: "/images/eagle.jpg",
                                link: "lazerine-akiu-korekcija/iq-lasik-oxygen-3d",
                                title: "iQ-LASIK Oxygen 3D",
                                text: "Современная и безопасная методика улучшения зрения с помощью рефракционного лазера.",
                            },
                            {
                                image: "/images/lasek.png",
                                link: "lazerine-akiu-korekcija/sportlife-lasik",
                                title: "SportLine LASEK",
                                text: "Для тех, кто ведет активный образ жизни профессиональных спортсменов. Решения есть.",
                            },
                        ],
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: false,
                        data: [
                            {
                                title: "Кому подходит лазерное восстановление зрения",
                                image: "/images/lazer1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Лазерная коррекция зрения рассматривается в тех случаях, когда человек хочет не просто «немного лучше видеть», а заметно улучшить качество жизни: комфортно работать за компьютером без постоянного напряжения глаз, заниматься спортом, свободно путешествовать без запасных линз и нескольких пар очков.",
                                            },
                                            {
                                                type: "text",
                                                text: "Она может подойти пациентам с:",
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "близорукостью (миопией);",
                                                    "дальнозоркостью (гиперметропией);",
                                                    "астигматизмом.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                text: "Во время приёма офтальмолог отвечает на ключевые вопросы: как улучшить зрение, можно ли в вашем случае частично восстановить зрение без операции и действительно ли необходима хирургическая коррекция. Некоторым пациентам мы рекомендуем динамическое наблюдение, лечение сопутствующих заболеваний, изменение режима зрительной нагрузки или другие методы — подробно объясняя, почему лазерную коррекцию сейчас выполнять рано или нецелесообразно.",
                                            },
                                            {
                                                type: "text",
                                                text: "Поэтому решение о лазерной коррекции принимается не по рекламе, а на основе реального состояния глаз, отзывов пациентов, медицинских показаний, ваших ожиданий и образа жизни.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Сколько стоит лазерная коррекция зрения",
                                image: "/images/lazer2.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Один из первых вопросов, который задают пациенты: сколько стоит лазерная коррекция зрения в Вильнюсе, как формируется цена лазерной коррекции зрения и сколько будет стоить лазерная коррекция глаз именно в нашей клинике. Итоговая стоимость зависит от выбранной технологии, сложности клинической ситуации, состояния роговицы и объёма последующего наблюдения.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "В ходе диагностики и консультации вы получаете понятный расчет, что именно входит в стоимость коррекции зрения и восстановления зрения лазером: обследование, само лечение, контрольные осмотры и послеоперационное сопровождение.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "аиболее точный ответ на вопрос «сколько будет стоить восстановление зрения лазером именно в моём случае?» вы получаете после очного осмотра: врач оценивает состояние глаз, объясняет потенциальные преимущества, возможные риски и ограничения, а также даёт честную рекомендацию, стоит ли выполнять лазерную коррекцию сейчас и какой формат лечения подойдёт вам лучше всего.",
                                            },
                                        ],
                                        greenText:
                                            "Отдельно мы информируем о действующих предложениях, акциях и скидках, чтобы вы могли выбрать оптимальный вариант по цене и условиям лечения зрения в Литве.",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: false,
                        paddingBottom: true,
                        listTitle: "Как проходит лазерная коррекция зрения?",
                        list: [
                            {
                                itemTitle: "Диагностика зрения",
                                itemText: [
                                    "Любая лазерная коррекция зрения начинается с полной инструментальной диагностики и консультации офтальмолога. Сначала пациент проходит комплексное обследование: проверяется острота зрения, выполняется топография роговицы, измеряются её толщина и кривизна, врач осматривает глазное дно и оценивает общее состояние глаз.",
                                    "На основе этих данных специалист объясняет, как в вашем случае возможно улучшить зрение, подходит ли вам лазерное восстановление зрения, какие есть преимущества, потенциальные недостатки и противопоказания, а также даёт предварительные рекомендации по подготовке к процедуре.",
                                ],
                            },
                            {
                                itemTitle: "Лазерная коррекция",
                                itemText: [
                                    "На этом этапе выполняется сама процедура лазерной коррекции. Перед началом в глаза закапывают местные анестезирующие капли, чтобы устранить болезненные ощущения. Затем хирург проводит коррекцию зрения лазером по индивидуальным параметрам, изменяя форму роговицы так, чтобы световые лучи правильно фокусировались на сетчатке. Работа лазера занимает всего несколько минут, и большинство пациентов описывают только лёгкое давление или необычные ощущения, но не выраженную боль.",
                                    "Сразу после процедуры проводится короткий осмотр, врач оценивает состояние глаз и объясняет, как вести себя в первые часы после вмешательства.",
                                ],
                            },
                            {
                                itemTitle: "Контрольный осмотр",
                                itemText: [
                                    "Далее следует этап восстановления после лазерной коррекции зрения и соблюдения рекомендаций. Пациент получает подробные письменные инструкции: как правильно закапывать капли, сколько времени уделять отдыху, какие ограничения после лазерной коррекции действуют в ближайшие дни и недели.",
                                    "Врач рассказывает, когда можно вернуться к работе за компьютером, активным тренировкам, посещению бассейна и сауны, а также объясняет, какие ощущения являются нормальными в период заживления и в каких ситуациях необходимо срочно связаться с клиникой. Регулярные контрольные визиты позволяют отслеживать процесс заживления, закреплять результат и надолго улучшать качество зрения.",
                                ],
                            },
                        ],
                        pdfCard: {
                            title: "восстановление и уход за глазами после лазерной коррекции зрения",
                            description: "инструкция",
                            link: "/files/ELK_RU.pdf",
                            btnName: "скачать",
                            downloadingName:
                                "Восстановление_и_уход_за_глазами_после_лазерной_коррекции_зрения.pdf",
                        },
                    },
                },
                {
                    type: "advantages",
                    data: {
                        paddingBottom: false,
                        title: "Преимущества лазерной коррекции зрения в нашей клинике в Вильнюсе",
                        text: "Вы можете быть уверены в качестве оказываемой помощи, так как доверяете своё зрение современной офтальмологической клинике в Литве.",
                        list: [
                            {
                                title: "Опытные хирурги и команда",
                                text: "Операции выполняют офтальмохирурги, которые специализируются именно на лазерном восстановлении зрения и хирургическом лечении заболеваний роговицы. Постоянное участие в международных конгрессах, семинарах и обучающих программах обеспечивает актуальность методик и высокий уровень безопасности.",
                            },
                            {
                                title: "Отзывы и рекомендации пациентов",
                                text: "Реальные отзывы, истории пациентов, комментарии, а также видео- и текстовые рекомендации помогают увидеть не только медицинский результат, но и то, как меняется жизнь людей после того, как они решили сделать лазерную коррекцию зрения в Вильнюсе.",
                            },
                            { imageOnly: "/images/safety3.jpg" },
                            {
                                title: "Полный цикл: от диагностики до восстановления",
                                text: "Наши пациенты получают все этапы в одном месте: комплексное обследование, консультацию офтальмолога, лазерную операцию, детальный план восстановления после лазерной коррекции зрения и долгосрочное наблюдение. Вам не нужно искать, где пройти диагностику и куда обратиться за рекомендацией — вся необходимая помощь доступна в нашей клинике.",
                            },
                        ],
                    },
                },
                {
                    type: "greenCard",
                    data: {
                        title: "Операция безболезненная и длится не более 7 минут",
                        text: "Мы используем высокоточное лазерное оборудование и современные диагностические системы, которые позволяют максимально персонализировать лазерную коррекцию зрения, снизить риски и обеспечить прогнозируемый результат.",
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Цена лазерной коррекции зрения в Киеве",
                    },
                },
                { type: "global" },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часто задаваемые вопросы о лазерной коррекции зрения",
                        content: [
                            {
                                question:
                                    "Что такое лазерная коррекция зрения и чем она отличается от «обычного лечения»?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Лазерная коррекция зрения — это метод лазерного восстановления зрения, при котором изменяется форма роговицы, чтобы свет фокусировался на сетчатке правильно. Это не курсовые капли и не гимнастика для глаз, а хирургическая технология для тех, кто хочет существенно снизить зависимость от очков и контактных линз и получить более стабильное качество зрения.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько стоит лазерная коррекция зрения?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Цена лазерной коррекции зрения, как и стоимость восстановления зрения лазером, определяется методом проведения, сложностью клинического случая и объёмом дальнейшего наблюдения. Конкретную стоимость лечения зрения в нашей клинике в Вильнюсе вы узнаете после полного обследования и консультации офтальмолога. Администратор дополнительно расскажет об актуальных акциях, специальных предложениях и возможных вариантах экономии.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Можно ли восстановить зрение без операции?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "В ряде случаев частично улучшить зрение без операции действительно возможно — с помощью правильно подобранных очков или контактных линз, лечения сопутствующей патологии и изменения зрительных привычек. Однако если вы хотите максимально избавиться от зависимости от оптики и получить более устойчивый результат, врач может рекомендовать лазерную коррекцию как наиболее эффективный метод восстановления зрения.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Какие противопоказания к лазерной коррекции зрения?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Существуют ситуации, когда лазерная коррекция зрения не рекомендуется: выраженно тонкая роговица, активные воспалительные процессы в глазах, некоторые системные заболевания, беременность и период грудного вскармливания, нестабильное зрение и ряд других состояний. Офтальмолог подробно объяснит противопоказания именно в вашем случае и предложит альтернативные варианты лечения, если лазерная операция временно или постоянно не подходит.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Какие ограничения после лазерной коррекции зрения?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "В первые дни после процедуры важно строго соблюдать ограничения: не тереть глаза, избегать бассейна, сауны, интенсивных физических нагрузок, попадания пыли и загрязнений. Вы получите письменные рекомендации по восстановлению, схему закапывания капель и индивидуальный график контрольных осмотров в нашей клинике в Вильнюсе.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Какие возможны побочные эффекты и когда нужна срочная помощь?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Нормальными в период заживления считаются временная сухость глаз, лёгкое жжение, ощущение «песка» и повышенная чувствительность к свету. Однако если возникает резкая боль, внезапное ухудшение зрения, «потемнение» изображения или выраженный отёк, это повод немедленно обратиться за неотложной офтальмологической помощью в клинику.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Больно ли делать лазерную коррекцию зрения?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Процедура проводится под местной капельной анестезией. Большинство пациентов отмечают только ощущение лёгкого давления или непривычного дискомфорта, но не выраженную боль. Во многих отзывах люди пишут, что лазерная коррекция зрения в реальности переносится гораздо легче, чем они ожидали до операции.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Как выбрать клинику для лазерной коррекции зрения?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "При выборе клиники обращайте внимание на опыт офтальмохирургов, уровень оборудования, прозрачность цен, наличие реальных отзывов и рекомендаций. Если вы пока не решили, куда обратиться в Вильнюсе, вы можете записаться на консультацию в нашу клинику: мы проведём профессиональный осмотр, честно оценим состояние ваших глаз и ответим на вопрос, подходит ли вам лазерная коррекция зрения сейчас и какой вариант лечения будет наиболее разумным именно для вас.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        name: servicesList.find(s => s.key === "syndrom-sukhoho-oka")!,
        lt: {
            textMain:
                "Ми забезпечуємо ефективний та індивідуальний підхід до усунення неприємних симптомів, щоб повернути комфорт та здоров'я вашим очам.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Лікування синдрому сухого ока (ССО) методом MGX та IPL в Києві. IPL терапія сухого ока | EYES ",
                        descriptionSEO: "",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "лікування синдрому сухого ока",
                        text: "Багаторічний досвід роботи наших фахівців і сучасне діагностичне обладнання дозволяють усунути прогресування та ускладнення хвороби.",
                    },
                },
                {
                    type: "preview",
                    data: {
                        image: "/images/dry-eye2.jpg",
                        title: "Синдром сухого ока: діагностика та лікування",
                        text: [
                            "Синдром сухого ока — це стан, коли слізна плівка втрачає стабільність і вже не захищає рогівку належним чином. Звідси сухість, печіння, «пісок», почервоніння і коливання чіткості зору, особливо наприкінці дня. Причини різні: дисфункція мейбомієвих залоз, рідке або неповне моргання за екранами, вікові та гормональні зміни, сухе повітря. Без точної діагностики симптоми закріплюються, тому важливо визначити, який шар сльози порушений, і підібрати цілеспрямоване лікування.",
                            "В нашій клініці діагностика синдрому сухого ока здійснюється за допомогою унікального сертифікованого обладнання IDRA, яке розроблене в Італії спеціально для точного визначення всіх аспектів цієї проблеми.",
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Особливості діагностики:",
                        text: "Ми використовуємо перевірені технології та індивідуально підбираємо режим лікування для кожного пацієнта, діагностика проводится на професійному офтальмологічному апараті IDRA.",
                        slider: [
                            {
                                title: "Комплексний аналіз складу слізної плівки",
                                text: "Слізна плівка складається з кількох шарів, кожен з яких має певний набір функцій. Будь-які відхилення складу або кількості певного компоненту призводить до порушення балансу і, відповідно, загостренню проявів хвороби сухого ока.",
                            },
                            {
                                title: "Виявлення порушень роботи мейбомієвих залоз",
                                text: "У повіках є залози, що виділяють жирний секрет — він захищає слізну плівку від висихання та мікробів. Порушення їхньої роботи викликає ячмінь, халязіон і блефарит. \n3D-зображення залоз допомагає лікарю оцінити їхній стан і контролювати лікування.",
                            },
                            {
                                title: "Перевірка якості кліпання",
                                text: "Моргання — важливий процес для здоров’я повік. Штучні вії, старіння, операції чи стреси можуть погіршувати змикання повік, що знижує зволоження ока й оновлення слізної плівки. Без стимуляції мейбомієві залози поступово відмирають, посилюючи сухість.",
                            },
                            {
                                title: "Обстеження протягом 1 хвилини",
                                text: "Яскраве світло подразнює око, спричинюючи надмірну сльозотечу навіть у здорових пацієнтів. \nВимірювання на апараті IDRA займає по 30 секунд для кожного ока. Таким чином дискомфорт мінімальний, а результати – максимально достовірні.",
                            },
                            {
                                title: "Об’єктивний аналіз результатів",
                                text: "Для обробки виміряний даних програмне забезпечення IDRA застосовує алгоритми із штучним інтелектом та машинним навчанням. Дані обробляються автоматично, мінімізуючи людський фактор. \nТаким чином ви отримуєте об’єктивне розуміння свого стану.",
                            },
                            {
                                title: "Все задокументовано!",
                                text: "Програмне забезпечення зберігає кожне фото та відео, відслідковує зміну параметрів для того, щоб ви були впевнені в доцільності та дієвості лікування.",
                            },
                        ],
                        btn: {
                            btnName: "записатися на прийом",
                            btnLink: "#booking",
                        },
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingBottom: false,
                        data: [
                            {
                                title: "Як лікують синдром сухого ока в нашій клініці?",
                                image: "/images/dry-eye12.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Ми застосовуємо схему лікування, що відповідає вимогам міжнародного товариства здоров’я очної поверхні (TFOS), яка включає:",
                                            },
                                            {
                                                gap: true,
                                                type: "list",
                                                list: [
                                                    [
                                                        {
                                                            bold: true,
                                                            value: "Медикаментозне лікування",
                                                        },
                                                    ],
                                                    [
                                                        {
                                                            bold: true,
                                                            value: "Розігрів застиглого секрету та його ефективне видалення",
                                                        },
                                                    ],
                                                    [
                                                        {
                                                            bold: true,
                                                            value: "IPL терапія",
                                                        },
                                                    ],
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Після обстеження лікар пояснює результати, демонструє зображення та формує персональний план лікування: від щоденної гігієни повік до апаратних процедур і підтримувальної терапії.",
                                            },
                                        ],
                                        greenText:
                                            "Програмне забезпечення з алгоритмами штучного інтелекту автоматично обробляє дані, усуваючи суб’єктивність, а результати зберігаються у вигляді фото та відео для подальшого моніторингу.",
                                    },
                                ],
                            },
                            {
                                title: "Причини сухості очей",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Сухість очей має різні механізми. Під час діагностики на IDRA ми вимірюємо показники слізної плівки, оцінюємо мейбомієві залози та якість моргання, щоб точно визначити причину й обрати лікування.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "Фактори, пов’язані з недостатнім виробництвом водної частини сльози",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Вікові зміни та природне зменшення секреції сльози;",
                                                    "Гормональні коливання (менопауза, вагітність, ендокринні порушення);",
                                                    "Системні захворювання та автоімунні стани (зокрема синдром Шегрена);",
                                                    "Лікарські засоби, що «висушують» слизові (антигістамінні, антидепресанти, сечогінні тощо);",
                                                    "Зневоднення, недостатній питний режим, хронічні захворювання, післяопераційні стани.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "Фактори, пов’язані з підвищеним випаровуванням слізної плівки",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Дисфункція мейбомієвих залоз та поганий ліпідний шар;",
                                                    "Рідке або неповне моргання під час роботи з екранами;",
                                                    "Сухе повітря, кондиціонери, опалення, вітер, пил, дим;",
                                                    "Контактні лінзи, декоративна косметика, нарощування вій, агресивні засоби демакіяжу;",
                                                    "Запальні стани краю повіки (блефарит, демодекоз), розацеа шкіри.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                text: "Якщо відчуваєте «пісок», печіння чи почервоніння — запишіться на діагностику. Точне визначення причини дозволяє підібрати ефективне лікування.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "numberListSection",
                    data: {
                        listTitle: "Етапи",
                        paddingTop: true,
                        paddingBottom: true,
                        list: [
                            {
                                itemTitle:
                                    "Запис на прийом та підготовка до діагностики",
                                itemText: [
                                    "Записатись на діагностику зору можна всього за кілька хвилин телефоном або онлайн на сайті.",
                                    "Спеціальної підготовки не потрібно, але якщо носите м’які контактні лінзи, зніміть їх з вечора (рекомендовано за 12 годин до візиту). Окуляри необхідно взяти з собою для перевірки, а також офтальмологічні обстеження, які проходили раніше – лікар подивиться в динаміці, що змінилося за останній період. Бажано бути не за кермом, тому що буде незначний зоровий дискомфорт деякий час (зір поблизу буде не чітким).",
                                ],
                            },
                            {
                                itemTitle: "Комп’ютерна діагностика зору",
                                itemText: [
                                    "Саме обстеження відбувається швидко та комфортно. Використовуються прецизійні прилади, мікроскопічні методи візуалізації та адаптовані діагностичні тести, які лікар підбирає залежно від конкретної клінічної ситуації.",
                                    "Тривалість діагностики складає 2-2,5 години. Один із найважливіших етапів обстеження — перевірка гостроти зору. Для цього пацієнт читає знаки або літери на таблицях, що розташовані на різних відстанях. Такі тести допомагають точно визначити ступінь порушення та правильно підібрати лінзи чи окуляри.",
                                    "У ряді випадків лікар може використовувати краплі для розширення зіниць. Це необхідно, щоб тимчасово виключити вплив акомодаційної функції ока та отримати точніші дані при дослідженні очного дна.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Висновок за результатами обстеження",
                                itemText: [
                                    "Після проходження діагностики ви отримаєте офіційний протокол із оцінкою всіх параметрів зору та очного здоров'я. Лікар надасть рекомендації щодо подальших дій — від профілактики до конкретного плану лікування.",
                                    "Якщо планується хірургічне втручання, то його обговорення стане ключовою частиною консультації. Усі важливі питання слід поставити та прояснити до моменту операції, щоб ухвалити виважене рішення.",
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "textsColumns",
                    data: {
                        title: "Інноваційне лікування методом IPL",
                        text: "Сучасний апаратний підхід, який цілеспрямовано зменшує запалення краю повік і відновлює стабільність слізної плівки. Поєднання з діагностикою та доглядом забезпечує прогнозований результат і комфорт пацієнта.",
                        blocks: [
                            {
                                title: "Показання для застосування IPL терапії:",
                                text: [
                                    {
                                        type: "list",
                                        list: [
                                            "Синдром сухого ока з переважно випаровувальним компонентом.",
                                            "Дисфункція мейбомієвих залоз і застій секрету, що не коригуються лише краплями.",
                                            "Хронічний блефарит, рецидивні ячмені та халязіони.",
                                            "Телеангіектазії та запалення краю повік при офтальморозацеа.",
                                            "Демодекоз як складова комбінованого лікування.",
                                            "Зниження комфорту при роботі за екранами, відчуття «піску», печіння, почервоніння попри регулярну гігієну повік.",
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Переваги IPL-терапії",
                                text: [
                                    {
                                        type: "list",
                                        list: [
                                            "Патогенетична дія: вплив на мікросудини та запальні механізми, що підтримують сухість.",
                                            "Короткий сеанс без анестезії та періоду реабілітації; відразу можна повернутися до справ.",
                                            "Кероване охолодження забезпечує безпеку для чутливої періорбітальної зони та знижує дискомфорт.",
                                            "Можливість комбінування з апаратним масажем повік для підсилення ефекту.",
                                            "Об’єктивний моніторинг результатів за даними інструментальних вимірювань і фотофіксації.",
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Структура процедури IPL",
                                text: [
                                    {
                                        type: "list",
                                        numeric: true,
                                        list: [
                                            "Первинна консультація та оцінка показань: збір анамнезу, огляд повік, інструментальна діагностика очної поверхні.",
                                            "Підготовка зони: очищення шкіри, захисні окуляри, нанесення контактного гелю.",
                                            "Проведення сеансу: серія світлових імпульсів у проєкції краю повік за офтальмологічним протоколом.",
                                            "За потреби — апаратний розігрів і видалення секрету мейбомієвих залоз, рекомендації щодо домашнього догляду.",
                                            "Фіксація результатів та планування наступного візиту.",
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Курс лікування та ефект:",
                                text: [
                                    {
                                        type: "list",
                                        list: [
                                            "Кількість сеансів: зазвичай 3–4 процедури для стійкого результату; схема може коригуватися індивідуально.",
                                            "Інтервали: 2–3 тижні між сеансами, щоб закріпити протизапальний ефект і відновлення залоз.",
                                            "Тривалість: близько 10–15 хвилин на сеанс (+ час на підготовку та, за показами, масаж повік).",
                                            "Проміжні відчуття: легке тепло або пощипування, короткочасна рожевість шкіри, що минає самостійно.",
                                            "Очікуваний результат: зменшення сухості та подразнення, стабільніша слізна плівка, кращий комфорт під час читання та роботи за комп’ютером, рідші епізоди блефариту й ячменів.",
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Безпека та післяпроцедурний догляд:",
                                text: [
                                    {
                                        type: "text",
                                        text: "Метод має сприятливий профіль безпеки за умови дотримання протоколів і врахування протипоказань. Після сеансу рекомендуємо користуватися SPF 50+ у зоні обробки протягом 7–10 днів, уникати засмаги, сауни та басейну протягом 24–48 годин, відкласти агресивні пілінги чи скраби; макіяж у періорбітальній зоні — не раніше ніж через 12–24 години. Важливо підтримувати гігієну повік і призначений режим крапель. Контрольні огляди дають змогу оцінити динаміку та, за потреби, провести підтримувальні процедури раз на 6–12 місяців, щоб зберігати комфорт і стабільність результату.",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на лікування синдрому сухого ока у Києві",
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часті запитання про лікування синдрому сухого",
                        content: [
                            {
                                question:
                                    "Сухість в очах: які симптоми і коли потрібне лікування?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Найчастіші ознаки — печіння, «пісок», почервоніння, затуманення зору наприкінці дня, світлобоязнь, дискомфорт у лінзах. Якщо відчуваєте сухість очей постійно або симптоми заважають роботі за екранами, це вже привід для обстеження й лікування ССО обох очей. Самолікування «випадковими» краплями рідко дає стабільний ефект — почніть із консультації офтальмолога.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "ССО — це що і як лікують «сухе око»?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "ССО (синдром сухого ока) — порушення стабільності слізної плівки. Лікування підбирають індивідуально: гігієна повік, правильно підібрані зволожувальні краплі (засоби від сухого ока), корекція звичок за комп’ютером, апаратні методи. «Лазерне лікування синдрому сухого ока» як термін використовують неточно — у сучасній офтальмології для випаровувального типу ССО ефективною є IPL-терапія, а не лазер.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "IPL-терапія синдрому сухого ока: що це і як працює?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "IPL (інтенсивне імпульсне світло) м’яко впливає на край повік, зменшує запалення й телеангіектазії, розріджує густий секрет мейбомієвих залоз і стабілізує ліпідний шар слізної плівки. У результаті сльоза менше випаровується — зникає сухість, «пісок» і втома очей. Процедура триває 10–15 хвилин, анестезія не потрібна; за показаннями комбінується з масажем повік (ACTIVA MED) та базовим доглядом.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Скільки потрібно сеансів і коли буде ефект?",
                                answer: [
                                    {
                                        type: "text",
                                        text: " Класичний курс — 3–4 процедури з інтервалом 2–3 тижні. Більшість пацієнтів відчувають полегшення вже після 1–2 візитів, стабільний результат — до кінця курсу. Для контролю динаміки та точного налаштування лікування проводимо інструментальне обстеження (IDRA).",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Скільки це коштує: ціна/вартість обстеження і лікування?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Вартість залежить від обсягу обстеження та індивідуального плану (кількість сеансів IPL, супровідні процедури). Актуальні ціни, наявні акції та знижки уточнюйте під час консультації лікаря або при онлайн-реєстрації. Ми прозоро озвучуємо, що входить у прийом і курс; безкоштовно надаємо попередні рекомендації щодо підготовки до візиту.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Протипоказання, побічні ефекти, недоліки й переваги IPL",
                                answer: [
                                    {
                                        type: "text",
                                        text: "До типових протипоказань належать активні запальні процеси шкіри у зоні обробки, фоточутливість, деякі дерматологічні стани й вагітність/лактація — остаточно вирішує лікар після огляду. Побічні ефекти зазвичай легкі та короткочасні: почервоніння, відчуття тепла, рідше — тимчасова чутливість шкіри. Переваги — короткий час сеансу, відсутність реабілітації, вплив на першопричину (дисфункцію мейбомієвих залоз); можливий недолік — потрібен курс і підтримувальні візити.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Лікування синдрому сухого ока IPL: відгуки й рекомендації",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Відгуки пацієнтів найчастіше відзначають зменшення печіння, «піску» та втоми під кінець дня, кращу переносимість екранів і контактних лінз. Ми радимо орієнтуватися не лише на коментарі, а й на об’єктивні вимірювання під час огляду (IDRA): це дозволяє побачити реальні зміни слізної плівки та отримати персональні рекомендації.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "«Сушить очі» — що робити зараз і куди піти?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Якщо виникла сухість очей і потрібна термінова допомога — уникайте «агресивних» засобів, зніміть лінзи, зробіть перерву від екранів і запишіться на обстеження до офтальмолога. У приватній клініці ви отримаєте швидку консультацію, точний огляд, пояснення «чи варто» робити IPL саме вам і прозорий план лікування. Можна реєструватися онлайн або телефоном; під час прийому лікар відповість на запитання про переваги/недоліки, протипоказання та вартість курсу.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        en: {
            textMain:
                "We provide an effective and individual approach to eliminating unpleasant symptoms to restore comfort and health to your eyes.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Dry Eye Syndrome (DES) treatment with MGX and IPL in Kyiv. IPL therapy for dry eyes | EYES",
                        descriptionSEO: "",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "dry eye syndrome treatment",
                        text: "Many years of experience of our specialists and modern diagnostic equipment allow us to eliminate the progression and complications of the disease.",
                    },
                },
                {
                    type: "preview",
                    data: {
                        image: "/images/dry-eye2.jpg",
                        title: "Dry eye syndrome: diagnosis and treatment",
                        text: [
                            "Dry eye syndrome is a condition in which the tear film loses stability and no longer properly protects the cornea. This causes dryness, burning, a “sand-like” sensation, redness, and fluctuating vision clarity, especially at the end of the day. The reasons vary: meibomian gland dysfunction, infrequent or incomplete blinking while using screens, age- and hormone-related changes, dry air. Without accurate diagnostics, symptoms become chronic, so it is crucial to determine which tear film layer is affected and choose targeted treatment.",
                            "In our clinic, the diagnosis of dry eye syndrome is performed using unique certified equipment — IDRA — developed in Italy specifically for accurate assessment of all aspects of this condition.",
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Diagnostic features:",
                        text: "We use proven technologies and tailor the treatment approach for each patient individually. Diagnostics are performed using the professional ophthalmic device IDRA.",
                        slider: [
                            {
                                title: "Comprehensive tear film composition analysis",
                                text: "The tear film consists of several layers, each with specific functions. Any imbalance or changes in the quantity of any component disrupt stability and increase the symptoms of dry eye disease.",
                            },
                            {
                                title: "Detection of meibomian gland dysfunction",
                                text: "The eyelids contain glands that produce an oily secretion — it protects the tear film from evaporation and microbes. Dysfunction leads to stye, chalazion, and blepharitis.\n3D imaging of the glands helps the doctor assess their condition and monitor treatment.",
                            },
                            {
                                title: "Blink quality evaluation",
                                text: "Blinking is essential for healthy eyelids. False eyelashes, aging, surgery, or stress may lead to incomplete blinking, reducing eye hydration and tear film renewal. Without stimulation, meibomian glands gradually degrade, worsening dryness.",
                            },
                            {
                                title: "1-minute examination",
                                text: "Bright light irritates the eye, causing excessive tearing even in healthy patients.\nMeasurement with the IDRA device takes about 30 seconds per eye — ensuring minimal discomfort and highly accurate results.",
                            },
                            {
                                title: "Objective results analysis",
                                text: "To process measurements, IDRA software uses artificial intelligence and machine-learning algorithms. Data is analyzed automatically, minimizing the human factor.\nThis ensures a clear and objective understanding of your eye condition.",
                            },
                            {
                                title: "Everything documented!",
                                text: "The software stores all photos and videos, tracks changes in parameters so that you can clearly see the progress and effectiveness of the treatment.",
                            },
                        ],
                        btn: {
                            btnName: "book an appointment",
                            btnLink: "#booking",
                        },
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingBottom: false,
                        data: [
                            {
                                title: "How is dry eye syndrome treated in our clinic?",
                                image: "/images/dry-eye12.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "We apply a treatment protocol that meets the standards of the Tear Film & Ocular Surface Society (TFOS), which includes:",
                                            },
                                            {
                                                gap: true,
                                                type: "list",
                                                list: [
                                                    [
                                                        {
                                                            bold: true,
                                                            value: "Medication therapy",
                                                        },
                                                    ],
                                                    [
                                                        {
                                                            bold: true,
                                                            value: "Warming up and clearing the blocked meibomian secretion",
                                                        },
                                                    ],
                                                    [
                                                        {
                                                            bold: true,
                                                            value: "IPL therapy",
                                                        },
                                                    ],
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "After the examination, the doctor explains the results, shows the images, and creates a personalized treatment plan — from daily eyelid hygiene to hardware procedures and maintenance therapy.",
                                            },
                                        ],
                                        greenText:
                                            "AI-based software automatically processes diagnostic data, eliminating subjectivity, while the results are stored as photos and videos for follow-up monitoring.",
                                    },
                                ],
                            },
                            {
                                title: "Causes of dry eyes",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Dry eyes can have different mechanisms. During IDRA diagnostics, we measure tear film parameters, assess meibomian glands, and blinking quality to accurately determine the cause and choose proper treatment.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "Factors related to insufficient production of the aqueous layer of the tear film",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Age-related changes and natural reduction of tear secretion;",
                                                    "Hormonal fluctuations (menopause, pregnancy, endocrine disorders);",
                                                    "Systemic diseases and autoimmune conditions (including Sjögren’s syndrome);",
                                                    "Medications that ‘dry out’ mucous membranes (antihistamines, antidepressants, diuretics, etc.);",
                                                    "Dehydration, low fluid intake, chronic illnesses, postoperative conditions.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "Factors related to increased evaporation of the tear film",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Meibomian gland dysfunction and poor lipid layer;",
                                                    "Rare or incomplete blinking during screen use;",
                                                    "Dry air, air conditioners, heating, wind, dust, smoke;",
                                                    "Contact lenses, decorative cosmetics, eyelash extensions, harsh makeup removers;",
                                                    "Inflammatory conditions of the eyelid margin (blepharitis, demodicosis), skin rosacea.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                text: "If you feel sandiness, burning, or redness — schedule a diagnosis. Accurate identification of the cause allows for effective treatment selection.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: true,
                        paddingBottom: true,
                        listTitle: "Stages",
                        list: [
                            {
                                itemTitle:
                                    "Appointment and preparation for diagnostics",
                                itemText: [
                                    "You can schedule an eye diagnostics appointment within a few minutes by phone or online via the website.",
                                    "No special preparation is needed, but if you wear soft contact lenses, remove them the night before (recommended 12 hours prior to the visit). Bring your eyeglasses for verification, as well as any previous ophthalmic examinations so the doctor can evaluate changes over time. It is recommended not to drive afterward because you may experience slight visual discomfort for a short time (near vision may be blurry).",
                                ],
                            },
                            {
                                itemTitle: "Computer vision diagnostics",
                                itemText: [
                                    "The examination is quick and comfortable. Precision devices, microscopic visualization methods, and adapted diagnostic tests are used, selected according to each specific clinical situation.",
                                    "The diagnostics take 2–2.5 hours. One of the most important steps is visual acuity testing. The patient reads symbols or letters on charts placed at different distances. These tests help accurately determine the degree of impairment and correctly select lenses or glasses.",
                                    "In some cases, the doctor may use eye drops to dilate the pupils. This is necessary to temporarily exclude the influence of accommodation and obtain more accurate data when examining the fundus.",
                                ],
                            },
                            {
                                itemTitle: "Diagnostics results and conclusion",
                                itemText: [
                                    "After completing the diagnostics, you will receive an official report with an assessment of all vision parameters and eye health. The doctor will provide recommendations for further steps — from prevention to a specific treatment plan.",
                                    "If surgical intervention is planned, its discussion will be a key part of the consultation. It is important to ask and clarify all critical questions before the operation to make an informed decision.",
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for dry eye syndrome treatment in Kyiv",
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about dry eye treatment",
                        content: [
                            {
                                question:
                                    "Dry eyes: what are the symptoms and when is treatment needed?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The most common signs include burning, “grittiness”, redness, blurry vision by the end of the day, light sensitivity, and contact lens discomfort. If you constantly feel dryness or symptoms interfere with screen work, it’s already a reason for examination and treatment of dry eye disease in both eyes. Self-treatment with random drops rarely gives a stable effect — start with an ophthalmologist consultation.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "DED — what is dry eye disease and how is it treated?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "DED (dry eye disease) is a condition where the tear film loses stability. Treatment is personalized: eyelid hygiene, properly selected lubricating eye drops, adjusting screen habits, and instrumental therapies. The term “laser treatment for dry eye” is often used incorrectly — in modern ophthalmology, IPL therapy is effective for evaporative DED rather than laser.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "IPL therapy for dry eye: what is it and how does it work?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "IPL (Intense Pulsed Light) gently treats the eyelid margins, reduces inflammation and telangiectasias, liquefies thick meibomian gland secretions, and stabilizes the lipid layer of the tear film. As a result, the tear evaporates less — dryness, “grittiness”, and eye fatigue decrease. The procedure takes 10–15 minutes, local anesthesia is not required; if indicated, it is combined with eyelid massage (ACTIVA MED) and standard care.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How many sessions are needed and when will the effect appear?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "A standard course includes 3–4 procedures with an interval of 2–3 weeks. Most patients feel relief after 1–2 visits, while a stable result is achieved by the end of the course. To monitor dynamics and fine-tune treatment, we perform instrumental diagnostics (IDRA).",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How much does it cost: price of examination and treatment?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The cost depends on the diagnostic amount and individual plan (number of IPL sessions, additional procedures). Current prices, promotions and discounts can be clarified during consultation or with online registration. We clearly explain what is included in the visit and the course; preliminary preparation recommendations are provided free of charge.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Contraindications, side effects, disadvantages and advantages of IPL",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Typical contraindications include active skin inflammation in the treatment area, photosensitivity, certain dermatological conditions and pregnancy / breastfeeding — the final decision is made by the doctor after examination. Side effects are usually mild and short-term: redness, warmth, rarely — temporary skin sensitivity. Advantages: quick sessions, no downtime, addressing the root cause (meibomian gland dysfunction); possible drawback — a full course and maintenance visits are required.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Dry eye IPL treatment: reviews and recommendations",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Patients often report reduced burning, “grittiness” and end-of-day fatigue, and improved tolerance of screens and contact lenses. We recommend relying not only on reviews but also on objective measurements during diagnostics (IDRA): this shows real improvements in the tear film and helps personalize treatment.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "“Eyes feel dry” — what to do right now and where to go?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "If dryness appears and urgent help is needed — avoid harsh products, remove contact lenses, take a break from screens and book an eye examination. In a private clinic you receive quick consultation, accurate diagnostics, an explanation whether IPL is right for you, and a transparent treatment plan. You can register online or by phone; during the visit, the doctor will answer questions about benefits/risks, contraindications, and treatment cost.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        ru: {
            textMain:
                "Мы обеспечиваем эффективный и индивидуальный подход к устранению неприятных симптомов, чтобы вернуть комфорт и здоровье вашим глазам.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Лечение синдрома сухого глаза (ССГ) методом MGX и IPL в Киеве. IPL-терапия сухого глаза | EYES",
                        descriptionSEO: "",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "лечение синдрома сухого глаза",
                        text: "Многолетний опыт работы наших специалистов и современное диагностическое оборудование позволяют устранить прогрессирование и усложнение болезни.",
                    },
                },
                {
                    type: "preview",
                    data: {
                        image: "/images/dry-eye2.jpg",
                        title: "Синдром сухого глаза: диагностика и лечение",
                        text: [
                            "Синдром сухого глаза — это состояние, при котором слёзная плёнка теряет стабильность и перестаёт должным образом защищать роговицу. Из-за этого возникают сухость, жжение, ощущение «песка», покраснение и колебания чёткости зрения, особенно к концу дня. Причины разные: дисфункция мейбомиевых желез, редкое или неполное моргание при работе за экранами, возрастные и гормональные изменения, сухой воздух. Без точной диагностики симптомы закрепляются, поэтому важно определить, какой слой слезы нарушен, и подобрать целенаправленное лечение.",
                            "В нашей клинике диагностика синдрома сухого глаза проводится с помощью уникального сертифицированного оборудования IDRA, разработанного в Италии специально для точного определения всех аспектов этого состояния.",
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Особенности диагностики:",
                        text: "Мы используем проверенные технологии и индивидуально подбираем режим лечения каждому пациенту. Диагностика проводится на профессиональном офтальмологическом оборудовании IDRA.",
                        slider: [
                            {
                                title: "Комплексный анализ состава слезной пленки",
                                text: "Слезная пленка состоит из нескольких слоёв, каждый из которых выполняет важные функции. Любые отклонения состава или количества компонентов нарушают баланс и усиливают проявления синдрома сухого глаза.",
                            },
                            {
                                title: "Выявление нарушений работы мейбомиевых желез",
                                text: "В веках есть железы, выделяющие жирный секрет — он защищает слезную пленку от пересыхания и микробов. Нарушение их работы вызывает ячмень, халязион и блефарит.\n3D-изображения желез помогают врачу оценить их состояние и контролировать лечение.",
                            },
                            {
                                title: "Оценка качества моргания",
                                text: "Моргание жизненно важно для здоровья век. Искусственные ресницы, возрастные изменения, операции или стресс могут ухудшать смыкание век, что снижает увлажнение глаза и обновление слезной пленки. Без стимуляции мейбомиевые железы постепенно атрофируются, усиливая сухость.",
                            },
                            {
                                title: "Обследование за 1 минуту",
                                text: "Яркий свет раздражает глаз и вызывает обильное слезотечение даже у здоровых людей.\nИзмерение на аппарате IDRA занимает около 30 секунд на каждый глаз — минимум дискомфорта и максимальная достоверность результатов.",
                            },
                            {
                                title: "Объективный анализ результатов",
                                text: "Для обработки данных программное обеспечение IDRA использует алгоритмы искусственного интеллекта и машинного обучения. Данные анализируются автоматически, минимизируя человеческий фактор.\nТак вы получаете максимально объективное понимание состояния глаз.",
                            },
                            {
                                title: "Всё задокументировано!",
                                text: "Программа сохраняет каждое фото и видео, отслеживает динамику параметров, чтобы вы были уверены в эффективности и обоснованности лечения.",
                            },
                        ],
                        btn: {
                            btnName: "записаться на приём",
                            btnLink: "#booking",
                        },
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingBottom: false,
                        data: [
                            {
                                title: "Как лечат синдром сухого глаза в нашей клинике?",
                                image: "/images/dry-eye12.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Мы применяем схему лечения, соответствующую рекомендациям Международного общества здоровья глазной поверхности (TFOS), которая включает:",
                                            },
                                            {
                                                gap: true,
                                                type: "list",
                                                list: [
                                                    [
                                                        {
                                                            bold: true,
                                                            value: "Медикаментозное лечение",
                                                        },
                                                    ],
                                                    [
                                                        {
                                                            bold: true,
                                                            value: "Прогревание застоявшегося секрета и его эффективное удаление",
                                                        },
                                                    ],
                                                    [
                                                        {
                                                            bold: true,
                                                            value: "IPL-терапия",
                                                        },
                                                    ],
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "После обследования врач объясняет результаты, показывает изображения и формирует персональный план лечения: от ежедневной гигиены век до аппаратных процедур и поддерживающей терапии.",
                                            },
                                        ],
                                        greenText:
                                            "Программное обеспечение с алгоритмами искусственного интеллекта автоматически обрабатывает данные, устраняя субъективность, а результаты сохраняются в виде фото и видео для последующего мониторинга.",
                                    },
                                ],
                            },
                            {
                                title: "Причины сухости глаз",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Сухость глаз имеет разные механизмы. Во время диагностики на IDRA мы измеряем параметры слёзной плёнки, оцениваем мейбомиевые железы и качество моргания, чтобы точно определить причину и выбрать лечение.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "Факторы, связанные с недостаточным образованием водной части слезы",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Возрастные изменения и естественное снижение секреции слёз;",
                                                    "Гормональные колебания (менопауза, беременность, эндокринные нарушения);",
                                                    "Системные заболевания и аутоиммунные состояния (в том числе синдром Шегрена);",
                                                    "Лекарственные средства, «высушивающие» слизистые (антигистаминные, антидепрессанты, мочегонные и др.);",
                                                    "Обезвоживание, недостаток питьевого режима, хронические болезни, послеоперационные состояния.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "Факторы, связанные с повышенным испарением слёзной плёнки",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Дисфункция мейбомиевых желез и плохой липидный слой;",
                                                    "Редкое или неполное моргание при работе за экраном;",
                                                    "Сухой воздух, кондиционеры, отопление, ветер, пыль, дым;",
                                                    "Контактные линзы, декоративная косметика, наращивание ресниц, агрессивные средства для демакияжа;",
                                                    "Воспалительные заболевания края века (блефарит, демодекоз), розацеа кожи.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                text: "Если вы чувствуете «песок», жжение или покраснение — запишитесь на диагностику. Точное определение причины позволяет подобрать эффективное лечение.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: true,
                        paddingBottom: true,
                        listTitle: "Этапы",
                        list: [
                            {
                                itemTitle:
                                    "Запись на приём и подготовка к диагностике",
                                itemText: [
                                    "Записаться на диагностику зрения можно всего за несколько минут по телефону или онлайн на сайте.",
                                    "Специальная подготовка не требуется, но если вы носите мягкие контактные линзы, снимите их с вечера (рекомендуется за 12 часов до визита). Очки необходимо взять с собой для проверки, а также предыдущие офтальмологические обследования — врач оценит, что изменилось за последнее время. Желательно не быть за рулём, так как некоторое время может сохраняться лёгкий зрительный дискомфорт (ближнее зрение будет нечётким).",
                                ],
                            },
                            {
                                itemTitle: "Компьютерная диагностика зрения",
                                itemText: [
                                    "Обследование проходит быстро и комфортно. Используются прецизионные приборы, микроскопические методы визуализации и адаптированные диагностические тесты, которые врач подбирает в зависимости от клинической ситуации.",
                                    "Продолжительность диагностики составляет 2–2,5 часа. Один из важнейших этапов — проверка остроты зрения. Пациент читает знаки или буквы на таблицах на разных расстояниях. Эти тесты помогают точно определить степень нарушения и правильно подобрать линзы или очки.",
                                    "В ряде случаев врач может использовать капли для расширения зрачков. Это необходимо, чтобы временно исключить влияние аккомодации и получить более точные данные при исследовании глазного дна.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Заключение по результатам обследования",
                                itemText: [
                                    "После диагностики вы получите официальный протокол с оценкой всех параметров зрения и здоровья глаз. Врач предоставит рекомендации по дальнейшим действиям — от профилактики до конкретного плана лечения.",
                                    "Если планируется хирургическое вмешательство, его обсуждение станет ключевой частью консультации. Важно задать и прояснить все вопросы до операции, чтобы принять взвешенное решение.",
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на лечение синдрома сухого глаза в Киеве",
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Частые вопросы о лечении синдрома сухого глаза",
                        content: [
                            {
                                question:
                                    "Сухость глаз: какие симптомы и когда нужно лечение?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Наиболее частые признаки — жжение, «песок», покраснение, затуманивание зрения к концу дня, светобоязнь, дискомфорт при ношении линз. Если сухость возникает постоянно или симптомы мешают работе за компьютером — это повод для обследования и лечения синдрома сухого глаза обоих глаз. Самолечение случайными каплями редко даёт стабильный результат — начните с консультации офтальмолога.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "ССГ — что это такое и как лечат «сухой глаз»?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "ССГ (синдром сухого глаза) — нарушение стабильности слёзной плёнки. Лечение подбирается индивидуально: гигиена век, правильно подобранные увлажняющие капли, корректировка привычек при работе за экранами, аппаратные методы. Термин «лазерное лечение сухого глаза» часто используется неверно — в современной офтальмологии при испарительном типе ССГ эффективна IPL-терапия, а не лазер.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "IPL-терапия при синдроме сухого глаза: что это и как работает?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "IPL (интенсивный импульсный свет) мягко воздействует на край век, уменьшает воспаление и телеангиэктазии, разжижает густой секрет мейбомиевых желёз и стабилизирует липидный слой слёзной плёнки. В итоге слеза меньше испаряется — исчезает сухость, «песок» и усталость глаз. Процедура длится 10–15 минут, анестезия не требуется; по показаниям сочетается с массажем век (ACTIVA MED) и базовым уходом.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько нужно сеансов и когда будет результат?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Классический курс — 3–4 процедуры с интервалом 2–3 недели. Большинство пациентов ощущают улучшение уже после 1–2 визитов, устойчивый результат — к концу курса. Для контроля динамики и точной настройки лечения выполняем инструментальное обследование (IDRA).",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько это стоит: цена обследования и лечения?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Стоимость зависит от объёма диагностики и индивидуального плана (количество сеансов IPL, сопутствующие процедуры). Актуальные цены, акции и скидки уточняйте при консультации или при онлайн-записи. Мы прозрачно озвучиваем, что входит в приём и курс; предварительные рекомендации по подготовке предоставляем бесплатно.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Противопоказания, побочные эффекты, недостатки и преимущества IPL",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Типичные противопоказания: активные воспалительные процессы кожи в зоне обработки, фоточувствительность, некоторые дерматологические состояния, беременность/лактация — окончательное решение принимает врач после осмотра. Побочные эффекты обычно лёгкие и кратковременные: покраснение, ощущение тепла, реже — временная чувствительность кожи. Преимущества — короткий сеанс, отсутствие реабилитации, воздействие на первопричину (дисфункцию мейбомиевых желёз); возможный недостаток — необходим курс и поддерживающие визиты.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Лечение синдрома сухого глаза IPL: отзывы и рекомендации",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Пациенты чаще всего отмечают уменьшение жжения, «песка» и усталости к концу дня, лучшую переносимость экранов и контактных линз. Мы рекомендуем ориентироваться не только на отзывы, но и на объективные измерения при осмотре (IDRA): это показывает реальные изменения слёзной плёнки и помогает персонализировать лечение.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "«Сушит глаза» — что делать сейчас и куда обратиться?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Если появилась сухость глаз и нужна срочная помощь — избегайте агрессивных средств, снимите линзы, сделайте перерыв от экранов и запишитесь к офтальмологу на обследование. В частной клинике вы получите быструю консультацию, точный осмотр, объяснение — подходит ли вам IPL, и прозрачный план лечения. Можно записаться онлайн или по телефону; на приёме врач ответит на вопросы о преимуществах/недостатках, противопоказаниях и стоимости курса.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        name: servicesList.find(s => s.key === "vaiku-akiu-patikra")!,
        lt: {
            textMain:
                "У Дитячій клініці Злата проводимо перевірку зору у дітей від немовлят до підлітків.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Vaikų oftalmologas Vilniuje – akių patikra ir regos patikrinimas vaikams su siuntimu | Naujas Regėjimas",
                        descriptionSEO:
                            "Vaikų oftalmologijos klinika „Naujas Regėjimas“. 👁️‍🗨️ Akių patikra vaikams ir vaikų regos diagnostika Vilniuje. ✴️ Profilaktinė apžiūra, regėjimo patikrinimas ir konsultacija pas vaikų oftalmologą. ✅ Palanki regos tyrimų kaina. 👍 Laiko patikrinta reputacija",
                    },
                },
                {
                    type: "hero",
                    data: {
                        image: "/images/children-service.jpg",
                        imgPositionMobile: " right 25% top",
                        imgPositionDesktop: "right 25% top 10%",
                        title: "Vaikų klinika",
                        text: "Privati vaikų oftalmologija Vilniuje: vaikų regos patikrinimas nuo kūdikystės iki paauglystės, išplėstinė diagnostika (frakcinė cikloplegija, ragenos topografija, biometriniai matavimai) ir aparatinis gydymas.",
                    },
                },
                {
                    type: "preview",
                    data: {
                        image: "/images/zlata2.jpg",
                        title: "Vaikų klinika — vaikų akių patikra Vilniuje",
                        text: [
                            "Vaikų klinikoje atliekama vaikų akių patikra ir vaikų regos patikrinimas nuo kūdikių iki paauglių: tikslūs tyrimai, individuali taktika ir aiškios rekomendacijos tėvams. Jei ieškote, kur atlikti akių patikrinimą vaikams ramiai ir be papildomo streso — užsiregistruokite vizitui pas vaikų oftalmologą. Centro administratoriai suteiks informaciją apie aktualias kainas, galiojančius pasiūlymus ir galimas nuolaidas, taip pat padės pasirinkti patogų vizito laiką privačiai vaikų akių apžiūrai Vilniuje.",
                        ],
                        textUp: "1 mln",
                        textDown: "konsultacijų \natlikta",
                        fractionUp: true,
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: false,
                        paddingBottom: false,
                        data: [
                            {
                                title: "Kada kreiptis: pirmieji signalai",
                                image: "/images/zlata5.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Vaikų klinika rekomenduoja neatidėlioti, jei pastebite net nedidelius vaiko elgesio ar įpročių pokyčius. Nusiskundimai akių nuovargiu, „rūku“, dvejinimusi, vakariniais galvos skausmais, prisimerkimais ar pernelyg arti laikomais įrenginiais gali rodyti prasidedančią trumparegystę, toliaregystę, astigmatizmą ar binokulinio regėjimo sutrikimus. Ikimokyklinio amžiaus vaikams nerimą kelia dažnas akių trynimas, sustiprėjęs mirksėjimas, atsisakymas dėlionių ir smulkių žaidimų; mokyklinio amžiaus vaikams — suprastėjusi koncentracija, sunkumai skaitant nuo lentos, netaisyklinga laikysena, sąsiuvinio artinimas prie veido.",
                                            },
                                            {
                                                type: "text",
                                                text: "Atkreipkite dėmesį, jei akys „išsiskiria“, nuotraukose matomas epizodinis žvairumas arba „raudona akis“ atrodo asimetriška — tai priežastis užsiregistruoti konsultacijai Vaikų klinikoje. Taip pat indikacijos gali būti ankstyvas ir ilgas naudojimasis ekraniniais įrenginiais, paveldima trumparegystė, neišnešiotumas, alergijos bei nusiskundimai sausumu ar deginimu po užsiėmimų. Mūsų profilaktinė akių patikra vaikams apima amžiui pritaikytus testus, o prireikus — diagnostiką su frakcine cikloplegija, ragenos topografiją ir akies ašinio ilgio kontrolę, kad laiku koreguotume rizikas, sulėtintume nepageidaujamą dinamiką ir sumažintume ambliopijos tikimybę.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Kompleksinis patikrinimas: tiksli diagnostika ir gydymo planas",
                                image: "/images/perevirka3.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Vaikų klinikoje vertinama refrakcija (įskaitant frakcinę cikloplegiją), stereoregėjimas, fuziniai rezervai, akių padėtis, akių dugno būklė ir akies obuolio augimo tempai. Pagal rezultatus gydytojas sudaro individualų planą: optinė korekcija, aparatinis regos gydymas vaikams, stebėjimo grafikas ir pratimai namuose. Tėvai gauna aiškią išvadą, skaidrias kainas, rekomendacijas ir informaciją, kiek kainuoja kiekvienas etapas. Taip pat aptariame tikėtiną dinamiką (kada gali pasirodyti pirmieji pokyčiai), paprastai paaiškiname kiekvienos metodikos privalumus ir ribojimus bei įteikiame regos higienos namuose atmintinę.",
                                            },
                                            {
                                                type: "text",
                                                text: "Visos procedūros vyksta žaismingai ir draugiškai, o kontroliniai patikrinimai planuojami individualiai (atsižvelgiant į mokyklą, būrelius ir regos krūvį), kad būtų palaikomas stabilus vaikų funkcinių rodiklių gerėjimas.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: true,
                        paddingBottom: true,
                        title: "Kodėl renkasi Vaikų kliniką",
                        text: [
                            "Privati vaikų oftalmologijos klinika „viskas vienoje vietoje“: diagnostika, gydymas ir rezultatų kontrolė. Patogi aplinka, moderni įranga, žaidybiniai metodai ir išsamios išvados mokyklai / darželiui.",
                            "Vaikų klinikoje paaiškiname indikacijas, metodikų privalumus ir galimus ribojimus, teikiame subalansuotas rekomendacijas, atvirai kalbame apie kainas ir pateikiame pacientų atsiliepimus.",
                        ],
                        image: "/images/children-hero.jpg",
                        listTitle: "Vaikų diagnostikos etapai klinikoje",
                        list: [
                            {
                                itemTitle:
                                    "Pirminis patikrinimas ir konsultacija",
                                itemText: [
                                    "Užsiregistruoti regėjimo patikrai vaikams galima per kelias minutes — telefonu arba internetu.",
                                    "Vaikų klinikoje surenkame nusiskundimus ir anamnezę, atliekame žaismingą regėjimo aštrumo patikrą, bazinį binokulinių funkcijų bei akių padėties įvertinimą, apžiūrime priekinį akies segmentą. Pateikiame regos higienos rekomendacijas ir nustatome, ar reikalingas išplėstinis ištyrimas (cikloplegija, topografija, biometriniai matavimai). Iš karto pateikiame orientacinę kito etapo kainą.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Išplėstiniai matavimai su cikloplegija",
                                itemText: [
                                    "Atliekame refraktometriją / skiaskopiją taikant frakcinę cikloplegiją, ragenos keratotopografiją / tomografiją tiksliam astigmatizmo nustatymui, oftalmoskopiją medikamentiškai išplėtus vyzdį, matuojame akies ašinį ilgį, tikriname stereoregėjimą ir fuzinius rezervus. Rezultatus paaiškiname suprantamai ir fiksuojame protokole.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Individualus gydymo ir stebėjimo planas",
                                itemText: [
                                    "Klinikos komanda aptaria rezultatus su tėvais, parenka korekciją (akiniai / lęšiai), esant indikacijoms paskiria aparatinį gydymą, pateikia pratimus namuose ir kontrolinių vizitų grafiką. Išduodame rašytinę išvadą, kurso kainos skaičiavimą ir nuorodas į atsiliepimus.",
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        paddingBottom: true,
                        title: "Diagnostinių tyrimų sąrašas",
                        text: "Diagnostikos metu atliekami tyrimai, skirti išsamiai įvertinti regos sistemą:",
                        slider: [
                            {
                                title: "Viziometrija (regėjimo aštrumo patikra)",
                                text: "Įvertiname, kaip vaikas mato į tolį ir iš arti. Mažiesiems naudojame paveikslėlius vietoj raidžių, mokyklinio amžiaus vaikams — standartines lenteles. Testas atliekamas žaismingai, kad vaikas nepatirtų streso.",
                            },
                            {
                                title: "Tonometria (akispūdis)",
                                text: "Taikome bekontaktę pneumatonometrą — trumpą „oro srovę“, padedančią atmesti glaukomą ir kitas būkles. Procedūra trunka kelias sekundes ir paprastai toleruojama ramiai.",
                            },
                            {
                                title: "Refraktometrija",
                                text: "Autorefraktometru nustatome akies lūžio galią: trumparegystę, toliaregystę, astigmatizmą. Prireikus papildome skiaskopija ir frakcine cikloplegija (lašai laikinai „išjungia“ akomodaciją), kad gautume tikslius duomenis akinių / lęšių receptui.",
                            },
                            {
                                title: "Biometrija (ašinis ilgis ir akies parametrai)",
                                text: "Bekontakčiai matuojame akies ilgį, priekinės kameros gylį, lęšiuko storį. Tai svarbu stebint trumparegystės progresavimą vaikams ir planuojant tolimesnę priežiūrą.",
                            },
                            {
                                title: "Pachimetrija (ragenos storis)",
                                text: "Šviesos arba ultragarso prietaisu greitai ir neskausmingai išmatuojamas ragenos storis. Duomenys reikalingi akispūdžio interpretacijai, refrakcinių intervencijų planavimui ir kontrolei po traumų / uždegimų.",
                            },
                            {
                                title: "Keratotopografija (ragenos „žemėlapis“)",
                                text: "Nustatome ragenos formą ir kreivumą. Vaikams tai padeda aptikti astigmatizmą, ankstyvus keratokonuso požymius paaugliams ir parinkti tinkamą optinę korekciją. Procedūra bekontaktė.",
                            },
                            {
                                title: "Perimetrija (regos laukas)",
                                text: "Tiriame, kokią erdvės dalį vaikas aprėpia fiksuodamas žvilgsnį. Naudinga įtariant regos nervo pažeidimus, neurooftalmologines būkles ir rizikų kontrolei. Užduotį paaiškiname paprastai.",
                            },
                            {
                                title: "Biomikroskopija (plyšinė lempa)",
                                text: "Tai „akies mikroskopas“, kuriuo gydytojas detaliai apžiūri vokus, rageną, rainelę, lęšiuką. Vaikas sėdi patogiai, specialistas komentuoja kiekvieną žingsnį — skausmo nėra.",
                            },
                            {
                                title: "Akių dugno apžiūra per lęšį",
                                text: "Įlašinę vyzdį plečiančių lašų, įvertiname tinklainę, makulą ir regos nervo diską. Metodas leidžia nustatyti įgimtus ypatumus, trumparegystės pokyčius, kraujagyslinius ir uždegiminius procesus. Esant jautrumui, naudojame vietinę nejautrą lašais.",
                            },
                            {
                                title: "Dioptrimetrija (akinių patikra)",
                                text: "Išmatuojame turimų akinių optinę galią: sferą, cilindrą, ašį, tarpvydinį atstumą. Tai padeda įvertinti, ar akiniai tinka ir ar reikia atnaujinti receptą.",
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Vaikų akių patikros kaina Vilniuje",
                    },
                },
                { type: "giftCTA" },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Dažnai užduodami klausimai apie vaikų akių patikrą",
                        content: [
                            {
                                question:
                                    "Kiek kainuoja vaikų regos patikrinimas Vaikų klinikoje ir kas įeina į kainą?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Kaina priklauso nuo tyrimų apimties: ar reikalinga cikloplegija, topografija ar biometrija. Registratūra pateiks paketų kainas ir padės pasirinkti optimalų vizitą.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Nuo kokio amžiaus rekomenduojama atlikti akių apžiūrą?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Pirmasis patikrinimas atliekamas kūdikiams; planiniai vizitai — 1 metų, 3 metų amžiaus, prieš mokyklą ir kasmet mokyklinio amžiaus vaikams, net jei nusiskundimų nėra.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Ar tyrimai ir aparatinis gydymas yra skausmingi?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Ne. Procedūros saugios, pritaikytos vaikams ir dažnai vyksta žaidimo forma. Po lašų gali būti trumpalaikis jautrumas šviesai.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Ar aparatinis gydymas gali padėti be operacijos?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Taip, anksti nustačius ambliopiją ar binokulinio regėjimo sutrikimus. Gydytojas paaiškins konkrečių metodikų privalumus ir ypatumus.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kaip dažnai kartoti kursus ir kontrolinius vizitus?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Dažniausiai skiriama 10–15 užsiėmimų; pakartojimas po 3–6 mėn. pagal indikacijas. Kontrolės grafiką sudaro gydytojas.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Ar yra atsiliepimų ar rekomendacijų?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Taip, tėvų atsiliepimai ir komentarai yra prieinami. Administratorius gali atsiųsti nuorodą arba pavyzdžius pagal užklausą.",
                                    },
                                ],
                            },
                            {
                                question: "Ar taikomos akcijos ir nuolaidos?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Periodiškai taikomos akcijos ir nuolaidos diagnostikos paketams bei gydymo kursams — pasitikslinkite registruojantis.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Privati ar valstybinė oftalmologija: ką rinktis?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Vaikų klinika užtikrina greitą priėmimą, aiškų maršrutą, išsamias išvadas ir skaidrias kainas. Galutinį sprendimą priima tėvai; mes suteiksime visą reikalingą informaciją.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        en: {
            textMain:
                "At Zlata Children's Clinic, we provide eye examinations for children — from infants to teenagers.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Eye Clinic for Children in Vilnius – Pediatric Ophthalmology Clinic (Child Vision Testing) | New Vision Clinic",
                        descriptionSEO:
                            "Pediatric ophthalmology clinic (eye doctor for children). Pediatric ophthalmologist consultation at New Vision Clinic. ✅ Vision testing for children — advanced diagnostics and effective treatment. ✅ Affordable vision examination prices. 👍 A reputation proven over time",
                    },
                },
                {
                    type: "hero",
                    data: {
                        image: "/images/children-service.jpg",
                        imgPositionMobile: " right 25% top",
                        imgPositionDesktop: "right 25% top 10%",
                        title: "Children's Clinic",
                        text: "Private paediatric ophthalmology in Vilnius: eye examinations for children from infants to teenagers, extended diagnostics (fractional cycloplegia, corneal topography, biometry) and device‑based treatment.",
                    },
                },
                {
                    type: "preview",
                    data: {
                        image: "/images/zlata2.jpg",
                        title: "Children’s Clinic — paediatric ophthalmology in Vilnius",
                        text: [
                            "At the Children’s Clinic we provide eye and vision checks for children from infancy to adolescence: precise assessments, an individual care plan and clear guidance for parents. If you are looking for a calm, stress‑free place to have your child’s eyes checked, book an ophthalmologist consultation. Our administrators will advise on current prices, active offers and possible discounts, and will help you choose a convenient appointment time at a private children’s ophthalmology clinic in Vilnius.",
                        ],
                        textUp: "1 m",
                        textDown: "consultations conducted",
                        fractionUp: true,
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: false,
                        paddingBottom: false,
                        data: [
                            {
                                title: "When to book: early warning signs",
                                image: "/images/zlata5.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "The Children’s Clinic recommends not postponing an examination if you notice even minor changes in your child’s behaviour or habits. Complaints of eye fatigue, “foggy” vision, double vision, evening headaches, squinting, or holding gadgets very close may indicate the onset of myopia, hyperopia, astigmatism or binocular vision disorders. In preschoolers, warning signs include frequent eye rubbing, excessive blinking and avoiding puzzles or fine‑motor games; in school‑age children — reduced concentration, difficulty reading the board, poor posture and bringing notebooks close to the face.",
                                            },
                                            {
                                                type: "text",
                                                text: "Pay attention if the eyes appear to “drift”, intermittent strabismus is seen in photos, or a “red eye” looks asymmetrical — this is a reason to schedule a consultation at the Children’s Clinic. Other indications include early and prolonged screen use, hereditary myopia, prematurity, allergies, and complaints of dryness or burning after classes. Our routine vision check for children includes age‑appropriate tests, and, when needed, diagnostics with fractional cycloplegia, corneal topography and axial length monitoring to adjust risks in time, slow undesirable progression and reduce the likelihood of amblyopia.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Comprehensive assessment: accurate diagnosis and a treatment plan",
                                image: "/images/perevirka3.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "At the Children’s Clinic we evaluate refraction (including under fractional cycloplegia), stereo vision, fusion reserves, ocular alignment, the condition of the fundus and the rate of eyeball growth. Based on the results, the doctor prepares a personalised plan: optical correction, device‑based vision therapy for children, a follow‑up schedule and home exercises. Parents receive a clear written summary, transparent pricing, recommendations and information on the cost of each step. We also discuss expected dynamics (when the first changes may appear), explain the benefits and limitations of each method in plain language, and provide a home vision‑hygiene checklist.",
                                            },
                                            {
                                                type: "text",
                                                text: "All procedures are carried out in a friendly, child‑oriented format, and follow‑up examinations are planned individually (taking into account school, extracurricular activities and visual workload) to support stable improvement in functional vision indicators.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: true,
                        paddingBottom: true,
                        title: "Why families choose the Children’s Clinic",
                        text: [
                            "A private children’s ophthalmology clinic in an “all‑in‑one” format: diagnostics, treatment and outcome monitoring. Comfortable rooms, modern equipment, child‑friendly methods and detailed reports for school / kindergarten.",
                            "At the Children’s Clinic we explain indications, advantages and possible limitations of each approach, provide balanced recommendations, speak openly about prices and share patient reviews.",
                        ],
                        image: "/images/children-hero.jpg",
                        listTitle:
                            "Paediatric diagnostics stages at the clinic",
                        list: [
                            {
                                itemTitle: "Initial screening and consultation",
                                itemText: [
                                    "You can book a vision assessment in just a few minutes — by phone or online.",
                                    "At the Children’s Clinic we collect complaints and medical history, perform a child‑friendly visual acuity screening, a basic assessment of binocular functions and eye alignment, and examine the anterior segment. We provide vision‑hygiene recommendations and determine whether extended testing is needed (cycloplegia, topography, biometry). We immediately advise on the approximate cost of the next stage.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Extended measurements with cycloplegia",
                                itemText: [
                                    "We perform refractometry / retinoscopy under fractional cycloplegia, keratotopography / tomography to accurately determine astigmatism, ophthalmoscopy with pharmacological pupil dilation, measure axial length, and assess stereo vision and fusion reserves. We explain the results in plain language and record them in the protocol.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Personalised treatment and follow‑up plan",
                                itemText: [
                                    "The clinic team discusses the results with parents, selects correction (glasses / contact lenses), prescribes device‑based therapy when indicated, provides home exercises and a schedule of follow‑up visits. We provide a written report, a course cost calculation and links to reviews.",
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        paddingBottom: true,
                        title: "List of diagnostic examinations",
                        text: "During an eye check‑up, we carry out a set of tests aimed at a comprehensive assessment of the visual system:",
                        slider: [
                            {
                                title: "Visiometry (visual acuity test)",
                                text: "We assess how well the child sees at distance and near. For toddlers we use pictures instead of letters; for schoolchildren — standard charts. The test is performed in a child‑friendly format to reduce anxiety.",
                            },
                            {
                                title: "Tonometry (Intraocular Pressure)",
                                text: "We use non‑contact air‑puff tonometry — a quick “air pulse” that helps rule out glaucoma and other conditions. Children usually tolerate it calmly; it takes just a few seconds.",
                            },
                            {
                                title: "Refractometry",
                                text: "Using an autorefractor we determine the eye’s refractive power: myopia, hyperopia and astigmatism. When needed, we add retinoscopy and fractional cycloplegia (drops temporarily “switch off” accommodation) to obtain accurate data for a glasses / lenses prescription.",
                            },
                            {
                                title: "Biometry (axial length and ocular parameters)",
                                text: "We non‑contactly measure eye length, anterior chamber depth and lens thickness. This is important for monitoring myopia progression in children and for correct long‑term planning.",
                            },
                            {
                                title: "Pachymetry (Corneal Thickness)",
                                text: "A light‑based or ultrasound device quickly and painlessly measures corneal thickness. These data are used to interpret intraocular pressure, plan refractive interventions and monitor after trauma / inflammation.",
                            },
                            {
                                title: "Keratotopography (Corneal Map)",
                                text: "We determine the shape and curvature of the cornea. In children it helps detect astigmatism, early signs of keratoconus in teenagers, and supports accurate optical correction selection. The procedure is non‑contact.",
                            },
                            {
                                title: "Perimetry (visual field)",
                                text: "We assess how much of the surrounding space the child can perceive while fixating. Useful when optic nerve damage or neuro‑ophthalmic conditions are suspected and for risk monitoring. We explain the task simply to make it easy for the child.",
                            },
                            {
                                title: "Biomicroscopy (Slit-Lamp Exam)",
                                text: "This is an “eye microscope” that allows the doctor to examine the eyelids, cornea, iris and lens in detail. The child sits comfortably; the specialist explains each step — there is no pain.",
                            },
                            {
                                title: "Fundus examination through a lens",
                                text: "After instilling pupil‑dilating drops, the doctor evaluates the retina, macula and optic disc. The method helps identify congenital features, myopia‑related changes, vascular and inflammatory conditions. If sensitivity is present, we use local anaesthetic drops.",
                            },
                            {
                                title: "Lensometry (glasses check)",
                                text: "We measure the optical power of existing glasses: sphere, cylinder, axis and pupillary distance. This helps determine whether the glasses are suitable and whether the prescription should be updated.",
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Cost of children's eye examination in Vilnius",
                    },
                },
                { type: "giftCTA" },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about children's eye examination",
                        content: [
                            {
                                question:
                                    "How much does a children’s eye examination cost at the Children’s Clinic, and what is included?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The cost depends on the scope of testing: whether cycloplegia, topography or biometry is required. Our reception team will advise on package prices and help choose the most suitable visit.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "From what age should a child be examined at the Children’s Clinic?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The first screening is performed in infancy; routine check‑ups — at 1 year, 3 years, before school and annually for school‑age children, even without complaints.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Are the examinations and device‑based treatment painful?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "No. Procedures are safe, adapted for children and often performed in a playful format. After drops, brief light sensitivity may occur.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Can device‑based treatment help without surgery?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes, when amblyopia or binocular vision disorders are detected early. The doctor will explain the benefits and specifics of the relevant methods.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How often are courses and follow‑up visits repeated?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Typically 10–15 sessions; repeat in 3–6 months if indicated. The follow‑up schedule is set by the doctor.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Are there reviews or recommendations for the Children’s Clinic?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes, parent reviews and comments are available. An administrator can send a link or examples upon request.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Are there promotions and discounts at the Children’s Clinic?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Promotions and discounts for diagnostic packages and treatment courses may be available periodically — please уточните when booking.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Private or public ophthalmology: what should you choose?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The Children’s Clinic provides quick access, a clear patient pathway, detailed reports and transparent pricing. The final choice is for parents; we will provide all the necessary information.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        ru: {
            textMain:
                "В Детской клинике Злата проводится проверка зрения у детей — от младенцев до подростков.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Глазная клиника для детей в Вильнюсе - Детская офтальмологическая клиника (проверка зрения у ребенка) | Клиника Новое Зрение",
                        descriptionSEO:
                            "Детская офтальмологическая клиника (окулист для детей). Консультация детского офтальмолога в клинике - Новое Зрение. ✅ Проверка зрения у детей - Современная диагностика и эффективное лечение. ✅ Выгодная стоимость обследования зрения 👍 Репутация, проверенная временем",
                    },
                },
                {
                    type: "hero",
                    data: {
                        image: "/images/children-service.jpg",
                        imgPositionMobile: " right 25% top",
                        imgPositionDesktop: "right 25% top 10%",
                        title: "Детская клиника",
                        text: "Частная детская офтальмология в Вильнюсе: проверка зрения у детей от младенцев до подростков, расширенная диагностика (фракционная циклоплегия, топография, биометрия) и аппаратное лечение.",
                    },
                },
                {
                    type: "preview",
                    data: {
                        image: "/images/zlata2.jpg",
                        title: "Детская клиника — детская офтальмология в Вильнюсе",
                        text: [
                            "В Детской клинике выполняется проверка зрения у детей от младенцев до подростков: точные обследования, индивидуальная тактика и понятные рекомендации для родителей. Если вы ищете, где проверить зрение ребёнку спокойно и без лишнего стресса — запишитесь на консультацию офтальмолога. Администраторы центра подскажут актуальные цены, действующие предложения и возможные скидки, а также помогут выбрать удобное время визита в частную детскую офтальмологическую клинику в Вильнюсе.",
                        ],
                        textUp: "1 млн",
                        textDown: "консультаций проведено",
                        fractionUp: true,
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: false,
                        paddingBottom: false,
                        data: [
                            {
                                title: "Когда обращаться: первые сигналы",
                                image: "/images/zlata5.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Детская клиника рекомендует не откладывать обследование, если вы замечаете даже небольшие изменения в поведении или привычках ребёнка. Жалобы на усталость глаз, «туман», двоение, головные боли к вечеру, прищуривание или слишком близкое поднесение гаджетов могут указывать на начало миопии, гиперметропии, астигматизма или нарушений бинокулярного зрения. У дошкольников настораживают частое трение глаз, усиленное моргание, отказ от пазлов и мелких игр; у школьников — снижение концентрации, трудности при чтении с доски, неправильная осанка, приближение тетради к лицу.",
                                            },
                                            {
                                                type: "text",
                                                text: "Обратите внимание, если глаза «разъезжаются», на фото появляется эпизодическое косоглазие или «красный глаз» выглядит асимметрично — это повод записаться на консультацию в Детскую клинику. Также показаниями могут быть раннее и длительное использование гаджетов, наследственная близорукость, недоношенность, аллергии и жалобы на сухость или жжение после занятий. Плановая проверка зрения для детей у нас включает возрастные тесты, а при необходимости — диагностику с фракционной циклоплегией, топографию роговицы и контроль аксиальной длины глаза, чтобы своевременно скорректировать риски, замедлить нежелательную динамику и снизить вероятность амблиопии.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Комплексная проверка: точная диагностика и план лечения",
                                image: "/images/perevirka3.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "В Детской клинике оценивают рефракцию (в т.ч. с фракционной циклоплегией), стереозрение, фузионные резервы, положение глаз, состояние глазного дна и темпы роста глазного яблока. По результатам врач формирует персональный план: оптическая коррекция, аппаратное лечение зрения у детей, график наблюдений и домашние упражнения. Родители получают понятное заключение, прозрачные цены, рекомендации и информацию, сколько стоит каждый этап. Мы также обсуждаем ожидаемую динамику (когда могут появиться первые изменения), объясняем преимущества и ограничения каждой методики простыми словами и выдаём памятку по гигиене зрения дома.",
                                            },
                                            {
                                                type: "text",
                                                text: "Все процедуры проходят в игровой, доброжелательной форме, а контрольные обследования планируются индивидуально (с учётом школы, кружков и нагрузки на зрение), чтобы поддерживать стабильное улучшение функциональных показателей у детей.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: true,
                        paddingBottom: true,
                        title: "Почему выбирают Детскую клинику",
                        text: [
                            "Частная детская офтальмологическая клиника в формате «всё в одном»: диагностика, лечение и контроль результатов. Комфортный кабинет, современное оборудование, игровые методики и подробные заключения для школы/детсада.",
                            "В Детской клинике мы объясняем показания, преимущества и возможные ограничения методик, даём взвешенные рекомендации, открыто говорим о ценах и предоставляем отзывы пациентов.",
                        ],
                        image: "/images/children-hero.jpg",
                        listTitle: "Этапы детской диагностики в клинике",
                        list: [
                            {
                                itemTitle: "Первичный скрининг и консультация",
                                itemText: [
                                    "Записаться на диагностику зрения можно за несколько минут — по телефону или онлайн.",
                                    "В Детской клинике собираем жалобы и анамнез, проводим игровой скрининг остроты зрения, базовую оценку бинокулярных функций и положения глаз, осматриваем передний отрезок. Даём рекомендации по гигиене зрения и определяем, нужно ли расширенное обследование (циклоплегия, топография, биометрия). Сразу ориентируем по стоимости следующего этапа.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Расширенные измерения с циклоплегией",
                                itemText: [
                                    "Проводим рефрактометрию/скиаскопию под фракционной циклоплегией, кератотопографию/томографию для точного определения астигматизма, офтальмоскопию с медикаментозным расширением зрачка, измеряем аксиальную длину глаза, проверяем стереозрение и фузионные резервы. Объясняем результаты простыми словами и фиксируем их в протоколе.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Персональный план лечения и наблюдения",
                                itemText: [
                                    "Команда клиники обсуждает результаты с родителями, подбирает коррекцию (очки/линзы), назначает аппаратное лечение (по показаниям), выдаёт домашние упражнения и график контрольных визитов. Предоставляем письменное заключение, расчёт стоимости курса и ссылки на отзывы.",
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        paddingBottom: true,
                        title: "Список диагностических обследований",
                        text: "Во время диагностики глаз проводится ряд исследований, направленных на всестороннюю оценку состояния зрительной системы:",
                        slider: [
                            {
                                title: "Визиометрия (проверка остроты зрения)",
                                text: "Измеряем, как ребёнок видит вдаль и вблизи. Для малышей — картинки вместо букв, для школьников — стандартные таблицы. Тест проводится в игровой форме, чтобы ребёнок не переживал.",
                            },
                            {
                                title: "Тонометрия (внутриглазное давление)",
                                text: "Используем бесконтактную пневмотонометрию — это быстрый «поток воздуха», который помогает исключить глаукому и другие состояния. Дети переносят процедуру спокойно, всё длится несколько секунд.",
                            },
                            {
                                title: "Рефрактометрия",
                                text: "На авторефрактометре определяем преломляющую силу глаза: миопию, гиперметропию, астигматизм. При необходимости добавляем скиаскопию и фракционную циклоплегию (капли временно «отключают» аккомодацию), чтобы получить точные данные для рецепта очков/линз.",
                            },
                            {
                                title: "Биометрия (аксиальная длина и параметры глаза)",
                                text: "Бесконтактно измеряем длину глаза, глубину передней камеры, толщину хрусталика. Важно для контроля динамики близорукости у детей и для корректного планирования в будущем.",
                            },
                            {
                                title: "Пахиметрия (толщина роговицы)",
                                text: "Световой или ультразвуковой прибор быстро и безболезненно измеряет толщину роговицы. Эти данные нужны для уточнения внутриглазного давления, планирования рефракционных вмешательств и контроля после травм/воспалений.",
                            },
                            {
                                title: "Кератотопография (карта роговицы)",
                                text: "Определяем форму и кривизну роговицы. В детском возрасте помогает выявить астигматизм, ранние признаки кератоконуса у подростков и подобрать корректную оптическую коррекцию. Процедура бесконтактная.",
                            },
                            {
                                title: "Периметрия (поле зрения)",
                                text: "Изучаем, какую часть пространства ребёнок охватывает взглядом при фиксации. Полезно при подозрении на поражение зрительного нерва, невроофтальмологических состояниях и для контроля рисков. Задание объясняем просто, чтобы ребёнку было легко выполнить тест.",
                            },
                            {
                                title: "Биомикроскопия (щелевая лампа)",
                                text: "Это «микроскоп для глаза», которым врач детально осматривает веки, роговицу, радужку, хрусталик. Дети сидят в удобном кресле, специалист комментирует каждый шаг — боли нет.",
                            },
                            {
                                title: "Осмотр глазного дна через линзу",
                                text: "После закапывания капель для расширения зрачка врач оценивает сетчатку, макулу и диск зрительного нерва. Метод помогает выявить врождённые особенности, изменения при миопии, сосудистые и воспалительные состояния. При чувствительности используем местную анестезию каплями.",
                            },
                            {
                                title: "Диоптриметрия (проверка очков)",
                                text: "Измеряем оптическую силу имеющихся очков: сферу, цилиндр, ось, межцентровое расстояние. Помогает понять, подходят ли очки ребёнку и нужно ли обновить рецепт.",
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Цена",
                    },
                },
                { type: "giftCTA" },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часто задаваемые вопросы о проверке зрения у детей",
                        content: [
                            {
                                question:
                                    "Сколько стоит проверка зрения у детей в Детской клинике и что входит в стоимость?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Стоимость зависит от объёма обследования: требуется ли циклоплегия, топография или биометрия. Регистратура Детской клиники подскажет пакетные цены и поможет выбрать оптимальный приём.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "С какого возраста проходить осмотр в Детской клинике?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Первый скрининг проводится у младенцев; плановые осмотры — в 1 год, 3 года, перед школой и ежегодно у школьников — даже при отсутствии жалоб.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Болезненны ли обследования и аппаратное лечение в Детской клинике?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Нет. Процедуры безопасны, адаптированы для детей и часто проходят в игровой форме. После капель возможна кратковременная светобоязнь.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Поможет ли аппаратное лечение без операции?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да, при раннем выявлении амблиопии или нарушений бинокулярного зрения. Врач Детской клиники объяснит преимущества и особенности конкретных методик.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Как часто нужно повторять курсы и контрольные осмотры?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Обычно 10–15 занятий; повтор через 3–6 месяцев по показаниям. График контрольных осмотров составляет врач Детской клиники.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Есть ли отзывы или рекомендации о Детской клинике?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да, доступны отзывы и комментарии родителей. Администратор может отправить ссылку или примеры по запросу.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Есть ли акции и скидки в Детской клинике?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Периодически действуют акции и скидки на диагностические пакеты и курсы лечения — уточняйте при записи.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Частная или государственная офтальмология: что выбрать?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Детская клиника обеспечивает быстрый приём, понятный маршрут, подробные заключения и прозрачные цены. Окончательный выбор за родителями; мы предоставим всю необходимую информацию.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        name: servicesList.find(s => s.key === "skaidraus-lesio-operacija")!,
        lt: {
            textMain:
                "BiVision RLE (рефракційна ленсектомія) — ефективний метод корекції пресбіопії (вікова далекозорість).",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Akies lęšiuko keitimas. Akių lęšių keitimo operacija - lęšiuko implantavimas | Naujas Regėjimas",
                        descriptionSEO:
                            "✴️ Skaidriojo lęšio operacija. Presbiopijos gydymas klinikoje - Naujas Regėjimas. ✅ Lęšiuko keitimo operacijas atlieka gydytojai ekspertai, turintys daugiau nei 50 000 sėkmingų operacijų patirtį.",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "Skaidraus lęšiuko chirurgija",
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "BiVision RLE – moderni lazerinės regos korekcijos alternatyva",
                        image: "/images/equipment1.jpg",
                        text: [
                            "BiVision RLE – tai itin tiksli mikrochirurginė procedūra, kurios metu natūralus akies lęšiukas pakeičiamas intraokuliniu lęšiu (IOL), siekiant atkurti aiškų matymą iš arti, vidutiniu atstumu ir į tolį. Metodas pasirenkamas, kai lazerinė korekcija nerekomenduojama arba jos prognozė ribota (plona / nelygi ragena, didelės dioptrijos, kombinuoti regos sutrikimai).",
                            "Kam tinka: 45+ metų žmonėms, turintiems presbiopiją, pacientams su ryškia trumparegyste / toliaregyste, astigmatizmu, ankstyvais lęšiuko pakitimais arba padidėjusia kataraktos rizika.",
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Kodėl verta rinktis BiVision RLE metodą: pagrindiniai privalumai",
                        text: "Refrakcinė chirurgija oftalmologijoje tinka tiek toliaregystei, tiek trumparegystei, įskaitant ir astigmatizmą.",
                        slider: [
                            {
                                title: "Ilgalaikis regėjimas be akinių",
                                text: "BiVision technologija padeda atkurti matymą ir iš arti, ir į tolį, sumažindama priklausomybę nuo akinių net esant amžinei toliaregystei.",
                            },
                            {
                                title: "Alternatyva lazerinei korekcijai",
                                text: "Metodika tinka tiems, kuriems lazerinė intervencija kontraindikuotina, tačiau reikalinga trumparegystės, toliaregystės ar astigmatizmo korekcija.",
                            },
                            {
                                title: "Aukščiausios klasės Rayner lęšiai",
                                text: "Mūsų klinikoje Vilniuje naudojami tik originalūs, aukštos kokybės britiški intraokuliniai lęšiai – be kompromisų dėl kokybės ir saugumo.",
                            },
                            {
                                title: "Kataraktos vystymosi profilaktika",
                                text: "Operacijos metu natūralus lęšiukas pakeičiamas, todėl kataraktos rizika ateityje sumažinama iki minimumo. Papildomas kapsulės poliravimas gali padėti pagerinti regėjimo ryškumą ir kontrastą po procedūros.",
                            },
                            {
                                title: "Švelni lęšiuko pašalinimo technologija",
                                text: "Taikome iQ 5 Minutes protokolą be ultragarso – naudojamas tik kontroliuojamas kryptinis vandens srautas. Tai mažina poveikį ragenai ir spartina reabilitaciją.",
                            },
                            {
                                title: "Aukšta chirurgų kvalifikacija",
                                text: "Centro oftalmologai chirurgai mokėsi pirmaujančiose Europos mokyklose ir turi reikšmingą praktinę patirtį – ne mažiau kaip 10 metų akių mikrochirurgijoje.",
                            },
                            {
                                title: "Prieiga prie pažangiausių medicinos sprendimų",
                                text: "Specialistai dalyvauja klinikiniuose inovacijų vertinimuose dar iki plataus jų įdiegimo, kad praktikoje būtų taikomos aktualiausios regos gydymo technologijos.",
                            },
                        ],
                        btn: {
                            btnName: "Registracija vizitui",
                            btnLink: "#booking",
                        },
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        firstImageLeft: true,
                        data: [
                            {
                                title: "Pagrindinės indikacijos ir simptomai, kada verta svarstyti refrakcinį lęšiuko keitimą (RLE)",
                                image: "/images/perevirka2.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "RLE svarstomas, kai amžinė toliaregystė derinasi su kitais refrakcijos sutrikimais – pavyzdžiui, kai reikalingi skirtingi akiniai skaitymui ir darbui kompiuteriu, o vakare akys greičiau pavargsta ir fokusavimas tampa nestabilus. Dažnai pacientai mini „miglotą“ vaizdą rytais, sumažėjusį kontrastą, akinimą vairuojant naktį ir pojūtį, kad akiniai nebeteikia ankstesnio aiškumo. Jei lazerinė korekcija anksčiau nebuvo rekomenduota dėl ragenos parametrų, RLE tampa praktiška alternatyva: metodas veikia lęšiuką ir nekeičia ragenos. Esant ankstyviems lęšiuko pakitimams, intervencija taip pat mažina kataraktos tikimybę ateityje, o žmonėms, turintiems aukštus regėjimo reikalavimus, padeda pasiekti stabilesnį vaizdą ir kontrastą.",
                                            },
                                        ],
                                        greenText:
                                            "„Du viename“ sprendimas. Geriname regėjimą ir kartu mažiname kataraktos riziką ateityje. Minimalus pjūvis, greitas atsistatymas, maksimalus komfortas.",
                                    },
                                ],
                            },
                            {
                                title: "Kodėl pacientai renkasi RLE",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Sprendimas rinktis RLE dažniausiai susijęs su medicininėmis indikacijomis ir gyvenimo būdo poreikiais:",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "1. Medicininės indikacijos",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Ragenos lazerinės korekcijos atlikti negalima arba ji nesuteikia prognozuojamo rezultato.",
                                                    "Reikalingas platesnis korekcijos diapazonas (didelės dioptrijos, trumparegystės / toliaregystės derinys su astigmatizmu).",
                                                    "Yra kataraktos rizika ar ankstyvi požymiai – lęšiuko keitimas problemą išsprendžia iš anksto.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "2. Lūkesčiai dėl regėjimo kokybės",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Siekis matyti be akinių iš arti, vidutiniu atstumu ir į tolį (daugiažidiniai / trifokaliniai IOL).",
                                                    "Poreikis išlaikyti stabilų ryškumą visą dieną: tekstai, ekranai, vairavimas, sportas.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "3. Saugumas ir prognozuojamumas",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "RLE neveikia ragenos – tai svarbu esant plonai ar „problemiškai“ ragenai.",
                                                    "Kataraktos profilaktika: pakeitus natūralų lęšiuką, ji daugiau nebesiformuoja.",
                                                    "Individualus IOL parinkimas pagal įpročius ir užduotis (skaitymas, kompiuteris, naktinis vairavimas).",
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "individual", data: <LansectomyGreenSection /> },
                {
                    type: "numberListSection",
                    data: {
                        listTitle: "Etapai",
                        list: [
                            {
                                itemTitle:
                                    "Registracija ir pasiruošimas diagnostikai",
                                itemText: [
                                    "Užsiregistruoti galima telefonu arba internetu – tai užtrunka vos kelias minutes.",
                                    "Specialus pasiruošimas dažniausiai nereikalingas. Jei nešiojate minkštus kontaktinius lęšius – nusiimkite juos iš vakaro (pageidautina likus 12 val. iki vizito). Atsineškite turimus akinius / receptą ir ankstesnių tyrimų rezultatus – įvertinsime dinamiką.",
                                    "Rekomenduojame planuoti vizitą taip, kad po apžiūros nevairuotumėte patys: apžiūros metu gali būti plečiami vyzdžiai, todėl matymas iš arti laikinai pablogėja.",
                                ],
                            },
                            {
                                itemTitle: "Kompiuterinė regos diagnostika",
                                itemText: [
                                    "Trukmė – apie 2–2,5 valandas.",
                                    "Atliekame pilną tyrimų kompleksą, reikalingą refrakciniam lęšiuko keitimui (RLE): autorefraktometriją ir regėjimo aštrumo įvertinimą, biometrinius matavimus ir IOL optinės galios skaičiavimą, ragenos keratotopografiją / tomografiją, tonometriją, prireikus – makulos ir regos nervo OKT, ašarų plėvelės vertinimą.",
                                    "Tikslumui užtikrinti naudojami vyzdžius plečiantys lašai – kelias valandas po apžiūros matymas iš arti gali būti neryškus.",
                                ],
                            },
                            {
                                itemTitle: "Oftalmologo konsultacija",
                                itemText: [
                                    "Po tyrimų gydytojas paaiškins rezultatus, aptars prognozę ir parinks intraokulinio lęšio tipą pagal jūsų gyvenimo būdą (mono-, EDOF, trifokalinis; esant astigmatizmui – torinis).",
                                    "Aptarsime indikacijas ir galimus apribojimus, atsakysime į klausimus, pateiksime skaidrią sąmatą ir pasiruošimo planą. Prireikus gausite standartinių priešoperacinių tyrimų sąrašą ir rekomendacijas.",
                                    "Kartu nustatysime RLE datą ir individualų atsistatymo planą.",
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "textsColumns",
                    data: {
                        paddingTop: true,
                        title: "Inovatyvus regėjimo atkūrimas: refrakcinis lęšiuko keitimas (RLE)",
                        text: "Refrakcinis lęšiuko keitimas (RLE, refrakcinė lensektomija) – regos korekcijos metodas, kai natūralus lęšiukas pakeičiamas intraokuliniu lęšiu (IOL). RLE koreguoja trumparegystę, toliaregystę, presbiopiją ir astigmatizmą bei yra racionali alternatyva, kai lazerinė korekcija kontraindikuotina (plona ragena, randai, nestabili refrakcija) ir kai svarbus stabilus aiškumas be akinių bei kontaktinių lęšių.",
                        blocks: [
                            {
                                title: "Kodėl verta rinktis BiVision RLE pas mus",
                                text: [
                                    {
                                        type: "text",
                                        text: "Mūsų klinikoje Vilniuje refrakcinis lęšiuko keitimas apjungia technologinį tikslumą ir patyrusios komandos kompetenciją. Po išsamios diagnostikos parenkame IOL pagal realias regos užduotis: skaitymą, darbą kompiuteriu, aktyvų gyvenimo būdą, naktinį vairavimą. Lęšiuką pašaliname naudodami kontroliuojamą vandens srautą vietoje ultragarso (BiVision iQ 5 Minutes), taip sumažindami poveikį ragenai ir pagreitindami atsistatymą. Dirbame su originaliais Rayner lęšiais – nuo daugiažidinių iki torinių – ir orientuojamės į ilgalaikį regos komfortą. Chirurgai turi daugiau nei dešimties metų praktikos, įskaitant mokymus Europos centruose.",
                                    },
                                ],
                            },
                            {
                                title: "Pasiruošimas ir atsistatymas",
                                text: [
                                    {
                                        type: "text",
                                        text: "Pasiruošimas apsiriboja paprasta organizacija: atsineškite ankstesnes medicinines išvadas, vartojamų vaistų sąrašą ir laikykitės rekomendacijų dėl kontaktinių lęšių, jei juos nešiojate. Operacijos dieną patartina atvykti su lydinčiu asmeniu, kad patogiai grįžtumėte namo. Po procedūros naudosite lašus pagal schemą, 2–3 savaites vengsite baseino ir saunos, laikinai ribosite intensyvius fizinius krūvius. Vairavimo atnaujinimas derinamas su chirurgu kontrolinio vizito metu.",
                                    },
                                ],
                            },
                            {
                                title: "Kokius intraokulinius lęšius (IOL) naudojame",
                                text: [
                                    {
                                        type: "text",
                                        text: "Dirbame su Rayner ir Alcon lęšių linijomis, parinkdami sprendimą pagal konkrečius akies parametrus ir gyvenimo būdą. Maksimaliai nepriklausomybei nuo akinių siūlome trifokalinius sprendimus; esant poreikiui koreguoti astigmatizmą naudojame torinius modelius; jei prioritetas – natūralus regėjimo komfortas ir išplėsta ryškumo zona, gali tikti EDOF lęšiai. Galutinis pasirinkimas grindžiamas biometrija, ragenos astigmatizmo dydžiu ir jūsų kasdienėmis užduotimis.",
                                    },
                                ],
                            },
                            {
                                title: "Kaina ir kas į ją įskaičiuota",
                                text: [
                                    {
                                        type: "text",
                                        text: "RLE kaina Vilniuje pirmiausia priklauso nuo intraokulinio lęšio tipo ir individualių klinikinių ypatumų. Konsultacijos metu gausite asmeninę sąmatą su kiekvieno etapo paaiškinimu: diagnostika, operacija ir pooperacinė priežiūra. Prireikus administratorius informuos apie aktualias lojalumo programas ir apmokėjimo galimybes.",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Refrakcinės lęšio pašalinimo kaina (Vilnius)",
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Dažniausiai užduodami klausimai apie refrakcinį lęšiuko keitimą (lensektomiją)",
                        content: [
                            {
                                question:
                                    "Kas yra refrakcinė akių chirurgija ir kas yra refrakcinis lęšiuko keitimas (RLE)?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Refrakcinė akių chirurgija – oftalmologijos sritis, koreguojanti regėjimą chirurginiais metodais. Refrakcinis lęšiuko keitimas (RLE) – mikroinvazinė operacija, kurios metu natūralus lęšiukas pakeičiamas intraokuliniu lęšiu (IOL). Procedūra gali koreguoti presbiopiją, trumparegystę, toliaregystę ir astigmatizmą bei būti alternatyva lazeriniams metodams. Prieš operaciją būtina diagnostika ir gydytojo konsultacija.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kam tinka refrakcinis lęšiuko keitimas – esant toliaregystei, trumparegystei ar presbiopijai?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "RLE aktualus esant toliaregystei ir trumparegystei, kai lazerinė korekcija ribota (plona ar nelygi ragena, didelės dioptrijos). RLE taip pat veiksmingas presbiopijos (amžinės toliaregystės) atvejais ir padeda sumažinti poreikį nuolat keisti skirtingus akinius. Sprendimas visada priimamas individualiai po išsamios diagnostikos ir oftalmologo konsultacijos.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kiek kainuoja lęšiuko keitimas? Kokia RLE kaina Vilniuje?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Lęšiuko keitimo kaina priklauso nuo IOL tipo (monofokalinis, trifokalinis, EDOF, torinis), papildomų procedūrų ir klinikinių ypatumų. Dažnos paieškos frazės: „lensektomija kaina“, „lęšiuko keitimas Vilniuje kaina“, „refrakcinis lęšiuko keitimas kaina“. Galutinė kaina nustatoma po diagnostikos ir konsultacijos; kartais taikomos specialios programos. Tikslią informaciją gausite vizito metu arba telefonu.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kuo RLE skiriasi nuo lazerinės korekcijos ir kada tai yra tinkamiausias pasirinkimas?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Lazerinė korekcija keičia ragenos profilį, o RLE veikia lęšiuką. Todėl RLE dažniau svarstomas esant amžinei toliaregystei ir kombinuotiems refrakcijos sutrikimams brandesniame amžiuje arba esant didelėms dioptrijoms. Vieniems tinkamesnę prognozę suteikia lazeris, kitiems – lęšio implantacija. Konsultacijos metu gydytojas paaiškins privalumus, galimus šalutinius reiškinius ir kontraindikacijas.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Ar RLE tinka toliaregystės ir trumparegystės korekcijai? Kokia tokių operacijų kaina?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Taip. Toliaregystės (įskaitant presbiopiją) ir trumparegystės korekcijai RLE gali būti optimalus sprendimas, kai lazerinė korekcija nerekomenduojama. Dažnos paieškos: „toliaregystės operacija kaina“, „lazerinė korekcija kaina“, „trumparegystės operacija kaina“. Tiksli suma patvirtinama po diagnostikos; kartais galioja pasiūlymai.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kur geriau atlikti lęšiuko keitimo operaciją? Į ką atkreipti dėmesį atsiliepimuose?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Rinkitės kliniką, turinčią patirties refrakcinėje chirurgijoje, modernią diagnostinę įrangą, skaidrią sąmatą ir aiškią pooperacinę priežiūrą. Vertinkite atsiliepimus ir realius klinikinius pavyzdžius. Konsultacijos metu pasiteiraukite apie IOL parinkimą pagal gyvenimo būdą, kontrolinių vizitų grafiką ir apribojimus. Taip pat svarbu, kaip organizuojamas ryšys su gydytoju po operacijos.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kokios yra rizikos, kontraindikacijos ir galimi šalutiniai poveikiai po lęšiuko keitimo?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Kaip ir bet kuri intervencija, lęšiuko keitimas turi kontraindikacijų (aktyvūs uždegimai, nekontroliuojamas akispūdis) ir galimų šalutinių reiškinių (laikinas akių sausumas, šviesos blyksniai, jautrumas šviesai). Dauguma požymių yra trumpalaikiai ir koreguojami laikantis rekomendacijų. Esant gretutinėms ligoms, taktika parenkama individualiai. Sprendimas dėl operacijos priimamas tik po išsamios diagnostikos.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kaip atrodo paciento kelias – nuo pirmos konsultacijos iki atsistatymo? Ar galima gauti nemokamą priėmimą?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Pirmiausia registruojatės konsultacijai ir diagnostikai (biometrija, topografija, tinklainės apžiūra). Tuomet gydytojas parenka tinkamą IOL, aptaria kainą ir terminus. Operacijos dieną atliekama lęšio implantacija; dauguma pacientų grįžta į įprastą ritmą pagal kontrolinių vizitų grafiką. Dėl „nemokamai“: kartais taikomos akcijos, tačiau įprastai pirminė konsultacija yra mokama. Administratorius padės pasirinkti patogų laiką ir specialistą.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        en: {
            textMain:
                "BiVision RLE (refractive lensectomy) is an effective method of correcting presbyopia (age-related farsightedness).",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Lens Replacement Surgery in Vilnius – Lens Replacement Operation Price (Refractive Lens Exchange) | New Vision Clinic",
                        descriptionSEO:
                            "Clear lens surgery (refractive lens replacement). Presbyopia treatment using the BiVision — RLE method at New Vision Clinic. ✅ BiVision lens replacement surgeries in our clinic are performed by expert doctors with experience of over 50,000 successful procedures. 👍 A reputation proven over time",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "Clear Lens Surgery (lensectomy)",
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "BiVision RLE — a modern alternative to laser vision correction",
                        image: "/images/equipment1.jpg",
                        text: [
                            "BiVision RLE is a high-precision microsurgical procedure in which the eye’s natural crystalline lens is replaced with an intraocular lens (IOL) to restore clear vision at near, intermediate, and distance ranges. The method is selected when laser correction is not recommended or when its predictability is limited (thin/irregular cornea, high dioptres, combined refractive errors).",
                            "Who it is suitable for: people aged 45+ with presbyopia; patients with pronounced myopia/hyperopia, astigmatism, early lens changes, or an increased risk of cataract.",
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Why choose BiVision RLE: key advantages",
                        text: "Refractive surgery in ophthalmology is suitable for both farsightedness and nearsightedness, including astigmatism.",
                        slider: [
                            {
                                title: "Long-term vision without glasses",
                                text: "BiVision technology helps restore both near and distance vision, reducing dependence on glasses even in age-related farsightedness.",
                            },
                            {
                                title: "An alternative to laser correction",
                                text: "The technique is suitable for those who have contraindications to laser treatment but require correction of myopia, hyperopia, or astigmatism.",
                            },
                            {
                                title: "Premium Rayner lenses",
                                text: "At our clinic in Vilnius, we use only original, premium-grade British intraocular lenses—without compromises in quality and safety. ",
                            },
                            {
                                title: "Prevention of cataract development",
                                text: "During surgery, the natural lens is replaced; therefore, the future risk of cataract is minimised. Additional capsule polishing may help improve visual clarity and contrast after the procedure.",
                            },
                            {
                                title: "Gentle lens removal technology",
                                text: "We apply the iQ 5 Minutes protocol without ultrasound—only a controlled, directed fluid stream. This reduces the load on the cornea and accelerates recovery.",
                            },
                            {
                                title: "High level of surgical expertise",
                                text: "Our ophthalmic surgeons have trained in leading European schools and have extensive practical experience—at least 10 years in eye microsurgery.",
                            },
                            {
                                title: "Access to advanced medical innovations",
                                text: "Our specialists participate in clinical assessments of innovative solutions before widespread implementation in order to apply the most up-to-date vision treatment technologies.",
                            },
                        ],
                        btn: {
                            btnName: "book an appointment",
                            btnLink: "#booking",
                        },
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        firstImageLeft: true,
                        data: [
                            {
                                title: "Key indications and symptoms when refractive lens exchange (RLE) may be considered",
                                image: "/images/perevirka2.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "RLE is considered when age-related farsightedness is combined with other refractive errors—for example, when different glasses are needed for reading and computer work, and by evening the eyes tire more quickly and focus becomes less stable. Patients often report “hazy” vision in the morning, reduced contrast, glare during night driving, and a feeling that glasses no longer provide the same sharpness. If laser correction was previously not recommended due to corneal parameters, RLE becomes a practical alternative: the method works with the lens and does not alter the cornea. With early lens changes, the intervention may also reduce the likelihood of cataract in the future, and for people with high visual demands it can help achieve a more stable image and contrast.",
                                            },
                                        ],
                                        greenText:
                                            "A “two-in-one” solution. We improve vision while simultaneously reducing the long-term risk of cataract. Minimal incision, fast recovery, maximum comfort.",
                                    },
                                ],
                            },
                            {
                                title: "Why patients choose RLE",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "The decision in favour of RLE is most often driven by a combination of medical indications and lifestyle needs:",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "1. Medical indications",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Corneal laser correction cannot be performed or does not provide the expected predictability.",
                                                    "A wider correction range is required (high dioptres; combination of myopia/hyperopia with astigmatism).",
                                                    "There is a risk of cataract or early manifestations—lens replacement addresses the issue proactively.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "2. Expectations regarding vision quality",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "The goal of seeing without glasses at near, intermediate, and distance ranges (multifocal/trifocal IOLs).",
                                                    "The need for stable sharpness throughout the day: reading, screens, driving, sports.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "3. Safety and predictability",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "RLE does not affect the cornea—important with a thin or “problematic” cornea.",
                                                    "Cataract prevention: after replacing the natural lens, cataract can no longer develop in that lens.",
                                                    "Personalised IOL selection based on tasks and habits (reading, computer work, night driving).",
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "individual", data: <LansectomyGreenSection /> },
                {
                    type: "numberListSection",
                    data: {
                        listTitle: "Stages",
                        list: [
                            {
                                itemTitle:
                                    "Appointment booking and preparation for diagnostics",
                                itemText: [
                                    "You can book by phone or online—it takes only a few minutes.",
                                    "Special preparation is usually not required. If you wear soft contact lenses, remove them the evening before (preferably 12 hours prior to the visit). Bring your current glasses/prescription and results of previous examinations so we can assess dynamics.",
                                    "We recommend planning your visit without self-driving immediately afterwards: during the examination the pupils may be dilated, and near vision may temporarily worsen.",
                                ],
                            },
                            {
                                itemTitle: "Computerised vision diagnostics",
                                itemText: [
                                    "Duration: approximately 2–2.5 hours.",
                                    "We perform a complete set of measurements required for refractive lens exchange (RLE): autorefractometry and visual acuity assessment, biometry and IOL power calculation, corneal keratotopography/tomography, tonometry, and—if needed—OCT of the macula and optic nerve, as well as tear film evaluation.",
                                    "To ensure accuracy, pupil-dilating drops may be used—near vision can remain blurred for several hours after the examination.",
                                ],
                            },
                            {
                                itemTitle: "Ophthalmologist consultation",
                                itemText: [
                                    "After the examination, the doctor will explain the findings, discuss the prognosis, and select the IOL type according to your lifestyle (mono/EDOF/trifocal; toric for astigmatism).",
                                    "We will review indications and potential limitations, answer questions, provide a transparent estimate, and outline the preparation plan. If necessary, you will receive a list of standard preoperative tests and recommendations.",
                                    "Together, we will determine the RLE date and an individual recovery plan.",
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "textsColumns",
                    data: {
                        paddingTop: true,
                        title: "Innovative vision restoration: refractive lens exchange (RLE)",
                        text: "Refractive lens exchange (RLE, refractive lensectomy) is a vision correction method in which the natural lens is replaced with an intraocular lens (IOL). RLE can correct myopia, hyperopia, presbyopia, and astigmatism and is a rational alternative when laser correction is contraindicated (thin cornea, scarring, unstable refraction) and when stable clarity without glasses and contact lenses is important.",
                        blocks: [
                            {
                                title: "Why choose BiVision RLE with us",
                                text: [
                                    {
                                        type: "text",
                                        text: "At our clinic in Vilnius, refractive lens exchange combines advanced technology with an experienced team. Following detailed diagnostics, we select an IOL based on real visual tasks: reading, computer work, activity, and night driving. During lens removal, we use a controlled fluid stream instead of ultrasound (BiVision iQ 5 Minutes), which reduces corneal impact and speeds up recovery. We work with original Rayner lenses—from multifocal to toric—and focus on long-term visual comfort. Our surgeons have more than ten years of practice, including training in European centres.",
                                    },
                                ],
                            },
                            {
                                title: "Preparation and recovery",
                                text: [
                                    {
                                        type: "text",
                                        text: "Preparation is straightforward: bring previous medical conclusions, a list of current medications, and follow contact lens recommendations if you use them. On the day of surgery, it is advisable to come with an accompanying person for a comfortable return home. After the procedure, you will use eye drops according to the prescribed regimen, avoid swimming pools and saunas for 2–3 weeks, and temporarily limit intensive physical activity. Resuming driving should be confirmed with the surgeon during a follow-up visit.",
                                    },
                                ],
                            },
                            {
                                title: "Intraocular lenses (IOLs) we use",
                                text: [
                                    {
                                        type: "text",
                                        text: "We work with Rayner and Alcon product lines, selecting the configuration according to your ocular parameters and lifestyle. For maximum independence from glasses, we offer trifocal solutions; if astigmatism correction is required, we use toric models; if the priority is natural visual comfort and extended depth of focus, EDOF IOLs may be suitable. The final choice is based on biometry, the degree of corneal astigmatism, and your everyday tasks.",
                                    },
                                ],
                            },
                            {
                                title: "Pricing and what is included",
                                text: [
                                    {
                                        type: "text",
                                        text: "The cost of RLE in Vilnius primarily depends on the type of intraocular lens and individual clinical features. During the consultation, you will receive a personalised estimate with an explanation of each stage: diagnostics, surgery, and postoperative care. If needed, our administrator will advise on current loyalty programmes and payment options.",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Price for refractive lensectomy in Vilnius",
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about refractive lens exchange (lensectomy)",
                        content: [
                            {
                                question:
                                    "What is refractive eye surgery and what is refractive lens exchange (RLE)?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Refractive eye surgery is a branch of ophthalmology that corrects vision using surgical methods. Refractive lens exchange (RLE) is a micro-invasive procedure in which the natural lens is replaced with an intraocular lens (IOL). This procedure can correct presbyopia, myopia, hyperopia, and astigmatism and may be an alternative to laser methods. Diagnostics and a doctor’s consultation are mandatory before surgery.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Who is refractive lens exchange suitable for—hyperopia, myopia, or presbyopia?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "RLE for hyperopia and myopia is relevant when laser correction is limited (thin or irregular cornea, high dioptres). RLE is also effective for presbyopia (age-related farsightedness) and helps reduce the need to switch between different glasses. The decision is made individually after a full examination and an ophthalmologist’s consultation.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How much does lens replacement cost? What is the price of RLE in Vilnius?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The cost of lens replacement depends on the type of IOL (monofocal, trifocal, EDOF, toric), any additional procedures, and clinical factors. Common searches include: “lensectomy price”, “lens replacement Vilnius price”, “refractive lens exchange cost”. The final cost is determined after diagnostics and consultation; special offers may apply at times. Prices can be clarified during a visit or by contacting the clinic.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How does RLE differ from laser correction, and when is it the preferred option?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Laser correction changes the corneal profile, whereas RLE works with the lens. Therefore, RLE is considered in age-related farsightedness and combined refractive errors in mature patients or in cases of high dioptres. For some patients, laser provides a better prognosis; for others, lens implantation is more appropriate. During consultation, the doctor will explain benefits, potential side effects, and contraindications.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Is RLE suitable for treating farsightedness and nearsightedness, and what is the cost of such procedures?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes. For the correction of farsightedness (including presbyopia) and nearsightedness, RLE can be an optimal solution when laser correction is not recommended. Common searches include: “farsightedness surgery cost”, “laser vision correction cost”, “myopia surgery cost”. The exact cost is confirmed after diagnostics; promotions may be available.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Where is it better to undergo lens replacement surgery, and what should you look for in reviews?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Choose a clinic with experience in refractive surgery, modern diagnostic equipment, transparent pricing, and clear postoperative follow-up. Review patient feedback and real clinical examples. During consultation, ask about IOL selection based on lifestyle, follow-up visit schedule, and restrictions. Also clarify how communication with the doctor is organised after surgery.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What are the risks, contraindications, and possible side effects of lens replacement?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "As with any procedure, lens replacement has contraindications (active inflammation, uncontrolled intraocular pressure) and possible side effects (temporary dryness, glare/haloes, light sensitivity). Most effects are short-term and managed with appropriate recommendations. In the presence of comorbid conditions, the treatment approach is individual. The decision to proceed is made only after a full examination.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What is the patient journey—from first consultation to recovery? Is a free appointment available?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "First, you book a consultation and diagnostics (biometry, topography, retinal examination). The doctor then selects a suitable IOL and discusses costs and timing. On the day of surgery, the IOL is implanted; most patients return to routine activities with follow-up visits according to schedule. Regarding “free”: promotional offers may occasionally be available, but the initial consultation is typically paid. An administrator will help you choose a convenient time and specialist.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        ru: {
            textMain:
                "BiVision RLE (рефракционная ленсектомия) – эффективный метод коррекции пресбиопии (возрастная дальнозоркость).",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Замена хрусталика глаза в Вильнюсе - Операция по замене хрусталика цена (Рефракционная Ленсэктомия) | Клиника Новое Зрение",
                        descriptionSEO:
                            "Хирургия прозрачного хрусталика (рефракционная замена хрусталика глаза). Лечение пресбиопии методом BiVision — RLE в клинике Новое Зрение. ✅ Операции по замене хрусталика BiVision в нашей клинике проводят доктора-эксперты с опытом более 50 000 успешных операций. 👍 Репутация, проверенная временем",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "Хирургия прозрачного хрусталика (ленсектомия)",
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "BiVision RLE — современная альтернатива лазерной коррекции зрения",
                        image: "/images/equipment1.jpg",
                        text: [
                            "BiVision RLE — это высокоточная микрохирургическая процедура, при которой собственный хрусталик глаза заменяют на интраокулярную линзу (ИОЛ), чтобы восстановить чёткое зрение вблизи, на среднем расстоянии и вдаль. Метод выбирают, когда лазерная коррекция не рекомендована или её прогноз ограничен (тонкая/неровная роговица, большие диоптрии, комбинированные нарушения зрения).",
                            "Кому подходит: людям 45+ с пресбиопией, пациентам с выраженной миопией/гиперметропией, астигматизмом, ранними изменениями хрусталика или повышенным риском катаракты.",
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Почему стоит выбрать метод BiVision RLE: ключевые преимущества",
                        text: "Рефракционная хирургия в офтальмологии подходит как при дальнозоркости, так и при близорукости, включая астигматизм.",
                        slider: [
                            {
                                title: "Долговременное зрение без очков",
                                text: "Технология BiVision помогает восстановить зрение и вблизи, и вдаль, снижая зависимость от очков даже при возрастной дальнозоркости.",
                            },
                            {
                                title: "Альтернатива лазерной коррекции",
                                text: "Методика подходит тем, кому противопоказано лазерное вмешательство, но требуется коррекция миопии, гиперметропии или астигматизма.",
                            },
                            {
                                title: "Премиальные линзы Rayner",
                                text: "В клинике в Вильнюсе используются только оригинальные английские интраокулярные линзы высокого класса — без компромиссов по качеству и безопасности.",
                            },
                            {
                                title: "Профилактика развития катаракты",
                                text: "Во время операции собственный хрусталик заменяется, поэтому риск катаракты в будущем сводится к минимуму. Дополнительная полировка капсулы помогает улучшить чёткость и контрастность зрения после процедуры.",
                            },
                            {
                                title: "Щадящая технология удаления хрусталика",
                                text: "Применяем протокол iQ 5 Minutes без ультразвука — только контролируемый направленный водный поток. Это уменьшает нагрузку на роговицу и ускоряет реабилитацию.",
                            },
                            {
                                title: "Высокий профессионализм хирургов",
                                text: "Офтальмохирурги центра проходили обучение в ведущих европейских школах и имеют значительный практический опыт — не менее 10 лет в микрохирургии глаза.",
                            },
                            {
                                title: "Доступ к передовым медицинским разработкам",
                                text: "Специалисты участвуют в клинических оценках инновационных решений ещё до их широкого внедрения, чтобы применять самые актуальные технологии лечения зрения.",
                            },
                        ],
                        btn: {
                            btnName: "записаться на приём",
                            btnLink: "#booking",
                        },
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        firstImageLeft: true,
                        data: [
                            {
                                title: "Основные показания и симптомы, когда стоит рассмотреть рефракционную замену хрусталика (RLE)",
                                image: "/images/perevirka2.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "RLE рассматривают, когда возрастная дальнозоркость сочетается с другими нарушениями рефракции — например, когда нужны разные очки для чтения и для работы за компьютером, а к вечеру глаза быстрее устают и фокус становится нестабильным. Нередко пациенты отмечают «мутноватую» картинку по утрам, снижение контрастности, блики при ночном вождении и ощущение, что очки уже не дают прежней чёткости. Если ранее лазерную коррекцию не рекомендовали из-за параметров роговицы, RLE становится практичной альтернативой: метод работает с хрусталиком и не изменяет роговицу. При ранних изменениях хрусталика вмешательство также снижает вероятность катаракты в будущем, а людям с высокими требованиями к зрению помогает добиться более стабильной картинки и контраста.",
                                            },
                                        ],
                                        greenText:
                                            "Решение «два в одном». Мы улучшаем зрение и одновременно уменьшаем риск катаракты в перспективе. Минимальный разрез, быстрое восстановление, максимум комфорта.",
                                    },
                                ],
                            },
                            {
                                title: "Почему пациенты выбирают RLE",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Выбор в пользу RLE чаще всего связан с сочетанием медицинских показаний и потребностей образа жизни:",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "1. Медицинские показания",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Лазерную коррекцию роговицы нельзя проводить или она не даёт ожидаемого прогноза.",
                                                    "Нужен более широкий диапазон коррекции (высокие диоптрии, сочетание миопии/гиперметропии с астигматизмом).",
                                                    "Есть риск или ранние проявления катаракты — замена хрусталика решает вопрос заранее.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "2. Ожидания от качества зрения",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Стремление видеть без очков вблизи, на среднем расстоянии и вдаль (мультифокальные/трифокальные ИОЛ).",
                                                    "Потребность в устойчивой чёткости в течение дня: тексты, экраны, вождение, спорт.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "3. Безопасность и предсказуемость",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "RLE не воздействует на роговицу — важно при тонкой или «проблемной» роговице.",
                                                    "Профилактика катаракты: после замены собственного хрусталика она больше не формируется.",
                                                    "Персональный подбор ИОЛ под задачи и привычки (чтение, компьютер, ночное вождение).",
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "individual", data: <LansectomyGreenSection /> },
                {
                    type: "numberListSection",
                    data: {
                        listTitle: "Этапы",
                        list: [
                            {
                                itemTitle:
                                    "Запись на приём и подготовка к диагностике",
                                itemText: [
                                    "Записаться можно по телефону или онлайн — это займёт всего несколько минут.",
                                    "Специальная подготовка обычно не нужна. Если вы носите мягкие контактные линзы — снимите их с вечера (желательно за 12 часов до визита). Возьмите текущие очки/рецепт и результаты прошлых обследований — мы оценим динамику.",
                                    "Рекомендуем планировать визит без самостоятельного вождения сразу после приёма: при осмотре могут расширять зрачки, и зрение вблизи временно ухудшается.",
                                ],
                            },
                            {
                                itemTitle: "Компьютерная диагностика зрения",
                                itemText: [
                                    "Продолжительность — примерно 2–2,5 часа.",
                                    "Проводим полный комплекс измерений для рефракционной замены хрусталика (RLE): авторефрактометрия и проверка остроты зрения, биометрия и расчёт оптической силы ИОЛ, кератотопография/томография роговицы, тонометрия, при необходимости — ОКТ макулы и зрительного нерва, оценка слёзной плёнки.",
                                    "Для точности применяются капли для расширения зрачков — несколько часов после осмотра зрение вблизи может быть размытым.",
                                ],
                            },
                            {
                                itemTitle: "Консультация офтальмолога",
                                itemText: [
                                    "После обследования врач разъяснит результаты, обсудит прогноз и подберёт тип интраокулярной линзы под ваш образ жизни (моно-/EDOF/трифокальная, торическая при астигматизме).",
                                    "Обсудим показания и возможные ограничения, ответим на вопросы, предоставим прозрачную смету и план подготовки. При необходимости вы получите перечень стандартных предоперационных анализов и рекомендации.",
                                    "Вместе определим дату RLE и индивидуальный план восстановления.",
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "textsColumns",
                    data: {
                        paddingTop: true,
                        title: "Инновационное восстановление зрения: рефракционная замена хрусталика (RLE)",
                        text: "ефракционная замена хрусталика (RLE, рефракционная ленсэктомия) — метод коррекции зрения, при котором естественный хрусталик заменяется интраокулярной линзой (ИОЛ). RLE корректирует миопию, гиперметропию, пресбиопию и астигматизм и является рациональной альтернативой, когда лазерная коррекция противопоказана (тонкая роговица, рубцы, нестабильная рефракция) и когда важна стабильная чёткость без очков и контактных линз.",
                        blocks: [
                            {
                                title: "Почему стоит выбрать BiVision RLE у нас",
                                text: [
                                    {
                                        type: "text",
                                        text: "В нашей клинике в Вильнюсе рефракционная замена хрусталика сочетает технологичность и опыт команды. После детальной диагностики мы подбираем ИОЛ под реальные зрительные задачи: чтение, работа за компьютером, активность, ночное вождение. При удалении хрусталика используем контролируемый водный поток вместо ультразвука (BiVision iQ 5 Minutes), что снижает воздействие на роговицу и ускоряет восстановление. Мы работаем с оригинальными линзами Rayner — от мультифокальных до торических — и ориентируемся на долгосрочный зрительный комфорт. Хирурги имеют более десяти лет практики, включая обучение в европейских центрах.",
                                    },
                                ],
                            },
                            {
                                title: "Подготовка и восстановление",
                                text: [
                                    {
                                        type: "text",
                                        text: "Подготовка сводится к простой организации: возьмите прежние медицинские заключения, список принимаемых препаратов и следуйте рекомендациям по контактным линзам, если вы ими пользуетесь. В день операции желательно прийти с сопровождением, чтобы комфортно добраться домой. После вмешательства вы используете капли по схеме, избегаете бассейна и сауны в течение 2–3 недель и временно ограничиваете интенсивные нагрузки. Возобновление вождения согласовывается с хирургом на контрольном визите.",
                                    },
                                ],
                            },
                            {
                                title: "Какие интраокулярные линзы (ИОЛ) мы используем",
                                text: [
                                    {
                                        type: "text",
                                        text: "Мы работаем с линейками Rayner и Alcon, подбирая конфигурацию под конкретные параметры глаз и образ жизни. Для максимальной независимости от очков предлагаем трифокальные решения; при необходимости коррекции астигматизма используем торические модели; если приоритет — естественный зрительный комфорт и расширенная глубина резкости, подойдут ИОЛ EDOF. Финальный выбор основывается на биометрии, величине роговичного астигматизма и ваших ежедневных задачах.",
                                    },
                                ],
                            },
                            {
                                title: "Стоимость и что входит в цену",
                                text: [
                                    {
                                        type: "text",
                                        text: "Стоимость RLE в Вильнюсе зависит прежде всего от типа интраокулярной линзы и индивидуальных клинических особенностей. На консультации вы получите персональную смету с пояснением каждого этапа: диагностика, операция и послеоперационное сопровождение. При необходимости администратор подскажет актуальные программы лояльности и варианты оплаты.",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Цена на рефракционную ленсектомию в Вильнюсе",
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часто задаваемые вопросы о рефракционной замене хрусталика (ленсэктомии)",
                        content: [
                            {
                                question:
                                    "Что такое рефракционная хирургия глаза и что представляет собой рефракционная замена хрусталика (RLE)?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Рефракционная хирургия глаза — направление офтальмологии, которое корректирует зрение хирургическими методами. Рефракционная замена хрусталика (RLE) — микроинвазивная операция, при которой естественный хрусталик заменяют на интраокулярную линзу (ИОЛ). Такая процедура корректирует пресбиопию, миопию, гиперметропию и астигматизм и может быть альтернативой лазерным методам. Перед вмешательством обязательны обследование и консультация врача.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Кому подходит рефракционная замена хрусталика — при гиперметропии, миопии или пресбиопии?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "RLE при гиперметропии и миопии актуальна, когда лазерная коррекция ограничена (тонкая или неровная роговица, высокие диоптрии). RLE также эффективна при пресбиопии (возрастная дальнозоркость) и помогает уменьшить необходимость постоянно менять разные очки. Решение принимается индивидуально после полного обследования и консультации офтальмолога.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько стоит замена хрусталика? Какая цена RLE в Вильнюсе?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Стоимость замены хрусталика зависит от типа ИОЛ (монофокальная, трифокальная, EDOF, торическая), дополнительных процедур и клинических особенностей. Часто ищут: «ленсэктомия цена», «замена хрусталика Вильнюс цена», «рефракционная замена хрусталика стоимость». Окончательная стоимость определяется после диагностики и консультации; иногда действуют специальные предложения. Уточнить цены можно на приёме или по телефону клиники.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чем RLE отличается от лазерной коррекции и когда это «лучший» вариант?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Лазер изменяет профиль роговицы, а RLE работает с хрусталиком. Поэтому RLE рассматривают при возрастной дальнозоркости и комбинированных нарушениях рефракции у пациентов зрелого возраста или при высоких диоптриях. Для одних лучший прогноз даёт лазер, для других — имплантация линзы. На консультации врач объяснит преимущества, возможные побочные эффекты и противопоказания.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Подходит ли RLE для лечения дальнозоркости и близорукости? Какая цена таких операций?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да. Для лечения дальнозоркости (включая пресбиопию) и близорукости RLE может быть оптимальным решением, когда лазерная коррекция не рекомендована. Часто ищут: «дальнозоркость операция цена», «лазерная коррекция зрения стоимость», «операция близорукость цена». Точная стоимость подтверждается после диагностики; иногда доступны акции и скидки.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Где лучше сделать операцию по замене хрусталика? На что обратить внимание в отзывах?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Выбирайте клинику с опытом в рефракционной хирургии, современным диагностическим оборудованием, прозрачной сметой и понятным послеоперационным сопровождением. Изучайте отзывы и реальные клинические примеры. На консультации уточните подбор ИОЛ под ваш образ жизни, график контрольных визитов и ограничения. Также узнайте, как организована связь с врачом после операции.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Каковы риски, противопоказания и побочные эффекты замены хрусталика?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Как и любое вмешательство, замена хрусталика имеет противопоказания (активные воспалительные процессы, неконтролируемое внутриглазное давление) и возможные побочные эффекты (временная сухость, блики, светочувствительность). Большинство проявлений кратковременны и корректируются рекомендациями. При сопутствующих заболеваниях тактика подбирается индивидуально. Решение о проведении операции принимается только после полного обследования.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Как проходит путь пациента — от первой консультации до восстановления? Можно ли получить бесплатный приём?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Сначала вы записываетесь на консультацию и диагностику (биометрия, топография, осмотр сетчатки). Затем врач подбирает подходящую ИОЛ, обсуждает стоимость и сроки. В день операции выполняется имплантация линзы; большинство пациентов возвращаются к привычному ритму с контрольными визитами по графику. Что касается «бесплатно»: иногда бывают акции, но стандартно первичная консультация оплачивается. Администратор поможет подобрать удобное время и специалиста.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        name: servicesList.find(s => s.key === "lazerinis-akiu-ligu-gydymas")!,
        lt: {
            textMain:
                "Можливість чітко візуалізувати патологічні зміни дозволяє лікарю виконувати процедуру гранично точно.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Лазерне лікування захворювань очей в Києві. Лазерная терапия зрения | EYES ",
                        descriptionSEO:
                            "➔ Лазерне лікування зору (захворювань очей) в Києві. Лазерне лікування, терапія при глаукомі, видалення катаракти лазером - Британський офтальмологічний центр. ➡️ Сучасна діагностика та ефективне лікування 👍 Перевірений досвід та бездоганна репутація ☎️ 0 800 507 077",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "Lazerinis akių ligų gydymas",
                        text: "Lazerinis akių ligų gydymas Lietuvoje, Vilniuje – tai neskausmingos ambulatorinės procedūros, skirtos regėjimui išsaugoti ir stabilizuoti: tinklainės lazerinė koaguliacija, užpakalinės lęšiuko kapsulės YAG lazerinė kapsulotomija ir lazerinis glaukomos gydymas.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Lazerinis akių ligų gydymas: šiuolaikinės lazerinės procedūros",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Lazerinis akių ligų gydymas mūsų privačioje klinikoje Lietuvoje (Vilniuje) paprastai atliekamas ramiai, greitai ir dažniausiai be skausmo. Tinklainė, gyslainė ir lęšiuko kapsulės membrana beveik neturi skausmo receptorių, todėl pacientas dažniausiai jaučia tik trumpus šviesos blyksnius arba trumpalaikį apakinimą. Prieš procedūrą vyzdys išplečiamas specialiais lašais, kad būtų užtikrintas tikslus priėjimas prie poveikio zonos. Atliekant YAG lazerinę procedūrą diskomfortas paprastai nejaučiamas, o atsistatymas minimalus – dauguma pacientų tą pačią dieną grįžta prie įprasto ritmo. Lazerinė terapija Lietuvoje – tai minimaliai traumuojantis, prognozuojamo efekto gydymas be pjūvių, greitas atsistatymas ir be hospitalizacijos.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Kas priklauso rizikos grupei ir kada verta kreiptis į gydytoją?",
                                image: "/images/likuvanna1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Ankstyvi pakitimai neretai vystosi be ryškių simptomų, todėl profilaktinė patikra yra optimalus sprendimas, jei priklausote rizikos grupei. Jai priskiriami pacientai, turintys didelę trumparegystę, sergantys cukriniu diabetu ilgiau nei 5 metus, turintys arterinę hipertenziją, su amžiniais pakitimais, taip pat asmenys, kurių šeimoje buvo glaukoma ar tinklainės atšoka. Lazerinis gydymas Lietuvoje veiksmingiausias ankstyvose stadijose, kai galima sustabdyti ligos progresavimą ir sumažinti komplikacijų riziką. Užsiregistruokite oftalmologo konsultacijai Vilniuje – detaliai apžiūrai, individualiam gydymo planui ir įvertinimui, ar lazerinė intervencija reikalinga būtent jūsų atveju.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Tinklainės lazerinė koaguliacija: sustiprinimas ir komplikacijų profilaktika",
                                image: "/images/likuvanna2.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Tinklainės lazerinė koaguliacija – tai mikrokoaguliacinių „taškų“ suformavimas, kuris sustiprina susilpnėjusias vietas, pagerina audinių lokalų stabilumą ir padeda sumažinti plyšimų bei atšokos riziką. Metodas taikomas esant diabetinei retinopatijai, tinklainės venų trombozei, periferinėms distrofijoms ir pratrūkusiems plyšimams. Procedūra trunka kelias minutes, atliekama ambulatoriškai Lietuvoje ir nereikalauja stacionarinio gydymo; po jos dažniausiai rekomenduojama laikinai riboti fizinį krūvį. Dažni užklausų pavyzdžiai: „tinklainės lazerinė koaguliacija Vilniuje“, „tinklainės lazerinės operacijos kaina Lietuvoje“, „tinklainės sutvirtinimas lazeriu kaina“. Galutinė kaina priklauso nuo pakitimų ploto ir koaguliacinių taškų skaičiaus, ją nustato gydytojas po apžiūros ir diagnostikos.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        data: [
                            {
                                title: "Užpakalinės kapsulės YAG lazerinė kapsulotomija: greitas „antrinės kataraktos“ sprendimas",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Daliai pacientų po sėkmingos kataraktos operacijos laikui bėgant gali atsirasti užpakalinės kapsulės drumstėjimas, sukeliantis „šydo“ efektą ir mažinantis vaizdo ryškumą. YAG lazerinė kapsulotomija – tai neskausminga ambulatorinė procedūra, trunkanti kelias minutes ir paprastai nereikalaujanti tyrimų ar narkozės. Regėjimas dažniausiai pagerėja beveik iš karto, o įprasta veikla paprastai galima tą pačią dieną. Dažnos užklausos: „antrinės kataraktos šalinimas lazeriu kaina Lietuvoje“, „lazerinė procedūra po kataraktos kaina Vilniuje“, „YAG kapsulotomijos kaina“. Taikome aiškią kainodarą, siūlome paketinius sprendimus ir informuojame apie aktualius pasiūlymus – tikslią kainą gydytojas nurodys konsultacijos metu Lietuvoje, Vilniuje.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Glaukomos lazerinis gydymas ir lazerinė stimuliacija: spaudimo kontrolė ir funkcijų palaikymas",
                                image: "/images/likuvanna3.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Glaukoma – lėtinė liga, kurios pagrindinis tikslas – stabilizuoti akispūdį ir maksimaliai išsaugoti regos nervą. Jei lašinama terapija nepakankama, lazerinis poveikis akies drenažinei sistemai (pvz., selektyvioji lazerinė trabekuloplastika) gali padėti pasiekti kontroliuojamas akispūdžio reikšmes be pjūvių ir ilgos reabilitacijos. Dažnos užklausos: „glaukomos lazerinio gydymo kaina Lietuvoje“, „lazerinė procedūra glaukomai Vilniuje“, „glaukomos lazerio kontraindikacijos“. Papildomai taikome lazerinę stimuliaciją mikrocirkuliacijai ir medžiagų apykaitos procesoriams tinklainėje bei regos nerve palaikyti – kai kuriais atvejais ją deriname su medikamentiniu gydymu, siekiant sustiprinti efektą.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Dažniausiai užduodami klausimai apie akių lazerines procedūras",
                        content: [
                            {
                                question:
                                    "Kiek kainuoja akių lazerinis gydymas ir nuo ko priklauso kaina?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Kaina priklauso nuo procedūros tipo (tinklainės lazerinė koaguliacija, YAG kapsulotomija, glaukomos lazerinis gydymas), intervencijos apimties ir klinikinės situacijos. Tikslią kainą gydytojas nustato po ištyrimo ir konsultacijos Lietuvoje. Registratūroje galite pasitikslinti informaciją apie aktualius pasiūlymus.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Tinklainės lazerinė koaguliacija: kaip atliekama procedūra ir ar skauda?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Procedūra atliekama ambulatoriškai ir paprastai yra neskausminga; galimi trumpi šviesos blyksniai. Po lazerinės koaguliacijos dažniausiai rekomenduojama kelioms dienoms riboti fizinį krūvį, tačiau prie įprastų darbų daugelis grįžta tą pačią dieną.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Ar glaukomos lazerinis gydymas – visam laikui? Ar po procedūros reikės lašų?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Lazeris gali sumažinti akispūdį ir stabilizuoti būklę, tačiau glaukoma išlieka lėtine liga. Net ir po sėkmingos procedūros daliai pacientų reikalingi lašai ir reguliarūs kontroliniai vizitai Lietuvoje, kad būtų stebimas akispūdis ir regos nervo būklė.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kokios yra kontraindikacijos ir galimi šalutiniai poveikiai po lazerinių procedūrų?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Kontraindikacijos visada individualios (aktyvus uždegimas, ryškūs optinių terpių drumstumai, dekompensuotos sisteminės būklės). Šalutiniai poveikiai pasitaiko retai ir dažniausiai yra laikini (trumpalaikis diskomfortas, apakinimas, epizodinis matymo „užrasojimas“). Visi galimi rizikos veiksniai ir apribojimai aptariami konsultacijos metu.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "„Antrinė katarakta“: ar padės YAG kapsulotomija ir kiek tai trunka?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Taip, būtent YAG kapsulotomija pašalina užpakalinės kapsulės drumstėjimą. Procedūra trunka kelias minutes, atliekama be pjūvių ir be skausmo, o regėjimo pagerėjimas dažniausiai juntamas beveik iš karto. Tikslią kainą sužinosite konsultacijos metu Vilniuje.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Ar verta profilaktiškai atlikti tinklainės koaguliaciją esant trumparegystei?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Nustačius periferines distrofijas ar suplonėjusias tinklainės zonas – taip, tai gali sumažinti plyšimų ir atšokos riziką. Sprendimas priimamas po išplėstinės akies dugno apžiūros ir rizikų įvertinimo.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kaip pasiruošti lazerinei procedūrai ir ką rodo atsiliepimai?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Dažniausiai specialaus pasiruošimo nereikia; vyzdys išplečiamas lašais vietoje. Po diagnostikos pateikiame individualias rekomendacijas. Pacientų atsiliepimus ir gydytojo rekomendacijas galima peržiūrėti klinikoje ir aptarti konsultacijos metu.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Kur Vilniuje atliekamos tokios procedūros ir kaip užsiregistruoti?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Mūsų privačioje klinikoje Lietuvoje, Vilniuje, atliekamas lazerinių procedūrų spektras: tinklainės lazerinė koaguliacija, glaukomos lazerinis gydymas, YAG kapsulotomija. Užsiregistruokite oftalmologo konsultacijai internetu arba telefonu – parinksime optimalią taktiką ir po ištyrimo apskaičiuosime procedūros kainą.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        en: {
            textMain:
                "The ability to clearly visualize pathological changes allows the doctor to perform the procedure with extreme precision.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Laser Treatment of Eye Diseases in Kyiv. Vision Laser Therapy | EYES",
                        descriptionSEO:
                            "➔ Laser vision treatment (eye diseases) in Kyiv. Laser therapy, glaucoma treatment, cataract removal with laser - 🇺🇦🇬🇧 British Ophthalmology Center. ➡️ Modern diagnostics and effective treatment 👍 Proven experience and impeccable reputation ☎️ 0 800 507 077",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "laser treatment of eye diseases",
                        text: "Laser treatment of eye diseases in Lithuania, in Vilnius, comprises painless outpatient procedures aimed at preserving and stabilising vision, including retinal laser photocoagulation, YAG laser posterior capsulotomy, and laser treatment for glaucoma.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Laser treatment of eye diseases: modern laser procedures",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Laser therapy for eye conditions at our private clinic in Lithuania (Vilnius) is typically calm, fast and, in most cases, pain-free. The retina, choroid and the capsular membrane of the lens have very few pain receptors, so patients most often notice only brief light flashes or short-term glare. Before the procedure, we dilate the pupil with special eye drops to ensure precise access to the treatment area. With YAG laser procedures, discomfort is usually absent and recovery is minimal—most patients return to their usual routine on the day of treatment. Laser therapy in Lithuania offers minimal trauma, a predictable outcome, no incisions and rapid recovery without hospitalisation.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Who is at risk and when should you see a doctor?",
                                image: "/images/likuvanna1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Early changes often develop without pronounced symptoms, so preventive examination is the best option if you belong to a risk group. This includes patients with high myopia, diabetes for more than 5 years, arterial hypertension, age-related changes, as well as those with a family history of glaucoma or retinal detachment. Laser treatment in Lithuania is most effective in the early stages, when it is possible to stop disease progression and reduce the risk of complications. Book an ophthalmologist consultation in Vilnius for a detailed examination, an individual treatment plan and clarification of whether laser intervention is required in your case.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Retinal laser photocoagulation: strengthening and prevention of complications",
                                image: "/images/likuvanna2.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Retinal laser photocoagulation involves creating micro-coagulation “spots” that reinforce weakened areas, improve local tissue stability and help reduce the risk of retinal tears and detachment. The method is used for diabetic retinopathy, retinal vein occlusion, peripheral retinal dystrophies and the presence of full-thickness retinal breaks. The procedure takes a few minutes, is performed on an outpatient basis in Lithuania and does not require inpatient stay; after treatment, temporary limitation of physical exertion is usually recommended. Common searches include: “retinal laser photocoagulation Vilnius”, “retinal laser surgery price in Lithuania”, “retinal strengthening with laser cost”. The final cost depends on the extent of changes and the number of laser spots and is determined after examination and diagnostics.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        data: [
                            {
                                title: "YAG laser posterior capsulotomy: a quick solution for “secondary cataract”",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "In some patients, months or years after successful cataract surgery, clouding of the posterior capsule may develop, creating a “veil” effect and reducing image clarity. YAG laser posterior capsulotomy is a painless outpatient procedure that takes a few minutes and typically does not require tests or anaesthesia. Vision often clears almost immediately, and normal activity is usually possible the same day. Frequent queries include: “secondary cataract removal by laser price in Lithuania”, “laser procedure after cataract cost Vilnius”, “YAG capsulotomy price”. We follow transparent pricing, offer package solutions and inform patients about current offers—your doctor will confirm the exact cost during a consultation in Lithuania, in Vilnius.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Laser treatment for glaucoma and laser stimulation: pressure control and functional support",
                                image: "/images/likuvanna3.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Glaucoma is a chronic disease in which the key goal is to stabilise intraocular pressure and preserve the optic nerve as much as possible. When eye drops are insufficient, laser treatment of the drainage system (for example, selective laser trabeculoplasty) can help achieve controlled pressure values without incisions and without prolonged rehabilitation. Common searches include: “glaucoma laser treatment price in Lithuania”, “laser procedure for glaucoma Vilnius”, “glaucoma laser contraindications”. In addition, we use laser stimulation to support microcirculation and metabolic processes in the retina and optic nerve; in some cases it is combined with medical therapy to enhance the overall effect.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about laser eye treatment",
                        content: [
                            {
                                question:
                                    "How much does laser eye treatment cost and what does the price depend on?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The price depends on the type of procedure (retinal photocoagulation, YAG capsulotomy, laser treatment for glaucoma), the scope of intervention and the clinical situation. The exact cost is determined by the doctor after examination and consultation in Lithuania. Please ask our reception about current offers.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Retinal photocoagulation: how is the procedure performed and does it hurt?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The procedure is performed on an outpatient basis and is usually painless; brief light flashes may occur. After laser photocoagulation, limiting physical activity for a few days is commonly recommended, but many patients return to their usual activities the same day.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Is laser treatment for glaucoma permanent? Will I need drops after the procedure?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Laser treatment may lower intraocular pressure and stabilise the condition; however, glaucoma remains a chronic disease. Even after a successful procedure, some patients still require eye drops and regular follow-up visits in Lithuania to monitor intraocular pressure and the optic nerve.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What are the contraindications and possible side effects of laser procedures?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Contraindications are always individual (active inflammation, significant opacities of the ocular media, decompensated systemic conditions). Side effects are rare and are most often temporary (short-term discomfort, glare, episodic blurred vision). All risks and limitations are discussed during the appointment.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "“Secondary cataract”: will YAG capsulotomy help and how long does it take?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes. YAG capsulotomy removes clouding of the posterior capsule. The procedure takes a few minutes, is performed without incisions and is painless, while visual improvement usually occurs almost immediately. Please confirm the exact cost during a consultation in Vilnius.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Is preventive retinal photocoagulation recommended for myopia?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "If peripheral retinal dystrophies or thinning areas are detected, preventive laser reinforcement may reduce the risk of tears and detachment. The decision is made after a dilated fundus examination and risk assessment.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How should I prepare for a laser procedure and what do reviews say?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "In most cases, no special preparation is required; pupil dilation is performed with eye drops on site. After diagnostics, we provide personalised recommendations. Patient reviews and the doctor’s recommendations can be viewed at the clinic and discussed during the consultation.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Where are these procedures performed in Vilnius and how can I book an appointment?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "At our private clinic in Lithuania, in Vilnius, we provide a range of laser procedures: retinal photocoagulation, laser treatment for glaucoma, and YAG posterior capsulotomy. Book an ophthalmologist consultation online or by phone—we will choose the optimal approach and calculate the cost after examination.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        ru: {
            textMain:
                "Возможность четко визуализировать патологические изменения позволяет врачу выполнять процедуру предельно точно.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Лазерное лечение заболеваний глаз в Киеве. Лазерная терапия зрения | EYES",
                        descriptionSEO:
                            "➔ Лазерное лечение зрения (заболеваний глаз) в Киеве. Лазерная терапия, лечение глаукомы, удаление катаракты лазером - 🇺🇦🇬🇧 Британский офтальмологический центр. ➡️ Современная диагностика и эффективное лечение 👍 Проверенный опыт и безупречная репутация ☎️ 0 800 507 077",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "лазерное лечение заболеваний глаза",
                        text: "Лазерное лечение заболеваний глаз в Литве, в Вильнюсе — это безболезненные амбулаторные процедуры, направленные на сохранение и стабилизацию зрения: лазерная коагуляция сетчатки, YAG-дисцизия задней капсулы и лазерное лечение глаукомы.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Лазерное лечение заболеваний глаз: современные лазерные процедуры",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Лазерное лечение глазных заболеваний в нашей частной клинике в Литве (Вильнюс) проходит спокойно, быстро и, как правило, без боли. Сетчатка, сосудистая оболочка и капсулярная мембрана хрусталика практически не имеют болевых рецепторов, поэтому пациент чаще ощущает лишь короткие световые вспышки или кратковременное ослепление. Перед вмешательством мы расширяем зрачок специальными каплями, чтобы обеспечить точный доступ к зоне воздействия. При использовании YAG-лазера дискомфорт обычно отсутствует, а восстановление минимальное — в день процедуры большинство пациентов возвращаются к привычному ритму. Лазерная терапия в Литве — это минимальная травматичность, прогнозируемый эффект, отсутствие разрезов и быстрое восстановление без госпитализации.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Кто в группе риска и когда стоит обратиться к врачу?",
                                image: "/images/likuvanna1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Ранние изменения нередко развиваются без выраженных симптомов, поэтому профилактический осмотр — оптимальное решение, если вы относитесь к группе риска. К ней относятся пациенты с высокой близорукостью, сахарным диабетом более 5 лет, артериальной гипертензией, возрастными изменениями, а также люди с семейной историей глаукомы или отслоения сетчатки. Лазерное лечение в Литве наиболее результативно на ранних стадиях, когда можно остановить прогрессирование заболевания и снизить риск осложнений. Запишитесь на консультацию офтальмолога в Вильнюсе для детального осмотра, индивидуального плана терапии и уточнения, требуется ли лазерное вмешательство именно в вашем случае.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Лазерная коагуляция сетчатки: укрепление и профилактика осложнений",
                                image: "/images/likuvanna2.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Лазерная коагуляция сетчатки — это создание микро-коагуляционных «точек», которые укрепляют ослабленные участки, улучшают локальную стабильность тканей и помогают снизить риск разрывов и отслоения. Метод применяется при диабетической ретинопатии, тромбозе вен сетчатки, периферических дистрофиях и при наличии прорывных разрывов. Процедура занимает несколько минут, выполняется амбулаторно в Литве и не требует пребывания в стационаре; после неё обычно рекомендуют временно ограничить физические нагрузки. Популярные запросы: «лазерная коагуляция сетчатки Вильнюс», «лазерная операция на сетчатке цена в Литве», «укрепление сетчатки лазером стоимость». Итоговая стоимость зависит от площади изменений и количества коагуляционных точек и определяется после осмотра и диагностики.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        data: [
                            {
                                title: "YAG-лазерная дисцизия задней капсулы: быстрое решение «вторичной катаракты»",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "У части пациентов после успешной операции по удалению катаракты со временем может появиться помутнение задней капсулы, создающее эффект «пелены» и снижающее чёткость изображения. YAG-лазерная дисцизия — это безболезненная амбулаторная процедура, занимающая несколько минут и обычно не требующая анализов или наркоза. Зрение проясняется практически сразу, а привычная активность, как правило, возможна в тот же день. Часто спрашивают: «удаление вторичной катаракты лазером цена в Литве», «лазерная процедура после катаракты стоимость Вильнюс», «YAG-дисцизия цена». Мы придерживаемся понятного ценообразования, предлагаем пакетные решения и информируем об актуальных предложениях — точную стоимость врач озвучит на консультации в Литве, в Вильнюсе.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Лазерное лечение глаукомы и лазерная стимуляция: контроль давления и поддержка функций",
                                image: "/images/likuvanna3.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Глаукома — хроническое заболевание, при котором ключевая цель — стабилизировать внутриглазное давление и максимально сохранить зрительный нерв. Если капельной терапии недостаточно, лазерное воздействие на дренажную систему (например, селективная лазерная трабекулопластика) помогает добиться контролируемых значений давления без разрезов и длительной реабилитации. Популярные запросы: «лазерное лечение глаукомы цена в Литве», «лазерная процедура при глаукоме Вильнюс», «глаукома лазер противопоказания». Дополнительно мы используем лазерную стимуляцию для поддержки микроциркуляции и обменных процессов в сетчатке и зрительном нерве — её иногда сочетают с медикаментозной терапией для усиления эффекта.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Частые вопросы о лазерном лечении глаз",
                        content: [
                            {
                                question:
                                    "Сколько стоит лазерное лечение глаз и от чего зависит цена?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Цена зависит от вида процедуры (лазерная коагуляция сетчатки, YAG-дисцизия, лазерное лечение глаукомы), объёма вмешательства и клинической картины. Точную стоимость определяет врач после обследования и консультации в Литве. Уточните в регистратуре информацию об актуальных предложениях.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Лазерная коагуляция сетчатки: как проходит процедура и больно ли это?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Процедура проводится амбулаторно и обычно безболезненна; возможны короткие световые вспышки. После лазеркоагуляции чаще всего рекомендуют на несколько дней ограничить физические нагрузки, но к обычным делам многие возвращаются в тот же день.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Лазерное лечение глаукомы — это навсегда? Нужны ли капли после операции?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Лазер может снизить внутриглазное давление и стабилизировать состояние, однако глаукома остаётся хроническим заболеванием. Даже после успешного вмешательства части пациентов требуются капли и регулярные контрольные осмотры в Литве для мониторинга давления и зрительного нерва.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Какие противопоказания и возможные побочные эффекты лазерных процедур?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Противопоказания всегда индивидуальны (активное воспаление, выраженные помутнения оптических сред, декомпенсированные системные состояния). Побочные эффекты встречаются редко и чаще носят временный характер (кратковременный дискомфорт, ослепление, эпизодическое затуманивание). Все риски и ограничения обсуждаются на приёме.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "«Вторичная катаракта»: поможет ли YAG-лазерная дисцизия и сколько это длится?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да, именно YAG-дисцизия устраняет помутнение задней капсулы. Процедура занимает несколько минут, проводится без разрезов и боли, а улучшение зрения обычно наступает практически сразу. Точную стоимость уточните на консультации в Вильнюсе.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Стоит ли делать лазерную коагуляцию профилактически при миопии?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "При выявлении периферических дистрофий или истончённых зон сетчатки — да, это может снизить риск разрывов и отслоения. Решение принимается после расширенного осмотра глазного дна и оценки рисков.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Как подготовиться к лазерной процедуре и что говорят отзывы?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Обычно специальная подготовка не требуется; расширение зрачка выполняется каплями на месте. После диагностики мы дадим персональные рекомендации. Отзывы пациентов и врачебные рекомендации можно посмотреть в клинике и обсудить во время консультации.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Где делают такие процедуры в Вильнюсе и как записаться на приём?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "В нашей частной клинике в Литве, в Вильнюсе, выполняется спектр лазерных вмешательств: лазерная коагуляция сетчатки, лазерное лечение глаукомы, YAG-дисцизия. Запишитесь на консультацию офтальмолога онлайн или по телефону — мы подберём оптимальную тактику и рассчитаем стоимость после обследования.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        name: servicesList.find(s => s.key === "glaukomos-gydymas")!,
        lt: {
            textMain:
                "Ми лікуємо всі види глаукоми із застосуванням найсучасніших і ефективних хірургічних методик.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Лікування глаукоми у Києві (операція з видалення глаукоми). Хірургічне лікування глаукоми | EYES ",
                        descriptionSEO:
                            "Хірургічні методи лікування глаукоми (операція на глаукому) - 🇺🇦🇬🇧 Британський офтальмологічний центр. ✅ Довірте операцію при глаукомі професіоналам! ➡️ Сучасна діагностика та ефективне лікування 👍 Перевірений досвід та бездоганна репутація ☎️ 0 800 507 077",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "хірургічне лікування глаукоми",
                        text: "Сучасні малоінвазивні та класичні методи для стабілізації тиску й збереження зору.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Хірургічне лікування глаукоми: мета, показання та результат",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Хірургічне лікування глаукоми спрямоване на формування альтернативного шляху відтоку внутрішньоочної рідини, стабільне зниження внутрішньоочного тиску (ВОТ) і збереження зорових функцій. Якщо медикаментозна терапія, краплі та лазерні процедури не дають ефекту, операція глаукоми стає найкращим рішенням. У нашій приватній клініці в Києві проводиться діагностика та лікування глаукоми за міжнародними протоколами: обстеження, консультація лікаря-офтальмолога, індивідуальний підбір методу, післяопераційний огляд.",
                                            },
                                            {
                                                type: "text",
                                                text: "Після втручання частині пацієнтів вдається повністю відмовитися від регулярних крапель або суттєво зменшити їх кількість. Хірургічні методи лікування глаукоми ефективні при відкритокутовій, закритокутовій, первинній та вторинній формі, а також у складних випадках, коли глаукома очей прогресує.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Непроникна глибока склеректомія (НГСЕ): щадний підхід при відкритокутовій глаукомі",
                                image: "/images/perevirka-zoru-hero.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "НГСЕ — це щадна операція при глаукомі, за якої внутрішні структури ока залишаються герметичними, а відтік рідини відбувається через спеціально сформований тонкий канал. Метод забезпечує плавне зниження ВОТ без різких перепадів, мінімізує побічні ефекти та прискорює відновлення.",
                                            },
                                            {
                                                type: "text",
                                                text: "Втручання виконується амбулаторно; зазвичай повернення до звичного режиму можливе протягом 1–2 діб. Непроникна глибока склеректомія може поєднуватися з видаленням катаракти — це зручно пацієнтам із одночасною катарактою, дозволяє скоротити терміни лікування та покращити зір. Якщо вас цікавить хірургічне лікування глаукоми — ціна, вартість обстеження та «скільки коштує» варіант із комбінованою операцією, детально обговорюємо все на консультації.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Проникна трабекулектомія: перевірений стандарт контролю тиску",
                                image: "/images/facilities3.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Трабекулектомія — класична проникна операція при глаукомі, під час якої створюють новий дренажний шлях і видаляють фрагмент трабекулярної мережі для кращого відтоку внутрішньоочної рідини. Метод показаний, коли глаукома прогресує, а консервативні підходи не забезпечують стабільного результату. Переваги: виражений і тривалий контроль ВОТ, можливість повторного втручання за потреби. Недоліки: довший реабілітаційний період, необхідність чітко дотримуватися післяопераційних рекомендацій. У нашому центрі ретельно оцінюємо показання, протипоказання, ризики та очікування, щоб запропонувати лікування глаукоми (операція) з оптимальним прогнозом для вашого зору.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        data: [
                            {
                                title: "Мікроінвазивна хірургія глаукоми (MIGS) та імплантовані дренажі",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Сучасні мікроінвазивні технології (MIGS) та мікродренажні імпланти дозволяють лікувати глаукому з мінімальною травматичністю. Такі рішення доцільні на ранніх і середніх стадіях, а також у пацієнтів, які прагнуть швидкого відновлення та зменшення залежності від крапель. Лікар підбирає тип дренажу чи методику з урахуванням анатомії кута передньої камери, товщини рогівки, статусу зорового нерва, поля зору, супутніх захворювань. Мікрохірургічне лікування глаукоми часто поєднуємо з факоемульсифікацією катаракти — це підвищує комфорт і скорочує кількість візитів. Запитайте під час прийому, чи варто розглядати саме MIGS у вашому випадку.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Ціна операції при глаукомі в Києві: що входить у вартість і як обрати клініку",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Операція глаукоми — ціна в Києві та Україні залежить від типу втручання (НГСЕ, трабекулектомія, MIGS), складності клінічної ситуації, необхідності комбінованих процедур (наприклад, видалення катаракти), анестезії та обсягу післяопераційного спостереження. У вартість зазвичай входять: консультація, повне обстеження, операційний набір і сертифіковані витратні матеріали, контрольні огляди. Ми прозоро пояснюємо, скільки коштує лікування глаукоми, надаємо детальний кошторис і рекомендації щодо підготовки. Оберіть найкращий для вас варіант: запис на консультацію лікаря, огляд, індивідуальна тактика «глаукома та її лікування», реєстрація на операцію — усе в одному кабінеті координації пацієнта.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на лікування глаукоми в Києві",
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часті питання про хірургічне лікування глаукоми",
                        content: [
                            {
                                question:
                                    "Коли показане хірургічне лікування глаукоми і чи варто чекати?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Оперативне лікування глаукоми рекомендоване, коли краплі, лазер чи комбінації не контролюють тиск або хвороба прогресує. Зволікати не варто: своєчасна операція допомагає зберегти залишковий зір.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Скільки коштує операція на глаукому (ціна Київ, Україна)?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Вартість залежить від методу (НГСЕ, трабекулектомія, MIGS), складності, супутніх процедур. Точну ціну озвучуємо після обстеження та консультації. Ми надаємо прозорий кошторис «без прихованих платежів».",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чим відрізняються непроникна глибока склеректомія та трабекулектомія?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "НГСЕ — щадніша, із плавним зниженням ВОТ і швидшим відновленням; трабекулектомія — «золотий стандарт» із довготривалим контролем тиску, але з довшим періодом реабілітації.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи можна поєднати лікування глаукоми з видаленням катаракти?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Так, часто це доцільно. Комбінована операція зменшує кількість анестезій і візитів, може покращити якість зору та стабільність тиску.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Які побічні ефекти та протипоказання можливі?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Як і будь-яка хірургія, втручання має ризики: запалення, коливання ВОТ, рубцювання фільтраційної подушки. Протипоказання індивідуальні; лікар обговорить їх на прийомі після огляду та аналізів.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Скільки триває відновлення і коли можна повернутися до роботи?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Більшість пацієнтів після НГСЕ повертаються до легких справ за 1–2 дні; після трабекулектомії період відновлення довший. Обмеження фізичних навантажень і контрольні огляди обов’язкові.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи буде потрібне подальше лікування після операції?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Післяопераційні краплі та спостереження — стандарти догляду. Частина пацієнтів повністю відмовляється від гіпотензивних крапель, іншим достатньо меншої кількості препаратів.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Як обрати клініку та лікаря для операції при глаукомі?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Орієнтуйтеся на досвід хірурга, спектр методик (НГСЕ, трабекулектомія, MIGS), сучасне обладнання, відгуки пацієнтів, прозорість ціни. Запишіться на консультацію — лікар запропонує індивідуальну тактику.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        en: {
            textMain:
                "We treat all types of glaucoma using the most modern and effective surgical techniques.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Glaucoma Treatment in Kyiv (Glaucoma Surgery). Surgical Glaucoma Treatment | EYES",
                        descriptionSEO:
                            "Surgical methods for glaucoma treatment (glaucoma surgery) - 🇺🇦🇬🇧 British Ophthalmology Center. ✅ Trust glaucoma surgery to the professionals! ➡️ Modern diagnostics and effective treatment 👍 Proven experience and impeccable reputation ☎️ 0 800 507 077",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "surgical treatment of glaucoma",
                        text: "Modern minimally invasive and classical methods for stabilizing eye pressure and preserving vision.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Surgical treatment of glaucoma: purpose, indications, and outcomes",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Surgical treatment of glaucoma aims to create an alternative pathway for aqueous humor drainage, achieve stable intraocular pressure (IOP) reduction, and preserve visual function. If medication, eye drops, or laser procedures are ineffective, glaucoma surgery becomes the best option. In our private clinic in Kyiv, we provide glaucoma diagnostics and treatment according to international protocols: examination, ophthalmologist consultation, personalized surgical method selection, and postoperative monitoring.",
                                            },
                                            {
                                                type: "text",
                                                text: "After surgery, some patients can completely stop using eye drops or significantly reduce their use. Surgical glaucoma treatment is effective for open-angle, closed-angle, primary, and secondary glaucoma, as well as in complex progressive cases.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Non-penetrating deep sclerectomy (NPDS): a gentle approach for open-angle glaucoma",
                                image: "/images/perevirka-zoru-hero.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "NPDS is a gentle glaucoma surgery in which the inner eye structures remain sealed, and fluid drainage occurs through a specially formed thin channel. This technique ensures smooth IOP reduction without sharp fluctuations, minimizes side effects, and speeds up recovery.",
                                            },
                                            {
                                                type: "text",
                                                text: "The procedure is performed on an outpatient basis, and most patients can resume normal activities within 1–2 days. Non-penetrating deep sclerectomy can be combined with cataract removal — a convenient option for patients with coexisting cataracts that reduces treatment time and improves vision. If you are interested in glaucoma surgery — the price, diagnostic cost, or combined options — all details are discussed during consultation.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Penetrating trabeculectomy: a proven standard for pressure control",
                                image: "/images/facilities3.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Trabeculectomy is a classical penetrating glaucoma surgery that creates a new drainage pathway by removing part of the trabecular meshwork to improve aqueous outflow. It is indicated when glaucoma progresses and conservative treatment no longer provides stable results. Advantages: pronounced and long-lasting IOP control, with the option of repeated surgery if needed. Drawbacks: longer recovery and strict postoperative care. At our center, we carefully evaluate indications, contraindications, and expectations to offer the optimal glaucoma surgery plan for your vision.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        data: [
                            {
                                title: "Microinvasive glaucoma surgery (MIGS) and implanted drains",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Modern microinvasive technologies (MIGS) and microdrainage implants allow glaucoma treatment with minimal trauma. These techniques are suitable for early and moderate stages, and for patients seeking quick recovery and reduced dependence on drops. The doctor selects the drainage type or technique based on anterior chamber angle anatomy, corneal thickness, optic nerve status, and visual field. Microglaucoma surgery is often combined with cataract phacoemulsification — improving comfort and reducing clinic visits. Ask your doctor whether MIGS is right for your case.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Glaucoma surgery cost in Kyiv: what’s included and how to choose a clinic",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "The cost of glaucoma surgery in Kyiv and Ukraine depends on the type of procedure (NPDS, trabeculectomy, MIGS), case complexity, need for combined operations (e.g. cataract removal), anesthesia, and postoperative care. The price usually includes consultation, complete diagnostics, surgical kit, certified materials, and follow-up visits. We provide transparent pricing, detailed estimates, and preparation guidance. Choose your best option: ophthalmologist consultation, eye examination, personalized 'glaucoma treatment' plan, and surgery registration — all in one patient coordination office.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for glaucoma treatment in Kyiv",
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about glaucoma surgery",
                        content: [
                            {
                                question:
                                    "When is glaucoma surgery indicated, and should I wait?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Surgical treatment is recommended when eye drops, laser, or combination therapy fail to control intraocular pressure or the disease continues to progress. Delaying treatment is not advisable — timely surgery helps preserve remaining vision.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How much does glaucoma surgery cost (price in Kyiv, Ukraine)?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The cost depends on the technique (NPDS, trabeculectomy, MIGS), complexity, and additional procedures. The exact price is provided after examination and consultation. We offer a transparent cost estimate with no hidden fees.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What is the difference between non-penetrating deep sclerectomy and trabeculectomy?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "NPDS is less invasive, provides gradual IOP reduction, and faster recovery; trabeculectomy is the 'gold standard' with long-term pressure control but a longer rehabilitation period.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Can glaucoma surgery be combined with cataract removal?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes, it is often advisable. A combined procedure reduces the number of anesthesias and visits, and may improve vision quality and pressure stability.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What side effects and contraindications are possible?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "As with any surgery, there are risks: inflammation, fluctuations in IOP, scarring of the filtration bleb. Contraindications are individual — the doctor will discuss them after examination and tests.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How long is recovery, and when can I return to work?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Most patients after NPDS return to light activities within 1–2 days; recovery after trabeculectomy takes longer. Physical restrictions and follow-up visits are essential.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Will further treatment be required after surgery?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Postoperative eye drops and monitoring are standard care. Some patients completely stop using pressure-lowering drops, while others may need fewer medications.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How to choose a clinic and surgeon for glaucoma surgery?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Focus on the surgeon’s experience, range of techniques (NPDS, trabeculectomy, MIGS), modern equipment, patient reviews, and price transparency. Schedule a consultation — the doctor will recommend an individual approach.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        ru: {
            textMain:
                "Мы лечим все виды глаукомы с применением самых современных и эффективных хирургических методик.",
            sections: [
                {
                    type: "meta",
                    data: {
                        titleSEO:
                            "Лечение глаукомы в Киеве (операция по удалению глаукомы). Хирургическое лечение глаукомы | EYES",
                        descriptionSEO:
                            "Хирургические методы лечения глаукомы (операция на глаукому) - 🇺🇦🇬🇧 Британский офтальмологический центр. ✅ Доверьте операцию при глаукоме профессионалам! ➡️ Современная диагностика и эффективное лечение 👍 Проверенный опыт и безупречная репутация ☎️ 0 800 507 077",
                    },
                },
                {
                    type: "hero",
                    data: {
                        title: "хирургическое лечение глаукомы",
                        text: "Современные малоинвазивные и классические методы для стабилизации давления и сохранения зрения.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Хирургическое лечение глаукомы: цель, показания и результаты",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Хирургическое лечение глаукомы направлено на создание альтернативного пути оттока внутриглазной жидкости, стабильное снижение внутриглазного давления (ВГД) и сохранение зрительных функций. Если медикаменты, капли или лазерные процедуры не дают результата, операция глаукомы становится лучшим решением. В нашей частной клинике в Киеве проводится диагностика и лечение глаукомы по международным протоколам: обследование, консультация офтальмолога, индивидуальный подбор метода, послеоперационный контроль.",
                                            },
                                            {
                                                type: "text",
                                                text: "После операции часть пациентов может полностью отказаться от капель или значительно сократить их использование. Хирургические методы лечения глаукомы эффективны при открытоугольной, закрытоугольной, первичной и вторичной форме, а также в сложных случаях, когда глаукома прогрессирует.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Непроникающая глубокая склерэктомия (НГСЭ): щадящий подход при открытоугольной глаукоме",
                                image: "/images/perevirka-zoru-hero.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "НГСЭ — это щадящая операция при глаукоме, при которой внутренние структуры глаза остаются герметичными, а отток жидкости осуществляется через специально сформированный тонкий канал. Метод обеспечивает плавное снижение ВГД без резких перепадов, минимизирует побочные эффекты и ускоряет восстановление.",
                                            },
                                            {
                                                type: "text",
                                                text: "Операция проводится амбулаторно; как правило, возвращение к обычному ритму возможно в течение 1–2 суток. Непроникающая глубокая склерэктомия может сочетаться с удалением катаракты — это удобно пациентам с сопутствующей катарактой, сокращает сроки лечения и улучшает зрение. Если вас интересует хирургическое лечение глаукомы — цена, стоимость обследования и варианты комбинированных операций — все детали обсуждаются на консультации.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Проникающая трабекулэктомия: проверенный стандарт контроля давления",
                                image: "/images/facilities3.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Трабекулэктомия — классическая проникающая операция при глаукоме, во время которой создаётся новый путь оттока и удаляется часть трабекулярной сети для улучшения циркуляции жидкости. Метод показан при прогрессировании глаукомы, когда консервативное лечение не обеспечивает стабильного результата. Преимущества: выраженный и длительный контроль ВГД, возможность повторного вмешательства. Недостатки: более длительный период восстановления, необходимость строгого соблюдения рекомендаций. В нашем центре тщательно оцениваем показания, противопоказания и риски, чтобы предложить оптимальный прогноз лечения глаукомы (операция) для вашего зрения.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        data: [
                            {
                                title: "Микроинвазивная хирургия глаукомы (MIGS) и имплантируемые дренажи",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Современные микроинвазивные технологии (MIGS) и микродренажные импланты позволяют лечить глаукому с минимальной травматичностью. Эти решения подходят на ранних и средних стадиях, а также для пациентов, стремящихся к быстрому восстановлению и снижению зависимости от капель. Врач подбирает тип дренажа или методику с учетом анатомии угла передней камеры, толщины роговицы, состояния зрительного нерва, поля зрения и сопутствующих заболеваний. Микрохирургическое лечение глаукомы часто сочетается с факоэмульсификацией катаракты — это повышает комфорт и сокращает количество визитов. Спросите на приеме, стоит ли рассматривать именно MIGS в вашем случае.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Стоимость операции при глаукоме в Киеве: что входит и как выбрать клинику",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Стоимость операции глаукомы в Киеве и Украине зависит от типа вмешательства (НГСЭ, трабекулэктомия, MIGS), сложности случая, необходимости комбинированных процедур (например, удаление катаракты), анестезии и объема послеоперационного наблюдения. В цену обычно входят: консультация, полное обследование, операционный набор, сертифицированные расходные материалы и контрольные осмотры. Мы подробно объясняем, сколько стоит лечение глаукомы, предоставляем детальную смету и рекомендации по подготовке. Выберите лучший вариант: консультация офтальмолога, осмотр, индивидуальный план «глаукома и её лечение», запись на операцию — всё в одном кабинете координации пациентов.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на лечение глаукомы в Киеве",
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Частые вопросы о хирургическом лечении глаукомы",
                        content: [
                            {
                                question:
                                    "Когда показано хирургическое лечение глаукомы и стоит ли ждать?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Операция рекомендована, если капли, лазер или их комбинации не контролируют внутриглазное давление или болезнь прогрессирует. Медлить не стоит — своевременное вмешательство помогает сохранить оставшееся зрение.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько стоит операция при глаукоме (цена Киев, Украина)?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Стоимость зависит от метода (НГСЭ, трабекулэктомия, MIGS), сложности и сопутствующих процедур. Точную цену сообщаем после обследования и консультации. Мы предоставляем прозрачный расчёт без скрытых платежей.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чем отличается непроникающая глубокая склерэктомия от трабекулэктомии?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "НГСЭ — более щадящая операция с постепенным снижением ВГД и быстрым восстановлением; трабекулэктомия — «золотой стандарт» с долговременным контролем давления, но требует более длительной реабилитации.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Можно ли совместить лечение глаукомы с удалением катаракты?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да, часто это целесообразно. Комбинированная операция снижает количество анестезий и визитов, может улучшить качество зрения и стабильность давления.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Какие побочные эффекты и противопоказания возможны?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Как и любое хирургическое вмешательство, операция имеет риски: воспаление, колебания ВГД, рубцевание фильтрационной подушки. Противопоказания индивидуальны — врач обсудит их после осмотра и анализов.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько длится восстановление и когда можно вернуться к работе?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Большинство пациентов после НГСЭ возвращаются к лёгким делам через 1–2 дня; после трабекулэктомии восстановление дольше. Ограничение физических нагрузок и контрольные осмотры обязательны.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Понадобится ли дальнейшее лечение после операции?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Послеоперационные капли и наблюдение — стандарт ухода. Некоторые пациенты полностью отказываются от гипотензивных капель, другим требуется меньшее количество препаратов.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Как выбрать клинику и врача для операции при глаукоме?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Ориентируйтесь на опыт хирурга, набор методик (НГСЭ, трабекулэктомия, MIGS), современное оборудование, отзывы пациентов и прозрачность цен. Запишитесь на консультацию — врач предложит индивидуальную тактику лечения.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
    },
];

export const raynerAdvantageDataMob: {
    lt: AdvantageServiceSectionProps;
    en: AdvantageServiceSectionProps;
    ru: AdvantageServiceSectionProps;
} = {
    lt: {
        title: "Переваги встановлення Rayner GALAXY в Британському Офтальмологічному Центрі",
        text: "Ми пропонуємо повний супровід пацієнта на всіх етапах — від діагностики до післяопераційного спостереження",
        list: [
            {
                title: "ексклюзивними постачальниками лінз Rayner GALAXY",
                text: "Ця технологія доступна в Україні лише у нашій клініці",
            },
            {
                title: "Новітнє обладнання",
                text: "Обладнання та операційні зали, що відповідають міжнародним стандартам",
            },
            {
                title: "Індивідуальний підхід",
                text: "Точна діагностика, підбір ІОЛ, контроль результату",
            },
            {
                title: "Досвідчені хірурги",
                text: "Сертифіковані для роботи з сучасними інтраокулярними лінзами",
            },
            { imageOnly: "/images/rayner-box.png" },
            {
                title: "100% безпеки",
                text: "Максимальна безпека та комфорт під час кожного етапу лікування",
            },
            {
                title: "Rayner GALAXY вже доступна до встановлення у нашій клініці",
                text: "",
                bgTransparent: true,
            },
        ],
    },
    en: {
        title: "Advantages of Rayner GALAXY implantation at the British Ophthalmology Centre",
        text: "We provide full patient support at every stage — from diagnosis to postoperative care",
        list: [
            {
                title: "Exclusive suppliers of Rayner GALAXY lenses",
                text: "This technology is available in Ukraine only at our clinic",
            },
            {
                title: "State-of-the-art equipment",
                text: "Facilities and operating rooms that meet international standards",
            },
            {
                title: "Individual approach",
                text: "Accurate diagnostics, IOL selection, and results monitoring",
            },
            {
                title: "Experienced surgeons",
                text: "Certified to work with modern intraocular lenses",
            },
            { imageOnly: "/images/rayner-box.png" },
            {
                title: "100% safety",
                text: "Maximum safety and comfort at every stage of treatment",
            },
            {
                title: "Rayner GALAXY is now available for implantation in our clinic",
                text: "",
                bgTransparent: true,
            },
        ],
    },
    ru: {
        title: "Преимущества установки Rayner GALAXY в Британском Офтальмологическом Центре",
        text: "Мы обеспечиваем полное сопровождение пациента на всех этапах — от диагностики до послеоперационного наблюдения",
        list: [
            {
                title: "Эксклюзивные поставщики линз Rayner GALAXY",
                text: "Эта технология доступна в Украине только в нашей клинике",
            },
            {
                title: "Новейшее оборудование",
                text: "Оборудование и операционные залы, соответствующие международным стандартам",
            },
            {
                title: "Индивидуальный подход",
                text: "Точная диагностика, подбор ИОЛ и контроль результата",
            },
            {
                title: "Опытные хирурги",
                text: "Сертифицированы для работы с современными интраокулярными линзами",
            },
            { imageOnly: "/images/rayner-box.png" },
            {
                title: "100% безопасность",
                text: "Максимальная безопасность и комфорт на каждом этапе лечения",
            },
            {
                title: "Rayner GALAXY уже доступна для установки в нашей клинике",
                text: "",
                bgTransparent: true,
            },
        ],
    },
};

export const raynerAdvantageDataTab: {
    lt: AdvantageServiceSectionProps;
    en: AdvantageServiceSectionProps;
    ru: AdvantageServiceSectionProps;
} = {
    lt: {
        paddingBottom: false,
        title: "Переваги встановлення Rayner GALAXY в Британському Офтальмологічному Центрі",
        text: "Ми пропонуємо повний супровід пацієнта на всіх етапах — від діагностики до післяопераційного спостереження",
        list: [
            {
                title: "ексклюзивними постачальниками лінз Rayner GALAXY",
                text: "Ця технологія доступна в Україні лише у нашій клініці",
            },
            {
                title: "Новітнє обладнання",
                text: "Обладнання та операційні зали, що відповідають міжнародним стандартам",
            },
            { videoOnly: "/videos/rayner-spiral.mp4" },
            {
                title: "Індивідуальний підхід",
                text: "Точна діагностика, підбір ІОЛ, контроль результату",
            },
            {
                title: "Досвідчені хірурги",
                text: "Сертифіковані для роботи з сучасними інтраокулярними лінзами",
            },
            { imageOnly: "/images/rayner-box.png" },
            {
                title: "100% безпеки",
                text: "Максимальна безпека та комфорт під час кожного етапу лікування",
            },
            {
                title: "Rayner GALAXY вже доступна до встановлення у нашій клініці",
                text: "",
                bgTransparent: true,
            },
        ],
    },
    en: {
        paddingBottom: false,
        title: "Advantages of Rayner GALAXY implantation at the British Ophthalmology Centre",
        text: "We provide full patient support at every stage — from diagnosis to postoperative care",
        list: [
            {
                title: "Exclusive suppliers of Rayner GALAXY lenses",
                text: "This technology is available in Ukraine only at our clinic",
            },
            {
                title: "State-of-the-art equipment",
                text: "Facilities and operating rooms that meet international standards",
            },
            { videoOnly: "/videos/rayner-spiral.mp4" },
            {
                title: "Individual approach",
                text: "Accurate diagnostics, IOL selection, and results monitoring",
            },
            {
                title: "Experienced surgeons",
                text: "Certified to work with modern intraocular lenses",
            },
            { imageOnly: "/images/rayner-box.png" },
            {
                title: "100% safety",
                text: "Maximum safety and comfort at every stage of treatment",
            },
            {
                title: "Rayner GALAXY is now available for implantation in our clinic",
                text: "",
                bgTransparent: true,
            },
        ],
    },
    ru: {
        paddingBottom: false,
        title: "Преимущества установки Rayner GALAXY в Британском Офтальмологическом Центре",
        text: "Мы обеспечиваем полное сопровождение пациента на всех этапах — от диагностики до послеоперационного наблюдения",
        list: [
            {
                title: "Эксклюзивные поставщики линз Rayner GALAXY",
                text: "Эта технология доступна в Украине только в нашей клинике",
            },
            {
                title: "Новейшее оборудование",
                text: "Оборудование и операционные залы, соответствующие международным стандартам",
            },
            { videoOnly: "/videos/rayner-spiral.mp4" },
            {
                title: "Индивидуальный подход",
                text: "Точная диагностика, подбор ИОЛ и контроль результата",
            },
            {
                title: "Опытные хирурги",
                text: "Сертифицированы для работы с современными интраокулярными линзами",
            },
            { imageOnly: "/images/rayner-box.png" },
            {
                title: "100% безопасность",
                text: "Максимальная безопасность и комфорт на каждом этапе лечения",
            },
            {
                title: "Rayner GALAXY уже доступна для установки в нашей клинике",
                text: "",
                bgTransparent: true,
            },
        ],
    },
};

export const raynerCardsList = [
    {
        lt: {
            title: "Значно менше відблисків і ореолів у темну пору доби",
            text: "Мінімізована дисфотопія, особливо в умовах низької освітленості — для найвимогливіших пацієнтів.",
        },
        en: {
            title: "Significantly fewer glares and halos at night",
            text: "Minimized dysphotopsia, especially in low-light conditions — for the most demanding patients.",
        },
        ru: {
            title: "Значительно меньше бликов и ореолов в тёмное время суток",
            text: "Минимизирована дисфотопия, особенно в условиях низкой освещённости — для самых требовательных пациентов.",
        },
        imageBefore: "/images/rayner-dark.jpg",
        imageAfter: "/images/rayner-dark-after.webp",
    },
    {
        lt: {
            title: "Недифракційна оптика для 0% втрати світла при передачі",
            text: "Преміум-лінза, яка максимізує передачу світла до сітківки.",
        },
        en: {
            title: "Non-diffractive optics for 0% light loss during transmission",
            text: "A premium lens that maximizes light transmission to the retina.",
        },
        ru: {
            title: "Недифракционная оптика для 0% потери света при передаче",
            text: "Премиум-линза, которая максимизирует передачу света на сетчатку.",
        },
        imageBefore: "/images/rayner-day-before.jpg",
        imageAfter: "/images/rayner-day.jpg",
    },
];

export const raynerCTA: {
    lt: GreenCardType;
    ru: GreenCardType;
    en: GreenCardType;
} = {
    lt: {
        bigText: true,
        title: "Поверніть собі якісний зір — легко та без окулярів",
        text: "Ми дотримуємося високих стандартів безпеки та стерильності, приділяючи увагу кожному етапу лікування — від обстеження до післяопераційних оглядів, щоб забезпечити вам спокій та комфорт.",
    },
    en: { title: "", text: "" },
    ru: { title: "", text: "" },
};
