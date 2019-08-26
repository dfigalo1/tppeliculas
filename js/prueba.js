 // FUNCIONES REUTILIZABLES
 
 let apiKey = '0b63f51adbe9c3ff14acc1ab92206b7d';
 let categories = ['/top_rated','/popular','/upcoming','/now_playing']
 
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
      let movieTitle = karin('a', 'resultName');
      movieTitle.href = '#';
      let title = movie.title === movie.origila_title ? movie.title:`${movie.title} (${movie.original_title})`;
      movieTitle.innerText = title;
      container.appendChild(movieTitle);

    })
  };
   
  
  // LOAD MORE

  let currentPage = 'currentPage + 1'
