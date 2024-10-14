import styled, { css } from "styled-components";
import StyledSkill from "./Skill";
import {
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiSass,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";
import StyledHeading from "./Heading";
import StyledHeadingBox from "./HeadingBox";
import useScrollTo from "../hooks/UseScrollTo";

import { useIsInView } from "../context/IsInViewContext";
import { useEffect } from "react";
const StyledSkills = styled.section`
  margin-bottom: 20rem;
  padding: 0 1rem;
  @media only screen and (max-width: 50em) {
    padding: 0;
  }
`;

const StyledText = styled.p`
  font-size: 1.8rem;
  width: 50%;

  line-height: 1.8;

  @media only screen and (max-width: 50em) {
    text-align: center;
    margin: 0 auto;
    width: 75%;
    padding: 0;
  }
  @media only screen and (max-width: 37.5em) {
    width: 95%;
  }
  @media only screen and (max-width: 26.5em) {
    width: 100%;
  }
`;

const StyledBox = styled.ul`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 24rem));
  gap: 3rem;
  justify-content: center;
  transform: translateY(15%);
  opacity: 0;
  visibility: hidden;
  transition: all 1s;

  ${(props) =>
    props.$inView === true &&
    css`
      transform: translateY(0%);
      opacity: 1;
      visibility: visible;
    `}

  @media only screen and (max-width: 53.5em) {
    gap: 3rem 1rem;
  }
  @media only screen and (max-width: 50em) {
    gap: 3rem;
  }

  @media only screen and (max-width: 26.5em) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 20rem));
    gap: 3rem 1rem;
    justify-content: space-between;
  }
  @media only screen and (max-width: 21.5em) {
    gap: 3rem 0;
    justify-content: center;
  }
`;

function Skills() {
  const { setSectionHandler } = useIsInView();

  const { ref: containerRef } = useScrollTo({
    hash: "#skills",
    scrollTo: "center",
  });

  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const { ref: boxRef, inView: boxInView } = useInView({
    threshold: 0.5,
    rootMargin: "-20px",
    triggerOnce: true,
  });

  const { ref: intRef, inView: intInView } = useInView();
  useEffect(() => {
    if (intInView) {
      setSectionHandler("#skills");
    }
  }, [intInView, setSectionHandler]);

  return (
    <StyledSkills ref={containerRef}>
      <StyledHeadingBox>
        <StyledHeading $inView={headingInView} $aboutMe={true}>
          My Skills
        </StyledHeading>
      </StyledHeadingBox>
      <div ref={intRef} style={{ visibility: "hidden" }}>
        dsd
      </div>
      <StyledText ref={headingRef}>
        Through my experience, I have acquired a thorough understanding of web
        development concepts and have dedicated a substantial amount of time to
        implementing them in real-world scenarios and applications.
      </StyledText>
      <StyledBox ref={boxRef} $inView={boxInView}>
        <StyledSkill>
          <SiHtml5 />
          HTML
        </StyledSkill>
        <StyledSkill>
          <SiCss3 />
          CSS
        </StyledSkill>
        <StyledSkill>
          <SiJavascript />
          JavaScript ES6
        </StyledSkill>
        <StyledSkill>
          <SiTypescript />
          TypeScript
        </StyledSkill>
        <StyledSkill>
          <SiReact />
          React
        </StyledSkill>
        <StyledSkill>
          <SiReactquery />
          ReactQuery
        </StyledSkill>
        <StyledSkill>
          <SiNextdotjs />
          NextJS
        </StyledSkill>
        <StyledSkill>
          <SiNodedotjs />
          NodeJs
        </StyledSkill>
        <StyledSkill>
          <SiExpress />
          Express
        </StyledSkill>
        <StyledSkill>
          <SiSass />
          SASS
        </StyledSkill>
        <StyledSkill>
          <SiStyledcomponents />
          StyledComponents
        </StyledSkill>
        <StyledSkill>
          <SiTailwindcss />
          TailWind
        </StyledSkill>
        <StyledSkill>
          <SiMongodb />
          MongoDB
        </StyledSkill>
        <StyledSkill>
          <SiPrisma />
          Prisma
        </StyledSkill>
        <StyledSkill>
          <SiSupabase />
          Supabase
        </StyledSkill>
        <StyledSkill>
          <SiGit />
          Git
        </StyledSkill>
      </StyledBox>
    </StyledSkills>
  );
}

export default Skills;
