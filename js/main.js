let valor = document.getElementById("buscador");

let key = "c0b6dea31a9d647a6b7d1eafa59bacaa";

let criterio = "movie";

let recurso = "search";

let base_url = `http://api.themoviedb.org/3/${recurso}`;

let pelicula = null;

let number = 0;

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

    let url = `${base_url}/${criterio}?api_key=${key}&query=${query}`;

    if (query == number) {
        recurso = find;
        return pelicula.external_id;
    }

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