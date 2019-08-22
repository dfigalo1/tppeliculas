
const customFetch = (apiKey) => {
  const endPoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  return fetch (endPoint)
   .then (response => response.json())
   .then (res => console.log(res))
}

customFetch('0b63f51adbe9c3ff14acc1ab92206b7d')