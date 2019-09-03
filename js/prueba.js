// FUNCIONES REUTILIZABLES
 
let apiKey = '0b63f51adbe9c3ff14acc1ab92206b7d';

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

 // FUNCION NAVEGADOR en progreso mas o menos 


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
  
 //  HOME PAGE completado

 let categories = ['popular', 'top_rated', 'upcoming', 'now_playing']


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


// PAGINAS DE CATEGORIAS en progreso

let otherCategories = ['popular1', 'popular2', 'popular3', 'popular4']

let currentPage = 1

const PapularDataCategory = (pupularId) => {
 return fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${currentPage}`)
 .then (response => response.json())
 .then(res => {
   for(i=0; i<5;i++){
    printPopularCategory(res.results[i],pupularId )
   }
 })
}

const printPopularCategory = ({title, id, poster_path},pupularId) => {
  
const ImagContainer = document.getElementById(pupularId);
 let div = karin('div' ,"imgContainer");
 
 let a= karin('a', 'imageLink');  
 a.href = '#'; 

 a.onclick = () => modalData(id);

 let imageResult = karin('img', 'image');
 imageResult.src = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${poster_path}`;
 let titleResult = karin('p', 'imagetitle');
 titleResult.innerText = title;

 ImagContainer.appendChild(div);
 div.appendChild(a);
 a.appendChild(imageResult);
 a.appendChild(titleResult); 
};


const popularInitialize = () => { 
  otherCategories.forEach(e => PapularDataCategory(e))
}
////////////////top rated ///////////////////

let  topRatedCategories = ['top_rated1', 'top_rated2', 'top_rated3', 'top_rated4'] 

const topRatedDataCategory = (topRatedId) => {
  return fetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${currentPage}`)
  .then (response => response.json())
  .then(res => {
    for(i=0; i<5;i++){
      printTopRatedCategory(res.results[i], topRatedId)
    }
  })
 }


const printTopRatedCategory = ({title, id, poster_path}, topRatedId) => {
  
const ImagContainer = document.getElementById(topRatedId);
 let div = karin('div' ,"imgContainer");
 
 let a= karin('a', 'imageLink');  
 a.href = '#'; 

 a.onclick = () => modalData(id);

 let imageResult = karin('img', 'image');
 imageResult.src = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${poster_path}`;
 let titleResult = karin('p', 'imagetitle');
 titleResult.innerText = title;

 ImagContainer.appendChild(div);
 div.appendChild(a);
 a.appendChild(imageResult);
 a.appendChild(titleResult); 
};


const topRatedInitialize = () => { 
  topRatedCategories.forEach(e => topRatedDataCategory(e))
  
};
 

/////upcoming//////////////

 //let others = ['upcoming1'] ,['now_playing1']
 
 const upcomingDataCategory = () => {
  return fetch (`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${currentPage}`)
  .then (response => response.json())
  .then(res => {
    for(i=0; i<20;i++){
      printUpcomingCategory(res.results[i])
    }
  })
 }
 
 const printUpcomingCategory = ({title, id, poster_path}) => {
   
 const ImagContainer = document.getElementById("upcoming1");
  let div = karin('div' ,"imgContainer");
  
  let a= karin('a', 'imageLink');  
  a.href = '#'; 
 
  a.onclick = () => modalData(id);
 
  let imageResult = karin('img', 'image');
  imageResult.src = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${poster_path}`;
  let titleResult = karin('p', 'imagetitle');
  titleResult.innerText = title;
 
  ImagContainer.appendChild(div);
  div.appendChild(a);
  a.appendChild(imageResult);
  a.appendChild(titleResult); 
 };
 
 
 const upcomingInitialize = () => { 
    upcomingDataCategory()
 }


 //////////now playing///////////

const nowPlayingDataCategory = () => {
 return fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${currentPage}`)
 .then (response => response.json())
 .then(res => {
   for(i=0; i<20;i++){
    printPopularCategory(res.results[i] )
   }
 })
}

const printNow_playingCategory = ({title, id, poster_path}) => {
  
const ImagContainer = document.getElementById("now_playing");
 let div = karin('div' ,"imgContainer");
 
 let a= karin('a', 'imageLink');  
 a.href = '#'; 

 a.onclick = () => modalData(id);

 let imageResult = karin('img', 'image');
 imageResult.src = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${poster_path}`;
 let titleResult = karin('p', 'imagetitle');
 titleResult.innerText = title;

 ImagContainer.appendChild(div);
 div.appendChild(a);
 a.appendChild(imageResult);
 a.appendChild(titleResult); 
};


const nowPlayingInitialize = () => { 
  nowPlayingInitialize()
}


 // LOAD MORE en progreso

 //let currentPage = 'currentPage + 1'

 
// MODAL  completado!

const modalData = movieId =>  {
 fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
 .then(response => response.json())
 .then(res => printModal(res)
 )
};

const printModal = ({title, tagline, poster_path, backdrop_path, overview, release_date, genres}) => {

 let modal = document.getElementById('miModal');
 modal.style.display = 'block';
 let flex = document.getElementById('flex');





let modalWrapper = karin('div' ,"contenido-modal");
modalWrapper.id = "contenido-modal";


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

let modalrealeseDateTitle = karin('h3');
modalrealeseDateTitle.innerText = "RELEASE DATE";
let realeseDate = karin('p');
realeseDate.innerText = release_date;

let footer = karin('div', 'foo' )


flex.appendChild(modalWrapper);
modalWrapper.appendChild(modalHeader);

modalHeader.appendChild(modalImage);
modalHeader.appendChild(modalTitle);
modalHeader.appendChild(modalSubTitle);
modalHeader.appendChild(span);


modalWrapper.appendChild(modalBody);
modalBody.appendChild(modalDescription);
modalBody.appendChild(modalGenreTitle);

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