import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ExternalLink, Star, Grid, List } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WebsiteLogo, WebsiteLogoSmall } from "@/components/ui/website-logo";
import {
  categories,
  websites,
  getFeaturedWebsites,
  searchWebsites,
  getWebsitesByCategory,
} from "@/data/websites-clean";
import { cn } from "@/lib/utils";

const IconMap = {
  Cloud: "☁️",
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

  const featuredWebsites = getFeaturedWebsites();
  const filteredWebsites = searchQuery
    ? searchWebsites(searchQuery)
    : selectedCategory
      ? getWebsitesByCategory(selectedCategory)
      : websites;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <img src="/your-logo-image.png" alt="Logo" className="h-8 w-8 mr-2" />
                WebDirectory
              </h1>
              <p className="text-sm text-slate-600">
                Répertoire professionnel de sites web
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Découvrez les Meilleurs Sites Web
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Une collection soigneusement organisée de {websites.length}+ sites
            web professionnels, classés par catégories pour vous aider à trouver
            exactement ce dont vous avez besoin.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Rechercher un site web..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">
                {websites.length}+
              </div>
              <div className="text-sm text-slate-600">Sites référencés</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {categories.length}
              </div>
              <div className="text-sm text-slate-600">Catégories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {featuredWebsites.length}
              </div>
              <div className="text-sm text-slate-600">Sites vedettes</div>
            </div>
          </div>
        </section>

        {/* Featured Websites */}
        {!searchQuery && !selectedCategory && (
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500" />
              Sites Vedettes
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredWebsites.map((website) => (
                <Card
                  key={website.id || website.url}
                  className="group hover:shadow-lg transition-all duration-200 border-0 shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <WebsiteLogo
                        siteName={website.name}
                        siteUrl={website.url}
                        size="lg"
                        customLogo={website.logo}
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                            {website.name}
                          </CardTitle>
                          <Badge variant="secondary" className="ml-2">
                            {
                              categories.find((c) => c.id === website.category)
                                ?.name
                            }
                          </Badge>
                        </div>
                        <CardDescription className="mt-1">
                          {website.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Visiter le site
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        <Tabs
          value={selectedCategory || "all"}
          onValueChange={(value) =>
            setSelectedCategory(value === "all" ? null : value)
          }
        >
          {/* Category Navigation */}
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="all" className="flex items-center gap-2">
              🌐 Tous
            </TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2"
              >
                <span>{IconMap[category.icon as keyof typeof IconMap]}</span>
                <span className="hidden lg:inline">
                  {category.name.split(" ")[0]}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* All Websites */}
          <TabsContent value="all">
            <div className="space-y-8">
              {categories.map((category) => {
                const categoryWebsites = getWebsitesByCategory(category.id);
                if (
                  searchQuery &&
                  !filteredWebsites.some((w) => w.category === category.id)
                )
                  return null;

                return (
                  <section key={category.id}>
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={cn(
                          "p-2 rounded-lg text-white",
                          category.color,
                        )}
                      >
                        <span className="text-xl">
                          {IconMap[category.icon as keyof typeof IconMap]}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {category.name}
                        </h3>
                        <p className="text-slate-600">{category.description}</p>
                      </div>
                      <Badge variant="outline" className="ml-auto">
                        {categoryWebsites.length} sites
                      </Badge>
                    </div>

                    <WebsiteGrid
                      websites={
                        searchQuery
                          ? filteredWebsites.filter(
                              (w) => w.category === category.id,
                            )
                          : categoryWebsites
                      }
                      viewMode={viewMode}
                    />
                  </section>
                );
              })}
            </div>
          </TabsContent>

          {/* Category-specific content */}
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={cn("p-3 rounded-lg text-white", category.color)}
                  >
                    <span className="text-2xl">
                      {IconMap[category.icon as keyof typeof IconMap]}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {category.name}
                    </h3>
                    <p className="text-slate-600">{category.description}</p>
                  </div>
                </div>
              </div>
              <WebsiteGrid websites={filteredWebsites} viewMode={viewMode} />
            </TabsContent>
          ))}
        </Tabs>

        {/* No results */}
        {filteredWebsites.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Aucun résultat trouvé
            </h3>
            <p className="text-slate-600">
              Essayez d'autres mots-clés ou parcourez nos catégories.
            </p>
          </div>
        )}
      </div>
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
            className="group hover:shadow-md transition-all duration-200"
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <WebsiteLogoSmall
                  siteName={website.name}
                  siteUrl={website.url}
                  customLogo={website.logo}
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {website.name}
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    {website.description}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{website.url}</p>
                </div>
                <div className="flex items-center gap-3">
                  {website.featured && (
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  )}
                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
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
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {websites.map((website) => (
        <Card
          key={website.id || website.url}
          className="group hover:shadow-lg transition-all duration-200 border-0 shadow-sm"
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
                <CardTitle className="text-base group-hover:text-blue-600 transition-colors leading-tight">
                  {website.name}
                  {website.featured && (
                    <Star className="inline h-4 w-4 text-yellow-500 fill-current ml-1" />
                  )}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2 mt-1">
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
              className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Visiter
              <ExternalLink className="h-3 w-3" />
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
