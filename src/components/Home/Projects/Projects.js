import React from 'react';
// import spotless from '../../../photo/Spotless.PNG'
// import sketchWorld from '../../../photo/Sketch World.PNG'
// import tripTrap from '../../../photo/Trip Trap.PNG'
import ProjectCard from '../ProjectCard/ProjectCard';
const Projects = () => {
    const myProjects = [
        { 
            image:'https://i.ibb.co/k9mBp8B/Spotless.png',
            name:'Spotless',
            features:"It's a cleaning service website.You can login using google sign in method. Admin can add admin and also can add or delete services. User can set an appointment.",
            live:'https://modest-curie-c72a34.netlify.app',
            code:'https://github.com/Diganta165/spotless-client'
        },
        { 
            image:'https://i.ibb.co/9nD8wPv/Sketch-World.png',
            name:'Sketch World',
            features:"It's a art selling website. You can login using google sign in authentication. Admin can add sketches with name, price and photo",
            live:'https://upbeat-kilby-bc862d.netlify.app',
            code:'https://github.com/Diganta165/sketch-world'
        },
        { 
            image:'https://i.ibb.co/tQPf3Hf/Trip-Trap.png',
            name:'Trip Trap',
            features:"It's a ride sharing website.You can login using google sign in method. User can set destination, pickup date and ride type",
            live: 'https://naughty-panini-776493.netlify.app',
            code: 'https://github.com/Diganta165/trip-trap'
        }
    ]
    return (
        <div >
        {/* <div style ={{backgroundColor:'#e3f2fd'}}> */}
            <div className="container mt-5 pt-5" >
            <div className=" row pt-5">
                <div className="col-md-12 text-center">
                    <h2 style ={{color: '#1f85ce'}}>Project</h2>
                    <h4>Some of my latest work</h4>

                </div>
                <div className ="d-flex justify-content-center mt-5" >
                    <div className = "row w-75">
                            {
                                myProjects.map(myProject => <ProjectCard myProject={myProject}></ProjectCard>)
                            }
                        
                    </div>
                </div>

            </div>
            
        </div>
        </div>
    );
};

export default Projects;