import { defineField, defineType } from "sanity";

import { DiscountIcon } from "@/sanity/components/DiscountIcon";
import { getTitleFromIntArraysString } from "@/sanity/utils/getTitle";

export const discountDataType = defineType({
    name: "discountData",
    title: "Акция",
    type: "object",
    icon: DiscountIcon,
    options: {
        collapsed: true,
        collapsible: true,
    },
    fields: [
        defineField({
            name: "servicesKey",
            title: "Какая услуга?",
            type: "servicesKey",
        }),
        defineField({
            name: "title",
            title: "Заголовок картки скидки",
            description:
                "Рекомендовано до 45 символов с пробелами включительно, а если акция премиум с дополнительным текстом, то до 30.",
            type: "internationalizedArrayString",
        }),
        defineField({
            name: "discountShortData",
            type: "discountShortData",
        }),

        defineField({
            name: "discountFullData",
            type: "discountFullData",
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "icon",
        },
        prepare({ title, media }) {
            const requisiteTitle = getTitleFromIntArraysString(title);
            return {
                title: requisiteTitle,
                media,
            };
        },
    },
});
