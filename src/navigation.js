// Llamamos al botón del form de busqueda
// Manipulamos el click del buscador de peliculas
// Luego que le agregue al hash el valor del input
searchFormBtn.addEventListener("click", () => {
    location.hash = "#search=" + searchFormInput.value; // test
});

// Llamamos al botón "ver más" del home page
trendingBtn.addEventListener("click", () => {
    location.hash = "#trends"; // test
});

arrowBtn.addEventListener("click", () => {
    // location.hash = "#home";
    history.back();
});

// Llamamos a navigator cuando cargue la aplicación
window.addEventListener("DOMContentLoaded", navigator, false);
// Agregamos escuchador de eventos al window
// "false" es para no usar la fase de captura
// sino solo usar la fase "bubbling" - burbuja
window.addEventListener("hashchange", navigator, false);

// Esta aplicacion se llama cada vez que cargue 
// la aplicación y cada vez que cambie el hash
function navigator(){
    console.log({location});
    // Solo muestro la vista "#trends" si el 
    // hash es #trends
    if(location.hash.startsWith("#trends")){
        trendsPage();
    }else if(location.hash.startsWith("#search=")){
        searchPage();
    }else if(location.hash.startsWith("#movie=")){
        movieDetailsPage();
    }else if(location.hash.startsWith("#category=")){
        categoriesPage();
    }else{
        homePage();
    }
    // Corrigiendo problemas de scroll.
    // Se usan ambas por temas de conflicto
    // entre navegadores.
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

function homePage(){
    console.log("Imaynallan home page");
    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    arrowBtn.classList.add("inactive");
    arrowBtn.classList.remove("header-arrow--white");    
    headerTitle.classList.remove("inactive");
    headerCategoryTitle.classList.add("inactive");
    searchForm.classList.remove("inactive");

    trendingPreviewSection.classList.remove("inactive");
    categoriesPreviewSection.classList.remove("inactive")
    genericSection.classList.add("inactive");
    movieDetailSection.classList.add("inactive");

    getTrendingMoviesPreview();
    getCategoriesPreview();
};

function categoriesPage(){
    console.log("Imaynallan category page");
    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    arrowBtn.classList.remove("inactive");
    arrowBtn.classList.remove("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryTitle.classList.remove("inactive");
    searchForm.classList.add("inactive");

    trendingPreviewSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive")
    genericSection.classList.remove("inactive");
    movieDetailSection.classList.add("inactive");
    // localhost:5500/?#category=35_Comedy - obtenemos el id (35)
    // [_, caetgoryData] - primer elemento es obviado
    const [_, categoryData] =  location.hash.split("="); // ["category", "id-name"]
    const [categoryId, categoryName] = categoryData.split("_");

    headerCategoryTitle.innerHTML = categoryName;
    getMoviesByCategory(categoryId);
};

function movieDetailsPage(){
    console.log("Imaynallan movie page");
    headerSection.classList.add("header-container--long");
    headerSection.style.background = "";
    arrowBtn.classList.remove("inactive");
    arrowBtn.classList.add("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryTitle.classList.add("inactive");
    searchForm.classList.add("inactive");

    trendingPreviewSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive")
    genericSection.classList.add("inactive");
    movieDetailSection.classList.remove("inactive");
};

function searchPage(){
    console.log("Imaynallan search page");
    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    arrowBtn.classList.remove("inactive");
    arrowBtn.classList.remove("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryTitle.classList.add("inactive");
    searchForm.classList.remove("inactive");

    trendingPreviewSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive")
    genericSection.classList.remove("inactive");
    movieDetailSection.classList.add("inactive");
    // Obtenemos string del cuadro de búsqueda
    // [_, searchInput.value]
    const [_, query] =  location.hash.split("="); // ["category", "id-name"]
    // Lo pasamos como parámetro a getMoviesBySearch
    getMoviesBySearch(query);
};

function trendsPage(){
    console.log("Imaynallan trends page");
    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    arrowBtn.classList.remove("inactive");
    arrowBtn.classList.remove("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryTitle.classList.remove("inactive");
    searchForm.classList.add("inactive");

    trendingPreviewSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive")
    genericSection.classList.remove("inactive");
    movieDetailSection.classList.add("inactive");

    headerCategoryTitle.innerHTML = "Trendings";
    getTrendingMovies();
};