import React, { useState } from 'react';
import './css/Expirence.css';

function Experience() {
    const tabData = [
        {
            id: 'tab-0',
            title: 'Foundry Digital',
            content: (
                <div>
                    <h3>
                        <span>Full-Stack Innovation Fellows Intern</span>
                        <span className="company">&nbsp;@&nbsp;<a href="https://foundrydigital.com/" className="inline-link hover-underline-animation" rel="noopener noreferrer" target="_blank">Foundry Digital</a></span>
                    </h3>
                    <p className="range">May 2022 - August 2022</p>
                    <div>
                        <ul>
                            <li>
                                <p>
                                    Developed a cutting-edge Rust-based web app utilizing the Yew framework. The app polls
                                    IoT data from the helium network through the helium SDK which collected GPS data from
                                    our Raspberry pi 4 and displayed the location of the LoRaWAN module.
                                </p>    
                            </li>
                            <li>
                                <p>Configured long polling and returns updated locations every 5 minutes 92% of the time in internet accessible areas</p>    
                            </li>
                            <li>
                                <p>Technologies: Rust, Yew framework, MongoDB, React, Bootstrap, Raspberry pi 4</p>    
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 'tab-1',
            title: 'Sandstone',
            content: (
                <div>
                    <h3>
                        <span>Full-Stack Software Engineering Intern</span>
                        <span className="company">&nbsp;@&nbsp;<a href="https://www.sandstonetechnologies.com/" className="inline-link hover-underline-animation" rel="noopener noreferrer" target="_blank">Sandstone Technologies</a></span>
                    </h3>
                    <p className="range">May 2021 - May 2022</p>
                    <div>
                        <ul>
                            <li>
                                <p>
                                    Developed an in-house web app which focused on encoding and testing fiber optic
                                    transceivers to provide a centralized and faster solution in processing such transceivers for
                                    distribution.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Processing time for encoding, testing, and printing labels for the transceivers was roughly
                                    30% ± %5 faster
                                </p>
                            </li>
                            <li>
                                <p>Technologies: ASP.NET Core Razor Pages, xUnit, C#, JavaScript, CSS, Bootstrap, JQuery, Selenium, MongoDB, PuTTY, LibUsbDotNet</p>
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: 'tab-3',
            title: 'AccessASL',
            content: (
                <div>
                    <h3>
                        <span>Software Backend Engineer</span>
                        <span className="company">&nbsp;@&nbsp;<a href="https://www.rit.edu/ntid/das/request" className="inline-link hover-underline-animation" rel="noopener noreferrer" target="_blank">AccessASL</a></span>
                    </h3>
                    <p className="range">March 2019 - August 2019</p>
                    <div>
                        <ul>
                            <li>
                                <p>
                                    Developed data aggregation side of the backend with RB Binary Tree in order to organize
                                    Vector3 coordinates for specific hand animation models.
                                </p>
                            </li>
                            <li>
                                <p>
                                    This effort was for a sign language
                                    education start-up company that was supported by NTID president Gerard J. Buckley of RIT.
                                </p>
                            </li>
                            <li>
                                <p>Technologies: Unity, C#, Blender (Vector3)</p>
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
    ];

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className='experience-section' fluid='fluid'>
            <div className='about-wrapper'>
                <section className="jobs__StyledJobsSection-sc-59sdss-0" data-sr-id="2">
                    <h2 className="numbered-heading-2">Experience</h2>
                    <div className="inner">
                        <div className="tabs-container">
                            <div role="tablist" aria-label="Job tabs" className="jobs__StyledTabList-sc-59sdss-1 sAHTI">
                                {tabData.map((tab, index) => (
                                    <button
                                        key={index}
                                        id={tab.id}
                                        role="tab"
                                        tabIndex={activeTab === index ? "0" : "-1"}
                                        aria-selected={activeTab === index ? "true" : "false"}
                                        aria-controls={`panel-${index}`}
                                        className={`jobs__StyledTabButton-sc-59sdss-2 ${activeTab === index ? "deLjYW" : "jBtKSS"}`}
                                        onClick={() => handleTabClick(index)}
                                    >
                                        <span>{tab.title}</span>
                                    </button>
                                ))}
                                <div className="jobs__StyledHighlight-sc-59sdss-3 fLsUxN"></div>
                            </div>
                        </div>
                        <div className="content-container">
                            <div className="jobs__StyledTabPanels-sc-59sdss-4 jbGgbG">
                                {tabData.map((tab, index) => (
                                    <div
                                        key={index}
                                        id={`panel-${index}`}
                                        role="tabpanel"
                                        tabIndex={activeTab === index ? "0" : "-1"}
                                        aria-labelledby={tab.id}
                                        aria-hidden={activeTab !== index ? "true" : "false"}
                                        className={`jobs__StyledTabPanel-sc-59sdss-5 lmjnwA ${activeTab !== index ? "hidden" : ""}`}
                                        hidden={activeTab !== index}
                                    >
                                        {tab.content}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

{/* <div className='expirence-content text-center'>
    <h1 className='text expire-title'>Experience</h1>
    <div className='all-expirences d-flex align-items-center'>
        <CardGroup>
            <Card className='expirence-card d-flex flex-column' bg='dark' text='light' border='success'>
                <Card.Header className='text pos'><Image height='100vh' src='img/foundry.png' alt='Foundry Digital' fluid /></Card.Header>
                <Card.Header className='text pos'>May 2022 - August 2022</Card.Header>
                <Card.Body className='d-flex flex-column align-items-center'>
                    <Card.Text className='text'>
                        Worked to create a web application using Rust's web framework Yew 
                        to interface with GPS data being serialized on the Helium Network. 
                        GPS data would be stored within MongoDB after connecting to the nearest 
                        Helium hotspot which a user can derive and see the positioning through the 
                        google maps api. I worked on many full stack components especially on UX/UI design, 
                        routing and CRUD based api calls with our MongoDB instance as well as aided 
                        hardware configuration with a raspberry pi 4 and a LoRaWan GPS hat for our proof 
                        of concept model.
                    </Card.Text>
                </Card.Body>
            </Card>   
            <Card className='expirence-card d-flex flex-column' bg='dark' text='light' border='success'>
                <Card.Header className='text pos'><Image height='100vh' src='img/sandstone.png' alt='Sandstone Technologies' fluid /></Card.Header>
                <Card.Header className='text pos'>May 2021 - May 2022</Card.Header>
                <Card.Body className='d-flex flex-column align-items-center'>
                    <Card.Text className='text'>
                        Worked on developing the in-house software for encoding bytes on 
                        various form factors of fiber optic transceivers. Inclusive with the 
                        program which I aided in are printing capabilities for labels, CRUD-based 
                        functionality for purchase orders & transceiver parts, non-relational DBMS management, 
                        creating GUI's for CLI based network switches for fiber optic testing 
                        purposes, and CRC brute force algorithms for unlocking passwords to various 
                        fiber optics.
                    </Card.Text>
                </Card.Body>
            </Card>   
            <Card className='expirence-card card d-flex flex-column' bg='dark' text='light' border='success'>
                <Card.Header className='text pos'><Image height='100vh' src='img/asl.png' alt='Access ASL' fluid /></Card.Header>
                <Card.Header className='text pos'>March 2019 - August 2019</Card.Header>
                <Card.Body className='d-flex flex-column align-items-center'>
                    <Card.Text className='text'>
                        Worked as a web developer and a software engineer of a start-up Access ASL which 
                        is an intuitive web-mobile game designed to teach American Sign Language through
                        RIT's National Technical Institute of the Deaf program.The product was created in Unity. 
                        Created an RB binary tree for Vector3 components to map hand sign language positioning. 
                        Also developed the web application landing page for marketing and promotions.

                    </Card.Text>
                </Card.Body>
            </Card>   
        </CardGroup>
    </div>
</div> */}

export default Experience;