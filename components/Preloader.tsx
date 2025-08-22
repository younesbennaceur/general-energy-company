"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleComplete = () => setLoaded(true);

    // Wait for window.onload (all images, videos, stylesheets, etc.)
    if (document.readyState === "complete") {
      handleComplete();
    } else {
      window.addEventListener("load", handleComplete);
      return () => window.removeEventListener("load", handleComplete);
    }
  }, []);

  if (!loaded) {
    return (
      <div className="fixed inset-0 flex items-center flex-col justify-center bg-foreground text-white z-[9999] space-y-4">
        <Image
          src={"/assets/logo-white.svg"}
          width={226 * 2}
          height={48 * 2}
          alt="nav-logo"
        />
        <span>Loading...</span>
      </div>
    );
  }

  return <>{children}</>;
}
