import { Website } from "@/data/websites";

/**
 * Déduplique les sites web basés sur l'URL
 * Garde la première occurrence et supprime les suivantes
 */
export function deduplicateWebsites(websites: Website[]): Website[] {
  const seen = new Set<string>();
  const unique: Website[] = [];

  for (const website of websites) {
    if (!seen.has(website.url)) {
      seen.add(website.url);
      unique.push(website);
    } else {
      console.warn(
        `Doublon détecté et supprimé: ${website.name} (${website.url})`,
      );
    }
  }

  return unique;
}

/**
 * Génère un ID unique pour chaque site web basé sur l'URL
 */
export function generateUniqueId(website: Website, index: number): string {
  try {
    const domain = new URL(website.url).hostname;
    return `${domain}-${index}`;
  } catch (error) {
    return `website-${index}`;
  }
}

/**
 * Trouve les doublons dans la liste de sites web
 */
export function findDuplicates(websites: Website[]): Website[] {
  const urlCount = new Map<string, Website[]>();

  websites.forEach((website) => {
    if (!urlCount.has(website.url)) {
      urlCount.set(website.url, []);
    }
    urlCount.get(website.url)!.push(website);
  });

  const duplicates: Website[] = [];
  urlCount.forEach((sites, url) => {
    if (sites.length > 1) {
      duplicates.push(...sites.slice(1)); // Garde le premier, marque les autres comme doublons
    }
  });

  return duplicates;
}

/**
 * Fusionne deux sites web similaires en gardant les meilleures propriétés
 */
export function mergeWebsites(website1: Website, website2: Website): Website {
  return {
    name: website1.name || website2.name,
    url: website1.url,
    description:
      website1.description.length > website2.description.length
        ? website1.description
        : website2.description,
    category: website1.category,
    featured: website1.featured || website2.featured,
    logo: website1.logo || website2.logo,
  };
}
