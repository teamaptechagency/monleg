import type { Metadata } from 'next';
import { MonLegPage } from '../monleg-page';
export const metadata: Metadata = { title: 'Centre d’aide (FAQ) — Mon Leg', description: 'Retrouvez les questions fréquentes sur votre compte et les formules Mon Leg.' };
export default function FaqPage() { return <MonLegPage faqPage />; }
