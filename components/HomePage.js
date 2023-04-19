import React, { useContext } from "react";
import { CustomContext } from "../pages/AppContext";

const HomePage = () => {
  const { setmenuOpen, menuOpen } = useContext(CustomContext);
  return (
    <div className="flex justify-center items-center min-h-screen relative">
      <div className="text-6xl text-black text-center max-w-[600px] z-50">
        <p
          className={`text-2xl mb-2 transition-[opacity transform] duration-300 ${menuOpen?"":"delay-300"} ${
            menuOpen ? "-translate-y-4 opacity-0" : ""
          }`}
        >
          Hey, My name is
        </p>
        <p
          className={`font-serif font-extrabold transition-[opacity transform] duration-300 ${menuOpen?"":"delay-300"} ${
            menuOpen ? "-translate-y-4 opacity-0" : ""
          }`}
        >
          {" "}
          Arun Patel
        </p>
        <p
          className={`text-2xl mt-2 transition-[opacity transform] duration-300 ${menuOpen?"":"delay-300"} ${
            menuOpen ? "-translate-y-4 opacity-0" : ""
          }`}
        >
          I am a Full Stack Engineer based in India. I have developed many types
          of full-stack application.
        </p>
        <br />
        <br />
      </div>
      <div className="bg-[#f2f5f8] w-[clamp(70px,10vw,140px)] rounded aspect-[4/3] absolute top-[18%] left-[11%]"></div>
      <div className="bg-[#f2f5f8] w-[clamp(70px,10vw,140px)] rounded aspect-[4/3] absolute top-[13%] right-[22%]"></div>
      <div className="bg-[#f2f5f8] w-[clamp(70px,10vw,140px)] rounded aspect-[4/3] absolute top-[25%] right-[10%]"></div>
      <div className="bg-[#f2f5f8] w-[clamp(70px,10vw,140px)] rounded aspect-[4/3] absolute bottom-[28%] left-[20%]"></div>
      <div className="bg-[#f2f5f8] w-[clamp(70px,10vw,140px)] rounded aspect-[4/3] absolute bottom-[8%] left-[32%]"></div>
      <div className="bg-[#f2f5f8] w-[clamp(70px,10vw,140px)] rounded aspect-[4/3] absolute bottom-[23%] right-[18%]"></div>
    </div>
  );
};

export default HomePage;
