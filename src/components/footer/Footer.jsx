import React from "react";
import FooterTop from "./FooterTop";
import Contact from "./Contact";
import FooteLinks from "./FooteLinks";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <div>
      <div className="">
        <FooterTop />
        <Contact />
        <FooteLinks />
        <FooterBottom />
      </div>
    </div>
  );
};

export default Footer;
