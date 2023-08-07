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
        <h2 className="block-sec numbered-heading-4">Projects</h2>
        <div className='project-row'>
          <div className='projects-container text-center'>
            <h3 className='proj-title'>{currentProject.title}</h3>
            <div>
              <button className='button-proj next-prev' onClick={handlePreviousClick}>
                &#8249;
              </button>
              <a className='button-proj padd-link' href={currentProject.githubLink} rel='noreferrer' target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px" >
                    <path d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 
                    27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 
                    8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 
                    7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 
                    C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 
                    8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 
                    12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 
                    C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 
                    12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 
                    18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406
                    27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z" fill="#8a8a8a"/>
                  </svg>
              </a>
              <button className='button-proj next-prev' onClick={handleNextClick}>
              &#8250;
              </button>
            </div>
            <div className='video-cont' key={currentProject.videoSource}>
              {currentProject.videoSource && (
                <VideoPlayer videoSource={currentProject.videoSource} posterImage={currentProject.posterImage} />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
