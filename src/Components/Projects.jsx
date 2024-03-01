import React from "react";
import { Divider } from "antd";
import "./project.css";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Projects = () => {
  return (
    <div>
      <div className="pt-20"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mt-4 mb-10">
        <div className="flex items-center justify-center text-2xl font-bold">
          <div className="text-center text-violet-950">
            <h1 className="text-2xl">Projects</h1>
            <h2 className="text-lg text-green-700">
              In my projects, I utilize a broad range of state-of-the-art
              technology tools for both frontend and backend development. I
              specialize in creating and deploying web and mobile view
              applications.
            </h2>
          </div>
        </div>
        <div className="flex justify-content-center items-center ">
          <img
            src={require("../images/projects.png")}
            alt=""
            className="m-auto"
          />
        </div>
      </div>

      <div>
        <Divider>
          <h1 className="text-2xl text-center font-bold ">Projects</h1>
        </Divider>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
          <div
            className="flex flex-col gap-4 p-4 rounded-md"
            style={{
              background: "linear-gradient(90deg, #d8dcf6, #96abc4)",
            }}
          >
            <div className="rounded-md ">
              <img
                className="project-image"
                src={require("../images/fmsImage1.png")}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-violet-950">
                File Management System
              </h1>
              <h3 className="text-lg text-violet-900 mt-2">
                <span className="font-semibold">Organization:</span>{" "}
                <span className="text-orange-900 font-semibold">
                  Metamind System Private Limited
                </span>
              </h3>
              <p className="mt-1 text-slate-600 font-semibold">
                Led the end-to-end development of a comprehensive File
                Management System using React JS, focused on streamlining and
                digitizing map data. Solely responsible for the project,
                demonstrating strong individual initiative and technical
                expertise.
              </p>
              <h3 className="text-lg text-violet-900 mt-2 font-semibold">
                Responsibilities:
              </h3>
              <ol className="font-semibold">
                <li>
                  ⚡Developed and maintained a React JS frontend for a file
                  management system used to digitize maps independently
                </li>
                <li>
                  ⚡Implemented features to allow super admins to upload files,
                  assign them to agencies, and then to employees
                </li>{" "}
                <li>
                  ⚡Developed functionality for users to work on files and send
                  them for digitization
                </li>
                <li>
                  ⚡Added support for PDF creation, Excel file generation, and
                  barcode reading
                </li>
              </ol>
              <h2 className="text-lg text-violet-900 mt-2 font-semibold">
                Project Duration:{" "}
                <span className="text-orange-900"> 08/2023 - present</span>
              </h2>
              <h3 className="text-lg text-violet-900 mt-2 font-semibold">
                <span className="text-violet-900">Tech Stack: </span>
                <span className="text-orange-900">
                  ReactJs | React Router | Redux | Redux Saga | Ant Design |
                  HTML | CSS | JavaScript | NPM | Github
                </span>
              </h3>
            </div>
          </div>
          {/*  */}
          <div
            className="flex flex-col gap-4 p-4 rounded-md"
            style={{
              background: "linear-gradient(90deg, #d8dcf6, #96abc4)",
            }}
          >
            <div className="rounded-md ">
              <img
                className="project-image"
                src={require("../images/quizImage.png")}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-violet-950">Quiz App</h1>
              <p className="mt-1 text-slate-600 font-semibold">
                It is a quiz application
              </p>
              <h3 className="text-lg text-violet-900 mt-2 font-semibold">
                Responsibilities:
              </h3>
              <ol className="font-semibold">
                <li>
                  ⚡Student can select the answers until there answer will not
                  come true.
                </li>
                <li>
                  ⚡If selected wrong answer then he will get notified by red
                  color.
                </li>{" "}
                <li>
                  ⚡If selected Correct answer then he will get notified by
                  green color.
                </li>
                <li>
                  ⚡They can show the total score. After Finishing the quiz they
                  can restart the quiz.
                </li>
              </ol>

              <h3 className="text-lg text-violet-900 mt-2 font-semibold">
                <span className="text-violet-900">Tech Stack: </span>
                <span className="text-orange-900">
                  HTML | CSS | JavaScript | Github
                </span>
              </h3>
              <div className="flex gap-3 mt-3 justify-content-end ">
                <Link
                  className="ml-auto"
                  to="https://github.com/sudarshanmane/QuizApp"
                  target="_blank"
                >
                  <button className="flex gap-1">
                    <span className="flex gap-2 py-1 px-3 rounded  text-blue-700 bg-purple-200 hover:bg-orange-200 item-center">
                      <div className="font-bold text-blue-700">Code</div>
                      <GithubOutlined />
                    </span>
                  </button>
                </Link>

                <Link
                  to="https://quiz-app-six-ruby.vercel.app/"
                  target="_blank"
                >
                  <button className="flex gap-1">
                    <span className="flex gap-2 py-1 px-3 rounded  text-blue-700 bg-purple-200 item-center  hover:bg-orange-200">
                      <div className="font-bold text-blue-700">Link</div>
                      <LinkOutlined />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/*  */}
          <div
            className="flex flex-col gap-4 p-4 rounded-md"
            style={{
              background: "linear-gradient(90deg, #d8dcf6, #96abc4)",
            }}
          >
            <div className="rounded-md ">
              <img
                className="project-image"
                src={require("../images/weatherImage.png")}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-violet-950">Weather App</h1>
              <p className="mt-1 text-slate-600 font-semibold">
                You can search weather condition at your city just by submitting
                the name of your city. Which will show you the temperature of
                your city, max temperature, min temperature, humidity, etc. and
                the map of your city also.
              </p>
              <h3 className="text-lg text-violet-900 mt-2 font-semibold">
                Responsibilities:
              </h3>
              <ol className="font-semibold">
                <li>
                  ⚡Student can select the answers until there answer will not
                  come true.
                </li>
              </ol>

              <h3 className="text-lg text-violet-900 mt-2 font-semibold">
                <span className="text-violet-900">Tech Stack: </span>
                <span className="text-orange-900">
                  HTML | CSS | JavaScript | Github
                </span>
              </h3>
              <div className="flex gap-3 mt-3 justify-content-end ">
                <Link
                  className="ml-auto"
                  to="https://github.com/sudarshanmane/Wheather-app"
                  target="_blank"
                >
                  <button className="flex gap-1">
                    <span className="flex gap-2 py-1 px-3 rounded  text-blue-700 bg-purple-200 hover:bg-orange-200 item-center">
                      <div className="font-bold text-blue-700">Code</div>
                      <GithubOutlined />
                    </span>
                  </button>
                </Link>

                <Link
                  to="https://resonant-narwhal-1c8386.netlify.app/"
                  target="_blank"
                >
                  <button className="flex gap-1">
                    <span className="flex gap-2 py-1 px-3 rounded  text-blue-700 bg-purple-200 item-center  hover:bg-orange-200">
                      <div className="font-bold text-blue-700">Link</div>
                      <LinkOutlined />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/*  */}
          <div
            className="flex flex-col gap-4 p-4 rounded-md"
            style={{
              background: "linear-gradient(90deg, #d8dcf6, #96abc4)",
            }}
          >
            <div className="rounded-md ">
              <img
                className="project-image"
                src={require("../images/nykaa.png")}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-violet-950">Nykaa Clone</h1>
              <p className="mt-1 text-slate-600 font-semibold">
                This website is the clone of the Nykaa. which is one of the
                famous E-commerce website in India and we tried to make this
                website similar to the original website as much as possible.
              </p>
              <h3 className="text-lg text-violet-900 mt-2 font-semibold">
                A collaborative project, built in 6 days by a team of 6 members.
              </h3>

              <h3 className="text-lg text-violet-900 mt-2 font-semibold">
                <span className="text-violet-900">Tech Stack: </span>
                <span className="text-orange-900">
                  HTML | CSS | JavaScript | Github
                </span>
              </h3>
              <div className="flex gap-3 mt-3 justify-content-end ">
                <Link
                  className="ml-auto"
                  to="https://github.com/sudarshanmane/NykaaClone"
                  target="_blank"
                >
                  <button className="flex gap-1">
                    <span className="flex gap-2 py-1 px-3 rounded  text-blue-700 bg-purple-200 hover:bg-orange-200 item-center">
                      <div className="font-bold text-blue-700">Code</div>
                      <GithubOutlined />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-4 p-4 rounded-md"
            style={{
              background: "linear-gradient(90deg, #d8dcf6, #96abc4)",
            }}
          >
            <div className="rounded-md ">
              <img
                className="project-image"
                src={require("../images/hotstar.png")}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-violet-950">Hotstar</h1>
              <p className="mt-1 text-slate-600 font-semibold">
                You can search any movie and you will get the results within 5
                seconds. Which will show the movie details like full movie name,
                published year and type.
              </p>
              <h3 className="text-lg text-violet-900 mt-2 font-semibold">
                A mini project, built within 3 days
              </h3>
              <h3 className="text-lg text-violet-900 mt-2 font-semibold">
                <span className="text-violet-900">Tech Stack: </span>
                <span className="text-orange-900">
                  HTML | CSS | JavaScript | Github
                </span>
              </h3>
              <div className="flex gap-3 mt-3 justify-content-end ">
                <Link
                  className="ml-auto"
                  to="https://github.com/sudarshanmane/Hotstar"
                  target="_blank"
                >
                  <button className="flex gap-1">
                    <span className="flex gap-2 py-1 px-3 rounded  text-blue-700 bg-purple-200 hover:bg-orange-200 item-center">
                      <div className="font-bold text-blue-700">Code</div>
                      <GithubOutlined />
                    </span>
                  </button>
                </Link>
                <Link
                  to="https://unrivaled-cat-71c60d.netlify.app/"
                  target="_blank"
                >
                  <button className="flex gap-1">
                    <span className="flex gap-2 py-1 px-3 rounded  text-blue-700 bg-purple-200 item-center  hover:bg-orange-200">
                      <div className="font-bold text-blue-700">Link</div>
                      <LinkOutlined />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/*  */}
          <div
            className="flex flex-col gap-4 p-4 rounded-md"
            style={{
              background: "linear-gradient(90deg, #d8dcf6, #96abc4)",
            }}
          >
            <div className="rounded-md ">
              <img
                className="project-image"
                src={require("../images/studentManagemetSystem.png")}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-violet-950">
                Student Management System
              </h1>
              <p className="mt-1 text-slate-600 font-semibold">
                It is an Employee Management System with the help of this
                application, you can manage the details of the employee in your
                company.
              </p>
              <h3 className="text-lg text-violet-900 mt-2 font-semibold">
                A mini project, built within 3 days
              </h3>
              <h3 className="text-lg text-violet-900 mt-2 font-semibold">
                Responsibilities:
              </h3>
              <ol className="font-semibold">
                <li>⚡Registration of students</li>
                <li>⚡Deletion student</li>
                <li>⚡Updating details of student</li>
                <li>⚡Validation Exception Handling</li>
              </ol>

              <h3 className="text-lg text-violet-900 mt-2 font-semibold">
                A mini project, built within 5 days{" "}
              </h3>

              <h3 className="text-lg text-violet-900 mt-2 font-semibold">
                <span className="text-violet-900">Tech Stack: </span>
                <span className="text-orange-900">
                  Java | MySQL | Hibernate | Spring | Spring Boot | Swagger
                </span>
              </h3>
              <div className="flex gap-3 mt-3 justify-content-end ">
                <Link
                  className="ml-auto"
                  to="https://github.com/sudarshanmane/Student_Managemet_System_A_Spring_Boot_Project"
                  target="_blank"
                >
                  <button className="flex gap-1">
                    <span className="flex gap-2 py-1 px-3 rounded  text-blue-700 bg-purple-200 hover:bg-orange-200 item-center">
                      <div className="font-bold text-blue-700">Code</div>
                      <GithubOutlined />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Projects;
