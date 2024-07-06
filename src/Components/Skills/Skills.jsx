import React, { useEffect } from 'react';
import react from '../../assets/Images/react.png'
import nodejs from '../../assets/Images/nodejs.png'
import express from '../../assets/Images/express.png'
import mongodb from '../../assets/Images/mongodb.png'
import html5 from '../../assets/Images/html5.png'
import css3 from '../../assets/Images/css3.png'
import js from '../../assets/Images/js.png'
import firebase from '../../assets/Images/firebase.png'
import tailwind from '../../assets/Images/tailwind.png'
import AOS from "aos";
import "aos/dist/aos.css";


const Skills = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    return (
        <div className='my-20'>
            <h1 className="text-3xl pl-12 mx-auto lg:text-5xl mb-10 px-10 py-2  bg-gradient-to-r from-transparent via-gray-300 to-transparent text-black text-center" data-aos="fade-down" data-aos-delay="100"  data-aos-duration="2000">My Skill Set</h1>
            
            <section className='lg:flex gap-8 mt-14 px-8 mx-auto justify-center'>
                <img className='lg:w-24  border-gray-300 rounded-full boder-4'  data-aos="fade-right" data-aos-delay="100"  data-aos-duration="1000" src={react} alt="" />
                <img className='lg:w-24  border-gray-300 rounded-full boder-4'  data-aos="fade-right" data-aos-delay="200"  data-aos-duration="1000" src={nodejs} alt="" />
                <img className='lg:w-24  border-gray-300 rounded-full boder-4'  data-aos="fade-right" data-aos-delay="300"  data-aos-duration="1000" src={express} alt="" />
                <img className='lg:w-24  border-gray-300 rounded-full boder-4'  data-aos="fade-right" data-aos-delay="400"  data-aos-duration="1000" src={mongodb} alt="" />
                <img className='lg:w-24  border-gray-300 rounded-full boder-4'  data-aos="zoom-in" data-aos-delay="800"  data-aos-duration="1000" src={html5} alt="" />
                <img className='lg:w-24  border-gray-300 rounded-full boder-4'  data-aos="fade-left" data-aos-delay="400"  data-aos-duration="1000" src={css3} alt="" />
                <img className='lg:w-24  border-gray-300 rounded-full boder-4'  data-aos="fade-left" data-aos-delay="300"  data-aos-duration="1000" src={js} alt="" />
                <img className='lg:w-24  border-gray-300 rounded-full boder-4'  data-aos="fade-left" data-aos-delay="200"  data-aos-duration="1000" src={firebase} alt="" />
                <img className='lg:w-24  border-gray-300 rounded-full boder-4'  data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000"  src={tailwind} alt="" />
            </section>
        </div>
    );
};

export default Skills;