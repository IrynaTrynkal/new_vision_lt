import { defineType } from "sanity";

export const servicesKey = defineType({
    name: "servicesKey",
    title: "Ключ послуги",
    type: "string",
    options: {
        list: [
            {
                title: "Лазерная коррекция зрения",
                value: "lazerine-akiu-korekcija",
            },
            { title: "Проверка зрения", value: "akiu-patikrinimas" },
            { title: "Катаракта", value: "kataraktos-operacija" },
            { title: "Детское отделение", value: "vaiku-akiu-patikra" },
            { title: "Лечение кератоконуса", value: "keratokonuso-gydymas" },
            { title: "Лечение глаукомы", value: "glaukomos-gydymas" },
            {
                title: "Рефракционная ленсэктомия",
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
