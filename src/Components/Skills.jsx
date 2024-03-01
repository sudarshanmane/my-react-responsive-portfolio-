import React from "react";
import Marquee from "react-fast-marquee";
import Footer from "./Footer";

const Skills = () => {
  const skillsDataFrontend = [
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("../images/html.png")}
          />
          <h1 className="text-center font-semibold">HTML</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("../images/css.png")}
          />
          <h1 className="text-center font-semibold">CSS</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("../images/bootstrap.png")}
          />
          <h1 className="text-center font-semibold">Bootstrap</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("../images/tailwind.png")}
          />
          <h1 className="text-center font-semibold">Tailwind</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("../images/javaScript.png")}
          />
          <h1 className="text-center font-semibold">JavaScript</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("../images/react.png")}
          />
          <h1 className="text-center font-semibold">React</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("../images/redux.png")}
          />
          <h1 className="text-center font-semibold">Redux</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("../images/react-router.png")}
          />
          <h1 className="text-center font-semibold">React Router</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("../images/antd_.png")}
          />
          <h1 className="text-center font-semibold">Ant Design</h1>
        </>
      ),
    },
    {
      img: <div className="h-24 w-28 bg-transparent" />,
      transparent: true,
    },
  ];

  const tools = [
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("../images/vscode.png")}
          />
          <h1 className="text-center font-semibold">vs code</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("../images/github.png")}
          />
          <h1 className="text-center font-semibold">GitHub</h1>
        </>
      ),
    },
    {
      img: (
        <>
          <img
            className="h-24 w-28"
            alt=""
            src={require("../images/npm.png")}
          />
          <h1 className="text-center font-semibold">NPM</h1>
        </>
      ),
    },
    {
      img: <div className="h-24 w-28 bg-transparent" />,
      transparent: true,
    },
  ];
  return (
    <div>
      <div className="h-20"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mt-4 mb-10">
        <div className="flex flex-col  items-center justify-center text-2xl font-bold">
          <h1>Skills</h1>
          <p className="mt-1 text-center text-slate-600 font-semibold">
            Versatile with modern technology tools for frontend and backend
            development.
          </p>
        </div>
        <div>
          <img src={require("../images/skillssssss.png")} alt="aaaaa" />
        </div>
      </div>
      <div className="text-center text-2xl font-bold mt-5 mb-4">
        Frontend Skills
      </div>
      <div>
        <Marquee
          gradient={true}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
          autoFill={true}
        >
          {skillsDataFrontend.map((skill, id) => (
            <div
              className={`p-2 rounded-lg ml-3 ${
                skill?.transparent ? "bg-transparent" : "bg-cyan-300"
              }`}
              key="1"
            >
              {skill.img}
            </div>
          ))}
        </Marquee>
      </div>
      <div className="text-center text-2xl font-bold mt-5 mb-4">Tools</div>
      <div>
        <Marquee
          gradient={true}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
          autoFill={true}
        >
          {tools.map((skill, id) => (
            <div
              className={`p-2 rounded-lg ml-3 ${
                skill?.transparent ? "bg-transparent" : "bg-orange-300"
              }`}
              key="1"
            >
              {skill.img}
            </div>
          ))}
        </Marquee>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Skills;
