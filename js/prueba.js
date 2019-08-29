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
      
      searchResults.onclick = () => {
        modalData(movie.id)
  
    };
      let title = movie.title === movie.origila_title ? movie.title:`${movie.title} (${movie.original_title})`;
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


( function name(d) {
  let tabs = d.querySelectorAll('.tabs_item');
  let panels = d.querySelectorAll('.categories_items');
  d.getElementById('tabs').addEventListener('click', e => {
    if(e.target.classList.contains ('tabs_item')){
      let i = (tabs.indexOf(e.target));
      tabs.map(tab => tab.classList.remove('active'))
      tabs[i].classList.add('active');
      panels.map(panel => panel.classList.remove('active'))
      panels[i].classList.add('active');

    }

  } )
})(document);


let currentPage = '1';

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


const modalData = (movieId) =>  {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
  .then(response => response.json())
  .then (data => {

   let modal = document.getElementById('miModal');
   let flex = document.getElementById('flex');
   let boxes = document.getElementById('open');
   let close = document.getElementById('close');
// crear una sync and await ? para que espere a ejecutarse para cuando le hagamos un click

  boxes.addEventListener('click',function(){
      modal.style.display = 'block' ;
  });


  close.addEventListener('click',function(){
     modal.styles.display = 'none';
  });


  window.addEventListener('click',function(e){
  if(e.target == flex){
      modal.style.display = 'none';
  }
  });


  let modalWrapper = karin('div' ,"contenido-modal");
  //agregar css para que esta imagen sea brackground a la otra imagen?
  let modalBackDropImg = karin('img', 'backdropImage');
    //modalImage.src = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${data.poster_path}`;
  let modalHeader = karin('div' ,"modal-headerflex");
  let modalImage = karin('img', 'imageModal');
    //modalImage.src = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${data.backdrop_path}`;
  let modalTitleWrap = karin('div', 'text');
  let modalTitle = karin('h3');
   //modalTitle.innerText = data.title;
  let modalSubTitle = karin('h4');
   modalSubTitle.innerText = data.tagline;

  let modalBody = karin('div' ,"modal-body");
  let modalDescription = karin('p' ,"modal-description");
    //modalDescription.innerText = data.overview;
  let modalGenreTitle = karin('h3');
    modalGenreTitle.innerText = "GENRES";
  let modalGenre = karin('p' ,"modal-Genre");

    modalGenre.innerText = genres[name];//nose si llega al array con los nombres de los generos;

  let modalrealeseDateTitle = karin('h3');
    modalrealeseDateTitle.innerText = "RELEASE DATE";
  let realeseDate = karin('p');
    //realeseDate.innerText = data.release_date;


  flex.appendChild(modalWrapper);
  modalWrapper.appendChild(modalHeader);
  modalWrapper.appendChild(modalBackDropImg)
  modalHeader.appendChild(modalImage);
  modalImage.appendChild(modalTitleWrap);
  modalTitleWrap.appendChild(modalTitle);
  modalTitleWrap.appendChild(modalSubTitle);
  modalHeader.appendChild(close)

  modalWrapper.appendChild(modalBody);
  modalBody.appendChild(modalDescription);
  modalBody.appendChild(modalGenreTitle);
  modalBody.appendChild(modalGenre);
  modalBody.appendChild(modalrealeseDateTitle);
  modalBody.appendChild(realeseDate);

})
};
 