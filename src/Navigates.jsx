import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Description from "./Components/Description";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";

const Navigates = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home/description" />}></Route>
        <Route path="/home" element={<App></App>}>
          <Route path="description" Component={Description}></Route>
          <Route path="education" Component={Education}></Route>
          <Route path="Experience" Component={Experience}></Route>
          <Route path="skills" Component={Skills}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigates;
