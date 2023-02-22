import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "../components/HeroSection/HeroSection";
import { useRef } from "react";
import AboutSection from "../components/AboutSection/AboutSection";
import gsap from "gsap";
import ScrollTrigger from "gsap";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import Layout from "../components/utils/Layout";
import FooterSection from "../components/footer/FooterSection";
import SkillSection from "../components/SkillSection/SkillSection";
import StickNav from "../components/utils/StickNav";


gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {
  const container = useRef(null);

  return (
    <div ref={container}>
      <Head>
        <title>Kyaw wunna #portfolio</title>
        <meta name="description" content="Kyaw wunna's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <StickNav/>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <FooterSection />
      </Layout>
    </div>
  );
};

export default Home;
