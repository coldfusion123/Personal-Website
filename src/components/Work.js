import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <section className="section-4">
          <div className="contact-info">
            <div className="wrapper">
              {" "}
              <h2>my Work</h2>
              <h3>
                <sup>01</sup>
                <a href="https://github.com/coldfusion123/rent-a-car">
                  Rent-a-car
                </a>
              </h3>
            </div>
            <div className="wrapper">
              <h3>
                <sup>02</sup>
                <a>Comming soon...</a>
              </h3>
            </div>
            <div className="wrapper">
              <h3>
                <sup>03</sup>
                <a>Comming soon...</a>
              </h3>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
