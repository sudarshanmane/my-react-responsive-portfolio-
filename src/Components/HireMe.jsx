import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  LinkedinOutlined,
  GithubOutlined,
  MailTwoTone,
  PhoneTwoTone,
} from "@ant-design/icons";
import Footer from "./Footer";

const HireMe = () => {
  return (
    <div className="h-screen">
      <div className="h-20"></div>
      <div className="grid gap-10 mt-10 grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 ">
        <div className="flex    ">
          <div className="rounded-full w-7/12 overflow-auto m-auto">
            <img
              className="overflow-auto "
              src="https://sudarshanmane.github.io/Images/Sudarshan%20Mane.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-center text-2xl font-semibold text-violet-950">
            Contact Me
          </h1>
          <p className="text-center text-lg text-green-700 ">
            You can contact me on...
          </p>
          <div className="mt-1 text-2xl flex gap-1 text-center justify-center">
            <Link to={"https://github.com/sudarshanmane"} target="_blank">
              <GithubOutlined></GithubOutlined>
            </Link>

            <Link
              to={"https://www.linkedin.com/in/sudarshan-mane-065823236/"}
              target="_blank"
            >
              <LinkedinOutlined />
            </Link>
            <Link to="mailto:sudarshanmane2110@gmail.com" target="_blank">
              <MailTwoTone />
            </Link>
            <Link to="tel:+919370105149" target="_blank">
              <PhoneTwoTone />
            </Link>
          </div>
          <div className="flex justify-content-center border- border-black">
            <span className="m-auto">
              <Link
                to={
                  "https://drive.google.com/file/d/1CeFeYERC1zHX5j9SYKypBHHn15wqRZmt/view"
                }
                target="_blank"
              >
                <Button className="bg-violet-950 text-white font-semibold text-lg mt-2 px-20 py-5 flex items-center justify-content-center">
                  <span> See my Resume</span>
                </Button>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="grid gap-10 mt-10 grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 ">
        <div className="flex  flex-col items-center">
          <h1 className="text-center text-2xl font-semibold text-violet-950">
            Blogs
          </h1>
          <h2 className=" text-center font-semibold text-violet-950">
            🌟 Explore the latest insights and tutorials on ReactJS on my Medium
            blog! 📚 Dive into the world of web development with expert tips and
            tricks. Click here to visit:
          </h2>
          <div>
            <Button className=" bg-violet-950 text-white font-semibold text-lg mt-2 px-10 py-5 flex items-center justify-content-center">
              Visit My Blogs site
            </Button>
          </div>
        </div>
        <div>
          <img src={require("../images/blogs.png")} alt="" />
        </div>
      </div>
      <div className="mt-48"></div>
      <Footer></Footer>
    </div>
  );
};

export default HireMe;
