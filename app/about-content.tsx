const A = '/assets/';
const values = [
 { title: 'Confiance', text: 'La confiance est au cœur de notre relation. Nous protégeons vos données avec le plus haut niveau de sécurité et respectons scrupuleusement la confidentialité de vos informations personnelles.' },
 { title: 'Sécurité', text: 'Vos documents sont chiffrés selon les standards bancaires. Notre infrastructure respecte les normes RGPD et garantit la protection de votre patrimoine numérique.' },
 { title: 'Professionnalisme', text: 'Notre équipe et nos partenaires notaires maintiennent les plus hauts standards de qualité et d’expertise pour vous accompagner dans vos démarches successorales.' },
];
export default function AboutContent() {
 return <>
  <h1 className="sr-only">À propos de Mon Leg</h1>
  <section className="about-services container" aria-label="Notre accompagnement">
   <div className="service-column first-service"><article className="service-copy"><div className="service-heading"><img src={A + 'about-imgUsers.svg'} width="44" height="44" alt="" /><div><h2>Consultation personnalisée</h2><p>Échangez directement avec un notaire</p></div></div><p>Bénéficiez d’une consultation offerte avec nos formules premium pour valider votre stratégie successorale.</p></article><img className="service-photo" src={A + 'about-imgRectangle5431.png'} alt="Un couple visite Paris et prépare de nouveaux projets" width="668" height="500" /></div>
   <div className="service-column"><img className="service-photo" src={A + 'about-imgRectangle5432.png'} alt="Un couple partage un moment au bord de la mer" width="668" height="500" /><article className="service-copy"><div className="service-heading"><img src={A + 'about-imgHeart.svg'} width="44" height="44" alt="" /><div><h2>Accompagnement humain</h2><p>Un service à taille humaine</p></div></div><p>Notre équipe vous accompagne à chaque étape avec empathie et professionnalisme.</p></article></div>
  </section>
  <section className="commitment"><div><span className="eyebrow">Notre engagement</span><blockquote>“Nous croyons que chaque famille mérite de transmettre son héritage en toute sérénité. Mon Leg démocratise l’accès aux services notariaux et simplifie la planification successorale grâce à la technologie, sans jamais compromettre la sécurité ou l’expertise juridique.”</blockquote><p>— L’équipe Mon Leg</p></div></section>
  <section className="values container" aria-label="Nos valeurs"><div className="value-track" aria-hidden="true"><img src={A + 'about-imgShield.svg'} width="44" height="44" alt="" /><span><img src={A + 'about-imgFrame1618873009.svg'} alt="" /></span><img src={A + 'about-imgShield.svg'} width="44" height="44" alt="" /><span><img src={A + 'about-imgFrame1618873009.svg'} alt="" /></span><img src={A + 'about-imgShield.svg'} width="44" height="44" alt="" /></div><div className="value-cards">{values.map(value => <article key={value.title}><img className="mobile-shield" src={A + 'about-imgShield.svg'} width="44" height="44" alt="" /><h2>{value.title}</h2><p>{value.text}</p></article>)}</div></section>
 </>;
}
