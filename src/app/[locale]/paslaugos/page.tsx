import { Doctors } from "@/components/main/doctors/Doctors";
import { Feedbacks } from "@/components/main/feedbacks/Feedbacks";
import { HeroServices } from "@/components/pageServices/HeroServices/HeroServices";
import { AllServicesMain } from "@/components/pageServices/Main/AllServicesMain";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { sanityFetch } from "@/sanity/lib/client";
import { doctorsOrderQuery, feedbacksQuery } from "@/sanity/lib/queries";
import { LocaleType } from "@/types/LocaleType";
import { generatePageMetadata } from "@/utils/generatePageMetadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;

    return generatePageMetadata(locale as LocaleType, "ServicesPage", {
        lt: "/paslaugos",
        en: "/en/services",
        ru: "/ru/uslugi",
    });
}

export default async function ServicesPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const [doctorsList, feedbacksList] = await Promise.all([
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
    const breadcrumb = [{ name: "paslaugos", href: "/paslaugos" }];

    return (
        <>
            <HeroServices />
            <Breadcrumbs className="mt-5" breadcrumbsList={breadcrumb} />
            <AllServicesMain />
            <Doctors doctors={doctorsList} />
            <Feedbacks feedbacks={feedbacksList} />
            <Booking />
        </>
    );
}
