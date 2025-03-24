import { Component, inject } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  publicaciones: any[] = [];

  publicacionesService = inject(PublicacionesService)

  ngOnInit(): void {
    this.publicaciones = this.publicacionesService.getPublicaciones();
  }
}
