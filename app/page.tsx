import Hero from '@/components/Hero';
import USAMap from '@/components/USAMap';
import LatestPosts from '@/components/LatestPosts';
import Features from '@/components/Features';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <USAMap />
      <LatestPosts />
      <Features />
      <Newsletter />
    </main>
  );
}