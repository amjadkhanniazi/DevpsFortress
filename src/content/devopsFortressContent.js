export const fortressContent = {
  seo: {
    title: 'Azure DevOps Service Connection Services - DevOps Fortress',
    description:
      'DevOps Fortress provides expert Azure DevOps service connection setup, CI/CD pipeline automation, and Azure Pipelines consulting. Secure. Fast. Reliable. Get started today.',
    focusKeyword: 'azure devops service connection',
  },
  hero: {
    title: 'Expert Azure DevOps Service Connection & CI/CD Pipeline Services',
    subtitle:
      "Setting up a reliable Azure DevOps service connection is the foundation of every secure, automated pipeline. At DevOps Fortress, we design, configure, and manage Azure DevOps service connections that help teams deploy faster, authenticate securely, and scale with confidence. Whether you need to connect Azure Pipelines to Azure Resource Manager, integrate with Kubernetes clusters, or establish PAT-free workload identity federation, we handle the complexity so you do not have to. Our DevOps engineers bring deep expertise in Azure Pipelines configuration, CI/CD automation, and cloud infrastructure management.",
    tagline: 'Secure. Automate. Scale.',
    primaryCta: 'Get a Free Consultation',
    secondaryCta: 'View Our Services',
  },
  serviceConnectionOverview: {
    kicker: 'Azure DevOps Service Connection',
    title: 'What Is an Azure DevOps Service Connection?',
    body: [
      'An Azure DevOps service connection, also called a service endpoint, is a secure and centrally managed configuration that allows Azure Pipelines to authenticate and interact with external services including Azure subscriptions, container registries, Kubernetes clusters, GitHub repositories, and more.',
      'Without a properly configured service connection, your CI/CD pipelines cannot deploy to Azure, push Docker images, or interact with cloud resources. A misconfigured connection is one of the most common causes of pipeline failures and deployment bottlenecks.',
      'At DevOps Fortress, we set up and manage service connections using industry-best security practices including workload identity federation, role-based access control, and least-privilege service principals so your pipelines are both fast and secure.',
    ],
  },
  azureServices: [
    {
      title: 'Azure DevOps Service Connection Setup & Configuration',
      description:
        'We create and configure secure Azure DevOps service connections with the right scope, permissions, and approval controls.',
      bullets: [
        'Azure Resource Manager service connections for Azure subscriptions',
        'Workload identity federation for PAT-free, zero-secret authentication',
        'Kubernetes service connections for AKS deployments',
        'Docker Registry and Azure Container Registry connections',
        'GitHub, Bitbucket, and generic REST API service endpoints',
      ],
    },
    {
      title: 'CI/CD Pipeline Automation with Azure Pipelines',
      description:
        'We design automated Azure Pipelines workflows that move code from commit to production with speed, governance, and repeatability.',
      bullets: [
        'YAML-based pipeline design, build, and optimization',
        'Multi-environment deployment strategies for dev, staging, and production',
        'Approval workflows and deployment gates',
        'Azure Artifacts, Azure Container Registry, and Terraform integration',
        'Pipeline security hardening and Azure Key Vault secrets management',
      ],
    },
    {
      title: 'Azure DevOps Consulting & Managed Services',
      description:
        'We help organizations at every stage, from greenfield Azure DevOps setups to enterprise migration and managed support.',
      bullets: [
        'Azure DevOps roadmap and toolchain assessment',
        'Service connection lifecycle management and credential hygiene',
        'Organization and project structure optimization',
        'Pipeline monitoring, maintenance, and documentation',
        'Jira, Slack, Microsoft Teams, and third-party tool integrations',
      ],
    },
  ],
  riskManagement: {
    kicker: 'Security & Governance',
    title: 'Why Proper Azure DevOps Service Connection Management Matters',
    intro:
      'Poorly managed service connections create serious security and operational risks. Before working with DevOps Fortress, teams often struggle with:',
    risks: [
      'Overprivileged service principals with access far beyond their required scope',
      'Shared service connections across dozens of pipelines, creating a single breach point',
      'Credentials hard-coded into pipeline YAML files',
      'No rotation schedule for secrets or PATs, leading to compliance failures',
      'Pipeline failures caused by expired or misconfigured service endpoints',
    ],
    closing:
      'Our approach enforces least privilege, per-pipeline permissions, and workload identity federation to eliminate secrets and reduce your attack surface.',
  },
  setupProcess: {
    kicker: 'Delivery Process',
    title: 'How DevOps Fortress Sets Up Your Azure DevOps Service Connection',
    intro:
      'We follow a structured process to ensure every service connection is secure, documented, and production-ready.',
    steps: [
      {
        title: 'Discovery & Scope Definition',
        description:
          'We audit your Azure environment, identify the required permissions, and define the minimum scope needed for each pipeline.',
      },
      {
        title: 'Service Principal or Managed Identity Creation',
        description:
          'We create the service principal or managed identity in Microsoft Entra ID with precisely assigned roles at the correct resource scope.',
      },
      {
        title: 'Service Connection Configuration in Azure DevOps',
        description:
          'We create the service connection under Project Settings > Service Connections, applying clear naming conventions and governance descriptions.',
      },
      {
        title: 'Pipeline Permission & Approval Controls',
        description:
          'We restrict service connections to authorized pipelines and configure approval checks for production environments.',
      },
      {
        title: 'Testing, Validation & Documentation',
        description:
          'We validate every connection end to end, run test pipeline executions, and deliver practical documentation for your team.',
      },
    ],
  },
  technologies: {
    kicker: 'Technology Index',
    title: 'Technologies & Integrations We Support',
    items: [
      'Azure DevOps Services',
      'Azure DevOps Server',
      'Azure Resource Manager',
      'Azure Bicep',
      'Terraform',
      'Microsoft Entra ID',
      'Workload Identity Federation',
      'Azure Kubernetes Service',
      'Helm',
      'Azure Container Registry',
      'Docker',
      'Azure Key Vault',
      'GitHub Actions',
      'Azure Artifacts',
      'Jira',
      'Confluence',
      'Slack',
      'Microsoft Teams',
    ],
  },
  faqs: [
    {
      question:
        'What is the difference between an Azure DevOps service connection and a service principal?',
      answer:
        'A service principal is an identity created in Microsoft Entra ID. A service connection in Azure DevOps is the configuration layer that uses that identity to authenticate pipelines to Azure resources.',
    },
    {
      question: 'What is workload identity federation in Azure DevOps?',
      answer:
        'Workload identity federation is a PAT-free, secret-free authentication method. Azure DevOps uses Microsoft Entra federated credentials and automatic token exchange so there are no long-lived credentials to rotate or leak.',
    },
    {
      question: 'How do I secure an Azure DevOps service connection?',
      answer:
        'Use workload identity federation, scope the connection to the narrowest required resource, restrict pipeline access with RBAC, add approval gates, and audit connection usage through Azure DevOps logs.',
    },
    {
      question:
        'Can DevOps Fortress migrate existing service connections to workload identity federation?',
      answer:
        'Yes. We migrate legacy PAT-based or service-principal-password connections to workload identity federation with minimal disruption and clear validation steps.',
    },
    {
      question:
        'How long does it take to set up an Azure DevOps service connection?',
      answer:
        'A single service connection can be configured quickly. A full enterprise setup with RBAC, approval workflows, and multi-environment pipeline integration typically takes 1 to 5 business days depending on complexity.',
    },
  ],
  cta: {
    kicker: 'Ready to Secure Your Azure DevOps Pipelines?',
    title: 'Move Fast Without Breaking Things',
    description:
      'From a single Azure DevOps service connection setup to a fully automated enterprise-grade CI/CD platform, DevOps Fortress delivers secure, working pipelines without long contracts or fluff.',
    primary: 'Schedule a Free Consultation',
    secondary: 'View Our Services',
  },
  contact: {
    kicker: 'Contact',
    title: 'Schedule a Free Consultation',
    description:
      'Tell us what you need to connect, automate, or secure in Azure DevOps. We will help you choose the right next step.',
    messagePlaceholder:
      'We need help setting up secure Azure DevOps service connections...',
    success: 'Request received. We will contact you shortly.',
  },
  trustPoints: [
    'Microsoft-certified security experts',
    'Compliance-focused delivery: ISO 27001, PCI-DSS, SOC 2',
    'Hands-on expertise across Azure DevOps, Azure Pipelines, ARM, AKS, Terraform, Docker, and GitHub Actions',
    'Proven support model for distributed and global engineering teams',
  ],
};
