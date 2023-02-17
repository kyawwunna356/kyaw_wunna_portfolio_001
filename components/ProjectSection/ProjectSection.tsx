import React from "react";
import { ProjectsData } from "../../data";
import SectionTitle from "../utils/SectionTitle";
import Project from "./Project";


function ProjectSection() {
  return (
    <section>
      <SectionTitle title="Recent Works" />
      {ProjectsData.map((project) => (
        <section key={project.id} className="mt-[200px] md:mt-[400px]">
          <Project
            reverse={project.id % 2 === 0 ? true : false}
            project={project}
          />
        </section>
      ))}
    </section>
  );
}

export default ProjectSection;
