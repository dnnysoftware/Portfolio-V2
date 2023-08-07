import Navigation from './Navigation';
import Intro from './Intro';
import AboutMe from "./AboutMe";
import Experience from './Experience';
import Organizations from './Organizations';
import Projects from './Projects';
import Model from './Model';
import Links from './Links';
import Email from './Email';
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
        <section className='block-sec'  id='about'>
          <AboutMe/>
        </section>
        <section className='block-sec space d-flex justify-content-center align-items-center' id='experience'>
          <Experience/> 
        </section>
        <section className='block-sec' id='organizations'>
          <Organizations />
        </section>
        <section className='proj' id='projects'>
          <Projects/>
        </section>
        <section>
          <Model/>
        </section>
        <section>
          <Email/>
        </section>
        <section className="d-flex justify-content-center">
          <Links/> 
        </section>
      </Container>
    </div>
  );
}

export default App;
