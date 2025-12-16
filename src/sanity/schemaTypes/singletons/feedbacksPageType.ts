import { FcRating } from "react-icons/fc";
import { defineField, defineType } from "sanity";

import { getTitleFromIntArraysString } from "@/sanity/utils/getTitle";

export const feedbacksPageType = defineType({
    name: "feedback",
    title: "Отзывы",
    type: "document",
    icon: FcRating,
    fields: [
        defineField({
            name: "name",
            type: "internationalizedArrayString",
            title: "Имя пациента",
            validation: Rule => Rule.required(),
        }),

        defineField({
            name: "service",
            type: "servicesKey",
            title: "На какую услугу отзыв?",
            validation: Rule => Rule.required(),
        }),

        defineField({
            name: "photo",
            type: "image",
            title: "Фото пациента",
            options: {
                hotspot: true,
            },
        }),

        defineField({
            name: "feedbackText",
            type: "internationalizedArrayPortableText",
            title: "Сам отзыв?",
        }),
    ],
    preview: {
        select: {
            name: "name",
            media: "photo",
            subtitle: "service",
        },
        prepare({ name, media, subtitle }) {
            const title = getTitleFromIntArraysString(name);
            return {
                title,
                media,
                subtitle,
            };
        },
    },
});
