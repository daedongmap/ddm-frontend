import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/loginPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<h1>Hello World</h1>} /> */}
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
