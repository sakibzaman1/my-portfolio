import React from 'react';

const ProjectCard = ({project}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={project?.projectLogo} alt="Shoes" className="rounded-full h-30 w-30" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{project?.projectTitle}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProjectCard;