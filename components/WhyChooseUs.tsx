import * as LucideIcons from "lucide-react";
import { whyChooseUs } from "@/config/content";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 italic">
            "You ride. We handle the boring stuff."
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, idx) => {
            const IconComponent = (LucideIcons as any)[item.icon];
            
            return (
              <div
                key={idx}
                className="group bg-gradient-to-br from-sky-50 to-indigo-50 p-8 rounded-2xl border border-sky-100 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
