import React from "react";

const Photo = (props) => {
  const { photo } = props;
  return (
    <div>
      <img src={photo.url}></img>;
    </div>
  );
};

export default Photo;
