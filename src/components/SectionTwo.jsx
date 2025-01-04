import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const SectionTwo = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate each line with better performance
      textRefs.current.forEach((text, index) => {
        gsap.from(text, {
          x: "-20%",
          opacity: 0,
          duration: 1.5,
          ease: "expo.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: text,
            start: "top 90%",
            toggleActions: "play none none reverse",
          }
        });
      });

      // Animate gradient circles
      gsap.from(".gradient-circle", {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".gradient-ct",
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-vh-100 d-flex align-items-center" style={{ backgroundColor: '#141414' }}>
      <div className="sec-1 container">
        <div className="row">
          <div className="col-lg-12">
            <div className="wenn-ct d-flex flex-column gap-4">
              {[
                {
                  text: "Wenn es höchste Zeit",
                  highlight: "mehr Kapazität",
                  end: "wird..."
                },
                {
                  text: "Wenn",
                  highlight: "Konzept zu Projektplan",
                  end: "werden muss..."
                },
                {
                  text: "Wenn die",
                  highlight: "Pitch-Deadline", 
                  end: "mal wieder gestern war..."
                }
              ].map((item, index) => (
                <span 
                  key={index}
                  ref={el => textRefs.current[index] = el}
                  className="line text-white"
                  style={{ 
                    fontSize: "2.8rem",
                    paddingLeft: index === 0 ? 0 : index === 1 ? "4rem" : "9rem"
                  }}
                >
                  {item.text}{' '}
                  <i className="text-accent">{item.highlight}</i>{' '}
                  {item.end}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="gradient-circles position-absolute">
          <div className="gradient-ct blue">
            <div className="gradient-circle blue"></div>
          </div>
          <div className="gradient-ct pink">
            <div className="gradient-circle pink"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
