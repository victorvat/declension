const middlename = {
  suffixes: {
    female: ['на', 'кызы', 'гызы'],
    male: ['ич', 'оглы', 'улы', 'уулу'],
  },
};

const lastname = {
  exceptions: {
    androgynous: ['бова', 'регин', 'дарвин', 'пэйлин', 'грин', 'цин', 'шенгелая'],
  },
  suffixes: {
    androgynous: [
      'ан',
      'ко',
      'дзе',
      'швили',
      'ян',
      'к',
      'ер',
      'ц',
      'г',
      'йн',
      'дт',
      'ен',
      'ич',
      'о',
      'ун',
    ],
    female: ['ова', 'ая', 'ына', 'ина', 'ева', 'ска', 'ёва'],
    male: ['кий', 'ов', 'ын', 'ев', 'ин', 'ёв', 'хий', 'ний', 'ый', 'ой'],
  },
};

const firstname = {
  exceptions: {
    androgynous: [
      'анри',
      'алвард',
      'валери',
      'женя',
      'закия',
      'захария',
      'иона',
      'кири',
      'ким',
      'муса',
      'райхон',
      'саша',
      'сева',
      'ардак',
      'арман',
      'асыл',
      'баглан',
      'бакыт',
      'бахыт',
      'еркежан',
      'жанат',
      'жаркын',
      'куаныш',
      'манат',
      'мереке',
      'рауан',
      'сымбат',
      'тлеухан',
      'умит',
      'улжалгас',
      'ырыс',
      'айбала',
      'акбала',
      'ирза',
      'арши',
      'амиль',
    ],
    male: [
      'аба',
      'абиба',
      'савва',
      'лёва',
      'вова',
      '-ага',
      'агга',
      'серега',
      'алиада',
      'муктада',
      'абида',
      'алда',
      'маджуда',
      'нурлыхуда',
      'гиа',
      'элиа',
      'гарсиа',
      'вавила',
      'гавриила',
      'генка',
      'лука',
      'дима',
      'зосима',
      'тима',
      'фима',
      'фома',
      'кузьма',
      'жора',
      'миша',
      'ермила',
      'данила',
      'гаврила',
      'абдалла',
      'аталла',
      'абдилла',
      'атилла',
      'кайролла',
      'абула',
      'свитлана',
      'бена',
      'гена',
      'агелина',
      'джанна',
      'кришна',
      'степа',
      'дра',
      'назера',
      'валера',
      'эстера',
      'двойра',
      'калистра',
      'заратустра',
      'юра',
      'иса',
      'аиса',
      'халиса',
      'холиса',
      'валенса',
      'мусса',
      'ата',
      'паата',
      'алета',
      'никита',
      'мота',
      'шота',
      'фаста',
      'коста',
      'маритта',
      'малюта',
      'васюта',
      'вафа',
      'мустафа',
      'ганифа',
      'лев',
      'яков',
      'константин',
      'марсель',
      'рамиль',
      'эмиль',
      'бактыгуль',
      'даниэль',
      'игорь',
      'арминэ',
      'изя',
      'кузя',
      'гия',
      'мазия',
      'кирикия',
      'ркия',
      'еркия',
      'эркия',
      'гулия',
      'аксания',
      'закария',
      'зекерия',
      'гарсия',
      'шендля',
      'филя',
      'вилля',
      'толя',
      'коля',
      'ваня',
      'саня',
      'загиря',
      'боря',
      'цайся',
      'вася',
      'ося',
      'петя',
      'витя',
      'митя',
      'костя',
      'илья',
      'абдала',
      'абдель',
      'фидель',
      'фридель',
      'абдилла',
      'аталла',
      'абла',
      'лазарь',
      'ава',
      'вовка',
      'семён',
    ],
    female: [
      'судаба',
      'сураба',
      'любава',
      'джанлука',
      'варвара',
      'наташа',
      'зайнаб',
      'любов',
      'сольвейг',
      'шакед',
      'аннаид',
      'ингрид',
      'синди',
      'аллаберди',
      'лали',
      'натали',
      'лили',
      'нелли',
      'элли',
      'эмили',
      'амили',
      'адели',
      'гулькай',
      'алтынай',
      'гюнай',
      'гюльчитай',
      'нурангиз',
      'лиз',
      'элиз',
      'ботагоз',
      'юлдуз',
      'диляфруз',
      'габи',
      'сажи',
      'фанни',
      'мери',
      'элдари',
      'эльдари',
      'хилари',
      'хиллари',
      'аннемари',
      'розмари',
      'товсари',
      'ансари',
      'одри',
      'тери',
      'ири',
      'катя',
      'катри',
      'мэри',
      'сатаней',
      'ефтений',
      'верунчик',
      'гюзел',
      'этел',
      'рэйчел',
      'джил',
      'мерил',
      'нинелл',
      'бурул',
      'ахлам',
      'майрам',
      'махаррам',
      'мириам',
      'дилярам',
      'асем',
      'мерьем',
      'мирьем',
      'эркаим',
      'гулаим',
      'айгерим',
      'марьям',
      'мирьям',
      'эван',
      'гульжиган',
      'айдан',
      'айжан',
      'вивиан',
      'гульжиан',
      'лилиан',
      'мариан',
      'саиман',
      'джоан',
      'чулпан',
      'лоран',
      'моран',
      'гульшан',
      'аделин',
      'жаклин',
      'карин',
      'каролин',
      'каталин',
      'катрин',
      'керстин',
      'кэтрин',
      'мэрилин',
      'рузалин',
      'хелин',
      'цеткин',
      'ширин',
      'элисон',
      'дурсун',
      'кристин',
      'гульжиян',
      'марьян',
      'ренато',
      'зейнеп',
      'санабар',
      'дильбар',
      'гулизар',
      'гульзар',
      'пилар',
      'дагмар',
      'элинар',
      'нилуфар',
      'анхар',
      'гаухар',
      'естер',
      'эстер',
      'дженнифер',
      'линор',
      'элинор',
      'элеонор',
      'айнур',
      'гульнур',
      'шамсинур',
      'элнур',
      'ильсияр',
      'нигяр',
      'сигитас',
      'агнес',
      'анес',
      'долорес',
      'инес',
      'анаис',
      'таис',
      'эллис',
      'элис',
      'кларис',
      'амнерис',
      'айрис',
      'дорис',
      'беатрис',
      'грейс',
      'грэйс',
      'ботагос',
      'маргос',
      'джулианс',
      'арус',
      'диляфрус',
      'саодат',
      'зулхижат',
      'хамат',
      'патимат',
      'хатимат',
      'альжанат',
      'маймунат',
      'гульшат',
      'рут',
      'иргаш',
      'айнаш',
      'агнеш',
      'зауреш',
      'тэрбиш',
      'ануш',
      'азгануш',
      'гаруш',
      'николь',
      'адась',
      'адула',
      'ахмадула',
      'гейбадула',
      'лив',
      'ираги',
      'пегги',
      'абдурефи',
      'адерми',
      'лакшми',
      'мими',
      'наоми',
      'изабель',
      'абигейль',
      'зебо',
      'аширбу',
      'судаба',
      'айсулу',
      'айши',
      'жанет',
      'гузаль',
      'сапият',
      'зауре',
      'кармен',
      'мадлен',
      'алсу',
      'айсу',
      'амели',
      '-бану',
      'ассоль',
      'николь',
    ],
  },
  suffixes: {
    androgynous: [
      'щи', // Мытищи
      'ки', // Химки
    ],
    male: [
      'аба',
      'б',
      'ав',
      'ев',
      'ов',
      'во',
      'г',
      'д',
      'ж',
      'з',
      'би',
      'ди',
      'жи',
      'ли',
      'гани',
      'ит',
      'до',
      'айт',
      'юм',
      'дула',
      'ив',
      'ги',
      'улла',
      'улль',
      'фи',
      'аль',
      'ми',
      'бель',
      'була',
      'йль',
      'яй',
      'бо',
      'бу',
      'кр',
      'ыль',
      'ыт',
      'вва',
      'вель',
      'вни',
      'аба',
      'бала',
      'улу',
      'рза',
      'ши',
      'паша',
      'го',
      'но',
      'ет',
      'ят',
      'ре',
      'ри',
      'ай',
      'ей',
      'ий',
      'ой',
      'ый',
      'к',
      'л',
      'ам',
      'ем',
      'им',
      'ом',
      'ум',
      'ым',
      'ям',
      'ан',
      'бен',
      'вен',
      'ген',
      'ден',
      'ин',
      'сейн',
      'он',
      'ун',
      'ян',
      'ио',
      'ло',
      'ро',
      'то',
      'шо',
      'п',
      'ар',
      'др',
      'ер',
      'ир',
      'ор',
      'тр',
      'ур',
      'ыр',
      'яр',
      'ас',
      'ес',
      'ис',
      'йс',
      'кс',
      'мс',
      'ос',
      'нс',
      'рс',
      'ус',
      'юс',
      'яс',
      'ат',
      'кт',
      'нт',
      'рт',
      'ст',
      'ут',
      'ф',
      'х',
      'ш',
      'ы',
      'сь',
      'тау', // Актау, Ерейментау, Каратау, Кокшетау, Кентау
      'ен', // Жанаозен, Каскелен
      'коль', // Акколь
      'рау', // Атырау
      'обе', // Актобе, Уштобе
      'убе',
      'иль', // Есиль, Адиль
      'ево', // Булаево
      'ово', // Медведково
      'шу', // Шу,
      'ду', // Катманду
      'пуль', // Ливерпуль
      'нко', // Ливерпуль
      'су', // Аксу, Карасу
      'вль', // Ярославль
      'оль', // Ставрополь, Севастополь, Симферополь
      'ёв', // город Королёв
      'ём', // Артём
      'ец', // Елец, Череповец
      'сс', // Миасс
      'льс', // Энгельс
    ],
    female: [
      'иба',
      'люба',
      'лава',
      'ева',
      'га',
      'да',
      'еа',
      'иза',
      'иа',
      'ика',
      'нка',
      'ска',
      'ела',
      'ила',
      'илла',
      'эла',
      'има',
      'на',
      'ра',
      'са',
      'та',
      'фа',
      'еса',
      'сса',
      'гуль',
      'куль',
      'нуэль',
      'гюль',
      'нэ',
      'ая',
      'ея',
      'ия',
      'йя',
      'ля',
      'мя',
      'оя',
      'ря',
      'ся',
      'вья',
      'лья',
      'мья',
      'нья',
      'рья',
      'сья',
      'тья',
      'фья',
      'зя',
      'нша', // Тайынша
      'ха', // Шемонаиха
      'тка', // Мамлютка
      'нь', // Сарань, Тюмень
      'чь', // Сарань, Керчь
      'мь', // Сарань, Пермь
      'ерь', // Тверь
      'овка', // Покровка
      'евка', // Сергеевка
      'мба', // Эмба
      'зь', // Бизь, Грязь
      'лка',
      'сала',
      'бла',
      'арь',
      'ума',
      'пи',
      'дель',
      'не',
      'жка',
      'си',
      'ибе',
      'абе',
      'елла',
      'ие',
      'фе',
      'фя',
    ],
  },
};

const rulesGender = {
  lastname,
  firstname,
  middlename,
};

export default rulesGender;
