import React from 'react'
import Parser from 'html-react-parser';

const Interests = ({interest}) => {
    return (
        <div>
            <section className="resume-section" id="interests">
                <div className="resume-section-content">
                    <a href='#interests' className='js-scroll-trigger'><h2 className="mb-5">Interests</h2></a>
                    {Parser(interest)}
                </div>
            </section>
            <hr className="m-0" />            
        </div>
    )
}

export default Interests
