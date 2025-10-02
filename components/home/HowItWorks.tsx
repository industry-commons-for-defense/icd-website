'use client';

import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

const steps = [
  {
    number: "1",
    title: "Join",
    description: "Become a member of Defense Commons."
  },
  {
    number: "2",
    title: "Contribute",
    description: "Share or license code under the ICD framework."
  },
  {
    number: "3",
    title: "Build",
    description: "Reuse code, collaborate across projects, and launch faster."
  }
];

export default function HowItWorks() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-3">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Simple steps to accelerate defense innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-primary-800 text-white rounded-full flex items-center justify-center text-2xl font-bold group-hover:bg-primary-700 transition-colors">
                  <span>{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-300 border-y-4 border-y-transparent"></div>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}