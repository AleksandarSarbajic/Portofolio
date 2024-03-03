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
import useScrollToTop from "../hooks/UseScrollToTop";
import StyledBoxImage from "../ui/StyledBoxImage";

function TastyTrail() {
  useScrollToTop();

  return (
    <>
      <ProjectHeader>
        <StyledHeadingBox $project>
          <StyledProjectHeading>Tasty Trail</StyledProjectHeading>
        </StyledHeadingBox>
        <StyledSubHeading>
          Tasty Trail is a React Application built for a delivery. I build this
          project from scratch and did a design by my self with React, Redux and
          more. A lot of work was needed to develop the common cart and overall
          shopping experience, as well as to present the product and integrate
          support pages, for this e-commerce application.
        </StyledSubHeading>
      </ProjectHeader>
      <ProjectListContainer>
        <StyledList>
          <ProjectListItem heading={true}>Type</ProjectListItem>
          <ProjectListItem>Practice</ProjectListItem>
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
            <SiReactrouter /> React router dom
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
        This project included the following 3 phases and iterations of the site.
        Phase 1 is simply let users discover a store they want.Phase 2 is quite
        larger and is designed to let users search for the product they want.
        Phase 3 is by far the largest and most complex, as it includes the full
        shop and cart pages as well as the logic that goes along with it.
      </StyledSubHeading>
      <StyledSubHeading $space>
        I found that the best way to implement these 3 phases without having
        separate versions, was to first create a cart and page functionalities
        and that their data will be displayed and rendered conditionally.
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
            <SiReactrouter /> React router dom
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
            React made the most sense for the web application because i wanted
            to practice React and create some Large project with it. Firebase
            was chosen just so i can store data about stores and products that
            user cant interact with.
          </StyledSubHeading>

          <StyledSubHeading $big $space>
            Throughout the project, Redux and React hooks are also utilized to
            manage the user cart items and enable the universal display of the
            cart count and other shopping data. Netlify is also an obvious
            choice for deployment because of its speed and reliability.
          </StyledSubHeading>
        </div>
      </StyledProjectBox>
      <StyledImageBox>
        <StyledBoxImage
          src="TastyDiscovery.webp"
          alt="Image of discovery page where user can browse restaurants and markets"
        />
        <StyledBoxImage
          src="restaurantPage.webp"
          alt="Image where only restaurants and their categories are shown"
          delay={true}
        />
        <StyledBoxImage
          src="restaurant.webp"
          alt="Image when user is browsing food in restaurant"
        />
        <StyledBoxImage
          src="TastyCart.webp"
          alt="Image of cart with items selected"
          delay={true}
        />
        <StyledBoxImage
          src="TastySearch.webp"
          alt="Image where user is searching for desired store
        "
        />
        <StyledBoxImage
          src="TastySearchPage.webp"
          alt="Image when user goes to display all results for search"
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
            I had several difficulties when working on this project, like with
            most others. One especially challenging component was doing a shop
            search, where you could look for specific things.
          </StyledSubHeading>

          <StyledSubHeading $big $space>
            In addition, I tried to make components as reusable as possible and
            used props for as many components as I could in order to make the
            application run as quickly as possible.
          </StyledSubHeading>
        </div>
      </StyledProjectBox>

      <StyledProjectImage
        src="TastyAddToCart.webp"
        alt="Image when user wants to add item to cart"
      />

      <StyledProjectHeading $small $margin>
        Lessons Learned
      </StyledProjectHeading>
      <StyledSubHeading>
        I could write a book on the lessons I learned working on this project,
        but the ones that really stood out to me had to do with how much I now
        understood Redux and React Hooks. As this was my first significant Redux
        project, I gained a lot of knowledge about the state and hooks of Redux.
        With a great deal of code reworking and bug fixes, for improved
        readability and fewer bugs that arise late at night.
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
        <Project>
          <img
            src="dashboardTodo.png"
            alt="Image of landing page on the World Wise"
          />
          <h4>Nothing To-Do</h4>
          <p>
            Nothing To-Do is todo-list application inspired by Nothing Company
            design.
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
