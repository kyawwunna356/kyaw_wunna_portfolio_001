import gsap, { Power3 } from "gsap";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {FaFacebook,FaLinkedin,FaPhoneAlt} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {GrMail} from 'react-icons/gr'

function FooterSection() {
  const comp = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".footer-text-left", {
        xPercent: -100,
        stagger: 0.05,

        scrollTrigger: {
          trigger: ".footer-text-left",
          start: "top +=100%",
          end: "top center",
          // markers: true,
          scrub: 1,
        },
      });

      gsap.from(".footer-text-right", {
        xPercent: 100,
        stagger: 0.05,

        scrollTrigger: {
          trigger: ".footer-text-left",
          start: "top +=80%",
          end: "top center",
          // markers: true,
          scrub: 1,
        },
      });

      gsap.from(".vertical-line", {
        scaleY: 0,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: ".vertical-line",
          start: "top +=80%",
          end: "top center",
          // markers: true,
          scrub: 0.5,
        },
      });

      gsap.from(".horizontal-line", {
        scaleX: 0,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: ".vertical-line",
          start: "top +=80%",
          end: "bottom center",
          // markers: true,
          scrub: 0.5,
        },
      });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <div
      id="contact"
      ref={comp}
      className=" jusitfy-center flex h-screen flex-col items-center gap-[10vh] overflow-hidden pt-20 md:pt-40 lg:flex-row lg:justify-between lg:pt-0"
    >
      {/* left column */}
      <div className="basis-3/6 text-[15vw] leading-tight md:text-[9vw] lg:text-[6vw]">
        <p className="footer-text-left h-fit overflow-hidden">
          <span>Woah</span>
        </p>
        <p className="footer-text-left overflow-hidden">You really</p>
        <p className="footer-text-left overflow-hidden text-orange-500">
          SCROLL
        </p>
        <p className="footer-text-left overflow-hidden">to the end</p>
      </div>

      {/* lines */}
      <div className="vertical-line hidden h-[80vh] w-1 bg-gray-300 lg:block "></div>
      <div className="horizontal-line block h-[1px] w-[80vw] bg-gray-300 lg:hidden "></div>

      {/* right  */}
      <div className="flex basis-2/6 flex-col leading-relaxed lg:text-[1.5vw] gap-4">
        <span className="footer-text-right flex items-center gap-4">
          <span><GrMail /></span>
          kyawwunnaaung12345@gmail.com
        </span>
        <span className="footer-text-right flex items-center gap-4">
          <span><FaPhoneAlt /></span>
          +959254612233
        </span>

        <div className="footer-text-right item-center flex w-3/5 justify-start gap-4">
          <Link href="/"><FaFacebook /></Link>
          <Link href="/"><RiInstagramFill /></Link>
          <Link href="/"><FaLinkedin /></Link>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
