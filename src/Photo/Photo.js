import React from "react";
import PhotoDetails from "./PhotoDetails";
const Photo = (props) => {
  const { photo } = props;
  return (
    <div class="photoContainer">
      <img src={photo.url}></img>;
      <PhotoDetails photo={photo} />
    </div>
  );
};

export default Photo;
