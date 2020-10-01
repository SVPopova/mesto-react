const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`); // если ошибка, отклоняем промис
};

class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
  getMe() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
      .then(handleResponse)
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      method: "GET",
      headers: this.headers,
    })
      .then(handleResponse)
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
  createCards(data) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ name: data.name, link: data.link }),
    })
      .then(handleResponse)
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
  deleteCards(idCard) {
    return fetch(`${this.baseUrl}/cards/${idCard}`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then(handleResponse)
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
  changeLikeCards(idCard, isLiked) {
    return fetch(`${this.baseUrl}/cards/likes/${idCard}`, {
      method: `${isLiked ? "PUT" : "DELETE"}`,
      headers: this.headers,
    })
      .then(handleResponse)
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
  changeAvatar(data) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({ avatar: data.avatar }),
    })
      .then(handleResponse)
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
  changeUserInfo(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({ name: data.name, about: data.about }),
    })
      .then(handleResponse)
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
}
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-14",
  headers: {
    authorization: "9eba132f-f547-4f26-8f5f-732456ccc9d1",
    "Content-Type": "application/json",
  },
});
export default api;
