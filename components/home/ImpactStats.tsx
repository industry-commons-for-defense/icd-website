'use client';

import { TrendingDown, DollarSign, Zap } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

const stats = [
  {
    id: "duplication-reduction",
    value: "30-50%",
    label: "reduction in duplication",
    icon: TrendingDown
  },
  {
    id: "annual-savings",
    value: "$2.4B",
    label: "projected annual savings",
    icon: DollarSign
  },
  {
    id: "cui-access",
    value: "Months → Days",
    label: "Faster CUI access for startups",
    icon: Zap
  }
];

export default function ImpactStats() {
  return (
    <Section background="gradient" className="text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
            Proven Impact
          </h2>
          <p className="text-xl text-white/90">
            Government and Industry results from sharing data and code.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            
            return (
              <div key={stat.id} className="text-center group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-200">
                  <Icon className="h-12 w-12 text-icd-gold mx-auto mb-4" />
                  <div className="text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-white/90">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}