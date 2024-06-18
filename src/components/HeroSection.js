import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className=" w-screen h-screen  bg-[url('/images/Rectangle108.png')] bg-cover bg-center p-[2rem]">
      <Navbar />
      <div className="w-full mt-[4rem] flex justify-center flex-col md:flex-row gap-[1rem]">
        <div className="max-w-md mx-auto bg-transparent rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                <h1 className="text-4xl text-white ">
                  HARBOUR LIGHTS DE{" "}
                  <span className="text-sky-400 text-4xl">GRESOGONO</span>
                </h1>
              </div>
              <p className="font-bold mt-4 text-lg leading-tight hover:underline">
                1,2 & 3 Bedrooms seaside Apartments <br /> in Dubai Martime City{" "}
              </p>
              <p className="mt-6 text-white border-l-sky-400 border-l-2 bg-slate-800 p-1 w-fit">
                Rental return of UPTO 11%**
              </p>
              <p className="mt-3 text-white border-l-sky-400 border-l-2 bg-gray-800 p-1 w-fit">
                Capital Appreciation of UPTO 32%**
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto  bg-transparent rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
          <div className="md:flex  max-w-sm bg-[url('/images/Rectangle11.png')] bg-no-repeat bg-cover items-center">
            <div className="p-10 w-full">
              <div className="uppercase tracking-wide text-sm  font-semibold">
                PRICE STARTS FROM
              </div>
              <h2 className=" block mt-1 text-4xl leading-tight font-medium  hover:underline">
                $ 425,000
              </h2>
              <p className="mt-2 text-white text-2xl">AED 1.3 Million</p>

              <button className="bg-blue-500 mt-5 w-full h-12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                GET A PRESENTATION
              </button>
            </div>
          </div>
          <div className="md:flex  max-w-sm bg-[url('/images/Rectangle12.png')] bg-no-repeat bg-cover">
            <div className="p-2 text-slate-300">
              {" "}
              Get an Experts Presentation of Real Estate in Dubai for life and
              investment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
