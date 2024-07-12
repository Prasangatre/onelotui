import About from "@/components/about/page";
import FinanceSection from "@/components/carFinance/page";
import FeatureSection from "@/components/features/page";
import HeroSection from "@/components/hero/page";
import NavBar from "@/components/navBar/page";
import TestimonialSection from "@/components/testimonial/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <About />
      <FinanceSection />
      <FeatureSection />
      <TestimonialSection/>
   </div>
  );
}
