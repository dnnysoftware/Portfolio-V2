import React, { useState } from 'react';
import {Container} from 'react-bootstrap';
import './css/Experience.css';

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
        <Container className='expirence-container' fluid='fluid'>
            <h2 className="numbered-heading-2">Experience</h2>
            <div className="inner">
                <div className="tabs-container">
                <div
                    role="tablist"
                    aria-label="Job tabs"
                    className={`buttons-exp ${activeTab !== 0 ? "horizontal-scroll" : ""}`}
                >
                    {tabData.map((tab, index) => (
                    <button
                        key={index}
                        id={tab.id}
                        role="tab"
                        tabIndex={activeTab === index ? "0" : "-1"}
                        aria-selected={activeTab === index ? "true" : "false"}
                        aria-controls={`panel-${index}`}
                        className={`${activeTab === index ? "active-btn" : "inactive-btns"}`}
                        onClick={() => handleTabClick(index)}
                    >
                        <span>{tab.title}</span>
                    </button>
                    ))}
                </div>
            </div>
            <div className="content-container">
                <div>
                    {tabData.map((tab, index) => (
                    <div
                        key={index}
                        id={`panel-${index}`}
                        role="tabpanel"
                        tabIndex={activeTab === index ? "0" : "-1"}
                        aria-labelledby={tab.id}
                        aria-hidden={activeTab !== index ? "true" : "false"}
                        className={`exp-content ${
                        activeTab !== index ? "hidden" : ""
                        }`}
                        hidden={activeTab !== index}
                    >
                        {tab.content}
                    </div>
                    ))}
                </div>
                </div>
            </div>
          </Container>
      );
}

export default Experience;