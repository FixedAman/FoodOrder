import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HeroSection from "./components/HeroSection";
import FoodOrder from "./components/FoodOrder";
import Contact from "./components/Contact";
import AppLayout from "./components/layout/AppLayout";
import ErrorPage from "./pages/Error";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "hero",
          element: <HeroSection />,
        },
        {
          path: "food",
          element: <FoodOrder />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
