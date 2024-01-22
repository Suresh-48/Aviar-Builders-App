import React, { useState } from "react";
import "../../CSS/OurWebsites.scss";
import { Col, Row } from "react-bootstrap";
import Loader from "../core/loader";
import { useNavigate } from "react-router-dom";
import finance from "../../Images/HomePageImages/financelogo.png";
import technology from "../../Images/HomePageImages/logo.png";
import builders from "../../Images/Core/AVIAR_Builders_LLC_Logo-removebg-preview.png";

export default function OurWebsites() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const customconstruction = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/services/customconstruction");
    }, 2000);
  };
  return (
    <div className="text-center bgc">
      <section className="intro-card p-2">
        <div className="container card-div align-items-center">
          <Col className="intro-card-right text-start order-2 order-lg-1">
            <h2 className="intro-title">Welcome to AVIAR</h2>
            <div className="intro-font">
              AVIAR help our clients derive greater business value through better management of technology. We are
              committed to delivering excellence in creating innovative and flexible solutions for our clients.
            </div>
          </Col>
          {/* <Col className="intro-card-left order-1 order-lg-2"></Col> */}
        </div>
      </section>
      <section className="container s2-section">
        <div className="aboutcard p-2 m-3">
          <div className="card-left"></div>
          <div className="card-right">
            <a
              href="https://aviartechnologyservices.as.r.appspot.com/home-page"
              target="_blank"
              className="text-primary"
            >
              <img className="at-logo" src={technology}></img>
            </a>
            <div className="intro-font">
              AVIAR help our clients derive greater business value through better management of technology. We are
              committed to delivering excellence in creating innovative and flexible solutions for our clients.
            </div>
            {/* <div className="text-start">
              <p>
                Visit our
                <a
                  href="https://aviartechnologyservices.as.r.appspot.com/home-page"
                  target="_blank"
                  className="text-primary"
                >
                  {" "}
                  AVIAR Technology Services{" "}
                </a>
                for more information.
              </p>
            </div> */}
          </div>
        </div>
      </section>
      <section className="container s2-section">
        <div className="aboutcard p-2 m-3">
          <div className="card2-left"></div>
          <div className="card-right">
            <a
              href="http://aviarfinancialwebsite.s3-website.ap-south-1.amazonaws.com/#/forms/application"
              target="_blank"
            >
              <img className="at-logo2" src={finance}></img>
            </a>
            {/* <div className="text-start">
              <p>
                Visit our
                <a
                  href="http://aviarfinancialwebsite.s3-website.ap-south-1.amazonaws.com/#/forms/application"
                  target="_blank"
                  className="text-primary"
                >
                  {" "}
                  AVIAR Financial Services{" "}
                </a>
                for more information.
              </p>
            </div> */}
          </div>
        </div>
      </section>
      <section className="container s2-section">
        <div className="aboutcard p-2 m-3">
          <div className="card3-left"></div>
          <div className="card-right">
            <a href="/homepage" target="_blank" className="text-primary">
              <img className="at-logo3" src={builders}></img>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
