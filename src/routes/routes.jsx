import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Spinner from "react-bootstrap/Spinner";
import Loader from "../components/core/loader";
import {
  HomePage,
  Integrity,
  Contact,
  DefaultLayout,
  AreasServed,
  BuildingProcess,
  FloorPlans,
  InspirationalGallery,
  ServiceRequestForm,
  BuildersTrend,
  WarantyInformation,
  CommunityLinks,
  Testimonials,
  AboutAviarBuilders,
  RecomenedPartner,
  Subdivisions,
  FrequentlyAskedQuestions,
  CustomConstruction,
  RemodellingServices,
  RealEstateBrokage,
  HomeForSales,
  LotsForSale,
  ComersialConstruction,
  OurHomes,
  // Loader,
  ClientValueCreation,
  OurWebsites,
} from "./Lazy";
import Remodelprojects from "../components/PhotoGallery/Remodelprojects";
// spinner or Loader
// const fallbackLoader = (
//   <div className="center">
//     <Spinner animation="border" variant="primary" />
//   </div>
// );

export default function Routers() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Duration of 2 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          {/* <Suspense fallback={fallbackLoader}> */}
          <Routes>
            <Route path="/" element={<Navigate to="/homepage" replace />} />
            <Route path="/our/websites" element={<OurWebsites />} />
            <Route path="" exact element={<DefaultLayout />}>
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/Contact" element={<Contact />} />
              {/* <Route path="/" element={<Navigate to="/" replace />} /> */}
              <Route path="/homePage/integrity" element={<Integrity />} />
              <Route path="/homePage/client-value-creation" element={<ClientValueCreation />} />
              <Route path="/aboutUs/areasserved" element={<AreasServed />} />
              <Route path="/aboutUs/buildingprocess" element={<BuildingProcess />} />
              <Route path="/floorplans" element={<FloorPlans />} />
              <Route path="/photogallery/inspirationalgallery" element={<InspirationalGallery />} />
              <Route path="/photogallery/ourhomes" element={<OurHomes />} />
              <Route path="/resources/servicerequestform" element={<ServiceRequestForm />} />
              <Route path="/resources/builderstrend" element={<BuildersTrend />} />
              <Route path="/resources/reecomenmdedpartners" element={<RecomenedPartner />} />
              <Route path="/resources/frequentlyaskedquestions" element={<FrequentlyAskedQuestions />} />
              <Route path="/resources/subdivisions" element={<Subdivisions />} />
              <Route path="/resources/Warantyinformation" element={<WarantyInformation />} />
              <Route path="/resources/communitylinks" element={<CommunityLinks />} />
              <Route path="/aboutus/testimonials" element={<Testimonials />} />
              <Route path="/aboutus/about-aviar-builders" element={<AboutAviarBuilders />} />
              <Route path="/services/customconstruction" element={<CustomConstruction />} />
              <Route path="/services/remodellingservices" element={<RemodellingServices />} />
              <Route path="/services/realestatebrokage" element={<RealEstateBrokage />} />
              <Route path="/services/comersialconstruction" element={<ComersialConstruction />} />
              <Route path="/forsale/homes-for-sale" element={<HomeForSales />} />
              <Route path="/forsale/lots-for-sale" element={<LotsForSale />} />
              <Route path="/photogallery/RemoteProjects" element={<Remodelprojects />} />
            </Route>
            {/* <Route path="/core/loader" element={<Loader />} /> */}
          </Routes>
          {/* </Suspense> */}
        </Router>
      )}
    </>
  );
}
