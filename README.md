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

Vite utilise `base: './'`. La navigation utilise `HashRouter` pour garder les routes fonctionnelles sur GitHub Pages, même après rechargement.

Un workflow `.github/workflows/deploy.yml` exécute l'installation, le build et le déploiement sur les runners GitHub. Dans **Settings → Pages**, choisir **GitHub Actions** comme source. Aucun `npm install` local n'est nécessaire pour publier le site.

## À venir

Supabase Auth, base PostgreSQL, RLS, Storage, comptes agence, visites, carte Leaflet et dashboard.

Les annonces et tarifs sont fictifs ; les photos sont chargées depuis Unsplash et nécessitent une connexion internet.

## Version 2 — Améliorations

- Recherche multicritère : texte, ville, transaction, type, prix minimum/maximum, surface minimum et chambres.
- Filtres synchronisés avec l'URL pour partager une recherche.
- Carte interactive Leaflet / OpenStreetMap dans le catalogue et les fiches de biens.
- Marqueurs avec liens vers les annonces.
- Animations légères, styles responsives et navigation clavier améliorée.
- Photos de démonstration chargées depuis Unsplash. Les visuels, prix, annonces et positions sont illustratifs : ils ne représentent pas des biens réels vérifiés.

**Limites de la démo :** aucune authentification, aucun backend, aucune prise de rendez-vous réelle. Les cartes nécessitent une connexion à OpenStreetMap et au CDN Leaflet.
