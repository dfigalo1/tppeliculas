
  
  let apiKey = '0b63f51adbe9c3ff14acc1ab92206b7d';

  let lastSearch;

  const handleSearch = () => {
    let searchText = event.target.value;
    if ( searchText.length >= 3 || event.keyCode === 13 && searchText !== lastSearch){
        lastSearch = searchText
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}`)
        .then( res => res.json())
        .then ( res => printResults(res.results));
    } 

  };

  const printResults = (movies) => { 
      const ImageContainer = document.getElementById('imgContainer');
      ImageContainer.innerHTML = '';
      movies.forEach((movie) => {
          let imageMovie = document.createElement('img');
          imageMovie.className = "image";
          imageMovie.src = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster_path}`;
          ImageContainer.appendChild(imageMovie);
          
      });

  };
   
  // categorias Popular

  