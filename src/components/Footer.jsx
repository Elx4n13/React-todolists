import React from "react";
import "../styles/Footer.scss";
const Footer = ({ todos, sumOfComp, allDelete }) => {
  const handleDeleteAll = () => {
    allDelete();
  };
  return (
    <div className="footer">
      <div className="left">
        <p className="sumOfTask">Umumi:{todos.length}</p>
        <p className="sumOfComp">Hazirdir: {sumOfComp(todos)}</p>
      </div>
      <div className="right">
        <p onClick={handleDeleteAll}>Hamisin sil</p>
      </div>
    </div>
  );
};

export default Footer;
