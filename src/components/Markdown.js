import React from "react";
import ReactMarkdown from "react-markdown";
import RemarkMathPlugin from "remark-math";
import MathJax from 'react-mathjax';

const _mapProps = (props) => ({
  ...props,
  escapeHtml: false,
  plugins: [RemarkMathPlugin],
  renderers: {
    ...props.renderers,
    math: (props) => 
    <MathJax.Node formula={props.value} />,
    inlineMath: (props) =>
    <MathJax.Node inline formula={props.value} />
},
});

const Markdown = (props) => <MathJax.Provider input="tex"><ReactMarkdown {..._mapProps(props)} /> </MathJax.Provider>;

export default Markdown;
