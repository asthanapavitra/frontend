import React from "react";
import Card from "./Card";
import "animate.css";

function FourthPart() {
  return (
    <div className="fourthpart animate__animated animate__fadeInUp">
      <div className="rowmain">
        <div className="row1">
          <Card
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAe1js9iiR1hD0k7ccoqivmIsvkqqhGLmp0g&s"
            title="Card title"
            text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          />
          <Card
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAe1js9iiR1hD0k7ccoqivmIsvkqqhGLmp0g&s"
            title="Card title"
            text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          />
          <Card
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAe1js9iiR1hD0k7ccoqivmIsvkqqhGLmp0g&s"
            title="Card title"
            text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          />
        </div>
        <div className="row2">
          <Card
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAe1js9iiR1hD0k7ccoqivmIsvkqqhGLmp0g&s"
            title="Card title"
            text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          />
          <Card
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAe1js9iiR1hD0k7ccoqivmIsvkqqhGLmp0g&s"
            title="Card title"
            text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          />
          <Card
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAe1js9iiR1hD0k7ccoqivmIsvkqqhGLmp0g&s"
            title="Card title"
            text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          />
        </div>
      </div>
    </div>
  );
}

export default FourthPart;
