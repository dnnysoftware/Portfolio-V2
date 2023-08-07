import React, { useState } from 'react';
import './css/Projects.css';

const VideoPlayer = ({ videoSource, posterImage }) => {
  return (
    <div className='video-container'>
      <video className='video-player' width='100%' height='100%' controls poster={posterImage}>
        <source src={videoSource} type='video/mp4' />
      </video>
    </div>
  );
};


function Projects() {
  const projectsData = [
    {
        "title": "GPS State Capitol Search",
        "githubLink": "https://github.com/dnnysoftware/GPS-Web-App",
        "videoSource": "https://d1a8mx70ybu1ae.cloudfront.net/GPS_State_Capitol_Project.mov",
        "posterImage": "./img/gps.png"
      },
      {
        "title": "Security Camera AI",
        "githubLink": "https://github.com/dnnysoftware/HomeSecurityAI",
        "videoSource": "https://d1a8mx70ybu1ae.cloudfront.net/HomeAI.mp4",
        "posterImage": "./img/home-ai.png"
      },
      {
        "title": "Security Footage Portal",
        "githubLink": "https://github.com/dnnysoftware/SecurityFootagePortal",
        "videoSource": "https://d1a8mx70ybu1ae.cloudfront.net/SecurityFootage.mov",
        "posterImage": "./img/security-portal.png"
      },
      {
        "title": "Dubins Car Machine Learning",
        "githubLink": "https://github.com/dnnysoftware/DubinsCarMachineLearning",
        "videoSource": "https://d1a8mx70ybu1ae.cloudfront.net/DubinsCar.mp4",
        "posterImage": "./img/dubins.png"
      },
      {
        "title": "Golang Blackjack",
        "githubLink": "https://github.com/dnnysoftware/BlackJackGame",
        "videoSource": "https://d1a8mx70ybu1ae.cloudfront.net/Blackjack.mov",
        "posterImage": "./img/blackjack.png"
      },
      {
        "title": "Rate My Manager MERN Stack",
        "githubLink": "https://github.com/dnnysoftware/Rate-My-Manager.git",
        "videoSource": "https://d1a8mx70ybu1ae.cloudfront.net/RateMyManager.mov",
        "posterImage": "./img/manager.png"
      },
      {
        "title": "Clients Time Tracker",
        "githubLink": "https://github.com/dnnysoftware/ClientTimeTracker.git",
        "videoSource": "https://d1a8mx70ybu1ae.cloudfront.net/ClientTimeTracker.mov",
        "posterImage": "./img/tracker.png"
      },
      {
        "title": "Language Translator Web App",
        "githubLink": "https://github.com/dnnysoftware/Language-Translator-Web-App.git",
        "videoSource": "https://d1a8mx70ybu1ae.cloudfront.net/LanguageTranslator.mov",
        "posterImage": "./img/translator.png"
      },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projectsData[currentProjectIndex];

  const handlePreviousClick = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='projects-section'>
      <section className="jobs__StyledJobsSection-sc-59sdss-0" data-sr-id="2">
        <h2 className="numbered-heading-4">Projects</h2>
        <div className='project-row d-flex flex-row justify-content-center align-items-center text-center'>
          <button className='button-proj next-prev' onClick={handlePreviousClick}>
            &#8249;
          </button>
          <div className='projects-container'>
            <a className='button-proj padd-link' href={currentProject.githubLink} rel='noreferrer' target='_blank'>
              {currentProject.title}
            </a>
            <div className='video-cont' key={currentProject.videoSource}>
              {currentProject.videoSource && (
                <VideoPlayer videoSource={currentProject.videoSource} posterImage={currentProject.posterImage} />
              )}
            </div>
          </div>
          <button className='button-proj next-prev' onClick={handleNextClick}>
            &#8250;
          </button>
        </div>
      </section>
    </div>
  );
}

export default Projects;
