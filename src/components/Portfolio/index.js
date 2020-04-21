import React from "react";
import "./style.css";
import Images from "../images/Images";

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
                src="assets/images/burgers.PNG"
                alt="Burgers"
              />
              <div className="card-body">
                <h5 className="card-title">Burger-List</h5>
                <p className="card-text">
                  An app that uses Node.js and MYSQL on the backend to show of
                  Crud actions{" "}
                </p>
                <p>
                  <i
                    className="fa fa-home"
                    onclick="window.location.href='https://devour-burgers-list.herokuapp.com/'"
                  >
                    {" "}
                  </i>

                  <i
                    className="fa fa-github git"
                    onclick="window.location.href='https://github.com/dameonc13/Burger-List'"
                  ></i>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top img-box"
                src="assets/images/Weather-Dash.PNG"
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
                  <i
                    className="fa fa-home"
                    onclick="window.location.href='https://dameonc13.github.io/Weather-Dashboard/'"
                  ></i>

                  <i
                    className="fa fa-github git"
                    onclick="window.location.href='https://github.com/dameonc13/Weather-Dashboard'"
                  ></i>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top img-box"
                src="assets/images/Almanac.PNG"
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
                  <i
                    className="fa fa-home"
                    onclick="window.location.href='https://dameonc13.github.io/Almanac/'"
                  >
                    {" "}
                  </i>

                  <i
                    className="fa fa-github git"
                    onclick="window.location.href='https://github.com/dameonc13/Almanac'"
                  ></i>
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
                src="assets/images/note-taker.PNG"
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
                  <i
                    className="fa fa-home"
                    onclick="window.location.href='https://dc-note-taker.herokuapp.com/notes'"
                  >
                    {" "}
                  </i>

                  <i
                    className="fa fa-github git"
                    onclick="window.location.href='https://github.com/dameonc13/Note-Taker'"
                  ></i>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top img-box"
                src="assets/images/basketball.PNG"
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
                  <i
                    className="fa fa-home"
                    onclick="window.location.href='https://basketball-game.herokuapp.com/'"
                  >
                    {" "}
                  </i>

                  <i
                    className="fa fa-github git"
                    onclick="window.location.href='https://github.com/dameonc13/project2'"
                  ></i>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top img-box"
                src="assets/images/Emp_Track.PNG"
                alt="Day-Planner"
              />
              <div className="card-body">
                <h5 className="card-title">Employee-Tracker</h5>
                <p className="card-text">
                  Employee Tracker is a command-line interface Node.js
                  application for a small start-up Company. You're able to
                  utilize CRUD actions to make changes to the Database{" "}
                </p>
                <p>
                  <i className="fa fa-home" onclick="window.location.href='#'">
                    {" "}
                  </i>

                  <i
                    className="fa fa-github git"
                    onclick="window.location.href='https://github.com/dameonc13/Employee-Tracker'"
                  ></i>
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
