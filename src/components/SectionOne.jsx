import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "../app/corporate-page/sectionOne.module.css";

const SectionOne = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Create scroll trigger for direction control
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          direction = e.direction * -1;
          console.log(direction);
        }
      },
      x: "-500px",
    });

    // Start the animation loop
    requestAnimationFrame(animate);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const animate = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    
    requestAnimationFrame(animate);
    xPercent += 0.03 * direction;
  };

  return (
    <section>
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
          <div className="d-flex align-items-center min-vh-100">
            <div className="col-12">
              <div className={styles.sliderContainer}>
                <div ref={slider} className={styles.slider}>
                  <p 
                    ref={firstText} 
                    className="text-uppercase fw-bold text-white"
                    style={{
                      fontSize: "clamp(3rem, 8vw, 8rem)",
                      padding: "2rem 0",
                      margin: 0,
                      whiteSpace: "nowrap",
                      opacity: 0.9,
                      letterSpacing: "-2px",
                      lineHeight: 1
                    }}
                  >
                    IT'S ABOUT TIME - IT'S -&nbsp;
                  </p>
                  <p 
                    ref={secondText}
                    className="text-uppercase fw-bold text-white"
                    style={{
                      fontSize: "clamp(3rem, 8vw, 8rem)",
                      padding: "2rem 0",
                      margin: 0,
                      whiteSpace: "nowrap",
                      opacity: 0.9,
                      letterSpacing: "-2px",
                      lineHeight: 1
                    }}
                  >
                    IT'S ABOUT TIME - IT'S -&nbsp;
                  </p>
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
    </section>
  );
};

export default SectionOne;
