import "./vendor/normalize.css";
import "./blocks/pages.css";
import "./blocks/header.css";
import "./blocks/profile.css";
import "./blocks/cards.css";
import "./blocks/footer.css";
import "./blocks/popup.css";
import "./blocks/add-popup.css";
import "./blocks/popupCardDelete.css";
import "./blocks/popupPhotoUpdate.css";
import { FormValidator } from "./components/FormValidator.js";
import { Api } from "./components/Api.js";
import { Card } from "./components/Card.js";
import { Section } from "./components/Section.js";
import {
  formElement,
  formElementCard,
  elementCard,
  addFormElment,
  addButton,
  editButton,
  fade,
} from "./components/constants.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForms.js";
import { PopupWithConfirmation } from "./components/PopupWithConfirmation.js";
import { UserInfo } from "./components/UserInfo.js";
import { update } from "lodash";

/* Chamando API*/

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web-ptbr-cohort-10",
  headers: {
    authorization: "ddda171a-2bb7-46e7-9726-3c7c72f035dd",
    "Content-Type": "application/json",
  },
});

/* Adição dos cards inicias/ abrir popupimagem com apis*/
api.getInitialCards().then((cards) => {
  const initialCards = cards;
  const popupImage = new PopupWithImage(".popup__image-container");
  const popupWithConfirmation = new PopupWithConfirmation(
    ".card-delete__container"
  );
  const section = new Section(
    {
      items: initialCards,
      renderer: (item) => {
        const card = new Card(
          "c5546425fb70198d03ee20bd",
          item,
          {
            handlerCardClick: (imageSrc, title) => {
              popupImage.open(imageSrc, title);
              popupImage.setEventListener();
            },
            handlerLikeClick: (card) => {
              const isLiked = card._element
                .querySelector(".templates__card-button")
                .classList.contains("templates__card-button-active");

              if (isLiked) {
                api.unlikeCard(item._id).then((updatedCard) => {
                  card.updateLikes(updatedCard.likes.length);
                });
              } else {
                api.likeCard(item._id).then((updatedCard) => {
                  card.updateLikes(updatedCard.likes.length);
                });
              }
            },
            handlerDeleteCard: (cardId) => {
              const confirmationButton = document.querySelector(
                ".card-delete-button"
              );

              document
                .querySelector(".card-delete-form")
                .addEventListener("submit", (event) => {
                  event.preventDefault();
                  if (event.target.contains(confirmationButton)) {
                    api.deleteCard(cardId).then(() => {
                      card._element.remove();
                      document
                        .querySelector(".card-delete__container")
                        .classList.remove("popup__opened");
                      fade.classList.remove("active");
                    });
                  } else {
                    popupImage.close();
                  }
                });
            },
          },
          ".templates__card"
        );

        const cardElement = card.generateCard();
        section.setItem(cardElement);
      },
    },
    ".templates"
  );
  section.renderItems();
});
const popupWithFormAdd = new PopupWithForm((inputValues) => {
  api.postNewCard(inputValues).then(() => {
    const newCard = new Card(
      { name: inputValues.title, link: inputValues.image },
      {
        handlerCardClick: (imageSrc, title) => {
          popupImage.open(imageSrc, title);
          popupImage.setEventListener();
        },
      },
      ".templates__card"
    );

    const cardElment = newCard.generateCard();
    elementCard.insertBefore(cardElment, elementCard.firstChild);
  });
}, ".add-popup__container");
addButton.addEventListener("click", () => {
  popupWithFormAdd.open();
});

/* validação dos inputs do edit form */
new FormValidator(
  {
    formSelector: ".popup__form",
    inputSelector: ".popup__form-input",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__submit-button-error",
    popupFormInputError: "popup__form-input-error",
    inputErrorClass: "popup__insert-error-active",
  },
  formElement
).enableValidation();

/* validação dos inputs do add form */
new FormValidator(
  {
    formSelector: ".add-popup__form",
    inputSelector: ".add-popup__form-input",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__submit-button-error",
    popupFormInputError: "popup__form-input-error",
    inputErrorClass: "popup__insert-error-active",
  },
  addFormElment
).enableValidation();

const userInfo = new UserInfo({
  nameProfile: ".profile__info-name",
  aboutProfile: ".profile__info-content",
});

/* Chamando api*/
api.getUserInfo().then((user) => {
  userInfo.setUserInfo(user);
});

const popupWithFormEdit = new PopupWithForm((data) => {
  api.patchUserInfo(data).then((apiUser) => {
    userInfo.setUserInfo(apiUser);
  });
}, ".popup__container");

editButton.addEventListener("click", () => {
  popupWithFormEdit.open();
});

const popupChangeAvatar = new PopupWithForm(() => {
  api.userAvatar(data).then((link) => {});
});
