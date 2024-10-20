import {
  SiAxios,
  SiNextdotjs,
  SiReact,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
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
import { useDarkMode } from "../context/DarkModeContext";

function WildOasisWeb() {
  const { isDarkMode } = useDarkMode();
  useScrollToTop();

  return (
    <>
      <ProjectHeader>
        <StyledHeadingBox $project>
          <StyledProjectHeading>The Wild Oasis Web</StyledProjectHeading>
        </StyledHeadingBox>
        <StyledSubHeading>
          The Wild Oasis Web is a fullstack NextJS application build for hotel
          reservations. I built this project while practicing NextJS, Stripe,
          backend and more. This application is minimalistic and easy to use for
          everyone.
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
            <SiNextdotjs />
            NextJS
          </ProjectListItem>
          <ProjectListItem>
            <SiTailwindcss />
            TailWindCSS
          </ProjectListItem>
          <ProjectListItem>
            <SiStripe />
            Stripe
          </ProjectListItem>
          <ProjectListItem>
            <SiAxios />
            Axious
          </ProjectListItem>
          <ProjectListItem>
            <SiSupabase /> Supabase
          </ProjectListItem>
          <ProjectListItem $blue>
            <SiVercel /> Vercel
          </ProjectListItem>
        </StyledList>
        <StyledList>
          <ProjectListItem heading={true}>Links</ProjectListItem>
          <ProjectListItem link={"https://the-wild-oasis-web-black.vercel.app"}>
            Live
          </ProjectListItem>
          <ProjectListItem
            link={"https://github.com/AleksandarSarbajic/the-wild-oasis-web"}
          >
            GitHub
          </ProjectListItem>
        </StyledList>
      </ProjectListContainer>
      <StyledProjectImage
        src="WebWildOasisLanding.webp"
        alt="Screenshot of the WebWildOasis page"
      />

      <StyledProjectHeading $small $margin>
        Project Purpose and Goal
      </StyledProjectHeading>
      <StyledSubHeading>
        This project included the following 5 phases and iterations of the site.
        Phase 1 is simply the cabins page where visitors can see all the info
        about a specific cabin, sort the cabins. Phase 2 is implemented log in
        with NextAuth and creating a profile page with home, reservations and
        guest profile where user can edit his profile. Phase 3 is all about
        creating a reservation. When user visits one of the cabins first, he
        needs to be logged in so he can create a reservation. User can select
        how many days he wants to stay and see if some days are already
        reserved, how many guests and should breakfast be included. Phase 4 is
        enabling users to see his reservations and edit or delete them. And the
        last phase 5 is about enabling stripe hosted checkout page for paying
        the reservation.
      </StyledSubHeading>
      <StyledSubHeading $space>
        The most effective approach I found to implement these 5 phases is to
        create a cabins page, and after that to create log in logic with
        NextAuth and profile page. Afterwards create seperate cabins where user
        can create a reservation and see his reservations. And when everything
        was working to enable paying with stripe.
      </StyledSubHeading>
      <StyledProjectBox>
        <StyledStack>
          <StyledStackItem $blue>
            <SiReact /> React
          </StyledStackItem>
          <StyledStackItem $black>
            <SiNextdotjs /> NextJS
          </StyledStackItem>
          <StyledStackItem $blue>
            <SiTailwindcss /> TailWindCSS
          </StyledStackItem>
          <StyledStackItem $red>
            <SiAxios />
            Axios
          </StyledStackItem>
          <StyledStackItem $green>
            <SiStripe />
            Stripe
          </StyledStackItem>
          <StyledStackItem $green>
            <SiSupabase /> Supabase
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
            I wanted to use NextJs so i can practice my backend skills with new
            technologies that i learned. Supabase was chosen because of the
            ability how easy it to connect to it and to add data that we need by
            creating tables.
          </StyledSubHeading>

          <StyledSubHeading $big $space>
            I chose to do the data mutations for deleting the reservations with
            useOptimistic hook from React. For styling the application I used
            TailWindCSS because it&apos;s very easy to use and it&apos;s very
            fast to style the application and want to practice my tailwind
            skills. And for the paying the reservation I chose Stripe. Vercel is
            also an obvious choice for deployment because of its speed and
            reliability for NextJS projects.
          </StyledSubHeading>
        </div>
      </StyledProjectBox>
      <StyledImageBox>
        <StyledBoxImage
          src="WebWildOasisCabins.webp"
          alt="Image of cabins on page the TheWildOasisWeb"
        />
        <StyledBoxImage
          src="WebWildOasisReservations.webp"
          alt="Image of reservations on page the WildOasisWeb"
          delay={true}
        />
        <StyledBoxImage
          src="WebWildOasisCabin.webp"
          alt="Image of single cain on the WildOasisWeb"
        />
        <StyledBoxImage
          src="WebWildOasisAbout.webp"
          alt="Image of about page on the WildOasisWeb"
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
            the most difficult area was the using the stripe for the first time
            with NextJS. I had to learn how to use the stripe and how to connect
            it to the NextJS application. The most difficult part was to enable
            a hosted checkout page for the first time.
          </StyledSubHeading>

          <StyledSubHeading $big $space>
            As well for the application the be the fastest as possible I was
            making components as reusable as possible and utilized props for as
            many components.
          </StyledSubHeading>
        </div>
      </StyledProjectBox>

      <StyledProjectImage
        src="WebWildOasisStripe.webp"
        alt="Image of stripe checkout on the WildOasisWeb"
      />

      <StyledProjectHeading $small $margin>
        Lessons Learned
      </StyledProjectHeading>
      <StyledSubHeading>
        I could spend all day describing the lessons that I learned while
        working on this project, but the most important ones involved in my
        newfound understanding of NextJS, Stripe, backend logic and
        useOptimistic hook. As my third large project full stack project using
        NextJS, I learned a lot about NextJS hydration and how to use it. How to
        create server side rendering with combination with client side rendering
        and how to use the NextAuth for log in. Stripe checkout was also a great
        experience for me because I learned how to create a hosted checkout page
        and how to connect it to the NextJS application.
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
      </ProjectBox>
      <Contact />
    </>
  );
}

export default WildOasisWeb;
