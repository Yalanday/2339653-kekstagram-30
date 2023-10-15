const DESCRIPTIONS = [
  'Безупречная красота.',
  'Бесконечная глубина, повествующая о вечности.',
  'Именно об это думал влюбдённый Шекспир.',
  'После концерта Металлики в Зимбабве.',
  'Непостижимая истина Тибетских буддистов.',
  'Прекрасно далёко, не так уж ты и жестоко...',
  'Где взял, где взял? Заработал.',
  'И я там был, мёд, пиво пил...',
  'Юра прости, мы всё проиграли!',
  'Современный натюрморт по деревенски.',
  'На это желательно не смотреть без соответствующего восприятия и угла зрения.'
];

const NAMES = [
  'Вадик',
  'Водевиль',
  'Хетфилд',
  'Курт',
  'Летов',
  'Даррел',
  'Джимми',
  'Иван Грозный',
  'Пётр 1',
  'Леопольд'
];

const MESSAGES = [
  'Моя бабушка бы сфотографировала гораздо лучше',
  'Ну что могу сказать. Для аватарки в одкоклассники сойдет',
  'Ты, наверное, на тиндере в статусе написал: Если тебе нечего мне сказать кроме "Hello World", то даже не думай мне писать?',
  'Руки-крюки! Шрайбикус из Вас никудышный!!!',
  'Хочешь научиться фотографировать, переходи по ссылке в моём профиле.',
  'Тебе не помешало бы пройти курсы на FotoAcademy.ru',
  'Щёлк, щёлк, щёлк, фоткаешь малыш...',
  'Айфон купил, а фоткать не научился.',
  'О, да Вы Пикассо в мире современного фотоискусства.',
];

const TOTAL_NUMBER_OBJECTS = 25;

const getRandomIntegrated = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.ceil(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getUniqueIdElement = (min, max) => {
  const createUniqueIdArray = [];
  return () => {
    let createUnicumCurrentId = getRandomIntegrated(min, max);
    while (createUniqueIdArray.includes(createUnicumCurrentId)) {
      createUnicumCurrentId = getRandomIntegrated(min, max);
    }
    createUniqueIdArray.push(createUnicumCurrentId);
    return createUniqueIdArray;
  };
};

const uniqueIdElements = Array.from({ length: 25 }, getUniqueIdElement(1, 25));
const uniqueIdPhotos = Array.from({ length: 25 }, getUniqueIdElement(1, 25));
const uniqueIdEUsers = Array.from({ length: 25 }, getUniqueIdElement(1, 25));

const createCardPhoto = () => ({

  id: 0,
  url: '',
  description: DESCRIPTIONS[getRandomIntegrated(0, DESCRIPTIONS.length - 1)],
  likes: getRandomIntegrated(15, 200),
  comments: {
    id: getRandomIntegrated(1, 1000),
    avatar: `img/avatar${getRandomIntegrated(1, 6)}.jpg`,
    message: MESSAGES[getRandomIntegrated(0, MESSAGES.length - 1)],
    name: NAMES[getRandomIntegrated(0, NAMES.length - 1)],
  }
});

const createArrayPhoto = Array.from({ length: TOTAL_NUMBER_OBJECTS }, createCardPhoto);
for (let i = 0; i < createArrayPhoto.length; i++) {
  createArrayPhoto[i].id = uniqueIdElements[i][i];
  createArrayPhoto[i].url = `photos/${uniqueIdPhotos[i][i]}.jpg`;
  createArrayPhoto[i].comments.id = uniqueIdEUsers[i][i];
}

