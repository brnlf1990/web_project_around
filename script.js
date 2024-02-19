let profileContainer = document.querySelector(".profile__container");
let editButton = profileContainer.querySelector(".profile__info_edit-button");
let popup = document.querySelector(".popup");
let closeBtn = popup.querySelector(".popup__close-button");

function openedPop() {
  popup.classList.add("popup__openned");
  let page = document.querySelector(".page");
}

function closePop(event) {
  if (event.target === closeBtn) {
    popup.classList.remove("popup__openned");
  }
}
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = popup.querySelector(".popup__name_insert");
  let jobInput = popup.querySelector(".popup__aboutMe_insert");

  let nameValue = nameInput.value;
  let jobInputValue = jobInput.value;

  let name = profileContainer.querySelector(".profile__info_name");
  let job = profileContainer.querySelector(".profile__info_content");

  name.textContent = nameValue;
  job.textContent = jobInputValue;
}

editButton.addEventListener("click", openedPop);
popup.addEventListener("click", closePop);
popup.addEventListener("submit", handleProfileFormSubmit);
