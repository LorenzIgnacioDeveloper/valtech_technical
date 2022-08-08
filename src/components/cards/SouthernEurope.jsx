import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
// local imports
import { data } from "./data";
import ModalImage from "./ModalImage";

const SouthernEurope = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  // filter image
  const pirntList = data.filter((item) => item.location === "south");
  return (
    <div className="cmp-card">
      {pirntList?.map((item, index) => (
        <div
          className="cmp-card-container group"
          key={index}
        >
          <img
            className="cmp-card-container--image"
            src={item.image}
            alt={item.country}
          />
          {/* hover content */}
          <div className="cmp-card-container--text">
            <h1 className="cmp-card-container--text-country">{item.country}</h1>
            <h2 className="cmp-card-container--text-city">{item.city}</h2>
            <p className="cmp-card-container--text-description">
              {item.description}
            </p>
            <div className="cmp-card-container--text-button-svg">
              <IoSearch
                className="cmp-card-container--text-button-svg--hidden"
                onClick={() => {
                  setCurrentImage(item.image);
                  toggleModal();
                }}
              />
            </div>
            <a className="cmp-card-container--text-link-explore" href={item.url} target="_blank" rel="noreferrer">
              <button className="cmp-card-container--text-button-explore">Explore more</button>
            </a>
          </div>
        </div>
      ))}
      <ModalImage image={currentImage} show={showModal} onClose={toggleModal} />
    </div>
  );
};

export default SouthernEurope;
