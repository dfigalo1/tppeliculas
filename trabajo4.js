//
// categoria Popular//

//async function funcionAsincronica(){
   // try//{
   //     let response = await initialize
    //}
//} 
//const initialize = () => fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${0b63f51adbe9c3ff14acc1ab92206b7d}`
//)
  //.then(response => response.json())
  //.then(response => funct//ionName(response)//)

async function Data () {
  try{
    let dataApi = await fetch
    ("https://api.themoviedb.org/3/movie/popular?api_key=0b63f51adbe9c3ff14acc1ab92206b7d&page=${paginaActual}")
  .then(response => await response.json(dataApi))
  .then(res => {
      
  })
  }catch (e) {
    console.log (e)
  }finally{
    console.log ('sin resultados')
  }
}

Data()
