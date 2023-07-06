import React from 'react'

import "./Banner.css";
import Header from './Header';
const Banner = () => {
    return (
      <div className="container-fluid " id="banner">
        <div className="context col-6 text-center justify-content-center">
          {/* <h1>
            Save 90% cost with AI Powered <br /> Customer Service <br />{" "}
            <span style={{ color: "navy", fontWeight: "bold" }}>
              {" "}
              Voice Agent
            </span>
          </h1> */}
          <h1 className="text-center">
            {" "}
            <span>Save</span>
            <span>90%</span>
            <span>cost</span>
            <span>with</span>
            <span>AI</span>
            <span>Powered</span> <br />
            <span>Customer</span>
            <span>Service</span> <br />
            <span
              style={{ color: "navy", fontWeight: "bold" }}
              className=""
            >
              Voice Agent
            </span>
          </h1>

          <p>Want to know how?</p>
          <button
            className="knowhere "
            style={{
              width: "10rem",
              borderRadius: "50px",
              backgroundColor: "rgb(2, 2, 186)",
              color: "white",
              padding: "10px",
              border: "none",
            }}
          >
            Know here !{" "}
          </button>
        </div>

        <div className="area">
          <ul className="circles">
            <li className="li1"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            {/* ------------ */}
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    );
}

export default Banner
