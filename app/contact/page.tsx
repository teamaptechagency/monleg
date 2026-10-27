import type { Metadata } from 'next';
import { MonLegPage } from '../monleg-page';
export const metadata: Metadata = { title: 'Contactez-nous — Mon Leg', description: 'Contactez l’équipe Mon Leg pour vos questions et votre accompagnement.' };
export default function ContactPage() { return <MonLegPage contactPage />; }
