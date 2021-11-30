import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import React, { useState, useEffect, useRef } from "react";
import maxa from "./images/maxa.png";
import aboutline from "./images/aboutline.svg";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import kotaclj from "./images/kotacljub.png";
import kotacpl from "./images/kotacpl.png";
import hospitalimg from "./images/hospitalapp.png";
import musicimg from "./images/musicapp.png";
import movieimg from "./images/movieapp.png";
import shoppingimg from "./images/shoppingapp.png";
import portfolioimg from "./images/portfolioapp.png";
import artworksimg from "./images/artworksapp.png";
import animationsimg from "./images/animationsapp.png";
import todoimg from "./images/todoapp.png";
import geo from "./images/geo.png";
import geo2 from "./images/min.png";
import trokut from "./images/1.png";
import trokut2 from "./images/trokut.png";
import trokut3 from "./images/3.png";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home trokut={trokut} geo={geo} />
      <About
        maxa={maxa}
        aboutline={aboutline}
        kotaclj={kotacpl}
        geo={geo}
        trokut={trokut}
      />
      <Skills id="myskills" geo={geo} />
      <Projects
        kotaclj={kotaclj}
        musicimg={musicimg}
        movieimg={movieimg}
        todoimg={todoimg}
        portfolioimg={portfolioimg}
        artworksimg={artworksimg}
        animationsimg={animationsimg}
        hospitalimg={hospitalimg}
        shoppingimg={shoppingimg}
        trokut={trokut}
      />
      <Contact kotaclj={kotacpl} geo={geo} />
    </div>
  );
}

export default App;
