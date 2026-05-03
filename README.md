# Startify Blog

Official blog for the Startify platform - insights, guides, and resources for Tunisian entrepreneurs.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The blog will be available at **http://localhost:3001**

## 📁 Project Structure

```
startify-blog/
├── app/
│   ├── page.tsx              # Homepage
│   ├── blog/
│   │   ├── page.tsx          # Blog listing
│   │   └── [slug]/page.tsx   # Individual blog post
│   ├── features/page.tsx     # Features page
│   ├── team/page.tsx         # Team page
│   ├── contact/page.tsx      # Contact page
│   └── layout.tsx            # Root layout
├── components/
│   ├── Header.tsx            # Navigation header
│   └── Footer.tsx            # Footer
├── lib/
│   └── posts.ts              # Blog posts data (5 articles)
└── public/
    ├── logo.png              # Startify logo
    └── team/                 # Team member photos
        ├── chiheb nouri.png
        ├── ahmed mazigh.jpeg
        ├── roua khalfet.jpeg
        ├── yassine kharrat.jpeg
        ├── celia marrakchi.jpeg
        └── youssef ben lallahom.png
```

## 📝 Blog Articles

The blog includes 5 comprehensive articles:

1. **Understanding the Tunisian Startup Act** (Legal & Compliance)
   - Complete guide to Tunisia's Startup Act
   - Benefits, requirements, and application process
   - 8 min read

2. **AI-Powered Recruitment Guide** (HR & Recruitment)
   - How AI transforms recruitment
   - TeamBuilder features and best practices
   - 10 min read

3. **Legal Compliance Checklist** (Legal & Compliance)
   - Comprehensive checklist for Tunisian startups
   - Company formation to data protection
   - 12 min read

4. **Building a Sustainable Startup** (Sustainability & ESG)
   - Green business practices
   - ESG scoring and certifications
   - Green financing options
   - 9 min read

5. **Complete Fundraising Guide** (Funding & Investment)
   - Seed to Series A fundraising
   - Investor landscape in Tunisia
   - Pitch deck and term sheets
   - 15 min read

## 🎨 Design System

- **Colors**: Teal and Emerald gradient theme
- **Style**: Glassmorphism with rounded corners
- **Typography**: Bold headings, clean body text
- **Components**: Reusable UI components with hover effects

## 🔗 Navigation

- **Home**: Hero section + feature cards
- **Blog**: Article listing with categories
- **Features**: Detailed feature descriptions for ComplianceGuard & TeamBuilder
- **Team**: Team member profiles (6 members)
- **Contact**: Contact form + information

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: 19.2.4
- **Styling**: Tailwind CSS 4
- **Markdown**: react-markdown for blog content
- **TypeScript**: Full type safety

## 📦 Scripts

```bash
npm run dev      # Development server (port 3001)
npm run build    # Production build
npm run start    # Production server (port 3001)
npm run lint     # Run ESLint
```

## 🌐 Integration with Main Platform

The blog links to the main Startify platform at `http://localhost:3000` for:
- "Get Started" CTAs
- "Try Startify" buttons
- Feature deep links

## 👥 Team

- Chiheb Nouri
- Ahmed Mazigh
- Roua Khalfet
- Yassine Kharrat
- Celia Marrakchi
- Youssef Ben Lallahom

## 📧 Contact

- **Email**: contact@startify.tn
- **Support**: support@startify.tn
- **Location**: Tunis, Tunisia

---

Built with ❤️ for Tunisian entrepreneurs
