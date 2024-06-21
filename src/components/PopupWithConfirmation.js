import { cardeDeleteButton } from "./constants.js";
import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(deleteApi, popupElements) {
    super(popupElements);
    this.deleteApi = deleteApi;
  }

  deleteConfimation(cardId) {
    cardeDeleteButton.addEventListener("click", () => {
      this.deleteApi(cardId);
    });
  }
}
