

document.addEventListener("DOMContentLoaded", function(event) {
    
    console.log(document.referrer);
    if (parent !== window && document.referrer.indexOf('https://mobiforge.com') === 0 && document.referrer.indexOf('http://mobiforge.com') === 0)
    {  
      console.log(document.referrer);
      document.getElementById('article-link').className = "fade-out";
    }
  
  });
//modo oscuro
  function cambiarModo() { 
    var cuerpoweb = document.body; 
    cuerpoweb.classList.toggle("oscuro"); 
}

//mensaje de bienvenida
window.onload=function(){alert('Bienvenido a esta pagina');}
window.onunload=function(){alert('Vuelva en otro momento');}

//contador aleatorio falso
var ran
ran = Math.round(Math.random()*50000)
document.write("Usted es el visitante " + ran + " de esta página.")

//letra parpadeante
window.setInterval (BlinkIt, 500);
var color = "green";
function BlinkIt () {
var blink = document.getElementById ("blink");
color = (color == "#ffffff")? "green" : "#ffffff";
blink.style.color = color;
blink.style.fontSize='20px';}

