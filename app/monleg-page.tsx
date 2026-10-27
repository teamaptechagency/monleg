'use client';

import { useRef, useState } from 'react';
import AboutContent from './about-content';
import ContactContent from './contact-content';
import FaqContent from './faq-content';
import TermsContent from './terms-content';
import PrivacyContent from './privacy-content';

const A = '/assets/';
const heroPlaylist = ['hero-video-male.mp4', 'monleg hero banner female.mp4'];
const plans = [
  { name: 'Basic', price: '0€', action: 'Commencer Gratuitement', features: ['Planificateur de fin de vie essentiel', 'Stockage sécurisé (5 documents)', 'Accès permanent', 'Support par email'] },
  { name: 'Standard', price: '79€', action: 'Choisir Standard', features: ['Planificateur de fin de vie complet', 'Stockage sécurisé (50 documents)', 'Accès permanent', 'Support prioritaire', 'Consultation notariale incluse'] },
  { name: 'Premium', price: '149€', action: 'Choisir Premium', features: ['Planificateur de fin de vie premium', 'Stockage illimité', 'Accès permanent', 'Support téléphonique dédié', 'Consultations notariales illimitées', 'Accompagnement personnalisé'] },
];
const benefits = ['Réseau de notaires certifiés dans toute la France', 'Expertise en droit successoral français', 'Accompagnement personnalisé selon votre situation', 'Conformité garantie avec la législation française'];
const quote = "Les gens ne meurent pas pour nous immédiatement, mais restent baignés dans une sorte d’aura de vie qui n’a aucune relation avec la véritable immortalité mais à travers laquelle ils continuent d’occuper nos pensées de la même manière que lorsqu’ils étaient en vie.";

function Arrow({ light = false }: { light?: boolean }) { return <img className="arrow" src={A + (light ? 'imgArrowRight1.svg' : 'imgArrowRight.svg')} alt="" width="24" height="24" />; }
export function MonLegPage({ aboutPage = false, contactPage = false, faqPage = false, termsPage = false, privacyPage = false }: { aboutPage?: boolean; contactPage?: boolean; faqPage?: boolean; termsPage?: boolean; privacyPage?: boolean }) {
  const [menu, setMenu] = useState(false);
  const [videoPaused, setVideoPaused] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const heroVideo = useRef<HTMLVideoElement>(null);
  const [modal, setModal] = useState({ title: '', message: '' });
  const dialog = useRef<HTMLDialogElement>(null);
  function show(title: string, message: string) { setModal({ title, message }); dialog.current?.showModal(); }
  function selectPlan(name: string) { window.location.assign('/plans'); }
  function account() { window.location.assign('/login'); }
  return <>
    <a href="#main" className="skip-link">Aller au contenu</a>
    <section className={(aboutPage || contactPage || faqPage || termsPage || privacyPage) ? "hero about-hero" : "hero"} id="accueil">
      {!aboutPage && !contactPage && !faqPage && !termsPage && !privacyPage && <>
      <video key={videoIndex} ref={heroVideo} className="hero-video" src={A + heroPlaylist[videoIndex]} autoPlay muted playsInline preload="auto" poster={A + 'hero-1.png'} aria-hidden="true" onEnded={() => { setVideoIndex(index => (index + 1) % heroPlaylist.length); setVideoPaused(false); }} onPlay={() => setVideoPaused(false)} onPause={() => setVideoPaused(true)} />
      <div className="hero-shade" aria-hidden="true" />
      <div className="video-selector" role="group" aria-label="Choisir la vidéo de fond">
        <button type="button" aria-label="Vidéo homme" aria-pressed={videoIndex === 0} onClick={() => { setVideoIndex(0); }}>M</button>
        <button type="button" aria-label="Vidéo femme" aria-pressed={videoIndex === 1} onClick={() => { setVideoIndex(1); }}>F</button>
      </div>
      <button className="video-toggle" aria-label={videoPaused ? 'Lire la vidéo de fond' : 'Mettre la vidéo de fond en pause'} onClick={async () => { const video = heroVideo.current; if (!video) return; if (video.paused) { try { await video.play(); setVideoPaused(false); } catch { setVideoPaused(true); } } else { video.pause(); setVideoPaused(true); } }}>{videoPaused ? '▶' : 'Ⅱ'}</button>
      </>}
      <header className="header">
        <div className="account-strip"><div className="container"><button className="header-login" onClick={account}>Se connecter</button><button className="header-signup" onClick={() => window.location.assign('/signup')}>S’inscrire</button></div></div>
        <div className="nav-line"><div className="container nav-inner">
          <a className="brand" href="/" aria-label="Mon Leg — Accueil"><img src={A + 'logo.png'} alt="Mon Leg" width="306" height="171" /></a>
          <button className="menu-toggle" aria-expanded={menu} aria-controls="navigation" onClick={() => setMenu(!menu)}>{menu ? 'Fermer ×' : 'Menu ☰'}</button>
          <nav id="navigation" className={menu ? 'navigation open' : 'navigation'} aria-label="Navigation principale">
            <a href="/" onClick={() => setMenu(false)}>Accueil</a><a href="/about" aria-current={aboutPage ? "page" : undefined} onClick={() => setMenu(false)}>À propos</a><a href="/contact" aria-current={contactPage ? "page" : undefined} onClick={() => setMenu(false)}>Contactez-nous</a><button onClick={account}>Connexion</button><a className="nav-cta" href="/signup" onClick={() => setMenu(false)}>Commençons</a>
          </nav>
        </div></div>
      </header>
      {!aboutPage && !contactPage && !faqPage && !termsPage && !privacyPage && <div className="container hero-inner"><div className="hero-copy">
        <span className="eyebrow">Solution recommandée par les notaires</span>
        <h1>Préparez votre <span>héritage sereinement</span></h1>
        <p>Essayez le pack Basic gratuitement et commencez à protéger ce qui compte. Votre famille mérite la tranquillité d’esprit que seule une planification successorale bien préparée peut offrir.</p>
        <a href="/signup" className="button yellow">Créer mon planificateur de fin de vie <Arrow /></a>
        <p className="hero-note">Gratuit • Sans engagement • Sécurisé</p>
      </div></div>}
    </section>
    <main id="main">
      {privacyPage ? <PrivacyContent /> : termsPage ? <TermsContent /> : faqPage ? <FaqContent /> : contactPage ? <ContactContent /> : aboutPage ? <AboutContent /> : <>
      <section className="trust container" aria-label="Nos engagements">
        {['Chiffrement de niveau bancaire', 'Conformité RGPD', 'Expertise notariale'].map((title, i) => <article className={`trust-card trust-${i}`} key={title}><div><h2>{title}</h2><p>Nos partenaires notaires français certifiés garantissent la conformité légale de tous vos documents successoraux.</p></div><span className="trust-icon"><img src={A + ['imgMaterialSymbolsLightEncryptedOutline.svg', 'imgPhCertificateLight.svg', 'imgMynauiUsersGroup.svg'][i]} width={i === 0 ? 68 : 34} height={i === 0 ? 68 : 34} alt="" /></span></article>)}
      </section>
      <section className="about" id="a-propos"><div className="container about-inner">
        <div className="collage"><img className="family" src={A + 'imgRectangle3.png'} alt="Un grand-père partage un moment avec sa petite-fille" /><img className="sunset" src={A + 'imgRectangle4.png'} alt="Un homme contemple le coucher du soleil" /><img className="hands" src={A + 'imgRectangle5.png'} alt="Des mains réunies en signe de soutien" /></div>
        <div className="about-copy"><span className="eyebrow">Notarial expertise</span><h2>Partenaire des notaires français</h2><p>Mon Leg accompagne et simplifie vos démarches de transmission patrimoniale en collaboration avec un réseau de notaires français certifiés et expérimentés.</p><ul className="benefits">{benefits.map(text => <li key={text}><img src={A + 'imgCheckSquare.svg'} width="24" height="24" alt="" />{text}</li>)}</ul><a className="button subtle" href="#contact">Apprendre Encore Plus <Arrow /></a></div>
      </div></section>
      <section className="pricing container" id="formules"><div className="section-heading"><h2>Choisissez votre planificateur de fin de vie</h2><p>Paiement unique • Accès permanent • Mise à jour optionnelle 9,99€/an après la première année</p></div>
        <div className="plans">{plans.map((plan, i) => <article className={`plan ${i === 1 ? 'featured' : ''}`} key={plan.name}><div><h3>{plan.name}</h3><p className="price">{plan.price}</p><p>Paiement unique</p><button className="plan-button" onClick={() => selectPlan(plan.name)}>{plan.action}</button></div><div className="plan-features"><h4>Ce qui est inclus:</h4><ul>{plan.features.map(feature => <li key={feature}>{feature}</li>)}</ul></div></article>)}</div>
        <p className="guarantee"><strong>Accès permanent garanti :</strong><span>Vos informations restent accessibles à vie, même sans mise à jour annuelle. La mise à jour de 9,99€/an après la première année est optionnelle et permet d’ajouter de nouvelles fonctionnalités.</span></p>
      </section>
      <section className="callout"><img className="paper-top" src={A + 'imgShape101.png'} alt="" /><img className="paper-bottom" src={A + 'imgShape111.png'} alt="" /><div className="callout-copy"><h2>Ne remettez plus à demain ce qui compte aujourd’hui</h2><p>Rejoignez des milliers de familles qui ont choisi Mon Leg pour protéger leur héritage. Commencez gratuitement et découvrez la tranquillité d’esprit.</p><a className="button outline" href="/signup">Créer mon planificateur de fin de vie <Arrow light /></a><small>Gratuit • Sans engagement • Sécurisé • Support inclus</small></div></section>
      </>}
      {!contactPage && !faqPage && !termsPage && !privacyPage && <section className="voices"><div className="container"><div className="section-heading"><h2>La Parole du Peuple</h2><p>Leurs voix se sont éteintes, mais leurs mots demeurent. Un site web dédié aux paroles fortes, drôles et profondes de ces personnes, préservant l’aura de la vie à travers le langage qu’elles ont laissé derrière elles.</p></div><div className="quotes">{[0, 1].map(i => <figure key={i}><blockquote>{aboutPage ? (i === 0 ? "« On meurt toujours trop tôt — ou trop tard. Et cependant la vie est là, terminée ; le trait est tiré, il faut faire la somme. Tu n’es rien d’autre que ta vie. »" : "« Les raisons qui me poussent à écrire sont nombreuses et les plus importantes sont les plus secrètes, je pense. Peut-être par-dessus tout ceci : mettre quelque chose à l’abri de la mort. »") : quote}</blockquote><figcaption><img src={A + (aboutPage ? 'about-imgEllipse3.png' : 'imgEllipse3.png')} alt={aboutPage ? (i === 0 ? 'Jean-Paul Sartre' : 'André Gide') : 'Marcel Proust'} width="64" height="64" /><div><strong>{aboutPage ? (i === 0 ? 'Jean-Paul Sartre' : 'André Gide') : 'Marcel Proust'}</strong><span>{aboutPage ? (i === 0 ? '1905 - 1980' : '1869 - 1951') : '1871 - 1922'}</span></div></figcaption></figure>)}</div></div></section>}
      <section className="contact container" id="contact" aria-label="Contactez-nous"><div className="contact-phone"><img src={A + 'imgHeadphones74939171.svg'} width="64" height="64" alt="" /><div><span>Support téléphonique</span><strong>Du lundi au vendredi, 9h-18h</strong></div></div><strong className="email-copy">Support par email<br />Réponse sous 24h garantie</strong><button className="button white" onClick={() => contactPage ? document.getElementById('contact-name')?.focus() : window.location.assign('/contact')}>Contactez-nous maintenant <Arrow /></button></section>
    </main>
    <footer><div className="container footer-main"><div className="footer-brand"><a href="#accueil"><img src={A + 'logo.png'} alt="Mon Leg" width="218" height="122" /></a><p>Votre partenaire de confiance pour la planification de fin de vie et la transmission de patrimoine.</p></div><div className="footer-pages"><h2>Pages</h2><a href="/faq" aria-current={faqPage ? "page" : undefined}>Centre d’aide (FAQ)</a>{['Mentions légales', 'Page d’atterrissage', 'Sélection de plan (Démo)', 'Commande (Démo)', 'Informations personnelles (Démo)', 'Tableau de bord (Démo)'].map((text, i) => <button key={text} onClick={() => i === 1 ? window.location.assign('/') : i === 2 ? window.location.assign('/plans') : show(text, 'Cette section sera disponible dans une prochaine étape du projet.')}>{text}</button>)}</div><div className="newsletter"><h2>Newsletter</h2><form onSubmit={event => { event.preventDefault(); show('Newsletter', 'L’inscription à la newsletter sera disponible après la connexion au backend. Votre adresse n’a pas été enregistrée.'); }}><label className="sr-only" htmlFor="newsletter-email">Votre adresse email</label><input id="newsletter-email" type="email" placeholder="Email address" required /><button type="submit" aria-label="S’inscrire à la newsletter"><img src={A + 'imgArrowUpRight.svg'} width="24" height="24" alt="" /></button></form></div></div><div className="footer-bottom"><div className="container"><div><a className="privacy-link" href="/privacy" aria-current={privacyPage ? "page" : undefined}>Confidentialité</a><a className="terms-link" href="/terms" aria-current={termsPage ? "page" : undefined}>Conditions d’utilisation</a></div><p>© 2025 Mon Leg. Tous droits réservés. | Certifié par les notaires français</p></div></div></footer>
    <dialog ref={dialog} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}><button className="dialog-close" aria-label="Fermer" onClick={() => dialog.current?.close()}>×</button><h2>{modal.title}</h2><p>{modal.message}</p><button className="button dialog-button" onClick={() => dialog.current?.close()}>Compris</button></dialog>
  </>;
}

