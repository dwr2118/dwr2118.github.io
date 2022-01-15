$(document).ready(function(){

	console.log("hello");

	var myFavoriteBook = "A Raisin in the Sun"
	console.log("My favorite book is " +myFavoriteBook);

	window.onclick = changeBG;

	function changeBG(){
		document.getElementsByClassName("linkBox")[0].style.backgroundColor = "grey";
		document.getElementsByTagName("Body")[0].style.textColor = "pink";
	}

	.onclick = function() {rotateImg()};

	function rotateImg(){
		document.getElementsByClassName("container-img").style.transform = "rotate(45deg)";
	}
});
