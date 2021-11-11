import React from "react";

const Photo = (props) => {
  const { photo } = props;
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="relative">
        <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
          <img
            src={photo.url}
            className="h-full w-full object-center object-cover lg:h-full lg:w-full"
          />
        </div>

        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="lg:col-start-2">
            <h2 id="features-heading" className="font-medium text-gray-500">
              {photo.date}
            </h2>
            <p className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">
              {photo.title}
            </p>
            <p className="mt-4 text-gray-500">{photo.explanation}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Photo;
