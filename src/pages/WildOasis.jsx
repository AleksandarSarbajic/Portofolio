import {
  SiNetlify,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiStyledcomponents,
  SiSupabase,
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

function WildOasis() {
  useScrollToTop();

  return (
    <>
      <ProjectHeader>
        <StyledHeadingBox $project>
          <StyledProjectHeading>The Wild Oasis</StyledProjectHeading>
        </StyledHeadingBox>
        <StyledSubHeading>
          The Wild Oasis is a React application build for hotel service. I built
          this project while practicing React, Supabase and more. This
          application includes a lot of connections with Supabase so everyone
          can have the same overall experience as well to stay updated about
          customers.
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
          <ProjectListItem $blue>
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
        src="WildOasis.webp"
        alt="Screenshot of the WildOasis page"
      />

      <StyledProjectHeading $small $margin>
        Project Purpose and Goal
      </StyledProjectHeading>
      <StyledSubHeading>
        This project included the following 5 phases and iterations of the site.
        Phase 1 is simply the cabins page where employee can see all the info
        about a specific cabin, sort the cabins, edit and add a new cabin. Phase
        2 is by far the largest and the most complex, as it includes all booking
        information and all functions so the employee can edit them. Phase 3 is
        all about overall UX, where employees can set their settings, create
        other user account and update their own account. Phase 4 is the second
        largest phase, where we created the beautiful dashboard about all
        information that&apos;s happening. And the last phase 5 is about
        enabling login, logout and beautiful dark mode.
      </StyledSubHeading>
      <StyledSubHeading $space>
        The most effective approach I found to implement these 5 phases is to
        create a distinct page first, and then add the global states and login
        functions. This way dashboard information was rendered conditionally
        with bookings being updated.
      </StyledSubHeading>
      <StyledProjectBox>
        <StyledStack>
          <StyledStackItem $blue>
            <SiReact /> React
          </StyledStackItem>
          <StyledStackItem $red>
            <SiReactquery /> React Query
          </StyledStackItem>
          <StyledStackItem $pink>
            <SiStyledcomponents /> Styled Components
          </StyledStackItem>
          <StyledStackItem $blue>
            <SiReacthookform /> React Hook Form
          </StyledStackItem>
          <StyledStackItem $green>
            <SiSupabase /> Supabase
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
            very simple to use Supabase in combination with ReactQuery which
            provide very smooth experience. Supabase was chosen because of the
            ability how easy it to connect to it and to add data that we need by
            creating tables.
          </StyledSubHeading>

          <StyledSubHeading $big $space>
            ReactQuery is used across the entire project to provide the fastest
            performance, because we can store stale data in it and as we go to
            the same page that is using that data loading will be significantly
            faster. Reach Hook Form came first in mind for using the forms,
            because how fast and easy you can work with it. Netlify is also an
            obvious choice for deployment because of its speed and reliability.
          </StyledSubHeading>
        </div>
      </StyledProjectBox>
      <StyledImageBox>
        <StyledBoxImage
          src="bookings.webp"
          alt="Image of bookings on page the WildOasis"
        />
        <StyledBoxImage
          src="cabins.webp"
          alt="Image of cabins on page the WildOasis"
          delay={true}
        />
        <StyledBoxImage
          src="createuser.webp"
          alt="Image by creating the user on the WildOasis"
        />
        <StyledBoxImage
          src="settings.webp"
          alt="Image of settings where you can adjust them on the WildOasis"
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
            the most difficult area was the organization of the data and loading
            the same data as fast as possible so our app doesn&apos;t get slow.
            I realized how important maintaining the speed of data flow is
            important.
          </StyledSubHeading>

          <StyledSubHeading $big $space>
            As well for the application the be the fastest as possible I was
            making components as reusable as possible and utilized props for as
            many components. That&apos; why i used styled components, because
            the structure of CSS in JS is much easier to use, especially because
            styled components uses their own props to.
          </StyledSubHeading>
        </div>
      </StyledProjectBox>

      <StyledProjectImage
        src="checkin.webp"
        alt="Image when you are checking in or checking out a booking"
      />

      <StyledProjectHeading $small $margin>
        Lessons Learned
      </StyledProjectHeading>
      <StyledSubHeading>
        I could spend all day describing the lessons that I learned while
        working on this project, but the most important ones involved in my
        newfound understanding of React Hooks, Supabase, ReactQuery and Styled
        components. As my first large project using React, I learned a lot of
        data structure and code organization. When I first began, I was confused
        about ReactQuery and Supabase tables, but as soon as I understood how it
        works, everything went really well. With a lot of refactoring code and
        resolving issues, for better readability and fewer late night problems.
      </StyledSubHeading>
      <StyledProjectHeading $medium $margin>
        Other Projects
      </StyledProjectHeading>
      <ProjectBox $margin>
        <Project>
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
        <Project time={true}>
          <img
            src="WorldLanding.webp"
            alt="Image of landing page on the World Wise"
          />
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

export default WildOasis;
