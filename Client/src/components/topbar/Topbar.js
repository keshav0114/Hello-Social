import React, { useContext } from "react";
import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // const logoutHandler = () => {
  // localStorage.removeItem(user);
  //   console.log("clicked");
  // };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">HelloSocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="search for friends,posts or videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItems">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <Chat />
            <span className="topbarIconBadge">2 </span>
          </div>
          <div className="topbarIconItems">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.reload();
          }}
          className="logoutbtn"
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default Topbar;
