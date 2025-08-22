"use client";

import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { heroData } from "@/data";
import { ChevronDown } from "lucide-react";

const links = [
  {
    id: 1,
    name: "Particulier",
    link: "/particulier",
  },
  {
    id: 2,
    name: "Agriculteurs",
    link: "/agriculteurs",
  },
  {
    id: 3,
    name: "Industries",
    link: "/industries",
  },
  {
    id: 4,
    name: "Collectivités",
    link: "/collectivites",
  },
];

// Données par défaut pour les pages sans heroData spécifique
const defaultHeroData = {
  title: "CGE Solar",
  secondTitle: "Solutions Énergétiques",
  subtitle: "Votre partenaire pour la transition énergétique"
};

export default function Hero() {
  const pathname = usePathname();
  const router = useRouter();
  
  // Utiliser les données spécifiques à la page ou les données par défaut
  const data = heroData[pathname] || defaultHeroData;

  // Force le scroll en haut à chaque changement de page
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    // Forcer le scroll en haut immédiatement
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Naviguer vers la nouvelle page sans préserver la position de scroll
    router.push(href, { scroll: false });
    
    // S'assurer que la page reste en haut plusieurs fois
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);
    
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 10);
  };

  // Trouver le lien actuel pour l'affichage mobile
  const currentLink = links.find(link => link.link === pathname);

  // Ne pas afficher les boutons de navigation sur la page devis
  const showNavigation = !["/devis", "/contact", "/blogs"].includes(pathname);

  return (
    <div className="flex-1 text-white flex justify-between flex-col h-full pt-12 pb-24">
      <Navbar />
      <div className="mb-5">
        {/* Navigation des profils - uniquement si nécessaire */}
        {showNavigation && (
          <>
            {/* Version Mobile - Dropdown */}
            <div className="block md:hidden mt-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-white/10 backdrop-blur-md shadow-xl w-36 justify-between text-sm px-3 py-2">
                    <span>{currentLink?.name || "Profil"}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-36 bg-white/10 backdrop-blur-md shadow-xl text-white border-none">
                  {links.map((link) => (
                    <DropdownMenuItem
                      key={link.id}
                      onClick={() => handleLinkClick(link.link)}
                      className={cn(
                        "cursor-pointer hover:bg-white/20 text-sm",
                        pathname === link.link && "bg-white/30"
                      )}
                    >
                      {link.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Version Desktop - Flex Row */}
            <div className="hidden md:flex mt-2 md:mt-0 gap-2 md:gap-3">
              {links.map((link) => (
                <Button
                  key={link.id}
                  onClick={() => handleLinkClick(link.link)}
                  className={cn(
                    "bg-white/10 backdrop-blur-md shadow-xl",
                    "text-xs px-2 py-1 h-8 md:text-sm md:px-4 md:py-2 md:h-10",
                    "flex-1 md:flex-none",
                    {
                      "bg-foreground": pathname === link.link,
                    }
                  )}
                >
                  {link.name}
                </Button>
              ))}
            </div>
          </>
        )}
        
        <h1 className="heading-2 md:heading-1 mb-4 font-semibold">
          {data.title}
          <br />
          {data.secondTitle}
        </h1>
        <h6>{data.subtitle}</h6>
      </div>
    </div>
  );
}