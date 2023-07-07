import React, { useContext, useEffect, useRef } from "react";
import { CustomContext } from "../pages/AppContext";
import { useParallax, Parallax } from "react-scroll-parallax";
import ParralexCustom from "../components/ParralexCustom";

const WorkPage = ({ data }) => {
    //   const { setmenuOpen, menuOpen, menuRef } = useContext(CustomContext);
    //   useEffect(() => {
    //     setmenuOpen(false);
    //     menuRef.current.classList.remove("active");
    //   }, []);

    //   const parallax = useParallax({
    //     // speed: -10,
    //   });

    //   parallax.controller.

    //   useEffect(() => {
    //     console.log(parallax?.element?.progress);
    //     console.log(parallax?.element);
    //   }, [parallax.element]);

    const img1 = useRef();
    const img2 = useRef();
    const img3 = useRef();
    const img4 = useRef();

    const projects = [
        {
            title: "FarmEasy - A Farmer's Guide",
            description:
                "FarmEasy is a MERN stack app develop for farmers to provide good quality of pesticides and insecticides that will help farmer to increase their production.",
            features: [
                "User can create account",
                "Know more about product",
                "Buy product online",
                "Home delivery",
                "Track previous order",
            ],
            technologies: ["React.Js", "Node.Js", "Express.Js", "MongoDb"],
            links: {
                heading: "deploy",
                url: "https://farmeazy.netlify.app/",
            },
            ref: img1,
        },
        {
            title: "Question Bank",
            description:
                "Question Bank is a MERN stack app develop for students to provide easy way to solve their queries by posting the question on this website and get answer by any user worldwide.",
            features: [
                "Register and Login",
                "Post Questions",
                "Browse Questions",
                "Post answer",
                "view Answers and questions ",
            ],
            technologies: ["React.Js", "Node.Js", "Express.Js", "MongoDb"],
            links: {
                heading: "github",
                url: "https://farmeazy.netlify.app/",
            },
            ref: img2,
        },
        {
            title: "FarmEasy - A Farmer's Guide",
            description:
                "FarmEasy is a MERN stack app develop for farmers to provide good quality of pesticides and insecticides that will help farmer to increase their production.",
            features: [
                "User can create account",
                "Know more about product",
                "Buy product online",
                "Home delivery",
                "Track previous order",
            ],
            technologies: ["React.Js", "Node.Js", "Express.Js", "MongoDb"],
            links: {
                heading: "deploy",
                url: "https://farmeazy.netlify.app/",
            },
            ref: img3,
        },
        {
            title: "Question Bank",
            description:
                "Question Bank is a MERN stack app develop for students to provide easy way to solve their queries by posting the question on this website and get answer by any user worldwide.",
            features: [
                "Register and Login",
                "Post Questions",
                "Browse Questions",
                "Post answer",
                "view Answers and questions ",
            ],
            technologies: ["React.Js", "Node.Js", "Express.Js", "MongoDb"],
            links: {
                heading: "github",
                url: "https://farmeazy.netlify.app/",
            },
            ref: img4,
        },
    ];

    const images = [
        { url: "/farmEasy.png", ref: img1 },
        { url: "/questionBank.png", ref: img2 },
        { url: "/farmEasy.png", ref: img3 },
        { url: "/questionBank.png", ref: img4 },
        // { url: "/farmEasy.png", ref: img3 },
    ];

    return (
        <div className="flex flex-col justify-center items-center min-h-screen relative p-16 pb-0 px-3">
            <div className="fixed top-0 bottom-0 left-0 right-0 blur-sm">
                <div className="bg-[#f2f5f8] w-[clamp(70px,10vw,140px)] rounded aspect-[4/3] absolute top-[18%] left-[11%]"></div>
                <div className="bg-[#f2f5f8] w-[clamp(70px,10vw,140px)] rounded aspect-[4/3] absolute top-[13%] right-[22%]"></div>
                <div className="bg-[#f2f5f8] w-[clamp(70px,10vw,140px)] rounded aspect-[4/3] absolute top-[25%] right-[10%]"></div>
                <div className="bg-[#f2f5f8] w-[clamp(70px,10vw,140px)] rounded aspect-[4/3] absolute bottom-[28%] left-[20%]"></div>
                <div className="bg-[#f2f5f8] w-[clamp(70px,10vw,140px)] rounded aspect-[4/3] absolute bottom-[8%] left-[32%]"></div>
                <div className="bg-[#f2f5f8] w-[clamp(70px,10vw,140px)] rounded aspect-[4/3] absolute bottom-[23%] right-[18%]"></div>
            </div>
            <div className="flex-grow w-full p-11 pt-0 relative grid grid-cols-1 lg:grid-cols-2 gap-14 z-10">
                <div className="min-h-[calc(100vh-64px)] w-full">
                    {projects.map((item, index) => {
                        return (
                            <ParralexCustom
                                key={index}
                                index={index}
                                data={item}
                                img={item.ref}
                                images={images}
                            />
                        );
                    })}
                    {/* <ParralexCustom index="1" img={img1} />
          <ParralexCustom index="2" img={img2} />
          <ParralexCustom index="3" img={img3} /> */}
                    {/* <ParralexCustom index="4" img={img1} /> */}
                </div>
                <div className="h-[95ch] w-[45vw] p-11 pt-14 sticky top-[5vh] right-0 hidden lg:block">
                    <div
                        className="h-[94%] w-full border border-white rounded-3xl overflow-hidden relative"
                        style={
                            {
                                // background : "url(/34249.png)"
                                // background: "linear-gradient(to bottom, #005aa7, #fffde4 100%)",
                            }
                        }
                    >
                        {images.map((img, index) => {
                            return (
                                <img
                                    src={img.url}
                                    key={index}
                                    draggable={false}
                                    className={`w-11/12 absolute transition-transform mx-[calc(100%/24)] rounded-lg object-left-top object-cover shadow-[0px_0px_10px_10px_#635f5f42] ${index === 0 ? "mt-[27.45%]" : "mt-[110%]"
                                        }`}
                                    ref={img.ref}
                                />
                            );
                        })}
                        {/* <img
              src="/img1.png"
              className="w-11/12 absolute mx-[calc(100%/24)] rounded-lg object-left-top  h-[310px] object-cover mt-[27.45%]"
              ref={img1}
            />
            <img
              src="/img2.jfif"
              className="w-11/12 absolute mx-[calc(100%/24)] rounded-lg object-left-top  mt-[110%] h-[310px] object-cover"
              ref={img2}
            />
            <img
              src="/img1.png"
              className="w-11/12 absolute mx-[calc(100%/24)] rounded-lg object-left-top  mt-[110%] h-[310px] object-cover"
              ref={img3}
            /> */}
                    </div>
                </div>
            </div>
            {/* <Parallax
        onProgressChange={(progress) => console.log(progress)}
        onEnter={() => console.log("Enter")}
        onExit={() => console.log("Exit")}
        className="min-h-screen w-full "
        children={<h1>this is some other things</h1>}
      /> */}
        </div>
    );
};

// This gets called on every request
export async function getServerSideProps() {
    return { props: { data: "this is data" } };
}

export default WorkPage;
