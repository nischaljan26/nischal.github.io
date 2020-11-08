import React from 'react';

const AddMe = ({contactQr}) => {
    return (
        <div>
            <section className="resume-section" id='addme'>
                <div className="resume-section-content">
                    <a href='#addme' className='js-scroll-trigger'><h2 className="mb-5">Scan me</h2></a>
                    <div className="qrcontainer" style={{padding: '0pt'}}>
                        <img style={{maxBlockSize: '300px'}} className="img-fluid mx-auto mb-2" src={contactQr} alt="9843481901" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddMe
