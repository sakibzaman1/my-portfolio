import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import AOS from "aos";
import "aos/dist/aos.css";


const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(()=> {
        fetch(`/projects.json`)
        .then(res=> res.json())
        .then(data=> setProjects(data))
    },[]);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    console.log(projects)

    return (
       <div id='projects'>
         <h1 className=" text-5xl text-center mt-20 py-2 px-10 mb-28 bg-gradient-to-r from-transparent via-gray-300 to-transparent text-black" data-aos="fade-up" data-aos-delay="100"  data-aos-duration="2000"><span className='p-4 shadow-sm'>My Complete Projects</span></h1>
       
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 px-10'>
            {
                projects?.map(project=> <ProjectCard key={project?.id} project={project}></ProjectCard>)
            }
        </div>
       </div>
    );
};

export default Projects;