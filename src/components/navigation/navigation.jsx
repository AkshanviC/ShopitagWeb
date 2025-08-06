import React, { useState } from "react";
import "./navigation.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Navigation = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActive("#home")}
        className={active === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#services"
        onClick={() => setActive("services")}
        className={active === "services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#details"
        onClick={() => setActive("details")}
        className={active === "details" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("exp")}
        className={active === "exp" ? "active" : ""}
      >
        <BiBook />
      </a>

      <a
        href="#functions"
        onClick={() => setActive("contact")}
        className={active === "contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navigation;
