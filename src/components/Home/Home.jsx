import "./Home.css";
import React from "react";
import Home_anim from '../../assets/Home_anim.json'
import resume from '../../assets/sakthiresume.pdf'
import Lottie from "lottie-react";

const Home = () => {
  return (
    <div className="home">
      <div className="home_left">
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
            <h1>Hi there!</h1>
            <h2>
              I am<span>Sakthivel</span>
            </h2>
            <p>I am a<span>Web Developer</span></p>
            <div className="home_resume">
                <a download="Sakthi_Resume" href={resume} className="button button--flex">
                    Download Resume
                </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home_right">
        <Lottie 
          animationData={Home_anim}
        />
      </div>
    </div>
  );
};

export default Home;
