import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import RandomPage from "./pages/RandomPage";
import Layout from "./components/Layout/Layout";
import EducationPage from "./pages/EducationPage";
import FavoritePage from "./pages/FavoritePage";
import RelaxationPage from "./pages/RelaxationPage";
import SocialPage from "./pages/SocialPage";
import CharityPage from "./pages/CharityPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/random" element={<RandomPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/relaxation" element={<RelaxationPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/charity" element={<CharityPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Route>
    </Routes>
  );
};

export default App;
