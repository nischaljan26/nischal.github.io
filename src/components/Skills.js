import React from 'react'

const Skills = () => {
    return (
        <div>
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <a href='#skills' className='js-scroll-trigger'><h2 className="mb-5">Skills</h2></a>
                    <div className="subheading mb-3">Programming Languages & Creative Tools</div>
                    <table className="table table-borderless">
                        <tbody>
                            <tr>
                                <td><i className="list-inline-item dev-icons fab fa-python"></i></td>
                                <td>Python and Django</td>
                                <td><i className="list-inline-item dev-icons fab fa-css3-alt"></i></td>
                                <td>Intermediate CSS3 Skills</td>
                            </tr>
                            <tr>
                                <td><i className="list-inline-item dev-icons fab fa-html5"></i></td>
                                <td>Proficient HTML5 Skill working with Django</td>
                                <td><i className="list-inline-item dev-icons fab fa-sass"></i></td>
                                <td>Basic Sass Knowledge and Skill</td>
                            </tr>
                            <tr>
                                <td><i className="list-inline-item dev-icons fab fa-wordpress"></i></td>
                                <td>Wordpress Skills</td>
                                <td><i className="list-inline-item dev-icons fab fa-adobe"></i></td>
                                <td>Proficient Knowledge of Adobe Photoshop and Illustrator</td>
                            </tr>
                            <tr>
                                <td><i className="list-inline-item dev-icons fab fa-js-square"></i></td>
                                <td>Basic Javascript Knowledge</td>
                                <td><i className="list-inline-item dev-icons fab fa-npm"></i></td>
                                <td>Node Package Manager</td>
                            </tr>
                            <tr>
                                <td><i className="list-inline-item dev-icons fab fa-github"></i></td>
                                <td>Version Control with Github</td>
                            </tr>                             
                        </tbody>
                      </table>
                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>Database Model, Backend
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>Restful API using Django Rest API
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>Cross Browser Testing & Debugging
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>Frontend and UI refinements
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="m-0" />
            
        </div>
    )
}

export default Skills
