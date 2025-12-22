import { getTranslations } from "next-intl/server";

import {
    eyeDiseaseData,
    eyeDiseases,
    EyeDiseaseSlugType,
} from "@/components/assets/patientsInstructionData";
import { EyeDiseaseFilter } from "@/components/pagePatient/EyeDiseaseFilter";
import { MainAllDiseases } from "@/components/pagePatient/MainAllDiseases";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { HeroDisease } from "@/components/someDiseaseComponent/HeroDisease";
import { LocaleType } from "@/types/LocaleType";
import { generatePageMetadata } from "@/utils/generatePageMetadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;

    return generatePageMetadata(locale as LocaleType, "Disease", {
        lt: "/akiu-ligos",
        en: "/en/eye-diseases",
        ru: "/ru/glaznye-zabolevaniya",
    });
}

export default async function EyesDiseasePage({
    searchParams,
    params,
}: {
    searchParams?: Promise<{ disease?: string }>;
    params: Promise<{ locale: string }>;
}) {
    const { disease } = (await searchParams) || {};
    const { locale } = await params;
    const t = await getTranslations("Menu");
    const breadcrumb = [
        {
            name: "akiu-ligos",
            href: "/akiu-ligos",
        },
    ];
    const selectedDisease = disease || "akiu-ligu-simptomai";
    const data = eyeDiseaseData.find(dis => dis.name.key === selectedDisease);

    return (
        <>
            <HeroDisease title={t("akiu-ligos")} />
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="tab:mt-5 prepc:mb-12 my-5"
            />
            <div className="tab:flex tab:flex-row-reverse tab:justify-between tab:px-6 pc:px-12 tab:overflow-visible tab:pb-12 pc:pb-[120px] relative pb-[60px]">
                <EyeDiseaseFilter
                    list={eyeDiseases}
                    className="tab:mb-0 tab:sticky prepc:top-36 tab:w-[207px] tab:mt-0 tab:h-fit mb-5"
                />
                {data && (
                    <MainAllDiseases
                        content={data[locale as LocaleType].content[0]}
                        link={data.name.key as EyeDiseaseSlugType}
                        title={t(selectedDisease)}
                        btnName={t("details")}
                    />
                )}
            </div>
            <Booking />
        </>
    );
}
