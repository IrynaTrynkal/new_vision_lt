import { FcAdvertising } from "react-icons/fc";
import { defineField, defineType } from "sanity";

import { SLUG_MAX_LENGTH } from "@/sanity/constants";
import { generateSlug } from "@/sanity/utils/generateSlug";
import { getTitleFromIntArraysString } from "@/sanity/utils/getTitle";
import { validateSlug } from "@/sanity/utils/validateSluge";

export const blogPage = defineType({
    name: "blog",
    title: "Новости",
    type: "document",
    icon: FcAdvertising,
    fields: [
        defineField({
            name: "title",
            type: "internationalizedArrayString",
            title: "Заголовок статьи",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: doc => generateSlug(doc, "title", SLUG_MAX_LENGTH),
                slugify: input => input,
            },
            validation: Rule =>
                Rule.required().custom(validateSlug(SLUG_MAX_LENGTH)),
        }),

        defineField({
            name: "service",
            type: "servicesKey",
            title: "К какой услуге или теме относится статья?",
        }),
        defineField({
            name: "publication",
            type: "date",
            title: "Дата публикации",
            options: {
                dateFormat: "DD.MM.YYYY",
            },
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Главная картинка статьи для обложки",
            options: {
                hotspot: true,
            },
            description:
                "Картинка будет автоматически затемнена зеленым градиентом поверх",
        }),
        defineField({
            name: "shortText",
            type: "internationalizedArrayString",
            title: "Краткий текст для анонса статьи",
            description:
                "Этот текст будет отображен на картке статьи. Рекомендуется не больше 140 символов (лишнее будет отрезано) и чтобы это был первый абзац/предложение статьи.",
        }),
        defineField({
            name: "content",
            type: "internationalizedArrayPortableTextAll",
            title: "Сама статья",
        }),
    ],
    preview: {
        select: {
            name: "title",
            media: "image",
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
