import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../img/rocket.svg';
import Button from './Button';

const buttonClick = () => {
  window.open("https://angel.co", "_blank");
}

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" className="logoLink">
          <img src={logo} className="logo" alt="rocket icon" />
          <span className="voyage">voyage</span><span className="labs">labs</span>
        </Link>
      </div>
      <div className="right">
        <Button onClick={() => buttonClick()}>Join Our Voyage</Button>
      </div>
    </div>
  );
}

export default Navbar;
