"use client";
import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import FormContact from "@/components/layout/FormContact";
import Navbar from "@/components/layout/Navbar";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section>
      <Container
        type="intrinsic"
        className="bg-foreground text-white px-4 sm:px-8 pt-8 pb-16 space-y-8"
      >
        <Navbar />
        <div className="flex">
          <div className="space-y-4 flex-1">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              Une question ? Un project ? Parlons-en !
            </h3>
            <p className="text-sm sm:text-base lg:text-lg opacity-90">
              Obtenir des informations, discuter d'un projet ou demander un
              devis, notre équipe est là pour vous accompagner.
            </p>
          </div>
          <div className="hidden lg:block flex-1" />
        </div>
      </Container>
      
      <Container type="extrinsic">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 lg:py-12">
          {/* Mobile: Form first, then contact info */}
          <div className="lg:hidden space-y-8">
            {/* Form on mobile */}
            <div>
              <FormContact />
            </div>
            
            {/* Contact info on mobile */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-[#010E26] mb-4">
                Nous contacter
              </h4>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-600 font-medium text-sm">Téléphone</p>
                  <p className="text-lg font-semibold text-[#010E26]">
                    +33 123 45 67 89
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-600 font-medium text-sm">Email</p>
                  <p className="text-lg font-semibold text-[#010E26] break-all">
                    contact@cge-solar.fr
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-600 font-medium text-sm">Adresse</p>
                  <p className="text-lg font-semibold text-[#010E26]">
                    12 Rue de l'Énergie, 75000 Paris, France
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Original layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Info */}
            <div className="space-y-6 mt-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Téléphone</p>
                  <p className="text-xl font-semibold text-[#010E26]">
                    +33 123 45 67 89
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Email</p>
                  <p className="text-xl font-semibold text-[#010E26]">
                    contact@cge-solar.fr
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Adresse</p>
                  <p className="text-xl font-semibold text-[#010E26]">
                    12 Rue de l'Énergie, 75000 Paris, France
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="relative lg:-top-24">
              <FormContact />
            </div>
          </div>
        </div>
      </Container>
      
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
    </section>
  );
}