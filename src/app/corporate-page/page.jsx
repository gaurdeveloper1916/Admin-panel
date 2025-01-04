"use client";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionFour from "@/components/SectionFour";
import SectionFive from "@/components/SectionFive";
import Lenis from "lenis";
import "./styles.css";

const CorporatePage = () => {


  return (
    <section className="min-vh-100">
      {/* Section one */}
      <SectionOne />
      {/* Section two */}
      <SectionTwo />
      {/* Section three */}
      <SectionFour />
      {/* Section five */}
      <SectionFive />
    </section>
  );
};

export default CorporatePage;
