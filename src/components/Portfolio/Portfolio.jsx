import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Modal from '../Modal/Modal';


const Portfolio = ({ data }) => {
  // Modal
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (imgLink, title, subTitle, paragraphList, link) => {
    console.log(imgLink, title, subTitle, paragraphList, link);
    let tempData = [imgLink, title, subTitle, paragraphList, link];
    setTempData(element => [1, ...tempData]);
    setModal(true);
  }

  const modalClose = () => {
    setModal(false);
  }


  return (
    <section>
      <div id="work" className="section work-section bg-dark">
        <div className="container">
          <SectionHeading title="LATEST WORK" subTitle="My Portfolio" />
          <div className="row gy-5 lightbox-gallery" data-aos="fade-up" data-aos-duration="800">
            {
              data.map((element, index) => (
                <div className="col-lg-6" key={index} data-aos="fade-up" data-aos-duration="800" data-aos-delay={index + 2 * 200}>
                  <div className="work-box">
                    <div className="work-img" onClick={() => getData(element.ImgLink, element.title, element.subTitle, element.paragraphList, element.link)}>
                      <img src={element.ImgLink} title="" alt="portfolio image" />
                    </div>
                    <div className="work-text">
                      <h6>{element.subTitle}</h6>
                      <a onClick={() => getData(element.ImgLink, element.title, element.subTitle, element.paragraphList, element.link)}>
                        <h4>{element.title}</h4>
                      </a>
                      <div className="btn-bar">
                        <a className="gallery-link" onClick={() => getData(element.ImgLink, element.title, element.subTitle, element.paragraphList, element.link)}>
                          <Icon icon="bi:arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {modal === true ? <Modal img={tempData[1]} title={tempData[2]} subTitle={tempData[3]} paraList={tempData[4]} link={tempData[5]} modalClose={modalClose} /> : ""}
    </section>
  )
}

Portfolio.propTypes = {
  data: PropTypes.array
}


export default Portfolio;
