const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        "Content-type": "application/json;charset=utf-8",
    },
    // En vez de usar query parameters
    // agregamos aqui los parámetros
    params:{
        "api_key": API_KEY,
        // Trabajamos con el hash para la 
        // interacción con el usuario
    },
});
// Agregando detalle a cada imagen que recibimos
// de la api. Con click event cambiamos el
// "location.hash" hacia la ruta indicada.
// Utils - código reutilizable
function createMovies(movies, container){
    // Limpiamos los containers antes 
    // de hacer los appendChild
    container.innerHTML = "";
    movies.forEach(movie => {
        const movieContainer = document.createElement("div");
        movieContainer.classList.add("movie-container");
        movieContainer.addEventListener("click", () => {
            location.hash = "#movie=" + movie.id;
        });
        const movieImg = document.createElement("img");
        movieImg.classList.add("movie-img");
        movieImg.setAttribute("alt", movie.title);
        movieImg.setAttribute("src", "https://image.tmdb.org/t/p/w300" + movie.poster_path);
        
        movieContainer.appendChild(movieImg);
        container.appendChild(movieContainer);
    });
};

function createCategories(categories, container){
    container.innerHTML = "";
    categories.forEach(category => {
        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("category-container");
        
        const categoryTitle = document.createElement("h3");
        categoryTitle.classList.add("category-title");
        categoryTitle.setAttribute("id", "id" + category.id);
        // Habilitamos llamadas a la API desde los clicks
        // en las "Categorías" en el home page.
        categoryTitle.addEventListener("click", () => {
            location.hash = `#category=${category.id}_${category.name}`;
        })
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        container.appendChild(categoryContainer);
    });
};


// Working with API
// Movie's trending
async function getTrendingMoviesPreview() {
    // Obtain the API directly from aixos and get the movies(results)
    const {data} = await api("trending/movie/day");
    const movies = data.results;
    // console.log(data);
    
    createMovies(movies, trendingMoviesPreviewList);
};


// Movie's categories
async function getCategoriesPreview() {
    const {data} = await api("genre/movie/list");
    // const data = await res.json(); // Axios ya devuelve json
    // Review the resonse in the API docs
    const categories = data.genres;
    // console.log(data);    
    createCategories(categories, categoriesPreviewList);
};


async function getMoviesByCategory(id) {
    const {data} = await api("discover/movie", {
        // El id es pasado como query parameter
        params: {
            with_genres: id,
        }
    });
    const movies = data.results;
    // console.log(data);
    createMovies(movies, genericSection);  
};

async function getMoviesBySearch(query) {
    // Revisar la doc de la api para: search/movie
    const {data} = await api("search/movie", {
        // El id es pasado como query parameter
        params: {
            query,
        }
    });
    const movies = data.results;
    // console.log(data);
    
    // genericSection - lugar a insertar el movies
    createMovies(movies, genericSection);  
};


async function getTrendingMovies() {
    // Obtain the API directly from aixos and get the movies(results)
    const {data} = await api("trending/movie/day");
    const movies = data.results;
    // console.log(data);
    
    createMovies(movies, genericSection);
};

async function getMovieById(movieId) {
    // Obtain the API directly from aixos and get the movies(results)
    // Renombramos el "data" a "movie".
    const {data: movie} = await api("/movie/" + movieId);
    
    // Obtenemos la imagen de la película.
    // 
    const movieImgUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    headerSection.style.background = `
        linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.35) 19.27%,
            rgba(0, 0, 0, 0) 29.17%
        ),
        url(${movieImgUrl})
    `;

    // Traemos la información de la película
    movieDetailTitle.textContent = movie.title; // Título
    movieDetailDescription.textContent = movie.overview; // Descripción
    movieDetailScore.textContent = movie.vote_average; // Calificación

    // Obtenemos peliculas para el container de las categorías relacionadas
    createCategories(movie.genres, movieDetailCategoriesList);
};