import React from "react";

function FrontPage({ onEnter }) {
  return (
    <div className="front-page">
      <h1>Landscapes of Tamilnadu</h1>
      <p>Explore the terrains of Tamilnadu</p>
      <button onClick={onEnter}>Enter Gallery</button>
    </div>
  );
}

export default FrontPage;