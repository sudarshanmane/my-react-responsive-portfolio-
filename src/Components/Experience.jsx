import React from "react";
import "./education.css";
import Footer from "./Footer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div className="">
      <div className="h-20"></div>
      <div className="grid gap-10 mt-10 grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 ">
        <div>
          <img
            className="w-fit "
            src={require("../images/experience-image.png")}
            alt=""
          />
        </div>
        <div className=" flex flex-col items-center justify-center text-violet-950 ">
          <h1 className="font-semibold education-title  ">Experience</h1>
          <h1 className="education-sub-title text-center  text-green-700">
            I have worked with startup as Frontend Developer.
          </h1>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-2xl text-center mt-10">Experience</h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#330066" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="02/2023 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<div />}
          >
            <h3 className="vertical-timeline-element-title text-2xl ">
              Metamind System Private Limited
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg text-teal-950">
              Software Developer
            </h4>
            <h3 className="text-lgm text-blue-800">
              Led end-to-end development of a React JS-based File Management
              System, optimizing map data digitization. Solely managed project,
              delivering user-friendly system, enhancing accessibility, and
              meeting all deadlines.Led end-to-end development of a React
              JS-based File Management System, optimizing map data digitization.
              Solely managed project, delivering user-friendly system, enhancing
              accessibility, and meeting all deadlines.
            </h3>
            <div>
              <span className="text-lg font-semibold"> Skills: </span>
              <span className="text-md font-semibold">
                HTML5 · CSS · Bootstrap · JavaScript · ReactJs · React-Router ·
                Redux.js · Redux-Saga · GitHub · Ant Design
              </span>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      {/* <div className="bg-orange-300 px-3 w-12/12 rounded-lg ">
        <div className="flex  m-auto mt-6  pt-2 bg-orange-300 education-card">
          <div>
            <h1 className="font-bold text-xl education-card-heading">
              Metamind System Private Limited
            </h1>
            <h2 className="font-bold text-md education-card-heading-sub">
              {" "}
              Software Developer
            </h2>
          </div>
          <div className="ml-auto">
            <h1 className="font-semibold mt-1 education-card-date">
              02/2023 - present
            </h1>
          </div>
        </div>
        <div>
          <div className="p-2">
            Led end-to-end development of a React JS-based File Management
            System, optimizing map data digitization. Solely managed project,
            delivering user-friendly system, enhancing accessibility, and
            meeting all deadlines.Led end-to-end development of a React JS-based
            File Management System, optimizing map data digitization. Solely
            managed project, delivering user-friendly system, enhancing
            accessibility, and meeting all deadlines.
            <br />
            <br />
            <h1></h1>
          </div>
        </div>
      </div> */}
      <Footer></Footer>
    </div>
  );
};

export default Experience;
