export class FormValidator {
  constructor(config, elementForm) {
    this._config = config;
    this._elementForm = elementForm;
  }
  enableValidation() {
    const inputs = this._elementForm.querySelectorAll(
      this._config.inputSelector
    );
    inputs.forEach((input) => this._setEventListeners(input));
  }

  _setEventListeners(input) {
    input.addEventListener("input", () => {
      const isValid = input.checkValidity();
      const errorElement = this._elementForm.querySelector(
        `.${input.id}-error`
      );

      if (isValid) {
        errorElement.classList.remove(this._config.errorSelector);
        input.classList.remove(this._config.popupFormInputError);
        errorElement.textContent = "";
      } else {
        input.classList.add(this._config.popupFormInputError);
        errorElement.textContent = input.validationMessage;
        errorElement.classList.add(this._config.inputErrorClass);
      }
      this._validitySubmitButton();
    });
  }

  _validitySubmitButton() {
    const submitButton = this._elementForm.querySelector(
      this._config.submitButtonSelector
    );
    const isFormValid = this._elementForm.checkValidity();

    if (!isFormValid) {
      submitButton.setAttribute("disabled", "disabled");
      submitButton.classList.add(this._config.inactiveButtonClass);
    } else {
      submitButton.removeAttribute("disabled");
      submitButton.classList.remove(this._config.inactiveButtonClass);
    }
  }
}
