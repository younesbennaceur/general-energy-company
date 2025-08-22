import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/data";

export default function Footer() {
  return (
    <footer className="space-y-14 py-12 flex flex-col items-center justify-center">
      <Image
        src={"/assets/logo-white.svg"}
        width={226}
        height={48}
        alt="nav-logo"
      />
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
      <h6 className="text-white text-center">
        © {new Date().getFullYear()} Compagnie Générale des Énergies. Tous
        droits réservés.
      </h6>
    </footer>
  );
}
