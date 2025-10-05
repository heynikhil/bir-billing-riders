# 🚀 Setup Guide for Bir Billing Riders Website

## ⚡ Quick Start

Your website is **ready to use**! Just update your contact info and deploy.

### 1️⃣ Update Your Contact Information

Edit **one file**: `config/content.ts`

```typescript
phone: "+91-XXXXX-XXXXX", // ⚠️ REPLACE WITH YOUR ACTUAL NUMBER
whatsapp: "+91XXXXXXXXXX", // ⚠️ NO SPACES/DASHES (e.g., +919876543210)
```

### 2️⃣ Update Google Maps Location

In `config/content.ts`, find:

```typescript
googleMapsEmbed: "https://maps.google.com/maps?q=Bir+Bus+Stand&output=embed",
```

**How to get your exact location:**
1. Go to Google Maps
2. Find your exact location
3. Click "Share" → "Embed a map"
4. Copy the `src` URL from the iframe code
5. Replace the URL in `content.ts`

### 3️⃣ Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## 📂 Project Structure

```
bir-billing-riders/
├── app/
│   ├── layout.tsx          # SEO meta tags, fonts
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Top navigation
│   ├── Hero.tsx            # Main banner section
│   ├── About.tsx           # About us section
│   ├── Services.tsx        # Services grid
│   ├── WhyChooseUs.tsx     # Features section
│   ├── Testimonials.tsx    # Customer reviews
│   ├── FAQ.tsx             # Accordion FAQ
│   ├── Contact.tsx         # Contact form & map
│   ├── Footer.tsx          # Footer with links
│   └── FloatingButtons.tsx # WhatsApp & Call buttons
├── config/
│   └── content.ts          # 🔧 EDIT THIS FILE!
├── public/
│   ├── favicon.svg         # BB logo
│   └── robots.txt          # SEO file
├── tailwind.config.ts      # Tailwind settings
└── package.json
```

---

## 🎨 Customization Guide

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  sky: { 400: "#38BDF8" },      // Primary blue
  indigo: { 600: "#4F46E5" },   // Secondary purple
  yellow: { 400: "#FACC15" },   // Accent yellow
}
```

### Add More Testimonials

In `config/content.ts`:

```typescript
export const testimonials = [
  {
    name: "Customer Name",
    text: "Your review here",
    rating: 5,
  },
  // Add more...
];
```

### Update FAQs

In `config/content.ts`, edit the `faqs` array:

```typescript
{
  question: "Your question?",
  answer: "Your detailed answer here.",
}
```

### Change Services

Edit `config/content.ts` → `services` array.

---

## 🌐 Deployment

### Option 1: Vercel (Easiest)

1. Create a GitHub account (if you don't have one)
2. Create a new repository
3. Push your code:
   ```bash
   cd /tmp/bir-billing-riders
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
4. Go to [vercel.com](https://vercel.com)
5. Sign up with GitHub
6. Click "New Project"
7. Import your repository
8. Click "Deploy"
9. Done! Your site is live at `yourproject.vercel.app`

### Option 2: Netlify

1. Build the project:
   ```bash
   npm run build
   ```
2. Go to [netlify.com](https://netlify.com)
3. Drag & drop the `.next` folder
4. Done!

### Custom Domain

After deploying to Vercel/Netlify:
1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. Add custom domain in Vercel/Netlify dashboard
3. Update DNS records as instructed

---

## 📱 Testing Before Launch

### ✅ Checklist

- [ ] Phone number works (test by calling)
- [ ] WhatsApp link opens correctly
- [ ] Google Maps shows correct location
- [ ] All sections display properly
- [ ] Mobile view looks good
- [ ] FAQ accordion works
- [ ] Floating buttons visible
- [ ] Instagram link correct (@birbillingrider)

### Test on Mobile

1. Get your local IP: `ifconfig` (Mac/Linux) or `ipconfig` (Windows)
2. Open `http://YOUR_IP:3000` on your phone
3. Test all buttons

---

## 🔍 SEO Setup (After Launch)

### 1. Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your website
3. Verify ownership
4. Submit sitemap: `https://yoursite.com/sitemap.xml`

### 2. Google Analytics (Optional)

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID
3. Add to `app/layout.tsx`:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

### 3. Google My Business

1. Claim your business on Google
2. Add website URL
3. Get more visibility in local search

---

## 💡 Tips for Success

### Get More Traffic

1. **Share on Social Media**: Post your website on Instagram (@birbillingrider)
2. **QR Code**: Create a QR code linking to your site (use qr-code-generator.com)
3. **Print Materials**: Add website to business cards, pamphlets
4. **Local SEO**: Register on TripAdvisor, Google My Business

### Content Updates

- Update testimonials regularly
- Add seasonal offers in the hero section
- Post photos on Instagram and link to site

### Performance

- Keep images minimal (we're using CSS art!)
- Monitor load speed: [pagespeed.web.dev](https://pagespeed.web.dev)
- Aim for 90+ score

---

## 🆘 Troubleshooting

### WhatsApp Not Working?

- Ensure number format: `+91XXXXXXXXXX` (no spaces/dashes)
- Test link manually: `https://wa.me/91XXXXXXXXXX`

### Map Not Showing?

- Check Google Maps embed URL
- Ensure it includes `output=embed`

### Build Errors?

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Need Help?

- Check the README.md file
- Read Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Ask in developer communities

---

## 🎉 You're All Set!

Your website is:
- ✅ Mobile-friendly
- ✅ SEO-optimized
- ✅ Fast-loading
- ✅ Easy to update
- ✅ Professional-looking

Just update your contact info and launch! 🚀

**Questions?** Edit this file and add notes as needed.

---

*Built with ❤️ using Next.js + TypeScript + Tailwind CSS*
