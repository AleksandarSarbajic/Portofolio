import {
  SiCss3,
  SiFirebase,
  SiLeaflet,
  SiNetlify,
  SiReact,
  SiReactrouter,
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
import useScrollToTop from "../hooks/UseScrollToTop";
import StyledBoxImage from "../ui/StyledBoxImage";

function WorldWise() {
  useScrollToTop();

  return (
    <>
      <ProjectHeader>
        <StyledHeadingBox $project>
          <StyledProjectHeading>WorldWise</StyledProjectHeading>
        </StyledHeadingBox>
        <StyledSubHeading>
          WorldWise app is a travel tracking and adventure registration
          application. Its main purpose is to allow users to register and keep
          track of the places they have traveled to, providing them with a
          visual representation of their adventures on a map.
        </StyledSubHeading>
      </ProjectHeader>
      <ProjectListContainer>
        <StyledList>
          <ProjectListItem heading={true}>Type</ProjectListItem>
          <ProjectListItem>Practice</ProjectListItem>
          <ProjectListItem>Desktop only</ProjectListItem>
        </StyledList>
        <StyledList>
          <ProjectListItem heading={true}>Stack</ProjectListItem>
          <ProjectListItem>
            <SiReact /> React
          </ProjectListItem>
          <ProjectListItem>
            <SiCss3 /> Css
          </ProjectListItem>
          <ProjectListItem>
            <SiLeaflet /> Leaflet
          </ProjectListItem>
          <ProjectListItem>
            <SiReactrouter /> Reactrouter
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
          <ProjectListItem link={"https://world-wise-aleksandar.netlify.app/"}>
            Live
          </ProjectListItem>
          <ProjectListItem
            link={"https://github.com/AleksandarSarbajic/WorldWise"}
          >
            GitHub
          </ProjectListItem>
        </StyledList>
      </ProjectListContainer>
      <StyledProjectImage
        src="WorldLanding.webp"
        alt="Screenshot of the WorldWise page"
      />

      <StyledProjectHeading $small $margin>
        Project Purpose and Goal
      </StyledProjectHeading>
      <StyledSubHeading>
        This project included the following 3 phases and iterations of the site.
        Phase 1 is simply letting users log in to application. Phase 2 is larger
        and more complex, as it includes a whole world map and markers on it..
        Phase 3 is the most complex out of all phases, including placing marker
        on map, storing data about markers and a city that connect to it.
      </StyledSubHeading>
      <StyledSubHeading $space>
        The most effective approach I found to implement these 3 phases is to
        create a realtime database for it so it can keep a track of everything,
        while displaying data on the map.
      </StyledSubHeading>
      <StyledProjectBox>
        <StyledStack>
          <StyledStackItem $blue>
            <SiReact /> React
          </StyledStackItem>
          <StyledStackItem $blue>
            <SiCss3 /> Css
          </StyledStackItem>
          <StyledStackItem $red>
            <SiReactrouter /> Reactrouter
          </StyledStackItem>
          <StyledStackItem $green>
            <SiLeaflet /> Leaflet
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
            React made the most sense for this web application because it&apos;s
            very simple to use Leaflet with react hooks. Firebase was chosen
            because the data manipulation wasn&apos;t that complex because we
            were just adding and using data.
          </StyledSubHeading>

          <StyledSubHeading $big $space>
            React hooks are used for form submission and filtering cities&apos;
            data to a number of countries. Leaflet is used for providing the map
            and putting markers on the map.Netlify is also an obvious choice for
            deployment because of its speed and reliability.
          </StyledSubHeading>
        </div>
      </StyledProjectBox>
      <StyledImageBox>
        <StyledBoxImage
          src="WorldMap.webp"
          alt="Image of application with map and markers on the right side with information about markers on the left side."
        />
        <StyledBoxImage
          src="WorldCity.webp"
          alt="Image by selecting the marker and opening personal description about it"
          delay={true}
        />
        <StyledBoxImage
          src="WorldCountries.webp"
          alt="The Image of the countries that you visited"
        />
        <StyledBoxImage
          src="WorldLogIn.webp"
          alt="The image of the login page before accessing to the application"
          delay={true}
        />
        <StyledBoxImage
          src="WorldPricing.webp"
          alt="The image of pricing page"
        />
        <StyledBoxImage
          src="WorldAbout.webp"
          alt="Image of the about page"
          delay={true}
        />
      </StyledImageBox>
      <StyledProjectBox>
        <div></div>
        <div>
          <StyledProjectHeading $small>
            Problems and Thought Process
          </StyledProjectHeading>
          <StyledSubHeading $big>
            Like most projects, there is always some problem on your journey,
            the most difficult area was using Leafleft and gathering data from
            the map. After understanding Leafleft, everything went fast and
            easy.
          </StyledSubHeading>
        </div>
      </StyledProjectBox>

      <StyledProjectImage
        src="WorldAdd.webp"
        alt="Image when you are submitting a city information"
      />

      <StyledProjectHeading $small $margin>
        Lessons Learned
      </StyledProjectHeading>
      <StyledSubHeading>
        I could spend all day describing the lessons that I learned while
        working on this project, but the most important ones involved in my
        newfound understanding of React Hooks, FireBase, and the most important
        Leaflet that helped me understand how to work with Maps.
      </StyledSubHeading>
      <StyledProjectHeading $medium $margin>
        Other Projects
      </StyledProjectHeading>
      <ProjectBox $margin>
        <Project>
          <img
            src="WildOasis.webp"
            alt="Image of dashboard on the WildOasis page"
          />
          <h4>The Wild Oasis</h4>
          <p>
            The Wild Oasis is a user friendly hotel management application. That
            helps employees manage everything about hotel data.
          </p>
          <StyledLink to={"/es1"}>
            View Project <BsArrowRight />
          </StyledLink>
        </Project>
        <Project time={true}>
          <img
            src="TastyTrail.webp"
            alt="Image of landing page on the Tasty Trail"
          />
          <h4>Tasty Trail</h4>
          <p>
            An e-commerce application built with React & Redux for a delivery
            company.
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

export default WorldWise;
