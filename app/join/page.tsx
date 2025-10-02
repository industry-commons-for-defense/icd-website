'use client';

import React, { useMemo, useState } from "react";
import Section from "@/components/ui/Section";

const BRAND = "#6D28D9"; // purple emphasis

const categories = [
  {
    id: "industry",
    title: "Industry Members",
    description:
      "Defense primes, integrators, startups, and non-profits. Provide technology, code, or data; drive pilots; shape direction.",
    bullets: [
      "Eligible for Steering Board (10–20)",
      "Early access to reusable components & CUI toolkits",
      "Visibility in the Defense Commons community"
    ],
    subtext: "Enterprise/Primes · Growth Companies · Startups · Non-profits & FFRDCs",
    cta: "Join the Waitlist",
    color: `bg-[${BRAND}]`, borderColor: `border-[${BRAND}]`, icon: "⚡"
  },
  {
    id: "government",
    title: "Government Partners",
    description:
      "Departments, agencies, services, labs, and innovation orgs. Adopt the Charter, use components, reduce duplication, accelerate fielding.",
    bullets: [
      "Pilot program participation",
      "Technical steering & governance input",
      "Alignment with secure, modular standards (e.g., CMMC)"
    ],
    subtext: "Departments/Services · Agencies · Orgs/Commands",
    cta: "Join Today",
    color: `bg-[${BRAND}]`, borderColor: `border-[${BRAND}]`, icon: "🏛️"
  }
];

const inquiryOptions = [
  "Membership Information",
  "Consulting Services",
  "Partnership Opportunities",
  "Pilot Program Interest",
  "Technical Questions",
  "Media Inquiry",
  "Feedback",
  "Other"
];

function StepCrumbs({ step = 1 }: { step?: 1 | 2 | 3 }) {
  const labels = ["1. Start", "2. Details", "3. Submit"];
  return (
    <nav className="mb-5 flex items-center gap-2 text-xs text-gray-600" aria-label="Onboarding steps">
      {labels.map((label, i) => (
        <span key={label} className="flex items-center gap-2">
          <span
            className={`inline-flex h-6 items-center rounded-md px-2 ${i + 1 <= step ? "bg-gray-100 font-medium" : "bg-gray-50"}`}
          >
            {label}
          </span>
          {i < labels.length - 1 && <span aria-hidden>→</span>}
        </span>
      ))}
    </nav>
  );
}

function Sidebar({ active, onClose }: { active: typeof categories[number]; onClose: () => void }) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedRole, setSelectedRole] = useState<string>(active.id === "government" ? "enduser" : "contributor");
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    org: "",
    inquiry: inquiryOptions[0],
    message: "",
    consent: false,
  });

  const update = (k: keyof typeof form, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));
  // const canSubmit = form.first && form.last && form.email && form.inquiry && form.message && form.consent;

  return (
    <aside className="lg:sticky lg:top-6 lg:max-h-[calc(100vh-4rem)] lg:overflow-auto transition-all">
      <div className={`rounded-2xl border ${active.borderColor} border-t-4 bg-white p-6 shadow-sm`}>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Quick Onboarding</h3>
          <button
            onClick={onClose}
            className="rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-600 hover:bg-gray-50"
            aria-label="Hide panel"
            title="Hide panel"
          >
            × Hide
          </button>
        </div>

        <StepCrumbs step={step} />

        {active.id === "industry" ? (
          <p className="mb-4 text-xs text-gray-700">
            <span className="font-semibold" style={{ color: BRAND }}>Heads up:</span> Industry applications will be waitlisted until Steering Board members are selected.
          </p>
        ) : (
          <p className="mb-4 text-xs text-gray-700">
            <span className="font-semibold" style={{ color: BRAND }}>Note:</span> Government partners can join today and participate in pilots and governance input.
          </p>
        )}

        <fieldset className="mb-4">
          <legend className="block text-sm font-medium">Select your role</legend>
          <div className="mt-2 grid grid-cols-1 gap-2">
            {[
              { id: "enduser", label: "End User", desc: "Consume resources and deploy components." },
              { id: "contributor", label: "Contributor", desc: "Provide data, code, or reusable modules." },
              { id: "steering", label: "Steering Board", desc: "Limited to 10–20 Industry Members." }
            ].map((r) => {
              const disabled = active.id === "government" && r.id === "steering";
              return (
                <label key={r.id} className={`flex items-start gap-2 rounded-lg border p-2 text-sm ${disabled ? "opacity-50" : ""}`}>
                  <input
                    type="radio"
                    name="role"
                    value={r.id}
                    disabled={disabled}
                    checked={selectedRole === r.id}
                    onChange={() => setSelectedRole(r.id)}
                    className="mt-0.5"
                  />
                  <div>
                    <div className="font-medium">{r.label}</div>
                    <div className="text-gray-600">{r.desc}{disabled ? " (Industry only)" : ""}</div>
                  </div>
                </label>
              );
            })}
          </div>
        </fieldset>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium" htmlFor="first">First Name *</label>
              <input id="first" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm" value={form.first} onChange={(e) => update("first", e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium" htmlFor="last">Last Name *</label>
              <input id="last" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm" value={form.last} onChange={(e) => update("last", e.target.value)} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="email">Email Address *</label>
            <input id="email" type="email" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm" value={form.email} onChange={(e) => update("email", e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="org">Organization</label>
            <input id="org" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm" value={form.org} onChange={(e) => update("org", e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="inq">Inquiry Type *</label>
            <select id="inq" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm" value={form.inquiry} onChange={(e) => update("inquiry", e.target.value)}>
              {inquiryOptions.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="msg">Message *</label>
            <textarea id="msg" rows={5} className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm" value={form.message} onChange={(e) => update("message", e.target.value)} />
          </div>
          <label className="flex items-start gap-2 text-xs text-gray-700">
            <input type="checkbox" className="mt-1" checked={form.consent} onChange={(e) => update("consent", e.target.checked)} />
            <span>I consent to being contacted by the ICD Foundation regarding my inquiry. *</span>
          </label>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setStep((s) => (s < 3 ? ((s as number) + 1) as 1 | 2 | 3 : s))}
              className={`rounded-lg px-4 py-2 font-medium text-white`}
              style={{ backgroundColor: BRAND }}
            >
              {active.id === 'government' ? 'Join Today' : 'Join the Waitlist'}
            </button>
            <a
              href="#faq"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Learn more
            </a>
          </div>
        </form>
      </div>
    </aside>
  );
}

export default function JoinPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = useMemo(() => categories.find((c) => c.id === selected) ?? null, [selected]);

  const handleCardActivate = (id: string) => setSelected(id);

  return (
    <div className="min-h-screen">
      <Section className="py-10">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Contact / Waitlist</p>
            <h1 className="mt-1 text-3xl font-display font-bold">Join Industry Commons for Defense</h1>
            <p className="mt-3 mx-auto max-w-2xl text-sm text-gray-600">
              Join the collaborative, industry led framework that&apos;s transforming technology for US national security.
            </p>
          </header>

          <div className={`grid gap-6 ${active ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
            <div className={`lg:col-span-2 grid gap-6 ${active ? "sm:grid-cols-1" : "sm:grid-cols-2"}`}>
              {categories.map((c) => (
                <div
                  key={c.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleCardActivate(c.id)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCardActivate(c.id)}
                  className={`cursor-pointer select-none rounded-2xl border ${c.borderColor} border-t-4 bg-white p-6 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2`}
                  style={{ boxShadow: selected === c.id ? "0 0 0 2px rgba(109,40,217,0.5)" : undefined }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-lg">{c.icon}</div>
                    <h2 className="text-xl font-display font-semibold">{c.title}</h2>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{c.description}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-gray-800">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span aria-hidden>✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-gray-500">{c.subtext}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleCardActivate(c.id); }}
                      className={`rounded-xl px-4 py-2 font-medium text-white`}
                      style={{ backgroundColor: BRAND }}
                    >
                      {c.cta}
                    </button>
                    <a
                      href="#faq"
                      onClick={(e) => e.stopPropagation()}
                      className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {active && (
              <Sidebar active={active} onClose={() => setSelected(null)} />
            )}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <section id="faq">
            <h2 className="text-2xl font-display font-bold text-center mb-6">Frequently Asked Questions</h2>
            <div className="mx-auto grid max-w-4xl gap-4">
              <details className="rounded-xl border border-gray-200 bg-white p-4">
                <summary className="cursor-pointer select-none text-sm font-semibold">What is Industry Commons for Defense?</summary>
                <p className="mt-2 text-sm text-gray-700">A neutral, nonprofit-led framework that enables government and industry to build software together under a shared charter—protecting IP, speeding delivery, and reducing duplication.</p>
              </details>
              <details className="rounded-xl border border-gray-200 bg-white p-4">
                <summary className="cursor-pointer select-none text-sm font-semibold">How does the waitlist work for Industry?</summary>
                <p className="mt-2 text-sm text-gray-700">Industry applications are accepted now and placed on a waitlist until initial Steering Board members are selected. You&apos;ll receive updates and opportunities to contribute components and pilots in the meantime.</p>
              </details>
              <details className="rounded-xl border border-gray-200 bg-white p-4">
                <summary className="cursor-pointer select-none text-sm font-semibold">Can government partners join today?</summary>
                <p className="mt-2 text-sm text-gray-700">Yes. Government partners can join and participate in pilots, provide governance input, and adopt the Charter to reduce duplication.</p>
              </details>
              <details className="rounded-xl border border-gray-200 bg-white p-4">
                <summary className="cursor-pointer select-none text-sm font-semibold">What are the roles (End User, Contributor, Steering Board)?</summary>
                <p className="mt-2 text-sm text-gray-700">End Users deploy and benefit from components; Contributors share code/data modules; Steering Board members (limited Industry seats) provide oversight and investment.</p>
              </details>
              <details className="rounded-xl border border-gray-200 bg-white p-4">
                <summary className="cursor-pointer select-none text-sm font-semibold">Where can I read the Charter?</summary>
                <p className="mt-2 text-sm text-gray-700">We&apos;ll publish the Defense Commons Charter on this site. In the interim, request it via the contact form and we&apos;ll send the latest draft.</p>
              </details>
            </div>
          </section>
        </div>
      </Section>
    </div>
  );
}