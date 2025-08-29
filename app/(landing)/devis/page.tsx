"use client";
import { useState } from "react";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  ChevronLeft, 
  Home, 
  Building2, 
  Calculator,
  FileText,
  Send,
  Thermometer,
  Shield,
  User,
  Phone,
  Check,
  Factory,
  Tractor
} from "lucide-react";

// Fonction pour générer les questions conditionnelles selon les services sélectionnés
const getConditionalFields = (services) => {
  if (!services || !Array.isArray(services)) return [];
  
  let fields = [];
  
  // Questions pour POMPE À CHALEUR
  if (services.includes('pompe-chaleur')) {
    fields.push(
      {
        name: "currentHeatingType",
        label: "Type de chauffage actuel",
        type: "select",
        required: true,
        options: [
          { value: "gaz", label: "Gaz" },
          { value: "fioul", label: "Fioul" },
          { value: "electrique", label: "Électrique" },
          { value: "bois", label: "Bois" },
          { value: "autre", label: "Autre" }
        ]
      },
      {
        name: "heatingAge",
        label: "Âge de l'installation actuelle",
        type: "select",
        required: true,
        options: [
          { value: "moins-5", label: "< 5 ans" },
          { value: "5-10", label: "5-10 ans" },
          { value: "10-15", label: "10-15 ans" },
          { value: "15+", label: "15+ ans" }
        ]
      },
      {
        name: "heatingBill",
        label: "Facture chauffage annuelle",
        type: "select",
        required: true,
        options: [
          { value: "moins-1000", label: "< 1000€" },
          { value: "1000-2000", label: "1000-2000€" },
          { value: "2000-3000", label: "2000-3000€" },
          { value: "3000+", label: "3000€+" }
        ]
      },
      {
        name: "radiatorType",
        label: "Type de radiateurs",
        type: "select",
        required: true,
        options: [
          { value: "fonte", label: "Fonte" },
          { value: "acier", label: "Acier" },
          { value: "plancher-chauffant", label: "Plancher chauffant" },
          { value: "autre", label: "Autre" }
        ]
      },
      {
        name: "insulation",
        label: "Niveau d'isolation",
        type: "select",
        required: true,
        options: [
          { value: "bien-isole", label: "Bien isolé" },
          { value: "moyennement-isole", label: "Moyennement isolé" },
          { value: "peu-isole", label: "Peu isolé" },
          { value: "non-isole", label: "Non isolé" }
        ]
      },
      {
        name: "pacUsage",
        label: "Usage souhaité pour la PAC",
        type: "select",
        required: true,
        options: [
          { value: "chauffage-seul", label: "Chauffage seul" },
          { value: "chauffage-rafraichissement", label: "Chauffage + rafraîchissement" },
          { value: "chauffage-eau-chaude", label: "Chauffage + eau chaude" }
        ]
      },
      {
        name: "exteriorLocation",
        label: "Emplacement unité extérieure",
        type: "select",
        required: true,
        options: [
          { value: "jardin", label: "Jardin" },
          { value: "cour", label: "Cour" },
          { value: "balcon", label: "Balcon" },
          { value: "toit-terrasse", label: "Toit-terrasse" }
        ]
      },
      {
        name: "acousticConstraints",
        label: "Contraintes acoustiques",
        type: "radio",
        required: true,
        options: [
          { value: "oui", label: "Oui (voisinage proche)" },
          { value: "non", label: "Non" }
        ]
      },
      {
        name: "pacPreference",
        label: "Préférence type de PAC",
        type: "select",
        required: true,
        options: [
          { value: "air-air", label: "Air/Air" },
          { value: "air-eau", label: "Air/Eau" },
          { value: "geothermie", label: "Géothermie" }
        ]
      }
    );
  }
  
  // Questions pour CHAUFFE-EAU SOLAIRE ou BALLON THERMODYNAMIQUE
  if (services.includes('chauffe-eau-solaire') || services.includes('ballon-thermodynamique')) {
    fields.push(
      {
        name: "currentWaterHeaterType",
        label: "Type de production d'eau chaude actuelle",
        type: "select",
        required: true,
        options: [
          { value: "electrique", label: "Électrique" },
          { value: "gaz", label: "Gaz" },
          { value: "fioul", label: "Fioul" },
          { value: "solaire", label: "Solaire" }
        ]
      },
      {
        name: "currentCapacity",
        label: "Capacité actuelle",
        type: "select",
        required: true,
        options: [
          { value: "100l", label: "100L" },
          { value: "150l", label: "150L" },
          { value: "200l", label: "200L" },
          { value: "300l+", label: "300L+" }
        ]
      },
      {
        name: "waterHeaterAge",
        label: "Âge de l'installation",
        type: "select",
        required: true,
        options: [
          { value: "moins-5", label: "< 5 ans" },
          { value: "5-10", label: "5-10 ans" },
          { value: "10-15", label: "10-15 ans" },
          { value: "15+", label: "15+ ans" }
        ]
      },
      {
        name: "waterConsumption",
        label: "Consommation eau chaude",
        type: "select",
        required: true,
        options: [
          { value: "faible", label: "Faible" },
          { value: "normale", label: "Normale" },
          { value: "elevee", label: "Élevée" }
        ]
      },
      {
        name: "technicalLocation",
        label: "Emplacement technique",
        type: "select",
        required: true,
        options: [
          { value: "cave", label: "Cave" },
          { value: "garage", label: "Garage" },
          { value: "buanderie", label: "Buanderie" },
          { value: "exterieur", label: "Extérieur" }
        ]
      }
    );
    
    // Questions spécifiques au chauffe-eau solaire
    if (services.includes('chauffe-eau-solaire')) {
      fields.push(
        {
          name: "roofOrientation",
          label: "Orientation du toit",
          type: "select",
          required: true,
          options: [
            { value: "sud", label: "Sud" },
            { value: "sud-est-ouest", label: "Sud-Est/Sud-Ouest" },
            { value: "est-ouest", label: "Est/Ouest" },
            { value: "nord", label: "Nord" }
          ]
        },
        {
          name: "roofInclination",
          label: "Inclinaison du toit",
          type: "select",
          required: true,
          options: [
            { value: "30", label: "30°" },
            { value: "45", label: "45°" },
            { value: "60", label: "60°" },
            { value: "plat", label: "Toit plat" }
          ]
        },
        {
          name: "shading",
          label: "Ombrage",
          type: "select",
          required: true,
          options: [
            { value: "aucun", label: "Aucun" },
            { value: "leger", label: "Léger" },
            { value: "important", label: "Important" }
          ]
        },
        {
          name: "roofType",
          label: "Type de toiture",
          type: "select",
          required: true,
          options: [
            { value: "tuiles", label: "Tuiles" },
            { value: "ardoises", label: "Ardoises" },
            { value: "bac-acier", label: "Bac acier" },
            { value: "autre", label: "Autre" }
          ]
        }
      );
    }
  }
  
  // Questions pour CLIMATISATION
  if (services.includes('climatisation')) {
    fields.push(
      {
        name: "roomsToClimate",
        label: "Pièces à climatiser",
        type: "multiselect",
        required: true,
        options: [
          { value: "salon", label: "Salon" },
          { value: "chambres", label: "Chambres" },
          { value: "maison-complete", label: "Maison complète" }
        ]
      },
      {
        name: "surfaceToClimate",
        label: "Surface à rafraîchir",
        type: "number",
        required: true,
        placeholder: "Surface en m²"
      },
      {
        name: "roomsOrientation",
        label: "Orientation des pièces",
        type: "select",
        required: true,
        options: [
          { value: "sud", label: "Sud" },
          { value: "est-ouest", label: "Est-Ouest" },
          { value: "nord", label: "Nord" }
        ]
      },
      {
        name: "climateInsulation",
        label: "Niveau d'isolation",
        type: "select",
        required: true,
        options: [
          { value: "bonne", label: "Bonne" },
          { value: "moyenne", label: "Moyenne" },
          { value: "faible", label: "Faible" }
        ]
      },
      {
        name: "ceilingHeight",
        label: "Hauteur sous plafond",
        type: "select",
        required: true,
        options: [
          { value: "moins-2.5", label: "< 2,5m" },
          { value: "2.5-3", label: "2,5-3m" },
          { value: "plus-3", label: "> 3m" }
        ]
      }
    );
  }
  
  // Questions pour BATTERIE DE STOCKAGE
  if (services.includes('batterie-stockage')) {
    fields.push(
      {
        name: "existingPanels",
        label: "Panneaux photovoltaïques existants",
        type: "radio",
        required: true,
        options: [
          { value: "oui", label: "Oui" },
          { value: "non", label: "Non" },
          { value: "en-projet", label: "En projet" }
        ]
      },
      {
        name: "panelsPower",
        label: "Si oui, puissance installée",
        type: "select",
        required: false,
        options: [
          { value: "3kwc", label: "3kWc" },
          { value: "6kwc", label: "6kWc" },
          { value: "9kwc", label: "9kWc" },
          { value: "plus", label: "Plus" }
        ]
      },
      {
        name: "currentAutoconsumption",
        label: "Autoconsommation actuelle",
        type: "select",
        required: true,
        options: [
          { value: "moins-30", label: "< 30%" },
          { value: "30-50", label: "30-50%" },
          { value: "50-70", label: "50-70%" },
          { value: "plus-70", label: "> 70%" }
        ]
      },
      {
        name: "electricBillMonthly",
        label: "Facture électrique mensuelle",
        type: "select",
        required: true,
        options: [
          { value: "moins-100", label: "< 100€/mois" },
          { value: "100-150", label: "100-150€/mois" },
          { value: "150-200", label: "150-200€/mois" },
          { value: "200+", label: "200€+/mois" }
        ]
      }
    );
  }
  
  // Questions pour SYSTÈME SOLAIRE COMBINÉ
  if (services.includes('systeme-solaire-combine')) {
    fields.push(
      {
        name: "surfaceToHeat",
        label: "Surface à chauffer",
        type: "number",
        required: true,
        placeholder: "Surface en m²"
      },
      {
        name: "hotWaterConsumption",
        label: "Consommation eau chaude",
        type: "select",
        required: true,
        options: [
          { value: "faible", label: "Faible" },
          { value: "normale", label: "Normale" },
          { value: "elevee", label: "Élevée" }
        ]
      },
      {
        name: "currentHeatingCombined",
        label: "Chauffage actuel",
        type: "select",
        required: true,
        options: [
          { value: "gaz", label: "Gaz" },
          { value: "fioul", label: "Fioul" },
          { value: "electrique", label: "Électrique" },
          { value: "bois", label: "Bois" },
          { value: "autre", label: "Autre" }
        ]
      },
      {
        name: "budgetCombined",
        label: "Budget prévisionnel",
        type: "select",
        required: true,
        options: [
          { value: "15-25k", label: "15-25k€" },
          { value: "25-35k", label: "25-35k€" },
          { value: "35k+", label: "35k€+" }
        ]
      }
    );
  }
  
  return fields;
};

// Fonction principale pour obtenir les étapes selon le type de client
const getStepsForClientType = (clientType) => {
  const commonSteps = [
    {
      number: 1,
      title: "Type de client",
      icon: Home,
      fields: [
        {
          name: "clientType",
          label: "Quel type de client êtes-vous ?",
          type: "radio-buttons",
          required: true,
          options: [
            { value: "particulier", label: "Particulier", icon: "🏠" },
            { value: "agriculteur", label: "Agriculteur", icon: "🚜" },
            { value: "industrie", label: "Industrie", icon: "🏭" },
            { value: "collectivite", label: "Collectivité", icon: "🏛️" }
          ]
        }
      ]
    }
  ];

  switch (clientType) {
    case "particulier":
      return [
        ...commonSteps,
        {
          number: 2,
          title: "Votre projet",
          icon: Calculator,
          fields: [
            {
              name: "services",
              label: "Quelles prestations vous intéressent ?",
              type: "multiselect",
              required: true,
              subtitle: "Sélectionnez une ou plusieurs options",
              options: [
                { value: "batterie-stockage", label: "🔋 Batterie de stockage" },
                { value: "chauffe-eau-solaire", label: "☀ Chauffe-eau solaire" },
                { value: "pompe-chaleur", label: "🌡 Pompe à chaleur" },
                { value: "ballon-thermodynamique", label: "💧 Ballon thermodynamique" },
                { value: "climatisation", label: "❄ Climatisation" },
                { value: "systeme-solaire-combine", label: "🏠 Système solaire combiné" }
              ]
            }
          ]
        },
        {
          number: 3,
          title: "Questions spécifiques",
          icon: Calculator,
          fields: [] // Les champs seront générés dynamiquement selon les services sélectionnés
        },
        {
          number: 4,
          title: "Votre logement",
          icon: Home,
          fields: [
            {
              name: "propertyType",
              label: "Type de bien",
              type: "radio-cards",
              required: true,
              options: [
                { value: "maison", label: "Maison individuelle", icon: "🏠" },
                { value: "appartement", label: "Appartement", icon: "🏢" }
              ]
            },
            {
              name: "habitableSurface",
              label: "Surface habitable",
              type: "number",
              required: true,
              placeholder: "Surface en m²"
            },
            {
              name: "constructionYear",
              label: "Année de construction",
              type: "select",
              required: true,
              options: [
                { value: "avant-1975", label: "Avant 1975" },
                { value: "1975-1989", label: "1975-1989" },
                { value: "1990-2005", label: "1990-2005" },
                { value: "apres-2005", label: "Après 2005" }
              ]
            },
            {
              name: "occupants",
              label: "Nombre d'occupants",
              type: "select",
              required: true,
              options: [
                { value: "1-2", label: "1-2 personnes" },
                { value: "3-4", label: "3-4 personnes" },
                { value: "5+", label: "5+ personnes" }
              ]
            },
            {
              name: "postalCode",
              label: "Code postal",
              type: "text",
              required: true,
              placeholder: "ex: 37000"
            }
          ]
        },
        {
          number: 5,
          title: "Situation financière",
          icon: FileText,
          fields: [
            {
              name: "fiscalIncome",
              label: "Revenus fiscaux (pour éligibilité aux aides)",
              type: "select",
              required: true,
              options: [
                { value: "tres-modestes", label: "Très modestes (< 20 000€)" },
                { value: "modestes", label: "Modestes (20-25 000€)" },
                { value: "intermediaires", label: "Intermédiaires (25-40 000€)" },
                { value: "superieurs", label: "Supérieurs (> 40 000€)" }
              ]
            },
            {
              name: "ownerStatus",
              label: "Statut du logement",
              type: "radio",
              required: true,
              options: [
                { value: "proprietaire-2ans", label: "Propriétaire occupant > 2 ans" },
                { value: "proprietaire-moins2ans", label: "Propriétaire occupant < 2 ans" },
                { value: "locataire", label: "Locataire" }
              ]
            },
            {
              name: "budget",
              label: "Budget envisagé",
              type: "select",
              required: true,
              options: [
                { value: "5-10k", label: "5 000 - 10 000€" },
                { value: "10-20k", label: "10 000 - 20 000€" },
                { value: "20-30k", label: "20 000 - 30 000€" },
                { value: "30k+", label: "Plus de 30 000€" },
                { value: "a-definir", label: "À définir selon devis" }
              ]
            }
          ]
        },
        {
          number: 6,
          title: "Délais et motivations",
          icon: Thermometer,
          fields: [
            {
              name: "timeline",
              label: "Délai souhaité",
              type: "radio",
              required: true,
              options: [
                { value: "urgent", label: "Urgent (< 3 mois)" },
                { value: "court-terme", label: "Court terme (3-6 mois)" },
                { value: "moyen-terme", label: "Moyen terme (6-12 mois)" },
                { value: "a-planifier", label: "À planifier (> 1 an)" }
              ]
            },
            {
              name: "motivation",
              label: "Motivation principale",
              type: "radio",
              required: true,
              options: [
                { value: "economies", label: "Économies d'énergie" },
                { value: "confort", label: "Confort thermique" },
                { value: "ecologie", label: "Écologie" },
                { value: "valorisation", label: "Valorisation du bien" },
                { value: "remplacement", label: "Remplacement panne" }
              ]
            }
          ]
        },
        {
          number: 7,
          title: "Contact",
          icon: Send,
          fields: [
            {
              name: "civilite",
              label: "Civilité",
              type: "select",
              required: true,
              options: [
                { value: "M", label: "M." },
                { value: "Mme", label: "Mme" }
              ]
            },
            {
              name: "lastName",
              label: "Nom",
              type: "text",
              required: true,
              placeholder: "Nom",
              gridCols: "sm:col-span-1"
            },
            {
              name: "firstName",
              label: "Prénom",
              type: "text",
              required: true,
              placeholder: "Prénom",
              gridCols: "sm:col-span-1"
            },
            {
              name: "email",
              label: "Email",
              type: "email",
              required: true,
              placeholder: "Email",
              gridCols: "sm:col-span-1"
            },
            {
              name: "phone",
              label: "Téléphone",
              type: "tel",
              required: true,
              placeholder: "Numéro de téléphone",
              gridCols: "sm:col-span-1"
            },
            {
              name: "city",
              label: "Ville",
              type: "text",
              required: true,
              placeholder: "Ville",
              gridCols: "sm:col-span-2"
            },
            {
              name: "availability",
              label: "Créneaux de visite technique",
              type: "multiselect",
              required: true,
              options: [
                { value: "matin", label: "Matin" },
                { value: "apres-midi", label: "Après-midi" },
                { value: "soiree", label: "Soirée" }
              ],
              gridCols: "sm:col-span-2"
            },
            {
              name: "comments",
              label: "Informations complémentaires",
              type: "textarea",
              placeholder: "Précisez contraintes, questions, informations importantes...",
              gridCols: "sm:col-span-2"
            }
          ]
        }
      ];

    case "agriculteur":
      return [
        ...commonSteps,
        {
          number: 2,
          title: "Type d'exploitation",
          icon: Tractor,
          fields: [
            {
              name: "exploitationType",
              label: "Activité principale",
              type: "select",
              required: true,
              options: [
                { value: "elevage-bovin", label: "Élevage bovin" },
                { value: "elevage-porcin", label: "Élevage porcin" },
                { value: "elevage-avicole", label: "Élevage avicole" },
                { value: "cereales", label: "Céréales" },
                { value: "maraichage", label: "Maraîchage" },
                { value: "viticulture", label: "Viticulture" },
                { value: "arboriculture", label: "Arboriculture" },
                { value: "serres", label: "Serres" },
                { value: "mixte", label: "Mixte" }
              ]
            },
            {
              name: "exploitationSize",
              label: "Superficie",
              type: "number",
              required: true,
              placeholder: "Superficie en hectares"
            },
            {
              name: "buildingsNumber",
              label: "Nombre de bâtiments",
              type: "select",
              required: true,
              options: [
                { value: "1-2", label: "1-2" },
                { value: "3-5", label: "3-5" },
                { value: "6-10", label: "6-10" },
                { value: "10+", label: "10+" }
              ]
            },
            {
              name: "buildingsSurface",
              label: "Surface des bâtiments",
              type: "number",
              required: true,
              placeholder: "Surface en m²"
            }
          ]
        },
        {
          number: 3,
          title: "Consommations",
          icon: Calculator,
          fields: [
            {
              name: "electricBill",
              label: "Facture électrique annuelle",
              type: "select",
              required: true,
              options: [
                { value: "moins-5k", label: "< 5 000€" },
                { value: "5-15k", label: "5 000 - 15 000€" },
                { value: "15-30k", label: "15 000 - 30 000€" },
                { value: "30k+", label: "> 30 000€" }
              ]
            },
            {
              name: "kwhAnnual",
              label: "kWh annuels",
              type: "select",
              required: true,
              options: [
                { value: "moins-50k", label: "< 50 000" },
                { value: "50-150k", label: "50-150k" },
                { value: "150-300k", label: "150-300k" },
                { value: "300k+", label: "300k+" }
              ]
            },
            {
              name: "consumptionPeak",
              label: "Pic de consommation",
              type: "radio",
              required: true,
              options: [
                { value: "ete", label: "Été" },
                { value: "hiver", label: "Hiver" },
                { value: "toute-annee", label: "Toute l'année" }
              ]
            },
            {
              name: "consumptionHours",
              label: "Heures consommation",
              type: "radio",
              required: true,
              options: [
                { value: "jour", label: "Jour" },
                { value: "nuit", label: "Nuit" },
                { value: "continue", label: "Continue" }
              ]
            },
            {
              name: "specificNeeds",
              label: "Besoins spécifiques",
              type: "multiselect",
              required: true,
              options: [
                { value: "ventilation", label: "Ventilation bâtiments" },
                { value: "traite", label: "Traite automatisée" },
                { value: "refroidissement-lait", label: "Refroidissement lait" },
                { value: "chauffage-serres", label: "Chauffage serres" },
                { value: "sechage-cereales", label: "Séchage céréales" },
                { value: "irrigation", label: "Irrigation" }
              ]
            }
          ]
        },
        {
          number: 4,
          title: "Projet énergétique",
          icon: Shield,
          fields: [
            {
              name: "services",
              label: "Services d'intérêt",
              type: "multiselect",
              required: true,
              options: [
                { value: "hangar-photovoltaique", label: "Hangar photovoltaïque" },
                { value: "toiture-photovoltaique", label: "Toiture photovoltaïque" },
                { value: "ombriere-parking", label: "Ombrière parking" },
                { value: "batterie-stockage", label: "Batterie stockage" },
                { value: "pompe-chaleur-process", label: "Pompe chaleur process" },
                { value: "methanisation", label: "Méthanisation" },
                { value: "eolien", label: "Éolien" }
              ]
            },
            {
              name: "networkConnection",
              label: "Raccordement réseau",
              type: "select",
              required: true,
              options: [
                { value: "triphase", label: "Triphasé" },
                { value: "monophase", label: "Monophasé" }
              ]
            },
            {
              name: "counterDistance",
              label: "Distance compteur",
              type: "select",
              required: true,
              options: [
                { value: "moins-50m", label: "< 50m" },
                { value: "50-100m", label: "50-100m" },
                { value: "plus-100m", label: "> 100m" }
              ]
            },
            {
              name: "existingStructure",
              label: "Charpente existante",
              type: "select",
              required: true,
              options: [
                { value: "beton", label: "Béton" },
                { value: "metal", label: "Métal" },
                { value: "bois", label: "Bois" }
              ]
            },
            {
              name: "buildingsAge",
              label: "Âge bâtiments",
              type: "select",
              required: true,
              options: [
                { value: "moins-10", label: "< 10 ans" },
                { value: "10-20", label: "10-20 ans" },
                { value: "plus-20", label: "> 20 ans" }
              ]
            }
          ]
        },
        {
          number: 5,
          title: "Aspects économiques",
          icon: FileText,
          fields: [
            {
              name: "budget",
              label: "Budget projet",
              type: "select",
              required: true,
              options: [
                { value: "50-100k", label: "50-100k€" },
                { value: "100-250k", label: "100-250k€" },
                { value: "250-500k", label: "250-500k€" },
                { value: "500k+", label: "> 500k€" }
              ]
            },
            {
              name: "financialObjectives",
              label: "Objectifs financiers",
              type: "multiselect",
              required: true,
              options: [
                { value: "reduire-facture", label: "Réduire facture énergétique" },
                { value: "revenus-complementaires", label: "Revenus complémentaires (vente)" },
                { value: "investissement-patrimonial", label: "Investissement patrimonial" },
                { value: "modernisation-exploitation", label: "Modernisation exploitation" }
              ]
            },
            {
              name: "legalStructure",
              label: "Structure juridique",
              type: "select",
              required: true,
              options: [
                { value: "exploitation-individuelle", label: "Exploitation individuelle" },
                { value: "earl", label: "EARL" },
                { value: "gaec", label: "GAEC" },
                { value: "scea", label: "SCEA" },
                { value: "autre", label: "Autre" }
              ]
            }
          ]
        },
        {
          number: 6,
          title: "Contact",
          icon: Send,
          fields: [
            {
              name: "lastName",
              label: "Nom",
              type: "text",
              required: true,
              placeholder: "Nom",
              gridCols: "sm:col-span-1"
            },
            {
              name: "firstName",
              label: "Prénom",
              type: "text",
              required: true,
              placeholder: "Prénom",
              gridCols: "sm:col-span-1"
            },
            {
              name: "email",
              label: "Email",
              type: "email",
              required: true,
              placeholder: "Email",
              gridCols: "sm:col-span-1"
            },
            {
              name: "phone",
              label: "Téléphone",
              type: "tel",
              required: true,
              placeholder: "Numéro de téléphone",
              gridCols: "sm:col-span-1"
            }
          ]
        }
      ];

    case "industrie":
      return [
        ...commonSteps,
        {
          number: 2,
          title: "Entreprise",
          icon: Factory,
          fields: [
            {
              name: "sector",
              label: "Secteur d'activité",
              type: "select",
              required: true,
              options: [
                { value: "agroalimentaire", label: "Agroalimentaire" },
                { value: "metallurgie", label: "Métallurgie/Mécanique" },
                { value: "textile", label: "Textile" },
                { value: "chimie", label: "Chimie/Pharmacie" },
                { value: "plasturgie", label: "Plasturgie" },
                { value: "bois", label: "Bois/Papier" },
                { value: "autre", label: "Autre" }
              ]
            },
            {
              name: "employees",
              label: "Effectifs",
              type: "select",
              required: true,
              options: [
                { value: "moins-50", label: "< 50" },
                { value: "50-250", label: "50-250" },
                { value: "250-500", label: "250-500" },
                { value: "500+", label: "> 500" }
              ]
            },
            {
              name: "revenue",
              label: "CA annuel",
              type: "select",
              required: true,
              options: [
                { value: "moins-10m", label: "< 10M€" },
                { value: "10-50m", label: "10-50M€" },
                { value: "50m+", label: "> 50M€" }
              ]
            },
            {
              name: "sites",
              label: "Sites",
              type: "radio",
              required: true,
              options: [
                { value: "mono-site", label: "Mono-site" },
                { value: "multi-sites", label: "Multi-sites" }
              ]
            }
          ]
        },
        {
          number: 3,
          title: "Consommations énergétiques",
          icon: Calculator,
          fields: [
            {
              name: "electricBill",
              label: "Facture électrique annuelle",
              type: "select",
              required: true,
              options: [
                { value: "moins-50k", label: "< 50k€" },
                { value: "50-200k", label: "50-200k€" },
                { value: "200-500k", label: "200-500k€" },
                { value: "500k+", label: "> 500k€" }
              ]
            },
            {
              name: "power",
              label: "Puissance souscrite",
              type: "select",
              required: true,
              options: [
                { value: "moins-100kw", label: "< 100kW" },
                { value: "100-500kw", label: "100-500kW" },
                { value: "500kw+", label: "> 500kW" }
              ]
            },
            {
              name: "consumptionProfile",
              label: "Profil consommation",
              type: "select",
              required: true,
              options: [
                { value: "bureau", label: "Bureau" },
                { value: "process-continu", label: "Process continu" },
                { value: "process-discontinu", label: "Process discontinu" }
              ]
            },
            {
              name: "gasConsumption",
              label: "Gaz (kWh/an)",
              type: "number",
              required: false,
              placeholder: "Consommation annuelle de gaz en kWh"
            },
            {
              name: "fuelConsumption",
              label: "Fioul (Litres/an)",
              type: "number",
              required: false,
              placeholder: "Consommation annuelle de fioul en litres"
            },
            {
              name: "steamConsumption",
              label: "Vapeur (Tonnes/an)",
              type: "number",
              required: false,
              placeholder: "Consommation annuelle de vapeur en tonnes"
            },
            {
              name: "processTemperature",
              label: "Température process",
              type: "select",
              required: true,
              options: [
                { value: "moins-100", label: "< 100°C" },
                { value: "100-300", label: "100-300°C" },
                { value: "plus-300", label: "> 300°C" }
              ]
            },
            {
              name: "refrigerationNeeds",
              label: "Besoins frigorigènes",
              type: "radio",
              required: true,
              options: [
                { value: "oui", label: "Oui" },
                { value: "non", label: "Non" }
              ]
            },
            {
              name: "production24h",
              label: "Production 24h/24",
              type: "radio",
              required: true,
              options: [
                { value: "oui", label: "Oui" },
                { value: "non", label: "Non" }
              ]
            }
          ]
        },
        {
          number: 4,
          title: "Obligations réglementaires",
          icon: Shield,
          fields: [
            {
              name: "surfaceOver1000",
              label: "Surface > 1000m²",
              type: "radio",
              required: true,
              options: [
                { value: "oui", label: "Oui" },
                { value: "non", label: "Non" }
              ]
            },
            {
              name: "objectives2030",
              label: "Objectifs -40% 2030",
              type: "select",
              required: true,
              options: [
                { value: "en-cours", label: "En cours" },
                { value: "a-demarrer", label: "À démarrer" }
              ]
            },
            {
              name: "energyAudit",
              label: "Audit énergétique réalisé",
              type: "select",
              required: true,
              options: [
                { value: "oui", label: "Oui" },
                { value: "non", label: "Non" },
                { value: "prevu", label: "Prévu" }
              ]
            },
            {
              name: "iso14001",
              label: "ISO 14001",
              type: "select",
              required: true,
              options: [
                { value: "oui", label: "Oui" },
                { value: "en-cours", label: "En cours" },
                { value: "non", label: "Non" }
              ]
            },
            {
              name: "iso50001",
              label: "ISO 50001",
              type: "select",
              required: true,
              options: [
                { value: "oui", label: "Oui" },
                { value: "en-cours", label: "En cours" },
                { value: "non", label: "Non" }
              ]
            },
            {
              name: "otherCertifications",
              label: "Autres certifications environnementales",
              type: "textarea",
              required: false,
              placeholder: "Précisez les autres certifications..."
            }
          ]
        },
        {
          number: 5,
          title: "Projet & investissement",
          icon: FileText,
          fields: [
            {
              name: "services",
              label: "Solutions d'intérêt",
              type: "multiselect",
              required: true,
              options: [
                { value: "photovoltaique-toiture", label: "Photovoltaïque toiture" },
                { value: "photovoltaique-ombriere", label: "Photovoltaïque ombrière" },
                { value: "batterie-industrielle", label: "Batterie industrielle" },
                { value: "pompe-chaleur-ht", label: "Pompe chaleur haute température" },
                { value: "recuperation-chaleur", label: "Récupération chaleur fatale" },
                { value: "cogeneration", label: "Cogénération" },
                { value: "optimisation-process", label: "Optimisation process" }
              ]
            },
            {
              name: "budget",
              label: "Budget",
              type: "select",
              required: true,
              options: [
                { value: "100-500k", label: "100-500k€" },
                { value: "500k-1m", label: "500k€-1M€" },
                { value: "1-5m", label: "1-5M€" },
                { value: "5m+", label: "> 5M€" }
              ]
            },
            {
              name: "paybackTime",
              label: "Temps retour accepté",
              type: "select",
              required: true,
              options: [
                { value: "moins-3", label: "< 3 ans" },
                { value: "3-5", label: "3-5 ans" },
                { value: "5-7", label: "5-7 ans" },
                { value: "plus-7", label: "> 7 ans" }
              ]
            },
            {
              name: "financingMode",
              label: "Mode financement",
              type: "select",
              required: true,
              options: [
                { value: "fonds-propres", label: "Fonds propres" },
                { value: "credit", label: "Crédit" },
                { value: "leasing", label: "Leasing" },
                { value: "tiers-financement", label: "Tiers-financement" }
              ]
            }
          ]
        },
        {
          number: 6,
          title: "Contact",
          icon: Send,
          fields: [
            {
              name: "lastName",
              label: "Nom",
              type: "text",
              required: true,
              placeholder: "Nom",
              gridCols: "sm:col-span-1"
            },
            {
              name: "firstName",
              label: "Prénom",
              type: "text",
              required: true,
              placeholder: "Prénom",
              gridCols: "sm:col-span-1"
            },
            {
              name: "email",
              label: "Email",
              type: "email",
              required: true,
              placeholder: "Email",
              gridCols: "sm:col-span-1"
            },
            {
              name: "phone",
              label: "Téléphone",
              type: "tel",
              required: true,
              placeholder: "Numéro de téléphone",
              gridCols: "sm:col-span-1"
            },
            {
              name: "company",
              label: "Entreprise",
              type: "text",
              required: true,
              placeholder: "Nom de l'entreprise",
              gridCols: "sm:col-span-2"
            }
          ]
        }
      ];

    case "collectivite":
      return [
        ...commonSteps,
        {
          number: 2,
          title: "Patrimoine immobilier",
          icon: Building2,
          fields: [
            {
              name: "collectivityType",
              label: "Type de collectivité",
              type: "select",
              required: true,
              options: [
                { value: "commune-petite", label: "Commune (< 2000 hab)" },
                { value: "commune-moyenne", label: "Commune (2000-10000 hab)" },
                { value: "commune-grande", label: "Commune (> 10000 hab)" },
                { value: "intercommunalite", label: "Intercommunalité" },
                { value: "departement", label: "Département" },
                { value: "region", label: "Région" },
                { value: "etablissement-public", label: "Établissement public" }
              ]
            },
            {
              name: "buildings",
              label: "Bâtiments concernés",
              type: "multiselect",
              required: true,
              options: [
                { value: "mairie", label: "Mairie/Services techniques" },
                { value: "ecole-primaire", label: "École maternelle/primaire" },
                { value: "college-lycee", label: "Collège/Lycée" },
                { value: "gymnase", label: "Gymnase/Équipements sportifs" },
                { value: "logements-sociaux", label: "Logements sociaux" },
                { value: "ehpad", label: "EHPAD" },
                { value: "mediatheque", label: "Médiathèque/Équipements culturels" },
                { value: "autres", label: "Autres" }
              ]
            },
            {
              name: "totalSurface",
              label: "Surface totale",
              type: "number",
              required: true,
              placeholder: "Surface en m²"
            },
            {
              name: "buildingsNumber",
              label: "Nombre de bâtiments",
              type: "select",
              required: true,
              options: [
                { value: "1", label: "1" },
                { value: "2-5", label: "2-5" },
                { value: "6-10", label: "6-10" },
                { value: "plus-10", label: "> 10" }
              ]
            },
            {
              name: "generalCondition",
              label: "État général",
              type: "select",
              required: true,
              options: [
                { value: "bon", label: "Bon" },
                { value: "moyen", label: "Moyen" },
                { value: "a-renover", label: "À rénover" }
              ]
            },
            {
              name: "constructionPeriod",
              label: "Période construction",
              type: "select",
              required: true,
              options: [
                { value: "avant-1980", label: "Avant 1980" },
                { value: "1980-2000", label: "1980-2000" },
                { value: "apres-2000", label: "Après 2000" }
              ]
            }
          ]
        },
        {
          number: 3,
          title: "Consommations & budget",
          icon: Calculator,
          fields: [
            {
              name: "energyBudget",
              label: "Budget énergie annuel",
              type: "select",
              required: true,
              options: [
                { value: "moins-50k", label: "< 50k€" },
                { value: "50-150k", label: "50-150k€" },
                { value: "150-300k", label: "150-300k€" },
                { value: "300k+", label: "> 300k€" }
              ]
            },
            {
              name: "objectives",
              label: "Objectifs",
              type: "multiselect",
              required: true,
              options: [
                { value: "reduction-factures", label: "Réduction factures énergétiques" },
                { value: "exemplarite-environnementale", label: "Exemplarité environnementale" },
                { value: "confort-usagers", label: "Confort usagers" },
                { value: "valorisation-patrimoine", label: "Valorisation patrimoine" }
              ]
            },
            {
              name: "availableBudget",
              label: "Budget disponible",
              type: "select",
              required: true,
              options: [
                { value: "moins-100k", label: "< 100k€" },
                { value: "100-500k", label: "100-500k€" },
                { value: "500k-1m", label: "500k€-1M€" },
                { value: "1m+", label: "> 1M€" }
              ]
            },
            {
              name: "financing",
              label: "Financement",
              type: "select",
              required: true,
              options: [
                { value: "budget-propre", label: "Budget propre" },
                { value: "subventions", label: "Subventions" },
                { value: "emprunt", label: "Emprunt" },
                { value: "cpe", label: "CPE" }
              ]
            }
          ]
        },
        {
          number: 4,
          title: "Projet & planning",
          icon: Shield,
          fields: [
            {
              name: "services",
              label: "Solutions prioritaires",
              type: "multiselect",
              required: true,
              options: [
                { value: "isolation-thermique", label: "Isolation thermique" },
                { value: "chauffage-pac", label: "Chauffage (PAC, biomasse)" },
                { value: "photovoltaique", label: "Photovoltaïque" },
                { value: "eclairage-led", label: "Éclairage LED" },
                { value: "regulation-gtb", label: "Régulation/GTB" },
                { value: "audit-energetique", label: "Audit énergétique" }
              ]
            },
            {
              name: "preliminaryStudies",
              label: "Études préalables",
              type: "select",
              required: true,
              options: [
                { value: "realisees", label: "Réalisées" },
                { value: "a-prevoir", label: "À prévoir" }
              ]
            },
            {
              name: "timeline",
              label: "Délai souhaité",
              type: "select",
              required: true,
              options: [
                { value: "2024", label: "2024" },
                { value: "2025", label: "2025" },
                { value: "2026+", label: "2026+" }
              ]
            },
            {
              name: "constraints",
              label: "Contraintes",
              type: "multiselect",
              required: true,
              options: [
                { value: "vacances-scolaires", label: "Vacances scolaires" },
                { value: "activite-continue", label: "Activité continue" },
                { value: "marches-publics", label: "Marchés publics" }
              ]
            }
          ]
        },
        {
          number: 5,
          title: "Contact",
          icon: Send,
          fields: [
            {
              name: "lastName",
              label: "Nom",
              type: "text",
              required: true,
              placeholder: "Nom",
              gridCols: "sm:col-span-1"
            },
            {
              name: "firstName",
              label: "Prénom",
              type: "text",
              required: true,
              placeholder: "Prénom",
              gridCols: "sm:col-span-1"
            },
            {
              name: "email",
              label: "Email",
              type: "email",
              required: true,
              placeholder: "Email",
              gridCols: "sm:col-span-1"
            },
            {
              name: "phone",
              label: "Téléphone",
              type: "tel",
              required: true,
              placeholder: "Numéro de téléphone",
              gridCols: "sm:col-span-1"
            },
            {
              name: "position",
              label: "Fonction",
              type: "text",
              required: true,
              placeholder: "Fonction/Poste",
              gridCols: "sm:col-span-2"
            }
          ]
        }
      ];

    default:
      return commonSteps;
  }
};

export default function DevisPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    clientType: "particulier"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showValidationErrors, setShowValidationErrors] = useState(false);

  // Obtenir les étapes pour le type de client sélectionné
  const stepsData = getStepsForClientType(formData.clientType);
  
  // Générer dynamiquement les champs conditionnels pour l'étape 3 (particuliers)
  let currentStepData = stepsData.find(step => step.number === currentStep);
  
  // Si c'est l'étape 3 pour les particuliers, ajouter les champs conditionnels
  if (currentStepData && currentStep === 3 && formData.clientType === "particulier") {
    const conditionalFields = getConditionalFields(formData.services);
    currentStepData = {
      ...currentStepData,
      fields: conditionalFields
    };
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      
      // Si on change le type de client, réinitialiser le formulaire
      if (field === 'clientType' && value !== prev.clientType) {
        return {
          clientType: value
        };
      }
      
      return newData;
    });
    
    // Réinitialiser l'étape si on change le type de client
    if (field === 'clientType') {
      setCurrentStep(1);
    }
    
    if (showValidationErrors) {
      setShowValidationErrors(false);
    }
  };

  const nextStep = () => {
    if (!isCurrentStepValid()) {
      setShowValidationErrors(true);
      return;
    }
    
    setShowValidationErrors(false);
    
    // Pour les particuliers, si on est à l'étape 2 et qu'aucun service n'est sélectionné,
    // passer directement à l'étape 4 (sauter les questions conditionnelles)
    if (currentStep === 2 && formData.clientType === "particulier") {
      if (!formData.services || formData.services.length === 0) {
        setCurrentStep(4); // Sauter l'étape 3
        return;
      }
    }
    
    // Si on est à l'étape 3 pour les particuliers et qu'il n'y a pas de champs conditionnels,
    // passer à l'étape suivante
    if (currentStep === 3 && formData.clientType === "particulier") {
      const conditionalFields = getConditionalFields(formData.services);
      if (conditionalFields.length === 0) {
        setCurrentStep(4);
        return;
      }
    }
    
    if (currentStep < stepsData.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setShowValidationErrors(false);
    
    // Pour les particuliers, si on revient de l'étape 4 et qu'il n'y a pas de questions conditionnelles,
    // revenir directement à l'étape 2
    if (currentStep === 4 && formData.clientType === "particulier") {
      const conditionalFields = getConditionalFields(formData.services);
      if (conditionalFields.length === 0) {
        setCurrentStep(2);
        return;
      }
    }
    
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!isCurrentStepValid()) {
      setShowValidationErrors(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulation d'envoi d'email - vous pouvez intégrer EmailJS ici
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Données du formulaire:', formData);
      setSubmitStatus('success');
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isCurrentStepValid = () => {
    const requiredFields = currentStepData?.fields?.filter(field => field.required) || [];
    
    return requiredFields.every(field => {
      const value = formData[field.name];
      
      if (field.type === 'checkbox-grid' || field.type === 'multiselect') {
        return Array.isArray(value) && value.length > 0;
      }
      
      if (field.type === 'text' || field.type === 'email' || field.type === 'tel' || field.type === 'number' || field.type === 'textarea') {
        return value && value.toString().trim() !== '';
      }
      
      if (field.type === 'select' || field.type === 'radio' || field.type === 'radio-buttons' || field.type === 'radio-cards') {
        return value && value !== '';
      }
      
      return value !== undefined && value !== null && value !== '';
    });
  };

  const renderField = (field) => {
    const baseInputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none text-gray-600";
    
    switch (field.type) {
      case 'radio-buttons':
        return (
          <div className="flex flex-wrap gap-3">
            {field.options?.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleInputChange(field.name, option.value)}
                className={`px-6 py-3 rounded-full border-2 transition-all flex items-center gap-2 ${
                  formData[field.name] === option.value
                    ? "bg-blue-900 text-white border-blue-900"
                    : "bg-white text-gray-600 border-gray-300 hover:border-blue-900"
                }`}
              >
                {option.icon && <span>{option.icon}</span>}
                {option.label}
              </button>
            ))}
          </div>
        );

      case 'radio-cards':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {field.options?.map((option) => (
              <label key={option.value} className="cursor-pointer">
                <input
                  type="radio"
                  name={field.name}
                  value={option.value}
                  checked={formData[field.name] === option.value}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  className="sr-only"
                />
                <div className={`p-8 border-2 rounded-xl transition-all text-center ${
                  formData[field.name] === option.value
                    ? "border-blue-900 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}>
                  <div className="text-4xl mb-4">{option.icon}</div>
                  <div className="text-lg font-medium text-gray-800">{option.label}</div>
                </div>
              </label>
            ))}
          </div>
        );

      case 'multiselect':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {field.options?.map((option) => {
                const isSelected = formData[field.name]?.includes(option.value);
                const currentCount = formData[field.name]?.length || 0;
                const maxCount = field.maxSelect || 10;
                const isDisabled = !isSelected && currentCount >= maxCount;
                
                return (
                  <button
                    key={option.value}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => {
                      const current = formData[field.name] || [];
                      if (isSelected) {
                        handleInputChange(field.name, current.filter(item => item !== option.value));
                      } else {
                        if (current.length < maxCount) {
                          handleInputChange(field.name, [...current, option.value]);
                        }
                      }
                    }}
                    className={`
                      p-4 border-2 rounded-lg text-left transition-all duration-200
                      ${isSelected 
                        ? "border-blue-900 bg-blue-50 text-blue-900" 
                        : isDisabled
                        ? "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed"
                        : "border-gray-300 bg-white text-gray-700 hover:border-blue-900 hover:bg-blue-50"
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option.label}</span>
                      <div className={`
                        w-5 h-5 rounded border-2 flex items-center justify-center
                        ${isSelected 
                          ? "border-blue-900 bg-blue-900" 
                          : "border-gray-300"
                        }
                      `}>
                        {isSelected && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            
            {formData[field.name] && formData[field.name].length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData[field.name].map((selectedValue) => {
                  const option = field.options?.find(opt => opt.value === selectedValue);
                  return (
                    <div
                      key={selectedValue}
                      className="flex items-center space-x-2 bg-blue-900 text-white px-3 py-1 rounded-full text-sm"
                    >
                      <span>{option?.label}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const current = formData[field.name] || [];
                          handleInputChange(field.name, current.filter(item => item !== selectedValue));
                        }}
                        className="text-white hover:text-gray-200 font-bold text-lg leading-none ml-1"
                      >
                        ×
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      
      case 'select':
        return (
          <div className="relative">
            <select
              required={field.required}
              value={formData[field.name] || ""}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className={`${baseInputClass} bg-white appearance-none pr-10`}
            >
              <option value="">{field.placeholder || "Sélectionnez une option"}</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        );
      
      case 'radio':
        return (
          <div className="space-y-3">
            {field.options?.map((option) => (
              <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name={field.name}
                  value={option.value}
                  checked={formData[field.name] === option.value}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  className="h-5 w-5 text-blue-900 border-gray-300 focus:ring-blue-900"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        );

      case 'textarea':
        return (
          <textarea
            required={field.required}
            value={formData[field.name] || ""}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            className={`${baseInputClass} min-h-[100px] resize-vertical`}
            placeholder={field.placeholder}
            rows={4}
          />
        );

      case 'number':
        return (
          <input
            type="number"
            required={field.required}
            value={formData[field.name] || ""}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            className={baseInputClass}
            placeholder={field.placeholder}
          />
        );
      
      default:
        return (
          <div className="relative">
            <input
              type={field.type}
              required={field.required}
              value={formData[field.name] || ""}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className={`${baseInputClass} ${field.icon ? 'pr-10' : ''}`}
              placeholder={field.placeholder}
            />
            {field.icon && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {typeof field.icon === 'string' ? (
                  <span className="text-gray-400">{field.icon}</span>
                ) : (
                  <field.icon className="w-5 h-5 text-gray-400" />
                )}
              </div>
            )}
          </div>
        );
    }
  };

  // Vérifier s'il faut afficher l'étape 3 pour les particuliers
  const shouldShowStep3 = () => {
    if (formData.clientType !== "particulier") return true;
    if (currentStep !== 3) return true;
    
    const conditionalFields = getConditionalFields(formData.services);
    return conditionalFields.length > 0;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec Navbar */}
      <div className="bg-blue-900 text-white px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <div className="text-center mt-8 mb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Demande de devis personnalisée
            </h1>
            <p className="text-lg text-gray-200">
              Remplissez ce formulaire adapté à vos besoins. Un conseiller spécialisé vous recontactera rapidement.
            </p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Indicateur de progression */}
        <div className="flex justify-center mb-8 overflow-x-auto">
          <div className="flex items-center space-x-2 min-w-max px-4">
            {stepsData.map((step, index) => {
              // Pour les particuliers, ne pas afficher l'étape 3 si pas de questions conditionnelles
              if (formData.clientType === "particulier" && step.number === 3) {
                const conditionalFields = getConditionalFields(formData.services);
                if (conditionalFields.length === 0) {
                  return null;
                }
              }
              
              return (
                <div key={step.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                      currentStep > step.number 
                        ? "bg-blue-900 text-white" 
                        : currentStep === step.number
                        ? "bg-blue-900 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}>
                      {currentStep > step.number ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        step.number
                      )}
                    </div>
                    <span className={`text-xs mt-2 text-center max-w-20 leading-tight ${
                      currentStep >= step.number ? "text-blue-900 font-medium" : "text-gray-500"
                    }`}>
                      {step.title}
                    </span>
                  </div>
                  
                  {index < stepsData.length - 1 && (
                    <div className={`w-12 h-0.5 mx-2 mt-0 ${
                      currentStep > step.number ? "bg-blue-900" : "bg-gray-300"
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Formulaire */}
        {shouldShowStep3() && (
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <div className="space-y-8">
              {currentStepData?.subtitle && (
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  {currentStepData.subtitle}
                </h2>
              )}
              
              <div className={currentStep === stepsData.length ? "grid grid-cols-1 sm:grid-cols-2 gap-6" : "space-y-8"}>
                {currentStepData?.fields?.map((field) => (
                  <div key={field.name} className={field.gridCols || ""}>
                    <label className="block text-lg font-medium text-gray-800 mb-4">
                      {field.label} 
                      {field.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    {field.subtitle && (
                      <p className="text-sm text-gray-600 mb-4">{field.subtitle}</p>
                    )}
                    {renderField(field)}
                  </div>
                ))}
              </div>

              {showValidationErrors && !isCurrentStepValid() && (
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg animate-pulse">
                  <p className="text-yellow-800 font-medium flex items-center">
                    ⚠️ Veuillez remplir tous les champs obligatoires (marqués d'un *) pour continuer.
                  </p>
                </div>
              )}

              {submitStatus === 'success' && (
                <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    ✅ Votre demande de devis a été envoyée avec succès ! 
                    Un conseiller spécialisé vous recontactera rapidement.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">
                    ❌ Une erreur s'est produite lors de l'envoi. 
                    Veuillez réessayer ou nous contacter directement.
                  </p>
                </div>
              )}
            </div>

            {/* Boutons de navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Précédent</span>
              </button>

              {currentStep < stepsData.length ? (
                <button
                  onClick={nextStep}
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
                >
                  <span>Suivant</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 disabled:bg-gray-400"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <span>✅ Envoyé</span>
                  ) : (
                    <span>Envoyer ma demande</span>
                  )}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}