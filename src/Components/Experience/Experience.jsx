import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import reelRadarLogo from '../../assets/Images/ReelRadarLogo.png'

const Experience = () => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div>
            
            <div class=" px-8 rounded-lg mb-20 mt-4 lg:flex lg:flex-row-reverse items-center justify-center">
  <h2 class=" font-bold mb-4 text-5xl lg:w-1/2" data-aos="fade-down" data-aos-delay="200"  data-aos-duration="2000">Experience</h2>

  <div className="divider lg:divider-horizontal">X</div> 

  <div className='lg:w-1/2 px-10' data-aos="fade-right" data-aos-delay="200"  data-aos-duration="2000">
  <div class="mb-2 bg-transparent">
  <figure className="px-4 pt-2">
    <a target='blank' href="https://reel-radar.netlify.app"><img src={reelRadarLogo} alt="Shoes" className="rounded-full h-60 w-60 mx-auto" /></a>
  </figure>
  </div>

 
  <div class="mb-6 text-lg" data-aos="fade-right" data-aos-delay="200"  data-aos-duration="2000">
    <h3 class="text-xl font-semibold text-indigo-950 mb-2">A Complete MERN Stack project</h3>
    <p class="text-gray-700 mb-2">Under Project MOON kNIGHT of <span className='italic bold text-purple-600'><a target='blank' href="https://www.programming-hero.com/">Programmimg Hero</a></span></p>
    <h2 className='mb-4'>with a <span className='text-blue-600'><a target='blank' href="https://drive.google.com/file/d/1JBi0krPxuOznH_w2SWfWfF-WDtpuEM92/view?usp=sharing">Letter of Recognition</a></span></h2>
    <p>A go-to destination for movie lovers seeking reliable reviews and recommendations to enhance their cinematic experience.</p>    
   
  </div>
  </div>

 
</div>
{/* <p class="text-gray-700 mt-4 mb-20"  data-aos="fade-up" data-aos-delay="200"  data-aos-duration="2000">
    My commitment to staying abreast of the latest developments in React and front-end technologies underscores my dedication to delivering high-quality, innovative solutions.
  </p> */}
  <hr className='w-1/2 mx-auto shadow-2xl'/>

        </div>
    );
};

export default Experience;