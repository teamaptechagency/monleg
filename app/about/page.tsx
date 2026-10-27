import type { Metadata } from 'next';
import { MonLegPage } from '../monleg-page';

export const metadata: Metadata = { title: 'À propos — Mon Leg', description: 'Découvrez l’accompagnement humain, la consultation personnalisée et les engagements de Mon Leg.' };
export default function AboutPage() { return <MonLegPage aboutPage />; }
