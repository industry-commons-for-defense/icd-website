"use client";

import { useState } from "react";
import { FileText, Settings, Cpu, Database } from "lucide-react";
import { LucideIcon } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";

interface DocumentItem {
  name: string;
  description: string;
  type: string;
  fileName: string;
  content?: string;
  loading?: boolean;
  error?: string;
}

interface DocumentCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
  items: DocumentItem[];
}

// Define the document structure with placeholder content
const documentCategories: DocumentCategory[] = [
  {
    title: "ICD Licenses",
    description: "Open source licenses for defense technology sharing",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    items: [
      {
        name: "Hardware-ICD License v1.0",
        description: "Hardware Industry Commons for Defense License",
        type: "Hardware",
        fileName: "licenses/Hardware-ICD_License_v1.0_May2025.md"
      },
      {
        name: "Software-ICD License v1.0",
        description: "Software Industry Commons for Defense License",
        type: "Software",
        fileName: "licenses/Software-ICD_License_v1.0_May2025.md"
      },
      {
        name: "Data-ICD License v1.0",
        description: "Data Industry Commons for Defense License",
        type: "Data",
        fileName: "licenses/Data-ICD_License_v1.0_May2025.md"
      },
      {
        name: "AI-ICD License v1.0",
        description: "AI/ML Industry Commons for Defense License",
        type: "AI/ML",
        fileName: "licenses/AI-ICD_License_v1.0_May2025.md"
      }
    ]
  },
  {
    title: "Governance Documents",
    description: "Organizational structures and decision-making processes",
    icon: Settings,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    items: [
      {
        name: "Steering Body Charter",
        description: "Charter establishing the ICD Steering Body governance structure",
        type: "Governance",
        fileName: "governance/ICD_Steering_Body_Charter_501c6.md"
      },
      {
        name: "Certification Authority Charter",
        description: "Framework for ICD certification and validation processes",
        type: "Governance",
        fileName: "governance/ICD_Certification_Authority_Charter_v1.0.md"
      },
      {
        name: "Coalition Disclosure Tiers",
        description: "Guidelines for information sharing with coalition partners",
        type: "Governance",
        fileName: "governance/ICD_Coalition_Disclosure_Tiers_v1.0.md"
      },
      {
        name: "Emergency Override Protocols",
        description: "Procedures for emergency access and override situations",
        type: "Governance",
        fileName: "governance/ICD_Emergency_Override_Protocols_v1.0.md"
      }
    ]
  },
  {
    title: "Technical Specifications",
    description: "Technical schemas and implementation guidance",
    icon: Cpu,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    items: [
      {
        name: "Metadata Schema",
        description: "JSON schema for ICD component metadata",
        type: "Data",
        fileName: "technical/metadata-schema.json"
      },
      {
        name: "Federated Audit Ledger Schema",
        description: "Schema for distributed audit trail management",
        type: "Data",
        fileName: "technical/audit-ledger-schema.json"
      },
      {
        name: "Model Testing Guidance",
        description: "Comprehensive guidance for AI/ML model validation and testing",
        type: "AI/ML",
        fileName: "technical/Model-Testing-Guidance.md"
      }
    ]
  },
  {
    title: "Operational Documents",
    description: "Implementation guides and operational procedures",
    icon: Database,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    items: [
      {
        name: "Field Deployment Binder",
        description: "Complete guide for field deployment of ICD components",
        type: "Operations",
        fileName: "operations/Field-Deployment-Binder.md"
      },
      {
        name: "Partner Onboarding Kit",
        description: "Materials and procedures for onboarding new ICD partners",
        type: "Operations",
        fileName: "operations/Partner-Onboarding-Kit.md"
      },
      {
        name: "FFRDC Onboarding Contract",
        description: "Standard contract template for FFRDC participation",
        type: "Legal",
        fileName: "operations/FFRDC-Onboarding-Contract.md"
      },
      {
        name: "Red Team Activation Playbook",
        description: "Procedures for security assessment and red team exercises",
        type: "Security",
        fileName: "operations/Red-Team-Activation-Playbook.md"
      }
    ]
  }
];

export default function ComponentsPage() {
  const [categories, setCategories] = useState<DocumentCategory[]>(documentCategories);
  const [openAccordions, setOpenAccordions] = useState<Set<string>>(new Set());

  const baseGitHubUrl = "https://github.com/industry-commons-for-defense/icd-artifacts";
  const rawGitHubUrl = "https://raw.githubusercontent.com/industry-commons-for-defense/icd-artifacts/main";

  // Function to fetch content from GitHub
  const fetchContent = async (categoryIndex: number, itemIndex: number) => {
    const item = categories[categoryIndex].items[itemIndex];
    const contentUrl = `${rawGitHubUrl}/${item.fileName}`;

    // Update loading state
    setCategories(prev => {
      const newCategories = [...prev];
      newCategories[categoryIndex].items[itemIndex] = {
        ...newCategories[categoryIndex].items[itemIndex],
        loading: true,
        error: undefined
      };
      return newCategories;
    });

    try {
      const response = await fetch(contentUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch content: ${response.status}`);
      }

      const content = await response.text();

      // Update with fetched content
      setCategories(prev => {
        const newCategories = [...prev];
        newCategories[categoryIndex].items[itemIndex] = {
          ...newCategories[categoryIndex].items[itemIndex],
          content,
          loading: false
        };
        return newCategories;
      });
    } catch (error) {
      // Update with error state
      setCategories(prev => {
        const newCategories = [...prev];
        newCategories[categoryIndex].items[itemIndex] = {
          ...newCategories[categoryIndex].items[itemIndex],
          loading: false,
          error: error instanceof Error ? error.message : "Failed to load content"
        };
        return newCategories;
      });
    }
  };

  // Handle accordion toggle
  const toggleAccordion = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    const newOpenAccordions = new Set(openAccordions);

    if (newOpenAccordions.has(key)) {
      newOpenAccordions.delete(key);
    } else {
      newOpenAccordions.add(key);

      // Fetch content if not already loaded
      const item = categories[categoryIndex].items[itemIndex];
      if (!item.content && !item.loading && !item.error) {
        fetchContent(categoryIndex, itemIndex);
      }
    }

    setOpenAccordions(newOpenAccordions);
  };

  const isAccordionOpen = (categoryIndex: number, itemIndex: number) => {
    return openAccordions.has(`${categoryIndex}-${itemIndex}`);
  };

  // Function to render content based on type
  const renderContent = (item: DocumentItem) => {
    if (item.loading) {
      return (
        <div className="p-8 text-center text-gray-500">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-4"></div>
          Loading content from GitHub...
        </div>
      );
    }

    if (item.error) {
      return (
        <div className="p-8 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 font-semibold mb-2">Error loading content</p>
          <p className="text-red-500 text-sm">{item.error}</p>
          <p className="text-gray-600 text-sm mt-4">
            The content will be available once the repository is set up at:{" "}
            <a
              href={`${baseGitHubUrl}/blob/main/${item.fileName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {item.fileName}
            </a>
          </p>
        </div>
      );
    }

    if (!item.content) {
      return null;
    }

    // Check if content is JSON
    if (item.fileName.endsWith('.json')) {
      try {
        const jsonContent = JSON.parse(item.content);
        return (
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
            <code>{JSON.stringify(jsonContent, null, 2)}</code>
          </pre>
        );
      } catch {
        // If JSON parsing fails, display as text
      }
    }

    // Display markdown or text content
    return (
      <div className="prose prose-lg max-w-none p-6">
        <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
          {item.content}
        </pre>
      </div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <Section variant="spacious" background="gradient">
        <Container>
          <div className="text-center">
            <Heading level="h1" className="mb-6 !text-white">
              ICD Framework Components
            </Heading>
            <Text variant="large" className="mb-8 text-white/90 max-w-3xl mx-auto">
              Access the comprehensive library of licenses, governance documents, and technical specifications that power the Industry Commons for Defense.
            </Text>
            <a
              href={baseGitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="lg"
                className="bg-icd-gold text-primary-950 hover:bg-yellow-400 shadow-xl font-semibold transition-all duration-200 hero-accent-glow"
              >
                View on GitHub
              </Button>
            </a>
          </div>
        </Container>
      </Section>

      {/* Document Categories */}
      <Section variant="default" background="white">
        <Container size="lg">
          <div className="space-y-12">
            {categories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className={`${category.bgColor} p-3 rounded-lg`}>
                      <Icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <div className="flex-1">
                      <Heading level="h2" className="mb-2">
                        {category.title}
                      </Heading>
                      <Text variant="base" className="text-gray-600">
                        {category.description}
                      </Text>
                    </div>
                  </div>

                  <div className="ml-16 space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`border ${category.borderColor} rounded-lg overflow-hidden transition-all duration-200`}
                      >
                        <button
                          onClick={() => toggleAccordion(categoryIndex, itemIndex)}
                          className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center space-x-4 text-left">
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${category.bgColor} ${category.color}`}>
                              {item.type}
                            </span>
                            <div>
                              <h3 className="font-semibold text-gray-900">{item.name}</h3>
                              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            </div>
                          </div>
                          <svg
                            className={`h-5 w-5 text-gray-400 transform transition-transform ${
                              isAccordionOpen(categoryIndex, itemIndex) ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {isAccordionOpen(categoryIndex, itemIndex) && (
                          <div className="border-t border-gray-200 bg-gray-50">
                            {renderContent(item)}
                            <div className="px-6 py-4 border-t border-gray-200 bg-white flex items-center justify-between">
                              <span className="text-sm text-gray-500">
                                File: {item.fileName}
                              </span>
                              <div className="flex space-x-3">
                                <a
                                  href={`${rawGitHubUrl}/${item.fileName}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Button
                                    variant="secondary"
                                    style="outline"
                                    size="sm"
                                  >
                                    Download
                                  </Button>
                                </a>
                                <a
                                  href={`${baseGitHubUrl}/blob/main/${item.fileName}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Button
                                    variant="secondary"
                                    style="outline"
                                    size="sm"
                                  >
                                    View on GitHub
                                  </Button>
                                </a>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section variant="compact" background="gradient">
        <Container size="sm">
          <div className="text-center">
            <Heading level="h2" className="mb-4 !text-white">
              Contribute to the Framework
            </Heading>
            <Text variant="large" className="text-white/90 mb-6">
              Help shape the future of defense technology collaboration by contributing to our open source framework.
            </Text>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`${baseGitHubUrl}/issues`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-icd-gold text-primary-950 hover:bg-yellow-400 shadow-xl font-semibold transition-all duration-200 hero-accent-glow"
                >
                  Report Issues
                </Button>
              </a>
              <a
                href={`${baseGitHubUrl}/pulls`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-950 shadow-xl font-semibold transition-all duration-200 btn-secondary-on-dark"
                >
                  Submit Pull Request
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}