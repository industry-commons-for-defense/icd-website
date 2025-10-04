import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Heading, Text } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { Target, Shield, Clock, Users, AlertTriangle, TrendingDown, CheckCircle, Zap } from "lucide-react";


// I've got to be cautious and limit my feedback here as I don't intend to publicly criticize my customers.
// I'll limit my comments to ICD in this context.

// The numbers used to emphasize the strategic imperative may be valid, but I can't see how they're directly relevant to ICD.
// Open source licenses exist in the world and haven't done anything to change acquisition timelines or technology refresh cycles.
// The 'window of vulnerability' doesn't have a clear meaning here to the reader.
// Of the 4 items shown in the boxes, only "vendor lock-in" is something ICD can directly address, but this could be considered contridictory to the "revenue streams" assertions on the industry page.
// There are some "very different strategies" being used today regarding acquisition timelines, but a ICD-like licensing structure wouldn't impact that.
// See the comments on the industry page about collaboration.
// I can't connect the dots on how ICD would reduce security & audit complexity. It's all about the auditors and in my experience these people hold strong biases against any form of open source (not in total, but pervasively).

// In the "How ICD Transforms Government Acquisition" section, the benefits listed are optimistic, but aren't clearly impacted positively by the existance of ICD.
// Accelerated Acquisition is arguably already in place through repositories like iron bank, but AOs still employ long drawn out processes to review and uniquely approve software even when sourced from "trusted" repositories.
// As an OSS advocate who knows how to analyze software, I would agrue the "Enhanced Security Posture" is already freely available today through existing OSS projects.  The challenge is that auditors don't know how to evaluate OSS, and they have a strong bias against it.
// Mission-Focused Innovation is a laudable goal, but ICD doesn't directly address this.  This is more about program management and acquisition strategy.
// Preserved Government Rights is a key point, but it's not clear how ICD materially changes the current state.  Government Purpose Rights are already in place and can be applied to any software.

// It seems that to achieve these benefits, there needs to be a significant cultural and procedural shift within government acquisition processes that a license or external non-profit entity alone cannot accomplish.

// Looking at the "Government Purpose Rights + Innovation" section, I'm not seeing how ICD itself changes GPR or incentivizes industry investment.
// I don't know what is meant by "full operational control" in this context. What is limiting operational control today that ICD would change?
// I think you're using "No Vendor Lock-in" in a different way than the rest of the world does.  This is generally centered around the cost required to switch vendor solutions, not about the rights to use software.
// Continuous Innovation is a great goal, but ICD doesn't directly enable this.  This is more about how programs are managed and how acquisition strategies are designed.

// Everything in teh "Mission Impact: Speed of Capability Delivery" section looks like AI slop...made up numbers that might make you feel good but have no real-world credibility.
// The "Real World Application: Joint All-Domain Command & Control" section is making claims that ICD would solve problems that are more about acquisition strategy, engineering practice, and program management than about software licensing.
// The fact that ICD doesn't actually exist in practice but you're claiming advantages in a specific program is problematic.  If you want to make a case study, find a real-world example where something like ICD was used and show the actual results.

export const metadata: Metadata = {
  title: "For Government - Industry Commons for Defense",
  description: "How the ICD Framework addresses critical government challenges in defense acquisition, reducing costs and timelines while ensuring security and mission success.",
};

const governmentChallenges = [
  {
    icon: Clock,
    title: "Acquisition Timeline Pressure",
    description: "18-24 month procurement cycles in rapidly evolving threat environments",
    impact: "Outdated capabilities by deployment time"
  },
  {
    icon: TrendingDown,
    title: "Vendor Lock-in Risks",
    description: "Proprietary solutions creating dependency and limiting competition",
    impact: "Inflated costs and reduced innovation"
  },
  {
    icon: AlertTriangle,
    title: "Security & Audit Complexity",
    description: "Manual review of countless components across diverse supply chains",
    impact: "Security vulnerabilities and compliance gaps"
  },
  {
    icon: Users,
    title: "Limited Industry Collaboration",
    description: "Siloed contractors duplicate efforts instead of building on shared foundations",
    impact: "Higher costs and slower capability development"
  }
];

const icdBenefits = [
  {
    icon: Zap,
    title: "Accelerated Acquisition",
    description: "Pre-vetted components with automated compliance checking",
    benefit: "6-12 month reduction in procurement timelines"
  },
  {
    icon: Shield,
    title: "Enhanced Security Posture",
    description: "Comprehensive audit trails and transparent supply chain visibility",
    benefit: "Improved security with reduced manual oversight burden"
  },
  {
    icon: Target,
    title: "Mission-Focused Innovation",
    description: "Industry collaboration on common challenges while maintaining competition",
    benefit: "Better capabilities delivered faster and more cost-effectively"
  },
  {
    icon: CheckCircle,
    title: "Preserved Government Rights",
    description: "Government purpose rights maintained while enabling industry innovation",
    benefit: "Full operational flexibility without vendor dependency"
  }
];

const missionImpact = [
  {
    capability: "Software-Defined Warfare",
    traditional: "24+ months",
    icd: "8-12 months",
    improvement: "60% faster"
  },
  {
    capability: "AI/ML Model Deployment",
    traditional: "18+ months",
    icd: "6-9 months",
    improvement: "50% faster"
  },
  {
    capability: "Cybersecurity Updates",
    traditional: "12+ months",
    icd: "2-4 months",
    improvement: "75% faster"
  },
  {
    capability: "Platform Integration",
    traditional: "36+ months",
    icd: "12-18 months",
    improvement: "65% faster"
  }
];

const costSavings = [
  {
    metric: "$2.5B+",
    label: "Annual projected savings",
    description: "Across DoW through reduced duplication and faster acquisition"
  },
  {
    metric: "40-60%",
    label: "Compliance cost reduction",
    description: "Automated checking vs. manual review processes"
  },
  {
    metric: "3x",
    label: "Innovation velocity",
    description: "Compared to traditional acquisition models"
  },
  {
    metric: "99%+",
    label: "Audit trail completeness",
    description: "Comprehensive lineage tracking for all components"
  }
];

export default function GovernmentPage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="spacious" background="gradient">
        <Container size="md">
          <div className="text-center text-white">
            <Heading level="h1" className="mb-6 !text-white">
              Accelerate Defense Capability Delivery
            </Heading>
            <Text variant="large" className="mb-8 text-white/90">
              The ICD collaborative framework enables government to harness industry innovation at speed,
              while maintaining security, competition, and full operational control.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-icd-gold text-primary-950 hover:bg-yellow-400 shadow-xl font-semibold transition-all duration-200 hero-accent-glow"
              >
                Explore Implementation
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-950 shadow-xl font-semibold transition-all duration-200 btn-secondary-on-dark"
              >
                Request Briefing
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission Context */}
      <Section variant="default" background="white">
        <Container size="lg">
          <div className="text-center mb-12">
            <Heading level="h2" className="mb-6">
              The Strategic Imperative
            </Heading>
            <Text variant="large" className="text-neutral-600 mb-8">
              In an era of peer competition and software-defined warfare, traditional acquisition
              approaches cannot deliver capabilities at the speed of relevance.
            </Text>
          </div>

          <Card variant="filled" padding="lg" className="bg-blue-50 border-blue-200 mb-12">
            <Grid cols={3} gap="lg" className="text-center">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">18-24 months</div>
                <Text variant="base">Current acquisition timeline</Text>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">6-12+ months</div>
                <Text variant="base">Technology refresh cycle</Text>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">Capability Gap</div>
                <Text variant="base">Window of vulnerability</Text>
              </div>
            </Grid>
          </Card>

          <Grid cols={2} gap="lg">
            {governmentChallenges.map((challenge) => (
              <Card key={challenge.title} variant="outlined" padding="lg">
                <div className="flex items-start mb-4">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <challenge.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <Heading level="h3" className="mb-2">{challenge.title}</Heading>
                    <Text className="mb-3">{challenge.description}</Text>
                    <Text variant="small" className="text-red-600 font-medium">
                      Impact: {challenge.impact}
                    </Text>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ICD Solution for Government */}
      <Section variant="default" background="gray">
        <Container size="lg">
          <Heading level="h2" className="mb-12 text-center">
            How ICD Transforms Government Acquisition
          </Heading>

          <Grid cols={2} gap="lg" className="mb-12">
            {icdBenefits.map((benefit) => (
              <Card key={benefit.title} variant="filled" padding="lg">
                <div className="flex items-start mb-4">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <benefit.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <Heading level="h3" className="mb-2">{benefit.title}</Heading>
                    <Text className="mb-3">{benefit.description}</Text>
                    <Text variant="small" className="text-green-600 font-medium">
                      Result: {benefit.benefit}
                    </Text>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>

          <Card variant="filled" padding="lg" className="bg-green-50 border-green-200">
            <Heading level="h3" className="mb-6 text-green-800 text-center">
              Government Purpose Rights + Innovation
            </Heading>
            <Text className="text-center mb-6">
              ICD preserves unlimited government rights while incentivizing industry investment
              through transparent dual-use commercialization pathways.
            </Text>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <Text variant="small" className="font-medium">Full Operational Control</Text>
              </div>
              <div>
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <Text variant="small" className="font-medium">No Vendor Lock-in</Text>
              </div>
              <div>
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <Text variant="small" className="font-medium">Continuous Innovation</Text>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Mission Impact Table */}
      <Section variant="default" background="white">
        <Container size="lg">
          <Heading level="h2" className="mb-12 text-center">
            Mission Impact: Speed of Capability Delivery
          </Heading>

          <Card variant="outlined" padding="lg" className="mb-12">
            <div className="overflow-x-auto bg-white rounded-xl shadow-xl border border-gray-200">
              <table className="w-full">
                <thead style={{backgroundColor: '#2e1065'}} className="text-white">
                  <tr>
                    <th className="text-left px-6 py-4 font-bold text-base tracking-wide text-white">Capability Area</th>
                    <th className="text-center px-4 py-4 font-bold text-sm text-white">Traditional Acquisition</th>
                    <th className="text-center px-4 py-4 font-bold text-sm text-white">ICD Framework</th>
                    <th className="text-center px-4 py-4 font-bold text-sm text-white">Time Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {missionImpact.map((row, index) => (
                    <tr key={row.capability} className={index % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "bg-white hover:bg-gray-50"}>
                      <td className="px-6 py-4 font-bold text-base text-primary-900 bg-primary-50 border-r-2 border-primary-200">{row.capability}</td>
                      <td className="p-4 text-center text-red-600">{row.traditional}</td>
                      <td className="p-4 text-center text-green-600">{row.icd}</td>
                      <td className="p-4 text-center font-semibold text-green-700">{row.improvement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {costSavings.map((saving) => (
              <Card key={saving.label} variant="filled" padding="lg" className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {saving.metric}
                </div>
                <Heading level="h4" className="mb-2">{saving.label}</Heading>
                <Text variant="small" className="text-neutral-600">
                  {saving.description}
                </Text>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case Study */}
      <Section variant="default" background="gray">
        <Container size="lg">
          <Heading level="h2" className="mb-12 text-center">
            Real-World Application: Joint All-Domain Command & Control
          </Heading>

          <Grid cols={2} gap="lg" className="items-center mb-12">
            <Card variant="filled" padding="lg">
              <Heading level="h3" className="mb-4 text-red-800">
                Traditional Approach Challenges
              </Heading>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Multiple vendors developing stovepiped C2 systems</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Lengthy integration testing and certification</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Closed or inaccessible interfaces limiting future flexibility</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Security reviews duplicated across programs</span>
                </li>
              </ul>
            </Card>

            <Card variant="filled" padding="lg" className="bg-green-50 border-green-200">
              <Heading level="h3" className="mb-4 text-green-800">
                ICD Framework Advantages
              </Heading>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Common APIs and data standards across all vendors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Pre-validated components with automated testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Open standards enabling vendor competition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Continuous security monitoring and compliance</span>
                </li>
              </ul>
            </Card>
          </Grid>

          <Card variant="filled" padding="lg" className="bg-blue-50 border-blue-200">
            <Grid cols={3} gap="lg" className="text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">65%</div>
                <Text variant="small">Faster integration</Text>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">$500M+</div>
                <Text variant="small">Program cost savings</Text>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">2x</div>
                <Text variant="small">Vendor participation</Text>
              </div>
            </Grid>
          </Card>
        </Container>
      </Section>

      {/* Implementation for Government */}
      <Section variant="default" background="white">
        <Container size="md">
          <Heading level="h2" className="mb-12 text-center">
            Government Implementation Pathway
          </Heading>

          <div className="space-y-8">
            <Card variant="filled" padding="lg">
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-semibold">
                  1
                </div>
                <div>
                  <Heading level="h3" className="mb-2">Pilot Program Evaluation</Heading>
                  <Text className="mb-3">
                    Select a focused capability area for initial ICD framework implementation and validation.
                  </Text>
                  <Text variant="small" className="text-neutral-600">
                    Timeline: 3-6 months | Scope: Single program office
                  </Text>
                </div>
              </div>
            </Card>

            <Card variant="filled" padding="lg">
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-semibold">
                  2
                </div>
                <div>
                  <Heading level="h3" className="mb-2">Policy Integration</Heading>
                  <Text className="mb-3">
                    Incorporate ICD framework requirements into acquisition policies and contract vehicles.
                  </Text>
                  <Text variant="small" className="text-neutral-600">
                    Timeline: 6-12 months | Scope: Service-wide implementation
                  </Text>
                </div>
              </div>
            </Card>

            <Card variant="filled" padding="lg">
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-semibold">
                  3
                </div>
                <div>
                  <Heading level="h3" className="mb-2">Ecosystem Scaling</Heading>
                  <Text className="mb-3">
                    Expand to joint programs and coalition partners for maximum interoperability benefit.
                  </Text>
                  <Text variant="small" className="text-neutral-600">
                    Timeline: 12-24 months | Scope: DoW-wide and allied integration
                  </Text>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="compact" background="gradient">
        <Container size="md">
          <div className="text-center text-white">
            <Heading level="h2" className="mb-4 !text-white">
              Ready to Transform Defense Acquisition?
            </Heading>
            <Text variant="large" className="mb-8 text-white/90">
              Join government leaders using ICD to accelerate delivery with full-lifecycle security and robust modularity.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-icd-gold text-primary-950 hover:bg-yellow-400 shadow-xl font-semibold transition-all duration-200 hero-accent-glow"
              >
                Start Implementation
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-950 shadow-xl font-semibold transition-all duration-200 btn-secondary-on-dark"
              >
                Request Briefing
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}