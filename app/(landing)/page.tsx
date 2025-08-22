"use client";
import Container from "@/components/layout/Container";
import StorageBatteryModal from "@/components/StorageBatteryModal";
import { Button } from "@/components/ui/button";
import { landingData } from "@/data";
import { CircleCheck, MoveUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LandingPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <StorageBatteryModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Container type="extrinsic" className="bg-background mb-16">
        <div className="flex flex-col">
          <div className="flex space-y-4 md:space-y-0 flex-col md:flex-row justify-between md:items-center mb-14">
            <div className="space-y-4 flex-1">
              <h3 className="leading-16 font-bold">
                Nos Solutions
                <br />
                pour un confort durable
              </h3>
              <h6>
                Découvrez notre gamme complète d’équipements pensés pour
                améliorer votre quotidien tout en optimisant votre consommation
                énergétique.
              </h6>
            </div>
            <div className="flex-1 flex md:justify-end">
              <Button onClick={() => router.push("/devis")}>Demander un devis</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
            {landingData.solutionSolaires.map((data) => (
              <div className="bg-white rounded-3xl py-12 px-9" key={data.id}>
                <div className="space-y-4 mb-6">
                  <h5 className="font-bold">{data.name}</h5>
                  <p>{data.description}</p>
                </div>
                <a className="underline">
                  En savoir plus
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Container
        type="intrinsic"
        className="bg-foreground"
        style={{
          padding: "100px 0",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex items-center justify-center flex-col">
          <div className="w-fulll md:max-w-1/2 mx-auto space-y-4 mb-18">
            <h3 className="text-center text-white font-bold">
              Des solutions <br />
              pensées pour{" "}
              <span style={{ color: "#26DD31", fontStyle: "italic" }}>
                chaque profil
              </span>
            </h3>
            <h6 className="text-center text-white">
              Parce que chaque besoin est unique, CGE vous propose des solutions
              sur mesure selon votre activité. Choisissez votre profil et
              découvrez comment l’énergie solaire peut transformer votre
              quotidien.
            </h6>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
            {landingData.solutionProfiles.map((data) => (
              <div className="flex flex-col space-y-16 bg-white rounded-[40px] p-8">
                <div
                  className="flex items-center justify-center rounded-full bg-foreground w-12 h-12 self-end cursor-pointer"
                  onClick={() => setIsOpen(true)}
                >
                  <MoveUpRight width={24} color="white" />
                </div>
                <div className="space-y-3">
                  <h5 className="text-foreground font-bold">{data.name}</h5>
                  <p>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
   <Container type="intrinsic" className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-10 lg:mt-15 mb-10 lg:mb-15">
  <div className="flex-1">
    <h3 className="text-md lg:text-xl font-bold mb-4 lg:mb-6">
      Acteurs de la transition solaire, partenaires de votre avenir.
    </h3>
    <div className="mb-4 lg:mb-5">
      <h6>
        Pionniers dans les solutions solaires photovoltaïques, nous
        mettons toute notre énergie au service d'un futur durable.{" "}
      </h6>
      <br />
      <h6>
        Nous accompagnons chaque profil avec des solutions adaptées, sur
        l'ensemble du territoire.
      </h6>
    </div>
    
    {/* Version Mobile - Stack vertical */}
    <div className="flex flex-col gap-3 mb-4 lg:hidden">
      <div className="flex items-center space-x-3">
        <CircleCheck className="mr-3 flex-shrink-0" />
        <h6>Particuliers</h6>
      </div>
      <div className="flex items-center space-x-3">
        <CircleCheck className="mr-3 flex-shrink-0" />
        <h6>Agriculteurs</h6>
      </div>
      <div className="flex items-center space-x-3">
        <CircleCheck className="mr-3 flex-shrink-0" />
        <h6>Industries</h6>
      </div>
    </div>

    {/* Version Desktop - Flex horizontal */}
    <div className="hidden lg:flex justify-between mb-6">
      <div className="flex items-center space-x-3">
        <CircleCheck className="mr-3" />
        <h6>Particuliers</h6>
      </div>
      <div className="flex items-center space-x-3">
        <CircleCheck className="mr-3" />
        <h6>Agriculteurs</h6>
      </div>
      <div className="flex items-center space-x-3">
        <CircleCheck className="mr-3" />
        <h6>Industries</h6>
      </div>
    </div>

    <h6 className="text-sm lg:text-base">
      Choisir CGE, c'est faire le pas vers l'indépendance énergétique,
      tout en étant entouré de conseils clairs, d'un accompagnement
      transparent et de valeurs solides. Ensemble, construisons
      aujourd'hui l'énergie de demain.
    </h6>
  </div>
  
  <div className="flex-1 flex relative justify-center lg:justify-start mt-6 lg:mt-0">
    <Image
      alt="solar-transition"
      width={629}
      height={629}
      src={"/assets/solar-transition.svg"}
      className="w-full max-w-md lg:max-w-none h-auto"
    />
    <Image
      className="absolute top-0 right-0 -translate-y-1/4 -translate-x-1/4 -z-1 w-48 lg:w-[360px] h-auto"
      alt="solar-grid"
      width={360}
      height={360}
      src={"/assets/solar-grid.svg"}
    />
  </div>
</Container>

      <Container type="intrinsic" className="mb-18">
        <h3 className="font-bold text-center leading-16 mb-14">
          <span className="text-[#0A9438]">Nos publications</span> pour mieux{" "}
          <br />
          comprendre le solaire
        </h3>
        <div className="flex flex-col md:flex-row gap-5">
          {landingData.publications.map((data) => (
            <div
              key={data.id}
              onClick={() => router.push("/blogs")}
              className="cursor-pointer text-white rounded-4xl flex flex-col flex-1 h-120 px-8 py-10 relative"
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${data.image})`,
              }}
            >
              <div
                className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-4xl"
                style={{
                  background: `linear-gradient(
                    to bottom,
                    rgba(1, 33, 92, 0) 0%,
                    rgba(1, 33, 92, 1) 91%,
                    rgba(1, 33, 92, 1) 100%
                    `,
                }}
              />
              <div className="flex-1" />
              <div className="flex-1 z-100 flex flex-col mt-24">
                <h5 className="mb-2 font-bold leading-9">{data.name}</h5>
                <p>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
