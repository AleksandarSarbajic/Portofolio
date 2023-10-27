import {
  SiFirebase,
  SiNetlify,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiSass,
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

function TastyTrail() {
  useScrollTo();

  return (
    <>
      <ProjectHeader>
        <StyledHeadingBox $project>
          <StyledProjectHeading>Tasty Trail</StyledProjectHeading>
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
            <SiReact /> React
          </ProjectListItem>
          <ProjectListItem>
            <SiRedux /> Redux Toolkit
          </ProjectListItem>
          <ProjectListItem>
            <SiReactrouter /> Reactrouter
          </ProjectListItem>
          <ProjectListItem>
            <SiSass /> Sass
          </ProjectListItem>
          <ProjectListItem>
            <SiFirebase /> Firebase
          </ProjectListItem>
          <ProjectListItem>
            <SiNetlify /> Netlify
          </ProjectListItem>
        </StyledList>
        <StyledList>
          <ProjectListItem heading={true}>Links</ProjectListItem>
          <ProjectListItem link={"https://tasty-trial.netlify.app/"}>
            Live
          </ProjectListItem>
          <ProjectListItem
            link={"https://github.com/AleksandarSarbajic/Tasty-Trail"}
          >
            GitHub
          </ProjectListItem>
        </StyledList>
      </ProjectListContainer>
      <StyledProjectImage
        src="TastyTrail.webp"
        alt="Screenshot of the Tasty Trail page"
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
          <StyledStackItem $blue>
            <SiReact /> React
          </StyledStackItem>
          <StyledStackItem $purple>
            <SiRedux /> Redux Toolkit
          </StyledStackItem>
          <StyledStackItem $red>
            <SiReactrouter /> Reactrouter
          </StyledStackItem>
          <StyledStackItem $pink>
            <SiSass /> Sass
          </StyledStackItem>
          <StyledStackItem $orange>
            <SiFirebase /> Firebase
          </StyledStackItem>
          <StyledStackItem $blue>
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
        <StyledBoxImage src="TastyDiscovery.webp" alt="" />
        <StyledBoxImage src="restaurantPage.webp" alt="" delay={true} />
        <StyledBoxImage src="restaurant.webp" alt="" />
        <StyledBoxImage src="TastyCart.webp" alt="" delay={true} />
        <StyledBoxImage src="TastySearch.webp" alt="" />
        <StyledBoxImage src="TastySearchPage.webp" alt="" delay={true} />
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
          <img src="WorldLanding.webp" />
          <h4>WorldWise</h4>
          <p>
            WorldWise is a React application that allows users to explore cities
            from around the world.
          </p>
          <StyledLink to={"/es3"}>
            View Project <BsArrowRight />
          </StyledLink>
        </Project>
      </ProjectBox>
      <Contact />
    </>
  );
}

export default TastyTrail;
