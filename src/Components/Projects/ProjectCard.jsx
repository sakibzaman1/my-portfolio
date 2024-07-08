import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import AirplayIcon from '@mui/icons-material/Airplay';
import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {
  console.log(project.LiveLink)

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    return (
        <div>
            <div className="card bg-transparent pb-10 shadow-2xl mb-10 " data-aos="zoom-in" data-aos-delay="100"  data-aos-duration="2000">
  <figure className="px-4 pt-2">
    <img src={project?.projectScreenshot} alt="Shoes" className=" h-30 w-30" />
  </figure>
  <div className="card-body p-0 items-center text-center">
  <div className='flex items-center gap-2'>
  <figure className="px-4 pt-2">
    <img src={project?.projectLogo} alt="Shoes" className=" h-12 w-12 rounded-full shadow-2xl border-gray-300 border-2" />
  </figure>
    <h2 className="card-title text-3xl mb-6 mt-10">{project?.projectTitle}</h2>
  </div>
    <p className='h-20 flex-grow mb-4' >{project?.projectDetails}</p>
    <p className='mb-6'>Duration : {project?.duration}</p>
    <div className="card-actions">
     <div className='flex justify-center items-center lg:gap-10'>
      
     <Link target='blank' to={project?.LiveLink}>
     <button className="text-green-400 flex justify-between items-center gap-2 hover:scale-110 transition-transform font-semibold w-20 bg-transparent px-2 "><AirplayIcon></AirplayIcon><p className='text-black'>Live</p> </button>
     </Link>
     <div className="divider divider-horizontal"></div>
      <Link target='blank' to={project?.githubLink}>
      <button className="text-black flex items-center justify-between gap-2 hover:scale-110 transition-transform font-semibold w-20 bg-transparent px-2"><GitHubIcon></GitHubIcon><p>Github</p> </button>
      </Link>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProjectCard;