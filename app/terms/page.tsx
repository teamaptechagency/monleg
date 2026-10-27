import type { Metadata } from 'next';
import { MonLegPage } from '../monleg-page';
export const metadata: Metadata = { title: 'Conditions générales d’utilisation — Mon Leg', description: 'Les conditions générales d’utilisation du site Mon Leg.' };
export default function TermsPage() { return <MonLegPage termsPage />; }
