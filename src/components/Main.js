import React, { useState } from 'react';
import Modal from 'react-modal';

import './Main.scss';
import Button from './Button';

import sensor1 from '../img/sensor1.png';
import sensor2 from '../img/sensor2.png';
import sensor3 from '../img/sensor3.png';

Modal.setAppElement('#root');

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Contact Modal"
        className="contactModal"
        overlayClassName="modalOverlay"
      >
        <div className="contactHeader">Questions? Reach out to us!</div>
        <form action="https://formspree.io/carrierong37@gmail.com" method="POST">

          <div className="formTitle">Name</div>
          <input className="inputField" type="text" name="name"/>

          <div className="formTitle">Email</div>
          <input className="inputField" type="text" name="_replyto"/>

          <div className="formTitle">Subject</div>
          <input className="inputField" />

          <div className="formTitle">Message</div>
          <textarea className="textarea" rows="5" />

          <Button type="submit">Send</Button>
        </form>
      </Modal>
      <div className="main">
        <div className="left">
          <h1 className="title">We’re finding a better way </h1>
          <div className="bodytext">
          to monitor and collect health data with the best-in-class sensors that detect drugs, 
          glucose, proteins and other biomolecules non-invasively.
          </div>
          <div className="bodytext">
          Learn more about how our sensor platform works, and if it can help you.
          </div>
          <div className="contact">
          <Button onClick={() => setModalOpen(true)}>Contact Us</Button>
          </div>
        </div>
        <div className="right">
          <img src={sensor1} className="sensor1" alt="Sensor layer 1" />
          <img src={sensor2} className="sensor2" alt="Sensor layer 2" />
          <img src={sensor3} className="sensor3" alt="Sensor layer 3" />
        </div>
      </div>
    </>
  );
}

export default Main;
