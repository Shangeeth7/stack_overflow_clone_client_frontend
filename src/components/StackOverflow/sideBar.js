import React from "react";
import "./css/sidebar.css";
import { Public, Stars, Work } from "@mui/icons-material";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <a href="/home">Home</a>

            {/* <a href="/home">Home</a> */}
          </div>
          <div className="sidebar-option">
            <p>PUBLIC</p>
            <div className="link">
              <div className="link-tag">
                <Public />
                <a href="/home">Question</a>

                {/* <a href="/home">Question</a> */}
              </div>

              <div className="tags">
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>COLLECTIVES</p>
            <div className="link">
              <div className="link-tag">
                <Stars />
                <a href="/home">Explore Collectives</a>

                {/* <a href="/home">Explore Collectives</a> */}
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>FIND A JOB</p>
            <div className="link">
              <a
                style={{
                  margin: "10px 20px",
                }}
                to="/home"
              >
                Jobs
              </a>
              {/* <a
              style={{
                margin: "10px 20px",
              }}
              href="/home"
            >
              Jobs
            </a> */}
              {/* <a
              style={{
                marginLeft: "20px",
              }}
              href="/home"
            >
              Companies
            </a> */}
              <a
                style={{
                  marginLeft: "20px",
                }}
                to="/home"
              >
                Companies
              </a>
            </div>
          </div>
          <div className="sidebar-option">
            <p>TEAMS</p>
            <div className="link-tag">
              <Work />
              <a href="/home">Companies</a>
              {/* <a href="/home">Companies</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
