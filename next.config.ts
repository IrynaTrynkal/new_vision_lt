import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    experimental: {
        serverActions: { bodySizeLimit: "2mb" },
    },
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "2280" }],
                destination: "/kontaktai/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "48" }],
                destination: "/paslaugos/kataraktos-operacija/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "212" }],
                destination: "/paslaugos/akiu-patikrinimas/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "569" }],
                destination: "/kainos/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "47" }],
                destination: "/paslaugos/lazerine-akiu-korekcija/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "211" }],
                destination: "/paslaugos/vaiku-akiu-patikra/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "1828" }],
                destination: "/paslaugos/skaidraus-lesio-operacija/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "1606" }],
                destination: "/akiu-ligos/akiu-ligu-simptomai/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "1590" }],
                destination: "/akiu-ligos/astigmatizmas/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "1597" }],
                destination: "/akiu-ligos/toliaregyste/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "1594" }],
                destination: "/akiu-ligos/trumparegyste-miopija/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "1789" }],
                destination: "/akiu-ligos/glaukoma/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "1592" }],
                destination: "/akiu-ligos/katarakta/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "1602" }],
                destination: "/akiu-ligos/zvairumas/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "1604" }],
                destination: "/akiu-ligos/presbiopija/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "12291" }],
                destination: "/rayner-galaxy-lt/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "10868" }],
                destination: "/dovanu-kupono/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "3965" }],
                destination: "/apie-klinika/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "7364" }],
                destination: "/akcijos/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "4344" }],
                destination: "/paslaugos/kataraktos-operacija/iq-5-minutes/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "3" }],
                destination: "/privatumo-politika/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "12611" }],
                destination: "/cookie-policy-eu/",
                permanent: true,
            },
            {
                source: "/category/:slug",
                destination: "/blog/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "4339" }],
                destination: "/paslaugos/kataraktos-operacija/iq-life-3d/",
                permanent: true,
            },
            {
                source: "/",
                has: [{ type: "query", key: "p", value: "8851" }],
                destination: "/palikti-atsiliepima/",
                permanent: true,
            },
            {
                source: "/en",
                has: [{ type: "query", key: "p", value: "7175" }],
                destination: "/en/contacts/",
                permanent: true,
            },
            {
                source: "/en",
                has: [{ type: "query", key: "p", value: "7264" }],
                destination: "/en/services/cataract-surgery/",
                permanent: true,
            },
            {
                source: "/en",
                has: [{ type: "query", key: "p", value: "7085" }],
                destination: "/en/services/pediatric-eye-examination/",
                permanent: true,
            },
            {
                source: "/en",
                has: [{ type: "query", key: "p", value: "7070" }],
                destination: "/en/services/eye-examination/",
                permanent: true,
            },
            {
                source: "/en",
                has: [{ type: "query", key: "p", value: "7300" }],
                destination: "/en/price-list/",
                permanent: true,
            },
            {
                source: "/en",
                has: [{ type: "query", key: "p", value: "6924" }],
                destination: "/en/services/laser-eye-surgery/",
                permanent: true,
            },
            {
                source: "/en",
                has: [{ type: "query", key: "p", value: "7274" }],
                destination: "/en/services/refractive-lens-exchange/",
                permanent: true,
            },
            {
                source: "/en",
                has: [{ type: "query", key: "p", value: "12634" }],
                destination:
                    "/en/rayner-galaxy-a-new-dimension-of-vision-is-now-available-at-our-clinic/",
                permanent: true,
            },
            {
                source: "/en",
                has: [{ type: "query", key: "p", value: "7276" }],
                destination: "/en/our-clinic/",
                permanent: true,
            },
            {
                source: "/en",
                has: [{ type: "query", key: "p", value: "10878" }],
                destination: "/en/dovanu-kupono/",
                permanent: true,
            },
            {
                source: "/en",
                has: [{ type: "query", key: "p", value: "12605" }],
                destination: "/en/privacy-policy/",
                permanent: true,
            },
            {
                source: "/en",
                has: [{ type: "query", key: "p", value: "8129" }],
                destination: "/en/offers/reimbursement-for-laser-eye-surgery/",
                permanent: true,
            },
            {
                source: "/en",
                has: [{ type: "query", key: "p", value: "7268" }],
                destination: "/en/services/cataract-surgery/iq-5-minutes/",
                permanent: true,
            },
            {
                source: "/en",
                has: [{ type: "query", key: "p", value: "7272" }],
                destination:
                    "/en/services/cataract-surgery/iq-life-3d-live-vision/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "7160" }],
                destination: "/ru/kontakty/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "7106" }],
                destination: "/ru/uslugi/udaleniye-katarakty/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "7083" }],
                destination: "/ru/uslugi/detskoye-otdeleniye/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "6761" }],
                destination: "/ru/uslugi/diagnostika-zreniya/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "6947" }],
                destination: "/ru/uslugi/lazernaya-korrektsiya-zreniya/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "7148" }],
                destination: "/ru/uslugi/khirurgiia-prozrachnogo-khrustalika/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "7154" }],
                destination: "/ru/ceny-na-uslugi/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "8204" }],
                destination:
                    "/ru/glaznye-zabolevaniya/simptomy-zabolevaniya-glaz/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "8348" }],
                destination: "/ru/glaznye-zabolevaniya/astigmatizm/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "8218" }],
                destination: "/ru/glaznye-zabolevaniya/blizorukost-miopiya/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "8346" }],
                destination: "/ru/glaznye-zabolevaniya/katarakta/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "8212" }],
                destination: "/ru/glaznye-zabolevaniya/dalnozorkost/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "8210" }],
                destination: "/ru/glaznye-zabolevaniya/kosoglazie/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "8206" }],
                destination: "/ru/glaznye-zabolevaniya/glaukoma/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "8208" }],
                destination: "/ru/glaznye-zabolevaniya/pryesbiopiya/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "12327" }],
                destination:
                    "/ru/rayner-galaxy-novoe-izmerenie-zreniya-uzhe-v-nashej-klinike/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "6989" }],
                destination: "/ru/o-klinike/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "10879" }],
                destination: "/ru/dovanu-kupono/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "7332" }],
                destination:
                    "/ru/akcii/lazernaya-korrektsiya-zreniya-besplatno/",
                permanent: true,
            },
            {
                source: "/ru",
                has: [{ type: "query", key: "p", value: "7110" }],
                destination: "/ru/uslugi/udaleniye-katarakty/iq-5-minutes/",
                permanent: true,
            },
            {
                source: "/ru/category/:slug",
                destination: "/ru/blog",
                permanent: true,
            },
            {
                source: "/akcijos/pinigu-grazinimas-uz-lazerine-regos-korekcija",
                destination: "/akcijos",
                permanent: true,
            },
        ];
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
