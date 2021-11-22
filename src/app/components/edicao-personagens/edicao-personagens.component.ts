import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Personagem } from "src/app/models/filme.model";

@Component({
  selector: "app-edicao-personagens",
  templateUrl: "./edicao-personagens.component.html"
})
export class EdicaoPersonagensComponent {
  @Input() personagens: Personagem[] = [];
  @Output() atualizarPersonagensEvent = new EventEmitter<Personagem[]>();
  nome = "";
  ator = "";

  adicionarPersonagem() {
    if (this.nome.trim() !== "" && this.ator.trim() !== "") {
      let personagens = this.personagens ?? [];
      personagens.push({ nome: this.nome, ator: this.ator });

      this.atualizarPersonagensEvent.emit(personagens);

      this.nome = "";
      this.ator = "";
    }
  }

  removerPersonagem(personagem: Personagem) {
    const personagens = this.personagens.filter(
      (item) => item.nome !== personagem.nome
    );
    this.atualizarPersonagensEvent.emit(personagens);
  }
}
