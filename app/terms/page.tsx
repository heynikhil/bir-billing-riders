import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { businessInfo } from "@/config/content";

export const metadata = {
  title: "Terms & Conditions - Bir Billing Riders",
  description: "Terms and conditions for vehicle rental services at Bir Billing Riders",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-500 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Terms & Conditions
          </h1>
          <p className="text-white/90 mt-4">
            Please read these terms carefully before renting a vehicle from {businessInfo.name}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Eligibility & Documentation</h2>
            <div className="space-y-3 text-gray-700">
              <p>• You must be at least 18 years old with a valid driving license to rent two-wheelers.</p>
              <p>• A valid driving license is <strong>mandatory</strong> for self-drive scooties and bikes.</p>
              <p>• <strong>Learner's Licenses are NOT accepted</strong> for vehicle rental.</p>
              <p>• You must provide original address proof (Aadhaar card, Voter ID, or Passport) at the time of pickup.</p>
              <p>• A copy of your Driving License will be deposited and returned upon vehicle return.</p>
              <p>• If you fail to produce these documents, we reserve the right to deny the booking without refund.</p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Payment Terms</h2>
            <div className="space-y-3 text-gray-700">
              <p>• <strong>Full payment must be made in advance</strong> before taking the vehicle.</p>
              <p>• We accept UPI (Google Pay, PhonePe, Paytm), card payments via Axis POS machine, and cash.</p>
              <p>• Security deposit is refundable and will be returned upon vehicle return in good condition.</p>
              <p>• Any damages, fines, or missing items will be deducted from the security deposit.</p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Vehicle Usage Rules</h2>
            <div className="space-y-3 text-gray-700">
              <p>• <strong>Tripling (3 people on a two-wheeler) is strictly prohibited.</strong> If found with 3 people, you'll be charged double the rent.</p>
              <p>• Both helmets are <strong>compulsory</strong> while riding. Please return the same helmets provided.</p>
              <p>• Helmets lost or damaged will incur a charge of <strong>₹1,000 per helmet</strong>.</p>
              <p>• Fuel consumption is your responsibility. Please refuel as needed during your rental period.</p>
              <p>• Rent will not be reduced based on remaining fuel in the vehicle.</p>
              <p>• The vehicle must not be used for racing, stunts, or any illegal activities.</p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Accidents & Damages</h2>
            <div className="space-y-3 text-gray-700">
              <p>• In case of an accident or damage, <strong>you are responsible for all repair expenses</strong>.</p>
              <p>• If you wish to repair the vehicle yourself, you must inform {businessInfo.name} first.</p>
              <p>• Any traffic violations, challans, or fines during the rental period are your responsibility.</p>
              <p>• We take video proof before handing over the vehicle to verify its condition. This protects both parties.</p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Return Policy & Late Fees</h2>
            <div className="space-y-3 text-gray-700">
              <p>• Vehicles must be returned on or before <strong>9:00 AM</strong> on the agreed return date.</p>
              <p>• Late return charges:</p>
              <ul className="ml-8 list-disc">
                <li><strong>Scooty:</strong> ₹200 per hour after 9:00 AM</li>
                <li><strong>Bike:</strong> ₹300 per hour after 9:00 AM</li>
              </ul>
              <p>• Extensions are possible based on availability. Please inform us via WhatsApp in advance.</p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Breakdown & Support</h2>
            <div className="space-y-3 text-gray-700">
              <p>• If the vehicle breaks down due to mechanical issues, call or WhatsApp us immediately.</p>
              <p>• We'll either fix it on-site or provide a replacement vehicle ASAP.</p>
              <p>• <strong>No extra charges for mechanical breakdowns</strong> (not caused by user negligence).</p>
              <p>• Roadside assistance is available during business hours (7 AM – 9 PM).</p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Pickup & Drop Service</h2>
            <div className="space-y-3 text-gray-700">
              <p>• We offer <strong>free pickup and drop-off</strong> within Bir, Billing, and nearby areas.</p>
              <p>• Share your location on WhatsApp, and we'll deliver the vehicle to you.</p>
              <p>• For locations beyond our service area, additional charges may apply.</p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cancellation & Refund Policy</h2>
            <div className="space-y-3 text-gray-700">
              <p>• Bookings can be canceled or rescheduled based on availability.</p>
              <p>• Advance payments are non-refundable if canceled within 24 hours of pickup time.</p>
              <p>• For cancellations made more than 24 hours in advance, 80% refund will be issued.</p>
              <p>• We reserve the right to cancel bookings in case of unavailability or unforeseen circumstances.</p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Liability & Insurance</h2>
            <div className="space-y-3 text-gray-700">
              <p>• All vehicles are covered by basic third-party insurance as per Indian law.</p>
              <p>• Personal accident insurance is <strong>not included</strong>. Riders are advised to have their own coverage.</p>
              <p>• {businessInfo.name} is not responsible for personal injuries, theft, or loss of personal belongings.</p>
              <p>• By renting a vehicle, you agree to ride at your own risk.</p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. General Terms</h2>
            <div className="space-y-3 text-gray-700">
              <p>• {businessInfo.name} reserves the right to modify these terms at any time.</p>
              <p>• By booking a vehicle, you agree to all the terms and conditions mentioned above.</p>
              <p>• Disputes, if any, will be subject to the jurisdiction of courts in Himachal Pradesh.</p>
              <p>• For any queries or clarifications, contact us on WhatsApp at <a href={`tel:${businessInfo.phone}`} className="text-sky-600 hover:underline">{businessInfo.phone}</a></p>
            </div>
          </section>

          {/* Footer Note */}
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 mt-8">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Note:</strong> These terms are designed to ensure a safe and pleasant experience for everyone. 
              By renting from {businessInfo.name}, you acknowledge that you have read, understood, and agreed to these terms. 
              Ride safe, explore responsibly, and enjoy your journey in Bir Billing! 🏍️
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center pt-6">
            <p className="text-gray-600 mb-4">Questions about our terms?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${businessInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold transition-all"
              >
                WhatsApp Us
              </a>
              <a
                href={`tel:${businessInfo.phone}`}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-bold transition-all"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Last updated: October 5, 2025
          </p>
        </div>
      </div>
    </div>
  );
}
