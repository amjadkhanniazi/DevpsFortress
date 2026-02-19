import ContentSections from "../components/content/ContentSections";
import HomeContactSection from "../components/content/HomeContactSection";
import HeroSection from "../components/hero/HeroSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ContentSections />
      <HomeContactSection />
    </main>
  );
}
