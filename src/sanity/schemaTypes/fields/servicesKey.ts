import { defineType } from "sanity";

export const servicesKey = defineType({
    name: "servicesKey",
    title: "Ключ услуги",
    type: "string",
    options: {
        list: [
            { title: "Детское отделение", value: "vaiku-akiu-patikra" },
            { title: "Диагностика зрения", value: "akiu-patikrinimas" },
            {
                title: "Лазерная коррекция зрения",
                value: "lazerine-akiu-korekcija",
            },
            {
                title: "Лазерное лечение заболеваний глаза",
                value: "lazerinis-akiu-ligu-gydymas",
            },
            { title: "Лечение глаукомы", value: "glaukomos-gydymas" },
            { title: "Лечение катаракты", value: "kataraktos-operacija" },
            {
                title: "Лечение синдрома сухого глаза",
                value: "dry-eye-syndrome-treatment",
            },
            {
                title: "Рефракционная ленсэктомия",
                value: "skaidraus-lesio-operacija",
            },
        ],
    },
});
