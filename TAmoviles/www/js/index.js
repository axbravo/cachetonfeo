$(document).ready(function() {
  $.ajax({
    //url:"http://10.100.120.225:8888/publicaciones/",
    url:"http://localhost:8889/publicaciones/",
    crossDomain: true,
    dataType: "json",
    success: function (json) {

      alert("success");
      
      $.each( json, function( key, val ) {
        $("#publicaciones").append(val);
      });

      $("#publicaciones").listview('refresh');
    },
    error: function (xhr, status) {
      //TODO: no funciona cuando hay 404!
      alert("Error");
    }
  });
  
  $('#aceptado').click(function(){
    alert("Se guardo exitosamente")
  }
  //$('#oculto').hide();
  
  $('#ejemplo').click(function(){
    //alert('hola desde la función anónima');
    //esta la va a ser la lógica del botón
    
    //$(this).hide();
    $('#oculto').fadeOut('10000');
  });
  
});