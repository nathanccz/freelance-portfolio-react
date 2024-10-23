import PropTypes from 'prop-types';
import { Icon } from "@iconify/react";
import { socialData } from "../../data.json";
import perser from 'html-react-parser';

const Modal = ({ img, title, date, subTitle, paraList, link, modalClose }) => {
  console.log(link)
  const modalStyle = {
    backgroundColor: 'rgba(0,0,0,.6)',
    backdropFilter: "saturate(180%) blur(8px)",
    display: "block"
  };
  const copyrightDate = new Date;
  const currentYear = copyrightDate.getFullYear()
  return (
    <div className="modal show fade bd-example-modal-lg" style={modalStyle}>
      <div className="px-modal">
        <button className="position-absolute top-0 end-0 text-white border-0 bg-transparent" onClick={modalClose}> <Icon icon="ic:round-close" /></button>
        <div className="single-blog-box">
          <div className="single-blog-img">
            <img src={img} title="" alt="" />
          </div>
          <div className="single-blog-content">
            {date && <h6>{date}</h6>}
            {subTitle && <h5>{subTitle}</h5>}
            <h2>{title}</h2>
            {paraList && paraList.map((element, index) => (
              <p key={index}>{perser(element.text)}</p>
            ))
            }
            {link &&
            <a class="px-btn" href={link} target='_blank'>
              Visit Live Site <Icon icon="bi-link" />
            </a>
            }
            <div className="blog-meta">
              <p className="copyright">© {currentYear} copyright all rights reserved</p>
              <ul className="nav social-link">
                {socialData.map((element, index) => (
                  <li key={index}>
                    <a href={element.link}>
                      <Icon icon={`bi:${element.icon}`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  date: PropTypes.string,
  paraList: PropTypes.array,
  modalClose: PropTypes.func,
}

export default Modal;