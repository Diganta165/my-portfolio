import React from 'react';
import './HeaderMain.css'
import photo from '../../../photo/Diganta.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center p-5">
            <div className="col-md-4 offset-md-1">
            <h5>Hi, I'm</h5>
            <h1>Shafiur Rahman Diganta</h1>
            <h3>Currently Studying <span className="subject">Computer Science</span></h3>
            <p>Learning new things keeps me motivated.<br/>
            I love to do code and play competitive video games.<br/>
            I also like arts which is the main reason why I started learning web development in the first place.</p>
            <a className="btn btn-primary" href="https://drive.google.com/uc?export=download&id=1B5easD7AfYSvuofNsmk9NQFyZnO1F80_"><FontAwesomeIcon icon={faDownload}/>  Download Resume</a>
            </div>
            <div className="col-md-6 photo">
                <img src= {photo} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;