import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";

import { pationtsInstructionsData } from "@/components/assets/patientsInstructionData";
import { kuponoData } from "@/components/assets/policyData";
import {
    breadcrumbsInnerSchema,
    innerWebPageSchema,
} from "@/components/assets/schemas";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { TextTypeRender } from "@/components/shared/TextTypeRender";
import { HeroInstruction } from "@/components/someInstructionComponents/HeroInstruction";
import { LocaleType } from "@/types/LocaleType";
import { generateInstructionMetadata } from "@/utils/generateInstructionMetadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;

    return generateInstructionMetadata(
        locale as LocaleType,
        "Kupono",
        "dovanu-kupono"
    );
}

export default function PatientsNonresidentPage() {
    const breadcrumb = [
        {
            name: "dovanu-kupono",
            href: "/dovanu-kupono",
        },
    ];
    const locale = useLocale();
    const t = useTranslations("Menu");
    const ti = useTranslations("Kupono");
    const data = pationtsInstructionsData.find(
        instr => instr.name.key === "dovanu-kupono"
    );
    if (!data) return notFound();
    const webPageSchema = innerWebPageSchema({
        locale,
        title: ti("titleSEO"),
        description: ti("descriptionSEO"),
        image: "/images/facilities1.jpg",
        path: "/dovanu-kupono",
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
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="prepc:mt-[176px] prepc:mb-12 mt-30 mb-6"
            />
            <HeroInstruction title={data[locale as LocaleType].title} />
            <section className="tab:pb-12 tab:px-6 pc:px-12 pc:pb-[120px] pb-[60px]">
                <div className="bg-green-10 tab:mx-0 tab:max-w-[1117px] prepc:w-[83%] prepc:p-6 prepc:rounded-lg mx-auto max-w-[540px] rounded p-4">
                    <TextTypeRender
                        data={kuponoData[locale as LocaleType].content}
                    />
                    <Image
                        src="/images/kuponas.png"
                        alt="dovanu kupono"
                        width={1140}
                        height={565}
                        className="mx-auto rounded-lg"
                    />
                </div>
            </section>
        </>
    );
}
