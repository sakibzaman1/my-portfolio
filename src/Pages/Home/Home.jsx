import React from 'react';


import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import Projects from '../../Components/Projects/Projects';
import { useLoaderData } from 'react-router-dom';
import blueBg from '../../assets/Images/bg-blue.jpg'
import ContactForm from '../../Components/ContactForm/ContactForm';
import Education from '../../Components/Education/Education';
import Experience from '../../Components/Experience/Experience';

const Home = () => {

  const projects = useLoaderData();
  console.log(projects)

    return (
      <div className="">
        <section>
        <Banner></Banner>
        </section>
      <div className='text-black pb-20' >
      <section>
          <About></About>
        </section>
        <section>
          <Skills></Skills>
        </section>
        <section>
          <Projects></Projects>
        </section>
        <section>
          <Education></Education>
        </section>
        <section>
          <Experience></Experience>
        </section>
        <section>
          <ContactForm></ContactForm>
        </section>
      </div>
      </div>
      
    );
};

export default Home;