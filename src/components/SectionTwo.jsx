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

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="min-vh-100 d-flex align-items-center position-relative overflow-hidden" style={{ backgroundColor: '#141414', zIndex: 1 }}>
      <div className="sec-1 container">
        <div className="row">
          <div className="col-lg-12 position-relative" style={{ zIndex: 2 }}>
            <div className="wenn-ct d-flex flex-column" style={{ gap: window.innerWidth <= 768 ? "7rem" : "2rem" }}>
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
                    fontSize: window.innerWidth <= 768 ? "5.5rem" : "2.4rem", padding: "1rem",
                    paddingLeft: index === 0 
                      ? window.innerWidth <= 768 ? "3rem" : 0 
                      : index === 1 
                        ? window.innerWidth <= 768 ? "10rem" : "4rem"
                        : window.innerWidth <= 768 ? "17rem" : "9rem"
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

        {/* Gradient Circles */}
        <div className="position-absolute" style={{ 
          bottom: '0', 
          left: '0',
          width: '500px',
          height: '500px',
          zIndex: 1,
          opacity: 0.8,
          pointerEvents: 'none'
        }}>
          <div className="position-relative w-100 h-100">
            {/* Blue Gradient */}
            <div className="position-absolute" style={{
              width: '300px',
              height: '300px',
              opacity: 0.5,
              borderRadius: '50%',
              filter: 'blur(80px)',
              background: 'radial-gradient(circle at 50% 50%, rgba(168, 210, 241, 0.5) 0%, rgba(168, 210, 241, 0) 70%)',
              animation: 'float 20s infinite',
              top: '0',
              left: '0'
            }}></div>
            
            {/* Pink Gradient */}
            <div className="position-absolute" style={{
              width: '300px',
              height: '300px',
              opacity: 0.5,
              borderRadius: '50%',
              filter: 'blur(80px)',
              background: 'radial-gradient(circle, rgba(255, 180, 238, 0.5) 0%, rgba(255, 180, 238, 0) 70%)',
              animation: 'floattwo 30s infinite',
              bottom: '0',
              right: '0'
            }}></div>
          </div>
        </div>

        {/* Animation Keyframes */}
        <style jsx global>{`
          @keyframes float {
            0% { transform: scale(1) translate(0, 0); }
            25% { transform: scale(1.1) translate(0, 5%); }
            50% { transform: scale(0.9) translate(2%, -7.5%); }
            75% { transform: scale(1.2) translate(0, -5%); }
            100% { transform: scale(1) translate(0, 0); }
          }
          @keyframes floattwo {
            0% { transform: scale(1) translate(0, 0); }
            25% { transform: scale(1.2) translate(5%, 2%); }
            50% { transform: scale(0.9) translate(-5%, -3%); }
            75% { transform: scale(1.2) translate(3%, 3%); }
            100% { transform: scale(1) translate(0, 0); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default SectionTwo;
