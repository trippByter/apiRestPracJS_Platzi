// Llamamos a navigator cuando cargue la aplicación
window.addEventListener("DOMContentLoaded", navigator, false);
// Agregamos escuchador de eventos al window
// "false" es para no usar la fase de captura
// sino solo usar la fase "bubbling" - burbuja
window.addEventListener("onhashchange", navigator, false);
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
        moviePage();
    }else if(location.hash.startsWith("#category=")){
        categoryPage();
    }else{
        homePage();
    }
};

function homePage(){
    console.log("Imaynallan home page");
    getTrendingMoviesPreview();
    getCategoriesPreview();
};

function categoryPage(){
    console.log("Imaynallan category page");
};

function moviePage(){
    console.log("Imaynallan movie page");
};

function searchPage(){
    console.log("Imaynallan search page");
};

function trendsPage(){
    console.log("Imaynallan trends page");
};