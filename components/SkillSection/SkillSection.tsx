import gsap, { Power4 } from "gsap";
import React, { useEffect, useRef } from "react";
import { skillsData } from "../../data";
import SectionTitle from "../utils/SectionTitle";

function SkillSection() {
  const comp1 = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.skill-text', {
        opacity: 0,
        duration: 1,
        stagger: 0.03,
        ease: Power4.easeOut,
        scrollTrigger: {
          trigger: '.skill-text',
          scrub: 1,
          markers: true,
          start: "top +=80%",
        },
      });
    }, comp1);

    return () => ctx.revert();
  }, []);
  return (
    <section>
      <SectionTitle title="My Skills" />
      <div className="flex items-center justify-center" ref={comp1}>
        <div className="flex items-start justify-center gap-32 mx-auto text-[2vw]">
            <div className="marker:text-orange-600  ">
            {skillsData.slice(6).map((skill, i) => (
                <li key={i} className="skill-text">{skill}</li>
            ))}
            </div>
            <div className="marker:text-orange-600">
            {skillsData.slice(0,6).map((skill, i) => (
                <li key={i} className="skill-text">{skill}</li>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
