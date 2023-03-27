import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";



export default function Topbar() {
  
    return (
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <img className="topbarLogo"
              src="https://www.mabl.com/hubfs/CICDBlog.png"
              alt="CI-CD Logo" />
            <span className="topbarHeading">CI-CD Management Dashboard</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">9</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">8</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            {/* <img src={user.picture} alt={user.name} className="topAvatar"/> */}
          </div>
        </div>
      </div>
    );
  
}