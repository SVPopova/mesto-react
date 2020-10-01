import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function EditProfilePopup(props) {
  const avatarRef = React.useRef("");

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      button="Сохранить"
      isOpen={props.isOpen ? "popup_on" : ""}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
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

export default EditProfilePopup;
