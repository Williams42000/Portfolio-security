import Cursor    from "@/components/Cursor";
import Grain     from "@/components/Grain";
import Nav       from "@/components/Nav";
import Hero      from "@/components/Hero";
import Marquee   from "@/components/Marquee";
import About     from "@/components/About";
import Experience from "@/components/Experience";
import Skills    from "@/components/Skills";
import Tech      from "@/components/Tech";
import Languages from "@/components/Languages";
import Education from "@/components/Education";
import Contact   from "@/components/Contact";
import Footer    from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Grain />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Tech />
        <Languages />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
