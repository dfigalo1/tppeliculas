
  
  let apiKey = '0b63f51adbe9c3ff14acc1ab92206b7d';

  // Search Input 
  let lastSearch;

  const handleSearch = () => {
    let searchText = event.target.value;
    if ( searchText.length >= 3 || event.keyCode === 13 && searchText !== lastSearch){
        lastSearch = searchText
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}`)
        .then( res => res.json())
        .then ( res => DropDownResults(res.results));
    } 

  };

  const karin = (elem, classname, content) => {
    let thing = document.createElement(elem)
    thing.innerText = content
    thing.className = classname;
    return thing
  }

  const DropDownResults = (movies) => { 
    const container = document.getElementById('results');
    container.innerHTML = ''
    movies.forEach((movie) => {
      let movieTitle = karin('a', 'resultName');
      movieTitle.href = '#';
      let title = movie.title === movie.origila_title ? movie.title:`${movie.title} (${movie.original_title})`;
      movieTitle.innerText = title;
      container.appendChild(movieTitle);

    })
  };
   
  // categorias Popular

const printCategoriesHome = (movies) => {
  const ImageContainer = document.getElementById('imgContainer');
  ImageContainer.innerHTML = ''
  movies.forEach((movie) => {
    let movieTitle = document.createElement('img');
    movieTitle.className = "image";
    movieTitle.src = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster_path}`;
    ImageContainer.appendChild(movieTitle);
    })
  };
