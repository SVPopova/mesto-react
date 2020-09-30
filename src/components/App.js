import React from "react";
import Header from "./landing/Header/Header";
import Main from "./landing/Main/Main";
import Footer from "./landing/Footer/Footer";
import api from "../utils/Api";
import EditProfilePopup from './landing/EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from './landing/EditAvatarPopup/EditAvatarPopup';
import AddPlacePopup from './landing/AddPlacePopup/AddPlacePopup'
import { CurrentUserContext } from '../context/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false
  );
  const [cards, setCards] = React.useState([]);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    src: "",
    alt: "",
    title: "",
  });
  
  // const [isEditAgreePopupOpen, setEditAgreePopupOpen] = React.useState(false);
  
  React.useEffect(() => {
    api.getMe()
    .then((user) => {
      setCurrentUser(user);
    });
  }, []);

  React.useEffect(() => {
    api.getInitialCards().then((cards) => {
      setCards(cards);
    });
  }, []);

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
    setSelectedCard({ src: card.link, alt: card.name, title: card.name });
  }
  
  function handleUpdateUser(userInfo){
    api.changeUserInfo(userInfo).then((newUser)=> setCurrentUser(newUser));
closeAllPopups();
  }

  function handleUpdateAvatar(userAvatar){
    api.changeAvatar(userAvatar).then((newUser) => setCurrentUser(newUser));
    closeAllPopups();
  }

function handleCardLike(card){
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  api.changeLikeCards(card._id, !isLiked).then((newCard) => {
    const newCards = cards.map((c) => c._id === card._id ? newCard : c);
    setCards(newCards);
  });
}

function handleCardDelete(card){
  api.deleteCards(card._id).then(() => 
  setCards(cards.filter((item) => item !== card)))
 
}

function handleAddPlaceSubmit(card){
api.createCards(card).then((newCard)=>setCards([newCard, ...cards]));
closeAllPopups();
}

  return (
    <div className="page">
<CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onSelectedCard={handleCardClick}
        isSelectedCard={isImagePopupOpen}
        selectedCard={selectedCard}
        onClose={closeAllPopups}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <EditProfilePopup 
      isOpen={isEditProfilePopupOpen} 
      onClose={closeAllPopups}
      onUpdateUser={handleUpdateUser}
      /> 
      <EditAvatarPopup 
      isOpen={isEditAvatarPopupOpen} 
      onClose={closeAllPopups} 
      onUpdateAvatar={handleUpdateAvatar}/>
      <AddPlacePopup
      isOpen={isAddPlacePopupOpen} 
      onClose={closeAllPopups} 
      onAddPlace={handleAddPlaceSubmit}/>
      <Footer />
</CurrentUserContext.Provider>
    </div>
  );
}

export default App;
