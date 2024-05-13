const template = document.querySelector(".templates__cards-container").content;
console.log(template);
export class Card {
  constructor(data, { handlerCardClick }, cardSelector) {
    this._image = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handlerCardClick = handlerCardClick;
  }

  _getTemplate() {
    const cardElement = template
      .querySelector(this._cardSelector)
      .cloneNode(true);
    return cardElement;
  }

  _handleRemove() {
    this._element.remove();
  }

  _handleLike() {
    this._element
      .querySelector(".templates__card-button")
      .classList.toggle("templates__card-button-active");
  }

  _setEventListener() {
    this._element
      .querySelector(".templates__card_remove-button")
      .addEventListener("click", () => {
        this._handleRemove();
      });

    this._element
      .querySelector(".templates__card-button")
      .addEventListener("click", () => {
        this._handleLike();
      });

    this._element.addEventListener("click", () => {
      this._handlerCardClick(this._image, this._name);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".templates-card__image").src = this._image;
    this._element.querySelector(".templates-card__image").alt = this._name;
    this._element.querySelector(".templates__card__description").textContent =
      this._name;
    this._setEventListener();

    return this._element;
  }
}
