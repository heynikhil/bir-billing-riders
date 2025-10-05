import { MapPin, Users, Award } from "lucide-react";
import { about } from "@/config/content";

export default function About() {
  const icons = [
    { Icon: MapPin, label: about.highlights[0] },
    { Icon: Users, label: about.highlights[1] },
    { Icon: Award, label: about.highlights[2] },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {about.title}
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            {about.description}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {icons.map(({ Icon, label }, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-sky-50 to-indigo-50 p-6 rounded-2xl border border-sky-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-full flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="font-semibold text-gray-800">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
