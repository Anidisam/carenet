import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Testimonial from "./components/Testimonials";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Who from "./components/Who"
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Privacy from "./components/Privacy"
import Howitworks from "./components/Howitworks";
import Benefits from "./components/Benefits";
import Features from "./components/Features"

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
              {/* <Main/> */}
              <Mission />
              <Testimonial />
              <Download />
              <Footer />
            </>
          }
        />

        {/* Who Page */}
        <Route
          path="/who-we-are"
          element={
            <>
              <Navbar />
              <Who />
              <Howitworks />
              <Benefits />
              <Features />
              <Footer />
            </>
          }
        />

        {/* Our Product Page */}
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
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

        <Route
          path="/Privacy-policy"
          element={
            <>
              <Navbar />
              <Privacy />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
