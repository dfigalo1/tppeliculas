let modal = document.getElementById('miModal');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');

abrir.addEventListener('click',function(){
    modal.style.display = 'block';
});

cerrar.addEventListener('click',function(){
    modal.styles.display = 'none';
});


window.addEventListener('click',function(){
if(e.target == flex){
    modal.style.display = 'none';
}
});


// Apikey
// 3e597a68977c4cb049bc74d03c2e7ea7

// …or create a new repository on the command line
// echo "# tppeliculas" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git remote add origin https://github.com/dfigalo1/tppeliculas.git
// git push -u origin master
// …or push an existing repository from the command line
// git remote add origin https://github.com/dfigalo1/tppeliculas.git
// git push -u origin master
