import Container from "@/components/layout/Container";
import Solutions from "@/components/Solutions";

const defaultSolutions = [
  {
    id: "rooftop",
    title: "Installation en toiture",
    description:
      "Optimisez l'utilisation de vos bâtiments, tout en générant une énergie propre et renouvelable. Cette solution permet une réduction des coûts énergétiques et une source de revenus supplémentaires grâce à la revente de l'électricité excédentaire.",
    image: "/assets/f7.png",
    imageAlt: "Panneaux solaires sur toiture industrielle",
  },
  {
    id: "ombiere",
    title: "Ombrière",
    description:
      "Transformez votre espace avec une ombrière photovoltaïque. Protection solaire, économie d'énergie, esthétique moderne. Investissez dans l'avenir durable de votre entreprise.",
    image: "/assets/f1.png",
    imageAlt: "Vue aérienne de hangars agricoles avec panneaux solaires",
  },
  {
    id: "ground-mounted",
    title: "Centrale au sol",
    description:
      "Installer une ferme solaire, c'est profiter d'une énergie abondante et inépuisable, tout en générant un revenu complémentaire ou en produisant sa propre électricité. Une opportunité durable et rentable pour l'agriculture.",
    image: "/assets/blog-hero.png",
    imageAlt: "Grande centrale solaire au sol vue du ciel",
  },
];

export default function Industries() {
  return (
    <Container type="intrinsic">
      <Solutions type="particulier" solutions={defaultSolutions} />
    </Container>
  );
}
