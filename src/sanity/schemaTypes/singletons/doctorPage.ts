import { FcIdea } from "react-icons/fc";
import { defineField, defineType } from "sanity";

import { SLUG_MAX_LENGTH } from "@/sanity/constants";
import { generateSlug } from "@/sanity/utils/generateSlug";
import { getTitleFromIntArraysString } from "@/sanity/utils/getTitle";
import { validateSlug } from "@/sanity/utils/validateSluge";

export const doctorPage = defineType({
    name: "doctor",
    title: "Доктора",
    type: "document",
    icon: FcIdea,
    fields: [
        defineField({
            name: "name",
            type: "internationalizedArrayString",
            title: "Имя доктора",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: doc => generateSlug(doc, "name", SLUG_MAX_LENGTH),
                slugify: input => input,
            },
            validation: Rule =>
                Rule.required().custom(validateSlug(SLUG_MAX_LENGTH)),
        }),

        defineField({
            name: "services",
            type: "array",
            title: "Какие услуги предоставляет доктор?",
            of: [{ type: "servicesKey" }],
            description:
                "Этот список только для фильтрации по услугам, порядок не важен",
            validation: Rule => Rule.unique().error("Эта услуга уже добавлена"),
        }),
        defineField({
            name: "position",
            type: "internationalizedArrayPortableText",
            title: "Какую должность занимает доктор?",
            description:
                "Как здесь будет написано, так и будет видно на сайте.",
        }),
        defineField({
            name: "photo",
            type: "image",
            title: "Фото доктора",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "experience",
            type: "string",
            title: "Стаж роботы",
            description:
                "В этом поле укажите только цифры, например: '20.10.2012' или '2012'. Текст 'Стаж роботы с ..... года' будет дописан автоматически.",
        }),
        defineField({
            name: "specialization",
            type: "internationalizedArrayPortableText",
            title: "Какая специализация доктора?",
        }),
        defineField({
            name: "education",
            type: "internationalizedArrayPortableText",
            title: "Образование доктора",
        }),
        defineField({
            name: "activity",
            type: "internationalizedArrayPortableText",
            title: "Професиональная деятольность",
        }),
        defineField({
            name: "training",
            type: "internationalizedArrayPortableText",
            title: "Повышение квалификации",
        }),
        defineField({
            name: "conferences",
            type: "internationalizedArrayPortableText",
            title: "Участие в конференциях",
        }),
        defineField({
            name: "about",
            type: "internationalizedArrayPortableTextAll",
            title: "Дополнительная информация о докторе",
        }),
    ],
    preview: {
        select: {
            name: "name",
            media: "photo",
        },
        prepare({ name, media }) {
            const title = getTitleFromIntArraysString(name);
            return {
                title,
                media,
            };
        },
    },
});
