import Slick from "../Slick";

const Homefeaturesparts = () => {
  const SlickData = [
    {
      id: 1,
      icon: <i className="ri-medicine-bottle-line"></i>,
      title: "Easily book your medical appointment anytime, anywhere.",
      description:
        "We warmly greet every patient and strive to make their experience positive and comfortable from start to finish.",
    },
    {
      id: 2,
      icon: <i className="ri-golf-ball-line"></i>,
      title: "Meet Your Doctor and Discuss Your Health Concerns in Detail",
      description:
        "We warmly greet every patient and strive to make their experience positive and comfortable from start to finish.",
    },
    {
      id: 3,
      icon: <i className="ri-syringe-line"></i>,
      title: "Receive a Personalized Health Plan Tailored to Your Needs",
      description:
        "We warmly greet every patient and strive to make their experience positive and comfortable from start to finish.",
    },
    {
      id: 4,
      icon: <i className="ri-stethoscope-line"></i>,
      title: "Continuous Support to Help You Maintain & Improve Health",
      description:
        "We warmly greet every patient and strive to make their experience positive and comfortable from start to finish.",
    },
  ];
  return (
    <section className="px-5 py-20 bg-blue-900 rounded-xl">
      <div className="flex lg:flex-row flex-col items-center text-white">
        <div className="flex flex-col gap-3 lg:w-190 w-full">
          <p className="capitalize font-medium text-xl">
            How We Work to Put Your Health First
          </p>
          <h2 className="text-4xl font-semibold">Featured news and insights</h2>
        </div>
        <p className="w-fit">
          Stay updated with the latest news from MediCross, along with important
          medical developments and healthcare trends from around the world. Nam
          porttitor ullamcorper lorem, ut venenatis lacus semper at. Ut
          venenatis lacus eget nisi sodales, eget suscipit quam sollicitudin.
        </p>
      </div>
        <Slick
          baseclassName="mt-18"
          dots={false}
          scroll={1}
          show={4}
          cardclassName={`bg-transparent px-6 py-14 rounded-xl shadow-sm border border-blue-700 text-white flex flex-col gap-5 hover:bg-white duration-300 ease-in-out hover:text-black transition-all cursor-pointer`}
          carddata={SlickData}
          autoplay={true}
        />
    </section>
  );
};

export default Homefeaturesparts;
