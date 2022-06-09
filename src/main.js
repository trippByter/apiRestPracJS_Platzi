// Working with API
async function getTrendingMoviesPreview() {
    // Obtain the API, convert json and get the movies(results)
    const res = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY);
    const data = await res.json();
    const movies = data.results;
    console.log(data);
    
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
getTrendingMoviesPreview();