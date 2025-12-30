import Script from "next/script";
import { getTranslations } from "next-intl/server";

import { faqAboutList } from "@/components/assets/faqData";
import {
    aboutClinicPageSchema,
    breadcrumbsInnerSchema,
} from "@/components/assets/schemas";
import { Doctors } from "@/components/main/doctors/Doctors";
import { FAQ } from "@/components/main/faq/FAQ";
import { News } from "@/components/main/news/News";
import { AboutSection } from "@/components/pageAbout/about/AboutSection";
import { Advantages } from "@/components/pageAbout/advantages/Advantages";
import { AboutCTA } from "@/components/pageAbout/cta/AboutCTA";
import { HeroAbout } from "@/components/pageAbout/hero/HeroAbout";
import { Methods } from "@/components/pageAbout/methods/Methods";
import { StickySection } from "@/components/pageAbout/stickySection/StickySection";
import { Team } from "@/components/pageAbout/team/Team";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FeedbackSection } from "@/components/shared/feedbackSection/FeedbackSection";
import { sanityFetch } from "@/sanity/lib/client";
import {
    blogsListQuery,
    doctorsOrderQuery,
    feedbacksQuery,
} from "@/sanity/lib/queries";
import { LocaleType } from "@/types/LocaleType";
import { generatePageMetadata } from "@/utils/generatePageMetadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;

    return generatePageMetadata(locale as LocaleType, "AboutPage", {
        lt: "/apie-klinika",
        en: "/en/our-clinic",
        ru: "/ru/o-klinike",
    });
}

export default async function AboutPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const [blogList, doctorsList, feedbacksList] = await Promise.all([
        sanityFetch({
            query: blogsListQuery,
            params: { language: locale },
            tags: ["blog"],
        }),
        sanityFetch({
            query: doctorsOrderQuery,
            params: { language: locale },
            tags: ["doctor", "orderDoctors"],
        }),
        sanityFetch({
            query: feedbacksQuery,
            params: { language: locale },
            tags: ["feedback"],
        }),
    ]);
    const [t, ti, tH] = await Promise.all([
        getTranslations("Menu"),
        getTranslations("AboutPage"),
        getTranslations("HomePage"),
    ]);
    const FEEDBACKS_SLIDES_TO_SHOW = 4;
    const breadcrumb = [{ name: "apie-klinika", href: "/apie-klinika" }];
    const webPageSchema = aboutClinicPageSchema({
        locale: locale as LocaleType,
        title: ti("titleSEO"),
        description: ti("descriptionSEO"),
        nameOrganization: tH("title"),
        t: ti,
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
            <HeroAbout />
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="tab:mt-5 prepc:mb-12 my-5"
            />
            <AboutSection />
            <StickySection />
            <Advantages />
            <Methods />
            <Team />
            <Doctors doctors={doctorsList} />
            <AboutCTA />
            {feedbacksList && (
                <FeedbackSection
                    className="prepc:pb-[60px]"
                    list={feedbacksList}
                    slideAmount={FEEDBACKS_SLIDES_TO_SHOW}
                />
            )}
            <News blogList={blogList} />
            <FAQ faqList={faqAboutList} />
            <Booking />
        </>
    );
}
