import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Filme } from "src/app/models/filme.model";

@Component({
  selector: "app-lista-filmes",
  templateUrl: "./lista-filmes.component.html"
})
export class ListaFilmesComponent {
  @Input() titulo = "";
  @Input() filmes: Filme[] = [];
  @Output() mostrarDetalhesEvent = new EventEmitter<Filme>();
  @Output() mostrarFormEvent = new EventEmitter<Filme>();

  mostrarDetalhes(filme: Filme) {
    this.mostrarDetalhesEvent.emit(filme);
  }

  mostrarForm(filme: Filme) {
    this.mostrarFormEvent.emit(filme);
  }
}
