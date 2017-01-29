$(document).ready(function () {

  var nameVar = "Martin";

  $('.pjs').text("el nombre del flaco es: " + nameVar);

  var html = "<ul><li>El nombre del pibe este es " + nameVar + "</li></ul>";
  $('.parrafojs').html(html);

//Activa o desactiva la clase "collapse" del navbar cuando se hace click en el boton
  $(".navbar-toggle").click(function() {
    //alert("showNav");
    $(".navbar-nav").toggleClass( "collapse" );
  });

  $(".dropdown-toggle").click(function (event){
    event.preventDefault(); //Previene el comportamiento por defecto del browser vuelve la pagina al top por el href=#
    $(".dropdown").toggleClass("open");
  });

  $(".offers-btn").on("click", '.btn-default', function () {
    var amount = $(this).closest('article').data("price");  //Busca el ancenstro mas cercano del boton para pedirle el atributo data-price
    var button = $("<button disabled>Desde $" + amount + " pesos.</button>");
    button.addClass("btn btn-info text-capitalize");
    $(this).parent().prepend(button);
    $(this).remove();
  });

  $(".offers").find(".panel-heading").on("click", "span", function () {
    $(this).closest("article").fadeOut();
  });

});
