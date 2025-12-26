import { DepartmentsType } from "@/components/assets/doctorsData";
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
        department?: DepartmentsType;
        locale: string;
    }>;
    params: Promise<{ locale: string }>;
}) {
    const { page, department } = (await searchParams) || {};
    const { locale } = await params;
    const pageNumber = page ? parseInt(page) : 1;
    const selectedDepartment =
        department || "consultation-and-diagnostic-ophthalmologists";
    const breadcrumb = [{ name: "gydytojai", href: "/gydytojai" }];

    const doctorsList = await sanityFetch({
        query: doctorsOrderQuery,
        params: { language: locale },
        tags: ["doctor", "orderDoctors"],
    });

    return (
        <>
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
