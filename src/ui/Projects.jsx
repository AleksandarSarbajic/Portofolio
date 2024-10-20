import styled from "styled-components";
import StyledHeading from "./Heading";
import { useInView } from "react-intersection-observer";
import Project from "./Project";

import { BsArrowRight } from "react-icons/bs";
import StyledHeadingBox from "./HeadingBox";
import StyledLink from "./StyledLink";
import ProjectBox from "./ProjectsBox";
import useScrollTo from "../hooks/UseScrollTo";

import { useEffect } from "react";
import { useIsInView } from "../context/IsInViewContext";
import { useDarkMode } from "../context/DarkModeContext";

const StyledContainer = styled.section`
  padding: 1rem;
  @media only screen and (max-width: 31em) {
    padding: 0;
  }
`;

const StyledDescription = styled.p`
  font-size: 1.8rem;
  width: 50%;

  line-height: 1.8;
  margin-bottom: 5rem;

  @media only screen and (max-width: 50em) {
    text-align: center;
    margin: 0 auto 5.6rem;
    width: 75%;
    padding: 0;
  }
  @media only screen and (max-width: 37.5em) {
    width: 95%;
  }
  @media only screen and (max-width: 26.5em) {
    width: 100%;
  }
`;

function Projects() {
  const { ref: intRef, inView: intInView } = useInView({ threshold: 1 });

  const { isDarkMode } = useDarkMode();

  const { setSectionHandler } = useIsInView();

  useEffect(() => {
    if (intInView) {
      setSectionHandler("#projects");
    }
  }, [intInView, setSectionHandler]);

  const { ref: containerRef } = useScrollTo({
    hash: "#projects",
    scrollTo: "start",
  });

  const { inView: inViewHeading, ref: headingRef } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <StyledContainer ref={containerRef}>
      <StyledHeadingBox>
        <StyledHeading $inView={inViewHeading}>
          What I&apos;ve been working on
        </StyledHeading>
      </StyledHeadingBox>
      <StyledDescription ref={headingRef}>
        Having a project at work is something I enjoy, along with learning
        something new. Take a look at some of the applications that I have been
        working on:
      </StyledDescription>

      <ProjectBox>
        <Project>
          <img
            src={`${
              isDarkMode ? "TheBugBook-dark.webp" : "TheBugBook-light.webp"
            } `}
            alt="Image of landing page on the Bug Book"
          />
          <h4>The Bug Book</h4>
          <p>
            An fullstack social media application built to help you find other
            people and talk with them.
          </p>
          <StyledLink to={"/es6"}>
            View Project <BsArrowRight />
          </StyledLink>
        </Project>
        <Project time={true}>
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
            ref={intRef}
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
        <Project time={true}>
          <img
            src="WildOasis.webp"
            ref={intRef}
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
        {/* 
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
        </Project> */}
        {/* <Project time={true}>
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
        </Project> */}

        {/* <Project time={true}>
          <img src="FlixMovies.webp" alt="Image of movies on the CreckFlix" />
          <h4>CreckFlix</h4>
          <p>
            CreckFlix is an online movie streaming application that is
            user-friendly and allows users to watch movies for free.
          </p>
          <StyledLink to={"/es4"}>
            View Project <BsArrowRight />
          </StyledLink>
        </Project> */}
      </ProjectBox>
    </StyledContainer>
  );
}

export default Projects;
