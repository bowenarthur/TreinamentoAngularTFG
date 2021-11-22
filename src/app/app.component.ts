import { Component } from "@angular/core";
import { Filme } from "./models/filme.model";
import { FilmeService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  filmes: Filme[] = [];
  filme = {} as Filme;
  openDetalhes = false;
  openForm = false;

  constructor(private service: FilmeService) {}

  ngOnInit(): void {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/dragscroll/0.0.8/dragscroll.min.js";
    script.async = true;
    document.body.appendChild(script);
    this.fetchData();
  }

  fetchData(): void {
    this.service.lerFilmes().then((res) => (this.filmes = res.data));
  }

  mostrarDetalhes(filme: Filme): void {
    this.filme = filme;
    this.openDetalhes = true;
  }

  fecharDetalhes(): void {
    this.filme = {} as Filme;
    this.openDetalhes = false;
  }

  mostrarForm(filme: Filme = {} as Filme): void {
    this.filme = filme;
    this.openDetalhes = false;
    this.openForm = true;
  }

  fecharForm(): void {
    this.filme = {} as Filme;
    this.openForm = false;
    this.fetchData();
  }
}
