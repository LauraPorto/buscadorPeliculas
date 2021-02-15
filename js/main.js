let valor = document.getElementById("buscador");

let key = "c0b6dea31a9d647a6b7d1eafa59bacaa";

let criterio = "";

let base_url = `http://api.themoviedb.org/3/${recurso}`;


const call = async(url) => {
    let res = await axios.get(url);

    if (!res.data.results) {
        error = new Error("La URL no es correcta");
        return error.toSource();
    }

    return res.data.results;
};

const search = async() => {
    let query = valor.nodeValue;

    let url = `${base_ur}/${criterio}?api_key=${key}&query=${query}`;
    print("Cargando...");

    let pelis = await call(url);


};

const print = async(coleccionPintar) => {

    document.getElementById("contenedor").innerHTML = JSON.stringify(coleccionPintar);

    return;
};