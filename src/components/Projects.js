import React from "react";
import { DiFirebase, DiJavascript1 } from "react-icons/di";

export class Projects extends React.Component {
  render() {
    return (
      <div className="projects-div">
        <section className="section-3">
          <div className="projects-title">
            <h1>PROJECTS</h1>
          </div>
          <div className="project-cards">
            <article class="card card--1">
              <div class="card__img"></div>
              <a
                href="https://github.com/coldfusion123/rent-a-car"
                class="card_link"
              >
                <div class="card__img--hover"></div>
              </a>
              <div class="card__info">
                <span class="card__category">
                  <DiJavascript1></DiJavascript1>
                  <DiFirebase></DiFirebase>
                </span>
                <h3 class="card__title">Rent-a-car</h3>
                <span class="card__by">
                  description{" "}
                  <a
                    href="https://github.com/coldfusion123/rent-a-car"
                    class="card__author"
                    title="author"
                  >
                    Car rental web application using JavaScirpt and Firebase
                  </a>
                </span>
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }
}
