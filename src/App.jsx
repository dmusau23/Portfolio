import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const translations = {
  en: {
    nav: {
      about: 'About',
      stack: 'Stack',
      work: 'Work',
      github: 'GitHub',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'software engineer',
      headlineSecondary: 'Building software with purpose.',
      blurb:
        'I design practical web applications and backend systems using Java, Spring Boot, React, TypeScript, and a strong focus on clean, maintainable engineering.',
      primary: 'Explore my work',
      secondary: 'Start a conversation',
      status: 'Open to software engineering opportunities',
      location: 'Atlanta, GA · EST',
      code: 'const build = clarity\n+ reliability\n+ curiosity;',
    },
    about: {
      section: 'About me',
      lead: 'I build thoughtful products that are useful, clear, and easy to trust.',
      intro:
        'I’m Daniel Musau, a software development student with experience in Java, Spring Boot, React, TypeScript, and database-driven applications. I enjoy turning ideas into working solutions and learning the parts of software that make products reliable for real users.',
      detailOne:
        'My work spans frontend projects, backend security concepts, collaborative team builds, and coursework that strengthens my engineering habits. I care about clean code, readable design, and creating tools that feel straightforward to use.',
      detailTwo:
        'I’m especially interested in full-stack development, product-focused engineering, and opportunities where I can keep learning while contributing to meaningful work.',
    },
    skills: {
      section: 'Technical stack',
      intro:
        'I work across frontend, backend, and collaborative software delivery with an emphasis on practical, reliable solutions.',
    },
    projects: {
      section: 'Selected work',
      intro: 'A small record of systems built, shipped, and made easier to trust.',
      demo: 'Live Demo',
      repo: 'GitHub',
    },
    resume: {
      eyebrow: 'profile',
      heading: 'Let the work\n speak clearly.',
      copy:
        'I’m Daniel Musau, a software developer focused on practical projects, collaborative work, and hands-on front-end and back-end development. If you want to connect, discuss opportunities, or talk through a project, I’m open to it.',
      github: 'View GitHub',
      email: 'Email me',
    },
    contact: {
      section: 'Open channel',
      intro: 'Have a project, opportunity, or technical question? I’d be glad to connect.',
      email: 'Your Email',
      subject: 'Subject',
      message: 'Your Message',
      send: 'Send Message',
    },
    footer: {
      built: 'Built with React and Tailwind CSS.',
    },
    common: {
      and: 'and',
      language: 'Language',
    },
  },
  fr: {
    nav: {
      about: 'À propos',
      stack: 'Stack',
      work: 'Projets',
      github: 'GitHub',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'ingénieur logiciel',
      headlineSecondary: 'Je conçois des logiciels utiles et durables.',
      blurb:
        'Je crée des applications web et des systèmes backend pratiques avec Java, Spring Boot, React, TypeScript, en mettant l’accent sur une conception claire et maintenable.',
      primary: 'Découvrir mes projets',
      secondary: 'Discutons de votre idée',
      status: 'Ouvert aux opportunités en ingénierie logicielle',
      location: 'Atlanta, GA · EST',
      code: 'const build = clarté\n+ fiabilité\n+ curiosité;',
    },
    about: {
      section: 'À propos',
      lead: 'Je conçois des produits utiles, lisibles et faciles à faire confiance.',
      intro:
        'Je suis Daniel Musau, étudiant en développement logiciel avec de l’expérience en Java, Spring Boot, React, TypeScript et en applications pilotées par base de données. J’aime transformer des idées en solutions concrètes et apprendre les aspects qui rendent un produit fiable pour ses utilisateurs.',
      detailOne:
        'Mon travail couvre les projets frontend, les concepts de sécurité backend, la collaboration en équipe et les projets scolaires qui renforcent mes compétences d’ingénierie. J’accorde de l’importance au code propre, à un design lisible et à des outils simples à utiliser.',
      detailTwo:
        'Je suis particulièrement intéressé par le développement full-stack, l’ingénierie orientée produit et les opportunités où je peux apprendre tout en contribuant à des projets utiles.',
    },
    skills: {
      section: 'Stack technique',
      intro:
        'Je travaille sur le frontend, le backend et la livraison logicielle collaborative avec une attention particulière aux solutions pratiques et fiables.',
    },
    projects: {
      section: 'Projets sélectionnés',
      intro: 'Quelques réalisations construites, livrées et pensées pour inspirer confiance.',
      demo: 'Démo',
      repo: 'GitHub',
    },
    resume: {
      eyebrow: 'profil',
      heading: 'Laissez le travail\n parler de lui-même.',
      copy:
        'Je suis Daniel Musau, développeur logiciel orienté solution concrète, collaboration et développement full-stack pratique. Si vous souhaitez échanger, discuter d’une opportunité ou parler d’un projet, je suis ouvert à la conversation.',
      github: 'Voir GitHub',
      email: 'Écrire un e-mail',
    },
    contact: {
      section: 'Canal ouvert',
      intro: 'Vous avez un projet, une opportunité ou une question technique ? Je serai ravi d’échanger.',
      email: 'Votre e-mail',
      subject: 'Objet',
      message: 'Votre message',
      send: 'Envoyer',
    },
    footer: {
      built: 'Conçu avec React et Tailwind CSS.',
    },
    common: {
      and: 'et',
      language: 'Langue',
    },
  },
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(() => localStorage.getItem('portfolio-theme') === 'light');
  const [locale, setLocale] = useState(() => localStorage.getItem('portfolio-language') || 'en');

  useEffect(() => {
    document.documentElement.dataset.theme = isLightMode ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', isLightMode ? 'light' : 'dark');
  }, [isLightMode]);

  useEffect(() => {
    localStorage.setItem('portfolio-language', locale);
  }, [locale]);

  const content = translations[locale];
  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <div className="site-shell">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        handleNavClick={handleNavClick}
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
        locale={locale}
        setLocale={setLocale}
        content={content}
      />
      <Hero content={content} />
      <About content={content} />
      <Skills content={content} />
      <Projects content={content} locale={locale} />
      <Resume content={content} />
      <Contact content={content} />
      <Footer content={content} />
    </div>
  );
}








































































































































































































































