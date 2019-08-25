
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


let apiKey = '0b63f51adbe9c3ff14acc1ab92206b7d'
let paginaActual = '3'

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
