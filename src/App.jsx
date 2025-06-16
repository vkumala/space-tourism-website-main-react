import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";
import Header from "./components/Header";

function MyErrorPage({ error }) {
  return (
    <div style={{ padding: "2rem", color: "red" }}>
      <h1>Oops! Something went wrong.</h1>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <MyErrorPage />,
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
