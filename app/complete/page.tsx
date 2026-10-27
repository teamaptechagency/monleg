import { redirect } from 'next/navigation';
import MembershipFlow from '../membership-flow';
import { getPlan } from '../membership-data';
export const metadata = { title: 'Parcours terminé — Mon Leg' };
export default async function CompletePage({ searchParams }: { searchParams: Promise<{ plan?: string }> }) { const { plan: id } = await searchParams; const plan = getPlan(id); if (!plan) redirect('/plans'); return <MembershipFlow screen="complete" planId={plan.id} />; }
