import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SignUp from "./SignUp";
import Staff from "./Staff";

function Router() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Router;
