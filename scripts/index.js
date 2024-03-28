import { editEnableVal, setEventListeners } from "./form.js";

/* Variaveis para edit-popup */
const editButton = document.querySelector(".profile__info-edit-button");
const popup = document.querySelector(".popup");
const fade = document.querySelector(".popup__fade");
const closeBtn = document.querySelector(".popup__close-button");
const saveBtn = document.querySelector(".popup__submit-button");
const formElement = document.querySelector(".popup__form");
const profileName = document.querySelector(".profile__info-name");
const about = document.querySelector(".profile__info-content");
const nameInput = document.querySelector("#popup__name-insert");
const aboutInput = document.querySelector("#popup__aboutMe-insert");

/* Variaveis para add-popup*/
const addPopup = document.querySelector(".add-popup");
const addFade = document.querySelector(".add-popup__fade");
const addButton = document.querySelector(".profile__add-button");
const addCloseButton = document.querySelector(".add-popup__close-button");

/* Variaveis para cards*/
const elCard = document.querySelector(".cards");
const template = document.querySelector(".templates__cards-container").content;
const formElementCard = document.querySelector(".add-popup__form");

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

/* Função para acrescentar o array de cards */

function arrayCardAdd() {
  initialCards.forEach((card) => {
    const cardTemplate = template
      .querySelector(".templates__card")
      .cloneNode(true);
    const imageEl = cardTemplate.querySelector(".templates-card__image");
    imageEl.src = card.link;
    imageEl.alt = card.name;
    cardTemplate.querySelector(".templates__card__description").textContent =
      card.name;
    elCard.append(cardTemplate);
    removeCard();
  });
  elCard.querySelectorAll(".templates__card-button").forEach((button) => {
    button.addEventListener("click", function (evt) {
      evt.target.classList.toggle("templates__card-button-active");
    });
  });
}

/* Função de abrir do edit popup */
function openEdtPopup() {
  popup.classList.add("popup__opened");
  fade.classList.add("popup__fade");
  closeBtn.addEventListener("click", closeEditPopup);
  fade.addEventListener("click", closeEditPopup);
  setEventListeners(formElement);
}

/* Função de fechar do edit popup */
function closeEditPopup() {
  popup.classList.remove("popup__opened");
  fade.classList.remove("popup__fade");
  closeBtn.removeEventListener("click", closeEditPopup);
  fade.removeEventListener("click", closeEditPopup);
}
/* Função de abrir janela do add popup */
function addOpenPopup() {
  addPopup.classList.add("add-popup__opened");
  addFade.classList.add("add-popup__fade");
  addCloseButton.addEventListener("click", addClosePopup);
  addFade.addEventListener("click", addClosePopup);
}

/* Função de fechar popup imagem */
function closeImagePopup() {
  const templateOpenedImage = document.querySelector(".opened__image");

  const templateFade = templateOpenedImage.querySelector(".open__fade");

  templateOpenedImage.classList.remove("open__container-image");
}

/* Função de fechar do add popup */
function addClosePopup() {
  addPopup.classList.remove("add-popup__opened");
  addFade.classList.remove("add-popup__fade");
  addCloseButton.removeEventListener("click", addClosePopup);
  addFade.addEventListener("click", addClosePopup);
}

/* Função do submit do edit popup */

function handlerProfileFormSubmit(event) {
  event.preventDefault();

  const nameValue = nameInput.value;
  const aboutInputValue = aboutInput.value;

  profileName.textContent = nameValue;
  about.textContent = aboutInputValue;
}

/* Função submit add popup, para adicionar os cards */
function handlerCardFormSubmit(imagevalue, namevalue) {
  const cardTemplate = template
    .querySelector(".templates__card")
    .cloneNode(true);
  const imageEl = cardTemplate.querySelector(".templates-card__image");
  imageEl.src = imagevalue;
  imageEl.alt = namevalue;
  cardTemplate.querySelector(".templates__card__description").textContent =
    namevalue;
  elCard.insertBefore(cardTemplate, elCard.firstChild);
  elCard
    .querySelector(".templates__card-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("templates__card-button-active");
    });
  removeCard();
}

/* Função do botão de apagar*/
function removeCard() {
  const removeBtns = document.querySelectorAll(
    ".templates__card_remove-button"
  );

  removeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const card = btn.closest(".templates__card");
      if (card) {
        card.remove();
      }
    });
  });
}

/* Função de abrir a imagem */

function openImage() {
  const templateOpenedImage = document.querySelector(".opened__image");
  const templateContainerImage = templateOpenedImage.querySelector(
    ".open__container-image"
  );
  const cardsContainer = document.querySelector(".cards");
  const cards = cardsContainer.querySelectorAll(".templates__card");
  cards.forEach((card) => {
    const image = card.querySelector(".templates-card__image");
    const title = card.querySelector(".templates__card__description");
    const fadeClose = templateOpenedImage.querySelector(".open__fade");
    const templateImageTitle =
      templateContainerImage.querySelector(".open__image-title");
    const closeBtn = templateContainerImage.querySelector(
      ".open__close-button"
    );
    const templateImage = templateContainerImage.querySelector(".open__image");

    const imageSrc = image.getAttribute("src");

    image.addEventListener("click", () => {
      templateOpenedImage.classList.add("open__container-image");
      templateOpenedImage.classList.add("open__fade");
      templateImage.setAttribute("src", imageSrc);
      templateImageTitle.textContent = title.textContent;
      templateImage.setAttribute("alt", templateImageTitle.textContent);
      closeBtn.addEventListener("click", closeImagePopup);
      closeBtn.removeEventListener("click", closeImagePopup);
      fadeClose.addEventListener("click", closeImagePopup);
    });
  });
}

/* Para deixar os cards existentes ja carregados na pagina*/
arrayCardAdd();
editEnableVal();
document.addEventListener("DOMContentLoaded", function () {
  openImage();
});

/* Listener do botao de abrir edit popup */
editButton.addEventListener("click", openEdtPopup);

/* Listener do botao de abrid add popup */
addButton.addEventListener("click", addOpenPopup);

/* Listener do submit do editpopup */
formElement.addEventListener("submit", (event) => {
  handlerProfileFormSubmit(event);
  closeEditPopup();
  event.preventDefault();
});

/* Listener do submit do add card */
formElementCard.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const imageLink = document.querySelector("#popup__image-link-insert");
  const titleName = document.querySelector("#popup__card-title-insert");
  handlerCardFormSubmit(imageLink.value, titleName.value);
  removeCard();
  addClosePopup();
  imageLink.value = "";
  titleName.value = "";
  openImage();
});
