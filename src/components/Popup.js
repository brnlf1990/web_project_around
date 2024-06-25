import { fade } from "./constants.js";
export class Popup {
  constructor(popupElements) {
    this.popup = document.querySelector(popupElements);
  }

  open() {
    this.popup.classList.add("popup__opened");
    fade.classList.add("active");
    this._handleEscClose();
  }

  close() {
    this.popup.classList.remove("popup__opened");
    fade.classList.remove("active");
  }

  _handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    });
  }

  setEventListener() {
    const closeButton = this.popup.querySelector(".popup__close-button");

    closeButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this.close();
      closeButton.removeEventListener("click", this.close());
    });
    fade.addEventListener("click", (evt) => {
      evt.preventDefault();
      this.close();
      fade.removeEventListener("click", this.close());
    });
  }
}
