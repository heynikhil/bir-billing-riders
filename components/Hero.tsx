"use client";

import { ArrowRight, Phone } from "lucide-react";
import { hero, businessInfo, whatsappMessage } from "@/config/content";

export default function Hero() {
  const whatsappLink = `https://wa.me/${businessInfo.whatsapp}?text=${whatsappMessage}`;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-600">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Vehicle Icons */}
        <div className="absolute top-1/4 left-[10%] text-6xl opacity-20 animate-float">🛵</div>
        <div className="absolute top-1/3 right-[15%] text-7xl opacity-15 animate-float-delayed">🏍️</div>
        <div className="absolute bottom-1/4 left-[15%] text-5xl opacity-20 animate-float-slow">🚕</div>
        <div className="absolute top-1/2 right-[10%] text-4xl opacity-25 animate-float">⛰️</div>
        <div className="absolute bottom-1/3 right-[20%] text-5xl opacity-20 animate-float-delayed">🪂</div>
        
        {/* Abstract Shapes */}
        <div className="absolute top-20 left-[5%] w-32 h-32 border-4 border-white/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-32 right-[8%] w-40 h-40 border-4 border-white/10 rounded-lg rotate-45 animate-pulse"></div>
        
        {/* Road Lines Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <div className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
              ✨ Trusted since {businessInfo.since} • 1000+ Happy Riders
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            {hero.headline}
          </h1>

          {/* Hindi Tagline */}
          <p className="text-2xl sm:text-3xl md:text-4xl text-yellow-200 font-semibold">
            {hero.headlineHindi}
          </p>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={`tel:${businessInfo.phone}`}
              className="group bg-white hover:bg-gray-50 text-indigo-600 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call to Book
            </a>
          </div>

          {/* Quick Stats */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">₹600+</div>
              <div className="text-sm text-white/80">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">18+</div>
              <div className="text-sm text-white/80">Vehicles</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/80">Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-sm text-white/80">Happy Riders</div>
            </div>
          </div>

          {/* Quick Features */}
          <div className="pt-6 flex flex-wrap justify-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium border border-white/30">
              ✓ Free Pickup & Drop
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium border border-white/30">
              ✓ Helmets Included
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium border border-white/30">
              ✓ Easy UPI Payment
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium border border-white/30">
              ✓ No Hidden Charges
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
