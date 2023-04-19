import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="p-0 m-0 bg-[#ffff] min-h-screen">
      <div className="m-auto  p-4 px-10">
        <Header />
        <div className="flex justify-center items-center">
          <div className="flex-1 text-5xl text-slate-100">
            <p className="font-serif">
              I'M <br /> Arun Patel
            </p>
            <p className="text-3xl mt-5">Full Stack Developer</p>
          </div>
          <img
            src="output-onlinegiftools.gif"
            width="400px"
            height="400px"
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
}
