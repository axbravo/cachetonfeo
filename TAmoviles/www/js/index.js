$(document).ready(function() {
  $.ajax({
    //url:"http://10.100.120.225:8888/publicaciones/",
    url:"http://localhost:8889/publicaciones/",
    crossDomain: true,
    dataType: "json"
    /*,function (json) {
      alert("success");
      
      $.each( json, function( key, val ) {
        $("#publicaciones").append('<p>'+val[key]+'</p>');


      });

      $("#publicaciones").listview('refresh');
    }*/
  }).done(function(json){
      var arr = jQuery.makeArray(json);
      console.log(arr[0]);

      for ( var i=1; i<arr.length; i++){
           var dato = arr[i].fechaPartida;
           var fechaPartida = dato.text; 

           var dato = arr[i].lugarEncuentro;
           var lugarEncuentro = dato.text; 

           var dato = arr[i].descripcion;
           var descripcion = dato.text; 
           $("#parrafo").value=arr[i].descripcion.toString();

           var dato = arr[i].lugarDestino;
           var lugarDestino = dato.text; 

           var dato = arr[i].precio;
           var precio = dato.text; 

           $("#publicaciones").append('<table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>'+arr[i].fechaPartida.toString()+'</td><td>'+arr[i].lugarEncuentro.toString()+'</td></tr><tr><td>'+arr[i].descripcion.toString()+ '</td><td>'+arr[i].lugarDestino.toString()+'</td></tr><tr><td>'+arr[i].descripcion.toString()+'</td></tr></tbody></table>');
      }

      $("#publicaciones").listview('refresh');

    });
  
 }); 