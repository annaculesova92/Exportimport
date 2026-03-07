import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ru' | 'en' | 'fr' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('it');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

const translations = {
  ru: {
    nav: {
      services: 'Услуги',
      process: 'Процесс',
      team: 'Команда',
      contact: 'Связаться с нами',
      companyName: 'Export & Import',
      companyTagline: 'Business Consulting'
    },
    hero: {
      title: 'Ваш партнер по экспорту и импорту в Италии и в мире',
      subtitle: 'Стратегическое управление экспортно-импортными операциями из Италии по всему миру',
      description: 'Вино, оливковое масло, томаты, бижутерия — специализируемся на экспорте и импорте итальянских продуктов питания и товаров класса люкс.',
      cta: 'Запросить консультацию',
      learnMore: 'Почему мы',
      trusted: 'Нам доверяют более 150 компаний'
    },
    specialization: {
      title: 'Ниши, в которых я эксперт',
      subtitle: 'Реальные товары, с которыми я работаю каждый день',
      item1: {
        title: 'Вино и оливковое масло',
        description: 'Прямые контакты с винодельнями и маслобойнями Тосканы, Венето и Сицилии. Подбор уникальных позиций для вашего рынка.'
      },
      item2: {
        title: 'Продукты питания',
        description: 'Томаты, соусы, паста, сыры и деликатесы. Полная сертификация пищевой продукции и контроль качества.'
      },
      item3: {
        title: 'Бижутерия',
        description: 'Итальянская бижутерия ручной работы от семейных мастерских. Эксклюзивные коллекции для вашего бизнеса.'
      },
      item4: {
        title: 'Товары класса люкс',
        description: 'Премиальные итальянские бренды, аксессуары и предметы интерьера. Работа с производителями напрямую.'
      }
    },
    value: {
      title: 'Почему выбирают нас',
      subtitle: 'Конкретные преимущества работы с нами',
      directContacts: {
        title: 'Прямые контакты с производителями',
        description: 'Собственная база проверенных производителей в Италии — от виноделен Тосканы до ювелирных мастерских Милана.'
      },
      certification: {
        title: 'Знание сертификации и акцизов',
        description: 'Глубокое понимание требований к сертификации пищевой продукции, акцизной политики на вино и алкоголь.'
      },
      customs: {
        title: 'Опыт работы с международной таможней',
        description: 'Многолетний опыт прохождения таможенных процедур в Италии и по всему миру, решение нестандартных ситуаций.'
      },
      personalApproach: {
        title: 'Персональное сопровождение',
        description: 'Индивидуальный подход к каждому проекту. Контроль на всех этапах — от поиска поставщика до доставки на ваш склад.'
      }
    },
    services: {
      title: 'Наши услуги',
      subtitle: 'Полный цикл консалтинга для вашего бизнеса',
      cta: 'Обсудить проект',
      consultation: {
        title: 'Экспертная консультация',
        description: 'Экспертное мнение и аудит ваших текущих поставок. Анализ цепочки, выявление рисков и точек роста.'
      },
      export: {
        title: 'Экспортный консалтинг',
        description: 'Поможем выйти на международные рынки, подберём партнёров, оформим всю документацию'
      },
      import: {
        title: 'Импортный консалтинг',
        description: 'Найдём надёжных поставщиков, организуем логистику, обеспечим качество товара'
      },
      compliance: {
        title: 'Юридическое сопровождение',
        description: 'Проверка контрагентов, договоры, таможенное оформление, соответствие законодательству'
      },
      logistics: {
        title: 'Логистические решения',
        description: 'Оптимизация доставки, управление складами, снижение издержек'
      },
      analysis: {
        title: 'Анализ рынков',
        description: 'Исследование целевых рынков, конкурентный анализ, стратегия развития'
      },
      risk: {
        title: 'Управление рисками',
        description: 'Оценка и минимизация рисков, страхование, финансовая безопасность'
      }
    },
    process: {
      title: 'Как мы работаем',
      subtitle: 'Простой и прозрачный процесс',
      step1: {
        title: 'Экспертный аудит и бриф',
        description: 'Анализируем ваш запрос, проверяем категорию товара (вино, продукты, бижутерия) на соответствие требованиям ввоза.'
      },
      step2: {
        title: 'Подбор и проверка поставщиков',
        description: 'Отбираем производителей в Италии, проверяем наличие экспортных лицензий и сертификатов качества для конкретных рынков.'
      },
      step3: {
        title: 'Контракт и Compliance',
        description: 'Составляем внешнеторговые контракты, готовим документы для таможни, решаем вопросы с акцизами (для вина) и логистикой.'
      },
      step4: {
        title: 'Поставка и сопровождение',
        description: 'Контролируем отгрузку, прохождение границы и доставку до вашего склада по всему миру.'
      },
      strategicSession: {
        title: 'Стратегическая сессия',
        description: 'Запишитесь на первичную консультацию для оценки экспортного потенциала и выявления регуляторных барьеров на целевых рынках Италии и мира.',
        whatsappTelegram: 'WhatsApp / Telegram: [Прямая ссылка]',
        email: 'Email: [Корпоративный email]',
        office: 'Офис: Милан / Верона, Италия'
      },
      security: {
        title: 'Конфиденциальность на каждом этапе',
        nda: 'NDA подписывается до начала обсуждения деталей проекта',
        encryption: 'Все данные хранятся в зашифрованных системах с SSL/TLS защитой',
        access: 'Доступ к информации ограничен только ключевыми участниками команды'
      }
    },
    stats: {
      clients: 'Довольных клиентов',
      countries: 'Стран партнёров',
      experience: 'Лет опыта',
      deals: 'Успешных сделок'
    },
    trust: {
      title: 'Гарантии безопасности',
      nda: {
        title: 'NDA с каждым клиентом',
        description: 'Соглашение о неразглашении'
      },
      encryption: {
        title: 'Шифрование данных',
        description: 'Защита информации'
      },
      compliance: {
        title: 'Compliance контроль',
        description: 'Соответствие стандартам'
      },
      insurance: {
        title: 'Страхование сделок',
        description: 'Финансовая защита'
      }
    },
    team: {
      title: 'Обо мне',
      subtitle: 'Ваш проводник на итальянский рынок',
      tagline: 'Я соединяю ваш бизнес с итальянским рынком',
      cta: 'Записаться на консультацию',
      contactMe: 'Связаться со мной',
      anna: {
        name: 'Анна',
        role: 'Эксперт по ВЭД',
        bio: 'Маркетолог-стратег и эксперт по внешнеэкономической деятельности с 12-летним опытом жизни и работы в Италии',
        experience1: '8 лет в маркетинге и 4 года в консалтинге: специализируется на построении системных продаж и стратегических воронках для B2B-сектора',
        experience2: 'Управляла проектами по выводу брендов на международные рынки, отвечая за адаптацию продукта и коммерческую стратегию',
        experience3: 'Архитектор деловых сообществ: создала экосистему для предпринимателей в Италии, обеспечивая доступ к локальному нетворку и партнёрам',
        quote: '«Моя задача — не ограничиться запуском проекта, а выстроить систему, обеспечивающую его устойчивую прибыльность на рынке»'
      },
    },
    contact: {
      title: 'Свяжитесь с нами',
      subtitle: 'Мы всегда готовы ответить на ваши вопросы и обсудить ваш проект',
      formTitle: 'Отправьте нам сообщение',
      name: 'Ваше имя',
      namePlaceholder: 'Как к вам обращаться',
      email: 'Email',
      emailPlaceholder: 'ваш@email.com',
      phone: 'Телефон',
      phonePlaceholder: '+7 (___) ___-__-__',
      company: 'Компания',
      companyPlaceholder: 'Название компании (необязательно)',
      message: 'Сообщение',
      messagePlaceholder: 'Расскажите о вашем проекте...',
      submit: 'Отправить сообщение',
      sending: 'Отправка...',
      sent: 'Отправлено',
      privacyNote: 'Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности',
      location: 'Расположение',
      address: 'Верона, Италия',
      hours: 'Часы работы',
      workingHours: 'Пн-Пт: 9:00 - 18:00',
      socialTitle: 'Следите за нами',
      socialSubtitle: 'Присоединяйтесь к нашим социальным сетям для получения актуальных новостей',
      available: 'Онлайн',
      secure: 'Безопасно'
    },
    footer: {
      company: 'О компании',
      companyDescription: 'Эксперт по ВЭД. Экспорт продуктов питания и вина из Италии.',
      quickLinks: 'Быстрые ссылки',
      services: 'Услуги',
      process: 'Процесс работы',
      team: 'Команда',
      contact: 'Контакты',
      legal: 'Правовая информация',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      nda: 'Соглашение о неразглашении',
      followUs: 'Следите за нами',
      allRights: 'Все права защищены.',
      madeWith: 'Создано с',
      forBusiness: 'для бизнеса',
      readyForNewMarkets: 'Готовы к выходу на',
      newMarkets: 'новые рынки?',
      diagnosticDescription: 'Запишитесь на 30-минутную диагностическую сессию. Мы разберём ваш кейс и скажем, с какими барьерами вы можете столкнуться в Италии и за рубежом.',
      whatsappTelegramLabel: 'WhatsApp / Telegram',
      whatsappLink: '[Прямая ссылка на чат]',
      emailLabel: 'Email',
      emailLink: '[Корпоративный email]',
      locationLabel: 'Локация',
      locationText: 'Милан / Верона, вся Италия и весь мир',
      connectWhatsapp: 'Связаться в WhatsApp',
      contactsTitle: 'КОНТАКТЫ',
      officeMilan: 'Верона, Италия',
      allRightsFull: 'Все права защищены.',
      annaTagline: 'Анна — эксперт по ВЭД. Экспорт продуктов питания и вина.'
    },
    process_ui: {
      step: 'Шаг',
      back: 'Назад',
      next: 'Далее'
    },
    whoWeWorkWith: {
      badge: 'Наша аудитория',
      title: 'С кем мы работаем',
      subtitle: 'Три типа клиентов, для каждого из которых у нас есть точное решение',
      distributors: {
        title: 'Дистрибьюторы и ритейлеры',
        description: 'Помогаем дистрибьюторам найти эксклюзивные итальянские винодельни с уникальной историей, поставщиков оливкового масла и деликатесов. Обеспечиваем стабильность поставок и эксклюзивные права на территорию.',
        cta: 'Найти эксклюзив'
      },
      smallBusiness: {
        title: 'Малый бизнес и амбициозные новички',
        description: 'Хотите начать импорт итальянского вина, продуктов питания или бижутерии, но не знаете с чего начать? Мы станем вашим внешним отделом ВЭД: соберём первую сборную партию и проведем через все этапы — от выбора товара до доставки.',
        cta: 'Начать импорт'
      },
      investors: {
        title: 'Инвесторы-стратеги',
        description: 'Подберём ликвидные ниши в сегментах вина, продуктов питания и товаров класса люкс с высокой маржинальностью. Рассчитаем ROI и возьмём на себя полное операционное управление.',
        cta: 'Рассчитать ROI'
      }
    },
    whatsapp: 'Связаться в WhatsApp',
    writeUs: 'Написать нам',
    contactUs: 'Связаться с нами'
  },
  en: {
    nav: {
      services: 'Services',
      process: 'Process',
      team: 'Team',
      contact: 'Contact Us',
      companyName: 'Export & Import',
      companyTagline: 'Business Consulting'
    },
    hero: {
      title: 'Your partner in export and import in Italy and worldwide',
      subtitle: 'Strategic management of export-import operations from Italy worldwide',
      description: 'Wine, olive oil, tomatoes, jewelry — we specialize in the export and import of Italian food products and luxury goods.',
      cta: 'Request consultation',
      learnMore: 'Why Us',
      trusted: 'Trusted by 150+ companies'
    },
    specialization: {
      title: 'Niches I specialize in',
      subtitle: 'Real products I work with every day',
      item1: {
        title: 'Wine & Olive Oil',
        description: 'Direct contacts with wineries and oil mills in Tuscany, Veneto, and Sicily. Selection of unique products for your market.'
      },
      item2: {
        title: 'Food Products',
        description: 'Tomatoes, sauces, pasta, cheeses, and delicacies. Full food product certification and quality control.'
      },
      item3: {
        title: 'Jewelry',
        description: 'Handcrafted Italian jewelry from family workshops. Exclusive collections for your business.'
      },
      item4: {
        title: 'Luxury Goods',
        description: 'Premium Italian brands, accessories, and interior items. Working directly with manufacturers.'
      }
    },
    value: {
      title: 'Why choose us',
      subtitle: 'Specific advantages of working with us',
      directContacts: {
        title: 'Direct contacts with producers',
        description: 'Our own database of verified Italian producers — from Tuscan wineries to Milanese jewelry workshops.'
      },
      certification: {
        title: 'Certification & excise expertise',
        description: 'Deep understanding of food product certification requirements, excise policy on wine and alcohol.'
      },
      customs: {
        title: 'International customs experience',
        description: 'Years of experience with international customs procedures in Italy and worldwide, handling non-standard situations.'
      },
      personalApproach: {
        title: 'Personal support',
        description: 'Individual approach to every project. Control at all stages — from finding a supplier to delivery to your warehouse.'
      }
    },
    services: {
      title: 'Our services',
      subtitle: 'Full cycle consulting for your business',
      cta: 'Discuss project',
      consultation: {
        title: 'Expert Consultation',
        description: 'Expert opinion and audit of your current supply chain. Analysis, risk identification, and growth opportunities.'
      },
      export: {
        title: 'Export consulting',
        description: 'We help enter international markets, find partners, prepare all documentation'
      },
      import: {
        title: 'Import consulting',
        description: 'Find reliable suppliers, organize logistics, ensure product quality'
      },
      compliance: {
        title: 'Legal support',
        description: 'Contractor verification, contracts, customs clearance, legal compliance'
      },
      logistics: {
        title: 'Logistics solutions',
        description: 'Delivery optimization, warehouse management, cost reduction'
      },
      analysis: {
        title: 'Market analysis',
        description: 'Target market research, competitive analysis, development strategy'
      },
      risk: {
        title: 'Risk management',
        description: 'Risk assessment and minimization, insurance, financial security'
      }
    },
    process: {
      title: 'How we work',
      subtitle: 'Simple and transparent process',
      step1: {
        title: 'Expert Audit & Brief',
        description: 'We analyze your request and verify the product category (wine, food, jewelry) for import compliance requirements.'
      },
      step2: {
        title: 'Supplier Selection & Verification',
        description: 'We select producers in Italy, verify their export licenses and quality certificates for specific markets.'
      },
      step3: {
        title: 'Contract & Compliance',
        description: 'We draft foreign trade contracts, prepare customs documentation, and handle excise issues (for wine) and logistics.'
      },
      step4: {
        title: 'Delivery & Support',
        description: 'We oversee shipment worldwide, border clearance, and delivery to your warehouse.'
      },
      strategicSession: {
        title: 'Strategic session',
        description: 'Sign up for an initial consultation to assess export potential and identify regulatory barriers on target markets in Italy and globally.',
        whatsappTelegram: 'WhatsApp / Telegram: [Direct link]',
        email: 'Email: [Corporate email]',
        office: 'Office: Milan / Verona, Italy'
      },
      security: {
        title: 'Confidentiality at every stage',
        nda: 'NDA is signed before the start of project details discussion',
        encryption: 'All data is stored in encrypted systems with SSL/TLS protection',
        access: 'Access to information is limited to key team members only'
      }
    },
    stats: {
      clients: 'Satisfied clients',
      countries: 'Partner countries',
      experience: 'Years of experience',
      deals: 'Successful deals'
    },
    trust: {
      title: 'Security guarantees',
      nda: {
        title: 'NDA with each client',
        description: 'Non-disclosure agreement'
      },
      encryption: {
        title: 'Data encryption',
        description: 'Information protection'
      },
      compliance: {
        title: 'Compliance control',
        description: 'Standards compliance'
      },
      insurance: {
        title: 'Transaction insurance',
        description: 'Financial protection'
      }
    },
    team: {
      title: 'About me',
      subtitle: 'Your guide to the Italian market',
      tagline: 'I build bridges between your business and the Italian market',
      cta: 'Book a consultation',
      contactMe: 'Get in touch',
      anna: {
        name: 'Anna',
        role: 'Foreign Trade Expert',
        bio: 'Marketing strategist and foreign trade expert with 12 years of living and working experience in Italy',
        experience1: '8 years in marketing and 4 years in consulting: specializes in building systematic sales and strategic funnels for the B2B sector',
        experience2: 'Managed projects to launch brands in Italian and international markets, responsible for product adaptation and commercial strategy',
        experience3: 'Architect of business communities: created an ecosystem for entrepreneurs in Italy, providing access to local network and partners',
        quote: '"My mission is not just to launch a project, but to build a system ensuring its sustainable profitability in the market"'
      },
    },
    contact: {
      title: 'Confidential request',
      subtitle: 'All data is protected. We guarantee complete confidentiality',
      formTitle: 'Send us a message',
      name: 'Your name',
      namePlaceholder: 'How to address you',
      email: 'Email',
      emailPlaceholder: 'For feedback',
      phone: 'Phone',
      phonePlaceholder: '+1 (___) ___-____',
      company: 'Company',
      companyPlaceholder: 'Company name (optional)',
      message: 'Message',
      messagePlaceholder: 'Tell us about your task...',
      privacy: 'I agree with the privacy policy',
      submit: 'Submit request',
      sending: 'Sending...',
      sent: 'Sent',
      secureNote: 'Your data is protected by 256-bit encryption',
      close: 'Close',
      location: 'Location',
      address: 'Verona, Italy',
      hours: 'Working Hours',
      workingHours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      ctaTitle: 'Start Working with Us',
      ctaDescription: 'Submit a request and our experts will contact you within 24 hours',
      ctaButton: 'Send Request',
      available: 'Available Now',
      secure: 'Secure Connection'
    },
    footer: {
      company: 'About company',
      companyDescription: 'Foreign trade expert. Export of food products and wine from Italy.',
      quickLinks: 'Quick links',
      services: 'Services',
      process: 'Work process',
      team: 'Team',
      contact: 'Contacts',
      legal: 'Legal information',
      privacy: 'Privacy policy',
      terms: 'Terms of use',
      nda: 'Non-disclosure agreement',
      followUs: 'Follow us',
      allRights: 'All rights reserved.',
      madeWith: 'Made with',
      forBusiness: 'for business',
      contactsTitle: 'CONTACTS',
      officeMilan: 'Verona, Italy',
      allRightsFull: 'All rights reserved.',
      annaTagline: 'Anna — foreign trade expert. Export of food products and wine.'
    },
    process_ui: {
      step: 'Step',
      back: 'Back',
      next: 'Next'
    },
    whoWeWorkWith: {
      badge: 'Our audience',
      title: 'Who we work with',
      subtitle: 'Three types of clients, each with a tailored solution',
      distributors: {
        title: 'Distributors & retailers',
        description: 'We help distributors find exclusive Italian wineries with unique heritage, olive oil and delicacy suppliers. We ensure supply stability and exclusive territorial rights.',
        cta: 'Find exclusives'
      },
      smallBusiness: {
        title: 'Small business & ambitious newcomers',
        description: 'Want to start importing Italian wine, food products, or jewelry but don\'t know where to begin? We become your external trade department: assemble your first mixed shipment and guide you through every stage — from product selection to delivery.',
        cta: 'Start importing'
      },
      investors: {
        title: 'Strategic investors',
        description: 'We select liquid niches in wine, food, and luxury goods segments with high margins. We calculate ROI and take on complete operational management.',
        cta: 'Calculate ROI'
      }
    },
    whatsapp: 'Contact via WhatsApp',
    writeUs: 'Write to us',
    contactUs: 'Contact Us'
  },
  fr: {
    nav: {
      services: 'Services',
      process: 'Processus',
      team: 'Équipe',
      contact: 'Nous contacter',
      companyName: 'Export & Import',
      companyTagline: 'Conseil aux entreprises'
    },
    hero: {
      title: 'Votre partenaire en export et import en Italie et dans le monde',
      subtitle: 'Gestion stratégique des opérations d\'export-import depuis l\'Italie dans le monde entier',
      description: 'Vin, huile d\'olive, tomates, bijoux — nous nous spécialisons dans l\'export et l\'import de produits alimentaires italiens et de biens de luxe.',
      cta: 'Demander une consultation',
      learnMore: 'Pourquoi nous',
      trusted: 'Approuvé par plus de 150 entreprises'
    },
    specialization: {
      title: 'Mes niches d\'expertise',
      subtitle: 'Les vrais produits avec lesquels je travaille au quotidien',
      item1: {
        title: 'Vin et huile d\'olive',
        description: 'Contacts directs avec les vignobles et huileries de Toscane, Vénétie et Sicile. Sélection de produits uniques pour votre marché.'
      },
      item2: {
        title: 'Produits alimentaires',
        description: 'Tomates, sauces, pâtes, fromages et spécialités. Certification complète des produits alimentaires et contrôle qualité.'
      },
      item3: {
        title: 'Bijouterie',
        description: 'Bijoux italiens faits main par des ateliers familiaux. Collections exclusives pour votre entreprise.'
      },
      item4: {
        title: 'Produits de luxe',
        description: 'Marques italiennes premium, accessoires et objets de décoration. Travail direct avec les fabricants.'
      }
    },
    value: {
      title: 'Pourquoi nous choisir',
      subtitle: 'Avantages concrets de travailler avec nous',
      directContacts: {
        title: 'Contacts directs avec les producteurs',
        description: 'Notre propre base de producteurs italiens vérifiés — des vignobles toscans aux ateliers de bijouterie milanais.'
      },
      certification: {
        title: 'Expertise en certification et accises',
        description: 'Compréhension approfondie des exigences de certification alimentaire, de la politique d\'accise sur le vin et l\'alcool.'
      },
      customs: {
        title: 'Expérience douanière internationale',
        description: 'Des années d\'expérience avec les procédures douanières en Italie et dans le monde entier, gestion des situations non standard.'
      },
      personalApproach: {
        title: 'Accompagnement personnalisé',
        description: 'Approche individuelle pour chaque projet. Contrôle à toutes les étapes — de la recherche de fournisseur à la livraison dans votre entrepôt.'
      }
    },
    services: {
      title: 'Nos services',
      subtitle: 'Conseil complet pour votre entreprise',
      cta: 'Discuter du projet',
      consultation: {
        title: 'Consultation experte',
        description: 'Avis d\'expert et audit de votre chaîne d\'approvisionnement actuelle. Analyse, identification des risques et opportunités de croissance.'
      },
      export: {
        title: 'Conseil à l\'exportation',
        description: 'Nous aidons à entrer sur les marchés internationaux, trouver des partenaires, préparer toute la documentation'
      },
      import: {
        title: 'Conseil à l\'importation',
        description: 'Trouver des fournisseurs fiables, organiser la logistique, garantir la qualité des produits'
      },
      compliance: {
        title: 'Support juridique',
        description: 'Vérification des contractants, contrats, dédouanement, conformité légale'
      },
      logistics: {
        title: 'Solutions logistiques',
        description: 'Optimisation de la livraison, gestion des entrepôts, réduction des coûts'
      },
      analysis: {
        title: 'Analyse de marché',
        description: 'Recherche de marché cible, analyse concurrentielle, stratégie de développement'
      },
      risk: {
        title: 'Gestion des risques',
        description: 'Évaluation et minimisation des risques, assurance, sécurité financière'
      }
    },
    process: {
      title: 'Comment nous travaillons',
      subtitle: 'Processus simple et transparent',
      step1: {
        title: 'Audit expert et brief',
        description: 'Nous analysons votre demande et vérifions la catégorie de produit (vin, alimentation, bijoux) pour la conformité aux exigences d\'importation.'
      },
      step2: {
        title: 'Sélection et vérification des fournisseurs',
        description: 'Nous sélectionnons des producteurs en Italie, vérifions leurs licences d\'exportation et certificats de qualité pour des marchés spécifiques.'
      },
      step3: {
        title: 'Contrat et Compliance',
        description: 'Nous rédigeons les contrats de commerce extérieur, préparons les documents douaniers et gérons les questions d\'accise (pour le vin) et la logistique.'
      },
      step4: {
        title: 'Livraison et accompagnement',
        description: 'Nous supervisons l\'expédition dans le monde entier, le passage en douane et la livraison jusqu\'à votre entrepôt.'
      },
      strategicSession: {
        title: 'Session stratégique',
        description: 'Inscrivez-vous pour une consultation initiale pour évaluer le potentiel d\'exportation et identifier les barrières réglementaires sur les marchés cibles en Italie et dans le monde.',
        whatsappTelegram: 'WhatsApp / Telegram: [Lien direct]',
        email: 'Email: [Email professionnel]',
        office: 'Bureau: Milan / Vérone, Italie'
      },
      security: {
        title: 'Confidentialité à chaque étape',
        nda: 'NDA est signé avant le début de la discussion des détails du projet',
        encryption: 'Toutes les données sont stockées dans des systèmes cryptés avec une protection SSL/TLS',
        access: 'L\'accès aux informations est limité aux membres clés de l\'équipe uniquement'
      }
    },
    stats: {
      clients: 'Clients satisfaits',
      countries: 'Pays partenaires',
      experience: 'Années d\'expérience',
      deals: 'Transactions réussies'
    },
    trust: {
      title: 'Garanties de sécurité',
      nda: {
        title: 'NDA avec chaque client',
        description: 'Accord de confidentialité'
      },
      encryption: {
        title: 'Chiffrement des données',
        description: 'Protection de l\'information'
      },
      compliance: {
        title: 'Contrôle de conformité',
        description: 'Conformité aux normes'
      },
      insurance: {
        title: 'Assurance des transactions',
        description: 'Protection financière'
      }
    },
    team: {
      title: 'À propos de moi',
      subtitle: 'Votre guide vers le marché italien',
      tagline: 'Je construis des ponts entre votre entreprise et le marché italien',
      cta: 'Réserver une consultation',
      contactMe: 'Me contacter',
      anna: {
        name: 'Anna',
        role: 'Experte en commerce extérieur',
        bio: 'Stratège marketing et experte en commerce extérieur avec 12 ans d\'expérience de vie et de travail en Italie',
        experience1: '8 ans en marketing et 4 ans en conseil: spécialisée dans la construction de ventes systématiques et d\'entonnoirs stratégiques pour le secteur B2B',
        experience2: 'A géré des projets de lancement de marques sur les marchés italiens et internationaux, responsable de l\'adaptation du produit et de la stratégie commerciale',
        experience3: 'Architecte de communautés d\'affaires: a créé un écosystème pour les entrepreneurs en Italie, fournissant un accès au réseau local et aux partenaires',
        quote: '«Ma mission n\'est pas de me limiter au lancement d\'un projet, mais de construire un système assurant sa rentabilité durable sur le marché»'
      },
    },
    contact: {
      title: 'Demande confidentielle',
      subtitle: 'Toutes les données sont protégées. Nous garantissons une confidentialité totale',
      formTitle: 'Envoyez-nous un message',
      name: 'Votre nom',
      namePlaceholder: 'Comment vous appeler',
      email: 'Email',
      emailPlaceholder: 'Pour les retours',
      phone: 'Téléphone',
      phonePlaceholder: '+33 _ __ __ __ __',
      company: 'Entreprise',
      companyPlaceholder: 'Nom de l\'entreprise (facultatif)',
      message: 'Message',
      messagePlaceholder: 'Parlez-nous de votre tâche...',
      privacy: 'J\'accepte la politique de confidentialité',
      submit: 'Soumettre la demande',
      sending: 'Envoi en cours...',
      sent: 'Envoyé',
      secureNote: 'Vos données sont protégées par un chiffrement 256 bits',
      close: 'Fermer',
      location: 'Localisation',
      address: 'Vérone, Italie',
      hours: 'Heures de travail',
      workingHours: 'Lun-Ven: 9:00 - 18:00',
      ctaTitle: 'Commencez à travailler avec nous',
      ctaDescription: 'Soumettez une demande et nos experts vous contacteront dans les 24 heures',
      ctaButton: 'Envoyer la demande',
      available: 'Disponible maintenant',
      secure: 'Connexion sécurisée'
    },
    footer: {
      company: 'À propos de l\'entreprise',
      companyDescription: 'Expert en commerce extérieur. Export de produits alimentaires et de vin depuis l\'Italie.',
      quickLinks: 'Liens rapides',
      services: 'Services',
      process: 'Processus de travail',
      team: 'Équipe',
      contact: 'Contacts',
      legal: 'Informations légales',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation',
      nda: 'Accord de confidentialité',
      followUs: 'Suivez-nous',
      allRights: 'Tous droits réservés.',
      madeWith: 'Créé avec',
      forBusiness: 'pour les affaires',
      readyForNewMarkets: 'Prêt à entrer sur',
      newMarkets: 'de nouveaux marchés?',
      diagnosticDescription: 'Inscrivez-vous pour une session diagnostique de 30 minutes. Nous analyserons votre cas et vous dirons quels obstacles vous pourriez rencontrer en Italie et à l\'international.',
      whatsappTelegramLabel: 'WhatsApp / Telegram',
      whatsappLink: '[Lien direct]',
      emailLabel: 'Email',
      emailLink: '[Email professionnel]',
      locationLabel: 'Localisation',
      locationText: 'Milan / Vérone, toute l\'Italie et le monde entier',
      connectWhatsapp: 'Contactez-nous via WhatsApp',
      contactsTitle: 'CONTACTS',
      officeMilan: 'Vérone, Italie',
      allRightsFull: 'Tous droits réservés.',
      annaTagline: 'Anna — experte en commerce extérieur. Export de produits alimentaires et de vin.'
    },
    process_ui: {
      step: 'Étape',
      back: 'Retour',
      next: 'Suivant'
    },
    whoWeWorkWith: {
      badge: 'Notre public',
      title: 'Avec qui nous travaillons',
      subtitle: 'Trois types de clients, chacun avec une solution sur mesure',
      distributors: {
        title: 'Distributeurs et détaillants',
        description: 'Nous aidons les distributeurs à trouver des vignobles italiens exclusifs avec un patrimoine unique, des fournisseurs d\'huile d\'olive et de spécialités. Nous assurons la stabilité des approvisionnements et des droits territoriaux exclusifs.',
        cta: 'Trouver l\'exclusivité'
      },
      smallBusiness: {
        title: 'Petites entreprises et nouveaux ambitieux',
        description: 'Vous souhaitez commencer à importer du vin italien, des produits alimentaires ou des bijoux mais ne savez pas par où commencer ? Nous devenons votre département commerce extérieur : nous constituons votre premier lot mixte et vous guidons à chaque étape — du choix du produit à la livraison.',
        cta: 'Commencer l\'import'
      },
      investors: {
        title: 'Investisseurs stratégiques',
        description: 'Nous sélectionnons des niches liquides dans les segments du vin, de l\'alimentation et des biens de luxe à haute marge. Nous calculons le ROI et prenons en charge la gestion opérationnelle complète.',
        cta: 'Calculer le ROI'
      }
    },
    whatsapp: 'Contactez-nous via WhatsApp',
    writeUs: 'Écrivez-nous',
    contactUs: 'Nous contacter'
  },
  it: {
    nav: {
      services: 'Servizi',
      process: 'Processo',
      team: 'Team',
      contact: 'Contattaci',
      companyName: 'Export & Import',
      companyTagline: 'Consulenza aziendale'
    },
    hero: {
      title: 'Il vostro partner per l\'export e l\'import in Italia e nel Mondo',
      subtitle: 'Gestione strategica delle operazioni di export-import dall\'Italia in tutto il mondo',
      description: 'Vino, olio d\'oliva, pomodori, gioielli — siamo specializzati nell\'export e nell\'import di prodotti alimentari italiani e beni di lusso.',
      cta: 'Richiedi una consulenza',
      learnMore: 'Perché noi',
      trusted: 'Oltre 150 aziende si fidano di noi'
    },
    specialization: {
      title: 'Le mie nicchie di competenza',
      subtitle: 'I veri prodotti con cui lavoro ogni giorno',
      item1: {
        title: 'Vino e olio d\'oliva',
        description: 'Contatti diretti con cantine e frantoi in Toscana, Veneto e Sicilia. Selezione di prodotti unici per il vostro mercato.'
      },
      item2: {
        title: 'Prodotti alimentari',
        description: 'Pomodori, salse, pasta, formaggi e specialità. Certificazione completa dei prodotti alimentari e controllo qualità.'
      },
      item3: {
        title: 'Bigiotteria',
        description: 'Bigiotteria italiana fatta a mano da laboratori familiari. Collezioni esclusive per il vostro business.'
      },
      item4: {
        title: 'Beni di lusso',
        description: 'Marchi italiani premium, accessori e oggetti d\'arredamento. Lavoro diretto con i produttori.'
      }
    },
    value: {
      title: 'Perché sceglierci',
      subtitle: 'Vantaggi concreti del lavorare con noi',
      directContacts: {
        title: 'Contatti diretti con i produttori',
        description: 'Il nostro database di produttori italiani verificati — dalle cantine toscane ai laboratori di gioielleria milanesi.'
      },
      certification: {
        title: 'Competenza in certificazione e accise',
        description: 'Profonda conoscenza dei requisiti di certificazione alimentare, della politica sulle accise per vino e alcolici.'
      },
      customs: {
        title: 'Esperienza doganale internazionale',
        description: 'Anni di esperienza con le procedure doganali in Italia e in tutto il mondo, gestione di situazioni non standard.'
      },
      personalApproach: {
        title: 'Supporto personalizzato',
        description: 'Approccio individuale per ogni progetto. Controllo in tutte le fasi — dalla ricerca del fornitore alla consegna nel vostro magazzino.'
      }
    },
    services: {
      title: 'I nostri servizi',
      subtitle: 'Consulenza a ciclo completo per il vostro business',
      cta: 'Discutiamo del progetto',
      consultation: {
        title: 'Consulenza esperta',
        description: 'Parere esperto e audit della vostra catena di fornitura attuale. Analisi, identificazione dei rischi e opportunità di crescita.'
      },
      export: {
        title: 'Consulenza per l\'esportazione',
        description: 'Vi aiutiamo ad entrare nei mercati internazionali, trovare partner e preparare tutta la documentazione'
      },
      import: {
        title: 'Consulenza per l\'importazione',
        description: 'Troviamo fornitori affidabili, organizziamo la logistica e garantiamo la qualità del prodotto'
      },
      compliance: {
        title: 'Supporto legale',
        description: 'Verifica delle controparti, contratti, sdoganamento, conformità normativa'
      },
      logistics: {
        title: 'Soluzioni logistiche',
        description: 'Ottimizzazione della consegna, gestione dei magazzini, riduzione dei costi'
      },
      analysis: {
        title: 'Analisi di mercato',
        description: 'Ricerca di mercati di destinazione, analisi concorrenziale, strategia di sviluppo'
      },
      risk: {
        title: 'Gestione dei rischi',
        description: 'Valutazione e minimizzazione dei rischi, assicurazione, sicurezza finanziaria'
      }
    },
    process: {
      title: 'Come lavoriamo',
      subtitle: 'Processo semplice e trasparente',
      step1: {
        title: 'Analisi tecnica e brief iniziale',
        description: 'Analizziamo la vostra richiesta e verifichiamo la categoria del prodotto (vino, alimentari, bigiotteria) per la conformità ai requisiti di importazione.'
      },
      step2: {
        title: 'Selezione e verifica dei fornitori',
        description: 'Selezioniamo produttori in Italia, verifichiamo le licenze di esportazione e i certificati di qualità per mercati specifici.'
      },
      step3: {
        title: 'Contratto e conformità',
        description: 'Redigiamo contratti di commercio estero, prepariamo i documenti doganali e gestiamo le questioni relative alle accise (per il vino) e alla logistica.'
      },
      step4: {
        title: 'Consegna e supporto',
        description: 'Supervisioniamo la spedizione in tutto il mondo, il passaggio doganale e la consegna fino al vostro magazzino.'
      },
      strategicSession: {
        title: 'Sessione strategica',
        description: 'Iscriviti per una consulenza iniziale per valutare il potenziale di esportazione e identificare le barriere regolamentari sui mercati di destinazione in Italia e nel mondo.',
        whatsappTelegram: 'WhatsApp / Telegram: [Link diretto]',
        email: 'Email: [Email aziendale]',
        office: 'Ufficio: Milano / Verona, Italia'
      },
      security: {
        title: 'Riservatezza in ogni fase',
        nda: 'NDA è firmato prima dell\'inizio della discussione dei dettagli del progetto',
        encryption: 'Tutti i dati sono memorizzati in sistemi crittografati con protezione SSL/TLS',
        access: 'L\'accesso alle informazioni è limitato solo ai membri chiave del team'
      }
    },
    stats: {
      clients: 'Clienti soddisfatti',
      countries: 'Paesi partner',
      experience: 'Anni di esperienza',
      deals: 'Transazioni riuscite'
    },
    trust: {
      title: 'Garanzie di sicurezza',
      nda: {
        title: 'NDA con ogni cliente',
        description: 'Accordo di non divulgazione'
      },
      encryption: {
        title: 'Crittografia dei dati',
        description: 'Protezione delle informazioni'
      },
      compliance: {
        title: 'Controllo di conformità',
        description: 'Conformità agli standard'
      },
      insurance: {
        title: 'Assicurazione delle transazioni',
        description: 'Protezione finanziaria'
      }
    },
    team: {
      title: 'Chi sono',
      subtitle: 'La tua guida nel mercato italiano',
      tagline: 'Costruisco ponti tra il vostro business e il mercato italiano',
      cta: 'Prenota una consulenza',
      contactMe: 'Contattami',
      anna: {
        name: 'Anna',
        role: 'Esperta in commercio estero',
        bio: 'Stratega di marketing ed esperta in commercio estero con 12 anni di esperienza di vita e lavoro in Italia',
        experience1: '8 anni nel marketing e 4 anni nella consulenza: specializzata nella costruzione di vendite sistematiche e funnel strategici per il settore B2B',
        experience2: 'Ha gestito progetti di lancio di marchi sui mercati italiani e internazionali, responsabile dell\'adattamento del prodotto e della strategia commerciale',
        experience3: 'Architetto di comunità aziendali: ha creato un ecosistema per gli imprenditori in Italia, garantendo l\'accesso alla rete locale e ai partner',
        quote: '«La mia missione non è limitarsi al lancio di un progetto, ma costruire un sistema che assicuri la sua redditività sostenibile sul mercato»'
      },
    },
    contact: {
      title: 'Contattaci',
      subtitle: 'Siamo sempre pronti a rispondere alle vostre domande e a discutere il vostro progetto',
      formTitle: 'Inviaci un messaggio',
      name: 'Il tuo nome',
      namePlaceholder: 'Come chiamarti',
      email: 'Email',
      emailPlaceholder: 'tua@email.com',
      phone: 'Telefono',
      phonePlaceholder: '+39 ___ ___ ____',
      company: 'Azienda',
      companyPlaceholder: 'Nome azienda (facoltativo)',
      message: 'Messaggio',
      messagePlaceholder: 'Raccontaci del tuo progetto...',
      submit: 'Invia messaggio',
      sending: 'Invio in corso...',
      sent: 'Inviato',
      privacyNote: 'Cliccando sul pulsante, accetti la politica sulla privacy',
      location: 'Posizione',
      address: 'Verona, Italia',
      hours: 'Orari di lavoro',
      workingHours: 'Lun-Ven: 9:00 - 18:00',
      socialTitle: 'Seguici',
      socialSubtitle: 'Unisciti ai nostri social network per le ultime notizie',
      available: 'Online',
      secure: 'Sicuro'
    },
    footer: {
      company: 'Su di noi',
      companyDescription: 'Esperta in commercio estero. Export di prodotti alimentari e vino dall\'Italia.',
      quickLinks: 'Collegamenti rapidi',
      services: 'Servizi',
      process: 'Processo di lavoro',
      team: 'Team',
      contact: 'Contatti',
      legal: 'Informazioni legali',
      privacy: 'Informativa sulla privacy',
      terms: 'Termini e condizioni',
      nda: 'Accordo di non divulgazione',
      followUs: 'Seguici',
      allRights: 'Tutti i diritti riservati.',
      madeWith: 'Creato con',
      forBusiness: 'per il business',
      readyForNewMarkets: 'Pronti ad entrare in',
      newMarkets: 'nuovi mercati?',
      diagnosticDescription: 'Iscriviti per una sessione diagnostica di 30 minuti. Analizzeremo il tuo caso e ti diremo quali ostacoli potresti incontrare in Italia e all\'estero.',
      whatsappTelegramLabel: 'WhatsApp / Telegram',
      whatsappLink: '[Link diretto]',
      emailLabel: 'Email',
      emailLink: '[Email aziendale]',
      locationLabel: 'Località',
      locationText: 'Milano / Verona, tutta l\'Italia e il mondo',
      connectWhatsapp: 'Contattaci via WhatsApp',
      contactsTitle: 'CONTATTI',
      officeMilan: 'Verona, Italia',
      allRightsFull: 'Tutti i diritti riservati.',
      annaTagline: 'Anna — esperta in commercio estero. Export di prodotti alimentari e vino.'
    },
    process_ui: {
      step: 'Passo',
      back: 'Indietro',
      next: 'Avanti'
    },
    whoWeWorkWith: {
      badge: 'Il nostro pubblico',
      title: 'Con chi lavoriamo',
      subtitle: 'Tre tipi di clienti, ognuno con una soluzione su misura',
      distributors: {
        title: 'Distributori e rivenditori',
        description: 'Aiutiamo i distributori a trovare cantine italiane esclusive con un patrimonio unico, fornitori di olio d\'oliva e specialità. Garantiamo stabilità delle forniture e diritti territoriali esclusivi.',
        cta: 'Trova l\'esclusività'
      },
      smallBusiness: {
        title: 'Piccole imprese e nuovi ambiziosi',
        description: 'Volete iniziare a importare vino italiano, prodotti alimentari o bigiotteria ma non sapete da dove iniziare? Diventiamo il vostro dipartimento commercio estero: componiamo il primo lotto misto e vi guidiamo in ogni fase — dalla scelta del prodotto alla consegna.',
        cta: 'Inizia a importare'
      },
      investors: {
        title: 'Investitori strategici',
        description: 'Selezioniamo nicchie liquide nei segmenti vino, alimentari e beni di lusso ad alto margine. Calcoliamo il ROI e ci occupiamo della gestione operativa completa.',
        cta: 'Calcolare il ROI'
      }
    },
    whatsapp: 'Contattaci via WhatsApp',
    writeUs: 'Scrivici',
    contactUs: 'Contattaci'
  }
};
