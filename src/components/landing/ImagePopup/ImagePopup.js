import React from "react";
function ImagePopup(props) {
  return (
    <>
      <section className={`popup popup_type_${props.name} ${props.isOpen}`}>
        <figure className="popup__container popup__container_figure">
          <button
            className="popup__close"
            type="button"
            onClick={props.onClose}
          ></button>
          <img
            className="popup__img"
            src={props.card.src}
            alt={props.card.alt}
          />
          <figcaption className="popup__text">{props.card.title}</figcaption>
        </figure>
      </section>
    </>
  );
}

export default ImagePopup;
