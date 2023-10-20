import styled from "styled-components";
import StyledSkill from "./Skill";
import {
  SiCss3,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiReactquery,
  SiSass,
  SiStyledcomponents,
  SiSupabase,
} from "react-icons/si";
const StyledSkills = styled.section``;

const StyledHeading = styled.h3`
  font-size: 4rem;
  margin-bottom: 3rem;
`;
const StyledText = styled.p``;

const StyledBox = styled.ul`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 24rem));
  gap: 3rem;
  justify-content: center;
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
  return (
    <StyledSkills>
      <StyledHeading>My Skills</StyledHeading>
      <StyledText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        amet animi beatae iure dolore ipsa architecto expedita vel, est magnam
        doloremque iusto voluptate illum, optio hic, officia non voluptates
        delectus?
      </StyledText>
      <StyledBox>
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
          <SiSass />
          SASS
        </StyledSkill>
        <StyledSkill>
          <SiStyledcomponents />
          StyledComponents
        </StyledSkill>
        <StyledSkill>
          <SiReactquery />
          ReactQuery
        </StyledSkill>
        <StyledSkill>
          <SiReact />
          React
        </StyledSkill>
        <StyledSkill>
          <SiSupabase />
          Supabase
        </StyledSkill>
        <StyledSkill>
          <SiGit />
          Git
        </StyledSkill>
        <StyledSkill>
          <SiGithub />
          GitHub
        </StyledSkill>
      </StyledBox>
    </StyledSkills>
  );
}

export default Skills;
