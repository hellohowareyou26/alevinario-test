function neones () {
document.getElementById("historia-neones").innerHTML="<img src='https://cdn.corenexis.com/f/hr6pP4I1oeA.jpg' alt='La historia de unos tetra neones y platies naranjas que encuentran su hogar ideal.'>";
document.getElementById("botones").innerHTML="<button type='button' onclick='cerrar()' class='btn btn-outline-dark'> Cerrar </button>";
}
function cerrar () {
    document.getElementById("historia-neones").innerHTML="<br>";
    document.getElementById("botones").innerHTML="<button type='button' onclick='neones()' class='btn btn-outline-info'> Lee más.. </button>";
}
function gambitas () {
   document.getElementById("rss-gambitas").innerHTML="<img src='https://cdn.corenexis.com/f/42mZNZDVscI.jpg' alt='Infografía sobre feeds RSS para seguir blogs.'>"; 
   document.getElementById("botones-gambas").innerHTML="<button type='button' onclick='cerrarGambas()' class='btn btn-outline-dark'> Cerrar </button>";
}
function cerrarGambas () {
    document.getElementById("rss-gambitas").innerHTML="<br>";
    document.getElementById("botones-gambas").innerHTML="<button type='button' onclick='gambitas()' class='btn btn-outline-info'> Lee más.. </button>";
}
function peces () {
   document.getElementById("param-peces").innerHTML="<img src='https://cdn.corenexis.com/f/MnXIe9pB.png' alt='Un cómic sobre el pH, kH y gH explicado simplemente.'>"; 
   document.getElementById("botones-peces").innerHTML="<button type='button' onclick='cerrarPeces()'class='btn btn-outline-dark'> Cerrar </button>";
}
function cerrarPeces () {
    document.getElementById("param-peces").innerHTML="<br>";
    document.getElementById("botones-peces").innerHTML="<button type='button' onclick='peces()' class='btn btn-outline-info'> Lee más.. </button>";
}
