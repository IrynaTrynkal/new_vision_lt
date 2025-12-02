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
                title: "Вітреоретинальна хірургія",
                value: "vitreoretinalna-hirurgiya",
            },
            {
                title: "Інтравітреальні ін’єкції",
                value: "intravitrealni-inekczii",
            },
            {
                title: "Хірургічне лікування глаукоми",
                value: "hirurgichne-likuvannya-glaukomi",
            },
            {
                title: "Хірургія повік і кон’юнктиви",
                value: "hirurgiya-povik-i-konyunktivi",
            },
        ],
    },
});
