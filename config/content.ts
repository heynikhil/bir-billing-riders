// 🔧 EDIT THIS FILE to update all website content easily!

export const businessInfo = {
  name: "Bir Billing Riders",
  shortName: "Bir Billing Riders",
  tagline: "Ride Free. Feel Bir.",
  taglineHindi: "सफर आपका, बाइक हमारी।",
  since: "2018",
  location: "Near Bir Bus Stand, Himachal Pradesh",
  phone: "+91-88949-12338",
  whatsapp: "+918894912338", // No spaces/dashes for WhatsApp link
  email: "contact@birbillingriders.com",
  instagram: "@birbillingriders",
  instagramUrl: "https://instagram.com/birbillingriders",
  timing: "7 AM – 9 PM",
};

export const seoData = {
  title: "Bir Billing Riders - Scooty, Bike & Taxi Rental in Bir Billing",
  description:
    "Rent self-drive scooties, bikes, and taxis in Bir Billing, Himachal Pradesh. Local experts, easy booking via WhatsApp. Trusted since 2018.",
  keywords:
    "scooty on rent in Bir Billing, bike rental in Bir Billing, taxi in Bir, Bir Billing vehicle rental, self-drive scooty Bir, bike rental Himachal Pradesh",
  ogImage: "/og-image.svg",
};

export const whatsappMessage = encodeURIComponent(
  "Hi! I'm interested in renting a vehicle from Bir Billing Riders. Can you help me?"
);

export const hero = {
  headline: "Ride Free. Feel Bir.",
  headlineHindi: "सफर आपका, बाइक हमारी।",
  subtitle:
    "Explore Bir Billing on your own terms — self-drive scooties, bikes & taxis. Pick-up & drop anywhere, helmets included.",
  ctaPrimary: "WhatsApp Now",
  ctaSecondary: "Call to Book",
  priceTag: "Contact for Quote",
};

export const about = {
  title: "Who We Are",
  description:
    "We're not a big company — just your local Bir buddies with bikes, scooties, and taxis. Gen Z energy, Himachali heart, and 1000+ happy riders since 2018. Whether you're exploring the Bir cafés, heading to Billing for paragliding, or just cruising through the mountains, we've got your ride covered.",
  highlights: [
    "Local Business",
    "Trusted by 1000+ Riders",
    "Near Bir Bus Stand",
  ],
};

export const services = [
  {
    id: "scooty",
    icon: "🛵",
    title: "Scooty Rentals",
    description: "Perfect for solo travelers & couples. Easy rides on smooth roads.",
    features: ["Self-drive", "2 helmets included", "Pick-up anywhere"],
    pricing: {
      daily: "₹600-800",
      weekly: "₹3,500-5,000",
      deposit: "₹1,000",
      extraInfo: "Activa, Dio, Access available"
    }
  },
  {
    id: "bike",
    icon: "🏍️",
    title: "Bike Rentals",
    description: "Thrill on the hills. For adventure seekers who love mountain roads.",
    features: ["Powerful engines", "Safety gear", "Free roadside support"],
    pricing: {
      daily: "₹1,200-2,500",
      weekly: "₹7,000-15,000",
      deposit: "₹2,000",
      extraInfo: "Classic, Hunter, Meteor, Himalayan 411/450"
    }
  },
  {
    id: "taxi",
    icon: "🚕",
    title: "Taxi Services",
    description: "Comfortable rides for groups & senior citizens with polite drivers.",
    features: ["Group-friendly", "Senior-friendly", "Airport/station pickup"],
    pricing: {
      daily: "₹2,500-4,000",
      perKm: "₹15-20/km",
      deposit: "Nil",
      extraInfo: "Sedan, SUV, Tempo Traveller"
    }
  },
];

export const addOns = [
  "Guided tours to hidden spots",
  "Luggage transfer service",
  "Local guides & trip planning",
  "Emergency support 24/7",
];

export const vehicles = [
  {
    id: "activa",
    name: "Honda Activa",
    category: "Scooty",
    price: "₹600/day",
    specs: {
      engine: "110cc",
      mileage: "45-50 km/l",
      seating: "2 persons",
      fuelType: "Petrol"
    },
    features: ["Automatic", "Comfortable seat", "Good mileage", "Easy to ride"],
    available: true,
    badge: "Most Popular"
  },
  {
    id: "access",
    name: "Suzuki Access",
    category: "Scooty",
    price: "₹600/day",
    specs: {
      engine: "125cc",
      mileage: "40-45 km/l",
      seating: "2 persons",
      fuelType: "Petrol"
    },
    features: ["Powerful engine", "Large under-seat storage", "LED lights", "Smooth ride"],
    available: true
  },
  {
    id: "classic-350",
    name: "Royal Enfield Classic 350",
    category: "Bike",
    price: "₹1,200/day",
    specs: {
      engine: "349cc",
      mileage: "35-40 km/l",
      seating: "2 persons",
      fuelType: "Petrol"
    },
    features: ["Iconic design", "Perfect for highways", "Comfortable ride", "Premium feel"],
    available: true,
    badge: "Best Seller"
  },
  {
    id: "himalayan-411",
    name: "Royal Enfield Himalayan 411",
    category: "Bike",
    price: "₹1,500/day",
    specs: {
      engine: "411cc",
      mileage: "30-35 km/l",
      seating: "2 persons",
      fuelType: "Petrol"
    },
    features: ["Adventure ready", "Off-road capable", "Long seat", "Durable"],
    available: true,
    badge: "Adventure"
  },
  {
    id: "himalayan-450",
    name: "Royal Enfield Himalayan 450",
    category: "Bike",
    price: "₹2,500/day",
    specs: {
      engine: "452cc",
      mileage: "30-33 km/l",
      seating: "2 persons",
      fuelType: "Petrol"
    },
    features: ["Latest model", "Advanced tech", "Powerful engine", "Premium adventure"],
    available: true,
    badge: "New Arrival"
  },
  {
    id: "hunter-350",
    name: "Royal Enfield Hunter 350",
    category: "Bike",
    price: "₹1,200/day",
    specs: {
      engine: "349cc",
      mileage: "35-40 km/l",
      seating: "2 persons",
      fuelType: "Petrol"
    },
    features: ["Retro style", "Nimble handling", "City-friendly", "Modern features"],
    available: true
  },
  {
    id: "meteor-350",
    name: "Royal Enfield Meteor 350",
    category: "Bike",
    price: "₹1,500/day",
    specs: {
      engine: "349cc",
      mileage: "35-40 km/l",
      seating: "2 persons",
      fuelType: "Petrol"
    },
    features: ["Cruiser style", "Comfortable ride", "Bluetooth connectivity", "Premium touring"],
    available: true
  },
  {
    id: "duke",
    name: "KTM Duke 200/250",
    category: "Bike",
    price: "₹1,200/day",
    specs: {
      engine: "200-250cc",
      mileage: "30-35 km/l",
      seating: "2 persons",
      fuelType: "Petrol"
    },
    features: ["Sporty design", "Quick acceleration", "Lightweight", "Modern tech"],
    available: true
  },
  {
    id: "sedan",
    name: "Sedan (Swift Dzire / Etios)",
    category: "Taxi",
    price: "₹2,500/day",
    specs: {
      engine: "1200cc",
      mileage: "18-20 km/l",
      seating: "4+1 persons",
      fuelType: "Petrol/Diesel"
    },
    features: ["AC", "Music system", "Spacious", "Comfortable"],
    available: true
  }
];

export const whyChooseUs = [
  {
    title: "Local Experts",
    description: "Born & raised in Bir. We know every road, café, and secret spot.",
    icon: "MapPin",
  },
  {
    title: "Easy Payments",
    description: "UPI, or cash. Pay however you like.",
    icon: "CreditCard",
  },
  {
    title: "Safety First",
    description: "Well-maintained vehicles, helmets, and 24/7 support.",
    icon: "Shield",
  },
  {
    title: "Pickup Anywhere",
    description: "Stay in Bir, Billing, or nearby? We'll pick you up for free.",
    icon: "MapPinned",
  },
  {
    title: "24/7 WhatsApp Support",
    description: "Message anytime. We reply fast. No call centers, just us.",
    icon: "MessageCircle",
  },
  {
    title: "Flexible Bookings",
    description: "Cancel or reschedule hassle-free. We get it, plans change.",
    icon: "Calendar",
  },
];

export const testimonials = [
  {
    name: "Rohan M.",
    text: "Rented a scooty for 3 days. The guys were super chill and helpful. Bike was in great condition!",
    rating: 5,
  },
  {
    name: "Priya & Arjun",
    text: "Perfect service for our honeymoon trip! They even suggested amazing cafés in Bir. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah K.",
    text: "Solo female traveler here. Felt completely safe. The team was respectful and professional. 10/10!",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "Do I need a driving license?",
    answer:
      "Yes! A valid driving license is mandatory for self-drive scooties and bikes. We don't provide vehicles on Learner's Licenses. For taxis, our driver handles everything.",
  },
  {
    question: "What documents do I need to provide?",
    answer:
      "You must provide a valid address proof in original (Aadhaar card, Voter ID, or Passport) and a copy of your Driving License. These will be deposited at pickup and returned when you drop off the vehicle. We may deny the booking if you fail to produce these documents.",
  },
  {
    question: "When do I need to make payment?",
    answer:
      "All payments must be made in advance before taking the scooty/bike on rent. We accept UPI (Google Pay, PhonePe, Paytm), card payments via Axis POS machine, and cash.",
  },
  {
    question: "Are helmets provided? What if they're damaged?",
    answer:
      "Yes! Both helmets are compulsory during the ride. Please return the same helmet that was provided. If found misplaced or broken, you'll have to pay ₹1,000 additional as helmet charge.",
  },
  {
    question: "Is tripling allowed on two-wheelers?",
    answer:
      "No! Tripling is strictly prohibited on two-wheelers. If found with 3 people, you'll have to pay double the rent and will be responsible for any challans (fines).",
  },
  {
    question: "What if the vehicle gets damaged in an accident?",
    answer:
      "If the two-wheeler meets with an accident and gets damaged, you'll have to pay all repair expenses. If you want to do the repair yourself, you must inform Bir Billing Riders first.",
  },
  {
    question: "What about the fuel?",
    answer:
      "Please fill fuel as per your usage. Rent will not be reduced based on fuel remaining in the vehicle. You're responsible for refueling during your rental period.",
  },
  {
    question: "What time do I need to return the vehicle?",
    answer:
      "Please return your vehicle on or before 9:00 AM. After this, late charges apply: ₹200/hour for scooty and ₹300/hour for bike.",
  },
  {
    question: "Will you take a video before I rent?",
    answer:
      "Yes! We take video proof before handing over the vehicle. This protects both parties and helps you prove the vehicle condition when returning it.",
  },
  {
    question: "Can you pick up from my hotel/homestay?",
    answer:
      "Yes! Whether you're in Bir, Billing, or nearby areas, we offer free pickup and drop-off. Just share your location on WhatsApp, and we'll handle the rest.",
  },
  {
    question: "What if the vehicle breaks down?",
    answer:
      "Call or WhatsApp us immediately if there's any mechanical issue. We'll either fix it on-site or provide a replacement vehicle ASAP. No extra charges for mechanical breakdowns.",
  },
  {
    question: "Can I extend my rental period?",
    answer:
      "Of course! Just let us know via WhatsApp, and we'll extend based on availability. Himachal is addictive — we understand if you want to stay longer!",
  },
];

export const contactInfo = {
  title: "Ready to Ride? Let's Roll!",
  subtitle: "Book now via WhatsApp or give us a call. We're just a message away.",
  paymentMethods: ["UPI", "Cash"],
};
