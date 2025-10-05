# 📂 File Structure Guide

## 🗂️ Complete Project Layout

```
bir-billing-riders/
│
├── 📚 DOCUMENTATION (Read These!)
│   ├── START_HERE.md          ⭐ Read this first!
│   ├── README.md              Quick start guide
│   ├── SETUP_GUIDE.md         Detailed setup & deployment
│   ├── PROJECT_OVERVIEW.md    Complete project details
│   └── FILE_STRUCTURE.md      This file!
│
├── 🔧 CONFIGURATION (Edit These!)
│   ├── config/
│   │   └── content.ts         🔥 EDIT THIS! All website content
│   │
│   ├── tailwind.config.ts     Design system (colors, fonts)
│   ├── next.config.ts         Next.js settings
│   ├── tsconfig.json          TypeScript config
│   └── package.json           Dependencies
│
├── 🎨 APP (Main Pages)
│   └── app/
│       ├── layout.tsx         SEO, fonts, meta tags
│       ├── page.tsx           Main landing page
│       └── globals.css        Global styles
│
├── 🧩 COMPONENTS (UI Building Blocks)
│   └── components/
│       ├── Navbar.tsx         Top navigation bar
│       ├── Hero.tsx           Hero section with animation
│       ├── About.tsx          About us section
│       ├── Services.tsx       Services grid (scooty/bike/taxi)
│       ├── WhyChooseUs.tsx    Features section
│       ├── Testimonials.tsx   Customer reviews
│       ├── FAQ.tsx            Accordion FAQ (12 items)
│       ├── Contact.tsx        Contact info + Google Maps
│       ├── Footer.tsx         Footer with links
│       └── FloatingButtons.tsx WhatsApp + Call buttons
│
├── 🖼️ PUBLIC (Static Assets)
│   └── public/
│       ├── favicon.svg        BB logo
│       └── robots.txt         SEO file for search engines
│
└── 🔒 AUTO-GENERATED (Don't Edit!)
    ├── node_modules/          Dependencies (ignored by git)
    ├── .next/                 Build output
    └── .git/                  Git repository
```

---

## 🔥 Most Important Files

### 1. `config/content.ts` ⭐⭐⭐
**EDIT THIS FOR EVERYTHING!**

```typescript
// What you can edit here:
- Phone numbers
- WhatsApp number
- Business info
- Services
- Testimonials
- FAQs
- All text content
- Google Maps URL
- Social media links
```

### 2. `app/layout.tsx`
**SEO Settings**
- Meta tags
- OpenGraph
- Site title
- Description

### 3. `app/page.tsx`
**Main Page Structure**
- Imports all components
- Sets page layout

### 4. `tailwind.config.ts`
**Design System**
- Colors
- Fonts
- Animations

---

## 📁 What Each Folder Does

### `/app`
The main application code using Next.js App Router.
- `layout.tsx` wraps every page
- `page.tsx` is the home page
- `globals.css` has global styles

### `/components`
Reusable UI components. Each file is a section:
- **Navbar** → Top menu
- **Hero** → Big banner
- **About** → Who we are
- **Services** → What we offer
- **WhyChooseUs** → Why choose us
- **Testimonials** → Reviews
- **FAQ** → Questions
- **Contact** → Contact info
- **Footer** → Bottom section
- **FloatingButtons** → Fixed WhatsApp/Call

### `/config`
Configuration files for easy editing:
- `content.ts` → All website text (EDIT THIS!)

### `/public`
Static files accessible from the web:
- Images (if you add any)
- Favicon
- robots.txt

---

## 🎯 File Sizes

```
Total Project Size: ~350 KB (without node_modules)
node_modules: ~300 MB (dependencies)
```

**Super lightweight!** 🚀

---

## ✏️ Editing Guide

### To Change Text Content:
```
config/content.ts
```

### To Change Colors:
```
tailwind.config.ts
```

### To Change Page Layout:
```
app/page.tsx
```

### To Edit a Specific Section:
```
components/[SectionName].tsx
```

### To Update SEO:
```
app/layout.tsx
```

---

## 🚫 Don't Edit These

- `node_modules/` - Auto-generated dependencies
- `.next/` - Build output
- `package-lock.json` - Dependency lockfile
- `.git/` - Git history

---

## 📝 File Extensions Explained

| Extension | What It Is              |
| --------- | ----------------------- |
| `.tsx`    | TypeScript + React      |
| `.ts`     | TypeScript              |
| `.css`    | Styles                  |
| `.json`   | Configuration           |
| `.md`     | Documentation (Markdown)|
| `.svg`    | Vector image            |
| `.txt`    | Text file               |

---

## 🔍 Finding Stuff

### Want to edit phone number?
→ `config/content.ts` → Line 9

### Want to change hero text?
→ `config/content.ts` → Lines 25-32

### Want to update FAQ?
→ `config/content.ts` → Lines 120-180

### Want to add more services?
→ `config/content.ts` → Lines 45-70

### Want to change colors?
→ `tailwind.config.ts` → Lines 15-25

---

## 📦 Package Dependencies

Main dependencies in `package.json`:

```json
{
  "next": "15.x",           // React framework
  "react": "19.x",          // UI library
  "typescript": "5.x",      // Type checking
  "tailwindcss": "3.x",     // Styling
  "lucide-react": "latest"  // Icons
}
```

---

## 🎓 Learning the Structure

### If you're new to Next.js:

1. **Start with**: `config/content.ts`
   - This has all the text

2. **Then check**: `app/page.tsx`
   - See how components are arranged

3. **Explore**: `components/`
   - See individual section code

4. **Advanced**: `tailwind.config.ts`
   - Customize design system

---

## 🔧 Common Tasks

### Add a new section:
1. Create `components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add content to `config/content.ts`

### Change a color:
1. Edit `tailwind.config.ts`
2. Update color values
3. Save (auto-refresh!)

### Update text:
1. Edit `config/content.ts`
2. Find the section
3. Change the text
4. Save!

---

## 🌲 Full Tree View

```
bir-billing-riders/
├── START_HERE.md
├── README.md
├── SETUP_GUIDE.md
├── PROJECT_OVERVIEW.md
├── FILE_STRUCTURE.md
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── favicon.ico
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── WhyChooseUs.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── FloatingButtons.tsx
│
├── config/
│   └── content.ts         🔥
│
├── public/
│   ├── favicon.svg
│   └── robots.txt
│
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── eslint.config.mjs
```

---

## 💡 Pro Tips

1. **Always edit `config/content.ts` first**
   - 90% of changes happen here

2. **Use VS Code or Cursor**
   - Best editors for this project

3. **Save often**
   - Next.js auto-refreshes on save

4. **Test on mobile**
   - Most users will be on phones

5. **Read the comments**
   - Code has helpful comments

---

## 🎉 Summary

- **Total Files**: 33
- **Components**: 10
- **Config Files**: 1 (edit this!)
- **Documentation**: 5
- **Static Assets**: 7

**Everything you need, nothing you don't!** ✨

---

*This structure follows Next.js 14 App Router best practices*
