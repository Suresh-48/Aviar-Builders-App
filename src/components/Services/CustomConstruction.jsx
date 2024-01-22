import React from "react";

function services() {
  return (
    <div className="construction mb-0">
      <div>
        <section className="contain text-center my-1">
          <div className="common-header">CUSTOM CONSTRUCTION</div>
        </section>
        <div className="custom-construction-bg pt-3">
          <div style={{ paddingBottom: "5px" }}>
            <h4 className="service-heading custom-subtitle pb-1 ">CUSTOM HOMES BUILT ON YOUR LOT</h4>
            <div>
              <h8 className="service-content ">
                We can build your dream home utilizing one of our unique plans and customize it to your desired vision.
                Or we can start from scratch, and build to your unique tastes. We offer a full set of custom home
                construction services including home and interior design. Already have a plan? We will work seamlessly
                with your own architect and designers.
              </h8>
            </div>
            <div style={{ paddingTop: "20px" }} className="pb-1">
              <h8 className="service-content  pb-1">
                Working with one of our architect partners, we can assist with the creation of your new home from site
                selection all the way through to completion. Make the custom home building process a one stop shop and
                have the benefit of design and construction expertise from the first draft to the final coat of paint.
              </h8>
            </div>
          </div>
          <div>
            <h4 className="service-heading pb-1">CUSTOM HOME BUILDING PROCESS</h4>
            <div>
              <h8 className="service-content ">
                Our custom home building process starts with a meeting, where we'll get to know you and what you're
                looking for, so that way we can deliver a satisfying product. We'll be in close contact throughout the
                home's construction, giving you the chance to highlight concerns and make suggestions. Read more about
                our custom home building process here.
              </h8>
            </div>
            <div className="custom-style">
              <h8>
                See our <b className="custom-color">Photo Gallery</b> for pictures of our Custom Construction Projects.
              </h8>
            </div>
            <div className="custom-style">
              <img src={require("../../Images/Services/gold-arrow-left.jpeg")} alt="" />
              <h8 className="custom-color">Get Inspired</h8>
              <img src={require("../../Images/Services/gold-arrow-right.jpeg")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default services;
