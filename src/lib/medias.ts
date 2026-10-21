import { asset } from "./asset";

/**
 * Images et PDF du site, rangés dans public/medias/.
 * Pour ajouter un média : déposer le fichier dans public/medias/ puis ajouter une ligne ici.
 * `asset()` ajoute automatiquement le bon préfixe (racine du domaine ou adresse github.io).
 */
const media = (fichier: string) => ({ url: asset(`/medias/${fichier}`) });

// Logos des lieux et des collaborations
export const logoDurbec = media("logo_gallerie_drubec.jpeg");
export const logoMamato = media("mamato-logo-1611045542.jpg");
export const logoAuPreau = media("LOGO-blanc_au_preau.png");
export const logoEcouteDuVivant = media("logo-b.jpeg");
export const logoOrigins = media("logo-a.jpeg");

// Visuels des pages
export const marineHubBtn = media("marine_hub_btn.jpg");
export const solsticeHubBtn = media("solstice_hub_btn.png");
export const solsticeMariage = media("solstice_Mariage.png");
export const solsticeEntreprise = media("solstice_Entreprise.png");
export const solsticeRestaurateur = media("solstice_Restaurateur.png");

// Photos (pas utilisées pour l'instant, conservées depuis l'ancien site)
export const marineAnais = media("marine_anais.png");
export const marineStudio = media("marine_studio.jpg");
export const marineSmiling = media("marine_smiling.jpg");
export const marineSinging = media("marine_singing.jpg");
export const guyCloseup = media("guy_closeup.jpg");
export const guyGuitar = media("guy_guitar.jpg");

// Documents PDF
export const cvMarineAnais = media("cv-marine-anais.pdf");
export const offreSolsticeMariage = media("Offre_Solstice_Mariage.pdf");
export const offreSolsticeEntreprise = media("Offre_Solstice_Entreprise.pdf");
export const offreSolsticeRestaurateur = media("Offre_Solstice_Restaurateur.pdf");
