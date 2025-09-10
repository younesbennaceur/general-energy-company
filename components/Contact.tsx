"use client";


import { Phone, Mail, MapPin, Building2 } from "lucide-react";
import FormContact from "./layout/FormContact";

export default function Contact() {
  return (
    <section className="py-16 mt-30">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="font-bold text-foreground mb-6 leading-tight">
              Une question ? Un projet ?<br />
              Parlons-en !
            </h3>
            <h6 className="text-[#010E26] mb-4">
              Chez CGE, nous restons disponibles pour répondre à toutes vos
              demandes.
            </h6>
            <h6 className="text-[#010E26]">
              Que ce soit pour une installation, un devis, une collaboration ou
              simplement une information, n'hésitez pas à nous contacter.
            </h6>
          </div>

          <div className="space-y-6">
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
                 contact@cgenergies.com
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
                  3 Avenue du Maréchal Juin 95500 Gonesse
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-600 font-medium text-sm">Siren</p>
                  <p className="text-lg font-semibold text-[#010E26]">
                    908 718 091
                  </p>
                </div>
              </div>
          </div>
        </div>

        <FormContact />
      </div>
    </section>
  );
}
