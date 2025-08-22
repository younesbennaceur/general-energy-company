"use client";
import Footer from "@/components/layout/Footer";
import Container from "../../components/layout/Container";
import Hero from "@/components/layout/Hero";
import Contact from "@/components/Contact";
import Cge from "@/components/Cge";
import { usePathname } from "next/navigation";


export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  // Si c'est la page devis, on affiche seulement les enfants sans layout
  if (pathname === "/devis") {
    return <>{children}</>;
  }
  
  console.log(`/assets/videos${pathname}.webm`);
  
  return (
    <>
      {![
        "/agriculteurs",
        "/collectivites",
        "/particulier",
        "/industries",
      ].includes(pathname) ? (
        <Container
          type="intrinsic"
          className="min-h-200 md:h-200"
          style={{
            backgroundImage: `url(/assets/hero-bg.svg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Hero />
        </Container>
      ) : (
        <div className="overflow-hidden">
          <Container
            type="intrinsic"
            className="relative w-full min-h-200 md:h-200"
          >
            {/* Background video pour mobile uniquement */}
            <video
              autoPlay
              key={`mobile-${pathname}`}
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover md:hidden"
            >
              <source
                src={`/assets/videos/mobile${pathname}.webm`}
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>

            {/* Background video pour tablette et desktop */}
            <video
              autoPlay
              key={pathname}
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-auto min-w-full object-cover scale-x-[1.2] hidden md:block"
            >
              <source
                src={`/assets/videos${pathname}.webm`}
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>

            {/* Foreground content */}
            <div className="flex flex-1 h-full relative z-10">
              <Hero />
            </div>
          </Container>
        </div>
      )}

      <main className="md:pt-20">
        {children}
        <Container type="intrinsic" className="mb-36 mt-36">
          <Cge />
        </Container>

        <Container type="intrinsic" className="bg-accent">
          <Contact />
        </Container>
        <Container
          type="intrinsic"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(/assets/footer.svg)`,
          }}
        >
          <Footer />
        </Container>
      </main>
    </>
  );
}