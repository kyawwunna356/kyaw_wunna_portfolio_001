import gsap, { Power4 } from "gsap";
import React, { useEffect, useRef } from "react";
import Tag from "./Tag";
import SplitTextJS from "split-text-js";
import Link from "next/link";
import {FiGithub} from 'react-icons/fi'
import {AiFillEye} from 'react-icons/ai'
import { useMediaQuery } from "react-responsive";
interface DescriptionProps {
  name: string;
  description: string;
  techs: string[];
  link: string,
  github: string;
}

function Description({ name, description, techs, link, github}: DescriptionProps) {
  const comp = useRef(null);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const containerRef = useRef(null);
  const techRef = useRef(null);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  useEffect(() => {
    const splittedText = new SplitTextJS(nameRef.current);
    const chars = splittedText.chars;
    let ctx = gsap.context(() => {
      //descriptions and tags
      gsap.from([descriptionRef.current, techRef.current], {
        // yPercent: 100,
        // duration: 2,
        stagger: 0.1,
        opacity: 0,
        delay: 1,
        ease: Power4.easeOut,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          // markers: true,
          start: isTabletOrMobile ? 'top +=90%' : "top +=80%",
        },
      });

      gsap.from(chars, {
        yPercent: 80,
        duration: 2,
        stagger: 0.03,
        delay: 1,
        ease: Power4.easeOut,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          // markers: true,
          start: isTabletOrMobile ? 'top +=90%' : "top +=80%",
          end: "bottom center",
        },
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp}>
      <div ref={containerRef} className="project overflow-hidden">
        <h1
          className="project-name mb-6 h-14 overflow-hidden text-3xl md:text-5xl font-bold tracking-wide text-[orange-500]"
          ref={nameRef}
        >
          {name}
        </h1>
        <p className="mb-4 text-gray-200 opacity-90 " ref={descriptionRef}>
          {description}
        </p>
        <div className="mb-6 flex flex-wrap gap-4 " ref={techRef}>
          {techs.map((tech) => (
            <div key={tech}>
              <Tag name={tech} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-start gap-6">
            <Link href={github} target="_blank">
              <button className="flex items-center gap-2 hover:text-orange-600">
                <span><FiGithub /></span>
                <span>Git Repo</span>
              </button>
              </Link>
              <span className="text-orange-600"> | </span>
              <Link href={link} target="_blank">
              <button className="flex items-center gap-2 hover:text-orange-600">
                <span><AiFillEye /></span>
                <span>View Live</span>
              </button>
              </Link>
        </div>
      </div>
    </div>
  );
}

export default Description;
