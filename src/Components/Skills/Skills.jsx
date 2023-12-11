import React from 'react';
import react from '../../assets/Images/react.png'
import nodejs from '../../assets/Images/nodejs.png'
import express from '../../assets/Images/express.png'
import mongodb from '../../assets/Images/mongodb.png'
import html5 from '../../assets/Images/html5.png'
import css3 from '../../assets/Images/css3.png'
import js from '../../assets/Images/js.png'
import firebase from '../../assets/Images/firebase.png'
import tailwind from '../../assets/Images/tailwind.png'


const Skills = () => {
    return (
        <div className='my-20'>
            <h1 className="text-7xl text-center pb-6">My Skill Set</h1>
            <hr className='w-96 mx-auto'/>
            <section className='lg:flex gap-6 mt-14'>
                <img className='lg:w-28 border-2 p-2' src={react} alt="" />
                <img className='lg:w-28 border-2 p-2' src={nodejs} alt="" />
                <img className='lg:w-28 border-2 p-2' src={express} alt="" />
                <img className='lg:w-28 border-2 p-2' src={mongodb} alt="" />
                <img className='lg:w-28 border-2 p-2' src={html5} alt="" />
                <img className='lg:w-28 border-2 p-2' src={css3} alt="" />
                <img className='lg:w-28 border-2 p-2' src={js} alt="" />
                <img className='lg:w-28 border-2 p-2' src={firebase} alt="" />
                <img className='lg:w-28 border-2 p-2' src={tailwind} alt="" />
            </section>
        </div>
    );
};

export default Skills;