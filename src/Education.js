import {Container, Image} from 'react-bootstrap';
import './css/Education.css';




function Education() {
    return (
        <>
            <Container className='education-container' id='organizations'>
                <div>
                    <section className='education-section' data-sr-id="1">
                        <h2 class="numbered-heading-2">Organizations</h2>
                        <div class="inner">
                            <div class="edu-text-sec">
                                <Image className='img-club' src='img/sse.png' alt='SSE' fluid />
                                <p className='edu-text'>
                                    I was apart of the <a className="hover-underline-animation" href="https://sse.rit.edu/" rel="noopener noreferrer" target="_blank">Society of Software Engineers</a>. As a mentor, I had the privilege of guiding and supporting fellow students, while also contributing to the organization's networking events and development projects. 
                                    It was a rewarding experience that allowed me to hone my leadership and teamwork skills.
                                </p>
                                <Image className='img-club' src='img/ted.png' alt='TedxRit' fluid />
                                <p className='edu-text'>
                                    I was the marketing manager and lead content creator for <a className="hover-underline-animation" href="https://www.ted.com/tedx/events/37977" rel="noopener noreferrer" target="_blank">TEDxRIT</a>. I took charge of developing and designing the program's website, creating captivating graphics, and managing social media platforms. 
                                    It was an exhilarating opportunity to blend my passion for marketing and public speaking.
                                </p>
                                <Image className='img-club' src='img/bioprintpic.png' alt='BioPrint' fluid />
                                <p className='edu-text'>
                                    I was apart of the <a className="hover-underline-animation" href="https://www.rit.edu/kgcoe/bioprint/" rel="noopener noreferrer" target="_blank">BioPrint</a> club, where I utilized my skills to help design and 3D print prosthetics. 
                                    It was fulfilling to contribute to a project that aimed to improve the lives of others.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </Container>
        </>
    );
}


export default Education;