import { ReactNode } from 'react';
import { cn } from '@/lib/design-system';
import { componentVariants } from '@/lib/design-system';

interface SectionProps {
  children: ReactNode;
  variant?: 'default' | 'compact' | 'spacious' | 'hero';
  background?: 'white' | 'gray' | 'gradient' | 'dark';
  className?: string;
  id?: string;
}

export default function Section({
  children,
  variant = 'default',
  background = 'white',
  className,
  id
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-neutral-50',
    gradient: 'bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 hero-high-contrast dark-section relative overflow-hidden',
    dark: 'bg-neutral-900 text-white dark-section',
  };

  return (
    <section
      id={id}
      className={cn(
        componentVariants.section[variant],
        bgClasses[background],
        className
      )}
    >
      {background === 'gradient' && (
        <>
          {/* Subtle accent border at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-icd-gold via-icd-green to-icd-blue"></div>

          {/* Geometric accent elements */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-icd-gold to-transparent rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10">
            <div className="w-full h-full bg-gradient-to-tr from-icd-green to-transparent rounded-full blur-3xl"></div>
          </div>
        </>
      )}
      <div className={background === 'gradient' ? 'relative' : ''}>
        {children}
      </div>
    </section>
  );
}