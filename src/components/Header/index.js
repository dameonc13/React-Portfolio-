import React from "react";
import "./style.css";
import Images from "../images/Images";

console.log(Images);

function Header() {
  return (
    <div>
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
        <img id="bio-image" src={Images.profilePic} alt="Dameon" />
        <h1 className="display-4">Dameon Charley!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
      </div>
    </div>
  );
}
export default Header;
