import { Metadata } from "next";
import { notFound } from "next/navigation";

import { subpageCataractData } from "@/components/assets/laserMethodsData";
import { ModalPage } from "@/components/shared/ModalPage";
import { LazerSubpage } from "@/components/someServiceComponents/LazerSubpage/LazerSubpage";
import { LocaleType } from "@/types/LocaleType";

type Props = {
    params: Promise<{ locale: string; subpage: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, subpage } = await params;
    const currentMethod = subpageCataractData.find(
        sub => sub.content[locale as LocaleType].slug === subpage
    );

    const langPrefix =
        locale === "en"
            ? "/en/services/cataract-surgery"
            : locale === "ru"
              ? "/ru/uslugi/udaleniye-katarakty"
              : "/paslaugos/kataraktos-operacija";
    const title =
        currentMethod && currentMethod.content[locale as LocaleType].titleSEO;
    const description =
        currentMethod &&
        currentMethod.content[locale as LocaleType].descriptionSEO;

    const end = currentMethod?.content[locale as LocaleType].slug;

    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        alternates: {
            canonical: `${langPrefix}/${end}`,
            languages: {
                "en-US": `/en/services/cataract-surgery/${currentMethod?.content.en.slug}`,
                "lt-LT": `/paslaugos/kataraktos-operacija/${currentMethod?.content.lt.slug}`,
                "ru-RU": `/ru/uslugi/udaleniye-katarakty/${currentMethod?.content.ru.slug}`,
            },
        },
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
        },
    };
}

interface SubpageProps {
    params: Promise<{ locale: string; subpage: string }>;
}

export default async function CataractSubpage({ params }: SubpageProps) {
    const { locale, subpage } = await params;
    const currentMethod = subpageCataractData.find(sub => sub.key === subpage);

    if (!currentMethod) {
        notFound();
    }

    return (
        <ModalPage subpage>
            <LazerSubpage
                locale={locale as LocaleType}
                currentMethod={currentMethod}
            />
        </ModalPage>
    );
}
