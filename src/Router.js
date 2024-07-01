import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/loginPage";
import MainPage from "./pages/main/mainPage";
import ClubDetailPage from "./pages/club-detail/clubDetailPage";
import ClubNoticePage from "./pages/notice/noticePage";
import NoticeDetail from "./pages/notice/noticeDetail.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/home/:clubName" element={<ClubDetailPage />} />
        <Route path="/notice/:clubName" element={<ClubNoticePage />} />
        <Route path="/notice/:clubName/:id" element={<NoticeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
