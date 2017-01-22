$(document).ready(function () {
  var nameVar = "Martin";
  console.log(nameVar);

  $('.pjs').text("el nombre del flaco es: " + nameVar);

  var html = "<ul><li>El nombre del pibe este es " + nameVar + "</li></ul>";
  $('.parrafojs').html(html);

//Activa o desactiva la clase "collapse" del navbar cuando se hace click en el boton
  $(".navbar-toggle").click(function() {
    //alert("showNav");
    $('.navbar-nav').toggleClass( "collapse" );
  });

$('.dropdown-toggle').click(function (){
  //alert("dropdown");
  $('.dropdown').toggleClass('open');
});


});
