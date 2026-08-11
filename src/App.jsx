/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: Core app page
==========================================================*/
import { Routes, Route, HashRouter, Link } from "react-router-dom";
//======Components===========================
import ContextProviderList from "./ContextProviderList";
//======Pages===========================
import ProjectListPage from "./components/projects-homePage/ProjectListPage";
import AboutPage from "./components/aboutPage/AboutPage";
import PageNotFound from "./components/errorPage/PageNotFound";

import P_ProjectName from "./components/project-page/P_WorldTapestry";
import P_WorldTapestry from "./components/project-page/P_WorldTapestry";
//======================================

const App = () => (
  <>
  <ContextProviderList>
  <HashRouter>
    <Routes>
      <Route path="/" element={<ProjectListPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/*" element={<PageNotFound/>}/>

      <Route path="worlds-tapestry" element={<P_WorldTapestry/>}/>
    </Routes>
  </HashRouter>
  </ContextProviderList>
  </>
)

export default App