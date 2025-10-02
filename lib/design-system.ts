/**
 * ICD Foundation Design System
 * Centralized configuration for consistent UI across the entire site
 */

export const designSystem = {
  // Color Palette
  colors: {
    // Primary brand colors
    primary: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6', // Main brand purple
      900: '#4c1d95',
      950: '#2e1065',
    },
    // Accent colors
    accent: {
      gold: '#F59E0B',
      green: '#059669',
      red: '#DC2626',
      blue: '#2563EB',
    },
    // Neutral colors with proper contrast
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a',
    },
    // Semantic colors
    semantic: {
      success: '#059669',
      warning: '#F59E0B',
      error: '#DC2626',
      info: '#2563EB',
    },
  },

  // Typography scale
  typography: {
    fontFamily: {
      display: 'var(--font-source-sans)',
      body: 'var(--font-source-sans)',
      mono: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1.15' }],
      '6xl': ['3.75rem', { lineHeight: '1.1' }],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 900,
    },
  },

  // Spacing scale
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },

  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  },

  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    base: '250ms ease-in-out',
    slow: '350ms ease-in-out',
    slower: '500ms ease-in-out',
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-index scale
  zIndex: {
    base: 0,
    dropdown: 10,
    sticky: 20,
    overlay: 30,
    modal: 40,
    popover: 50,
    tooltip: 60,
    toast: 70,
  },
};

// Component variants configuration
export const componentVariants = {
  // Button variants
  button: {
    primary: {
      base: 'bg-primary-800 text-white hover:bg-primary-700 focus:ring-primary-500',
      outline: 'border-2 border-primary-800 text-primary-800 hover:bg-primary-50',
      ghost: 'text-primary-800 hover:bg-primary-50',
    },
    secondary: {
      base: 'bg-neutral-200 text-neutral-900 hover:bg-neutral-300 focus:ring-neutral-500',
      outline: 'border-2 border-neutral-400 text-neutral-700 hover:bg-neutral-50',
      ghost: 'text-neutral-700 hover:bg-neutral-100',
    },
    accent: {
      gold: 'bg-accent-gold text-white hover:bg-amber-500',
      green: 'bg-accent-green text-white hover:bg-green-600',
      blue: 'bg-accent-blue text-white hover:bg-blue-600',
      red: 'bg-accent-red text-white hover:bg-red-600',
    },
    sizes: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
      xl: 'px-8 py-4 text-xl',
    },
  },

  // Card variants
  card: {
    default: 'bg-white border border-neutral-200 rounded-lg shadow-sm',
    elevated: 'bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow',
    outlined: 'bg-white border-2 border-neutral-300 rounded-lg',
    filled: 'bg-neutral-50 border border-neutral-200 rounded-lg',
    interactive: 'bg-white border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-all hover:border-primary-300',
  },

  // Section variants
  section: {
    default: 'py-16 px-4 sm:px-6 lg:px-8',
    compact: 'py-8 px-4 sm:px-6 lg:px-8',
    spacious: 'py-24 px-4 sm:px-6 lg:px-8',
    hero: 'py-24 lg:py-32 px-4 sm:px-6 lg:px-8',
  },

  // Text variants
  text: {
    heading: {
      h1: 'text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-neutral-900',
      h2: 'text-3xl lg:text-4xl font-display font-bold text-neutral-900',
      h3: 'text-2xl lg:text-3xl font-display font-semibold text-neutral-900',
      h4: 'text-xl lg:text-2xl font-display font-semibold text-neutral-900',
      h5: 'text-lg lg:text-xl font-display font-medium text-neutral-900',
      h6: 'text-base lg:text-lg font-display font-medium text-neutral-900',
    },
    body: {
      large: 'text-lg lg:text-xl text-neutral-700 leading-relaxed',
      base: 'text-base text-neutral-700 leading-normal',
      small: 'text-sm text-neutral-600 leading-normal',
      xs: 'text-xs text-neutral-600 leading-tight',
    },
  },

  // Background patterns
  backgrounds: {
    gradient: {
      primary: 'bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900',
      hero: 'bg-gradient-to-br from-primary-800 via-purple-700 to-purple-900',
      subtle: 'bg-gradient-to-br from-neutral-50 to-neutral-100',
    },
    pattern: {
      dots: `backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23FFFFFF\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"`,
      grid: `backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23FFFFFF\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"`,
    },
  },
};

// Utility function to generate consistent class names
export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

// Theme configuration for CSS variables
export const cssVariables = `
  :root {
    /* Colors */
    --color-primary: ${designSystem.colors.primary[800]};
    --color-primary-hover: ${designSystem.colors.primary[700]};
    --color-primary-light: ${designSystem.colors.primary[100]};

    --color-accent-gold: ${designSystem.colors.accent.gold};
    --color-accent-green: ${designSystem.colors.accent.green};
    --color-accent-blue: ${designSystem.colors.accent.blue};
    --color-accent-red: ${designSystem.colors.accent.red};

    --color-text-primary: ${designSystem.colors.neutral[900]};
    --color-text-secondary: ${designSystem.colors.neutral[700]};
    --color-text-muted: ${designSystem.colors.neutral[600]};
    --color-text-light: ${designSystem.colors.neutral[500]};

    --color-bg-primary: #ffffff;
    --color-bg-secondary: ${designSystem.colors.neutral[50]};
    --color-bg-tertiary: ${designSystem.colors.neutral[100]};

    --color-border: ${designSystem.colors.neutral[200]};
    --color-border-hover: ${designSystem.colors.neutral[300]};

    /* Spacing */
    --spacing-xs: ${designSystem.spacing.xs};
    --spacing-sm: ${designSystem.spacing.sm};
    --spacing-md: ${designSystem.spacing.md};
    --spacing-lg: ${designSystem.spacing.lg};
    --spacing-xl: ${designSystem.spacing.xl};

    /* Transitions */
    --transition-fast: ${designSystem.transitions.fast};
    --transition-base: ${designSystem.transitions.base};
    --transition-slow: ${designSystem.transitions.slow};

    /* Shadows */
    --shadow-sm: ${designSystem.shadows.sm};
    --shadow-md: ${designSystem.shadows.md};
    --shadow-lg: ${designSystem.shadows.lg};
    --shadow-xl: ${designSystem.shadows.xl};
  }
`;

export default designSystem;