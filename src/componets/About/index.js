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
            <p className='job'>Full Stack Web Developer</p>
            <h2 className='education'>About me</h2>

            <p>
            Hello, my name is Ryan. I recently switched my education to web development and studyied rigorously at Northwestern University. I wanted to challenge myself in new ways by exploring the world of coding. Web Development allows me to be creative and find ways to optimize certain processes. Everything and anything can always be improved and I enjoy being able to solve issues that challenge my mind!
            <br></br>
            <br></br>
            I am a full-stack Web Developer based in the Chicago-land area with certificates in e-Marketing and Web Development. I studied at Harper college to obtain my Associate in Arts and spent a lot of my time working hard to achieve my educational goals. I am a hands on person who likes to take things apart and put them back together to understand how things work. Some of my hobbies include: Building PC's, Studying game design, and, Video production/editing. I am a hard worker who is always putting my all into everything. I enjoy learning and am looking forward to learning more during my coding journey!
            <br></br>
            <br></br>
            </p>    
            </Col>
            </div>
        </section>
    )
};

export default About;