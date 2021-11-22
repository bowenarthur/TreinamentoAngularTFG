import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DetalhesComponent } from "./components/detalhes/detalhes.component";
import { ListaPersonagensComponent } from "./components/lista-personagens/lista-personagens.component";
import { EdicaoPersonagensComponent } from "./components/edicao-personagens/edicao-personagens.component";
import { HeaderComponent } from "./components/header/header.component";
import { ListaFilmesComponent } from "./components/lista-filmes/lista-filmes.component";
import { FilmeComponent } from "./components/filme/filme.component";
import { FormularioComponent } from "./components/formulario/formulario.component";

@NgModule({
  declarations: [
    AppComponent,
    DetalhesComponent,
    ListaPersonagensComponent,
    EdicaoPersonagensComponent,
    HeaderComponent,
    ListaFilmesComponent,
    FilmeComponent,
    FormularioComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
