import React from "react";

function ImageCard(props) {
  const image = props.image;

  return (
    <button onClick={ () => props.imageClicked(image) }>
      <img alt={image.alt} src={image.source} className="image-card" />
    </button>
  );
}

export default ImageCard;