// Llamamos al botón del form de busqueda
searchFormBtn.addEventListener("click", () => {
    location.hash = "#search="; // test
});

// Llamamos al botón "ver más" del home page
trendingBtn.addEventListener("click", () => {
    location.hash = "#trends"; // test
});

arrowBtn.addEventListener("click", () => {
    location.hash = "#home";
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
};

function homePage(){
    console.log("Imaynallan home page");
    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    arrowBtn.classList.add("inactive");
    arrowBtn.classList.remove("header-arrow--white");    headerTitle.classList.add("inactive");
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
    headerCategoryTitle.classList.remove("inactive");
    searchForm.classList.remove("inactive");

    trendingPreviewSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive")
    genericSection.classList.remove("inactive");
    movieDetailSection.classList.add("inactive");
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
};