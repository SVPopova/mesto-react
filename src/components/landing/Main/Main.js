import React, { useEffect, useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import api from "../../../utils/Api";
import Cards from "../Cards/Cards";
import ImagePopup from "../ImagePopup/ImagePopup";
function Main(props) {
  const [userAvatar, setUserAvatar] = useState();
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [cards, setCards] = useState([]);
  useEffect(() => {
    api.getMe().then((user) => {
      setUserAvatar(user.avatar);
      setUserName(user.name);
      setUserDescription(user.about);
    });
    api.getInitialCards().then((cards) => {
      const items = cards.map((card) => ({
        id: card._id,
        src: card.link,
        alt: card.name,
        title: card.name,
        likes: card.likes.length,
      }));
      setCards(items);
    });
  }, []);
  return (
    <>
      <section className="profile">
        <div className="profile__info">
          <div className="profile__overlay">
            <img
              className="profile__avatar"
              onClick={props.onEditAvatar}
              src={userAvatar}
              alt="Фотография профиля"
            />
          </div>
          <div className="profile__text">
            <div className="profile__topline">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__button profile__button_edit"
                type="button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__button profile__button_add"
          onClick={props.onAddPlace}
          type="button"
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Cards key={card.id} onCardClick={props.onSelectedCard} card={card} />
        ))}
      </section>
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        button="Сохранить"
        isOpen={props.isOpenProfile ? "popup_on" : ""}
        onClose={props.onClose}
      >
        <input
          type="text"
          name="name"
          className="popup__input popup__input_name"
          id="name-input"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error" id="name-input-error">
          Необходимо заполнить данное поле
        </span>
        <input
          type="text"
          name="about"
          className="popup__input popup__input_about"
          id="about-input"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__input-error" id="about-input-error">
          Необходимо заполнить данное поле
        </span>
      </PopupWithForm>
      <PopupWithForm
        name="place"
        title="Новое место"
        button="Создать"
        isOpen={props.isOpenPlace ? "popup_on" : ""}
        onClose={props.onClose}
      >
        <input
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
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        button="Сохранить"
        isOpen={props.isOpenAvatar ? "popup_on" : ""}
        onClose={props.onClose}
      >
        <input
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
      <PopupWithForm
        name="agree"
        title="Вы уверены?"
        button="Да"
        onClose={props.onClose}
      />
      <ImagePopup
        name="figure"
        card={props.selectedCard}
        isOpen={props.isSelectedCard ? "popup_on" : ""}
        onClose={props.onClose}
      />
    </>
  );
}

export default Main;
