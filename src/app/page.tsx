import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Services } from "./_components/services";
import { Projects } from "./_components/projects";
import { Footer } from "./_components/footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Footer />
    </main>
  )
}