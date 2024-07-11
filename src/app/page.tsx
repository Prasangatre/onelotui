import About from "@/components/about/page";
import FinanceSection from "@/components/carFinance/page";
import HeroSection from "@/components/hero/page";
import NavBar from "@/components/navBar/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <About />
      <FinanceSection/>
   </div>
  );
}
