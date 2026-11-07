function neones () {
document.getElementById("historia-neones").innerHTML="<img src='https://cdn.corenexis.com/f/hr6pP4I1oeA.jpg' alt='La historia de unos tetra neones y platies naranjas que encuentran su hogar ideal.' id='historia-neones'>";
document.getElementById("botones").innerHTML="<button type='button' onclick='cerrar()'> Cerrar </button>";
}
function cerrar () {
    document.getElementById("historia-neones").innerHTML="<br>";
    document.getElementById("botones").innerHTML="<button type='button' onclick='neones()'> Lee más.. </button>";
}
function gambitas () {
   document.getElementById("rss-gambitas").innerHTML="<img src='https://cdn.corenexis.com/f/42mZNZDVscI.jpg' alt='Infografía sobre feeds RSS para seguir blogs.' id='feeds-rss'>"; 
   document.getElementById("botones-gambas").innerHTML="<button type='button' onclick='cerrarGambas()'> Cerrar </button>";
}
function cerrarGambas () {
    document.getElementById("rss-gambitas").innerHTML="<br>";
    document.getElementById("botones-gambas").innerHTML="<button type='button' onclick='gambitas()'> Lee más.. </button>";
}