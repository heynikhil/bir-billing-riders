import { Check } from "lucide-react";
import { services, addOns } from "@/config/content";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're riding solo, seeking thrills, or traveling with family — we've got you covered.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 group"
            >
              {/* Icon */}
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ✨ Extra Services & Add-ons
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addOns.map((addon, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-gradient-to-br from-sky-50 to-indigo-50 p-4 rounded-xl border border-sky-100"
              >
                <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{addon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
