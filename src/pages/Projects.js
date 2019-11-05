import React from 'react';
import projects from '../model/projects';
// import { Carousel } from 'react-bootstrap';
import Subtitle from '../components/Subtitle';
import { ReactComponent as LinkIcon } from '../assets/link-solid.svg';
import { ReactComponent as Code } from '../assets/code-solid.svg';
import WOW from 'wowjs';

class Projects extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div id="projects">
        <Subtitle>Projects</Subtitle>
        {/* <Carousel className="projects-container">
          {projects.map(item => {
            return (
              <Carousel.Item>
                <div className="projects__item">
                  <img src={item.image} alt={item.name} />
                  <div>{item.discriptions.map(discription =>
                    <p className="projects__discription">{discription}</p>
                  )}</div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel> */}
        <div className="project-container">
          {projects.map(item => {
            return (
              <div className="project__item wow fadeInUp" data-wow-delay="0.6s">
                <div className="img-container">
                  <img src={item.image} alt={item.name} />
                  <div class="img__overlay">
                    <div className="view__icons">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <LinkIcon className="view__icon" alt="github" />
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Code className="view__icon" alt="github" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project__discription">
                  {item.discriptions.map(discription =>
                    <p>{discription}</p>
                  )}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;