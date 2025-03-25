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
      imagen: "https://tirolinavalledetena.com/wp-content/uploads/2023/11/Torla-ordesa.png",
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
      imagen: "https://img.ex.co/image/upload/ar_1.8867924528301887,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2.5/v1699973438/adpsutfoeiidixqqicfr.jpg",
      fecha: new Date('2025-01-30'),
      categoria: "Aventura"
    },
    {
      id: 7,
      titulo: "Una Ruta Gastronómica por Segovia",
      texto: "Desde tapas hasta cochinillo asado, Segovia es el paraíso para los amantes de la gastronomía. Un recorrido delicioso por sus mercados y restaurantes.",
      autor: "Javier Sancho",
      imagen: "https://abrasador.com/wp-content/uploads/2021/07/495x330xAlcazar-scaled.jpeg.pagespeed.ic.aJsTOIf7Fc.jpg",
      fecha: new Date('2025-02-18'),
      categoria: "Gastronomía"
    },
    {
      id: 8,
      titulo: "Explorando las Islas Griegas: Sol, Mar y Cultura",
      texto: "Las Islas Griegas ofrecen una mezcla perfecta de hermosas playas, pueblos pintorescos y una rica historia por descubrir.",
      autor: "Javier Sancho",
      imagen: "https://www.civitatis.com/blog/wp-content/uploads/2021/05/islas-griegas-mas-bonitas.jpg",
      fecha: new Date('2025-03-05'),
      categoria: "Playas"
    },
    {
      id: 9,
      titulo: "Safari en el Serengeti: Un Encuentro Cercano con la Fauna",
      texto: "El Serengeti, en Tanzania, es el lugar donde la naturaleza se muestra en todo su esplendor. Los safaris ofrecen una experiencia única e inolvidable.",
      autor: "Javier Sancho",
      imagen: "https://cdn.rhinoafrica.com/tmp/image-thumbnails/media/_en/destinations/root/africa/east-africa/tanzania/serengeti-and-the-north-of-tanzania/greater-serengeti-ecosystem/serengeti-national-park/_img/gallery/image-thumb__53383__background-cover/field-with-zebras-and-blue-wildebeest_192248950.jpg",
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
    },
    {
      id: 11,
      titulo: "Viaje al corazón de la selva amazónica",
      texto: "La selva amazónica nos sorprendió con su biodiversidad, cada rincón ofrecía un nuevo descubrimiento entre ríos y fauna exótica.",
      autor: "Javier Sancho",
      imagen: "https://hips.hearstapps.com/hmg-prod/images/mata-atlantica-atlantic-forest-in-brazil-royalty-free-image-935746242-1567619461.jpg?crop=0.66635xw:1xh;center,top&resize=640:*",
      fecha: new Date('2025-02-05'),
      categoria: "Aventura"
    },
    {
      id: 12,
      titulo: "Rutas por los Alpes Suizos",
      texto: "Recorrer los Alpes Suizos fue una experiencia única, entre picos nevados, lagos cristalinos y pequeñas aldeas con un encanto especial.",
      autor: "Javier Sancho",
      imagen: "https://images.mnstatic.com/56/ac/56ac766e3bc864cc7c1034f7b9a70a05.jpg",
      fecha: new Date('2025-03-10'),
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

  filtrarPorCategoria(categoria: string) {
    return this.publicaciones.filter(publicacion => publicacion.categoria.toLowerCase() === categoria.toLowerCase());
  }
}

