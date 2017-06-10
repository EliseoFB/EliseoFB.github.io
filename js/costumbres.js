function pageload() {
	var inicio = document.getElementById("inicio");
	inicio.onclick = myFunction;
}
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}
window.onload = pageload;