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
    pt: "Levamos à ciência as pessoas",
    en: "We bring science to people",
    es: "Llevamos la ciencia a las personas",
  },
  "hero.description": {
    pt: "Conectamos ciência e pessoas. Transformamos inovação e tecnologia em soluções que aceleram a pesquisa clínica e levam os avanços científicos à vida dos pacientes com precisão, cuidado e menos impacto ambiental.",
    en: "We connect science and people. We transform innovation and technology into solutions that accelerate clinical research and bring scientific advancements to patients with precision, care, and less environmental impact.",
    es: "Conectamos ciencia y personas. Transformamos innovación y tecnología en soluciones que aceleran la investigación clínica y llevan los avances científicos a la vida de los pacientes con precisión, cuidado y menos impacto ambiental.",
  },
  "hero.cta": {
    pt: "SAIBA MAIS",
    en: "LEARN MORE",
    es: "SABER MÁS",
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
    pt: "Atuação em diferentes fases clínicas e terapias.",
    en: "Acting in different clinical phases and therapies.",
    es: "Actuación en diferentes fases clínicas y terapias.",
  },
  "results.clients": {
    pt: "+100 clientes ativos",
    en: "+100 active clients",
    es: "+100 clientes activos",
  },
  "results.clients.desc": {
    pt: "Biofarmacêuticas, CRO's, Centros de Pesquisa, Fornecedores e Logística.",
    en: "Biopharmaceuticals, CROs, Research Centers, Suppliers and Logistics.",
    es: "Biofarmacéuticas, CROs, Centros de Investigación, Proveedores y Logística.",
  },
  "results.patients": {
    pt: "+200.000 pacientes atendidos por ano",
    en: "+200,000 patients served per year",
    es: "+200.000 pacientes atendidos por año",
  },
  "results.patients.desc": {
    pt: "Fazemos a diferença, seja conectando a pesquisa clínica ou viabilizando os tratamentos.",
    en: "We make a difference, whether by connecting clinical research or enabling treatments.",
    es: "Hacemos la diferencia, ya sea conectando la investigación clínica o habilitando los tratamientos.",
  },

  // DRS360 Section
  "drs360.title": {
    pt: "DRS360: Visibilidade 24/7 em tempo real",
    en: "DRS360: 24/7 Real-time Visibility",
    es: "DRS360: Visibilidad 24/7 en tiempo real",
  },
  "drs360.description": {
    pt: "Plataforma proprietária com rastreabilidade e dashboards por estudo.",
    en: "Proprietary platform with traceability and dashboards per study.",
    es: "Plataforma propietaria con trazabilidad y dashboards por estudio.",
  },

  // Solutions Section
  "solutions.title": {
    pt: "Soluções inteligentes para cada elo da cadeia da saúde",
    en: "Intelligent solutions for every link in the health chain",
    es: "Soluciones inteligentes para cada eslabón de la cadena de salud",
  },
  "solutions.description": {
    pt: "Combinamos inovação, tecnologia e cuidado para apoiar projetos críticos de saúde. Atuamos em três áreas complementares conectadas pela nossa plataforma proprietária DRS 360, para viabilizar estudos clínicos e garantir tratamentos.",
    en: "We combine innovation, technology and care to support critical health projects. We operate in three complementary areas connected by our proprietary DRS 360 platform, to enable clinical studies and guarantee treatments.",
    es: "Combinamos innovación, tecnología y cuidado para apoyar proyectos críticos de salud. Operamos en tres áreas complementarias conectadas por nuestra plataforma propietaria DRS 360, para habilitar estudios clínicos y garantizar tratamientos.",
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
