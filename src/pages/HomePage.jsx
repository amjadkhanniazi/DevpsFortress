import { useEffect } from 'react';
import ContentSections from '../components/content/ContentSections';
import HomeContactSection from '../components/content/HomeContactSection';
import HeroSection from '../components/hero/HeroSection';
import { fortressContent } from '../content/devopsFortressContent';

export default function HomePage() {
  useEffect(() => {
    document.title = fortressContent.seo.title;

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }
    description.setAttribute('content', fortressContent.seo.description);

    let schema = document.querySelector('#organization-schema');
    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'organization-schema';
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'DevOps Fortress',
      url: 'https://devopsfortress.com/',
      description: fortressContent.seo.description,
      sameAs: [
        'https://github.com/DevOps-Fortress',
        'https://www.facebook.com/profile.php?id=61587737334414',
        'https://www.instagram.com/riaz.naeem.71/',
        'https://www.linkedin.com/company/107876218/admin/dashboard/',
      ],
    });
  }, []);

  return (
    <main>
      <HeroSection />
      <ContentSections />
      <HomeContactSection />
    </main>
  );
}
