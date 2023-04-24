import React from 'react';
import { Col } from 'react-bootstrap';
import profilePic from '../../assets/Profile-pic.jpg'

function About() {
    return(
        <section className='title'>

            <div className='row justify-content-center' id='about-container'>
            <Col lg={6} md={12}>
            <center><img src={profilePic} className='profile-pic' alt='my-profile'/></center>
            <p className='name'>Ryan Petty</p>
            <p className='job'>Junior Full Stack Web Developer</p>
            <h2 className='education'>About me</h2>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br></br>
            <br></br>
            </p>    
            </Col>
            </div>
        </section>
    )
};

export default About;