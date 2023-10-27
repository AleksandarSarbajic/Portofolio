import {
  SiCss3,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiVercel,
} from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";

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
import StyledLink from "../ui/StyledLink";
import ProjectBox from "../ui/ProjectsBox";
import Contact from "../ui/Contact";
import StyledHeadingBox from "../ui/HeadingBox";
import useScrollTo from "../hooks/UseScrollTo";
import StyledBoxImage from "../ui/StyledBoxImage";

function CreckFlix() {
  useScrollTo();

  return (
    <>
      <ProjectHeader>
        <StyledHeadingBox $project>
          <StyledProjectHeading>CreckFlix</StyledProjectHeading>
        </StyledHeadingBox>
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
            <SiNextdotjs /> NextJS
          </ProjectListItem>
          <ProjectListItem>
            <SiCss3 /> Css
          </ProjectListItem>
          <ProjectListItem>
            <SiNodedotjs /> NodeJS
          </ProjectListItem>
          <ProjectListItem>
            <SiMongodb /> Mongodb
          </ProjectListItem>
          <ProjectListItem>
            <SiVercel /> Vercel
          </ProjectListItem>
        </StyledList>
        <StyledList>
          <ProjectListItem heading={true}>Links</ProjectListItem>
          <ProjectListItem link={"https://creckflix.vercel.app/"}>
            Live
          </ProjectListItem>
          <ProjectListItem
            link={"https://github.com/AleksandarSarbajic/creckflix"}
          >
            GitHub
          </ProjectListItem>
        </StyledList>
      </ProjectListContainer>
      <StyledProjectImage
        src="FlixMovies.webp"
        alt="Screenshot of the Creckflix page"
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
            <SiNextdotjs /> NextJS
          </StyledStackItem>
          <StyledStackItem $blue>
            <SiCss3 /> Css
          </StyledStackItem>
          <StyledStackItem $green>
            <SiNodedotjs /> NodeJS
          </StyledStackItem>
          <StyledStackItem $green>
            <SiMongodb /> Mongodb
          </StyledStackItem>
          <StyledStackItem>
            <SiVercel /> Vercel
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
        <StyledBoxImage src="FlixDetails.webp" alt="" />
        <StyledBoxImage src="FlixSearch.webp" alt="" delay={true} />
        <StyledBoxImage src="FlixSignUp.webp" alt="" />
        <StyledBoxImage src="FlixLogIn.webp" alt="" delay={true} />
        <StyledBoxImage src="FlixLandingPage.webp" alt="" />
        <StyledBoxImage src="FlixAccount.webp" alt="" delay={true} />
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
        src="TastyAddToCart.webp"
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
          <img src="WildOasis.webp" />
          <h4>The Wild Oasis</h4>
          <p>
            The Wild Oasis is a user friendly hotel management application. That
            helps employees menage everything about hotel data.
          </p>
          <StyledLink to={"/es1"}>
            View Project <BsArrowRight />
          </StyledLink>
        </Project>
        <Project time={true}>
          <img src="TastyTrail.webp" />
          <h4>Tasty Trail</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            cupiditate consectetur sint nostrum numquam veniam!
          </p>
          <StyledLink to={"/es2"}>
            View Project <BsArrowRight />
          </StyledLink>
        </Project>
      </ProjectBox>
      <Contact />
    </>
  );
}

export default CreckFlix;
