export enum Language {
  Ru = 'ru',
  En = 'en',
}

/**
 * @description Описание переводов для ключей локализации
 *  Использование:
 *  const { t } = useAppTranslation()
 *  t('helloWorld')
 */
const translation = {
  //Header
  siteSearchPlaceholder: {
    [Language.Ru]: 'Поиск по сайту',
    [Language.En]: 'Site search',
  },
  //Footer
  companyTitle: {
    [Language.Ru]: 'Компания',
    [Language.En]: 'Company',
  },
  corporateSales: {
    [Language.Ru]: 'Корпоративные продажи',
    [Language.En]: 'Corporate Sales',
  },
  feedback: {
    [Language.Ru]: 'Обратная связь',
    [Language.En]: 'Feedback',
  },
  vacancies: {
    [Language.Ru]: 'Вакансии',
    [Language.En]: 'Vacancies',
  },
  news: {
    [Language.Ru]: 'Новости',
    [Language.En]: 'News',
  },
  salesRules: {
    [Language.Ru]: 'Правила продаж',
    [Language.En]: 'Sales rules',
  },
  personalInformation: {
    [Language.Ru]: 'Персональная информация',
    [Language.En]: 'Personal Information',
  },
  forPartners: {
    [Language.Ru]: 'Партнерам',
    [Language.En]: 'For partners',
  },
  forBuyersTitle: {
    [Language.Ru]: 'Покупателям',
    [Language.En]: 'For buyers',
  },
  bonusProgram: {
    [Language.Ru]: 'Бонусная программа',
    [Language.En]: 'Bonus program',
  },
  giftCards: {
    [Language.Ru]: 'Подарочные карты',
    [Language.En]: 'Gift cards',
  },
  checkingInvoicePayment: {
    [Language.Ru]: 'Проверка оплаты счёта',
    [Language.En]: 'Checking invoice payment',
  },
  loans: {
    [Language.Ru]: 'Кредиты',
    [Language.En]: 'Loans',
  },
  delivery: {
    [Language.Ru]: 'Доставка',
    [Language.En]: 'Delivery',
  },
  serviceCentres: {
    [Language.Ru]: 'Сервисные центры',
    [Language.En]: 'Service centres',
  },
  equipmentStatus: {
    [Language.Ru]: 'Статус оборудования СЦ',
    [Language.En]: 'SC equipment status',
  },
  help: {
    [Language.Ru]: 'Помощь',
    [Language.En]: 'Help',
  },
  howToPlaceAnOrder: {
    [Language.Ru]: 'Как оформить заказ',
    [Language.En]: 'How to place an order',
  },
  paymentMethods: {
    [Language.Ru]: 'Способы оплаты',
    [Language.En]: 'Payment Methods',
  },
  exchangeReturnGuarantee: {
    [Language.Ru]: 'Обмен,возврат,гарантия',
    [Language.En]: 'Exchange, return, guarantee',
  },
  informationForLegalEntities: {
    [Language.Ru]: 'Информация для юр.лиц',
    [Language.En]: 'Information for legal entities',
  },
  orderStatuses: {
    [Language.Ru]: 'Статусы заказов',
    [Language.En]: 'Order statuses',
  },
  knowledgeBase: {
    [Language.Ru]: 'База знаний',
    [Language.En]: 'Knowledge base',
  },
  priceLists: {
    [Language.Ru]: 'Прайс листы',
    [Language.En]: 'Price lists',
  },
  updated: {
    [Language.Ru]: 'Обновлен ',
    [Language.En]: 'Updated ',
  },
  zipArchive: {
    [Language.Ru]: 'Zip-архив',
    [Language.En]: 'Zip-archive',
  },
  stayInTouch: {
    [Language.Ru]: 'Оставайтесь на связи ',
    [Language.En]: 'Stay in touch ',
  },
  authTitle: {
    [Language.Ru]: 'Пожалуйста авторизуйтесь',
    [Language.En]: 'Please sign in',
  },
  emailRequired: {
    [Language.Ru]: 'Необходимо заполнить поле Email',
    [Language.En]: 'Email is required',
  },
  email: {
    [Language.Ru]: 'Email',
    [Language.En]: 'Email',
  },
  password: {
    [Language.Ru]: 'Пароль',
    [Language.En]: 'Password',
  },
  rememberMe: {
    [Language.Ru]: 'Запомнить меня',
    [Language.En]: 'Remember me',
  },
  signIn: {
    [Language.Ru]: 'Войти',
    [Language.En]: 'Sign In',
  },
  signOut: {
    [Language.Ru]: 'Выйти',
    [Language.En]: 'Sign Out',
  },
  signUp: {
    [Language.Ru]: 'Зарегистрироваться',
    [Language.En]: 'Sign Up',
  },
  category: {
    [Language.Ru]: 'Категория',
    [Language.En]: 'Category',
  },
  topic: {
    [Language.Ru]: 'Тема',
    [Language.En]: 'Topic',
  },
  enterMessage: {
    [Language.Ru]: 'Введите ваше сообщение',
    [Language.En]: 'Enter your message',
  },
  send: {
    [Language.Ru]: 'Отправить',
    [Language.En]: 'Send',
  },
  dearClients: {
    [Language.Ru]: 'Уважаемые клиенты!',
    [Language.En]: 'Dear clients!',
  },
  feedbackFormTitle: {
    [Language.Ru]:
      'В целях оперативного рассмотрения ваших обращений просим максимально точно изложить суть вопроса и имеющиеся факты.',
    [Language.En]:
      'In order to promptly consider your applications, we ask you to state the essence of the issue and the available facts as accurately as possible.',
  },
  feedbackFormPreview: {
    [Language.Ru]:
      'Чтобы заполнить форму обращения пожалуйста выберите категорию вопроса.',
    [Language.En]:
      'To fill out the application form please select a question category.',
  },
  waitingManagerAnser: {
    [Language.Ru]: 'Ожидайте ответа менеджера.',
    [Language.En]: "Wait for the manager's response.",
  },
  name: {
    [Language.Ru]: 'Имя',
    [Language.En]: 'Name',
  },
  surname: {
    [Language.Ru]: 'Фамилия',
    [Language.En]: 'surname',
  },
  responceTime: {
    [Language.Ru]: 'Время ответа',
    [Language.En]: 'Responce time',
  },
  viewAnswer: {
    [Language.Ru]: 'Посмотреть ответ.',
    [Language.En]: 'View answer',
  },
  applicationDate: {
    [Language.Ru]: 'Дата обращения',
    [Language.En]: 'Date of the application',
  },
  delete: {
    [Language.Ru]: 'Удалить',
    [Language.En]: 'Delete',
  },
  noRequests: {
    [Language.Ru]: 'У вас нету обращений.',
    [Language.En]: 'You have no requests.',
  },
  formAppeal: {
    [Language.Ru]: 'Сформировать обращение',
    [Language.En]: 'Form an appeal',
  },
  listAppeals: {
    [Language.Ru]: 'Перечень обращений и ответов',
    [Language.En]: 'List of appeals and responses',
  },
  laterRequest: {
    [Language.Ru]: 'Ваш запрос будет рассмотрен позже.',
    [Language.En]: 'Your request will be reviewed later.',
  },
  estimatedResponce: {
    [Language.Ru]: 'Предполагаемое время ответа',
    [Language.En]: 'Estimated response time',
  },
  required: {
    [Language.Ru]: 'Предполагаемое время ответа',
    [Language.En]: 'Estimated response time',
  },
}

type Translation = Record<Language, string>

export default translation
