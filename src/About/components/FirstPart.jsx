import React from "react";
import "animate.css";

function FirstPart() {
  return (
    <div className="firstpart animate__animated animate__fadeInUp">
      <div className="first">
        <button type="button" className="btn btn-outline-primary">
          Mission
        </button>
      </div>
      <div className="two">
        <h1>Empowering Education through open-source innovation</h1>
        <p>
          We believe that everyone has something valuable to share and something
          new to learn. Our vision is to create a vibrant community where
          knowledge flows freely, skills are exchanged, and personal growth is
          encouraged. The goal is to create a platform that fosters a community
          of learning and sharing. Users can both teach and learn various
          skills, ranging from cooking and gardening to coding and photography.
          Our mission is to transform the edtech landscape with a pioneering
          open-source digital education infrastructure, empowering educators to
          deliver unparalleled online learning experiences. Our mission is to
          bridge the gap between learners and experts by providing a
          centralized, easy-to-use platform where individuals can offer and sign
          up for local skill-sharing sessions.
        </p>
      </div>
    </div>
  );
}

export default FirstPart;
