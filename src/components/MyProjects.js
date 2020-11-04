import React from 'react'

const MyProjects = () => {
    return (
        <div>
            <section className="resume-section" id="my-projects">
                <div className="resume-section-content">
                    <a href='#my-projects' className='js-scroll-trigger'><h2 className="mb-5">My Projects</h2></a>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Inventory Management System</h3>
                            <div>Made Stock Management System using Django.</div>
                            <div className="">Here user can create their items and add stock information. These stock information stores not only item and quantity details but also stores payment information on when payment is received, how much is received and how much remains for both bought and sold goods.</div>
                            <div className=""> This project is initially hosted but I am still working on it to make it more interactive and user friendly.😊</div>
                            <div className='mt-4'><a href='https://surendra095.pythonanywhere.com' target='_blank' className='btn btn-primary'>View Project</a></div>
                            <div className="">Hosted on: Python Anywhere</div>
                        </div>
{/*                        <!-- <div className="flex-shrink-0"><span className="text-primary">Sept/Oct 2019 - Sept 2023</span></div> -->*/}
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Bus Ticket Booking System</h3>
                            <div>Made Bus Ticket Booking System using Django.</div>
                            <div className="">Here user can reserve bus for their journey and their tickets gets delivered to their respective email address.</div>
                            <p><a href='https://nischalstha9.pythonanywhere.com/demo_create_bus/'>Click here</a> to create demo bus.</p>
                            <div className='mt-4'><a href='https://nischalstha9.pythonanywhere.com' target='_blank' className='btn btn-primary'>View Project</a></div>
                            <div className="">Hosted on: Python Anywhere</div>
                        </div>
                        {/*<!-- <div className="flex-shrink-0"><span className="text-primary">Sept/Oct 2019 - Sept 2023</span></div> -->*/}
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">KhulaKhabar News Aggregator</h3>
                            <div>Made a website that extracts news items from other websites and show them all at one place.</div>
                            <div className='mt-4'><a className='btn btn-primary' target='_blank' href='https://khulakhabar.herokuapp.com'>View Project</a></div>
                            <div>Hosted on: Heroku</div>
                        </div>
                        {/*<!-- <div className="flex-shrink-0"><span className="text-primary">Sept/Oct 2019 - Sept 2023</span></div> -->*/}
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Simple To-Do Application</h3>
                            <div>A website that will store to-do list of different users and manage them. It is built using Django and uses Django Rest Framework for serving JSON data and have used simple HTML, Bootstrap, CSS and Javascript for frontend management.</div>
                            <div className='mt-4'><a className='btn btn-primary' target='_blank' href='https://garnu6.herokuapp.com'>View Project</a></div>
                            <div>Hosted on: Heroku</div>
                        </div>
                        {/*<!-- <div className="flex-shrink-0"><span className="text-primary">Sept/Oct 2019 - Sept 2023</span></div> -->*/}
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">DjangoGram</h3>
                            <div>Made a full featured blogging website using Django, Django-Rest-Framework, Javascript and Bootstrap 4.</div>
                            <div>It is full featured blogging site where users can create and share their ideas via blogs.</div>
                            <div className='mt-4'><a className='btn btn-primary' target='_blank' href='https://inischal.pythonanywhere.com'>View Project</a></div>
                            <div>Hosted on: Python Anywhere</div>
                        </div>
                        {/*<!-- <div className="flex-shrink-0"><span className="text-primary">Sept/Oct 2019 - Sept 2023</span></div> -->*/}
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Solution Plus</h3>
                            <div>Made an E-Commerce Website for a shop with wordpress.</div>
                            <div className='mt-4'><a className='btn btn-primary' target='_blank' href='https://solutionplus.com.np'>View Project</a></div>
                            <div>Hosted on: Green Technology</div>
                        </div>
                        {/*<!-- <div className="flex-shrink-0"><span className="text-primary">Sept/Oct 2019 - Sept 2023</span></div> -->*/}
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        </div>
    )
}

export default MyProjects
