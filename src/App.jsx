/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: Core app page
==========================================================*/
import { Routes, Route, HashRouter, Link } from "react-router-dom";
//======Pages===========================
import HomePage from "./components/HomePage";
//======================================

const App = () => (
  <>
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
  </HashRouter>
  </>
)

export default App