"use client";

import { useState } from "react";
import { Check, Fuel, Users, Gauge } from "lucide-react";
import { vehicles, whatsappMessage, businessInfo } from "@/config/content";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const whatsappLink = `https://wa.me/${businessInfo.whatsapp}?text=${whatsappMessage}`;

  const categories = ["All", "Scooty", "Bike", "Taxi"];

  const filteredVehicles =
    activeCategory === "All"
      ? vehicles
      : vehicles.filter((v) => v.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Scooty":
        return "🛵";
      case "Bike":
        return "🏍️";
      case "Taxi":
        return "🚕";
      default:
        return "🚗";
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Fleet
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our well-maintained collection of vehicles. All serviced regularly and ready for your adventure.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 p-2 bg-gray-100 rounded-2xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 group"
            >
              {/* Header with Category Icon & Badge */}
              <div className="relative bg-gradient-to-br from-sky-400 to-indigo-600 p-6 text-center">
                <div className="text-7xl mb-2 transform group-hover:scale-110 transition-transform">
                  {getCategoryIcon(vehicle.category)}
                </div>
                {vehicle.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                      {vehicle.badge}
                    </span>
                  </div>
                )}
                {vehicle.available ? (
                  <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ✓ Available
                  </span>
                ) : (
                  <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ✗ Booked
                  </span>
                )}
              </div>

              {/* Vehicle Info */}
              <div className="p-6">
                {/* Name & Category */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {vehicle.name}
                  </h3>
                  <p className="text-sm text-gray-500">{vehicle.category}</p>
                </div>

                {/* Price */}
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-sky-600">
                      {vehicle.price}
                    </span>
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{vehicle.specs.engine}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{vehicle.specs.mileage}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{vehicle.specs.seating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">⛽ {vehicle.specs.fuelType}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {vehicle.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Book Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 rounded-xl font-bold text-center transition-all transform hover:scale-105 shadow-lg"
                >
                  Book on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            💡 <strong>Note:</strong> Prices may vary during peak season. Helmets, insurance, and basic support included. 
            Security deposit required. WhatsApp us for latest availability and special offers!
          </p>
        </div>
      </div>
    </section>
  );
}
