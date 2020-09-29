import React from "react";

function Cards(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <>
      <div className="element">
        <button type="button" className="element__basket"></button>
        <img
          className="element__image"
          src={props.card.src}
          alt={props.card.alt}
          onClick={handleClick}
        />
        <div className="element__group">
          <h2 className="element__title">{props.card.title}</h2>
          <div className="element__likebox">
            <button className="element__like" type="button"></button>
            <p className="element__like-number">{props.card.likes}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
