"use client";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionFour from "@/components/SectionFour";
import SectionFive from "@/components/SectionFive";
import SectionSix from "@/components/SectionSix";
import SectionSeven from "@/components/SectionSeven";
import "./styles.css";

const CorporatePage = () => {


  return (
    <section className="min-vh-100">
      {/* Section one */}
      <SectionOne />
      {/* Section three */}
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
