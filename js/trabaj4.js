
// MODAL


const modalData = (peliculaId) => fetch(`https://api.themoviedb.org/3/movie/${peliculaId}?api_key=${apiKey}`)
    .then(response => response.json())
    .then(res => printModal(res))


  const printPopularHome = ({title, id,  poster_path}, idContainer) => {
    const ImageContainer = document.getElementById(idContainer);
      let div = karin('div' ,"imgContainer");
      let a = karin('a', 'imageLink');
      a.href = '#';
      let imageResults = karin('img', 'image');
      imageResults.src = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${poster_path}`;
      let titleResults = karin('p', 'imagetitle');
      titleResults.innerText = title;
    
      a.onclick = () => {
        let container = document.getElementById('modal')
        fetchMovie(id)
        container.classList.remove('close-modal')
        container.classList.add('modal-container')
    }


      ImageContainer.appendChild(div);
      div.appendChild(a);
      a.appendChild(imageResults);
      a.appendChild(titleResults); 
  
    };
    

const print = () => {

let modal = document.getElementById('miModal');
let flex = document.getElementById('flex');
let boxes = document.getElementById('open');
let close = document.getElementById('close');


boxes.addEventListener('click',function(){
    modal.style.display = 'block' ;
});


close.addEventListener('click',function(){
    modal.styles.display = 'none';
});


window.addEventListener('click',function(){
if(e.target == flex){
    modal.style.display = 'none';
}
})
    };

// MODAL


// Apikey
// 3e597a68977c4cb049bc74d03c2e7ea7



















