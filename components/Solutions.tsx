"use client";

import Image from "next/image";

interface Solution {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface SolutionsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  solutions: Solution[];
  type: string;
}

export default function Solutions({
  title = "Nos solutions adaptées",
  subtitle = "à chaque exploitation",
  description = "De l'autoconsommation à la revente d'énergie, un systèmes photovoltaïques pensés pour optimiser vos ressources et soutenir votre activité agricole.",
  solutions,
  type,
}: SolutionsProps) {
  return (
    <section className="py-30">
      {/* Header */}
      <div className="mb-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="lg:max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {title}
              <br />
              <span className="text-[#0A9438] italic">{subtitle}</span>
            </h2>
          </div>
          <div className="lg:max-w-md">
            <p className="text-slate-600 text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Solutions */}
      <div className="space-y-24">
        {solutions.map((solution, index) => (
          <div
            key={solution.id}
            className={`flex flex-col justify-end ${
              index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-4`}
          >
            {/* Image */}
            <div className="flex-2">
              <div className="relative aspect-[2] rounded-4xl overflow-hidden shadow-lg">
                <Image
                  src={solution.image}
                  alt={solution.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex-col bg-white rounded-4xl flex justify-end px-6 py-13 space-y-8">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                {solution.title}
              </h3>
              <p className="text-[#3B4658] text-lg leading-relaxed">
                {solution.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
