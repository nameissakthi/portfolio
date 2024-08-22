import "./About.css";
import React from "react";
import About_img from "../../assets/About_img.png";
import Skills from "../Skills/Skills";

const About = () => {
  return (
    <div className="about">
      <p>Get To Know <span>About Me</span></p>
      <div className="about_container">
        <div className="about_left">
          <img src={About_img} alt="Logo" />
        </div>
        <div className="about_right">
          <div class="card">
            <div class="tools">
              <div class="circle">
                <span class="red box"></span>
              </div>
              <div class="circle">
                <span class="yellow box"></span>
              </div>
              <div class="circle">
                <span class="green box"></span>
              </div>
            </div>
            <div class="card__content">
              <h1>Get to know me!</h1>
              <p>
                Hi, my name is Sakthivel and I am from Tamil Nadu, India. I'm a
                web developer and a Third year college student pursuing BE in
                CSE. I have done an internship as a web developer at
                Technohacks. I love to create original projects with beautiful
                designs, you can check out my work in the projects section. I am
                open to new collaborations or work where I can contribute and
                grow. Feel free to connect with me, links are in the footer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Skills/>
    </div>
  );
};

export default About;
