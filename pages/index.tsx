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


gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {
  const container = useRef(null);

  return (
    <div ref={container}>
      <Head>
        <title>Kyaw wunna #portfolio</title>
        <meta name="description" content="Kyaw wunna's portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;600;700&display=swap" rel="stylesheet"/> 
        {/* <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Cabin:wght@400;600;700&family=Gruppo&family=Righteous&display=swap" rel="stylesheet"/>  */}
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Cabin:wght@400;600;700&family=Gruppo&family=Quicksand&family=Righteous&family=Unbounded:wght@400;600;700&display=swap" rel="stylesheet"/> 
      </Head>

      <Layout>
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
