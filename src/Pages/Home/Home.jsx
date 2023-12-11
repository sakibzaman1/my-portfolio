import React from 'react';


import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import Projects from '../../Components/Projects/Projects';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

  const projects = useLoaderData();
  console.log(projects)

    return (
      <div className='bg-slate-200'>
        <section>
        <Banner></Banner>
        </section>
        <section>
          <About></About>
        </section>
        <hr />
        <section>
          <Skills></Skills>
        </section>
        <section>
          <Projects></Projects>
        </section>
      </div>
      
    );
};

export default Home;