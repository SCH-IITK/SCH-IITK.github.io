import Markdown from "./Markdown";
import termsFrPath from "../content/sample.md";
import ReactMarkdown from "react-markdown";
import React, { useState, useEffect } from "react";

function blog() {
  const [term, setTerm] = useState("");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const readmePath = require("./Readme.md");

    fetch(readmePath)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setTerm(marked(text));
      });
  });
  return <div></div>;
}

export default blog;
