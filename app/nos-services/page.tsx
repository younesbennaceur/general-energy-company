"use client"

import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    id: 1,
    title: "Batterie de stockage",
    description: "Stockez l'énergie produite par vos panneaux solaires pour l'utiliser quand vous en avez besoin. Optimisez votre indépendance et votre efficacité énergétique.",
    image: "/assets/1.png",
    imageAlt: "Batterie de stockage d'énergie solaire"
  },
  {
    id: 2,
    title: "Chauffe-eau solaire",
    description: "Profitez d'une eau chaude sanitaire produite gratuitement grâce à l'énergie solaire, tout en réduisant votre facture.",
    image: "/assets/2.png",
    imageAlt: "Installation de chauffe-eau solaire"
  },
  {
    id: 3,
    title: "Pompe à chaleur",
    description: "Chauffez ou rafraîchissez votre logement avec une technologie performante et économe en énergie, idéale en hiver comme en été.",
    image: "/assets/3.jpeg",
    imageAlt: "Pompe à chaleur moderne"
  },
  {
    id: 4,
    title: "Climatisation",
    description: "Gardez un intérieur frais en été et confortable en hiver avec des équipements basse consommation.",
    image: "/assets/1.jpg",
    imageAlt: "Système de climatisation"
  },
  {
    id: 5,
    title: "Système solaire combiné",
    description: "Combinez production d'électricité et chauffage pour une solution énergétique complète et optimisée.",
    image: "/assets/5.jpg",
    imageAlt: "Installation solaire combinée"
  },
  {
    id: 6,
    title: "Ballon thermodynamique",
    description: "Combinez production d'électricité et chauffage pour une solution énergétique complète et optimisée.",
    image: "/assets/6.jpg",
    imageAlt: "Ballon thermodynamique"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec Navbar */}
      <Container type="intrinsic" className="bg-foreground text-white px-4 sm:px-6 lg:px-8 py-6">
        <Navbar />
      </Container>

      {/* Hero Section - Responsive */}
      <Container type="extrinsic" className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6">
        <div className="relative mb-6 sm:mb-8">
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
                Nos Solutions
                <br className="hidden sm:block" />
                <span className="block sm:inline"> pour un confort durable</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 sm:mb-8 leading-relaxed max-w-3xl">
                Découvrez notre gamme complète d'équipements pensés 
                pour améliorer votre quotidien tout en optimisant votre 
                consommation énergétique.
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

        {/* Solutions Grid - Responsive */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-6 sm:gap-8 items-stretch`}
            >
              {/* Image Container */}
              <div className="w-full lg:flex-[2] order-1">
                <div className="relative aspect-[16/10] sm:aspect-[2/1] lg:aspect-[2] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={solution.image}
                    alt={solution.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 60vw"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:flex-1 bg-white rounded-2xl sm:rounded-3xl flex flex-col justify-center p-6 sm:p-8 lg:p-12 space-y-4 sm:space-y-6 shadow-lg order-2">
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-900 leading-tight">
                  {solution.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {solution.description}
                </p>

                {/* Badges Section - Responsive */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 pt-2">
                  {/* Badge MaPrimeRénov' */}
                  <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-3 text-center sm:text-left">
                    <Image
                      src="/assets/ass.png"
                      width={60}
                      height={60}
                      alt="aide-badge"
                     
                    />     
                    <h5 className="text-xs sm:text-sm text-gray-600">Jusqu'à</h5>
                    <h5 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800">50 000€</h5>
                  </div>

                  {/* Badge Prime CEE */}
                  <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-3 text-center sm:text-left">
                    <Image
                      src="/assets/cee.png"
                      width={60}
                      height={60}
                      alt="cee-badge"
                      
                    />  
                    <h5 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800">Prime CEE</h5>   
                    <h5 className="text-xs sm:text-sm text-gray-600 max-w-full sm:max-w-[200px] lg:w-64">
                      Prime calculée en amont, sur la base des économies d'énergie estimées
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Footer */}
      <Container
        type="intrinsic"
        className="px-4 sm:px-6"
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