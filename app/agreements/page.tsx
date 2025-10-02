import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Defense Commons Agreements | Industry Commons for Defense',
  description: 'Standard agreements for defense data use. Free, open-source legal templates for companies, researchers, and government teams.',
};

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="mx-auto max-w-4xl px-6 pt-16 pb-8">
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
          Defense Commons Agreements
        </h1>
        <p className="text-xl text-gray-600">
          Standard agreements for defense data use.
        </p>
        
        <p className="mt-6 text-gray-600 leading-relaxed">
          Defense Commons provides free, open-source legal templates for companies, researchers, and government teams working with defense data. Like YC&apos;s SAFE, these agreements are designed to be simple, standardized, and widely accepted.
        </p>
      </div>

      {/* Agreements Section */}
      <div className="mx-auto max-w-4xl px-6 py-8">
        <h2 className="text-2xl font-display font-semibold text-gray-900 mb-8">
          Agreements
        </h2>

        <div className="space-y-6">
          {/* Defense Data Use Agreement */}
          <div className="border-l-4 border-primary-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Defense Data Use Agreement (DDUA)
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A standard template for startups, labs, and DoD programs to responsibly access and use operational data.
            </p>
          </div>

          {/* Mission Data Sharing Addendum */}
          <div className="border-l-4 border-primary-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Mission Data Sharing Addendum (MDSA)
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A short add-on for sharing datasets between multiple partners in coalition or joint environments.
            </p>
          </div>

          {/* Component Licensing Framework */}
          <div className="border-l-4 border-primary-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Component Licensing Framework (CLF)
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Covers licensing for reusable models, code, and analytic components developed on defense data.
            </p>
          </div>

          {/* Coming Soon - ICD Standard CRADA */}
          <div className="border-l-4 border-gray-300 pl-6 opacity-60">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ICD Standard CRADA
              <span className="text-sm font-normal text-gray-500 ml-2">(Coming Soon)</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Standard Cooperative Research and Development Agreement for defense innovation partnerships.
            </p>
          </div>

          {/* Coming Soon - ICD User Guide */}
          <div className="border-l-4 border-gray-300 pl-6 opacity-60">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ICD User Guide
              <span className="text-sm font-normal text-gray-500 ml-2">(Coming Soon)</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive guide for implementing Defense Commons agreements and best practices.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto max-w-4xl px-6 py-8">
        <h2 className="text-2xl font-display font-semibold text-gray-900 mb-8">
          FAQ
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Who should use these agreements?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Anyone working with defense data — startups, DoD programs, FFRDCs, universities, or coalition partners.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Are these legally binding?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Yes. These are real legal agreements. You should still consult your counsel before use.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              How are they updated?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Defense Commons maintains them with input from government, industry, and legal experts.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Can I suggest changes?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Yes. We welcome contributions, extensions, and case studies.
            </p>
          </div>
        </div>
      </div>

      {/* Action Links */}
      <div className="mx-auto max-w-4xl px-6 py-8 pb-16">
        <div className="flex flex-wrap gap-4">
          <Link
            href="https://github.com/industry-commons-for-defense/icd-artifacts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary-800 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
          >
            Download the Agreements
          </Link>
          <Link
            href="https://github.com/industry-commons-for-defense/icd-artifacts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-primary-800 font-medium rounded-md border-2 border-primary-800 hover:bg-primary-50 transition-colors"
          >
            Contribute on GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}