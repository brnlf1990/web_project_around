/* Variaveis para edit-popup */
const editButton = document.querySelector(".profile__info-edit-button");
const popup = document.querySelector(".popup");
const fade = document.querySelector(".popup__fade");
const closeBtn = document.querySelector(".popup__close-button");
const saveBtn = document.querySelector(".popup__submit-button");
const formElement = document.querySelector(".popup__form");
const profileName = document.querySelector(".profile__info-name");
const about = document.querySelector(".profile__info-content");
const nameInput = document.querySelector(".popup__name-insert");
const aboutInput = document.querySelector(".popup__aboutMe-insert");

/* Variaveis para add-popup*/
const addPopup = document.querySelector(".add-popup");
const addFade = document.querySelector(".add-popup__fade");
const addButton = document.querySelector(".profile__add-button");
const addCloseButton = document.querySelector(".add-popup__close-button");

/* Variaveis para cards*/
const cardContainer = document.querySelector(".cards__container");
const template = document.querySelector(".templates__cards").content;
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

    cardTemplate.querySelector(".templates-card__image").src = card.link;
    cardTemplate.querySelector(".templates__card__description").textContent =
      card.name;
    cardContainer.append(cardTemplate);
  });
}

/* Função de abrir do edit popup */
function openEdtPopup() {
  popup.classList.add("popup__opened");
  fade.classList.add("popup__fade");
  closeBtn.addEventListener("click", closeEditPopup);
  fade.addEventListener("click", closeEditPopup);
}

/* Função de fechar do edit popup */
function closeEditPopup() {
  popup.classList.remove("popup__opened");
  fade.classList.remove("popup__fade");
  closeBtn.removeEventListener("click", closeEditPopup);
  fade.removeEventListener("click", closeEditPopup);
}
/* Função de abrir do add popup */
function addOpenPopup() {
  addPopup.classList.add("add-popup__opened");
  addFade.classList.add("add-popup__fade");
  addCloseButton.addEventListener("click", addClosePopup);
  addFade.addEventListener("click", addClosePopup);
}

/* Função de fechar do add popup */
function addClosePopup() {
  addPopup.classList.remove("add-popup__opened");
  addFade.classList.remove("add-popup__fade");
  addCloseButton.removeEventListener("click", addClosePopup);
  addFade.addEventListener("click", addClosePopup);
}

/* Função de do submit do edit popup */

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
  cardTemplate.querySelector(".templates-card__image").src = imagevalue;
  cardTemplate.querySelector(".templates__card__description").textContent =
    namevalue;
  cardContainer.append(cardTemplate);
}
/* Para deixar os cards existentes ja carregados na pagina*/
arrayCardAdd();
/* Lisnter do botao de abrir edit popup */
editButton.addEventListener("click", openEdtPopup);

/* Listener do botao de abrid add popup */
addButton.addEventListener("click", addOpenPopup);

/* Listener do submit do editpopup */
formElement.addEventListener("submit", (event) => {
  if (nameInput.value.length > 0 && aboutInput.value.length > 0) {
    handlerProfileFormSubmit(event);
    closeEditPopup();
  } else {
    event.preventDefault();
    alert("Os campos não podem ficar em branco.");
  }
});

/* Listener do submit do add card */
formElementCard.addEventListener("submit", (evt) => {
  evt.preventDefault;
  const imageLink = document.querySelector(".add-popup__image-link-insert");
  const titleName = document.querySelector(".add-popup__card-title-insert");
  handlerCardFormSubmit(imageLink.value, titleName.value);
});
