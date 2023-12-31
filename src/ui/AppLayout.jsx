import { Outlet } from "react-router-dom";
import styled from "styled-components";
import MainNav from "./MainNav";
import Footer from "./Footer";

const Main = styled.main``;

const Container = styled.div`
  max-width: 135rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

function AppLayout() {
  return (
    <>
      <MainNav />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default AppLayout;
