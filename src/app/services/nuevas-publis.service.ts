import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class NuevasPublisService {

  private nuevasPublis = [{
    id: 0,
    titulo: "",
    texto: "",
    autor: "",
    imagen: "",
    fecha: new Date(),
    categoria: ""
  }]

  constructor() {
    const nuevasPublis = localStorage.getItem('posts');
    this.nuevasPublis = nuevasPublis ? JSON.parse(nuevasPublis) : []
  }

  getnuevasPublis() {
    return this.nuevasPublis
  }

  addPost(nuevasPublis: Post) {
    nuevasPublis.id = Date.now();
    this.nuevasPublis.push(nuevasPublis);
    console.log("Viaje agregado:", nuevasPublis);
    localStorage.setItem('posts', JSON.stringify(this.nuevasPublis))
  }

  listPosts() {
    const nuevasPublis = localStorage.getItem('posts');
    this.nuevasPublis = nuevasPublis ? JSON.parse(nuevasPublis) : this.nuevasPublis;
    return this.nuevasPublis
  }

  getById(id: number): Post | undefined {
    return this.nuevasPublis.find(publicacion => publicacion.id === id)
  }
}
