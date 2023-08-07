import React, { useState } from 'react';
import './css/Projects.css';

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

  const handlePreviousClick = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1));
  };

  const currentProject = projectsData[currentProjectIndex];

  return (
    <div className='projects-section'>
        <section className="jobs__StyledJobsSection-sc-59sdss-0" data-sr-id="2">
            <h2 className="numbered-heading-4">Projects</h2>
            <div className='d-flex flex-row justify-content-center align-items-center text-center'>
                <button className='button-def previous-button' onClick={handlePreviousClick}>
                Previous
                </button>
                <div className='projects-container'>
                <a className='github-btn port-button port-button-white port-button-animate button-def' href={currentProject.githubLink} rel='noreferrer' target='_blank'>
                    {currentProject.title}
                </a>
                <div className='video-container'>
                    <video className='video-player' width='100%' height='100%' controls poster={currentProject.posterImage}>
                    <source src={currentProject.videoSource} type='video/mp4' />
                    </video>
                </div>
                </div>
                <button className='button-def next-button' onClick={handleNextClick}>
                Next
                </button>
            </div>
        </section>
    </div>
  );
}

export default Projects;
