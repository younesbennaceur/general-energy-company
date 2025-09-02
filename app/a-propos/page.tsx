"use client"

import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Users, Award, Zap, Shield, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import Cge from "@/components/Cge";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec Navbar */}
      <Container type="intrinsic" className="bg-foreground text-white px-4 sm:px-6  py-6">
        <Navbar />
      </Container>

      {/* Hero Section */}
      <Container type="extrinsic" className=" sm:py-8  px-4 sm:px-6">
        <div className="relative ">
          <div 
            className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex items-center"
            style={{
              backgroundImage: `url(/assets/hero.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            {/* Contenu */}
            <div className="relative z-10 max-w-4xl w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                Rénover, économiser, tout commence chez vous
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 sm:mb-8 leading-relaxed max-w-3xl">
                Découvrez des solutions sur mesure pour un logement plus éco, plus confortable et plus doux pour la planète !
              </p>
              <Button 
                asChild 
                className="bg-white text-blue-900 hover:bg-gray-100 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-medium rounded-lg w-full sm:w-auto"
              >
                <Link href="/devis">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Section Mission - Responsive Layout */}
      <Container type="intrinsic" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-center lg:text-left">
              Nous sommes convaincus que la rénovation énergétique est la clé pour relever les trois grands défis du logement : renforcer le pouvoir d'achat, améliorer le confort et réduire l'impact environnemental. C'est pourquoi nous œuvrons pour rendre possible et accessible à tous la révolution énergétique
            </h2>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <Image
              src="/assets/rowpng.png"
              width={4000}
              height={4000}
              alt="about-us"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </Container>

      {/* Section CGE */}
      <Container type="extrinsic" className="py-8 sm:py-10 px-4 sm:px-6">
        <Cge />
      </Container>

      {/* Section Impact Environnemental - Responsive Grid */}
      <Container type="extrinsic" className="py-12 sm:py-16 lg:py-20 bg-gray-50 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Texte */}
          <div className="flex items-center order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center lg:text-left">
              Des économies pour vous, une contribution positive pour la planète
            </h2>
          </div>

          {/* Statistiques - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full order-1 lg:order-2">
            {/* Chantiers réalisés - Full width sur mobile, 2 colonnes sur desktop */}
            <div 
              className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 min-h-[150px] sm:min-h-[180px] flex flex-col justify-center overflow-hidden col-span-1 sm:col-span-2"
              style={{
                backgroundImage: `url(/assets/pub-c.svg)`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-2xl sm:rounded-3xl"></div>
              <div className="relative z-10 text-center sm:text-left">
                <p className="text-white text-base sm:text-lg mb-2">Chantiers réalisés</p>
                <p className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">75 351</p>
              </div>
            </div>

            {/* Économie de CO2 */}
            <div 
              className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 min-h-[150px] sm:min-h-[180px] flex flex-col justify-center overflow-hidden"
              style={{
                backgroundImage: `url(/assets/cge-blogs.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-green-900/70 rounded-2xl sm:rounded-3xl"></div>
              <div className="relative z-10 text-center sm:text-left">
                <p className="text-white text-sm sm:text-base lg:text-lg mb-2">Économie de CO2</p>
                <p className="text-white text-2xl sm:text-3xl font-bold">405 M de kg</p>
              </div>
            </div>

            {/* Mètres carrés rénovés */}
            <div className="bg-blue-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 min-h-[150px] sm:min-h-[180px] flex flex-col justify-center">
              <p className="text-blue-200 text-sm sm:text-base lg:text-lg mb-2 text-center sm:text-left">Nombre de mètres carrés rénovés</p>
              <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center sm:text-left">75 351</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Section Aides - Responsive Layout */}
      <Container type="extrinsic" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Aides - Grid responsive */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="flex items-center justify-center sm:justify-start space-x-4 bg-white p-4 sm:p-6 rounded-xl shadow-lg">
              <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-3 text-center sm:text-left">
                <Image
                  src="/assets/ass.png"
                  width={60}
                  height={60}
                  alt="cee-badge"
                  className="sm:w-30 sm:h-15"
                />     
                <h5 className="text-xs sm:text-sm">Jusqu'à</h5>
                <h5 className="text-base sm:text-lg font-bold">50 000€</h5>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
              <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-3 text-center sm:text-left">
                <Image
                  src="/assets/cee.png"
                  width={40}
                  height={40}
                  alt="cee-badge"
                  className="sm:w-30 sm:h-15"
                />  
                <h5 className="text-base sm:text-lg font-bold">Prime CEE</h5>   
                <h5 className="text-xs sm:text-sm max-w-full sm:w-64">
                  Prime calculée en amont, sur la base des économies d'énergie estimées
                </h5>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start space-x-4 bg-white p-4 sm:p-6 rounded-xl shadow-lg">
              <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-3 text-center sm:text-left">
                <Image
                  src="/assets/ree.png"
                  width={100}
                  height={100}
                  alt="cee-badge"
                  className="sm:w-30 sm:h-15"
                />     
                <h5 className="text-xs sm:text-sm">Jusqu'à</h5>
                <h5 className="text-base sm:text-lg font-bold">50 000€</h5>
              </div>
            </div>
          </div>

          {/* Contenu texte */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
              Toutes les aides pour votre rénovation, sans le casse-tête administratif
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center lg:text-left">
              Obtenir les aides pour la rénovation énergétique peut vite devenir un parcours du combattant. 
              Avec CGE, fini les démarches compliquées : nous nous occupons de tout et déduisons des aides 
              directement de votre devis. Plus d'informations sur les aides.
            </p>
          </div>
        </div>
      </Container>

      {/* Slider des partenaires - Responsive */}
      <Container type="extrinsic" className="py-6 sm:py-8 bg-white px-4 sm:px-6">
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-8 sm:space-x-12 lg:space-x-16 items-center">
            {/* Premier groupe d'images */}
            <div className="flex items-center space-x-2 sm:space-x-4 text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 whitespace-nowrap">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-lg"></div>
              <span>Marketly</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 text-lg sm:text-xl lg:text-2xl font-bold text-purple-600 whitespace-nowrap">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-lg transform rotate-45"></div>
              <span>Natural</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 text-lg sm:text-xl lg:text-2xl font-bold text-blue-700 whitespace-nowrap">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-700 rounded-lg"></div>
              <span>Realtor</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 text-lg sm:text-xl lg:text-2xl font-bold text-orange-600 whitespace-nowrap">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-lg"></div>
              <span>Restaurant</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 whitespace-nowrap">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm">
                F
              </div>
              <span>Financely</span>
            </div>
            
            {/* Duplication pour l'effet continu */}
            <div className="flex items-center space-x-2 sm:space-x-4 text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 whitespace-nowrap">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-lg"></div>
              <span>Marketly</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 text-lg sm:text-xl lg:text-2xl font-bold text-purple-600 whitespace-nowrap">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-lg transform rotate-45"></div>
              <span>Natural</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 text-lg sm:text-xl lg:text-2xl font-bold text-blue-700 whitespace-nowrap">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-700 rounded-lg"></div>
              <span>Realtor</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 text-lg sm:text-xl lg:text-2xl font-bold text-orange-600 whitespace-nowrap">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-lg"></div>
              <span>Restaurant</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 whitespace-nowrap">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm">
                F
              </div>
              <span>Financely</span>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}</style>
      </Container>

      {/* Section FAQ - Responsive */}
      <Container type="extrinsic" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">
              Questions fréquentes
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Trouvez les réponses aux questions les plus courantes sur nos solutions énergétiques
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <details className="bg-white rounded-xl shadow-lg p-4 sm:p-6 group">
              <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-800 hover:text-blue-900">
                <span className="pr-4">Quelles sont les aides disponibles pour l'installation de panneaux solaires ?</span>
                <span className="text-xl sm:text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Vous pouvez bénéficier de plusieurs aides : la prime à l'autoconsommation, l'obligation d'achat EDF, 
                  MaPrimeRénov', la TVA réduite à 10%, et les aides locales. Le montant peut atteindre jusqu'à 50 000€ 
                  selon votre situation.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-lg p-4 sm:p-6 group">
              <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-800 hover:text-blue-900">
                <span className="pr-4">Combien de temps dure l'installation d'une pompe à chaleur ?</span>
                <span className="text-xl sm:text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  L'installation d'une pompe à chaleur prend généralement 1 à 2 jours selon la complexité du projet. 
                  Nos techniciens certifiés RGE s'occupent de tout : dépose de l'ancien système, installation, 
                  mise en service et formation à l'utilisation.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-lg p-4 sm:p-6 group">
              <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-800 hover:text-blue-900">
                <span className="pr-4">Quelle est la durée de vie des équipements installés ?</span>
                <span className="text-xl sm:text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Nos équipements ont une durée de vie exceptionnelle : 25 ans pour les panneaux solaires, 
                  15-20 ans pour les pompes à chaleur, 15-20 ans pour les chauffe-eau solaires. 
                  Tous nos équipements sont garantis et nous assurons la maintenance.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-lg p-4 sm:p-6 group">
              <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-800 hover:text-blue-900">
                <span className="pr-4">Est-ce que mes équipements fonctionnent en hiver ?</span>
                <span className="text-xl sm:text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Oui, tous nos équipements sont conçus pour fonctionner en hiver. Les panneaux solaires produisent 
                  même par temps nuageux, les pompes à chaleur fonctionnent jusqu'à -15°C, et nos systèmes sont 
                  dimensionnés pour assurer votre confort toute l'année.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-lg p-4 sm:p-6 group">
              <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-800 hover:text-blue-900">
                <span className="pr-4">Puis-je revendre l'électricité produite par mes panneaux ?</span>
                <span className="text-xl sm:text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Absolument ! Vous pouvez revendre votre surplus d'électricité à EDF OA (Obligation d'Achat) 
                  à un tarif garanti pendant 20 ans. C'est un revenu complémentaire stable qui améliore 
                  la rentabilité de votre installation.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-lg p-4 sm:p-6 group">
              <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-800 hover:text-blue-900">
                <span className="pr-4">Combien d'économies puis-je réaliser sur ma facture ?</span>
                <span className="text-xl sm:text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Les économies varient selon votre situation, mais nous constatons généralement : 50-70% d'économies 
                  avec une installation photovoltaïque, 60-75% avec une pompe à chaleur, 50-80% avec un chauffe-eau solaire. 
                  Demandez votre étude personnalisée pour une estimation précise.
                </p>
              </div>
            </details>
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
        className="px-4 sm:px-6"
      >
        <Footer />
      </Container>
    </div>
  );
}