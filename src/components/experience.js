import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Experience = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const fetchIcons = async () => {
            const url = 'http://127.0.0.1:8000/api/portfolio/experiences/'  
            const result = await axios(url)
            setItems(result.data)
        }
        fetchIcons()
      }, [])
    return (
        <div>            
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <a href='#experience' className='js-scroll-trigger'><h2 className="mb-5">Experience</h2></a>
                    {items.map(item => (
                        <div>
                            <div className="d-flex flex-column flex-md-row justify-content-between">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">{item.title}</h3>
                                    <div className="subheading mb-3">
                                        <a target="_blank" href="https://www.ittrainingnepal.com/">{item.worked_organization}</a>
                                    </div>
                                    <p>
                                        {item.short_info}
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <span className="text-primary">{item.from_date} - {item.to_date}</span>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    ))}
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <p>As I have just passed my Diploma and currently been involved in fulfilling my Bachelor in Computer Application I have not been employed in any IT related sector excluding a shop and Kalimati Vegetable Market between free time of my Diploma and Bachelors.</p>
                            <p>Now as per my interest I am seeking to get employed in an organization where I can make my hobby my dream job collaborating with colleagues and learning much more in this sector from my seniors.</p>
                        </div>
                    </div>

                </div>
            </section>
            <hr className="m-0" />
            
        </div>
    )
}

export default Experience
