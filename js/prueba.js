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

 
const karin = (elem, classname, content) => {
  let thing = document.createElement(elem)
  thing.innerText = content
  thing.className = classname;
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
        printPopularHome(res.results[i], category)
      }
    })
  }

  const printPopularHome = ({title, id,  poster_path}, idContainer) => {
    const ImageContainer = document.getElementById(idContainer);
      let a = karin('a', 'imageLink');
      a.href = '#';
      let imageResults = karin('img', 'image');
      imageResults.src = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${poster_path}`;
      let titleResults = karin('p', 'imagetitle');
      titleResults.innerText = title;
    
      ImageContainer.appendChild(imageResults);
      imageResults.appendChild(a);
      ImageContainer.appendChild(titleResults); 
  
    };

  const initialize = () => {
    categories.forEach(e => homeData(e))
}

  // LOAD MORE

  let currentPage = 'currentPage + 1'
