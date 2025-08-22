"use client";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  ChevronLeft, 
  Home, 
  Building2, 
  Tractor, 
  Factory,
  Check,
  Calculator,
  FileText,
  Send,
  Thermometer,
  Shield,
  User,
  Phone
} from "lucide-react";

// Données structurées basées sur les images fournies
const stepsData = [
  { 
    number: 1, 
    title: "Le bien à rénover", 
    icon: Home,
    fields: [
      {
        name: "clientType",
        label: "Quel type de bien souhaitez-vous rénover ?",
        type: "radio-buttons",
        required: true,
        options: [
          { value: "particulier", label: "Particulier", selected: true },
          { value: "agriculteurs", label: "Agriculteurs" },
          { value: "industries", label: "Industries" },
          { value: "collectivites", label: "Collectivités" }
        ]
      },
      {
        name: "propertyType",
        label: "quel profil voulez bénéficier ?",
        type: "radio-cards",
        required: true,
        options: [
          { 
            value: "appartement", 
            label: "Appartement", 
            icon: "🏢"
          },
          { 
            value: "maison", 
            label: "Maison",
            icon: "🏠"
          }
        ]
      },
      {
        name: "ownershipStatus",
        label: "Pour ce bien vous y êtes :",
        type: "select",
        required: true,
        placeholder: "sélectionnez",
        options: [
          { value: "proprietaire", label: "Propriétaire" },
          { value: "locataire", label: "Locataire" },
          { value: "autre", label: "Autre" }
        ]
      },
      {
        name: "postalCode",
        label: "Code postal de votre bien :",
        type: "text",
        required: true,
        placeholder: "ex: 75001",
      }
    ]
  },
  { 
    number: 2, 
    title: "Caractéristiques", 
    icon: Building2,
    fields: [
      {
        name: "constructionDate",
        label: "De quand date la construction du logement à rénover ?",
        type: "select",
        required: true,
        placeholder: "sélectionnez",
        options: [
          { value: "avant-1960", label: "Avant 1960" },
          { value: "1960-1980", label: "1960-1980" },
          { value: "1980-2000", label: "1980-2000" },
          { value: "2000-2010", label: "2000-2010" },
          { value: "apres-2010", label: "Après 2010" }
        ]
      },
      {
        name: "habitableSurface",
        label: "Quelle est la surface habitable du bien ?",
        type: "select",
        required: true,
        placeholder: "sélectionnez",
        options: [
          { value: "moins-50", label: "Moins de 50 m²" },
          { value: "50-80", label: "50 à 80 m²" },
          { value: "80-120", label: "80 à 120 m²" },
          { value: "120-150", label: "120 à 150 m²" },
          { value: "plus-150", label: "Plus de 150 m²" }
        ]
      },
      {
        name: "energyDiagnostic",
        label: "Avez-vous réalisé un diagnostic de performance énergétique (DPE) de votre bien récemment ?",
        type: "radio",
        required: true,
        subtitle: "Répondez non si vous disposez d'un DPE de plus de 3 ans ou si vous avez réalisé des travaux de rénovation énergétique après avoir réalisé votre DPE.",
        options: [
          { value: "oui", label: "Oui" },
          { value: "non", label: "Non" }
        ]
      }
    ]
  },
  { 
    number: 3, 
    title: "Votre projet", 
    icon: Calculator,
    fields: [
      {
        name: "renovationMotivations",
        label: "Quelles sont vos motivations principales pour ce projet de rénovation ?",
        type: "multiselect",
        required: true,
        subtitle: "Sélectionnez entre 1 et 3 choix",
        placeholder: "sélectionnez",
        options: [
          { value: "economies", label: "Réduire mes factures d'énergie" },
          { value: "confort", label: "Améliorer le confort" },
          { value: "ecologie", label: "Agir pour l'environnement" },
          { value: "valeur", label: "Valoriser mon bien immobilier" }
        ]
      },
      {
        name: "renovationTypes",
        label: "Quels types de travaux de rénovations envisagez-vous pour ce bien ?",
        type: "checkbox-grid",
        required: true,
        options: [
          {
            value: "batterie-stockage",
            label: "Batterie de stockage",
            description: "Stockez l'énergie produite par vos panneaux solaires pour l'utiliser quand vous en avez besoin, même en l'absence de soleil."
          },
          {
            value: "chauffe-eau-solaire",
            label: "Chauffe-eau solaire",
            description: "Profitez d'une eau chaude sanitaire produite gratuitement grâce à l'énergie solaire, tout en réduisant vos factures."
          },
          {
            value: "pompe-chaleur",
            label: "Pompe à chaleur",
            description: "Chauffez ou rafraîchissez votre logement avec une technologie performante et économique, même en hiver."
          },
          {
            value: "ballon-thermodynamique",
            label: "Ballon thermodynamique",
            description: "Un système intelligent qui capte les calories de l'air pour chauffer l'eau, performant et écologique."
          },
          {
            value: "climatisation",
            label: "Climatisation",
            description: "Gardez un intérieur frais en été et confortable en hiver avec des équipements basse consommation."
          },
          {
            value: "systeme-solaire-combine",
            label: "Système solaire combiné",
            description: "Combinez production d'électricité et chauffage pour une solution énergétique complète et optimisée."
          }
        ]
      },
      {
        name: "workTimeline",
        label: "Sous combien de temps souhaiteriez vous effectuer vos travaux ?",
        type: "radio",
        required: true,
        options: [
          { value: "asap", label: "Le plus vite possible" },
          { value: "6-months", label: "Dans les 6 prochains mois" },
          { value: "later", label: "Plus tard / je ne sais pas" }
        ]
      }
    ]
  },
  { 
    number: 4, 
    title: "Votre chauffage", 
    icon: Thermometer,
    subtitle: "Chauffage",
    fields: [
      {
        name: "heatingType",
        label: "Le chauffage dans votre logement est :",
        type: "radio",
        options: [
          { value: "individuel", label: "Individuel" },
          { value: "collectif", label: "Collectif" }
        ]
      },
      {
        name: "heatingSource",
        label: "Quelle est votre source de chauffage principale :",
        type: "select",
        required: true,
        placeholder: "sélectionnez",
        options: [
          { value: "gaz", label: "Gaz naturel" },
          { value: "electrique", label: "Électricité" },
          { value: "fioul", label: "Fioul" },
          { value: "bois", label: "Bois/Granulés" },
          { value: "pompe-chaleur", label: "Pompe à chaleur" },
          { value: "autre", label: "Autre" }
        ]
      },
      {
        name: "waterHeatingType",
        label: "La production d'eau chaude est :",
        type: "radio",
        subtitle: "Production d'eau chaude sanitaire",
        options: [
          { value: "individuel", label: "Individuel" },
          { value: "collectif", label: "Collectif" }
        ]
      },
      {
        name: "waterHeatingMethod",
        label: "Comment est chauffée votre eau ?",
        type: "radio",
        required: true,
        options: [
          { value: "individuel", label: "Individuel" },
          { value: "collectif", label: "Collectif" }
        ]
      }
    ]
  },
  { 
    number: 5, 
    title: "L'isolation", 
    icon: Shield,
    subtitle: "Isolation des murs",
    fields: [
      {
        name: "buildingFloors",
        label: "Combien d'étages fait votre logement",
        type: "number",
        required: true,
        subtitle: "Veuillez saisir un nombre entre 1 et 20.",
        placeholder: "0"
      },
      {
        name: "sharedWalls",
        label: "Combien de façades mitoyennes avez-vous ?",
        type: "number",
        required: true,
        subtitle: "Veuillez saisir un nombre inférieur ou égal à 4.",
        placeholder: "0"
      },
      {
        name: "wallInsulationWork",
        label: "Des travaux d'isolation des murs ont-ils été réalisés dans les 12 dernières années ?",
        type: "radio",
        options: [
          { value: "oui", label: "Oui" },
          { value: "non", label: "Non" },
          { value: "ne-sais-pas", label: "Je ne sais pas" }
        ]
      },
      {
        name: "singleGlazingWindows",
        label: "Combien de fenêtres et porte-fenêtres en simple vitrage avez-vous dans votre logement ?",
        type: "number",
        required: true,
        subtitle: "Veuillez saisir un nombre entre 0 et 100.",
        placeholder: "0"
      }
    ]
  },
  { 
    number: 6, 
    title: "Vos aides", 
    icon: FileText,
    fields: [
      {
        name: "householdSize",
        label: "Combien de personnes composent votre foyer ?",
        type: "select",
        placeholder: "sélectionnez",
        options: [
          { value: "1", label: "1 personne" },
          { value: "2", label: "2 personnes" },
          { value: "3", label: "3 personnes" },
          { value: "4", label: "4 personnes" },
          { value: "5", label: "5 personnes" },
          { value: "6+", label: "6 personnes ou plus" }
        ]
      },
      {
        name: "fiscalIncome",
        label: "Quel est le revenu fiscal de votre foyer l'année dernière ?",
        type: "number",
        subtitle: "Veuillez remplir les autres champs avant",
        placeholder: "0"
      }
    ]
  },
  { 
    number: 7, 
    title: "Contact", 
    icon: Send,
    fields: [
      {
        name: "lastName",
        label: "Nom",
        type: "text",
        required: true,
        placeholder: "Nom",
        icon: User,
        gridCols: "sm:col-span-1"
      },
      {
        name: "firstName",
        label: "Prénom", 
        type: "text",
        required: true,
        placeholder: "Prénom",
        icon: User,
        gridCols: "sm:col-span-1"
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        placeholder: "Email",
        icon: "✉️",
        gridCols: "sm:col-span-1"
      },
      {
        name: "phone",
        label: "Téléphone",
        type: "tel",
        required: true,
        placeholder: "Numéro de téléphone",
        icon: Phone,
        gridCols: "sm:col-span-1"
      },
      {
        name: "newsletter",
        label: "Je souhaite recevoir les actualités et offres commerciales Compagnie Générale des Énergies par email (promotion, nouveaux produits...)",
        type: "checkbox",
        gridCols: "sm:col-span-2"
      },
      {
        name: "subscribe",
        label: "Je m'abonne à la newsletter Compagnie Générale des Énergies : conseils pratiques et actualités autour de la rénovation énergétique et de l'écologie en général",
        type: "checkbox",
        gridCols: "sm:col-span-2"
      }
    ]
  }
];

export default function DevisPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    clientType: "particulier" // Valeur par défaut
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showValidationErrors, setShowValidationErrors] = useState(false); // ✅ AJOUTÉ

  // Configuration EmailJS
  const EMAILJS_CONFIG = {
    serviceId: 'service_ge79rzl',
    templateId: 'template_new2egb',
    publicKey: 'wX6VSHJMbAH2gpRao'
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Masquer les erreurs dès qu'un utilisateur commence à taper/sélectionner
    if (showValidationErrors) {
      setShowValidationErrors(false);
    }
  };

  const nextStep = () => {
    // Vérifier que tous les champs requis sont remplis avant de passer à l'étape suivante
    if (!isCurrentStepValid()) {
      // Afficher les erreurs de validation
      setShowValidationErrors(true);
      return;
    }
    
    // Réinitialiser les erreurs si la validation passe
    setShowValidationErrors(false);
    
    if (currentStep < stepsData.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    // Réinitialiser les erreurs quand on revient en arrière
    setShowValidationErrors(false);
    
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    // Vérifier la validation avant la soumission
    if (!isCurrentStepValid()) {
      setShowValidationErrors(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log('📧 Envoi de l\'email via EmailJS...');

      // Préparer les données pour EmailJS - TOUTES les informations du formulaire
      const templateParams = {
        // Contact Client - variables exactes de votre template
        from_name: `${formData.firstName || ''} ${formData.lastName || ''}`.trim(),
        client_email: formData.email || '',
        client_phone: formData.phone || '',
        
        // Informations du Bien - variables exactes
        client_type: formData.clientType || '',
        property_type: formData.propertyType || '',
        ownership_status: formData.ownershipStatus || '',
        postal_code: formData.postalCode || '',
        
        // Caractéristiques - variables exactes
        construction_date: formData.constructionDate || '',
        habitable_surface: formData.habitableSurface || '',
        energy_diagnostic: formData.energyDiagnostic || '',
        
        // Projet de Rénovation - variables exactes
        renovation_motivations: Array.isArray(formData.renovationMotivations) 
          ? formData.renovationMotivations.join(', ') 
          : (formData.renovationMotivations || ''),
        
        renovation_types: Array.isArray(formData.renovationTypes)
          ? formData.renovationTypes.join(', ')
          : (formData.renovationTypes || ''),
        
        work_timeline: formData.workTimeline || '',
        
        // Chauffage - variables exactes (AJOUT de water_heating_method qui manquait)
        heating_type: formData.heatingType || '',
        heating_source: formData.heatingSource || '',
        water_heating_type: formData.waterHeatingType || '',
        water_heating_method: formData.waterHeatingMethod || '', // ✅ AJOUTÉ
        
        // Isolation - variables exactes
        building_floors: formData.buildingFloors || '',
        shared_walls: formData.sharedWalls || '',
        wall_insulation_work: formData.wallInsulationWork || '',
        single_glazing_windows: formData.singleGlazingWindows || '',
        
        // Aides - variables exactes
        household_size: formData.householdSize || '',
        fiscal_income: formData.fiscalIncome || '',
        
        // Communication - variables exactes
        newsletter: formData.newsletter ? 'Oui' : 'Non',
        subscribe: formData.subscribe ? 'Oui' : 'Non',
        
        // Informations de soumission - ✅ AJOUTÉES
        submission_date: new Date().toLocaleDateString('fr-FR'),
        submission_time: new Date().toLocaleTimeString('fr-FR')
      };

      // Envoyer l'email via EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      if (response.status === 200) {
        console.log('✅ Email envoyé avec succès via EmailJS');
        setSubmitStatus('success');
        
        // Optionnel : redirection après succès
        // window.location.href = '/merci';
        
      } else {
        throw new Error(`Erreur EmailJS: ${response.status}`);
      }
      
    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi de l\'email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentStepData = stepsData.find(step => step.number === currentStep);

  // Fonction pour vérifier si l'étape actuelle est valide (améliorée)
  const isCurrentStepValid = () => {
    const requiredFields = currentStepData?.fields?.filter(field => field.required) || [];
    
    return requiredFields.every(field => {
      const value = formData[field.name];
      
      // Vérifier selon le type de champ
      switch (field.type) {
        case 'checkbox-grid':
        case 'multiselect':
          // Pour les champs à sélection multiple, vérifier qu'au moins un élément est sélectionné
          return Array.isArray(value) && value.length > 0;
        
        case 'text':
        case 'email':
        case 'tel':
        case 'number':
          // Pour les champs texte/email/téléphone/nombre, vérifier qu'ils ne sont pas vides
          return value && value.toString().trim() !== '';
        
        case 'select':
        case 'radio':
        case 'radio-buttons':
        case 'radio-cards':
          // Pour les sélections, vérifier qu'une option est choisie
          return value && value !== '';
        
        default:
          // Par défaut, vérifier que la valeur existe
          return value !== undefined && value !== null && value !== '';
      }
    });
  };

  // Fonction pour rendre un champ
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
                className={`px-6 py-2 rounded-full border-2 transition-all ${
                  formData[field.name] === option.value
                    ? "bg-blue-900 text-white border-blue-900"
                    : "bg-white text-gray-600 border-gray-300 hover:border-blue-900"
                }`}
              >
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

      case 'checkbox-grid':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {field.options?.map((option) => (
              <div key={option.value} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id={option.value}
                    checked={formData[field.name]?.includes(option.value) || false}
                    onChange={(e) => {
                      const current = formData[field.name] || [];
                      if (e.target.checked) {
                        handleInputChange(field.name, [...current, option.value]);
                      } else {
                        handleInputChange(field.name, current.filter(item => item !== option.value));
                      }
                    }}
                    className="mt-1 h-5 w-5 text-blue-900 border-gray-300 rounded focus:ring-blue-900"
                  />
                  <div className="flex-1">
                    <label htmlFor={option.value} className="font-medium text-blue-900 cursor-pointer">
                      {option.label}
                    </label>
                    <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'multiselect':
        return (
          <div className="space-y-4">
            {/* Options sous forme de boutons checkbox */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {field.options?.map((option) => {
                const isSelected = formData[field.name]?.includes(option.value);
                const currentCount = formData[field.name]?.length || 0;
                const isDisabled = !isSelected && currentCount >= 3; // Limite à 3 choix
                
                return (
                  <button
                    key={option.value}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => {
                      const current = formData[field.name] || [];
                      if (isSelected) {
                        // Retirer l'élément
                        handleInputChange(field.name, current.filter(item => item !== option.value));
                      } else {
                        // Ajouter l'élément (si pas déjà 3 sélectionnés)
                        if (current.length < 3) {
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
            
            {/* Compteur de sélections */}
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">
                {formData[field.name]?.length || 0}/3 choix sélectionnés
              </span>
              {formData[field.name]?.length >= 3 && (
                <span className="text-blue-600 font-medium">
                  ✓ Maximum atteint
                </span>
              )}
            </div>
            
            {/* Affichage des éléments sélectionnés sous forme de tags */}
            {formData[field.name] && formData[field.name].length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">Vos choix :</p>
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

      case 'checkbox':
        return (
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData[field.name] || false}
              onChange={(e) => handleInputChange(field.name, e.target.checked)}
              className="mt-1 h-5 w-5 text-blue-900 border-gray-300 rounded focus:ring-blue-900"
            />
            <span className="text-gray-700">{field.label}</span>
          </label>
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Container type="intrinsic" className="bg-foreground text-white px-4 sm:px-6 lg:px-8 py-6">
        <Navbar />
        <div className="text-center mt-8 mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Demande de devis
          </h1>
          <p className="text-lg text-gray-200">
            Veuillez remplir ce formulaire. Un conseiller homelior vous recontactera dans les plus brefs délais.
          </p>
        </div>
      </Container>

      {/* Stepper MUI Style */}
      <Container type="extrinsic" className="py-8">
        <div className="flex justify-center mb-8 overflow-x-auto">
          <div className="flex items-center space-x-2 min-w-max px-4">
            {stepsData.map((step, index) => (
              <div key={step.number} className="flex items-center">
                {/* Step Circle */}
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
                  {/* Step Label */}
                  <span className={`text-xs mt-2 text-center max-w-20 leading-tight ${
                    currentStep >= step.number ? "text-blue-900 font-medium" : "text-gray-500"
                  }`}>
                    {step.title}
                  </span>
                </div>
                
                {/* Connector Line */}
                {index < stepsData.length - 1 && (
                  <div className={`w-12 h-0.5 mx-2 mt-0 ${
                    currentStep > step.number ? "bg-blue-900" : "bg-gray-300"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contenu dynamique des étapes */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <div className="space-y-8">
            {/* Titre de section pour certaines étapes */}
            {currentStepData?.subtitle && (
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                {currentStepData.subtitle}
              </h2>
            )}
            
            {/* Grille pour les champs contact */}
            <div className={currentStep === 7 ? "grid grid-cols-1 sm:grid-cols-2 gap-6" : "space-y-8"}>
              {currentStepData?.fields?.map((field) => {
                return (
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
                );
              })}
            </div>

            {/* Messages de validation et d'aide - SEULEMENT si showValidationErrors est true */}
            {showValidationErrors && !isCurrentStepValid() && (
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg animate-pulse">
                <p className="text-yellow-800 font-medium flex items-center">
                  ⚠️ Veuillez remplir tous les champs obligatoires (marqués d'un *) pour continuer.
                </p>
              </div>
            )}

            {/* Messages de statut */}
            {submitStatus === 'success' && (
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  ✅ Votre demande de devis a été envoyée avec succès ! 
                  Un conseiller vous recontactera rapidement.
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
            
            {currentStep === 7 && (
              <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                <p className="mb-2">
                  Les informations recueillies via ce formulaire nous permettent de vous recontacter dans le cadre de votre demande de devis et de vous proposer un accompagnement personnalisé dans votre projet de rénovation énergétique.
                </p>
                <p>
                  Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour en savoir plus, consultez notre{" "}
                  <span className="underline cursor-pointer">politique de confidentialité</span>.
                </p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <Button
              onClick={prevStep}
              disabled={currentStep === 1}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Précédent</span>
            </Button>

            {currentStep < stepsData.length ? (
              <Button
                onClick={nextStep}
                className="flex items-center space-x-2 bg-blue-900 hover:bg-blue-800"
              >
                <span>Suivant</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting || submitStatus === 'success'}
                className="flex items-center space-x-2 bg-blue-900 hover:bg-blue-800 disabled:bg-gray-400"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <span>✅ Envoyé</span>
                ) : (
                  <span>Envoyer le devis</span>
                )}
              </Button>
            )}
          </div>
        </div>
      </Container>

      {/* Footer */}
      <Container
        type="intrinsic"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(/assets/footer.svg)`,
        }}
      >
        <Footer />
      </Container>
    </div>
  );
}