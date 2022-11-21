import React from "react";
import "../StackOverflow/css/index.css";

import MainQuestion from "./mainQuestion";
import SideBar from "../StackOverflow/sideBar";

function Index() {
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <SideBar />
        <MainQuestion />
      </div>
    </div>
  );
}

export default Index;
