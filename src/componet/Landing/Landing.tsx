import LandingImg from "./landingpen.jpg";

const Landing = () => {
  return (
    <div className="relative">
      <div className="w-full md:h-[800px] h-[600px]">
        <img
          src={LandingImg}
          alt="Landing"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay with text and buttons */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="text-center text-white px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Welcome to <span className="text-blue-500">Pentrix</span>
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Pentrix is a cutting-edge penetration testing startup dedicated to
            helping businesses strengthen their cybersecurity defenses. Our team
            of expert penetration testers simulate real-world attacks to
            identify vulnerabilities, providing actionable insights to safeguard
            against threats.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white py-2 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

/* https://www.pinterest.com/pin/654429389635710960/ */
