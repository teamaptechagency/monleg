import type { Metadata } from 'next';
import { MonLegPage } from '../monleg-page';
export const metadata: Metadata = { title: 'Politique de confidentialité — Mon Leg', description: 'La politique de confidentialité de Mon Leg.' };
export default function PrivacyPage() { return <MonLegPage privacyPage />; }
