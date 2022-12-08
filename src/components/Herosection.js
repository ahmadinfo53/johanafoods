import React from "react";
import Navbar from "./Navbar";

const Herosection = () => {
  return (
    <section className="herosection">
      <Navbar />
      <div className="whiterectangle"></div>
      <div className="topcircle"></div>
      <div className="heroimg"></div>
      <div className="bottomcircle"></div>
      <div className="leftside">
        <h2 className="herotitle">JOHANA FOODS</h2>
        <p className="herodesc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book and scrambled it to make a
          type specimen
        </p>
        <div className="lineundercontent"></div>
      </div>
    </section>
  );
};

export default Herosection;
