import React from "react";
import "./css/allQuestions.css";
import { Avatar } from "@mui/material";
import ReactHtmlParser from "react-html-parser";

function AllQuestions({ questions }) {
  let tags;
  questions?.tags[0] ? (tags = JSON.parse(questions?.tags[0])) : (tags = []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all-option">
              <p>{questions?.answerDetails?.length}</p>
              <span>Answers</span>
            </div>
            <div className="all-option">
              <small>0 views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <a href={`/question?q=${questions?._id}`}>{questions?.title}</a>
          <div
            style={{
              maxWidth: "90%",
            }}
          >
            <div>{ReactHtmlParser(truncate(questions?.body, 600))}</div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            {tags.map((_tag) => (
              <span className="question-tags">{_tag}</span>
            ))}
          </div>

          <div className="author">
            <small>{new Date(questions?.created_at).toLocaleString()}</small>
            <div className="auth-details">
              <Avatar src={questions?.user?.photo} />
              <p>
                {questions?.user?.displayName
                  ? questions?.user?.displayName
                  : String(questions?.user?.email).split("@")[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;
