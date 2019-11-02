import React from 'react';
import projects from '../model/projects';
import { Carousel } from 'react-bootstrap';
import Subtitle from '../components/Subtitle';

class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <Subtitle>Projects</Subtitle>
        <Carousel className="project-container">
          {projects.map(item => {
            return (
                <Carousel.Item>
                  <div className="project__item">
                    <img src={item.image} alt={item.name} />
                    <div>{item.discriptions.map(discription =>
                      <p className="project__discription">{discription}</p>
                    )}</div>
                  </div>
                </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default Projects;