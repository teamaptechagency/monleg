const acceptance = 'En utilisant ce site web, vous acceptez de respecter les présentes conditions d’utilisation. Si vous n’êtes pas d’accord, veuillez ne pas utiliser le site.';
const sections = [
 { title: 'Collecte des données', icon: 'data', text: 'Nous collectons des informations personnelles telles que votre nom, votre adresse e-mail et les détails de votre compte lorsque vous vous inscrivez ou nous contactez.' },
 { title: 'Cookies', icon: 'settings', text: 'Nous utilisons des cookies pour améliorer la navigation et personnaliser votre expérience. Vous pouvez gérer les cookies dans les paramètres de votre navigateur.' },
 { title: 'Utilisation des données', icon: 'user', text: 'Vos données sont utilisées pour :', items: ['Fournir nos services et améliorer l’expérience utilisateur', 'Communiquer des mises à jour importantes et des offres promotionnelles (si vous êtes abonné)', 'Assurer la sécurité et prévenir les activités frauduleuses'] },
 { title: 'Conservation des données', icon: 'note', text: acceptance },
 { title: 'Protection des données', icon: 'lock', text: acceptance },
 { title: 'Acceptation des conditions', icon: 'call', text: acceptance },
];
export default function PrivacyContent() {
 return <section className="privacy-section"><div className="container"><div className="privacy-heading"><h1>Politique De Confidentialité</h1><p>Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web.</p></div><div className="privacy-grid">{sections.map(section => <article key={section.title}><div className={`privacy-icon privacy-${section.icon}`}><img src={`/assets/privacy-${section.icon}.svg`} alt="" /></div><div><h2>{section.title}</h2><p>{section.text}</p>{section.items && <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>}</div></article>)}</div></div></section>;
}
