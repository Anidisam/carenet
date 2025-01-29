import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Mission from "./components/Mission";
// import Testimonials from "./components/Testimonials";

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Mission />
    {/* <Testimonials /> */}
    </>
  )
}

export default App
