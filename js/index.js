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

function pageload() {
	var inicio = document.getElementById("img1");
	inicio.onclick = onClick;
}
function onClick(element) {
	  document.getElementById("img01").src = element.src;
	  document.getElementById("modal01").style.display = "block";
	  var captionText = document.getElementById("caption");
	  captionText.innerHTML = element.alt;
	}
window.onload = pageload;