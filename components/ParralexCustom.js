import Link from "next/link";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import TechIcons from "./TechIcons";
import {BsGithub} from "react-icons/bs"
import {BiLinkExternal} from "react-icons/bi"


const ParralexCustom = ({ index, img, data, images }) => {
  const handleProgress = (progress) => {
    console.log(progress, "process", index);
    if (img.current) {
      if (progress >= 0.7) {
        const scaleRatio = parseFloat(1 - (progress - 0.7) / 2).toFixed(2);
        console.log(scaleRatio, "scaleRatio", index);
        img.current.style.marginTop = `27.45%`;
        img.current.style.transform = `scale(${scaleRatio})`;
      } else if (progress <= 0.49) {
        const transformValue = parseFloat(
          180 - progress * ((180 - 27.45) / 0.49)
        ).toFixed(2);
        console.log(transformValue, "transformValue", index);
        if (transformValue >= 27.45) {
          img.current.style.marginTop = `${transformValue}%`;
        }
      } else {
        img.current.style.marginTop = `27.45%`;
      }
    }
  };
  return (
    <div className={`min-h-[calc(100vh-64px)]`}>
      <Parallax
        onProgressChange={(progress) => handleProgress(progress)}
        onEnter={() => console.log("Enter", "process", index)}
        onExit={() => console.log("Exit", "process", index)}
        className={`min-h-[calc(100vh-64px)] flex flex-col justify-center ${
          index > 0 ? "pt-[64px]" : ""
        }`}
        children={
          <>
            <p className="text-4xl md:text-4xl lg:text-5xl mb-4 text-gray-900 font-bold">
              {data.title}
            </p>
            <p className="text-[22px] md:text-2xl text-gray-600 mb-4">
              {data.description}
            </p>
            <p className="text-[22px] md:text-2xl text-gray-900 underline mb-2">
              Features
            </p>
            <ui>
              {data.features.map((fea, ind) => {
                return <li key={ind}>{fea}</li>;
              })}
            </ui>
            <p className="text-[22px] md:text-2xl text-gray-900 underline mt-4 mb-4">
              Technologies Used
            </p>
            <div className="flex gap-4 p-3">
              {data.technologies.map((tech, ind) => {
                return <TechIcons key={ind} tech={tech} />;
              })}
            </div>
            <div className="flex gap-2 mt-6 flex-wrap">
              <p className="text-[12px] md:text-base text-white">
                  {data.links.heading === "deploy"?<button className="px-4 py-2 bg-gray-900 rounded-lg"><a href={data.links.url} target={"_blank"} className="flex gap-3 items-center">Preview <BiLinkExternal /></a></button>:data.links.heading === "github"?<a href={data.links.url} target={"_blank"} className="flex gap-3 items-center px-4 py-2 bg-gray-900 rounded-lg">View Code <BsGithub /></a>:null}
              </p>
            </div>
            <div className="flex justify-center my-6">
              <img
                src={images[index].url}
                key={index}
                draggable={false}
                className={`w-full max-w-[400px] rounded-lg object-left-top object-cover shadow-[0px_0px_15px_4px_#635f5f22] block lg:hidden
                }`}
              />
            </div>
          </>
        }
      />
    </div>
  );
};

export default ParralexCustom;
