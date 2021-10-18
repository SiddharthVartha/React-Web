import React from "react";
import { NavLink } from "react-router-dom";
import question from "../src/assets/question.svg";
import Common from "./Common";
const About = () => {
  return (
    <>
    <Common name='Welcome to About Page' buttonText='Contact Us' route='/contact' img={question}/>        
    </>
  );
};

export default About;
