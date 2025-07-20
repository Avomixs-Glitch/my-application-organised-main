import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  getWebsiteLogo,
  generateFallbackLogo,
  getColorForSite,
} from "@/lib/logo-utils";
import { getCustomLogo } from "@/lib/custom-logos";

interface WebsiteLogoProps {
  siteName: string;
  siteUrl: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  customLogo?: string;
}

const sizeMap = {
  sm: { width: "w-6 h-6", fontSize: "text-xs", logoSize: 24 },
  md: { width: "w-8 h-8", fontSize: "text-sm", logoSize: 32 },
  lg: { width: "w-12 h-12", fontSize: "text-base", logoSize: 48 },
  xl: { width: "w-16 h-16", fontSize: "text-lg", logoSize: 64 },
};

export function WebsiteLogo({
  siteName,
  siteUrl,
  size = "md",
  className,
  customLogo,
}: WebsiteLogoProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const { width, fontSize, logoSize } = sizeMap[size];

  // Génère l'URL du logo principal en priorité : custom > predefined > API
  const primaryLogoUrl =
    customLogo || getCustomLogo(siteUrl) || getWebsiteLogo(siteUrl, logoSize);

  // Génère l'initiale/fallback
  const initials = siteName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("")
    .substring(0, 2);

  const bgColor = getColorForSite(siteName);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (imageError || !primaryLogoUrl) {
    // Affiche un logo avec initiales si l'image échoue
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-lg text-white font-semibold flex-shrink-0",
          width,
          fontSize,
          className,
        )}
        style={{ backgroundColor: bgColor }}
        title={siteName}
      >
        {initials}
      </div>
    );
  }

  return (
    <div className={cn("relative flex-shrink-0", width, className)}>
      {/* Logo en chargement */}
      {!imageLoaded && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center rounded-lg text-white font-semibold animate-pulse",
            fontSize,
          )}
          style={{ backgroundColor: bgColor }}
        >
          {initials}
        </div>
      )}

      {/* Logo principal */}
      <img
        src={primaryLogoUrl}
        alt={`Logo ${siteName}`}
        className={cn(
          "rounded-lg object-contain bg-white/10 transition-opacity duration-200",
          width,
          imageLoaded ? "opacity-100" : "opacity-0",
        )}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading="lazy"
        title={siteName}
      />
    </div>
  );
}

// Composant alternatif pour les logos en mode liste
export function WebsiteLogoSmall({
  siteName,
  siteUrl,
  className,
}: Omit<WebsiteLogoProps, "size">) {
  return (
    <WebsiteLogo
      siteName={siteName}
      siteUrl={siteUrl}
      size="sm"
      className={className}
    />
  );
}

// Composant pour les logos de catégorie vedette
export function WebsiteLogoLarge({
  siteName,
  siteUrl,
  className,
}: Omit<WebsiteLogoProps, "size">) {
  return (
    <WebsiteLogo
      siteName={siteName}
      siteUrl={siteUrl}
      size="lg"
      className={className}
    />
  );
}
