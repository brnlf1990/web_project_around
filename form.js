export const editShowInputError = (formElement, inputElement, errorMessage) => {
  const erroElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__form-input-error");
  erroElement.textContent = errorMessage;
  erroElement.classList.add("popup__insert-error-active");
};

export const editHideInputError = (formElement, inputElement) => {
  const erroElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__form-input-error");
  erroElement.classList.remove("popup__name-insert-error-active");
  erroElement.textContent = "";
};

export const editIsValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    editShowInputError(
      formElement,
      inputElement,
      inputElement.validationMessage
    );
  } else {
    editHideInputError(formElement, inputElement);
  }
};

export const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toogleButton = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__submit-button-error");
  } else {
    buttonElement.classList.remove("popup__submit-button-error");
  }
};

export const setEventListeners = (formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(".popup__form-input")
  );
  const buttonElement = formElement.querySelector(".popup__submit-button");
  toogleButton(inputList, buttonElement);
  inputList.forEach((inputEl) => {
    inputEl.addEventListener("input", function () {
      editIsValid(formElement, inputEl);
      toogleButton(inputList, buttonElement);
    });
  });
};

export const editEnableVal = () => {
  const formList = Array.from(document.querySelectorAll("form"));

  formList.forEach((formEl) => {
    formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formEl);
  });
};
