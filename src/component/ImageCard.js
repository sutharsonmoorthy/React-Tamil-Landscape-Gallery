import React from "react";

function ImageCard(props) {
  return (
    <div className="image-card">
      <img src={props.url} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default ImageCard;

