import React, { useContext, useEffect } from "react";
import { CustomContext } from "./AppContext";

const Contact = ({ data }) => {
  const { setmenuOpen, menuOpen, menuRef } = useContext(CustomContext);
  return (
    <div className="flex justify-center items-center min-h-screen relative p-4">
      <div className="text-6xl text-black w-full text-left max-w-[800px] z-50">
        <p
          className={`font-serif font-extrabold transition-[opacity transform] duration-300 ${
            menuOpen ? "" : "delay-300"
          } ${menuOpen ? "-translate-y-4 opacity-0" : ""}`}
        >
          Contact
        </p>
        <div
          className={`font-serif font-extrabold mt-1 mb-3 h-[1px] w-full bg-black transition-[opacity transform] duration-300 ${
            menuOpen ? "" : "delay-300"
          } ${menuOpen ? "-translate-y-4 opacity-0" : ""}`}
        ></div>
        <p
          className={`text-xl mt-4 transition-[opacity transform] duration-300 ${
            menuOpen ? "" : "delay-300"
          } ${menuOpen ? "-translate-y-4 opacity-0" : ""}`}
        >
          Mail - ap.arunpatel@gmail.com
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

// This gets called on every request
export async function getServerSideProps() {
  return { props: { data: "this is data" } };
}

export default Contact;
