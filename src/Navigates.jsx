import React, { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";

const Description = lazy(() => import("./Components/Description"));
const Experience = lazy(() => import("./Components/Experience"));
const Skills = lazy(() => import("./Components/Skills"));
const Education = lazy(() => import("./Components/Education"));
const HireMe = React.lazy(() => import("./Components/HireMe"));

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
          <Route path="hire-me" Component={HireMe}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigates;
