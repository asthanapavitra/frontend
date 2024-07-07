import React from "react";

function SixthPart() {
  return (
    <div className="sixthpart">
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
    </div>
  );
}

function TeamMember() {
  return (
    <div className="cardd" style={{ width: "200px" }}>
      <img
        className="card-img-top"
        src="https://www.w3schools.com/bootstrap4/img_avatar1.png"
        alt="Card"
      />
      <div className="card-bodyy">
        <h4 className="card-titlee">John Doe</h4>
        <p className="card-textt">Some example text.</p>
        <a href="#" className="btn btn-primary">
          See Profile
        </a>
      </div>
    </div>
  );
}

export default SixthPart;
