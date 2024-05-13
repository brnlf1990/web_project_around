import "./vendor/normalize.css";
import "./blocks/pages.css";
import "./blocks/header.css";
import "./blocks/profile.css";
import "./blocks/cards.css";
import "./blocks/footer.css";
import "./blocks/popup.css";
import "./blocks/add-popup.css";
import { FormValidator } from "./components/FormValidator.js";
import { Card } from "./components/Card.js";
import { Section } from "./components/Section.js";
import {
  initialCards,
  formElement,
  formElementCard,
  elementCard,
  addFormElment,
  addButton,
  editButton,
} from "./components/constants.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForms.js";
import { UserInfo } from "./components/UserInfo.js";

/* submit classe add-card */
formElementCard.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const imageLink = document.querySelector("#popup__image-link-insert");
  const titleName = document.querySelector("#popup__card-title-insert");
  const newCard = new Card(
    { link: imageLink.value, name: titleName.value },
    ".templates__card"
  );
  const insertCard = newCard.generateCard();
  console.log(insertCard);
  elementCard.insertBefore(insertCard, elementCard.firstChild);
  console.log(elementCard.firstChild);
});

/* Adição dos cards inicias/ abrir popupimagem*/
const popupImage = new PopupWithImage(".popup__image-container");
const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(
        item,
        {
          handlerCardClick: (imageSrc, title) => {
            popupImage.open(imageSrc, title);
            popupImage.setEventListener();
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

/* Abrir os popups */ /* Listener do submit do editpopup */
const userInfo = new UserInfo({
  nameProfile: ".profile__info-name",
  aboutProfile: ".profile__info-content",
});

const popupWithFormEdit = new PopupWithForm((data) => {
  userInfo.setUserInfo(data);
}, ".popup__container");

editButton.addEventListener("click", () => {
  popupWithFormEdit.open();
});

const popupWithFormAdd = new PopupWithForm((inputValues) => {
  section.setItem(inputValues);
}, ".add-popup__container");
addButton.addEventListener("click", () => {
  popupWithFormAdd.open();
});
