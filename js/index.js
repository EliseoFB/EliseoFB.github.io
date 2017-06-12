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
/* agregar mapa de cajamarca*/

	document.getElementsByClassName("tablink")[0].click();

		function openCity(evt, cityName) {
		  var i, x, tablinks;
				 x = document.getElementsByClassName("city");
				for (i = 0; i < x.length; i++) {
				  x[i].style.display = "none";
					 }
				tablinks = document.getElementsByClassName("tablink");
				for (i = 0; i < x.length; i++) {
					tablinks[i].classList.remove("w3-light-grey");
					 }
				 document.getElementById(cityName).style.display = "block";
				evt.currentTarget.classList.add("w3-light-grey");
				}
			