import React from 'react';
import skills from '../model/skills';

class Skills extends React.Component {
  render() {
    return(
      <div>
        <p>skills</p>
        <ul>
          {skills.map(item => 
            <li>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default Skills;