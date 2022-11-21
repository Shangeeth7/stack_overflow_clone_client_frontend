import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import InboxIcon from "@mui/icons-material/Inbox";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import LogoutIcon from "@mui/icons-material/Logout";
function SecondHeader2() {
  const user = useSelector(selectUser);

  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <a href="/">
            <img
              className="stack-overflow-logo"
              src="https://www.stickerni.tn/wp-content/uploads/2021/03/may-stack-overflow-be-with-you.png"
              alt="logo"
            ></img>
          </a>
          <h3>Products</h3>
        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <SearchIcon />
            <input type="text" placeholder="Search ... " />
          </div>
        </div>
      </div>
    </header>
  );
}

export default SecondHeader2;
