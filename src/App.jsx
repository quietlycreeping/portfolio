/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: Core app page
==========================================================*/
import { Routes, Route, HashRouter, Link } from "react-router-dom";
//======Pages===========================
import HomePage from "./components/homePage/HomePage"
import AboutPage from "./components/aboutPage/AboutPage";
import PageNotFound from "./components/errorPage/PageNotFound";
//======================================

const App = () => (
  <>
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  </HashRouter>
  </>
)

export default App