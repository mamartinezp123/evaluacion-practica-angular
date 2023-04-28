export class Cafe {
  id: number;
  nombre: string;
  tipo: string;
  region: string;
  sabor: string;
  altura: number;
  imagen: string;

  constructor(
    id: number = 0,
    nombre: string = '',
    tipo: string = '',
    region: string = '',
    sabor: string = '',
    altura: number = 0,
    imagen: string = ''
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.region = region;
    this.sabor = sabor;
    this.altura = altura;
    this.imagen = imagen;
  }
}
