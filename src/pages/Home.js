import React from 'react';
import { ReactComponent as Github } from '../assets/github-square-brands.svg';
import { ReactComponent as Linkdin } from '../assets/linkedin-brands.svg';
import { ReactComponent as Email } from '../assets/envelope-square-solid.svg';

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <div className="home-container">
          <div className="home__content">
            <p className="home__welcome">Hello, I am</p>
            <p className="home__name">HALEY ZHU</p>
            <p className="home__major">Full-Stack Developer</p>
            <div className="home__icons">
              <a href="https://github.com/Haley-Zhu" target="_blank" rel="noopener noreferrer">
                <Github className="home__icon" alt="github" />
              </a>
              <a href="https://github.com/Haley-Zhu" target="_blank" rel="noopener noreferrer">
                <Linkdin className="home__icon" alt="linkdin" />
              </a>
              <a href="https://github.com/Haley-Zhu" target="_blank" rel="noopener noreferrer">
                <Email className="home__icon" alt="email" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;