
// MODAL
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
});

// MODAL


// Apikey
// 3e597a68977c4cb049bc74d03c2e7ea7



















