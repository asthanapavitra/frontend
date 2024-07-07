import React from "react";

function Card({ imgSrc, title, text }) {
  return (
    <div className="card2 animate__animated animate__zoomIn">
      <img src={imgSrc} className="card-img-top" alt="..." />
      <div className="card2-body">
        <h5 className="card2-title">{title}</h5>
        <p className="card2-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;
