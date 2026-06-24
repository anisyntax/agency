import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import LeadGen from "@/components/LeadGen";
import SocialAds from "@/components/SocialAds";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <LeadGen />
        <SocialAds />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
