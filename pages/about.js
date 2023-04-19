import Image from "next/image";
import React, { useContext } from "react";
import { CustomContext } from "./AppContext";
import boy from "../components/boy.png";
import { HiDownload } from "react-icons/hi"

const about = () => {
  const { setmenuOpen, menuOpen } = useContext(CustomContext);
  return (
    <div className="flex justify-center flex-col lg:flex-row items-center min-h-screen relative gap-5">
      <img
        src={"/boy.png"}
        className={`w-[130px] sm:w-[250px] transition-[opacity transform] duration-300 ${menuOpen ? "" : "delay-300"
          } ${menuOpen ? "-translate-y-4 opacity-0" : ""}`}
        style={{ zIndex: 1 }}
      />
      <div className="text-6xl text-black text-left max-w-[800px] z-50 px-3 lg:px-0">
        <p
          className={`font-serif font-extrabold transition-[opacity transform] duration-300 ${menuOpen ? "" : "delay-300"
            } ${menuOpen ? "-translate-y-4 opacity-0" : ""}`}
        >
          ABOUT
        </p>
        <div
          className={`font-serif font-extrabold mt-1 mb-3 h-[1px] w-full bg-black transition-[opacity transform] duration-300 ${menuOpen ? "" : "delay-300"
            } ${menuOpen ? "-translate-y-4 opacity-0" : ""}`}
        ></div>
        <p
          className={`text-xl mt-4 transition-[opacity transform] duration-300 ${menuOpen ? "" : "delay-300"
            } ${menuOpen ? "-translate-y-4 opacity-0" : ""}`}
        >
          I am a Full Stack Engineer based in India. I have developed many types
          of full-stack application.In Informatics, dummy data is benign
          information that does not contain any useful data, but serves to
          reserve space where real data is nominally present. Dummy data can be
          used as a placeholder for both testing and operational purposes.
        </p>
        <div
          className={`flex mx-4 gap-2 items-end cursor-pointer text-xl mt-3 transition-[opacity transform] duration-300 ${menuOpen ? "" : "delay-300"
            } ${menuOpen ? "-translate-y-4 opacity-0 " : ""}`}
        > <HiDownload />
          <p className="underline cursor-pointer">resume</p>
        </div>
        {/* <br />
        <br /> */}
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

export default about;
