import gsap, { Power4 } from "gsap";
import React, { useEffect, useRef } from "react";
import { certs, knowledge, techs } from "../../data";
import SectionTitle from "../utils/SectionTitle";

function SkillSection() {
  const comp1 = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".skill-text", {
        opacity: 0,
        duration: 1,
        stagger: 0.03,
        ease: Power4.easeOut,
        scrollTrigger: {
          trigger: ".skill-text",
          scrub: 1,
          markers: true,
          start: "top +=80%",
        },
      });
    }, comp1);

    return () => ctx.revert();
  }, []);
  return (
    <section id="skill">
      <SectionTitle title="My Skills" />
      <div className="flex items-center justify-center " ref={comp1}>
        <div className="mx-auto flex items-stretch justify-center flex-col md:flex-row gap-32 text-xl">
          <div className="marker:text-orange-600  ">
            <p className="mb-4 font-gruppo  text-4xl">
              {`Techs I'm proficient in`}{" "}
            </p>
            {techs.map((skill, i) => (
              <li key={i} className="skill-text">
                {skill}
              </li>
            ))}
          </div>
          <div className="h-full flex-row md:flex-col items-center justify-between marker:text-orange-600 ">
            <div className="mb-10">
              <p className="mb-4 font-gruppo text-4xl"> Knowledge </p>
              {knowledge.map((skill, i) => (
                <li key={i} className="skill-text">
                  {skill}
                </li>
              ))}
            </div>

            <div>
              <p className="mb-4 font-gruppo text-4xl"> Certificates </p>
              {certs.map((skill, i) => (
                <li key={i} className="skill-text">
                  {skill}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
