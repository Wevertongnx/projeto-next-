import { About } from "./_componebts/about";
import { Hero } from "./_componebts/hero";
import { Services } from "./_componebts/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  );
}
