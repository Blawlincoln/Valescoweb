window.onload = function(){

console.log( "ready!" );
staysong.addEventListener("click", playstay); 
cloud9.addEventListener("click", playcloud); 
alli.addEventListener("click", playall);

//slider.addEventListener("change",sliderfont);

window.onscroll = function() {sticknav()};
}


var size ;

var Headbar = document.getElementById("Headbar");
var sticky = Headbar.offsetTop;



function sticknav() {

  if (window.pageYOffset >= sticky) {
    Headbar.classList.add("sticky")
  } else {
    Headbar.classList.remove("sticky");
  }
}



$('allp').on('click', function () {
	
var music = document.getElementById("all"); 
music.play();
}

$('stayp').on('click', function () {
var music = document.getElementById("stay"); 
music.play();
}
$('cloudp').on('click', function () {
var music = document.getElementById("cloud"); 
music.play();
}


$('input').on('change', function () {
    var v = $(this).val();
    $("#Bio").css('font-size', v + 'px')
    $('span').html(v);
});




