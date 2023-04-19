import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import FirstSection from "./components/FirstSection/FirstSection";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import VinylStore from "./components/VinylStore/VinylStore";
import NavBar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      {/* <Header /> */}
      <NavBar/>
      <FirstSection />
      <Slider />
      <VinylStore />
    </>
  );
}

export default App;
