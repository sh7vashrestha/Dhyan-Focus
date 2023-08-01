import React from "react";
import NavBar from "./Components/NavBar";
import MainBody from "./Components/timer";
import Options from "./Components/Options";
import Settings from "./Components/Settings";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <Settings />
        <NavBar />
        <Options />
        <MainBody />
        <Footer />
      </div>
    </div>
  );
}

export default App;
