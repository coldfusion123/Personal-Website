import React from "react";
import { FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export class Main extends React.Component {
  render() {
    return (
      <div className="main-components">
        <section className="section-1">
          <div className="overlay"></div>
          <ul className="social-icons">
            <li>
              <FaLinkedinIn></FaLinkedinIn>
            </li>
            <div className="border"></div>
            <li>
              <FaGithub></FaGithub>
            </li>
            <div className="border"></div>
            <li>
              <FaGoogle></FaGoogle>
            </li>
          </ul>
          <div className="intro">
            <h1 className="title-main">
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("ENGINEER")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("WEB DEVELOPER")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("MUSIC ENTHUSIAST")
                    .pauseFor(2000)
                    .start();
                }}
              />
            </h1>
          </div>
          <div className="btns"></div>

          {/* scrollDown button */}
          <div class="scroll-btn">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
          </div>
        </section>
      </div>
    );
  }
}
