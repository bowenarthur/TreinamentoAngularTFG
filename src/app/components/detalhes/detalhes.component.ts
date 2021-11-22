import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Filme } from "src/app/models/filme.model";

@Component({
  selector: "app-detalhes",
  templateUrl: "./detalhes.component.html"
})
export class DetalhesComponent {
  @Input() filme = {} as Filme;
  @Output() fecharDetalhesEvent = new EventEmitter<void>();

  fecharDetalhes(): void {
    this.fecharDetalhesEvent.emit();
  }
}
