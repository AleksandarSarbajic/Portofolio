import {
  SiNetlify,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiStyledcomponents,
  SiSupabase,
  SiTypescript,
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

function NothingTodo() {
  useScrollToTop();

  return (
    <>
      <ProjectHeader>
        <StyledHeadingBox $project>
          <StyledProjectHeading>Nothing To-do</StyledProjectHeading>
        </StyledHeadingBox>
        <StyledSubHeading>
          The Nothing To-Do is a React-TypeScript application build for task
          management. This was my first big project using TypeScript with React.
          This application includes a lot of connections with Supabase so
          everyone can have the same overall experience to stay updated with
          their tasks.
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
            <SiTypescript /> TypeScript
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
          <ProjectListItem link={"https://nothing-todos.netlify.app/login"}>
            Live
          </ProjectListItem>
          <ProjectListItem
            link={"https://github.com/AleksandarSarbajic/NothingTodo"}
          >
            GitHub
          </ProjectListItem>
        </StyledList>
      </ProjectListContainer>
      <StyledProjectImage
        src="dashboardTodo.png"
        alt="Screenshot of the WildOasis page"
      />

      <StyledProjectHeading $small $margin>
        Project Purpose and Goal
      </StyledProjectHeading>
      <StyledSubHeading>
        This project included the following 4 phases and iterations of the site.
        The first phase was enabling users to create their own account using the
        form or few different providers. The second phase was creating main page
        for users where they can create their task list and have a different
        variability of their categories. The third phase was applying settings
        information to whole application and their tasks so user can change what
        they want to see on the screen. And the fourth phase was creating
        beautiful analytics so users can track their own progress.
      </StyledSubHeading>
      <StyledSubHeading $space>
        The most effective approach I found to implement these 4 phases is to
        create login page, and after that create reusable pages and components
        that are connected to settings of user account.
      </StyledSubHeading>
      <StyledProjectBox>
        <StyledStack>
          <StyledStackItem $blue>
            <SiReact /> React
          </StyledStackItem>
          <StyledStackItem $blue>
            <SiTypescript /> TypeScript
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
            I chose React for this application because I wanted to practice
            using React with TypeScript. For data base I chose Supabase with
            incredible support for TypeScript and very good combination with
            ReactQuery.
          </StyledSubHeading>

          <StyledSubHeading $big $space>
            ReactQuery is used across the entire project to provide the fastest
            performance, because we can store stale data in it and as we go to
            the same page that is using that data loading will be significantly
            faster. Reach Hook Form came first in mind for using the forms,
            because how fast and easy you can work with it. In this project I
            went for mobile first option for responsive using styled components.
            Netlify is also an obvious choice for deployment because of its
            speed and reliability.
          </StyledSubHeading>
        </div>
      </StyledProjectBox>
      <StyledImageBox $nothing={true}>
        <StyledBoxImage
          src="categoriesTodo.png"
          alt="Image of bookings on page the WildOasis"
        />

        <StyledBoxImage
          style={{ gridRow: "1 / 4", gridColumn: " 2 / 3" }}
          src="settingsTodo.png"
          alt="Image of settings where you can adjust them on the WildOasis"
          delay={true}
        />
        <StyledBoxImage
          src="searchTodo.png"
          alt="Image by creating the user on the WildOasis"
        />
        <StyledBoxImage
          style={{ gridColumn: " 1 / 2" }}
          src="analyticsTodo.png"
          alt="Image by creating the user on the WildOasis"
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
            the most difficult was using TypeScript with custom components and
            props compensated with data from Supabase.
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
        src="loginTodo.png"
        alt="Image when you are checking in or checking out a booking"
      />

      <StyledProjectHeading $small $margin>
        Lessons Learned
      </StyledProjectHeading>
      <StyledSubHeading>
        I could spend all day describing the lessons that I learned while
        working on this project, but the most important ones involved in my
        newfound understanding of TypeScipt and React. As my first large project
        using TypeScipt, I learned a lot about the types, interfaces and how to
        make components more reusable with generic types.
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
            helps employees menage everything about hotel data.
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

export default NothingTodo;
