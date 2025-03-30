"use client";

import { Copy } from 'lucide-react';
import { Section } from "@/components";
import Image from "next/image";
import { useState } from "react";

export const Dork = () => {
  const [isOpenType, setIsOpenType] = useState(false);
  const [isOpenCity, setIsOpenCity] = useState(false);
  const [isOpenCountry, setIsOpenCountry] = useState(false);

  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  // Fonction pour fermer tous les dropdowns sauf celui sélectionné
  const toggleDropdown = (dropdown: string) => {
    if (dropdown === "type") {
      setIsOpenType(!isOpenType);
      setIsOpenCity(false); // Ferme City
      setIsOpenCountry(false); // Ferme Country
    } else if (dropdown === "city") {
      setIsOpenType(false); // Ferme Type
      setIsOpenCity(!isOpenCity);
      setIsOpenCountry(false); // Ferme Country
    } else if (dropdown === "country") {
      setIsOpenType(false); // Ferme Type
      setIsOpenCity(false); // Ferme City
      setIsOpenCountry(!isOpenCountry);
    }
  };

  const handleSelectType = (option: string) => {
    setType(option); // Met à jour l'état `type` avec l'option sélectionnée
    setIsOpenType(false); // Ferme le dropdown après la sélection
  };

  const handleSelectCity = (option: string) => {
    setCity(option); // Met à jour l'état `city` avec l'option sélectionnée
    setIsOpenCity(false); // Ferme le dropdown après la sélection
  };

  const handleSelectCountry = (option: string) => {
    setCountry(option); // Met à jour l'état `country` avec l'option sélectionnée
    setIsOpenCountry(false); // Ferme le dropdown après la sélection
  };


  const copyToClipboard = () => {
    const textToCopy = `intitle:"${type}" ${city} ${country} inurl:"menu"`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Texte copié dans le presse-papier!");
    }).catch((err) => {
      alert("Erreur lors de la copie : " + err);
    });
  };

  return (
    <Section size="8/10" className="flex gap-2">
      <div>
        <Image
          src="/assets/images/team-1.webp"
          alt=""
          width={750}
          height={0}
          className="rounded-3xl"
        />
      </div>

      <div className="flex flex-col">
        <div>
          <h2 className="text-3xl font-bold">Critère de recherche</h2>
        </div>

        {/* Dropdown Type */}
        <div className="relative inline-block text-left">
          <button
            onClick={() => toggleDropdown("type")}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Type de recherche
          </button>

          {isOpenType && (
            <div
              className="absolute right-0 mt-2 w-40 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[999]"
              role="menu"
            >
              <div className="py-1">
                <button
                  onClick={() => handleSelectType("Réstaurant")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Réstaurant
                </button>
                <button
                  onClick={() => handleSelectType("Bar")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Bar
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Dropdown City */}
        <div className="relative inline-block text-left mt-4">
          <button
            onClick={() => toggleDropdown("city")}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Ville
          </button>

          {isOpenCity && (
            <div
              className="absolute right-0 mt-2 w-40 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[999]"
              role="menu"
            >
              <div className="py-1">
                <button
                  onClick={() => handleSelectCity("Paris")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Paris
                </button>
                <button
                  onClick={() => handleSelectCity("Lyon")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Lyon
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Dropdown Country */}
        <div className="relative inline-block text-left mt-4">
          <button
            onClick={() => toggleDropdown("country")}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Pays
          </button>

          {isOpenCountry && (
            <div
              className="absolute right-0 mt-2 w-40 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[999]"
              role="menu"
            >
              <div className="py-1">
                <button
                  onClick={() => handleSelectCountry("France")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  France
                </button>
                <button
                  onClick={() => handleSelectCountry("Espagne")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Espagne
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4">
          <h2>Phrase à copier :</h2>
          <div className="flex gap-2 items-center">
          <p className="uppercase font-bold">intitle:"{type}" {city} {country} inurl:"menu"</p>
        <button className="bg-primary text-white p-2 rounded-lg" onClick={copyToClipboard}><Copy size={20}/></button>
          </div>
        </div>
      </div>
    </Section>
  );
};
