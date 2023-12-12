import React, { useEffect } from "react";
import sakibImage from "../../assets/Images/sakib-blue.png";
import Typewriter from "react-ts-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div id="about" className="lg:flex items-center py-20">
      <div className="lg:w-[70%]   p-4">
        <h1 className="text-7xl mb-6" data-aos="fade-right" data-aos-delay="100"  data-aos-duration="2000">About Me</h1>
        <p className="text-xl px-4">
          <Typewriter random={30} delay={10} speed={80} text="Hey, I'm MD.SAKIB UZ ZAMAN, a budding React web developer. Passionate
          about crafting seamless user interfaces, I thrive on turning concepts
          into interactive experiences. Proficient in HTML, CSS, and JavaScript,
          I've embraced React for its modular brilliance. Eager to learn and
          adapt, I'm on a mission to stay ahead in the dynamic web development
          scene. Whether it's optimizing performance or troubleshooting, I
          approach challenges with a can-do attitude. Currently honing my
          skills, I'm excited about opportunities to contribute and grow in a
          collaborative environment. Let's connect and explore the
          possibilities!"/>
        </p>
      </div>
      <div className="lg:w-[30%] flex justify-center">
        <img className="w-80 h-80 rounded-full" src={sakibImage} alt="" data-aos="zoom-in" data-aos-delay="100"  data-aos-duration="2000"/>
      </div>
    </div>
  );
};

export default About;
