import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { SomeDoctorPageMain } from "@/components/pageDoctors/SomeDoctorPage";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { doctorQuery } from "@/sanity/lib/queries";
import { LocaleType } from "@/types/LocaleType";
import { toPlainText } from "@/utils/toPlainText";

type Props = {
    params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { locale, slug } = await params;

    const doctor = await sanityFetch({
        query: doctorQuery,
        params: { language: locale, slug },
        tags: ["doctor"],
    });

    const previousImages = parent ? (await parent).openGraph?.images || [] : [];

    const photo = doctor?.photo ? urlFor(doctor.photo).url() : "";

    const langPrefix =
        locale === "en"
            ? "/en/doctors"
            : locale === "ru"
              ? "/ru/vrachi"
              : "gydytojai";

    const description = doctor?.position ? toPlainText(doctor.position) : "";

    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        alternates: {
            canonical: `${langPrefix}/${slug}`,
            languages: {
                "en-US": `/en/doctors/${slug}`,
                "lt-LT": `/gydytojai/${slug}`,
                "ru-RU": `/ru/vrachi/${slug}`,
            },
        },
        title: doctor?.name,
        description: description,
        openGraph: {
            title: doctor?.name!,
            description: description,
            images: [photo, ...previousImages],
            type: "website",
        },
    };
}

interface PageProps {
    params: Promise<{ locale: string; slug: string }>;
}

export default async function SomeDoctorPage({ params }: PageProps) {
    const { locale, slug } = await params;

    const doctorData = await sanityFetch({
        query: doctorQuery,
        params: { language: locale, slug: slug },
        tags: ["doctor"],
    });

    if (!doctorData) {
        notFound();
    }
    const breadcrumb = [
        { name: "gydytojai", href: "/gydytojai" },
        {
            name: doctorData.name!,
            href: `/${slug}`,
        },
    ];

    return (
        <>
            <Breadcrumbs
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
                breadcrumbsList={breadcrumb}
                doctors
            />
            <SomeDoctorPageMain
                doctorData={doctorData}
                locale={locale as LocaleType}
            />
            <Booking />
        </>
    );
}
