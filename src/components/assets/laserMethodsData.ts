export type ContentLazerSubpageType = {
    textTitle: string;
    text?: string[];
};

export type LocaleSubLazerPageType = {
    slug: string;
    title: string;
    subtitle: string;
    titleSEO: string;
    descriptionSEO: string;
    data: ContentLazerSubpageType[];
};

export type SubPageType = {
    key: string;
    image: string;
    content: {
        lt: LocaleSubLazerPageType;
        ru: LocaleSubLazerPageType;
        en: LocaleSubLazerPageType;
    };
};

export const subpageLazerData: SubPageType[] = [
    {
        key: "sportlife-lasik",
        image: "/images/lasek.png",
        content: {
            lt: {
                slug: "sportlife-lasik",
                title: "SportLine LASEK",
                subtitle:
                    "Bekompromisis sprendimas profesionaliems sportininkams",
                titleSEO:
                    "SportLine LASEK – lazerinė regos korekcija sportininkams | Regos korekcija sportuojantiems ir aktyviems žmonėms | Naujas Regėjimas",
                descriptionSEO:
                    "SportLine LASEK – lazerinė regos korekcija sportininkams | Regos korekcija sportuojantiems ir aktyviems žmonėms. ✴️ Akių ligų centras Nr. 1 Lietuvoje. ✅ Šiuolaikinė diagnostika ir veiksmingas gydymas. 👍 Laiko patikrinta reputacija",
                data: [
                    {
                        textTitle: "Maksimali judėjimo laisvė be optikos",
                        text: [
                            "Sportas ir aktyvus gyvenimo būdas reikalauja aiškaus matymo, patikimumo ir visiškos kontrolės. Akiniai gali trukdyti ir slysti, o kontaktiniai lęšiai – sausėti ir sukelti diskomfortą treniruočių metu. Net ir nedideli nepatogumai mažina susikaupimą ir trukdo siekti rezultato. Tiems, kurie nenori kompromisų, siūlomas šiuolaikiškas sprendimas – regos korekcija lazeriu taikant SportLine LASEK technologiją klinikoje „Naujas regėjimas“ (Vilnius, Lietuva).",
                        ],
                    },
                    {
                        textTitle: "Švelni korekcija – maksimalus saugumas",
                        text: [
                            "SportLine LASEK – tai patobulinta paviršinė regos korekcijos metodika, pritaikyta asmenims, patiriantiems didesnį fizinį krūvį, taip pat pacientams, kurių ragena yra plonesnė. Procedūra atliekama nesuformuojant ragenos lopelio, todėl ji laikoma ypač saugia aktyviai gyvenantiems žmonėms. Taikant šį metodą išsaugoma natūrali ragenos struktūra ir sumažinamos rizikos net patyrus smūgius, susidūrimus ar kritimus.",
                        ],
                    },
                    {
                        textTitle: "Technologija sukurta aktyviems žmonėms",
                        text: [
                            "Dėl tikslios lazerio kontrolės ir šiuolaikinės programinės įrangos korekcija modeliuojama atsižvelgiant į individualius regos parametrus. SportLine LASEK ypač tinka sportininkams, užsiimantiems kovos menais, žiemos ar vandens sportu, taip pat kitomis veiklomis, kur ypač svarbus akies mechaninis stabilumas.",
                        ],
                    },
                    {
                        textTitle: "Pasirinkimas tiems, kurie nesustoja",
                        text: [
                            "Mūsų pacientai – profesionalūs sportininkai, maratonininkai, triatlonininkai, šokėjai ir treneriai – vertina SportLine LASEK dėl patikimumo, švelnaus poveikio ir galimybės greitai sugrįžti į treniruočių ritmą. Paprastai jau po kelių dienų po procedūros galima atnaujinti lengvą fizinį aktyvumą, o po trumpo atsistatymo laikotarpio – visiškai grįžti prie įprastų krūvių.",
                            "Jeigu siekiate regos laisvės be akinių ir lęšių, neaukodami saugumo ir regos kokybės, SportLine LASEK gali tapti patikimu sprendimu. Tai optimalus pasirinkimas aktyviems žmonėms, kurie vertina rezultatą ir rūpinasi savo sveikata.",
                        ],
                    },
                    {
                        textTitle:
                            "Regos korekcija lazeriu SportLine LASEK metodu – pasirinkimas aktyviems žmonėms ir sportininkams",
                        text: [
                            "SportLine LASEK – moderni regos korekcijos technologija tiems, kurie gyvena aktyviai, reguliariai sportuoja ir siekia stabilaus rezultato. Metodika sukurta atsižvelgiant į aukštus saugumo reikalavimus, todėl yra tinkama pacientams, kuriems svarbu išlikti fiziškai aktyviems ir patirti kuo mažiau apribojimų reabilitacijos laikotarpiu.",
                            "LASEK lazerinė regos korekcija nuo tradicinių metodų skiriasi tuo, kad nesuformuojamas ragenos lopelis, kaip LASIK atveju. Vietoje to epitelio sluoksnis laikinai švelniai atskiriamas, atliekamas lazerinis poveikis ragenos paviršiui, o vėliau epitelis grąžinamas į vietą. Toks sprendimas mažina traumų riziką ir yra ypač tinkamas aktyviems žmonėms.",
                        ],
                    },
                    {
                        textTitle:
                            "Kam tinka SportLine LASEK lazerinė regos korekcija?",
                        text: [
                            "Šis metodas ypač tinkamas:",
                            "- profesionaliems ir mėgėjams sportininkams;",
                            "- jėgos ir dinamiškų profesijų atstovams;",
                            "- žmonėms, kurių kasdienybė susijusi su aktyviu judėjimu;",
                            "- pacientams, kurių ragena plona ir dėl to LASIK metodas gali būti netinkamas.",
                            "Sportininkams skirta lazerinė regos korekcija turi būti saugi, patikima ir neturėti ilgalaikių apribojimų. Būtent tai ir užtikrina SportLine technologija.",
                        ],
                    },
                    {
                        textTitle: "SportLine LASEK privalumai",
                        text: [
                            "Mažesnė rizika. Nėra ragenos lopelio, todėl sumažėja jo pasislinkimo tikimybė patyrus traumą.",
                            "Švelni technologija. LASEK veikia paviršinius ragenos sluoksnius, padėdama audiniams atsistatyti.",
                            "Tinka aktyviems. Reabilitacijos laikotarpiu dažniausiai nereikia ilgalaikių apribojimų.",
                            "Išsaugomas ragenos tvirtumas. Paviršinis poveikis padeda išlaikyti natūralų akies stabilumą, kuris svarbus sportuojant.",
                            "Didelis tikslumas. Šiuolaikinė įranga leidžia pasiekti gerą regėjimą net esant sudėtingiems refrakcijos sutrikimams.",
                        ],
                    },
                    {
                        textTitle:
                            "Ką reiškia SportLine lazerinė regos korekcija?",
                        text: [
                            "SportLine – tai ne tik pavadinimas, bet ir koncepcija, orientuota į žmones, kurie negali ilgam sustabdyti treniruočių ar aktyvios veiklos. Metodika atsižvelgia į gyvenimo būdą ir padeda sumažinti reabilitacijos laiką. Dažniausiai jau po kelių dienų pacientas gali palaipsniui grįžti prie įprasto aktyvumo, laikydamasis gydytojo rekomendacijų.",
                        ],
                    },
                    {
                        textTitle:
                            "Kodėl sportininkams dažnai rekomenduojama LASEK korekcija?",
                        text: [
                            "Mažesnė ragenos pažeidimo rizika kontaktinio sporto metu.",
                            "Galimybė pasiekti aiškų matymą be akinių ir lęšių.",
                            "Mažesnis invazyvumas ir prognozuojamas atsistatymas.",
                            "Saugumas esant dideliems krūviams, aktyviam judėjimui ir intensyvioms treniruotėms.",
                            "Sportininkams svarbu, kad regėjimas būtų patikimas kritiniu momentu. Akiniai gali rasoti ar slysti, o kontaktiniai lęšiai – sukelti diskomfortą. Lazerinė regos korekcija sportininkams padeda atsisakyti šių nepatogumų ir sumažina priklausomybę nuo optikos kasdienybėje.",
                        ],
                    },
                    {
                        textTitle: "Registracija konsultacijai",
                        text: [
                            "Jeigu gyvenate aktyviai ir svarstote apie regos korekciją lazeriu, SportLine LASEK gali būti optimalus pasirinkimas. Klinikoje „Naujas regėjimas“ (Vilnius, Lietuva) siūlome šiuolaikišką diagnostiką, patyrusius gydytojus ir individualų požiūrį kiekviename etape – nuo pirminės konsultacijos iki rezultato kontrolės.",
                            "Įvertinkite SportLine LASEK privalumus – technologiją, sukurtą aktyviems, energingiems ir tikslo siekiantiems žmonėms. Susigrąžinkite aiškų regėjimą ir toliau gyvenkite judėjime.",
                        ],
                    },
                ],
            },
            ru: {
                slug: "sportlife-lasik",
                title: "SportLine LASEK",
                titleSEO:
                    "SportLine LASEK – Лазерная коррекция для спортсменов | Коррекция зрения спортсменам и активным людям | Клиника Новое Зрение",
                descriptionSEO:
                    "SportLineLASEK – усовершенствованный метод лазерной коррекции зрения для спортсменов, военных и людей с активным образом жизни. ✴️ Центр глазных болезней № 1 в Литве. ✅ Современная диагностика и эффективное лечение. 👍 Репутация, проверенная временем",
                subtitle:
                    "Бескомпромиссное решение для профессиональных спортсменов",
                data: [
                    {
                        textTitle: "Максимальная свобода движения без оптики",
                        text: [
                            "Спорт и активный образ жизни требуют чёткого зрения, надёжности и полного контроля. Очки могут сползать, а линзы — вызывать дискомфорт во время тренировок. Даже незначительные ограничения мешают сосредоточиться на результате. Тем, кто не готов мириться с компромиссами, доступно современное решение — лазерная коррекция зрения по технологии SportLife LASEK.",
                        ],
                    },
                    {
                        textTitle: "Щадящая коррекция — максимум безопасности",
                        text: [
                            "SportLife LASEK — это усовершенствованная поверхность коррекции, специально адаптированная для людей с повышенной физической нагрузкой или тонкой роговицей. Процедура проводится без формирования роговичного лоскута, что делает её особенно безопасной при активной деятельности. Она сохраняет структуру глаза максимально естественной, минимизируя риски даже при столкновениях или падениях.",
                        ],
                    },
                    {
                        textTitle: "Технология, созданная для активных",
                        text: [
                            "Благодаря точному контролю лазера и современному программному обеспечению, процедура позволяет смоделировать коррекцию с учётом индивидуальных параметров зрения. SportLife LASEK идеально подходит для спортсменов, увлечённых единоборствами, зимними и водными видами спорта, где особенно важна механическая стабильность глаза.",
                        ],
                    },
                    {
                        textTitle: "Выбор тех, кто не останавливается",
                        text: [
                            "Наши пациенты — профессиональные атлеты, марафонцы, триатлеты, танцоры и тренеры — ценят SportLife LASEK за её надёжность, щадящее воздействие и возможность быстро вернуться к тренировкам. Уже через несколько дней после процедуры можно возобновить лёгкие физические нагрузки, а спустя короткий восстановительный период — полностью вернуться к прежнему ритму.",
                            "Если вы ищете безоптическую свободу, не жертвуя безопасностью и качеством зрения — SportLife LASEK станет вашим надёжным решением. Эта технология — оптимальный выбор для активных людей, которые ценят результат и заботятся о своём здоровье.",
                        ],
                    },
                    {
                        textTitle:
                            "Лазерная коррекция зрения методом SportLine LASEK — выбор для активных людей и спортсменов",
                        text: [
                            "Метод SportLine LASEK — это современное решение для тех, кто ведёт активный образ жизни, занимается спортом профессионально или на любительском уровне. Эта технология разработана с учётом повышенных требований к зрению и безопасности, что делает её оптимальным вариантом для пациентов, которым важны физическая активность, стабильное зрение и минимальные ограничения в реабилитационный период.",
                            "LASEK лазерная коррекция отличается от традиционных методов тем, что не формирует роговичный лоскут, как при LASIK. Вместо этого эпителий временно сдвигается, проводится лазерное воздействие на поверхность роговицы, после чего эпителиальный слой возвращается на место. Такой подход снижает риск травм и делает процедуру особенно подходящей для активных людей.",
                        ],
                    },
                    {
                        textTitle:
                            "Кому подходит лазерная коррекция SportLine LASEK?",
                        text: [
                            "Этот метод идеально подходит для:",
                            "профессиональных и любительских спортсменов;",
                            "представителей силовых профессий;",
                            "людей, чья деятельность связана с активным образом жизни;",
                            "пациентов с тонкой роговицей, для которых LASIK противопоказан.",
                            "Лазерная коррекция для спортсменов должна быть безопасной, надёжной и не ограничивать физическую активность в долгосрочной перспективе. Именно такой подход обеспечивает технология SportLine.",
                        ],
                    },
                    {
                        textTitle:
                            "Преимущества коррекции зрения методом SportLine LASEK",
                        text: [
                            "Минимум рисков. Отсутствие роговичного лоскута исключает возможность его смещения при травмах.",
                            "Щадящая технология. Коррекция LASEK воздействует только на верхние слои роговицы, обеспечивая быстрое восстановление тканей. ",
                            "Подходит для активных. Лазерная коррекция для активных людей не требует длительных ограничений после процедуры.",
                            "Прочная структура роговицы. Поверхностное воздействие сохраняет естественную прочность глаза, что особенно важно при спортивной нагрузке.",
                            "Высокая точность. Современное оборудование позволяет добиться отличного зрения даже при сложных нарушениях рефракции. ",
                        ],
                    },
                    {
                        textTitle:
                            "SportLine лазерная коррекция — что это значит? ",
                        text: [
                            "SportLine лазерная коррекция — это не просто название, а концепция, ориентированная на нужды людей, которые не могут позволить себе выпадение из тренировочного процесса надолго. Методика учитывает особенности образа жизни и снижает период реабилитации до минимума. Уже через несколько дней после процедуры пациент может постепенно возвращаться к привычной активности. ",
                        ],
                    },
                    {
                        textTitle:
                            "Почему спортсменам рекомендуют LASEK лазерную коррекцию?",
                        text: [
                            "Отсутствие риска повреждения роговицы при контакте.",
                            "Возможность восстановления отличного зрения без очков и линз.",
                            "Низкий уровень инвазивности и короткий период восстановления.",
                            "Безопасность при экстремальных нагрузках и активном движении.",
                            "Для спортсменов и активных людей важно, чтобы зрение не подвело в нужный момент. Очки могут запотевать или сползать, контактные линзы — вызывать дискомфорт. Лазерная коррекция для спортсменов устраняет эти неудобства, улучшая зрение без постоянной зависимости от оптики.",
                        ],
                    },
                    {
                        textTitle: "Запишитесь на консультацию",
                        text: [
                            "Если вы ведёте активную жизнь и рассматриваете лазерную коррекцию зрения, метод SportLine LASEK станет идеальным решением. Мы предлагаем современное оборудование, квалифицированных врачей и индивидуальный подход к каждому пациенту.",
                            "Оцените преимущества лазерной коррекции SportLine — технологии, созданной для активных, энергичных и целеустремлённых. Верните чёткое зрение и продолжайте жить в движении!",
                        ],
                    },
                ],
            },
            en: {
                slug: "sportlife-lasik",
                title: "SportLine LASEK",
                titleSEO:
                    "SportLine LASEK – Laser Vision Correction for Athletes | Vision Correction for Athletes and Active People | New Vision Clinic",
                descriptionSEO:
                    "SportLineLASEK – an advanced laser vision correction method for athletes, military personnel, and people with an active lifestyle. ✴️ The No. 1 Eye Disease Center in Lithuania. ✅ Modern diagnostics and effective treatment. 👍 A reputation proven over time",
                subtitle: "A no-compromise solution for professional athletes",
                data: [
                    {
                        textTitle:
                            "Maximum freedom of movement without optical aids",
                        text: [
                            "Sport and an active lifestyle require clear vision, reliability, and full control. Glasses may slip or interfere with motion, while contact lenses can dry out and cause discomfort during training. Even minor limitations may affect concentration and performance. For those who are not willing to accept compromises, a modern option is available—laser vision correction using the SportLine LASEK technique at the “New Vision” clinic (Vilnius, Lithuania).",
                        ],
                    },
                    {
                        textTitle: "Gentle Correction — Maximum Safety",
                        text: [
                            "SportLine LASEK is an enhanced surface ablation technique, specifically adapted for people with high physical loads and for patients with a thin cornea. The procedure is performed without creating a corneal flap, which makes it particularly safe for active individuals. It preserves the corneal structure as naturally as possible and minimizes risks even in the event of collisions or falls.",
                        ],
                    },
                    {
                        textTitle:
                            "Technology designed for an active lifestyle",
                        text: [
                            "Thanks to precise laser control and advanced software, the treatment can be planned with consideration of the patient’s individual visual parameters. SportLine LASEK is well suited for athletes involved in martial arts, winter sports, and water sports—areas where mechanical stability of the eye is especially important.",
                        ],
                    },
                    {
                        textTitle:
                            "The choice of those who keep moving forward",
                        text: [
                            "Our patients—professional athletes, marathon runners, triathletes, dancers, and coaches—value SportLine LASEK for its reliability, gentle approach, and the opportunity to return to training promptly. In many cases, light physical activity can be resumed within a few days after the procedure, and after a short recovery period, patients can return fully to their usual routine.",
                            "If you are looking for freedom from glasses and contact lenses without sacrificing safety and quality of vision, SportLine LASEK may be your reliable solution. This technology is an optimal choice for active people who value results and take care of their health.",
                        ],
                    },
                    {
                        textTitle:
                            "Laser vision correction with the SportLine LASEK method—a choice for active people and athletes",
                        text: [
                            "The SportLine LASEK method is a modern solution for those who lead an active lifestyle and practice sports at a professional or amateur level. The technique is designed to meet increased requirements for vision and safety, making it an optimal option for patients who need physical activity, stable vision, and minimal restrictions during rehabilitation.",
                            "LASEK laser correction differs from traditional methods in that it does not create a corneal flap, as in LASIK. Instead, the epithelium is gently displaced temporarily, the laser treatment is performed on the corneal surface, and the epithelial layer is then returned to its position. This approach reduces the risk of injury and makes the procedure particularly suitable for active individuals.",
                        ],
                    },
                    {
                        textTitle: "Who Is SportLine LASEK Suitable For?",
                        text: [
                            "This method is ideal for:",
                            "professional and amateur athletes;",
                            "people in physically demanding professions;",
                            "those whose daily routine involves an active lifestyle;",
                            "patients with a thin cornea for whom LASIK may be contraindicated.",
                            "Laser vision correction for athletes must be safe, reliable, and should not limit physical activity in the long term. This is precisely the approach implemented by the SportLine technique.",
                        ],
                    },
                    {
                        textTitle:
                            "Advantages of vision correction with SportLine LASEK",
                        text: [
                            "Minimal risks. The absence of a corneal flap eliminates the possibility of flap displacement in the event of trauma.",
                            "Gentle technique. LASEK affects only the superficial layers of the cornea, supporting tissue recovery.",
                            "Suitable for active lifestyles. Laser correction for active people generally does not require prolonged restrictions after the procedure.",
                            "Preserved corneal strength. Surface treatment maintains the natural strength of the cornea, which is particularly important under sports-related loads.",
                            "High precision. Modern equipment makes it possible to achieve excellent vision even in complex refractive errors.",
                        ],
                    },
                    {
                        textTitle:
                            "SportLine laser correction—what does it mean?",
                        text: [
                            "SportLine laser correction is not merely a name; it is a concept focused on the needs of people who cannot afford a long interruption in training. The method takes lifestyle factors into account and minimizes rehabilitation time. In many cases, patients can gradually return to their usual activities within a few days after the procedure.",
                        ],
                    },
                    {
                        textTitle:
                            "Why is LASEK laser correction often recommended for athletes?",
                        text: [
                            "No risk of corneal flap damage in contact sports.",
                            "The ability to restore excellent vision without glasses and contact lenses.",
                            "Low invasiveness and a short recovery period.",
                            "Safety during extreme loads and intensive movement.",
                            "For athletes and active individuals, it is essential that vision remains reliable at the critical moment. Glasses can fog up or slip, and contact lenses may cause discomfort. Laser correction for athletes eliminates these inconveniences, improving vision without continuous dependence on optical aids.",
                        ],
                    },
                    {
                        textTitle: "Book a Consultation",
                        text: [
                            "If you lead an active lifestyle and are considering laser vision correction, SportLine LASEK may be an ideal solution. We offer modern equipment, qualified doctors, and an individualized approach for every patient at the “New Vision” clinic (Vilnius, Lithuania).",
                            "Discover the advantages of SportLine LASEK—a technology created for active, energetic, and goal-oriented people. Restore clear vision and keep moving forward.",
                        ],
                    },
                ],
            },
        },
    },
    {
        key: "iq-lasik-oxygen-3d",
        image: "/images/eagle.jpg",
        content: {
            lt: {
                slug: "iq-lasik-oxygen-3d",
                title: "IQ-LASIK Oxygen 3D",
                subtitle:
                    "regėjimo korekcija nepadidinant ragenos audinių temperatūros",
                titleSEO:
                    "Šaltoji lazerinė regos korekcija iQ-LASIK Oxygen 3D | Švelni lazerinė regos korekcija | Naujas Regėjimas ",
                descriptionSEO:
                    "Šaltoji lazerinė regos korekcija iQ-LASIK Oxygen 3D | Švelni lazerinė regos korekcija ✴️ Akių ligų centras Nr. 1 Lietuvoje. ✅ Šiuolaikinė diagnostika ir veiksmingas gydymas. 👍 Laiko patikrinta reputacija",
                data: [
                    {
                        textTitle:
                            "Tiems, kurie renkasi aukštą kokybę be kompromisų",
                        text: [
                            "„iQ-LASIK Oxygen 3D“ metodika – tai šiuolaikinis ir saugus regėjimo korekcijos būdas taikant refrakcinį lazerį. Ši technologija, sukurta remiantis klinikine patirtimi ir pažangiais technologiniais sprendimais, padėjo tūkstančiams pacientų pagerinti regėjimą ir sumažinti priklausomybę nuo akinių ar kontaktinių lęšių.",
                            "Kasmet visame pasaulyje atliekama milijonai regėjimo korekcijos lazeriu procedūrų, o „iQ-LASIK Oxygen 3D“ išsiskiria ypatingu tikslumu ir padidintais saugos standartais. Technologija leidžia per trumpą laiką pasiekti ryškų rezultatą – pacientai pradeda matyti aiškiai ir kontrastingai be optinių pagalbos priemonių.",
                        ],
                    },
                    {
                        textTitle:
                            "Unikali technologija, apsauganti rageną nuo perkaitinimo",
                        text: [
                            "Vienas svarbiausių šios metodikos privalumų – korekcija atliekama nepadidinant ragenos audinių temperatūros. Tai vadinamoji šaltojo lazerio procedūra, kurią užtikrina itin tiksli įranga ir individuali energijos dozavimo schema (personalizuota nomograma). Toks požiūris padeda sumažinti šiluminę audinių apkrovą ir išsaugoti jų savybes.",
                            "Atliekant procedūrą naudojami apsauginiai komponentai, mažinantys laisvųjų radikalų poveikį. Tai prisideda prie kokybiškesnės regos reabilitacijos pooperaciniu laikotarpiu ir padeda sumažinti nepageidaujamų reakcijų tikimybę.",
                            "„iQ-LASIK Oxygen 3D“ – tinkamas pasirinkimas tiems, kurie vertina tikslumą, komfortą ir rezultatą be kompromisų.",
                        ],
                    },
                    {
                        textTitle:
                            "regėjimo korekcija Lazeriu „iQ-LASIK Oxygen 3D“ – šiuolaikinis sprendimas be kompromisų",
                        text: [
                            "„iQ-LASIK Oxygen 3D“ metodas – tai inovatyvi refrakcinės chirurgijos technologija, sujungianti tikslumą, saugumą ir itin švelnų poveikį akiai. Ši „šaltojo lazerio“ korekcija sukurta tam, kad regėjimas būtų atkuriamas maksimaliai tausojančiai – išvengiant ragenos perkaitinimo ir išlaikant jos struktūrą. Dėl to procedūra yra komfortiška, prognozuojama ir efektyvi.",
                            "Jeigu jau seniai planavote atsisakyti akinių ar kontaktinių lęšių, LASIK regėjimo korekcija, taikant „iQ-LASIK Oxygen 3D“ technologiją, gali būti vienas optimaliausių sprendimų. Metodas paremtas „šaltojo lazerio“ poveikiu ir individualia nomograma, leidžiančia tiksliai apskaičiuoti korekcijos parametrus. Kartu su apsauginiu protektoriniu tirpalu sustiprinamas saugos profilis ir padedama pasiekti stabilių rezultatų.",
                        ],
                    },
                    {
                        textTitle: "„iQ-LASIK Oxygen 3D“ metodo privalumai",
                        text: [
                            "Tausojantis poveikis. Tai švelni regėjimo korekcija lazeriu, per kurią audiniai neperkaista, todėl mažėja rizikų ir spartėja atsistatymas.",
                            "„Šaltojo lazerio“ korekcija. Specialus algoritmas neleidžia didėti ragenos temperatūrai – tai svarbu išsaugant jos biomechanines savybes.",
                            "Didelis tikslumas. „iQ-LASIK Oxygen 3D“ užtikrina tikslią centraciją ir stabilų rezultatą, įskaitant sudėtingesnius refrakcijos sutrikimų atvejus.",
                            "Paciento komfortas. Procedūra atliekama taikant vietinę (lašelinę) nejautrą ir trunka tik kelias minutes – be skausmo ir ilgo reabilitacijos laikotarpio.",
                            "Individualus sprendimas. Personalizuoti skaičiavimai leidžia pritaikyti korekciją atsižvelgiant į kiekvieno paciento anatomines ypatybes.",
                        ],
                    },
                    {
                        textTitle:
                            "Kas yra „3D LASIK“ ir kuo jis skiriasi nuo kitų?",
                        text: [
                            "3D LASIK – tai patobulintas LASIK formatas, kai kontrolė ir modeliavimas atliekami trimatėje erdvėje. „iQ-LASIK Oxygen 3D“ sistemoje fiksuojami mikrojudesiai ir lazerio poveikis koreguojami realiu laiku, todėl padidėja procedūros atlikimo tikslumas.",
                            "Ši technologija leidžia pasiekti vadinamąjį „Super LASIK“ efektą, kai regėjimas tampa ne tik normalus, bet maksimaliai ryškus. Daugelis pacientų pastebi, kad po procedūros mato geriau nei su akiniais ar kontaktiniais lęšiais iki operacijos.",
                        ],
                    },
                    {
                        textTitle: "„Femto LASIK“ ir saugumas",
                        text: [
                            "„Femto LASIK“ metodas leidžia suformuoti ragenos lopelį nekontaktiniu būdu – femtosekundiniu lazeriu. „iQ-LASIK Oxygen 3D“ integruoja šį etapą į bendrą protokolą, didindamas procedūros etapų tikslumą ir bendrą saugos lygį.",
                        ],
                    },
                    {
                        textTitle:
                            "Kam tinka „iQ-LASIK Oxygen 3D“ lazerinė korekcija?",
                        text: [
                            "Šis metodas rekomenduojamas pacientams, turintiems:",
                            "- trumparegystę;",
                            "- toliaregystę;",
                            "- astigmatizmą;",
                            "- plonesnę rageną (jei nėra kontraindikacijų).",
                            "Taip pat tai tinkamas pasirinkimas tiems, kurie ieško švelnesnės regėjimo korekcijos, nerimauja dėl ragenos perkaitinimo arba anksčiau abejojo LASIK galimybe taikyti standartinius kriterijus.",
                        ],
                    },
                    {
                        textTitle: "Kodėl pacientai renkasi mus?",
                        text: [
                            "Akių klinikoje „Naujas regėjimas“ Vilniuje galite atlikti LASIK regėjimo korekciją lazeriu, kuriai taikomas „iQ-LASIK Oxygen 3D“ metodas. Naudojame šiuolaikinę įrangą ir taikome personalizuotą požiūrį kiekvienam pacientui. Klinikos specialistų komanda turi reikšmingos praktinės patirties atlikdama LASIK ir kitas aukšto tikslumo regėjimo korekcijos procedūras",
                            "Naudojame tik patikrintas ir saugias technologijas.",
                            "Procedūra atliekama greitai ir komfortiškai.",
                            "Individuali nomograma padeda mažinti rizikas ir didinti rezultato prognozuojamumą.",
                            "Greitas atsistatymas – daugelis pacientų grįžta į įprastą ritmą jau kitą dieną.",
                            "Atraskite pasaulį naujoje šviesoje su „iQ-LASIK Oxygen 3D“ technologija – be skausmo, perkaitinimo ir be kompromisų. Registruokitės konsultacijai jau šiandien ir džiaukitės aiškiu regėjimu ilgus metus.",
                        ],
                    },
                ],
            },
            ru: {
                slug: "iq-lasik-oxygen-3d",
                title: "IQ-LASIK Oxygen 3D",
                titleSEO:
                    "Холодная лазерная коррекция iQ-LASIK Oxygen 3D | Щадящая лазерная коррекция зрения | Клиника Новое Зрение",
                descriptionSEO:
                    "Инновационный метод холодной лазерной коррекции зрения (iQ-LASIK Oxygen 3D): 3D-мониторинг, отсутствие термического повреждения роговицы, реабилитация за 1–2 дня. Без очков и линз! ✴️ Центр глазных болезней № 1 в Литве. ✅ Современная диагностика и эффективное лечение. 👍 Репутация, проверенная временем",
                subtitle: "коррекция без повышения температуры роговицы глаза",
                data: [
                    {
                        textTitle:
                            "Для тех, кто выбирает высокое качество без компромиссов",
                        text: [
                            "Методика iQ-LASIK Oxygen 3D — это современный и безопасный способ коррекции зрения с применением рефракционного лазера. Созданная на базе клинического опыта и технологических разработок, она помогла тысячам пациентов улучшить зрение и снизить зависимость от очков и контактных линз.",
                            "Ежегодно во всём мире выполняются миллионы процедур лазерной коррекции, и iQ-LASIK Oxygen 3D выделяется среди них высокой точностью и повышенными стандартами безопасности. Технология позволяет в короткие сроки получить выраженный результат — пациенты начинают видеть чётко и контрастно, без оптических средств.",
                        ],
                    },
                    {
                        textTitle:
                            "Уникальная технология без перегрева роговицы",
                        text: [
                            "Одной из ключевых особенностей данной методики является проведение коррекции без повышения температуры тканей роговицы. Это так называемая «холодная» лазерная процедура, которая реализуется благодаря высокоточному оборудованию и индивидуальной схеме дозирования энергии (персонализированной номограмме). Такой подход помогает снизить тепловую нагрузку на ткани и сохранить их свойства.",
                            "Во время коррекции применяются защитные компоненты, которые уменьшают влияние свободных радикалов. Это способствует более качественной визуальной реабилитации в послеоперационном периоде и помогает снизить вероятность нежелательных реакций.",
                            "iQ-LASIK Oxygen 3D — удачный выбор для тех, кто ценит точность, комфорт и результат без компромиссов.",
                        ],
                    },
                    {
                        textTitle:
                            "Лазерная коррекция зрения методом iQ-LASIK Oxygen 3D — современное решение без компромиссов",
                        text: [
                            "Метод iQ-LASIK Oxygen 3D — это инновационная технология в области рефракционной хирургии, объединяющая точность, безопасность и деликатное воздействие на глаз. Данная «холодная» лазерная коррекция разработана для максимально бережного восстановления зрения без перегрева роговицы и с сохранением её структуры. Благодаря этому процедура остаётся комфортной, предсказуемой и эффективной.",
                            "Если вы давно планировали отказаться от очков или линз, коррекция зрения ЛАСИК с применением технологии iQ-LASIK Oxygen 3D может стать одним из оптимальных решений. Метод базируется на холодном лазерном воздействии и индивидуальной номограмме, позволяющей точно рассчитывать параметры коррекции. В сочетании с защитным раствором-протектором это повышает уровень безопасности и помогает достигать стабильных результатов.",
                        ],
                    },
                    {
                        textTitle: "Преимущества метода iQ-LASIK Oxygen 3D",
                        text: [
                            "Щадящее воздействие. Это бережная лазерная коррекция зрения, при которой отсутствует перегрев тканей, что помогает снизить риски и ускорить восстановление.",
                            "Холодная лазерная коррекция. Специальный алгоритм работы исключает повышение температуры роговицы — важный фактор для сохранения её биомеханики.",
                            "Высокая точность. Метод iQ-LASIK Oxygen 3D обеспечивает точную центровку и устойчивый результат, включая случаи со сложными вариантами нарушений рефракции.",
                            "Комфорт для пациента. Процедура проводится под капельной анестезией и занимает всего несколько минут, без боли и длительного периода реабилитации.",
                            "Уникальный подход. Персональный расчёт параметров позволяет адаптировать коррекцию под анатомические особенности каждого пациента.",
                        ],
                    },
                    {
                        textTitle: "Что такое 3D LASIK и чем он отличается?",
                        text: [
                            "3D LASIK — это усовершенствованный формат ЛАСИК, где контроль и моделирование выполняются в трёхмерном режиме. В случае iQ-LASIK Oxygen 3D система отслеживает микродвижения глаза и корректирует воздействие в реальном времени, что повышает точность выполнения коррекции.",
                            "Благодаря этой технологии достигается эффект супер-LASIK — когда зрение становится не просто «нормальным», а максимально чётким. Многие пациенты отмечают, что после процедуры видят лучше, чем в очках или линзах до операции.",
                        ],
                    },
                    {
                        textTitle: "Фемто LASIK и безопасность",
                        text: [
                            "Метод фемто LASIK позволяет формировать роговичный лоскут бесконтактно — с помощью фемтосекундного лазера. iQ-LASIK Oxygen 3D интегрирует этот подход в общий протокол, повышая точность этапов и общий профиль безопасности процедуры.",
                        ],
                    },
                    {
                        textTitle:
                            "Кому подходит лазерная коррекция iQ-LASIK Oxygen 3D?",
                        text: [
                            "Этот метод показан пациентам с:",
                            "- близорукостью;",
                            "- дальнозоркостью;",
                            "- астигматизмом;",
                            "- тонкой роговицей (при отсутствии противопоказаний).",
                            "Также это подходящий вариант для тех, кто ищет более щадящую коррекцию зрения, переживает из‑за перегрева роговицы или ранее сомневался в возможности проведения ЛАСИК по стандартным критериям.",
                        ],
                    },
                    {
                        textTitle: "Почему выбирают нас?",
                        text: [
                            "В глазной клинике «Новое зрение» (Вильнюс, Литва) вы можете пройти лазерную коррекцию зрения LASIK с применением метода iQ-LASIK Oxygen 3D. Мы используем современное оборудование и персонализированный подход к каждому пациенту. Команда специалистов клиники имеет значительный практический опыт выполнения LASIK и других методов высокоточной коррекции.",
                            "Используем только проверенные безопасные технологии",
                            "Процедура проходит быстро и безболезненно",
                            "Индивидуальная номограмма помогает снизить риски и повысить предсказуемость результата",
                            "Быстрое восстановление — многие пациенты возвращаются к привычному ритму уже на следующий день",
                            "Откройте мир в новом свете с помощью технологии iQ-LASIK Oxygen 3D — без боли, перегрева и компромиссов. Запишитесь на консультацию уже сегодня и получите чёткое зрение на долгие годы.",
                        ],
                    },
                ],
            },
            en: {
                slug: "iq-lasik-oxygen-3d",
                title: "IQ-LASIK Oxygen 3D",
                titleSEO:
                    "Cold Laser Vision Correction iQ-LASIK Oxygen 3D | Gentle Laser Vision Correction | New Vision Clinic",
                descriptionSEO:
                    "Innovative cold laser vision correction method (iQ-LASIK Oxygen 3D): 3D monitoring, no thermal damage to the cornea, recovery in 1–2 days. No glasses or lenses! ✴️ The No. 1 Eye Disease Center in Lithuania. ✅ Modern diagnostics and effective treatment. 👍 A reputation proven over time",
                subtitle:
                    "vision correction without increasing corneal tissue temperature",
                data: [
                    {
                        textTitle:
                            "For those who choose uncompromising quality",
                        text: [
                            "The iQ-LASIK Oxygen 3D technique is a modern and safe method of vision correction using an excimer (refractive) laser. Developed on the basis of clinical expertise and technological advances, it has helped thousands of patients improve vision and reduce dependence on glasses and contact lenses.",
                            "Every year, millions of laser vision correction procedures are performed worldwide, and iQ-LASIK Oxygen 3D stands out for its high precision and enhanced safety standards. The technology makes it possible to achieve a noticeable result within a short time—patients begin to see clearly and with better contrast, without optical aids.",
                        ],
                    },
                    {
                        textTitle:
                            "A unique approach without corneal overheating",
                        text: [
                            "One of the key features of this technique is that correction is performed without raising the temperature of corneal tissues. It is a so‑called “cold-laser” procedure enabled by high‑precision equipment and an individualized energy‑dosing plan (a personalized nomogram). This approach helps reduce thermal stress on tissues and preserve their properties.",
                            "During the procedure, protective components are used to reduce the impact of free radicals. This supports a smoother visual recovery in the postoperative period and may help lower the likelihood of undesirable reactions.",
                            "iQ-LASIK Oxygen 3D is a strong choice for patients who value precision, comfort, and results without compromise.",
                        ],
                    },
                    {
                        textTitle:
                            "Laser vision correction with iQ-LASIK Oxygen 3D: a modern solution without compromise",
                        text: [
                            "The iQ-LASIK Oxygen 3D method is an innovative refractive surgery technology combining precision, safety, and gentle impact on the eye. This “cold-laser” correction is designed for as careful vision restoration without overheating the cornea and while preserving its structure. As a result, the procedure remains comfortable, predictable, and effective.",
                            "If you have been planning to stop wearing glasses or contact lenses, LASIK vision correction using iQ-LASIK Oxygen 3D may be one of the optimal options. The method is based on cold-laser exposure and a personalized nomogram that allows parameters to be calculated with high accuracy. Combined with a protective (protection) solution, this improves the safety profile and supports stable outcomes.",
                        ],
                    },
                    {
                        textTitle: "Benefits of iQ-LASIK Oxygen 3D",
                        text: [
                            "Gentle impact. A tissue-sparing laser vision correction approach with no overheating, helping reduce risks and speed up recovery.",
                            "Cold-laser correction. A dedicated operating algorithm prevents corneal temperature rise—an important factor for preserving corneal biomechanics.",
                            "High precision. iQ-LASIK Oxygen 3D provides accurate centration and stable outcomes, including in more complex refractive error cases.",
                            "Patient comfort. The procedure is performed under topical (drop) anesthesia and takes only a few minutes, without pain or a long rehabilitation period.",
                            "Personalized planning. Individual parameter calculation allows the correction to be adapted to each patient’s anatomy.",
                        ],
                    },
                    {
                        textTitle: "What is 3D LASIK and how is it different?",
                        text: [
                            "3D LASIK is an advanced LASIK format where control and modeling are performed in a three‑dimensional mode. With iQ-LASIK Oxygen 3D, the system tracks micro‑movements of the eye and adjusts the laser impact in real time, increasing the precision of the correction.",
                            "This technology can deliver a so‑called Super LASIK effect—when vision is not just “normal,” but as sharp. Many patients report that after the procedure they see better than they did with glasses or contact lenses before surgery.",
                        ],
                    },
                    {
                        textTitle: "Femto LASIK and Safety",
                        text: [
                            "Femto LASIK is used in modern ophthalmology centers and allows the corneal flap to be created without direct contact—using a femtosecond laser. iQ-LASIK Oxygen 3D integrates this approach into the overall protocol, improving the accuracy of each step and the overall safety profile.",
                        ],
                    },
                    {
                        textTitle: "Who is iQ-LASIK Oxygen 3D suitable for?",
                        text: [
                            "The method may be recommended for patients with:",
                            "- myopia;",
                            "- hyperopia;",
                            "- astigmatism;",
                            "- a thinner cornea (when there are no contraindications).",
                            "It is also a suitable option for those looking for a more gentle type of vision correction, concerned about corneal overheating, or who previously doubted whether LASIK would be possible under standard criteria.",
                        ],
                    },
                    {
                        textTitle: "Why choose us?",
                        text: [
                            "At the “New Vision” Eye Clinic (Vilnius, Lithuania), you can undergo LASIK laser vision correction using iQ-LASIK Oxygen 3D. We use modern equipment and a personalized approach for every patient. Our team has substantial practical experience with LASIK and other high‑precision correction methods.",
                            "We use only proven, safe technologies",
                            "The procedure is fast and comfortable",
                            "A personalized nomogram helps reduce risks and improve predictability",
                            "Fast recovery—many patients return to their normal routine the next day",
                            "Discover the world in a new light with iQ-LASIK Oxygen 3D—without pain, overheating, or compromise. Book a consultation today and enjoy clear vision for years to come.",
                        ],
                    },
                ],
            },
        },
    },
];

export const subpageCataractData: SubPageType[] = [
    {
        key: "iq-5-minutes",
        image: "/images/iq-5-minute.jpg",
        content: {
            lt: {
                slug: "iq-5-minutes",
                title: "iq-5 minutes",
                titleSEO:
                    "iQ-5 MINUTES – itin greita kataraktos operacija per 5 minutes | Naujas Regėjimas",
                descriptionSEO:
                    "Nauja kataraktos šalinimo metodika naudojant dispersinius tirpalus – per 5 minutes! Minimalus ultragarso naudojimas, reabilitacija be streso. ✴️ Akių ligų centras Nr. 1 Lietuvoje. ✅ Šiuolaikinė diagnostika ir veiksmingas gydymas. 👍 Laiko patikrinta reputacija",
                subtitle:
                    "Naujas kataraktos šalinimo metodas naudojant disperguojamuosius tirpalus",
                data: [
                    {
                        textTitle:
                            "Kataraktos šalinimas: šiuolaikinis standartas be kompromisų",
                        text: [
                            "Šiandien etaloniniu kataraktos chirurginio gydymo metodu laikoma besiūlė, minimaliai invazinė mikrochirurginė operacija, taikoma net ir esant sudėtingiems klinikiniams atvejams. Neatsiejama tokios procedūros dalis yra intraokulinio lęšio implantacija, taip pat šiuolaikinių apsauginių preparatų – viskoelastikų – naudojimas, kurie per operaciją apsaugo akies audinius.",
                            "Operacija atliekama visiškai įrengtoje operacinėje, naudojant chirurginį mikroskopą ir didelio tikslumo fakoemulsifikatorių – įrangą, užtikrinančią maksimalų tikslumą ir saugumą.",
                            "Pacientą prižiūri gydytojas anesteziologas, kuris nepertraukiamai stebi jo sveikatos būklę, naudodamas naujausios kartos monitoravimo įrangą, ir, prireikus, būna pasirengęs atlikti skubią pagalbą.",
                        ],
                    },
                    {
                        textTitle:
                            "Kuo iQ-5 MINUTES metodas skiriasi nuo standartinės kataraktos chirurgijos?",
                    },
                    {
                        textTitle: "1. Itin trumpa intervencijos trukmė",
                        text: [
                            "Procedūra trunka ne ilgiau kaip penkias minutes. Tai leidžia sumažinti poveikį akies obuoliui ir palengvinti paciento patiriamą stresą.",
                        ],
                    },
                    {
                        textTitle: "2. Minimalus ultragarso naudojimas",
                        text: [
                            "Lęšiukas pašalinimas naudojant minimalų ultragarso kiekį arba jo visiškai atsisakant, taip reikšmingai sumažinant apkrovą akies audiniams. Švelniam poveikiui pasiekti naudojami specialūs disperguojamieji tirpalai.",
                        ],
                    },
                    {
                        textTitle: "3. Tarptautinė kokybės kontrolės programa",
                        text: [
                            "Kiekviena operacija yra įrašoma: vaizdas iš mikroskopo perduodamas į saugius serverius, kur jį analizuoja nepriklausomos kokybės kontrolės specialistai bendrovės biuruose Londone ir Vilniuje. Tai užtikrina išsamų auditą: vertinami aspiracijos ir irigacijos parametrai, chirurgo darbo technika, manipuliacijų atlikimo tikslumas ir taktiniai sprendimai.",
                        ],
                    },
                    {
                        textTitle:
                            "4. Aukščiausios klasės „RAYNER“ lęšių implantacija (Jungtinė Karalystė)",
                        text: [
                            "Aukštos kokybės britiški intraokuliniai lęšiai užtikrina puikius regėjimo aštrumo rodiklius po operacijos. Dėl aukštesnės kainos jie retai naudojami valstybinėse įstaigose ir mažesnėse klinikose, todėl šis gydymo sprendimas išskiria mūsų kliniką iš kitų.",
                        ],
                    },
                    {
                        textTitle: "5. Naujos kartos operacinė",
                        text: [
                            "Procedūra atliekama visiškai kompiuterizuotoje operacinėje, atitinkančioje ES reikalavimus. Sterilumą užtikrina laminariniai oro srautai ir modernios oro valymo sistemos.",
                        ],
                    },
                    {
                        textTitle: "6. Maksimalus saugumas ir higiena",
                        text: [
                            "Taikome pažangius chirurginių instrumentų sterilizacijos metodus, taip pat naudojame vienkartines, atsižvelgiant į Europos standartus sertifikuotas medžiagas. Taip sumažiname kryžminės infekcijos riziką ir užtikriname saugų gydymą.",
                        ],
                    },
                    {
                        textTitle: "iQ-5 MINUTES",
                        text: [
                            "Tai ne tik kataraktos šalinimo operacija, bet ir aukštųjų technologijų kompleksas, sujungiantis tikslumą, greitį, saugumą ir ypač aukštą regėjimo kokybę, kurios neįmanoma pasiekti taikant standartinius metodus. Ši metodika taikoma klinikoje „Naujas regėjimas“ Vilniuje.",
                        ],
                    },
                ],
            },
            ru: {
                slug: "iq-5-minutes",
                title: "iq-5 minutes",
                titleSEO:
                    "iQ-5 MINUTES – сверхбыстрая операция по удалению катаракты за 5 минут | Клиника Новое Зрение",
                descriptionSEO:
                    "Новая методика удаления катаракты дисперсными растворами за 5 минут! Минимум ультразвука, восстановление без стресса. ✴️ Центр глазных болезней № 1 в Литве. ✅ Современная диагностика и эффективное лечение. 👍 Репутация, проверенная временем",
                subtitle:
                    "Новая методика удаления катаракты с использованием дисперсионных растворов",
                data: [
                    {
                        textTitle:
                            "Удаление катаракты: современный стандарт без компромиссов",
                        text: [
                            "Современным ориентиром в хирургическом лечении катаракты сегодня является бесшовная микроинвазивная операция, применимая в том числе при сложных клинических ситуациях. Неотъемлемая часть такого вмешательства — имплантация интраокулярной линзы, а также использование современных защитных препаратов (вискоэластиков), которые помогают бережно сохранить ткани глаза во время операции.",
                            "Операция выполняется в полностью оборудованной операционной с применением операционного микроскопа и высокоточного факоэмульсификатора — техники, обеспечивающей предельную точность манипуляций и высокий уровень безопасности.",
                            "Пациент находится под наблюдением анестезиолога, который непрерывно контролирует показатели жизнедеятельности с помощью оборудования последнего поколения, обеспечивая готовность к оперативной медицинской помощи при необходимости.",
                        ],
                    },
                    {
                        textTitle:
                            "Что отличает метод iQ-5 MINUTES от стандартной хирургии катаракты?",
                    },
                    {
                        textTitle: "1. Ультракороткое время вмешательства",
                        text: [
                            "Как отражено в названии, вся процедура занимает до пяти минут. Это позволяет сократить воздействие на структуры глаза и уменьшить стрессовую нагрузку для пациента.",
                        ],
                    },
                    {
                        textTitle: "2. Минимальное использование ультразвука",
                        text: [
                            "Удаление помутневшего хрусталика проводится с минимальным применением ультразвука либо с его максимально возможным исключением, что снижает нагрузку на ткани глаза. Для деликатного воздействия используются специальные дисперсионные растворы.",
                        ],
                    },
                    {
                        textTitle:
                            "3. Программа международного контроля качества",
                        text: [
                            "Каждая операция фиксируется: видеопоток с микроскопа передаётся на защищённые серверы, где запись анализируют специалисты независимого контроля в офисах компании в Лондоне и Вильнюсе. Такой подход обеспечивает детальный аудит: оцениваются параметры аспирации и ирригации, техника работы хирурга, корректность этапов вмешательства и принятые тактические решения.",
                        ],
                    },
                    {
                        textTitle:
                            "4. Установка премиальных линз RAYNER (Великобритания)",
                        text: [
                            "Премиальные интраокулярные линзы британского производства обеспечивают высокие показатели остроты зрения после операции и стабильное качество изображения. Их редко применяют в государственных учреждениях и небольших клиниках из-за стоимости, поэтому подобный уровень оснащения встречается нечасто.",
                        ],
                    },
                    {
                        textTitle: "5. Операционная нового поколения",
                        text: [
                            "Процедура проводится в полностью компьютеризированной операционной, соответствующей требованиям ЕС. Стерильность поддерживается за счёт ламинарных воздушных потоков и современных систем очистки воздуха.",
                        ],
                    },
                    {
                        textTitle: "6. Максимальная безопасность и гигиена",
                        text: [
                            "Мы применяем современные протоколы стерилизации хирургических инструментов и используем одноразовые материалы, сертифицированные по европейским стандартам. Это снижает риск перекрёстной инфекции и обеспечивает безопасное лечение.",
                        ],
                    },
                    {
                        textTitle: "iQ-5 MINUTES",
                        text: [
                            "Это не просто операция по удалению катаракты. Это высокотехнологичный комплекс, который объединяет точность, скорость, безопасность и прогнозируемое качество зрения. Методика доступна в клинике «Новое зрение» (Вильнюс, Литва).",
                        ],
                    },
                ],
            },
            en: {
                slug: "iq-5-minutes",
                title: "iq-5 minutes",
                titleSEO:
                    "iQ-5 MINUTES – ultra-fast cataract surgery in 5 minutes | New Vision Clinic",
                descriptionSEO:
                    "New cataract removal technique using dispersive solutions in just 5 minutes! Minimal ultrasound, stress-free recovery. ✴️ The No. 1 Eye Disease Center in Lithuania. ✅ Modern diagnostics and effective treatment. 👍 A reputation proven over time",
                subtitle:
                    "A new cataract removal technique using dispersive solutions.",
                data: [
                    {
                        textTitle:
                            "Cataract removal: a modern standard without compromise",
                        text: [
                            "Today, the benchmark approach to surgical cataract treatment is a sutureless, micro‑invasive procedure that can be applied even in complex clinical cases. An integral part of such an intervention is the implantation of an intraocular lens, as well as the use of advanced protective agents (viscoelastics) that help preserve ocular tissues during surgery.",
                            "The procedure is performed in a fully equipped operating theatre using a surgical microscope and a high‑precision phacoemulsification system—technology that ensures maximum accuracy and a high level of safety.",
                            "The patient is monitored by an anaesthesiologist who continuously supervises vital signs using the latest-generation monitoring equipment, ensuring readiness to provide urgent medical assistance if required.",
                        ],
                    },
                    {
                        textTitle:
                            "What distinguishes iQ-5 MINUTES from standard cataract surgery?",
                    },
                    {
                        textTitle: "1. Ultra-short procedure time",
                        text: [
                            "As the name suggests, the entire procedure takes no more than five minutes. This helps minimise the impact on ocular structures and reduces stress for the patient.",
                        ],
                    },
                    {
                        textTitle: "2. Minimal Use of Ultrasound",
                        text: [
                            "Removal of the clouded lens is performed with minimal ultrasound exposure, or with ultrasound avoided as far as clinically possible, thereby reducing the load on ocular tissues. Special dispersive solutions are used to ensure gentle handling.",
                        ],
                    },
                    {
                        textTitle: "3. International Quality Control Program",
                        text: [
                            "Every procedure is recorded: the microscope image stream is transmitted to secure servers, where it is analysed by independent quality-control specialists in the company’s offices in London and Vilnius. This approach enables a detailed audit: aspiration and irrigation parameters are assessed, the surgeon’s technique is reviewed, the correctness of each operative step is verified, and tactical decisions are evaluated.",
                        ],
                    },
                    {
                        textTitle:
                            "4. Implantation of Premium RAYNER Lenses (United Kingdom)",
                        text: [
                            "Premium British-made intraocular lenses deliver excellent postoperative visual acuity and stable image quality. Due to their cost, such lenses are rarely used in public institutions and smaller clinics, which is why this level of equipment is uncommon.",
                        ],
                    },
                    {
                        textTitle: "5. Next-Generation Operating Theatre",
                        text: [
                            "The procedure is carried out in a fully computerised operating theatre that meets EU requirements. Sterility is maintained through laminar airflow and advanced air purification systems.",
                        ],
                    },
                    {
                        textTitle: "6. Maximum Safety and Hygiene",
                        text: [
                            "We apply modern sterilisation protocols for surgical instruments and use single‑use materials certified to European standards. This reduces the risk of cross‑infection and supports safe treatment.",
                        ],
                    },
                    {
                        textTitle: "iQ-5 MINUTES",
                        text: [
                            "This is more than cataract removal surgery. It is a high‑technology platform that combines precision, speed, safety and predictable visual quality. The technique is available at the “New Vision” Clinic (Vilnius, Lithuania).",
                        ],
                    },
                ],
            },
        },
    },
    {
        key: "iq-life-3d",
        image: "/images/live.jpg",
        content: {
            lt: {
                slug: "iq-life-3d",
                title: "IQ-Life 3D „Vandens srauto“ programa",
                titleSEO:
                    "IQ-Life 3D „Vandens srauto“ programa | Naujas Regėjimas",
                descriptionSEO:
                    "IQ-Life 3D „Vandens srauto“ programa. ✴️ Akių ligų centras Nr. 1 Lietuvoje. ✅ Šiuolaikinė diagnostika ir veiksmingas gydymas. 👍 Laiko patikrinta reputacija",
                subtitle: "korekcija nepadidinant akies ragenos temperatūros",
                data: [
                    {
                        textTitle:
                            "„iQ-Life 3D“ „Vandens srauto“ metodas: inovacija gydant kataraktą chirurginiu būdu",
                        text: [
                            "Pacientai, besikreipiantys į akių kliniką „Naujas regėjimas“ Vilniuje, dažnai domisi pažangiu „iQ-Life 3D“ vadinamojo vandens srauto kataraktos šalinimo metodu. Ši technologija yra viena moderniausių mūsų praktikoje ir taikoma kaip kompleksinės gydymo programos dalis: nuo tikslios diagnostikos ir gydymo taktikos parinkimo iki intraokulinio lęšio implantavimo ir planinės reabilitacijos.",
                            "Katarakta – tai akies lęšiuko drumstėjimas, dėl kurio šviesa prasčiau patenka į akį ir regėjimas palaipsniui silpnėja. Su amžiumi lęšiukas tampa tankesnis, todėl jam pašalinti taikomi ypač švelnūs ir tiksliai valdomi metodai. Tokiais atvejais taikoma mikroinvazinė fakoemulsifikacija, papildyta „vandens srauto“ principu. Procedūra atitinka šiuolaikinius tarptautinius standartus: vietoje ryškaus mechaninio poveikio naudojamas kontroliuojamas skysčio srautas ir apsauginės medžiagos (viskoelastikai), padedančios delikačiai pašalinti pakitusius audinius ir išsaugoti jautrias vidines akies struktūras.",
                        ],
                    },
                    {
                        textTitle: "3D technologija: naujos kartos chirurgija",
                        text: [
                            "„iQ-Life 3D“ metodas pagrįstas stereoskopine vizualizacija ir leidžia chirurgui dirbti maksimaliai tiksliai – jis realiuoju laiku gali stebėti akies anatomiją trimatėje erdvėje. Sistemą sudaro:",
                            "- skaitmeninė 3D kamera, turinti vaizdo gylio efektą;",
                            "- darbo stotis, turinti galimybę padidinti operuojamą sritį;",
                            "- „ultra HD“ ekranas, kuriame rodoma padidinta trimatė operacijos vaizdo projekcija.",
                            "Išmanioji programinė įranga sujungia ultragarsinės emulsifikacijos įrangos darbą su 3D navigacijos sistema. Tai leidžia chirurgui nuolat stebėti esminius parametrus: akispūdį, ultragarsinės energijos intensyvumą, skysčio tūrį ir vandens srauto greitį. Tokia integracija didina procedūros saugumą ir mažina komplikacijų riziką.",
                            "Papildomas privalumas – švelnesnis apšvietimas, palyginti su įprastu darbu per operacinį mikroskopą. Procedūra suteikia daugiau komforto pacientui ir sumažina regos nuovargį chirurgui.",
                        ],
                    },
                    {
                        textTitle: "Kodėl „iQ“?",
                        text: [
                            "Pacientai neretai klausia, ką reiškia santrumpa „iQ“. Šiuo atveju kalbama ne apie intelekto koeficientą, o apie koncepciją: angl. „Ideal Quality“ – „ideali kokybė“. Šiam požiūriui svarbi kiekviena detalė: nuo chirurgo judesių tikslumo iki intraokulinio lęšio parinkimo ir galutinio rezultato – atkurtos regėjimo kokybės.",
                            "Būtent šiuolaikiniai intraokuliniai lęšiai leidžia tikėtis didelio regėjimo aštrumo po operacijos. IOL parenkami individualiai, atsižvelgiant į akies parametrus ir paciento regos poreikius, siekiant užtikrinti aiškų ir komfortišką matymą, o kai kuriais atvejais – sumažinti priklausomybę nuo akinių.",
                        ],
                    },
                    {
                        textTitle:
                            "Esame pasirengę padėti net sudėtingiausiais atvejais",
                        text: [
                            "„iQ-Life 3D“ „vandens srauto“ metodika pasižymi dideliu efektyvumu net esant pažengusiai kataraktai ir tankiam lęšiukui. Klinikoje „Naujas regėjimas“ Vilniuje imamės ir kliniškai sudėtingų atvejų, kai prireikia ypatingo tikslumo ir itin švelnios chirurginės taktikos. Technologijos, delikataus darbo principo, išplėstinės vizualinės kontrolės ir aukštos kokybės medžiagų derinys suteikia pagrindą stabiliam ir prognozuojamam rezultatui.",
                            "Jeigu tikitės ne tik tinkamai atliktos operacijos, bet išties modernaus, saugaus ir maksimaliai tausojančio kataraktos gydymo – „iQ-Life 3D“ „vandens srauto“ metodas sukurtas būtent Jums. Skirtumą pajusite.",
                        ],
                    },
                ],
            },
            ru: {
                slug: "iq-life-3d-zhivoye-zreniye",
                title: "Программа IQ-Life 3D «Водный поток»",
                titleSEO:
                    "Программа IQ-Life 3D «Водный поток» | Живое зрение в Клинике Новое Зрение",
                descriptionSEO:
                    "Удалите катаракту по методике iQ-Life 3D «водный поток» – без ультразвука, боли и осложнений. ✴️ Центр глазных болезней № 1 в Литве. ✅ Современная диагностика и эффективное лечение. 👍 Репутация, проверенная временем",
                subtitle: "коррекция без повышения температуры роговицы глаза",
                data: [
                    {
                        textTitle:
                            "Метод iQ-Life 3D «Водный поток»: инновация в хирургии катаракты",
                        text: [
                            "Пациенты, которые обращаются в офтальмологическую клинику «Новое зрение» (Вильнюс, Литва), часто интересуются современной методикой удаления катаракты — iQ-Life 3D «Водный поток». Эта технология является одной из наиболее прогрессивных в нашей практике и применяется как часть комплексной программы лечения: от точной диагностики и выбора тактики до имплантации интраокулярной линзы и плановой реабилитации.",
                            "Катаракта — это помутнение хрусталика, из-за которого свет хуже проходит в глаз и зрение постепенно снижается. С возрастом хрусталик становится более плотным, и его удаление требует особенно деликатного подхода. В таких случаях используется микроинвазивная факоэмульсификация, дополненная принципом «водного потока». Это соответствует современным международным стандартам: вместо выраженного механического воздействия применяется контролируемая подача жидкости и защитные препараты (вискоэластики), которые помогают бережно удалить изменённые ткани и сохранить внутренние структуры глаза.",
                        ],
                    },
                    {
                        textTitle: "3D-технология: хирургия нового поколения",
                        text: [
                            "Метод iQ-Life 3D опирается на стереоскопическую визуализацию и позволяет хирургу работать с максимальной точностью, видя анатомию глаза в объёмном формате и в реальном времени. Система включает:",
                            "- цифровую 3D-камеру с эффектом глубины изображения;",
                            "- рабочую станцию с возможностью увеличения зоны вмешательства;",
                            "- ultra-HD экран, на который выводится увеличенное объёмное изображение операции.",
                            "Интеллектуальное программное обеспечение синхронизирует работу оборудования для ультразвуковой эмульсификации с 3D-навигацией. Благодаря этому врач может контролировать ключевые параметры: внутриглазное давление, уровень ультразвуковой энергии, объём подаваемой жидкости и скорость потока. Такая интеграция повышает предсказуемость вмешательства и дополнительно усиливает профиль безопасности.",
                            "Отдельное преимущество — более мягкий визуальный режим без привычного яркого «микроскопического» света. Это повышает комфорт пациента и снижает зрительную нагрузку на хирурга.",
                        ],
                    },
                    {
                        textTitle: "Почему «iQ»?",
                        text: [
                            "Пациенты нередко спрашивают, что означает аббревиатура iQ. Здесь речь не про коэффициент интеллекта, а про концепцию **ideal Quality** — «идеальное качество». Подход предполагает контроль каждой детали: от точности действий во время операции до подбора интраокулярной линзы и итогового качества зрения после лечения.",
                            "Именно применение современных интраокулярных линз позволяет рассчитывать на высокую остроту зрения после операции. ИОЛ подбираются индивидуально с учётом параметров глаза и зрительных задач пациента, чтобы обеспечить чёткое и комфортное зрение и, в ряде случаев, уменьшить зависимость от очков.",
                        ],
                    },
                    {
                        textTitle:
                            "Готовы помочь даже в самых сложных ситуациях",
                        text: [
                            "Методика iQ-Life 3D «Водный поток» демонстрирует высокую эффективность даже при зрелой катаракте и плотных хрусталиках. В клинике «Новое зрение» (Вильнюс, Литва) мы берёмся за клинически сложные случаи, где требуется повышенная точность и особенно аккуратная хирургическая тактика. Сочетание технологии, щадящего принципа работы, расширенного визуального контроля и использования качественных материалов помогает добиваться стабильного результата.",
                            "Если вы хотите не просто «сделать операцию», а получить действительно современное, безопасное и максимально бережное лечение катаракты — метод iQ-Life 3D «Водный поток» создан именно для этого. Мы уверены: разница будет заметна.",
                        ],
                    },
                ],
            },
            en: {
                slug: "iq-life-3d-live-vision",
                title: "IQ-Life 3D “Water Flow” Program",
                titleSEO:
                    "iQ-Life 3D “water flow” – ultrasound-free cataract removal | Natural vision | New Vision Clinic",
                descriptionSEO:
                    "Remove cataracts using the iQ-Life 3D “water flow” method – no ultrasound, no pain, no complications. ✴️ The No. 1 Eye Disease Center in Lithuania. ✅ Modern diagnostics and effective treatment. 👍 A reputation proven over time",
                subtitle: "correction without increasing corneal temperature",
                data: [
                    {
                        textTitle:
                            "iQ-Life 3D “Water Flow” Method: An Innovation in Cataract Surgery",
                        text: [
                            "Patients who visit the “New Vision” ophthalmology clinic (Vilnius, Lithuania) often ask about the advanced cataract removal method—iQ-Life 3D “Water Flow”. This technology is among the most progressive in our practice and is implemented as part of a comprehensive treatment program: from precise diagnostics and surgical planning to intraocular lens implantation and scheduled rehabilitation.",
                            "A cataract is a clouding of the natural crystalline lens, which impairs the passage of light into the eye and leads to a gradual decline in vision. With age, the lens becomes denser, and its removal requires an especially delicate approach. In such cases, micro-incisional phacoemulsification is performed, enhanced by the “water flow” principle. This aligns with contemporary international standards: instead of pronounced mechanical impact, a precisely controlled fluid stream and protective agents (viscoelastics) are used to gently remove altered lens tissue while safeguarding vulnerable intraocular structures.",
                        ],
                    },
                    {
                        textTitle: "3D Technology: Next-Generation Surgery",
                        text: [
                            "The iQ-Life 3D method is based on stereoscopic visualization and enables the surgeon to operate with maximum precision, viewing the eye’s anatomy in a three-dimensional, real-time format. The system includes:",
                            "- a digital 3D camera with depth perception;",
                            "- a workstation with zoom and magnification functions;",
                            "- an ultra-HD display showing an enlarged, three-dimensional view of the procedure.",
                            "Intelligent software integrates the ultrasound emulsification platform with 3D navigation. This allows the surgeon to continuously monitor key parameters: intraocular pressure, ultrasound power, fluid volume, and water-flow rate. Such integration improves predictability and further strengthens the safety profile of the procedure.",
                            "An additional advantage is a more comfortable visual environment without the intense operative light typical of conventional microscopes. This increases patient comfort and reduces surgeon fatigue.",
                        ],
                    },
                    {
                        textTitle: "Why “iQ”?",
                        text: [
                            "Patients often ask what “iQ” stands for. Here, it refers not to intelligence quotient, but to the concept of **ideal Quality**. The approach emphasizes every detail: from the precision of surgical maneuvers to the selection of the intraocular lens and the final outcome—restored vision.",
                            "Thanks to modern intraocular lenses, high postoperative visual acuity can be expected. IOLs are selected individually to match ocular parameters and the patient’s visual needs, providing clear, comfortable vision and, in many cases, reducing dependence on glasses.",
                        ],
                    },
                    {
                        textTitle:
                            "Ready to Help Even in the Most Complex Situations",
                        text: [
                            "The iQ-Life 3D “Water Flow” method demonstrates high effectiveness even in advanced cataract and dense lenses. At the “New Vision” clinic (Vilnius, Lithuania), we undertake clinically complex cases where exceptional precision and a particularly gentle surgical strategy are required. Combining innovative technology, a tissue-sparing operating principle, enhanced visual control, and premium materials supports a stable and high-quality outcome.",
                            "If you are looking not merely to “have surgery,” but to receive truly modern, safe, and maximally tissue-sparing cataract care, the iQ-Life 3D “Water Flow” method is designed for you. You will notice the difference.",
                        ],
                    },
                ],
            },
        },
    },
];
