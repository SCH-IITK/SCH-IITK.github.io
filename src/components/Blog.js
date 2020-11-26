import Markdown from "./Markdown";
import termsFrPath from "../content/sample.md";
import ReactMarkdown from "react-markdown";
import React, { useState, useEffect } from "react";

function Blog() {
  const [term, setTerm] = useState("");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetch(termsFrPath)
      .then((response) => response.text())
      .then((text) => {
        this.setTerm(text);
      });
  });
  return <div></div>;
}

export default Blog;
