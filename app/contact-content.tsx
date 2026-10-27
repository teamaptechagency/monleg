'use client';
import { useState } from 'react';
export default function ContactContent() {
 const [notice, setNotice] = useState(false);
 return <section className="contact-page-section"><div className="container contact-page-grid"><div className="contact-form-column"><h1>Entrer en contact</h1><p className="contact-intro">We’d love to hear from you! Fill out the form or reach out directly — our team will get back to you soon.</p><form className="contact-form" onSubmit={event => { event.preventDefault(); setNotice(true); }}>
 <div className="contact-field"><label htmlFor="contact-name">Nom et prénom <span>*</span></label><input id="contact-name" name="name" autoComplete="name" required placeholder="-" /></div>
 <div className="contact-field"><label htmlFor="contact-email">E-mail <span>*</span></label><input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="-" /></div>
 <div className="contact-field"><label htmlFor="contact-message">Message <span>*</span></label><textarea id="contact-message" name="message" required placeholder="-" rows={4} /></div>
 <button type="submit" className="contact-submit">Suivant</button>
 {notice && <p className="contact-form-notice" role="status">Le formulaire est prêt. L’envoi sera disponible après la connexion au backend Strapi. Aucun message n’a été envoyé.</p>}
 </form><div className="contact-details"><div><img src="/assets/contact-imgPhone.svg" width="24" height="28" alt="" /><div><h2>Téléphone</h2><a href="tel:+33754156587">+33754156587</a></div></div><div><img src="/assets/contact-imgMail.svg" width="24" height="24" alt="" /><div><h2>E-mail</h2><a href="mailto:demo@mail.com">demo@mail.com</a></div></div><div><img src="/assets/contact-imgMapPin.svg" width="24" height="28" alt="" /><div><h2>Adresse</h2><p>29 boulevard de Prague, Nîmes, Languedoc-Roussillon</p></div></div></div></div><img className="contact-map" src="/assets/contact-imgRectangle5433.png" alt="Carte de localisation fournie dans le design Mon Leg" width="620" height="787" /></div></section>;
}
