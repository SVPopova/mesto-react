import React from "react";
function PopupWithForm(props) {
  return (
    <>
      <section className={`popup popup_type_${props.name} ${props.isOpen}`}>
        <form
          className="popup__container popup__container_form"
          method="GET"
          action="#"
          name={`${props.name}`}
          noValidate
        >
          <button
            className="popup__close"
            type="button"
            onClick={props.onClose}
          ></button>
          <h2 className="popup__title popup__title_profile">{`${props.title}`}</h2>
          {props.children}
          <button type="submit" className="popup__button">
            {props.button}
          </button>
        </form>
      </section>
    </>
  );
}

export default PopupWithForm;
