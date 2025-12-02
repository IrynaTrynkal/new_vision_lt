import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { LocaleType } from "@/types/LocaleType";

interface LocalizedPaths {
    lt: string;
    en: string;
    ru: string;
}

export async function generatePageMetadata(
    locale: LocaleType,
    namespace: string,
    paths: LocalizedPaths
): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace });

    const canonical = paths[locale] ?? paths.lt;

    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
        alternates: {
            canonical,
            languages: {
                "lt-LT": paths.lt,
                "en-US": paths.en,
                "ru-RU": paths.ru,
            },
        },
        title: t("titleSEO"),
        description: t("descriptionSEO"),
        openGraph: {
            title: t("titleSEO"),
            description: t("descriptionSEO"),
            type: "website",
        },
    };
}
