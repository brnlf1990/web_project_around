import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  open(image, name) {
    const imageElement = this.popup.querySelector(".popup__image_zoom");
    const nameElement = this.popup.querySelector(".popup__image__title");
    console.log(image, name);
    imageElement.src = image;
    imageElement.alt = name;
    nameElement.textContent = name;
    super.open();
  }
}
