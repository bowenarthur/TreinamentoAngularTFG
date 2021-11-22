import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Filme } from "src/app/models/filme.model";
import { FilmeService } from "src/app/app.service";

@Component({
  selector: "app-filme",
  templateUrl: "./filme.component.html"
})
export class FilmeComponent {
  @Input() filme = {} as Filme;
  @Output() mostrarDetalhesEvent = new EventEmitter<Filme>();
  @Output() mostrarFormEvent = new EventEmitter<Filme>();

  constructor(private service: FilmeService) {}

  mostrarDetalhes(): void {
    this.mostrarDetalhesEvent.emit(this.filme);
  }

  mostrarForm(): void {
    this.mostrarFormEvent.emit(this.filme);
  }

  deleteFilme(id: string) {
    this.service.excluirFilme(id);
  }
}
