import React from "react";
import Button from "../Button";

const Homeupdatesparts = () => {
  return (
    <section className="py-20 bg-blue-900 rounded-xl px-5 text-white">
      <div className="flex lg:flex-row flex-col items-center justify-between">
        <div className="flex flex-col gap-4 w-2/3">
          <p className="font-medium text-xl">About Our Project</p>
          <h2 className="text-4xl font-semibold">
            Health updates you need to know
          </h2>
          <p className="text-base mt-4">
            We warmly welcome every patient and are committed to providing
            attentive care, ensuring their entire visit is smooth, positive, and
            as comfortable as possible from start to finish.
          </p>
        </div>
        <Button
          text="Read more"
          transform={true}
          textclass={`border border-white px-8 hover:border-blue-900 duration-300 ease-in-out transition-all hover:bg-white hover:text-blue-900`}
          icon={<i className="ri-arrow-right-long-line"></i>}
        />
      </div>
      <div className="flex gap-4 items-center mt-4">
        <button className="cursor-pointer hover:underline transition-all ease-in-out duration-300 hover:text-gray-300">
          All
        </button>
        <button className="cursor-pointer hover:underline transition-all ease-in-out duration-300 hover:text-gray-300">
          Projects
        </button>
        <button className="cursor-pointer hover:underline transition-all ease-in-out duration-300 hover:text-gray-300">
          Latest upgrades
        </button>
      </div>
    </section>
  );
};

export default Homeupdatesparts;
