import Script from "next/script";
import { getTranslations } from "next-intl/server";

import { localizedRoutes } from "@/components/assets/localizedRoutes";
import {
    breadcrumbsInnerSchema,
    innerCollectionPageSchema,
} from "@/components/assets/schemas";
import { DoctorsFilteredList } from "@/components/pageDoctors/DoctorsFilteredList";
import { HeroDoctors } from "@/components/pageDoctors/HeroDoctors";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { sanityFetch } from "@/sanity/lib/client";
import { doctorsOrderQuery } from "@/sanity/lib/queries";
import { LocaleType } from "@/types/LocaleType";
import { generatePageMetadata } from "@/utils/generatePageMetadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;

    return generatePageMetadata(locale as LocaleType, "Doctors", {
        lt: "/gydytojai",
        en: "/en/doctors",
        ru: "/ru/vrachi",
    });
}

export default async function gydytojaiPage({
    searchParams,
    params,
}: {
    searchParams?: Promise<{
        page?: string;
        locale: string;
    }>;
    params: Promise<{ locale: string }>;
}) {
    const { page } = (await searchParams) || {};
    const { locale } = await params;
    const pageNumber = page ? parseInt(page) : 1;
    const breadcrumb = [{ name: "gydytojai", href: "/gydytojai" }];

    const doctorsList = await sanityFetch({
        query: doctorsOrderQuery,
        params: { language: locale },
        tags: ["doctor", "orderDoctors"],
    });

    const itemsSchema = doctorsList?.map(doctor => {
        const base = localizedRoutes["/gydytojai"][locale as LocaleType];
        return {
            name: doctor.name!,
            url: `${base}/${doctor.slug}`,
            type: "Physician",
        };
    });

    const [t, ti] = await Promise.all([
        getTranslations("Menu"),
        getTranslations("Doctors"),
    ]);
    const collectionPageSchema = innerCollectionPageSchema({
        locale,
        title: ti("titleSEO"),
        description: ti("descriptionSEO"),
        image: "/images/doctors-hero1.jpg",
        path: "/oftalmolohy",
        items: itemsSchema,
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
                    __html: JSON.stringify(collectionPageSchema),
                }}
            />
            <Script
                id="breadcrumbs-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbsSchema),
                }}
            />
            <HeroDoctors />
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="tab:mt-5 prepc:mb-12 my-5"
            />
            <DoctorsFilteredList
                list={doctorsList}
                pageNumber={pageNumber}
                className="content tab:pb-12 prepc:pb-30 pb-[60px]"
            />
            <Booking />
        </>
    );
}
