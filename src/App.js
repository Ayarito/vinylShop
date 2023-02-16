import React from "react";
import "./App.css";
import FirstSection from "./components/FirstSection/FirstSection";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import VinylStore from "./components/VinylStore/VinylStore";


function App() {
  return (
    <>
      <Header />
      <FirstSection />
      <Slider />
      <VinylStore />
    </>
  );
}

export default App;
