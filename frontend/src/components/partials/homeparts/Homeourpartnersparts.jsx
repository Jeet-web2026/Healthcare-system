import Slick from "../Slick";

const Homeourpartnersparts = () => {
  const SlickData = [
    {
      id: 1,
      icon: <i className="ri-stethoscope-line"></i>,
      title: "Radiology",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt consectetur amet asperiores harum illo dicta voluptatum cumque eveniet soluta consequuntur repellat, maxime nihil fugiat.",
    },
    {
      id: 2,
      icon: <i className="ri-stethoscope-line"></i>,
      title: "Radiology",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt consectetur amet asperiores harum illo dicta voluptatum cumque eveniet soluta consequuntur repellat, maxime nihil fugiat.",
    },
    {
      id: 3,
      icon: <i className="ri-stethoscope-line"></i>,
      title: "Radiology",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt consectetur amet asperiores harum illo dicta voluptatum cumque eveniet soluta consequuntur repellat, maxime nihil fugiat.",
    },
    {
      id: 4,
      icon: <i className="ri-stethoscope-line"></i>,
      title: "Radiology",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt consectetur amet asperiores harum illo dicta voluptatum cumque eveniet soluta consequuntur repellat, maxime nihil fugiat.",
    },
  ];
  return (
    <section className="pt-4 pb-12 px-4 lg:px-0">
      <Slick
        baseclass="mt-8"
        dots={false}
        scroll={1}
        show={3}
        cardclass={`bg-blue-50 p-5 rounded-lg shadow-xs border border-blue-200 text-blue-900 flex flex-col gap-5`}
        carddata={SlickData}
        autoplay={true}
      />
    </section>
  );
};

export default Homeourpartnersparts;
