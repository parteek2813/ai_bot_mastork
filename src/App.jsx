import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";
import MiddleContent from "./components/MiddleContent/MiddleContent";

function App() {
  return (
    <>
      <Navbar />
      <MainContent />
      <MiddleContent />
    </>
  );
}

export default App;
