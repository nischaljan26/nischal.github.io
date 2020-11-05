import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

const MyProjects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        const fetchEducations = async () => {
            const url = 'http://127.0.0.1:8000/api/portfolio/projects/'  
            const result = await axios(url)
            setProjects(result.data)
        }
        fetchEducations()
      }, [])
    return (
        <div>
            <section className="resume-section" id="my-projects">
                <div className="resume-section-content">
                    <a href='#my-projects' className='js-scroll-trigger'><h2 className="mb-5">My Projects</h2></a>
                    {projects.map((project, key) => (
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">{project.name}</h3>
                                <div>{project.short_info}</div>
                                <div className="">{project.short_desc}</div>
                                <div className="">{project.remarks}</div>
                                <div className='mt-4'><a href={project.project_link} target='_blank' rel="noreferrer" className='btn btn-primary'>View Project</a></div>
                                <div className="">Hosted on: {project.hosted_on}</div>
                            </div>
                            {/*  <!-- <div className="flex-shrink-0"><span className="text-primary">Sept/Oct 2019 - Sept 2023</span></div> -->*/}
                        </div>
                    ))}
                </div>
            </section>
            <hr className="m-0" />
        </div>
    )
}

export default MyProjects
