 // FUNCIONES REUTILIZABLES maybe
 
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
        .then ( res => DropDownResults(res.results));
    } 

  };

  const DropDownResults = (movies) => { 
    const container = document.getElementById('results');
    container.innerHTML = '';
    movies.forEach((movie) => {
      let searchResults = karin('a', 'resultName');
      searchResults.href = '#';
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
    
      a.onclick = () => {
        let container = document.getElementById('modal')
        modalData(id)
        container.classList.remove('close-modal')
        container.classList.add('modal-container')
    }


      ImageContainer.appendChild(div);
      div.appendChild(a);
      a.appendChild(imageResults);
      a.appendChild(titleResults); 
  
    };

  const initialize = () => {
    categories.forEach(e => homeData(e))
}


// MODAL

    
    const printModal = () => {

      let modal = document.getElementById('miModal');
      let flex = document.getElementById('flex');
      let boxes = document.getElementById('open');
      let close = document.getElementById('close');
      
      
      boxes.addEventListener('click',function(){
          modal.style.display = 'block' ;
      });
      
      
      close.addEventListener('click',function(){
          modal.styles.display = 'none';
      });
      
      
      window.addEventListener('click',function(){
      if(e.target == flex){
          modal.style.display = 'none';
      }
      })
          };

  // LOAD MORE

  let currentPage = 'currentPage + 1'
