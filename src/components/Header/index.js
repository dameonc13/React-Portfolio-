import React from "react";
import "./style.css";
import pro from "../images/Profile.jpg";

function Header() {
  return (
    <div>
      <header className="bg-img">
        <div className="row ">
          <div className="col-md-12">
            <ul className="nav justify-content-center nav">
              <li className="nav-item">
                <a className="nav-link active" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="jumbotron">
          <img id="bio-image" src={pro} alt="Dameon" />
          <h1 className="display-4">Dameon Charley!</h1>
          <p className="lead">
            Hi Everyone my name is Dameon Charley a Full Stack Web Devolper. You
            can find some of my recent projects below
          </p>
          <hr className="my-4" />
          <p>
            {" "}
            It's not what happens to you, but how you React to it that matters!
          </p>
        </div>
      </header>
    </div>
  );
}
export default Header;
