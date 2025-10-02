'use client';

import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const roles = [
  {
    id: "government",
    emoji: "🏛",
    title: "Government Technologists",
    tagline: "Field software faster. Cut duplication. Stay compliant.",
    benefits: [
      "Access a secure, federated repo aligned with the SHARE-IT Act.",
      "Reuse industry code with clear licensing and IP protections.",
      "Reduce vendor lock-in and accelerate delivery to the warfighter."
    ],
    ctaText: "Adopt ICD Standards",
    ctaLink: "/government"
  },
  {
    id: "industry",
    emoji: "🏭",
    title: "Industry Innovators (Startups & SMEs)",
    tagline: "Protect your IP. Win with government. Scale faster.",
    benefits: [
      "License your code under the ICD framework and retain property rights.",
      "Gain access to government-shared code and mission data.",
      "Eliminate 6–12 month delays for CUI access so you can start building day one."
    ],
    ctaText: "Join the Commons Waitlist",
    ctaLink: "/waitlist"
  },
  {
    id: "primes",
    emoji: "🛰",
    title: "Primes & Integrators",
    tagline: "Lower costs. Deliver faster. Align with mandates.",
    benefits: [
      "Reduce duplicate development across contracts by up to 50%.",
      "Reuse trusted, pre-cleared components under a sovereign license.",
      "Stay ahead of compliance while meeting government's modularity requirements."
    ],
    ctaText: "Become a Founding Member",
    ctaLink: "/founding-member"
  },
  {
    id: "developers",
    emoji: "🌱",
    title: "Developers & Researchers",
    tagline: "Build for mission impact. Share code that matters.",
    benefits: [
      "Contribute to the open-source repo under ICD.",
      "Gain visibility and credibility in the defense ecosystem.",
      "Access learning resources and community support."
    ],
    ctaText: "Contribute Code",
    ctaLink: "/contribute"
  }
];

export default function RoleSpecificHooks() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900">
            How does this help you?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {roles.map((role) => (
            <div
              key={role.id}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl" role="img" aria-label={role.title}>
                  {role.emoji}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {role.title}
                  </h3>
                  <p className="text-primary-800 font-medium">
                    {role.tagline}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {role.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-icd-green mt-1">•</span>
                    <span className="text-gray-600 text-sm leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href={role.ctaLink}
                variant="primary"
                size="sm"
                className="group"
              >
                <span>{role.ctaText}</span>
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}