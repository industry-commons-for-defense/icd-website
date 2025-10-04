import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Heading, Text } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { TrendingUp, Shield, Users, Zap, DollarSign, Lock, AlertTriangle, CheckCircle } from "lucide-react";

// Overall, I'm not resonating with the identified industry challenge arguements on how ICD helps resolve them.
// Industry only behaves in ways they are incntivized or required to behave based on customer direction.
// A status quo has been estabished based on a long history.  This is a 'conditioned norm' for all parties.
// Instigating change here is more about changing incentives than anything IMHO.
// The 'old guard' will resist change...basic human nature.
// But in the end, industry will behave in their best interests based on opportunities and direction offered to them.

// OK...I'll roll that back a bit.  There are some bad actors without a doubt.
// Same in the commercial world.  Prime example: Oracle.
// But in most cases industry works within the customer created landscape with generally positive intent for positive outcomes.

// So, if the claim is there are all these negatives they need to be substantiated.

// The IP Protection concern is real everywhere.  In my experience, the root cause here is conflicting incentives.'
// Industry needs to invest to create differentiated solutions that give them material advantage when under competition.
// But govt knows if that differentiated solution is IP protected, their ability to displace them through recompete is diminished.
// Independent innovation is difficult if not impossible due to lack of credible knowledge / data resulting from basic need-to-know restrictions.
// IP protection isn't about the code, it's about the idea.  Some of the coolest stuff I've every worked on isn't magic.
// It's just a novel approach, usually applying a known practice or approach in a a unique way.
// The IP protection could be violated by a 30 min discussion without sharing any code.
// I've explored patent protection in our environment and discovered it's almost completely infeasible.
// USPTO and the courts aren't equipped to evaluate technical innovations in this world.  The "established legal norm" is essentially off the table.
// An ICD open source license is no replacement for patent protections, so don't imply it may be.

// Complaince complexity is real, but is a fundamental cost of doing business in this domain.
// There's some crazy stuff going on in the world around this right now...but I won't get into it here for obvious reasons.
// Bottom line, compliance is real and it has to be an equivalent expectations across the board.
// The ICD opporutnity here should be offering pre-certified commodity to break down entry bariers.
// But breaking down these bariers is a govt responsibity.
// If you want a particular outcome (i.e. RMF compliance), then build a yellow brick road everyone can walk to get there.
// Make that yellow brick road openly available to all, but don't forgive their responsibility to not swoop in and not break compliance.
// Working in any domain is a choice that requires investment...our world is no different.
// Just because I have a cool idea for how to build new logic gates in silicon doesn't mean I get to ignore fundamental thermal constraints and power distribution demands.  It's a package deal you sign up for if you want to play in the domain.

// Revenue model uncertainty isn't a mystery and it isn't driven by industry.
// The incentive (very real in today's world) drives acquisitions into a LCTA behavior pattern.
// There are entities explicitly built to exploit this.  This is now where you find technical innovation.
// In my experience (I can give examples) this doesn't result in positive outcomes.
// It results in maximizing effort of low skill performers, reducing capability enhancement curves while constructing success theater management practices based on vanity metrics to support a mutual need of contractor and PMO to tell their respective bosses they haven't failed.
// The other aspect is that many of the innovations needed in this world have no commercial applicability or feasiblity.
// I've never met anyone out in the real world who needs a global C2 solution for managing diverse radars and satellite constellations.
// Maybe I just need better friends?

// Limited collaboration is a bit shaky as well.  When incentives are aligned, collaboration happens.
// We use the term "competimates" in recognition of this.  
// Everything is situational.  Govt tends to create the situation, as much as or more than industry.
// Those situations are often driven by security and need-to-know considerations applied in blanket terms rather than an analysis of scope / content.
// There is certainly room to improve here, particularly for those commodity things mentioned earlier.
// But busienss leaders aren't making critical decisions around commodity...they assume it will be handled (sometimes to their detriment).
// Of course there are bad actors here as well.  I've seen some real world cases of industry players trying to sabotage each other.

// The costs shown here need to be substantiated.  I don't doubt they are real, but I need to see the receipts.

// I don't think ICD can actually claim to transform IP, Compliance, Revenue, or Collaboration out of the box.
// I think it may be an enabler, but the real transformation has to be driven by the parties involved and the ecosystem they work within.
// The revenue streams is a particular stretch.  I don't see how ICD creates new revenue streams out of thin air.
// Monitization isn't something that gets easier by establishing a new open source license, it probably makes it harder.
// Let's assume I offer some cool radar processing IP under ICD.  Someone has to decice to pay me to maintain it.
// If that decision is in the hands of a COR or PMO, they are going to be looking at the lowest cost option.
// As a business leader, I'm incentivized to minimize transferability of my IP to competitors as I work to capture the support contract.
// The commercial open source paradigm doesn't work here.  The likelihood of some 3rd party agreeing to pay for maintenance is very low.
// Especially if they are a competitor and the capbility is classified.  Lawyers will argue that legally govt owns all classified "data".
// And we're back to "protect the idea" vs "protect the code" again.  Protecting the idea is what drives to silos / defensiveness / etc.
// The opportunity for a GOSS / ICD license centers around commodity, not differentiation.
// As an example, Google open sources various products generally centered around infrastructure and frameworks, not the key IP that drives their business.
// I don't see how ICD changes this fundamental dynamic.
// The business case examples need to be substantiated as well.  Incentive structures are what will drive behavior.

// The business case needs real work.  Business case for who?  Doesn't seem to be the contributors, so is it for govt?
// Some of it I just don't believe to be true.  In my experience govt AOs don't respect pre-assessed compoenents by default.
// They may take it under advisement, but they still have to do their own due diligence which is the core schedule and cost driver for industry.
// The ROI improvement is a stretch as well.  I don't see how ICD creates new revenue streams or establishes returns for industry.
// The estimated market opportunity is just made up.  Show your work here.

export const metadata: Metadata = {
  title: "For Industry - Industry Commons for Defense",
  description: "How the ICD Framework solves critical challenges for defense industry partners, enabling profitable collaboration while protecting IP and reducing compliance burden.",
};

const industryProblems = [
  {
    icon: Lock,
    title: "IP Protection Concerns",
    description: "Sharing valuable IP with government without clear protection frameworks",
    impact: "Hesitation to engage in meaningful collaboration"
  },
  {
    icon: AlertTriangle,
    title: "Compliance Complexity",
    description: "Navigating DFARS, ITAR, and multiple licensing requirements",
    impact: "High legal costs and project delays"
  },
  {
    icon: DollarSign,
    title: "Revenue Model Uncertainty",
    description: "Unclear path to monetization under government data rights",
    impact: "Reduced R&D investment in defense applications"
  },
  {
    icon: Users,
    title: "Limited Collaboration",
    description: "Siloed development with minimal cross-industry synergy",
    impact: "Duplicated efforts and slower innovation cycles"
  }
];

const icdSolutions = [
  {
    icon: Shield,
    title: "Transparent IP Framework",
    description: "Clear attribution, lineage tracking, and IP boundary definitions",
    benefit: "Confident sharing with government while protecting commercial interests"
  },
  {
    icon: CheckCircle,
    title: "Streamlined Compliance",
    description: "Automated compliance checking integrated into DevOps pipelines",
    benefit: "Reduced legal overhead and faster time-to-market"
  },
  {
    icon: TrendingUp,
    title: "Dual-Use Revenue Streams",
    description: "Commercial licensing alongside government purpose rights",
    benefit: "Multiple monetization paths for single development investment"
  },
  {
    icon: Zap,
    title: "Collaborative Ecosystem",
    description: "Modular, interoperable development with industry partners",
    benefit: "Shared R&D costs and accelerated innovation"
  }
];

const businessCase = [
  {
    metric: "40-60%",
    label: "Reduction in compliance costs",
    description: "Automated compliance checking vs. manual processes"
  },
  {
    metric: "3x",
    label: "Faster procurement cycles",
    description: "Pre-validated components reduce evaluation time"
  },
  {
    metric: "2-5x",
    label: "ROI improvement",
    description: "Dual-use commercialization of defense R&D"
  },
  {
    metric: "$2.5B+",
    label: "Estimated market opportunity",
    description: "Annual addressable market for ICD-enabled solutions"
  }
];

export default function IndustryPage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="spacious" background="gradient">
        <Container size="md">
          <div className="text-center text-white">
            <Heading level="h1" className="mb-6 !text-white">
              Transform Defense Collaboration
            </Heading>
            <Text variant="large" className="mb-8 text-white/90">
              The ICD collaborative framework eliminates traditional barriers between industry and government,
              creating profitable pathways for defense innovation while protecting your IP.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-icd-gold text-primary-950 hover:bg-yellow-400 shadow-xl font-semibold transition-all duration-200 hero-accent-glow"
              >
                Get Started Today
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-950 shadow-xl font-semibold transition-all duration-200 btn-secondary-on-dark"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Problem Statement */}
      <Section variant="default" background="white">
        <Container size="lg">
          <Heading level="h2" className="mb-12 text-center">
            The Industry Challenge
          </Heading>
          <Text variant="large" className="text-center mb-12 text-neutral-600">
            Defense contractors face a fundamental tension: how to innovate collaboratively
            with government while protecting competitive advantages and maintaining profitable business models.
          </Text>

          <Grid cols={2} gap="lg" className="mb-12">
            {industryProblems.map((problem) => (
              <Card key={problem.title} variant="outlined" padding="lg">
                <div className="flex items-start mb-4">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <Heading level="h3" className="mb-2">{problem.title}</Heading>
                    <Text className="mb-3">{problem.description}</Text>
                    <Text variant="small" className="text-red-600 font-medium">
                      Impact: {problem.impact}
                    </Text>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>

          <Card variant="filled" padding="lg" className="bg-red-50 border-red-200">
            <Heading level="h3" className="mb-4 text-red-800 text-center">
              The Cost of Status Quo
            </Heading>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-red-600 mb-2">18-24 months</div>
                <Text variant="small">Average procurement timeline</Text>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600 mb-2">30-50%</div>
                <Text variant="small">Program compliance costs</Text>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600 mb-2">Limited</div>
                <Text variant="small">Commercial reuse potential</Text>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* ICD Solution */}
      <Section variant="default" background="gray">
        <Container size="lg">
          <Heading level="h2" className="mb-12 text-center">
            How ICD Transforms Industry Collaboration
          </Heading>

          <Grid cols={2} gap="lg" className="mb-12">
            {icdSolutions.map((solution) => (
              <Card key={solution.title} variant="filled" padding="lg">
                <div className="flex items-start mb-4">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <solution.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <Heading level="h3" className="mb-2">{solution.title}</Heading>
                    <Text className="mb-3">{solution.description}</Text>
                    <Text variant="small" className="text-green-600 font-medium">
                      Benefit: {solution.benefit}
                    </Text>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Business Case */}
      <Section variant="default" background="white">
        <Container size="lg">
          <Heading level="h2" className="mb-12 text-center">
            The Business Case for ICD
          </Heading>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {businessCase.map((metric) => (
              <Card key={metric.label} variant="outlined" padding="lg" className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {metric.metric}
                </div>
                <Heading level="h4" className="mb-2">{metric.label}</Heading>
                <Text variant="small" className="text-neutral-600">
                  {metric.description}
                </Text>
              </Card>
            ))}
          </div>

          <Card variant="filled" padding="lg" className="bg-blue-50 border-blue-200">
            <Grid cols={2} gap="lg" className="items-center">
              <div>
                <Heading level="h3" className="mb-4 text-blue-800">
                  Real-World Example: Software-Defined Radar
                </Heading>
                <Text className="mb-4">
                  A defense contractor developing software-defined radar can use ICD to:
                </Text>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Share core algorithms with DoW while protecting proprietary optimizations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Collaborate with other contractors on common interfaces</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>License commercial variants for automotive radar applications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Automate ITAR compliance throughout development</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <Heading level="h4" className="mb-4 text-center">Projected ROI</Heading>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Defense Contract:</span>
                    <span className="font-semibold">$50M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Commercial Licensing:</span>
                    <span className="font-semibold">$75M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Compliance Savings:</span>
                    <span className="font-semibold">$15M</span>
                  </div>
                  <hr className="border-neutral-300" />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total Value:</span>
                    <span className="text-green-600">$140M</span>
                  </div>
                </div>
              </div>
            </Grid>
          </Card>
        </Container>
      </Section>

      {/* Implementation Path */}
      <Section variant="default" background="gray">
        <Container size="md">
          <Heading level="h2" className="mb-12 text-center">
            Your Path to ICD Implementation
          </Heading>

          <div className="space-y-8">
            <Card variant="filled" padding="lg">
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-semibold">
                  1
                </div>
                <div>
                  <Heading level="h3" className="mb-2">Assessment & Planning</Heading>
                  <Text className="mb-3">
                    Evaluate your current IP portfolio and identify opportunities for ICD collaboration.
                  </Text>
                  <Text variant="small" className="text-neutral-600">
                    Timeline: 2-4 weeks | Investment: Strategy consultation
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
                  <Heading level="h3" className="mb-2">Pilot Implementation</Heading>
                  <Text className="mb-3">
                    Launch with a focused project to demonstrate value and refine processes.
                  </Text>
                  <Text variant="small" className="text-neutral-600">
                    Timeline: 3-6 months | Investment: Pilot program participation
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
                  <Heading level="h3" className="mb-2">Ecosystem Integration</Heading>
                  <Text className="mb-3">
                    Scale successful practices across your defense portfolio and expand collaboration.
                  </Text>
                  <Text variant="small" className="text-neutral-600">
                    Timeline: 6-12 months | Investment: Full ecosystem membership
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
              Ready to Transform Your Defense Business?
            </Heading>
            <Text variant="large" className="mb-8 text-white/90">
              Join leading defense contractors who are already leveraging ICD for competitive advantage.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-icd-gold text-primary-950 hover:bg-yellow-400 shadow-xl font-semibold transition-all duration-200 hero-accent-glow"
              >
                Start Your Journey
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-950 shadow-xl font-semibold transition-all duration-200 btn-secondary-on-dark"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}