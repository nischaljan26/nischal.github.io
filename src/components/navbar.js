import React from 'react';
import Nischal_retro from '../assets/Nischal_retro.jpg';
import Contact_QR from '../assets/Contact QR.png';
import {NavLink} from 'react-router-dom';
import CV from '../assets/CV.pdf'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <NavLink className="navbar-brand" to="/">
                    <span className="d-sm-block d-md-block d-lg-none">
                        <img className="img-fluid img-profile rounded-circle mb-2 mr-2" style={{maxWidth: '40px'}} src={Nischal_retro} alt="err" />
                        Nischal Shrestha
                    </span>
                    <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={Nischal_retro} alt="" /></span>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active" exact to="/">About</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/experience">Experience</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/education">Education</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/skills">Skills</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/interests">Interests</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/my-projects">Projects</NavLink></li>
                        <span className='d-block d-lg-none'>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/addme">Add Me</NavLink>
                            </li>
                        </span>
                        <div className="navbar-brand">
                            <span className="d-none d-lg-block">
                                <img style={{maxBlockSize: '180px'}} className="img-fluid mx-auto mb-2" src={Contact_QR} alt="" />
                            </span>
                        </div>
                        <li className="nav-item"><a className="nav-link" target="_blank" href={CV}>View My CV</a></li>
                    </ul>
                </div>
            </nav>  
        </div>
    )
}

export default Navbar
