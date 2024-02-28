import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Description from "./Components/Description";

const Navigates = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home/description" />}></Route>
        <Route path="/home" element={<App></App>}>
          <Route path="description" Component={Description}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigates;
