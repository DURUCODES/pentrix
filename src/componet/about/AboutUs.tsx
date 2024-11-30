import abt6 from "./ab6.jpg";
import abt2 from "./ab2.jpg";
import abt3 from "./ab3.jpg";
import abt5 from "./ab5.jpg";
import { FaTowerCell } from "react-icons/fa6";
import { GiStairsGoal } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";

const AboutUs = () => {
  return (
    <div className="py-6 px-3">
      <h1 className="text-center text-[25px]">ABOUT US</h1>
      <div className="py-6 px-3 bg-gray-50 flex justify-between flex-col md:flex-row">
        <div className="flex flex-col items-center  gap-6 md:w-1/2">
          {/* First Section */}
          <div className="flex items-center space-x-3">
            <FaTowerCell className="text-[50px] mx-2 text-gray-700 hover:text-blue-500 transition duration-300" />
            <p className="text-[14px] md:text-[22px] text-gray-700">
              At Pentrix, we're passionate about empowering organizations to
              protect themselves against ever-evolving cyber threats.
            </p>
          </div>

          {/* Second Section */}
          <div className="flex items-center space-x-3">
            <GiStairsGoal className="text-[50px] mx-2 text-gray-700 hover:text-blue-500 transition duration-300" />
            <p className="text-[14px] md:text-[22px] text-gray-700">
              Our mission is to deliver comprehensive, tailored penetration
              testing services that help businesses fortify their digital
              security.
            </p>
          </div>

          {/* Third Section */}
          <div className="flex items-center space-x-3">
            <RiTeamLine className="text-[50px] mx-2 text-gray-700 hover:text-blue-500 transition duration-300" />
            <p className="text-[14px] md:text-[22px] text-gray-700">
              With a team of seasoned experts and a customer-centric approach,
              we're committed to setting the standard for penetration testing
              excellence.
            </p>
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white py-4 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src={abt6}
              alt="About Image 6"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-center text-lg text-gray-700">Proven Results</p>
          </div>

          <div className="bg-white py-4 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src={abt2}
              alt="About Image 2"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-center text-lg text-gray-700">Expert Team</p>
          </div>
          <div className="bg-white py-4 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src={abt3}
              alt="About Image 3"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-center text-lg text-gray-700">
              Innovative Solutions
            </p>
          </div>

          <div className="bg-white py-4 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src={abt5}
              alt="About Image 5"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-center text-lg text-gray-700">Client-Focused</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
