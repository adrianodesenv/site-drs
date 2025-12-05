// Sistema de tradução simples
export type Language = "pt" | "en" | "es";

export interface Translations {
  [key: string]: {
    pt: string;
    en: string;
    es: string;
  };
}

export const translations: Translations = {
  // Header
  "header.solutions": {
    pt: "Soluções",
    en: "Solutions",
    es: "Soluciones",
  },
  "header.expertise": {
    pt: "Áreas de expertise",
    en: "Areas of expertise",
    es: "Áreas de experiencia",
  },
  "header.group": {
    pt: "Grupo DRS",
    en: "DRS Group",
    es: "Grupo DRS",
  },
  "header.insights": {
    pt: "Insights",
    en: "Insights",
    es: "Insights",
  },
  "header.portal": {
    pt: "Portal 360 DRS",
    en: "Portal 360 DRS",
    es: "Portal 360 DRS",
  },
  "header.contact": {
    pt: "Contato",
    en: "Contact",
    es: "Contacto",
  },

  // Hero Section
  "hero.title": {
    pt: "Levamos a ciência às pessoas",
    en: "We bring science to people",
    es: "Llevamos la ciencia a las personas",
  },
  "hero.description": {
    pt: "Inovação e tecnologia em pesquisa clínica para transformar vidas através de soluções de saúde de excelência.",
    en: "Innovation and technology in clinical research to transform lives through excellence in health solutions.",
    es: "Innovación y tecnología en investigación clínica para transformar vidas a través de soluciones de salud de excelencia.",
  },
  "hero.cta": {
    pt: "PARA MAIS",
    en: "FOR MORE",
    es: "PARA MÁS",
  },

  // Results Section
  "results.title": {
    pt: "Resultados que importam. Soluções que transformam.",
    en: "Results that matter. Solutions that transform.",
    es: "Resultados que importan. Soluciones que transforman.",
  },
  "results.protocols": {
    pt: "+500 protocolos sob gestão",
    en: "+500 protocols under management",
    es: "+500 protocolos bajo gestión",
  },
  "results.protocols.desc": {
    pt: "Gestão completa de protocolos de pesquisa clínica com tecnologia de ponta.",
    en: "Complete management of clinical research protocols with cutting-edge technology.",
    es: "Gestión completa de protocolos de investigación clínica con tecnología de vanguardia.",
  },
  "results.clients": {
    pt: "+100 clientes ativos",
    en: "+100 active clients",
    es: "+100 clientes activos",
  },
  "results.clients.desc": {
    pt: "Parcerias estratégicas com empresas líderes no setor de saúde.",
    en: "Strategic partnerships with leading companies in the health sector.",
    es: "Alianzas estratégicas con empresas líderes en el sector de la salud.",
  },
  "results.patients": {
    pt: "+200.000 pacientes atendidos por ano",
    en: "+200,000 patients served per year",
    es: "+200.000 pacientes atendidos por año",
  },
  "results.patients.desc": {
    pt: "Compromisso com a excelência no atendimento e cuidado aos pacientes.",
    en: "Commitment to excellence in patient care and service.",
    es: "Compromiso con la excelencia en la atención y cuidado de los pacientes.",
  },

  // DRS360 Section
  "drs360.title": {
    pt: "DRS360: Visibilidade 24/7 em tempo real",
    en: "DRS360: 24/7 Real-time Visibility",
    es: "DRS360: Visibilidad 24/7 en tiempo real",
  },
  "drs360.description": {
    pt: "Plataforma integrada que oferece visibilidade completa e em tempo real de todos os processos e operações.",
    en: "Integrated platform that offers complete and real-time visibility of all processes and operations.",
    es: "Plataforma integrada que ofrece visibilidad completa y en tiempo real de todos los procesos y operaciones.",
  },

  // Solutions Section
  "solutions.title": {
    pt: "Soluções inteligentes para cada elo da cadeia da saúde",
    en: "Intelligent solutions for every link in the health chain",
    es: "Soluciones inteligentes para cada eslabón de la cadena de salud",
  },
  "solutions.description": {
    pt: "Oferecemos soluções completas e integradas para todos os aspectos da pesquisa clínica e gestão de saúde.",
    en: "We offer complete and integrated solutions for all aspects of clinical research and health management.",
    es: "Ofrecemos soluciones completas e integradas para todos los aspectos de la investigación clínica y gestión de salud.",
  },
  "solutions.cta": {
    pt: "SAIBA MAIS",
    en: "LEARN MORE",
    es: "SABER MÁS",
  },
  "solutions.clinical": {
    pt: "Clinical Trial Services",
    en: "Clinical Trial Services",
    es: "Servicios de Ensayos Clínicos",
  },
  "solutions.patient": {
    pt: "Patient Centric Services",
    en: "Patient Centric Services",
    es: "Servicios Centrados en el Paciente",
  },
  "solutions.thermo": {
    pt: "Thermo Integrated Services",
    en: "Thermo Integrated Services",
    es: "Servicios Integrados de Termo",
  },

  // Planning Section
  "planning.title": {
    pt: "Planejamento, controle, rastreabilidade e decisões em tempo real - tudo em um só lugar",
    en: "Planning, control, traceability and real-time decisions - all in one place",
    es: "Planificación, control, trazabilidad y decisiones en tiempo real - todo en un solo lugar",
  },
  "planning.cta": {
    pt: "SAIBA MAIS",
    en: "LEARN MORE",
    es: "SABER MÁS",
  },

  // Network Section
  "network.title": {
    pt: "NOSSA REDE MUNDIAL",
    en: "OUR GLOBAL NETWORK",
    es: "NUESTRA RED MUNDIAL",
  },

  // Insights Section
  "insights.title": {
    pt: "Insights",
    en: "Insights",
    es: "Insights",
  },
  "insights.readMore": {
    pt: "LER MAIS",
    en: "READ MORE",
    es: "LEER MÁS",
  },

  // Footer
  "footer.title": {
    pt: "Conectamos sua necessidade com a solução ideal.",
    en: "We connect your need with the ideal solution.",
    es: "Conectamos su necesidad con la solución ideal.",
  },
  "footer.cta": {
    pt: "Fale com nossa equipe de vendas",
    en: "Talk to our sales team",
    es: "Hable con nuestro equipo de ventas",
  },
  "footer.addresses": {
    pt: "Endereços",
    en: "Addresses",
    es: "Direcciones",
  },
  "footer.privacy": {
    pt: "Aviso de Privacidade",
    en: "Privacy Notice",
    es: "Aviso de Privacidad",
  },
  "footer.terms": {
    pt: "Termos de Uso",
    en: "Terms of Use",
    es: "Términos de Uso",
  },
  "footer.cookies": {
    pt: "Política de Cookies",
    en: "Cookie Policy",
    es: "Política de Cookies",
  },
  "footer.contact": {
    pt: "Contato",
    en: "Contact",
    es: "Contacto",
  },
  "footer.integrity": {
    pt: "SAC - Programa de Integridade",
    en: "SAC - Integrity Program",
    es: "SAC - Programa de Integridad",
  },
  "footer.work": {
    pt: "Trabalhe Conosco",
    en: "Work With Us",
    es: "Trabaje Con Nosotros",
  },
  "footer.rights": {
    pt: "Todos os direitos reservados",
    en: "All rights reserved",
    es: "Todos los derechos reservados",
  },
};

let currentLanguage: Language = "pt";

export const setLanguage = (lang: Language) => {
  currentLanguage = lang;
};

export const getLanguage = (): Language => {
  return currentLanguage;
};

export const t = (key: string): string => {
  const translation = translations[key];
  if (!translation) {
    console.warn(`Translation key "${key}" not found`);
    return key;
  }
  return translation[currentLanguage] || translation.pt;
};
