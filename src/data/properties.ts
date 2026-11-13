import type {Property} from '../types';
const photos=[
'photo-1600596542815-ffad4c1539a9','photo-1600607687939-ce8a6c25118c','photo-1539020140153-e479b8c22e70','photo-1600566753190-17f0baa2a6c3',
'photo-1600607687920-4e2a09cf159d','photo-1600573472591-ee6b68d14c68','photo-1600566753086-00f18fb6b3ea','photo-1600566752355-35792bedcfea',
'photo-1600573472592-401b489a3cdc','photo-1600607687644-c7171b42498f','photo-1600596542815-ffad4c1539a9','photo-1600607687939-ce8a6c25118c'];
const img=(id:string)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=78`;
const rows:[string,string,string,number,number,number,number,Property['type'],Property['purpose']][]=[
['Villa contemporaine avec piscine','Marrakech','Palmeraie',4850000,420,5,4,'Villa','Vente'],
['Appartement lumineux au centre','Casablanca','Racine',2150000,145,3,2,'Appartement','Vente'],
['Riad authentique rénové','Fès','Médina',3200000,260,4,3,'Riad','Vente'],
['Villa panoramique sur mer','Tanger','Malabata',6200000,380,5,4,'Villa','Vente'],
['Appartement design avec terrasse','Rabat','Agdal',13500,120,2,2,'Appartement','Location'],
['Maison de charme avec jardin','Meknès','Hamria',1780000,210,3,2,'Maison','Vente'],
['Penthouse moderne','Casablanca','Ain Diab',4200000,230,4,3,'Appartement','Vente'],
['Villa élégante au calme','Marrakech','Targa',2900000,310,4,3,'Villa','Vente'],
['Appartement cosy','Fès','Route Immouzer',6500,95,2,1,'Appartement','Location'],
['Maison familiale spacieuse','Rabat','Hay Riad',3950000,295,4,3,'Maison','Vente'],
['Villa avec jardin arboré','Tanger','Boubana',3600000,335,4,3,'Villa','Vente'],
['Appartement neuf','Marrakech','Guéliz',9800,110,2,2,'Appartement','Location']];
export const properties:Property[]=rows.map((r,i)=>({id:i+1,title:r[0],city:r[1],district:r[2],price:r[3],area:r[4],beds:r[5],baths:r[6],type:r[7],purpose:r[8],image:img(photos[i]),gallery:[img(photos[i]),img(photos[(i+1)%photos.length]),img(photos[(i+2)%photos.length])],featured:i<3,description:`Découvrez ce bien situé à ${r[2]}, ${r[1]}. Des espaces lumineux, des finitions soignées et un emplacement recherché. Cette annonce est une démonstration avec des données fictives.`,amenities:['Terrasse','Parking','Cuisine équipée','Climatisation']}));
export const formatPrice=(p:Property)=>new Intl.NumberFormat('fr-MA').format(p.price)+' DH'+(p.purpose==='Location'?' / mois':'');
