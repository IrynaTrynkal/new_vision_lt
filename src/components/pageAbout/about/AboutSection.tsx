import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { achievementsList } from "@/components/assets/aboutData";
import { Fraction } from "@/components/shared/Fraction";
import { LocaleType } from "@/types/LocaleType";

export const AboutSection = () => {
    const t = useTranslations("AboutPage");
    const locale = useLocale();

    const text = [t("aboutText1"), t("aboutText2"), t("aboutText3")];

    return (
        <section className="content pc:pb-30 pc:pt-11 pt-5 pb-[60px]">
            <div className="tab:flex tab:items-stretch tab:justify-between tab:mb-[60px] pc:mb-30">
                <div className="tab:w-[32%] tab:flex tab:flex-col tab:justify-between">
                    <h3 className="subtitle mb-5">{t("aboutSubtitle")}</h3>

                    <div className="tab:block prepc:rounded-lg hidden aspect-square max-w-[321px] overflow-hidden rounded">
                        <Image
                            src="/images/about.jpg"
                            alt={t("aboutSubtitle")}
                            width={1024}
                            height={684}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
                <div className="tab:w-[65.7%]">
                    <h2 className="title-section tab:max-w-[560px] prepc:max-w-full mb-6 max-w-[440px]">
                        {t("aboutTitle")}
                    </h2>
                    <div className="tab:hidden mb-5 aspect-[288/164] overflow-hidden rounded">
                        <Image
                            src="/images/about.jpg"
                            alt={t("aboutSubtitle")}
                            width={1024}
                            height={684}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="prepc:grid prepc:gap-x-5 prepc:gap-y-[34px] prepc:grid-cols-2">
                        {text.map((t, i) => (
                            <p
                                key={i}
                                className="pc:text-lg pc:leading-[22px] prepc:mb-0 mb-2 leading-5"
                            >
                                {t}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="tab:flex tab:justify-between">
                <h3 className="subtitle tab:w-[30%] mb-5">
                    {t("aboutAchievements")}
                </h3>
                <div className="tab:flex tab:justify-between tab:w-[65.7%] tab:gap-x-4 grid grid-cols-2 gap-x-[100px] gap-y-3">
                    {achievementsList.map(ach => (
                        <Fraction
                            key={ach.en.down}
                            textUp={ach[locale as LocaleType].up}
                            textDown={ach[locale as LocaleType].down}
                            className="tab:max-w-[110px] tab:mx-0 pc:max-w-fit mx-auto max-w-[100px] text-center"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
