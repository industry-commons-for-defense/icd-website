import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

// My initial thought was the prices seem high for the proposed benefit.
// I don't think I'd carve $75K out of my budget since it is not an established entity offering proven benefits...for me directly.
// Even if someone does approve philosophically, they'll have to justify the expense through the procurement and business management process.  I'm not confident these stakeholders would approve without a more direct benefit to their business.
// My next thought goes to transparency.  Who's getting paid and for what?  How is the money being spent?  I think this is a critical question for any potential member.

// Based on comments in the IM that this is really a sponsor mechanism, why not just handle it that way.
// This is what the Apache Foundation does:  https://www.apache.org/foundation/sponsorship

// Of course that raises another question...why not just manage this through an existing entity like the Apache foundation?
// It would appear to a reader that the ICD mission is generally aligned with someone like Apache, and it would potentially reduce the administrative overhead of managing a separate entity.
// I think we should seriously consider a partnership with someone like Apache unless there are explicit reasons not to.
// It would given immediate community credibility and a known 'brand' to work within.
// There are also a lot of lessons learned that could be leveraged from an established org.

const membershipTiers = [
  {
    category: "Small Nontraditional",
    annualDues: "$30,000",
    description: "Emerging defense contractors and innovative technology companies with limited defense portfolio",
    targetCount: 3
  },
  {
    category: "Small Traditional",
    annualDues: "$45,000",
    description: "Established defense contractors with focused capabilities and proven track record",
    targetCount: 3
  },
  {
    category: "Large Nontraditional",
    annualDues: "$60,000",
    description: "Major technology companies entering or expanding in the defense market",
    targetCount: 3
  },
  {
    category: "Large Traditional",
    annualDues: "$75,000",
    description: "Major defense contractors with established defense portfolios and extensive capabilities",
    targetCount: 3
  },
  {
    category: "UARCs & FFRDCs",
    annualDues: "$75,000",
    description: "University Affiliated Research Centers and Federally Funded Research & Development Centers",
    targetCount: 3
  }
];

// Rate escalation projections (2% notional rate)
const rateEscalationTable = [
  { category: "Small Nontraditional", base: 30000, rates: [2.0, 2.0, 2.0, 2.0, 2.0] },
  { category: "Small Traditional", base: 45000, rates: [2.0, 2.0, 2.0, 2.0, 2.0] },
  { category: "Large Nontraditional", base: 60000, rates: [2.0, 2.0, 2.0, 2.0, 2.0] },
  { category: "Large Traditional", base: 75000, rates: [2.0, 2.0, 2.0, 2.0, 2.0] },
  { category: "UARCs & FFRDCs", base: 75000, rates: [2.0, 2.0, 2.0, 2.0, 2.0] }
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const calculateProjectedDues = (baseAmount: number, rates: number[]) => {
  let current = baseAmount;
  const projections = [current];

  rates.forEach(rate => {
    current = Math.round(current * (1 + rate / 100));
    projections.push(current);
  });

  return projections;
};

const memberBenefits = [
  // This is altruism, not business value...doesn't support cost justification.
  "Promote IP-protected technology sharing within the DIB and with government",
  // Another altruistic benefit...not a direct business benefit.
  "Lower barriers to defense sector entry for all member organizations",
  // Do we really need ICD for this?  I haven't seen a "how" to substantiate this claim.
    "Enable reuse of CUI and classified technology designs across the ecosystem",
  // If reviewing this page for the first time, I don't see how ICD directly helps me do this.
  "Increase innovation velocity for the Defense Industrial Base",
  // What is "platform access costs"?  If GitHub / GitLab / etc. are used, there are no platform costs.
  "Participate in setting platform access costs for Community members",
  // OK, but this assumes a multi-year committment which can't be guaranteed.  And what happens if I leave?  I want my money back.
  "Receive credits toward next year's dues from excess revenues",
  // This has conceptual value, but there needs to be a clear roadmap to make this meaningful.  I need to see the thing I get to shape / influence based on my contribution.
  "Influence annual spend plan and strategic direction",
  // It feels like there's a ton of strings attached here, especially given the mention of CUI / classified above.  If I was bidding on a contract that contributes to such a centralized repository, I would have to either bit this cost into my proposal or request access be provided as GFE.  Either way, it's a cost to the government, so explicit government direction would be needed.
  "Access to shared repositories and collaborative development frameworks"
];

const membershipTerms = [
  {
    term: "Membership Duration",
    // Limit of 3 years means credits I receive from my membership are non-valuable after 3 years.
    description: "Steering Body members can elect to continue membership for no more than 3 consecutive years"
  },
  {
    term: "Annual Escalation",
    // Why?  Is the value somehow increasing each year?  If not, why should my cost increase?
    description: "Dues escalate at a minimum of 2% or the Federal Reserve's published prime rate at time of renewal, whichever is higher"
  },
  {
    term: "Governance Rights",
    // Under what conditions?  Is it a simple majority?  Quorum requirements?  Can I veto something?
    description: "Steering Body members approve annual spend plan and set platform access costs for Community members"
  },
  {
    term: "Revenue Sharing",
    // OK, but I need to see clear value before I can consider these credits to have any value.  How likely is it that there will be excess revenue?  Would excess revenue result in lower dues the following year?
    description: "Excess revenues after capital investment and operating costs are returned to members as credits toward next year's dues"
  },
  {
    term: "Target Composition",
    // So this is also limited and constrained participation.  Assuming even distribution across 5 categories, the annual dues collected would be $855K.  Without understanding the cost structure, it's hard to evaluate if this is sufficient to cover costs and deliver value...or is just some small-scale graft for the organizers.
    description: "ICD Foundation aims to recruit 15 dues-paying Steering Body members with balanced representation across all categories"
  }
];

export default function JoinPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section variant="spacious" background="gradient" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight text-white">
            Join the ICD Steering Body
          </h1>
          {/* "Shape the future" is vague and non-specific.  I need to see a clear value prop.
          "Founding member" implies some sort of special status or benefit, but it's not clear what that is.
          Overall, this headline feels like marketing fluff without substantive value. */}
          <p className="text-lg sm:text-xl mb-8 font-light leading-relaxed text-white/95">
            Become a founding member of the Industry Commons for Defense and help shape the future of collaborative defense technology development.
          </p>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="bg-icd-gold text-primary-950 hover:bg-yellow-400 shadow-xl font-semibold transition-all duration-200 hero-accent-glow"
          >
            Apply for Membership
          </Button>
        </div>
      </Section>

      {/* Membership Tiers */}
      <Section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              ICD Steering Body Membership Tiers
            </h2>
            {/* "Ensure" implies that the ICD Foundation has control over who joins, which may not be the case if it's open to anyone who pays.  It would be better to say "aim to achieve" or "designed to promote".
            Overall, this sentence could be more specific about the goals and benefits of the membership structure. */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured membership categories designed to ensure balanced representation across the Defense Industrial Base
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {membershipTiers.slice(0, 4).map((tier) => (
              <div key={tier.category} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-primary-800">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-display font-bold text-gray-900">
                    {tier.category}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-800">
                      {tier.annualDues}
                    </div>
                    <div className="text-sm text-gray-600">per year</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{tier.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                    Target: {tier.targetCount} members
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* UARCs & FFRDCs Card - Separate below */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-primary-800">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-display font-bold text-gray-900">
                  {membershipTiers[4].category}
                </h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-800">
                    {membershipTiers[4].annualDues}
                  </div>
                  <div className="text-sm text-gray-600">per year</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{membershipTiers[4].description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                  Target: {membershipTiers[4].targetCount} members
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Annual Escalation Policy */}
      <Section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Projected Escalation Schedule
            </h2>
          </div>

          {/* Rate Escalation Table */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead style={{backgroundColor: '#2e1065'}} className="text-white">
                  <tr>
                    <th className="px-8 py-6 text-left font-bold text-lg tracking-wide text-white">Membership Category</th>
                    <th className="px-6 py-6 text-center font-bold text-base text-white bg-icd-gold bg-opacity-20 border-l-2 border-r-2 border-icd-gold">2025</th>
                    <th className="px-6 py-6 text-center font-bold text-base text-white">2026</th>
                    <th className="px-6 py-6 text-center font-bold text-base text-white">2027</th>
                    <th className="px-6 py-6 text-center font-bold text-base text-white">2028</th>
                    <th className="px-6 py-6 text-center font-bold text-base text-white">2029</th>
                    <th className="px-6 py-6 text-center font-bold text-base text-white">2030</th>
                  </tr>
                </thead>
                <tbody>
                  {rateEscalationTable.map((row, index) => {
                    const projections = calculateProjectedDues(row.base, row.rates);
                    return (
                      <tr key={row.category} className={index % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "bg-white hover:bg-gray-50"}>
                        <td className="px-8 py-5 font-bold text-lg text-primary-900 bg-primary-50 border-r-2 border-primary-200">{row.category}</td>
                        {projections.map((amount, yearIndex) => (
                          <td key={yearIndex} className={yearIndex === 0 ? "px-6 py-5 text-center font-bold text-base text-gray-900 bg-icd-gold bg-opacity-10 border-l-2 border-r-2 border-icd-gold" : "px-6 py-5 text-center font-bold text-base text-gray-900"}>
                            {formatCurrency(amount)}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Rate Determination</h3>
              <p className="text-blue-700 text-sm">
                Annual escalation is determined at membership renewal by comparing the 2% minimum rate with the Federal Reserve&apos;s published prime rate, applying whichever is higher.
                {/* It isn't clear why the Federal Reserve's prime rate is relevant to this context.  If the goal is to account for inflation or cost increases, it would be more appropriate to reference elements of cost & driving cost factors of the ICD Foundation's operations. */}
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Revenue Sharing</h3>
              <p className="text-green-700 text-sm">
                Excess revenues after capital investment and operating costs are returned to members as credits toward the following year&apos;s dues, effectively reducing net costs.
                {/* Just reiterating the 'what's valuable about credits' point above. */}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Member Benefits */}
      <Section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Steering Body Member Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the collaborative framework that&apos;s transforming defense technology development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {memberBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <span className="text-icd-green mr-3 mt-1 text-xl">✓</span>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Terms and Rules */}
      <Section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Membership Terms & Governance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear guidelines ensuring effective governance and sustainable growth
            </p>
          </div>

          <div className="space-y-8">
            {membershipTerms.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.term}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="compact" background="gradient" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-white">
            Ready to Transform Defense Technology?
          </h2>
          <p className="text-xl mb-8 font-light text-white/95">
            Join the ICD Steering Body and help establish the foundation for collaborative defense innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-icd-gold text-primary-950 hover:bg-yellow-400 shadow-xl font-semibold transition-all duration-200 hero-accent-glow"
            >
              Apply Now
            </Button>
            <Button
              href="/framework"
              variant="secondary"
              size="lg"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-950 shadow-xl font-semibold transition-all duration-200 btn-secondary-on-dark"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}