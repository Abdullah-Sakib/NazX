import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { TbHealthRecognition } from "react-icons/tb";
import { MdDisplaySettings } from "react-icons/md";
import { GrGamepad } from "react-icons/gr";
import { FaCube } from "react-icons/fa";

const IndustriesWeServe = () => {
  return (
    <section className="pb-16 mb-10 text-gray-600 body-font">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        {" "}
        Industries We Serve
      </h2>
      <div className="bg-gray-100">
        <div className="container grid gap-y-10 lg:gap-y-28 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-auto px-36 py-14">
          <div className=" flex justify-end items-center flex-col hover:scale-110 duration-300">
            <BsFillRocketTakeoffFill className="text-4xl " />
            <span className="text-2xl font-semibold mt-4">Startup</span>
          </div>
          <div className=" flex justify-end items-center flex-col  hover:scale-110 duration-300">
            <TbHealthRecognition className="text-4xl" />
            <span className="text-2xl font-semibold mt-4">Healthcare</span>
          </div>
          <div className=" flex justify-end items-center flex-col  hover:scale-110 duration-300">
            <MdDisplaySettings className="text-4xl" />
            <span className="text-2xl font-semibold mt-4">Software</span>
          </div>
          <div className=" flex justify-end items-center flex-col  hover:scale-110 duration-300">
            <GrGamepad className="text-4xl" />
            <span className="text-2xl font-semibold mt-4">Game</span>
          </div>
          <div className=" flex justify-end items-center flex-col  hover:scale-110 duration-300">
            <FaCube className="text-4xl" />
            <span className="text-2xl font-semibold mt-4">3D</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
