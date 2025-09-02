// app/a-propos/page.tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; // si vous avez un composant Footer

export default function APropos() {
  return (
    <div>
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            À propos de CGE
          </h1>
          
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-600 mb-8">
              La Compagnie Générale des Énergies (CGE) est spécialisée dans les solutions énergétiques durables pour particuliers, agriculteurs, industries et collectivités.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Notre mission
            </h2>
            <p className="text-gray-600 mb-6">
              Nous accompagnons nos clients dans leur transition énergétique en proposant des solutions sur mesure : panneaux solaires, pompes à chaleur, systèmes de stockage d'énergie et bien plus encore.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Nos valeurs
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li>• Innovation et expertise technique</li>
              <li>• Accompagnement personnalisé</li>
              <li>• Respect de l'environnement</li>
              <li>• Transparence et qualité de service</li>
            </ul>
          </div>
        </div>
      </main>
      
      {/* Footer si vous en avez un */}
      {/* <Footer /> */}
    </div>
  );
}