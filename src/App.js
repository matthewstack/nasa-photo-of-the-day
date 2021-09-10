import React, { useState, useEffect, Fragment } from "react";

import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from "./Constants/index";
import Photo from "./Photo/Photo";
import MorePhotos from "./Photo/MorePhotos";
import { Popover } from "@headlessui/react";

const navigation = [
  { name: "About Us", href: "#" },
  { name: "Apply", href: "#" },
  { name: "Contact", href: "#" },
];

function App() {
  const [photo, setPhoto] = useState({});
  const [morePhotos, setMorePhotos] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        setPhoto(res.data);
      })
      .catch((err) => console.error(err));
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}&count=6`)
      .then((res) => {
        setMorePhotos(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <header>
        <Popover className="relative bg-white">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/1200px-NASA_Worm_logo.svg.png"
                  alt=""
                />
              </a>
            </div>

            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </Popover.Group>
          </div>
        </Popover>
      </header>

      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">NASA</span>
                    <span className="block text-indigo-200">
                      Picture of the day{" "}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Photo photo={photo} />
              </div>
            </div>
          </div>
          <MorePhotos morePhotos={morePhotos} />
        </div>
      </main>
      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2021 NASA All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
// https://api.nasa.gov/planetary/apod?api_key=ZxgxzvFZ3aUoClwgoRdsXyhKm4JryUy1SpcmesVk
