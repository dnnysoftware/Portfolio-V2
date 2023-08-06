import Navigation from './Navigation';
import Intro from './Intro';
import AboutMe from "./AboutMe";
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Model from './Model';
import { Container } from 'react-bootstrap';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div className='background'>
      <Navigation/>
      <Container className='intro-container justify-content-center' fluid='xxl' id='home'>
        <section className='block-sec'>
          <Intro/>
        </section>
        <section className='block-sec'>
          <Model/>
        </section>
        <section className='block-sec'>
          <AboutMe/>
        </section>
        <section className='block-sec'>
          <Education />
        </section>
        <section className='block-sec'>
          <Experience/> 
        </section>
        <section className='block-sec'>
          <Projects/>
        </section>
      </Container>
    </div>
  );
}

export default App;
