import React from 'react'

const Education = () => {
    return (
        <div>
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <a href='#education' className='js-scroll-trigger'><h2 className="mb-5">Education</h2></a>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Tribhuwan University</h3>
                            <div className="subheading mb-3">Bachelor of humanities</div>
                            <div>Computer Application - Web Development Track</div>
                            <p>GPA: ---</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Sept/Oct 2019 - Sept 2023</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Council For Technical Education and Vocational Training</h3>
                            <div className="subheading mb-3">Diploma in Information Technology</div>
                            <p>Percentage: 67.68%</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">September 2015 - September 2018</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            
        </div>
    )
}

export default Education
