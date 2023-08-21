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
                                Contributed to a cutting-edge Rust-based web application which displays derived GPS data from LoRaWan IoT devices transmitted through the Helium blockchain network to a MQTT server. This data is then passed into MongoDB for client use in order to track their appliances securely and with low cost.
                                </p>    
                            </li>
                            <li>
                                <p>Technologies: Rust, Yew framework, MongoDB, React, Bootstrap, LoRaWan IoT</p>    
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
                        <span>Full Stack Software Engineering Intern</span>
                        <span className="company">&nbsp;@&nbsp;<a href="https://www.sandstonetechnologies.com/" className="inline-link hover-underline-animation" rel="noopener noreferrer" target="_blank">Sandstone Technologies</a></span>
                    </h3>
                    <p className="range">May 2021 - May 2022</p>
                    <div>
                        <ul>
                            <li>
                                <p>
                                Contributed to an in-house web application which focused on encoding and testing fiber optic transceivers. The previous practice had data inconsistency from isolated file systems, so this provided a centralized and faster solution in processing and distribution to clients.
                                </p>
                            </li>
                            <li>
                                <p>
                                Processing time for encoding, testing, and printing labels for the transceivers became roughly 30% ± %5 faster.
                                </p>
                            </li>
                            <li>
                                <p>Technologies: ASP.NET Core Razor Pages, xUnit, C#, JavaScript, CSS, Bootstrap, JQuery, Selenium, MongoDB</p>
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
                                Contributed to the data aggregation side of the backend with RB Binary Trees in order to organize Vector3 coordinates for specific hand animation models.
                                </p>
                            </li>
                            <li>
                                <p>
                                This effort was for a sign language education start-up company which was sponsored by NTID president Gerard J. Buckley of RIT to promote communication with deaf and hard of hearing communities.
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