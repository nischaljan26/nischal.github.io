import React from 'react'
import Nischal_retro from '../assets/Nischal_retro.jpg';

const About = () => {
    return (
        <div>
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <span className="d-sm-block d-md-block d-lg-none">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" style={{maxWidth: '200px'}} src={Nischal_retro} alt="" />
                    </span>
                    <div className="js-scroll-trigger"><h1 className="mb-0">Nischal <span className="text-primary">Shrestha</span></h1></div>
                    <div className="subheading mb-5">Postoffice Road · Bidur-3, Nuwakot <br/> (+977) 9843481901 · 9810374388<br/><a href="mailto:nischalstha9@gmail.com">nischalstha9@gmail.com</a></div>
                    <p className="lead mb-5">I am intermediate level web developer with proficient knowledge of Django and Rest API along with good knowledge of HTML5 and CSS3. Although I have not been professionally employed yet, I have been doing my self projects seeking for new ideas and skills everyday.</p>
                    <div className="social-icons" style={{display: 'flex'}}>
                        <table className='table col-4 table-borderless'>
                            <tbody>
                                <tr>
                                    <td><a className="social-icon" target='_blank' href="https://www.linkedin.com/in/nischal-shrestha-3002621a1/"><i className="fab fa-linkedin-in"></i></a></td>
                                    <td><a className="social-icon" target='_blank' href="https://github.com/nischalstha9"><i className="fab fa-github"></i></a></td>
                                    <td><a className="social-icon" target='_blank' href="/"><i className="fab fa-twitter"></i></a></td>
                                    <td><a className="social-icon" target='_blank' href="https://www.facebook.com/see.eu.again"><i className="fab fa-facebook-f"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        </div>
    )
}

export default About
