import React from 'react';
import Contact_QR from '../assets/Contact QR.png';

const AddMe = () => {
    return (
        <div>
            <section className="resume-section" id='addme'>
                <div className="resume-section-content">
                    <a href='#addme' className='js-scroll-trigger'><h2 className="mb-5">Scan me</h2></a>
                    <div className="qrcontainer" style={{padding: '0pt'}}>
                        <img style={{maxBlockSize: '300px'}} className="img-fluid mx-auto mb-2" src={Contact_QR} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddMe
