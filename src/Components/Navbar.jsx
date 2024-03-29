import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(!open);
  };

  const updateWindowDimensions = () => {
    const width = window.innerWidth;
    if (width > 768) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);
  // active nav link
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {}, [location]);

  const navigateToLocation = (path) => {
    navigate(path, { replace: true });
  };

  return (
    <div className="navbar-container flex w-full z-10">
      <div className="navbar flex w-full justify-between px-10 py-4 items-center ">
        <div className="my-name">
          <Link to="/home/description">&lt;Sudarshan Mane /&gt;</Link>
        </div>
        <div className="gap-3 hidden lg:flex xl:flex 2xl:flex">
          <NavLink
            to="/home/description"
            className={`ml-auto `}
            id={
              location.pathname.split("/").includes("description")
                ? "current-component"
                : "ddd"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/home/education"
            id={
              location.pathname.split("/").includes("education")
                ? "current-component"
                : ""
            }
          >
            Education
          </NavLink>
          <NavLink
            to="/home/skills"
            id={
              location.pathname.split("/").includes("skills")
                ? "current-component"
                : ""
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/home/projects"
            id={
              location.pathname.split("/").includes("projects")
                ? "current-component"
                : ""
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/home/experience"
            id={
              location.pathname.split("/").includes("experience")
                ? "current-component"
                : ""
            }
          >
            Experience
          </NavLink>
          <NavLink
            to="/home/hire-me"
            id={
              location.pathname.split("/").includes("hire-me")
                ? "current-component"
                : ""
            }
          >
            Hire Me
          </NavLink>
          <NavLink
            to="https://drive.google.com/file/d/1CeFeYERC1zHX5j9SYKypBHHn15wqRZmt/view"
            target="_blank"
          >
            Resume
          </NavLink>
        </div>
        <div className="lg:hidden xl:hidden 2xl:hidden" onClick={onClose}>
          <MenuOutlined />
        </div>
      </div>
      <Drawer
        title={<div className="my-name">&lt;Sudarshan Mane /&gt;</div>}
        placement={"left"}
        closable={true}
        onClose={onClose}
        open={open}
        key={"left"}
        width={"300px"}
        className="navbar"
      >
        <div
          className={`w-64 pl-2 rounded-xl py-2`}
          id={
            location.pathname.split("/").includes("description")
              ? "current-component-drawer"
              : "component-drawer"
          }
          onClick={() => navigateToLocation("/home/description")}
          role="button"
        >
          Home
        </div>
        <div
          className={`w-64 pl-2 rounded-xl py-2`}
          id={
            location.pathname.split("/").includes("education")
              ? "current-component-drawer"
              : "component-drawer"
          }
          onClick={() => navigateToLocation("/home/education")}
          role="button"
        >
          Education
        </div>

        <div
          className={`w-64 pl-2 rounded-xl py-2`}
          id={
            location.pathname.split("/").includes("skills")
              ? "current-component-drawer"
              : "component-drawer"
          }
          onClick={() => navigateToLocation("/home/skills")}
          role="button"
        >
          Skills
        </div>
        <div
          className={`w-64 pl-2 rounded-xl py-2`}
          id={
            location.pathname.split("/").includes("projects")
              ? "current-component-drawer"
              : "component-drawer"
          }
          onClick={() => navigateToLocation("/home/projects")}
          role="button"
        >
          Projects
        </div>
        <div
          className={`w-64 pl-2 rounded-xl py-2`}
          id={
            location.pathname.split("/").includes("experience")
              ? "current-component-drawer"
              : "component-drawer"
          }
          onClick={() => navigateToLocation("/home/experience")}
          role="button"
        >
          Experience
        </div>

        <div
          className={`w-64 pl-2 rounded-xl py-2`}
          id={
            location.pathname.split("/").includes("hire-me")
              ? "current-component-drawer"
              : "component-drawer"
          }
          onClick={() => navigateToLocation("/home/hire-me")}
          role="button"
        >
          <div>Hire Me</div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
