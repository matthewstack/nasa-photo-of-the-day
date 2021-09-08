import React, { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from "./Constants/index";
import Photo from "./Photo/Photo";
console.log(BASE_URL);
console.log(API_KEY);

function App() {
  const [photo, setPhoto] = useState({});
  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        setPhoto(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return <div className="App">{<Photo photo={photo} />}</div>;
}

export default App;
// https://api.nasa.gov/planetary/apod?api_key=ZxgxzvFZ3aUoClwgoRdsXyhKm4JryUy1SpcmesVk
