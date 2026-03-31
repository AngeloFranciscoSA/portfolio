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
      bio: 'Engenheiro Full-Stack Sênior especializado em sistemas PHP/Laravel de alta escala, Clean Architecture e plataformas multi-tenant. Histórico comprovado de resultados — 95% de redução em latência de APIs críticas, duplicação da velocidade de entrega e arquitetura com 10+ tenants simultâneos. Experiência em liderança técnica, mentoria e migrações de codebase nos setores de logística, mídia e aeroespacial.',
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
            'Arquitetura de plataforma logística multi-tenant com 10+ tenants simultâneos e isolamento total de dados — reduzindo o onboarding de novos tenants em ~40% com provisionamento automatizado.',
            'Padronização de workflows com padrões arquiteturais rigorosos (Controllers → Services → Repositories) e ESLint, acelerando a entrega de features em ~2x.',
            'Construção de dashboards operacionais com Vue.js 3 + Inertia.js integrados a um Design System (Blade + Bootstrap 5 + CSS tokens).',
            'Liderança de code reviews como único Desenvolvedor Sênior, elevando a qualidade do código e reduzindo retrabalho.',
          ],
          tags: ['Laravel 12', 'Vue.js 3', 'PostgreSQL', 'JWT', 'Inertia.js', 'Design System'],
        },
        {
          role: 'Desenvolvedor PHP Pleno',
          company: 'Screencorp',
          location: 'Remoto',
          period: 'Ago 2023 – Jul 2025',
          highlights: [
            'Refatoração de API de notícias de alto tráfego com campos JSON complexos no MySQL — latência reduzida de 20s para menos de 1s, contribuindo para aumento de 15% na retenção de usuários mobile.',
            'Liderou a migração inicial do sistema legado Yii para Laravel 12, estabelecendo arquitetura Package-by-Feature modular.',
            'Desenvolvimento de serviço de notificações push via Node.js + Firebase (FCM) com Clean Architecture, processando milhares de envios diários.',
            'Implementação de cache (Laravel Cache + Redis) em endpoints críticos, reduzindo carga no banco e suportando escalabilidade horizontal.',
          ],
          tags: ['Laravel 12', 'Node.js', 'Firebase FCM', 'MySQL', 'Redis', 'Package by Feature'],
        },
        {
          role: 'Desenvolvedor PHP Pleno',
          company: 'Wiser Log Brasil',
          location: 'São José dos Campos, SP',
          period: 'Out 2022 – Jul 2023',
          highlights: [
            'Reescrita completa de WMS de grande escala de Laravel 5 para Laravel 9, suportando ~250 pedidos diários em layout multi-zona de armazém.',
            'Resolução de bugs críticos e implementação de novas funcionalidades em sistema de produção com zero tolerância a downtime.',
          ],
          tags: ['Laravel 9', 'PostgreSQL', 'WMS', 'Zero Downtime'],
        },
        {
          role: 'Desenvolvedor PHP Pleno',
          company: 'TrackCash',
          location: 'São José dos Campos, SP',
          period: 'Dez 2020 – Mai 2022',
          highlights: [
            'Construção de APIs REST robustas com Lumen (micro-framework Laravel), servindo como backbone de dois projetos simultâneos em produção.',
            'Code reviews e mentoria técnica para desenvolvedores juniores, melhorando consistência do time e reduzindo taxa de bugs.',
          ],
          tags: ['Lumen', 'Laravel 5', 'REST APIs', 'Mentoria'],
        },
        {
          role: 'Programador Full-Stack',
          company: 'Embraer',
          location: 'São José dos Campos, SP',
          period: 'Abr 2019 – Dez 2020',
          highlights: [
            'Desenvolvimento de plataforma interna em Node.js para consulta de dados de peças aeronáuticas e geração automatizada de relatórios, reduzindo trabalho manual e erros humanos para equipes de engenharia.',
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
          skills: ['Vue.js 3', 'React.js', 'Inertia.js', 'TypeScript', 'JavaScript ES6+'],
        },
        {
          category: 'Banco de Dados',
          skills: [
            'PostgreSQL',
            'MySQL',
            'Queries Complexas',
            'Migrations',
            'Indexação',
            'Otimização de Performance',
          ],
        },
        {
          category: 'Arquitetura',
          skills: [
            'SOLID',
            'Clean Architecture',
            'DRY',
            'ADS (Action-Domain-Service)',
            'Package by Feature',
            'Multi-tenancy',
            'System Design',
          ],
        },
        {
          category: 'DevOps & Infra',
          skills: ['GitLab CI/CD', 'Docker', 'SSH', 'Firebase (FCM)', 'Redis'],
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
      bio: 'Senior Full-Stack Engineer specializing in high-scale PHP/Laravel systems, Clean Architecture, and multi-tenant platform design. Proven track record — 95% API latency reduction, 2x feature delivery speed, and systems supporting 10+ concurrent tenants. Experienced in leading technical initiatives, mentoring engineers, and driving codebase migrations in logistics, media, and aerospace.',
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
            'Architected a multi-tenant logistics platform supporting 10+ concurrent tenants with full data isolation — reducing new tenant onboarding time by ~40% through automated provisioning.',
            'Standardized development workflows with strict architectural patterns (Controllers → Services → Repositories) and ESLint, accelerating feature delivery speed by ~2x.',
            'Built rich operational dashboards with Vue.js 3 + Inertia.js integrated into a Design System (Blade + Bootstrap 5 + CSS tokens).',
            'Led code reviews as the sole Senior Developer, elevating team code quality and significantly reducing rework.',
          ],
          tags: ['Laravel 12', 'Vue.js 3', 'PostgreSQL', 'JWT', 'Inertia.js', 'Design System'],
        },
        {
          role: 'Mid-level PHP Developer',
          company: 'Screencorp',
          location: 'Remote',
          period: 'Aug 2023 – Jul 2025',
          highlights: [
            'Refactored high-traffic news API with complex MySQL JSON fields, reducing response latency from 20s to under 1s — contributing to a 15% increase in mobile user retention.',
            'Led the initial migration from legacy Yii to Laravel 12, establishing a modular Package-by-Feature architecture.',
            'Engineered a push notification service via Node.js + Firebase (FCM) following Clean Architecture, handling daily throughput for thousands of users.',
            'Implemented caching strategies (Laravel Cache + Redis) on critical endpoints, reducing database load and supporting horizontal scalability.',
          ],
          tags: ['Laravel 12', 'Node.js', 'Firebase FCM', 'MySQL', 'Redis', 'Package by Feature'],
        },
        {
          role: 'Mid-level PHP Developer',
          company: 'Wiser Log Brasil',
          location: 'São José dos Campos, SP',
          period: 'Oct 2022 – Jul 2023',
          highlights: [
            'Contributed to a full rewrite of a large-scale WMS from Laravel 5 to Laravel 9, supporting ~250 daily orders across a multi-zone warehouse layout.',
            'Resolved critical bugs and implemented new warehouse management features in a live production system with zero downtime tolerance.',
          ],
          tags: ['Laravel 9', 'PostgreSQL', 'WMS', 'Zero Downtime'],
        },
        {
          role: 'Mid-level PHP Developer',
          company: 'TrackCash',
          location: 'São José dos Campos, SP',
          period: 'Dec 2020 – May 2022',
          highlights: [
            'Built robust REST APIs using Lumen (Laravel micro-framework), serving as the backbone for two simultaneous production projects.',
            'Conducted code reviews and provided technical mentorship to junior developers, improving team consistency and reducing bug rates.',
          ],
          tags: ['Lumen', 'Laravel 5', 'REST APIs', 'Mentoring'],
        },
        {
          role: 'Full-Stack Developer',
          company: 'Embraer',
          location: 'São José dos Campos, SP',
          period: 'Apr 2019 – Dec 2020',
          highlights: [
            'Developed a Node.js internal platform for querying aeronautical parts data and automated cataloging/report generation, reducing manual workload and human error for engineering teams.',
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
          skills: ['Vue.js 3', 'React.js', 'Inertia.js', 'TypeScript', 'JavaScript ES6+'],
        },
        {
          category: 'Database',
          skills: [
            'PostgreSQL',
            'MySQL',
            'Complex Queries',
            'Migrations',
            'Indexing',
            'Performance Optimization',
          ],
        },
        {
          category: 'Architecture',
          skills: [
            'SOLID',
            'Clean Architecture',
            'DRY',
            'ADS (Action-Domain-Service)',
            'Package by Feature',
            'Multi-tenancy',
            'System Design',
          ],
        },
        {
          category: 'DevOps & Infra',
          skills: ['GitLab CI/CD', 'Docker', 'SSH', 'Firebase (FCM)', 'Redis'],
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
