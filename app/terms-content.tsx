const sections = [
 ['Acceptation des conditions', 'En utilisant ce site web, vous acceptez de respecter les présentes conditions d’utilisation. Si vous n’êtes pas d’accord, veuillez ne pas utiliser le site.'],
 ['Services', 'Nous fournissons une assistance juridique en ligne ainsi que des services de documents aux utilisateurs inscrits (Freemium ou Premium).'],
 ['Responsabilité du compte', 'Vous êtes responsable du maintien de la confidentialité de vos identifiants de connexion et de toutes les activités effectuées sous votre compte.'],
 ['Paiement et abonnement', 'Les fonctionnalités Premium nécessitent un paiement selon le forfait choisi. Tous les frais sont affichés de manière transparente avant le paiement.'],
 ['Propriété intellectuelle', 'Tout le contenu du site (textes, graphiques, logos et code) nous appartient et est protégé par les lois sur le droit d’auteur.'],
 ['Limitation de responsabilité', 'Nous ne sommes pas responsables des dommages indirects ou de la perte de données résultant de l’utilisation du site.'],
 ['Modifications des conditions', 'Nous nous réservons le droit de mettre à jour ces conditions à tout moment. L’utilisation continue du site implique l’acceptation des nouvelles conditions.'],
];
export default function TermsContent() {
 return <section className="terms-section"><div className="container terms-inner"><h1>Conditions générales d’utilisation</h1><p className="terms-intro">En accédant à notre site web ou en l’utilisant, vous acceptez les présentes conditions générales d’utilisation. Veuillez les lire attentivement avant d’utiliser nos services.</p><ol className="terms-list">{sections.map(([title, text], index) => <li key={title}><h2>{index + 1}. {title}</h2><p>{text}</p></li>)}</ol></div></section>;
}
