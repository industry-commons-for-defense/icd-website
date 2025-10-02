import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Heading, Text } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact - Industry Commons for Defense",
  description: "Get in touch with the ICD Foundation for membership, consulting, partnerships, or general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header Section */}
      <Section variant="spacious" background="white">
        <Container size="md">
          <Heading level="h1" className="mb-8 text-center">
            Get Started with ICD
          </Heading>
          <Text variant="large" className="text-center mb-12">
            Join the collaborative framework that&apos;s transforming defense technology development.
          </Text>
        </Container>
      </Section>

      {/* Stakeholder Cards */}
      <Section variant="default" background="gray">
        <Container size="lg">
          <Grid cols={2} gap="lg" className="mb-12">
            <Card variant="elevated" padding="lg">
              <Heading level="h3" className="mb-4 text-primary-800">
                For Government Agencies
              </Heading>
              <Text variant="base" className="mb-6">
                Accelerate your technology acquisition and deployment through collaborative frameworks.
              </Text>
              <ul className="space-y-2 mb-6 text-neutral-700">
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">✓</span>
                  Pilot program participation
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">✓</span>
                  Technical Steering Committee involvement
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">✓</span>
                  Framework governance participation
                </li>
              </ul>
              <Button
                href="#contact-form"
                variant="primary"
                size="lg"
              >
                Contact Us
              </Button>
            </Card>

            <Card variant="elevated" padding="lg">
              <Heading level="h3" className="mb-4 text-accent-blue">
                For Industry Partners
              </Heading>
              <Text variant="base" className="mb-6">
                Expand your market reach and collaborate on cutting-edge defense technologies.
              </Text>
              <ul className="space-y-2 mb-6 text-neutral-700">
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">✓</span>
                  Partnership program enrollment
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">✓</span>
                  Collaborative development opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">✓</span>
                  Market expansion support
                </li>
              </ul>
              <Button
                href="#contact-form"
                variant="accent"
                color="blue"
                size="lg"
              >
                Join Program
              </Button>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Onboarding Process */}
      <Section variant="default" background="white">
        <Container size="md">
          <Heading level="h2" className="mb-12 text-center">
            Onboarding Process
          </Heading>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-primary-800 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 font-semibold text-lg">
                1
              </div>
              <div className="flex-1">
                <Heading level="h4" className="mb-2">Initial Consultation</Heading>
                <Text>Schedule a consultation to discuss your organization&apos;s needs and alignment with ICD objectives.</Text>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-accent-gold text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 font-semibold text-lg">
                2
              </div>
              <div className="flex-1">
                <Heading level="h4" className="mb-2">Framework Review</Heading>
                <Text>Review the ICD Framework documentation and licensing requirements relevant to your use case.</Text>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-accent-green text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 font-semibold text-lg">
                3
              </div>
              <div className="flex-1">
                <Heading level="h4" className="mb-2">Pilot Participation</Heading>
                <Text>Begin with a pilot project to demonstrate framework capabilities and benefits.</Text>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-accent-blue text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 font-semibold text-lg">
                4
              </div>
              <div className="flex-1">
                <Heading level="h4" className="mb-2">Full Integration</Heading>
                <Text>Scale to full framework participation with access to all collaboration tools and resources.</Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section variant="default" background="gray" id="contact-form">
        <Container size="md">
          <Card variant="filled" padding="lg">
            <Heading level="h2" className="mb-6 text-center">
              Contact the ICD Foundation
            </Heading>

            <form className="space-y-6" action="mailto:contact@icd-defense.org" method="post" encType="text/plain">
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
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-neutral-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-neutral-700 mb-2">
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="membership">Membership Information</option>
                  <option value="consulting">Consulting Services</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="pilot">Pilot Program Interest</option>
                  <option value="technical">Technical Questions</option>
                  <option value="media">Media Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  className="mt-1 mr-3"
                />
                <label htmlFor="consent" className="text-sm text-neutral-700">
                  I consent to being contacted by the ICD Foundation regarding my inquiry. *
                </label>
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="flex-1"
                >
                  Send Message
                </Button>
                <Button
                  href="/waitlist"
                  variant="accent"
                  color="gold"
                  size="lg"
                  className="flex-1"
                >
                  Apply to Waitlist
                </Button>
              </div>
            </form>
          </Card>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section variant="default" background="white">
        <Container size="md">
          <Heading level="h2" className="mb-12 text-center">
            Frequently Asked Questions
          </Heading>

          <div className="space-y-8">
            <Card variant="outlined" padding="lg">
              <Heading level="h3" className="mb-3">
                How do I become a member of the ICD Steering Body?
              </Heading>
              <Text>
                ICD Steering Body membership is available to FFRDCs, UARCs, and qualified industry partners. Government agencies participate through partnership agreements rather than membership, as they cannot be members of a non-profit organization. Contact us directly to learn about the application process and requirements.
              </Text>
            </Card>

            <Card variant="outlined" padding="lg">
              <Heading level="h3" className="mb-3">
                What consulting services does the ICD Foundation offer?
              </Heading>
              <Text>
                We provide strategic consulting on defense technology collaboration, framework implementation, licensing guidance, and ecosystem development. Our experts help organizations navigate the ICD framework and maximize collaboration opportunities.
              </Text>
            </Card>

            <Card variant="outlined" padding="lg">
              <Heading level="h3" className="mb-3">
                Can I schedule a meeting or demonstration?
              </Heading>
              <Text>
                Absolutely! We offer briefings, demonstrations, and consultation sessions for interested organizations. Use the contact form above or email us directly to schedule a meeting with our team.
              </Text>
            </Card>

            <Card variant="outlined" padding="lg">
              <Heading level="h3" className="mb-3">
                How quickly can I expect a response?
              </Heading>
              <Text>
                We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please indicate the priority in your message subject line.
              </Text>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}