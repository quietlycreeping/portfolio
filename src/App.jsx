/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: Core app page
==========================================================*/
import { Routes, Route, HashRouter, Link } from "react-router-dom";
//======Pages===========================
import ProjectListPage from "./components/projects-homePage/ProjectListPage";
import AboutPage from "./components/aboutPage/AboutPage";
import PageNotFound from "./components/errorPage/PageNotFound";

import P_WorldTapestry from "./components/project-page/P_WorldTapestry";
import P_RxDash from "./components/project-page/P_RxDash";
import P_MysteryApp from "./components/project-page/P_MysteryApp";
import P_MyPortfolio from "./components/project-page/P_MyPortfolio";
//======================================

const App = () => (
  <>
  <HashRouter>
    <Routes>
      <Route path="/" element={<ProjectListPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/*" element={<PageNotFound/>}/>

      <Route path="worlds-tapestry" element={<P_WorldTapestry/>}/>
      <Route path="rx-dash" element={<P_RxDash/>}/>
      <Route path="mystery-app" element={<P_MysteryApp/>}/>
      <Route path="portfolio" element={<P_MyPortfolio/>}/>
    </Routes>
  </HashRouter>
  </>
)

export default App