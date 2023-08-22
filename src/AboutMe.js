import React from 'react';
import {Container, Image} from 'react-bootstrap';
import './css/AboutMe.css';

function AboutMe() {
  return (
    <Container className='about-me-container' fluid='fluid'>
      <div className='about-wrapper'>
        <section className="about-sec" data-sr-id="0">
          <h2 className="numbered-heading">About Me</h2>
          <div className="inner">
            <div className="about-text">
              <div>
                <p>Hello! My name is Daniel.</p>
                <p> As a passionate software engineer, I thrive on creating innovative solutions through code.
                During my time at <a className="hover-underline-animation" href="https://www.rit.edu/" rel="noopener noreferrer" target="_blank">RIT</a>, I derived a strong foundation in computer science
                and software engineering practices which gained me hands-on experience
                from internships, some were at <a className="hover-underline-animation" href="https://foundrydigital.com/" rel="noopener noreferrer" target="_blank">Foundry Digital</a> and <a className="hover-underline-animation" href="https://www.sandstonetechnologies.com/" rel="noopener noreferrer" target="_blank">Sandstone Technologies</a>, 
                both where I collaborated with teams to build web and cloud applications.
                Taking on personal projects that challenge me to explore new technologies is a passion of mine, my most recent is the <a className="hover-underline-animation" href="https://github.com/dnnysoftware/Rate-My-Manager" rel="noopener noreferrer" target="_blank">Rate My Manager</a> application using MERN stack.
                I am constantly striving to stay updated with industry advancements. Let's connect and discuss how we can bring innovative ideas to life!</p>
                <p>Here are my favorite technologies and stacks for building awesome software:</p>
              </div>
              <ul className="skills-list">
                <li>Python</li>
                <li>Java</li>
                <li>C#</li>
                <li>MERN</li>
                <li>React</li>
                <li>Django</li>
                <li>PostgreSQL</li>
                <li>Go</li>
                <li>AWS</li>
              </ul>
          </div>
            <div className="profile-image">
                <div className="wrapper">
                  <div data-gatsby-image-wrapper="" className="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
                    <div>
                      <Image rounded="true" className='portrait' src='img/Suit_Nice_Pink.png' alt='Portrait of Myself' fluid />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}

export default AboutMe;
