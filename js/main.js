let valor = document.getElementById("buscador");

let key = "c0b6dea31a9d647a6b7d1eafa59bacaa";

let criterio = "movie";

let recurso = "search";

let base_url = `http://api.themoviedb.org/3/${recurso}`;

let pelicula = null;

let number;

const call = async(url) => {
    let res = await axios.get(url);

    if (!res.data.results) {
        error = new Error("La URL no es correcta");
        return error;
    };

    return res.data.results;
};


const buscador = async() => {
    let query = valor.value;
    //Query = consulta


    let url = `${base_url}/${criterio}?api_key=${key}&query=${query}`;


    pelicula = await call(url);

    pintar(pelicula);

};

const pintar = async(coleccionPintar) => {

    let content = document.getElementById("contenedor");

    coleccionPintar.forEach(pelicula => {
        console.log(pelicula);

        content.innerHTML += `</br><h2> ${pelicula.title} </h2> <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}"></br>${pelicula.overview} </br>`;
    })


    return content;

};
// http://api.themoviedb.org/3/search/movie/?api_key=c0b6dea31a9d647a6b7d1eafa59bacaa&query=${query}

/*
https://api.themoviedb.org/3/movie/53865?api_key=c0b6dea31a9d647a6b7d1eafa59bacaa&language=en-US

let link = `${base_url}/${criterio}/${id}?api_key=${key}&language=en-US`;

Tendríamos que cambiar el url por otra variable que recoja el ID y nos haga la búsqueda.
O bien hacer funciones diferentes funciones o diferentes buscadores para el ID para poder pasar diferente URL. 

let id = valor.value;

<input id="buscadorID" type="text" placesholder="titulo">
<button onclick="buscador()">Busca</button>

Coger el ID
https://developers.themoviedb.org/3/movies/get-movie-details
    
http://api.themoviedb.org/3/movie/upcoming?api_key=bb78e4cf3442e302d928f2c5edcdbee1
TODAS LAS PELICULAS
*/