import React, { useState, useEffect } from "react";
import { MathComponent } from "mathjax-react";
import content from "../content/2.md";
function Announcements() {
  const [blog, setBlog] = useState("");
  useEffect(() => {
    fetch(content)
      .then((response) => response.text())
      .then((text) => {
        setBlog(text);
        console.log(blog);
      });
  });
  return (
    <div>
      <MathComponent
        tex={String.raw`\int_0^1 x^2\ dx`}
      />
    </div>
  );
}

export default Announcements;
