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
// GitHub Pages (NITRO_PRESET=github_pages) : le site est généré en fichiers fixes
// (une page HTML par route) dans .output/public. Voir .github/workflows/pages.yml.
const isStaticBuild = process.env.NITRO_PRESET === "github_pages";

export default defineConfig({
  server: { port: 3000 },
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
        ? { prerender: { enabled: true, crawlLinks: true, failOnError: true } }
        : {}),
    }),
    nitro(),
    viteReact(),
  ],
});
