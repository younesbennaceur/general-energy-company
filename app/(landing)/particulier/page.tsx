import Container from "@/components/layout/Container";
import Slider from "@/components/Slider";
import Solutions from "@/components/Solutions";
import { Button } from "@/components/ui/button";
import { projectStepsSlides } from "@/data";
import Image from "next/image";

export default function Particulier() {
  return (
    <>
      <Container type="intrinsic">
        <section className="py-16">
          {/* Header Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                Un <span className="text-green-600">atout durable</span> pour
                <br />
                votre maison
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-slate-700 leading-relaxed">
                Une solution qui optimise votre consommation, valorise votre
                bien et vous rend indépendant face aux hausses de prix de
                l'énergie.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">
                Calculez votre rendement photovoltaïque
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Vous devez pour cela tenir compte de vos conditions
                d'ensoleillement, à savoir : inclinaison, orientation, région et
                ombrage. Pour cela, utilisez notre simulateur solaire.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">
                Bénéficiez d'aides pour bien réussir votre projet
              </h3>
              <p className="text-slate-600 leading-relaxed">
                MaPrimeRénov' est une aide à la rénovation énergétique proposée
                par FranceRénov', calculée en fonction de vos revenus et du gain
                écologique des travaux.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">
                Optez pour une puissance ou un nombre de panneaux adapté
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Les tarifs étant dégressifs, le retour sur investissement est
                d'autant plus rapide que la puissance installée est importante.
              </p>
            </div>
          </div>
        </section>
      </Container>
      <Container
        type="intrinsic"
        style={{
          backgroundImage: `url(/assets/gradbg.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Slider
          title="Votre projet solaire, étape par étape"
          steps={projectStepsSlides}
        />
      </Container>
      <Container type="intrinsic">
        <section className="py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                L'avantage qui fait la différence :{" "}
                <span className="text-green-600">vos économies d'énergie</span>
              </h2>

              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Diminuez vos dépenses en électricité en profitant de nos
                  solutions photovoltaïques sur mesure.
                </p>

                <p>
                  En produisant votre propre énergie, vous réduisez votre
                  dépendance au réseau et maîtrisez durablement votre budget
                  énergétique.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <Image
                src="/assets/garden.svg"
                alt="Maison avec panneaux solaires sur le toit"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl "
                priority
              />
            </div>
          </div>
        </section>
      </Container>

      <div className="bg-foreground rounded-3xl py-25 flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-3/4">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Passez dès aujourd’hui à l’énergie solaire avec CGE
          </h3>
          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
            Faites le premier pas vers des économies durables et une production
            d’énergie respectueuse de l’environnement. Notre équipe vous
            accompagne de l’étude à la mise en service.{" "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300"
            >
              {"Devis gratuit"}
            </Button>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300"
            >
              {"Prendre rendez-vous"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
