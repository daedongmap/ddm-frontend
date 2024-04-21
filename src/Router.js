import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/mainPage";
import ClubDetailPage from "./pages/club-detail/clubDetailPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/home/:clubName" element={<ClubDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
