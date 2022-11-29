import React from "react";

const Ads = [
  {
    url: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6a6N6vyk_I8goH0KsflNyLC6dZUqqUuylrA&usqp=CAU",
    companyName: "Advertisment",
    id: 1,
  },
  {
    url: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6a6N6vyk_I8goH0KsflNyLC6dZUqqUuylrA&usqp=CAU",
    companyName: "Advertisment",
    id: 2,
  },
  {
    url: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6a6N6vyk_I8goH0KsflNyLC6dZUqqUuylrA&usqp=CAU",
    companyName: "Advertisment",
    id: 3,
  },
  {
    url: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6a6N6vyk_I8goH0KsflNyLC6dZUqqUuylrA&usqp=CAU",
    companyName: "Advertisment",
    id: 4,
  },
];

function AdsSection() {
  return (
    <div className="p-5 hidden md:flex flex-[2]">
      <div className="grid grid-cols-1 gap-10">
        {Ads.map((ad) => {
          return (
            <button className="relative" key={ad.id}>
              <img
                src={ad.image}
                alt=""
                className="h-[100px] w-[300px] object-cover"
              />
              <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
                <p className="font-bold bg-white p-2">{ad.companyName}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default AdsSection;
