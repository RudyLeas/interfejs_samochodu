import React from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import ContactsMini from "../components/ContactsMini";
import ButtonsMini from "../components/ButtonsMini";

import "../index.css"; // Zaimportuj plik CSS dla komponentu 
import map from "../assets/map_test.png";


const HomeScreen = () => {
  

  return (
    <div className="home_screen">
      <Navbar id={0} />
      <Topbar />
      <div className="tiles">
        <div className="mini_map">
          <img src={map} alt="mini_map" className="map_test" />
        </div>
        <div className="radio_mini"></div>
        <ContactsMini />
       <ButtonsMini/>
      </div>
    </div>
  );
};

export default HomeScreen;
