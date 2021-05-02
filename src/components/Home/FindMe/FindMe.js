import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FindMe.css'
import { faGithub, faInstagram, faInstagramSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const FindMe = () => {
    return (
        <div className="col-md-12 findMe-section">
            <h1 style={{color:'#1f85ce'}}>FIND ME ON</h1>
            <p>Feel free to <span style={{color:'#1f85ce'}}>connect</span> with me</p>
            <div>
                <form  className="container">
                    <div className="form-floating mb-3 col-md">
                        <input type="email" name="email" required className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label>Email Address</label>
                    </div>
                    <div className="form-floating mb-3 col-md">
                        <input type= "text" name ="name" className="form-control"/>
                        <label>Name</label>
                    </div>
                    <div className="form-floating col-xs-4">
                        <textarea type= "text" name ="message" required className="form-control"/>
                        <label>Message</label>
                    </div>
                    <button className="btn btn-primary" type="submit">Send Message</button>
                </form>
            </div>
            <ul className="social-links">
                <div className="social-icon">
                    <a className="social-icon" href="https://github.com/Diganta165"><FontAwesomeIcon  icon={faGithub} /> Github  </a>
                    <a className="social-icon" href="https://www.linkedin.com/in/md-shafiur-rahman-diganta-592a96202/"><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn  </a>
                    <a className="social-icon" href="https://www.instagram.com/shafiur_rahman_diganta/"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
                </div>

            </ul>
        </div>
    );
};

export default FindMe;