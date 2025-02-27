import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/destination", element: <DestinationPage /> },
      { path: "/crew", element: <CrewPage /> },
      { path: "/technology", element: <TechnologyPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
