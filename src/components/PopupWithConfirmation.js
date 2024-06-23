import { fade } from "./constants.js";
import { Popup } from "./Popup.js";
export class PopupWithConfirmation extends Popup {
  constructor(popupElements, deleteApi) {
    super(popupElements);
    this.deleteApi = deleteApi;
  }
  deleteConfimation(cardId) {
    this.deleteApi(cardId);
  }

  closePopupWithConfirmation() {
    document
      .querySelector(".card-delete__container")
      .classList.remove("popup__opened");
    fade.classList.remove("active");
  }

  _handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        console.log("entrou");
        this.closePopupWithConfirmation();
      }
    });
  }

  setEventListener() {
    const closeButton = document.querySelector(".card-delete__close-button");

    closeButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      closeButton.removeEventListener(
        "click",
        this.closePopupWithConfirmation()
      );
    });

    fade.addEventListener("click", (evt) => {
      evt.preventDefault();
      this.closePopupWithConfirmation();
      fade.removeEventListener("click", this.closePopupWithConfirmation());
    });
  }
}
