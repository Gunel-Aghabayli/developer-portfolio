const quotes = [
  {
    message: {
      en: "With great power comes great electricity bill",
      az: "Böyük güclə böyük elektrik hesabı gəlir"
    },
    author: {
      en: "Dr. Who",
      az: "Dr. Kim"
    }
  },
  {
    message: {
      en: "Good code is its own best documentation",
      az: "Yaxşı kod özünün ən yaxşı sənədləşdirməsidir"
    },
    author: {
      en: "Steve McConnell",
      az: "Stiv Makkonnell"
    }
  },
  {
    message: {
      en: "A good programmer is lazy but efficient",
      az: "Yaxşı proqramçı tənbəl amma səmərəlidir"
    },
    author: {
      en: "Jeff Sickel",
      az: "Cef Sikel"
    }
  }
];

const projects = [
  {
    name: {
      en: "Qamico",
      az: "Qamico"
    },
    description: {
      en: "Game development",
      az: "Oyun inkişafı"
    },
    image: "./assets/images/Screenshot 2025-08-12 200432.png",
    tags: ["Supabase", "React JS", "Redux"],
    github: "#",
  },
   {
    name: {
      en: "Blanca",
      az: "Blanca"
    },
    description: {
      en: "Personal travel blog",
      az: "Şəxsi səyahət blogu"
    },
    image: "/assets/images/Screenshot 2025-08-12 200639.png",
    tags: ["HTML", "SCSS"],
    github: "#",
  },
   {
    name: {
      en: "Omnifood",
      az: "Omnifood"
    },
    description: {
      en: "Food delivery service",
      az: "Yemək çatdırılma xidməti"
    },
    image: "/assets/images/Screenshot 2025-08-12 200936.png",
    tags: ["CSS", "React JS", "Redux"],
    github: "#",
  },
   {
    name: {
      en: "Powertool",
      az: "Powertool"
    },
    description: {
      en: "Power tools cordless",
      az: "Elektrik alətləri"
    },
    image: "/assets/images/Screenshot 2025-08-12 205557.png",
    tags: ["HTML", "SCSS"],
    github: "#",
  },
   {
    name: {
      en: "Clark",
      az: "Clark"
    },
    description: {
      en: "Freelance web designer portfolio",
      az: "Frilans veb designer portfolio"
    },
    image: "/assets/images/Screenshot 2025-08-12 200241.png",
    tags: ["Supabase", "React JS"],
    github: "#",
  },
   {
    name: {
      en: "Prospark",
      az: "Prospark"
    },
    description: {
      en: "Digital marketing services",
      az: "Rəqəmsal marketinq xidmətləri"
    },
    image: "/assets/images/Screenshot 2025-08-12 200836.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "#",
  },
   {
    name: {
      en: "Accent",
      az: "Accent"
    },
    description: {
      en: "Web studio",
      az: "Veb studiya"
    },
    image: "/assets/images/Screenshot 2025-08-14 023459.png",
    tags: ["Supabase", "React JS", "Redux"],
    github: "#",
  },
];

const skills = {
  languages: ["JavaScript", "TypeScript"],
  styling: ["HTML", "CSS", "SCSS(SASS)", "Bootstrap", "Tailwind CSS"],
  tools: ["Git"],
  frameworks: ["React JS", "Next JS"],
};

const about = {
  shortText: {
    en: "My name is Gunel. I'm a front-end developer based in Baku, Azerbaijan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences...",
    az: "Mənim adım Güneldir. Mən Bakı, Azərbaycanda yaşayan front-end developerəm. Sıfırdan responsiv vebsaytlar hazırlaya bilirəm və onları müasir, istifadəçi dostu veb təcrübələrinə çevirə bilirəm..."
  },
  fullText: {
    en: `My name is Gunel. I'm a front-end developer based in Baku, Azerbaijan. 
I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 
Transforming my creativity and knowledge into a websites has been my passion for over one years. 
I have been helping various clients to establish their presence online. 
I always strive to learn about the newest technologies and frameworks.`,
    az: `Mənim adım Güneldir. Mən Bakı, Azərbaycanda yaşayan front-end developerəm.
Sıfırdan responsiv vebsaytlar hazırlaya bilirəm və onları müasir, istifadəçi dostu veb təcrübələrinə çevirə bilirəm.
Yaradıcılığımı və biliklərimi vebsaytlara çevirmək bir ildən çoxdur ki, mənim eşqimdir.
Müxtəlif müştərilərə onlayn mövcudluq yaratmaqda kömək edirəm.
Həmişə ən yeni texnologiyalar və freymvorklar haqqında öyrənməyə çalışıram.`
  }
};

const contact = {
  email: {
    icon: "./assets/images/Email.png",
    text: "gunelagab@gmail.com",
    link: "mailto:gunelagab@gmail.com",
  },
  discord: {
    icon: "./assets/images/Discord.png",
    text: "gunelaghabay",
    link: "https://discord.com/users/gunel_25154",
  },
};

const footer = {
  email: {
    text: "gunelagab@gmail.com",
    link: "mailto:gunelagab@gmail.com",
  },
  socials: [
    { icon: "./assets/images/Github.png", alt: "github", link: "https://github.com/Gunel-Aghabayli" },
    { icon: "./assets/images/Figma (1).png", alt: "figma", link: "https://www.figma.com/design/OrlHrwxkYmikZ33JyAh5EF/Portfolio--Community-?node-id=0-1&p=f&t=gFuQWq6Gv8fHhNeE-0" },
    { icon: "./assets/images/Email.png", alt: "email", link: "mmailto:gunelagab@gmail.com" },
  ],
};

const educationData = [
  {
    title: {
      en: "University",
      az: "Universitet"
    },
    details: [
      {
        en: "Khazar University",
        az: "Xəzər Universiteti"
      },
      {
        en: "2020-2024",
        az: "2020-2024"
      }
    ]
  },
  {
    title: {
      en: "Course",
      az: "Kurs"
    },
    details: [
      {
        en: "Texnoera Academy - Front-end programming",
        az: "Texnoera Akademiyası - Front-end proqramlaşdırma"
      },
      {
        en: "June 2025 - Present",
        az: "İyun 2025 - Hal-hazırda"
      }
    ]
  },
  {
    title: {
      en: "Tools",
      az: "Alətlər"
    },
    details: [
      {
        en: "Git & Github",
        az: "Git & Github"
      },
      {
        en: "VS Code",
        az: "VS Code"
      }
    ]
  }
];

const funFacts = [
  {
    en: "My brain runs in dark mode by default.",
    az: "Beynim standart olaraq qaranlıq rejimdə işləyir."
  },
  {
    en: "Sometimes I write code so clean… I don't understand it the next day.",
    az: "Bəzən elə təmiz kod yazıram ki... Ertəsi gün özüm də başa düşmürəm."
  },
  {
    en: "My browser has 20 tabs open… 18 are Stack Overflow.",
    az: "Brauzerimdə 20 açıq vərəq var... 18-i Stack Overflow-dur."
  },
  {
    en: "I've merged code that I didn't fully understand, and lived to tell the tale.",
    az: "Tam başa düşmədiyim kodu birləşdirdim və bunu danışmaq üçün sağ qaldım."
  },
  {
    en: "My browser has 20 tabs open… 18 are Stack Overflow.",
    az: "Brauzerimdə 20 açıq vərəq var... 18-i Stack Overflow-dur."
  }
];