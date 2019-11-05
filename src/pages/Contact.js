import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Subtitle from '../components/Subtitle';
import { ReactComponent as User } from '../assets/user-solid.svg';
import { ReactComponent as Subject } from '../assets/th-large-solid.svg';
import { ReactComponent as Email } from '../assets/envelope-square-solid.svg';
import { ReactComponent as Message } from '../assets/comments-solid.svg';
import { ReactComponent as Mobile } from '../assets/mobile-alt-solid.svg';
import { ReactComponent as Location } from '../assets/map-marker-alt-solid.svg';
import { ReactComponent as Github } from '../assets/github-square-brands.svg';
import { ReactComponent as Linkdin } from '../assets/linkedin-brands.svg';
import personalDetail from '../model/personalDetail';
import WOW from 'wowjs';

class Contact extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div id="contact">
        <Subtitle className="wow bounceIn" data-wow-delay=".6s">Contact</Subtitle>
        <div className="contact-container">
          <div className="contact--left wow fadeInLeft" data-wow-delay="1.2s">
            <Form>
              <div className="contact__item">
                <span className="contact__icon-wrap">
                  <User className="contact__icon" />
                </span>
                <input type="text" name="name" placeholder="Enter Your name" />
              </div>
              <div className="contact__item">
                <span className="contact__icon-wrap">
                  <Email className="contact__icon" />
                </span>
                <input type="email" name="email" placeholder="Enter email" />
              </div>
              <div className="contact__item">
                <span className="contact__icon-wrap">
                  <Subject className="contact__icon" />
                </span>
                <input type="text" name="subject" placeholder="Subject" />
              </div>
              <div className="contact__item contact__item--large">
                <span className="contact__icon-wrap">
                  <Message className="contact__icon" />
                </span>
                <textarea name="message" placeholder="Message"></textarea>
              </div>
              <Button type="submit" variant="yellow">Send</Button>
            </Form>
          </div>
          <div className="contact--right wow fadeInRight animated" data-wow-delay="1.2s">
            <div className="contact__info">
              <p className="contact__subtitle">CONTACT INFO</p>
              <div className="contact__info__item">
                <Mobile className="contact__info__icon" />
                <span>{personalDetail.mobile}</span>
              </div>
              <div className="contact__info__item">
                <Email className="contact__info__icon" />
                <span>{personalDetail.email}</span>
              </div>
              <div className="contact__info__item">
                <Location className="contact__info__icon" />
                <span>{personalDetail.location}</span>
              </div>
            </div>
            <div className="contact__follow">
              <p className="contact__subtitle">FOLLOW ME</p>
              <div className="contact__follow__icons">
                <a href={personalDetail.github} target="_blank" rel="noopener noreferrer">
                  <Github className="contact__follow__icon" alt="github" />
                </a>
                <a href={personalDetail.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkdin className="contact__follow__icon" alt="linkdin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;