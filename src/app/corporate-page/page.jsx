"use client";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionFour from "@/components/SectionFour";
import SectionFive from "@/components/SectionFive";
import SectionSix from "@/components/SectionSix";
import SectionSeven from "@/components/SectionSeven";
import SectionThree from "@/components/SectionThree";
import "./styles.css";

const CorporatePage = () => {
  return (
    <section className="min-vh-100">
      {/* Section one */}
      <SectionOne />
      {/* Section two */}
      <SectionTwo />
      {/* Section three */}
      <SectionThree />
      {/* Section four */}
      <SectionFour />
      {/* Section five */}
      <SectionFive />
      {/* Section six */}
      <SectionSix />
      {/* Section seven */}
      <SectionSeven />
    </section>
  );
};

export default CorporatePage;
