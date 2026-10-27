export const DEMO_EMAIL = 'demo@monleg.fr';
export const DEMO_PASSWORD = 'MonlegDemo123!';
export function demoContacts() {
 return [
  {name:'James Alexander Smith',relation:'Cousin',email:'james@example.com'},
  {name:'William Henry Johnson',relation:'Frère',email:'william@example.com'},
  {name:'Michael David Brown',relation:'Ami',email:'michael@example.com'},
 ].map((person,index)=>({...person,id:`demo-contact-${index+1}`,phone:`+33 6 12 34 56 7${index}`,address:'99 route de Lyon, Istres, France',notes:'Contact de démonstration',emergency:true,updated:new Date().toISOString()}));
}
export function demoEntries() {
 return [
  {title:'Une journée à la montagne',body:'Le soleil se levait derrière les sommets. Nous avons pris le temps de marcher ensemble, de rire et de profiter de ce moment simple.',location:'Les Alpes',category:'Souvenirs',cover:'/assets/dashboard-imgRectangle5429.png'},
  {title:'Les petits bonheurs du quotidien',body:'Un café chaud, quelques mots dans mon carnet et une matinée paisible. Ces petits instants méritent aussi une place dans notre histoire.',location:'À la maison',category:'Pensées',cover:'/assets/dashboard-imgRectangle5428.png'},
  {title:'Un message pour ceux que j’aime',body:'Gardez toujours du temps pour les personnes qui comptent. Les plus beaux souvenirs sont souvent ceux que nous créons ensemble.',location:'Paris',category:'Messages',cover:'/assets/dashboard-imgRectangle5427.png'},
  {title:'Ce que je souhaite transmettre',body:'Je souhaite transmettre nos histoires, nos traditions et le plaisir de nous retrouver en famille.',location:'France',category:'Souvenirs',cover:'/assets/dashboard-imgRectangle5429.png'},
 ].map((entry,index)=>({...entry,id:`demo-journal-${index+1}`,updated:new Date(Date.now()-index*86400000).toISOString()}));
}
