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
                with your ReferPro account, you get access to<br/> industry's best payment stack to help<br/> your business go global.
            </div>
            <div className="btn btn-primary mt-3 px-5 py-3">
                Signup Now!
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
