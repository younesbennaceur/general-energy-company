import { Euro, MapPin, PencilRuler, SproutIcon } from "lucide-react";

const solutionSolaires = [
  {
    id: 1,
    name: "Batterie de stockage",
    description:
      "Stockez l’énergie produite par vos panneaux solaires pour l’utiliser quand vous en avez besoin, même en l’absence de soleil.",
    link: "www.google.com",
  },
  {
    id: 2,
    name: "Chauffe-eau solaire",
    description:
      "Profitez d’une eau chaude sanitaire produite gratuitement grâce à l’énergie solaire, tout en réduisant vos factures.",
    link: "www.google.com",
  },
  {
    id: 3,
    name: "Pompe à chaleur",
    description:
      "Chauffez ou rafraîchissez votre logement avec une technologie performante et économique, même en hiver.",
    link: "www.google.com",
  },
  {
    id: 4,
    name: "Ballon thermodynamique",
    description:
      "Un système intelligent qui capte les calories de l’air pour chauffer l’eau, performant et écologique.",
    link: "www.gogle.com",
  },
  {
    id: 5,
    name: "Climatisation",
    description:
      "Gardez un intérieur frais en été et confortable en hiver avec des équipements basse consommation.",
    link: "www.google.com",
  },
  {
    id: 6,
    name: "Système solaire combiné",
    description:
      "Combinez production d’électricité et chauffage pour une solution énergétique complète et optimisée.",
    link: "www.google.com",
  },
];

const solutionProfiles = [
  {
    id: 1,
    name: "Particulier",
    description:
      "Une énergie durablement économique, réduisez vos factures, gagnez en autonomie et et valorisez votre logement.",
  },
  {
    id: 2,
    name: "Professionnel",
    description:
      "Une énergie durablement performante, diminuer vos coûts énergétiques et améliorez votre image environnementale.",
  },
  {
    id: 3,
    name: "Agriculteur",
    description:
      "Une énergie durablement performante, stabilisez vos dépenses et sécurisez vos ressources.",
  },
];

const cge = [
  {
    id: 1,
    name: "Nous connaissons votre terrain",
    description:
      "Nos solutions sont adaptées au climat, à l’environnement et aux réalités locales.",
    icon: MapPin,
  },
  {
    id: 2,
    name: "Pour un avenir plus vert",
    description:
      "CGE, c’est faire le choix d’une énergie propre, renouvelable et responsable.",
    icon: SproutIcon,
  },
  {
    id: 3,
    name: "Rentabilité assurée",
    description:
      "Réduisez vos factures dès les premiers mois tout en valorisant votre bien.",
    icon: Euro,
  },
  {
    id: 4,
    name: "Accompagnement sur mesure",
    description:
      "De l’étude de faisabilité à l’entretien, nous vous guidons à chaque étape.",
    icon: PencilRuler,
  },
];

const publications = [
  {
    id: 1,
    name: "Un investissement d’avenir pour les agriculteurs",
    description:
      "Découvrez comment les exploitations agricoles tirent profit du photovoltaïque pour réduire leurs coûts et diversifier leurs revenus.",
    image: "/assets/pub-c.svg",
  },
  {
    id: 2,
    name: "5 idées pour valoriser vos bâtiments agricoles",
    description:
      "Toits, hangars, serres… apprenez à transformer vos surfaces inutilisées en véritables sources d’énergie.",
    image: "/assets/pub.svg",
  },
  {
    id: 3,
    name: "CGE : du sur mesure pour vos projets solaires",
    description:
      "De l’étude technique à l’installation, découvrez comment nous simplifions chaque étape de votre projet.",
    image: "/assets/pub-b.svg",
  },
];

export const landingData = {
  solutionSolaires,
  solutionProfiles,
  cge,
  publications,
};

const socials = [
  {
    name: "X",
    image: "/assets/x-twitter.svg",
    href: "https://x.com/ZappiconLabs",
  },

  {
    name: "Facebook",
    image: "/assets/facebook.svg",
    href: "https://facebook.com/ZappiconLabs",
  },
  {
    name: "Instagram",
    image: "/assets/insta.svg",
    href: "https://www.instagram.com/zappicon",
  },
  {
    name: "LinkedIn",
    image: "/assets/linkedin.svg",
    href: "https://www.instagram.com/zappicon",
  },
];

const links = [
  {
    id: 1,
    name: "Accueil",
    href: "/",
  },
  {
    id: 2,
    name: "Nos services",
    href: "/",
  },
  {
    id: 3,
    name: "Votre profil",
    href: "/",
  },
  {
    id: 4,
    name: "À propos",
    href: "/",
  },
  {
    id: 5,
    name: "Blog",
    href: "/blogs",
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
  },
];

export const footerData = {
  links,
  socials,
};

export const blogs = [
  {
    title:
      "L’énergie solaire : un investissement d’avenir pour les agriculteurs",
    subtitle:
      "Les prix de l’électricité ne cessent d’augmenter et les exploitations agricoles sont particulièrement touchées par cette hausse des coûts. Dans ce contexte, produire sa propre énergie devient une stratégie clé pour protéger la rentabilité de son activité. L’énergie solaire, grâce à sa disponibilité et à ses faibles coûts de maintenance, se présente comme une solution idéale.",

    sections: [
      {
        title: "Valoriser vos espaces inutilisés",
        subtitle:
          "Les toits de hangars, les serres ou encore les terrains non cultivés peuvent accueillir des installations photovoltaïques. Cela permet de transformer des surfaces inexploitées en source de revenus, tout en contribuant à l’indépendance énergétique de l’exploitation.",

        image: "/assets/solar.svg",
      },
      {
        title: "Un revenu complémentaire et stable",
        subtitle:
          "En installant des panneaux solaires, vous pouvez utiliser l’électricité produite pour vos besoins quotidiens et vendre le surplus à EDF OA (Obligation d’Achat). Ce revenu complémentaire est garanti par contrat sur plusieurs années, ce qui assure une stabilité financière appréciable.",
      },
      {
        title: "Un engagement pour l’environnement",
        subtitle:
          "Opter pour le solaire, c’est réduire votre empreinte carbone et participer activement à la transition énergétique. En produisant une énergie propre et renouvelable, vous contribuez à préserver les ressources naturelles et à lutter contre le réchauffement climatique.",
      },
      {
        title: "CGE : votre partenaire du projet à la réalisation",
        subtitle:
          "Chez CGE, nous savons que chaque exploitation est unique. C’est pourquoi nous proposons un accompagnement sur mesure, de l’étude de faisabilité à la mise en service de votre installation.",
      },
    ],
  },
];

type HeroData = {
  title: string;
  secondTitle: string;
  subtitle: string;
};
export const heroData: Record<string, HeroData> = {
  "/": {
    title: "L’énergie solaire,",
    secondTitle: "qui s’adapte à vous",
    subtitle:
      "Parce que chacun peut contribuer à un avenir plus propre, nous vous accompagnons avec des solutions solaires pensées pour votre quotidien.",
  },
  "/particulier": {
    title: "L’énergie solaire au",
    secondTitle: "service de votre foyer",
    subtitle:
      "Nous aidons les particuliers à réduire leur facture et à gagner en autonomie en transformant leurs toitures et espaces disponibles en véritables sources d’énergie propre et durable.",
  },
  "/agriculteurs": {
    title: "L’énergie solaire au",
    secondTitle: "service de vos terres",
    subtitle:
      "Nous accompagnons les agriculteurs dans la transition énergétique en transformant les toitures, hangars et terrains inutilisés en véritables sources de revenus et d’autonomie.",
  },
  "/industries": {
    title: "L’énergie solaire au",
    secondTitle: "cœur de votre industrie",
    subtitle:
      "Nous aidons les industries à optimiser leur consommation énergétique et à réduire leurs coûts, en transformant leurs toitures, parkings et espaces disponibles en centrales solaires performantes.",
  },
  "/collectivites": {
    title: "L’énergie solaire au",
    secondTitle: "service de vos collectivités",
    subtitle:
      "Nous aidons les collectivités à valoriser leurs bâtiments, parkings et espaces publics en les transformant en sources d’énergie solaire efficaces et durables, au bénéfice de tous les citoyens.",
  },
};

export const projectStepsSlides = [
  {
    id: 1,
    title: "Prise de contact",
    description:
      "On échange sur vos besoins. Vous nous contactez et nous définissons ensemble les grandes lignes de votre projet solaire.",
    image: "/assets/slides/1.png",
  },
  {
    id: 2,
    title: "Rendez-vous sur site",
    description:
      "Analyse de votre terrain et de vos objectifs. Nous venons sur place pour évaluer le potentiel et comprendre vos contraintes.",
    image: "/assets/slides/2.png",
  },
  {
    id: 3,
    title: "Contractualisation",
    description:
      "On officialise notre partenariat. Signature du contrat pour lancer les démarches administratives et techniques.",
    image: "/assets/slides/3.png",
  },
  {
    id: 4,
    title: "Acompte & étude",
    description:
      "Premières validations techniques. Après versement d’un acompte, nous entamons l’étude complète de votre projet.",
    image: "/assets/slides/4.png",
  },
  {
    id: 5,
    title: "Démarches administratives",
    description:
      "Permis et autorisations. Demande préalable en mairie, permis de construire et validation du tarif de vente.",
    image: "/assets/slides/5.png",
  },
  {
    id: 6,
    title: "Études techniques",
    description:
      "Dimensionnement et faisabilité. Étude de charge, dimensionnement de la structure métallique et étude de sol.",
    image: "/assets/slides/6.png",
  },
  {
    id: 7,
    title: "Proposition technique et financière",
    description:
      "Une offre claire et optimisée. Présentation détaillée de la solution adaptée à votre exploitation.",
    image: "/assets/slides/3.png",
  },
  {
    id: 8,
    title: "Visite technique",
    description:
      "Préparer le terrain pour l’installation. Validation finale des aspects techniques avant les travaux.",
    image: "/assets/slides/8.png",
  },
  {
    id: 9,
    title: "Installation",
    description:
      "Mise en place des équipements. Nos équipes installent votre centrale solaire, avec suivi de chantier.",
    image: "/assets/slides/9.png",
  },
  {
    id: 10,
    title: "Contrôle et conformité",
    description:
      "Vérifications avant mise en service. Inspection par le bureau de contrôle, obtention du Consuel et pose du compteur.",
    image: "/assets/slides/10.png",
  },
  {
    id: 11,
    title: "Mise en service & facturation",
    description:
      "Votre centrale commence à produire. Activation du raccordement et début de la facturation auprès d’EDF OA.",
    image: "/assets/slides/11.png",
  },
  {
    id: 12,
    title: "Visite sur place",
    description:
      "Analyse personnalisée de votre habitation. Nous évaluons le potentiel solaire de votre toit et comprendre vos besoins.",
    image: "/assets/slides/11.png",
  },
  {
    id: 13,
    title: "Accord technique et financement",
    description:
      "Notre bureau d’études valide la faisabilité, et nous mettons en place avec vous la solution de financement la plus adaptée.",
    image: "/assets/slides/11.png",
  },
  {
    id: 14,
    title: "Démarches administratives",
    description:
      "On s’occupe de tout. Nous prenons en charge toutes les formalités nécessaires auprès des autorités et des organismes compétents.",
    image: "/assets/slides/5.png",
  },
  // Todo:
  {
    id: 15,
    title: "Mise en service",
    description:
      "Votre installation est mise en service et connectée au réseau. Vous commencez à produire votre propre énergie verte.",
    image: "/assets/slides/9.png",
  },
  {
    id: 16,
    title: "Mise en service",
    description:
      "Votre installation est mise en service et connectée au réseau. Vous commencez à produire votre propre énergie verte.",
    image: "/assets/slides/3.png",
  },
  {
    id: 17,
    title: "Mise en service",
    description:
      "Votre installation est mise en service et connectée au réseau. Vous commencez à produire votre propre énergie verte.",
    image: "/assets/slides/16.png",
  },
];
