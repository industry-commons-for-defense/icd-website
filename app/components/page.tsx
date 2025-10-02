import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Heading, Text } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import AccordionComponent from "@/components/ui/Accordion";
import { FileText, Download, ExternalLink, Shield, Database, Cpu, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Components - Industry Commons for Defense",
  description: "What we use to make collaboration work: licenses, templates, governance, and specs.",
};

const componentCategories = [
  {
    title: "Licenses",
    description: "Core licensing frameworks for software, hardware, data, and AI/ML models",
    icon: Shield,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    items: [
      {
        name: "Software",
        description: "SW-ICD License v1.0",
        type: "Software",
        fileName: "SW-ICD_License_v1.0_May2025.txt",
        content: `# Software Industry Commons for Defense (SW-ICD) License

**Version 1.0 – May 2025**

## 1. Purpose

The SW-ICD License is designed to enable transparent, modular, and sovereign-aligned software collaboration within the Industry Commons for Defense (ICD). It ensures contributions can be shared across government, FFRDCs, UARCs, and industry without compromising national security, innovation rights, or open-source compatibility.

## 2. Scope

This license governs all software artifacts, including:
- Source code
- Executables
- Libraries
- Containerized environments
- APIs and related interface definitions

It applies to all software developed under or integrated into ICD-governed projects, including those using government-furnished data, platforms, or funding.

## 3. Rights Granted

The Contributor grants to the U.S. Government and all ICD-aligned entities a:
- **Non-exclusive, irrevocable, worldwide, royalty-free license** to use, modify, reproduce, test, and redistribute the software
- **Right to sublicense** for mission-critical use, including coalition partners
- **Right to audit and validate** source artifacts and model logic for security or compliance

## 4. Attribution and Lineage

Contributors must provide:
- A clear **Software Bill of Materials (SBOM)**
- Source and license lineage for all upstream components
- Cryptographic hash of any binary artifact
- Disclosure of any models, weights, or data used in training or inference logic

## 5. Restrictions

Contributors may not:
- Encapsulate open-source or government-funded work as proprietary without disclosure
- Embed call-home, obfuscation, or anti-analysis measures
- Restrict or interfere with red-teaming or operational validation

## 6. Government Purpose Rights

All software developed using ICD funding, data, or infrastructure carries **unlimited rights** as defined by DFARS 252.227-7014 and 10 U.S.C. § 3458. If commingled with proprietary components, those components must be clearly partitioned, auditable, and separately licensed.

## 7. Compliance and Termination

Violations of this license may result in:
- Clawback of rights
- Public release under SW-ICD terms
- Exclusion from future ICD contracting or consortia participation

## 8. Compatibility

This license is compatible with:
- MIT, BSD, Apache 2.0
- GPL and AGPL (provided obligations are passed downstream)
- ICD-Shared Innovation Licenses (hardware and model analogs)

## 9. Jurisdiction

This license is governed by the laws of the United States and enforced under ICD Steering Body authority, with escalation possible to the Department of War Office of General Counsel or Office of the Secretary of War if required.

## 10. Updates and Maintenance

The ICD Steering Body may publish updates to this license. Contributors are encouraged, but not required, to adopt newer versions unless mandated for compliance or interoperability.

---

*Issued under the authority of the Industry Commons for Defense Steering Body.*`
      },
      {
        name: "Hardware",
        description: "HW-ICD License v1.0",
        type: "Hardware",
        fileName: "HW-ICD_License_v1.0_May2025.txt",
        content: `# Hardware Industry Commons for Defense (HW-ICD) License

**Version 1.0 – May 2025**

## 1. Purpose

The HW-ICD License enables transparent, modular hardware collaboration within the Industry Commons for Defense while protecting intellectual property and ensuring manufacturing sovereignty.

## 2. Scope

This license governs all hardware artifacts, including:
- Circuit designs and schematics
- PCB layouts and manufacturing files
- FPGA configurations
- Mechanical designs and CAD files
- Bill of Materials (BOM)
- Hardware interfaces and protocols

## 3. Rights Granted

Contributors grant government and ICD entities:
- **Manufacturing rights** for government purposes
- **Modification rights** for mission requirements
- **Supply chain visibility** for security validation
- **Coalition sharing** for allied interoperability
- **Unlimited use rights** for government applications

## 4. Design Lineage Requirements

Contributors must provide:
- Complete **Hardware Bill of Materials (HBOM)**
- Component sourcing and supply chain documentation
- Manufacturing process specifications
- Test and validation procedures
- Security assessment reports

## 5. Wartime Activation Clause

During declared national emergencies or wartime conditions, the government may:
- Seize hardware designs for national defense
- Mandate production by qualified manufacturers
- Override normal licensing restrictions
- Requisition manufacturing capacity

## 6. Proprietary Restrictions

Contributors may not:
- Encapsulate open hardware designs as proprietary without disclosure
- Embed hardware backdoors or undisclosed functionality
- Restrict government access to design files or documentation
- Limit government modification or manufacturing rights

## 7. Sovereign Fabrication Guidelines

Priority shall be given to:
- On-shore manufacturing and assembly
- Vetted and trusted supply chains
- Government-approved fabrication facilities
- Allied nation production capabilities

## 8. Enforcement Mechanisms

License violations may result in:
- Clawback of design rights
- Public release of proprietary designs
- Exclusion from government contracting
- Legal action under federal acquisition regulations

## 9. Compatibility

This license works with:
- Open Source Hardware (OSHW) licenses
- CERN Open Hardware Licenses
- Government data rights provisions
- Coalition sharing agreements

## 10. Jurisdiction

Governed by U.S. federal law and enforced by the ICD Steering Body with escalation to appropriate Department of War authorities.

---

*Issued under the authority of the Industry Commons for Defense Steering Body.*`
      },
      {
        name: "Data",
        description: "Data-ICD License v1.0",
        type: "Data",
        fileName: "Data-ICD_License_v1.0_May2025.txt",
        content: `# Data Industry Commons for Defense (Data-ICD) License

**Version 1.0 – May 2025**

## 1. Purpose

The Data-ICD License enables secure, privacy-preserving data sharing within the defense ecosystem while maintaining data sovereignty and protection of sensitive information.

## 2. Scope

This license governs:
- Training datasets and machine learning data
- Operational and mission data
- Synthetic and simulated datasets
- Data pipelines and ETL processes
- Metadata and data schemas
- Analytics and derived insights

## 3. Rights and Protections

Government and ICD entities receive:
- **Tiered access control** based on security clearance levels
- **Data utilization rights** for government purposes
- **Derivative work rights** for analysis and model training
- **Coalition sharing** under appropriate safeguards

## 4. Data Provenance and Lineage

Contributors must provide:
- Complete **Data Bill of Materials (DBOM)**
- Source attribution and collection methodologies
- Data quality and validation reports
- Privacy impact assessments
- Classification and handling instructions

## 5. Privacy and Security Requirements

- **Differential privacy** implementation for sensitive data
- **Anonymization and pseudonymization** where required
- **Encryption at rest and in transit**
- **Access logging and audit trails**
- **Data minimization** principles

## 6. Cross-Domain Sharing

Authorized sharing across:
- Security classification levels (with appropriate controls)
- Government agencies and departments
- Allied nations under coalition agreements
- Vetted industry partners

## 7. Retention and Destruction

- **Data lifecycle management** requirements
- **Secure deletion** procedures
- **Retention period** specifications
- **Legal hold** compliance

## 8. Compliance Framework

Adherence to:
- Federal data protection regulations
- DoW data governance policies
- International coalition data agreements
- Industry privacy standards

## 9. Violation Consequences

Non-compliance may result in:
- Immediate access revocation
- Data destruction requirements
- Legal action under federal privacy laws
- Exclusion from future data sharing

## 10. Updates and Governance

Managed by the ICD Steering Body with input from:
- DoW Data Governance Office
- Privacy and civil liberties organizations
- International coalition partners
- Industry data protection experts

---

*Issued under the authority of the Industry Commons for Defense Steering Body.*`
      },
      {
        name: "AI/ML Model",
        description: "Model-ICD License v1.0",
        type: "AI/ML",
        fileName: "Model-ICD_License_v1.0_May2025.txt",
        content: `# Model Industry Commons for Defense (Model-ICD) License

**Version 1.0 – May 2025**

## 1. Purpose

The Model-ICD License enables transparent, auditable AI/ML model sharing while ensuring model security, bias detection, and performance validation within the defense ecosystem.

## 2. Scope

This license governs:
- Machine learning models and neural networks
- AI algorithms and architectures
- Model weights, parameters, and configurations
- Training and inference engines
- Model evaluation and testing frameworks
- AI/ML toolchains and utilities

## 3. Transparency Requirements

Contributors must provide:
- **Model lineage documentation** including training data sources
- **Architecture specifications** and design rationale
- **Performance metrics** and validation results
- **Bias detection reports** and mitigation strategies
- **Adversarial robustness testing** results

## 4. Government Rights

Government and ICD entities receive:
- **Unlimited use rights** for government applications
- **Modification and adaptation** rights
- **Red team testing** and evaluation rights
- **Coalition sharing** capabilities
- **Commercial derivative** creation rights

## 5. Security and Validation

Required assessments include:
- **Adversarial attack resistance** testing
- **Data poisoning vulnerability** analysis
- **Model extraction protection** measures
- **Backdoor and trojan detection**
- **Explainability and interpretability** analysis

## 6. Bias and Fairness

Mandatory evaluations for:
- **Demographic bias** across protected classes
- **Geographic and cultural bias** considerations
- **Operational bias** in deployment scenarios
- **Temporal bias** and model drift
- **Intersectional fairness** analysis

## 7. Performance Standards

Models must meet:
- **Accuracy thresholds** for intended applications
- **Reliability and consistency** requirements
- **Latency and throughput** specifications
- **Resource utilization** constraints
- **Graceful degradation** capabilities

## 8. Ethical AI Requirements

Compliance with:
- DoW AI ethics guidelines
- Responsible AI principles
- Human-AI collaboration standards
- Autonomous system limitations
- Decision accountability frameworks

## 9. Continuous Monitoring

Ongoing requirements for:
- **Model performance tracking**
- **Bias drift detection**
- **Security vulnerability scanning**
- **Usage analytics and reporting**
- **Update and patching procedures**

## 10. Enforcement and Governance

Overseen by:
- ICD AI/ML Technical Committee
- DoW AI Governance Board
- Independent ethics review panels
- Coalition AI standards bodies

---

*Issued under the authority of the Industry Commons for Defense Steering Body.*`
      }
    ]
  },
  {
    title: "Templates",
    description: "Standardized templates for requirements, decisions, and notifications",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    items: [
      {
        name: "Requirements",
        description: "Capability Requirements Data Sheet (CRDS)",
        type: "General",
        fileName: "ICD_CRDS_Template_v1.0_May2025.txt",
        content: `# ICD Capability Requirements Data Sheet (CRDS) Template

**Version 1.0 – May 2025**

## 1. Capability Overview

**Capability Name:** [Name of the required capability]
**Capability Type:** [Software/Hardware/Data/AI-ML/Hybrid]
**Priority Level:** [Critical/High/Medium/Low]
**Timeline:** [Required delivery timeframe]

**Brief Description:**
[2-3 sentence summary of what this capability must accomplish]

## 2. Functional Requirements

**Primary Functions:**
- [Function 1: Description of core capability]
- [Function 2: Description of secondary capability]
- [Function 3: Description of supporting capability]

**Performance Requirements:**
- **Throughput:** [Required processing capacity]
- **Latency:** [Maximum acceptable response time]
- **Accuracy:** [Required precision/accuracy metrics]
- **Availability:** [Uptime requirements]
- **Scalability:** [Growth and scaling requirements]

## 3. Technical Specifications

**Integration Requirements:**
- **APIs:** [Required interfaces and protocols]
- **Data Formats:** [Supported input/output formats]
- **Platforms:** [Target deployment environments]
- **Dependencies:** [Required software/hardware dependencies]

**Security Requirements:**
- **Classification Level:** [Unclassified/Controlled/Secret/Top Secret]
- **Access Controls:** [Required authentication/authorization]
- **Encryption:** [Data protection requirements]
- **Audit Trail:** [Logging and monitoring requirements]

## 4. Operational Requirements

**Deployment Environment:**
- **Infrastructure:** [Cloud/On-premise/Hybrid/Edge]
- **Geographic Distribution:** [Location requirements]
- **Network Connectivity:** [Bandwidth and connectivity needs]
- **Environmental Conditions:** [Operating environment constraints]

**Support Requirements:**
- **Training:** [User training requirements]
- **Documentation:** [Required documentation types]
- **Maintenance:** [Ongoing support needs]
- **Updates:** [Update frequency and process]

## 5. ICD Framework Integration

**Licensing Requirements:**
- **ICD License Type:** [SW-ICD/HW-ICD/Data-ICD/Model-ICD]
- **Government Rights:** [Required rights and permissions]
- **Collaboration Model:** [Open/Restricted/Coalition]

**Compliance Requirements:**
- **Standards:** [Required technical standards]
- **Regulations:** [Applicable regulatory frameworks]
- **Certification:** [Required certifications or approvals]

## 6. Success Criteria

**Acceptance Criteria:**
- [Measurable success criterion 1]
- [Measurable success criterion 2]
- [Measurable success criterion 3]

**Testing Requirements:**
- **Unit Testing:** [Required test coverage]
- **Integration Testing:** [System integration requirements]
- **Performance Testing:** [Load and stress testing]
- **Security Testing:** [Vulnerability and penetration testing]

## 7. Risk Assessment

**Technical Risks:**
- [Risk 1: Description and mitigation strategy]
- [Risk 2: Description and mitigation strategy]

**Schedule Risks:**
- [Risk 1: Description and mitigation strategy]
- [Risk 2: Description and mitigation strategy]

**Dependencies:**
- [Critical dependency 1 and impact]
- [Critical dependency 2 and impact]

## 8. Stakeholder Information

**Primary Stakeholders:**
- **Requesting Organization:** [Name and POC]
- **Technical Lead:** [Name and contact]
- **Program Manager:** [Name and contact]
- **End Users:** [User community description]

**Review and Approval:**
- **Technical Review:** [Reviewer name and date]
- **Program Approval:** [Approver name and date]
- **ICD Steering Body Review:** [Review status and date]

---

*Prepared under ICD Framework v1.0 guidelines*`
      },
      {
        name: "Software Requirements",
        description: "CRDS for Software Components",
        type: "Software",
        fileName: "ICD_CRDS_Code_Template_v1.0_May2025.txt",
        content: `# ICD Capability Requirements Data Sheet - Software/Code Template

**Version 1.0 – May 2025**

## 1. Software Capability Overview

**Software Name:** [Name of software capability]
**Software Type:** [Application/Library/Service/Framework/Tool]
**Programming Languages:** [Primary and secondary languages]
**Architecture Pattern:** [Microservices/Monolithic/Serverless/Event-driven]

## 2. Code-Specific Requirements

**Development Standards:**
- **Coding Standards:** [Style guides and conventions]
- **Documentation Standards:** [Inline comments, API docs, README]
- **Testing Standards:** [Unit test coverage, integration tests]
- **Version Control:** [Git workflows, branching strategy]

**Software Dependencies:**
- **Runtime Dependencies:** [Required libraries and frameworks]
- **Build Dependencies:** [Development tools and compilers]
- **Database Dependencies:** [Required data storage systems]
- **External Services:** [APIs and third-party services]

## 3. Development Environment

**Development Tools:**
- **IDE/Editor Requirements:** [Recommended development environments]
- **Build Systems:** [Make, Maven, npm, etc.]
- **CI/CD Pipeline:** [Required automation tools]
- **Container Requirements:** [Docker, Kubernetes specifications]

**Source Code Management:**
- **Repository Structure:** [Directory organization requirements]
- **Branching Strategy:** [Git flow, feature branches]
- **Code Review Process:** [Peer review requirements]
- **Release Management:** [Versioning and release procedures]

## 4. Software Architecture

**System Architecture:**
- **Component Design:** [Modular structure requirements]
- **API Design:** [RESTful, GraphQL, gRPC specifications]
- **Data Flow:** [Input/output processing requirements]
- **State Management:** [Stateless/stateful considerations]

**Integration Points:**
- **Internal APIs:** [Service-to-service communication]
- **External APIs:** [Third-party integrations]
- **Database Interfaces:** [Data access patterns]
- **Message Queues:** [Asynchronous communication]

## 5. Performance and Scalability

**Performance Metrics:**
- **Response Time:** [API response time requirements]
- **Throughput:** [Requests per second/transactions per minute]
- **Resource Usage:** [CPU, memory, storage constraints]
- **Concurrent Users:** [Maximum simultaneous users]

**Scalability Requirements:**
- **Horizontal Scaling:** [Load balancing requirements]
- **Vertical Scaling:** [Resource scaling capabilities]
- **Auto-scaling:** [Dynamic scaling triggers and policies]
- **Caching Strategy:** [Data caching requirements]

## 6. Security Requirements

**Code Security:**
- **Secure Coding Practices:** [OWASP guidelines, security reviews]
- **Vulnerability Scanning:** [Static and dynamic analysis tools]
- **Dependency Security:** [Third-party library vulnerability checks]
- **Code Signing:** [Digital signature requirements]

**Runtime Security:**
- **Authentication/Authorization:** [Identity management integration]
- **Input Validation:** [Data sanitization requirements]
- **Encryption:** [Data encryption in transit and at rest]
- **Audit Logging:** [Security event logging requirements]

## 7. Quality Assurance

**Testing Strategy:**
- **Unit Testing:** [Minimum coverage requirements]
- **Integration Testing:** [API and service testing]
- **End-to-End Testing:** [User workflow testing]
- **Performance Testing:** [Load and stress testing]
- **Security Testing:** [Penetration and vulnerability testing]

**Code Quality:**
- **Static Analysis:** [Code quality tools and metrics]
- **Code Coverage:** [Minimum test coverage thresholds]
- **Technical Debt:** [Acceptable debt levels and remediation]
- **Refactoring:** [Code improvement requirements]

## 8. Deployment and Operations

**Deployment Requirements:**
- **Deployment Strategy:** [Blue-green, rolling, canary]
- **Environment Promotion:** [Dev->Test->Prod pipeline]
- **Configuration Management:** [Environment-specific configs]
- **Database Migrations:** [Schema change management]

**Operational Requirements:**
- **Monitoring:** [Application performance monitoring]
- **Logging:** [Centralized logging requirements]
- **Alerting:** [Error and performance alerts]
- **Backup/Recovery:** [Data backup and disaster recovery]

## 9. ICD Software Framework Compliance

**SW-ICD License Compliance:**
- **Open Source Compatibility:** [License compatibility requirements]
- **Government Rights:** [Unlimited rights provisions]
- **Source Code Availability:** [Code transparency requirements]
- **Attribution Requirements:** [Proper licensing attribution]

**Development Process:**
- **ICD DevOps Integration:** [CI/CD pipeline compliance]
- **Collaboration Tools:** [ICD-approved development platforms]
- **Code Sharing:** [Repository and sharing requirements]
- **Community Contribution:** [Open development participation]

## 10. Maintenance and Support

**Ongoing Maintenance:**
- **Bug Fixes:** [Response time for critical/non-critical issues]
- **Security Updates:** [Patch management requirements]
- **Feature Updates:** [Enhancement delivery schedule]
- **Dependencies:** [Third-party library update management]

**Documentation Maintenance:**
- **API Documentation:** [Automated documentation generation]
- **User Guides:** [End-user documentation requirements]
- **Developer Documentation:** [Technical documentation standards]
- **Change Logs:** [Release note requirements]

---

*Prepared under ICD Framework v1.0 guidelines for software development*`
      },
      {
        name: "Hardware Requirements",
        description: "Hardware Requirements Data Sheet (HRDS)",
        type: "Hardware",
        fileName: "ICD_HRDS_Template_v1.0_May2025.txt",
        content: `# ICD Hardware Requirements Data Sheet (HRDS) Template

**Version 1.0 – May 2025**

## 1. Hardware System Overview

**System Name:** [Name of hardware system/component]
**System Type:** [Sensor/Processor/Communication/Power/Mechanical]
**Form Factor:** [Physical size and mounting requirements]
**Operational Environment:** [Environmental operating conditions]

## 2. Technical Specifications

**Performance Requirements:**
- **Processing Power:** [CPU/GPU/FPGA specifications]
- **Memory:** [RAM, storage, cache requirements]
- **Bandwidth:** [Data throughput requirements]
- **Latency:** [Real-time processing constraints]
- **Power Consumption:** [Power budget and efficiency]

**Physical Requirements:**
- **Dimensions:** [Length x Width x Height]
- **Weight:** [Maximum allowable weight]
- **Mounting:** [Installation and mounting specifications]
- **Connectors:** [Interface types and quantities]
- **Cooling:** [Thermal management requirements]

## 3. Environmental Specifications

**Operating Conditions:**
- **Temperature Range:** [Operating temperature limits]
- **Humidity:** [Humidity tolerance specifications]
- **Vibration:** [Vibration resistance requirements]
- **Shock:** [Impact and shock tolerance]
- **Altitude:** [Operating altitude range]

**Environmental Protection:**
- **IP Rating:** [Ingress protection level]
- **EMI/EMC:** [Electromagnetic compatibility]
- **Corrosion Resistance:** [Material durability requirements]
- **UV Resistance:** [Ultraviolet exposure tolerance]

## 4. Functional Requirements

**Primary Functions:**
- [Function 1: Core hardware capability]
- [Function 2: Secondary hardware function]
- [Function 3: Support function]

**Interface Requirements:**
- **Digital Interfaces:** [USB, Ethernet, Serial, etc.]
- **Analog Interfaces:** [Sensor inputs, control outputs]
- **Wireless Interfaces:** [Wi-Fi, Bluetooth, cellular]
- **Power Interfaces:** [Power input specifications]

## 5. Design and Manufacturing

**Design Requirements:**
- **Design Standards:** [IPC, IEEE, MIL-STD compliance]
- **Component Selection:** [COTS vs. custom components]
- **Modular Design:** [Replaceable/upgradeable components]
- **Testability:** [Built-in test and diagnostic features]

**Manufacturing Requirements:**
- **Manufacturing Location:** [Domestic/trusted source requirements]
- **Quality Standards:** [ISO, AS9100, MIL-STD quality]
- **Supply Chain:** [Component sourcing requirements]
- **Traceability:** [Component tracking and documentation]

## 6. Security Requirements

**Physical Security:**
- **Tamper Resistance:** [Physical tampering protection]
- **Secure Boot:** [Hardware root of trust]
- **Key Storage:** [Cryptographic key protection]
- **Debug Protection:** [Debug interface security]

**Supply Chain Security:**
- **Component Authentication:** [Genuine component verification]
- **Manufacturing Security:** [Secure manufacturing processes]
- **Logistics Security:** [Secure transportation and storage]
- **Lifecycle Management:** [End-of-life security procedures]

## 7. Reliability and Maintenance

**Reliability Requirements:**
- **MTBF:** [Mean Time Between Failures]
- **MTTR:** [Mean Time To Repair]
- **Availability:** [Uptime requirements]
- **Redundancy:** [Backup and failover capabilities]

**Maintenance Requirements:**
- **Preventive Maintenance:** [Scheduled maintenance procedures]
- **Predictive Maintenance:** [Condition monitoring capabilities]
- **Field Replacement:** [User-replaceable components]
- **Calibration:** [Periodic calibration requirements]

## 8. Integration and Compatibility

**System Integration:**
- **Mechanical Integration:** [Mounting and assembly]
- **Electrical Integration:** [Power and signal connections]
- **Thermal Integration:** [Heat dissipation and management]
- **Software Integration:** [Driver and firmware requirements]

**Compatibility Requirements:**
- **Legacy Systems:** [Backward compatibility needs]
- **Standard Compliance:** [Industry standard adherence]
- **Interoperability:** [Multi-vendor system compatibility]

## 9. HW-ICD Framework Compliance

**HW-ICD License Requirements:**
- **Design Transparency:** [Schematic and layout sharing]
- **Government Rights:** [Manufacturing and modification rights]
- **Supply Chain Visibility:** [Component sourcing transparency]
- **Manufacturing Rights:** [Domestic production capabilities]

**Collaboration Requirements:**
- **Design Sharing:** [Hardware design collaboration tools]
- **Documentation Standards:** [ICD documentation requirements]
- **Version Control:** [Hardware version management]
- **Community Participation:** [Open hardware development]

## 10. Testing and Validation

**Design Validation:**
- **Functional Testing:** [Feature verification testing]
- **Performance Testing:** [Specification compliance testing]
- **Environmental Testing:** [Operating condition validation]
- **Reliability Testing:** [Long-term reliability validation]

**Production Testing:**
- **Incoming Inspection:** [Component quality verification]
- **In-Circuit Testing:** [Manufacturing defect detection]
- **Final Testing:** [System-level functional testing]
- **Burn-in Testing:** [Infant mortality elimination]

## 11. Documentation Requirements

**Design Documentation:**
- **Schematics:** [Circuit design documentation]
- **PCB Layouts:** [Physical design files]
- **Bill of Materials:** [Complete component listing]
- **Assembly Drawings:** [Manufacturing assembly instructions]

**Operational Documentation:**
- **User Manuals:** [Operating instructions]
- **Maintenance Manuals:** [Service and repair procedures]
- **Installation Guides:** [Integration and setup instructions]
- **Safety Documentation:** [Safety precautions and warnings]

---

*Prepared under ICD Framework v1.0 guidelines for hardware development*`
      },
      {
        name: "Component Specs",
        description: "Hardware Component Specifications",
        type: "Hardware",
        fileName: "ICD_HRDS_HW_Template_v1.0_May2025.txt",
        content: `# ICD Hardware Requirements Data Sheet - Hardware Component Template

**Version 1.0 – May 2025**

## 1. Hardware Component Specification

**Component Name:** [Specific hardware component name]
**Component Category:** [Processor/Memory/Sensor/Actuator/Interface/Power]
**Component Type:** [Specific type within category]
**Package Type:** [Physical package format]

## 2. Electrical Characteristics

**Power Requirements:**
- **Supply Voltage:** [Operating voltage range]
- **Current Consumption:** [Typical and maximum current]
- **Power Dissipation:** [Heat generation specifications]
- **Power Sequencing:** [Power-up/down requirements]

**Signal Characteristics:**
- **Input Specifications:** [Voltage levels, impedance, timing]
- **Output Specifications:** [Drive capability, loading]
- **Clock Requirements:** [Frequency, jitter, stability]
- **Signal Integrity:** [Rise/fall times, overshoot limits]

## 3. Mechanical Specifications

**Physical Dimensions:**
- **Package Size:** [Length x Width x Height]
- **Pin Count:** [Number and type of pins/balls]
- **Pitch:** [Pin/ball spacing]
- **Thickness:** [Component height restrictions]

**Mechanical Constraints:**
- **Mounting Method:** [Surface mount, through-hole, socket]
- **Thermal Interface:** [Heat sink requirements]
- **Mechanical Stress:** [Bend and twist tolerance]
- **Vibration Tolerance:** [Frequency and amplitude limits]

## 4. Environmental Requirements

**Operating Environment:**
- **Temperature Range:** [Commercial/Industrial/Military grade]
- **Humidity Tolerance:** [Relative humidity limits]
- **Atmospheric Pressure:** [Altitude operating range]
- **Contamination Resistance:** [Dust, chemical resistance]

**Storage Environment:**
- **Storage Temperature:** [Non-operating temperature range]
- **Shelf Life:** [Component aging characteristics]
- **Moisture Sensitivity:** [MSL rating requirements]
- **ESD Sensitivity:** [Electrostatic discharge protection]

## 5. Performance Requirements

**Functional Performance:**
- **Speed/Frequency:** [Operating frequency range]
- **Accuracy/Precision:** [Measurement or control accuracy]
- **Resolution:** [Minimum detectable/controllable increment]
- **Linearity:** [Linear response characteristics]

**Dynamic Performance:**
- **Response Time:** [Time-based performance metrics]
- **Bandwidth:** [Frequency response characteristics]
- **Slew Rate:** [Rate of change limitations]
- **Settling Time:** [Stabilization time requirements]

## 6. Interface Requirements

**Digital Interfaces:**
- **Communication Protocols:** [SPI, I2C, UART, PCIe, etc.]
- **Data Rates:** [Maximum data transfer rates]
- **Timing Requirements:** [Setup/hold times, clock domains]
- **Voltage Levels:** [Logic level compatibility]

**Analog Interfaces:**
- **Input Ranges:** [Analog input specifications]
- **Output Ranges:** [Analog output capabilities]
- **Impedance Matching:** [Input/output impedance]
- **Noise Performance:** [SNR, THD specifications]

## 7. Quality and Reliability

**Quality Standards:**
- **Manufacturing Standards:** [IPC, J-STD compliance]
- **Quality Grades:** [Commercial/Industrial/Military/Space]
- **Lot Acceptance:** [Incoming inspection requirements]
- **Traceability:** [Manufacturing lot tracking]

**Reliability Metrics:**
- **MTBF Rating:** [Mean Time Between Failures]
- **Failure Modes:** [Common failure mechanisms]
- **Stress Testing:** [Accelerated life testing results]
- **Derating Guidelines:** [Safe operating margins]

## 8. Supply Chain Requirements

**Sourcing Requirements:**
- **Approved Vendors:** [Qualified supplier list]
- **Country of Origin:** [Manufacturing location restrictions]
- **Supply Chain Security:** [Anti-counterfeiting measures]
- **Availability:** [Product lifecycle and obsolescence]

**Procurement Specifications:**
- **Minimum Order Quantities:** [MOQ requirements]
- **Lead Times:** [Standard delivery timeframes]
- **Packaging Requirements:** [Anti-static, moisture protection]
- **Documentation:** [Certificates, test reports, datasheets]

## 9. Testing and Validation

**Component-Level Testing:**
- **Functional Testing:** [Parameter verification]
- **Performance Testing:** [Specification compliance]
- **Environmental Testing:** [Temperature, humidity cycling]
- **Reliability Testing:** [Burn-in, life testing]

**System-Level Integration:**
- **Compatibility Testing:** [System integration verification]
- **EMI/EMC Testing:** [Electromagnetic compliance]
- **Thermal Testing:** [Operating temperature validation]
- **Stress Testing:** [Operational margin verification]

## 10. Documentation and Support

**Technical Documentation:**
- **Datasheets:** [Comprehensive specifications]
- **Application Notes:** [Usage guidelines and examples]
- **Reference Designs:** [Proven implementation examples]
- **Simulation Models:** [SPICE, behavioral models]

**Design Support:**
- **Technical Support:** [Engineering support availability]
- **Design Tools:** [CAD libraries, simulation tools]
- **Evaluation Boards:** [Development and testing platforms]
- **Training Resources:** [Technical training materials]

## 11. HW-ICD Compliance

**Open Hardware Requirements:**
- **Design Files:** [Schematic and layout sharing requirements]
- **Component Models:** [Simulation and CAD model availability]
- **Reference Implementations:** [Open reference designs]
- **Documentation Standards:** [ICD documentation compliance]

**Collaboration Framework:**
- **Community Support:** [Developer community participation]
- **Design Reviews:** [Peer review processes]
- **Version Control:** [Design revision management]
- **Issue Tracking:** [Problem reporting and resolution]

---

*Prepared under ICD Framework v1.0 guidelines for hardware component specification*`
      },
      {
        name: "Decision Records",
        description: "Architecture Decision Record (ADR) Template",
        type: "General",
        fileName: "ICD_Decision_Record_Template.txt",
        content: `# ICD Architecture Decision Record (ADR) Template

**ADR Number:** [Sequential number]
**Date:** [Decision date]
**Status:** [Proposed/Accepted/Deprecated/Superseded]
**Supersedes:** [Previous ADR if applicable]

## 1. Title

[Concise title describing the architectural decision]

## 2. Context

**Problem Statement:**
[Describe the architectural challenge or decision that needs to be made]

**Current State:**
[Description of the current architecture or approach]

**Constraints:**
- [Technical constraint 1]
- [Business constraint 2]
- [Timeline constraint 3]
- [Resource constraint 4]

**Assumptions:**
- [Assumption 1 about future requirements]
- [Assumption 2 about technology evolution]
- [Assumption 3 about operational environment]

## 3. Decision Drivers

**Functional Requirements:**
- [Key functional requirement 1]
- [Key functional requirement 2]
- [Key functional requirement 3]

**Quality Attributes:**
- **Performance:** [Specific performance requirements]
- **Scalability:** [Growth and scaling needs]
- **Security:** [Security requirements and concerns]
- **Maintainability:** [Long-term maintenance considerations]
- **Reliability:** [Availability and fault tolerance needs]
- **Interoperability:** [Integration requirements]

**ICD Framework Requirements:**
- **Licensing Compliance:** [SW-ICD/HW-ICD/Data-ICD/Model-ICD requirements]
- **Collaboration Model:** [Open development requirements]
- **Government Rights:** [Rights and access requirements]
- **Security Standards:** [ICD security framework compliance]

## 4. Options Considered

### Option 1: [Option name]
**Description:** [Detailed description of this option]

**Pros:**
- [Advantage 1]
- [Advantage 2]
- [Advantage 3]

**Cons:**
- [Disadvantage 1]
- [Disadvantage 2]
- [Disadvantage 3]

**ICD Compliance:** [How this option aligns with ICD framework]
**Estimated Cost:** [Development and operational costs]
**Risk Level:** [High/Medium/Low with justification]

### Option 2: [Option name]
**Description:** [Detailed description of this option]

**Pros:**
- [Advantage 1]
- [Advantage 2]
- [Advantage 3]

**Cons:**
- [Disadvantage 1]
- [Disadvantage 2]
- [Disadvantage 3]

**ICD Compliance:** [How this option aligns with ICD framework]
**Estimated Cost:** [Development and operational costs]
**Risk Level:** [High/Medium/Low with justification]

### Option 3: [Option name]
**Description:** [Detailed description of this option]

**Pros:**
- [Advantage 1]
- [Advantage 2]
- [Advantage 3]

**Cons:**
- [Disadvantage 1]
- [Disadvantage 2]
- [Disadvantage 3]

**ICD Compliance:** [How this option aligns with ICD framework]
**Estimated Cost:** [Development and operational costs]
**Risk Level:** [High/Medium/Low with justification]

## 5. Decision

**Selected Option:** [Chosen option with rationale]

**Rationale:**
[Detailed explanation of why this option was selected, including:]
- [Primary decision factor 1]
- [Primary decision factor 2]
- [Primary decision factor 3]
- [ICD framework alignment justification]

**Trade-offs Accepted:**
- [Trade-off 1: What was sacrificed and why it's acceptable]
- [Trade-off 2: What was sacrificed and why it's acceptable]

## 6. Implementation Plan

**Implementation Phases:**
1. **Phase 1:** [Initial implementation steps]
   - Timeline: [Estimated duration]
   - Resources: [Required team members and skills]
   - Deliverables: [Expected outputs]

2. **Phase 2:** [Follow-on implementation steps]
   - Timeline: [Estimated duration]
   - Resources: [Required team members and skills]
   - Deliverables: [Expected outputs]

3. **Phase 3:** [Final implementation steps]
   - Timeline: [Estimated duration]
   - Resources: [Required team members and skills]
   - Deliverables: [Expected outputs]

**Dependencies:**
- [Critical dependency 1 and mitigation plan]
- [Critical dependency 2 and mitigation plan]

## 7. Consequences

**Positive Consequences:**
- [Benefit 1: Expected positive outcome]
- [Benefit 2: Expected positive outcome]
- [Benefit 3: Expected positive outcome]

**Negative Consequences:**
- [Risk 1: Potential negative impact and mitigation]
- [Risk 2: Potential negative impact and mitigation]
- [Risk 3: Potential negative impact and mitigation]

**Impact on Existing Systems:**
- [System 1: Description of impact and required changes]
- [System 2: Description of impact and required changes]

## 8. Monitoring and Review

**Success Metrics:**
- [Metric 1: How success will be measured]
- [Metric 2: How success will be measured]
- [Metric 3: How success will be measured]

**Review Schedule:**
- **Initial Review:** [Date for first assessment]
- **Periodic Reviews:** [Frequency of ongoing assessments]
- **Trigger Events:** [Conditions that would prompt unscheduled review]

**Review Criteria:**
- [Criterion 1: When this decision should be reconsidered]
- [Criterion 2: When this decision should be reconsidered]

## 9. Stakeholder Input

**Decision Participants:**
- [Name, Role, Contact] - [Primary decision maker/Technical lead/etc.]
- [Name, Role, Contact] - [Subject matter expert/Stakeholder representative/etc.]

**Consultation Process:**
- [Date]: [Meeting/review with stakeholder group 1]
- [Date]: [Technical review with architecture team]
- [Date]: [ICD Steering Body consultation if required]

**Approval:**
- **Technical Approval:** [Name, Title, Date]
- **Program Approval:** [Name, Title, Date]
- **ICD Compliance Review:** [Name, Title, Date if applicable]

## 10. References

**Related Documents:**
- [ADR #]: [Related architecture decisions]
- [Document]: [Relevant specifications or standards]
- [Policy]: [Applicable organizational policies]

**ICD Framework References:**
- [License]: [Applicable ICD license documentation]
- [Standard]: [Relevant ICD technical standards]
- [Guideline]: [ICD implementation guidelines]

**External References:**
- [Standard]: [Industry standards referenced]
- [Best Practice]: [Industry best practices consulted]
- [Research]: [Technical research or whitepapers]

---

*Prepared under ICD Framework v1.0 ADR guidelines*`
      },
      {
        name: "Violation Notice",
        description: "License Violation and Clawback Template",
        type: "Legal",
        fileName: "ICD_Clawback_Notification_Template.txt",
        content: `# ICD License Violation and Clawback Notification Template

**Notification Number:** [Unique identification number]
**Date of Notice:** [Date notification was issued]
**Issued By:** [ICD Steering Body/Certification Authority]
**License Type:** [SW-ICD/HW-ICD/Data-ICD/Model-ICD]

## 1. Violation Summary

**Violating Party:** [Organization/Individual name]
**Contact Information:** [Primary contact details]
**ICD Participant Status:** [Member/Partner/Contributor/Licensee]

**Violation Type:** [License Breach/Compliance Failure/Unauthorized Use]
**Severity Level:** [Critical/High/Medium/Low]
**Discovery Date:** [When violation was first identified]

## 2. Violation Details

**Affected Assets:**
- **Asset Name:** [Software/Hardware/Data/Model identification]
- **Asset Version:** [Version number or identifier]
- **License Agreement:** [Applicable license agreement reference]
- **Original Grant Date:** [When license was originally granted]

**Specific Violations:**

### Primary Violation
**Violation Category:** [Attribution Failure/Unauthorized Modification/Improper Distribution/etc.]
**Description:** [Detailed description of the violation]
**Evidence:** [Documentation or proof of violation]
**ICD License Section:** [Specific license clause violated]

### Secondary Violations (if applicable)
**Violation Category:** [Additional violation type]
**Description:** [Detailed description]
**Evidence:** [Supporting documentation]

## 3. Impact Assessment

**Security Impact:**
- [Description of potential security implications]
- [Assessment of data/system compromise risk]
- [Classification level concerns if applicable]

**Operational Impact:**
- [Impact on government operations]
- [Effect on coalition partners]
- [Mission capability degradation]

**Community Impact:**
- [Effect on ICD ecosystem trust]
- [Impact on collaborative development]
- [Precedent concerns for other participants]

## 4. Immediate Actions Required

**Cease and Desist Requirements:**
- [ ] Immediately stop all unauthorized use of ICD-licensed assets
- [ ] Halt distribution of non-compliant implementations
- [ ] Suspend access to ICD collaborative platforms
- [ ] Notify all downstream users of license violation

**Remediation Actions (within [X] days):**
- [ ] Provide complete audit of asset usage
- [ ] Submit corrective implementation plan
- [ ] Implement proper license attribution
- [ ] Update all documentation and distributions

**Evidence Preservation:**
- [ ] Preserve all records related to asset development
- [ ] Maintain audit trails of asset distribution
- [ ] Document all remediation actions taken
- [ ] Provide access to ICD auditors if requested

## 5. Clawback Provisions Invoked

**Rights Revocation:**
- **Effective Date:** [When rights are revoked]
- **Scope:** [Which rights are being clawed back]
- **Duration:** [Temporary/Permanent/Until Remediation]

**Asset Recovery Requirements:**
- [ ] Return all ICD-licensed source code and documentation
- [ ] Provide list of all derivatives and distributions
- [ ] Transfer any improvements back to ICD commons
- [ ] Destroy unauthorized copies and implementations

**Public Disclosure Authorization:**
- **Disclosure Date:** [When violation may be made public]
- **Scope of Disclosure:** [What information will be released]
- **Appeal Period:** [Time allowed for response before disclosure]

## 6. Escalation Path

**Current Status:** [Initial Notice/Escalated Warning/Final Notice]

**Next Steps if Unresolved:**
1. **Day [X]:** Escalation to ICD Steering Body Executive Committee
2. **Day [Y]:** Notification to relevant government contracting officers
3. **Day [Z]:** Public disclosure of violation and clawback action
4. **Day [A]:** Legal action initiation if required

**Appeal Process:**
- **Appeal Window:** [Number of days to submit appeal]
- **Appeal Authority:** [Who reviews appeals]
- **Appeal Requirements:** [Documentation needed for appeal]

## 7. Legal and Regulatory Implications

**Contract Implications:**
- [Impact on current government contracts]
- [Effect on future contracting eligibility]
- [FAR/DFARS violation considerations]

**Regulatory Compliance:**
- [Export control implications if applicable]
- [Security clearance impacts]
- [Industry certification effects]

**Civil/Criminal Considerations:**
- [Potential civil liability exposure]
- [Criminal referral possibilities]
- [Intellectual property theft concerns]

## 8. Remediation Path

**Compliance Restoration Requirements:**
- [ ] Complete violation remediation
- [ ] Implement enhanced compliance monitoring
- [ ] Provide compliance officer training
- [ ] Submit to periodic auditing for [X] months/years

**Probationary Terms:**
- **Duration:** [Length of probationary period]
- **Restrictions:** [Limitations on ICD participation]
- **Monitoring:** [Required reporting and oversight]
- **Review Schedule:** [When status will be reassessed]

**Good Standing Restoration:**
- **Requirements:** [Criteria for full restoration]
- **Timeline:** [Expected timeframe for restoration]
- **Approval Authority:** [Who approves restoration]

## 9. Contact Information

**ICD Compliance Office:**
- **Primary Contact:** [Name, Title]
- **Email:** [compliance@icd-defense.org]
- **Phone:** [Contact number]
- **Address:** [Physical address]

**Legal Counsel:**
- **ICD Legal Counsel:** [Law firm/attorney name]
- **Contact:** [Legal contact information]

**Technical Appeals:**
- **Technical Review Board:** [Contact information]
- **Appeal Email:** [appeals@icd-defense.org]

## 10. Response Requirements

**Required Response Date:** [Deadline for initial response]
**Response Method:** [Email/Letter/Portal submission]
**Required Information in Response:**
- [ ] Acknowledgment of receipt
- [ ] Preliminary assessment of violation claims
- [ ] Proposed remediation timeline
- [ ] Contact information for ongoing communication

**Documentation to Submit:**
- [ ] Compliance assessment report
- [ ] Asset usage audit results
- [ ] Corrective action plan
- [ ] Legal review of proposed remediation

## 11. Certification

This notice is issued under the authority granted to the ICD Steering Body pursuant to the applicable ICD license agreements and the ICD governance framework.

**Authorized Signature:**
[Name, Title, ICD Steering Body]
[Date]
[Digital Signature]

**Distribution:**
- Violating Party (Primary Contact)
- ICD Steering Body Members
- Relevant Government Program Offices
- Legal Counsel (if escalated)

---

*Issued under ICD Framework v1.0 compliance and enforcement procedures*`
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
        name: "Governance",
        description: "Steering Body Charter",
        fileName: "Steering-Body-Charter.md"
      },
      {
        name: "Certification",
        description: "Certification Authority Charter",
        fileName: "Certification-Authority-Charter.md"
      },
      {
        name: "Coalition Sharing",
        description: "Coalition Disclosure Tiers",
        fileName: "Coalition-Disclosure-Tiers.md"
      },
      {
        name: "Emergency Access",
        description: "Emergency Override Protocols",
        fileName: "Emergency-Override-Protocols.md"
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
        name: "Metadata",
        description: "Component Metadata Schema",
        fileName: "metadata-schema.json"
      },
      {
        name: "Audit Trails",
        description: "Federated Audit Ledger Schema",
        fileName: "audit-ledger-schema.json"
      },
      {
        name: "AI/ML Testing",
        description: "Model Testing Guidance",
        fileName: "Model-Testing-Guidance.md"
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
        name: "Deployment",
        description: "Field Deployment Binder",
        fileName: "Field-Deployment-Binder.md"
      },
      {
        name: "Onboarding",
        description: "Partner Onboarding Kit",
        fileName: "Partner-Onboarding-Kit.md"
      },
      {
        name: "FFRDC Contract",
        description: "FFRDC Onboarding Template",
        fileName: "FFRDC-Onboarding-Contract.md"
      },
      {
        name: "Red Team",
        description: "Security Assessment Playbook",
        fileName: "Red-Team-Activation-Playbook.md"
      }
    ]
  }
];

export default function ComponentsPage() {
  const baseGitHubUrl = "https://github.com/industry-commons-for-defense/icd-artifacts";
  const rawGitHubUrl = "https://raw.githubusercontent.com/industry-commons-for-defense/icd-artifacts/main";

  return (
    <>
      {/* Hero Section */}
      <Section variant="spacious" background="gradient">
        <Container size="md">
          <div className="text-center text-white">
            <Heading level="h1" className="mb-6 text-white">
              Components
            </Heading>
            <Text variant="large" className="mb-8 text-white">
              What we use to make collaboration work: licenses, templates, governance, and specs.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={baseGitHubUrl}
                variant="secondary"
                size="lg"
                className="bg-white text-primary-800 hover:bg-gray-100"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
              <Button
                href={`${baseGitHubUrl}/archive/refs/heads/main.zip`}
                variant="secondary"
                style="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-800"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Archive
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Repository Info */}
      <Section variant="default" background="white">
        <Container size="lg">
          <Card variant="filled" padding="lg" className="bg-blue-50 border-blue-200 mb-12">
            <div className="text-center">
              <Heading level="h2" className="mb-4 text-blue-800">
                ICD Artifacts Repository
              </Heading>
              <Text className="mb-6">
                Data standards for building and sharing technology across government, labs, and industry.
              </Text>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">v1.0.0</div>
                  <Text variant="small">Current Version</Text>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">May 2025</div>
                  <Text variant="small">Release Date</Text>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">SW-ICD</div>
                  <Text variant="small">Repository License</Text>
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Component Categories */}
      {componentCategories.map((category) => (
        <Section key={category.title} variant="default" background="gray">
          <Container size="lg">
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <div className={`${category.bgColor} p-3 rounded-lg mr-4`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <div>
                  <Heading level="h2" className="mb-2">{category.title}</Heading>
                  <Text className="text-neutral-600">{category.description}</Text>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {category.items.map((item) => (
                <Card key={item.name} variant="filled" padding="lg" className={`border-2 ${category.borderColor}`}>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Heading level="h3" className="mb-2">{item.name}</Heading>
                          <Text className="mb-4">{item.description}</Text>
                          {'type' in item && item.type && (
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${category.bgColor} ${category.color}`}>
                              {item.type}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* License Content Accordion */}
                      {'content' in item && item.content && (
                        <div className="mb-4">
                          <AccordionComponent
                            title="View License Content"
                            content={
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
                                  {item.content}
                                </pre>
                              </div>
                            }
                          />
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 lg:flex-col lg:w-48">
                      <Button
                        href={`${baseGitHubUrl}/blob/main/${'fileName' in item ? item.fileName : ''}`}
                        variant="secondary"
                        size="sm"
                        className="w-full"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View on GitHub
                      </Button>
                      <Button
                        href={`${rawGitHubUrl}/${'fileName' in item ? item.fileName : ''}`}
                        variant="secondary"
                        style="outline"
                        size="sm"
                        className="w-full"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      ))}

      {/* Additional Resources */}
      <Section variant="default" background="white">
        <Container size="lg">
          <Heading level="h2" className="mb-12 text-center">
            Additional Resources
          </Heading>

          <Grid cols={2} gap="lg">
            <Card variant="outlined" padding="lg">
              <Heading level="h3" className="mb-4">
                Contributing Guidelines
              </Heading>
              <Text className="mb-4">
                Learn how to contribute to the ICD artifacts repository and participate in the collaborative development process.
              </Text>
              <Button
                href={`${baseGitHubUrl}/blob/main/CONTRIBUTING.md`}
                variant="primary"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Guidelines
              </Button>
            </Card>

            <Card variant="outlined" padding="lg">
              <Heading level="h3" className="mb-4">
                Support & Documentation
              </Heading>
              <Text className="mb-4">
                Access comprehensive documentation and support resources for implementing ICD framework components.
              </Text>
              <Button
                href="/contact"
                variant="primary"
              >
                Get Support
              </Button>
            </Card>
          </Grid>

          <Card variant="filled" padding="lg" className="mt-12 bg-yellow-50 border-yellow-200">
            <Heading level="h3" className="mb-4 text-yellow-800">
              Compliance Requirements
            </Heading>
            <Text className="mb-4">
              All components in this repository must comply with:
            </Text>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>ICD licensing frameworks and attribution requirements</li>
              <li>U.S. export control regulations (ITAR/EAR)</li>
              <li>Classification guidelines and security protocols</li>
              <li>ICD Steering Body governance and oversight</li>
            </ul>
          </Card>
        </Container>
      </Section>
    </>
  );
}