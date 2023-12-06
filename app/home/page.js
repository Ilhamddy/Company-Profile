import React from "react";
import Header from "./component/Header";
import Content from "./component/Content";
import Powering from "./component/Powering";
import Services from "./component/Services";
import Partners from "./component/Partners";
import News from "./component/News";
import Contact from "./component/Contact";
import Testimonial from "./component/Testimonial";

const Homepage = () => {
  return (
    <section>
      <Header />
      <Content />
      <Services />
      <Powering />
      <Testimonial />
      <Partners />
      {/* <News /> */}
      <Contact />
    </section>
  );
};

export default Homepage;
