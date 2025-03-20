import { FaPaw } from "react-icons/fa";
import { About } from "./_componebts/about";
import { Footer } from "./_componebts/footer";
import { Hero } from "./_componebts/hero";
import { Services } from "./_componebts/services";
import { Testimonials } from "./_componebts/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
      <FaPaw />
    </main>
  );
}
