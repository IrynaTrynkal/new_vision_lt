import { urlFor } from "@/sanity/lib/image";
import { LocaleType } from "@/types/LocaleType";
import { getFirstImage } from "@/utils/getFirstImage";
import { toPlainText } from "@/utils/toPlainText";

import { DoctorQueryResult } from "../../../sanity.types";
import { phoneList, socialLinks } from "./contacts";
import { LocalizedRouteKey, localizedRoutes } from "./localizedRoutes";
import { servicesList } from "./menu";
import {
    EyeDiseaseType,
    PationtsInstructionType,
} from "./patientsInstructionData";
import { ServicesProps } from "./servicesData";

export const mainWebPageSchema = ({
    locale,
    title,
    name,
    description,
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: string;
    title: string;
    name: string;
    description: string;
    datePublished?: string;
    dateModified?: string;
}) => {
    const finalDateModified = dateModified ?? new Date().toISOString();
    const languagePath = locale === "lt" ? "" : `${locale}/`;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "lt-LT";

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `https://eyes.lt/${languagePath}#webpage`,
        url: `https://eyes.lt/${languagePath}`,
        name: title,
        description,
        inLanguage,
        datePublished,
        dateModified: finalDateModified,
        thumbnailUrl: "https://eyes.lt/images/logo.jpg",
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: "https://eyes.lt/images/main-hero.jpg",
            contentUrl: "https://eyes.lt/images/main-hero.jpg",
        },
        publisher: {
            "@type": "MedicalClinic",
            "@id": `https://eyes.lt/${languagePath}#organization`,
            name,
            url: `https://eyes.lt/${languagePath}`,
            logo: {
                "@type": "ImageObject",
                url: "https://eyes.lt/images/logo.jpg",
                contentUrl: "https://eyes.lt/images/logo.jpg",
            },
        },
    };
};

export const mainWebSiteSchema = ({
    locale,
    title,
    description,
}: {
    locale: string;
    title: string;
    description: string;
}) => {
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "lt-LT";
    const languagePath = locale === "en" ? "en/" : locale === "ru" ? "ru/" : "";
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `https://eyes.lt/${languagePath}#website`,
        url: `https://eyes.lt/${languagePath}`,
        name: title,
        description,
        inLanguage,
        potentialAction: {
            "@type": "SearchAction",
            target: `https://eyes.lt/${languagePath}?s={search_term_string}`,
            "query-input": "required name=search_term_string",
        },
    };
};

export const breadcrumbsMainSchema = ({
    locale,
    name,
}: {
    locale: string;
    name: string;
}) => {
    const languagePath = locale === "lt" ? "" : `${locale}/`;
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: {
            "@type": "ListItem",
            position: 1,
            name,
            item: `https://eyes.lt/${languagePath}`,
        },
    };
};

export const breadcrumbsInnerSchema = ({
    locale,
    items,
    t,
}: {
    locale: string;
    items: { name: string; href: string }[];
    t: (key: string) => string;
}) => {
    const languagePath = locale === "lt" ? "" : locale;

    const resolvedItems = items.map((item, index) => {
        if (index === 0) {
            return { ...item };
        }

        const prev = items[index - 1];

        if (item.href.startsWith(`${prev.href}/`)) {
            return { ...item };
        }

        return {
            ...item,
            href: `${prev.href.replace(/\/$/, "")}/${item.href.replace(/^\//, "")}`,
        };
    });

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: resolvedItems.map((item, index) => {
            const localizedHref =
                localizedRoutes[item.href]?.[locale as LocaleType] ?? item.href;

            return {
                "@type": "ListItem",
                position: index + 1,
                name: t(item.name),
                item: `https://eyes.lt/${languagePath}${localizedHref}`,
            };
        }),
    };
};
export const breadcrumbsSlugSchema = ({
    locale,
    items,
}: {
    locale: string;
    items: { name: string; href: string }[];
}) => {
    const languagePath = locale === "lt" ? "" : locale;

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => {
            let finalHref = item.href;

            if (index === 0) {
                finalHref =
                    localizedRoutes[item.href]?.[locale as LocaleType] ??
                    item.href;
            } else {
                const parentLocalized =
                    localizedRoutes[items[0].href]?.[locale as LocaleType] ??
                    items[0].href;

                finalHref = `${parentLocalized}/${item.href.replace(/^\//, "")}`;
            }

            return {
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                item: `https://eyes.lt/${languagePath}${finalHref}`,
            };
        }),
    };
};

export const innerWebPageSchema = ({
    locale,
    title,
    description,
    path,
    image,
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: string;
    title: string;
    description: string;
    path: LocalizedRouteKey;
    image: string;
    datePublished?: string;
    dateModified?: string;
}) => {
    const finalDateModified = dateModified ?? new Date().toISOString();

    const languagePath = locale === "lt" ? "" : locale;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "lt-LT";
    const localizedPath = localizedRoutes[path]?.[locale as LocaleType] ?? path;

    const fullUrl = `https://eyes.lt/${languagePath}${localizedPath}`;

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: title,
        description,
        inLanguage,
        datePublished,
        dateModified: finalDateModified,
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: `https://eyes.lt/${image}`,
            contentUrl: `https://eyes.lt/${image}`,
        },
        thumbnailUrl: "https://eyes.lt/images/logo.jpg",
        isPartOf: {
            "@type": "WebSite",
            "@id": "https://eyes.lt/#website",
        },
    };
};

export const innerCollectionPageSchema = ({
    locale,
    title,
    description,
    path,
    image,
    items,
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: string;
    title: string;
    description: string;
    path: LocalizedRouteKey;
    image: string;
    items?: { name: string; url: string; type?: string }[];
    datePublished?: string;
    dateModified?: string;
}) => {
    const finalDateModified = dateModified ?? new Date().toISOString();

    const languagePath = locale === "lt" ? "" : locale;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "lt-LT";

    const localizedPath = localizedRoutes[path]?.[locale as LocaleType] ?? path;

    const fullUrl = `https://eyes.lt/${languagePath}${localizedPath}`;

    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${fullUrl}#collection`,
        url: fullUrl,
        name: title,
        description,
        inLanguage,
        datePublished,
        dateModified: finalDateModified,
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: `https://eyes.lt/${image}`,
            contentUrl: `https://eyes.lt/${image}`,
        },
        thumbnailUrl: "https://eyes.lt/images/logo.jpg",
        isPartOf: {
            "@type": "WebSite",
            "@id": "https://eyes.lt/#website",
        },
        ...(items
            ? {
                  mainEntity: {
                      "@type": "ItemList",
                      itemListElement: items.map(item => ({
                          "@type": item.type ?? "Thing",
                          name: item.name,
                          url: `https://eyes.lt/${languagePath}${item.url}`,
                      })),
                  },
              }
            : {}),
    };
};

export const newsPageSchema = ({
    locale,
    title,
    description,
    slug,
    image = "/images/megaphone1.jpg",
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: string;
    title: string;
    description: string;
    slug: string;
    image?: string;
    datePublished?: string;
    dateModified?: string;
}) => {
    const finalDateModified = dateModified ?? new Date().toISOString();
    const languagePath = locale === "lt" ? "" : locale;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "lt-LT";

    const fullUrl = `https://eyes.lt/${languagePath}/blog/${slug}`;

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: title,
        description,
        inLanguage,
        datePublished,
        dateModified: finalDateModified,
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: `https://eyes.lt${image}`,
            contentUrl: `https://eyes.lt${image}`,
        },
        isPartOf: {
            "@type": "WebSite",
            "@id": "https://eyes.lt/#website",
        },
        mainEntity: {
            "@type": "NewsArticle",
            headline: title,
            image: `https://eyes.lt${image}`,
            datePublished,
            dateModified: finalDateModified,
            publisher: {
                "@type": "MedicalClinic",
                name: "Akių klinika NAUJAS REGĖJIMAS",
                logo: {
                    "@type": "ImageObject",
                    url: "https://eyes.lt/images/logo.jpg",
                },
            },
        },
    };
};

export const instructionPageSchema = ({
    locale,
    data,
    nameOrganization,
    t,
    image = "/images/patients-menu.jpg",
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: LocaleType;
    data: PationtsInstructionType;
    nameOrganization: string;
    t: (key: string, params?: Record<string, string | number>) => string;
    image?: string;
    datePublished?: string;
    dateModified?: string;
}) => {
    const finalDateModified = dateModified ?? new Date().toISOString();
    const languagePath = locale === "lt" ? "" : locale;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "lt-LT";

    const localizedSlug = data.name.slug[locale];
    const fullUrl = `https://eyes.lt/${languagePath}${localizedSlug}`;

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: t("titleSEO", { title: data[locale].title }),
        description: t("descriptionSEO", { title: data[locale].title }),
        inLanguage,
        datePublished,
        dateModified: finalDateModified,
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: `https://eyes.lt${image}`,
            contentUrl: `https://eyes.lt${image}`,
        },
        thumbnailUrl: "https://eyes.lt/images/logo.jpg",
        isPartOf: {
            "@type": "WebSite",
            "@id": "https://eyes.lt/#website",
        },
        mainEntity: {
            "@type": "Article",
            headline: t("titleSEO", { title: data[locale].title }),
            description: t("descriptionSEO", { title: data[locale].title }),
            datePublished,
            dateModified: finalDateModified,
            mainEntityOfPage: fullUrl,
            image: {
                "@type": "ImageObject",
                url: `https://eyes.lt${image}`,
                contentUrl: `https://eyes.lt${image}`,
            },
            publisher: {
                "@type": "MedicalClinic",
                "@id": "https://eyes.lt/#organization",
                name: nameOrganization,
                url: "https://eyes.lt/",
                logo: {
                    "@type": "ImageObject",
                    url: "https://eyes.lt/images/logo.jpg",
                    contentUrl: "https://eyes.lt/images/logo.jpg",
                },
            },
        },
    };
};

export const eyeDiseasePageSchema = ({
    locale,
    data,
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: LocaleType;
    data: EyeDiseaseType;
    nameOrganization: string;
    datePublished?: string;
    dateModified?: string;
}) => {
    const finalDateModified = dateModified ?? new Date().toISOString();

    const languagePath = locale === "lt" ? "" : locale;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "lt-LT";
    const base = localizedRoutes["/akiu-ligos"][locale];
    const localizedSlug = data.name.slug[locale];
    const fullUrl = `https://eyes.lt/${languagePath}${base}/${localizedSlug}`;

    const mainImage =
        getFirstImage(data[locale].content) ?? "/images/patients-menu.jpg";

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: data[locale].titleSEO,
        description: data[locale].descriptionSEO,
        inLanguage,
        datePublished,
        dateModified: finalDateModified,
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: `https://eyes.lt${mainImage}`,
            contentUrl: `https://eyes.lt${mainImage}`,
        },
        thumbnailUrl: "https://eyes.lt/images/logo.jpg",

        isPartOf: {
            "@type": "WebSite",
            "@id": "https://eyes.lt/#website",
        },

        mainEntity: {
            "@type": "MedicalCondition",
            "@id": `${fullUrl}#condition`,
            name: data[locale].titleSEO,
            description: data[locale].descriptionSEO,
            url: fullUrl,
            associatedAnatomy: {
                "@type": "AnatomicalStructure",
                name: "Eye",
            },
            image: {
                "@type": "ImageObject",
                url: `https://eyes.lt${mainImage}`,
                contentUrl: `https://eyes.lt${mainImage}`,
            },
        },
    };
};

export const doctorPageSchema = ({
    locale,
    data,
    nameOrganization,
}: {
    locale: LocaleType;
    data: DoctorQueryResult;
    nameOrganization: string;
}) => {
    if (!data) return null;

    const languagePath = locale === "lt" ? "" : locale;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "lt-LT";
    const basePath = localizedRoutes["/gydytojai"][locale];

    const slug = data.slug!;
    const fullUrl = `https://eyes.lt/${languagePath}${basePath}/${slug}`;

    const imageUrl = data.photo
        ? urlFor(data.photo).url
        : "https://eyes.lt/images/doctors-hero1.jpg";

    const specialization = toPlainText(data.specialization || []) || undefined;

    const about =
        toPlainText(data.about || []) ||
        toPlainText(data.position || []) ||
        specialization ||
        "";

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: data.name,
        description: about.slice(0, 160), // SEO-summary
        inLanguage,

        primaryImageOfPage: {
            "@type": "ImageObject",
            url: imageUrl,
            contentUrl: imageUrl,
        },

        isPartOf: {
            "@type": "WebSite",
            "@id": "https://eyes.lt/#website",
        },

        mainEntity: {
            "@type": "Physician",
            "@id": `${fullUrl}#physician`,
            name: data.name,
            url: fullUrl,
            image: imageUrl,
            description: about,
            hospitalAffiliation: {
                "@type": "Hospital",
                "@id": "https://eyes.lt/#organization",
                name: nameOrganization,
                url: "https://eyes.lt/",
                logo: {
                    "@type": "ImageObject",
                    url: "https://eyes.lt/images/logo.jpg",
                },
            },
        },
    };
};

export const contactPageSchema = ({
    locale,
    title,
    description,
    nameOrganization,
    t,
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: LocaleType;
    title: string;
    description: string;
    nameOrganization: string;
    t: (key: string) => string;
    datePublished?: string;
    dateModified?: string;
}) => {
    const finalDateModified = dateModified ?? new Date().toISOString();
    const languagePath = locale === "lt" ? "" : locale;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "lt-LT";

    const base = localizedRoutes["/kontaktai"][locale];
    const fullUrl = `https://eyes.lt/${languagePath}${base}`;

    return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: title,
        description,
        inLanguage,
        datePublished,
        dateModified: finalDateModified,
        isPartOf: {
            "@type": "WebSite",
            "@id": "https://eyes.lt/#website",
        },
        publisher: {
            "@type": "MedicalClinic",
            "@id": "https://eyes.lt/#organization",
            name: nameOrganization,
            url: "https://eyes.lt/",
            logo: {
                "@type": "ImageObject",
                url: "https://eyes.lt/images/logo.jpg",
                contentUrl: "https://eyes.lt/images/logo.jpg",
            },
            contactPoint: [
                ...phoneList.map(phone => ({
                    "@type": "ContactPoint",
                    telephone: phone,
                    contactType: "customer service",
                    areaServed: "UA",
                    availableLanguage: ["Lithuanian", "English", "Russian"],
                })),
            ],
            sameAs: socialLinks.map(link => link.link),
            address: {
                "@type": "PostalAddress",
                streetAddress: t("adressMap"),
                addressCountry: "UA",
            },
        },
    };
};

export const aboutClinicPageSchema = ({
    locale,
    title,
    description,
    nameOrganization,
    t,
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: LocaleType;
    title: string;
    description: string;
    nameOrganization: string;
    t: (key: string) => string;
    datePublished?: string;
    dateModified?: string;
}) => {
    const finalDateModified = dateModified ?? new Date().toISOString();
    const languagePath = locale === "lt" ? "" : locale;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "lt-LT";

    const base = localizedRoutes["/apie-klinika"][locale];
    const fullUrl = `https://eyes.lt/${languagePath}${base}`;

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: title,
        description,
        inLanguage,
        datePublished,
        dateModified: finalDateModified,
        isPartOf: {
            "@type": "WebSite",
            "@id": "https://eyes.lt/#website",
        },
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: "https://eyes.lt/images/contacts.jpg",
            contentUrl: "https://eyes.lt/images/contacts.jpg",
        },
        publisher: {
            "@type": "MedicalClinic",
            "@id": "https://eyes.lt/#organization",
            name: nameOrganization,
            url: "https://eyes.lt/",
            logo: {
                "@type": "ImageObject",
                url: "https://eyes.lt/images/logo.jpg",
                contentUrl: "https://eyes.lt/images/logo.jpg",
            },
            contactPoint: [
                ...phoneList.map(phone => ({
                    "@type": "ContactPoint",
                    telephone: phone,
                    contactType: "customer service",
                    areaServed: "UA",
                    availableLanguage: ["Lithuanian", "English", "Russian"],
                })),
            ],
            sameAs: socialLinks.map(link => link.link),
            address: {
                "@type": "PostalAddress",
                streetAddress: t("adressMap"),
                addressCountry: "LT",
            },
        },
    };
};

export const servicePageSchema = ({
    locale,
    data,
    nameOrganization,
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: LocaleType;
    data: ServicesProps;
    nameOrganization: string;
    datePublished?: string;
    dateModified?: string;
}) => {
    const finalDateModified = dateModified ?? new Date().toISOString();
    const languagePath = locale === "lt" ? "" : locale;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "lt-LT";

    const base = localizedRoutes["/paslaugos"][locale];
    const localizedSlug = data.name.slug[locale];
    const fullUrl = `https://eyes.lt/${languagePath}${base}/${localizedSlug}`;

    const hero = data[locale].sections?.find(
        section => section.type === "hero"
    )?.data;
    const imageUrl = hero?.image ?? "/images/services-hero.jpg";

    const meta = data[locale].sections?.find(
        section => section.type === "meta"
    )?.data;

    const serviceType = servicesList.find(
        service => service.key === data.name.key
    )?.type;

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: meta?.titleSEO || "",
        description: meta?.descriptionSEO || "",
        inLanguage,
        datePublished,
        dateModified: finalDateModified,
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: `https://eyes.lt${imageUrl}`,
            contentUrl: `https://eyes.lt${imageUrl}`,
        },
        thumbnailUrl: "https://eyes.lt/images/logo.jpg",
        isPartOf: {
            "@type": "WebSite",
            "@id": "https://eyes.lt/#website",
        },
        publisher: {
            "@type": "MedicalClinic",
            "@id": "https://eyes.lt/#organization",
            name: nameOrganization,
            url: "https://eyes.lt/",
            logo: {
                "@type": "ImageObject",
                url: "https://eyes.lt/images/logo.jpg",
                contentUrl: "https://eyes.lt/images/logo.jpg",
            },
        },
        mainEntity: {
            "@type": serviceType,
            "@id": `${fullUrl}#service`,
            name: meta?.titleSEO || "",
            description: meta?.descriptionSEO || "",
            url: fullUrl,
            image: {
                "@type": "ImageObject",
                url: `https://eyes.lt${imageUrl}`,
                contentUrl: `https://eyes.lt${imageUrl}`,
            },
        },
    };
};

export const raynerPageSchema = ({
    locale,
    title,
    description,
    nameOrganization,
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: LocaleType;
    title: string;
    description: string;
    nameOrganization: string;
    datePublished?: string;
    dateModified?: string;
}) => {
    const finalDateModified = dateModified ?? new Date().toISOString();
    const languagePath = locale === "lt" ? "" : locale;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "lt-LT";

    const base = localizedRoutes["/rayner-galaxy-lt"][locale];
    const fullUrl = `https://eyes.lt/${languagePath}${base}`;

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: title,
        description,
        inLanguage,
        datePublished,
        dateModified: finalDateModified,
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: "https://eyes.lt/images/hero-galaxy.jpg",
            contentUrl: "https://eyes.lt/images/hero-galaxy.jpg",
        },
        thumbnailUrl: "https://eyes.lt/images/logo.jpg",
        isPartOf: {
            "@type": "WebSite",
            "@id": "https://eyes.lt/#website",
        },
        publisher: {
            "@type": "MedicalClinic",
            "@id": "https://eyes.lt/#organization",
            name: nameOrganization,
            url: "https://eyes.lt/",
            logo: {
                "@type": "ImageObject",
                url: "https://eyes.lt/images/logo.jpg",
                contentUrl: "https://eyes.lt/images/logo.jpg",
            },
        },
        mainEntity: {
            "@type": "Service",
            "@id": `${fullUrl}#service`,
            name: title,
            description,
            url: fullUrl,
            provider: {
                "@type": "MedicalClinic",
                "@id": "https://eyes.lt/#organization",
                name: nameOrganization,
                url: "https://eyes.lt/",
            },
            image: {
                "@type": "ImageObject",
                url: "https://eyes.lt/images/hero-galaxy.jpg",
                contentUrl: "https://eyes.lt/images/hero-galaxy.jpg",
            },
        },
    };
};
