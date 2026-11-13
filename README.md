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
