import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import M from "materialize-css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

AOS.init({
  once: true,
});

document.addEventListener("DOMContentLoaded", function () {
  M.Parallax.init(document.querySelectorAll(".parallax"), {});
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
