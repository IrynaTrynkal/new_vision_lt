import { defineArrayMember, defineField, defineType } from "sanity";

import { getTitleFromIntArraysString } from "@/sanity/utils/getTitle";

export const priceBlockType = defineType({
    name: "priceBlock",
    title: "Услуга и стоимость",
    type: "object",
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
            name: "icon",
            title: "Иконка / изображение блока",
            description:
                "Загрузите SVG, PNG или JPG — будет отображается в админке в превью для визуального комфорта.",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "list",
            type: "array",
            of: [
                defineArrayMember({
                    name: "priceItem",
                    type: "priceItem",
                }),
            ],
        }),
        defineField({
            name: "linkToPage",
            title: "Ссылки на страницу услуги (литовская версия)",
            description:
                "Должен начинаться с /paslaugos. Ссылку на страницу лучше скопировать в адресной строке в браузере.",
            type: "string",
        }),
        defineField({
            name: "servicesName",
            title: "Название блока услуг",
            type: "internationalizedArrayString",
        }),
        defineField({
            name: "servicesDescription",
            title: "Дополнительное описание к блоку услуги (при необходимости)",
            type: "internationalizedArrayPortableText",
        }),
    ],
    preview: {
        select: {
            title: "servicesName",
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
