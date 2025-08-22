"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Check } from "lucide-react";

export default function FormContact() {
  const [activeTab, setActiveTab] = useState("contact");
  const [userType, setUserType] = useState("agriculteur");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-foreground rounded-3xl p-8 text-white border">
      {/* Tab Toggle */}
      <div className="flex flex-col lg:flex-row bg-white/10 rounded-4xl lg:rounded-full p-1 mb-8">
        <button
          onClick={() => setActiveTab("contact")}
          className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-all ${
            activeTab === "contact"
              ? "bg-white text-blue-900"
              : "text-white hover:bg-white/10"
          }`}
        >
          Contactez-nous
        </button>
        <button
          onClick={() => setActiveTab("callback")}
          className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-all ${
            activeTab === "callback"
              ? "bg-white text-blue-900"
              : "text-white hover:bg-white/10"
          }`}
        >
          Être rappelé(e)
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* User Type Selection */}
        <div>
          <p className="text-white mb-4 font-medium">Vous êtes</p>
          <div className="flex flex-wrap gap-4">
            {[
              { id: "particulier", label: "Particulier" },
              { id: "agriculteur", label: "Agriculteur" },
              { id: "industries", label: "Industries" },
              { id: "collectivite", label: "Collectivité" },
            ].map((type) => (
              <label
                key={type.id}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="relative">
                  <input
                    type="radio"
                    name="userType"
                    value={type.id}
                    checked={userType === type.id}
                    onChange={(e) => setUserType(e.target.value)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded-full border-2 border-white flex items-center justify-center ${
                      userType === type.id
                        ? "bg-green-500 border-green-500"
                        : ""
                    }`}
                  >
                    {userType === type.id && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                </div>
                <span className="text-white text-sm">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Form Fields */}
        <div>
          <label className="block text-white mb-2 font-medium">
            Nom complet
          </label>
          <Input
            placeholder="Ronald Richards"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="bg-white border-0 text-[#010E26]  h-12 rounded-full"
          />
        </div>

        <div>
          <label className="block text-white mb-2 font-medium">
            Email Address
          </label>
          <Input
            type="email"
            placeholder="ronald.richards@email.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="bg-white border-0 text-[#010E26]  h-12 rounded-full"
          />
        </div>

        <div>
          <label className="block text-white mb-2 font-medium">
            Phone number
          </label>
          <Input
            type="tel"
            placeholder="+33 123 45 67 89"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="bg-white border-0 text-[#010E26]  h-12 rounded-full"
          />
        </div>

        <div>
          <label className="block text-white mb-2 font-medium">Sujet</label>
          <Input
            value={formData.subject}
            placeholder="Parlez-nous un peu de ce que vous recherchez..."
            onChange={(e) => handleInputChange("subject", e.target.value)}
            className="bg-white border-0 text-[#010E26]  h-12 rounded-full"
          />
        </div>

        <div>
          <label className="block text-white mb-2 font-medium">Message</label>
          <Textarea
            placeholder="Détaillez vos besoins, votre projet ou vos idées..."
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            rows={6}
            className="h-40 bg-white border-0 text-[#010E26] rounded-2xl resize-none"
          />
        </div>

        <Button
          type="submit"
          style={{
            background: `linear-gradient(
                    45deg,
                    rgba(1, 33, 92, 0) 0%,
                    rgba(60, 166, 229, 1) 100%
                    `,
          }}
          className="w-full text-white font-semibold py-4 rounded-full h-auto text-lg transition-colors"
        >
          Envoyer le message
        </Button>
      </form>
    </div>
  );
}
