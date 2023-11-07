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
import useScrollToTop from "../hooks/UseScrollToTop";
import StyledBoxImage from "../ui/StyledBoxImage";

function CreckFlix() {
  useScrollToTop();

  return (
    <>
      <ProjectHeader>
        <StyledHeadingBox $project>
          <StyledProjectHeading>CreckFlix</StyledProjectHeading>
        </StyledHeadingBox>
        <StyledSubHeading>
          Creckflix is a NextJS application for watching movies online. I build
          this project as a practice with NextJS, Mongodb and more. This
          application required a lot connection with mongodb to create a good
          user experience.
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
        This project included the following 4 phases and iterations of the site.
        Phase 1 is simply allowing a new user to create a new account or
        existing users log in to application. Phase 2 is letting users see all
        movies, details about them and popular movies on website. Phase 3 was
        the most complex, as it includes search and my list as well as logic and
        backend that goes along with it. Phase 4 is enabling users to watch
        movies as long with subtitles that connects to bunny.net
      </StyledSubHeading>
      <StyledSubHeading $space>
        I found that the best way to implement these 4 phases without having a
        lot of
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
            NextJs made the most sense for this web application because
            it&apos;s very pleasant to use backend and mongodb with it. Mongodb
            was chosen because, implementation of NextJs projects is easy and
            mongodb search is very powerful to use in such a project.
          </StyledSubHeading>

          <StyledSubHeading $big $space>
            React hooks and local storage are also used throughout the project
            to maintain user login. NodeJS was used a little bit just for a
            fetching the data and user login. Vercel is also an obvious choice
            for deployment because of its speed and reliability when deploying
            NextJs projects.
          </StyledSubHeading>
        </div>
      </StyledProjectBox>
      <StyledImageBox>
        <StyledBoxImage
          src="FlixDetails.webp"
          alt="Image of modal where the movie details are present with suggested movies"
        />
        <StyledBoxImage
          src="FlixSearch.webp"
          alt="Image when people are searching for movies"
          delay={true}
        />
        <StyledBoxImage src="FlixSignUp.webp" alt="Image of Sign Up page" />
        <StyledBoxImage
          src="FlixLogIn.webp"
          alt="Image of Login page"
          delay={true}
        />
        <StyledBoxImage
          src="FlixAccount.webp"
          alt="Image where you can edit your profile name, picture and delete your account"
        />
        <StyledBoxImage
          src="FlixLandingPage.webp"
          alt="Image of landing page"
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
            this was my first larger NextJS project and biggest problem is
            speed. Mongodb function for search at first was confusing, but later
            it was very clear how good was it.
          </StyledSubHeading>
        </div>
      </StyledProjectBox>

      <StyledProjectImage
        src="FlixSearch.webp"
        alt="Screenshot of the WildOasis page"
      />

      <StyledProjectHeading $small $margin>
        Lessons Learned
      </StyledProjectHeading>
      <StyledSubHeading>
        The large NextJS project was a huge improvement in my learning
        experience, but the most important ones are the ones involved in
        learning SSR and how getServerSideProps works. NextJS routing is a huge
        difference from React router dom, routing that is implemented by file
        structure is the something that I liked the most.
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

export default CreckFlix;
