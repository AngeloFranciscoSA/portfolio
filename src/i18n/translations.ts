export type Locale = 'pt' | 'en'

export interface JobItem {
  role: string
  company: string
  location: string
  period: string
  current?: boolean
  highlights: string[]
  tags: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
  current?: boolean
}

export interface Translations {
  nav: {
    about: string
    experience: string
    skills: string
    education: string
    contact: string
  }
  hero: {
    label: string
    stack: string
    location: string
    downloadCV: string
  }
  about: {
    label: string
    title: string
    bio: string
    stats: { value: string; label: string }[]
  }
  experience: {
    label: string
    title: string
    current: string
    jobs: JobItem[]
  }
  skills: {
    label: string
    title: string
    groups: { category: string; skills: string[] }[]
  }
  education: {
    label: string
    title: string
    ongoing: string
    items: EducationItem[]
  }
  footer: {
    copy: string
  }
}

export const translations: Record<Locale, Translations> = {
  pt: {
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      skills: 'Habilidades',
      education: 'Educação',
      contact: 'Contato',
    },
    hero: {
      label: 'Desenvolvedor Full-Stack Sênior',
      stack: 'PHP · Laravel · Node.js · Vue.js',
      location: 'São José dos Campos, SP · 7+ anos de experiência',
      downloadCV: 'Download CV',
    },
    about: {
      label: 'Sobre',
      title: 'Quem sou eu',
      bio: 'Desenvolvedor Full-Stack Sênior com mais de 7 anos de experiência em PHP/Laravel e Node.js. Especializado em APIs REST, microsserviços e sistemas escaláveis. Experiência em arquiteturas modernas (SOLID, Clean Architecture), metodologias ágeis e mentoria técnica de equipes.',
      stats: [
        { value: '7+', label: 'Anos de experiência' },
        { value: '5', label: 'Empresas' },
        { value: 'Sênior', label: 'Nível' },
        { value: 'PT · EN', label: 'Idiomas' },
      ],
    },
    experience: {
      label: 'Carreira',
      title: 'Experiência',
      current: 'Atual',
      jobs: [
        {
          role: 'Desenvolvedor Full-Stack Sênior',
          company: 'Yardex',
          location: 'São José dos Campos, SP',
          period: 'Jul 2025 – Presente',
          current: true,
          highlights: [
            'Sistema multi-tenant para gestão de ativos e logística com isolamento completo de dados entre clientes.',
            'Arquitetura escalável com Laravel 12 + PostgreSQL, autenticação JWT e permissões granulares via Abilities/Gates.',
            'Interfaces com Vue.js 3 + Inertia.js: telas de gestão, relatórios interativos e dashboards operacionais.',
            'Arquitetura em camadas (Controllers → Services → Repositories) seguindo SOLID e DRY.',
          ],
          tags: ['Laravel 12', 'Vue.js 3', 'PostgreSQL', 'JWT', 'Inertia.js', 'SOLID'],
        },
        {
          role: 'Desenvolvedor PHP Pleno',
          company: 'Screencorp',
          location: 'Remoto',
          period: 'Ago 2023 – Jul 2025',
          highlights: [
            'Migração de sistema legado Yii para Laravel 12 com arquitetura ADS e Package by Feature.',
            'Desenvolvimento de serviço de notificações push via Firebase (FCM) com Node.js.',
            'Criação de APIs REST, rotinas assíncronas com Laravel Jobs e otimização de grandes volumes de dados com MySQL.',
          ],
          tags: ['Laravel 12', 'Node.js', 'Firebase FCM', 'MySQL', 'ADS', 'Package by Feature'],
        },
        {
          role: 'Desenvolvedor PHP Pleno',
          company: 'Wiser Log Brasil',
          location: 'São José dos Campos, SP',
          period: 'Out 2022 – Jul 2023',
          highlights: [
            'Migração de sistema WMS de Laravel 5 para Laravel 9, modernização com Blades, Migrations e Jobs.',
            'Manutenção de funcionalidades de gestão de armazéns e queries otimizadas em PostgreSQL.',
            'Implementações front-end com Blade, Bootstrap e JavaScript.',
          ],
          tags: ['Laravel 9', 'PostgreSQL', 'Bootstrap', 'JavaScript', 'WMS'],
        },
        {
          role: 'Desenvolvedor PHP Pleno',
          company: 'TrackCash',
          location: 'São José dos Campos, SP',
          period: 'Dez 2020 – Mai 2022',
          highlights: [
            'Construção de APIs REST com Lumen (micro-framework Laravel).',
            'Manutenção de sistemas legados em Laravel 5, padronização de código e code review.',
            'Mentoria técnica, testes automatizados e documentação de APIs.',
          ],
          tags: ['Lumen', 'Laravel 5', 'REST APIs', 'Testes', 'Mentoria'],
        },
        {
          role: 'Programador Full-Stack',
          company: 'Embraer',
          location: 'São José dos Campos, SP',
          period: 'Abr 2019 – Dez 2020',
          highlights: [
            'Desenvolvimento de plataforma web em Node.js para consulta de dados de peças aeronáuticas.',
            'Automação de processos internos de catalogação e geração de relatórios.',
          ],
          tags: ['Node.js', 'JavaScript', 'Automação'],
        },
      ],
    },
    skills: {
      label: 'Tecnologias',
      title: 'Habilidades',
      groups: [
        {
          category: 'Back-end',
          skills: [
            'PHP 8.2+',
            'Laravel 9/10/12',
            'Lumen',
            'Node.js',
            'Express',
            'REST APIs',
            'Laravel Jobs',
            'Queues',
            'JWT',
          ],
        },
        {
          category: 'Front-end',
          skills: [
            'Vue.js 3',
            'React.js',
            'TypeScript',
            'JavaScript ES6+',
            'Inertia.js',
            'Bootstrap 5',
            'Tailwind CSS',
            'Blade',
          ],
        },
        {
          category: 'Banco de Dados',
          skills: [
            'PostgreSQL',
            'MySQL',
            'Migrations',
            'Queries Complexas',
            'Otimização de Performance',
          ],
        },
        {
          category: 'Arquitetura',
          skills: [
            'SOLID',
            'DRY',
            'Clean Architecture',
            'ADS (Action-Domain-Service)',
            'Package by Feature',
            'Microsserviços',
            'Multi-tenant',
          ],
        },
        {
          category: 'DevOps & Infra',
          skills: ['Docker', 'GitLab CI/CD', 'SSH', 'Tailscale', 'Firebase (FCM)'],
        },
        {
          category: 'Práticas',
          skills: [
            'Code Review',
            'Mentoria Técnica',
            'Scrum',
            'Kanban',
            'Testes Automatizados',
            'Documentação de APIs',
          ],
        },
      ],
    },
    education: {
      label: 'Formação',
      title: 'Educação',
      ongoing: 'Em andamento',
      items: [
        {
          degree: 'MBA em Engenharia de Software',
          institution: 'USP / ESALQ',
          period: 'Jan 2026 – Em andamento',
          current: true,
        },
        {
          degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
          institution: 'Universidade Paulista (UNIP)',
          period: 'Jan 2021 – Dez 2024',
        },
        {
          degree: 'Técnico em Informática',
          institution: 'Colégio Técnico Opção',
          period: '2015 – 2018',
        },
      ],
    },
    footer: {
      copy: '© {year} Ângelo Francisco Souza de Araújo',
    },
  },

  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      label: 'Senior Full-Stack Developer',
      stack: 'PHP · Laravel · Node.js · Vue.js',
      location: 'São José dos Campos, SP · 7+ years of experience',
      downloadCV: 'Download CV',
    },
    about: {
      label: 'About',
      title: 'Who I am',
      bio: 'Senior Full-Stack Developer with over 7 years of experience in PHP/Laravel and Node.js. Specialized in REST APIs, microservices and scalable systems. Experience in modern architectures (SOLID, Clean Architecture), agile methodologies and technical team mentoring.',
      stats: [
        { value: '7+', label: 'Years of experience' },
        { value: '5', label: 'Companies' },
        { value: 'Senior', label: 'Level' },
        { value: 'PT · EN', label: 'Languages' },
      ],
    },
    experience: {
      label: 'Career',
      title: 'Experience',
      current: 'Current',
      jobs: [
        {
          role: 'Senior Full-Stack Developer',
          company: 'Yardex',
          location: 'São José dos Campos, SP',
          period: 'Jul 2025 – Present',
          current: true,
          highlights: [
            'Multi-tenant system for asset management and logistics with complete data isolation between clients.',
            'Scalable architecture with Laravel 12 + PostgreSQL, JWT authentication and granular permissions via Abilities/Gates.',
            'Interfaces with Vue.js 3 + Inertia.js: management screens, interactive reports and operational dashboards.',
            'Layered architecture (Controllers → Services → Repositories) following SOLID and DRY principles.',
          ],
          tags: ['Laravel 12', 'Vue.js 3', 'PostgreSQL', 'JWT', 'Inertia.js', 'SOLID'],
        },
        {
          role: 'Mid-level PHP Developer',
          company: 'Screencorp',
          location: 'Remote',
          period: 'Aug 2023 – Jul 2025',
          highlights: [
            'Migration from legacy Yii system to Laravel 12 with ADS architecture and Package by Feature.',
            'Development of push notification service via Firebase (FCM) with Node.js.',
            'REST API development, async routines with Laravel Jobs and optimization of large data volumes with MySQL.',
          ],
          tags: ['Laravel 12', 'Node.js', 'Firebase FCM', 'MySQL', 'ADS', 'Package by Feature'],
        },
        {
          role: 'Mid-level PHP Developer',
          company: 'Wiser Log Brasil',
          location: 'São José dos Campos, SP',
          period: 'Oct 2022 – Jul 2023',
          highlights: [
            'WMS system migration from Laravel 5 to Laravel 9, modernization with Blades, Migrations and Jobs.',
            'Maintenance of warehouse management features and optimized PostgreSQL queries.',
            'Front-end implementations with Blade, Bootstrap and JavaScript.',
          ],
          tags: ['Laravel 9', 'PostgreSQL', 'Bootstrap', 'JavaScript', 'WMS'],
        },
        {
          role: 'Mid-level PHP Developer',
          company: 'TrackCash',
          location: 'São José dos Campos, SP',
          period: 'Dec 2020 – May 2022',
          highlights: [
            'REST API development with Lumen (Laravel micro-framework).',
            'Legacy Laravel 5 system maintenance, code standardization and code review.',
            'Technical mentoring, automated testing and API documentation.',
          ],
          tags: ['Lumen', 'Laravel 5', 'REST APIs', 'Testing', 'Mentoring'],
        },
        {
          role: 'Full-Stack Developer',
          company: 'Embraer',
          location: 'São José dos Campos, SP',
          period: 'Apr 2019 – Dec 2020',
          highlights: [
            'Development of a Node.js web platform for querying aeronautical parts data.',
            'Automation of internal cataloging processes and report generation.',
          ],
          tags: ['Node.js', 'JavaScript', 'Automation'],
        },
      ],
    },
    skills: {
      label: 'Technologies',
      title: 'Skills',
      groups: [
        {
          category: 'Back-end',
          skills: [
            'PHP 8.2+',
            'Laravel 9/10/12',
            'Lumen',
            'Node.js',
            'Express',
            'REST APIs',
            'Laravel Jobs',
            'Queues',
            'JWT',
          ],
        },
        {
          category: 'Front-end',
          skills: [
            'Vue.js 3',
            'React.js',
            'TypeScript',
            'JavaScript ES6+',
            'Inertia.js',
            'Bootstrap 5',
            'Tailwind CSS',
            'Blade',
          ],
        },
        {
          category: 'Database',
          skills: [
            'PostgreSQL',
            'MySQL',
            'Migrations',
            'Complex Queries',
            'Performance Optimization',
          ],
        },
        {
          category: 'Architecture',
          skills: [
            'SOLID',
            'DRY',
            'Clean Architecture',
            'ADS (Action-Domain-Service)',
            'Package by Feature',
            'Microservices',
            'Multi-tenant',
          ],
        },
        {
          category: 'DevOps & Infra',
          skills: ['Docker', 'GitLab CI/CD', 'SSH', 'Tailscale', 'Firebase (FCM)'],
        },
        {
          category: 'Practices',
          skills: [
            'Code Review',
            'Technical Mentoring',
            'Scrum',
            'Kanban',
            'Automated Testing',
            'API Documentation',
          ],
        },
      ],
    },
    education: {
      label: 'Education',
      title: 'Education',
      ongoing: 'Ongoing',
      items: [
        {
          degree: 'MBA in Software Engineering',
          institution: 'USP / ESALQ',
          period: 'Jan 2026 – Ongoing',
          current: true,
        },
        {
          degree: "Bachelor's in Systems Analysis and Development",
          institution: 'Universidade Paulista (UNIP)',
          period: 'Jan 2021 – Dec 2024',
        },
        {
          degree: 'Technical Degree in Computer Science',
          institution: 'Colégio Técnico Opção',
          period: '2015 – 2018',
        },
      ],
    },
    footer: {
      copy: '© {year} Ângelo Francisco Souza de Araújo',
    },
  },
}
