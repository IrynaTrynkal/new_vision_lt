import { ServicesKeyType } from "./menu";

export const feedbacksPhotoList = [
    "/feedbacks/feedback1.png",
    "/feedbacks/feedback2.png",
    "/feedbacks/feedback3.png",
    "/feedbacks/feedback4.png",
    "/feedbacks/feedback5.png",
    "/feedbacks/feedback6.png",
    "/feedbacks/feedback7.png",
    "/feedbacks/feedback8.png",
];
export type FeedbackType = {
    service: ServicesKeyType;
    photo?: string;
    lt: { name: string; text: string };
    ru: { name: string; text: string };
    en: { name: string; text: string };
};

export const feedbacksList: FeedbackType[] = [
    {
        service: "lazerine-akiu-korekcija",
        photo: "/feedbacks/feedback1m.jpg",
        lt: {
            name: "Якимчук Олена",
            text: "Я, Якимчук Олена проводила в Британському офтальмологічному центрі лазерну корекцію зору. \nДуже задоволена якістю сервісу та швидкістю результату клініки. Окрема вдячність моєму лікареві Бурдею Артему Вячеславовичу, за професіоналізм, підбадьорювання під час операції та уважне ставлення. Завдяки Вашим вмілим рукам та турботі я знову можу насолоджуватись чітким зором та повноцінним життям після 20-річного носіння лінз. \nБажаю Вам міцного здоров’я, професійних успіхів та вдячних пацієнтів. \nЗ вдячністю усій команді клініки, Олена Якимчук м. Рівне.",
        },
        ru: {
            name: "Якимчук Елена",
            text: "Я, Якимчук, Елена проводила в Британском офтальмологическом центре лазерную коррекцию зрения. \nОчень довольна качеством сервиса и скоростью результата клиники. Отдельная благодарность моему врачу Бурдею Артему Вячеславовичу за профессионализм, ободрение во время операции и внимательное отношение. Благодаря Вашим умелым рукам и заботе я снова могу наслаждаться четким зрением и полноценной жизнью после 20-летнего ношения линз. \nЖелаю Вам крепкого здоровья, профессиональных успехов и благодарных пациентов. \nС благодарностью всей команде клиники, Елена Якимчук г. Ровно.",
        },
        en: {
            name: "Yakymchuk Olena",
            text: "I, Yakymchuk Olena, underwent laser vision correction at the British Ophthalmological Center. \nI am very satisfied with the quality of service and the speed of the clinic's results. Special thanks to my doctor, Artem Vyacheslavovich Burdei, for his professionalism, encouragement during the operation, and attentive attitude. Thanks to your skillful hands and care, I can once again enjoy clear vision and a full life after 20 years of wearing lenses. \nI wish you good health, professional success, and grateful patients. \nWith gratitude to the entire team of the clinic, Olena Yakymchuk, Rivne.",
        },
    },
    {
        service: "skaidraus-lesio-operacija",
        photo: "/feedbacks/feedback2m.jpg",
        lt: {
            name: "Брайченко Валерій Миколайович",
            text: "Я, Брайченко Валерій Миколайович, висловлюю велику вдячність лікарям «Британського офтальмологічного центру» за бездоганний результат оперативного втручання по заміні кришталика і повернення зору. За чуйне ставлення, професіоналізм та підтримку всього персоналу центру. Велика подяка хірургу Гавура М.О. та лікарю Петросовій О.О.",
        },
        ru: {
            name: "Брайченко Валерий Николаевич",
            text: "Я, Брайченко Валерий Николаевич, выражаю большую благодарность врачам «Британского офтальмологического центра» за безупречный результат оперативного вмешательства по замене хрусталика и возвращение зрения. За чуткое отношение, профессионализм и поддержку всего персонала центра. Огромная благодарность хирургу Гавура М.А. и врачу Петросовой О.А.",
        },
        en: {
            name: "Braichenko Valerii Mykolaiovych",
            text: "I, Braichenko Valerii Mykolaiovych, express my deep gratitude to the doctors of the «British Ophthalmology Center» for the flawless result of the lens replacement surgery and the restoration of vision. For their attentive attitude, professionalism, and support of all the staff of the center. Special thanks to surgeon Havura M.O. and doctor Petrosova O.O.",
        },
    },
    {
        service: "kataraktos-operacija",
        photo: "/feedbacks/feedback3m.jpg",
        lt: {
            name: "Бойко Віталій Арсентійович",
            text: "Хочу висловити щиру подяку Британському офтальмологічному центру та особисто хірургу Рудяк Уляні Іванівні за високопрофесійну операцію із заміни кришталика. Сама операція пройшла швидко, безболісно та на високому рівні. Окремо хочу подякувати всьому медичному персоналу клініки за доброзичливе ставлення, організованість та комфортну атмосферу. Рекомендую Британський офтальмологічний центр усім, хто потребує якісної офтальмологічної допомоги.",
        },
        ru: {
            name: "Бойко Виталий Арсентьевич",
            text: "Хочу выразить искреннюю благодарность Британскому офтальмологическому центру и лично хирургу Рудяк Ульяне Ивановне за высокопрофессиональную операцию по замене хрусталика. Сама операция прошла быстро, безболезненно и на высоком уровне. Отдельно хочу поблагодарить весь медицинский персонал клиники за доброжелательное отношение, организованность и комфортную атмосферу. Рекомендую Британский офтальмологический центр всем, кто нуждается в качественной офтальмологической помощи.",
        },
        en: {
            name: "Boiko Vitalii Arsentiiovych",
            text: "I would like to express my sincere gratitude to the British Ophthalmology Center and personally to surgeon Uliana Ivanivna Rudiak for the highly professional lens replacement surgery. The procedure itself was quick, painless, and performed at the highest level. I would also like to thank the entire medical staff of the clinic for their kindness, organization, and welcoming atmosphere. I highly recommend the British Ophthalmology Center to everyone who needs quality ophthalmological care.",
        },
    },
    {
        service: "kataraktos-operacija",
        lt: {
            name: "Вареник Валентина Дмитрівна",
            text: "В Британському офтальмологічному центру зробила операцію по видаленню катаракти, хочу сказати велике дякую всьому персоналу клініки. Спасибі за увагу, за добре відношення, супровід на всіх етапах. Всім велике дякую і бажаю найкращого у вашій роботі.",
        },
        ru: {
            name: "Вареник Валентина Дмитриевна",
            text: "В Британском офтальмологическом центре сделала операцию по удалению катаракты, хочу сказать большое спасибо всему персоналу клиники. Спасибо за внимание, доброе отношение, сопровождение на всех этапах. Всем огромное спасибо и желаю успехов в вашей работе.",
        },
        en: {
            name: "Varenyk Valentyna Dmytrivna",
            text: "I had cataract removal surgery at the British Ophthalmology Center and I want to say a big thank you to all the clinic staff. Thank you for your attention, kind attitude, and support at every stage. Many thanks to everyone and I wish you all the best in your work.",
        },
    },
    {
        service: "kataraktos-operacija",
        photo: "/feedbacks/anshakova.webp",
        lt: {
            name: "Аншакова Тетяна Михайлівна",
            text: "Висловлюю безмежну подяку за виконання операції з видалення катаракти, головного лікаря Гавура М.О. Його високий професіоналізм та людяність вразили мене до глибини душі. Зустріти такий сорт лікаря – це дуже великий успіх. Низько кланяюсь батькам Гавура М.О. за виховання такого сина. Всім знайомим і незнайомим, які потребують офтальмологічної допомоги, рекомендуватиму звертатися до «Британського офтальмологічного центру». Дякую також всьому колективу центру за високу організованість.",
        },
        ru: {
            name: "Аншакова Татьяна Михайловна",
            text: "Выражаю безграничную благодарность за проведение операции по удалению катаракты главному врачу Гавура М.А. Его высокий профессионализм и человечность поразили меня до глубины души. Встретить такого врача – это огромная удача. Низко кланяюсь родителям Гавура М.А. за воспитание такого сына. Всем знакомым и незнакомым, которые нуждаются в офтальмологической помощи, буду рекомендовать обращаться в «Британский офтальмологический центр». Также благодарю весь коллектив центра за высокую организованность.",
        },
        en: {
            name: "Anshakova Tetiana Mykhailivna",
            text: "I express my immense gratitude to the chief doctor Havura M.O. for performing the cataract removal surgery. His high professionalism and humanity impressed me deeply. Meeting such a doctor is a great fortune. I bow low to the parents of Havura M.O. for raising such a son. To all acquaintances and strangers who need ophthalmological help, I will recommend turning to the «British Ophthalmology Center». I also thank the entire team of the center for their high level of organization.",
        },
    },
    {
        service: "lazerine-akiu-korekcija",
        photo: "/feedbacks/ibragimova.webp",
        lt: {
            name: "Ібрагімова Аліна Алімівна",
            text: "Прекрасный центр, работники вежливые. Все четко и сработано. Полное сопровождение «до» и «после» операции. После коррекции совсем новая жизнь начинается. Большое спасибо «Британскому офтальмологическому центру», за хорошую и качественную работу. Прекрасний центр, працівники ввічливі. Все чітко та спрацьовано. Повний супровід «до» та «після» операції. Після корекції нове життя починається. Велике спасибі «Британському офтальмологічному центру» за гарну та якісну роботу.",
        },
        ru: {
            name: "Ибрагимова Алина Алимовна",
            text: "Прекрасный центр, работники вежливые. Всё чётко и слаженно. Полное сопровождение «до» и «после» операции. После коррекции начинается совершенно новая жизнь. Большое спасибо «Британскому офтальмологическому центру» за качественную и профессиональную работу.",
        },
        en: {
            name: "Ibrahimova Alina Alimivna",
            text: "A wonderful center, the staff are polite. Everything is clear and well-coordinated. Complete support «before» and «after» the surgery. After the correction, a completely new life begins. Many thanks to the «British Ophthalmology Center» for their good and high-quality work.",
        },
    },
    {
        service: "kataraktos-operacija",
        photo: "/feedbacks/Дворник.webp",
        lt: {
            name: "Двірник Микола Семенович",
            text: "18 листопада 2020 р. у «Британському офтальмологічному центрі» було зроблено першу операцію моїй дружині Двірник Валентині Іванівні, за заміною кришталика, видалення катаракти на правому оці. Результати були настільки успішними, що розвіяли всі страхи. Наступний крок до складнішої операції, катаракта лівого ока з початковою глаукомою. 8 грудня було зроблено другу операцію, з таким самим чудовим результатом, хоча для цього довелося докласти більше зусиль. Цього ж дня я проходив підготовку до операції на лівому оці діагнозом катаракту із ускладненнями. 15 грудня мені усунули катаракту з імплантацією ІОЛ. Менше ніж за місяць, «чарівники» центру зробили нашу родину щасливою. Всім співробітникам центру, які готували нас до операцій, велика подяка. А чудовому хірургу Олександру Борисовичу Богдановичу після такої підготовки залишалося зробити головне – високопрофесійно святу роботу хірурга. Всім, хто на сайті центру залишав відгуки про прекрасних фахівців усіх рівнів центру. Ми зробили правильний вибір. Порада тим, хто готується до операції – «Будьте оптимістами, довіртеся висококваліфікованим фахівцям, будьте доброзичливими один до одного, вірте в свій організм і Ваш мозок налаштує організм на одужання та на збереження тих результатів, які фахівці зробили, щоб Ви знову набули можливості БАЧИТИ!»",
        },
        ru: {
            name: "Двирник Николай Семёнович",
            text: "18 ноября 2020 г. в «Британском офтальмологическом центре» была проведена первая операция моей супруге Двирник Валентине Ивановне по замене хрусталика и удалению катаракты на правом глазу. Результаты были настолько успешными, что развеяли все страхи. Следующий шаг – более сложная операция, катаракта левого глаза с начальной глаукомой. 8 декабря была проведена вторая операция с таким же отличным результатом, хотя для этого потребовалось больше усилий. В этот же день я проходил подготовку к операции на левом глазу с диагнозом катаракта с осложнениями. 15 декабря мне удалили катаракту с имплантацией ИОЛ. Менее чем за месяц «волшебники» центра сделали нашу семью счастливой. Всем сотрудникам центра, которые готовили нас к операциям, огромная благодарность. А замечательному хирургу Александру Борисовичу Богдановичу после такой подготовки оставалось сделать главное – высокопрофессионально выполнить святую работу хирурга. Всем, кто на сайте центра оставлял отзывы о прекрасных специалистах всех уровней центра: мы сделали правильный выбор. Совет тем, кто готовится к операции – «Будьте оптимистами, доверьтесь высококвалифицированным специалистам, будьте доброжелательны друг к другу, верьте в свой организм, и ваш мозг настроит организм на выздоровление и сохранение тех результатов, которые сделали специалисты, чтобы вы снова обрели возможность ВИДЕТЬ!»",
        },
        en: {
            name: "Dvirnyk Mykola Semenovych",
            text: "On November 18, 2020, at the «British Ophthalmology Center», my wife, Dvirnyk Valentyna Ivanivna, underwent her first surgery — lens replacement and cataract removal on the right eye. The results were so successful that they dispelled all fears. The next step was a more complex surgery — cataract of the left eye with early glaucoma. On December 8, the second surgery was performed with the same excellent result, although it required more effort. On the same day, I was preparing for surgery on my left eye with a diagnosis of cataract with complications. On December 15, my cataract was removed with IOL implantation. In less than a month, the «magicians» of the center made our family happy. Many thanks to all the staff who prepared us for the surgeries. And to the wonderful surgeon Oleksandr Borysovych Bohdanovych, after such preparation, it remained only to do the main thing — to perform the sacred work of a surgeon with the highest professionalism. To everyone who left reviews on the center’s website about the excellent specialists of all levels — we made the right choice. My advice to those preparing for surgery: «Be optimistic, trust highly qualified specialists, be kind to each other, believe in your body, and your brain will tune your body for recovery and for preserving the results achieved by the specialists, so that you can SEE again!»",
        },
    },
    {
        service: "lazerine-akiu-korekcija",
        photo: "/feedbacks/Хоменко.webp",
        lt: {
            name: "Хоменко Анна Андріївна",
            text: "Дякую лікарям та медичному персоналу «Британського офтальмологічного центру» за здійснення найзаповітнішої мрії. Весь медичний персонал відноситься до пацієнтів з турботою та ніжністю. День операції був дуже серйозною та морально важкою подією, але завдяки підтримці лікарів, медичних сестер та адміністраторів закладу все пройшло спокійно з чистим розумом та холодними думками. Дякую тій жіночці, що тримала мою руку, коли робили лазерну корекцію, це було дуже круто, це саме те, що потрібно було тоді, в той момент, просто підтримка. Все професійно, комфортно та на вищому рівні! Ще раз велике дякую!",
        },
        ru: {
            name: "Хоменко Анна Андреевна",
            text: "Благодарю врачей и медицинский персонал «Британского офтальмологического центра» за исполнение самой заветной мечты. Весь персонал относится к пациентам с заботой и нежностью. День операции был очень серьёзным и морально тяжёлым событием, но благодаря поддержке врачей, медсестёр и администраторов всё прошло спокойно, с ясным разумом и холодными мыслями. Спасибо той женщине, которая держала меня за руку во время лазерной коррекции, это было очень круто, именно то, что нужно было в тот момент — просто поддержка. Всё профессионально, комфортно и на высшем уровне! Ещё раз огромное спасибо!",
        },
        en: {
            name: "Khomenko Anna Andriivna",
            text: "I would like to thank the doctors and medical staff of the «British Ophthalmology Center» for making my dearest dream come true. All the staff treat patients with care and tenderness. The day of surgery was a very serious and emotionally difficult event, but thanks to the support of the doctors, nurses, and administrators, everything went calmly, with a clear mind and cool thoughts. Special thanks to the lady who held my hand during the laser correction — it was really awesome, exactly what I needed at that moment, just support. Everything was professional, comfortable, and at the highest level! Once again, thank you very much!",
        },
    },
    {
        service: "lazerine-akiu-korekcija",
        photo: "/feedbacks/Дубовець.webp",
        lt: {
            name: "Дубовець Євгеній Вікторович",
            text: "Хочу висловити величезну подяку лікарям та персоналу «Британського офтальмологічного центру» за їхнє ставлення та професіоналізм. Завдяки їм я можу бачити те, що здавалося розмитим і непоказним. Тепер світ став набагато красивішим! Дякую величезне!",
        },
        ru: {
            name: "Дубовец Евгений Викторович",
            text: "Хочу выразить огромную благодарность врачам и персоналу «Британского офтальмологического центра» за их отношение и профессионализм. Благодаря им я могу видеть то, что раньше казалось размытым и невыразительным. Теперь мир стал намного красивее! Огромное спасибо!",
        },
        en: {
            name: "Dubovets Yevhenii Viktorovych",
            text: "I would like to express my immense gratitude to the doctors and staff of the «British Ophthalmology Center» for their attitude and professionalism. Thanks to them, I can now see what once seemed blurry and indistinct. The world has become so much more beautiful! Thank you very much!",
        },
    },
    {
        service: "lazerine-akiu-korekcija",
        photo: "/feedbacks/Іващенко.jpg",
        lt: {
            name: "Іващенко Надія Трохимівна",
            text: "Напередодні свята Святого Миколая, моя щира вдячність лікарю Андрію Миколайовичу за повернутий зір. Бажаю «Британському офтальмологічному центру» і надалі мати таких висококласних хірургів та доброзичливих працівників.",
        },
        ru: {
            name: "Иващенко Надежда Трофимовна",
            text: "В канун праздника Святого Николая выражаю искреннюю благодарность врачу Андрею Николаевичу за возвращённое зрение. Желаю «Британскому офтальмологическому центру» и впредь иметь таких высококлассных хирургов и доброжелательных сотрудников.",
        },
        en: {
            name: "Ivashchenko Nadiia Trokhymivna",
            text: "On the eve of St. Nicholas Day, I sincerely thank doctor Andrii Mykolaiovych for restoring my sight. I wish the «British Ophthalmology Center» to continue having such high-class surgeons and kind staff.",
        },
    },
    {
        service: "lazerine-akiu-korekcija",
        photo: "/feedbacks/Сафронова.webp",
        lt: {
            name: "Сафронова Надія Василівна",
            text: "Я, Сафронова Надія Василівна, 1951р.н. прочитала на сайті «Британського офтальмологічного центру» м. Києва, що офтальмологи беруться навіть за складні випадки лікування катаракти. У Дніпропетровську після обстеження прогнози були невтішними, і я вирішила поїхати до Києва, хоча мене не розуміли і відмовляли. Тут я зустріла людей, які теж шукали порятунку свого зору після не дуже вдалого досвіду. Операцію провели в 2 етапи, запущена катаракта не дозволяла бачити сітківку і т. д. (1.12.2020). 3.12.2020 провели імплантацію інтраокулярної лінзи, і дякувати Богу, я бачу 90%. Сьогодні, 16.12.2020 на післяопераційному огляді 2 очі – 70%. Пройдуть набряки, адаптація, і відчуття повернулося, у мене гарний зір, добрий стан. Лікар від Бога! Богданович Олександре Борисовичу! Його золоті руки – гордість офтальмології України та світу. Він запровадив свою професію у ранг мистецтва. Клініка (Британська), кафедра інституту Богомольця (як символічно), де все продумано до дрібниць. Аналізи, у нелегкий час Covida, усі норми, стандарти дезінфекції, маски, бахіли, туалет, де не потрібно нічого торкатися… Все працює від дверей, як увійшли до клініки, так Вас скрізь супроводжують (театр починається з вішалки). Тут можна залишити речі в гардеробі, в скриньці перед операцією, все спокійно, дбайливо, персонал підібраний ідеально, технологія огляду, передопераційна підготовка, чудова медсестра Тетяна, в операційній Яна уважна та професійна. Без зайвих стресів усі процедури. За величезну подяку головному лікарю. Я дуже рада, і щаслива, і вдячна, що Бог привів мене до цієї клініки. Рідко буваєш повністю задоволений будь-якою дією, що зараз відбувається в нашому житті, тому й не могла стримати слова Подяки. Та й навіщо? Ми не повинні бути скупими хоча б на слова Подяки. Величезний зв'язок у позитивному ключі передає добру подію іншим.",
        },
        ru: {
            name: "Сафронова Надежда Васильевна",
            text: "Я, Сафронова Надежда Васильевна, 1951 г.р., прочитала на сайте «Британского офтальмологического центра» г. Киева, что офтальмологи берутся даже за сложные случаи лечения катаракты. В Днепропетровске после обследования прогнозы были неутешительными, и я решила поехать в Киев, хотя меня не понимали и отговаривали. Здесь я встретила людей, которые тоже искали спасение своего зрения после неудачного опыта. Операцию провели в 2 этапа: запущенная катаракта не позволяла видеть сетчатку и т. д. (1.12.2020). 3.12.2020 провели имплантацию интраокулярной линзы, и, слава Богу, я вижу на 90%. Сегодня, 16.12.2020, на послеоперационном осмотре два глаза – 70%. Пройдут отёки, адаптация, и вернулось ощущение — у меня хороший зрение и состояние. Врач от Бога! Богданович Александр Борисович! Его золотые руки – гордость офтальмологии Украины и мира. Он возвёл свою профессию в ранг искусства. Клиника (Британская), кафедра института Богомольца (как символично), где всё продумано до мелочей. Анализы, в непростое время Covid, все нормы, стандарты дезинфекции, маски, бахилы, туалет, где не нужно ничего трогать… Всё работает от дверей: как вошли в клинику, так вас везде сопровождают (театр начинается с вешалки). Здесь можно оставить вещи в гардеробе, в ячейке перед операцией, всё спокойно, заботливо. Персонал подобран идеально: технология осмотра, предоперационная подготовка, прекрасная медсестра Татьяна, в операционной Яна внимательная и профессиональная. Все процедуры без лишнего стресса. Огромная благодарность главному врачу. Я очень рада, счастлива и благодарна, что Бог привёл меня в эту клинику. Редко бывает, что полностью удовлетворён любым действием, происходящим сейчас в нашей жизни, поэтому я не могла сдержать слова Благодарности. Да и зачем? Мы не должны быть скупыми хотя бы на слова Благодарности. Огромная связь в позитивном ключе передаёт доброе событие другим.",
        },
        en: {
            name: "Safronova Nadiia Vasylivna",
            text: "I, Safronova Nadiia Vasylivna, born in 1951, read on the website of the «British Ophthalmology Center» in Kyiv that ophthalmologists take on even complex cases of cataract treatment. In Dnipro, after examination, the prognosis was discouraging, and I decided to go to Kyiv, although people did not understand me and tried to dissuade me. Here I met people who were also seeking to save their eyesight after not very successful experiences. The surgery was performed in 2 stages: the advanced cataract did not allow the retina to be seen, etc. (1.12.2020). On 3.12.2020, intraocular lens implantation was performed, and thank God, I see 90%. Today, 16.12.2020, at the postoperative examination, both eyes – 70%. The swelling and adaptation will pass, and I feel good, with excellent vision. A doctor sent by God! Oleksandr Borysovych Bohdanovych! His golden hands are the pride of ophthalmology in Ukraine and the world. He has elevated his profession to the rank of art. The clinic (British), the department of Bohomolets Institute (so symbolic), where everything is thought out to the smallest detail. Tests, in the difficult times of Covid, all norms, disinfection standards, masks, shoe covers, a restroom where you don’t need to touch anything… Everything works from the door: as soon as you enter the clinic, you are accompanied everywhere (the theater begins with the coat check). Here you can leave things in the cloakroom, in a locker before surgery, everything is calm and careful. The staff is ideally selected: examination technology, preoperative preparation, wonderful nurse Tetiana, and attentive, professional Yana in the operating room. All procedures without unnecessary stress. Immense thanks to the chief doctor. I am very glad, happy, and grateful that God led me to this clinic. It is rare to be fully satisfied with any action happening in our lives now, so I could not hold back words of Gratitude. And why should I? We should not be stingy, at least with words of Gratitude. A huge positive connection conveys this good event to others.",
        },
    },
    {
        service: "kataraktos-operacija",
        photo: "/feedbacks/Скидина.webp",
        lt: {
            name: "Скидіна Валентина Григорівна",
            text: "«У людині має бути все чудово» А.П.Чехов. Це про медиків «Британського офтальмологічного центру». Хочу сказати добрі слова подяки людям, із якими мені довелося спілкуватися. Хірург - Богданович Олександр Борисович. Шановний Олександре Борисовичу, Ваше прізвище говорить за Вас. Ви АНГЕЛ БОГОМ присланий на землю дарувати людям світло, перемагати темряву. Ви - профі з безліччю знаків оклику, впевнений у собі, строга, добра, красива людина. За це Вас поважають, цінують, люблять Ваші пацієнти, співробітники та люди у житті яких Ви є. У Вас чудові помічники, анестезіологи: Владислав Валерійович, Максим Анатолійович, діагност – Рощин Павло Ігорович. Професійно, чітко з ніжністю у погляді виконував свою роботу. А середній медперсонал – просто бджілки. Швидко, злагоджено, професійно виконують свою роботу. Руки у них – легкі, голки – гострі. Ще стали просто рідними – Чубко Світлана Костянтинівна, Полякова Галина Іванівна, Акуленко Ірина Федорівна. У всіх цих людей величезне серце, сповнене непідробної, щирої любові до людей, професії. До пацієнтів вони ставляться, як до новонароджених діток, з теплотою, повагою, ласкою. Особливо це приємно людям мого віку. «Люди в білих халатах, низько Вам вклониться хочу»! Якого кольору не були б Ваші халати, Ви завжди будете в БІЛОМУ, тому що Ви несете людям світло, добро, надію. Ви найкращі!",
        },
        ru: {
            name: "Скидина Валентина Григорьевна",
            text: "«В человеке всё должно быть прекрасно» А.П. Чехов. Это про медиков «Британского офтальмологического центра». Хочу сказать добрые слова благодарности людям, с которыми мне довелось общаться. Хирург – Богданович Александр Борисович. Уважаемый Александр Борисович, ваша фамилия говорит сама за себя. Вы АНГЕЛ, БОГОМ посланный на землю дарить людям свет и побеждать тьму. Вы – профи с множеством восклицательных знаков, уверенный в себе, строгий, добрый, красивый человек. За это вас уважают, ценят и любят ваши пациенты, сотрудники и люди, в жизни которых вы есть. У вас замечательные помощники – анестезиологи Владислав Валерьевич, Максим Анатольевич, диагност – Рощин Павел Игоревич. Профессионально, чётко и с теплотой в глазах выполнял свою работу. А средний медперсонал – просто пчёлки. Быстро, слаженно, профессионально выполняют свою работу. У них лёгкие руки, острые иглы. Стали родными – Чубко Светлана Константиновна, Полякова Галина Ивановна, Акуленко Ирина Фёдоровна. У всех этих людей огромное сердце, наполненное искренней любовью к людям и профессии. К пациентам они относятся, как к новорождённым детям – с теплом, уважением, лаской. Особенно это приятно людям моего возраста. «Люди в белых халатах, низко вам поклониться хочу»! Какого бы цвета ни были ваши халаты, вы всегда будете в БЕЛОМ, потому что несёте людям свет, добро, надежду. Вы лучшие!",
        },
        en: {
            name: "Skidina Valentyna Hryhorivna",
            text: "«Everything in a person should be beautiful» – A.P. Chekhov. This is about the doctors of the «British Ophthalmology Center». I would like to say kind words of gratitude to the people I had the chance to communicate with. Surgeon – Oleksandr Borysovych Bohdanovych. Dear Oleksandr Borysovych, your surname speaks for itself. You are an ANGEL sent by God to bring light to people and to overcome darkness. You are a professional with countless exclamation marks, a confident, strict, kind, and beautiful person. For this, you are respected, valued, and loved by your patients, colleagues, and the people in whose lives you are present. You have wonderful assistants – anesthesiologists: Vladyslav Valeriiovych, Maksym Anatoliiovych, and diagnostician Pavlo Ihorovych Roshchyn. He performed his work professionally, clearly, and with warmth in his eyes. And the nursing staff are like bees – working quickly, harmoniously, and professionally. Their hands are light, their needles sharp. They became like family – Svitlana Kostiantynivna Chubko, Halyna Ivanivna Poliakhova, Iryna Fedorivna Akulenko. All these people have huge hearts, filled with genuine, sincere love for people and their profession. They treat patients like newborn children – with warmth, respect, and affection. This is especially precious to people of my age. «People in white coats, I want to bow low to you»! Whatever color your coats may be, you will always be in WHITE, because you bring people light, kindness, and hope. You are the best!",
        },
    },
    {
        service: "lazerine-akiu-korekcija",
        photo: "/feedbacks/Бакал.jpg",
        lt: {
            name: "Бакал Володимир Федорович",
            text: "Від щирого серця дякую лікарю Богдановичу Олександру Борисовичу та персоналу «Британського офтальмологічного центру» за професіоналізм, чуйність і відданість своїй справі. Мені було успішно проведено операцію з видалення катаракти і тепер насолоджуюся можливістю знову бачити. Ускладнена катаракта призвела до сліпоти. І лише завдяки дивовижній майстерності Олександра Борисовича він знову бачить. Зір відновився до 100%. Ще раз дякую!",
        },
        ru: {
            name: "Бакал Владимир Федорович",
            text: "От всего сердца благодарю врача Богдановича Александра Борисовича и персонал «Британского офтальмологического центра» за профессионализм, чуткость и преданность своему делу. Мне успешно провели операцию по удалению катаракты, и теперь я наслаждаюсь возможностью снова видеть. Осложнённая катаракта привела к слепоте. И только благодаря удивительному мастерству Александра Борисовича я снова вижу. Зрение восстановилось до 100%. Ещё раз спасибо!",
        },
        en: {
            name: "Bakal Volodymyr Fedorovych",
            text: "From the bottom of my heart, I thank Dr. Oleksandr Borysovych Bohdanovych and the staff of the «British Ophthalmological Center» for their professionalism, sensitivity, and dedication to their work. I successfully underwent cataract removal surgery and now enjoy the ability to see again. Complicated cataract had led to blindness. And only thanks to the remarkable skill of Dr. Oleksandr Borysovych, I can see again. My vision has been restored to 100%. Thank you once again!",
        },
    },
    {
        service: "lazerine-akiu-korekcija",
        photo: "/feedbacks/Рощина.webp",
        lt: {
            name: "Рощина Катерина Олександрівна",
            text: "Зробила лазерну корекцію зору і хочу сказати, що дуже задоволена результатом, гострота зору відновилась вже через 4 години! Я хочу подякувати лікарям «Британського офтальмологічного центру» за відновлення зору і гарне обслуговування пацієнтів. Швидко та зручно – девіз цього центру. Дякую Вам!",
        },
        ru: {
            name: "Рощина Екатерина Александровна",
            text: "Сделала лазерную коррекцию зрения и хочу сказать, что очень довольна результатом, острота зрения восстановилась уже через 4 часа! Хочу поблагодарить врачей «Британского офтальмологического центра» за восстановление зрения и отличное обслуживание пациентов. Быстро и удобно – девиз этого центра. Спасибо Вам!",
        },
        en: {
            name: "Roshchyna Kateryna Oleksandrivna",
            text: "I had laser vision correction and I want to say that I am very satisfied with the result – my visual acuity was restored within just 4 hours! I would like to thank the doctors of the «British Ophthalmological Center» for restoring my vision and providing excellent patient care. Fast and convenient – that is the motto of this center. Thank you!",
        },
    },
    {
        service: "lazerine-akiu-korekcija",
        photo: "/feedbacks/Надолинный.webp",
        lt: {
            name: "Надоліний Артем Романович",
            text: "Хочу висловити подяку «Британському офтальмологічному центру» та особливо Бурдею Артему В'ячеславовичу. Лікар провів операцію за дуже складних умов, т.я. я йому постійно заважав постійними сторонніми рухами головою, внаслідок своєї рефлексії та реакції навіть на найменші дотики до очей. Через кілька днів після операції, зір обох очах 120%. До операції було -2 на обох очах. Дуже дякую за можливість бачити чітко та добре! «Британському офтальмологічному центру» та Бурдею Артему В'ячеславовичу бажаю процвітання, благополуччя та подальших професійних успіхів.",
        },
        ru: {
            name: "Надолинный Артём Романович",
            text: "Хочу выразить благодарность «Британскому офтальмологическому центру» и особенно Бурдею Артёму Вячеславовичу. Врач провёл операцию в очень сложных условиях, так как я постоянно мешал ему непроизвольными движениями головой из-за своей рефлексии и реакции даже на малейшие прикосновения к глазам. Через несколько дней после операции зрение на обоих глазах 120%. До операции было -2 на обоих глазах. Огромное спасибо за возможность видеть чётко и хорошо! «Британскому офтальмологическому центру» и Бурдею Артёму Вячеславовичу желаю процветания, благополучия и дальнейших профессиональных успехов.",
        },
        en: {
            name: "Nadolinyi Artem Romanovych",
            text: "I would like to express my gratitude to the «British Ophthalmological Center» and especially to Dr. Artem Vyacheslavovych Burdei. The doctor performed the surgery under very difficult conditions, as I constantly interfered with involuntary head movements due to my reflexes and reaction even to the slightest touch to my eyes. A few days after the surgery, my vision in both eyes was 120%. Before the surgery, it was -2 in both eyes. Thank you very much for the opportunity to see clearly and well! I wish the «British Ophthalmological Center» and Dr. Artem Vyacheslavovych Burdei prosperity, well-being, and further professional success.",
        },
    },
    {
        service: "lazerine-akiu-korekcija",
        photo: "/feedbacks/Будурова.webp",
        lt: {
            name: "Будурова Парасковія Харлампівна",
            text: "Дякую за обслуговування, професіоналізм і за прекрасне ставлення. Лазерна корекція зору – це дуже серйозний крок для мене, професіоналізм лікарів допоміг упоратися зі страхом та невпевненістю. Чудовий «Британський офтальмологічний центр»! Дякую!",
        },
        ru: {
            name: "Будурова Парасковия Харлампиевна",
            text: "Спасибо за обслуживание, профессионализм и прекрасное отношение. Лазерная коррекция зрения – это очень серьёзный шаг для меня, профессионализм врачей помог справиться со страхом и неуверенностью. Замечательный «Британский офтальмологический центр»! Спасибо!",
        },
        en: {
            name: "Budurova Paraskoviia Kharlampivna",
            text: "Thank you for the service, professionalism, and wonderful attitude. Laser vision correction is a very serious step for me, and the professionalism of the doctors helped me overcome fear and insecurity. Wonderful «British Ophthalmology Center»! Thank you!",
        },
    },
    {
        service: "lazerine-akiu-korekcija",
        photo: "/feedbacks/Зольникова.webp",
        lt: {
            name: "Зольнікова Катерина Сергіївна",
            text: "Доброго дня, я зробила лазерну корекцію зору у «Британському офтальмологічному центрі» 15.07.2020. На момент «до» корекції - зір було -5.75 на обидва ока. Я дуже задоволена! Якість, сервіс та обслуговування на найвищому рівні. Дякую за мир без лінз та окулярів!",
        },
        ru: {
            name: "Зольникова Екатерина Сергеевна",
            text: "Добрый день, я сделала лазерную коррекцию зрения в «Британском офтальмологическом центре» 15.07.2020. На момент «до» коррекции зрение было -5.75 на оба глаза. Я очень довольна! Качество, сервис и обслуживание на высшем уровне. Спасибо за мир без линз и очков!",
        },
        en: {
            name: "Zolnikova Kateryna Serhiivna",
            text: "Good afternoon, I had laser vision correction at the «British Ophthalmology Center» on 15.07.2020. Before the correction, my vision was -5.75 in both eyes. I am very satisfied! The quality, service, and care are at the highest level. Thank you for a world without lenses and glasses!",
        },
    },
    {
        service: "lazerine-akiu-korekcija",
        photo: "/feedbacks/Коломоец.webp",
        lt: {
            name: "Коломоєць Марія Василівна",
            text: "Коригування зору вирішила робити раптово, за рекомендацією подруги. Мені дуже сподобався Британський офтальмологічний центр, оскільки тут дуже сучасно, чисто і добре все організовано. Страху перед операцією не було. Сама операція зайняла п'ять хвилин, болісні відчуття після закінчення дії наркозу тривала дві години. Хочу подякувати персоналу за чітку організовану роботу та за професіоналізм!",
        },
        ru: {
            name: "Коломоец Мария Васильевна",
            text: "Коррекцию зрения решила сделать внезапно, по рекомендации подруги. Мне очень понравился Британский офтальмологический центр, так как здесь всё очень современно, чисто и хорошо организовано. Страха перед операцией не было. Сама операция заняла пять минут, болезненные ощущения после окончания действия наркоза длились два часа. Хочу поблагодарить персонал за чёткую организованную работу и профессионализм!",
        },
        en: {
            name: "Kolomoiets Mariia Vasylivna",
            text: "I decided to have vision correction suddenly, on a friend’s recommendation. I really liked the British Ophthalmology Center because it is very modern, clean, and well organized. I had no fear before the surgery. The procedure itself took five minutes, and the painful sensations after the anesthesia wore off lasted two hours. I would like to thank the staff for their well-organized work and professionalism!",
        },
    },
    {
        service: "lazerine-akiu-korekcija",
        photo: "/feedbacks/Скирчак.webp",
        lt: {
            name: "Скирчак Тетяна Вікторівна",
            text: "Шок, діагноз відшарування сітківки правого ока. Розуміли, що операція серйозна та складна. Але ми були повністю впевнені, що краще та надійніше місце, ніж «Британський офтальмологічний центр» у Києві, знайти неможливо. Ми мали рацію. Я від щирого серця і всієї душі висловлюю величезну подяку за оперативно злагоджену роботу, чітку послідовність дій за проведену мені операцію головним лікарем Гавура М.О. та його згуртованою командою-професіоналів: лікарю-офтальмологу Богдановичу А.Б., медсестрам, анестезіологу (анестезію підібрано було грамотно). Дякуємо Вам за доброту, чуйність, моральну підтримку! Гавура М.О. – кваліфікований хірург, лікар із великої літери! Дякую за Вашу Шляхетну працю, самовіддачу! Бажаю Вам міцного здоров'я, невичерпного оптимізму, процвітання та сонячного настрою! Дякую велике всьому персоналу! Ви найкращі!",
        },
        ru: {
            name: "Скирчак Татьяна Викторовна",
            text: "Шок, диагноз – отслоение сетчатки правого глаза. Мы понимали, что операция серьёзная и сложная. Но мы были полностью уверены, что лучше и надёжнее места, чем «Британский офтальмологический центр» в Киеве, найти невозможно. Мы были правы. От всего сердца и души выражаю огромную благодарность за оперативную и слаженную работу, чёткую последовательность действий при проведении мне операции главным врачом Гавурой М.А. и его сплочённой командой профессионалов: врачу-офтальмологу Богдановичу А.Б., медсёстрам, анестезиологу (анестезия была подобрана грамотно). Спасибо Вам за доброту, чуткость, моральную поддержку! Гавура М.А. – квалифицированный хирург, врач с большой буквы! Спасибо за Ваш благородный труд, самоотдачу! Желаю Вам крепкого здоровья, неиссякаемого оптимизма, процветания и солнечного настроения! Огромное спасибо всему персоналу! Вы лучшие!",
        },
        en: {
            name: "Skyrchak Tetiana Viktorivna",
            text: "Shock, diagnosis: retinal detachment of the right eye. We understood that the surgery was serious and complex. But we were absolutely sure that there is no better and more reliable place than the «British Ophthalmology Center» in Kyiv. We were right. From the bottom of my heart and soul, I express my immense gratitude for the prompt and well-coordinated work, the clear sequence of actions during my surgery performed by Chief Doctor Havura M.O. and his dedicated team of professionals: ophthalmologist Bohdanovych A.B., nurses, and anesthesiologist (the anesthesia was selected properly). Thank you for your kindness, sensitivity, and moral support! Havura M.O. is a highly qualified surgeon, a Doctor with a capital letter! Thank you for your noble work and dedication! I wish you strong health, inexhaustible optimism, prosperity, and a sunny spirit! Many thanks to the entire staff! You are the best!",
        },
    },
    {
        service: "lazerine-akiu-korekcija",
        photo: "/feedbacks/Щербань.webp",
        lt: {
            name: "Щербань Юлія Миколаївна",
            text: "Я зробила лазерну корекцію зору у «Британському офтальмологічному центрі». Сподобалось гарне відношення всього персоналу починаючи з гардеробної закінчуючи лікарями. Зір ще не відновився повністю, але на діагностиці сказали, що слід ще почекати. Дякую за гарний сервіс!",
        },
        ru: {
            name: "Щербань Юлия Николаевна",
            text: "Я сделала лазерную коррекцию зрения в «Британском офтальмологическом центре». Понравилось хорошее отношение всего персонала, начиная с гардероба и заканчивая врачами. Зрение ещё не восстановилось полностью, но на диагностике сказали, что нужно подождать. Спасибо за хороший сервис!",
        },
        en: {
            name: "Shcherban Yuliia Mykolaivna",
            text: "I had laser vision correction at the «British Ophthalmology Center». I liked the good attitude of all the staff, from the cloakroom to the doctors. My vision has not yet fully recovered, but during the diagnostics they said I should wait a little longer. Thank you for the good service!",
        },
    },
    {
        service: "lazerine-akiu-korekcija",
        photo: "/feedbacks/Рябина.webp",
        lt: {
            name: "Рябіна Валерія Ростиславівна",
            text: "Хочу подякувати всьому персоналу «Британського офтальмологічного центру» за професіоналізм та за відмінний зір, який я тепер маю. Мені дуже приємно побувати у Вашому центрі. Я бажаю Вам подальшого процвітання та розвитку! Дякую Вам від щирого серця!",
        },
        ru: {
            name: "Рябина Валерия Ростиславовна",
            text: "Хочу поблагодарить весь персонал «Британского офтальмологического центра» за профессионализм и за отличный зрение, которое я теперь имею. Мне было очень приятно побывать в вашем центре. Желаю вам дальнейшего процветания и развития! Спасибо вам от всего сердца!",
        },
        en: {
            name: "Riabina Valeriia Rostyslavivna",
            text: "I would like to thank all the staff of the «British Ophthalmology Center» for their professionalism and for the excellent vision I now have. It was a great pleasure to visit your center. I wish you further prosperity and growth! Thank you from the bottom of my heart!",
        },
    },
    {
        service: "lazerine-akiu-korekcija",
        photo: "/feedbacks/Старовойт.webp",
        lt: {
            name: "Старовойт Олександр Володимирович",
            text: "Я дуже задоволений. Неймовірний погляд після операції у «Британському офтальмологічному центрі» на довкілля. Дуже вдячний лікарям за неймовірний зір.",
        },
        ru: {
            name: "Старовойт Александр Владимирович",
            text: "Я очень доволен. Невероятный взгляд на окружающий мир после операции в «Британском офтальмологическом центре». Очень благодарен врачам за невероятное зрение.",
        },
        en: {
            name: "Starovoit Oleksandr Volodymyrovych",
            text: "I am very satisfied. An incredible view of the world around me after surgery at the «British Ophthalmology Center». I am very grateful to the doctors for my amazing vision.",
        },
    },
];
