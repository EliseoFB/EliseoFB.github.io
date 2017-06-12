/* agregar mapa de cajamarca*/
function myMap() {
	  var myCenter = new google.maps.LatLng(-7.1637800,-78.5002700);
	  var mapCanvas = document.getElementById("map");
	  var mapOptions = {center: myCenter, zoom: 5};
	  var map = new google.maps.Map(mapCanvas, mapOptions);
	  var marker = new google.maps.Marker({position:myCenter});
	  marker.setMap(map);

	  var infowindow = new google.maps.InfoWindow({
	    content: "Cajamarca"
	  });
	  infowindow.open(map,marker);
	}
/*slideshow*/
function pageload() {
	var slideIndex = 1;
	showDivs(slideIndex);

	function plusDivs(n) {
  showDivs(slideIndex += n);
	}

	function currentDiv(n) {
		showDivs(slideIndex = n);
	}
	



function showDivs(n) {
 	var i;
		var x = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("demo");
		if (n > x.length) {slideIndex = 1}    
		if (n < 1) {slideIndex = x.length}
		for (i = 0; i < x.length; i++) {
 	x[i].style.display = "none";  
		}
		for (i = 0; i < dots.length; i++) {
 	dots[i].className = dots[i].className.replace(" w3-red", "");
		}
		x[slideIndex-1].style.display = "block";  
		dots[slideIndex-1].className += " w3-red";
	}
}
window.onload = pageload;