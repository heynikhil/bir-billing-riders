# 🏍 Bir Billing Riders Website

A modern, mobile-first, single-page website for **Bir Billing Riders** — a local vehicle rental service in Bir, Himachal Pradesh.

## 🚀 Features

- ✅ **Next.js 14** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for beautiful styling
- ✅ **No images** — CSS gradients & icons only
- ✅ **SEO optimized** with meta tags
- ✅ **Mobile-first** responsive design
- ✅ **WhatsApp & Call** integration
- ✅ **Comprehensive FAQ** section
- ✅ **Google Maps** embed
- ✅ **Smooth scrolling** navigation

## 📦 Installation

```bash
npm install
```

## 🏃‍♂️ Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Edit Content

All website content is in **one file** for easy editing:

```
config/content.ts
```

Update this file to change:
- ✏️ Phone numbers & WhatsApp
- ✏️ Business details
- ✏️ Services & pricing
- ✏️ Testimonials
- ✏️ FAQs
- ✏️ Social media links

### Important: Update Before Going Live

1. **Phone Number**: Replace `+91-XXXXX-XXXXX` with your actual number
2. **WhatsApp**: Replace `+91XXXXXXXXXX` (no spaces/dashes)
3. **Google Maps**: Update the embed URL with your exact location
4. **Domain**: Update in `app/layout.tsx` (Line ~37)

## 🌐 Build for Production

```bash
npm run build
```

## 🚢 Deploy

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Netlify
```bash
npm run build
# Deploy the `.next` folder
```

## 📱 Contact Integration

- **WhatsApp**: Click-to-chat with pre-filled message
- **Phone**: Direct call on mobile devices
- **Floating buttons**: Always visible on all pages

## 🎨 Color Scheme

- **Primary**: Sky Blue `#38BDF8`
- **Secondary**: Indigo `#4F46E5`
- **Accent**: Yellow `#FACC15`

## 📄 SEO Setup

The website is SEO-ready with:
- Meta tags
- OpenGraph tags
- Twitter cards
- Robots.txt
- Schema markup (can be added)

### Add Google Analytics (Optional)

In `app/layout.tsx`, add:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

## 📞 Support

For questions or customization help, contact the developer.

---

**Built with ❤️ for Bir Billing Riders**

*Ride Free. Feel Bir. | सफर आपका, बाइक हमारी।*# bir-billing-riders
