import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { __param } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  private publicaciones = [
    {
      id: 1,
      titulo: "Aventura en el pirineo aragones",
      texto: "Explorar los majestuosos pirineos aragoneses fue una experiencia inolvidable. A lo largo de nuestras caminatas, fuimos testigos de paisajes espectaculares, entre montañas cubiertas de nieve y verdes praderas, atravesando frondosos bosques y siguiendo senderos que parecían no tener fin. Cada paso era una nueva maravilla, desde vistas impresionantes hasta el canto de aves que acompañaban nuestro viaje. Sin duda, este destino es ideal para aquellos que buscan desconectar de la rutina y sumergirse en la naturaleza en su máxima expresión.",
      autor: "Javier Sancho",
      imagen: "https://tirolinavalledetena.com/wp-content/uploads/2023/11/Torla-ordesa.png",
      fecha: new Date('2025-01-15'),
      categoria: "Aventura"
    },
    {
      id: 2,
      titulo: "Escapada a las islas baleares",
      texto: "El azul profundo del mar Mediterráneo, combinado con el encanto de los pueblos tradicionales y la exquisita gastronomía local, convierten a las Islas Baleares en un destino que no se puede dejar pasar. Ibiza, con sus animadas playas y vida nocturna, y Formentera, con sus aguas cristalinas y paisajes de ensueño, ofrecen una combinación única que cautiva a los viajeros. Además, la calidez de sus gentes y la historia de sus monumentos hacen de este rincón del mundo un lugar para disfrutar tanto del sol como de su rica cultura.",
      autor: "Javier Sancho",
      imagen: "https://www.formenteravuela.com/magazine/public/uploads/2021/04/Itinerario-3-dias-990x556.jpg",
      fecha: new Date('2025-02-20'),
      categoria: "Playas"
    },
    {
      id: 3,
      titulo: "Descubriendo la Historia de Roma",
      texto: "Recorrer las calles de Roma es como viajar en el tiempo. Los antiguos monumentos, como el majestuoso Coliseo y el Foro Romano, nos transportan a una época llena de historia y cultura. Al caminar por sus avenidas, es fácil sentirse envuelto en la grandeza del Imperio Romano. Además, la ciudad alberga museos fascinantes y iglesias que custodian miles de años de arte y arquitectura. Cada rincón de Roma tiene una historia que contar, y su vibrante vida moderna se mezcla armoniosamente con el legado histórico que la hace única.",
      autor: "Javier Sancho",
      imagen: "https://viajes.nationalgeographic.com.es/medio/2025/02/26/roma_d59824b1_250226111509_1280x853.webp",
      fecha: new Date('2025-03-01'),
      categoria: "Cultura"
    },
    {
      id: 4,
      titulo: "La Magia de Kyoto: Entre Templos y Jardines",
      texto: "Kyoto, con sus templos milenarios y sus jardines zen, es el lugar perfecto para aquellos que buscan paz y serenidad. Cada templo, rodeado de naturaleza, transmite una calma profunda que invita a la reflexión. Pasear por sus jardines, donde los árboles y los estanques reflejan la quietud de la ciudad, es una experiencia que llena el alma. Además, la gastronomía local, que va desde el tradicional kaiseki hasta los dulces japoneses, complementa a la perfección esta escapada espiritual. Kyoto no solo es un destino turístico, sino un viaje al corazón de la cultura japonesa.",
      autor: "Javier Sancho",
      imagen: "https://i0.wp.com/andershusa.com/wp-content/uploads/2024/09/feature-where-to-eat-in-kyoto-japan-city-guide-and-map-of-the-best-restaurants-review-food-foodie-eat-eating-out-dine-dining-top-spots-places-tips-recommendation-travel-1-2023.jpg?fit=1200%2C800&ssl=1",
      fecha: new Date('2025-03-10'),
      categoria: "Cultura"
    },
    {
      id: 5,
      titulo: "Rumbo al Desierto de Atacama",
      texto: "El desierto de Atacama, el más árido del mundo, ofrece un paisaje que parece sacado de otro planeta. En cada rincón de este vasto desierto se esconden maravillas naturales como el Valle de la Luna, donde las formaciones rocosas crean un escenario surrealista, o las altiplánicas lagunas, que reflejan las montañas y el cielo de manera impresionante. La sensación de estar en un lugar tan remoto y enigmático hace de este destino una de las experiencias más singulares para los viajeros aventureros.",
      autor: "Javier Sancho",
      imagen: "https://estaticos-cdn.prensaiberica.es/clip/33b6de14-afa7-44c0-9489-92c6184347b4_source-aspect-ratio_default_0.jpg",
      fecha: new Date('2025-02-05'),
      categoria: "Naturaleza"
    },
    {
      id: 6,
      titulo: "Trekking en Patagonia: Un Sueño Hecho Realidad",
      texto: "El trekking en Patagonia, en el extremo sur de Argentina y Chile, es una experiencia que desafía tanto al cuerpo como a la mente. Entre glaciares, montañas y lagos de color turquesa, cada ruta ofrece panorámicas que quitan el aliento. Recorrer el Parque Nacional Torres del Paine o el Perito Moreno es como adentrarse en un mundo donde la naturaleza sigue su curso sin alteraciones. Es un lugar que te conecta con la esencia de la Tierra, un verdadero paraíso para los amantes de la aventura y la fotografía.",
      autor: "Javier Sancho",
      imagen: "https://img.ex.co/image/upload/ar_1.8867924528301887,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2.5/v1699973438/adpsutfoeiidixqqicfr.jpg",
      fecha: new Date('2025-01-30'),
      categoria: "Aventura"
    },
    {
      id: 7,
      titulo: "Una Ruta Gastronómica por Segovia",
      texto: "Segovia, famosa por su acueducto romano, es también un paraíso para los amantes de la gastronomía. Desde sus tradicionales tapas hasta el famoso cochinillo asado, la ciudad ofrece una variedad de platos que nos hacen sentir la esencia de la cocina castellana. Recorrer sus mercados, restaurantes y tabernas es una experiencia que va más allá de la comida, ya que cada bocado cuenta una historia de tradición y sabor. Es un lugar donde la historia y la gastronomía se fusionan para crear una experiencia inolvidable.",
      autor: "Javier Sancho",
      imagen: "https://abrasador.com/wp-content/uploads/2021/07/495x330xAlcazar-scaled.jpeg.pagespeed.ic.aJsTOIf7Fc.jpg",
      fecha: new Date('2025-02-18'),
      categoria: "Gastronomía"
    },
    {
      id: 8,
      titulo: "Explorando las Islas Griegas: Sol, Mar y Cultura",
      texto: "Las Islas Griegas, un archipiélago lleno de historia, cultura y belleza natural, ofrecen una mezcla perfecta para todos los gustos. Desde las playas de arena dorada hasta los pueblos blancos con sus tejados azules, cada isla tiene su propio encanto. Santorini, Mykonos y Creta son solo algunas de las islas que atraen a viajeros de todo el mundo con su cálido clima, sus monumentos históricos y su vibrante vida nocturna. Un recorrido por estas islas es un deleite para los sentidos, un viaje que combina el sol, el mar y la rica herencia de la antigua Grecia.",
      autor: "Javier Sancho",
      imagen: "https://crs.allyz.com/v1/static/allyz-com/es/media/home/guide-de-voyage/recomendaciones-de-viaje/cuales-son-las-mejores-islas-griegas-para-ir-de-vacaciones/header.jpg",
      fecha: new Date('2025-03-05'),
      categoria: "Playas"
    },
    {
      id: 9,
      titulo: "Safari en el Serengeti: Un Encuentro  la Fauna",
      texto: "El Serengeti, en Tanzania, es uno de los parques nacionales más emblemáticos del mundo, famoso por su vasta llanura y por albergar una increíble biodiversidad. Durante un safari en este lugar, los viajeros tienen la oportunidad de observar animales salvajes en su hábitat natural, desde leones y elefantes hasta guepardos y jirafas. La experiencia es única, sobre todo durante la Gran Migración, cuando millones de ñus y cebras cruzan las llanuras en busca de pastos frescos, creando un espectáculo de la naturaleza que no se olvida.",
      autor: "Javier Sancho",
      imagen: "https://cdn.rhinoafrica.com/tmp/image-thumbnails/media/_en/destinations/root/africa/east-africa/tanzania/serengeti-and-the-north-of-tanzania/greater-serengeti-ecosystem/serengeti-national-park/_img/gallery/image-thumb__53383__background-cover/field-with-zebras-and-blue-wildebeest_192248950.jpg",
      fecha: new Date('2025-03-08'),
      categoria: "Aventura"
    },
    {
      id: 10,
      titulo: "Caminata por el Camino Inca: Un Viaje Espiritual",
      texto: "El Camino Inca hacia Machu Picchu es mucho más que una caminata; es un viaje que conecta cuerpo y alma con el pasado de los antiguos incas. A medida que se avanza por los senderos que atraviesan montañas, valles y ruinas ancestrales, se siente la energía de un lugar lleno de historia y misticismo. Las vistas desde los distintos puntos del camino son impresionantes, y cada paso nos acerca más a la majestuosidad de Machu Picchu, una de las maravillas más grandes del mundo.",
      autor: "Javier Sancho",
      imagen: "https://www.boletomachupicchu.com/gutblt/wp-content/uploads/2018/01/camino-inca-imperio.jpg",
      fecha: new Date('2025-02-25'),
      categoria: "Aventura"
    },
    {
      id: 11,
      titulo: "Viaje al corazón de la selva amazónica",
      texto: "Adentrarse en la selva amazónica es una experiencia que todos deberían vivir al menos una vez en la vida. Este vasto ecosistema, considerado el pulmón del planeta, es hogar de miles de especies de flora y fauna que no se encuentran en ningún otro lugar del mundo. Durante nuestra travesía, nos sorprendió la increíble biodiversidad que nos rodeaba, desde coloridas aves hasta reptiles y mamíferos exóticos. Navegar por los ríos que atraviesan la selva y experimentar la vida de las tribus locales fue una lección de vida y naturaleza.",
      autor: "Javier Sancho",
      imagen: "https://hips.hearstapps.com/hmg-prod/images/mata-atlantica-atlantic-forest-in-brazil-royalty-free-image-935746242-1567619461.jpg?crop=0.66635xw:1xh;center,top&resize=640:*",
      fecha: new Date('2025-02-05'),
      categoria: "Aventura"
    },
    {
      id: 12,
      titulo: "Rutas por los Alpes Suizos",
      texto: "Recorrer los Alpes Suizos es una experiencia que llena el alma de belleza natural. Las altas cumbres nevadas, los lagos cristalinos y los valles verdes son el escenario perfecto para los amantes de las montañas. Además, las pequeñas aldeas en sus laderas, con su arquitectura tradicional, ofrecen un encanto único que complementa perfectamente la majestuosidad de la naturaleza. Realizar rutas de senderismo en este entorno es una forma excelente de conectar con la naturaleza y disfrutar de paisajes que parecen sacados de un cuento.",
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

  getByCategory(categoria: string) {
    return this.publicaciones.filter(publicacion => publicacion.categoria === categoria)
  }

  getById(id: number): Post | undefined {
    return this.publicaciones.find(publicacion => publicacion.id === id)
  }


}


