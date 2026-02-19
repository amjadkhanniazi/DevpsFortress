import InnerPage from "../components/content/InnerPage";

const blocks = [
  {
    title: "ASPM and CSPM Visibility",
    text: "Unify application and cloud posture visibility to detect threats and misconfigurations early across Azure DevOps, GitHub, and GitLab delivery chains.",
  },
  {
    title: "Cloud-Native Architecture",
    text: "Design secure, scalable deployment topologies for AWS, Azure, and Google Cloud with guardrails for identity, network, and runtime controls.",
  },
  {
    title: "Operational Resilience",
    text: "Build high-availability foundations with observability, policy enforcement, and disaster recovery workflows to keep critical services stable.",
  },
  {
    title: "Toolchain Integration",
    text: "Connect Git, CI/CD, container registries, and runtime infrastructure into a cohesive platform that supports secure and predictable releases.",
  },
];

export default function PlatformPage() {
  return (
    <InnerPage
      kicker="Platform"
      title="Secure Platform Engineering for Cloud-Scale Delivery"
      intro="DevOps Fortress platform services align cloud infrastructure, release systems, and security controls so teams can ship faster with confidence."
      blocks={blocks}
    />
  );
}
