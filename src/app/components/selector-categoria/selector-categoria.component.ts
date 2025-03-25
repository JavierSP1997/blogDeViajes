import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selector-categoria',
  imports: [],
  templateUrl: './selector-categoria.component.html',
  styleUrl: './selector-categoria.component.css'
})
export class SelectorCategoriaComponent {

  @Output() categoriaSeleccionada = new EventEmitter<string>();

  onCategoriaSeleccionada(event: Event): void {
    const categoria = (event.target as HTMLSelectElement).value;
    this.categoriaSeleccionada.emit(categoria)
  }
}
