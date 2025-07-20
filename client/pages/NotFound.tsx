import { Link } from "react-router-dom";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-8xl font-bold text-blue-500 mb-4">404</div>

          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Page introuvable
          </h1>

          <p className="text-slate-600 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            Retournez à l'accueil pour découvrir notre collection de sites web.
          </p>

          <div className="space-y-4">
            <Link to="/">
              <Button className="w-full" size="lg">
                <Home className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Button>
            </Link>

            <Link to="/">
              <Button variant="outline" className="w-full" size="lg">
                <Search className="mr-2 h-4 w-4" />
                Rechercher des sites
              </Button>
            </Link>
          </div>

          <div className="mt-12 text-sm text-slate-500">
            <p>Vous pouvez aussi :</p>
            <ul className="mt-2 space-y-1">
              <li>• Vérifier l'orthographe de l'URL</li>
              <li>• Utiliser notre barre de recherche</li>
              <li>• Parcourir nos catégories</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
