let articulos = [
    {nombre:"Bici",costo:3000},
    {nombre:"Tv",costo:2500},
    {nombre:"Libro",costo:320},
    {nombre:"Celular",costo:10000},
    {nombre:"Laptop",costo: 20000},
    {nombre:"Teclado",costo: 2500},
    {nombre:"Audifonos",costo:1700}
];
let articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});
let nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});
nombreArticulos

let encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});
encuentraArticulo

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
articulosBaratos
true