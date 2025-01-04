import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

const SectionOne = () => {
  const infiniteTextRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const textElementRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const infiniteTextContainer = infiniteTextRef.current;
    const textElement = textElementRef.current;
    const scrollContainer = scrollContainerRef.current;

    // Clone content multiple times
    for (let i = 0; i < 3; i++) {
      const clonedText = textElement.cloneNode(true);
      scrollContainer.appendChild(clonedText);
    }

    // Calculate animation speed based on content width
    const textWidth = textElement.offsetWidth;
    const scrollSpeed = 20 * (textWidth / window.innerWidth);

    // Set initial position
    gsap.set(".infinite-text-element", {
      xPercent: 50,
    });

    // Create base animation
    const infiniteScrollAnim = gsap
      .to(".infinite-text-element", {
        xPercent: -100,
        repeat: -1,
        duration: scrollSpeed,
        ease: "linear",
        paused: true,
      })
      .totalProgress(0.5);

    // Create scroll-based animation
    ScrollTrigger.create({
      trigger: infiniteTextContainer,
      start: "top bottom",
      end: "bottom top",
      onUpdate(self) {
        const direction = self.direction === -1 ? -1 : 1;
        gsap.to(infiniteScrollAnim, {
          timeScale: direction,
          overwrite: true,
        });
      },
      onEnter: () => infiniteScrollAnim.play(),
    });

    // Extra speed on scroll
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: infiniteTextContainer,
        start: "0% 100%",
        end: "100% 0%",
        scrub: 0,
      },
    });

    timeline.fromTo(
      scrollContainer,
      {
        x: "50vw",
      },
      {
        x: "-150vw",
        ease: "none",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div
      className="position-relative overflow-hidden"
      style={{
        backgroundImage: 'url("/first-section.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 1 }}
      ></div>

      <div
        className="container-fluid p-0 position-relative"
        style={{ zIndex: 2 }}
      >
        <div className="row align-items-center min-vh-100">
          <div className="col-12 position-relative">
            {/* Infinite Text Container */}
            <div
              ref={infiniteTextRef}
              className="infinite-text-container"
              data-scroll-speed="20"
              data-scroll-direction="left"
              data-scroll-duplicate="4"
            >
              <div ref={scrollContainerRef} className="scroll-container d-flex">
                <div ref={textElementRef} className="infinite-text-element">
                  <h1
                    className="text-uppercase fw-bold text-white mb-0"
                    style={{
                      whiteSpace: "nowrap",
                      opacity: "0.9",
                      letterSpacing: "-2px",
                      lineHeight: "1",
                      padding: "2rem 0",
                      fontSize: "clamp(3rem, 8vw, 8rem)", // Responsive font size that scales between 3rem and 8rem
                    }}
                  >
                    IT'S ABOUT TIME - IT'S &nbsp;
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* Content Section */}
          <div className="container position-absolute bottom-0 left-0 mt-5 p-5 py-0">
            <div className="row p-4">
              <div className="col-md-6 p-3">
                <p className="lead fs-3 text-white-50 p-2">
                  Ob Firmenfeier, Produktlaunch oder privates Fest – ich helfe
                  euch dabei, Events in
                  <em className="fst-italic">unvergessliche Momente</em> zu
                  verwandeln.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
