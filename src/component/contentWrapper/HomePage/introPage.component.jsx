import React, { Component } from 'react';
import './introPage.css'
import { FiFacebook } from 'react-icons/fi';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { Row, Col, Button } from 'react-bootstrap'


class IntroPage extends Component {

   state = {
      SocialMediaIcons: [
         {
            iconname: <FiFacebook />,
            link: ""
         },
         {
            iconname: <FaTwitter />,
            link: ""
         },
         {
            iconname: <FaGithub />,
            link: ""
         }
      ]
   }
   render() {
      const { SocialMediaIcons } = this.state
      return (
         <div className="mi-home-area mi-padding-section">
            <div className="mi-home-particle">
               <canvas style={{ width: "100%", height: "100%" }}>
               </canvas>
            </div>
            <div className="container">
               <Row className="justify-content-center">
                  <Col xs={12} lg={10} >
                     <div className="mi-home-content">
                        <h1>
                           Hi, I am
                         <span className="color-theme">
                              Bongomin Daniel
                         </span>
                        </h1>
                        <p>
                           I am a full-stack Software Engneer. I can provide clean code and pixel perfect design. I do not shy away from challenges in my field of work and as a result I have learned a lot and amassed numerous skills and problem solving techniques over the years. I am always looking to improve my craft and keep up with the fast evolving nature of the IT industry.
                         </p>
                        <ul className="mi-socialicons mi-socialicons-bordered">
                           {SocialMediaIcons.map((icon, i) => {
                              return (
                                 <li key={i}>{icon.iconname}</li>
                              )
                           })}
                        </ul>
                     </div>
                     <Button variant="primary" className="resumeButton">Download Resume</Button>
                  </Col>
               </Row>
            </div>
         </div >
      );
   }
}

export default IntroPage;

