import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ResumeOnlineVersion = () => {
    return (
        <div className="container pt-5">
            <h1>Hi, I'm <span style={{ color: "#1f85ce" }}>Shafiur Rahman Diganta</span></h1>
            <p>I am passionate towards things related to JavaScript and Python. I am hardworking professional, focused on writing clean codes
            and learning new things. I'm currently searching for the right opportunity where I can work in a friendly environment which will not only
            help me to progress into a full-stack role bit also add value to that organization.
            </p>
            <a className="btn btn-primary" href="https://drive.google.com/uc?export=download&id=1B5easD7AfYSvuofNsmk9NQFyZnO1F80_"><FontAwesomeIcon icon={faDownload}/>  Download Resume</a>
            <div className="col-md-6">
                <div className="social-links">
                    <h3>You can connect with me through...</h3>
                    <a className="social-icon" href="https://github.com/Diganta165"><FontAwesomeIcon icon={faGithub} /> Github  </a>
                    <a className="social-icon" href="https://www.linkedin.com/in/md-shafiur-rahman-diganta-592a96202/"><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn  </a>
                    <a className="social-icon" href="https://www.instagram.com/shafiur_rahman_diganta/"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>

                </div>
                <div className="skills">
                    <h3 style={{fontWeight:'700'}}>Skills</h3>
                    <ul style ={{listStyle:'none'}}>
                        <li><strong>Web Development: </strong> HTML, CSS, JavaScript, ES6, Bootstrap, Material UI, CRUD Operation</li>
                        <li><strong>Database Management System: </strong> MongoDB</li>
                        <li><strong>Programming Language: </strong>C, C++, Python, PHP, JavaScript</li>
                        <li><strong>IDE: </strong>Visual Studio Code, NetBeans, PyCharm</li>
                        <li><strong>Deploy: </strong> Firebase, Heroku, Netlify, GitHub</li>
                    </ul>
                </div>
                <div className="projects">
                    <h3 style={{fontWeight:'700'}}>Projects</h3>
                    <ul style={{listStyle:'none'}}>
                        <li><strong><h4 style={{ color: "#1f85ce" }}>Spotless (Cleaning Service Website)</h4></strong></li>
                        <li><h5>Technologies: </h5>React, Bootstrap, Node.JS, MongoDB, Firebase Authentication, Heroku, Netlify</li>
                        <li><h5>Features:</h5> LogIn Authentication with Google Sign in method, has admin panel(Add Admin, Add or Delete Services),Can set appointment</li>

                    </ul>
                    <ul style={{listStyle:'none'}}>
                        <li><strong><h4 style={{ color: "#1f85ce" }}>Sketch World (Art Selling Website)</h4></strong></li>
                        <li><h5>Technologies: </h5>React, Bootstrap, Node.JS, MongoDB, Firebase Authentication, Heroku, Netlify</li>
                        <li><h5>Features:</h5> LogIn Authentication with Google Sign in method, has admin panel(Add sketches with name, price and photo)</li>

                    </ul>
                    <ul style={{listStyle:'none'}}>
                        <li><strong><h4 style={{ color: "#1f85ce" }}>Trip Trap (Ride Sharing Website)</h4></strong></li>
                        <li><h5>Technologies: </h5>React, Bootstrap, Node.JS, Google Map, MongoDB, Firebase Authentication, Netlify</li>
                        <li><h5>Features:</h5> LogIn Authentication with Google Sign in method, user can set destinations, pickup date and ride type dynamically </li>

                    </ul>

                </div>
                <div className= "col-md-6">
                <h3 style={{fontWeight:'700'}}>Education</h3>
                <ul style ={{listStyle:'none'}}>
                    <li><strong>University of South Asia</strong>- BSc in CSIT (2017-present)</li>
                </ul>

                </div>
            </div>

        </div>
    );
};

export default ResumeOnlineVersion;