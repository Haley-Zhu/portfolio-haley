import React from 'react';
import about from '../model/about';
import Subtitle from '../components/Subtitle';

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <Subtitle>About Me</Subtitle>
        <div className="about__content">
          <ul>
            {about.map(item =>
              <li>{item}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default About;