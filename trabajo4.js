
 const apiKey = '0b63f51adbe9c3ff14acc1ab92206b7d'
 const paginaActual = '1'
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`)
.then(response => response.json())
.then(res => console.log(res))