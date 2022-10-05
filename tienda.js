const productos = [
  {nombre:"Tren bala"},
  {nombre:"La huérfana: El origen"},
  {nombre:"Vértigo"},
  {nombre:"Lou"},
  {nombre:"After: Amor Infinito"},
  {nombre:"Bestia"},
  {nombre:"Pinocho"},
  {nombre:"Abracadabra"},
  {nombre:"La Máquina infernal"},
  {nombre:"Thor: Amor y Trueno"},
  {nombre:"Némesis"},
  {nombre:"Depredador: La presa"},
  {nombre:"DC Liga De Supermascotas"},
  {nombre:"Sala de Comunicaciones"},
  {nombre:"Jurassic World Dominio"},
  {nombre:"Abracadabra"},
  {nombre:"Stowaway"},
  {nombre:"Abracadabra"},
  {nombre:"RRR"},
  {nombre:"Minions: Nace un villano"},
  {nombre:"Avatar"},

]
let buscador = prompt("ingresa el nombre del producto")
const elementoBuscado = productos.find(producto=>producto.nombre===buscador)
if(elementoBuscado){
console.log(elementoBuscado)
alert("este producto si esta disponible")
}
else{
console.log("elemento no existe")
alert("este producto no esta disponible")
}
let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
if(pagina < 1000){
pagina += 1;
subirPeliculas();
}
});

btnAnterior.addEventListener('click', () => {
if(pagina > 1){
pagina -= 1;
subirPeliculas();
}
});

const subirPeliculas = async() => {
try {
const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`);

console.log(respuesta);

// Si la respuesta es correcta
if(respuesta.status === 200){
  const datos = await respuesta.json();
  
  let peliculas = '';
  datos.results.forEach(pelicula => {
    peliculas += `
      <div class="pelicula">
        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
        <h3 class="titulo">${pelicula.title}</h3>
      </div>
    `;
  });

  document.getElementById('contenedor').innerHTML = peliculas;

} else if(respuesta.status === 401){
  console.log('Pusiste la llave mal');
} else if(respuesta.status === 404){
  console.log('La pelicula que buscas no existe');
} else {
  console.log('Hubo un error y no sabemos que paso');
}

} catch(error){
console.log(error);
}

}

subirPeliculas();


