import {useEffect,useRef,useState} from 'react';
import {Link} from 'react-router-dom';
import {MapPin} from 'lucide-react';
import type {Property} from '../types';
import {formatPrice} from '../data/properties';
type MapInstance={remove:()=>void;fitBounds:(bounds:number[][],options?:object)=>void;setView:(point:number[],zoom:number)=>void};
type LeafletApi={map:(node:HTMLElement,options?:object)=>MapInstance;tileLayer:(url:string,options:object)=>{addTo:(map:MapInstance)=>void};marker:(point:number[])=>{addTo:(map:MapInstance)=>{bindPopup:(html:string)=>void}}};
declare global {interface Window {L?:LeafletApi}}
const locations:Record<string,[number,number]>={
'Marrakech':[31.6295,-7.9811],'Casablanca':[33.5731,-7.5898],'Rabat':[34.0209,-6.8416],'Tanger':[35.7595,-5.8340],'Fès':[34.0648,-4.9737],'Meknès':[33.8935,-5.5473]};
const offsets:[[number,number],[number,number],[number,number]]=[[.015,.012],[-.012,.018],[.01,-.015]];
export function getApproxLocation(p:Property):[number,number]{const c=locations[p.city]||[32,-6];const d=offsets[p.id%3];return [c[0]+d[0],c[1]+d[1]]}
export default function PropertyMap({items}:{items:Property[]}){
 const el=useRef<HTMLDivElement>(null);const map=useRef<MapInstance|null>(null);const [ready,setReady]=useState(false);const [error,setError]=useState(false);
 useEffect(()=>{if(window.L){setReady(true);return}
 const existing=document.querySelector('script[data-leaflet]');
 if(existing){existing.addEventListener('load',()=>setReady(true),{once:true});return}
 const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';document.head.appendChild(css);
 const script=document.createElement('script');script.src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';script.dataset.leaflet='true';script.onload=()=>setReady(true);script.onerror=()=>setError(true);document.head.appendChild(script);
 },[]);
 useEffect(()=>{if(!ready||!el.current||!window.L)return;const L=window.L;map.current?.remove();const instance=L.map(el.current,{scrollWheelZoom:false});map.current=instance;L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors',maxZoom:18}).addTo(instance);
 if(items.length){const coords=items.map(p=>{const c=getApproxLocation(p);const marker=L.marker(c).addTo(instance);marker.bindPopup('<div style="min-width:150px;font-family:sans-serif"><strong>'+p.title.replace(/[<>&"']/g,'')+'</strong><br>'+formatPrice(p)+'<br><a href="#/bien/'+p.id+'">Voir le bien →</a></div>');return c});if(coords.length===1)instance.setView(coords[0],12);else instance.fitBounds(coords.map(c=>[c[0],c[1]]),{padding:[35,35],maxZoom:11})}else instance.setView([32.5,-6.5],6);
 return()=>{instance.remove();if(map.current===instance)map.current=null};
 },[ready,items]);
 return <div className="map-shell"><div className="map-title"><div><MapPin size={18}/><strong>Explorer sur la carte</strong></div><span>Positions approximatives · annonces fictives</span></div>{error?<p className="map-error">Carte indisponible. Vérifiez votre connexion.</p>:<div className="property-map" ref={el} aria-label="Carte interactive des biens immobiliers"/>}<div className="map-bottom">Sélectionnez un marqueur pour voir le bien. <Link to="/biens">Tous les biens</Link></div></div>
}
