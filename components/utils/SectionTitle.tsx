import React, { useEffect, useRef } from "react";
import gsap, { Power4 } from "gsap";
import SplitTextJS from 'split-text-js';

interface sectionTitleProps {
  title: string;
}

function SectionTitle({ title }: sectionTitleProps) {
  const comp1 = useRef(null);
  const titleRef = useRef(null)
  useEffect(() => {
    const splittedText = new SplitTextJS(titleRef.current);
    const chars = splittedText.chars
    let ctx = gsap.context(() => {
      gsap.from(chars, {
        yPercent: 80,
        duration: 2,
        stagger: 0.03,
        ease: Power4.easeOut,
        scrollTrigger: {
          trigger: ".title",
          scrub: 1,
          markers: true,
          start: "top +=80%",
        },
      });
    }, comp1);

    return () => ctx.revert();
  }, []);
  return (
    <section
      className="section-title first-letter flex h-[50vh] items-center justify-center lg:h-screen lg:my-[100px]"
      ref={comp1}
    >
      <div className="overflow-hidden">
        <p className="title uppercase" ref={titleRef}>{title}</p>
      </div>
    </section>
  );
}

export default SectionTitle;
