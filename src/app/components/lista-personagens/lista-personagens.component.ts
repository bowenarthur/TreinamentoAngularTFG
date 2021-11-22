import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Personagem } from "src/app/models/filme.model";

@Component({
  selector: "app-lista-personagens",
  templateUrl: "./lista-personagens.component.html"
})
export class ListaPersonagensComponent {
  @Input() personagens: Personagem[] = [];
  @Output() onClickEvent = new EventEmitter<Personagem>();

  onClick(personagem: Personagem): void {
    this.onClickEvent.emit(personagem);
  }
}
