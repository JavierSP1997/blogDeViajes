import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class NuevasPublisService {

  private nuevasPublis = [{
    id: 1,
    titulo: "Aventura en el pirineo aragones",
    texto: "Explorar los majestuosos pirineos aragoneses fue una experiencia inolvidable. A lo largo de nuestras caminatas, fuimos testigos de paisajes espectaculares, entre montañas cubiertas de nieve y verdes praderas, atravesando frondosos bosques y siguiendo senderos que parecían no tener fin. Cada paso era una nueva maravilla, desde vistas impresionantes hasta el canto de aves que acompañaban nuestro viaje. Sin duda, este destino es ideal para aquellos que buscan desconectar de la rutina y sumergirse en la naturaleza en su máxima expresión.",
    autor: "Javier Sancho",
    imagen: "https://tirolinavalledetena.com/wp-content/uploads/2023/11/Torla-ordesa.png",
    fecha: new Date('2025-01-15'),
    categoria: "Aventura"
  }]

  constructor() { }

  getnuevasPublis() {
    return this.nuevasPublis
  }

  addPost(nuevasPublis: Post) {
    nuevasPublis.id = Date.now();
    this.nuevasPublis.push(nuevasPublis);
    console.log("Viaje agregado:", nuevasPublis);
  }
}
