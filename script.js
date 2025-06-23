const peliculas = [
  {
    titulo: "Son como niños",
    año: 2010,
    descripcion: "Un grupo de amigos descubren que envejecer no siempre significa madurar",
    imagen: "./assets/soncomoninos.jpg",
    genero: "Comedia"
  },
  {
    titulo: "El Padrino",
    año: 1972,
    descripcion: "El patriarca de una organización criminal transfiere el control de su clandestino imperio a su reacio hijo.",
    imagen: "./assets/elpadrino.jpg",
    genero: "Drama"
  },
  {
    titulo: "Anabelle",
    año: 2014,
    descripcion: "John Form encuentra el regalo perfecto para Mia, su esposa embarazada: una preciosa muñeca.",
    imagen: "./assets/annabelle.jpg",
    genero: "Terror"
  },
  {
    titulo: "Alerta Roja",
    año: 2021,
    descripcion: "Un agente de la Interpol no tendrá otro remedio que aliarse con el ladrón de arte más célebre de todos",
    imagen: "./assets/alertaRoja.jpg",
    genero: "Comedia"
  }
];

// Seleccionar el tbody para poner dentro de la tabla
const tbody = document.querySelector("#tablaPeliculas tbody");

// Llenar la tabla con las películas
peliculas.forEach(p => {
  const fila = document.createElement("tr");

  // Título
  const tdTitulo = document.createElement("td");
  tdTitulo.textContent = p.titulo;

  // Género
  const tdGenero = document.createElement("td");
  tdGenero.textContent = p.genero;

  // Descripción
  const tdDescripcion = document.createElement("td");
  tdDescripcion.textContent = p.descripcion;

  // Imagen
  const tdImagen = document.createElement("td");
  const img = document.createElement("img");
  img.src = p.imagen;
  img.alt = `Imagen de ${p.titulo}`;
  img.style.width = "100px";
  tdImagen.appendChild(img);

  // Año
  const tdAño = document.createElement("td");
  tdAño.textContent = p.año;

  // Agregar celdas a la fila
  fila.append(tdTitulo, tdGenero, tdDescripcion, tdImagen, tdAño);

  // Agregar la fila al tbody
  tbody.appendChild(fila);

});



//-------------------------Filtrado por genero -------------------------------------//

const selectGenero = document.querySelector("#filtroGenero");

// 2. Creamos un div donde vamos a mostrar los resultados filtrados
const resultadoDiv = document.createElement("div");
document.body.appendChild(resultadoDiv);

// 3. Función que filtra y muestra películas
function mostrarPeliculasFiltradas(genero) {
  resultadoDiv.innerHTML = ""; // Limpia contenido anterior

  const filtradas = peliculas.filter(p => p.genero === genero);

  if (filtradas.length === 0) {
    resultadoDiv.textContent = "No hay ninguna película con ese género.";
    return;
  }

  filtradas.forEach(p => {
    const contenedor = document.createElement("div");
    contenedor.style.marginBottom = "20px";

    const titulo = document.createElement("h3");
    titulo.textContent = p.titulo;

    const año = document.createElement("p");
    año.textContent = `Año: ${p.año}`;

    const generoP = document.createElement("p");
    generoP.textContent = `Género: ${p.genero}`;

    const descripcion = document.createElement("p");
    descripcion.textContent = p.descripcion;

    const imagen = document.createElement("img");
    imagen.src = p.imagen;
    imagen.alt = `Imagen de ${p.titulo}`;
    imagen.style.width = "200px";

    contenedor.append(titulo, año, generoP, descripcion, imagen);
    resultadoDiv.appendChild(contenedor);
  });
}



selectGenero.addEventListener("change", () => {
  const generoSeleccionado = selectGenero.value;
  if (generoSeleccionado) {
    mostrarPeliculasFiltradas(generoSeleccionado);
  } else {
    resultadoDiv.innerHTML = "";
  }
});

//---------------------intento de filtrar por añoo-----------------//

// const selectAño = document.querySelector("#filtroAño");

// 2. un div donde vamos a mostrar los resultados filtrados
//const FilterAñoDiv = document.createElement("div");
//document.body.appendChild(FilterAñoDiv);


//function filterByAño(año) {
   // for (let i = 0; i < peliculas.length; i++) {
    //    if (peliculas[i].año=== año) {
     //       return pelicula[i];
      //  }
   // }
    //return null; // Si no se encuentra el año
//}

//function PeliFiltradaAño(año) {
 // FilterAñoDiv.innerHTML = ""; // Limpia contenido anterior

 //const filterbyAño = peliculas.filter(p => p.año === año);

  //if (filterbyAño.length === 0) {
   // FilterAñoDiv.textContent = "No hay ninguna película estrenada este año.";
   // return;
  //}
//}

  //FilterAñoDiv.forEach(p => {
    //const contenedor = document.createElement("div");
    //contenedor.style.marginBottom = "20px";

    //const titulo = document.createElement("h3");
    //titulo.textContent = p.titulo;

   // const año = document.createElement("p");
    //año.textContent = `Año: ${p.año}`;

    //const generoP = document.createElement("p");
    //generoP.textContent = `Género: ${p.genero}`;

    //const descripcion = document.createElement("p");
    //descripcion.textContent = p.descripcion;

    //const imagen = document.createElement("img");
    //imagen.src = p.imagen;
    //imagen.alt = `Imagen de ${p.titulo}`;
    //imagen.style.width = "200px";

    //contenedor.append(titulo, año, generoP, descripcion, imagen);
   // resultadoDiv.appendChild(contenedor);
  //});


//selectAño.addEventListener("change", () => {
 // const AñoSeleccionado = selectAño.value;
  //if (AñoSeleccionado) {
   // PeliFiltradaAño (AñoSeleccionado);
  //} else {
 //   resultadoDiv.innerHTML = "";
 // }
//}); 

