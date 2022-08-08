import React from "react";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";
import './footer.scss';

const Footer = () => (
  <div className="cmp-footer">
    <div className="cmp-footer-container">
      <div className="cmp-footer-container--icon">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <IoLogoFacebook/>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <IoLogoTwitter/>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <IoLogoInstagram/>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
        <IoLogoYoutube/>
        </a>
      </div>
    </div>
  </div>
);

export default Footer;