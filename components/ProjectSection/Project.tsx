import Image from "next/image";
import React from "react";
import { Project } from "../../data";
import Tag from "../utils/Tag";
import AnimatedImage from "../utils/AnimatedImage";
import Description from "../utils/Description";

interface ProjectProps {
  reverse: boolean;
  project: Project;
}

function Project({ reverse, project }: ProjectProps) {
  const layoutClassName = `flex flex-col lg:flex-row justify-center lg:justify-between items-center min-h-screen gap-20 ${
    reverse && "lg:flex-row-reverse"
  }`;
  // const bubbleClassName = reverse ? "bottom-28 -right-5" : "bottom-28 -left-5";
  return (
    //flex-direction
    <div className={layoutClassName}>
      {/* left-column */}
      <AnimatedImage
        flexBasis={true}
        className="h-[200px] md:h-[500px] w-full"
        animationStartPosition="top center"
        image={project.images[0]}
      />
      {/* right-column  flex-column*/}
        <div className="flex basis-1/2 flex-col items-center justify-center gap-20 text-start">
          <Description name={project.name} techs={project.techs} description={project.description} link={project.link} github={project.github}/>
          <button></button>
        {/* <AnimatedImage
          className="relative h-[400px] w-full"
          text={<ArrowLongRightIcon />}
          bubblePosition={bubbleClassName}
          animationStartPosition= "top +=90%"
          image={project.images[1]}
          flexBasis={false}
        /> */}
      </div>
    </div>
  );
}

export default Project;
