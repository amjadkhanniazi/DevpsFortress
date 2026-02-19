import InnerPage from "../components/content/InnerPage";

const blocks = [
  {
    title: "CI/CD Acceleration",
    text: "Build clean branching standards, automated test stages, and reliable deployment gates to reduce cycle time and improve release confidence.",
  },
  {
    title: "Infrastructure as Code",
    text: "Use Terraform and cloud templates to codify environments, enforce consistency, and simplify scale-out and recovery workflows.",
  },
  {
    title: "Container and Kubernetes Operations",
    text: "Automate secure image build flows, cluster rollout strategies, and policy-driven runtime controls for production-grade container platforms.",
  },
  {
    title: "Scripting and Workflow Automation",
    text: "Apply Shell, Python, and YAML automation to repeatable operational tasks, reducing manual drift and improving delivery predictability.",
  },
];

export default function AutomationPage() {
  return (
    <InnerPage
      kicker="Automation"
      title="Engineering Automation That Scales Delivery and Reliability"
      intro="Our automation practice standardizes pipelines, infrastructure, and operations to deliver faster changes with stronger safety controls."
      blocks={blocks}
    />
  );
}
