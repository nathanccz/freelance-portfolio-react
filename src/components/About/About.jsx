import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import perser from 'html-react-parser';
import { Icon } from '@iconify/react';
import { Link as ScrollLink } from "react-scroll";

const About = ({ data }) => {
  const { aboutLeft, aboutRight } = data;
  const { ImgLink, name, designation, resumeCv } = aboutLeft;
  const { aboutText, services, archivement, note } = aboutRight;

  return (
    <section id="about" className="section about-section bg-dark">
      <div className="container">
        <SectionHeading title="HOW CAN I HELP YOu?" subTitle="Welcome to my porfolio!" />
        <div
          className="row gy-4"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          <div className="col-lg-5">
            <div className="about-left">
              <div className="about-avatar">
                <img src={`${ImgLink}`} alt="Thumb" />
              </div>
              <h3>{name}</h3>
              <p>{perser(designation)}</p>
              <div className="btn-bar">
                <ScrollLink to="contact" spy={true} className="px-btn">
                  Schedule a Free Call
                  <Icon icon="bi:arrow-up-right" /></ScrollLink>
              </div>
            </div>
          </div>
          <div className="col-lg-7 ps-xl-5">
            <div className="about-bio">
              <p>{perser(aboutText)}</p>
            </div>
            <div className="about-contact row gx-lg-5">
              {services.map((element, index) => (
                <div className="col-sm-6" key={index}>
                  <p>
                    <Icon icon={`bi:${element.icon}`} />{' '}
                    <span>{element.data}</span>
                  </p>
                </div>
              ))}
            </div>
            <div className="about-exp">
              <div className="row gy-4">
                {archivement.map((element, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="a-number">
                      <h6>{element.number}</h6>
                      <span>{perser(element.meta)}</span>
                    </div>
                    <p>{perser(element.text)}</p>
                  </div>
                ))}
              </div>
              <div className="skill-icons">
                <Icon icon="skill-icons:html" />
                <Icon icon="skill-icons:tailwindcss-dark" />
                <Icon icon="skill-icons:javascript" />
                <Icon icon="skill-icons:react-dark" />
                <Icon icon="skill-icons:nodejs-dark" />
                <Icon icon="skill-icons:mongodb" />
                <Icon icon="skill-icons:postgresql-dark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  data: PropTypes.object,
};

export default About;
