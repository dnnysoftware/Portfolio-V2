import './css/Projects.css';

function Projects() {
  return (
    <>
        <div className='text-center' id='projects'>
            <h1 className='text white projects-title'>Projects</h1>
            <div className='d-flex justify-content-center text-center'>
                <GPS_PROJECT />
            </div>
        </div>
        <div className='sub d-flex justify-content-center text-center'>
            <HOME_SECURITY />
        </div>
        <div className='sub d-flex justify-content-center text-center'>
            <SECURITY_FOOTAGE_PORTAL />
        </div>
        <div className='sub d-flex justify-content-center text-center'>
            <LANGUAGE_TRANSLATOR />
        </div>
        <div className='sub d-flex justify-content-center text-center'>
            <RATE_MY_MANAGER />
        </div>
        <div className='sub d-flex justify-content-center text-center'>
            <DUBINS_CAR />
        </div>
        <div className='sub d-flex justify-content-center text-center'>
            <CLIENT_TIME_TRACKER />
        </div>
        <div className='sub d-flex justify-content-center text-center'>
            <BLACKJACK />
        </div>
    </>
  );
}

function GPS_PROJECT() {
  return (
    <>
        <div className='projects-container'>
            <a className='github-btn port-button port-button-white port-button-animate' href="https://github.com/dnnysoftware/GPS-Web-App" rel="noreferrer" target="_blank">GPS State Capitol Search</a>
            <video className='video-player' width="100%" height="100%" controls poster='./img/gps.png'>
                <source src='https://d1a8mx70ybu1ae.cloudfront.net/GPS_State_Capitol_Project.mov' type="video/mp4"/>
            </video>
        </div>
    </> 
  )
}


function HOME_SECURITY() {
    return (
      <>
          <div className='projects-container'>
              <a className='github-btn port-button port-button-white port-button-animate' href="https://github.com/dnnysoftware/HomeSecurityAI" rel="noreferrer" target="_blank">Security Camera AI</a>
              <video className='video-player' width="100%" height="100%" controls poster='./img/home-ai.png'>
                  <source src='https://d1a8mx70ybu1ae.cloudfront.net/HomeAI.mp4' type="video/mp4"/>
              </video>
          </div>
      </> 
    )
}

function SECURITY_FOOTAGE_PORTAL() {
    return (
      <>
          <div className='projects-container'>
              <a className='github-btn port-button port-button-white port-button-animate' href="https://github.com/dnnysoftware/SecurityFootagePortal" rel="noreferrer" target="_blank">Security Footage Portal</a>
              <video className='video-player' width="100%" height="100%" controls poster='./img/security-portal.png'>
                  <source src='https://d1a8mx70ybu1ae.cloudfront.net/SecurityFootage.mov' type="video/mp4"/>
              </video>
          </div>
      </> 
    )
}


function DUBINS_CAR() {
    return (
      <>
          <div className='projects-container'>
              <a className='github-btn port-button port-button-white port-button-animate' href="https://github.com/dnnysoftware/DubinsCarMachineLearning" rel="noreferrer" target="_blank">Dubins Car Machine Learning</a>
              <video className='video-player' width="100%" height="100%" controls poster='./img/dubins.png'>
                  <source src='https://d1a8mx70ybu1ae.cloudfront.net/DubinsCar.mp4' type="video/mp4"/>
              </video>
          </div>
      </> 
    )
}


function BLACKJACK() {
    return (
      <>
          <div className='projects-container'>
              <a className='github-btn port-button port-button-white port-button-animate' href="https://github.com/dnnysoftware/BlackJackGame" rel="noreferrer" target="_blank">Golang Blackjack</a>
              <video className='video-player' width="100%" height="100%" controls poster='./img/blackjack.png'>
                  <source src='https://d1a8mx70ybu1ae.cloudfront.net/Blackjack.mov' type="video/mp4"/>
              </video>
          </div>
      </> 
    )
}


function RATE_MY_MANAGER() {
    return (
      <>
          <div className='projects-container'>
              <a className='github-btn port-button port-button-white port-button-animate' href="https://github.com/dnnysoftware/Rate-My-Manager.git" rel="noreferrer" target="_blank">Rate My Manager MERN Stack</a>
              <video className='video-player' width="100%" height="100%" controls poster='./img/manager.png'>
                  <source src='https://d1a8mx70ybu1ae.cloudfront.net/RateMyManager.mov' type="video/mp4"/>
              </video>
          </div>
      </> 
    )
}



function CLIENT_TIME_TRACKER() {
    return (
      <>
          <div className='projects-container'>
              <a className='github-btn port-button port-button-white port-button-animate' href="https://github.com/dnnysoftware/ClientTimeTracker.git" rel="noreferrer" target="_blank">Clients Time Tracker</a>
              <video className='video-player' width="100%" height="100%" controls poster='./img/tracker.png'>
                  <source src='https://d1a8mx70ybu1ae.cloudfront.net/ClientTimeTracker.mov' type="video/mp4"/>
              </video>
          </div>
      </> 
    )
}


function LANGUAGE_TRANSLATOR() {
    return (
      <>
          <div className='projects-container'>
              <a className='github-btn port-button port-button-white port-button-animate' href="https://github.com/dnnysoftware/Language-Translator-Web-App.git" rel="noreferrer" target="_blank">Language Translator Web App</a>
              <video className='video-player' width="100%" height="100%" controls poster='./img/translator.png'>
                  <source src='https://d1a8mx70ybu1ae.cloudfront.net/LanguageTranslator.mov' type="video/mp4"/>
              </video>
          </div>
      </> 
    )
}

export default Projects;
