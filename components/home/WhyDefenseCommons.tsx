'use client';

import { Shield, Users, CheckCircle } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

const iconMap = {
  shield: Shield,
  users: Users,
  'check-circle': CheckCircle,
};

const pillars = [
  {
    id: "protect-ip",
    title: "Protect IP, Share Securely",
    description: "Our open license ensures innovators can share code with government and industry while retaining rights.",
    icon: "shield" as const
  },
  {
    id: "build-together",
    title: "Build Together, Without Duplication",
    description: "A federated, open repo for defense software — reducing duplication and accelerating delivery.",
    icon: "users" as const
  },
  {
    id: "aligned-mandates",
    title: "Aligned with Federal Mandates",
    description: "Designed to meet the SHARE-IT Act and evolving policy for modular, reusable, sovereign code.",
    icon: "check-circle" as const
  }
];

export default function WhyDefenseCommons() {
  return (
    <Section background="gray">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Why Defense Commons?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon] || Shield;
            return (
              <div
                key={pillar.id}
                className="text-center group hover:transform hover:scale-105 transition-all duration-200"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-primary-100 group-hover:bg-primary-200 transition-colors">
                  <Icon className="h-10 w-10 text-primary-800" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}