"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
export default function StorageBatteryModal({ isOpen, setIsOpen }: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        showCloseButton={false}
        className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-white"
      >
        {/* Header Section */}
        <div className="relative">
          <img
            src="/assets/modal1.svg"
            alt="Système de batterie de stockage"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent">
            <div className="flex justify-between items-start p-6 h-full">
              <div className="text-white">
                <h1 className="text-4xl font-bold mb-2">
                  Batterie de stockage
                </h1>
              </div>
              <div className="flex gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  Demander un devis
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="space-y-8">
            {/* What is a storage battery */}
            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Qu'est-ce qu'une batterie de stockage ?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Une batterie de stockage solaire est un dispositif qui permet de
                stocker l'énergie excédentaire produite par vos panneaux
                photovoltaïques pour une utilisation ultérieure. Elle fonctionne
                comme une pile, en emmagasinant l'énergie produite lorsque le
                soleil brille et en la libérant lorsque vous en avez besoin, par
                exemple pendant la nuit ou par temps nuageux.
              </p>
            </section>

            {/* How it works */}
            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Fonctionnement d'une batterie de stockage
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-1">
                      Production d'énergie:
                    </h6>
                    <p className="text-gray-700">
                      les panneaux photovoltaïques captent l'énergie solaire et
                      la convertissent en électricité.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-1">
                      Stockage d'énergie:
                    </h6>
                    <p className="text-gray-700">
                      l'énergie non utilisée immédiatement est stockée dans la
                      batterie.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-1">
                      Utilisation ultérieure:
                    </h6>
                    <p className="text-gray-700">
                      lorsque vos besoins en énergie dépassent la production
                      solaire, la batterie fournit l'énergie nécessaire,
                      réduisant ainsi votre dépendance au réseau électrique.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Product benefits */}
            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Les + du produit
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-1">
                      Autoconsommation maximale :
                    </h6>
                    <p className="text-gray-700">
                      une batterie de stockage solaire peut augmenter votre taux
                      d'autoconsommation jusqu'à 95%. Vous utilisez ainsi
                      presque exclusivement l'énergie que vous produisez.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-1">
                      Réduction des factures d'électricité :
                    </h6>
                    <p className="text-gray-700">
                      en limitant votre recours au réseau électrique, vous
                      réduisez considérablement le montant de vos factures et
                      vous vous protégez contre les potentielles hausses des
                      tarifs d'électricité.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-1">
                      Impact environnemental positif :
                    </h6>
                    <p className="text-gray-700">
                      en stockant et utilisant votre propre énergie solaire,
                      vous diminuez vos émissions de CO2 par trois, contribuant
                      ainsi à la protection de la planète.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-1">
                      Autonomie énergétique :
                    </h6>
                    <p className="text-gray-700">
                      avec une batterie de stockage, vous devenez plus autonome
                      en énergie, réduisant votre dépendance aux fournisseurs
                      d'énergie traditionnels et aux fluctuations du marché.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-900/80 flex flex-col items-center justify-center h-full text-center text-white p-6">
          <h2 className="text-3xl font-bold mb-2">Passez dès aujourd'hui à</h2>
          <h2 className="text-3xl font-bold mb-4">
            l'énergie solaire avec CGE
          </h2>
          <p className="text-lg mb-6 max-w-2xl">
            Faites le premier pas vers des économies durables et une production
            d'énergie respectueuse de l'environnement. Notre équipe vous
            accompagne de l'étude à la mise en service.
          </p>
          <div className="flex gap-4">
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg">
              Devis gratuit
            </Button>
            <Button className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg">
              Prendre contact
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
