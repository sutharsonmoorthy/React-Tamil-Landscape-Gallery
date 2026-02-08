import React, { Fragment } from "react";
import ImageCard from "./ImageCard";
import images from "../data/images";

function Gallery({ onBack }) {
  return (
    <Fragment>
      <div className="back-btn-container">
        <button className="back-btn" onClick={onBack}>
          Back to Home
        </button>
      </div>

      <h1 className="gallery-title">Tamil Nadu</h1>

      <div className="gallery-container">
        {images.map(function (image) {
          return (
            <ImageCard
              key={image.id}
              url={image.url}
              title={image.title}
              description={image.description}
            />
          );
        })}
      </div>
    </Fragment>
  );
}

export default Gallery;