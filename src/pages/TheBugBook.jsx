import {
  SiNextdotjs,
  SiPrisma,
  SiRadixui,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiTailwindcss,
  SiVercel,
  SiZod,
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
import { useDarkMode } from "../context/DarkModeContext";

function TheBugBook() {
  useScrollToTop();
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <ProjectHeader>
        <StyledHeadingBox $project>
          <StyledProjectHeading>The Bug Book</StyledProjectHeading>
        </StyledHeadingBox>
        <StyledSubHeading>
          The Bug Book is a fullstack NextJS social media application. I built
          this project while practicing NextJS, Prisma, backend and more. This
          application is for people who want to meet new people and share their
          life.
        </StyledSubHeading>
      </ProjectHeader>
      <ProjectListContainer>
        <StyledList>
          <ProjectListItem heading={true}>Type</ProjectListItem>
          <ProjectListItem>Practice</ProjectListItem>
          <ProjectListItem>TypeScript</ProjectListItem>
        </StyledList>
        <StyledList>
          <ProjectListItem heading={true}>Stack</ProjectListItem>
          <ProjectListItem>
            <SiReact /> React
          </ProjectListItem>
          <ProjectListItem>
            <SiNextdotjs />
            NextJS
          </ProjectListItem>
          <ProjectListItem>
            <SiPrisma />
            Prisma
          </ProjectListItem>
          <ProjectListItem>
            <SiZod />
            Zod
          </ProjectListItem>
          <ProjectListItem>
            <SiReacthookform />
            React Hook Form
          </ProjectListItem>
          <ProjectListItem>
            <SiReactquery />
            React Query
          </ProjectListItem>
          <ProjectListItem>
            <SiTailwindcss />
            TailWindCSS
          </ProjectListItem>
          <ProjectListItem>
            <SiRadixui />
            RadixUi
          </ProjectListItem>
          <ProjectListItem $blue>
            <SiVercel /> Vercel
          </ProjectListItem>
        </StyledList>
        <StyledList>
          <ProjectListItem heading={true}>Links</ProjectListItem>
          <ProjectListItem link={"https://donda-sma.vercel.app"}>
            Live
          </ProjectListItem>
          <ProjectListItem
            link={"https://github.com/AleksandarSarbajic/donda-bugbook"}
          >
            GitHub
          </ProjectListItem>
        </StyledList>
      </ProjectListContainer>
      <StyledProjectImage
        src={`${
          isDarkMode ? "TheBugBook-dark.webp" : "TheBugBook-light.webp"
        } `}
        alt="Screenshot of the TheBugBook page"
      />

      <StyledProjectHeading $small $margin>
        Project Purpose and Goal
      </StyledProjectHeading>
      <StyledSubHeading>
        This project included the following 6 phases and iterations of the site.
        Phase 1 is simply enabling the user to create an account and log in.
        Phase 2 was to create a main page where user can create posts and see
        other users posts. Phase 3 was to create a profile page where user can
        see his posts and edit his profile. Phase 4 was to enable users to like,
        comment posting, bookmark posts and follow other users. Phase 5 was to
        enable users to see their notifications, bookmarks and search for other
        users and content. Phase 6 is to enable users so they can use messages
        and chat with other users.
      </StyledSubHeading>
      <StyledSubHeading $space>
        The most effective approach I found to implement these 6 phases is to
        create a backend with Prisma and NextJS API routes so I can enable login
        features that are crucial, after that develop a main page where users
        access everything that they need. Then generate a profile page where the
        user can manage his following, followers and edit his profile;
        Afterwards, build a functional messaging system where users can chat.
        And when all of that is done to create a notification system that will
        trigger on likes, comments and follows while messages have their own
        notifications.
      </StyledSubHeading>
      <StyledProjectBox>
        <StyledStack>
          <StyledStackItem $blue>
            <SiReact /> React
          </StyledStackItem>
          <StyledStackItem $black>
            <SiNextdotjs /> NextJS 15
          </StyledStackItem>
          <StyledStackItem $blue>
            <SiTailwindcss /> TailWindCSS
          </StyledStackItem>
          <StyledStackItem $red>
            <SiReactquery /> React Query
          </StyledStackItem>
          <StyledStackItem $blue>
            <SiReacthookform /> React Hook Form
          </StyledStackItem>
          <StyledStackItem $black>
            <SiPrisma /> Prisma
          </StyledStackItem>
          <StyledStackItem $orange>
            <SiZod /> Zod
          </StyledStackItem>
          <StyledStackItem $black>
            <SiRadixui /> RadixUi
          </StyledStackItem>
          <StyledStackItem $black>
            <SiVercel /> Vercel
          </StyledStackItem>
        </StyledStack>
        <div>
          <StyledProjectHeading $small>
            Web Stack and Explanation
          </StyledProjectHeading>
          <StyledSubHeading $big>
            I wanted to use NextJS 15 so I can practice my backend skills with
            new technologies that I learned, and I think that NextJS is perfect
            for social media application. I chose Prisma because I wanted to use
            a postgres database from vercel and how easy is to connect to it.
          </StyledSubHeading>

          <StyledSubHeading $big $space>
            For the whole auth logic I used lucia and for creating users I
            worked with Prisma. For validation of inputs I used Zod. For data
            mutation and fetching, I chose ReactQuery and ky. For uploading
            images I used uploadthing, and for editing images I chose react
            cropper and reacts image file resizer. For styling the application I
            used TailWindCSS with radix-ui, and tip tap. Radix ui provides high
            quality components that are easy to use and tiptap provides a good
            editor for creating a post. For the whole messaging logic i was
            using stream chat who provides hosted chat component that is so
            customizable and saves a lot of time implementing it . For
            linkifying # links and profile I used to react linkify it. Vercel is
            also an obvious choice for deployment because of its speed and
            reliability for NextJS projects.
          </StyledSubHeading>
        </div>
      </StyledProjectBox>
      <StyledImageBox $nothing={true}>
        <StyledBoxImage
          src={`${
            isDarkMode
              ? "TheBugBook-users-dark.webp"
              : "TheBugBook-users-light.webp"
          } `}
          alt="Image of cabins on page the TheWildOasis"
        />
        <StyledBoxImage
          style={{ gridRow: "1 / 3", gridColumn: " 2 / 3" }}
          src={`${
            isDarkMode
              ? "TheBugBook-search-dark.webp"
              : "TheBugBook-search-light.webp"
          } `}
          alt="Image of cabins on page the WildOasis"
          delay={true}
        />
        <StyledBoxImage
          src={`${
            isDarkMode
              ? "TheBugBook-bookmarks-dark.webp"
              : "-bookmarks-light.webp"
          } `}
          alt="Image by creating the user on the WildOasis"
        />
        <StyledBoxImage
          style={{ gridColumn: " 1 / 2" }}
          src={`${
            isDarkMode
              ? "TheBugBook-notifications-dark.webp"
              : "TheBugBook-notifications-light.webp"
          } `}
          alt="Image of settings where you can adjust them on the WildOasis"
          delay={true}
        />
        <StyledBoxImage
          style={{ gridColumn: " 2 / 3" }}
          src={`${
            isDarkMode
              ? "TheBugBook-login-dark.webp"
              : "TheBugBook-login-light.webp"
          } `}
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
            Like most projects, there is always some problem on your journey. I
            was stuck in different places, but the most difficult area was in
            the making everything work together. Optimistic data mutations with
            ReactQuery, were a lot difficult area, but I managed to make it work
            smoothly.
          </StyledSubHeading>

          <StyledSubHeading $big $space>
            Making chat work was also a difficult area and something completely
            new for me. I had to read a lot of docs because it was my first time
            using it. As well for the application to be the fast as possible I
            was making components as reusable as they could be and with help of
            a tailwind with redix-ui, I managed to do that.
          </StyledSubHeading>
        </div>
      </StyledProjectBox>

      <StyledProjectImage
        src={`${
          isDarkMode
            ? "TheBugBook-messages-dark.webp"
            : "TheBugBook-messages-light.webp"
        } `}
        alt="Image when you are checking in or checking out a booking"
      />

      <StyledProjectHeading $small $margin>
        Lessons Learned
      </StyledProjectHeading>
      <StyledSubHeading>
        I could spend all day describing the lessons that I learned while
        working on this project, but the most important ones involved in my
        newfound understanding of NextJS, Stream Chat, Lucia, Prisma, backend
        logic and so much more. As this is the largest project I have ever
        worked on, I learned a lot of new technologies and how to implement them
        in a real project, and with this project i think i have a good
        understanding of a fullstack application.
      </StyledSubHeading>
      <StyledProjectHeading $medium $margin>
        Other Projects
      </StyledProjectHeading>
      <ProjectBox $margin>
        <Project>
          <img
            src={
              isDarkMode
                ? "WorkoutDashboard--dark.webp"
                : "WorkoutDashboard--light.webp"
            }
            alt="Image of dashboard on the WorkoutNothing"
          />
          <h4>WorkoutNothing</h4>
          <p>
            WorkoutNothing is a web application that helps people track their
            workouts, discover new exercises, and track their body measurements.
          </p>
          <StyledLink to={"/es4"}>
            View Project <BsArrowRight />
          </StyledLink>
        </Project>
        <Project>
          <img
            src="WebWildOasisLanding.webp"
            alt="Image of landing page on the WildOasisWeb "
          />
          <h4>The Wild Oasis Web</h4>
          <p>
            The Wild Oasis Web is a user friendly fullstack application. The
            purpose of this is to enable users to book cabins that WildOasis
            company offers.
          </p>
          <StyledLink to={"/es5"}>
            View Project <BsArrowRight />
          </StyledLink>
        </Project>
      </ProjectBox>
      <Contact />
    </>
  );
}

export default TheBugBook;
