import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div>
            
            <div class=" px-8 rounded-lg mb-20 mt-4 lg:flex lg:flex-row-reverse items-center justify-center">
  <h2 class=" font-bold mb-4 text-5xl lg:w-1/2" data-aos="fade-down" data-aos-delay="100"  data-aos-duration="2000">Experience</h2>

  <div className="divider lg:divider-horizontal">X</div> 

  <div className='lg:w-1/2 px-10' data-aos="fade-right" data-aos-delay="100"  data-aos-duration="2000">
  <div class="mb-6 bg-transparent">
    <h3 class="text-xl font-semibold text-indigo-950 mb-2">Front-end Development </h3>
    <p class="text-gray-700 mb-2">November - Present</p>
    <ul class="list-disc list-inside">
      <li>Developed a dynamic dashboard application using React, Redux, and Chart.js.</li>
      <li>Ensured responsive design for optimal user experience across various devices.</li>
    </ul>
  </div>

 
  <div class="mb-6" data-aos="fade-right" data-aos-delay="200"  data-aos-duration="2000">
    <h3 class="text-xl font-semibold text-indigo-950 mb-2">Front-end Development </h3>
    <p class="text-gray-700 mb-2">November - Present</p>
    <ul class="list-disc list-inside">
      <li>Developed a collaborative task management application using React and WebSocket.</li>
      <li>Integrated third-party libraries and components for enhanced functionality.</li>
      
    </ul>
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