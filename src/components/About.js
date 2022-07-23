import React from "react";

export class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <section className="section-2">
          <div className="about-section">
            <h2>Hi, I'm Andrei Dindareanu 👋</h2>
            <p>
              {" "}
              Because I believe that by keeping things simple, I can emphasize
              details more, I attempt to do tasks as effectively as I can. I
              enjoy web programming, especially the front-end, and I can spend
              hours developing. I'm currently studying React.js, and I've
              already begun to set the groundwork for the following apps.{" "}
              <span>""</span>Everything is complicated because that's how we
              want it to be. Keep it simple!<span>""</span>
            </p>
            <p>
              Got any questions? &nbsp;
              <a href="mailto:dindareanuandrei@gmail.com"> Contact me.</a>
            </p>
          </div>
        </section>
      </div>
    );
  }
}
