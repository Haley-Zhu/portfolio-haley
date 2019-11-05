import React from 'react';
import skills from '../model/skills';
import Subtitle from '../components/Subtitle';
import WOW from 'wowjs';

class Skills extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div id="skills">
        <Subtitle>Skills</Subtitle>
        <div className="skills__content wow bounceIn" data-wow-delay="1s">
          <ul>
            {skills.map(item =>
              <li>{item}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Skills;