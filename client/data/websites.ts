export interface Website {
  id?: string;
  name: string;
  url: string;
  description: string;
  category: string;
  featured?: boolean;
  logo?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: "cloud",
    name: "Cloud & Infrastructure",
    description: "Services cloud, stockage et infrastructure",
    icon: "Cloud",
    color: "bg-blue-500",
  },
  {
    id: "ai",
    name: "Intelligence Artificielle",
    description: "Outils d'IA, machine learning et automatisation",
    icon: "Brain",
    color: "bg-purple-500",
  },
  {
    id: "development",
    name: "Développement & Code",
    description: "Plateformes de développement, IDE et outils de code",
    icon: "Code",
    color: "bg-green-500",
  },
  {
    id: "design",
    name: "Design & UI/UX",
    description: "Outils de design, prototypage et création graphique",
    icon: "Palette",
    color: "bg-pink-500",
  },
  {
    id: "productivity",
    name: "Productivité & Outils",
    description: "Applications de productivité et utilitaires",
    icon: "Settings",
    color: "bg-orange-500",
  },
  {
    id: "media",
    name: "Médias & Créatif",
    description: "Plateformes médias, assets créatifs et divertissement",
    icon: "Image",
    color: "bg-red-500",
  },
];

const rawWebsites: Website[] = [
  // Cloud & Infrastructure
  {
    name: "Microsoft Azure",
    url: "https://azure.microsoft.com",
    description: "Plateforme cloud de Microsoft avec services complets",
    category: "cloud",
    featured: true,
  },
  {
    name: "OneDrive",
    url: "https://onedrive.live.com",
    description: "Service de stockage cloud de Microsoft",
    category: "cloud",
  },
  {
    name: "OneDrive Photos",
    url: "https://onedrive.live.com/photos",
    description: "Gestionnaire de photos OneDrive",
    category: "cloud",
  },
  {
    name: "Google One",
    url: "https://one.google.com",
    description: "Service de stockage et sauvegarde Google",
    category: "cloud",
  },
  {
    name: "Cloud Shell",
    url: "https://shell.azure.com",
    description: "Terminal cloud Azure intégré",
    category: "cloud",
  },

  // Intelligence Artificielle
  {
    name: "ChatGPT",
    url: "https://chat.openai.com",
    description: "Assistant IA conversationnel d'OpenAI",
    category: "ai",
    featured: true,
  },
  {
    name: "Claude",
    url: "https://claude.ai",
    description: "Assistant IA d'Anthropic pour conversations et analyses",
    category: "ai",
  },
  {
    name: "Gemini",
    url: "https://gemini.google.com",
    description: "Assistant IA de Google pour productivité",
    category: "ai",
  },
  {
    name: "Microsoft Copilot",
    url: "https://copilot.microsoft.com",
    description: "Assistant IA intégré de Microsoft",
    category: "ai",
  },
  {
    name: "OpenAI Platform",
    url: "https://platform.openai.com",
    description: "Plateforme de développement OpenAI",
    category: "ai",
  },
  {
    name: "Google AI Studio",
    url: "https://makersuite.google.com",
    description: "Studio de développement IA de Google",
    category: "ai",
  },
  {
    name: "DeepAI",
    url: "https://deepai.org",
    description: "Outils d'intelligence artificielle avancés",
    category: "ai",
  },
  {
    name: "Clarifai",
    url: "https://clarifai.com",
    description: "Plateforme de vision par ordinateur et IA",
    category: "ai",
  },
  {
    name: "TensorFlow",
    url: "https://tensorflow.org",
    description: "Bibliothèque de machine learning open source",
    category: "ai",
  },
  {
    name: "GroqCloud",
    url: "https://groq.com",
    description: "Infrastructure haute performance pour l'IA",
    category: "ai",
  },
  {
    name: "DeepSeek",
    url: "https://deepseek.com",
    description: "Modèles d'IA et recherche avancée",
    category: "ai",
  },
  {
    name: "Grok",
    url: "https://grok.xyz",
    description: "Assistant IA conversationnel avancé",
    category: "ai",
  },
  {
    name: "bolt.new",
    url: "https://bolt.new",
    description: "Générateur de code IA pour développement web",
    category: "ai",
  },
  {
    name: "NotebookLM",
    url: "https://notebooklm.google.com",
    description: "Assistant de recherche IA de Google",
    category: "ai",
  },
  {
    name: "Deep Dream Generator",
    url: "https://deepdreamgenerator.com",
    description: "Générateur d'images avec intelligence artificielle",
    category: "ai",
  },
  {
    name: "Open WebUI",
    url: "https://openwebui.com",
    description: "Interface web open source pour modèles IA",
    category: "ai",
  },
  {
    name: "Qwen",
    url: "https://qwen.aliyun.com",
    description: "Modèle de langage IA d'Alibaba",
    category: "ai",
  },

  // Développement & Code
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com",
    description: "Communauté de développeurs et Q&A technique",
    category: "development",
    featured: true,
  },
  {
    name: "CodePen",
    url: "https://codepen.io",
    description: "Éditeur de code en ligne pour front-end",
    category: "development",
  },
  {
    name: "StackBlitz",
    url: "https://stackblitz.com",
    description: "IDE en ligne pour développement web",
    category: "development",
  },
  {
    name: "GitLab",
    url: "https://gitlab.com",
    description: "Plateforme DevOps complète avec Git",
    category: "development",
  },
  {
    name: "CodeChef",
    url: "https://codechef.com",
    description: "Plateforme de programmation compétitive",
    category: "development",
  },
  {
    name: "Xcode",
    url: "https://developer.apple.com/xcode",
    description: "IDE officiel pour développement Apple",
    category: "development",
  },
  {
    name: "Compiler Explorer",
    url: "https://godbolt.org",
    description: "Outil interactif d'exploration de compilateurs",
    category: "development",
  },
  {
    name: "CodeDesigne",
    url: "https://dev.codedesign.ai/a/dashboard",
    description: "Plateforme de design-to-code",
    category: "development",
  },
  {
    name: "dev.to",
    url: "https://dev.to",
    description: "Communauté de développeurs et articles techniques",
    category: "development",
  },
  {
    name: "Kaggle",
    url: "https://kaggle.com",
    description: "Plateforme de data science et machine learning",
    category: "development",
  },
  {
    name: "NuGet Gallery",
    url: "https://nuget.org",
    description: "Gestionnaire de packages pour .NET",
    category: "development",
  },
  {
    name: "Sim8085",
    url: "https://sim8085.com",
    description: "Simulateur de microprocesseur 8085",
    category: "development",
  },
  {
    name: "x86-64 playground",
    url: "https://x86-64.play",
    description: "Playground pour assembleur x86-64",
    category: "development",
  },

  // Design & UI/UX
  {
    name: "Webflow",
    url: "https://webflow.com",
    description: "Plateforme de création web visuelle",
    category: "design",
    featured: true,
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com",
    description: "Communauté créative pour designers",
    category: "design",
  },
  {
    name: "Microsoft Designer",
    url: "https://designer.microsoft.com",
    description: "Outil de design graphique de Microsoft",
    category: "design",
  },
  {
    name: "Uizard",
    url: "https://uizard.io",
    description: "Outil de prototypage UI alimenté par l'IA",
    category: "design",
  },
  {
    name: "Penpot",
    url: "https://penpot.app",
    description: "Plateforme de design open source",
    category: "design",
  },
  {
    name: "Brizy Cloud Admin",
    url: "https://www.brizy.io/cloud",
    description: "Constructeur de sites web visuel",
    category: "design",
  },
  {
    name: "Builder",
    url: "https://builder.io",
    description: "CMS headless pour développement visuel",
    category: "design",
  },
  {
    name: "FlutterFlow",
    url: "https://flutterflow.io",
    description: "Constructeur d'applications Flutter visuel",
    category: "design",
  },
  {
    name: "TeleportHQ",
    url: "https://teleporthq.io",
    description: "Plateforme de création d'interfaces utilisateur",
    category: "design",
  },
  {
    name: "MUI",
    url: "https://mui.com",
    description: "Bibliothèque de composants React Material-UI",
    category: "design",
  },
  {
    name: "Budibase",
    url: "https://budibase.com",
    description: "Plateforme low-code pour applications internes",
    category: "design",
  },
  {
    name: "Appsmith",
    url: "https://appsmith.com",
    description: "Plateforme low-code pour outils internes",
    category: "design",
  },
  {
    name: "NocoDB",
    url: "https://nocodb.com",
    description: "Alternative open source à Airtable",
    category: "design",
  },
  {
    name: "Lovable",
    url: "https://lovable.so",
    description: "Plateforme de création d'applications",
    category: "design",
  },

  // Productivité & Outils
  {
    name: "Google Keep",
    url: "https://keep.google.com",
    description: "Application de prise de notes de Google",
    category: "productivity",
    featured: true,
  },
  {
    name: "Make",
    url: "https://make.com",
    description: "Plateforme d'automatisation et d'intégration",
    category: "productivity",
  },
  {
    name: "TinyPNG",
    url: "https://tinypng.com",
    description: "Outil de compression d'images PNG et JPEG",
    category: "productivity",
  },
  {
    name: "remove.bg",
    url: "https://remove.bg",
    description: "Suppression automatique d'arrière-plan d'images",
    category: "productivity",
  },
  {
    name: "Raindrop.io",
    url: "https://raindrop.io",
    description: "Gestionnaire de signets intelligent",
    category: "productivity",
  },
  {
    name: "TechIcons.dev",
    url: "https://techicons.dev",
    description: "Collection d'icônes techniques pour développeurs",
    category: "productivity",
  },
  {
    name: "Zabbix Cloud",
    url: "https://zabbix.com/cloud",
    description: "Solution de monitoring infrastructure cloud",
    category: "productivity",
  },
  {
    name: "Tempo Labs",
    url: "https://tempo.io",
    description: "Outils de gestion de projet Atlassian",
    category: "productivity",
  },
  {
    name: "Seranking",
    url: "https://seranking.com",
    description: "Outils SEO et analyse de référencement",
    category: "productivity",
  },
  {
    name: "Filerev",
    url: "https://filerev.com",
    description: "Gestionnaire et organisateur de fichiers",
    category: "productivity",
  },
  {
    name: "Staqlab Tunnel",
    url: "https://tunnel.staqlab.com/",
    description: "Outils de tunneling et développement",
    category: "productivity",
  },

  // Médias & Créatif
  {
    name: "YouTube",
    url: "https://youtube.com",
    description: "Plateforme de partage et streaming vidéo",
    category: "media",
    featured: true,
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    description: "Réseau social de partage photo et vidéo",
    category: "media",
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com",
    description: "Plateforme de partage audio et podcasts",
    category: "media",
  },
  {
    name: "ArtStation",
    url: "https://artstation.com",
    description: "Portfolio et communauté d'artistes numériques",
    category: "media",
  },
  {
    name: "ArtStation Learning",
    url: "https://artstation.com/learning",
    description: "Cours et tutoriels d'art numérique",
    category: "media",
  },
  {
    name: "Unity AssetStore",
    url: "https://assetstore.unity.com",
    description: "Marketplace d'assets pour Unity",
    category: "media",
  },
  {
    name: "Unsplash",
    url: "https://unsplash.com",
    description: "Bibliothèque de photos libres de droits",
    category: "media",
  },
  {
    name: "Poly Haven",
    url: "https://polyhaven.com",
    description: "Assets 3D gratuits haute qualité",
    category: "media",
  },
  {
    name: "Mixamo",
    url: "https://www.mixamo.com/#/",
    description: "Animations 3D et rigs de personnages",
    category: "media",
  },
  {
    name: "Tinkercad",
    url: "https://tinkercad.com",
    description: "Outil de modélisation 3D en ligne",
    category: "media",
  },
  {
    name: "SketchUp",
    url: "https://sketchup.com",
    description: "Logiciel de modélisation 3D",
    category: "media",
  },
  {
    name: "Renderforest",
    url: "https://renderforest.com",
    description: "Créateur de vidéos et animations en ligne",
    category: "media",
  },
  {
    name: "Shutterstock 3D Toolkit",
    url: "https://shutterstock.com/labs/3d",
    description: "Outils 3D et assets de Shutterstock",
    category: "media",
  },
  {
    name: "Civitai",
    url: "https://civitai.com",
    description: "Communauté de modèles d'IA génératifs",
    category: "media",
  },
  {
    name: "Gmail",
    url: "https://mail.google.com",
    description: "Service de messagerie électronique Google",
    category: "productivity",
  },
  {
    name: "Google Drive",
    url: "https://drive.google.com",
    description: "Service de stockage et collaboration Google",
    category: "cloud",
  },
  {
    name: "MSN Finance",
    url: "https://msn.com/en-us/money",
    description: "Actualités et données financières MSN",
    category: "productivity",
  },
  {
    name: "Gatsby Starter",
    url: "https://gatsbyjs.com/starters",
    description: "Templates et starters pour Gatsby",
    category: "development",
  },
  {
    name: "Supabase Docs",
    url: "https://supabase.com/docs",
    description: "Documentation de la plateforme Supabase",
    category: "development",
  },
  {
    name: "Supabase Studio",
    url: "https://supabase.com",
    description: "Interface d'administration Supabase",
    category: "development",
  },
  {
    name: "WallpaperSafari",
    url: "https://wallpapersafari.com",
    description: "Collection de fonds d'écran haute qualité",
    category: "media",
  },
  {
    name: "4K Wallpapers",
    url: "https://4kwallpapers.com",
    description: "Fonds d'écran ultra haute définition",
    category: "media",
  },
  {
    name: "Python GUIs Forum",
    url: "https://python-forum.io",
    description: "Forum spécialisé en interfaces graphiques Python",
    category: "development",
  },
  {
    name: "Facebook Icons",
    url: "https://icons8.com/icons/set/facebook",
    description: "Collection d'icônes Facebook sur Icons8",
    category: "productivity",
  },

  // Nouveaux sites ajoutés
  // Development & Code
  {
    name: "JSFiddle",
    url: "https://jsfiddle.net",
    description: "Playground de code en ligne pour HTML, CSS et JavaScript",
    category: "development",
    featured: true,
  },
  {
    name: "CodeSandbox",
    url: "https://codesandbox.io",
    description: "IDE en ligne pour développement web moderne",
    category: "development",
    featured: true,
  },
  {
    name: "myCompiler",
    url: "https://www.mycompiler.io",
    description: "Compilateur en ligne pour multiple langages de programmation",
    category: "development",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com",
    description:
      "Plateforme d'exercices de programmation et préparation entretiens",
    category: "development",
    featured: true,
  },
  {
    name: "W3Schools",
    url: "https://w3schools.com",
    description: "Tutoriels et références pour technologies web",
    category: "development",
  },
  {
    name: "GitHub",
    url: "https://github.com",
    description: "Plateforme de développement collaboratif avec Git",
    category: "development",
    featured: true,
  },
  {
    name: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    description: "Documentation complète pour développeurs web",
    category: "development",
  },
  {
    name: "Google Developers",
    url: "https://developers.google.com",
    description: "Ressources et APIs pour développeurs Google",
    category: "development",
  },
  {
    name: "Microsoft Learn",
    url: "https://learn.microsoft.com",
    description: "Plateforme d'apprentissage Microsoft",
    category: "development",
  },
  {
    name: "Visual Studio Tools Extensions",
    url: "https://marketplace.visualstudio.com",
    description: "Extensions et outils pour Visual Studio",
    category: "development",
  },
  {
    name: "Online 8086 Emulator",
    url: "https://emu8086.sourceforge.io",
    description: "Émulateur 8086 en ligne pour assembly",
    category: "development",
  },
  {
    name: "GDB online Debugger",
    url: "https://www.onlinegdb.com",
    description: "Debugger et compilateur en ligne",
    category: "development",
  },

  // Cloud & Infrastructure
  {
    name: "Cloudflare",
    url: "https://cloudflare.com",
    description: "CDN, sécurité web et services cloud",
    category: "cloud",
    featured: true,
  },
  {
    name: "Amazon AppStream 2.0",
    url: "https://aws.amazon.com/appstream2",
    description: "Service de streaming d'applications AWS",
    category: "cloud",
  },

  // AI & Intelligence Artificielle
  {
    name: "Google AI for Developers",
    url: "https://ai.google.dev",
    description: "Outils et APIs d'intelligence artificielle Google",
    category: "ai",
  },
  {
    name: "Genspark",
    url: "https://genspark.ai",
    description: "Moteur de recherche alimenté par l'IA",
    category: "ai",
  },
  {
    name: "Blackbox AI",
    url: "https://blackbox.ai",
    description: "Générateur de code IA pour développeurs",
    category: "ai",
  },
  {
    name: "Meshy AI",
    url: "https://meshy.ai",
    description: "Générateur de modèles 3D avec intelligence artificielle",
    category: "ai",
  },
  {
    name: "ElevenLabs",
    url: "https://elevenlabs.io",
    description: "Générateur de voix IA ultra-réaliste",
    category: "ai",
  },
  {
    name: "Ready Player Me",
    url: "https://readyplayer.me",
    description: "Création d'avatars 3D avec IA",
    category: "ai",
  },

  // Design & UI/UX
  {
    name: "Durable",
    url: "https://durable.co",
    description: "Constructeur de sites web avec IA",
    category: "design",
  },
  {
    name: "Excalidraw",
    url: "https://excalidraw.com",
    description: "Outil de dessin et diagrammes collaboratif",
    category: "design",
  },
  {
    name: "Wix.com",
    url: "https://wix.com",
    description: "Constructeur de sites web visuel",
    category: "design",
    featured: true,
  },
  {
    name: "IcePanel",
    url: "https://icepanel.io",
    description: "Outil de diagrammes d'architecture collaboratif",
    category: "design",
  },
  {
    name: "Versus Themes",
    url: "https://vsthemes.org/en/",
    description: "Thèmes et templates web professionnels",
    category: "design",
  },

  // Médias & Créatif
  {
    name: "Modelo",
    url: "https://modelo.io",
    description: "Plateforme de visualisation 3D et BIM",
    category: "media",
  },
  {
    name: "Pinterest",
    url: "https://pinterest.com",
    description: "Réseau social de découverte visuelle",
    category: "media",
    featured: true,
  },
  {
    name: "iStock",
    url: "https://istockphoto.com",
    description: "Banque d'images, vidéos et illustrations",
    category: "media",
  },
  {
    name: "Google Photos",
    url: "https://photos.google.com",
    description: "Service de stockage et organisation de photos Google",
    category: "media",
  },
  {
    name: "BlenderKit",
    url: "https://blenderkit.com",
    description: "Bibliothèque d'assets 3D pour Blender",
    category: "media",
  },
  {
    name: "Sketchfab",
    url: "https://sketchfab.com",
    description: "Plateforme de modèles 3D interactifs",
    category: "media",
  },
  {
    name: "Blender Artists Community",
    url: "https://blenderartists.org",
    description: "Communauté d'artistes 3D Blender",
    category: "media",
  },
  {
    name: "3DTuning",
    url: "https://www.3dtuning.com/fr-FR/",
    description: "Outil de personnalisation 3D de véhicules",
    category: "media",
  },
  {
    name: "Unity Cloud",
    url: "https://cloud.unity.com",
    description: "Services cloud pour développement Unity",
    category: "media",
  },

  // Productivité & Outils
  {
    name: "GTmetrix",
    url: "https://gtmetrix.com",
    description: "Outil d'analyse de performance web",
    category: "productivity",
  },
  {
    name: "MailerSend",
    url: "https://mailersend.com",
    description: "Service de mail transactionnel pour développeurs",
    category: "productivity",
  },
  {
    name: "Speckyboy Design Magazine",
    url: "https://speckyboy.com",
    description: "Magazine en ligne de design et développement web",
    category: "productivity",
  },
  {
    name: "Google Fonts",
    url: "https://fonts.google.com",
    description: "Bibliothèque de polices web gratuites Google",
    category: "productivity",
  },
  {
    name: "VIN STAR",
    url: "https://vinstar.com",
    description: "Service de vérification de numéro VIN véhicules",
    category: "productivity",
  },
  {
    name: "LambdaTest",
    url: "https://lambdatest.com",
    description: "Plateforme de tests cross-browser en ligne",
    category: "productivity",
  },
  {
    name: "Zapier",
    url: "https://zapier.com",
    description: "Automatisation et intégration d'applications",
    category: "productivity",
  },
  {
    name: "MediaFire",
    url: "https://mediafire.com",
    description: "Service de stockage et partage de fichiers",
    category: "productivity",
  },
  {
    name: "Freemake",
    url: "https://freemake.com",
    description: "Logiciels gratuits de conversion multimédia",
    category: "productivity",
  },
  {
    name: "Qwant",
    url: "https://qwant.com",
    description: "Moteur de recherche européen respectueux de la vie privée",
    category: "productivity",
  },
  {
    name: "Météo Microsoft Start",
    url: "https://msn.com/weather",
    description: "Service météorologique de Microsoft",
    category: "productivity",
  },
  {
    name: "EveryCircuit",
    url: "https://everycircuit.com",
    description: "Simulateur de circuits électroniques interactif",
    category: "productivity",
  },
  {
    name: "Web ToolBox",
    url: "https://webtoolbox.dev",
    description: "Collection d'outils en ligne pour développeurs",
    category: "productivity",
  },
  {
    name: "the-blueprints.com",
    url: "https://the-blueprints.com",
    description: "Base de données de plans techniques et blueprints",
    category: "productivity",
  },
  {
    name: "Element",
    url: "https://element.io",
    description: "Messagerie sécurisée et collaboration décentralisée",
    category: "productivity",
  },

  // Nouveaux sites - Vague 2 (180+ sites ajoutés)
  // Design & UI/UX
  {
    name: "Builder.io",
    url: "https://builder.io",
    description: "Plateforme de développement visuel headless CMS",
    category: "design",
    featured: true,
  },
  {
    name: "Lovable",
    url: "https://lovable.so",
    description: "Plateforme de création d'applications avec IA",
    category: "design",
    featured: true,
  },
  {
    name: "v0 by Vercel",
    url: "https://v0.dev",
    description: "Générateur d'interfaces utilisateur avec IA",
    category: "design",
    featured: true,
  },
  {
    name: "Framer",
    url: "https://framer.com",
    description: "Outil de design et prototypage interactif",
    category: "design",
    featured: true,
  },
  {
    name: "Softr Studio",
    url: "https://softr.io",
    description: "Création d'applications no-code depuis Airtable",
    category: "design",
  },
  {
    name: "Bubble Editor",
    url: "https://bubble.io",
    description: "Plateforme de développement no-code",
    category: "design",
  },
  {
    name: "CodeDesign",
    url: "https://codedesign.dev",
    description: "Frontend builder avec génération de code",
    category: "design",
  },
  {
    name: "Brizy Cloud Admin",
    url: "https://www.brizy.io/cloud",
    description: "Constructeur de sites web avec interface drag & drop",
    category: "design",
  },
  {
    name: "Free Website Builder Software with AI",
    url: "https://10web.io",
    description: "Constructeur de sites web alimenté par l'IA",
    category: "design",
  },
  {
    name: "Best 3D websites",
    url: "https://www.awwwards.com/websites/three-js",
    description: "Inspiration de design web 3D",
    category: "design",
  },
  {
    name: "Design+Code",
    url: "https://designcode.io",
    description: "Cours de design et développement",
    category: "design",
  },
  {
    name: "Rookie Tools",
    url: "https://rookietools.com",
    description: "Outils de design pour débutants",
    category: "design",
  },
  {
    name: "ToolJet",
    url: "https://tooljet.com",
    description: "Plateforme low-code pour outils internes",
    category: "design",
  },
  {
    name: "Cirkit Designer IDE",
    url: "https://app.cirkit.io",
    description: "IDE pour conception de circuits électroniques",
    category: "design",
  },

  // Development & Code
  {
    name: "GroqCloud",
    url: "https://groq.com",
    description: "Infrastructure haute performance pour l'IA",
    category: "development",
    featured: true,
  },
  {
    name: "Android Developers",
    url: "https://developer.android.com",
    description: "Ressources officielles pour développement Android",
    category: "development",
  },
  {
    name: "OpenRouter",
    url: "https://openrouter.ai",
    description: "API unifiée pour modèles d'IA",
    category: "development",
  },
  {
    name: "Online Assembler (NASM) Compiler",
    url: "https://www.jdoodle.com/compile-assembler-nasm-online",
    description: "Compilateur assembleur NASM en ligne",
    category: "development",
  },
  {
    name: "cppreference.com",
    url: "https://cppreference.com",
    description: "Référence complète pour C++",
    category: "development",
  },
  {
    name: "Neon Console",
    url: "https://neon.tech",
    description: "Base de données PostgreSQL serverless",
    category: "development",
  },
  {
    name: "StackBlitz",
    url: "https://stackblitz.com",
    description: "IDE en ligne instantané pour développement web",
    category: "development",
    featured: true,
  },
  {
    name: "NuGet Gallery",
    url: "https://nuget.org",
    description: "Gestionnaire de packages pour .NET",
    category: "development",
  },
  {
    name: "x86-64 playground",
    url: "https://godbolt.org",
    description: "Explorateur de compilateur interactif",
    category: "development",
  },
  {
    name: "Staqlab Tunnel",
    url: "https://staqlab.com",
    description: "Expose localhost au public via tunnel",
    category: "development",
  },
  {
    name: "Google Cloud",
    url: "https://cloud.google.com",
    description: "Plateforme cloud de Google",
    category: "development",
  },
  {
    name: "C++ Online Compiler",
    url: "https://www.onlinegdb.com/online_c++_compiler",
    description: "Compilateur C++ en ligne",
    category: "development",
  },
  {
    name: "Replit",
    url: "https://replit.com",
    description: "IDE collaboratif en ligne",
    category: "development",
    featured: true,
  },
  {
    name: "CPUlator ARMv7 System Simulator",
    url: "https://cpulator.01xz.net",
    description: "Simulateur de système ARMv7",
    category: "development",
  },
  {
    name: "EasyEDA",
    url: "https://easyeda.com",
    description: "Outil de conception de circuits imprimés en ligne",
    category: "development",
  },
  {
    name: "Firebase",
    url: "https://firebase.google.com",
    description: "Plateforme de développement d'applications Google",
    category: "development",
  },
  {
    name: "Le Chat",
    url: "https://mistral.ai/chat",
    description: "Assistant IA conversationnel de Mistral",
    category: "development",
  },
  {
    name: "Your First Linux Lab",
    url: "https://linuxjourney.com",
    description: "Laboratoire d'apprentissage Linux interactif",
    category: "development",
  },
  {
    name: "Firebase Studio",
    url: "https://console.firebase.google.com",
    description: "Console d'administration Firebase",
    category: "development",
  },
  {
    name: "ngrok",
    url: "https://ngrok.com",
    description: "Tunnels sécurisés vers localhost",
    category: "development",
  },

  // AI & Intelligence Artificielle
  {
    name: "EaseMate AI Chat Assistant",
    url: "https://easemate.ai",
    description: "Assistant de chat IA personnalisé",
    category: "ai",
  },
  {
    name: "Deep Dream Generator",
    url: "https://deepdreamgenerator.com",
    description: "Générateur d'art avec deep learning",
    category: "ai",
  },
  {
    name: "LetsEnhance",
    url: "https://letsenhance.io",
    description: "Amélioration d'images avec IA",
    category: "ai",
  },
  {
    name: "Upscale.media",
    url: "https://upscale.media",
    description: "Upscaling d'images avec intelligence artificielle",
    category: "ai",
  },
  {
    name: "Google Colab",
    url: "https://colab.research.google.com",
    description: "Notebooks Jupyter gratuits avec GPU",
    category: "ai",
    featured: true,
  },

  // Productivity & Outils
  {
    name: "Filerev App",
    url: "https://filerev.com",
    description: "Gestionnaire et organisateur de fichiers avancé",
    category: "productivity",
  },
  {
    name: "Raindrop.io",
    url: "https://raindrop.io",
    description: "Gestionnaire de signets intelligent et collaboratif",
    category: "productivity",
  },
  {
    name: "Open WebUI",
    url: "https://openwebui.com",
    description: "Interface web extensible pour modèles IA",
    category: "productivity",
  },
  {
    name: "Slack",
    url: "https://slack.com",
    description: "Plateforme de communication d'équipe",
    category: "productivity",
    featured: true,
  },
  {
    name: "Netlify",
    url: "https://netlify.com",
    description: "Plateforme de déploiement et hébergement web",
    category: "productivity",
    featured: true,
  },
  {
    name: "Planificateur de mémoire de recherche",
    url: "https://www.studytonight.com/computer-architecture/memory-hierarchy",
    description: "Outil de planification de hiérarchie mémoire",
    category: "productivity",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    description: "Réseau social professionnel",
    category: "productivity",
    featured: true,
  },

  // Media & Creative
  {
    name: "CGTrader",
    url: "https://cgtrader.com",
    description: "Marketplace de modèles 3D professionnels",
    category: "media",
  },
  {
    name: "DeviantArt",
    url: "https://deviantart.com",
    description: "Communauté d'artistes et créateurs",
    category: "media",
  },
  {
    name: "Free3D",
    url: "https://free3d.com",
    description: "Modèles 3D gratuits pour projets",
    category: "media",
  },
];

import { deduplicateWebsites, generateUniqueId } from '../lib/deduplicate-websites';

export const websites = deduplicateWebsites(rawWebsites).map((w, i) => ({
  ...w,
  id: generateUniqueId(w, i)
}));

// Fonction utilitaire pour obtenir les sites par catégorie
export const getWebsitesByCategory = (categoryId: string): Website[] => {
  return websites.filter((website) => website.category === categoryId);
};

// Fonction utilitaire pour obtenir les sites vedettes
export const getFeaturedWebsites = (): Website[] => {
  return websites.filter((website) => website.featured === true);
};

// Fonction utilitaire pour rechercher des sites
export const searchWebsites = (query: string): Website[] => {
  const searchTerm = query.toLowerCase();
  return websites.filter(
    (website) =>
      website.name.toLowerCase().includes(searchTerm) ||
      website.description.toLowerCase().includes(searchTerm) ||
      website.url.toLowerCase().includes(searchTerm),
  );
};
