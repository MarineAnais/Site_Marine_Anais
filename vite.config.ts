import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// Configuration standard (plus aucune dépendance à Lovable).
//
// Nitro choisit automatiquement le bon format de déploiement :
//   - Vercel, Netlify, Cloudflare Pages : détecté tout seul au moment du build
//   - ailleurs (VPS, local) : serveur Node dans .output/
// On peut forcer un format avec la variable d'environnement NITRO_PRESET.
//
// GitHub Pages (STATIC_BUILD=1) : le site est généré en fichiers fixes (une page HTML
// par route) dans dist/client, grâce au prérendu de TanStack Start, sans Nitro.
// Voir .github/workflows/pages.yml.
const isStaticBuild = process.env.STATIC_BUILD === "1";

// Préfixe des adresses du site. "/" à la racine d'un domaine (par défaut) ; sur l'adresse
// github.io du dépôt : SITE_BASE=/artist-website-forge/ (voir .github/workflows/pages.yml).
const base = process.env.SITE_BASE || "/";

export default defineConfig({
  base,
  server: {
    port: 3000,
    // Les dépendances peuvent être installées hors du dossier du projet (lien symbolique).
    fs: { allow: [".", "/persist"] },
  },
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    // Le point d'entrée serveur est src/server.ts (page d'erreur de secours).
    tanstackStart({
      server: { entry: "server" },
      // Prérendu des pages uniquement pour le build statique, pour ne rien changer
      // au fonctionnement sur Vercel / Netlify.
      ...(isStaticBuild
        ? {
            prerender: {
              enabled: true,
              crawlLinks: true,
              failOnError: true,
              // Ne prérendre que les pages : on saute les fichiers (PDF, images…)
              // et les anciennes adresses d'assets Lovable (/__l5e/…).
              filter: (page: { path: string }) =>
                !page.path.startsWith("/__l5e/") && !/\.[a-z0-9]+$/i.test(page.path),
            },
          }
        : {}),
    }),
    // Nitro (format de déploiement serveur) n'est pas utilisé pour le build statique.
    ...(isStaticBuild ? [] : [nitro()]),
    viteReact(),
  ],
});
