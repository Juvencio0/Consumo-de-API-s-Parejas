function getCharacters(done) {
    // Realiza una solicitud a la API de Rick y Morty para obtener los datos de los personajes
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json()) // Convierte la respuesta a formato JSON
      .then(data => {
        // Llama a la función de callback `done` con los datos obtenidos
        done(data);
      });
  }
  
  getCharacters(data => {
    // Selecciona el elemento principal donde se mostrarán los personajes
    const main = document.querySelector("main");
  
    // Itera sobre cada personaje y crea un elemento HTML para mostrarlo
    data.results.forEach(personaje => {
      const article = document.createElement('article'); // Crea un nuevo elemento article
  
      // Agrega el contenido HTML al elemento article
      article.innerHTML = `
        <div class="contenedor_imagen">
          <img src="${personaje.image}" alt="Personaje">
        </div>
        <h2>${personaje.name}</h2>
        <span>${personaje.status}</span>
      `;
  
      // Agrega el elemento article al elemento main
      main.appendChild(article);
    });
  });