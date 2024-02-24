// import React from 'react';
import PropTypes from 'prop-types';
import '../assets/services.css';
import img1 from '../assets/images/CE1.jpg';
import img2 from '../assets/images/CE2.jpg';
import img3 from '../assets/images/CE3.jpg';
import img4 from '../assets/images/CE4.jpg';
import Navbar from './navbar';

function ImageParagraph({ imageSrc, altText, paragraph, isRightAligned,topic }) {
  return (
    <div className={`image-paragraph ${isRightAligned ? 'right-aligned' : 'left-aligned'}`}>
      <div className="image-container">
        <img src={imageSrc} alt={altText} />
      </div>
      <div className="paragraph-container">
      <h2>{topic}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

ImageParagraph.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    isRightAligned: PropTypes.bool.isRequired,
    topic: PropTypes.string.isRequired
  };

function Services() {
  return (
    <div className="image-paragraph-list">
        <Navbar />
      <ImageParagraph
        className='service-img'
        imageSrc= {img1}
        altText="Image 1"
        topic="Conferences and Seminars"
        paragraph="These events bring together professionals from a specific industry or field to discuss trends, innovations, and best practices. Conferences often feature keynote speakers, panel discussions, workshops, and networking opportunities."
        isRightAligned={true}
        />
      <ImageParagraph
        className='service-img'
        imageSrc={img2}
        altText="Image 2"
        topic="Brand Activation"
        paragraph="Creating a brand with authentic and quality services/products is crucial for businesses to thrive financially in the field. However, creating an impression among your brand's audience is much more essential. So, let's make that possible. With our best event planners in Chennai, give your brand launch the attention it deserves with an unveiling that makes positive waves in the market."
        isRightAligned={false}
        />
      <ImageParagraph
        className='service-img'
        imageSrc={img3}
        altText="Image 3"
        topic="Trade Shows and Expos"
        paragraph="Trade shows provide businesses with a platform to showcase their products and services to potential clients, partners, and investors. Attendees can explore exhibits, participate in demonstrations, and engage in networking activities."
        isRightAligned={true}
        />
      <ImageParagraph
        className='service-img'
        imageSrc={img4}
        altText="Image 4"
        topic="Training Workshops and Seminars"
        paragraph="Companies host training events to educate employees on new technologies, procedures, or industry regulations. Workshops and seminars can be conducted internally by company experts or externally by professional trainers."
        isRightAligned={false}
        />
      <ImageParagraph
        className='service-img'
        imageSrc={img1}
        altText="Image 5"
        topic="Corporate Retreats"
        paragraph="Retreats offer employees and executives an opportunity to step away from their daily routines and focus on strategic planning, team bonding, or personal development. Corporate retreats can take place at off-site locations and may include team-building exercises, workshops, and recreational activities."
        isRightAligned={true}
      />
    </div>
  );
}

export default Services;
