import { Component, inject } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  imports: [],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {

  router = inject(Router)

  publicacionesService = inject(PublicacionesService)

  get publicacion() {
    let routerUrl = this.router.url
    let caca = routerUrl.split("/")
    let id = Number(caca[caca.length - 1])
    return this.publicacionesService.getById(id)
  }
}
