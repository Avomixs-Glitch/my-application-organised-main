/**
 * Fonction utilitaire pour générer l'URL du logo d'un site web
 * Utilise plusieurs services de logo pour assurer la disponibilité
 */

export function getWebsiteLogo(url: string, size: number = 64): string {
  try {
    const domain = new URL(url).hostname;
    // Utilise le service Clearbit Logo API qui est gratuit et fiable
    // Optimise la taille pour éviter les logos trop lourds
    const optimizedSize = Math.min(size, 128);
    return `https://logo.clearbit.com/${domain}?size=${optimizedSize}&format=png`;
  } catch (error) {
    console.error("Error parsing URL for logo:", url, error);
    return generateFallbackLogo(url);
  }
}

/**
 * Génère un logo de fallback avec les initiales du nom du site
 */
export function generateFallbackLogo(siteName: string): string {
  const initials = siteName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("")
    .substring(0, 2);

  // Génère un avatar avec les initiales
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=3b82f6&color=ffffff&size=64&bold=true&format=svg`;
}

/**
 * Génère un logo de fallback basé sur le domaine
 */
export function getDomainFallbackLogo(url: string): string {
  try {
    const domain = new URL(url).hostname;
    const domainName = domain.replace("www.", "").split(".")[0];
    return generateFallbackLogo(domainName);
  } catch (error) {
    return generateFallbackLogo("Site");
  }
}

/**
 * Fonction pour obtenir le logo avec fallback automatique
 */
export function getLogoWithFallback(
  siteName: string,
  url: string,
  size: number = 64,
): {
  primary: string;
  fallback: string;
} {
  return {
    primary: getWebsiteLogo(url, size),
    fallback: generateFallbackLogo(siteName),
  };
}

/**
 * Composant utilitaire pour les couleurs des logos de fallback
 */
export const logoColors = [
  "#3b82f6", // blue
  "#8b5cf6", // purple
  "#06b6d4", // cyan
  "#10b981", // emerald
  "#f59e0b", // amber
  "#ef4444", // red
  "#ec4899", // pink
  "#84cc16", // lime
];

export function getColorForSite(siteName: string): string {
  // Génère une couleur cohérente basée sur le nom du site
  const hash = siteName.split("").reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);

  return logoColors[Math.abs(hash) % logoColors.length];
}
