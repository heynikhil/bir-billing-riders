import { Star } from "lucide-react";
import { testimonials } from "@/config/content";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Riders Say 💬
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from real adventurers
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Name */}
              <p className="font-bold text-gray-900">— {testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-sky-400 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold">
            📸 Share Your Ride with #BirBillingRiders
          </div>
        </div>
      </div>
    </section>
  );
}
