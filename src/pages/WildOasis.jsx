import {
  SiNetlify,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiStyledcomponents,
  SiSupabase,
} from "react-icons/si";
import ProjectHeader from "../ui/ProjectHeader";
import StyledProjectHeading from "../ui/ProjectHeading";
import StyledList from "../ui/ProjectList";

import ProjectListContainer from "../ui/ProjectListContainer";
import ProjectListItem from "../ui/ProjectListItem";
import StyledSubHeading from "../ui/ProjectSubheading";
import StyledProjectImage from "../ui/ProjectPhoto";
import StyledProjectBox from "../ui/ProjectBox";
import StyledStack from "../ui/ProjectStack";
import StyledStackItem from "../ui/ProjectStackItem";
import StyledImageBox from "../ui/ImageBox";
import Project from "../ui/Project";
import { BsArrowRight } from "react-icons/bs";
import StyledLink from "../ui/StyledLink";
import ProjectBox from "../ui/ProjectsBox";
import Contact from "../ui/Contact";

function WildOasis() {
  return (
    <>
      <ProjectHeader>
        <StyledProjectHeading>The Wild Oasis</StyledProjectHeading>
        <StyledSubHeading>
          The Wild Oasis is a React Project application build for hotel service.
          I built this project in React Course with React, Supabase and more.
          This application includes a lot of connections with Supabase so
          everyone can have the same overall experience as well to stay updated
          about customers.
        </StyledSubHeading>
      </ProjectHeader>
      <ProjectListContainer>
        <StyledList>
          <ProjectListItem heading={true}>Type</ProjectListItem>
          <ProjectListItem>Course</ProjectListItem>
        </StyledList>
        <StyledList>
          <ProjectListItem heading={true}>Stack</ProjectListItem>
          <ProjectListItem>
            <SiReact /> React
          </ProjectListItem>
          <ProjectListItem>
            <SiReactquery /> React Query
          </ProjectListItem>
          <ProjectListItem>
            <SiStyledcomponents /> Styled Componets
          </ProjectListItem>
          <ProjectListItem>
            <SiReacthookform /> React Hook Form
          </ProjectListItem>
          <ProjectListItem>
            <SiSupabase /> Supabase
          </ProjectListItem>
          <ProjectListItem>
            <SiNetlify /> Netlify
          </ProjectListItem>
        </StyledList>
        <StyledList>
          <ProjectListItem heading={true}>Links</ProjectListItem>
          <ProjectListItem link={"https://aleksandarsarbajic.com/"}>
            Live
          </ProjectListItem>
          <ProjectListItem
            link={"https://github.com/AleksandarSarbajic/the-wild-oasis"}
          >
            GitHub
          </ProjectListItem>
        </StyledList>
      </ProjectListContainer>
      <StyledProjectImage
        src="WildOasis.png"
        alt="Screenshot of the WildOasis page"
      />

      <StyledProjectHeading $small $margin>
        Project Purpose and Goal
      </StyledProjectHeading>
      <StyledSubHeading>
        The Wild Oasis is a React Project application build for hotel service. I
        built this project in React Course with React, Supabase and more. This
        application includes a lot of connections with Supabase so everyone can
        have the same overall experience as well to stay updated about
        customers.
      </StyledSubHeading>
      <StyledProjectBox>
        <StyledStack>
          <StyledStackItem>
            <SiReact /> React
          </StyledStackItem>
          <StyledStackItem>
            <SiReactquery /> React Query
          </StyledStackItem>
          <StyledStackItem>
            <SiStyledcomponents /> Styled Components
          </StyledStackItem>
          <StyledStackItem>
            <SiReacthookform /> React Hook Form
          </StyledStackItem>
          <StyledStackItem>
            <SiSupabase /> Supabase
          </StyledStackItem>
          <StyledStackItem>
            <SiNetlify /> Netlify
          </StyledStackItem>
        </StyledStack>
        <div>
          <StyledProjectHeading $small>
            Web Stack and Explanation
          </StyledProjectHeading>
          <StyledSubHeading $big>
            The Wild Oasis is a React Project application build for hotel
            service. I built this project in React Course with React, Supabase
            and more. This application includes a lot of connections with
            Supabase so everyone can have the same overall experience as well to
            stay updated about customers.
          </StyledSubHeading>

          <StyledSubHeading $big $space>
            The Wild Oasis is a React Project application build for hotel
            service. I built this project in React Course with React, Supabase
            and more.
          </StyledSubHeading>
        </div>
      </StyledProjectBox>
      <StyledImageBox>
        <img src="bookings.png" alt="" />
        <img src="cabins.png" alt="" />
        <img src="createuser.png" alt="" />
        <img src="settings.png" alt="" />
      </StyledImageBox>
      <StyledProjectBox>
        <div></div>
        <div>
          <StyledProjectHeading $small>
            Problems and Thought Process
          </StyledProjectHeading>
          <StyledSubHeading $big>
            The Wild Oasis is a React Project application build for hotel
            service. I built this project in React Course with React, Supabase
            and more. This application includes a lot of connections with
            Supabase so everyone can have the same overall experience as well to
            stay updated about customers.
          </StyledSubHeading>

          <StyledSubHeading $big $space>
            The Wild Oasis is a React Project application build for hotel
            service. I built this project in React Course with React, Supabase
            and more.
          </StyledSubHeading>
        </div>
      </StyledProjectBox>

      <StyledProjectImage
        src="checkin.png"
        alt="Screenshot of the WildOasis page"
      />

      <StyledProjectHeading $small $margin>
        Lessons Learned
      </StyledProjectHeading>
      <StyledSubHeading>
        The Wild Oasis is a React Project application build for hotel service. I
        built this project in React Course with React, Supabase and more. This
        application includes a lot of connections with Supabase so everyone can
        have the same overall experience as well to stay updated about
        customers.
      </StyledSubHeading>
      <StyledProjectHeading $medium $margin>
        Other Projects
      </StyledProjectHeading>
      <ProjectBox $margin>
        <Project>
          <img src="WildOasis.png" />
          <h4>The Wild Oasis</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            cupiditate consectetur sint nostrum numquam veniam!
          </p>
          <StyledLink to={"/es1"}>
            View Project <BsArrowRight />
          </StyledLink>
        </Project>
        <Project>
          <img src="WildOasis.png" />
          <h4>The Wild Oasis</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            cupiditate consectetur sint nostrum numquam veniam!
          </p>
          <StyledLink to={"/es1"}>
            View Project <BsArrowRight />
          </StyledLink>
        </Project>
      </ProjectBox>
      <Contact />
    </>
  );
}

export default WildOasis;
