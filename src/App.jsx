import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { Toaster } from "react-hot-toast";
import AppLayout from "./ui/AppLayout";
import { DarkModeProvider } from "./context/DarkModeContext";
import Landingpage from "./pages/Landingpage";
import RedirectPage from "./pages/RedirectPage";
import WildOasis from "./pages/WildOasis";
import ErrorPage from "./ui/ErrorPage";
import TastyTrail from "./pages/TastyTrail";

// import WorldWise from "./pages/WorldWise";
import { IsInViewProvider } from "./context/IsInViewContext";
import UseEasterEgg from "./hooks/UseEasterEgg";
import NothingTodo from "./pages/NothingTodo";
import WorkoutNothing from "./pages/WorkoutNothing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Landingpage />,
      },
      {
        path: "/es1",
        element: <WildOasis />,
      },
      {
        path: "/es2",
        element: <TastyTrail />,
      },
      {
        path: "/es3",
        element: <NothingTodo />,
      },
      {
        path: "/es4",
        element: <WorkoutNothing />,
      },
    ],
  },
  {
    path: "/redirect",
    element: <RedirectPage />,
  },
]);

function App() {
  return (
    <>
      <DarkModeProvider>
        <UseEasterEgg />
        <IsInViewProvider>
          <GlobalStyles />
          <RouterProvider router={router} />
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 6000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(color-grey-700)",
              },
            }}
          />
        </IsInViewProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
