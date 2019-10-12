import React from "react";

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

const Footer = () => (
    <div style={style}>
        <p><a href="https://github.com/WhitnyNicole/job-search-react-redux">Github Frontend Repo</a></p>
          <p><a href="https://github.com/WhitnyNicole/job-search">Github Backend Repo</a></p>
      </div>
);

export default Footer;