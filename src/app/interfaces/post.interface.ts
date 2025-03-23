export interface Post {
    id: number;
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: Date;
    categoria: string;
}

export interface Categoria {
    id: number;
    titulo: string;
}