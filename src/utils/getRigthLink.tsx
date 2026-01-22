import { servicesList } from "@/components/assets/menu";
import { LocaleType } from "@/types/LocaleType";

export const getLink = (key: string | undefined, locale: LocaleType) => {
    const service = servicesList.find(s => s.key === key);
    if (service) {
        return `/paslaugos/${service.slug[locale]}`;
    }

    return "#";
};
