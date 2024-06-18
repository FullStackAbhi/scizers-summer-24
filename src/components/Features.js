import React from "react";

const Features = () => {
  return (
    <div className="bg-[#F4F9FF]">
      <div className="max-w-md mx-auto  rounded-xl  overflow-hidden md:max-w-2xl">
        <div className="md:flex items-center justify-center flex">
          <div className="p-8 flex flex-col items-center justify-center">
            <div className="uppercase w-[182px] flex items-center justify-center flex-col tracking-wide">
              <p className=" text-[#00357B] text-4xl items-center flex ">
                harbour lights
              </p>
              <p className="text-sm text-[#00357B] font-light">de GRISOGONO</p>
              <p className="text-xs text-[#00357B] font-thin">GENEVE</p>
            </div>
            <div className="block uppercase tracking-wide text-[#00357B] font-semibold text-3xl mt-2">
              FEATURES & AMENITIES
            </div>

            <p className="mt-2 text-slate-500 flex items-center justify-center">
              Harbour Lights beautifully honours maritime voyages while
              embracing an opulent seafront lifestyle. Its maritime-inspired
              amenities provide an unmatched seaside experience, offering a life
              of tranquility and bliss.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="max-w-md mx-auto bg-[#F4F9FF] rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex flex-col items-center justify-center">
            <div className="md:shrink-0 flex items-center justify-center">
              <img
                className="h-auto w-auto object-cover md:h-full md:w-48 rounded"
                src="/images/Ellipse7.png"
                alt="Modern building architecture"
              ></img>
            </div>
            <div className="p-8 flex items-center justify-center text-[#00357B] font-semibold">
              Floating Pools
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-[#F4F9FF] rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex flex-col items-center justify-center">
            <div className="md:shrink-0 flex items-center justify-center">
              <img
                className="h-auto w-auto object-cover md:h-full md:w-48 rounded "
                src="/images/Ellipse71.png"
                alt="Modern building architecture"
              ></img>
            </div>
            <div className="p-8 flex items-center justify-center text-[#00357B] font-semibold">
              Spacious Cabins Like Rooms
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-[#F4F9FF] rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex flex-col items-center justify-center">
            <div className="md:shrink-0 flex items-center justify-center">
              <img
                className="h-auto w-auto object-cover md:h-full md:w-48 rounded"
                src="/images/Ellipse72.png"
                alt="Modern building architecture"
              ></img>
            </div>
            <div className="p-8 flex items-center justify-center text-[#00357B] font-semibold">
              Sea Facing Swimming Pools
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-[#F4F9FF] rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex flex-col items-center justify-center">
            <div className="md:shrink-0 flex items-center justify-center">
              <img
                className="h-auto w-auto object-cover md:h-full md:w-48 rounded"
                src="/images/Ellipse73.png"
                alt="Modern building architecture"
              ></img>
            </div>
            <div className="p-8 flex items-center justify-center text-[#00357B] font-semibold">
              Gymnasium & Fitness
            </div>
          </div>
        </div>
      </div>
      <div className=" text-[#686868] font-[poppins] flex items-cente justify-center sm:justify-end p-14">
        *T&Cs apply | ** Based on similar branded projects in the last 2 years.
        Source 1 | Source 2
      </div>
    </div>
  );
};

export default Features;
