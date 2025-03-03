import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import perser from 'html-react-parser';
import { Link as ScrollLink } from "react-scroll";
import { Typewriter } from 'react-simple-typewriter';


const Hero = ({ data }) => {
  const { title, subTitle, ImgLink, phone, email, socialData, avatar } = data;

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const heroElements = document.querySelector('.hb-me');
      if (heroElements) {
        heroElements.style.right = `${scrollValue * -0.25}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="home-section bg-dark">
      <div className="container">
        <div className="row  min-vh-100 align-items-center">
          <div className="col-lg-7 col-xl-7 col-xxl-6">
            <div className="hb-text">
               {/* Avatar */}
              {/* <div className="avatar" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                <img src={avatar} alt="avatar" />
              </div> */}
              {/* / */}
              <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">{perser(title)}</h1>
              <p className="lead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">A <span><Typewriter
              words={['software engineer', 'full-stack web developer', 'problem solver']}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            /></span> <br/> based in Los Angeles, CA</p>
              <div className='btn-container'>
                <div className="btn-bar" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                  <ScrollLink to="work" spy={true} className="px-btn">
                    Portfolio
                    <Icon icon="bi:arrow-up-right" /></ScrollLink>
                </div>
                <div className="btn-bar" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                  <ScrollLink to="contact" spy={true} className="px-btn">
                    Let's Talk!
                    <Icon icon="bi:arrow-up-right" /></ScrollLink>
                </div>
              </div>
              <div className="info-bar" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                {/*<p><Icon icon="bi-github" /><span><a href='https://github.com/nathanccz'>github.com/nathanccz</a></span></p>*/}
                <p><Icon icon="bi-envelope" /><span><a href='mailto:nathanweb.dev@proton.me'>{email}</a></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hb-me" style={{ backgroundImage: `url(${ImgLink})` }} data-aos="fade-left" data-aos-duration="800" data-aos-delay="800"/>
      <div className="social-fix">
        <div className="social-links" >
          {
            socialData.map((element, index) => (
              <a href={element.link} key={index} target="_blank" rel="noopener noreferrer">
                <Icon icon={`fa6-brands:${element.icon}`} />
              </a>
            ))
          }
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  data: PropTypes.object
}

export default Hero;
