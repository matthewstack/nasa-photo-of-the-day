import React from "react";

const PhotoDetails = (props) => {
  const { photo } = props;
  console.log(photo.explanation);
  return (
    <div>
      <h2>{photo.title}</h2>
      <p>{photo.date}</p>
      <p>{photo.explanation}</p>
    </div>
  );
};

export default PhotoDetails;
