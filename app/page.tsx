// app/page.tsx
import Hero from "@/components/Hero";
import Tokenomics from "@/components/Tokenomics";
import Community from "@/components/Community";

export default function Home() {
  return (
    <main>

      <Hero />
      <Tokenomics />
      <Community />

    </main>
  );
}