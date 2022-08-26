import React from "react";
import Insta from "../assets/portfolio/Insta_views.png";
import Krauv from "../assets/portfolio/Krauv.png";
import Netflix from "../assets/portfolio/Netflix.png";
import Code from "../assets/portfolio/NFT.png";
import NFT from "../assets/portfolio/Restaurent.png";
import Restaurent from "../assets/portfolio/Code.png";
export default function Porfolio() {
  const porfolios = [
    {
      id: 1,
      src: Insta,
    },
    {
      id: 2,
      src: Krauv,
    },
    {
      id: 3,
      src: Netflix,
    },
    {
      id: 4,
      src: Code,
    },
    {
      id: 5,
      src: NFT,
    },
    {
      id: 6,
      src: Restaurent,
    },
  ];
  return (
    <>
      <div
        name="porfolio"
        className="/ bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="/ max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Porfolio
            </p>
            <p className="py-6">Checkout some of my work right here</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {porfolios.map((porfolios) => (
              <div
                key={porfolios.id}
                className="shadow-md shadow-gray-600 rounded-lg"
              >
                <img
                  src={porfolios.src}
                  className="rounded-md  duration-200 hover:scale-105 h-32 w-full"
                ></img>
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-4 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-4 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
