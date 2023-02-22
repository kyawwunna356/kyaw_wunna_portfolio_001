import { gsap, Power4 } from "gsap";
import ScrollTrigger from "gsap";
import React, { useEffect, useRef } from "react";
import SectionTitle from "../utils/SectionTitle";
import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  let imageWrapper = useRef(null);
  let image = useRef(null);
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            trigger: ".gsapImageWrapper",
            start: "top center",
            end: "bottom top",
            toggleActions: "play pause resume reset",
            // scrub: true,
            // markers: true,
          },
        })
        .fromTo(
          ".name",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: -20,
            opacity: 1,
          }
        )
        .fromTo(
          ".gsapImageWrapper",
          {
            width: "0%",
            scale: 1.4,
            filter: "blur(15px)",
            duration: 1.5,
            ease: Power4.easeOut,
          },
          {
            width: "100%",
            scale: 1,
            duration: 1.5,
            filter: "blur(0px)",
            ease: Power4.easeOut,
          }
        )
        .fromTo(
          ".description",
          {
            // x: "-600px",
            opacity: 0,
            duration: 1,
            ease: Power4.easeOut,
          },
          {
            // x: "0px",
            opacity: 1,
            duration: 1,
            ease: Power4.easeOut,
          },
          "-=0.5"
        );

      return () => ctx.revert();
    }, comp);
  }, []);

  return (
    <section className="min-h-[150vh] lg:h-[200vh]" ref={comp} id="about">
      <SectionTitle title="About Me" />

      <section className="flex h-[70vh] items-center justify-center ">
        {/* width of the box */}
        <div className="relative h-[350px] w-[65%] p-10 md:h-[600px] md:w-[75%] lg:h-[500px] lg:w-[30%] ">
          <span className="name absolute top-10 -left-24 z-10  -rotate-90 overflow-hidden text-3xl">
            Kyaw Wunna
          </span>
          {/* Image */}
          <div
            className=" gsapImageWrapper absolute h-full w-full"
            ref={imageWrapper}
          >
            <Image
              ref={image}
              src="/img/new.png"
              alt="profile"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-[250px] -right-[350px] hidden w-[600px] overflow-hidden lg:block ">
            <p className="description bg-[#0e0e0e] px-8 py-4 text-base tracking-wide rounded-lg">
              I am a self-taught software developer with a passion for
              problem-solving and delivering high-quality solutions. Despite not
              having a computer science degree, I have developed a deep
              understanding of algorithms and data structures through extensive
              personal study and projects. My expertise in React allows me to
              bring dynamic and user-friendly experiences to life on the web. I
              am a continuous learner, always seeking out new challenges and
              opportunities to improve my skills and stay at the forefront of
              the ever-evolving technology landscape.
            </p>
          </div>
          {/* for phone */}
        </div>
      </section>
      <p className="description block px-8 py-4 text-sm  tracking-wider lg:hidden ">
        I am a self-taught software developer with a passion for problem-solving
        and delivering high-quality solutions. Despite not having a computer
        science degree, I have developed a deep understanding of algorithms and
        data structures through extensive personal study and projects. My
        expertise in React allows me to bring dynamic and user-friendly
        experiences to life on the web. I am a continuous learner, always
        seeking out new challenges and opportunities to improve my skills and
        stay at the forefront of the ever-evolving technology landscape.
      </p>
    </section>
  );
}

export default AboutSection;
