let valor = document.getElementById("buscador");

let valorID = document.getElementById("buscadorID");

let key = "c0b6dea31a9d647a6b7d1eafa59bacaa";

let criterio = "movie";

let recurso = "search";

let base_url = `https://api.themoviedb.org/3/`;

let pelicula = null;



const call = async(url) => {

    let res = await axios.get(url);
    if (res.data.results) {
        console.log(res.data.results);
        return res.data.results;
    } else {
        console.log(res);
        return res.data;
    };


};


const buscador = async() => {

    let query = valor.value;

    let url = `${base_url}${recurso}/${criterio}?api_key=${key}&query=${query}`;

    pelicula = await call(url);

    pintar(pelicula);

};


const buscadorID = async() => {
    let id = valorID.value;

    let url = `${base_url}${criterio}/${id}?api_key=${key}&language=en-US`;

    pelicula = await call(url);

    pintarID(pelicula);

};

const pintar = async(coleccionPintar) => {
    let content = document.getElementById("contenedor");

    coleccionPintar.forEach(pelicula => {
        content.innerHTML += `</br><h2> ${pelicula.title} </h2> <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}"></br>${pelicula.overview} </br>`
    });

    return content;
};

const pintarID = async() => {
    let content = document.getElementById("contenedor");

    //coleccionPintar(pelicula => {
    content.innerHTML = `</br><h2> ${pelicula.title} </h2> <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}"></br>${pelicula.overview} </br>`;
    //};

    return content;
};