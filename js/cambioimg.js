
function pageload() {
	var img = document.getElementById("img");
	img.onclick = changeimg;
}
function changeimage() {
	var webimg = document.getElementById("icono1");
	webimg.src = "img/js.png";

}
window.onload = pageload;