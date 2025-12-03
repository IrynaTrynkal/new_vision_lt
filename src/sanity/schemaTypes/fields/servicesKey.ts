import { defineType } from "sanity";

export const servicesKey = defineType({
    name: "servicesKey",
    title: "Ключ послуги",
    type: "string",
    options: {
        list: [
            {
                title: "Лазерна корекція зору",
                value: "lazerine-akiu-korekcija",
            },
            { title: "Перевірка зору", value: "akiu-patikrinimas" },
            { title: "Лікування катаракти", value: "kataraktos-operacija" },
            { title: "Дитяче відділення", value: "vaiku-akiu-patikra" },

            {
                title: "Рефракційна лінсектомія",
                value: "skaidraus-lesio-operacija",
            },
            {
                title: "Упражнения для глаз",
                value: "pratimai-akims",
            },
            {
                title: "Контактные линзы",
                value: "kontaktiniai-lęšiai",
            },
            {
                title: "Профилактика нарушений зрения",
                value: "regos-profilaktika",
            },
            {
                title: "Интересные факты о глазах и зрении",
                value: "įdomybės-apie-akis-ir-regą",
            },
            { title: "Очки", value: "akiniai" },
            {
                title: "Глазные заболевания и травмы",
                value: "akių-ligos-ir-traumos",
            },
            { title: "Информация", value: "informacija" },
            { title: "Зрение и возраст", value: "rega-ir-amžius" },
            { title: "Зрение и питание", value: "rega-ir-mityba" },
            { title: "Лечение зрения", value: "regos-gydymas" },
        ],
    },
});
