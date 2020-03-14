import React from "react";
import "../stylesheets/app.scss";

const App = () => (
  <>
    <div className="header-container">
      <header className="header">
        Navigation Bar
      </header>
    </div>

    <div className="room-main">
      <div className="room-images">
        Images
      </div>

      <div className="room-main-body-container">
        <div className="room-main-body">
          <div className="room-main-body-left">
            Left Content
          </div>

          <div className="room-main-body-right">
            <div className="reservation-container">
              <div className="reservation-component">
                Component
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default App;
