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

  // SEARCH INPUT
  let lastSearch;

  const handleSearch = () => {
    let searchText = event.target.value;
    if ( searchText.length >= 3 || event.keyCode === 13 && searchText !== lastSearch){
        lastSearch = searchText
        customFetch(`&query=${searchText}`, 'GET')
        //preguntar en clase por que no funciona con la /popular ? fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}`)
        //.then( res => res.json())
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
   
  //  HOME PAGE

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
      //a.innerText = `onclick="openModal(${mov.id})">`

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

//categoria popular


(function(d){
  let sideBar = Array.prototype.slice.apply(d.querySelectorAll('.nav_link'));
  let categoriesSection = Array.prototype.slice.apply(d.querySelectorAll('.categories_item'));
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

const listAllMovies = (title, category) => {
  allMovies(title, category, currentPage = 1)
}

let currentPage =  'currentPage + 1';

const PapularDataCategory = () => {
  return fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
  .then (response => response.json())
  .then(res => {
    for(i=0; i<20;i++){
      (res.results[i])
    }
  })
}

// contruir la categoria popular una vez recibida la info 
const printPopularHome = ({title, id,  poster_path}, idContainer) => {
  const ImageContainer = document.getElementById(idContainer);
    let div = karin('div' ,"imgContainer");
    
    let a = karin('a', 'imageLink');  
    a.href = '#'; 

    let imageResults = karin('img', 'image');
    imageResults.src = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${poster_path}`;
    let titleResults = karin('p', 'imagetitle');
    titleResults.innerText = title;
  
    ImageContainer.appendChild(div);
    div.appendChild(a);
    a.appendChild(imageResults);
    a.appendChild(titleResults); 

  };

 // inicializar  con un onclick en el navegador 
 //const initialize = () => {
  //categories.forEach(e => homeData(e))
//}




  // LOAD MORE

  //let currentPage = 'currentPage + 1'


  
// MODAL  

 const modalData = movieId =>  {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
  .then(response => response.json())
  .then(res => printModal(res)
  )
};

const printModal = ({title, tagline, poster_path, backdrop_path, overview, release_date, genres}) => {

let modal = document.getElementById('miModal');
modal.style.display = "none";
let flex = document.getElementById('flex');




let modalWrapper = karin('div' ,"contenido-modal");
//gregar css para que esta imagen sea brackground a la otra imagen?
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

//<a href="#" onclick="closeModal()">x</a>

const closeModal = () =>{
  let container = document.getElementById('miModal')
  container.classList.remove('modal-container')
  container.classList.add('close-modal')

}


 