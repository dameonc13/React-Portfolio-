import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-md-12">
          <footer>
            <section>
              {" "}
              <a
                href="https://github.com/dameonc13"
                rel="noopener noreferrer"
                target="__blank"
              >
                {" "}
                <i
                  className="fa fa-github"
                  //  style="font-size:48px;color:red"
                  onClick="window.location.href=''"
                ></i>
              </a>
              <a
                href="https://www.linkedin.com/in/dameon-charley-0990518b/"
                rel="noopener noreferrer"
                target="__blank"
              >
                <i
                  className="fa fa-linkedin"
                  //  style="font-size:48px;color:red"
                ></i>
              </a>
              <a
                href="mailto:dameoncharley13@hotmail.com"
                rel="noopener noreferrer"
                target="__blank"
              >
                <i
                  className="fa fa-envelope-square"
                  //  style="font-size:48px;color:red"
                ></i>
              </a>
            </section>

            <p>Copyright &copy;</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
