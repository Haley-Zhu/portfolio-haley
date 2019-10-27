import React from 'react';
import about from '../model/about';

class About extends React.Component {
  render() {
    return(
      <div>
        <p>About</p>
        <ul>
          {about.map(item => 
            <li>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default About;