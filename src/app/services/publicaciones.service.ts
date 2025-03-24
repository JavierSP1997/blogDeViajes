import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  private publicaciones = [
    {
      id: 1,
      titulo: "Aventura en el pirineo aragones",
      texto: "Explorar los majestuosos pirineos fue una experiencia inolvidable, entre senderos, paisajes increíbles y momentos de pura naturaleza.",
      autor: "Javier Sancho",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcF1DzpACJrms5wl2gHZphpyx0WY1q6te2Eg&s",
      fecha: new Date('2025-01-15'),
      categoria: "Aventura"
    },
    {
      id: 2,
      titulo: "Escapada a las islas baleares",
      texto: "El azul del mar, los coloridos pueblos y la gastronomía deliciosa hacen de Ibiza y Formentera, un destino ideal para cualquier viajero.",
      autor: "Javier Sancho",
      imagen: "https://www.formenteravuela.com/magazine/public/uploads/2021/04/Itinerario-3-dias-990x556.jpg",
      fecha: new Date('2025-02-20'),
      categoria: "Playas"
    },
    {
      id: 3,
      titulo: "Descubriendo la Historia de Roma",
      texto: "Los antiguos monumentos y esculturas de Roma nos transportan al pasado, mientras aprendemos sobre su fascinante cultura e historia.",
      autor: "Javier Sancho",
      imagen: "https://viajes.nationalgeographic.com.es/medio/2025/02/26/roma_d59824b1_250226111509_1280x853.webp",
      fecha: new Date('2025-03-01'),
      categoria: "Cultura"
    },
    {
      id: 4,
      titulo: "La Magia de Kyoto: Entre Templos y Jardines",
      texto: "Kyoto es el lugar perfecto para los amantes de la tranquilidad, los templos milenarios y los jardines zen. Un viaje de paz y serenidad.",
      autor: "Javier Sancho",
      imagen: "https://i0.wp.com/andershusa.com/wp-content/uploads/2024/09/feature-where-to-eat-in-kyoto-japan-city-guide-and-map-of-the-best-restaurants-review-food-foodie-eat-eating-out-dine-dining-top-spots-places-tips-recommendation-travel-1-2023.jpg?fit=1200%2C800&ssl=1",
      fecha: new Date('2025-03-10'),
      categoria: "Cultura"
    },
    {
      id: 5,
      titulo: "Rumbo al Desierto de Atacama",
      texto: "El desierto más árido del mundo tiene paisajes sobrecogedores, desde el Valle de la Luna hasta las lagunas altiplánicas.",
      autor: "Javier Sancho",
      imagen: "https://estaticos-cdn.prensaiberica.es/clip/33b6de14-afa7-44c0-9489-92c6184347b4_source-aspect-ratio_default_0.jpg",
      fecha: new Date('2025-02-05'),
      categoria: "Naturaleza"
    },
    {
      id: 6,
      titulo: "Trekking en Patagonia: Un Sueño Hecho Realidad",
      texto: "Aventurarse en las rutas de trekking más famosas de la Patagonia, entre glaciares y montañas, fue una experiencia extrema y llena de belleza.",
      autor: "Javier Sancho",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrrItLmkZJFxsHR-LJh5OBCw7PvGOUQ1nQEw&s",
      fecha: new Date('2025-01-30'),
      categoria: "Aventura"
    },
    {
      id: 7,
      titulo: "Una Ruta Gastronómica por Segovia",
      texto: "Desde tapas hasta cochinillo asado, Segovia es el paraíso para los amantes de la gastronomía. Un recorrido delicioso por sus mercados y restaurantes.",
      autor: "Javier Sancho",
      imagen: "https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/castilla-leon/acueducto-segovia-s226137160.jpg",
      fecha: new Date('2025-02-18'),
      categoria: "Gastronomía"
    },
    {
      id: 8,
      titulo: "Explorando las Islas Griegas: Sol, Mar y Cultura",
      texto: "Las Islas Griegas ofrecen una mezcla perfecta de hermosas playas, pueblos pintorescos y una rica historia por descubrir.",
      autor: "Javier Sancho",
      imagen: "https://content.skyscnr.com/m/458b816026d42882/original/GettyImages-164015369.jpg?resize=1800px:1800px&quality=100",
      fecha: new Date('2025-03-05'),
      categoria: "Playas"
    },
    {
      id: 9,
      titulo: "Safari en el Serengeti: Un Encuentro Cercano con la Fauna",
      texto: "El Serengeti, en Tanzania, es el lugar donde la naturaleza se muestra en todo su esplendor. Los safaris ofrecen una experiencia única e inolvidable.",
      autor: "Javier Sancho",
      imagen: "https://roamwildadventure.com/wp-content/uploads/2021/02/5-day-safari-tarangire-ngorongoro-serengeti-manyara-olduvai-gallery-09-blurred-1.jpg",
      fecha: new Date('2025-03-08'),
      categoria: "Aventura"
    },
    {
      id: 10,
      titulo: "Caminata por el Camino Inca: Un Viaje Espiritual",
      texto: "Recorrer el Camino Inca hacia Machu Picchu no solo es una prueba física, sino también una experiencia espiritual entre montañas y ruinas ancestrales.",
      autor: "Javier Sancho",
      imagen: "https://www.boletomachupicchu.com/gutblt/wp-content/uploads/2018/01/camino-inca-imperio.jpg",
      fecha: new Date('2025-02-25'),
      categoria: "Aventura"
    }
  ]

  constructor() { }

  getPublicaciones() {
    return this.publicaciones
  }
  getPublicacionPorId(id: number) {
    return this.publicaciones.find(p => p.id === id);
  }
}

