import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SignUp from "./SignUp";
import Staff from "./Staff";
import Offers from "./Offers";
import Food from "./Food";

function Router() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/food" element={<Food />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Router;
