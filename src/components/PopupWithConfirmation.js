import { cardeDeleteButton } from "./constants.js";
import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(deleteApi, popupElements) {
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
  }

  setEventListener() {
    const closeButton = this.popup.querySelector(
      ".photo-update-popup__close-button"
    );
    console.log("entrou");
    closeButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this.closePopupWithConfirmation();
      closeButton.removeEventListener(
        "click",
        this.closePopupWithConfirmation()
      );
    });
  }
}
