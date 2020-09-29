import React from "react";
import Header from "./landing/Header/Header";
import Main from "./landing/Main/Main";
import Footer from "./landing/Footer/Footer";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    src: "",
    alt: "",
    title: "",
  });
  // const [isEditAgreePopupOpen, setEditAgreePopupOpen] = React.useState(false);

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({});
    //  setEditAgreePopupOpen(false);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setImagePopupOpen(true);
    setSelectedCard({ src: card.src, alt: card.alt, title: card.title });
  }
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onSelectedCard={handleCardClick}
        isOpenProfile={isEditProfilePopupOpen}
        isOpenAvatar={isEditAvatarPopupOpen}
        isOpenPlace={isAddPlacePopupOpen}
        isSelectedCard={isImagePopupOpen}
        selectedCard={selectedCard}
        onClose={closeAllPopups}
      />
      <Footer />
    </div>
  );
}

export default App;
