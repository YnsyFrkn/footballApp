import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPages from "../pages/LoginPages";
import TeamDetails from "../pages/TeamDetails";
import LeagueStandings from "../pages/LeagueStandings";
import LayoutPages from "../pages/LayoutPages";

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<LoginPages />} />
      {/* Takım detayları için route ekle */}
      <Route path="/team/:teamName" element={<TeamDetails />} />
      <Route path="/league/:leagueId" element={<LeagueStandings />}></Route>
      <Route path="layout/:leagueId" element={<LayoutPages />}></Route>
    </Routes>
  );
}

export default RouterConfig;
