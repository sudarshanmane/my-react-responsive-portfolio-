import React from "react";
import { Link } from "react-router-dom";
import "./education.css";
import {
  GithubOutlined,
  LinkedinOutlined,
  StarOutlined,
} from "@ant-design/icons";
import Footer from "./Footer";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div className="">
      <div className="h-20"></div>
      <div className="grid gap-10 mt-10 grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 ">
        <div>
          <img
            className="w-fit "
            src={require("../images/education-image.png")}
            alt=""
          />
        </div>
        <div className=" flex flex-col items-center justify-center text-violet-950 ">
          <h1 className="font-semibold education-title  ">Education</h1>
          <h1 className="education-sub-title text-center  text-green-700">
            Basic Qualification and Certifications
          </h1>

          <div className="mt-1 text-2xl flex gap-1">
            <Link to={"https://github.com/sudarshanmane"} target="_blank">
              <GithubOutlined></GithubOutlined>
            </Link>

            <Link
              to={"https://www.linkedin.com/in/sudarshan-mane-065823236/"}
              target="_blank"
            >
              <LinkedinOutlined />
            </Link>

            <Link
              to={"https://medium.com/@sudarshanmane2110"}
              target="_blank"
              className="flex items-center mr-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                data-icon="simple-icons:medium"
                data-inline="false"
              >
                <path
                  fill="currentColor"
                  d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12m7.42 0c0 3.54-1.51 6.42-3.38 6.42c-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42s3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75c-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12"
                ></path>
              </svg>
            </Link>

            <Link to={"https://leetcode.com/sudarshanmane/"} target="_blank">
              <div className="mt-1" style={{ marginLeft: "-5px" }}>
                <img
                  className="w-7"
                  src={require("../images/leetcode.png")}
                  alt=""
                />
              </div>
            </Link>
            <Link to={"https://replit.com/@SudarshanMane1"} target="_blank">
              <div className="mt-1" style={{ marginLeft: "-5px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 256 256"
                  class="iconify"
                  data-icon="skill-icons:replit-dark"
                  data-inline="false"
                >
                  <g fill="none">
                    <rect
                      width="256"
                      height="256"
                      fill="#242938"
                      rx="60"
                    ></rect>
                    <path
                      fill="#F26207"
                      d="M53 49.25C53 43.037 58.037 38 64.25 38h52.5c6.213 0 11.25 5.037 11.25 11.25V98H64.25C58.037 98 53 92.963 53 86.75zm74.999 48.752h63.75c6.213 0 11.25 5.037 11.25 11.25v37.5c0 6.213-5.037 11.25-11.25 11.25h-63.75z"
                    ></path>
                    <path
                      fill="#F26207"
                      d="M53 169.25c0-6.213 5.037-11.25 11.25-11.25H128v48.75c0 6.213-5.037 11.25-11.25 11.25h-52.5C58.037 218 53 212.963 53 206.75z"
                    ></path>
                  </g>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="mt-10">
        <h1 className="text-center  flex flex-col items-center justify-center text-violet-950 text-2xl font-bold">
          Degrees Received
        </h1>
        <div className="flex w-2/3 m-auto mt-6 p-3 rounded-lg bg-orange-300 education-card">
          <div>
            <h1 className="font-bold text-xl education-card-heading">
              Savitribai Phule Pune University
            </h1>
            <h2 className="font-bold text-md education-card-heading-sub">
              {" "}
              B.E. in Mechanical Engineering
            </h2>
            <h2 className="font-bold text-md education-card-heading-sub">
              {" "}
              CGPA: 7.81
            </h2>
          </div>
          <div className="ml-auto">
            <h1 className="font-semibold mt-1 education-card-date">
              2017 - 2021
            </h1>
          </div>
        </div>
      </div> */}
      <div className="mt-10">
        <h1 className="text-center  flex flex-col items-center justify-center text-violet-950 text-2xl font-bold">
          Education
        </h1>
        {/* <div className="flex w-2/3 m-auto mt-6 p-3 rounded-lg bg-orange-300">
          <div>
            <h1 className="font-bold text-xl">
              Savitribai Phule Pune University
            </h1>
            <h2 className="font-bold text-md">
              {" "}
              B.E. in Mechanical Engineering
            </h2>
          </div>
          <div className="ml-auto">
            <h1 className="font-semibold mt-1">2017 - 2021</h1>
          </div>
        </div> */}
      </div>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#330066" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2015"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<div></div>}
          >
            <h3 className="vertical-timeline-element-title text-2xl ">10th</h3>
            <h4 className="vertical-timeline-element-subtitle text-lg">
              Shri Mahatma Basweshwar vidyalay, Omerga
            </h4>
            <h3 className="text-lg">Percentage: 90%</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<div></div>}
          >
            <h3 className="vertical-timeline-element-title text-xl">12th</h3>
            <h4 className="vertical-timeline-element-subtitle text-lg">
              Shri chatrapti shivaji mahavidyalay, Omerga
            </h4>
            <h3 className="text-lg">Percentage: 70%</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<div></div>}
          >
            <h3 className="vertical-timeline-element-title text-xl">
              MMIT, Pune
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg">B.E</h4>
            <h3 className="text-lg ">CGPA: 7.81%</h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Education;
