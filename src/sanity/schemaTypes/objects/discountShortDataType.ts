import { defineField, defineType } from "sanity";

import { getTitleFromIntArraysString } from "@/sanity/utils/getTitle";

export const discountShortDataType = defineType({
    name: "discountShortData",
    title: "Краткие данные о скидке",
    type: "object",
    options: {
        collapsed: true,
        collapsible: true,
    },
    fields: [
        defineField({
            name: "premium",
            type: "boolean",
            title: "Является ли эта скидка премиальной?",
            initialValue: false,
        }),
        defineField({
            name: "premiumText",
            title: "Текст премиальной скидки",
            description: "Рекомендовано до 60 символов с пробелами.",
            type: "internationalizedArrayString",
            hidden: ({ parent }) => !parent?.premium,
        }),
        defineField({
            name: "shortText",
            title: "Краткий текст скидки",
            description:
                "Отображается на карте на главной странице. Рекомендуется до 100 символов с пробелами включительно.",
            type: "internationalizedArrayString",
        }),
        defineField({
            name: "period",
            title: "Период действия скидки",
            description:
                "Рекомендуется писать в формате: «DD.MM.YYYY». «До» будет добавляться автоматически. Если скидка бессрочна, оставьте это поле пустым.",
            type: "string",
        }),
        defineField({
            name: "icon",
            title: "Иконка/логотип к услуге",
            type: "image",
        }),
        defineField({
            name: "bgimage",
            title: "Фоновое изображение для карточки скидки",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "darken",
            title: "Нужно ли затемнить картинку?",
            description:
                "Если картинка светлая, текст на ней будет не виден. Рекомендуется затемнить.",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "cost",
            title: "Стоимость услуги со скидкой, которая отображается на картке",
            type: "number",
        }),
        defineField({
            name: "learnMore",
            title: "Кнопка 'Узнать больше'?",
            description:
                "Если включено, на карточке скидки на Главной странице будет отображаться кнопка 'Узнать больше' вместо 'Записаться', которая будет вести на страницу со всеми Акциями.",
            type: "boolean",
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: "shortText",
            subtitle: "period",
            text: "cost",
        },
        prepare({ title, subtitle, text }) {
            const requisiteTitle = getTitleFromIntArraysString(title);
            return {
                title: requisiteTitle,
                subtitle,
                text,
            };
        },
    },
});
