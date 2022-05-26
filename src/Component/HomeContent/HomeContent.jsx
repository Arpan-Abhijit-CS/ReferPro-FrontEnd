import React from "react";
import "./HomeContent.css";

function HomeContent() {
  return (
    <div>
      <div className="homecontent container">
        <div className="row">
          <div className="col">
            <div className="display-4 content-block">
              Your Dream ?<br />
              Global Business.
            </div>
            <div className="mt-3">
              Ours? enabling you to accept payment <br />
              from customers worldwide and expand <br />
              your business globally
            </div>
            <div className="mt-5">
              with your ReferPro account, you get access to
              <br /> industry's best payment stack to help
              <br /> your business go global.
            </div>
            <div className="btn btn-primary mt-3 px-5 py-3">Signup Now!</div>
            <div className="mt-3">contact</div>
          </div>
          <div className="col"></div>
        </div>
        <div className="mt-5">
          <hr />
        </div>
        <div className="mt-4 p-5 bg-dark text-white rounded">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <div>
                Looking for a payment solution designed for <br />
                your global enterprise needs ?
              </div>
              <br/>
              <div>
                Click Hexa for enterprise.
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 bg-light">
          <div className="text-center">
            Who's using hexa
          </div>
        </div>
        <div>
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
