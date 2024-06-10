import { Popup } from "./Popup.js";
import { cardeDeleteButton } from "./constants.js";

export class PopupWithConfirmation extends Popup {
  constructor(deleteApi) {
    this.deleteApi = deleteApi;
  }

  open() {
    super.open();
  }

  deleteConfimation() {
    cardeDeleteButton.addEventListener("click", () => {
      this.deleteApi;
    });
  }
}
// posso colocar um handlerRemoveCard em um constructor que ira a api para remoção do cartao?
// Como posso colocar o id correto para apagar o cartao certo
//talvez possa colocar api aqui e depois  ativar no index dentro de uma instancia
//do card e colocar a Classe Card para recebe-la
