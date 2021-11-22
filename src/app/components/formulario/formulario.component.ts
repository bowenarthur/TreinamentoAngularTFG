import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Filme, FilmeRequest, Personagem } from "src/app/models/filme.model";
import { FilmeService } from "src/app/app.service";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html"
})
export class FormularioComponent {
  @Input() filme = {} as Filme;
  @Output() fecharFormEvent = new EventEmitter<void>();
  categorias = [
    "Ação",
    "Comédia",
    "Documentário",
    "Drama",
    "Fantasia",
    "Ficção",
    "Romance",
    "Terror"
  ];

  constructor(private service: FilmeService) {}

  submit() {
    let data: FilmeRequest = {
      nome: this.filme.nome,
      foto: this.filme.foto,
      categoria: this.filme.categoria,
      sinopse: this.filme.sinopse,
      ano: this.filme.ano,
      duracao: this.filme.duracao,
      personagens: this.filme.personagens
    };
    if (this.filme._id) {
      this.service.atualizarFilme(this.filme._id, data);
    } else {
      this.service.inserirFilme(data);
    }
  }

  fecharForm() {
    this.fecharFormEvent.emit();
  }

  atualizarPersonagens(personagens: Personagem[]) {
    this.filme.personagens = personagens;
  }
}
