import React from 'react';
import {Container} from 'react-bootstrap';
import './css/AboutMe.css';

function AboutMe() {
  return (
    <Container className='about-me-container' id='about' fluid='fluid'>
        <section id="about" class="about__StyledAboutSection-sc-1ownso9-0 bNXWUU" data-sr-id="0">
          <h2 class="numbered-heading">About Me</h2>
          <div class="inner">
            <div class="about__StyledText-sc-1ownso9-1 kNIdQM">
              <div>
                <p>Hello! My name is Daniel.</p>
                <p>When I'm not busy building software, I develop games and open-source projects. 
                My open-source chess and rhythm game templates are rated 5 stars on   
                <a href="https://r3dhummingbird.itch.io/" rel="noopener noreferrer" target="_blank">itch.io</a>. 
                My most recent passion project is   
                <a href="https://github.com/RuolinZheng08/twewy-discord-chatbot" rel="noopener noreferrer" target="_blank">a Discord AI chatbot </a> 
                with the personality of my favorite video game character, running live on a 1000+ user Discord server. 
                I also enjoy creating technical tutorials for   
                <a href="https://www.freecodecamp.org/news/author/lynn/" rel="noopener noreferrer" target="_blank">freeCodeCamp</a> 
                and on   <a href="https://www.youtube.com/channel/UCZ2MeG5jTIqgzEMiByrIzsw" rel="noopener noreferrer" target="_blank">my YouTube channel</a>. 
                To explore my passion for teaching, I've recently started as   <a href="https://www.udemy.com/user/lynn-zheng-7/" rel="noopener noreferrer" target="_blank">
                an Udemy instructor.</a></p><p>Here are my favorite technologies for building awesome software and games:
                </p>
              </div>
              <ul class="skills-list">
                <li>Python</li>
                <li>Java</li>
                <li>C#</li>
                <li>Unity Game Dev Engine</li>
                <li>Heroku</li>
                <li>Ren'Py Game Dev Engine</li>
              </ul>
          </div>
          <div class="about__StyledPic-sc-1ownso9-2 iTdkQf">
            <div class="wrapper"><div data-gatsby-image-wrapper="" class="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
              <div>
                <img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height='500' width='500' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"/>
              </div>
              <div aria-hidden="true" data-placeholder-image=""></div>
            </div>
          </div>
          </div>
          </div>
        </section>
    </Container>
  );
}

{/* <h1 className='text'>About Me</h1>
<Row className='row-about-me align-items-center' sm={1} md={1} lg={1} xl={1} xxl={2}>
  <Col className='description' xs={12} sm={12} md={12} lg={12} xl={12} xxl={4}>
    <div className='text-about-me'>
      <Card bg='dark' text='light' className='text-center'>
        <Card.Body>
          <Card.Text className='text desc-size'>
              Welcome to my personal project portfolio website! I'm Daniel Mironiuk, a recent graduate from the Rochester Institute of Technology with
              a BS in Software Engineering. As a passionate software engineer, I thrive on creating innovative solutions through code.
              During my time at RIT, I gained a strong foundation in computer science,
              excelling in programming languages, software development methodologies, and problem-solving. I have hands-on experience
              from internships, some were at Foundry Digital and Sandstone Technologies, both where I collaborated with a team to build web and cloud applications.
              I enjoy taking on personal projects that challenge me to explore new technologies, constantly striving to stay updated
              with industry advancements. Let's connect and discuss how we can bring innovative ideas to life!
          </Card.Text>
          <a className='port-button port-button-white port-button-animate' href="./docs/Daniel_Mironiuk_Resume.pdf" target="_blank">Resume</a>
        </Card.Body>
      </Card>
    </div>
  </Col>
  <Col className='about-me' xs={12} sm={12} md={12} lg={12} xl={12} xxl={8}>
    <Image className='portrait' src='img/banner.png' alt='Portrait of Myself' fluid />
  </Col>
</Row> */}

export default AboutMe;
