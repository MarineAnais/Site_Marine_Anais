/**
 * Adresse d'un fichier du dossier public/ (images, PDF, favicon…).
 * Ajoute automatiquement le préfixe du site : "" à la racine d'un domaine
 * (marineanais.fr), "/<nom-du-dépôt>" sur l'adresse github.io.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return base + (path.startsWith("/") ? path : `/${path}`);
}
