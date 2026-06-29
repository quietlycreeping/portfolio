/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: Core app page
==========================================================*/
import { Routes, Route, HashRouter, Link } from "react-router-dom";
//======Pages===========================
import HomePage from "./components/HomePage";
import AboutPage from "./components/aboutPage/AboutPage";
//======================================

const App = () => (
  <>
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
    </Routes>
  </HashRouter>
  </>
)

export default App