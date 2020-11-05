import React from 'react';
import SocialIcon from './partials/socialIcon'

const About = ({DP, firstName, lastName, street, address, shortInfo}) => {
    return (
        <div>
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <span className="d-sm-block d-md-block d-lg-none">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" style={{maxWidth: '200px'}} src={DP} alt="" />
                    </span>
                    <div className="js-scroll-trigger"><h1 className="mb-0">{firstName} <span className="text-primary">{lastName}</span></h1></div>
                    <div className="subheading mb-5">{street} · {address} <br/> (+977) 9843481901 · 9810374388<br/><a href="mailto:nischalstha9@gmail.com">nischalstha9@gmail.com</a></div>
                    <p className="lead mb-5">{shortInfo}</p>
                    <SocialIcon/>
                </div>
            </section>
            <hr className="m-0" />
        </div>
    )
}

export default About
