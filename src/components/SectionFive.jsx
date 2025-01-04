import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const SectionFive = () => {
  useEffect(() => {
    
    // Initialize background image scale
    const bgImage = document.querySelector('.sec-4-scroll-wrap .bg img');
    if (bgImage) {
      gsap.set(bgImage, {
        scale: 1.4,
        force3D: true,
      });
    }

    initializeGSAPAnimations();

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const initializeGSAPAnimations = () => {
    ScrollTrigger.matchMedia({
      "all": function() {
        // Background scale animation
        const bgImage = document.querySelector('.sec-4-scroll-wrap .bg img');
        if (bgImage) {
          gsap.fromTo(bgImage, 
            {
              scale: 1.4,
              force3D: true,
            },
            {
              scale: 1,
              force3D: true,
              ease: "none",
              scrollTrigger: {
                trigger: ".sec-4-scroll-wrap",
                start: "top bottom",
                end: "bottom bottom",
                scrub: 1,
                onEnter: () => console.log("Image scale animation started"),
                onUpdate: (self) => console.log("Progress:", self.progress)
              }
            }
          );
        }

        // Background and title parallel animations
        gsap.timeline({
          scrollTrigger: {
            trigger: ".sec-4-scroll-wrap",
            start: "bottom bottom",
            end: "bottom top",
            scrub: 1,
          }
        })
        .to('.sec-4-scroll-wrap .bg', {
          y: "40%",
          ease: "none",
        })
        .to('.sec-4-scroll-wrap .einsatzgebiete-title', {
          y: "25vh",
          opacity: 0,
          ease: "none",
        }, 0);
      },

      // Desktop animations
      "(min-width: 760px)": function () {
        const gebiet1 = document.querySelector(".gebiet-ct:nth-of-type(1)");
        const gebiet2 = document.querySelector(".gebiet-ct:nth-of-type(2)");
        const gebiet3 = document.querySelector(".gebiet-ct:nth-of-type(3)");
        const gebiet4 = document.querySelector(".gebiet-ct:nth-of-type(4)");
        const gebiet5 = document.querySelector(".gebiet-ct:nth-of-type(5)");
        const gebiet6 = document.querySelector(".gebiet-ct:nth-of-type(6)");

        const tl = gsap.timeline({
          defaults: {
            ease: "none"
          }
        });

        [gebiet1, gebiet2, gebiet3, gebiet4, gebiet5, gebiet6].forEach((gebiet) => {
          gsap.set(gebiet, {
            motionPath: {
              path: "#motionPath",
              align: "#motionPath",
              alignOrigin: [0.5, 0.5],
              autoRotate: true,
              start: 0,
              end: 1,
            }
          });
        });

        const delays = [0, 0.05, 0.1, 0.15, 0.2, 0.25];
        [gebiet1, gebiet2, gebiet3, gebiet4, gebiet5, gebiet6].forEach((gebiet, index) => {
          tl.to(gebiet, {
            motionPath: {
              path: "#motionPath",
              align: "#motionPath",
              alignOrigin: [0.5, 0.5],
              autoRotate: true,
              start: 1,
              end: 0,
            },
            immediateRender: true,
          }, delays[index]);
        });

        ScrollTrigger.create({
          trigger: ".sec-4-scroll-wrap",
          start: "top bottom+=40%",
          end: "bottom top-=40%",
          scrub: true,
          animation: tl,
        });
      },
    });
  };

  return (
    <section>
      <main>
        <div class="sec-4" id="services">
          <div class="sec-4-scroll-wrap">
            <div class="sec-4-inner">
              <div class="gebiete-wrapper">
                <svg
                  class="motionPath"
                  viewBox="0 0 1217 124"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="motionPath"
                    d="M1 123.5C1 123.5 367.399 0.5 608.5 0.5C849.601 0.5 1216 123.5 1216 123.5"
                    stroke="transparent"
                  ></path>
                </svg>

                <div class="gebiet-ct">
                  <div class="gebiet">
                    <div class="top">
                      <picture>
                        <img
                          alt="Gesamtprojektleitung - Icon"
                          class="lazy"
                          src="images/placeholder.png"
                          data-src="images/index/einsatzgebiete/gesamtprojektleitung.svg"
                        />
                      </picture>
                    </div>
                    <div class="bottom">
                      <span class="gebiete-title">
                        <i>Gesamtprojektleitung</i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="gebiet-ct">
                  <div class="gebiet">
                    <div class="top">
                      <picture>
                        <img
                          alt="Teilprojektleitung - Icon"
                          src="images/teilprojektleitung.svg"
                        />
                      </picture>
                    </div>
                    <div class="bottom">
                      <span class="gebiete-title">
                        <i>
                          Teilprojektleitung
                          <span class="extra-info">
                            (z.B. Catering, Guestmanagement, Künstler, Logistik,
                            Content etc.)
                          </span>
                        </i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="gebiet-ct">
                  <div class="gebiet">
                    <div class="top">
                      <picture>
                        <img
                          alt="Regie-Assistenz - Icon"
                          src="images/regie-assistenz.svg"
                        />
                      </picture>
                    </div>
                    <div class="bottom">
                      <span class="gebiete-title">
                        <i>Regie-Assistenz</i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="gebiet-ct">
                  <div class="gebiet">
                    <div class="top">
                      <picture>
                        <img
                          alt="Onsite Managerin - Icon"
                          src="images/onsite-managerin.svg"
                        />
                      </picture>
                    </div>
                    <div class="bottom">
                      <span class="gebiete-title">
                        <i>Onsite Managerin</i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="gebiet-ct">
                  <div class="gebiet">
                    <div class="top">
                      <picture>
                        <img
                          alt="Incentive Reisen - Icon"
                          src="images/incentive-reisen.svg"
                        />
                      </picture>
                    </div>
                    <div class="bottom">
                      <span class="gebiete-title">
                        <i>Incentive Reisen</i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="gebiet-ct">
                  <div class="gebiet">
                    <div class="top">
                      <picture>
                        <img
                          alt="Streaming Events - Icon"
                          src="images/streaming-events.svg"
                        />
                      </picture>
                    </div>
                    <div class="bottom">
                      <span class="gebiete-title">
                        <i>Streaming Events</i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="title-ct">
                <h2 class="einsatzgebiete-title">Einsatzgebiete</h2>
              </div>
              <div class="bg">
                <picture>
                  <source
                    media="(min-width: 760px)"
                    srcset="/section-5-bg.jpg"
                    data-srcset="/section-5-bg.jpg"
                  />
                  <img
                    alt="Eventgäste an einer Bar"
                    className="lazy"
                    src="/section-5-bg.jpg"
                    data-src="images/index/einsatzgebiete/einsatzgebiete-bg.jpg"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SectionFive;
