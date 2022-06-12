const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        "content-type": "application/json;charset=utf-8",
    },
    // En vez de usar query parameters
    // agregamos aqui los parámetros
    params:{
        "api_key": API_KEY,
        // Trabajamos con el hash para la 
        // interacción con el usuario
    },
});

// Working with API
// Movie's trending
async function getTrendingMoviesPreview() {
    // Obtain the API directly from aixos and get the movies(results)
    const {data} = await api("trending/movie/day");
    const movies = data.results;
    // console.log(data);
    
    // Obtain the movie image from the API
    // and construct a HTML element.
    movies.forEach(movie => {
        // CREATE  <div/>  INSIDE  <article/>
        // <article class="trendingPreview-movieList">
        //   <div class="movie-container">
        //     <img class="movie-container" alt="..." src="..." >
        //    </div>
        // </article>
        
        // 1th Get <article class="trendingPreview-movieList">
        const trendingPreviewContainer = document.querySelector("#trendingPreview .trendingPreview-movieList");
        
        // 2nd Create <div class="movie-container">
        const movieContainer = document.createElement("div");
        movieContainer.classList.add("movie-container");
        
        // 3rd Create <img class="movie-container" alt="..." src="..." > 
        const movieImg = document.createElement("img");
        movieImg.classList.add("movie-img");
        movieImg.setAttribute("alt", movie.title);
        movieImg.setAttribute("src", "https://image.tmdb.org/t/p/w300" + movie.poster_path);
        
        // 4th Add <img class="movie-container" alt="..." src="..." >
        // To <div class="movie-container">
        movieContainer.appendChild(movieImg);
        trendingPreviewContainer.appendChild(movieContainer);
    });
};
// getTrendingMoviesPreview();


// Movie's categories
async function getCategoriesPreview() {
    const {data} = await api("genre/movie/list");
    // const data = await res.json(); // Axios ya devuelve json
    // Review the resonse in the API docs
    const categories = data.genres;
    // console.log(data);
    
    // Obtain the movie image from the API
    // and construct a HTML element.
    categories.forEach(category => {
        // CREATE  <div/>  INSIDE  <categoriesPreview-list/>
        // <article class="categoriesPreview-list">
        //   <div class="category-container">
        //    <h3 id="id14" class="category-title">Acción</h3>
        //   </div>
        // </article>
        
        // 1th Get <article class="categoriesPreview-list">
        const previewCategoriesContainer = document.querySelector("#categoriesPreview .categoriesPreview-list");
        
        // 2nd Create <div class="category-container">
        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("category-container");
        
        // 3rd Create <h3 id="id+category.id" class="category-title"> 
        const categoryTitle = document.createElement("h3");
        categoryTitle.classList.add("category-title");
        categoryTitle.setAttribute("id", "id" + category.id);
        const categoryTitleText = document.createTextNode(category.name);

        // 4th Add <h3 id="id+category.id" class="category-title">
        // To <div class="category-container">
        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        previewCategoriesContainer.appendChild(categoryContainer);
    });
};
// getCategoriesPreview();
/*
<class="" id="Adventure">Adventure</class=>
*/