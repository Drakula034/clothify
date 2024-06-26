import React from "react";
import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";

function MenuItem({ title, imageUrl, size, linkUrl }) {
  let navigate = useNavigate();
  return (
    <div className={`menu-item ${size}`} onClick={() => navigate(linkUrl)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="title">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
