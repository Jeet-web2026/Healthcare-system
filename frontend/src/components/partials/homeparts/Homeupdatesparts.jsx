import { useState } from "react";
import Button from "../Button";
import Card from "../Card";

const Homeupdatesparts = () => {
  const [activeTab, setActiveTab] = useState("all");
  const tabs = [
    { label: "All", value: "all" },
    { label: "Projects", value: "projects" },
    { label: "Latest upgrades", value: "upgrades" },
  ];
  return (
    <section className="lg:py-20 py-10 bg-blue-900 lg:rounded-xl px-5 text-white">
      <div className="flex lg:flex-row flex-col lg:items-center justify-between lg:gap-0 gap-6">
        <div className="flex flex-col gap-4 lg:w-2/3">
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
      <div className="mt-8 lg:mt-0 border-t border-gray-300 pt-3 lg:pt-0 lg:border-t-0">
        <div className="flex gap-4 items-center mt-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab.value)}
              className={`cursor-pointer hover:underline transition-all ease-in-out duration-300 hover:text-gray-300 ${
                activeTab === tab.value ? "underline" : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div>
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Homeupdatesparts;
