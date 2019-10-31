import React from 'react';
import LinkdinIcon from '../assets/linkedin-in-brands.svg';
import GithubIcon from '../assets/github-brands.svg';
import GmailIcon from '../assets/gmail.svg';
import Mail from '../assets/at-solid.svg';

class Home extends React.Component {
  render() {
    return(
      <div id="home">
        <div className="home-container">
          <div className="home__icon-container">
            <a href="https://github.com/Haley-Zhu" target="_blank" rel="noopener noreferrer">
              {/* <img src={GithubIcon} alt="github" className="home__icon" /> */}
              <span  className="home__icon">GithubIcon</span>
            </a>
            <a href="https://github.com/Haley-Zhu" target="_blank" rel="noopener noreferrer">
              {/* <img src={LinkdinIcon} alt="linkdin" className="home__icon" /> */}
              <span  className="home__icon">GithubIcon</span>
            </a>
            <a href="https://github.com/Haley-Zhu" target="_blank" rel="noopener noreferrer">
              {/* <img src={Mail} alt="mail" className="home__icon" /> */}
              <span  className="home__icon">GithubIcon</span>
            </a>
          </div>
          <p className="home__welcome">Hello, I am</p>
          <p className="home__name">HALEY ZHU</p>
          <p className="home__major">Full-Stack Developer</p>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;