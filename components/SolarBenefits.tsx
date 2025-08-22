import { Button } from "@/components/ui/button";

interface Benefit {
  title: string;
  description: string;
}

interface SolarBenefitsProps {
  title?: string;
  subtitle?: string;
  benefits?: Benefit[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtons?: {
    primary: string;
    secondary: string;
  };
  backgroundImage?: string;
}

const defaultBenefits: Benefit[] = [
  {
    title: "Revenus complémentaires",
    description:
      "La possibilité de générer des revenus supplémentaires en louant les terres agricoles pour l'installation solaire.",
  },
  {
    title: "Rénovation couverture",
    description:
      "L'installation de panneaux photovoltaïques permet une utilisation efficace de ces terres, qui autrement pourraient non utilisées.",
  },
  {
    title: "Contribution à l'énergie verte",
    description:
      "Vous pouvez contribuer à la durabilité environnementale en favorisant la production d'énergie verte à partir du soleil.",
  },
];

export default function SolarBenefits({
  title = "Pourquoi l'énergie solaire est un choix gagnant pour votre exploitation agricole",
  subtitle = "Une énergie durable qui réduit vos coûts, génère des revenus et renforce votre autonomie.",
  benefits = defaultBenefits,
  ctaTitle = "Passez dès aujourd'hui à l'énergie solaire avec CGE",
  ctaDescription = "Faites le premier pas vers des économies durables et une production d'énergie respectueuse de l'environnement. Notre équipe vous accompagne de l'étude à la mise en service.",
  ctaButtons = {
    primary: "Prendre rendez-vous",
    secondary: "Devis gratuit",
  },
  backgroundImage = "/assets/solar.svg",
}: SolarBenefitsProps) {
  return (
    <section className="py-16 px-4">
      {/* Header Section */}
      <div className="mb-16 flex">
        <h2 className="flex-1 text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {title.split("choix gagnant").map((part, index) => (
            <span key={index}>
              {part}
              {index === 0 && (
                <span className="text-green-600">choix gagnant</span>
              )}
            </span>
          ))}
        </h2>
        <p className="flex-1 text-lg text-gray-600">{subtitle}</p>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {benefits.map((benefit, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              {benefit.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div
        className="rounded-3xl py-25 flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center text-white px-6 max-w-3/4">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {ctaTitle}
          </h3>
          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
            {ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300"
            >
              {ctaButtons.secondary}
            </Button>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300"
            >
              {ctaButtons.primary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
