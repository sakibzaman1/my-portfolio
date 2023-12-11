import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(()=> {
        fetch(`/projects.json`)
        .then(res=> res.json())
        .then(data=> setProjects(data))
    },[]);

    console.log(projects)

    return (
       <div>
         <h1 className="text-7xl  mt-20 text-center border-y-4 p-4">My Complete Projects</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {
                projects?.map(project=> <ProjectCard key={project?.id} project={project}></ProjectCard>)
            }
        </div>
       </div>
    );
};

export default Projects;