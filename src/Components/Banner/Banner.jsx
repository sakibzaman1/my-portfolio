import React, { useEffect } from 'react';
import bannerVideo from '../../assets/videos/banner-portfolio.mp4'
import AOS from "aos";
import "aos/dist/aos.css";


const Banner = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);



    useEffect(() => {
        // Get the video element by class name
        const video = document.querySelector('.banner-video');
    
        // Set the playback speed to 0.5 (half the normal speed)
        video.playbackRate = 0.5;
      }, []); // Empty dependency array ensures the effect runs only once after the initial render

    return (
        <div>
              <div className="relative">
        {/* Video */}
       <div>
       <video autoPlay loop muted className="opacity-90 w-full banner-video">
          <source src={bannerVideo} type="video/mp4" />
        </video>
       </div>
      
       <div className="absolute top-40 bottom-10 w-full h-full justify-center pl-96 flex gap-10">
    {/* Name div */}
    <div className="text-black ">
      <h1 className='lg:text-7xl text-2xl font-bold text-gray-500'  data-aos="fade-right" data-aos-duration="2000">MD. SAKIB UZ ZAMAN</h1>
      <p className='lg:text-3xl text-gray-400' data-aos="fade-left" data-aos-duration="2000">Front-End Developer</p>
    </div>
  </div>
      </div>
        </div>
        
    );
};

export default Banner;