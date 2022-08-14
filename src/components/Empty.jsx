import React from "react";
import empty from "../images/image1.png";
import "../styles/Empty.scss";
const Empty = () => {
  return (
    <div className="empty">
      <img src={empty} alt="Tapshiriq yoxdur" />
    </div>
  );
};

export default Empty;
