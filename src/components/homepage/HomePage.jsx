import {React,useState} from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image8 from "../../Images/HomePageImages/image8.jpg";
import image9 from "../../Images/HomePageImages/image9.jpg";
import image10 from "../../Images/HomePageImages/image10.jpg";
import "../../CSS/HomePage.scss";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router";
import Loader from "../core/loader";

function HomePage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const customconstruction = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/services/customconstruction");
    }, 2000);
  };
  const remodellingservices = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("services/remodellingservices");
    }, 2000);
  };
  const MyCarousel = () => {
    return (
      <div className="carousel-main">
        <Carousel className="w-100 h-50" interval={2000}>
          <Carousel.Item>
            <div className="maindiv">
              <img className="carousel-image" src={image8} alt="First slide" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="maindiv">
              <img className="carousel-image" src={image9} alt="Second slide" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="maindiv">
              <img className="carousel-image" src={image10} alt="Third slide" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  };

  return (
    <div className="d-flex justify-content-center flex-column text-center">
      <section>
        <div className="d-flex justify-content-end">
          <div className="logo"></div>
        </div>
      </section>
      <section>
        <div className="carousel-main">
          <MyCarousel />
        </div>
      </section>
      <section className="maindiv w-100">
        <div className="AVIAR-intro pt-4">
          <div className="container">
            <h2 className="pb-2">AVIAR BUILDERS</h2>
            <div className=" maindiv">
              <p className="AVIARtext-intro ">
                Work with AVIAR Builders and experience the difference of working with the #1 custom home builder in
                Bloomington & Champaign. Our team's expertise sets us apart in building the custom home of your dreams.
                For new construction homes , we invite you to experience the AVIAR Builders
                difference.
                <br />
                Thank you and be safe.
              </p>
            </div>
            <div className="maindiv">
              <button className="button m-3" onClick={customconstruction}>
                Custom Homes
                {isLoading && (
                  <div>
                    <Loader />
                  </div>
                )}
              </button>
              {/* <button className="button m-3" onClick={remodellingservices}>
                Home Remodeling
                {isLoading && (
                  <div>
                    <Loader />
                  </div>
                )}
              </button> */}
            </div>
            <div className="maindiv flex-row p-2">
              <div className="avr-intro-image mx-2"></div>
              <div className="avr-intro-image2 mx-2"></div>
              <div className="avr-intro-image3 mx-2"></div>
              <div className="avr-intro-image4 mx-2"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-1">
        <div className="contains">
          <div className="container">
            <Row className="mission-vision my-3">
              <Col className="mission-column">
                <div className="mission-inner-column">
                  <div className="mission-box"></div>
                </div>
                <h5>OUR MISSION</h5>
                <div className="text-back">
                  <p className="w-75 ">
                    To enable our clients to transform their business into high performing and productive with very
                    optimal resources.
                  </p>
                </div>
              </Col>
              <Col className="vision-column">
                <div className="vision-inner-column ">
                  <div className="vision-box"></div>
                </div>
                <h5>OUR VISION</h5>
                <div className="text-back">
                  <p className="alignment-text ">
                    Leverage efficient technologies and innovate small, mid-level business, educational and charity
                    institutions processes.
                  </p>
                </div>
              </Col>
            </Row>
            <Row id="services" className="services section-mobile pb-3">
              <div className="container mt-5" data-aos="fade-up">
                <h2 className="mb-4">OUR CORE VALUES</h2>
                <div className="row gy-5">
                  <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                    <div className="service-item">
                      <div className="img">
                        <img
                          src={require("../../Images/HomePageImages/Business team climbing giant handshake with support of leader.jpg")}
                          className="img-height"
                          alt=""
                        />
                      </div>
                      <div className="details shadow-lg">
                        <div className="icon">
                          <i className="bi bi-activity"></i>
                        </div>
                        <a className="hide-link :: before">
                          <h3>HUMILITY</h3>
                        </a>
                        <p>
                          Listening to others, showing gratitude, focusing on the present, treating everyone as special.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                    <div className="service-item">
                      <div className="img">
                        <img src={require("../../Images/HomePageImages/20943659.jpg")} className="img-height" alt="" />
                      </div>
                      <div className="details shadow-lg">
                        <div className="icon">
                          <i className="bi bi-broadcast"></i>
                        </div>
                        <a className="stretched-link hide-link">
                          <h3>COLLABRATION</h3>
                        </a>
                        <p>
                          Creating an environment that enables collaboration of every level of talent and bringing the
                          best out of the client and self.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                    <div className="service-item">
                      <div className="img">
                        <img src={require("../../Images/HomePageImages/8104960.jpg")} className="img-height" alt="" />
                      </div>
                      <div className="details shadow-lg">
                        <div className="icon">
                          <i className="bi bi-easel"></i>
                        </div>
                        <a className="stretched-link hide-link">
                          <h3>AGILITY</h3>
                        </a>
                        <p>
                          Thinking on feet and providing out of box simple solutions, continuous learning and adaptive
                          to any changes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
            <Row id="services" className="services section-mobile pb-3">
              <div className="container mt-5" data-aos="fade-up">
                <div className="row gy-5">
                  <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                    <div className="service-item">
                      <div className="img">
                        <img src={require("../../Images/HomePageImages/6859168.jpg")} className="img-height" alt="" />
                      </div>
                      <div className="details shadow-lg">
                        <div className="icon">
                          <i className="bi bi-activity"></i>
                        </div>
                        <a className="hide-link :: before">
                          <h3>COMMITMENT</h3>
                        </a>
                        <p>
                          Commitment unlocks the doors of imagination, allows vision, and gives us the right stuff to
                          turn our dream into reality.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                    <div className="service-item">
                      <div className="img">
                        <img src={require("../../Images/HomePageImages/20945391.jpg")} className="img-height" alt="" />
                      </div>
                      <div className="details shadow-lg">
                        <div className="icon">
                          <i className="bi bi-broadcast"></i>
                        </div>
                        <a href="/homepage/integrity" className="stretched-link hide-link">
                          <h3>INTEGRITY</h3>
                        </a>
                        <p>
                          Being ethically unyielding and honest and inspiring trust by saying what we mean, matching
                          our...
                        </p>
                        <a href="/homepage/integrity" className="read-more hide-link">
                          <span className="d-flex justify-content-center fs-18">Read More</span>
                          <i className="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                    <div className="service-item">
                      <div className="img">
                        <img src={require("../../Images/HomePageImages/6155818.jpg")} className="img-height" alt="" />
                      </div>
                      <div className="details shadow-lg">
                        <div className="icon">
                          <i className="bi bi-easel"></i>
                        </div>
                        <a href="/homePage/client-value-creation" className="stretched-link hide-link">
                          <h3 className="mt-0">CLIENT VALUE CREATION</h3>
                        </a>
                        <p>Enabling clients to become high-performance businesses and creating ...</p>
                        <a href="/homePage/client-value-creation" className="read-more hide-link">
                          <span className="mb-1 d-flex justify-content-center fs-18">Read More</span>
                          <i className="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
}
export default HomePage;
