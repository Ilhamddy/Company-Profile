// "use client"
import React from "react";
import Networth from "./components/Networth";
import AboutHead from "./components/AboutHead";
import Visimisi from "./components/Visimisi";
import Cultures from "./components/Cultures";
import TeamAbout from "./components/TeamAbout";
import ContactAbout from "./components/ContactAbout";

const About = () => {
  // const response = await fetch('https://randomuser.me/api/?results=8&nat=in&gender=male');
  // const { results } = await response.json();
  // console.log(results);
  return (
    <section className="max-h-full  max-w-full md:h-full md:w-full" id="about">
      {/* {
                results.map((data, index) => {
                    // return <Image src={data.picture.large} width={20} height={20} />
                    return <DataAbout key={index} data={data} />
                    // return <dataAbout key={index} data={data} />
                })
            } */}
      <AboutHead />
      <Networth />
      <Visimisi />
      <TeamAbout />
      <Cultures />
      <ContactAbout />
    </section>
  );
};

export default About;
