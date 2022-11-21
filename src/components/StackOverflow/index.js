import React from "react";
import "./css/index.css";
import Main from "./main";
import SideBar from "./sideBar";
import axios from "axios";

function Index() {
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    async function getQuestion() {
      await axios
        .get("/api/question")
        .then((res) => {
          setQuestions(res.data.reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getQuestion();
  }, []);
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <SideBar />
        <Main questions={questions} />
      </div>
    </div>
  );
}

export default Index;
