import { logoDurbec as galerieDurbecLogo } from "./medias";
import { logoMamato as mamatoLogo } from "./medias";
import { logoAuPreau as auPreauLogo } from "./medias";
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
  cardBackground: "#1a2a4a",
};

export const ALL_VENUES: Venue[] = [VENUE_GALERIE_DURBEC, VENUE_MAMATO, VENUE_AU_PREAU];
export const SOLSTICE_VENUES: Venue[] = [VENUE_MAMATO, VENUE_AU_PREAU];
