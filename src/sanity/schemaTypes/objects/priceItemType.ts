import { FcOk } from "react-icons/fc";
import { defineField, defineType } from "sanity";

import { getTitleFromIntArraysString } from "@/sanity/utils/getTitle";

export const priceItemType = defineType({
    name: "priceItem",
    type: "object",
    options: {
        collapsed: true,
        collapsible: true,
    },
    fields: [
        defineField({
            name: "serviceName",
            title: "Название услуги",
            type: "internationalizedArrayString",
        }),
        defineField({
            name: "price",
            title: "Обычная стоимость",
            type: "number",
        }),
        defineField({
            name: "lowerPriceLimit",
            title: "Цена «от»?",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "discountPrice",
            title: "Цена со скидкой",
            type: "number",
        }),
        defineField({
            name: "lowerDiscountLimit",
            title: "Скидка от?",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "specialPrice",
            title: "Нужна ли зеленая подпись что это Специальная цена?",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "new",
            title: "Нужна ли серая подпись что это Новые технологии?",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "serviceDescription",
            title: "Описание услуги (при необходимости)",
            type: "internationalizedArrayPortableText",
        }),
    ],
    preview: {
        select: {
            nameLt: "serviceName",
            price: "price",
            discount: "discountPrice",
        },
        prepare(selection) {
            const { nameLt, price, discount } = selection;
            const titleLt = getTitleFromIntArraysString(nameLt);

            let subtitle = "";
            if (discount) {
                subtitle = `${price ?? "—"} → ${discount}`;
            } else if (price) {
                subtitle = `${price}`;
            } else {
                subtitle = "Без цены";
            }

            return {
                media: FcOk,
                title: titleLt,
                subtitle,
            };
        },
    },
});
