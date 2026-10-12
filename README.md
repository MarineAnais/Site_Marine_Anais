# Marine Anaïs — site officiel

Site de Marine Anaïs, chanteuse et coach vocal à Rueil-Malmaison : prestations live (solo et duo Solstice), cours de chant, voix off, book et contact.

Construit avec [TanStack Start](https://tanstack.com/start) (React), Tailwind CSS et Vite.

## Lancer le site sur son ordinateur

Il faut [Node.js](https://nodejs.org) (version 20 ou plus récente).

```sh
npm install      # télécharge les dépendances (une seule fois)
npm run dev      # lance le site sur http://localhost:3000
```

## Construire le site

```sh
npm run build
```

Le résultat est généré dans le dossier `.output/`.

## Mettre le site en ligne (GitHub Pages)

Le site est publié gratuitement par GitHub Pages. À chaque modification de la branche `main`, GitHub construit le site (fichier `.github/workflows/pages.yml`) et le met en ligne tout seul. Sur les autres branches, il le construit seulement pour vérifier que tout fonctionne (onglet **Actions** du dépôt).

Réglages à faire une seule fois dans GitHub, onglet **Settings → Pages** :

1. **Source** : choisir **GitHub Actions**.
2. **Custom domain** : saisir `marineanais.fr`, puis cocher **Enforce HTTPS** une fois la case disponible.
3. Chez le vendeur du nom de domaine, ajouter les enregistrements DNS indiqués par GitHub (voir la documentation « Configuring a custom domain for your GitHub Pages site »).

Le site est prévu pour être servi à la racine d'un domaine : sans nom de domaine personnalisé, les images et les liens ne s'afficheraient pas correctement à l'adresse `marineanais.github.io/artist-website-forge`.

Pour un autre hébergeur (Vercel, Netlify, Cloudflare Pages), il suffit de relier le dépôt : le format de déploiement est détecté automatiquement (commande d'installation `npm install`, commande de build `npm run build`).

## Organisation du code

- `src/routes/` : une page par fichier (accueil, services, book, contact, mentions légales)
- `src/components/site/` : éléments du site (barre de navigation, pied de page, carrousels…)
- `src/components/ui/` : composants d'interface génériques
- `src/styles.css` : couleurs et styles globaux
- `public/` : images, brochures PDF, `robots.txt`, `sitemap.xml`

`src/routeTree.gen.ts` est généré automatiquement : ne pas le modifier à la main.
