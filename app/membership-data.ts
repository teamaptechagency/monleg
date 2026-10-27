export const membershipPlans = [
 { id: 'basic', name: 'Basic', price: 0, action: 'Commencer Gratuitement', features: ['Planificateur de fin de vie essentiel', 'Stockage sécurisé (5 documents)', 'Accès permanent', 'Support par email'] },
 { id: 'standard', name: 'Standard', price: 79, action: 'Choisir Standard', features: ['Planificateur de fin de vie complet', 'Stockage sécurisé (50 documents)', 'Accès permanent', 'Support prioritaire', 'Consultation notariale incluse'] },
 { id: 'premium', name: 'Premium', price: 149, action: 'Choisir Premium', features: ['Planificateur de fin de vie premium', 'Stockage illimité', 'Accès permanent', 'Support téléphonique dédié', 'Consultations notariales illimitées', 'Accompagnement personnalisé'] },
] as const;
export type PlanId = typeof membershipPlans[number]['id'];
export function getPlan(id: string | undefined) { return membershipPlans.find(plan => plan.id === id); }
export function euros(value: number) { return value.toFixed(2).replace('.', ',') + '€'; }
