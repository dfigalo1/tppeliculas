// FUNCIONES REUTILIZABLES
 
 let apiKey = '0b63f51adbe9c3ff14acc1ab92206b7d';
 let categories = ['popular', 'top_rated', 'upcoming', 'now_playing']
 
 const customFetch = (apiKey, method, payload = '') => {
  const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`
  let options = {
    method: method,
    headers: {'content-type': 'application/json'}
  }
  if(method !== 'GET' && payload) options.body = payload
  return fetch (endPoint, options)
   .then (response => response.json())
   .then (res => (res))
}

 
const karin = (elem, classname) => {
  let thing = document.createElement(elem)
  thing.classList.add(classname)
  return thing
}

  // SEARCH INPUT semi completado 
  let lastSearch;



  const handleSearch = () => {
    let searchText = event.target.value;
    if ( searchText.length >= 3 || event.keyCode === 13 && searchText !== lastSearch){
        lastSearch = searchText
        customFetch(`&query=${searchText}`, 'GET')
        .then ( res => DropDownResults(res.results));
    } 

  };

  const DropDownResults = (movies) => { 
    const container = document.getElementById('results');
    container.innerHTML = '';

    movies.forEach((movie) => {
      let searchResults = karin('a', 'resultName');
      searchResults.href = '#';
      searchResults.onclick = () => modalData(movie.id);
      
      let title = movie.title === movie.original_title ? movie.title:`${movie.title} (${movie.original_title})`;
      searchResults.innerText = title;
      container.appendChild(searchResults);

    })
  };
   
  //  HOME PAGE completado

  const homeData = (category) => {
    return fetch (`https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}`)
    .then (response => response.json())
    .then(res => {
      for(i=0; i<5;i++){
        printHome(res.results[i], category)
      }
    })
  }

  const printHome = ({title, id,  poster_path}, idContainer) => {
    const ImageContainer = document.getElementById(idContainer);
      let div = karin('div' ,"imgContainer");
      
      let a = karin('a', 'imageLink');  
      a.href = '#'; 
      a.onclick = () => modalData(id);

      let imageResults = karin('img', 'image');
      imageResults.src = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${poster_path}`;
      let titleResults = karin('p', 'imagetitle');
      titleResults.innerText = title;
    
      ImageContainer.appendChild(div);
      div.appendChild(a);
      a.appendChild(imageResults);
      a.appendChild(titleResults); 
  
    };

    const initialize = () => {
      categories.forEach(e => homeData(e))
    }

// FUNCION NAVEGADOR en progreso mas o menos 

(function(d){
let sideBar = d.querySelectorAll('.nav_link');
let categoriesSection = d.querySelectorAll('.categories_item');
d.getElementById('tabs').addEventListener('click', (e) => {
  if (e.target.classList.contains('nav_link')){
    let i = sideBar.indexOf(e.target);
    sideBar.map( (tab) => tab.classList.remove('active'));
    sideBar[i].classList.add('active');
    categoriesSection.map( (panel) => panel.classList.remove('active'));
    categoriesSection[i].classList.add('active');
  }
});
})(document);



// PAGINAS DE CATEGORIAS en progreso

const listAllMovies = (title, category) => {
  allMovies(title, category, currentPage = 1)
}

let currentPage = 1


const PapularDataCategory = () => {
  return fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${currentPage}`)
  .then (response => response.json())
  .then(res => {
    for(i=0; i<5;i++){
      printPopularCategory (res.results[i])
    }
  })
}

//let otherCategories = ['popular1', 'popular2', 'popular3', 'popular4']
//otherCategories.forEach( e => printPopularCategory(e) )

// contruir la categoria popular una vez recibida la info  
const printPopularCategory = ({title, id,  poster_path}, boxesId) => {
  const ImagContainer = document.getElementById(boxesId);
  let boxDivs = karin('div' ,"imgContainer");
  
  let boxA = karin('a', 'imageLink');  
  boxA.href = '#'; 
  boxA.onclick = () => modalData(id);

  let boximageResult = karin('img', 'image');
  boximageResult.src = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${poster_path}`;
  let boxtitleResult = karin('p', 'imagetitle');
  boxtitleResult.innerText = title;

  ImagContainer.appendChild(boxDivs);
  boxDivs.appendChild(boxA);
  boxA.appendChild(boximageResult);
  boxA.appendChild(boxtitleResult); 

};

let otherCategories = ['popular1', 'popular2', 'popular3', 'popular4']



const popularInitialize = () => {
  otherCategories.forEach( e => printPopularCategory(e) )
}

  // LOAD MORE en progreso

  //let currentPage = 'currentPage + 1'

// fin PAGINAS DE CATEGORIAS en progreso
  
// MODAL  completado!

 const modalData = movieId =>  {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
  .then(response => response.json())
  .then(res => printModal(res)
  )
};
const openModal = () => {
   let modal = document.getElementById('miModal');
   modal.style.display = 'block';
   
}


const printModal = ({title, tagline, poster_path, backdrop_path, overview, release_date, genres}) => {

  openModal()
  let flex = document.getElementById('flex');

let modalWrapper = karin('div' ,"contenido-modal");
modalWrapper.id = "contenido-modal";

//DESCOMENTAR Y AGREGAR SASS PARA QUE LA IMAGEN BACKDROP_PATH SE USE DE BACKGRAUNG IMAGE 
//let modalBackDropImg = karin('img', 'backdropImage');
 //modalImage.src = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${backdrop_path}`;

let modalHeader = karin('div' ,"modal-headerflex");
let modalImage = karin('img', 'imageModal');
 modalImage.src = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${poster_path}`;
let modalTitle = karin('h1');
modalTitle.innerText = title;
let modalSubTitle = karin('h4');
modalSubTitle.innerText = tagline;
let span = karin('span',"close");
span.id = "close";
span.innerText = 'x';
span.onclick = () => closeModal();

let modalBody = karin('div' ,"modal-body");
let modalDescription = karin('p' ,"modal-description");
modalDescription.innerText = overview;
let modalGenreTitle = karin('h3');
modalGenreTitle.innerText = "GENRES";

//genres.forEach( e => {
 // let ul = karin('ul', 'any')
 // ul.id = 'genres';
//  let genres = document.getElementsByClassName('any')
 // let genre = document.createElement('li')
 // genre.innerText = e.name
 // genres.appendChild(g)
//});

let modalrealeseDateTitle = karin('h3');
modalrealeseDateTitle.innerText = "RELEASE DATE";
let realeseDate = karin('p');
realeseDate.innerText = release_date;

let footer = karin('div', 'foo' )


flex.appendChild(modalWrapper);
modalWrapper.appendChild(modalHeader);
//modalWrapper.appendChild(modalBackDropImg)
modalHeader.appendChild(modalImage);
modalHeader.appendChild(modalTitle);
modalHeader.appendChild(modalSubTitle);
modalHeader.appendChild(span);


modalWrapper.appendChild(modalBody);
modalBody.appendChild(modalDescription);
modalBody.appendChild(modalGenreTitle);
//modalBody.appendChild(modalGenre);
modalBody.appendChild(modalrealeseDateTitle);
modalBody.appendChild(realeseDate);

modalWrapper.appendChild(footer);


}

const closeModal = () => {
  const containerModal = document.getElementById('contenido-modal');
  containerModal.remove('contenido-modal');
  let mainText = document.getElementById('miModal');
    mainText.style.display = "none";
}