import React from "react";
import "./style.css";
import almanac from "../images/Almanac.PNG";
import basketball from "../images/basketball.PNG";
import burgers from "../images/burgers.PNG";
import noteTaker from "../images/note-taker.PNG";
import weather from "../images/Weather-Dash.PNG";
import Emp_Track from "../images/Emp_Track.PNG";

function Portfolio() {
  return (
    <div className="img-back">
      <div id="portfolio">
        <div className="row">
          <div className="col-md-12">
            <h2>Portfolio</h2>
          </div>
        </div>

        <div className="row card-row">
          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top img-box"
                src={burgers}
                alt="Burgers"
              />
              <div className="card-body">
                <h5 className="card-title">Burger-List</h5>
                <p className="card-text">
                  An app that uses Node.js and MYSQL on the backend to show of
                  Crud actions{" "}
                </p>
                <p>
                  <a
                    href="https://devour-burgers-list.herokuapp.com/"
                    rel="noopener noreferrer"
                    target="__blank"
                  >
                    <i className="fa fa-home" onclick="window.location.href=''">
                      {" "}
                    </i>
                  </a>

                  <a
                    href="https://github.com/dameonc13/Burger-List"
                    rel="noopener noreferrer"
                    target="__blank"
                  >
                    <i
                      className="fa fa-github git"
                      onclick="window.location.href=''"
                    ></i>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top img-box"
                src={weather}
                alt="Weather-Dashboard"
              />
              <div className="card-body">
                <h5 className="card-title">Weather-Dashboard</h5>
                <p className="card-text">
                  {" "}
                  A weather app that provide current and five-day forecast for
                  cities in America fetching info from OpenWeatherMap API{" "}
                </p>
                <p>
                  <a
                    href="https://dameonc13.github.io/Weather-Dashboard/"
                    rel="noopener noreferrer"
                    target="__blank"
                  >
                    <i
                      className="fa fa-home"
                      onclick="window.location.href=''"
                    ></i>
                  </a>

                  <a
                    href="https://github.com/dameonc13/Weather-Dashboard"
                    rel="noopener noreferrer"
                    target="__blank"
                  >
                    <i
                      className="fa fa-github git"
                      onclick="window.location.href=''"
                    ></i>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top img-box"
                src={almanac}
                alt="Almanac"
              />
              <div className="card-body">
                <h5 className="card-title">Almanac</h5>
                <p className="card-text">
                  A team project that provides and individual with everything
                  they would need for the Day such as current news, weather,
                  word of the day and history of the day.
                </p>
                <p>
                  <a
                    href="https://dameonc13.github.io/Almanac/"
                    rel="noopener noreferrer"
                    target="__blank"
                  >
                    <i
                      className="fa fa-home"
                      onclick="window.location.href=''"
                    ></i>
                  </a>

                  <a
                    href="https://github.com/dameonc13/Almanac"
                    rel="noopener noreferrer"
                    target="__blank"
                  >
                    <i
                      className="fa fa-github git"
                      onclick="window.location.href=''"
                    ></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row card-row">
          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top img-box"
                src={noteTaker}
                alt="Note-Taker"
              />
              <div className="card-body">
                <h5 className="card-title">Note-Taker</h5>
                <p className="card-text">
                  An app with nodejs working in the background. This app was
                  created for anyone who wants to take notes wherever they
                  maybe. It's perfect for students or any individual who wants
                  to take some notes and save for later use.
                </p>
                <p>
                  <a
                    href="https://dc-note-taker.herokuapp.com/notes"
                    rel="noopener noreferrer"
                    target="__blank"
                  >
                    <i
                      className="fa fa-home"
                      onclick="window.location.href=''"
                    ></i>
                  </a>

                  <a
                    href="https://github.com/dameonc13/Note-Taker"
                    rel="noopener noreferrer"
                    target="__blank"
                  >
                    <i
                      className="fa fa-github git"
                      onclick="window.location.href='"
                    ></i>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top img-box"
                src={basketball}
                alt="Basketball-Game"
              />
              <div className="card-body">
                <h5 className="card-title"> Basketball Game</h5>
                <p className="card-text">
                  A simple Full Stack basketball game. This application utilizes
                  Node.js MySQL to store the score and username of those who
                  played the game. It also uses NBA-API to see all the current
                  players for each team when the respective team logo is clicked
                  on.
                </p>
                <p>
                  <a
                    href="https://basketball-game.herokuapp.com/"
                    rel="noopener noreferrer"
                    target="__blank"
                  >
                    <i className="fa fa-home" onclick="window.location.href=''">
                      {" "}
                    </i>
                  </a>

                  <a
                    href="https://github.com/dameonc13/project2"
                    rel="noopener noreferrer"
                    target="__blank"
                  >
                    <i
                      className="fa fa-github git"
                      onclick="window.location.href=''"
                    ></i>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top img-box"
                src={Emp_Track}
                alt="Emp_Track"
              />
              <div className="card-body">
                <h5 className="card-title">Employee-Tracker</h5>
                <p className="card-text">
                  Employee Tracker is a command-line interface Node.js
                  application for a small start-up Company. You're able to
                  utilize CRUD actions to make changes to the Database{" "}
                </p>
                <p>
                  <a href="#" rel="noopener noreferrer" target="__blank">
                    <i
                      className="fa fa-home"
                      onclick="window.location.href='#'"
                    >
                      {" "}
                    </i>
                  </a>

                  <a
                    href="https://github.com/dameonc13/Employee-Tracker"
                    rel="noopener noreferrer"
                    target="__blank"
                  >
                    <i
                      className="fa fa-github git"
                      onclick="window.location.href=''"
                    ></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
