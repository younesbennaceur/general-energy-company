import { landingData } from "@/data";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Cge({}: Props) {
  return (
    <>
      <div className="mx-auto maw-x-1/2">
        <h3 className="font-bold mb-6 text-center">
          Pourquoi choisir <span className="italic text-[#0A9438]">CGE?</span>
        </h3>
        <h6 className="mb-14 text-center">
          Notre engagement va au-delà de l'installation solaire : nous vous
          accompagnons de A à Z avec des solutions fiables, accessibles et
          durables.
        </h6>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <Image
            alt="cge"
            sizes="100%"
            width={0}
            className="rounded-4xl w-full h-auto"
            height={0}
            src={"/assets/cge.png"}
          />
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {landingData.cge.map((data) => (
            <div key={data.id} className="px-5 py-10 rounded-3xl bg-white">
              <div className="w-12 h-12 mb-6 bg-foreground rounded-full flex items-center justify-center">
                <data.icon color="white" size={24} />
              </div>
              <h6 className="mb-2 font-bold text-[#010E26]">{data.name}</h6>
              <p className="text-[#3B4658]">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
