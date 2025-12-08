import { IconBigLogoEN } from "@/components/shared/icons/IconBigLogoEN";
import { IconBigLogoLT } from "@/components/shared/icons/IconBigLogoLT";
import { IconBigLogoRU } from "@/components/shared/icons/IconBigLogoRU";
import { LocaleType } from "@/types/LocaleType";

export const getLocaleLogo = ({ locale }: { locale: LocaleType }) => {
    switch (locale) {
        case "lt":
            return <IconBigLogoLT className="h-11 w-auto" />;
        case "ru":
            return <IconBigLogoRU className="h-11 w-auto" />;
        default:
            return <IconBigLogoEN className="h-11 w-auto" />;
    }
};
