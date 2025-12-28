import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { IconArrow } from "../shared/icons/IconArrow";

export const Gift = () => {
    const t = useTranslations("PricePage");

    return (
        <div className="green-gradient prepc:rounded-lg prepc:aspect-square prepc:p-5 tab:aspect-[321/236] relative flex aspect-[288/192] h-full w-full max-w-[321px] flex-col justify-between overflow-hidden rounded px-2 py-3">
            <div>
                <h3 className="title-section-ivory prepc:text-left prepc:mb-10 mb-6 text-center">
                    {t("giftTitle")}
                </h3>
                <p className="text-ivory prepc:text-base prepc:leading-5 mb-4 text-sm leading-[17px]">
                    {t("giftText")}
                </p>
            </div>
            <Link
                href={"/dovanu-kupono" as any}
                className="group text-ivory prepc:h-10 relative z-10 flex h-8 items-center justify-end gap-2"
            >
                <IconArrow className="pc:h-4 pc:w-4 h-4 w-4 transition-all duration-300 group-hover:mr-0 group-hover:translate-x-1" />
                <p className="font-oswald prepc:text-base relative text-sm leading-none font-medium uppercase">
                    {t("paymentBtn")}
                    <span className="absolute -bottom-[2px] left-0 h-[1.5px] w-full origin-right bg-current transition-transform duration-500 ease-in-out group-hover:scale-x-[0.1]" />
                </p>
            </Link>

            <Image
                src="/images/presents.webp"
                alt="part image"
                width={384}
                height={256}
                className="prepc:w-[260px] prepc:-bottom-5 absolute -bottom-3 left-0 h-auto w-[180px] scale-x-[-1]"
            />
        </div>
    );
};
