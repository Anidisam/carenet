import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Download from "./components/Download";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import OurProduct from "./components/OurProduct";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Mission />
              <Download />
              <Footer />
            </>
          }
        />

        {/* About Us Page */}
        <Route
          path="/about-us"
          element={
            <>
              <Navbar />
              <AboutUs />
              <Footer />
            </>
          }
        />

        {/* Our Product Page */}
        <Route
          path="/our-product"
          element={
            <>
              <Navbar />
              <OurProduct />
              <Footer />
            </>
          }
        />

          {/* Contact us page*/}
        <Route
          path="/contact-us"
          element={
            <>
              <Navbar />
              <ContactUs />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
