import React, { useState } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import "../../CSS/ForSale.scss";
import profile1 from "../../Images/ForSale/1.JPG";
import profile2 from "../../Images/ForSale/2.JPG";
import profile3 from "../../Images/ForSale/3.JPG";
import profile4 from "../../Images/ForSale/4.JPG";
import profile5 from "../../Images/ForSale/5.JPG";
import profile6 from "../../Images/ForSale/6.JPG";
import profile7 from "../../Images/ForSale/7.JPG";
import profile8 from "../../Images/ForSale/8.JPG";
export default function LotsForSale() {
    // const [activeTab, setActiveTab] = useState("home");

    // const handleTabSelect = (tabKey) => {
    //   setActiveTab(tabKey);
    // };
  return (
    <div className="text-center">
      <section className="contain my-1">
        <div className="common-header">LOTS FOR SALES</div>
      </section>
      <section className="page-background pt-3 flex-column">
        <div className="container">
          <Tabs defaultActiveKey="home" transition={false} className=" tab-font mb-4 d-flex justify-content-center">
            <Tab eventKey="home" title="All Areas">
              <div className="presentation w-100">
                <div>
                  <Row className="w-100 res-row">
                    <Col className="d-flex justify-content-between">
                      <div className="profile-card">
                        <img src={profile1} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile2} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile3} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="w-100 res-row">
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile4} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile5} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile6} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Mahomet">
              <div className="presentation">
                <div className="container">
                  <Row className="w-100 res-row">
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile7} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile8} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile1} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="w-100 res-row">
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile2} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile3} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile4} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Tab>
            <Tab eventKey="longer-tab" title="Normal">
              <div className="presentation">
                <div className="container">
                  <Row className="w-100 res-row">
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile5} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile6} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile7} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="w-100 res-row">
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile8} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile1} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile3} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
