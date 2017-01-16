$(document).ready(function () {
  var nameVar = "Martin";
  console.log(nameVar);

  $('.pjs').text("el nombre del flaco es: " + nameVar);

  var html = "<ul><li>El nombre del pibe este es " + nameVar + "</li></ul>";
  $('.parrafojs').html(html);
  console.log(nameVar);
});
