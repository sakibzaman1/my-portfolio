import React, { useEffect } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {


    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    

    return (
        <div className='mt-20 mb-40'>
            <h1 className='hidden lg:flex text-left pl-16 text-5xl mb-10' data-aos="fade-right" data-aos-delay="100"  data-aos-duration="4000">Education</h1>
            <div className="stats hidden lg:flex mx-10 shadow" data-aos="fade-right" data-aos-delay="100"  data-aos-duration="2000">
  
  <div className="stat " data-aos="fade-right" data-aos-delay="100"  data-aos-duration="2000">
    <div className="stat-figure text-blue-700">
      <MenuBookIcon></MenuBookIcon>
    </div>
    <div className="stat-title">Currently</div>
    <div className="stat-value">Bachelor Of Science</div>
    <div className="stat-desc">jun 2020 - Present</div>
  </div>
  
  <div className="stat" data-aos="fade-right" data-aos-delay="100"  data-aos-duration="2000">
    <div className="stat-figure text-black">
     <CodeIcon></CodeIcon>
    </div>
    <div className="stat-title">Major</div>
    <div className="stat-value">CSE</div>
    <div className="stat-desc">Computer Science & Engineering</div>
  </div>
  
  <div className="stat" data-aos="fade-right" data-aos-delay="100"  data-aos-duration="2000">
    <div className="stat-figure text-purple-700">
    <SchoolIcon></SchoolIcon>
    </div>
    <div className="stat-title">Institution</div>
    <div className="stat-value">University of Global Village</div>
    <div className="stat-desc">Barishal, Bangladesh</div>
  </div>

  
</div>
        </div>
    );
};

export default Education;