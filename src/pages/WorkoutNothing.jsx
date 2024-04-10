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
import { useDarkMode } from "../context/DarkModeContext";

function WorkoutNothing() {
  useScrollToTop();
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <ProjectHeader>
        <StyledHeadingBox $project>
          <StyledProjectHeading>WorkoutNothing</StyledProjectHeading>
        </StyledHeadingBox>
        <StyledSubHeading>
          WorkoutNothing is a React-TypeScript application built to help you
          workout and keep track of your progress. Each exercise has its own
          dedicated page for stats and allows the user to have full control over
          their profile and workouts.
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
          <ProjectListItem link={"workoutnothing.netlify.app/dashboard"}>
            Live
          </ProjectListItem>
          <ProjectListItem
            link={"https://github.com/AleksandarSarbajic/WorkoutNothing"}
          >
            GitHub
          </ProjectListItem>
        </StyledList>
      </ProjectListContainer>
      <StyledProjectImage
        src={
          isDarkMode
            ? "WorkoutDashboard--dark.webp"
            : "WorkoutDashboard--light.webp"
        }
        alt="Dashboard of the WorkoutNothing application"
      />

      <StyledProjectHeading $small $margin>
        Project Purpose and Goal
      </StyledProjectHeading>
      <StyledSubHeading>
        This project included the 4 following phases and iterations of the site.
        The first phase creating settings that would allow users to customize
        their profile, units and general settings. The second phase is adding
        exercises, measures and creating pages for each one so user can have
        every info about their progress and instructions if they don&apos;t know
        to perform certain exercises. The third phase is enabling users to start
        a workout and add exercise to their workout by keeping track of the time
        and allowing users to add rest time for each set and exercise. The
        fourth phase involves creating a history of workouts, allowing users to
        create workout templates, edit their previous workouts, and display
        stats on the dashboard.
      </StyledSubHeading>
      <StyledSubHeading $space>
        The most effective approach I found to implement these 4 phases is to
        create settings, exercises and connect everything to them, and after
        that to create the logic of creating a workout and submitting it with
        updating exercises records.
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
            faster. I chose to work with React Context so that it can store
            current data from workout and the time (of the workout) since I
            wanted to use it in a large project instead of Redux. React Hook
            Form came to mind first for using the forms, because of how fast and
            easy you can work with it. For styling, I used styled components
            because they are efficient and don&apos;t need a huge amount of
            files because they are written in react. Netlify is also an obvious
            choice for deployment because of its speed and reliability.
          </StyledSubHeading>
        </div>
      </StyledProjectBox>
      <StyledImageBox $nothing={true}>
        <StyledBoxImage
          src={
            isDarkMode
              ? "WorkoutHistory--dark.webp"
              : "WorkoutHistory--light.webp"
          }
          alt="History of the workouts on WorkoutNothing"
        />

        <StyledBoxImage
          style={{ gridRow: "1 / 4", gridColumn: " 2 / 3" }}
          src={
            isDarkMode
              ? "WorkoutWorkoutProgress--dark.webp"
              : "WorkoutWorkoutProgress--light.webp"
          }
          alt="Image of workout in progress on WorkoutNothing"
          delay={true}
        />
        <StyledBoxImage
          src={
            isDarkMode
              ? "WorkoutExercises--dark.webp"
              : "WorkoutExercises--light.webp"
          }
          alt="Image of a page where all exercises are on WorkoutNothing"
        />
        <StyledBoxImage
          style={{ gridColumn: " 1 / 2" }}
          src={
            isDarkMode
              ? "WorkoutMeasures--dark.webp"
              : "WorkoutMeasures--light.webp"
          }
          alt="An image featuring all the measures on WorkoutNothing"
        />
      </StyledImageBox>
      <StyledProjectBox>
        <div></div>
        <div>
          <StyledProjectHeading $small>
            Problems and Thought Process
          </StyledProjectHeading>
          <StyledSubHeading $big>
            Like with most projects, always some sort of a problem appears on
            your journey, the most difficult one was creating whole logic with
            workout context and working with best practices while using
            TypeScript with it so I don&apos;t provoke errors
          </StyledSubHeading>

          <StyledSubHeading $big $space>
            As well for the application, to be the fastest possible I was making
            components as reusable as they can be because of how complex and big
            workout context was and how many exercises are in the data base
            because it needs a lot of time so they can be loaded so other things
            needed to be small and reusable. That&apos;s why i used styled
            components, because the structure of CSS in JS is much easier to
            use, especially because styled components use their own props too.
          </StyledSubHeading>
        </div>
      </StyledProjectBox>

      <StyledProjectImage
        src={
          isDarkMode
            ? "WorkoutSettings--dark.webp"
            : "WorkoutSettings--light.webp"
        }
        alt="Image of a settings page on WorkoutNothing"
      />

      <StyledProjectHeading $small $margin>
        Lessons Learned
      </StyledProjectHeading>
      <StyledSubHeading>
        I could spend all day describing the lessons that I learned while
        working on this project, but the most important ones are involved in my
        newfound understanding of TypeScipt and React. I always wanted to create
        such an application for working out and to understand how to implement
        such a logic allowing people to be more productive and to have a better
        workout
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

export default WorkoutNothing;
