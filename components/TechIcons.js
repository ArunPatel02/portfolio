import React from "react";
import { FaReact } from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const TechIcons = ({ tech }) => {
  const generateIcon = () => {
    switch (tech) {
      case "React.Js":
        return <FaReact className="text-gray-500 transition-all cursor-pointer hover:text-blue-500" fontSize={"50px"} />;
      case "Node.Js":
        return <DiNodejsSmall className="text-gray-500 transition-all cursor-pointer hover:text-green-500" fontSize={"50px"} />;
      case "Express.Js":
        return <SiExpress className="text-gray-500 transition-all cursor-pointer hover:text-blue-500" fontSize={"50px"} />;
      case "MongoDb":
        return <SiMongodb className="text-gray-500 transition-all cursor-pointer hover:text-blue-500" fontSize={"50px"} />;
      default:
        return null;
    }
  };
  return <>{generateIcon()}</>;
};

export default TechIcons;
