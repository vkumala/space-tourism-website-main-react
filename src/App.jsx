import { Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";

function MyErrorPage({ error }) {
  return (
    <div style={{ padding: "2rem", color: "red" }}>
      <h1>Oops! Something went wrong.</h1>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="crew" element={<CrewPage />} />
        <Route path="destination" element={<DestinationPage />} />
        <Route path="technology" element={<TechnologyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
