"use strict";
function pageload() {
	var img = document.getElementById("img");
	img.onclick = changeimage;
}
function changeimage() {
	var webimg = document.getElementById("icono1");
	webimg.src = "img/js.png";

}
window.onload = pageload; 