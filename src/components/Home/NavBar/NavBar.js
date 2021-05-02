import React from 'react';
import './NavBar.css'
import myLogo from '../../../photo/MyLogo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faBlog, faFile, faHome, faTh, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        
            
            
       
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#e3f2fd", padding:"15px"}}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/home"><img src={myLogo} style={{height:'50px', width:'50px'}}/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link ms-5 active" aria-current="page" to="/home"><FontAwesomeIcon icon={faHome}  /> Home</Link>
                    </li> 
                    <li className="nav-item">
                        <Link className="nav-link ms-5" to="/projects"><FontAwesomeIcon icon={faTh}  /> Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5" to ="/blogs"><FontAwesomeIcon icon={faBlog}  /> Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5" to="/resume"><FontAwesomeIcon icon={faFile}  /> Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5" to="/about"><FontAwesomeIcon icon={faUserCircle}  /> About Me</Link>
                    </li>
                </ul>
            </div>


        </div>
    </nav> 

    );
};

export default NavBar;