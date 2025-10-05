"use client";

import { MapPin, Phone, Clock, CreditCard } from "lucide-react";
import { businessInfo, contactInfo, whatsappMessage } from "@/config/content";

export default function Contact() {
  const whatsappLink = `https://wa.me/${businessInfo.whatsapp}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {contactInfo.title}
          </h2>
          <p className="text-lg text-gray-600">{contactInfo.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Location */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-sky-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">{businessInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-sky-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="text-sky-600 hover:text-sky-700 font-medium"
                  >
                    {businessInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Timing */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-sky-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Timing</h3>
                  <p className="text-gray-600">{businessInfo.timing}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    (WhatsApp available 24/7)
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-sky-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-3">We Accept</h3>
                  <div className="flex flex-wrap gap-2">
                    {contactInfo.paymentMethods.map((method) => (
                      <span
                        key={method}
                        className="bg-gradient-to-br from-sky-50 to-indigo-50 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 border border-sky-100"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-center"
            >
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <div className="text-left">
                  <div className="font-bold text-lg">Message on WhatsApp</div>
                  <div className="text-sm text-green-100">Quick replies guaranteed!</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
