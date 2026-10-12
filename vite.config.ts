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
// On peut forcer un format avec la variable d'environnement NITRO_PRESET
// (ex. NITRO_PRESET=cloudflare_pages npm run build).
export default defineConfig({
  server: { port: 3000 },
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    // Le point d'entrée serveur est src/server.ts (page d'erreur de secours).
    tanstackStart({ server: { entry: "server" } }),
    nitro(),
    viteReact(),
  ],
});
