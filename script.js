const editButton = document.querySelector(".profile__info-edit-button");
const popup = document.querySelector("#popup__opened");
const fade = document.querySelector("#popup__fade");
const closeBtn = document.querySelector(".popup__close-button");
const saveBtn = document.querySelector(".popup__submit-button");
const formElement = document.querySelector(".popup__form");
const profileName = document.querySelector(".profile__info-name");
const about = document.querySelector(".profile__info-content");
const nameInput = document.querySelector(".popup__name-insert");
const aboutInput = document.querySelector(".popup__aboutMe-insert");

const togglePopup = () => {
  popup.classList.toggle("popup__hide");
  fade.classList.toggle("popup__hide");

  if (!popup.classList.contains("popup__hide")) {
    nameInput.value = profileName.textContent;
    aboutInput.value = about.textContent;
  }
};

function handlerProfileFormSubmit(event) {
  event.preventDefault();

  const nameValue = nameInput.value;
  const aboutInputValue = aboutInput.value;

  profileName.textContent = nameValue;
  about.textContent = aboutInputValue;
}

formElement.addEventListener("submit", (event) => {
  if (nameInput.value.length > 0 && aboutInput.value.length > 0) {
    handlerProfileFormSubmit(event);
  } else {
    alert("Os campos não podem ficar em branco.");
  }
});
[editButton, saveBtn, closeBtn, fade].forEach((elementos) => {
  elementos.addEventListener("click", togglePopup);
});
