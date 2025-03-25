import { Component, inject } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  publicaciones: any[] = [];


  publicacionesService = inject(PublicacionesService)

  ngOnInit(): void {
    this.publicaciones = this.publicacionesService.getPublicaciones();
  }

  onCategoriaSeleccionada($event: any) {
    if ($event.target.value === 'Todas') {
      this.publicaciones = this.publicacionesService.getPublicaciones()
    } else {
      this.publicaciones = this.publicacionesService.getByCategory($event.target.value)
    }
  }
}

