import {Container, Image} from 'react-bootstrap';
import './css/Organizations.css';




function Organizations() {
    return (
        <>
            <Container className='organizations-container'>
                <div>
                    <section className='organizations-section' data-sr-id="1">
                        <h2 className="numbered-heading-3">Organizations</h2>
                        <div className="inner">
                            <div className="org-text-sec">
                                <Image className='img-club' src='img/sse_dark.png' alt='SSE' fluid />
                                <p className='org-text'>
                                    There is a special place in my heart for the <a className="hover-underline-animation" href="https://sse.rit.org/" rel="noopener noreferrer" target="_blank">Society of Software Engineers</a>. As a mentor, I had the privilege of guiding and supporting fellow students, while also contributing to the organization's networking events and development projects. 
                                    It was a rewarding experience that allowed me to hone my leadership and teamwork skills.
                                </p>
                                <Image className='img-club' src='img/ted_dark.png' alt='TedxRit' fluid />
                                <p className='org-text'>
                                    As the marketing manager for <a className="hover-underline-animation" href="https://www.ted.com/tedx/events/37977" rel="noopener noreferrer" target="_blank">TEDxRIT</a> I took charge of developing and designing the program's website, creating captivating graphics, promoting events and managing social media platforms. 
                                    It was an exhilarating opportunity to blend my passion for marketing, design and public speaking.
                                </p>
                                <Image className='img-club' src='img/bioprint_dark.png' alt='BioPrint' fluid />
                                <p className='org-text'>
                                    The <a className="hover-underline-animation" href="https://www.rit.org/kgcoe/bioprint/" rel="noopener noreferrer" target="_blank">BioPrint</a> club is where I utilized my skills to help design and 3D print prosthetics. 
                                    It was fulfilling to contribute to a project that aimed to improve the lives of others. My case was a golfing prosthetic for the Golfer Gary 2.0 project where the subject had a wrist disarticulation.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </Container>
        </>
    );
}


export default Organizations;