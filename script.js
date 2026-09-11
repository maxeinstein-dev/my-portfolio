const STORAGE_KEY = 'portfolio-language';
const DEFAULT_LANGUAGE = 'en';

const translations = {
  en: {
    htmlLang: 'en',
    title: 'Maxsuel Einstein — Software Developer',
    description: 'Portfolio of Maxsuel Einstein, a software developer with Full Stack experience focused on Back-end Java, Front-end, and software architecture.',
    skipLink: 'Skip to content',
    brandLabel: 'Go to the beginning',
    navLabel: 'Primary navigation',
    languageSelector: 'Language selector',
    navAbout: 'About',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navContact: 'Contact',
    menuButton: 'Menu',
    heroEyebrow: 'Software · Back-end · Front-end · Architecture',
    heroTitleBefore: 'Solid code, from',
    heroTitleEmphasis: 'domain',
    heroTitleAfter: 'to interface.',
    heroText: 'I am Maxsuel Einstein, a software developer with Full Stack experience. I am deepening my work in Back-end development with Java and Spring Boot while keeping a strong Front-end foundation and a broad view of software architecture.',
    heroPrimary: 'Explore projects',
    heroSecondary: 'More about me',
    heroPanelLabel: 'Professional summary',
    codeFocusArchitecture: '"Architecture"',
    heroCaption: 'Aracaju, Brazil · open to the world',
    aboutIndex: '02 / ABOUT',
    aboutTitle: 'I build software with more than the next delivery in mind.',
    aboutParagraphOne: 'My path started in web development and evolved into Full Stack work. I have worked on custom systems, educational platforms, and a legacy construction management system, using PHP, Laravel, MySQL, and business rules processed through stored procedures.',
    aboutParagraphTwo: 'I now direct my studies and projects toward Java, Spring Boot, and REST API design. Software architecture connects both sides of my career: I want to build maintainable, testable solutions aligned with the domain, whether working in Back-end with Java or Front-end with JavaScript and, progressively, TypeScript.',
    skillsLabel: 'Technologies and skills',
    experienceIndex: '03 / EXPERIENCE',
    experienceTitle: 'Experience across both sides of the application.',
    alfamaPeriod: '2024 — present',
    fullStackRole: 'Full Stack Developer',
    alfamaDescription: 'Structural development and maintenance of custom web systems, with focus on code quality, performance, and server and architecture optimizations.',
    internRole: 'Software Development Intern',
    innovatechDescription: 'Maintenance of a legacy construction management system, Back-end work with PHP 7 and MySQL, and creation of stored procedures for business rules and complex data flows.',
    educazRole: 'Full Stack Developer',
    educazDescription: 'Maintenance of educational platforms, bug fixing, and Back-end development with PHP, Laravel, and SQL databases.',
    projectsIndex: '04 / PROJECTS',
    projectsTitle: 'Personal projects',
    projectsIntro: 'A living space for recording what I am building and learning.',
    projectStatus: 'In development',
    projectType: 'Personal product',
    strategaDescription: 'A financial planning application for organizing portfolios, categories, and transactions, exploring domain modeling and an architecture prepared to evolve.',
    technologiesLabel: 'Technologies',
    architectureSkill: 'Architecture',
    strategaLinkLabel: 'View Stratega project on GitHub',
    githubLink: 'View on GitHub',
    nextProjectStatus: 'Next project',
    soonType: 'Coming soon',
    nextProjectTitle: 'New ideas taking shape.',
    nextProjectDescription: 'This space is reserved for the next project that moves from idea to implementation.',
    contactIndex: '05 / CONTACT',
    contactTitle: 'Shall we build something worth using?',
    contactText: 'I am open to conversations about Back-end Java, Front-end, software architecture, and new opportunities.',
    emailButton: 'Send email',
    footerText: 'Designed and developed with intention.'
  },
  'pt-BR': {
    htmlLang: 'pt-BR',
    title: 'Maxsuel Einstein — Desenvolvedor de Software',
    description: 'Portfólio de Maxsuel Einstein, desenvolvedor de software com experiência Full Stack e foco em Back-end Java, Front-end e arquitetura de software.',
    skipLink: 'Ir para o conteúdo',
    brandLabel: 'Ir para o início',
    navLabel: 'Navegação principal',
    languageSelector: 'Seletor de idioma',
    navAbout: 'Sobre',
    navExperience: 'Experiência',
    navProjects: 'Projetos',
    navContact: 'Contato',
    menuButton: 'Menu',
    heroEyebrow: 'Software · Back-end · Front-end · Arquitetura',
    heroTitleBefore: 'Código sólido, do',
    heroTitleEmphasis: 'domínio',
    heroTitleAfter: 'à interface.',
    heroText: 'Sou Maxsuel Einstein, desenvolvedor de software com experiência Full Stack. Estou aprofundando minha atuação em Back-end com Java e Spring Boot, sem abrir mão do Front-end e de uma visão ampla de arquitetura.',
    heroPrimary: 'Conhecer projetos',
    heroSecondary: 'Mais sobre mim',
    heroPanelLabel: 'Resumo profissional',
    codeFocusArchitecture: '"Arquitetura"',
    heroCaption: 'Aracaju, Brasil · aberto ao mundo',
    aboutIndex: '02 / SOBRE',
    aboutTitle: 'Desenvolvo software pensando além da próxima entrega.',
    aboutParagraphOne: 'Minha trajetória começou no desenvolvimento web e evoluiu para uma atuação Full Stack. Já trabalhei com sistemas personalizados, plataformas educacionais e um sistema legado de gestão de obras, atuando com PHP, Laravel, MySQL e regras de negócio processadas por procedures.',
    aboutParagraphTwo: 'Agora direciono meus estudos e projetos para Java, Spring Boot e construção de APIs REST. Arquitetura de software é o elo entre os dois lados da minha carreira: quero construir soluções manuteníveis, testáveis e alinhadas ao domínio, atuando no Back-end com Java ou no Front-end com JavaScript e, progressivamente, TypeScript.',
    skillsLabel: 'Tecnologias e competências',
    experienceIndex: '03 / EXPERIÊNCIA',
    experienceTitle: 'Experiência nos dois lados da aplicação.',
    alfamaPeriod: '2024 — atual',
    fullStackRole: 'Desenvolvedor Full Stack',
    alfamaDescription: 'Desenvolvimento estrutural e manutenção de sistemas web personalizados, com foco em qualidade de código, performance e otimizações de servidor e estrutura.',
    internRole: 'Estagiário de Desenvolvimento de Software',
    innovatechDescription: 'Manutenção de sistema legado de gestão de obras, atuação no Back-end com PHP 7 e MySQL e criação de procedures para regras de negócio e dados complexos.',
    educazRole: 'Desenvolvedor Full Stack',
    educazDescription: 'Manutenção de plataformas educacionais, resolução de bugs e desenvolvimento Back-end com PHP, Laravel e banco de dados SQL.',
    projectsIndex: '04 / PROJETOS',
    projectsTitle: 'Projetos pessoais',
    projectsIntro: 'Um espaço em evolução para registrar o que estou construindo e aprendendo.',
    projectStatus: 'Em desenvolvimento',
    projectType: 'Produto pessoal',
    strategaDescription: 'Aplicação de planejamento financeiro para organizar carteiras, categorias e transações, explorando modelagem de domínio e uma arquitetura preparada para evoluir.',
    technologiesLabel: 'Tecnologias',
    architectureSkill: 'Arquitetura',
    strategaLinkLabel: 'Ver projeto Stratega no GitHub',
    githubLink: 'Ver no GitHub',
    nextProjectStatus: 'Próximo projeto',
    soonType: 'Em breve',
    nextProjectTitle: 'Novas ideias ganhando forma.',
    nextProjectDescription: 'Este espaço está reservado para o próximo projeto que sair do papel.',
    contactIndex: '05 / CONTATO',
    contactTitle: 'Vamos construir algo que valha a pena usar?',
    contactText: 'Estou aberto a conversar sobre Back-end Java, Front-end, arquitetura de software e novas oportunidades.',
    emailButton: 'Enviar e-mail',
    footerText: 'Projetado e desenvolvido com intenção.'
  }
};

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#menu');
const languageButtons = document.querySelectorAll('[data-lang]');

const readStoredLanguage = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const storeLanguage = (language) => {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Private browsing or storage restrictions should not break language switching.
  }
};

const getDictionary = (language) => translations[language] || translations[DEFAULT_LANGUAGE];

const applyLanguage = (language, shouldPersist = true) => {
  const dictionary = getDictionary(language);
  const resolvedLanguage = translations[language] ? language : DEFAULT_LANGUAGE;
  const description = document.querySelector('meta[name="description"]');

  document.documentElement.lang = dictionary.htmlLang;
  document.title = dictionary.title;
  if (description) {
    description.setAttribute('content', dictionary.description);
  }

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (dictionary[key]) {
      element.setAttribute('aria-label', dictionary[key]);
    }
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === resolvedLanguage;
    button.setAttribute('aria-pressed', String(active));
  });

  if (shouldPersist) {
    storeLanguage(resolvedLanguage);
  }
};

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menu.classList.toggle('open', !open);
});

menu.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuButton.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
  }
});

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.lang);
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
const storedLanguage = readStoredLanguage();
applyLanguage(storedLanguage || DEFAULT_LANGUAGE, Boolean(storedLanguage));
