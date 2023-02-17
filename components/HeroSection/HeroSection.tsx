import {gsap, Power4} from "gsap";
import React, { useEffect, useRef } from "react";
import { useMediaQuery } from 'react-responsive'

function HeroSection() {
  const comp = useRef(null);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  useEffect(() => {
      let ctx = gsap.context(() => {

        let tl = gsap.timeline()
        tl.from('.single-line',{
        y: 200,
        duration: 1.8,
        stagger: 0.2,
        ease: Power4.easeOut,

      })
     
        gsap.to('.developer',{
          x: 200,
          scrollTrigger: {
            trigger: '.front',
            start: isTabletOrMobile ? 'top center' : 'top +=20%',
            scrub: 3,
           
          }
        })
        gsap.to('.design',{
          x: -400,
          scrollTrigger: {
            trigger: '.front',
            start: isTabletOrMobile ? 'top center' : 'top +=20%',
            scrub: 2,
          }
        })
        gsap.to('.artist',{
          x: 400,
          scrollTrigger: {
            trigger: '.front',
            start: isTabletOrMobile ? 'top center' : 'top +=20%',
            scrub: 1,
          }
        })
      }, comp); 
      

      return () => ctx.revert(); 
  }, [isTabletOrMobile]);
  return (
    <div className="h-screen"  ref={comp}>
      <div className="hero-container flex h-full flex-col items-center justify-center  mx-auto">
      <div className=" self-start overflow-hidden">
        <p className="text-start single-line front md:pl-40 pl-5"  >MERN </p>
          
        </div>

        <div className=" self-end overflow-hidden">
          <p className=" single-line text-end developer text-orange-600 pr-10 md:pr-40" >Developer</p>
        </div>

        <div className=" self-start overflow-hidden">
        <p className="single-line text-start design md:pl-40" >FRONTEND</p>
        </div>

        <div className="overflow-hidden self-end md:pr-40">
        <p className="text-end single-line artist  pr-10 "  >ARtist
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
