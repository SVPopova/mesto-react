import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function AddPlacePopup(props) {
  const nameRef = React.useRef("");
  const linkRef = React.useRef("");

  React.useEffect(() => {
    nameRef.current.value = "";
    linkRef.current.value = "";
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="place"
      title="Новое место"
      button="Создать"
      isOpen={props.isOpen ? "popup_on" : ""}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={nameRef}
        type="text"
        name="name"
        className="popup__input popup__input_title"
        id="title-input"
        placeholder="Название"
        required
        minLength="1"
        maxLength="30"
      />
      <span className="popup__input-error" id="title-input-error">
        Необходимо заполнить данное поле
      </span>
      <input
        ref={linkRef}
        type="url"
        name="link"
        className="popup__input popup__input_link"
        id="link-input"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__input-error" id="link-input-error">
        Необходимо заполнить данное поле
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
