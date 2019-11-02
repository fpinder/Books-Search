import React from "react";
import "./style.css"
function Jumbotron({ children }) {
  return (
    <div
      style={{ textAlign: "center" }}
      className="col-lg jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
