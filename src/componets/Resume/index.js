import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { BsFillFileEarmarkWordFill } from 'react-icons/bs';
import resumePDF from '../../assets/RyanPetty-web-resume.pdf';

function ResumeForm() {
  return (
    <section>
      <div className='resume-container'>
        <Row>
          <Col lg={4} md={12}>
            <h2 className='resume'>Front-end proficiencies</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React.js</li>
              <li>Frameworks: Bootstrap</li>
            </ul>
          </Col>

          <Col lg={4} md={12}>
            <h2 className='resume'>Back-end proficiencies</h2>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL: mysql12</li>
              <li>NoSQL: MongoDB, Mongoose</li>
              <li>API's: RESTful, server-side</li>
              <li>Template language: Handlebars</li>
            </ul>
          </Col>

          <Col lg={4} md={12}>
            <h2 className='education'>Education</h2>
            <p>
              <span className='school-name'>Northwestern University</span>
              <br></br>
              Full Stack Web Development Bootcamp
              <br></br>
              <br></br>
              <span className='school-name'>Harper College</span>
              <br></br>
              Associate in Arts
              <br></br>
              E-Marketing
            </p>
            <Col lg={3} md={12}>
              <a href={resumePDF} download>
                <BsFillFileEarmarkWordFill className='resume-icon' />
              </a>
              <p className='icon-text'>Resume</p>
            </Col>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default ResumeForm;
