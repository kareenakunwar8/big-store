import React from "react";
import AboutLeftSection from "./AboutLeftSection/AboutLeftSection";
import AboutRightSection from "./AboutRightSection/AboutRightSection";

function About() {
  return (
    <div className="lg:flex md:flex gap-10 p-6 mt-16">
      <AboutLeftSection />
      <AboutRightSection />
    </div>
  );
}

export default About;
