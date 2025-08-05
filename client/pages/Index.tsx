import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ExternalLink, Star, Grid, List, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WebsiteLogo, WebsiteLogoSmall } from "@/components/ui/website-logo";
import {
  categories,
  websites,
  getFeaturedWebsites,
  searchWebsites,
  getWebsitesByCategory,
} from "@/data/websites-extended";
import { cn } from "@/lib/utils";

const IconMap = {
  Cloud: "☁��",
  Brain: "🧠",
  Code: "💻",
  Palette: "🎨",
  Settings: "⚙️",
  Image: "🎬",
};

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const featuredWebsites = getFeaturedWebsites();
  const filteredWebsites = searchQuery
    ? searchWebsites(searchQuery)
    : selectedCategory === "featured"
      ? featuredWebsites
      : selectedCategory
        ? getWebsitesByCategory(selectedCategory)
        : websites;

  const SidebarContent = () => (
    <div className="h-full flex flex-col bg-white border-r border-gray-200">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">OW</span>
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-lg">Open-WebApp</h2>
              <p className="text-xs text-gray-500">Plus de {websites.length} sites</p>
            </div>
          </div>
          {/* Close button for mobile */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="lg:hidden hover:bg-gray-100"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Navigation - Scrollable */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-3">
        {/* Tous les sites */}
        <button
          onClick={() => {
            setSelectedCategory(null);
            setSidebarOpen(false);
          }}
          className={cn(
            "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 shadow-sm",
            !selectedCategory
              ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-2 border-blue-200 shadow-md"
              : "text-gray-700 hover:bg-gray-50 border border-gray-200"
          )}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white">
            🌐
          </div>
          <div className="flex-1 text-left">
            <div className="font-semibold text-sm">Tous les sites</div>
            <div className="text-xs text-gray-500">Collection complète</div>
          </div>
          <Badge variant="secondary" className="bg-white text-gray-700 border border-gray-300">
            {websites.length}
          </Badge>
        </button>

        {/* Sites vedettes */}
        <div className="pt-2">
          <h3 className="px-4 mb-3 text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
            <Star className="h-3 w-3 text-yellow-500" />
            Sélection Premium
          </h3>
          <button
            onClick={() => {
              setSelectedCategory("featured");
              setSidebarOpen(false);
            }}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 shadow-sm",
              selectedCategory === "featured"
                ? "bg-gradient-to-r from-yellow-50 to-amber-50 text-yellow-700 border-2 border-yellow-200 shadow-md"
                : "text-gray-700 hover:bg-gray-50 border border-gray-200"
            )}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center text-white">
              ⭐
            </div>
            <div className="flex-1 text-left">
              <div className="font-semibold text-sm">Sites Vedettes</div>
              <div className="text-xs text-gray-500">Nos recommandations</div>
            </div>
            <Badge variant="secondary" className="bg-white text-gray-700 border border-gray-300">
              {featuredWebsites.length}
            </Badge>
          </button>
        </div>

        {/* Catégories */}
        <div className="pt-4">
          <h3 className="px-4 mb-3 text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>
            Catégories
          </h3>
          <div className="space-y-2">
            {categories.map((category) => {
              const categoryWebsites = getWebsitesByCategory(category.id);
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setSidebarOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group shadow-sm",
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-2 border-blue-200 shadow-md"
                      : "text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-200",
                      selectedCategory === category.id
                        ? category.color + " text-white shadow-lg"
                        : "bg-gray-100 group-hover:bg-gray-200 text-gray-600"
                    )}
                  >
                    {IconMap[category.icon as keyof typeof IconMap]}
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <div className="font-semibold text-sm truncate">{category.name}</div>
                    <div className="text-xs text-gray-500 truncate">
                      {category.description}
                    </div>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={cn(
                      "text-xs font-medium transition-colors",
                      selectedCategory === category.id
                        ? "bg-white text-blue-700 border border-blue-300"
                        : "bg-white text-gray-700 border border-gray-300"
                    )}
                  >
                    {categoryWebsites.length}
                  </Badge>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 bg-gray-50 flex-shrink-0">
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-4 text-xs">
            <div className="flex items-center gap-1 text-blue-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="font-medium">{websites.length}+ sites</span>
            </div>
            <div className="flex items-center gap-1 text-purple-600">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="font-medium">{categories.length} catégories</span>
            </div>
          </div>
          <div className="text-xs text-gray-400">Mise à jour quotidienne</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Desktop */}
      <aside className="hidden lg:block w-80 h-screen sticky top-0">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/50" 
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl">
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="px-4 lg:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Mobile Menu */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="lg:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu className="h-5 w-5" />
                </Button>

                {/* Page Title */}
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    {selectedCategory === "featured"
                      ? "Sites Vedettes"
                      : selectedCategory
                        ? categories.find((c) => c.id === selectedCategory)?.name
                        : "Tous les sites"}
                  </h1>
                  <p className="text-sm text-gray-500">
                    {filteredWebsites.length} site{filteredWebsites.length > 1 ? "s" : ""} trouvé{filteredWebsites.length > 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 w-64 md:w-80"
                  />
                </div>

                {/* View Mode */}
                <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="h-8 w-8 p-0"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="h-8 w-8 p-0"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          {/* Category Header */}
          {selectedCategory && selectedCategory !== "featured" && (
            <div className="mb-8">
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                {(() => {
                  const category = categories.find((c) => c.id === selectedCategory);
                  return category ? (
                    <>
                      <div className={cn("p-4 rounded-xl text-white shadow-lg", category.color)}>
                        <span className="text-2xl">
                          {IconMap[category.icon as keyof typeof IconMap]}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">
                          {category.name}
                        </h2>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                      <Badge variant="outline" className="text-sm font-medium px-3 py-1">
                        {getWebsitesByCategory(category.id).length} sites
                      </Badge>
                    </>
                  ) : null;
                })()}
              </div>
            </div>
          )}

          {/* Featured Header */}
          {selectedCategory === "featured" && (
            <div className="mb-8">
              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border-2 border-yellow-200 shadow-sm">
                <div className="p-4 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl text-white shadow-lg">
                  <Star className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    Sites Vedettes
                  </h2>
                  <p className="text-gray-600">Notre sélection des meilleurs sites web</p>
                </div>
                <Badge variant="outline" className="text-sm font-medium px-3 py-1">
                  {featuredWebsites.length} sites premium
                </Badge>
              </div>
            </div>
          )}

          {/* Results */}
          {filteredWebsites.length > 0 ? (
            <WebsiteGrid websites={filteredWebsites} viewMode={viewMode} />
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucun résultat trouvé
              </h3>
              <p className="text-gray-600 mb-6">
                Essayez d'autres mots-clés ou parcourez nos catégories.
              </p>
              <Button onClick={() => setSearchQuery("")} variant="outline">
                Effacer la recherche
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

interface WebsiteGridProps {
  websites: any[];
  viewMode: "grid" | "list";
}

function WebsiteGrid({ websites, viewMode }: WebsiteGridProps) {
  if (viewMode === "list") {
    return (
      <div className="space-y-3">
        {websites.map((website) => (
          <Card
            key={website.id || website.url}
            className="group hover:shadow-md transition-all duration-200 border-gray-200 bg-white"
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <WebsiteLogoSmall
                  siteName={website.name}
                  siteUrl={website.url}
                  customLogo={website.logo}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                      {website.name}
                    </h4>
                    {website.featured && (
                      <Star className="h-4 w-4 text-yellow-500 fill-current flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-1">
                    {website.description}
                  </p>
                  <p className="text-xs text-gray-400 truncate">{website.url}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <Badge variant="outline" className="text-xs">
                    {categories.find((c) => c.id === website.category)?.name}
                  </Badge>
                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-lg transition-all"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
      {websites.map((website) => (
        <Card
          key={website.id || website.url}
          className="group hover:shadow-lg transition-all duration-200 border-gray-200 bg-white hover:border-blue-200"
        >
          <CardHeader className="pb-3">
            <div className="flex items-start gap-3">
              <WebsiteLogo
                siteName={website.name}
                siteUrl={website.url}
                size="md"
                customLogo={website.logo}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <CardTitle className="text-base group-hover:text-blue-600 transition-colors leading-tight truncate">
                    {website.name}
                  </CardTitle>
                  {website.featured && (
                    <Star className="h-4 w-4 text-yellow-500 fill-current flex-shrink-0" />
                  )}
                </div>
                <Badge variant="outline" className="text-xs mb-2">
                  {categories.find((c) => c.id === website.category)?.name}
                </Badge>
                <CardDescription className="text-sm line-clamp-2">
                  {website.description}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <a
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium hover:bg-blue-50 px-3 py-2 rounded-lg transition-all w-full justify-center"
            >
              Visiter le site
              <ExternalLink className="h-4 w-4" />
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
