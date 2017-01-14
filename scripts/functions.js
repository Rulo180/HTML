$(document).ready(function () {
  var nameVar = "Martin";
  console.log(nameVar);

  $('.pjs').text("el nombre del flaco es: " + nameVar);

  var html = "<p>El nombre del flaco este es " + nameVar + "</p>";
  $('.parrafojs').html(html);
  console.log(nameVar);
});
