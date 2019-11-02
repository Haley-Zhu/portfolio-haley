import React from 'react';
import skills from '../model/skills';
import Subtitle from '../components/Subtitle';

class Skills extends React.Component {
  render() {
    return(
      <div id="skills">
        <Subtitle>Skills</Subtitle>
        <ul>
          {skills.map(item => 
            <li>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default Skills;