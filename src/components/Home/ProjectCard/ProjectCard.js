import React from 'react';

const ProjectCard = (props) => {
    const { image, name, features, live, code } = props.myProject;
    return (
        <div className ="col-md-4 text-center project-set mb-5">
            <div className="card" style={{width: "18rem"}}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{color:'#1f85ce'}}>{name}</h5>
                    <p className="card-text">{features}</p>
                    <a href={live} className="btn btn-primary ">Live Site </a>
                    <a href={code} className="btn btn-primary"> Code</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;