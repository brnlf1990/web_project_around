const editButton = document.querySelector(".profile__info-edit-button");
const popup = document.querySelector(".popup");
const fade = document.querySelector(".popup__fade");
const closeBtn = document.querySelector(".popup__close-button");
const formElement = document.querySelector(".popup__form");
const addPopup = document.querySelector(".add-popup");
const addFade = document.querySelector(".add-popup__fade");
const addCloseButton = document.querySelector(".add-popup__close-button");
const addButton = document.querySelector(".profile__add-button-icon");
const addFormElment = document.querySelector(".add-popup__form");
/* Função de abrir do edit popup */
function openEdtPopup() {
  popup.classList.add("popup__opened");
  fade.classList.add("popup__fade");
  closeBtn.addEventListener("click", closeEditPopup);
  fade.addEventListener("click", closeEditPopup);
}

/* Função de fechar do edit popup */
export function closeEditPopup(evt) {
  popup.classList.remove("popup__opened");
  fade.classList.remove("popup__fade");
  closeBtn.removeEventListener("click", closeEditPopup);
  fade.removeEventListener("click", closeEditPopup);
  formElement.addEventListener("keydown", function escClose(evt) {
    if (evt.key === "Escape") {
      closeEditPopup();
    }
  });
}

/* Função de abrir janela do add popup */
function addOpenPopup() {
  addPopup.classList.add("add-popup__opened");
  addFade.classList.add("add-popup__fade");
  addCloseButton.addEventListener("click", addClosePopup);
  addFade.addEventListener("click", addClosePopup);
  addFormElment.addEventListener("keydown", function escClose(evt) {
    if (evt.key === "Escape") {
      addClosePopup();
    }
  });
}

/* Função de fechar popup imagem */
function closeImagePopup() {
  const templateOpenedImage = document.querySelector(".view-image");

  templateOpenedImage.classList.remove("view-image__container-image");
  closeBtn.removeEventListener("click", closeImagePopup);
}

/* Função de fechar do add popup */
export function addClosePopup() {
  addPopup.classList.remove("add-popup__opened");
  addFade.classList.remove("add-popup__fade");
  addCloseButton.removeEventListener("click", addClosePopup);
  addFade.addEventListener("click", addClosePopup);
}

/* Função de abrir a imagem */

export function openImage() {
  const templateOpenedImage = document.querySelector(".view-image");
  const templateContainerImage = templateOpenedImage.querySelector(
    ".view-image__container-image"
  );

  const cardsContainer = document.querySelector(".templates");
  const cards = cardsContainer.querySelectorAll(".templates__card");
  cards.forEach((card) => {
    const image = card.querySelector(".templates-card__image");
    const title = card.querySelector(".templates__card__description");
    const fadeClose = templateOpenedImage.querySelector(".view-image__fade");
    const templateImageTitle =
      templateContainerImage.querySelector(".view-image__title");
    const closeBtn = templateContainerImage.querySelector(
      ".view-image__close-button"
    );
    const templateImage =
      templateContainerImage.querySelector(".view-image__image");

    const imageSrc = image.getAttribute("src");

    image.addEventListener("click", () => {
      templateOpenedImage.classList.add("view-image__container-image");
      templateOpenedImage.classList.add("view-image__fade");
      templateImage.setAttribute("src", imageSrc);
      templateImageTitle.textContent = title.textContent;
      closeBtn.addEventListener("click", closeImagePopup);
      fadeClose.addEventListener("click", closeImagePopup);
    });
  });

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closeImagePopup();
    }
  });
}

/* Listener do botao de abrir edit popup */
editButton.addEventListener("click", openEdtPopup);

/* Listener do botao de abrid add popup */
addButton.addEventListener("click", addOpenPopup);
