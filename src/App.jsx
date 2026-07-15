/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: Core app page
==========================================================*/
import { Routes, Route, HashRouter, Link } from "react-router-dom";
//======Components===========================
import ContextProviderList from "./ContextProviderList";
//======Pages===========================
import ProjectListPage from "./components/Project-HomePage/ProjectListPage";
import AboutPage from "./components/aboutPage/AboutPage";
import PageNotFound from "./components/errorPage/PageNotFound";
//======================================

const App = () => (
  <>
  <ContextProviderList>
  <HashRouter>
    <Routes>
      <Route path="/" element={<ProjectListPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/*" element={<PageNotFound/>}/>
    </Routes>
  </HashRouter>
  </ContextProviderList>
  </>
)

export default App