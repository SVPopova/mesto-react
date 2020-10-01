import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Cards from "../Cards/Cards";
import ImagePopup from "../ImagePopup/ImagePopup";
import { CurrentUserContext } from "../../../context/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <section className="profile">
        <div className="profile__info">
          <div className="profile__overlay">
            <img
              className="profile__avatar"
              onClick={props.onEditAvatar}
              src={currentUser.avatar}
              alt="Фотография профиля"
            />
          </div>
          <div className="profile__text">
            <div className="profile__topline">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__button profile__button_edit"
                type="button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__about">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__button profile__button_add"
          onClick={props.onAddPlace}
          type="button"
        ></button>
      </section>
      <section className="elements">
        {props.cards.map((card) => (
          <Cards
            onCardLike={props.onCardLike}
            key={card._id}
            onCardClick={props.onSelectedCard}
            onCardDelete={props.onCardDelete}
            card={card}
          />
        ))}
      </section>
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
