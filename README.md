# ImmoVision — Frontend Demo

React 19 + TypeScript + Vite, en français.

## Démarrage

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Fonctionnalités

- Accueil premium et moteur de recherche
- Catalogue de 12 biens fictifs au Maroc
- Filtres par ville, transaction et type, tri par prix
- Pages de détails avec galerie
- Favoris persistés dans `localStorage`
- Formulaire de contact simulé, **sans backend ni envoi réel**
- Responsive desktop/tablette/mobile

## Déploiement

Vite utilise `base: './'` pour les ressources. Les routes utilisent BrowserRouter : sur GitHub Pages, prévoir une règle de fallback `404.html` ou migrer vers HashRouter pour éviter les 404 après rechargement d'une URL profonde.

## À venir

Supabase Auth, base PostgreSQL, RLS, Storage, comptes agence, visites, carte Leaflet et dashboard.

Les annonces et tarifs sont fictifs ; les photos sont chargées depuis Unsplash et nécessitent une connexion internet.
