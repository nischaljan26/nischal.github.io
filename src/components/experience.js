import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Parser from 'html-react-parser';

const Experience = ({expRemark}) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const fetchIcons = async () => {
            const result = await axios('experiences')
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
                                        <a target="_blank" href={item.worked_organization_url}>{item.worked_organization}</a>
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
                            {Parser(expRemark)}
                        </div>
                    </div>

                </div>
            </section>
            <hr className="m-0" />
            
        </div>
    )
}

export default Experience
