import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import { closeEditPopup } from "./utils.js";
import { addClosePopup } from "./utils.js";
import { openImage } from "./utils.js";
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];
const formElement = document.querySelector(".popup__form");
const addFormElment = document.querySelector(".add-popup__form");
const profileName = document.querySelector(".profile__info-name");
const about = document.querySelector(".profile__info-content");
const nameInput = document.querySelector("#popup__name-insert");
const aboutInput = document.querySelector("#popup__aboutMe-insert");

/* Variaveis para cards*/
const elCard = document.querySelector(".templates");
const template = document.querySelector(".templates__cards-container").content;
const formElementCard = document.querySelector(".add-popup__form");

/* Função do submit do edit popup */

function handlerProfileFormSubmit(event) {
  event.preventDefault();

  const nameValue = nameInput.value;
  const aboutInputValue = aboutInput.value;

  profileName.textContent = nameValue;
  about.textContent = aboutInputValue;
}

/* Listener do submit do editpopup */
formElement.addEventListener("submit", (event) => {
  handlerProfileFormSubmit(event);
  closeEditPopup();
  event.preventDefault();
});

/* submit classe add-card */
formElementCard.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addClosePopup();

  const imageLink = document.querySelector("#popup__image-link-insert");
  const titleName = document.querySelector("#popup__card-title-insert");
  const newCard = new Card(
    { link: imageLink.value, name: titleName.value },
    ".templates__card"
  );
  const insertCard = newCard.generateCard();
  console.log(insertCard);
  elCard.insertBefore(insertCard, elCard.firstChild);
});

/* Adição dos cards inicias*/
function arrayCardAdd() {
  template.innerHTML = "";
  initialCards.forEach((card) => {
    const imageElement = new Card(card, ".templates__card");

    const cardElement = imageElement.generateCard();

    elCard.append(cardElement);
  });
}

arrayCardAdd();

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

openImage();
