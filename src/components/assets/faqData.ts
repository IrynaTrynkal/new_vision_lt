export type AnswerType = {
    list?: boolean;
    text: string | string[];
    gap?: boolean;
    bold?: boolean;
};

export type FAQLocaleType = {
    question: string;
    answer: AnswerType[];
};

export type FAQListType = {
    en: FAQLocaleType;
    lt: FAQLocaleType;
    ru: FAQLocaleType;
};
export type FAQType = {
    title: { lt: string; ru: string; en: string };
    content: FAQListType[];
};

export const faqMainList: FAQType = {
    title: {
        lt: "Dažniausiai užduodami klausimai",
        ru: "Ответы на частые вопросы",
        en: "Frequently asked questions",
    },

    content: [
        {
            lt: {
                question: "Kas yra planinis vizitas pas oftalmologą?",
                answer: [
                    {
                        text: "Planinis vizitas pas akių gydytoją – tai reguliarus akių patikrinimas, kurio metu galima anksti pastebėti regos sutrikimus ar akių ligų požymius. Laiku atliktas akių patikrinimas leidžia pradėti gydymą ankstyvoje stadijoje ir išvengti rimtesnių komplikacijų. Oftalmologija yra aukšto tikslumo medicinos sritis, todėl svarbu kreiptis į patyrusį oftalmologą ir atlikti tyrimus su modernia diagnostine įranga.",
                    },
                ],
            },
            ru: {
                question: "Что такое плановый визит к офтальмологу?",
                answer: [
                    {
                        text: "Плановый визит к офтальмологу – это регулярная проверка зрения и состояния глаз, которая позволяет выявить нарушения на ранней стадии. Своевременная диагностика даёт возможность начать лечение вовремя и предотвратить осложнения. Офтальмология – область высокоточной медицины, поэтому важно проходить обследование у опытного врача-офтальмолога на современном оборудовании.",
                    },
                ],
            },
            en: {
                question: "What is a routine visit to an eye doctor?",
                answer: [
                    {
                        text: "A routine visit to an ophthalmologist is a regular eye examination that helps detect vision problems and eye diseases at an early stage. Early diagnosis makes it possible to start treatment on time and prevent complications. Ophthalmology is a highly specialised and technology-driven field of medicine, so it is important to be examined by an experienced eye doctor using modern diagnostic equipment.",
                    },
                ],
            },
        },
        {
            lt: {
                question: "Kokias paslaugas teikia akių klinika Vilniuje?",
                answer: [
                    {
                        text: "Mūsų akių ligų klinikoje Vilniuje teikiamos įvairios oftalmologijos paslaugos:",
                    },
                    {
                        list: true,
                        text: [
                            "Akių patikrinimas ir diagnostika – išsamus regos ištyrimas, naudojant  modernią įrangą.",
                            "Lazerinė regos korekcija – šiuolaikiniai metodai, padedantys koreguoti trumparegystę, toliaregystę ir astigmatizmą.",
                            "Chirurginis akių gydymas – kataraktos operacijos ir kitos akių ligų chirurginės procedūros.",
                            "Vitreoretinalinė chirurgija – tinklainės ir stiklakūnio ligų gydymas.",
                            "Sausų akių sindromo gydymas – individualiai parenkamos priemonės, padedančios sumažinti diskomfortą ir pagerinti akių būklę.",
                        ],
                    },
                ],
            },
            ru: {
                question:
                    "Какие услуги предоставляет глазная клиника в Вильнюсе?",
                answer: [
                    {
                        text: "В нашей офтальмологической клинике в Вильнюсе доступен полный спектр услуг:",
                    },
                    {
                        list: true,
                        text: [
                            "Диагностика зрения – комплексное обследование с использованием современного диагностического оборудования.",
                            "Лазерная коррекция зрения – современные методы коррекции близорукости, дальнозоркости и астигматизма.",
                            "Хирургическое лечение заболеваний глаз – операции по поводу катаракты и других офтальмологических патологий.",
                            "Витреоретинальная хирургия – лечение заболеваний сетчатки и стекловидного тела.",
                            "Лечение синдрома сухого глаза – индивидуальный подбор терапии, направленной на устранение дискомфорта и восстановление поверхности глаза.",
                        ],
                    },
                ],
            },
            en: {
                question:
                    "What services does the eye clinic in Vilnius provide?",
                answer: [
                    {
                        text: "Our eye clinic in Vilnius offers a full range of ophthalmology services, including:",
                    },
                    {
                        list: true,
                        text: [
                            "Eye diagnostics – comprehensive eye examinations using advanced diagnostic devices.",
                            "Laser vision correction – modern methods to correct myopia, hyperopia and astigmatism.",
                            "Surgical treatment of eye conditions – cataract surgery and other ophthalmic procedures.",
                            "Vitreoretinal surgery – treatment of diseases of the retina and vitreous body.",
                            "Dry eye treatment – individually tailored therapy to relieve discomfort and restore the health of the ocular surface.",
                        ],
                    },
                ],
            },
        },
        {
            lt: {
                question: "Kodėl pacientai renkasi būtent šią akių kliniką?",
                answer: [
                    {
                        gap: true,
                        text: "Mūsų akių gydymo centras Vilniuje siūlo profesionalų aptarnavimą, šiuolaikinę diagnostiką ir individualų požiūrį.",
                    },
                    {
                        text: "Pacientai vertina galimybę:",
                    },
                    {
                        list: true,
                        gap: true,
                        text: [
                            "patogiai užsiregistruoti internetu;",
                            "pasirinkti gydytoją;",
                            "iš anksto sužinoti, kiek kainuoja konsultacija ar procedūra;",
                            "atlikti visus reikalingus tyrimus vienoje vietoje, be ilgų eilių.",
                        ],
                    },
                    {
                        text: "Moderni akių ligų diagnostiko iranga užtikrina tikslų įvertinimą ir efektyvų gydymo planą.",
                    },
                ],
            },
            ru: {
                question: "Почему пациенты выбирают именно нашу клинику?",
                answer: [
                    {
                        gap: true,
                        text: "Пациенты ценят сочетание профессионализма, современного оснащения и внимательного отношения.",
                    },
                    {
                        text: "В глазной клинике в Вильнюсе вы получаете:",
                    },
                    {
                        list: true,
                        gap: true,
                        text: [
                            "удобную онлайн-запись;",
                            "возможность выбрать врача;",
                            "прозрачную информацию о стоимости консультаций и процедур;",
                            "полный цикл диагностики и лечения в одном месте, без длительных очередей.",
                        ],
                    },
                    {
                        text: "Наличие современного диагностического оборудования позволяет добиваться высокой точности обследования и эффективности лечения.",
                    },
                ],
            },
            en: {
                question: "Why do patients choose this clinic?",
                answer: [
                    {
                        gap: true,
                        text: "Patients appreciate the combination of medical expertise, modern equipment and attentive care.",
                    },
                    {
                        text: "At our eye clinic in Vilnius you benefit from:",
                    },
                    {
                        list: true,
                        gap: true,
                        text: [
                            "convenient online booking;",
                            "the possibility to choose your doctor;",
                            "clear information about consultation and treatment prices;",
                            "all essential diagnostics and treatment in one place, without long waiting times.",
                        ],
                    },
                    {
                        text: "State-of-the-art diagnostic equipment allows for precise assessment and effective treatment planning.",
                    },
                ],
            },
        },
        {
            lt: {
                question: "Kaip užsiregistruoti vizitui?",
                answer: [
                    {
                        gap: true,
                        text: "Registracija pas oftalmologą yra paprasta: galite paskambinti telefonu arba užsiregistruoti internetu bet kuriuo jums patogiu metu. ",
                    },
                    {
                        text: "Vizitas į akių kliniką Vilniuje – tai ne tik gydymas, bet ir komfortas: jauki aplinka, dėmesingi darbuotojai ir pagarbus požiūris į kiekvieną pacientą.",
                    },
                ],
            },

            ru: {
                question: "Как записаться на прием?",
                answer: [
                    {
                        gap: true,
                        text: "Записаться к офтальмологу очень просто: вы можете позвонить по телефону клиники или оставить заявку на сайте в удобное для вас время. ",
                    },
                    {
                        text: "Посещение глазной клиники в Вильнюсе – это не только качественное лечение, но и комфортные условия, внимательный персонал и индивидуальный подход к каждому пациенту.",
                    },
                ],
            },
            en: {
                question: "How can I book an appointment?",
                answer: [
                    {
                        gap: true,
                        text: "Booking an appointment with an eye specialist is simple: you can call the clinic or use the online booking form on our website at any time that suits you.",
                    },
                    {
                        text: "A visit to our eye clinic in Vilnius means not only high-quality treatment, but also comfort – modern facilities, friendly staff and a truly personalised approach.",
                    },
                ],
            },
        },
        {
            lt: {
                question: "Kaip vyksta regos gydymas?",
                answer: [
                    {
                        gap: true,
                        text: "Mes taikome kompleksinį požiūrį į regos gydymą: nuo išsamios diagnostikos iki ilgalaikio stebėjimo. Naudojame modernią aparatūrą ir šiuolaikinius akių ligų gydymo metodus – tiek konservatyvius, tiek chirurginius.",
                    },
                    {
                        text: "Tai leidžia pasiekti patikimus, mediciniškai pagrįstus rezultatus ir ilgalaikį regos stabilumą.",
                    },
                ],
            },
            ru: {
                question: "Как проводится лечение зрения?",
                answer: [
                    {
                        gap: true,
                        text: "Мы практикуем комплексный подход: сначала выполняется полная диагностика, затем подбирается оптимальный метод лечения – от консервативной терапии до хирургических вмешательств и лазерных процедур.",
                    },
                    {
                        text: "Использование современного оборудования и проверенных методик обеспечивает устойчивый результат и длительное сохранение хорошего зрения.",
                    },
                ],
            },
            en: {
                question: "How is vision treated?",
                answer: [
                    {
                        gap: true,
                        text: "We follow a comprehensive approach to vision care: starting with a detailed examination, we then choose the most appropriate treatment method – from conservative therapy and eye drops to laser procedures and surgical interventions.",
                    },
                    {
                        text: "By combining clinical experience with innovative technology, we aim for stable, long-term improvements in your vision.",
                    },
                ],
            },
        },
        {
            lt: {
                question: "Kaip dažnai reikėtų tikrintis akis?",
                answer: [
                    {
                        text: "Suaugusiems žmonėms rekomenduojama profilaktiškai tikrintis akis bent kartą per 1–2 metus, net jei nėra nusiskundimų. Jei jau turite regos sutrikimų, lėtinių ligų (pvz., cukrinis diabetas) ar esate po akių operacijų, oftalmologo konsultacija gali būti reikalinga dažniau – pagal gydytojo rekomendacijas.",
                    },
                ],
            },
            ru: {
                question:
                    "Как часто нужно проходить профилактический осмотр у офтальмолога?",
                answer: [
                    {
                        text: "Взрослым людям рекомендуется проходить профилактический осмотр у офтальмолога не реже одного раза в 1–2 года, даже при отсутствии жалоб. При наличии уже выявленных нарушений зрения, хронических заболеваний или после операций частоту визитов определяет врач.",
                    },
                ],
            },
            en: {
                question: "How often should I have my eyes checked?",
                answer: [
                    {
                        text: "Adults are generally advised to have their eyes checked at least once every 1–2 years, even if they have no complaints. If you already have vision problems, chronic conditions such as diabetes, or a history of eye surgery, your ophthalmologist may recommend more frequent check-ups.",
                    },
                ],
            },
        },
        {
            lt: {
                question: "Ar reikia siuntimo iš šeimos gydytojo?",
                answer: [
                    {
                        text: "Daugeliu atvejų norint gauti oftalmologo konsultaciją mūsų klinikoje siuntimo nereikia – galite kreiptis tiesiogiai ir registruotis vizitui jums patogiu laiku. Jei reikalingos papildomos, įskaitant kompensuojamas, procedūros ar tyrimai, apie tai jus informuos gydytojas konsultacijos metu.",
                    },
                ],
            },
            ru: {
                question: "Нужно ли направление от семейного врача?",
                answer: [
                    {
                        text: "В большинстве случаев для записи на консультацию в частную офтальмологическую клинику направление не требуется – вы можете обратиться напрямую. Если для вас будут актуальны дополнительные, в том числе компенсируемые процедуры или обследования, об этом расскажет врач на приёме.",
                    },
                ],
            },
            en: {
                question: "Do I need a referral from a family doctor?",
                answer: [
                    {
                        text: "In most cases, you do not need a referral from a family doctor to see an eye specialist at our clinic – you can book an appointment directly. If additional reimbursed procedures or tests are needed, your doctor will explain this during the consultation.",
                    },
                ],
            },
        },
    ],
};

export const faqAboutList: FAQType = {
    title: {
        lt: "Dažniausiai užduodami klausimai",
        ru: "Ответы на часто задаваемые вопросы",
        en: "Frequently asked questions",
    },

    content: [
        {
            lt: {
                question: "Kas yra planinis vizitas pas oftalmologą?",
                answer: [
                    {
                        text: "Planinis vizitas pas akių gydytoją – tai reguliarus akių patikrinimas, kurio metu galima anksti pastebėti regos sutrikimus ar akių ligų požymius. Laiku atliktas akių patikrinimas leidžia pradėti gydymą ankstyvoje stadijoje ir išvengti rimtesnių komplikacijų. Oftalmologija yra aukšto tikslumo medicinos sritis, todėl svarbu kreiptis į patyrusį oftalmologą ir atlikti tyrimus su modernia diagnostine įranga.",
                    },
                ],
            },
            ru: {
                question: "Что такое плановый визит к офтальмологу?",
                answer: [
                    {
                        text: "Плановые визиты к офтальмологу позволяют выявить нарушения зрения на ранней стадии, что даёт возможность своевременно начать терапию и избежать осложнений. Офтальмология — это высокоточная и технологически развитая область медицины, требующая применения специализированных методик и современного диагностического оборудования. Обращение к опытному врачу-офтальмологу — важный шаг к сохранению здоровья глаз. Компетентный специалист может определить заболевание задолго до появления выраженных симптомов, когда лечение наиболее эффективно. Регулярный контроль состояния зрения помогает предотвращать развитие патологий и сохранять высокое качество жизни.",
                    },
                ],
            },
            en: {
                question: "What is a routine visit to an eye doctor?",
                answer: [
                    {
                        text: "A routine visit to an ophthalmologist is a regular eye examination that helps detect vision problems and eye diseases at an early stage. Early diagnosis makes it possible to start treatment on time and prevent complications. Ophthalmology is a highly specialised and technology-driven field of medicine, so it is important to be examined by an experienced eye doctor using modern diagnostic equipment.",
                    },
                ],
            },
        },
        {
            lt: {
                question: "Kokias paslaugas teikia akių klinika Vilniuje?",
                answer: [
                    {
                        text: "Mūsų akių ligų klinikoje Vilniuje teikiamas platus oftalmologijos paslaugų spektras:",
                    },
                    {
                        list: true,
                        text: [
                            "Akių patikrinimas ir diagnostika – išsamus regos ištyrimas su šiuolaikine aparatūra.",
                            "Lazerinė regos korekcija – šiuolaikiniai metodai, padedantys koreguoti trumparegystę, toliaregystę ir astigmatizmą.",
                            "Chirurginis akių gydymas – kataraktos operacijos ir kitos akių ligų chirurginės procedūros.",
                            "Vitreoretinalinė chirurgija – tinklainės ir stiklakūnio ligų gydymas.",
                            "Sausų akių sindromo gydymas – individualiai parenkamos priemonės, padedančios sumažinti diskomfortą ir pagerinti akių būklę.",
                        ],
                    },
                ],
            },
            ru: {
                question:
                    "Какие услуги предоставляет глазная клиника в Вильнюсе?",
                answer: [
                    {
                        text: "В нашей офтальмологической клинике в Вильнюсе доступен полный спектр услуг:",
                    },
                    {
                        list: true,
                        text: [
                            "Диагностика зрения – комплексное обследование с использованием современного диагностического оборудования.",
                            "Лазерная коррекция зрения – современные методы коррекции близорукости, дальнозоркости и астигматизма.",
                            "Хирургическое лечение заболеваний глаз – операции по поводу катаракты и других офтальмологических патологий.",
                            "Витреоретинальная хирургия – лечение заболеваний сетчатки и стекловидного тела.",
                            "Лечение синдрома сухого глаза – индивидуальный подбор терапии, направленной на устранение дискомфорта и восстановление поверхности глаза.",
                        ],
                    },
                ],
            },
            en: {
                question:
                    "What services does the eye clinic in Vilnius provide?",
                answer: [
                    {
                        text: "Our eye clinic in Vilnius offers a full range of ophthalmology services, including:",
                    },
                    {
                        list: true,
                        text: [
                            "Eye diagnostics – comprehensive eye examinations using advanced diagnostic devices.",
                            "Laser vision correction – modern methods to correct myopia, hyperopia and astigmatism.",
                            "Surgical treatment of eye conditions – cataract surgery and other ophthalmic procedures.",
                            "Vitreoretinal surgery – treatment of diseases of the retina and vitreous body.",
                            "Dry eye treatment – individually tailored therapy to relieve discomfort and restore the health of the ocular surface.",
                        ],
                    },
                ],
            },
        },
        {
            lt: {
                question: "Kodėl pacientai renkasi būtent šią akių kliniką?",
                answer: [
                    {
                        gap: true,
                        text: "Mūsų akių gydymo centras Vilniuje siūlo profesionalų aptarnavimą, šiuolaikinę diagnostiką ir individualų požiūrį.",
                    },
                    {
                        text: "Pacientai vertina galimybę:",
                    },
                    {
                        list: true,
                        gap: true,
                        text: [
                            "patogiai užsiregistruoti internetu;",
                            "pasirinkti gydytoją;",
                            "iš anksto sužinoti, kiek kainuoja konsultacija ar procedūra;",
                            "atlikti visus reikalingus tyrimus vienoje vietoje, be ilgų eilių.",
                        ],
                    },
                    {
                        text: "Moderni aparatūra akių ligų diagnostikai užtikrina tikslų įvertinimą ir efektyvų gydymo planą.",
                    },
                ],
            },
            ru: {
                question: "Почему пациенты выбирают именно нашу клинику?",
                answer: [
                    {
                        gap: true,
                        text: "Пациенты ценят сочетание профессионализма, современного оснащения и внимательного отношения.",
                    },
                    {
                        text: "В глазной клинике в Вильнюсе вы получаете:",
                    },
                    {
                        list: true,
                        gap: true,
                        text: [
                            "удобную онлайн-запись;",
                            "возможность выбрать врача;",
                            "прозрачную информацию о стоимости консультаций и процедур;",
                            "полный цикл диагностики и лечения в одном месте, без длительных очередей.",
                        ],
                    },
                    {
                        text: "Наличие современного диагностического оборудования позволяет добиваться высокой точности обследования и эффективности лечения.",
                    },
                ],
            },
            en: {
                question: "Why do patients choose this clinic?",
                answer: [
                    {
                        gap: true,
                        text: "Patients appreciate the combination of medical expertise, modern equipment and attentive care.",
                    },
                    {
                        text: "At our eye clinic in Vilnius you benefit from:",
                    },
                    {
                        list: true,
                        gap: true,
                        text: [
                            "convenient online booking;",
                            "the possibility to choose your doctor;",
                            "clear information about consultation and treatment prices;",
                            "all essential diagnostics and treatment in one place, without long waiting times.",
                        ],
                    },
                    {
                        text: "State-of-the-art diagnostic equipment allows for precise assessment and effective treatment planning.",
                    },
                ],
            },
        },
        {
            lt: {
                question: "Kaip užsiregistruoti vizitui?",
                answer: [
                    {
                        gap: true,
                        text: "Registracija pas oftalmologą yra paprasta: galite paskambinti telefonu arba užsiregistruoti internetu bet kuriuo jums patogiu metu. ",
                    },
                    {
                        text: "Vizitas į akių kliniką Vilniuje – tai ne tik gydymas, bet ir komfortas: jauki aplinka, dėmesingi darbuotojai ir pagarbus požiūris į kiekvieną pacientą.",
                    },
                ],
            },

            ru: {
                question: "Как записаться на прием?",
                answer: [
                    {
                        gap: true,
                        text: "Записаться к офтальмологу очень просто: вы можете позвонить по телефону клиники или оставить заявку на сайте в удобное для вас время. ",
                    },
                    {
                        text: "Посещение глазной клиники в Вильнюсе – это не только качественное лечение, но и комфортные условия, внимательный персонал и индивидуальный подход к каждому пациенту.",
                    },
                ],
            },
            en: {
                question: "How can I book an appointment?",
                answer: [
                    {
                        gap: true,
                        text: "Booking an appointment with an eye specialist is simple: you can call the clinic or use the online booking form on our website at any time that suits you.",
                    },
                    {
                        text: "A visit to our eye clinic in Vilnius means not only high-quality treatment, but also comfort – modern facilities, friendly staff and a truly personalised approach.",
                    },
                ],
            },
        },
        {
            lt: {
                question: "Kaip vyksta regos gydymas?",
                answer: [
                    {
                        gap: true,
                        text: "Mes taikome kompleksinį požiūrį į regos gydymą: nuo išsamios diagnostikos iki ilgalaikio stebėjimo. Naudojame modernią aparatūrą ir šiuolaikinius akių ligų gydymo metodus – tiek konservatyvius, tiek chirurginius.",
                    },
                    {
                        text: "Tai leidžia pasiekti patikimus, mediciniškai pagrįstus rezultatus ir ilgalaikį regos stabilumą.",
                    },
                ],
            },
            ru: {
                question: "Как проводится лечение зрения?",
                answer: [
                    {
                        gap: true,
                        text: "Мы практикуем комплексный подход: сначала выполняется полная диагностика, затем подбирается оптимальный метод лечения – от консервативной терапии до хирургических вмешательств и лазерных процедур.",
                    },
                    {
                        text: "Использование современного оборудования и проверенных методик обеспечивает устойчивый результат и длительное сохранение хорошего зрения.",
                    },
                ],
            },
            en: {
                question: "How is vision treated?",
                answer: [
                    {
                        gap: true,
                        text: "We follow a comprehensive approach to vision care: starting with a detailed examination, we then choose the most appropriate treatment method – from conservative therapy and eye drops to laser procedures and surgical interventions.",
                    },
                    {
                        text: "By combining clinical experience with innovative technology, we aim for stable, long-term improvements in your vision.",
                    },
                ],
            },
        },
        {
            lt: {
                question: "Kaip dažnai reikėtų tikrintis akis?",
                answer: [
                    {
                        text: "Suaugusiems žmonėms rekomenduojama profilaktiškai tikrintis akis bent kartą per 1–2 metus, net jei nėra nusiskundimų. Jei jau turite regos sutrikimų, lėtinių ligų (pvz., cukrinis diabetas) ar esate po akių operacijų, oftalmologo konsultacija gali būti reikalinga dažniau – pagal gydytojo rekomendacijas.",
                    },
                ],
            },
            ru: {
                question:
                    "Как часто нужно проходить профилактический осмотр у офтальмолога?",
                answer: [
                    {
                        text: "Взрослым людям рекомендуется проходить профилактический осмотр у офтальмолога не реже одного раза в 1–2 года, даже при отсутствии жалоб. При наличии уже выявленных нарушений зрения, хронических заболеваний или после операций частоту визитов определяет врач.",
                    },
                ],
            },
            en: {
                question: "How often should I have my eyes checked?",
                answer: [
                    {
                        text: "Adults are generally advised to have their eyes checked at least once every 1–2 years, even if they have no complaints. If you already have vision problems, chronic conditions such as diabetes, or a history of eye surgery, your ophthalmologist may recommend more frequent check-ups.",
                    },
                ],
            },
        },
        {
            lt: {
                question: "Ar reikia siuntimo iš šeimos gydytojo?",
                answer: [
                    {
                        text: "Daugeliu atvejų norint gauti oftalmologo konsultaciją mūsų klinikoje siuntimo nereikia – galite kreiptis tiesiogiai ir registruotis vizitui jums patogiu laiku. Jei reikalingos papildomos, įskaitant kompensuojamas, procedūros ar tyrimai, apie tai jus informuos gydytojas konsultacijos metu.",
                    },
                ],
            },
            ru: {
                question: "Нужно ли направление от семейного врача?",
                answer: [
                    {
                        text: "В большинстве случаев для записи на консультацию в частную офтальмологическую клинику направление не требуется – вы можете обратиться напрямую. Если для вас будут актуальны дополнительные, в том числе компенсируемые процедуры или обследования, об этом расскажет врач на приёме.",
                    },
                ],
            },
            en: {
                question: "Do I need a referral from a family doctor?",
                answer: [
                    {
                        text: "In most cases, you do not need a referral from a family doctor to see an eye specialist at our clinic – you can book an appointment directly. If additional reimbursed procedures or tests are needed, your doctor will explain this during the consultation.",
                    },
                ],
            },
        },
    ],
};
