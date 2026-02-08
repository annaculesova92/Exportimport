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
  const [language, setLanguage] = useState<Language>('en');

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

// Translations
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
      title: 'Ваш партнер по экспорту и импорту в Италии и Европе',
      subtitle: 'Стратегическое управление экспортно-импортными операциями в Италии и ЕС',
      description: 'Комплексная интеграция бизнеса в европейскую среду: от разработки Go-to-Market стратегии до операционного менеджмента поставок и обеспечения комплаенса.',
      cta: 'Запросить консультацию',
      learnMore: 'Почему мы',
      trusted: 'Доверяют более 150+ компаний'
    },
    specialization: {
      title: 'Наша специализация',
      subtitle: 'Мы работаем с компаниями и собственниками бизнеса, которые ищут:',
      item1: 'Выстроенные цепочки поставок и подрядчиков',
      item2: 'Контролируемый выход на новый рынок',
      item3: 'Минимизацию регуляторных, операционных и финансовых рисков',
      item4: 'Предсказуемый результат без потери управляемости'
    },
    value: {
      title: 'Почему выбирают нас',
      subtitle: 'Конфиденциальность, экспертиза и результат',
      confidentiality: {
        title: 'Абсолютная конфиденциальность',
        description: 'Все данные защищены. NDA с каждым клиентом. Полная анонимность сделок.'
      },
      speed: {
        title: 'Скорость исполнения',
        description: 'Быстрое решение задач. Оперативная обработка запросов. Минимум времени на запуск.'
      },
      professionalism: {
        title: 'Профессионализм',
        description: 'Высочайшие стандарты работы. Подтверждённая экспертиза. Признанное качество услуг.'
      },
      expertise: {
        title: 'Экспертный консалтинг',
        description: 'Опыт работы с крупнейшими компаниями. Глубокое знание международных рынков.'
      },
      support: {
        title: 'Сопровождение 24/7',
        description: 'Всегда на связи. Решаем вопросы в режиме реального времени.'
      }
    },
    services: {
      title: 'Наши услуги',
      subtitle: 'Полный цикл консалтинга для вашего бизнеса',
      cta: 'Обсудить проект',
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
        title: 'Консультация',
        description: 'Обсуждаем вашу ситуацию и цели в конфиденциальной обстановке'
      },
      step2: {
        title: 'Анализ',
        description: 'Изучаем рынок, оцениваем возможности и риски'
      },
      step3: {
        title: 'Стратегия',
        description: 'Разрабатываем индивидуальный план действий'
      },
      step4: {
        title: 'Реализация',
        description: 'Сопровождаем на каждом этапе до достижения результата'
      },
      strategicSession: {
        title: 'Стратегическая сессия',
        description: 'Запишитесь на первичную консультацию для оценки экспортного потенциала и выявления регуляторных барьеров на целевых рынках Италии и Центральной Европы.',
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
      title: 'Наша команда',
      subtitle: 'Эксперты с глобальным опытом',
      tagline: 'Мы соединяем ваш бизнес с итальянским рынком',
      cta: 'Записаться на консультацию',
      anna: {
        name: 'Анна',
        role: 'Co-founder, Business Developer',
        bio: 'Маркетолог-стратег и Business Developer с 12-летним опытом жизни и работы в Италии',
        experience1: '8 лет в маркетинге и 4 года в консалтинге: специализируется на построении системных продаж и стратегических воронках для B2B-сектора',
        experience2: 'Управляла проектами по выводу брендов на рынки Италии и Европы, отвечая за адаптацию продукта и коммерческую стратегию',
        experience3: 'Архитектор деловых сообществ: создала экосистему для предпринимателей в Италии, обеспечивая доступ к локальному нетворку и партнёрам',
        quote: '«Моя задача — не ограничиться запуском проекта, а выстроить систему, обеспечивающую его устойчивую прибыльность на рынке»'
      },
      marina: {
        name: 'Марина Лобач',
        role: 'Co-founder',
        title: 'Эксперт по операционному менеджменту',
        bio: '10 лет глубокой экспертизы в управлении бизнес-процессами',
        experience1: 'Международные Import-Export операции и развитие проектов на итальянском рынке',
        experience2: 'Запустила ряд успешных стартапов в Италии, глубоко понимая все сложности создания бизнеса с нуля на местном рынке',
        experience3: 'Организовала более 40 выставочных проектов в Европе и России, обеспечивая стратегию, логистику присутствия и результат для брендов',
        quote: '«Мы не посредники. Мы — проводники в итальянскую систему.»'
      }
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
      companyDescription: 'Премиальный консалтинг в сфере международной торговли с гарантией конфиденциальности',
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
      diagnosticDescription: 'Запишитесь на 30-минутную диагностическую сессию. Мы разберём ваш кейс и скажем, с какими барьерами вы можете столкнуться в Италии или Центральной Европе.',
      whatsappTelegramLabel: 'WhatsApp / Telegram',
      whatsappLink: '[Прямая ссылка на чат]',
      emailLabel: 'Email',
      emailLink: '[Корпоративный email]',
      locationLabel: 'Локация',
      locationText: 'Милан / Верона, вся Италия и ЕС',
      connectWhatsapp: 'Связаться в WhatsApp',
      contactsTitle: 'КОНТАКТЫ',
      officeMilan: 'Верона, Италия',
      allRightsFull: 'Все права защищены.'
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
        description: 'Профессиональные игроки рынка, которые ищут эксклюзивные продукты от небольших семейных мануфактур Италии. Мы поможем вам отстроиться от конкурентов, найдем уникальные позиции и обеспечим стабильность поставок «под ключ».',
        cta: 'Найти эксклюзив'
      },
      smallBusiness: {
        title: 'Малый бизнес и амбициозные новички',
        description: 'Предприниматели, которые хотят запустить свой первый проект по импорту из Европы, но боятся ошибок и бюрократии. Мы станем вашим внешним отделом ВЭД: поможем собрать первую партию из товаров от разных поставщиков и проведем через все этапы логистики.',
        cta: 'Начать импорт'
      },
      investors: {
        title: 'Инвесторы-стратеги',
        description: 'Люди с капиталом, нацеленные на диверсификацию через реальный сектор и товарный бизнес в Италии. Мы подберем ликвидные ниши с высокой маржинальностью, рассчитаем ROI и возьмем на себя полное операционное управление процессами.',
        cta: 'Рассчитать ROI'
      }
    },
    whyThisWorks: {
      badge: 'Наш подход',
      title: 'Почему это сработает',
      subtitle: 'Для каждого типа клиента — свой ключевой аргумент и стратегия',
      distributor: {
        tabTitle: 'Для дистрибьюторов',
        title: 'Эксклюзив и отстройка от конкурентов',
        description: 'Для дистрибьютора ключевое слово — «эксклюзив» и «отстроиться от конкурентов», потому что массмаркет уже у всех есть. Мы находим уникальных итальянских производителей, с которыми нет прямых контрактов у крупных игроков.',
        point1: 'Прямые контракты с мануфактурами',
        point2: 'Эксклюзивные права на территорию',
        point3: 'Стабильные поставки под ключ',
        point4: 'Отстройка от конкурентов'
      },
      beginner: {
        tabTitle: 'Для новичков',
        title: 'Безопасность и сборная партия',
        description: 'Для новичка главное — «безопасность» и «сборная партия» (возможность не покупать сразу целый контейнер). Мы минимизируем риски первого импорта и сопровождаем на каждом этапе.',
        point1: 'Сборная партия от разных поставщиков',
        point2: 'Полное сопровождение «от А до Я»',
        point3: 'Минимальные риски для бюджета',
        point4: 'Обучение процессам ВЭД'
      },
      investor: {
        tabTitle: 'Для инвесторов',
        title: 'ROI, ликвидные ниши и ноль операционки',
        description: 'Для инвестора важны цифры («ROI», «ликвидные ниши») и «отсутствие операционки» (управление процессами). Мы берем на себя всю операционную работу, а вы получаете прозрачную отчетность.',
        point1: 'Расчет ROI до старта проекта',
        point2: 'Ликвидные ниши с высокой маржой',
        point3: 'Полное операционное управление',
        point4: 'Прозрачная финансовая отчетность'
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
      title: 'Your partner in export and import in Italy and Europe',
      subtitle: 'Strategic management of export-import operations in Italy and the EU',
      description: 'Comprehensive business integration into the European environment: from developing Go-to-Market strategy to operational supply management and compliance assurance.',
      cta: 'Request consultation',
      learnMore: 'Why Us',
      trusted: 'Trusted by 150+ companies'
    },
    specialization: {
      title: 'Our specialization',
      subtitle: 'We work with companies and business owners who are looking for:',
      item1: 'Established supply chains and contractors',
      item2: 'Controlled entry into a new market',
      item3: 'Minimization of regulatory, operational, and financial risks',
      item4: 'Predictable results without loss of control'
    },
    value: {
      title: 'Why choose us',
      subtitle: 'Confidentiality, expertise and results',
      confidentiality: {
        title: 'Absolute confidentiality',
        description: 'All data is protected. NDA with each client. Complete anonymity of transactions.'
      },
      speed: {
        title: 'Speed of execution',
        description: 'Quick problem solving. Fast request processing. Minimum time to launch.'
      },
      professionalism: {
        title: 'Professionalism',
        description: 'Highest standards of work. Proven expertise. Recognized service quality.'
      },
      expertise: {
        title: 'Expert consulting',
        description: 'Experience with major companies. Deep knowledge of international markets.'
      },
      support: {
        title: '24/7 support',
        description: 'Always in touch. We solve issues in real time.'
      }
    },
    services: {
      title: 'Our services',
      subtitle: 'Full cycle consulting for your business',
      cta: 'Discuss project',
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
        title: 'Consultation',
        description: 'We discuss your situation and goals in a confidential setting'
      },
      step2: {
        title: 'Analysis',
        description: 'We study the market, assess opportunities and risks'
      },
      step3: {
        title: 'Strategy',
        description: 'We develop an individual action plan'
      },
      step4: {
        title: 'Implementation',
        description: 'We support at every stage until the result is achieved'
      },
      strategicSession: {
        title: 'Strategic session',
        description: 'Sign up for an initial consultation to assess export potential and identify regulatory barriers on target markets in Italy and Central Europe.',
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
      title: 'Our team',
      subtitle: 'Experts with global experience',
      tagline: 'We build bridges between your business and the Italian market',
      cta: 'Book a consultation',
      anna: {
        name: 'Anna',
        role: 'Co-founder, Business Developer',
        bio: 'Marketing strategist and Business Developer with 12 years of living and working experience in Italy',
        experience1: '8 years in marketing and 4 years in consulting: specializes in building systematic sales and strategic funnels for the B2B sector',
        experience2: 'Managed projects to launch brands in Italian and European markets, responsible for product adaptation and commercial strategy',
        experience3: 'Architect of business communities: created an ecosystem for entrepreneurs in Italy, providing access to local network and partners',
        quote: '"My mission is not just to launch a project, but to build a system ensuring its sustainable profitability in the market"'
      },
      marina: {
        name: 'Marina Lobach',
        role: 'Co-founder',
        title: 'Operational Management Expert',
        bio: '10 years of deep expertise in business process management',
        experience1: 'International Import-Export operations and project development in the Italian market',
        experience2: 'Launched a number of successful startups in Italy, deeply understanding all the complexities of starting a business from scratch in the local market',
        experience3: 'Organized over 40 exhibition projects in Europe and Russia, ensuring strategy, presence logic and results for brands',
        quote: '"We are not intermediaries. We are guides to the Italian system."'
      }
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
      companyDescription: 'Premium consulting in international trade with guaranteed confidentiality',
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
      allRightsFull: 'All rights reserved.'
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
        description: 'Market professionals seeking exclusive products from small family-owned Italian manufacturers. We help you stand out from competitors, find unique products, and ensure turnkey supply stability.',
        cta: 'Find exclusives'
      },
      smallBusiness: {
        title: 'Small business & ambitious newcomers',
        description: 'Entrepreneurs who want to launch their first European import project but fear mistakes and bureaucracy. We become your external trade department: help assemble your first mixed shipment from various suppliers and guide you through every logistics stage.',
        cta: 'Start importing'
      },
      investors: {
        title: 'Strategic investors',
        description: 'People with capital aimed at diversification through the real sector and commodity business in Italy. We select liquid niches with high margins, calculate ROI, and take on complete operational management.',
        cta: 'Calculate ROI'
      }
    },
    whyThisWorks: {
      badge: 'Our approach',
      title: 'Why this works',
      subtitle: 'For each client type — a key argument and tailored strategy',
      distributor: {
        tabTitle: 'For distributors',
        title: 'Exclusivity & competitive edge',
        description: 'For distributors, the key words are "exclusivity" and "standing out from competitors," because everyone already has mass-market products. We find unique Italian manufacturers with no direct contracts with major players.',
        point1: 'Direct contracts with manufacturers',
        point2: 'Exclusive territorial rights',
        point3: 'Turnkey stable supply chain',
        point4: 'Clear competitive differentiation'
      },
      beginner: {
        tabTitle: 'For newcomers',
        title: 'Safety & mixed shipments',
        description: 'For newcomers, the key is "safety" and "mixed shipments" (no need to buy a whole container at once). We minimize first import risks and provide guidance at every stage.',
        point1: 'Mixed shipments from multiple suppliers',
        point2: 'Full A-to-Z support',
        point3: 'Minimal budget risks',
        point4: 'Foreign trade process training'
      },
      investor: {
        tabTitle: 'For investors',
        title: 'ROI, liquid niches & zero operations',
        description: 'For investors, it\'s all about numbers ("ROI," "liquid niches") and "zero operations" (process management). We handle all operational work while you receive transparent reporting.',
        point1: 'ROI calculation before project launch',
        point2: 'Liquid niches with high margins',
        point3: 'Complete operational management',
        point4: 'Transparent financial reporting'
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
      title: 'Votre partenaire en exportation et importation en Italie et en Europe',
      subtitle: 'Gestion stratégique des opérations d\'export-import en Italie et dans l\'UE',
      description: 'Intégration complète de l\'entreprise dans l\'environnement européen : du développement de la stratégie Go-to-Market à la gestion opérationnelle des livraisons et à l\'assurance de la conformité.',
      cta: 'Demander une consultation',
      learnMore: 'Pourquoi nous',
      trusted: 'Approuvé par plus de 150 entreprises'
    },
    specialization: {
      title: 'Notre spécialisation',
      subtitle: 'Nous travaillons avec des entreprises et des propriétaires de business qui cherchent :',
      item1: 'Chaînes de fourniture et sous-traitants établis',
      item2: 'Entrée contrôlée sur un nouveau marché',
      item3: 'Minimisation des risques réglementaires, opérationnels et financiers',
      item4: 'Résultats prévisibles sans perte de contrôle'
    },
    value: {
      title: 'Pourquoi nous choisir',
      subtitle: 'Confidentialité, expertise et résultats',
      confidentiality: {
        title: 'Confidentialité absolue',
        description: 'Toutes les données sont protégées. NDA avec chaque client. Anonymat complet des transactions.'
      },
      speed: {
        title: 'Vitesse d\'exécution',
        description: 'Résolution rapide des problèmes. Traitement rapide des demandes. Temps minimum pour le lancement.'
      },
      professionalism: {
        title: 'Professionalisme',
        description: 'Normes de travail les plus élevées. Expertise prouvée. Qualité de service reconnue.'
      },
      expertise: {
        title: 'Conseil expert',
        description: 'Expérience avec les grandes entreprises. Connaissance approfondie des marchés internationaux.'
      },
      support: {
        title: 'Support 24/7',
        description: 'Toujours en contact. Nous résolvons les problèmes en temps réel.'
      }
    },
    services: {
      title: 'Nos services',
      subtitle: 'Conseil complet pour votre entreprise',
      cta: 'Discuter du projet',
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
        title: 'Consultation',
        description: 'Nous discutons de votre situation et de vos objectifs dans un cadre confidentiel'
      },
      step2: {
        title: 'Analyse',
        description: 'Nous étudions le marché, évaluons les opportunités et les risques'
      },
      step3: {
        title: 'Stratégie',
        description: 'Nous élaborons un plan d\'action individuel'
      },
      step4: {
        title: 'Mise en œuvre',
        description: 'Nous accompagnons à chaque stadio jusqu\'à l\'obtention du résultat'
      },
      strategicSession: {
        title: 'Session stratégique',
        description: 'Inscrivez-vous pour une consultation initiale pour évaluer le potentiel d\'exportation et identifier les barrières réglementaires sur les marchés cibles en Italie et en Europe centrale.',
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
      title: 'Notre équipe',
      subtitle: 'Experts avec expérience mondiale',
      tagline: 'Nous construisons des ponts entre votre entreprise et le marché italien',
      cta: 'Réserver une consultation',
      anna: {
        name: 'Anna',
        role: 'Co-fondatrice, Business Developer',
        bio: 'Stratège marketing et Business Developer avec 12 ans d\'expérience de vie et de travail en Italie',
        experience1: '8 ans en marketing et 4 ans en conseil: spécialisée dans la construction de ventes systématiques et d\'entonnoirs stratégiques pour le secteur B2B',
        experience2: 'A géré des projets de lancement de marques sur les marchés italiens et européens, responsable de l\'adaptation du produit et de la stratégie commerciale',
        experience3: 'Architecte de communautés d\'affaires: a créé un écosystème pour les entrepreneurs en Italie, fournissant un accès au réseau local et aux partenaires',
        quote: '«Ma mission n\'est pas de me limiter au lancement d\'un projet, mais de construire un système assurant sa rentabilité durable sur le marché»'
      },
      marina: {
        name: 'Marina Lobach',
        role: 'Co-fondatrice',
        title: 'Experte en gestion opérationnelle',
        bio: '10 ans d\'expertise approfondie dans la gestion des processus d\'entreprise',
        experience1: 'Opérations Import-Export internationales et développement de projets sur le marché italien',
        experience2: 'A lancé plusieurs startups de succès en Italie, comprenant toutes les complexités de la création d\'une entreprise à partir de zéro sur le marché local',
        experience3: 'A organisé plus de 40 projets de salon en Europe et en Russie, assurant stratégie, logique de présence et résultats pour les marques',
        quote: '«Nous ne sommes pas des intermédiaires. Nous sommes des guides vers le système italien.»'
      }
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
      companyDescription: 'Conseil premium dans le commerce international avec garantie de confidentialité',
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
      diagnosticDescription: 'Inscrivez-vous pour une session deagnostica de 30 minutes. Nous analyserons votre cas et vous dirons quels obstacles vous pourriez rencontrer en Italie ou en Europe centrale.',
      whatsappTelegramLabel: 'WhatsApp / Telegram',
      whatsappLink: '[Lien direct]',
      emailLabel: 'Email',
      emailLink: '[Email professionnel]',
      locationLabel: 'Localisation',
      locationText: 'Milan / Vérone, toute l\'Italie et l\'UE',
      connectWhatsapp: 'Contactez-nous via WhatsApp',
      contactsTitle: 'CONTACTS',
      officeMilan: 'Vérone, Italie',
      allRightsFull: 'Tous droits réservés.'
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
        description: 'Des professionnels du marché à la recherche de produits exclusifs de petites manufactures familiales italiennes. Nous vous aidons à vous démarquer de la concurrence, à trouver des produits uniques et à assurer la stabilité des livraisons clé en main.',
        cta: 'Trouver l\'exclusivité'
      },
      smallBusiness: {
        title: 'Petites entreprises et nouveaux ambitieux',
        description: 'Des entrepreneurs qui souhaitent lancer leur premier projet d\'importation européenne mais craignent les erreurs et la bureaucratie. Nous devenons votre département commerce extérieur : nous vous aidons à constituer votre premier lot mixte et vous guidons à chaque étape logistique.',
        cta: 'Commencer l\'import'
      },
      investors: {
        title: 'Investisseurs stratégiques',
        description: 'Des personnes disposant de capital visant la diversification par le secteur réel et le commerce de marchandises en Italie. Nous sélectionnons des niches liquides à haute marge, calculons le ROI et prenons en charge la gestion opérationnelle complète.',
        cta: 'Calculer le ROI'
      }
    },
    whyThisWorks: {
      badge: 'Notre approche',
      title: 'Pourquoi ça marche',
      subtitle: 'Pour chaque type de client — un argument clé et une stratégie adaptée',
      distributor: {
        tabTitle: 'Pour les distributeurs',
        title: 'Exclusivité et avantage concurrentiel',
        description: 'Pour le distributeur, les mots clés sont « exclusivité » et « se démarquer de la concurrence », car tout le monde a déjà du mass-market. Nous trouvons des fabricants italiens uniques sans contrats directs avec les grands acteurs.',
        point1: 'Contrats directs avec les manufactures',
        point2: 'Droits territoriaux exclusifs',
        point3: 'Chaîne d\'approvisionnement clé en main',
        point4: 'Différenciation concurrentielle claire'
      },
      beginner: {
        tabTitle: 'Pour les débutants',
        title: 'Sécurité et lots mixtes',
        description: 'Pour le débutant, l\'essentiel est la « sécurité » et le « lot mixte » (pas besoin d\'acheter un conteneur entier). Nous minimisons les risques de la première importation et accompagnons à chaque étape.',
        point1: 'Lots mixtes de différents fournisseurs',
        point2: 'Accompagnement complet de A à Z',
        point3: 'Risques budgétaires minimaux',
        point4: 'Formation aux processus de commerce extérieur'
      },
      investor: {
        tabTitle: 'Pour les investisseurs',
        title: 'ROI, niches liquides et zéro opérationnel',
        description: 'Pour l\'investisseur, ce sont les chiffres qui comptent (« ROI », « niches liquides ») et « zéro opérationnel » (gestion des processus). Nous prenons en charge tout le travail opérationnel avec une transparence totale.',
        point1: 'Calcul du ROI avant le lancement',
        point2: 'Niches liquides à haute marge',
        point3: 'Gestion opérationnelle complète',
        point4: 'Rapports financiers transparents'
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
      title: 'Il vostro partner per l\'export e l\'import in Italia e in Europa',
      subtitle: 'Gestione strategica delle operazioni di export-import in Italia e nell\'UE',
      description: 'Integrazione completa del business nell\'ambiente europeo: dallo sviluppo della strategia Go-to-Market alla gestione operativa delle forniture e alla garanzia della compliance.',
      cta: 'Richiedi una consulenza',
      learnMore: 'Perché noi',
      trusted: 'Fidati da più di 150 aziende'
    },
    specialization: {
      title: 'La nostra specializzazione',
      subtitle: 'Lavoriamo con aziende e proprietari di business che cercano:',
      item1: 'Catene di fornitura e subappaltatori stabiliti',
      item2: 'Entrata controllata su un nuovo mercato',
      item3: 'Minimizzazione dei rischi regolamentari, operativi e finanziari',
      item4: 'Risultati prevedibili senza perdita di controllo'
    },
    value: {
      title: 'Perché sceglierci',
      subtitle: 'Confidenzialità, competenza e risultati',
      confidentiality: {
        title: 'Confidenzialità assoluta',
        description: 'Tutti i dati sono protetti. NDA con ogni cliente. Anonimia completa delle transazioni.'
      },
      speed: {
        title: 'Velocità di esecuzione',
        description: 'Risoluzione rapida dei problemi. Elaborazione rapida delle richieste. Tempo minimo per il lancio.'
      },
      professionalism: {
        title: 'Professionalità',
        description: 'Norme di lavoro più alte. Esperienza confermata. Qualità dei servizi riconosciuta.'
      },
      expertise: {
        title: 'Consulenza esperta',
        description: 'Esperienza con le grandi aziende. Conoscenza approfondita dei mercati internazionali.'
      },
      support: {
        title: 'Supporto 24/7',
        description: 'Sempre in contatto. Risolviamo i problemi in tempo reale.'
      }
    },
    services: {
      title: 'I nostri servizi',
      subtitle: 'Consulenza completa per il tuo business',
      cta: 'Discutiamo del progetto',
      export: {
        title: 'Consulenza esportativa',
        description: 'Aiutiamo ad entrare nei mercati internazionali, trovare partner, preparare tutta la documentazione'
      },
      import: {
        title: 'Consulenza importativa',
        description: 'Trova fornitori affidabili, organizza la logistica, assicura la qualità del prodotto'
      },
      compliance: {
        title: 'Supporto legale',
        description: 'Verifica dei contraenti, contratti, formalizzazione doganale, conformità legale'
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
        title: 'Consultazione',
        description: 'Discutiamo della tua situazione e dei tuoi obiettivi in un ambiente confidenziale'
      },
      step2: {
        title: 'Analisi',
        description: 'Studiamo il mercato, valutiamo le opportunità e i rischi'
      },
      step3: {
        title: 'Strategia',
        description: 'Sviluppiamo un piano d\'azione individuale'
      },
      step4: {
        title: 'Implementazione',
        description: 'Ti accompagniamo ad ogni stadio fino a raggiungere il risultato'
      },
      strategicSession: {
        title: 'Sessione strategica',
        description: 'Iscriviti per una consulenza iniziale per valutare il potenziale di esportazione e identificare le barriere regolamentari sui mercati di destinazione in Italia e Europa centrale.',
        whatsappTelegram: 'WhatsApp / Telegram: [Link diretto]',
        email: 'Email: [Email aziendale]',
        office: 'Ufficio: Milano / Verona, Italia'
      },
      security: {
        title: 'Confidenzialità ad ogni stadio',
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
      title: 'Il nostro team',
      subtitle: 'Esperti con esperienza globale',
      tagline: 'Costruiamo ponti tra il tuo business e il mercato italiano',
      cta: 'Prenota una consulenza',
      anna: {
        name: 'Anna',
        role: 'Co-fondatrice, Business Developer',
        bio: 'Stratega di marketing e Business Developer con 12 anni di esperienza di vita e lavoro in Italia',
        experience1: '8 anni nel marketing e 4 anni nella consulenza: specializzata nella costruzione di vendite sistematiche e funnel strategici per il settore B2B',
        experience2: 'Ha gestito progetti di lancio di marchi sui mercati italiani ed europei, responsabile dell\'adattamento del prodotto e della strategia commerciale',
        experience3: 'Architetto di comunità aziendali: ha creato un ecosistema per gli imprenditori in Italia, garantendo l\'accesso alla rete locale e ai partner',
        quote: '«La mia missione non è limitarsi al lancio di un progetto, ma costruire un sistema che assicuri la sua redditività sostenibile sul mercato»'
      },
      marina: {
        name: 'Marina Lobach',
        role: 'Co-fondatrice',
        title: 'Esperta di gestione operativa',
        bio: '10 anni di profonda esperienza nella gestione dei processi aziendali',
        experience1: 'Operazioni Import-Export internazionali e sviluppo di progetti sul mercato italiano',
        experience2: 'Ha avviato una serie di startup di successo in Italia, comprendendo tutte le complessità della creazione di un\'azienda da zero sul mercato locale',
        experience3: 'Ha organizzato più di 40 progetti di fiera in Europa e Russia, garantendo strategia, logica di presenza e risultati per i marchi',
        quote: '«Non siamo intermediari. Siamo guide nel sistema italiano.»'
      }
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
      companyDescription: 'Consulenza premium nel commercio internazionale con garanzia di confidenzialità',
      quickLinks: 'Collegamenti rapidi',
      services: 'Servizi',
      process: 'Processo di lavoro',
      team: 'Team',
      contact: 'Contatti',
      legal: 'Informazioni legali',
      privacy: 'Politica di privacy',
      terms: 'Condizioni d\'uso',
      nda: 'Accordo di non divulgazione',
      followUs: 'Seguici',
      allRights: 'Tutti i diritti riservati.',
      madeWith: 'Creato con',
      forBusiness: 'per i business',
      readyForNewMarkets: 'Pronto ad entrare su',
      newMarkets: 'nuovi mercati?',
      diagnosticDescription: 'Iscriviti per una sessione diagnostica di 30 minuti. Analizzeremo il tuo caso e ti diremo quali ostacoli potresti incontrare in Italia o in Europa centrale.',
      whatsappTelegramLabel: 'WhatsApp / Telegram',
      whatsappLink: '[Link diretto]',
      emailLabel: 'Email',
      emailLink: '[Email aziendale]',
      locationLabel: 'Località',
      locationText: 'Milano / Verona, tutta l\'Italia e l\'UE',
      connectWhatsapp: 'Contattaci via WhatsApp',
      contactsTitle: 'CONTATTI',
      officeMilan: 'Verona, Italia',
      allRightsFull: 'Tutti i diritti riservati.'
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
        description: 'Professionisti del mercato alla ricerca di prodotti esclusivi da piccole manifatture familiari italiane. Vi aiutiamo a distinguervi dalla concorrenza, a trovare prodotti unici e a garantire la stabilità delle forniture chiavi in mano.',
        cta: 'Trovare l\'esclusività'
      },
      smallBusiness: {
        title: 'Piccole imprese e nuovi ambiziosi',
        description: 'Imprenditori che vogliono lanciare il loro primo progetto di importazione europea ma temono errori e burocrazia. Diventiamo il vostro dipartimento commercio estero: vi aiutiamo a comporre il primo lotto misto da diversi fornitori e vi guidiamo in ogni fase logistica.',
        cta: 'Iniziare l\'importazione'
      },
      investors: {
        title: 'Investitori strategici',
        description: 'Persone con capitale orientate alla diversificazione attraverso il settore reale e il commercio di merci in Italia. Selezioniamo nicchie liquide ad alto margine, calcoliamo il ROI e ci occupiamo della gestione operativa completa.',
        cta: 'Calcolare il ROI'
      }
    },
    whyThisWorks: {
      badge: 'Il nostro approccio',
      title: 'Perché funziona',
      subtitle: 'Per ogni tipo di cliente — un argomento chiave e una strategia su misura',
      distributor: {
        tabTitle: 'Per i distributori',
        title: 'Esclusività e vantaggio competitivo',
        description: 'Per il distributore, le parole chiave sono «esclusività» e «distinguersi dalla concorrenza», perché il mass-market lo hanno tutti. Troviamo produttori italiani unici senza contratti diretti con i grandi player.',
        point1: 'Contratti diretti con le manifatture',
        point2: 'Diritti territoriali esclusivi',
        point3: 'Catena di fornitura chiavi in mano',
        point4: 'Differenziazione competitiva chiara'
      },
      beginner: {
        tabTitle: 'Per i principianti',
        title: 'Sicurezza e lotti misti',
        description: 'Per il principiante, l\'essenziale è la «sicurezza» e il «lotto misto» (non serve comprare un intero container). Minimizziamo i rischi della prima importazione e accompagniamo in ogni fase.',
        point1: 'Lotti misti da diversi fornitori',
        point2: 'Accompagnamento completo dalla A alla Z',
        point3: 'Rischi di budget minimi',
        point4: 'Formazione sui processi di commercio estero'
      },
      investor: {
        tabTitle: 'Per gli investitori',
        title: 'ROI, nicchie liquide e zero operatività',
        description: 'Per l\'investitore contano i numeri («ROI», «nicchie liquide») e «zero operatività» (gestione dei processi). Ci occupiamo di tutto il lavoro operativo con totale trasparenza.',
        point1: 'Calcolo del ROI prima del lancio',
        point2: 'Nicchie liquide ad alto margine',
        point3: 'Gestione operativa completa',
        point4: 'Report finanziari trasparenti'
      }
    },
    whatsapp: 'Contattaci via WhatsApp',
    writeUs: 'Scrivici',
    contactUs: 'Contattaci'
  }
};