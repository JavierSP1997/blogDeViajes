import { Component, inject, Input } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-detalle',
  imports: [DatePipe],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {

  @Input() id: string | undefined
  publicacionesService = inject(PublicacionesService)


  get publicacion() {
    return this.publicacionesService.getById(Number(this.id));
  }
}
