import React from "react";
import "./Topbar.css";

function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER; 

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">   
        <img className="logoImg"   src={`${PF}karostartup.png`} alt=""/>    
        <span className="logo">Karo Startup</span>
      </div>
      <div className="topbarRight">
        <span className="topbarLink">Home</span>
        <span className="topbarLink">About</span>
        <span className="topbarLink">Reward</span>
        <span className="topbarLink">Login</span>
      </div>
    </div>
  );
}

export default Topbar;
