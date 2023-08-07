import {Container, Button} from 'react-bootstrap';
import './css/Intro.css';

const btns = "button-def";


function Intro() {

    return (
        <Container>
            <div className='d-flex align-items-center'>
                <section className='title-section'>
                    <div>
                        <p className='bay-leaf mono-font'>Hi, my name is</p>
                    </div>
                    <div>
                        <h2 className='brown-black title text'>Daniel Mironiuk</h2>
                    </div>
                    <div>
                        <h3 className='desc text grey'>I bring value through software</h3>
                    </div>
                    <div className='intro-desc'>
                        <p className='grey'>
                            I'm a full stack engineer and cloud developer that enjoys bringing value and making people smile. 
                            I graduated Cum Laude from the<a className="bay-leaf link-tag hover-underline-animation" href="https://www.rit.edu/" target="_blank" rel="noreferrer">Rochester Institute of Technology</a> in 2023 with a Bachelor's 
                            degree in Software Engineering and various internship experiences under my belt.
                        </p>
                    </div>
                    <div className='email-btn'>
                        <Button bsPrefix={btns} className='rose' href="mailto: softwarebydanielmironiuk@gmail.com">Get In Touch</Button>
                    </div>
                    <div>
                    </div>
                </section>
            </div>
        </Container>
    );
}

export default Intro;

