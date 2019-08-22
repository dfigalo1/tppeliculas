
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
let paginaActual = '2'

fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`)
 .then (response => response.json())
 .then (res => data = res)

customFetch(`&page=${paginaActual}`, 'GET')
.then (res => console.log(res))

