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
//======================================

const App = () => (
  <>
  <HashRouter>
    <Routes>
      <Route path="/" element={<ProjectListPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/*" element={<PageNotFound/>}/>

      <Route path="worlds-tapestry" element={<P_WorldTapestry/>}/>
    </Routes>
  </HashRouter>
  </>
)

export default App