import React from "react";
import "./css/main.css";
import AllQuestions from "./allQuestions";
import { FilterList } from "@mui/icons-material";

function Main({ questions }) {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>

          <a href="/add-question">Add Question</a>
        </div>
        <div className="main-desc">
          <p> {questions && questions.length} Questions</p>
          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
                <a href="/home">Newest</a>
              </div>
              <div className="main-tab">
                <a href="/home">Active</a>
              </div>
              <div className="main-tab">
                <a href="/home">More</a>
              </div>
            </div>
            <div className="main-filter-item">
              <FilterList />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="questions">
          {questions.map((_q, index) => (
            <div key={index} className="question">
              <AllQuestions questions={_q} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
