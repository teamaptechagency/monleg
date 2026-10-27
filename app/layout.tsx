import type { Metadata } from 'next';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/open-sans/600.css';
import './globals.css';
import './about.css';
import './contact.css';
import './faq.css';
import './terms.css';
import './privacy.css';
import './auth.css';
import './membership.css';
import './dashboard.css';
import './contacts.css';
import './journal.css';
import './figma-collections.css';
import './journal-media.css';

export const metadata: Metadata = { title: 'Mon Leg — Préparez votre héritage sereinement', description: 'Préparez votre transmission patrimoniale avec Mon Leg. Un planificateur de fin de vie sécurisé, en collaboration avec les notaires français.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html>; }

import './onboarding.css';
