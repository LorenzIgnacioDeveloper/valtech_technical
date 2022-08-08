import React from "react";
import { AiOutlineClose } from "react-icons/ai";
const ModalImage = ({ image, show, onClose }) => {
  if (!show) return null;
  return (
    <div className="cmp-modal">
      <div className="cmp-modal--backdrop">
        <AiOutlineClose
          className="cmp-modal--backdrop-close-icon"
          onClick={onClose}
        />
      </div>
      <div className="cmp-modal--container">
        {image ? (
          <img
            className="cmp-modal--container-image"
            src={image}
            alt="image_on_modal"
          />
        ) : (
          <p>Image not found!</p>
        )}
      </div>
    </div>
  );
};

export default ModalImage;
