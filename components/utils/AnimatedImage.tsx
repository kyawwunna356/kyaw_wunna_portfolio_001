import  { gsap, Power4 } from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import { Project } from '../../data';
import Bubble from './Bubble';

interface AnimatedImageProps {
  image: string,
  className: string,
  bubblePosition: string,
  text: string  | React.ReactNode,
  flexBasis?: boolean
  animationStartPosition: string
}

function AnimatedImage({image,className,bubblePosition,text,flexBasis=false,animationStartPosition}: AnimatedImageProps) {
  const comp1 = useRef(null);
  // const wrapperClassName = ['image-wrapper relative', className].join(' ');

  useEffect(() => {
    let ctx = gsap.context(() => {

      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            trigger: ".imageWrapper",
            start: animationStartPosition,
            end: "bottom top",
            toggleActions: "play pause resume reset",
            // scrub: true,
            
            // markers: {startColor: 'red',endColor: 'yellow'},
          },
        })
       .fromTo(
          ".imageWrapper",
          {
            width: "0%",
            scale: 1.4,
            filter: "blur(15px)",
            duration: 2,
            ease: Power4.easeOut,
          },
          {
            width: "100%",
            scale: 1,
            duration: 2,
            filter: "blur(0px)",
            ease: Power4.easeOut,
          }
        )
        
      return () => ctx.revert();
    }, comp1);
  }, []);

  return (
        <div className={flexBasis ? 'w-full  lg:basis-2/3 relative ': 'w-full relative'} ref={comp1}>
          {/* <Bubble className={bubblePosition} animationStartPosition={animationStartPosition}>{text}</Bubble> */}
        <div className={`imageWrapper relative ${className}`}> 
          <Image
            fill
            src={image}
            alt="project-image"
            className=" object-cover  grayscale hover:grayscale-0 cursor-pointer transition rounded-lg "
          />
        </div>
        </div>
    )
}

export default AnimatedImage