'use client';
import Hero from '@/components/Hero';
import CoursesOverview from '@/components/CoursesOverview';
import MestreTiger from '@/components/MestreTiger';
import CapoeiraIntro from '@/components/CapoeiraIntro';
import InstagramFeed from '@/components/InstagramFeed';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <CoursesOverview />
      <MestreTiger />
      <CapoeiraIntro />
      <InstagramFeed />
      <CTA />
    </main>
  );
}
