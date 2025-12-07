import { Language } from "./types";

export const MOCK_HISTORY = [
  { id: '1', type: 'earn', description: 'Recycled Plastic Bottles', date: '2024-03-10', amount: 50 },
  { id: '2', type: 'spend', description: 'EcoStore Voucher', date: '2024-03-08', amount: 200 },
  { id: '3', type: 'earn', description: 'Recycled Cardboard', date: '2024-03-05', amount: 30 },
  { id: '4', type: 'earn', description: 'Glass Recycling', date: '2024-03-01', amount: 45 },
];

export const TRANSLATIONS = {
  [Language.UZ]: {
    nav: {
      home: "Asosiy",
      dashboard: "EcoHub",
      scanner: "AI Skaner",
      security: "Xavfsizlik",
      profile: "Kabinet",
      login: "Kirish",
      logout: "Chiqish"
    },
    hero: {
      title: "Kelajak Iqtisodiyoti.",
      subtitle: "EcoCash — har bir chiqindini raqamli aktivga aylantiruvchi global platforma. Davlat tomonidan himoyalangan, AI tomonidan boshqariladi.",
      cta: "Tizimga Ulanish",
      secondary: "Batafsil"
    },
    stats: {
      collected: "Yig'ilgan Chiqindi",
      payouts: "To'langan Mablag'",
      users: "Tizim Foydalanuvchilari",
      co2: "Tejalgan CO₂"
    },
    scanner: {
      title: "Neyron Tarmoq Tahlili",
      drop: "Obyektni aniqlash uchun bosing",
      analyzing: "AI ma'lumotlarni qayta ishlamoqda...",
      result: "Tahlil Natijasi",
      verify: "EcoCoin Qabul Qilish"
    },
    auth: {
      loginTitle: "EcoCash ID",
      registerTitle: "Yangi Hisob",
      name: "Ism-Sharif",
      email: "Email",
      password: "Maxfiy Kod",
      submitLogin: "Tizimga Kirish",
      submitRegister: "Ro'yxatdan O'tish",
      switchLogin: "Akkaunt bormi? Kirish",
      switchRegister: "Yangi foydalanuvchimisiz?"
    },
    dashboard: {
      welcome: "Xush kelibsiz",
      balance: "EcoCoin Balansi",
      level: "Daraja",
      impact: "Shaxsiy Hissa",
      global: "Tizim Ko'rsatkichlari",
      history: "Faoliyat Tarixi"
    },
    profile: {
      balance: "Balans",
      recycled: "Qayta ishlangan",
      history: "Faoliyat Tarixi"
    },
    security: {
      badge: "ANTI-FRAUD STACK",
      title: "GPS Qulf + AI Ko'z + Blokcheyn",
      subtitle: "Har bir EcoCoin qayta ishlash isboti bilan ta'minlangan va ko'p bosqichli tekshiruvdan o'tgan.",
      features: [
        {
          title: "Geo-fenced Capture",
          desc: "Joylashuv imzolari GPS, Wi-Fi va oflayn nuqtalarni birlashtiradi, shuning uchun har bir topshirish real vaqt va joyga bog'lanadi."
        },
        {
          title: "AI Qalqon",
          desc: "Kompyuter ko'rishi (Computer Vision) internetdagi rasmlarni, dublikatlarni va soxta urinishlarni mukofot berishdan oldin aniqlaydi."
        },
        {
          title: "Blokcheyn Reestri",
          desc: "Barcha tranzaksiyalar shaffof audit va hamkorlar hisoboti uchun energiya tejamkor blokcheyn tarmog'iga yoziladi."
        }
      ],
      footer: "100% FIRIBGARLIKDAN HIMOYALANGAN • O'ZGARMAS YOZUVLAR • TEZKOR TEKSHIRUV"
    }
  },
  [Language.RU]: {
    nav: {
      home: "Главная",
      dashboard: "EcoHub",
      scanner: "AI Сканер",
      security: "Безопасность",
      profile: "Кабинет",
      login: "Войти",
      logout: "Выйти"
    },
    hero: {
      title: "Экономика Будущего.",
      subtitle: "EcoCash — глобальная платформа, превращающая отходы в цифровые активы. Защищено государством, управляется ИИ.",
      cta: "Присоединиться",
      secondary: "Подробнее"
    },
    stats: {
      collected: "Собрано Отходов",
      payouts: "Выплачено Средств",
      users: "Пользователи Системы",
      co2: "Сэкономлено CO₂"
    },
    scanner: {
      title: "Анализ Нейросети",
      drop: "Нажмите для распознавания",
      analyzing: "ИИ обрабатывает данные...",
      result: "Результат Анализа",
      verify: "Получить EcoCoin"
    },
    auth: {
      loginTitle: "EcoCash ID",
      registerTitle: "Новый Аккаунт",
      name: "ФИО",
      email: "Email",
      password: "Код доступа",
      submitLogin: "Войти в систему",
      submitRegister: "Регистрация",
      switchLogin: "Есть аккаунт? Войти",
      switchRegister: "Новый пользователь?"
    },
    dashboard: {
      welcome: "Добро пожаловать",
      balance: "Баланс EcoCoin",
      level: "Уровень",
      impact: "Личный Вклад",
      global: "Показатели Системы",
      history: "История Активности"
    },
    profile: {
      balance: "Баланс",
      recycled: "Переработано",
      history: "История"
    },
    security: {
      badge: "ANTI-FRAUD STACK",
      title: "GPS Замок + AI Зрение + Блокчейн",
      subtitle: "Каждый EcoCoin обеспечен доказательством переработки и защищен многоуровневой проверкой.",
      features: [
        {
          title: "Гео-привязка",
          desc: "Сигнатуры местоположения объединяют GPS и Wi-Fi, привязывая каждую транзакцию к реальному месту и времени."
        },
        {
          title: "AI Щит",
          desc: "Компьютерное зрение отклоняет стоковые фото, обнаруживает дубликаты и помечает загрязнения до выдачи наград."
        },
        {
          title: "Блокчейн Реестр",
          desc: "Все транзакции записываются в энергоэффективный реестр для прозрачного аудита и отчетности партнеров."
        }
      ],
      footer: "100% ЗАЩИТА ОТ МОШЕННИЧЕСТВА • НЕИЗМЕННЫЕ ЗАПИСИ • МГНОВЕННАЯ ПРОВЕРКА"
    }
  },
  [Language.EN]: {
    nav: {
      home: "Home",
      dashboard: "EcoHub",
      scanner: "AI Scanner",
      security: "Security",
      profile: "Cabinet",
      login: "Login",
      logout: "Logout"
    },
    hero: {
      title: "The Future Economy.",
      subtitle: "EcoCash — global platform converting waste into digital assets. Government secured, AI powered.",
      cta: "Connect System",
      secondary: "Learn More"
    },
    stats: {
      collected: "Waste Collected",
      payouts: "Total Payouts",
      users: "Active Users",
      co2: "CO₂ Saved"
    },
    scanner: {
      title: "Neural Network Analysis",
      drop: "Click to Identify Object",
      analyzing: "AI Processing Data...",
      result: "Analysis Result",
      verify: "Claim EcoCoins"
    },
    auth: {
      loginTitle: "EcoCash ID",
      registerTitle: "New Account",
      name: "Full Name",
      email: "Email",
      password: "Passcode",
      submitLogin: "Access System",
      submitRegister: "Register",
      switchLogin: "Have ID? Login",
      switchRegister: "New User?"
    },
    dashboard: {
      welcome: "Welcome back",
      balance: "EcoCoin Balance",
      level: "Level",
      impact: "Personal Impact",
      global: "Platform Statistics",
      history: "Activity History"
    },
    profile: {
      balance: "Balance",
      recycled: "Recycled",
      history: "History"
    },
    security: {
      badge: "ANTI-FRAUD STACK",
      title: "GPS lock + AI vision + blockchain ledger",
      subtitle: "Every EcoCoin is backed by proof of recycling secured with multi-layer verification.",
      features: [
        {
          title: "Geo-fenced capture",
          desc: "Location signatures combine GPS, Wi-Fi and offline checkpoints so every submission is tied to a real place and time."
        },
        {
          title: "AI Shield",
          desc: "Computer vision rejects stock photos, detects duplicates and flags contamination before rewards are issued."
        },
        {
          title: "Blockchain ledger",
          desc: "All transactions are written to an energy-efficient ledger for transparent auditing and partner reporting."
        }
      ],
      footer: "100% FRAUD-PROOF • IMMUTABLE RECORDS • INSTANT VERIFICATION"
    }
  }
};