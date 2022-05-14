import React from "react";
import "./Nav.css";
import Helplogo from "../Assets/help.png"
import Flaglogo from "../Assets/flag.png"
import Acclogo from "../Assets/acc.png"
import Menulogo from "../Assets/menu.png"
function Nav() {
  return (
    <div className="Nav">
      <div className="NavLogo">
        <h2 className="Logo">LOGO</h2>
      </div>
      <div className="Navright">
        <div className="helpBtn">
            <img src={Helplogo} alt="" className="helpLogo" />
            <h3 className="helpTitle">Help</h3>
        </div>
        <div className="conutryBtn">    
            <img src={Flaglogo} alt="" className="flagLogo" />
            <h3 className="helpTitle">Deutsch</h3>
            <span> | </span>
            <h3 className="helpTitle">EUR</h3>
        </div>
        <div className="accountBtn">   
        <div className="acclogoBack">
            <img src={Acclogo} alt="" className="Acclogo" />
            </div>

            <img src={Menulogo} alt="" className="Menulogo" />

        </div>
      </div>
    </div>
  );
}

export default Nav;
