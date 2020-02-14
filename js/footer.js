/*This code writes the text and updates the year in the footer section*/
var myVar = setInterval(function() {
  myYear();
}, 50);

function myYear() {
  var d = new Date();
	var  year = d.getFullYear();
  document.getElementById("footer").innerHTML = "Powered by Iya Abubakar institute of ICT &copy;" +year+ " ABU ZARIA";
}




let closeBullet = function(){
  var myClose = document.getElementById("bulletin");

  myClose.classList.toggle("hide");
}

