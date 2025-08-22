"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const profileOptions = [
    { label: "Particulier", href: "/particulier" },
    { label: "Agriculteurs", href: "/agriculteurs" },
    { label: "Industries", href: "/industries" },
    { label: "Collectivités", href: "/collectivites" },
  ];

  return (
    <nav
      className={cn(
        "z-50 transition-all duration-300 ease-in-out",
        "flex items-center rounded-lg justify-between px-4 lg:px-6 h-16 lg:h-20",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      )}
    >
      <Link href="/">
        <Image
          src={"/assets/nav-logo.svg"}
          width={226}
          height={48}
          alt="nav-logo"
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium">
        <li>
          <Link href="/" className="hover:text-blue-900 transition-colors">
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-blue-900 transition-colors">
            Nos services
          </Link>
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-blue-900 transition-colors focus:outline-none">
              <span>Votre profil</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-48 bg-white/10 backdrop-blur-md shadow-xl text-white border-none"
            >
              {profileOptions.map((option) => (
                <DropdownMenuItem key={option.label} asChild>
                  <Link href={option.href} className="w-full">
                    {option.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li>
          <Link href="/" className="hover:text-blue-900 transition-colors">
            À propos
          </Link>
        </li>
        <li>
          <Link href="/blogs" className="hover:text-blue-900 transition-colors">
            Blogs
          </Link>
        </li>
      </ul>

      {/* Desktop Contact Button */}
      <Button
        asChild
        className="hidden lg:flex bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-medium"
      >
        <Link href={"/contact"}>Nous contacter</Link>
      </Button>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="top-32 rounded-lg">
          <div className="flex flex-col space-y-6 my-6 mx-4">
            <Link
              href="/"
              className="text-lg font-medium text-gray-700 hover:text-blue-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/"
              className="text-lg font-medium text-gray-700 hover:text-blue-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Nos services
            </Link>

            {/* Mobile Profile Dropdown */}
            <div className="space-y-2">
              <div className="text-lg font-medium text-gray-700 mb-2">
                Votre profil
              </div>
              <div className="pl-4 space-y-3">
                {profileOptions.map((option) => (
                  <Link
                    key={option.label}
                    href={option.href}
                    className="block text-gray-600 hover:text-blue-900 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/"
              className="text-lg font-medium text-gray-700 hover:text-blue-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/blogs"
              className="text-lg font-medium text-gray-700 hover:text-blue-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>

            <Button
              asChild
              className="bg-blue-900 hover:bg-blue-800 text-white w-full mt-6"
              onClick={() => setIsOpen(false)}
            >
              <Link href={"/contact"}>Nous contacter</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
