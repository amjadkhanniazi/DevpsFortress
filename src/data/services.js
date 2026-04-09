const SERVICES = [
  {
    id: 'devops-engineering',
    title: 'DevOps and DevSecOps Engineering',
    shortDesc:
      'Automated CI/CD pipelines, secure release workflows, and scalable infrastructure with GitHub, GitLab, Jenkins, Docker, Kubernetes, and IaC.',
    fullDesc:
      'We design and implement end-to-end DevOps pipelines that bring speed, security, and reliability to your software delivery. From source control to production, every stage is automated, monitored, and hardened against failure.',
    image:
      'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&auto=format&fit=crop',
    imageFallback:
      'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&auto=format&fit=crop',
    icon: 'FaCodeBranch',
    highlights: [
      'CI/CD pipeline design with GitHub Actions, GitLab CI, Jenkins',
      'Docker and Kubernetes container orchestration',
      'Infrastructure as Code using Terraform and Ansible',
      'Automated testing, staging, and release gating',
      'Shift-left security embedded into every pipeline stage',
    ],
    tools: [
      'GitHub Actions',
      'GitLab CI',
      'Docker',
      'Kubernetes',
      'Terraform',
      'Ansible',
    ],
  },
  {
    id: 'github-gitlab-automation',
    title: 'GitHub and GitLab Workflow Automation',
    shortDesc:
      'Version control strategy, branch governance, and end-to-end workflow automation integrated with cloud and deployment tooling.',
    fullDesc:
      'We streamline your version control and collaboration workflows. Whether you are on GitHub or GitLab, we configure branch protection, review policies, automated merges, and full deployment triggers.',
    image:
      'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1200&auto=format&fit=crop',
    imageFallback:
      'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1200&auto=format&fit=crop',
    icon: 'FaGithub',
    highlights: [
      'Branch protection rules and merge request policies',
      'Custom GitHub Actions and GitLab CI/CD pipelines',
      'Automated code review, lint, and test workflows',
      'Webhook integrations with Slack, Jira, and cloud providers',
      'Monorepo and multi-repo strategy consulting',
    ],
    tools: ['GitHub', 'GitLab', 'GitHub Actions', 'Webhooks', 'Jira'],
  },
  {
    id: 'cybersecurity-vapt',
    title: 'Cybersecurity, Penetration Testing, and VAPT',
    shortDesc:
      'Proactive vulnerability assessments, real-world penetration testing, and VAPT programs to protect applications, networks, and cloud estates.',
    fullDesc:
      'Our certified security engineers conduct thorough penetration tests and vulnerability assessments across your full attack surface — applications, APIs, infrastructure, and cloud environments.',
    image:
      'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1200&auto=format&fit=crop',
    imageFallback:
      'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1200&auto=format&fit=crop',
    icon: 'FaShieldAlt',
    highlights: [
      'Web and API penetration testing (OWASP Top 10)',
      'Network and infrastructure vulnerability assessment',
      'Cloud security posture review across AWS, Azure, GCP',
      'Detailed remediation reports with severity ratings',
      'Compliance-aligned testing: ISO 27001, PCI-DSS, SOC 2',
    ],
    tools: ['Burp Suite', 'Nmap', 'Metasploit', 'AWS Security Hub', 'OWASP'],
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure and Deployment',
    shortDesc:
      'Secure and cost-aware architecture, migration, and deployment across AWS, Microsoft Azure, and Google Cloud.',
    fullDesc:
      'We architect, migrate, and manage cloud infrastructure that is scalable, cost-efficient, and production-ready. From greenfield deployments to legacy migrations, we handle it all with governance built in.',
    image:
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&auto=format&fit=crop',
    imageFallback:
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&auto=format&fit=crop',
    icon: 'FaCloud',
    highlights: [
      'Multi-cloud architecture on AWS, Azure, and GCP',
      'Cloud migration planning and execution',
      'Cost optimization and FinOps strategy',
      'IAM, VPC, and network security configuration',
      'Disaster recovery and high-availability setup',
    ],
    tools: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Terraform', 'Ansible'],
  },
  {
    id: 'web-app-development',
    title: 'Website and Application Development',
    shortDesc:
      'Modern web and application engineering focused on security, performance, and long-term maintainability.',
    fullDesc:
      'We build production-grade web applications and platforms with a security-first mindset. Every project is designed for performance, scalability, and developer maintainability from day one.',
    image:
      'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=1200&auto=format&fit=crop',
    imageFallback:
      'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=1200&auto=format&fit=crop',
    icon: 'FaCode',
    highlights: [
      'React, Next.js, and Node.js application development',
      'API design and backend engineering',
      'Performance optimization and Core Web Vitals',
      'Secure coding practices and dependency auditing',
      'CI/CD-integrated deployment pipelines',
    ],
    tools: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'network-security-deployment',
    title: 'Network and Security Deployment',
    shortDesc:
      'Network architecture, hardening, and layered security controls for resilient, high-performance operations.',
    fullDesc:
      'We design and deploy secure network architectures with defense-in-depth strategies. From firewall configuration to zero-trust implementations, we protect your perimeter and internal traffic.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop',
    imageFallback:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop',
    icon: 'FaNetworkWired',
    highlights: [
      'Firewall configuration and network segmentation',
      'Zero-trust network access (ZTNA) implementation',
      'VPN and secure remote access setup',
      'Intrusion detection and prevention systems (IDS/IPS)',
      'Network monitoring with Prometheus and Grafana',
    ],
    tools: ['pfSense', 'Cisco', 'Prometheus', 'Grafana', 'Wireshark'],
  },
];

export default SERVICES;
