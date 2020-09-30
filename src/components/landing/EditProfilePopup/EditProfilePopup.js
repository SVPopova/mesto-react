import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { CurrentUserContext } from "../../../context/CurrentUserContext";

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [about, setAbout] = React.useState('');

    React.useEffect(() => {
       if(props.isOpen){ 
           setName(currentUser.name);
           setAbout(currentUser.about);}
      }, [currentUser, props.isOpen]); 


    function handleChangeName(e) {
        setName(e.target.value);
      }

      function handleChangeAbout(e) {
        setAbout(e.target.value);
    }
      
    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateUser({
          name: name,
          about: about,
        });
      }

  return (
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        button="Сохранить"
        isOpen={props.isOpen ? "popup_on" : ""}
        onClose={props.onClose}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={name}
          name="name"
          className="popup__input popup__input_name"
          id="name-input"
          required
          minLength="2"
          maxLength="40"
          onChange={handleChangeName}
        />
        <span className="popup__input-error" id="name-input-error">
          Необходимо заполнить данное поле
        </span>
        <input
        value={about}
          type="text"
          name="about"
          className="popup__input popup__input_about"
          id="about-input"
          required
          minLength="2"
          maxLength="200"
          onChange={handleChangeAbout}
        />
        <span className="popup__input-error" id="about-input-error">
          Необходимо заполнить данное поле
        </span>
      </PopupWithForm>
  );
}

export default EditProfilePopup;