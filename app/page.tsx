import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import Courses from "@/components/home/Courses";
import Features from "@/components/home/Features";
import Cta from "@/components/home/Cta";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <Courses />
      <Features />
      <Cta />
      <Testimonials />
      <Footer />
    </main>
  );
}
