import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./question.css";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router';
import { TagsInput } from "react-tag-input-component";

import axios from "axios";
import { selectUser } from "../../features/userSlice";
import Header from "../header/header";

function Question() {
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [tags, setTags] = React.useState([]);

  const navigate = useNavigate();

  const handleQuill = (value) => {
    setBody(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title !== "" && body !== "") {
      setLoading(true);
      const bodyJSON = {
        title: title,
        body: body,
        tag: JSON.stringify(tags),
        user: user,
      };
      await axios
        .post("/api/question", bodyJSON)
        .then((res) => {
          // console.log(res.data);
          alert("Question added successfully");
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="add-question">
        <div className="add-question-container">
          <div className="head-title">
            <h1>Ask a public question</h1>
          </div>
          <div className="question-container">
            <div className="question-options">
              <div className="question-option">
                <div className="title">
                  <h3>Title</h3>
                  <small>Be specific</small>

                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Add question title"
                  />
                </div>
              </div>
              <div className="question-option">
                <div className="title">
                  <h3>Body</h3>
                  <small>Include all the information here ...</small>
                  <ReactQuill
                    value={body}
                    onChange={handleQuill}
                    className="react-quill"
                    theme="snow"
                  />
                </div>
              </div>
              <div className="question-option">
                <div className="title">
                  <h3>Tags</h3>
                  <small>Add up to 5 tags</small>
                  {/* <input
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              data-role="tagsinput"
              data-tag-trigger="Space"
              type="text"
              placeholder="e.g. (asp.net-mvc php react json)"
            /> */}

                  <TagsInput
                    value={tags}
                    onChange={setTags}
                    name="tags"
                    placeHolder="press enter to add new tag"
                  />

                  {/* <ChipsArray /> */}
                </div>
              </div>
            </div>
          </div>

          <button
            disabled={loading}
            type="submit"
            onClick={handleSubmit}
            className="button"
          >
            {loading ? "Adding Question.." : "Add your question"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
