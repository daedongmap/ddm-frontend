import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/mainPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
        <Route path="/home" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
