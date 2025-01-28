import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      navigation: {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        blog: 'Blog',
      },
      hero: {
        title: 'Transform Your Business with',
        typewriter: ['Innovation', 'Technology', 'Excellence'],
        subtitle: 'We help businesses thrive in the digital age through cutting-edge solutions',
        cta: {
          primary: 'Get Started',
          secondary: 'Learn More',
        },
      },
      features: {
        title: 'Why Choose Us?',
        subtitle: 'We combine innovation, expertise, and dedication to deliver exceptional results for our clients.',
        items: [
          {
            title: 'Fast Implementation',
            description: 'Quick deployment of solutions that drive immediate business value and growth.'
          },
          {
            title: 'Scalable Solutions',
            description: 'Build systems that grow with your business, ensuring long-term sustainability.'
          },
          {
            title: 'Expert Support',
            description: '24/7 dedicated support from our team of experienced professionals.'
          }
        ]
      },
      calendar: {
        title: 'Global Events & Celebrations',
        subtitle: 'Stay connected with cultural celebrations and events around the world'
      },
      stats: {
        clients: 'Global Clients',
        countries: 'Countries Served',
        projects: 'Projects Completed',
        satisfaction: 'Client Satisfaction'
      },
      about: {
        cultural: {
          title: 'Cultural Calendar',
          subtitle: 'Celebrating diversity and cultural events worldwide'
        }
      }
    },
  },
  es: {
    translation: {
      navigation: {
        home: 'Inicio',
        about: 'Sobre Nosotros',
        contact: 'Contacto',
        blog: 'Blog',
      },
      hero: {
        title: 'Transforma tu Negocio con',
        typewriter: ['Innovación', 'Tecnología', 'Excelencia'],
        subtitle: 'Ayudamos a las empresas a prosperar en la era digital',
        cta: {
          primary: 'Comenzar',
          secondary: 'Más Información',
        },
      },
      features: {
        title: '¿Por Qué Elegirnos?',
        subtitle: 'Combinamos innovación, experiencia y dedicación para ofrecer resultados excepcionales.',
        items: [
          {
            title: 'Implementación Rápida',
            description: 'Despliegue rápido de soluciones que impulsan el valor comercial inmediato.'
          },
          {
            title: 'Soluciones Escalables',
            description: 'Construya sistemas que crezcan con su negocio, garantizando la sostenibilidad.'
          },
          {
            title: 'Soporte Experto',
            description: 'Soporte dedicado 24/7 de nuestro equipo de profesionales experimentados.'
          }
        ]
      },
      calendar: {
        title: 'Eventos y Celebraciones Globales',
        subtitle: 'Mantente conectado con celebraciones y eventos culturales en todo el mundo'
      },
      stats: {
        clients: 'Clientes Globales',
        countries: 'Países Atendidos',
        projects: 'Proyectos Completados',
        satisfaction: 'Satisfacción del Cliente'
      },
      about: {
        cultural: {
          title: 'Calendario Cultural',
          subtitle: 'Celebrando la diversidad y eventos culturales en todo el mundo'
        }
      }
    },
  },
  zh: {
    translation: {
      navigation: {
        home: '首页',
        about: '关于我们',
        contact: '联系我们',
        blog: '博客',
      },
      hero: {
        title: '用科技改变企业',
        typewriter: ['创新', '科技', '卓越'],
        subtitle: '助力企业在数字时代蓬勃发展',
        cta: {
          primary: '立即开始',
          secondary: '了解更多',
        },
      },
    },
  },
  // Add more languages as needed
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage'],
    },
  });

export default i18n; 