const util = require("util");
function buscarLibrosPorGenero(libros, genero) {
  return libros.filter(libro => libro.genero === genero);
}

const libros = [
  { titulo: 'El gran Gatsby', autor: 'F. Scott Fitzgerald', genero: 'Ficción' },
  { titulo: '1984', autor: 'George Orwell', genero: 'Ciencia ficción' },
  { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', genero: 'Ficción' },
  { titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', genero: 'Infantil' }
];
const librosFiccion = buscarLibrosPorGenero(libros, 'Ficción');
const inspected = util.inspect(librosFiccion);
console.log(inspected);

const librosInfantil = buscarLibrosPorGenero(libros, 'Infantil');
const inspected1 = util.inspect(librosInfantil);
console.log(inspected1);
