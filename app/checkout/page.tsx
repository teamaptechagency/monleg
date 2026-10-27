import { redirect } from 'next/navigation';
import MembershipFlow from '../membership-flow';
import { getPlan } from '../membership-data';
export const metadata = { title: 'Vérifier la commande — Mon Leg' };
export default async function CheckoutPage({ searchParams }: { searchParams: Promise<{ plan?: string }> }) { const { plan: id } = await searchParams; const plan = getPlan(id); if (!plan) redirect('/plans'); if (plan.id === 'basic') redirect('/complete?plan=basic'); return <MembershipFlow screen="checkout" planId={plan.id} />; }
