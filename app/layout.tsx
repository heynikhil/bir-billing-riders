import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { seoData, businessInfo } from "@/config/content";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.keywords,
  authors: [{ name: businessInfo.name }],
  creator: businessInfo.name,
  openGraph: {
    title: seoData.title,
    description: seoData.description,
    url: "https://birbillingriders.com", // Update with your actual domain
    siteName: businessInfo.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: seoData.ogImage,
        width: 1200,
        height: 630,
        alt: businessInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.title,
    description: seoData.description,
    images: [seoData.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here later
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org structured data for Local Business
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessInfo.name,
    "image": "/logo.png",
    "@id": "https://birbillingriders.com",
    "url": "https://birbillingriders.com",
    "telephone": businessInfo.phone,
    "email": businessInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Bir Bus Stand",
      "addressLocality": "Bir",
      "addressRegion": "Himachal Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.0504,
      "longitude": 76.7241
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "07:00",
      "closes": "21:00"
    },
    "priceRange": "₹₹",
    "description": seoData.description,
    "foundingDate": "2018",
    "sameAs": [
      businessInfo.instagramUrl
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Rental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Scooty Rental",
            "description": "Self-drive scooties for easy city rides"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bike Rental",
            "description": "Powerful bikes for mountain adventures"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Taxi Service",
            "description": "Comfortable taxi rides with professional drivers"
          }
        }
      ]
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}