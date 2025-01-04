"use client";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionFour from "@/components/SectionFour";
import Lenis from "lenis";
import "./styles.css";

const CorporatePage = () => {
  // Initialize Lenis
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <section className="min-vh-100">
      {/* Section one */}
      <SectionOne />
      {/* Section two */}
      <SectionTwo />
      {/* Section three */}
      <SectionFour />
    </section>
  );
};

export default CorporatePage;
