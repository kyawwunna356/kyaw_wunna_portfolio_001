import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import gsap, { Power4 } from "gsap";
import React, { useEffect, useRef } from "react";

interface BubbleProps {
  className: string;
  children: React.ReactNode;
  animationStartPosition: string,
}

function Bubble({ className, children,animationStartPosition }: BubbleProps) {

  const comp = useRef(null);
  // const wrapperClassName = ['image-wrapper relative', className].join(' ');

  useEffect(() => {
    let ctx = gsap.context(() => {

      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            trigger: ".bubble",
            start: "top +=90%",
            // end: "bottom top",
            toggleActions: "play pause resume reset",
            // scrub: true,
            
            markers: {startColor: 'red',endColor: 'yellow'},
          },
        })
       .fromTo(
          ".bubble",
          {
            // width: "0%",
            opacity: 0,
            // filter: "blur(15px)",
            duration: 2,
            ease: Power4.easeOut,
          },
          {
            // width: "100%",
            opacity: 0.75,
            duration: 2,
            // filter: "blur(0px)",
            ease: Power4.easeOut,
          }
        )
        
      return () => ctx.revert();
    }, comp);
  }, []);

  const combineClassName = [
    "opacity-75 bubble flex items-center justify-center absolute bg-white text-black w-[100px] h-[100px] p-5 z-10 text-center font-bold rounded-full hover:scale-150 hover:cursor-pointer hover:-rotate-12 hover:opacity-100 transition-transform",
    className,
  ].join(" ");
  return <div ref={comp}><div className={combineClassName}>{children}</div></div>
}

export default Bubble;
