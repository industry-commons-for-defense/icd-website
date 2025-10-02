# Industry Commons for Defense Foundation Website

The official website for the Industry Commons for Defense (ICD) Foundation, a 501(c)(6) nonprofit organization dedicated to accelerating defense innovation through collaborative frameworks.

## Overview

This website serves as the primary information hub for the ICD Framework, providing comprehensive documentation, resources, and onboarding information for government agencies, industry partners, developers, and allied organizations.

## Features

- **Modern Architecture**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Optimized for all devices and screen sizes
- **SEO Optimized**: Comprehensive metadata and structured content for search engines
- **Accessibility**: WCAG 2.1 compliant design and navigation
- **GitHub Pages**: Automated deployment and hosting
- **Performance**: Static site generation for optimal loading speeds

## Technology Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Fonts**: Source Sans 3 (all text - headings and body)
- **Icons**: Lucide React and Heroicons
- **Deployment**: GitHub Pages with GitHub Actions
- **License**: SW-ICD License v1.0

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/industry-commons-for-defense/icd-website.git
   cd icd-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

### Exporting for GitHub Pages

```bash
npm run export
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── framework/         # Framework documentation
│   ├── get-started/       # Onboarding information
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── Header.tsx         # Site navigation
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Landing page hero
│   └── ...               # Additional components
├── public/               # Static assets
├── .github/workflows/    # GitHub Actions for deployment
└── docs/                # Additional documentation
```

## Content Architecture

### Pages

1. **Home** (`/`) - Landing page with value propositions and key metrics
2. **About** (`/about`) - Mission, governance, leadership, and contact information
3. **Framework** (`/framework`) - Technical documentation and licensing models
4. **Get Started** (`/get-started`) - Onboarding process and partnership programs

### Components

- **Navigation**: Sticky header with responsive mobile menu
- **Hero Section**: Gradient background with call-to-action buttons
- **Benefits**: Stakeholder-specific value propositions
- **ROI Section**: Metrics and return on investment information
- **Footer**: Comprehensive site navigation and contact information

## Design System

### Colors

- **Primary**: ICD Purple (`#5B21B6`)
- **Secondary**: ICD Gold (`#F59E0B`)
- **Accent**: ICD Green (`#059669`)
- **Supporting**: ICD Red (`#DC2626`), ICD Blue (`#2563EB`)

### Typography

- **Display Font**: Source Sans 3 (clean sans-serif for all text)
- **Body Font**: Source Sans 3 (clean sans-serif for content)

### Responsive Breakpoints

- **Mobile**: 640px and below
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px and above

## Deployment

The website is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch. The deployment process:

1. Builds the Next.js application
2. Exports static files to the `out` directory
3. Deploys to GitHub Pages
4. Available at the configured custom domain

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the SW-ICD License v1.0 - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

For questions, issues, or contributions:

- **Email**: contact@icd-defense.org
- **Website**: https://icd-defense.org
- **GitHub**: https://github.com/industry-commons-for-defense

## Acknowledgments

- The ICD Foundation leadership and steering body
- Contributing government agencies and industry partners
- Open source community for tools and frameworks

---

© 2025 The ICD Foundation. All rights reserved. Licensed under SW-ICD License v1.0
