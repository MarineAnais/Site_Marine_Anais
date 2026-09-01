import galerieDurbecLogo from "../assets/logo_gallerie_drubec.jpeg.asset.json";
import mamatoLogo from "../assets/mamato-logo-1611045542.jpg.asset.json";
import auPreauLogo from "../assets/LOGO-blanc_au_preau.png.asset.json";
import type { Venue } from "../components/site/VenuesSection";

export const VENUE_GALERIE_DURBEC: Venue = {
  name: "Galerie Le Durbec",
  url: "https://www.galerieledurbec.fr/",
  logo: galerieDurbecLogo,
};

export const VENUE_MAMATO: Venue = {
  name: "Mamato",
  url: "https://www.mamato.fr/",
  logo: mamatoLogo,
};

export const VENUE_AU_PREAU: Venue = {
  name: "Au Préau",
  url: "https://aupreau.fr/",
  logo: auPreauLogo,
};

export const ALL_VENUES: Venue[] = [VENUE_GALERIE_DURBEC, VENUE_MAMATO, VENUE_AU_PREAU];
export const SOLSTICE_VENUES: Venue[] = [VENUE_MAMATO, VENUE_AU_PREAU];
