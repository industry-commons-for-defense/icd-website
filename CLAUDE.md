# Claude Development Guidelines for ICD Website

## Multi-Agent Development Approach

This project uses specialized agent roles for different aspects of development. See `AGENTS.md` for detailed role definitions:

- **Frontend Agent**: UI/UX development, React components, user-facing features
- **Backend Agent**: API endpoints, data processing, server-side logic
- **Testing Agent**: Quality assurance, test coverage, validation
- **DevOps Agent**: Deployment, infrastructure, production operations
- **Accessibility Agent**: WCAG compliance, universal usability

When working on features, invoke the appropriate agent role to ensure focused, high-quality development.

## Current Priority: Waitlist Implementation

The website currently has broken `/waitlist` links throughout. This needs immediate attention:

1. **Backend Infrastructure**: Set up API endpoint and database for waitlist submissions
2. **Frontend Page**: Create the missing `/app/waitlist/page.tsx`
3. **Form Handling**: Replace mailto links with proper API integration
4. **Testing**: Comprehensive test coverage for the new functionality
5. **Deployment**: Configure backend hosting (currently static-only)

## Quality Standards & Testing Protocol

### Pre-Commit Requirements

**NEVER push to main without completing ALL validation steps:**

1. **Visual Validation** - Every UI change must be visually verified
2. **Build Validation** - `npm run build` must pass without errors
3. **Local Testing** - All functionality must work on local dev server
4. **Accessibility Testing** - Contrast ratios and WCAG compliance verified
5. **Cross-browser Testing** - Basic functionality verified in multiple browsers

### Current Issues to Address

Before any new features, fix these existing problems:

- [ ] Missing "Secure Collaboration" Shield icon in Core Components
- [ ] Footer text contrast still insufficient against dark background
- [ ] ICD custom colors not rendering consistently across components
- [ ] **CRITICAL**: Waitlist endpoint missing - all `/waitlist` links return 404
- [ ] Contact form uses mailto instead of proper API endpoint
- [ ] No backend infrastructure for form submissions

### Agent Workflow for Waitlist Implementation

When implementing the waitlist feature, follow this agent-based workflow:

1. **Backend Agent First**:
   ```bash
   # Create API infrastructure
   - Set up /api/waitlist endpoint
   - Configure database (PostgreSQL/Supabase recommended)
   - Implement validation and rate limiting
   - Set up email notifications
   ```

2. **Frontend Agent Second**:
   ```bash
   # Create user interface
   - Build /app/waitlist/page.tsx
   - Create reusable form components
   - Implement client-side validation
   - Add loading/success/error states
   ```

3. **Testing Agent Third**:
   ```bash
   # Validate functionality
   - Unit test all new components
   - Integration test API endpoints
   - E2E test the full user flow
   - Performance test form submission
   ```

4. **Accessibility Agent Fourth**:
   ```bash
   # Ensure universal access
   - Audit form accessibility
   - Test keyboard navigation
   - Verify screen reader compatibility
   - Check mobile usability
   ```

5. **DevOps Agent Last**:
   ```bash
   # Deploy to production
   - Set up backend hosting
   - Configure environment variables
   - Deploy and monitor
   - Set up error tracking
   ```

## Testing Implementation Strategy

### Phase 1: Immediate Testing Setup

```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
npm install --save-dev jest jest-environment-jsdom
npm install --save-dev @types/jest
npm install --save-dev eslint-plugin-testing-library eslint-plugin-jest-dom
```

### Phase 2: Test Structure

```
tests/
├── unit/
│   ├── components/
│   │   ├── Button.test.tsx
│   │   ├── Card.test.tsx
│   │   └── CoreComponents.test.tsx
│   └── utils/
├── integration/
│   ├── pages/
│   └── navigation/
└── e2e/
    ├── accessibility/
    └── visual-regression/
```

### Phase 3: Required Test Coverage

#### Unit Tests (>80% coverage)
- All UI components render without errors
- Props are handled correctly
- Event handlers function properly
- Color classes are applied correctly

#### Integration Tests
- Page routing works correctly
- Component interactions function
- Form submissions work
- API integrations (if any)

#### Visual/Accessibility Tests
- Contrast ratios meet WCAG AA standards
- Icons are visible and properly colored
- Text is readable at all sizes
- Focus management works properly

## Development Workflow

### 1. Local Development Loop

```bash
# Start development with validation
npm run dev          # Start dev server
npm run test:watch   # Run tests in watch mode
npm run lint         # Check code quality
npm run build        # Verify build works
```

### 2. Pre-Commit Checklist

**Visual Validation:**
- [ ] All icons are visible and correctly colored
- [ ] Text contrast meets accessibility standards
- [ ] Layout is responsive across screen sizes
- [ ] Hover states work correctly
- [ ] Loading states are handled

**Functional Validation:**
- [ ] All links navigate correctly
- [ ] Forms submit and validate properly
- [ ] Error states display appropriately
- [ ] Performance is acceptable

**Code Quality:**
- [ ] ESLint passes with no errors
- [ ] TypeScript compiles without errors
- [ ] Build process completes successfully
- [ ] No console errors in browser

### 3. Testing Commands

```bash
# Unit tests
npm run test                    # Run all tests
npm run test:watch             # Watch mode for development
npm run test:coverage          # Generate coverage report

# Integration tests
npm run test:integration       # Test page interactions

# Accessibility tests
npm run test:a11y              # Test accessibility compliance

# Visual tests
npm run test:visual            # Visual regression testing

# Build validation
npm run build                  # Full production build
npm run start                  # Test production build locally
```

## Component Testing Standards

### Example: CoreComponents.test.tsx

```typescript
import { render, screen } from '@testing-library/react';
import CoreComponents from '@/components/home/CoreComponents';

describe('CoreComponents', () => {
  it('renders all three components with icons', () => {
    render(<CoreComponents />);

    // Test that all sections are present
    expect(screen.getByText('Secure Collaboration')).toBeInTheDocument();
    expect(screen.getByText('Rapid Deployment')).toBeInTheDocument();
    expect(screen.getByText('Multi-Stakeholder')).toBeInTheDocument();

    // Test that icons are rendered (by checking for SVG elements)
    const icons = screen.getAllByRole('img', { hidden: true });
    expect(icons).toHaveLength(3);
  });

  it('has proper color classes applied', () => {
    const { container } = render(<CoreComponents />);

    // Test that background color classes are applied
    expect(container.querySelector('.bg-primary-800')).toBeInTheDocument();
    expect(container.querySelector('.bg-icd-gold')).toBeInTheDocument();
    expect(container.querySelector('.bg-icd-green')).toBeInTheDocument();
  });

  it('meets accessibility standards', () => {
    render(<CoreComponents />);

    // Test heading structure
    const mainHeading = screen.getByRole('heading', { level: 2 });
    expect(mainHeading).toHaveTextContent('Core Components');

    // Test that all sections have proper headings
    const sectionHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(sectionHeadings).toHaveLength(3);
  });
});
```

## Accessibility Testing

### Contrast Validation

```typescript
// tests/accessibility/contrast.test.ts
import { checkContrast } from './utils/contrast-checker';

describe('Color Contrast', () => {
  it('footer text meets WCAG AA standards', async () => {
    const footerBg = '#2e1065'; // primary-950
    const footerText = '#ffffff'; // white

    const contrastRatio = checkContrast(footerText, footerBg);
    expect(contrastRatio).toBeGreaterThanOrEqual(4.5); // WCAG AA standard
  });

  it('button states have sufficient contrast', async () => {
    const goldBg = '#F59E0B';
    const darkText = '#2e1065';

    const contrastRatio = checkContrast(darkText, goldBg);
    expect(contrastRatio).toBeGreaterThanOrEqual(4.5);
  });
});
```

## Git Workflow Standards

### Branch Protection Rules

```yaml
# .github/branch-protection.yml
main:
  required_status_checks:
    - build
    - test
    - lint
    - accessibility-check
  enforce_admins: true
  required_pull_request_reviews:
    required_approving_review_count: 1
    dismiss_stale_reviews: true
```

### Pre-commit Hooks

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged && npm run test && npm run build"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{css,scss}": ["prettier --write"]
  }
}
```

## Error Prevention Strategies

### 1. Component Story Documentation

Create Storybook stories for all components to catch visual regressions:

```typescript
// stories/CoreComponents.stories.tsx
export default {
  title: 'Home/CoreComponents',
  component: CoreComponents,
};

export const Default = () => <CoreComponents />;
export const DarkTheme = () => <div className="bg-gray-900 p-8"><CoreComponents /></div>;
```

### 2. Visual Regression Testing

```typescript
// tests/visual/components.visual.test.ts
import { test, expect } from '@playwright/test';

test('CoreComponents renders correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('[data-testid="core-components"]')).toHaveScreenshot();
});
```

### 3. Automated Accessibility Audits

```typescript
// tests/accessibility/audit.test.ts
import { injectAxe, checkA11y } from 'axe-playwright';

test('homepage passes accessibility audit', async ({ page }) => {
  await page.goto('/');
  await injectAxe(page);
  await checkA11y(page, null, {
    rules: {
      'color-contrast': { enabled: true },
      'keyboard-navigation': { enabled: true },
    }
  });
});
```

## Performance Standards

### Core Web Vitals Targets

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FCP (First Contentful Paint)**: < 1.8s

### Bundle Size Limits

- **Main Bundle**: < 250KB gzipped
- **Route Chunks**: < 100KB each
- **Total JavaScript**: < 500KB gzipped

## Deployment Checklist

### Pre-deployment Validation

- [ ] All tests pass locally
- [ ] Build completes without warnings
- [ ] Lighthouse audit scores >90 across all metrics
- [ ] Manual testing completed on dev server
- [ ] Accessibility audit passes
- [ ] Cross-browser compatibility verified

### Post-deployment Monitoring

- [ ] Production site loads correctly
- [ ] All functionality works as expected
- [ ] Performance metrics within targets
- [ ] No console errors in production
- [ ] Analytics tracking functional

## Learning from Current Issues

### Missing Icon Problem Root Cause Analysis

**Issue**: Shield icon not rendering despite correct code
**Root Cause**: Tailwind not generating custom color classes
**Prevention**:
- Visual component tests would catch this
- Automated screenshot comparisons would flag missing icons
- Accessibility tests would ensure all interactive elements are visible

### Footer Contrast Problem Root Cause Analysis

**Issue**: Low contrast text against dark background
**Root Cause**: Using opacity modifiers that reduce readability
**Prevention**:
- Automated contrast testing would catch this
- Accessibility audits would flag WCAG violations
- Visual regression tests would show readability issues

## Waitlist Technical Implementation Guide

### Backend Architecture Options

Since this is currently a static site, choose one of these approaches:

1. **Serverless Functions** (Recommended for simplicity):
   ```typescript
   // app/api/waitlist/route.ts
   import { NextRequest, NextResponse } from 'next/server';
   
   export async function POST(request: NextRequest) {
     // Handle waitlist submission
   }
   ```

2. **External Backend Service**:
   - Supabase (includes database + auth)
   - Railway/Render (for custom backend)
   - PlanetScale (for database only)

3. **Third-party Services**:
   - ConvertKit/Mailchimp (email-first approach)
   - Airtable (simple database)
   - Google Sheets API (quick MVP)

### Frontend Implementation Pattern

```typescript
// app/waitlist/page.tsx
'use client';

import { useState } from 'react';
import { WaitlistForm } from '@/components/forms/WaitlistForm';
import { useWaitlistSubmission } from '@/hooks/useWaitlistSubmission';

export default function WaitlistPage() {
  const { submit, isLoading, error, success } = useWaitlistSubmission();
  
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-display text-primary-900">
        Join the ICD Waitlist
      </h1>
      <WaitlistForm 
        onSubmit={submit}
        isLoading={isLoading}
        error={error}
        success={success}
      />
    </div>
  );
}
```

### Database Schema

```sql
-- Waitlist entries table
CREATE TABLE waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  organization VARCHAR(255),
  role VARCHAR(100),
  interest_areas TEXT[],
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  verified BOOLEAN DEFAULT FALSE,
  verification_token VARCHAR(255),
  ip_address INET,
  user_agent TEXT
);

-- Indexes for performance
CREATE INDEX idx_waitlist_email ON waitlist(email);
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at);
```

## Implementation Priority

1. **Immediate (This Sprint)**:
   - Set up backend infrastructure for waitlist
   - Create /app/waitlist/page.tsx
   - Implement form submission flow
   - Fix broken /waitlist links throughout site
   - Add basic form validation

2. **Short Term (Next Sprint)**:
   - Add email verification
   - Implement rate limiting
   - Create admin dashboard for waitlist management
   - Add comprehensive tests
   - Set up monitoring/alerts

3. **Medium Term (Following Sprints)**:
   - Add analytics tracking
   - Implement A/B testing for conversion
   - Create email automation sequences
   - Build waitlist segmentation features
   - Add export functionality

## Brand Specification Alignment

### Brand Compliance Requirements

**All implementations must align with the `/brand` page specifications:**

1. **Color Palette Compliance** - All components must use only colors defined in `/brand`
2. **Typography Standards** - Font usage must match brand specifications
3. **Icon Implementation** - Icons must be visible, properly colored, and consistent
4. **Component Design** - UI components must follow documented patterns
5. **Accessibility Standards** - Must meet contrast and usability requirements

### Functional Testing for Brand Alignment

#### Automated Brand Compliance Tests

```typescript
// tests/brand/compliance.test.ts
import { render, screen } from '@testing-library/react';
import { BRAND_COLORS, BRAND_FONTS } from '@/lib/brand-constants';

describe('Brand Specification Compliance', () => {
  it('all components use only approved brand colors', async () => {
    const { container } = render(<App />);

    // Extract all background and text color classes
    const elements = container.querySelectorAll('[class*="bg-"], [class*="text-"]');
    const colorClasses = Array.from(elements).flatMap(el =>
      Array.from(el.classList).filter(cls =>
        cls.startsWith('bg-') || cls.startsWith('text-')
      )
    );

    // Verify all colors are in approved brand palette
    const approvedClasses = [
      ...Object.values(BRAND_COLORS),
      'bg-white', 'bg-gray-50', 'bg-gray-100', // Standard approved neutrals
      'text-white', 'text-gray-600', 'text-gray-900'
    ];

    colorClasses.forEach(colorClass => {
      expect(approvedClasses).toContain(colorClass);
    });
  });

  it('Core Components icons are visible and use brand colors', () => {
    render(<CoreComponents />);

    // Verify Shield icon background uses approved purple
    const shieldIcon = screen.getByText('Secure Collaboration').closest('[data-testid]');
    const iconContainer = shieldIcon?.querySelector('.bg-primary-800, .bg-icd-purple');
    expect(iconContainer).toBeInTheDocument();

    // Verify Gold icon for Rapid Deployment
    const goldIcon = screen.getByText('Rapid Deployment').closest('[data-testid]');
    const goldContainer = goldIcon?.querySelector('.bg-icd-gold');
    expect(goldContainer).toBeInTheDocument();

    // Verify Green icon for Multi-Stakeholder
    const greenIcon = screen.getByText('Multi-Stakeholder').closest('[data-testid]');
    const greenContainer = greenIcon?.querySelector('.bg-icd-green');
    expect(greenContainer).toBeInTheDocument();
  });

  it('typography follows brand font specifications', () => {
    const { container } = render(<App />);

    // Check display fonts (headings)
    const headings = container.querySelectorAll('h1, h2, h3, .font-display');
    headings.forEach(heading => {
      const computedStyle = window.getComputedStyle(heading);
      expect(computedStyle.fontFamily).toContain('Playfair Display');
    });

    // Check body fonts
    const bodyElements = container.querySelectorAll('p, span, .font-sans');
    bodyElements.forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      expect(computedStyle.fontFamily).toContain('Source Sans Pro');
    });
  });

  it('footer contrast meets brand accessibility standards', () => {
    render(<Footer />);

    const footerLinks = screen.getAllByRole('link');
    footerLinks.forEach(link => {
      // Check that links have sufficient contrast
      const computedStyle = window.getComputedStyle(link);
      const bgColor = computedStyle.backgroundColor;
      const textColor = computedStyle.color;

      // This would use a contrast checking utility
      const contrastRatio = calculateContrastRatio(textColor, bgColor);
      expect(contrastRatio).toBeGreaterThanOrEqual(4.5); // WCAG AA
    });
  });
});
```

#### Visual Brand Alignment Tests

```typescript
// tests/brand/visual-alignment.test.ts
import { test, expect } from '@playwright/test';

test.describe('Brand Visual Alignment', () => {
  test('homepage matches brand color palette', async ({ page }) => {
    await page.goto('/');

    // Take screenshot of Core Components section
    const coreComponents = page.locator('[data-testid="core-components"]');
    await expect(coreComponents).toHaveScreenshot('core-components-brand.png');

    // Verify icons are visible and colored correctly
    const icons = coreComponents.locator('.rounded-full');
    await expect(icons.first()).toHaveCSS('background-color', 'rgb(91, 33, 182)'); // primary-800
    await expect(icons.nth(1)).toHaveCSS('background-color', 'rgb(245, 158, 11)'); // icd-gold
    await expect(icons.nth(2)).toHaveCSS('background-color', 'rgb(5, 150, 105)'); // icd-green
  });

  test('footer meets brand contrast requirements', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer');

    // Test footer link visibility
    const footerLinks = footer.locator('a');
    for (let i = 0; i < await footerLinks.count(); i++) {
      const link = footerLinks.nth(i);
      await expect(link).toBeVisible();

      // Check contrast by comparing text color against background
      const textColor = await link.evaluate(el =>
        window.getComputedStyle(el).color
      );
      const bgColor = await footer.evaluate(el =>
        window.getComputedStyle(el).backgroundColor
      );

      // Ensure sufficient contrast (this would use a helper function)
      expect(await calculateContrast(textColor, bgColor)).toBeGreaterThan(4.5);
    }
  });
});
```

#### Brand Compliance Pre-Commit Hook

```bash
#!/bin/bash
# .husky/pre-commit

echo "🎨 Checking brand compliance..."

# Run brand compliance tests
npm run test:brand

if [ $? -ne 0 ]; then
  echo "❌ Brand compliance tests failed!"
  echo "Please ensure all colors, fonts, and design elements match /brand specifications"
  exit 1
fi

# Check for unapproved color usage
echo "🔍 Scanning for unapproved color classes..."

# Look for non-brand colors in component files
UNAPPROVED_COLORS=$(grep -r "bg-red-\|bg-blue-\|bg-yellow-\|text-red-\|text-blue-\|text-yellow-" components/ app/ --include="*.tsx" --include="*.ts" | grep -v "// brand-approved")

if [ -n "$UNAPPROVED_COLORS" ]; then
  echo "❌ Found unapproved color classes:"
  echo "$UNAPPROVED_COLORS"
  echo ""
  echo "Please use only brand-approved colors from /brand page:"
  echo "- icd-purple (#5B21B6)"
  echo "- icd-gold (#F59E0B)"
  echo "- icd-green (#059669)"
  echo "- icd-blue (#2563EB)"
  echo "- icd-red (#DC2626)"
  echo "- primary-* (purple scale)"
  exit 1
fi

echo "✅ Brand compliance checks passed"
```

### Brand Testing Commands

```json
// package.json scripts addition
{
  "scripts": {
    "test:brand": "jest tests/brand --passWithNoTests",
    "test:brand:watch": "jest tests/brand --watch",
    "test:visual:brand": "playwright test tests/brand/visual-alignment.test.ts",
    "validate:colors": "scripts/validate-brand-colors.sh",
    "validate:typography": "scripts/validate-brand-typography.sh"
  }
}
```

### Brand Violation Prevention

#### 1. CSS-in-JS Color Validation

```typescript
// lib/brand-validation.ts
const APPROVED_COLORS = {
  purple: 'bg-primary-800, bg-icd-purple, text-primary-800, text-icd-purple',
  gold: 'bg-icd-gold, text-icd-gold',
  green: 'bg-icd-green, text-icd-green',
  blue: 'bg-icd-blue, text-icd-blue',
  red: 'bg-icd-red, text-icd-red',
  neutrals: 'bg-white, bg-gray-50, bg-gray-100, text-white, text-gray-600, text-gray-900'
};

export function validateColorClass(className: string): boolean {
  const allApproved = Object.values(APPROVED_COLORS).join(', ').split(', ');
  return allApproved.includes(className);
}
```

#### 2. Component Prop Validation

```typescript
// components/ui/Button.tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'gold' | 'green'; // Only brand variants
  // No generic 'color' prop to prevent arbitrary colors
}

const buttonVariants = {
  primary: 'bg-primary-800 text-white hover:bg-primary-700',
  secondary: 'bg-white text-primary-800 border border-primary-800',
  gold: 'bg-icd-gold text-white hover:bg-yellow-600',
  green: 'bg-icd-green text-white hover:bg-green-600'
};
```

### Integration with Development Workflow

#### Daily Brand Checks

```bash
# Daily automated brand alignment check
npm run test:brand && npm run validate:colors && npm run test:visual:brand
```

#### Release Validation

```yaml
# .github/workflows/brand-validation.yml
name: Brand Compliance Check
on:
  pull_request:
    branches: [main]

jobs:
  brand-compliance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run brand compliance tests
        run: npm run test:brand
      - name: Validate color usage
        run: npm run validate:colors
      - name: Visual brand alignment
        run: npm run test:visual:brand
```

### Brand Specification Source of Truth

The `/brand` page serves as the single source of truth for:
- **Color Palette**: All approved colors with hex codes
- **Typography**: Font families and usage guidelines
- **Component Designs**: Visual specifications for all UI elements
- **Accessibility Standards**: Contrast ratios and compliance requirements
- **Icon Library**: All approved icons and their usage context

**Any deviation from `/brand` specifications must be:**
1. Justified with written rationale
2. Approved through design review process
3. Documented as an exception with timeline for alignment
4. Tracked for future compliance updates

Remember: **Brand consistency is not negotiable. All implementations must align with the documented brand specification, verified through automated testing.**