import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { getCurrentWindowWidth } from "../helpers";
import { NavLink } from "react-router-dom";

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

  return (
    <div className="navbar-container flex w-full z-10">
      <div className="navbar flex w-full justify-between px-10 py-4 items-center ">
        <div className="my-name">&lt;Sudarshan Mane /&gt;</div>
        <div className="gap-3 hidden lg:flex xl:flex 2xl:flex">
          <NavLink to="/home/description" className="ml-auto">
            Home
          </NavLink>
          <NavLink to="/home/description">Education</NavLink>
          <NavLink to="/home/description">Experience</NavLink>
          <NavLink to="/home/description">Hire Me</NavLink>
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
        <div className="">Home</div>
        <div>Education</div>
        <div>Experience</div>
        <div>Hire Me</div>
      </Drawer>
    </div>
  );
};

export default Navbar;
