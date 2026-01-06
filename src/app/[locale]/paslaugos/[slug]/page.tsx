import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Script from "next/script";
import { getTranslations } from "next-intl/server";

import { servicesList, ServicesListProps } from "@/components/assets/menu";
import {
    breadcrumbsInnerSchema,
    servicePageSchema,
} from "@/components/assets/schemas";
import { servicesData } from "@/components/assets/servicesData";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FeedbackSection } from "@/components/shared/feedbackSection/FeedbackSection";
import { FAQService } from "@/components/someServiceComponents/faqSection/FAQService";
import { HeroSomeService } from "@/components/someServiceComponents/HeroSomeService";
import { ServicePageContent } from "@/components/someServiceComponents/ServicePage";
import { sanityFetch } from "@/sanity/lib/client";
import { feedbacksQuery } from "@/sanity/lib/queries";
import { LocaleType } from "@/types/LocaleType";

type Props = {
    params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;

    const displayedService: ServicesListProps | undefined = servicesList.find(
        service => service.slug[locale as LocaleType] === slug
    );
    const serviceData =
        displayedService &&
        servicesData.find(service => service.name.key === displayedService.key);
    const langPrefix =
        locale === "en"
            ? "/en/services"
            : locale === "ru"
              ? "/ru/uslugi"
              : "/paslaugos";
    const title =
        serviceData &&
        serviceData[locale as LocaleType].sections?.find(
            item => item.type === "meta"
        )?.data.titleSEO;
    const description =
        serviceData &&
        serviceData[locale as LocaleType].sections?.find(
            item => item.type === "meta"
        )?.data.descriptionSEO;

    const end = displayedService?.slug[locale as LocaleType];

    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        alternates: {
            canonical: `${langPrefix}/${end}`,
            languages: {
                "en-US": `/en/services/${displayedService?.slug.en}`,
                "lt-LT": `/paslaugos/${displayedService?.slug.lt}`,
                "ru-RU": `/ru/uslugi/${displayedService?.slug.ru}`,
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
interface ServicePageProps {
    params: Promise<{ locale: string; slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { locale, slug } = await params;
    const [t, tH] = await Promise.all([
        getTranslations("Menu"),
        getTranslations("HomePage"),
    ]);
    const decodedSlug = decodeURIComponent(slug);
    if (slug === "lazerine-akiu-korekcija" || slug === "kataraktos-operacija") {
        notFound();
    }
    if (decodedSlug === "хирургия-прозрачного-хрусталика") {
        redirect("/ru/uslugi/khirurgiia-prozrachnogo-khrustalika");
    }
    const displayedService: ServicesListProps | undefined = servicesList.find(
        service => service.slug[locale as LocaleType] === slug
    );

    if (!displayedService) {
        notFound();
    }
    const breadcrumb = [
        { name: "paslaugos", href: "/paslaugos" },
        { name: displayedService.key, href: `/${displayedService.key}` },
    ];

    const feedbacksList = await sanityFetch({
        query: feedbacksQuery,
        params: { language: locale },
        tags: ["feedback"],
    });
    const feedbackList = feedbacksList.filter(
        fb => fb.service === displayedService.key
    );
    const showedFeedbacks =
        feedbackList.length > 0 ? feedbackList : feedbacksList;
    const serviceData = servicesData.find(
        service => service.name.key === displayedService.key
    );
    if (!serviceData) {
        notFound();
    }

    const heroData = serviceData[locale as LocaleType].sections?.find(
        item => item.type === "hero"
    )?.data;

    const faqList = serviceData[locale as LocaleType].sections?.find(
        item => item.type === "faq"
    )?.data;
    const webPageSchema = servicePageSchema({
        locale: locale as LocaleType,
        data: serviceData,
        nameOrganization: tH("title"),
    });

    const breadcrumbsSchema = breadcrumbsInnerSchema({
        locale,
        items: breadcrumb,
        t,
    });

    return (
        <>
            <Script
                id="webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(webPageSchema),
                }}
            />
            <Script
                id="breadcrumbs-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbsSchema),
                }}
            />
            {heroData && <HeroSomeService data={heroData} />}
            <Breadcrumbs className="mt-5" breadcrumbsList={breadcrumb} />
            <ServicePageContent
                locale={locale as LocaleType}
                serviceData={serviceData}
            />
            {showedFeedbacks?.length > 0 && (
                <FeedbackSection list={showedFeedbacks} slideAmount={4} />
            )}
            {faqList && faqList.content.length > 0 && (
                <FAQService faqList={faqList} />
            )}
            <Booking />
        </>
    );
}
