import { Component, inject, Input } from '@angular/core';
import { NuevasPublisService } from '../../services/nuevas-publis.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  imports: [RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  nuevasPublicaciones: any[] = []

  nuevaPublicaciones = inject(NuevasPublisService)

  ngOnInit(): void {
    this.nuevasPublicaciones = this.nuevaPublicaciones.getnuevasPublis();
  }
}


