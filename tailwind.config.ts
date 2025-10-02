import type { Config } from "tailwindcss";

const config: any = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-icd-purple',
    'bg-icd-gold',
    'bg-icd-green',
    'bg-primary-800',
    'bg-primary-100',
    'bg-primary-50',
    'bg-red-600',
    'bg-blue-600',
    'bg-indigo-600',
    'text-icd-purple',
    'text-icd-gold',
    'text-icd-green',
    'text-icd-blue',
    'text-icd-red',
    'text-primary-200',
    'text-primary-800',
    'text-primary-900',
    'border-white',
    'hover:bg-white',
    'hover:text-primary-950'
  ],
  theme: {
    extend: {
      colors: {
        'icd-purple': '#5B21B6',
        'icd-gold': '#F59E0B',
        'icd-green': '#059669',
        'icd-red': '#DC2626',
        'icd-blue': '#2563EB',
        'primary': {
          '50': '#f5f3ff',
          '100': '#ede9fe',
          '200': '#ddd6fe',
          '300': '#c4b5fd',
          '400': '#a78bfa',
          '500': '#8b5cf6',
          '600': '#7c3aed',
          '700': '#6d28d9',
          '800': '#5b21b6',
          '900': '#4c1d95',
          '950': '#2e1065',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'display': ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
        'sans': ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};

export default config;