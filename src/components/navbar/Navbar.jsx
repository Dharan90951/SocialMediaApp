import { Link } from "react-router-dom";
import "./navbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import NotificationsComponent from "../notifications/Notifications";
import MessagesComponent from "../messages/Messages";

export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="navbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends, posts or videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <Link to="/" className="navbarLink">Homepage</Link>
          <Link to="/profile" className="navbarLink">Timeline</Link>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <Person />
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconItem" onClick={() => setShowMessages(!showMessages)}>
            <Chat />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem" onClick={() => setShowNotifications(!showNotifications)}>
            <Notifications />
            <span className="navbarIconBadge">1</span>
          </div>
          <MessagesComponent isOpen={showMessages} onClose={() => setShowMessages(false)} />
          <NotificationsComponent isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
        </div>
        <Link to="/profile">
          <img
            src="/assets/person/1.jpeg"
            alt="Profile"
            className="navbarImg"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/src/assets/default-avatar.svg";
            }}
          />
        </Link>
      </div>
    </div>
  );
}