"use client"

import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import { footerData } from "@/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  {
    name: "Valoriser vos espaces inutilisés",
    id: 1,
    targetId: "section-1"
  },
  {
    name: "Un revenu complémentaire et stable",
    id: 2,
    targetId: "section-2"
  },
  {
    name: "Un engagement pour l'environnement",
    id: 3,
    targetId: "section-3"
  },
  {
    name: "Conclusion",
    id: 4,
    targetId: "section-4"
  },
];

export default function BlogPage() {
  const [activeSection, setActiveSection] = useState("");

  const defaultArticles = [
    {
      id: 1,
      title: "Un investissement d'avenir pour les agriculteurs",
      description:
        "Découvrez comment les exploitations agricoles tirent profit du photovoltaïque pour réduire leurs coûts et diversifier leurs revenus.",
      image: "/assets/pub-c.svg",
      imageAlt: "Vue aérienne d'une ferme solaire",
    },
    {
      id: 2,
      title: "5 idées pour valoriser vos bâtiments agricoles",
      description:
        "Toits, hangars, serres... apprenez à transformer vos surfaces inutilisées en véritables sources d'énergie.",
      image: "/assets/pub.svg",
      imageAlt: "Bâtiments agricoles avec panneaux solaires",
    },
    {
      id: 3,
      title: "CGE : du sur mesure pour vos projets solaires",
      description:
        "De l'étude technique à l'installation, découvrez comment nous simplifions chaque étape de votre projet.",
      image: "/assets/pub-b.svg",
      imageAlt: "Consultation projet solaire CGE",
    },
  ];

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(targetId);
    }
  };

  // Optionnel : Détection de la section active pendant le scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => document.getElementById(link.targetId));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(links[i].targetId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="">
      <Container
        type="intrinsic"
        className="h-130 pt-6"
        style={{
          backgroundImage: `url(/assets/blog-hero.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
      </Container>
      <Container type="intrinsic" className="flex flex-col md:flex-row">
        <div className="flex-1 py-12 md:sticky md:top-20 md:h-fit">
          <h4 className="font-semibold mb-4 text-gray-700">Table des matières</h4>
          <ul className="space-y-2">
            {links.map((link) => (
              <li 
                key={link.id}
                onClick={() => scrollToSection(link.targetId)}
                className={`
                  cursor-pointer 
                  transition-all 
                  duration-200 
                  p-3 
                  rounded-lg 
                  hover:bg-blue-50 
                  hover:text-blue-600
                  border-l-4
                  ${activeSection === link.targetId 
                    ? 'bg-blue-50 text-blue-600 border-blue-500 font-semibold' 
                    : 'border-transparent hover:border-blue-300'
                  }
                `}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-4 space-y-4 md:p-12">
          <h3 className="heading-4 md:heading-3 font-bold mb-4">
            L'énergie solaire : un investissement d'avenir pour les agriculteurs
          </h3>
          <h6>
            Les prix de l'électricité ne cessent d'augmenter et les
            exploitations agricoles sont particulièrement touchées par cette
            hausse des coûts. Dans ce contexte, produire sa propre énergie
            devient une stratégie clé pour protéger la rentabilité de son
            activité. L'énergie solaire, grâce à sa disponibilité et à ses
            faibles coûts de maintenance, se présente comme une solution idéale.
          </h6>
          <div className="space-y-16">
            <div id="section-1" className="space-y-24 my-8 scroll-mt-20">
              <h5 className="font-bold">Valoriser vos espaces inutilisés</h5>
              <h6>
                Les toits de hangars, les serres ou encore les terrains non
                cultivés peuvent accueillir des installations photovoltaïques.
                Cela permet de transformer des surfaces inexploitées en source
                de revenus, tout en contribuant à l'indépendance énergétique de
                l'exploitation.
              </h6>
              <img
                src="/assets/cge-blogs.png"
                className="w-full h-100 md:h-150 rounded-3xl"
                alt="Installation photovoltaïque"
              />
            </div>
            <div id="section-2" className="space-y-24 my-8 scroll-mt-20">
              <h5 className="font-bold">Un revenu complémentaire et stable</h5>
              <h6>
                En installant des panneaux solaires, vous pouvez utiliser
                l'électricité produite pour vos besoins quotidiens et vendre le
                surplus à EDF OA (Obligation d'Achat). Ce revenu complémentaire
                est garanti par contrat sur plusieurs années, ce qui assure une
                stabilité financière appréciable.
              </h6>
            </div>
            <div id="section-3" className="space-y-24 my-8 scroll-mt-20">
              <h5 className="font-bold">Un engagement pour l'environnement</h5>
              <h6>
                Opter pour le solaire, c'est réduire votre empreinte carbone
                et participer activement à la transition énergétique. En
                produisant une énergie propre et renouvelable, vous contribuez
                à préserver les ressources naturelles et à lutter contre le
                réchauffement climatique.
              </h6>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <img src="/assets/cgelogo.svg" className="rounded-3xl flex-1" alt="Logo CGE" />
              <div className="flex-1 space-y-24 flex flex-col">
                <h5 className="font-bold">Pourquoi choisir CGE ?</h5>
                <h6>
                  Avec notre expertise et notre accompagnement personnalisé,
                  nous vous guidons à chaque étape de votre projet solaire.
                  De l'étude de faisabilité à la mise en service, nous
                  garantissons une installation optimale et durable.
                </h6>
              </div>
            </div>
            <div id="section-4" className="space-y-24 flex flex-col scroll-mt-20">
              <h5 className="font-bold">Conclusion</h5>
              <h6>
                Passer à l'énergie solaire, c'est sécuriser vos charges,
                diversifier vos revenus et valoriser votre exploitation. C'est
                aussi faire un choix stratégique qui bénéficie à la fois à votre
                activité, à l'environnement et aux générations futures.
              </h6>
            </div>
          </div>
        </div>
      </Container>
      <Container type="intrinsic" className="bg-slate-900">
        <footer className="text-white relative overflow-hidden">
          {/* Background overlay with solar panel pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[url('/solar-panels-field.png')] bg-cover bg-center"></div>
          </div>

          <div className="relative z-10 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-bold text-white">
                  Continuez votre lecture
                </h2>
                <div className="flex space-x-2">
                  <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {defaultArticles.map((article) => (
                  <div key={article.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl mb-6">
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mb-12">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                    <div className="text-slate-900 font-bold text-xl">CGE</div>
                  </div>
                  <div className="text-white">
                    <div className="text-xl font-bold">Compagnie</div>
                    <div className="text-xl font-bold">Générale des</div>
                    <div className="text-xl font-bold">Énergies</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center space-y-4 flex-col">
                <ul className="hidden lg:flex items-center space-x-8 font-medium">
                  {footerData.links.map((data) => (
                    <li key={data.id}>
                      <Link
                        href={data.href}
                        className="hover:text-gray-400 text-white transition-colors"
                      >
                        {data.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="flex gap-6">
                  {footerData.socials.map((data, i) => (
                    <li key={i}>
                      <Link
                        key={data.name}
                        target="_blank"
                        href={data.href}
                        className="bg-[#808080]/30 transition-all hover:bg-foreground w-12 h-12 flex items-center justify-center rounded-full"
                      >
                        <Image
                          src={data.image || "/placeholder.svg"}
                          width={24}
                          height={24}
                          alt={data.name}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="text-center text-slate-300 text-sm">
                  © 2025 Compagnie Générale des Énergies. Tous droits réservés.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
}