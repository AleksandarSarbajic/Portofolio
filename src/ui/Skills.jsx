import styled from "styled-components";

const StyledSkills = styled.section``;

const StyledHeading = styled.h3`
  font-size: 4rem;
  margin-bottom: 3rem;
`;
const StyledText = styled.p``;

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
    </StyledSkills>
  );
}

export default Skills;
