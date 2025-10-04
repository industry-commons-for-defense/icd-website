import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { Heading, Text } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";

// This needs a full review for scope, clarity, and value proposition.
// The content is generally well-written, but it needs to be more specific about the benefits and value of the ICD Foundation.
// Things like the "Core Values" are good, but it isn't clear how ICD-F woudl achieve these.
// I think it needs to leave the reader with a clear understanding of what the ICD Foundation is, what it does, and why it matters.
// Why does ICD-F need to exist to realize these goals?
// Especially since there's a financial cost to membership, it needs to be clear how the proposed benefits will be achieved and what the value is to the member.
// Then there's the question of authority.
// It's not clear how an entity like this would have the authority to enforce anything, particularly on the government side or within the broader defense industrial base.

// Probably not for the web site, but I'd like to see a detailed analysis of risk in achieving the stated goals.
// If I were part of the steering body, I'd want to understand these risks and how they would be mitigated.
// Progress on these mitigations would weigh heavily on my decision to continue membership.

export const metadata: Metadata = {
  title: "About - Industry Commons for Defense",
  description: "Learn about the ICD Foundation's mission, governance, and leadership in defense technology collaboration.",
};

export default function AboutPage() {
  return (
    <>
      {/* Mission Section */}
      <Section variant="spacious" background="white">
        <Container size="md">
          <Heading level="h1" className="mb-8 text-center">
            About the ICD Foundation
          </Heading>
          <Text variant="large" className="text-center mb-12">
            The Industry Commons for Defense (ICD) Foundation is a 501(c)(6) nonprofit organization dedicated to accelerating defense innovation through collaborative frameworks.
          </Text>

          <div className="space-y-12">
            <div>
              <Heading level="h2" className="mb-4">Our Mission</Heading>
              <Text variant="base">
                To establish a collaborative framework that enables transparent, modular, and sovereign-aligned collaboration across government, FFRDCs, UARCs, and industry partners in defense technology development.
              </Text>
            </div>

            <div>
              <Heading level="h2" className="mb-4">Our Vision</Heading>
              <Text variant="base">
                A defense ecosystem where innovation flows freely between trusted partners, where security and collaboration coexist, and where the best technologies reach warfighters faster than ever before.
              </Text>
            </div>

            <div>
              <Heading level="h2" className="mb-4">Core Values</Heading>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start">
                  <span className="text-accent-green mr-2 text-xl">•</span>
                  <div>
                    <strong className="text-neutral-900">Collaboration:</strong> Multi-stakeholder participation across government and industry
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green mr-2 text-xl">•</span>
                  <div>
                    <strong className="text-neutral-900">Innovation:</strong> Rapid deployment of cutting-edge technologies
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green mr-2 text-xl">•</span>
                  <div>
                    <strong className="text-neutral-900">Transparency:</strong> Open governance and clear decision-making processes
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green mr-2 text-xl">•</span>
                  <div>
                    <strong className="text-neutral-900">Security:</strong> Cyber-hardened frameworks with comprehensive audit trails
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green mr-2 text-xl">•</span>
                  <div>
                    <strong className="text-neutral-900">Sovereignty:</strong> Respect for national security and allied partnerships
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Governance Section */}
      <Section variant="default" background="gray">
        <Container size="md">
          <Heading level="h2" className="mb-12 text-center">
            Governance Structure
          </Heading>

          <div className="space-y-8">
            <Card variant="filled" padding="lg">
              <Heading level="h3" className="mb-4">
                ICD Steering Body (ICD-SB)
              </Heading>
              <Text>
                A nonprofit, IETF-modeled body focused on defense applications. The ICD-SB guides technical implementation and maintains the framework&apos;s integrity.
              </Text>
            </Card>

            <Card variant="filled" padding="lg">
              <Heading level="h3" className="mb-4">
                Technical Steering Committees (TSCs)
              </Heading>
              <Text>
                Government-led, defense-only committees that ratify standards proposed by PEOs/PMs and submit recommendations to the ICD-SB for approval.
              </Text>
            </Card>

            <Card variant="filled" padding="lg">
              <Heading level="h3" className="mb-4">
                Government Oversight
              </Heading>
              <Text>
                OUSW A&S and R&E provide policy guidance, participate in ICD-SB (non-voting), manage classification/release, and ensure alignment with DoW objectives.
              </Text>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 501(c)(6) Status Section */}
      <Section variant="default" background="gray">
        <Container size="md">
          <Heading level="h2" className="mb-8 text-center">
            501(c)(6) Status
          </Heading>
          <Card variant="filled" padding="lg">
            <Text className="mb-4">
              The ICD Foundation operates as a 501(c)(6) nonprofit organization, providing a neutral forum for industry collaboration while maintaining compliance with federal regulations and defense security requirements.
            </Text>
            <Text>
              This structure enables the Foundation to facilitate multi-stakeholder collaboration while ensuring proper governance, transparency, and accountability in defense technology development.
            </Text>
          </Card>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section variant="compact" background="gradient">
        <Container size="sm">
          <div className="text-center">
            <Heading level="h2" className="mb-4 !text-white">
              Contact Information
            </Heading>
            <Text variant="large" className="text-white/90 mb-6">
              For inquiries about partnerships, pilot programs, or general information:
            </Text>
            <Button
              href="mailto:contact@icd-defense.org"
              variant="secondary"
              size="lg"
              className="bg-icd-gold text-primary-950 hover:bg-yellow-400 shadow-xl font-semibold transition-all duration-200 hero-accent-glow"
            >
              contact@icd-defense.org
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}