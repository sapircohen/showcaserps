import React from "react";
import {Hero} from 'neal-react';


const Intro = (props) =>{
    return(
        <Hero backgroundImage="img/hero-bg-01.jpg"
        className="text-xs-center">
        <h1 className="display-4"> Declarative Landing Pages for React.js </h1>
        <p className="lead">Build a beautiful landing page in less than an hour.
          No more redundant code. Easily extensible.</p>
        <p>
          <a href="https://github.com/dennybritz/neal-react" target="_blank" className="btn btn-white">
            Get it on Github
          </a>
        </p>
      </Hero>
    )
}

export default Intro;