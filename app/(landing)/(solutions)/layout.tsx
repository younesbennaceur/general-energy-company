import Container from "@/components/layout/Container";
import Slider from "@/components/Slider";
import SolarBenefits from "@/components/SolarBenefits";
import { projectStepsSlides } from "@/data";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Container type="intrinsic">{children}</Container>

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
        <SolarBenefits />
      </Container>
    </>
  );
}
