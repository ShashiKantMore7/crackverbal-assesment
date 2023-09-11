import React, { useState, createContext } from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonial/Testimonial";
import Subscription from "./components/Subscription/Subscription";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
import Feedback from "./components/Feedback/Feedback";
import Video from "./components/Video/Video";
import Career from "./components/Career/Career";
import NavbarMobileView from "./components/Navbar/NavbarMobileView";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const handleChangeTeam = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTeam }}>
      <Navbar />
      <NavbarMobileView theme={theme} handleChangeTeam={handleChangeTeam} />
      <Home theme={theme} handleChangeTeam={handleChangeTeam} />
      <div className="main-theme-compo" id={theme}>
        <About />
        <Service />
        <Career />
        <Video />
        <Team />
        <Testimonial />
        <Feedback />
        <Contact />
      </div>

      <Subscription />
      <Footer />
      <ScrollToTop
        color="white"
        smooth
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "black" }}
      />
    </ThemeContext.Provider>
  );
};

export default App;
