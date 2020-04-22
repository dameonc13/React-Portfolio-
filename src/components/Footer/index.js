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
              <i
                className="fa fa-github"
                //  style="font-size:48px;color:red"
                onclick="window.location.href='https://github.com/dameonc13'"
              ></i>
            </section>
            <p>Github</p>
            <p>Copyright &copy;</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
