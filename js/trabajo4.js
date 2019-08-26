
const customFetch = (apiKey, method, payload = '') => {
  const endPoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  let options = {
    method: method,
    headers: {'content-type': 'application/json'}
  }
  if(method !== 'GET' && payload) options.body = payload
  return fetch (endPoint, options)
   .then (response => response.json())
   .then (res => res)
}

const customFetchCategories = (apiKey, method, payload = '') => {
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



customFetch(`/popular?api_key=${apiKey}`, 'GET')
  .then (res => data = res )
  //usando en customeFetch
  `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`

  //la que nos dan en tp4 para la busqueda
  `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${textoBusqueda}&page=${paginaActual}`

//la que usamos para busqueda y que funciona
   fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}`)
    .then( res => res.json())

let apiKey = '0b63f51adbe9c3ff14acc1ab92206b7d'
let currentPage = 'currentPage + 1'


// la que nos da el TP4 y no usamos pero es para home
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
// la que nos da el TP4 y no usamos pero es para Listado por categoría
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`)
 .then (response => response.json())
 .then (res => data = res) 





const karin = (elem, classname, content) => {
  let thing = document.createElement(elem)
  thing.innerText = content
  thing.classList.add(classname)
  return thing
}

const homeMovies = movies => {


  movies.forEach(e => {
   let image = karin('img', 'image', e.poster_path)
   image.src = e.poster_path
   let p = karin('p', 'title')
   p.innerText = title

   container.appendchild(img)
   img.appendchild(p)
  
  });
}




  const handleSearch = () => {
    console.log(event.target.value);

  };
  
const printResults = (movies) => {
  const container =  document.getElementById("results");
  container.innerHTML = '';
  
  movies.forEach(mov) => {
    let movie = document.createElement('a');
    let title = mov.title === mov.original_title ? mov.title : `${mov.title}(${mov.original_title})
    movie.innerText = title;
  container.appendChild(movie);
  });
};

const openmodal = ()

/// const printcategoriesResults = (movies
)


//  HOME PAGE

  let categories = ['/top_rated','/popular','/upcoming','/now_playing']
  const homeData = () =>
  customFetchCategories(`?api_key=${apiKey}`, 'GET')
    // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    //.then(response => response.json())
    //.then(res => {
      //for(i=0; i<5;i++){
     //   (res.results[i])
    //  }
    //})
  
  
 


const printPopularHome = (data) => {
  const ImageContainer = document.getElementById('imgContainer');
    let movieTitle = document.createElement('img');
    movieTitle.className = "image";
    movieTitle.src = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${poster_path}`;
    ImageContainer.appendChild(movieTitle);

  };

