import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import Preloader from "@/components/Preloader";

export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CGEnergies",
  description: "General Solar for developers.",
  keywords: ["General Solar", "ui icons", "ux icons", "design tools"],
  icons: {
    icon: [
      {
        url: "/assets/logo.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/logo.png", 
        sizes: "32x32",
        type: "image/png",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${plusJakartaSans.className}`}>
        <Preloader>{children}</Preloader>
      </body>
    </html>
  );
}