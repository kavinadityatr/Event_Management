import { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from './navbar';
import Footer from '../components/footer';
import img1 from '../assets/images/CE1.jpg';
import img2 from '../assets/images/CE2.jpg';
import img3 from '../assets/images/CE3.jpg';
import img4 from '../assets/images/CE4.jpg';
import '../assets/services.css';

function EditableImageParagraph({ topic, paragraph, imageSrc, isRightAligned, onSave }) {
  const [editedTopic, setEditedTopic] = useState(topic);
  const [editedParagraph, setEditedParagraph] = useState(paragraph);
  const [editedImageSrc, setEditedImageSrc] = useState(imageSrc);

  const handleSave = () => {
    onSave(editedTopic, editedParagraph, editedImageSrc);
  };

  return (
    <div className={`image-paragraph ${isRightAligned ? 'right-aligned' : 'left-aligned'}`}>
      <div className="image-container">
        <img src={editedImageSrc} />
        <input type="file" accept="image/*" onChange={(e) => setEditedImageSrc(URL.createObjectURL(e.target.files[0]))} />
      </div>
      <div className="paragraph-container">
        <input type="text" value={editedTopic} onChange={(e) => setEditedTopic(e.target.value)} />
        <textarea value={editedParagraph} onChange={(e) => setEditedParagraph(e.target.value)} />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

EditableImageParagraph.propTypes = {
  topic: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  isRightAligned: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
};

function AdminServices() {
  const [data, setData] = useState([
    { topic: "Conferences and Seminars", paragraph: "These events bring together professionals from a specific industry or field to discuss trends, innovations, and best practices. Conferences often feature keynote speakers, panel discussions, workshops, and networking opportunities.", imageSrc: img1, altText: "Image 1", isRightAligned: true },
    { topic: "Brand Activation", paragraph: "Creating a brand with authentic and quality services/products is crucial for businesses to thrive financially in the field. However, creating an impression among your brand's audience is much more essential. So, let's make that possible. With our best event planners in Chennai, give your brand launch the attention it deserves with an unveiling that makes positive waves in the market.", imageSrc: img2, altText: "Image 2", isRightAligned: false },
    { topic: "Trade Shows and Expos", paragraph: "Trade shows provide businesses with a platform to showcase their products and services to potential clients, partners, and investors. Attendees can explore exhibits, participate in demonstrations, and engage in networking activities.", imageSrc: img3, altText: "Image 3", isRightAligned: true },
    { topic: "Training Workshops and Seminars", paragraph: "Companies host training events to educate employees on new technologies, procedures, or industry regulations. Workshops and seminars can be conducted internally by company experts or externally by professional trainers.", imageSrc: img4, altText: "Image 4", isRightAligned: false },
    { topic: "Corporate Retreats", paragraph: "Retreats offer employees and executives an opportunity to step away from their daily routines and focus on strategic planning, team bonding, or personal development. Corporate retreats can take place at off-site locations and may include team-building exercises, workshops, and recreational activities.", imageSrc: img1, altText: "Image 5", isRightAligned: true }
  ]);

  const handleSave = (index, topic, paragraph, imageSrc, altText) => {
    const newData = [...data];
    newData[index] = { topic, paragraph, imageSrc, altText, isRightAligned: data[index].isRightAligned };
    setData(newData);
  };

  return (
    <div className="image-paragraph-list">
      <Navbar />
      {data.map((item, index) => (
        <EditableImageParagraph
          key={index}
          topic={item.topic}
          paragraph={item.paragraph}
          imageSrc={item.imageSrc}
          altText={item.altText}
          isRightAligned={item.isRightAligned}
          onSave={(topic, paragraph, imageSrc, altText) => handleSave(index, topic, paragraph, imageSrc, altText)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default AdminServices;
