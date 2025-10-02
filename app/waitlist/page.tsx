'use client';

import { useState } from 'react';
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { Heading, Text } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { waitlistService } from '@/lib/firebase-waitlist';

// export const metadata: Metadata = {
//   title: "Join Waitlist - Industry Commons for Defense",
//   description: "Be among the first to access the ICD collaborative framework for defense technology development.",
// };

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  role: string;
  interestAreas: string[];
}

const interestOptions = [
  { value: 'collaboration', label: 'Collaborative Development' },
  { value: 'ipProtection', label: 'IP Protection' },
  { value: 'techSharing', label: 'Technology Sharing' },
  { value: 'rapidDeployment', label: 'Rapid Deployment' },
  { value: 'governance', label: 'Framework Governance' },
  { value: 'pilotPrograms', label: 'Pilot Programs' },
];

export default function WaitlistPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    role: '',
    interestAreas: [],
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      interestAreas: prev.interestAreas.includes(value)
        ? prev.interestAreas.filter(area => area !== value)
        : [...prev.interestAreas, value]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Validate required fields
      if (!formData.email || !formData.firstName || !formData.lastName) {
        throw new Error('Please fill in all required fields');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Add to Firebase waitlist
      const result = await waitlistService.addToWaitlist({
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        organization: formData.organization,
        role: formData.role,
        interestAreas: formData.interestAreas,
      });

      if (!result.success) {
        throw new Error(result.error || 'Failed to join waitlist');
      }

      setSubmitStatus('success');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        role: '',
        interestAreas: [],
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Header Section */}
      <Section variant="spacious" background="gradient">
        <Container size="md">
          <div className="text-center">
            <Heading level="h1" className="mb-8 text-white">
              Join the ICD Waitlist
            </Heading>
            <Text variant="large" className="text-white/95 mb-12 max-w-2xl mx-auto">
              Be among the first to access the collaborative framework that&apos;s transforming defense technology development.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section variant="default" background="white">
        <Container size="md">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <Heading level="h4" className="mb-2">Early Access</Heading>
              <Text variant="small" className="text-neutral-600">
                Get priority access to ICD platform features and pilot programs
              </Text>
            </div>
            <div className="text-center">
              <div className="bg-accent-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔔</span>
              </div>
              <Heading level="h4" className="mb-2">Updates & Insights</Heading>
              <Text variant="small" className="text-neutral-600">
                Receive exclusive updates on framework development and opportunities
              </Text>
            </div>
            <div className="text-center">
              <div className="bg-accent-green/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <Heading level="h4" className="mb-2">Community Access</Heading>
              <Text variant="small" className="text-neutral-600">
                Connect with other defense technology innovators and partners
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* Waitlist Form */}
      <Section variant="default" background="gray">
        <Container size="md">
          <Card variant="elevated" padding="lg">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="bg-accent-green/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">✓</span>
                </div>
                <Heading level="h2" className="mb-4 text-accent-green">
                  Successfully Joined!
                </Heading>
                <Text variant="large" className="mb-8 max-w-md mx-auto">
                  Thank you for joining the ICD waitlist. We&apos;ll be in touch soon with updates and next steps.
                </Text>
                <Button
                  onClick={() => setSubmitStatus('idle')}
                  variant="secondary"
                >
                  Add Another Registration
                </Button>
              </div>
            ) : (
              <>
                <Heading level="h2" className="mb-6 text-center">
                  Secure Your Spot
                </Heading>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-neutral-700 mb-2">
                      Organization *
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-neutral-700 mb-2">
                      Your Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    >
                      <option value="">Select your role</option>
                      <option value="executive">Executive/Leadership</option>
                      <option value="technical">Technical/Engineering</option>
                      <option value="business">Business Development</option>
                      <option value="research">Research/Academic</option>
                      <option value="government">Government Official</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-3">
                      Areas of Interest
                    </label>
                    <div className="space-y-3">
                      {interestOptions.map(option => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="checkbox"
                            value={option.value}
                            checked={formData.interestAreas.includes(option.value)}
                            onChange={() => handleCheckboxChange(option.value)}
                            className="mr-3 h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-600"
                          />
                          <span className="text-sm text-neutral-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <Text variant="small" className="text-red-800">
                        {errorMessage || 'An error occurred. Please try again.'}
                      </Text>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </Button>

                  <Text variant="small" className="text-center text-neutral-600">
                    By joining, you agree to receive updates about ICD. You can unsubscribe at any time.
                  </Text>
                </form>
              </>
            )}
          </Card>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section variant="default" background="white">
        <Container size="md">
          <Heading level="h2" className="mb-12 text-center">
            Waitlist FAQ
          </Heading>
          
          <div className="space-y-8">
            <Card variant="outlined" padding="lg">
              <Heading level="h3" className="mb-3">
                When will I gain access?
              </Heading>
              <Text>
                We&apos;re onboarding organizations in phases. Waitlist members will receive priority access as we expand capacity, typically within 30-60 days.
              </Text>
            </Card>

            <Card variant="outlined" padding="lg">
              <Heading level="h3" className="mb-3">
                What happens after I join the waitlist?
              </Heading>
              <Text>
                You&apos;ll receive a confirmation email immediately, followed by regular updates on ICD development, upcoming features, and your position in the queue.
              </Text>
            </Card>

            <Card variant="outlined" padding="lg">
              <Heading level="h3" className="mb-3">
                Is there a cost to join?
              </Heading>
              <Text>
                Joining the waitlist is free. Pricing for ICD membership and services will be shared with waitlist members before general availability.
              </Text>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}