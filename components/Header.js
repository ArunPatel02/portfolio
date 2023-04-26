import React, { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import Svg from "./Arun Logo white.svg";
import { CustomContext } from "../pages/AppContext";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  console.log(router);

  useEffect(() => {
    setmenuOpen(false);
    if (menuRef.current.classList.contains("active")) {
      menuRef.current.classList.remove("active");
    }
  }, [router.pathname]);

  const { setmenuOpen, menuOpen, menuRef } = useContext(CustomContext);
  console.log(menuOpen);

  const handleMenuOpen = (e) => {
    console.log(e.target);
    // e.target.classList.toggle("active")
    if (menuRef) {
      menuRef.current.classList.toggle("active");
      setmenuOpen((pre) => !pre);
    }
  };

  return (
    <header
      className={`fixed bg-white top-0 p-2 px-10 z-[100000000000] w-full flex flex-col items-center transition-all ${
        !menuOpen ? "" : "delay-200"
      } duration-75 ${
        menuOpen ? "backdrop-blur-sm min-h-screen" : "min-h-fit"
      }`}
    >
      <nav className="max-w-[1300px] w-full">
        <ul className="flex justify-between">
          <li className="flex gap-4 items-center">
          <Link href="/" ><span className="cursor-pointer"><Svg width="40" height="45" viewBox="0 0 79 64" /></span></Link>
          <Link href="/"><p className="text-2xl font-medium font-['Mr Dafoe', sans] cursor-pointer">Arun Patel</p></Link>
          </li>
          <li>
            {/* <div className="w-8 h-full flex py-3 flex-col justify-between">
              <div className="w-full h-1/6 bg-black"></div>
              <div className="w-full h-1/6 bg-black"></div>
              <div className="w-full h-1/6 bg-black"></div>
            </div> */}
            <div
              className="w-8 h-full py-2 grid grid-cols-3 gap-1 cursor-pointer relative custom_menu_icon"
              ref={menuRef}
              onClick={handleMenuOpen}
            >
              <div className="w-2 h-2 rounded-[50%] border-solid border-black border-2 dot"></div>
              <div className="w-2 h-2 rounded-[50%] border-solid border-black border-2 dot dot-top"></div>
              <div className="w-2 h-2 rounded-[50%] border-solid border-black border-2 dot"></div>
              <div className="w-2 h-2 rounded-[50%] border-solid border-black border-2 dot dot-left"></div>
              <div className="w-2 h-2 rounded-[50%] border-solid border-black border-2 dot dot-center"></div>
              <div className="w-2 h-2 rounded-[50%] border-solid border-black border-2 dot dot-right"></div>
              <div className="w-2 h-2 rounded-[50%] border-solid border-black border-2 dot"></div>
              <div className="w-2 h-2 rounded-[50%] border-solid border-black border-2 dot dot-bottom"></div>
              <div className="w-2 h-2 rounded-[50%] border-solid border-black border-2 dot"></div>
              <div className="w-8 h-full py-2 flex justify-center absolute top-0 right-0 items-center custom-plus">
                <div className="w-2 h-full border-2 border-solid border-black rounded translate-x-1"></div>
                <div className="w-2 h-full border-2 border-solid border-black rotate-90 -translate-x-1 rounded"></div>
              </div>
            </div>
            {/* <button className="p-[10px_30px] transition-[all_ease-in] text-black border-r-2 rounded-[8px] bg-[#017AE7] hover:bg-white hover:text-[#017AE7]">
              Say Hello
            </button> */}
          </li>
        </ul>
      </nav>
      <div
        className={`flex items-center w-full px-0 md:px-10 ${
          menuOpen
            ? "flex-grow h-full z-50"
            : "flex-grow-0 h-0 overflow-hidden z-0"
        } sm:px-72`}
      >
        <ul className="w-full h-full flex flex-col gap-8 justify-center text-5xl font-bold">
          <Link href="/">
            <li
              className={`parent-streght w-fit opacity-0 -translate-y-4 transition-all duration-300 cursor-pointer  ${
                !menuOpen ? "" : "delay-300"
              } ${menuOpen ? "opacity-100 translate-y-4" : ""}`}
            >
              HO<span className="stregth">M</span>E
            </li>
          </Link>
          <Link href="/work">
            <li
              className={`parent-streght w-fit opacity-0 -translate-y-4 transition-all duration-300 cursor-pointer ${
                !menuOpen ? "" : "delay-300"
              } ${menuOpen ? "opacity-100 translate-y-4" : ""}`}
            >
              W<span className="stregth">O</span>Rk
            </li>
          </Link>
          <Link href="/about">
            <li
              className={` parent-streght w-fit opacity-0 -translate-y-4 transition-all duration-300 cursor-pointer ${
                !menuOpen ? "" : "delay-300"
              } ${menuOpen ? "opacity-100 translate-y-4" : ""}`}
            >
              ABO<span className="stregth">U</span>T
            </li>
          </Link>
          <Link href="/contact">
            <li
              className={`parent-streght w-fit opacity-0 -translate-y-4 transition-all duration-300 cursor-pointer ${
                !menuOpen ? "" : "delay-300"
              } ${menuOpen ? "opacity-100 translate-y-4" : ""}`}
            >
              CO<span className="stregth">N</span>TACT
            </li>
          </Link>
          <li
            className={`opacity-0 flex gap-6 text-xl -translate-y-4 transition-all duration-300 ${
              !menuOpen ? "" : "delay-300"
            } ${menuOpen ? "opacity-100 translate-y-4" : ""}`}
          >
            <a href="https://www.linkedin.com/in/arun-patel-542924219/" target="_blank" className="parent-streght cursor-pointer">Linkedin</a>
            <a href="https://github.com/ArunPatel02" target="_blank" className="parent-streght cursor-pointer">Github</a>
            {/* <p className="parent-streght cursor-pointer">Instagram</p> */}
          </li>
        </ul>
      </div>
    </header>
  );
}
