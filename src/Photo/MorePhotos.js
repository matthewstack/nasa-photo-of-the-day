import React from "react";

const MorePhotos = (props) => {
  const { morePhotos } = props;
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="py-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Other Photos
        </h1>
        <p className="mt-2 max-w-3xl mx-auto text-base text-gray-500">
          Check out these awesome space photography photos
        </p>
      </div>
      <section aria-labelledby="products-heading" className="my-2">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {morePhotos.map((photo) => (
            <a key={photo.id} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                <img
                  src={photo.url}
                  className="w-full h-60 object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{photo.title}</h3>
              </div>
              <h4 className="mt-1 text-sm italic text-gray-500">
                {photo.date}
              </h4>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MorePhotos;
