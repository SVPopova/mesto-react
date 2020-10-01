import React from "react";
import { CurrentUserContext } from "../../../context/CurrentUserContext";

function Cards(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const cardDeleteButtonClassName = `element__basket ${
    props.card.owner._id === currentUser._id ? "element__basket_active" : ""
  }`;
  const cardLikeButtonClassName = `element__like ${
    props.card.likes.some((i) => i._id === currentUser._id)
      ? "element__like_active"
      : ""
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }
  return (
    <div className="element">
      <button
        type="button"
        onClick={handleDeleteClick}
        className={cardDeleteButtonClassName}
      ></button>
      <img
        className="element__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="element__group">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__likebox">
          <button
            onClick={handleLikeClick}
            className={cardLikeButtonClassName}
            type="button"
          ></button>
          <p className="element__like-number">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
