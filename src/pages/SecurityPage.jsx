import InnerPage from "../components/content/InnerPage";

const blocks = [
  {
    title: "Vulnerability Assessment and Penetration Testing",
    text: "Execute black-box and white-box testing for web applications, APIs, networks, and cloud assets aligned with OWASP and enterprise risk models.",
  },
  {
    title: "DevSecOps Pipeline Controls",
    text: "Embed SAST, dependency, artifact, and runtime checks into CI/CD so every release passes defined security and compliance gates.",
  },
  {
    title: "Compliance Programs",
    text: "Implement control mapping and continuous checks for ISO 27001, PCI-DSS, and SOC 2 with actionable dashboards and audit evidence trails.",
  },
  {
    title: "Network and Workload Protection",
    text: "Strengthen internal communication through policy-based network segmentation, access control hardening, and continuous threat monitoring.",
  },
];

export default function SecurityPage() {
  return (
    <InnerPage
      kicker="Security"
      title="Cybersecurity and Compliance Built Into Every Delivery Stage"
      intro="We combine security engineering, continuous monitoring, and compliance automation to reduce risk without slowing software throughput."
      blocks={blocks}
    />
  );
}
