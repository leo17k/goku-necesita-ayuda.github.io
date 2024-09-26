let body = document.querySelector("body");


let cambiar = document.getElementById('Cambiar');
let mydiv= document.getElementById('pp');

cambiar.addEventListener('click', function(){
mydiv.classList.toggle('pd');

if(body.style.background === ("black")){
    body.style.background = ("white")
}
    
else {
    body.style.background = ("black");
}


});