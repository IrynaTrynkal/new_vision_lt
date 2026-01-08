import { defineField, defineType } from "sanity";

const TITLE = "Развернутое описание скидки";

export const discountFullDataType = defineType({
    name: "discountFullData",
    title: TITLE,
    type: "object",
    options: {
        collapsed: true,
        collapsible: true,
    },
    fields: [
        defineField({
            name: "fractionUp",
            title: "Верхний текст для компонента - дробь",
            type: "internationalizedArrayString",
        }),
        defineField({
            name: "fractionDown",
            title: "Нижний текст для компонента - дробь",
            type: "internationalizedArrayString",
        }),
        defineField({
            name: "textLeft",
            title: "Небольшой текст слева под названием",
            description: "Рекомендовано до 160 символов с пробелами.",
            type: "internationalizedArrayString",
        }),
        defineField({
            name: "textRight",
            title: "Краткий текст справа под названием",
            description:
                "Обычно список того Что входит в скидку или Что улучшит услуга. Рекомендуется до 6 пунктов и заголовок.",
            type: "internationalizedArrayPortableText",
        }),
        defineField({
            name: "discountFullText",
            title: "Полное описание скидки",
            type: "internationalizedArrayPortableTextAll",
        }),
    ],
    preview: {
        prepare() {
            return {
                title: TITLE,
            };
        },
    },
});
