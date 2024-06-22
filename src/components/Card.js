const template = document.querySelector(".templates__cards-container").content;
const fade = document.querySelector(".popup__image-fade");
import { PopupWithConfirmation } from "./PopupWithConfirmation.js";
import { cardeDeleteButton } from "./constants.js";

export class Card extends PopupWithConfirmation {
  constructor(
    myId,
    data,
    { handlerCardClick, handlerLikeClick, handlerDeleteCard },

    cardSelector,
    popupElements
  ) {
    super(popupElements);
    this._image = data.link;
    this._name = data.name;
    this._likes = data.likes.length;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this.myId = myId;
    this._cardSelector = cardSelector;
    this._handlerCardClick = handlerCardClick;
    this._handlerLikeClick = handlerLikeClick;
    this.handlerDeleteCard = handlerDeleteCard;
  }
  _getTemplate() {
    const cardElement = template
      .querySelector(this._cardSelector)
      .cloneNode(true);

    return cardElement;
  }

  _handleLike() {
    this._handlerLikeClick(this);
    this._element
      .querySelector(".templates__card-button")
      .classList.toggle("templates__card-button-active");
  }

  _removeRemoveImage() {
    const removeButton = this._element.querySelector(
      ".templates__card_remove-button"
    );
    if (this._ownerId != this.myId) {
      removeButton.remove();
    }
  }

  _setEventListener() {
    this._element
      .querySelector(".templates__card_remove-button")
      .addEventListener("click", () => {
        document
          .querySelector(".card-delete__container")
          .classList.add("popup__opened");
        fade.classList.add("active");
        this.handlerDeleteCard(this._cardId);
      });
    this._element
      .querySelector(".templates__card-button")
      .addEventListener("click", () => {
        this._handleLike();
      });

    this._element
      .querySelector(".templates-card__image")
      .addEventListener("click", () => {
        this._handlerCardClick(this._image, this._name);
      });

    this._removeRemoveImage();
  }

  updateLikes(likesCount) {
    this._likes = likesCount;
    this._element.querySelector(".templates__card-likes-count").textContent =
      this._likes;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".templates-card__image").src = this._image;
    this._element.setAttribute("id", this._cardId);
    this._element.setAttribute("ownerId", this._ownerId);
    this._element.querySelector(".templates-card__image").alt = this._name;
    this._element.querySelector(".templates__card__description").textContent =
      this._name;
    this._setEventListener();

    return this._element;
  }
}
