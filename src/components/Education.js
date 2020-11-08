import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

const Education = () => {
    const [educations, setEducations] = useState([])
    useEffect(() => {
        const fetchEducations = async () => {
            const result = await axios('educations')
            setEducations(result.data)
        }
        fetchEducations()
      }, [])
    return (
        <div>
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <a href='#education' className='js-scroll-trigger'><h2 className="mb-5">Education</h2></a>
                    {educations.map((education) => (
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5" key={education.id}>
                            <div className="flex-grow-1">
                                <h3 className="mb-0">{education.academy}</h3>
                                <div className="subheading mb-3">{education.faculty}</div>
                                <div>{education.subject}</div>
                                <p>{education.per_gpa}</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">{education.from_date} - {education.to_date}</span></div>
                        </div>
                    ))}
                </div>
            </section>
            <hr className="m-0" />
            
        </div>
    )
}

export default Education
