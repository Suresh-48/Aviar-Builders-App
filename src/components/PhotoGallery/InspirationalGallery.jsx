// import React from "react";
// import "../../CSS/PhotoGallerry.scss";

// function InspirationalGallery() {
//   return (
//     <div>
//       <section id="work" class="portfolio-mf sect-pt4 route">
//         <div class="container">
//           <div class="row">
//             <div class="col-sm-12">
//               <div class="title-box text-center">
//                 <h3 class="title-a">Portfolio</h3>
//                 <p class="subtitle-a">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//                 <div class="line-mf"></div>
//               </div>
//             </div>
//           </div>
//           <div class="row">
//             <div class="col-md-4">
//               <div class="work-box">
//                 <a href="assets/img/work-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
//                   <div class="work-img">
//                     <img src={require("../../Images/FloorPlans/property-1.jpg")} className="img-a img-fluid" alt="" />{" "}
//                   </div>
//                 </a>
//                 <div class="work-content">
//                   <div class="row">
//                     <div class="col-sm-8">
//                       <h2 class="w-title">Lorem impsum dolor</h2>
//                       <div class="w-more">
//                         <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
//                       </div>
//                     </div>
//                     <div class="col-sm-4">
//                       <div class="w-like">
//                         <a href="portfolio-details.html">
//                           {" "}
//                           <span class="bi bi-plus-circle"></span>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-md-4">
//               <div class="work-box">
//                 <a href="assets/img/work-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
//                   <div class="work-img">
//                     <img src={require("../../Images/FloorPlans/property-1.jpg")} className="img-a img-fluid" alt="" />{" "}
//                   </div>
//                 </a>
//                 <div class="work-content">
//                   <div class="row">
//                     <div class="col-sm-8">
//                       <h2 class="w-title">Loreda Cuno Nere</h2>
//                       <div class="w-more">
//                         <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
//                       </div>
//                     </div>
//                     <div class="col-sm-4">
//                       <div class="w-like">
//                         <a href="portfolio-details.html">
//                           {" "}
//                           <span class="bi bi-plus-circle"></span>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-md-4">
//               <div class="work-box">
//                 <a href="assets/img/work-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
//                   <div class="work-img">
//                     <img src={require("../../Images/FloorPlans/property-1.jpg")} className="img-a img-fluid" alt="" />{" "}
//                   </div>
//                 </a>
//                 <div class="work-content">
//                   <div class="row">
//                     <div class="col-sm-8">
//                       <h2 class="w-title">Mavrito Lana Dere</h2>
//                       <div class="w-more">
//                         <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
//                       </div>
//                     </div>
//                     <div class="col-sm-4">
//                       <div class="w-like">
//                         <a href="portfolio-details.html">
//                           {" "}
//                           <span class="bi bi-plus-circle"></span>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-md-4">
//               <div class="work-box">
//                 <a href="assets/img/work-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
//                   <div class="work-img">
//                     <img src={require("../../Images/FloorPlans/property-1.jpg")} className="img-a img-fluid" alt="" />{" "}
//                   </div>
//                 </a>
//                 <div class="work-content">
//                   <div class="row">
//                     <div class="col-sm-8">
//                       <h2 class="w-title">Bindo Laro Cado</h2>
//                       <div class="w-more">
//                         <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
//                       </div>
//                     </div>
//                     <div class="col-sm-4">
//                       <div class="w-like">
//                         <a href="portfolio-details.html">
//                           {" "}
//                           <span class="bi bi-plus-circle"></span>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-md-4">
//               <div class="work-box">
//                 <a href="assets/img/work-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
//                   <div class="work-img">
//                     <img src={require("../../Images/FloorPlans/property-1.jpg")} className="img-a img-fluid" alt="" />{" "}
//                   </div>
//                 </a>
//                 <div class="work-content">
//                   <div class="row">
//                     <div class="col-sm-8">
//                       <h2 class="w-title">Studio Lena Mado</h2>
//                       <div class="w-more">
//                         <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
//                       </div>
//                     </div>
//                     <div class="col-sm-4">
//                       <div class="w-like">
//                         <a href="portfolio-details.html">
//                           {" "}
//                           <span class="bi bi-plus-circle"></span>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-md-4">
//               <div class="work-box">
//                 <a href="assets/img/work-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
//                   <div class="work-img">
//                     <img src={require("../../Images/FloorPlans/property-1.jpg")} className="img-a img-fluid" alt="" />{" "}
//                   </div>
//                 </a>
//                 <div class="work-content">
//                   <div class="row">
//                     <div class="col-sm-8">
//                       <h2 class="w-title">Studio Big Bang</h2>
//                       <div class="w-more">
//                         <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2017</span>
//                       </div>
//                     </div>
//                     <div class="col-sm-4">
//                       <div class="w-like">
//                         <a href="portfolio-details.html">
//                           {" "}
//                           <span class="bi bi-plus-circle"></span>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default InspirationalGallery;
import React from "react";
import { Container } from "react-bootstrap";

function Inspirationalgallery() {
  return (
    <div className="construction">
      <section className="contain my-1">
        <div className="common-header">INSPIRATION GALLERY</div>
      </section>
      <div>
        <div className="custom-construction-bg pt-3">
          <div>
            <p>
              Need some inspiration for your home? Our inspiration gallery includes photos of AVIAR custom
              homes.
            </p>
          </div>

          <div className="service-center">
            <p>
              Checkout <b className="custom-color">AVIAR Builders</b> Projects on Houzz
            </p>
          </div>
          <div className="service-center">
            <img src={require("../../Images/Services/element-design.jpeg")} alt="" className="service-gallery br-5" />
          </div>
          <div>
            <Container className="text-center">
              <div className="row mt-5">
                <div className="col-lg-6">
                  <img src={require("../../Images/Services/dual entry.jpeg")} alt="" className="borders " />
                </div>
                <div className="col-lg-6 ">
                  <img src={require("../../Images/Services/kitchen.jpeg")} alt="" className="borders " />
                </div>
                <div className="col-lg-6 ">
                  <img src={require("../../Images/Services/dual entry.jpeg")} alt="" className="borders " />
                </div>
                <div className="col-lg-6 ">
                  <img src={require("../../Images/Services/kitchen.jpeg")} alt="" className="borders " />
                </div>
                <div className="col-lg-6 ">
                  <img src={require("../../Images/Services/dual entry.jpeg")} alt="" className="borders" />
                </div>
                <div className="col-lg-6 ">
                  <img src={require("../../Images/Services/kitchen.jpeg")} alt="" className="borders" />
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inspirationalgallery;
